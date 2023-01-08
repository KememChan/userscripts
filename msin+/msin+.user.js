// ==UserScript==
// @name        (MSIN+) db.msin.jp improved
// @description Check the Porn code to MISSAV and Sukebei if it exist.
// @namespace   https://github.com/KememChan
// @author      KememChan
// @match       https://db.msin.jp/*
// @require     http://code.jquery.com/jquery-3.1.0.slim.min.js
// @grant       GM_xmlhttpRequest
// @run-at      document-end
// @version     1.0.6
// ==/UserScript==

// make jquery:contains case insensitive
$.expr[":"].contains = $.expr.createPseudo(function (arg) {
  return function (elem) {
    return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
  };
});

function RemoveAndAddStuff() {
  // set cookie
  document.cookie = "config_view=filename%2Cunsubscribe%2Cacttag%2Cacttagd%2Cactrank%2C_blank%2Cactview%2Csampleview"
  // Remove fucking Title
  $(".movie_title").remove();
  // Remove movie code on domestic site that is not actually work
  $("span.movie_fileName").remove();
  // add copyToClipboard function
  $("body").after(
    `<script>function copyToClipboard(element) {var $temp = $("<input>");$("body").append($temp);$temp.val($(element).text()).select();document.execCommand("copy");$temp.remove();}</script>`
  );
  // add font-awesome for icon
  $("head").append(
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">'
  );
}

function checkMoviePage() {
  const currentUrl = window.location.href;
  const regex = /.*page\/movie.*/i;
  const testResult = regex.test(currentUrl);
  return testResult;
}

function removeDuplicatesArray(arr) {
  return [...new Set(arr)];
}

function getCodes(selector) {
  const codesElement = $(selector);
  let regex = /^(carib|caribpr|1pon|paco|10mu)+-(\d.+)/i;
  let codes = [];

  for (const codeElement of codesElement) {
    let code = $(codeElement).text();
    const regexTest = regex.test(code);
    if (regexTest) {
      code = regex.exec(code)[2];
    }
    codes.push(code);
  }
  return codes;
}

function javstoreButton(codes, isMoviePage) {
  for (let code of codes) {
    const movie_info = $(`.movie_info:contains('${code}')`);
    // remove () on domestic site
    const kurung = movie_info.find(".movie_pn").parent().parent();
    if (kurung.length) {
      kurung.html(kurung.html().replace(/[\(\)]+/g, ""));
    }

    const movie_create = movie_info.find(".movie_create");
    movie_create.before(` <div class='msin'> `);
    let msin;
    msin = movie_info.find(".msin");
    if (isMoviePage == true) {
      $(".mv_fileName").after(` <div class='msin'> `);
      msin = $(".msin");
    }
    // regex fc2-ppv only return the number
    const regex = /^(fc2-ppv)+-(\d.+)/i;
    const regexTest = regex.test(code);
    if (regexTest) {
      code = regex.exec(code)[2];
    }
    msin.append(
      `<a href='https://img.javstore.net/search/images/?q="${code}"' target="_blank"><img src="https://img.javstore.net/content/images/system/default/favicon.png" width='17' height='17'></img></a>`
    );
  }
}

async function makeGetRequest(url) {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: "GET",
      url: url,
      onload: function (response) {
        resolve(response.responseText);
      },
      onerror: function (error) {
        reject(error);
      },
    });
  });
}

