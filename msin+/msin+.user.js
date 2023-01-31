// ==UserScript==
// @name         (MSIN+) db.msin.jp improved
// @namespace    https://github.com/KememChan
// @version      1.2.1
// @author       KememChan
// @description  Check the Porn code to MISSAV and Sukebei if it exist.
// @icon         https://db.msin.jp/favicon.ico
// @match        https://db.msin.jp/*page/*
// @match        https://db.msin.jp/*search/*
// @match        https://db.msin.jp/*ranking/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js
// @grant        GM.xmlHttpRequest
// @grant        GM_addElement
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(t=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.innerText=t,document.head.appendChild(e)})(":root{--font-size:1em}video.svelte-1mz2a9g.svelte-1mz2a9g{width:100%}.hidden.svelte-1mz2a9g.svelte-1mz2a9g{display:none}.link.svelte-1mz2a9g.svelte-1mz2a9g{height:1.2rem;margin-top:.2rem;padding:5px;background-color:#6c738033;display:flex;gap:5px;justify-content:center}.movie_desc.svelte-1mz2a9g.svelte-1mz2a9g{font-size:var(--font-size);font-family:Century Gothic,CenturyGothic,Geneva,AppleGothic,sans-serif;font-weight:700;text-align:center}.rounded.svelte-1mz2a9g.svelte-1mz2a9g{border-radius:5px}img.svelte-1mz2a9g.svelte-1mz2a9g{height:100%}.movie_thumbnail.svelte-1mz2a9g.svelte-1mz2a9g{aspect-ratio:16 / 9;background:#0b0e14;overflow:hidden;text-align:center;display:flex;justify-content:center}a.svelte-1mz2a9g.svelte-1mz2a9g{color:#bfbdb6;text-decoration:none;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.movie_desc.svelte-1mz2a9g>.svelte-1mz2a9g:hover{color:#ff8c00}.movie.svelte-1mz2a9g.svelte-1mz2a9g{background:#0d1017;display:flex;flex-direction:column}.movie_desc.svelte-1mz2a9g.svelte-1mz2a9g{display:grid;padding:.5rem}.movie_code.svelte-1mz2a9g.svelte-1mz2a9g{color:#bfbdb6;font-size:calc(var(--font-size) + .2em)}.movie_actress.svelte-1mz2a9g.svelte-1mz2a9g{color:#39bae6}@media screen and (min-width: 1400px){:root{--font-size:.8rem}}@media screen and (min-width: 1700px){:root{--font-size:.9rem}}.movie_grid.svelte-17uligy{--grid-count:auto-fit;margin:1rem 0;display:grid;grid-template-columns:repeat(var(--grid-count),minmax(min(200px,100%),1fr));gap:1rem}@media screen and (max-width: 500px){.movie_grid.svelte-17uligy{--grid-count:1}}@media screen and (min-width: 1600px){.movie_grid.svelte-17uligy{--grid-count:6}}");

