// ==UserScript==
// @name        (MSIN+) db.msin.jp improved
// @description Check the Porn code to MISSAV and Sukebei if it exist.
// @namespace   https://github.com/KememChan
// @author      KememChan
// @match       https://db.msin.jp/*
// @require     http://code.jquery.com/jquery-3.1.0.slim.min.js
// @grant       GM_xmlhttpRequest
// @run-at      document-end
// @version     1.0.2
// ==/UserScript==

// Remove fucking Title
$(".movie_title").remove();

$("span.movie_fileName").remove();
$("body").after(
  `<script>function copyToClipboard(element) {var $temp = $("<input>");$("body").append($temp);$temp.val($(element).text()).select();document.execCommand("copy");$temp.remove();}</script>`
);
$("head").append(
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">'
);

let birth = $("span.mv_barth");
if (birth.length) {
  var birthYear = birth.text().split("-")[0];
}

$(".movie_create").before(
  `<div class='sukebei'><a class='loading'>Sukebei Loading...</a></div>`
);
var codeArray = [];
var x = 0;
var row = $("div.movie_info");
$(row).each(function () {
  // TO DO REFACTOR THIS TO NOT USE EACH FUNC
  if (birthYear != null) {
    let videoCreated = $(this).find("div.movie_create");
    let videoCreatedYear = videoCreated.text().split("-")[0];
    let sumHerAge = videoCreatedYear - birthYear;
    videoCreated.children("a").append(`(${sumHerAge} Years Old)`);
  }

  let kurung = $(this).find("span.movie_pn").parent().parent();
  if (kurung.length) {
    kurung.html(kurung.html().replace(/[\(\)]+/g, ""));
  }
  var code = $(this).find(".movie_pn");
  code.html(code.text().replace("_", "-"));
  code.html(code.text().toUpperCase());
  code = $(this).find(".movie_pn");
  let match = /^(carib|caribpr|1pon|paco)+-(\d.+)/gi;
  let hasil = match.exec(code.html());
  match.test(code.html()); // if i didnt add this the fucking if test will not working bruh...
  var codeUrl;
  if (match.test(code.html())) {
    codeUrl = hasil[2];
    codeArray.push(hasil[2]);
  } else {
    codeUrl = code.html();
    codeArray.push(code.html());
  }

  code.replaceWith('<a class="movie_pn">' + code.html() + "</a>");
  code = $(this).find(".movie_pn");
  code.attr(`id`, `${x}`).attr;
  code.after(
    `<a class="fa-regular fa-copy" onclick="copyToClipboard('#${x}')" style="margin-left: 5px;"></a>`
  );
  var missav = `https://missav.com/en/search/${codeUrl}`;

  const fc2 = /^(FC2-PPV)+-(\d.+)/i;
  if (fc2.test(codeUrl)) {
    codeUrl = fc2.exec(codeUrl)[2];
  }
  // add javstore button
  $(this)
    .find(".loading")
    .before(
      `<a href='https://img.javstore.net/search/images/?q="${codeUrl}"' target="_blank"><img src="https://img.javstore.net/content/images/system/default/favicon.png" width='17' height='17'></img></a>`
    );

  GM_xmlhttpRequest({
    method: "GET",
    url: missav,
    onload: (response) => {
      let grid = $(response.responseText).find("div.grid div.relative");
      if (grid.length) {
        code
          .css("color", "#fe628e")
          .css("font-size", "large")
          .css("font-weight", "600")
          .attr(`href`, missav)
          .attr(`target`, "_blank");
        $(this).find("div.movie_image").removeClass("unsubscribe_image");
      } else {
        $(this).find("div.movie_image").addClass("unsubscribe_image");
      }
    },
  });
  x++;
});

function getSukebei(codeArray) {
  let codes = "";
  for (const code of codeArray) {
    codes += `"${code}"` + "|";
  }
  codes = codes.slice(0, -1);
  let sukebeis = `https://sukebei.nyaa.si/?q=${codes}&s=seeders&o=desc`;

  GM_xmlhttpRequest({
    method: "GET",
    url: sukebeis,
    onload: (response) => {
      codeArray.forEach((code) => {
        const movie_info = $(`div.movie_info:contains('${code}')`);
        const loading = movie_info.find(".loading");
        const movie_img = movie_info.find("div.movie_image");

        const containCode = $(response.responseText).find(
          `td:contains("${code}")`
        );
        if (containCode.length) {
          let torrent =
            "https://sukebei.nyaa.si/" +
            containCode
              .first()
              .parent()
              .find("i.fa-download")
              .parent()
              .attr("href");
          let magnet = containCode
            .first()
            .parent()
            .find("i.fa-magnet")
            .parent()
            .attr("href");
          let seedsNumber = containCode
            .first()
            .parent()
            .children()
            .eq(-3)
            .text();

          loading.after(`
          <a href='https://sukebei.nyaa.si/?q=${code}&s=seeders&o=desc' target='_blank'>
            <img src='https://sukebei.nyaa.si/static/favicon.png' width='17' height='17'></img>
          </a>
          <a class="fa fa-fw fa-download" href='${torrent}'></a>
          <a class="fa fa-fw fa-magnet" href='${magnet}'></a>
          <a style='color: lawngreen; font-size: large; font-weight: 600;' >${seedsNumber}</a>
          `);
          movie_img.removeClass("unsubscribe_image");

          console.log(code + " Found on Sukebei :)");
        } else {
          console.log(code + " Not Found on Sukebei :(");
        }
        loading.remove();
      });
    },
  });
}

getSukebei(codeArray);