async function getSukebei(codesArray, isMoviePage) {
  // add Loading indicator
  $(".msin").append(`<a class='loading'>Sukebei Loading...</a>`);
  // make codes list to "code|code|..."
  let codes = "";
  for (const code of codesArray) {
    codes += `"${code}"` + "|";
  }
  codes = codes.slice(0, -1);
  const sukebeis = `https://sukebei.nyaa.si/?q=${codes}&s=seeders&o=desc`;
  console.log(sukebeis);

  // TO DO request on sukebei on all page if its more than 1 page
  const response = await makeGetRequest(sukebeis);

  codesArray.forEach((code) => {
    let msin;
    let movie_img;
    let movie_info;
    if (isMoviePage == false) {
      movie_info = $(`div.movie_info:contains('${code}')`);
      msin = movie_info.find(".msin");
      movie_img = movie_info.find("div.movie_image");
    } else if (isMoviePage == true) {
      movie_img = $(".movie_image_ditail").children().first();
      msin = $(".msin");
    }

    const containCode = $(response).find(`tr:contains("${code}")`).first();
    if (containCode.length) {
      const torrent =
        "https://sukebei.nyaa.si/" +
        containCode.find("i.fa-download").parent().attr("href");
      const magnet = containCode.find("i.fa-magnet").parent().attr("href");
      const seedsNumber = containCode.children().eq(-3).text();

      msin.append(`
      <a href='https://sukebei.nyaa.si/?q=${code}&s=seeders&o=desc' target='_blank'>
        <img src='https://sukebei.nyaa.si/static/favicon.png' width='17' height='17'></img>
      </a>
      <a class="fa fa-fw fa-download" href='${torrent}'></a>
      <a class="fa fa-fw fa-magnet" href='${magnet}'></a>
      <a class='seedsNumber' style='color: lawngreen; font-size: large; font-weight: 600;' >${seedsNumber}</a>
      `);

      movie_img.removeClass("unsubscribe_image");
      // console.log(code + " Found on Sukebei :)");
    } else {
      if (isMoviePage == false) {
        const found = movie_info.find(".movie_code.found");
        if (found.length == 0) {
          movie_img.addClass("unsubscribe_image");
        }
      }
      // console.log(code + " Not Found on Sukebei :(");
    }
  });
  // remove loading after finish loading
  $(".loading").remove();
}

async function getMissAV(codes, isMoviePage, codeSelector) {
  let x = 1;
  for (let code of codes) {
    let movie_pn;
    let movie_img;
    if (isMoviePage == false) {
      const movie_info = $(`.movie_info:contains('${code}')`);
      movie_pn = movie_info.find(codeSelector);
      movie_img = movie_info.find("div.movie_image");
    }
    if (isMoviePage == true) {
      movie_pn = $(".mv_fileName");
      movie_img = $(".movie_image_ditail").children().first();
    }
    // change div.movie_pn to a.movie_pn
    movie_pn.replaceWith(
      '<a class="movie_code">' + movie_pn.first().text() + "</a>"
    );
    const movie_code = $(`.movie_code:contains('${code}')`);

    // add id x to movie_code element for copy function
    movie_code.attr(`id`, `${x}`).attr;
    movie_code.after(
      `<a class="fa-regular fa-copy" onclick="copyToClipboard('#${x}')" style="margin-left: 5px;"></a>`
    );

    const missavUrl = `https://missav.com/en/search/${code}`;

    // const response = await makeGetRequest(missavUrl);
    // const grid = $(response).find("div.grid div.relative");
    // if (grid.length) {
    //   movie_code.html(movie_code.html().toUpperCase());
    //   movie_code
    //     .css("color", "#fe628e")
    //     .css("font-size", "large")
    //     .css("font-weight", "600")
    //     .attr(`href`, missavUrl)
    //     .attr(`target`, "_blank");
    //   movie_img.removeClass("unsubscribe_image");
    // } else {
    //   movie_img.addClass("unsubscribe_image");
    // }

    GM_xmlhttpRequest({
      method: "GET",
      url: missavUrl,
      onload: (response) => {
        const grid = $(response.responseText).find("div.grid div.relative");
        if (grid.length) {
          movie_code.addClass("found");
          movie_code.html(movie_code.html().toUpperCase());
          movie_code
            .css("color", "#fe628e")
            .css("font-size", "large")
            .css("font-weight", "600")
            .attr(`href`, missavUrl)
            .attr(`target`, "_blank");
          movie_img.removeClass("unsubscribe_image");
        } else {
          movie_img.addClass("unsubscribe_image");
        }
      },
    });

    x++;
  }
}

function swapCode(selector) {
  const mv_pn = $(".mv_pn");
  if (mv_pn.length) {
    $(selector).text(mv_pn.text());
  }
}

async function main() {
  RemoveAndAddStuff();
  const isMoviePage = checkMoviePage();
  let selector = ".movie_pn";
  if (isMoviePage) {
    selector = ".mv_fileName";
    swapCode(selector);
  }
  let codes = getCodes(selector);
  codes = removeDuplicatesArray(codes);
  javstoreButton(codes, isMoviePage);
  getMissAV(codes, isMoviePage, selector);
  await getSukebei(codes, isMoviePage);
}

main();