var __plugin_monkey_exposed = function($2) {
  "use strict";
  function noop() {
  }
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  let src_url_equal_anchor;
  function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
      src_url_equal_anchor = document.createElement("a");
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.wholeText !== data)
      text2.data = data;
  }
  function toggle_class(element2, name, toggle) {
    element2.classList[toggle ? "add" : "remove"](name);
  }
  let current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  const dirty_components = [];
  const binding_callbacks = [];
  const render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = Promise.resolve();
  let update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  const seen_callbacks = /* @__PURE__ */ new Set();
  let flushidx = 0;
  function flush() {
    if (flushidx !== 0) {
      return;
    }
    const saved_component = current_component;
    do {
      try {
        while (flushidx < dirty_components.length) {
          const component = dirty_components[flushidx];
          flushidx++;
          set_current_component(component);
          update(component.$$);
        }
      } catch (e) {
        dirty_components.length = 0;
        flushidx = 0;
        throw e;
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  const outroing = /* @__PURE__ */ new Set();
  let outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
      // parent group
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  function get_spread_update(levels, updates) {
    const update2 = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n))
            to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update2[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update2))
        update2[key] = void 0;
    }
    return update2;
  }
  function get_spread_object(spread_props) {
    return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
        if (component.$$.on_destroy) {
          component.$$.on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      // state
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }
    set_current_component(parent_component);
  }
  class SvelteComponent {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }
  var monkeyWindow = window;
  var GM_addElement = /* @__PURE__ */ (() => monkeyWindow.GM_addElement)();
  var GM_addStyle = /* @__PURE__ */ (() => monkeyWindow.GM_addStyle)();
  var GM_xmlhttpRequest = /* @__PURE__ */ (() => monkeyWindow.GM_xmlhttpRequest)();
  const xmlhttpRequest = /* @__PURE__ */ (() => {
    return monkeyWindow.GM_xmlhttpRequest ?? monkeyWindow.GM.xmlHttpRequest;
  })();
  const fixUrl = (url = "") => {
    try {
      return url === "" && location.href ? location.href : url;
    } catch {
      return url;
    }
  };
  const delay = async (n = 0) => new Promise((res) => {
    setTimeout(res, n);
  });
  const parseHeaders = (rawHeaders = "") => {
    const headers = new Headers();
    const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    preProcessedHeaders.split("\r").map(function(header) {
      return header.startsWith(`
`) ? header.substring(1) : header;
    }).forEach(function(line) {
      var _a;
      let parts = line.split(":");
      let key = (_a = parts.shift()) == null ? void 0 : _a.trim();
      if (key) {
        let value = parts.join(":").trim();
        headers.append(key, value);
      }
    });
    return headers;
  };
  const GM_fetch = async (input, init2 = {}) => {
    const request = new Request(input, init2);
    if (request.signal && request.signal.aborted) {
      throw new DOMException("Aborted", "AbortError");
    }
    let data = await request.text();
    let binary = true;
    const headers = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });
    new Headers(init2.headers).forEach((value, key) => {
      headers[key] = value;
    });
    return new Promise((resolve, reject) => {
      var _a;
      const handle = xmlhttpRequest({
        method: request.method.toUpperCase(),
        url: fixUrl(request.url),
        headers,
        data,
        binary,
        responseType: "blob",
        async onload(e) {
          await delay();
          const resp = new Response(e.response ?? e.responseText, {
            status: e.status,
            statusText: e.statusText,
            headers: parseHeaders(e.responseHeaders)
          });
          Object.defineProperty(resp, "url", { value: e.finalUrl });
          resolve(resp);
        },
        async onerror() {
          await delay();
          reject(new TypeError("Network request failed"));
        },
        async ontimeout() {
          await delay();
          reject(new TypeError("Network request failed"));
        },
        async onabort() {
          await delay();
          reject(new DOMException("Aborted", "AbortError"));
        },
        async onreadystatechange(response) {
          var _a2;
          if (response.readyState === 4) {
            (_a2 = request.signal) == null ? void 0 : _a2.removeEventListener("abort", abortXhr);
          }
        }
      });
      function abortXhr() {
        handle.abort();
      }
      (_a = request.signal) == null ? void 0 : _a.addEventListener("abort", abortXhr);
    });
  };
  const _Content_svelte_svelte_type_style_lang = "";
  function create_fragment$2(ctx) {
    let div3;
    let div0;
    let video;
    let t0;
    let img;
    let img_src_value;
    let t1;
    let div2;
    let a0;
    let t2;
    let t3;
    let a1;
    let t4;
    let t5;
    let a2;
    let t6;
    let t7;
    let a3;
    let t8;
    let t9;
    let a4;
    let t10;
    let t11;
    let a5;
    let t12;
    let t13;
    let div1;
    let mounted;
    let dispose;
    return {
      c() {
        div3 = element("div");
        div0 = element("div");
        video = element("video");
        t0 = space();
        img = element("img");
        t1 = space();
        div2 = element("div");
        a0 = element("a");
        t2 = text(
          /*movieCode*/
          ctx[1]
        );
        t3 = space();
        a1 = element("a");
        t4 = text(
          /*movieDate*/
          ctx[2]
        );
        t5 = space();
        a2 = element("a");
        t6 = text(
          /*movieTitle*/
          ctx[5]
        );
        t7 = space();
        a3 = element("a");
        t8 = text(
          /*mfr*/
          ctx[3]
        );
        t9 = space();
        a4 = element("a");
        t10 = text(
          /*movieMaker*/
          ctx[4]
        );
        t11 = space();
        a5 = element("a");
        t12 = text(
          /*name*/
          ctx[6]
        );
        t13 = space();
        div1 = element("div");
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        attr(video, "class", "svelte-1mz2a9g");
        toggle_class(
          video,
          "hidden",
          /*hidden*/
          ctx[15] === true
        );
        if (!src_url_equal(img.src, img_src_value = /*thumbnail*/
        ctx[0]))
          attr(img, "src", img_src_value);
        attr(img, "loading", "lazy");
        attr(img, "alt", "thumbnail image");
        attr(img, "class", "svelte-1mz2a9g");
        toggle_class(
          img,
          "hidden",
          /*hidden*/
          ctx[15] === false
        );
        attr(div0, "class", "movie_thumbnail rounded text-center width-ratio svelte-1mz2a9g");
        attr(
          a0,
          "href",
          /*movieCodeUrl*/
          ctx[7]
        );
        attr(a0, "class", "movie_code svelte-1mz2a9g");
        attr(
          a1,
          "href",
          /*movieDateUrl*/
          ctx[8]
        );
        attr(a1, "class", "movie_date svelte-1mz2a9g");
        attr(
          a2,
          "href",
          /*movieTitleUrl*/
          ctx[11]
        );
        attr(a2, "class", "movie_title svelte-1mz2a9g");
        attr(
          a3,
          "href",
          /*mfrUrl*/
          ctx[9]
        );
        attr(a3, "class", "mfr svelte-1mz2a9g");
        attr(
          a4,
          "href",
          /*movieMakerUrl*/
          ctx[10]
        );
        attr(a4, "class", "movie_maker svelte-1mz2a9g");
        attr(
          a5,
          "href",
          /*nameUrl*/
          ctx[12]
        );
        attr(a5, "class", "movie_actress svelte-1mz2a9g");
        attr(div1, "class", "link rounded svelte-1mz2a9g");
        attr(div2, "class", "movie_desc svelte-1mz2a9g");
        attr(div3, "class", "movie rounded svelte-1mz2a9g");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div0, video);
        append(div0, t0);
        append(div0, img);
        ctx[20](div0);
        append(div3, t1);
        append(div3, div2);
        append(div2, a0);
        append(a0, t2);
        ctx[21](a0);
        append(div2, t3);
        append(div2, a1);
        append(a1, t4);
        append(div2, t5);
        append(div2, a2);
        append(a2, t6);
        append(div2, t7);
        append(div2, a3);
        append(a3, t8);
        append(div2, t9);
        append(div2, a4);
        append(a4, t10);
        append(div2, t11);
        append(div2, a5);
        append(a5, t12);
        append(div2, t13);
        append(div2, div1);
        if (!mounted) {
          dispose = [
            listen(
              div0,
              "mouseenter",
              /*setPreview*/
              ctx[16]
            ),
            listen(
              div0,
              "mouseleave",
              /*unSetPreview*/
              ctx[17]
            ),
            listen(
              div0,
              "keydown",
              /*setPreview*/
              ctx[16]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*hidden*/
        32768) {
          toggle_class(
            video,
            "hidden",
            /*hidden*/
            ctx2[15] === true
          );
        }
        if (dirty & /*thumbnail*/
        1 && !src_url_equal(img.src, img_src_value = /*thumbnail*/
        ctx2[0])) {
          attr(img, "src", img_src_value);
        }
        if (dirty & /*hidden*/
        32768) {
          toggle_class(
            img,
            "hidden",
            /*hidden*/
            ctx2[15] === false
          );
        }
        if (dirty & /*movieCode*/
        2)
          set_data(
            t2,
            /*movieCode*/
            ctx2[1]
          );
        if (dirty & /*movieCodeUrl*/
        128) {
          attr(
            a0,
            "href",
            /*movieCodeUrl*/
            ctx2[7]
          );
        }
        if (dirty & /*movieDate*/
        4)
          set_data(
            t4,
            /*movieDate*/
            ctx2[2]
          );
        if (dirty & /*movieDateUrl*/
        256) {
          attr(
            a1,
            "href",
            /*movieDateUrl*/
            ctx2[8]
          );
        }
        if (dirty & /*movieTitle*/
        32)
          set_data(
            t6,
            /*movieTitle*/
            ctx2[5]
          );
        if (dirty & /*movieTitleUrl*/
        2048) {
          attr(
            a2,
            "href",
            /*movieTitleUrl*/
            ctx2[11]
          );
        }
        if (dirty & /*mfr*/
        8)
          set_data(
            t8,
            /*mfr*/
            ctx2[3]
          );
        if (dirty & /*mfrUrl*/
        512) {
          attr(
            a3,
            "href",
            /*mfrUrl*/
            ctx2[9]
          );
        }
        if (dirty & /*movieMaker*/
        16)
          set_data(
            t10,
            /*movieMaker*/
            ctx2[4]
          );
        if (dirty & /*movieMakerUrl*/
        1024) {
          attr(
            a4,
            "href",
            /*movieMakerUrl*/
            ctx2[10]
          );
        }
        if (dirty & /*name*/
        64)
          set_data(
            t12,
            /*name*/
            ctx2[6]
          );
        if (dirty & /*nameUrl*/
        4096) {
          attr(
            a5,
            "href",
            /*nameUrl*/
            ctx2[12]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div3);
        ctx[20](null);
        ctx[21](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance$1($$self, $$props, $$invalidate) {
    let { thumbnail } = $$props;
    let { movieCode } = $$props;
    let { missAVCode } = $$props;
    let { sukebeiCode } = $$props;
    let { movieDate } = $$props;
    let { mfr } = $$props;
    let { movieMaker } = $$props;
    let { movieTitle } = $$props;
    let { name } = $$props;
    let { movieCodeUrl } = $$props;
    let { movieDateUrl } = $$props;
    let { mfrUrl } = $$props;
    let { movieMakerUrl } = $$props;
    let { movieTitleUrl } = $$props;
    let { nameUrl } = $$props;
    let preview, code;
    onMount(() => {
      code.setAttribute("missavcode", missAVCode);
      code.setAttribute("sukebeicode", sukebeiCode);
    });
    let hidden = true;
    async function setPreview() {
      if (!code.getAttribute("preview")) {
        return;
      }
      if (!preview.querySelector("video").getAttribute("src")) {
        const url = code.getAttribute("preview");
        const resp = await GM_fetch(url, {
          headers: { referer: "https://missav.com/en" }
        });
        const blob = await resp.blob();
        const previewUrl = URL.createObjectURL(blob);
        preview.querySelector("video").setAttribute("src", previewUrl);
      }
      $$invalidate(15, hidden = false);
    }
    function unSetPreview() {
      $$invalidate(15, hidden = true);
    }
    function div0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        preview = $$value;
        $$invalidate(13, preview);
      });
    }
    function a0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        code = $$value;
        $$invalidate(14, code);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("thumbnail" in $$props2)
        $$invalidate(0, thumbnail = $$props2.thumbnail);
      if ("movieCode" in $$props2)
        $$invalidate(1, movieCode = $$props2.movieCode);
      if ("missAVCode" in $$props2)
        $$invalidate(18, missAVCode = $$props2.missAVCode);
      if ("sukebeiCode" in $$props2)
        $$invalidate(19, sukebeiCode = $$props2.sukebeiCode);
      if ("movieDate" in $$props2)
        $$invalidate(2, movieDate = $$props2.movieDate);
      if ("mfr" in $$props2)
        $$invalidate(3, mfr = $$props2.mfr);
      if ("movieMaker" in $$props2)
        $$invalidate(4, movieMaker = $$props2.movieMaker);
      if ("movieTitle" in $$props2)
        $$invalidate(5, movieTitle = $$props2.movieTitle);
      if ("name" in $$props2)
        $$invalidate(6, name = $$props2.name);
      if ("movieCodeUrl" in $$props2)
        $$invalidate(7, movieCodeUrl = $$props2.movieCodeUrl);
      if ("movieDateUrl" in $$props2)
        $$invalidate(8, movieDateUrl = $$props2.movieDateUrl);
      if ("mfrUrl" in $$props2)
        $$invalidate(9, mfrUrl = $$props2.mfrUrl);
      if ("movieMakerUrl" in $$props2)
        $$invalidate(10, movieMakerUrl = $$props2.movieMakerUrl);
      if ("movieTitleUrl" in $$props2)
        $$invalidate(11, movieTitleUrl = $$props2.movieTitleUrl);
      if ("nameUrl" in $$props2)
        $$invalidate(12, nameUrl = $$props2.nameUrl);
    };
    return [
      thumbnail,
      movieCode,
      movieDate,
      mfr,
      movieMaker,
      movieTitle,
      name,
      movieCodeUrl,
      movieDateUrl,
      mfrUrl,
      movieMakerUrl,
      movieTitleUrl,
      nameUrl,
      preview,
      code,
      hidden,
      setPreview,
      unSetPreview,
      missAVCode,
      sukebeiCode,
      div0_binding,
      a0_binding
    ];
  }
  class Content extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$1, create_fragment$2, safe_not_equal, {
        thumbnail: 0,
        movieCode: 1,
        missAVCode: 18,
        sukebeiCode: 19,
        movieDate: 2,
        mfr: 3,
        movieMaker: 4,
        movieTitle: 5,
        name: 6,
        movieCodeUrl: 7,
        movieDateUrl: 8,
        mfrUrl: 9,
        movieMakerUrl: 10,
        movieTitleUrl: 11,
        nameUrl: 12
      });
    }
  }
  function MovieElement() {
    let movies2 = [];
    const regex = /^(carib|caribpr|1pon|10mu|paco)+-(\d.+)/i;
    const pacomama = /^(paco)+-(\d.+)/i;
    const movie_infos = $2(".movie_info");
    for (const movie_info of movie_infos) {
      let movie_code = $2(movie_info).find(".movie_pn").text().toUpperCase();
      if (regex.test(movie_code)) {
        movie_code = regex.exec(movie_code)[2];
      }
      let sukebeiCode = movie_code;
      if (pacomama.test(sukebeiCode)) {
        sukebeiCode = pacomama.exec(sukebeiCode)[2];
      }
      let name = $2(movie_info).find(".movie_artist").children().children();
      if (name.length === 0) {
        name = "No Name";
      } else {
        name = name.text();
      }
      const movie = {
        thumbnail: $2(movie_info).find("img").attr("src"),
        movieCode: $2(movie_info).find(".movie_pn").text().toUpperCase(),
        missAVCode: movie_code,
        sukebeiCode,
        movieCodeUrl: $2(movie_info).find(".movie_title").children().attr("href"),
        movieDate: $2(movie_info).find(".movie_create").children().text(),
        movieDateUrl: $2(movie_info).find(".movie_create").children().attr("href"),
        mfr: $2(movie_info).find(".movie_mfr").children().text(),
        mfrUrl: $2(movie_info).find(".movie_mfr").children().attr("href"),
        movieMaker: $2(movie_info).find(".movie_writer").children().text(),
        movieMakerUrl: $2(movie_info).find(".movie_writer").children().attr("href"),
        name,
        nameUrl: $2(movie_info).find(".movie_artist").children().children().attr("href"),
        movieTitle: $2(movie_info).find(".movie_title").children().text(),
        movieTitleUrl: $2(movie_info).find(".movie_title").children().attr("href")
      };
      movies2.push(movie);
    }
    return movies2;
  }
  const _Movies_svelte_svelte_type_style_lang = "";
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    return child_ctx;
  }
  function create_else_block(ctx) {
    let p;
    return {
      c() {
        p = element("p");
        p.textContent = "loading...";
      },
      m(target, anchor) {
        insert(target, p, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(p);
      }
    };
  }
  function create_each_block(ctx) {
    let content;
    let current;
    const content_spread_levels = [
      /*movie*/
      ctx[1]
    ];
    let content_props = {};
    for (let i = 0; i < content_spread_levels.length; i += 1) {
      content_props = assign(content_props, content_spread_levels[i]);
    }
    content = new Content({ props: content_props });
    return {
      c() {
        create_component(content.$$.fragment);
      },
      m(target, anchor) {
        mount_component(content, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const content_changes = dirty & /*movies*/
        1 ? get_spread_update(content_spread_levels, [get_spread_object(
          /*movie*/
          ctx2[1]
        )]) : {};
        content.$set(content_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(content.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(content.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(content, detaching);
      }
    };
  }
  function create_fragment$1(ctx) {
    let div;
    let current;
    let each_value = (
      /*movies*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    let each_1_else = null;
    if (!each_value.length) {
      each_1_else = create_else_block();
    }
    return {
      c() {
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        if (each_1_else) {
          each_1_else.c();
        }
        attr(div, "class", "movie_grid svelte-17uligy");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
        if (each_1_else) {
          each_1_else.m(div, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & /*movies*/
        1) {
          each_value = /*movies*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
          if (!each_value.length && each_1_else) {
            each_1_else.p(ctx2, dirty);
          } else if (!each_value.length) {
            each_1_else = create_else_block();
            each_1_else.c();
            each_1_else.m(div, null);
          } else if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
        if (each_1_else)
          each_1_else.d();
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let movies2 = [];
    onMount(() => {
      $$invalidate(0, movies2 = MovieElement());
    });
    return [movies2];
  }
  class Movies extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment$1, safe_not_equal, {});
    }
  }
  function create_fragment(ctx) {
    let main;
    let movies2;
    let current;
    movies2 = new Movies({});
    return {
      c() {
        main = element("main");
        create_component(movies2.$$.fragment);
      },
      m(target, anchor) {
        insert(target, main, anchor);
        mount_component(movies2, main, null);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(movies2.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(movies2.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(main);
        destroy_component(movies2);
      }
    };
  }
  class App extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment, safe_not_equal, {});
    }
  }
  function MissAV(movies2) {
    for (const movie of movies2) {
      const code = $2(movie).find(".movie_code");
      const missavUrl = `https://missav.com/en/search/${code.attr("missavcode")}`;
      GM_xmlhttpRequest({
        url: missavUrl,
        onload(response) {
          const grid = $2(response.responseText).find("div.grid div.relative");
          const previewUrl = $2(response.responseText).find("video").first().attr("data-src");
          if (grid.length) {
            code.attr("href", missavUrl);
            code.attr("target", "_blank");
            code.attr("preview", previewUrl);
            code.css("color", "#e15062");
          } else {
            $2(movie).css("filter", "brightness(0.5)");
          }
        }
      });
    }
  }
  function Sukebei(movies2) {
    let codes = "";
    for (const movie of movies2) {
      const code = $2(movie).find(".movie_code").attr("sukebeicode");
      codes += `${code}|`;
    }
    const sukebeis = `https://sukebei.nyaa.si/?q=${codes}&s=seeders&o=desc`;
    console.log("Requesting: " + sukebeis);
    GM_xmlhttpRequest({
      url: sukebeis,
      onload(response) {
        for (const movie of movies2) {
          const code = $2(movie).find(".movie_code");
          const containCode = $2(response.responseText).find(`tr:contains("${$2(code).attr("sukebeicode")}")`).first();
          if (containCode.length) {
            const torrent = "https://sukebei.nyaa.si/" + containCode.find("i.fa-download").parent().attr("href");
            const magnet = containCode.find("i.fa-magnet").parent().attr("href");
            const seedsNumber = containCode.children().eq(-3).text();
            $2(movie).find(".link").append(`<a href='https://sukebei.nyaa.si/?q=${code}&s=seeders&o=desc' target='_blank' class='sukebei'> <img style='height: 1.2em;' src='https://sukebei.nyaa.si/static/favicon.png'></img></a>`);
            $2(movie).find(".link").append(`<a style='font-size: 1.2em;' class="fa fa-fw fa-download" href='${torrent}'></a>`);
            $2(movie).find(".link").append(`<a style='font-size: 1.2em; bottom: 0; position: relative; bottom: -1px;' class="fa fa-fw fa-magnet" href='${magnet}'></a>`);
            $2(movie).find(".link").append(`<p style='font-size: 1.2em; color: lawngreen; font-weight: 600; position: relative; bottom: 5px;'>${seedsNumber}</p>`);
            $2(movie).css("filter", "brightness(1)");
          }
        }
      }
    });
  }
  function JavStore(movies2) {
    for (const movie of movies2) {
      let code = $2(movie).find(".movie_code").attr("missavcode");
      const regex = /^(fc2-ppv)+-(\d.+)/i;
      if (regex.test(code)) {
        code = regex.exec(code)[2];
      }
      $2(movie).find(".link").append(
        `<a href='https://img.javstore.net/search/images/?q="${code}"' target="_blank"><img style='height: 1.2em;' src="https://img.javstore.net/content/images/system/default/favicon.png"></img></a>`
      );
    }
  }
  function tweak() {
    document.cookie = "config_view=filename%2Cunsubscribe%2Cacttag%2Cacttagd%2Cactrank%2C_blank%2Cactview%2Csampleview";
    const css = `
@media screen and (min-width: 610px) {
  #content, #headbarspan, #catchmassage, .content {
    max-width: 2922px;
    width: auto;
  }
  .jp_movie_view .movie_info {
    max-width: 100%;
  }
  .jp_movie_view .movie_image {
    width: auto;
    max-width: 100%;
  }
  .movie_info {
    padding: 0;
  }
}

@media screen and (min-width: 850px) {
  #content, #headbarspan, #catchmassage, .content {
    width: auto;
  }
}

.actress_info_ditail {
    background: #3b3a3a;
    border-radius: 1rem;
    margin: 1rem 0 1rem;
}

.movie_info {
  max-width: 100%;
}

@media screen and (min-width: 2900px) {
  .jp_movie_view_wrap { width: auto; margin-left: 0; }
  .movie_view_wrap { width: auto; margin-left: 0; }
}
@media screen and (min-width: 1780px) {
  .jp_movie_view_wrap { width: auto; margin-left: 0; }
  .movie_view_wrap { width: auto; margin-left: 0; }
}
@media screen and (min-width: 1500px) {
  .jp_movie_view_wrap { width: auto; margin-left: 0; }
  .movie_view_wrap { width: auto; margin-left: 0; }
}

@media screen and (max-width: 609px) {
  .act_left {
    width: auto;
    max-width: 100%;
  }
  .act_image {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .actress_info_ditail {
    flex-direction: column;
    justify-content: center;
  }
  .act_image img {
    height: auto;
    object-fit: contain;
  }
  .movie_info {
      display: flex;
      flex-direction: column;
  }
  .movie_image {
      aspect-ratio: 16 / 9;
      max-width: 100%;
  }
  .movie_ditail {
      max-width: 100%;
  }
}
.movie_image {
      aspect-ratio: 16 / 9;
}
.hidden {
  display: none;
}
`;
    GM_addStyle(css);
    GM_addElement(document.head, "link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    });
    const actTag = $2(".act_tag");
    const actDitail = $2(".act_ditail");
    const edit = $2(".edit");
    edit.remove();
    actDitail.append(actTag);
    actTag.append(`<li>${edit.html()}</li>`);
    const commentJump = $2(".commentjump:contains('サンプル画像モード')");
    const olbreadcumb = $2("ol.breadcrumb");
    commentJump.remove();
    olbreadcumb.after(commentJump);
  }
  tweak();
  const app = new App({
    target: (() => {
      const app2 = document.createElement("div");
      let movie_view = document.querySelector(".movie_view");
      if (!movie_view) {
        movie_view = document.querySelector(".jp_movie_view");
      }
      movie_view.after(app2);
      return app2;
    })()
  });
  if (!document.querySelector(".movie_view")) {
    $2(".movie_thumbnail").css("aspect-ratio", "3 / 4");
  }
  $2(".movie_info").parent().remove();
  const movies = $2(".movie");
  JavStore(movies);
  MissAV(movies);
  Sukebei(movies);
  return app;
}($);
