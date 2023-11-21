// ==UserScript==
// @name         (MSIN+) db.msin.jp improved
// @namespace    https://github.com/KememChan
// @version      1.4.0
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

(t=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.innerText=t,document.head.appendChild(e)})('@import"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;400;500;600;900&display=swap";:root{--font-size:1em}video.svelte-5u5jjm.svelte-5u5jjm{width:100%}.hidden.svelte-5u5jjm.svelte-5u5jjm{display:none}.link.svelte-5u5jjm.svelte-5u5jjm{height:1.2rem;margin-top:.2rem;padding:5px;background-color:#6c738033;display:flex;gap:5px;justify-content:center}.movie_desc.svelte-5u5jjm.svelte-5u5jjm{font-size:var(--font-size);font-family:Century Gothic,CenturyGothic,Geneva,AppleGothic,sans-serif;font-weight:700;text-align:center}.rounded.svelte-5u5jjm.svelte-5u5jjm{border-radius:5px}img.svelte-5u5jjm.svelte-5u5jjm{height:100%}.movie_thumbnail.svelte-5u5jjm.svelte-5u5jjm{aspect-ratio:16 / 9;background:rgb(15 17 18);overflow:hidden;text-align:center;display:flex;justify-content:center;margin:.5rem .5rem 0}a.svelte-5u5jjm.svelte-5u5jjm{color:#bfbdb6;text-decoration:none;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.movie_desc.svelte-5u5jjm>.svelte-5u5jjm:hover{color:#ff8c00}.movie.svelte-5u5jjm.svelte-5u5jjm{background:rgb(36 39 41);display:flex;flex-direction:column;opacity:0;transition:cubic-bezier(1,0,0,1) .8s}.movie_desc.svelte-5u5jjm.svelte-5u5jjm{display:grid;padding:.5rem}.movie_code.svelte-5u5jjm.svelte-5u5jjm{color:#bfbdb6;font-size:calc(var(--font-size) + .2em)}.movie_actress.svelte-5u5jjm.svelte-5u5jjm{color:#39bae6}@media screen and (min-width: 1400px){:root{--font-size:.8rem}}@media screen and (min-width: 1700px){:root{--font-size:.9rem}}.getmagnetbutton.svelte-5wqp10{display:flex;justify-content:center}.btn.svelte-5wqp10{-webkit-border-radius:28;-moz-border-radius:28;border-radius:28px;font-family:Arial;color:#fff;font-size:15px;background:#823a58;padding:10px 20px;text-decoration:none}.btn.svelte-5wqp10:hover{background:#b36183;text-decoration:none}.movie_grid.svelte-11wt7vu{--grid-count:auto-fit;margin:1rem 0;display:grid;grid-template-columns:repeat(var(--grid-count),minmax(min(100px,100%),1fr));gap:1rem}@media screen and (max-width: 500px){.movie_grid.svelte-11wt7vu{--grid-count:2}:root{--font-size:.8em}}@media screen and (min-width: 1600px){.movie_grid.svelte-11wt7vu{--grid-count:6}}.body.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{background-color:#0a0a0a;color:#fff;font-size:13px;display:flex;justify-content:center}:root{--primary-color:linear-gradient( 0deg, hsla(0, 0%, 9%, 1) 0%, hsla(0, 0%, 10%, 1) 100% )}.hidden.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{display:none}video.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10}#gbtn.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{height:auto;width:10rem;height:3rem;margin-top:1.1rem;background-color:#873ed6;cursor:pointer}.grid.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{display:grid;grid-gap:25px;padding:10px;width:100%;max-width:65em}.grid.svelte-5bq3e0>.svelte-5bq3e0.svelte-5bq3e0{position:relative;border-radius:10px;border:2px solid #6b32a8}.grid.svelte-5bq3e0>.svelte-5bq3e0.svelte-5bq3e0:before{content:"";position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;z-index:-1;background:linear-gradient(-45deg,#e81cff 0%,#40c9ff 100%);border-radius:10px}.image-poster.svelte-5bq3e0 img.svelte-5bq3e0.svelte-5bq3e0{width:100%;padding:1px;border-radius:10px;position:relative;display:flex;justify-content:center}.actress-thumbnail.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{display:flex;justify-content:center;align-items:center;position:relative}.actress-thumbnail.svelte-5bq3e0 img.svelte-5bq3e0.svelte-5bq3e0{border-radius:20%;width:100%}.total-movie.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{position:absolute;top:2px;left:5px;background-color:#873ed6;padding:5px;border-radius:100%;font-size:11px}.movie-actress.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{background:var(--primary-color);display:flex;justify-content:center;align-items:center;flex-direction:column;padding:1rem}.actress-row.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{display:flex;justify-content:center;flex-direction:row;flex-wrap:wrap}.actress.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{padding:.5rem;width:90px}.actress-name.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{text-align:center}.movie-details.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{background:var(--primary-color);display:grid;grid-auto-columns:auto;gap:.6rem;padding:1rem 0;padding:.8rem;text-align:center}.genre-box.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{background:var(--primary-color);padding:1rem 0;text-align:center}.genre-list.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem}.genre-list.svelte-5bq3e0>label.svelte-5bq3e0.svelte-5bq3e0{background-color:#442d60;user-select:none;padding:.5rem;cursor:pointer}.genre-list.svelte-5bq3e0 label.svelte-5bq3e0.svelte-5bq3e0:hover{background-color:#c863c9}.genre-list.svelte-5bq3e0 input.svelte-5bq3e0.svelte-5bq3e0{display:none}.genre-list.svelte-5bq3e0 input.svelte-5bq3e0:checked+label.svelte-5bq3e0{background-color:#873ed6}@media screen and (min-width: 35em){.body.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{font-size:15px}.grid.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{grid-template-columns:repeat(4,minmax(min(120px,100%),1fr))}.image-poster.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{grid-area:1 / 1 / -1 / -1}.movie-details.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{grid-area:var(--movie-details)}.genre-box.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{grid-area:auto / 1 / auto / -1}.movie-actress.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{grid-area:var(--movie-actress)}.actress.svelte-5bq3e0.svelte-5bq3e0.svelte-5bq3e0{width:120px}}');

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
  function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
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
  function set_style(node, key, value, important) {
    if (value === null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
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
  let intersectionObserver;
  function ensureIntersectionObserver() {
    if (intersectionObserver)
      return;
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";
          entry.target.dispatchEvent(new CustomEvent(eventName));
        });
      }
    );
  }
  function viewport(element2) {
    ensureIntersectionObserver();
    intersectionObserver.observe(element2);
    return {
      destroy() {
        intersectionObserver.unobserve(element2);
      }
    };
  }
  function MissAV(code, card) {
    const missavUrl = `https://missav.com/en/search/${code.getAttribute(
      "missavcode"
    )}`;
    console.log(`requesting ${missavUrl}`);
    GM_xmlhttpRequest({
      url: missavUrl,
      onload(response) {
        const grid = $2(response.responseText).find("div.grid div.relative");
        let previewUrl;
        const uncen = $2(response.responseText).find("span:contains('Uncensored Leak')").parent().parent().find("video").attr("data-src");
        if (uncen) {
          previewUrl = uncen;
        } else {
          previewUrl = $2(response.responseText).find("video").first().attr("data-src");
        }
        if (grid.length) {
          code.setAttribute("href", missavUrl);
          code.setAttribute("target", "_blank");
          code.setAttribute("preview", previewUrl);
          if (uncen) {
            code.style.color = "#50e1d0";
          } else {
            code.style.color = "#e15062";
          }
        } else {
          card.style.filter = "brightness(0.5)";
        }
      }
    });
  }
  const _Content_svelte_svelte_type_style_lang = "";
  function create_fragment$5(ctx) {
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
    let t6;
    let t7;
    let a2;
    let t8;
    let t9;
    let a3;
    let t10;
    let t11;
    let a4;
    let t12;
    let t13;
    let a5;
    let t14;
    let t15;
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
        t6 = text(
          /*ageWhenRelease*/
          ctx[9]
        );
        t7 = space();
        a2 = element("a");
        t8 = text(
          /*movieTitle*/
          ctx[5]
        );
        t9 = space();
        a3 = element("a");
        t10 = text(
          /*mfr*/
          ctx[3]
        );
        t11 = space();
        a4 = element("a");
        t12 = text(
          /*movieMaker*/
          ctx[4]
        );
        t13 = space();
        a5 = element("a");
        t14 = text(
          /*name*/
          ctx[6]
        );
        t15 = space();
        div1 = element("div");
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        attr(video, "class", "svelte-5u5jjm");
        toggle_class(
          video,
          "hidden",
          /*hidden*/
          ctx[17] === true
        );
        if (!src_url_equal(img.src, img_src_value = /*thumbnail*/
        ctx[0]))
          attr(img, "src", img_src_value);
        attr(img, "loading", "lazy");
        attr(img, "alt", "thumbnail image");
        attr(img, "class", "svelte-5u5jjm");
        toggle_class(
          img,
          "hidden",
          /*hidden*/
          ctx[17] === false
        );
        attr(div0, "class", "movie_thumbnail rounded text-center width-ratio svelte-5u5jjm");
        attr(
          a0,
          "href",
          /*movieCodeUrl*/
          ctx[7]
        );
        attr(a0, "class", "movie_code svelte-5u5jjm");
        attr(
          a1,
          "href",
          /*movieDateUrl*/
          ctx[8]
        );
        attr(a1, "class", "movie_date svelte-5u5jjm");
        attr(
          a2,
          "href",
          /*movieTitleUrl*/
          ctx[12]
        );
        attr(a2, "class", "movie_title svelte-5u5jjm");
        attr(
          a3,
          "href",
          /*mfrUrl*/
          ctx[10]
        );
        attr(a3, "class", "mfr svelte-5u5jjm");
        attr(
          a4,
          "href",
          /*movieMakerUrl*/
          ctx[11]
        );
        attr(a4, "class", "movie_maker svelte-5u5jjm");
        attr(
          a5,
          "href",
          /*nameUrl*/
          ctx[13]
        );
        attr(a5, "class", "movie_actress svelte-5u5jjm");
        attr(div1, "class", "link rounded svelte-5u5jjm");
        attr(div2, "class", "movie_desc svelte-5u5jjm");
        attr(div3, "class", "movie rounded svelte-5u5jjm");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div0);
        append(div0, video);
        append(div0, t0);
        append(div0, img);
        ctx[23](div0);
        append(div3, t1);
        append(div3, div2);
        append(div2, a0);
        append(a0, t2);
        ctx[24](a0);
        append(div2, t3);
        append(div2, a1);
        append(a1, t4);
        append(a1, t5);
        append(a1, t6);
        append(div2, t7);
        append(div2, a2);
        append(a2, t8);
        append(div2, t9);
        append(div2, a3);
        append(a3, t10);
        append(div2, t11);
        append(div2, a4);
        append(a4, t12);
        append(div2, t13);
        append(div2, a5);
        append(a5, t14);
        append(div2, t15);
        append(div2, div1);
        ctx[25](div3);
        if (!mounted) {
          dispose = [
            listen(
              div0,
              "mouseenter",
              /*setPreview*/
              ctx[19]
            ),
            listen(
              div0,
              "mouseleave",
              /*unSetPreview*/
              ctx[20]
            ),
            listen(
              div0,
              "keydown",
              /*setPreview*/
              ctx[19]
            ),
            action_destroyer(viewport.call(null, div3)),
            listen(
              div3,
              "enterViewport",
              /*enterViewport_handler*/
              ctx[26]
            ),
            listen(
              div3,
              "exitViewport",
              /*exitViewport_handler*/
              ctx[27]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*hidden*/
        131072) {
          toggle_class(
            video,
            "hidden",
            /*hidden*/
            ctx2[17] === true
          );
        }
        if (dirty & /*thumbnail*/
        1 && !src_url_equal(img.src, img_src_value = /*thumbnail*/
        ctx2[0])) {
          attr(img, "src", img_src_value);
        }
        if (dirty & /*hidden*/
        131072) {
          toggle_class(
            img,
            "hidden",
            /*hidden*/
            ctx2[17] === false
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
        if (dirty & /*ageWhenRelease*/
        512)
          set_data(
            t6,
            /*ageWhenRelease*/
            ctx2[9]
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
            t8,
            /*movieTitle*/
            ctx2[5]
          );
        if (dirty & /*movieTitleUrl*/
        4096) {
          attr(
            a2,
            "href",
            /*movieTitleUrl*/
            ctx2[12]
          );
        }
        if (dirty & /*mfr*/
        8)
          set_data(
            t10,
            /*mfr*/
            ctx2[3]
          );
        if (dirty & /*mfrUrl*/
        1024) {
          attr(
            a3,
            "href",
            /*mfrUrl*/
            ctx2[10]
          );
        }
        if (dirty & /*movieMaker*/
        16)
          set_data(
            t12,
            /*movieMaker*/
            ctx2[4]
          );
        if (dirty & /*movieMakerUrl*/
        2048) {
          attr(
            a4,
            "href",
            /*movieMakerUrl*/
            ctx2[11]
          );
        }
        if (dirty & /*name*/
        64)
          set_data(
            t14,
            /*name*/
            ctx2[6]
          );
        if (dirty & /*nameUrl*/
        8192) {
          attr(
            a5,
            "href",
            /*nameUrl*/
            ctx2[13]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div3);
        ctx[23](null);
        ctx[24](null);
        ctx[25](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance$5($$self, $$props, $$invalidate) {
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
    let { ageWhenRelease } = $$props;
    let { mfrUrl } = $$props;
    let { movieMakerUrl } = $$props;
    let { movieTitleUrl } = $$props;
    let { nameUrl } = $$props;
    let preview, code;
    let card;
    onMount(() => {
      code.setAttribute("missavcode", missAVCode);
      code.setAttribute("sukebeicode", sukebeiCode);
    });
    function entervp() {
      if (!code.getAttribute("scanned")) {
        code.getAttribute("missavcode");
        MissAV(code, card);
      }
      code.setAttribute("scanned", "true");
      $$invalidate(16, card.style.opacity = "1", card);
    }
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
      $$invalidate(17, hidden = false);
    }
    function unSetPreview() {
      $$invalidate(17, hidden = true);
    }
    function div0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        preview = $$value;
        $$invalidate(14, preview);
      });
    }
    function a0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        code = $$value;
        $$invalidate(15, code);
      });
    }
    function div3_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        card = $$value;
        $$invalidate(16, card);
      });
    }
    const enterViewport_handler = () => {
      entervp();
    };
    const exitViewport_handler = () => {
    };
    $$self.$$set = ($$props2) => {
      if ("thumbnail" in $$props2)
        $$invalidate(0, thumbnail = $$props2.thumbnail);
      if ("movieCode" in $$props2)
        $$invalidate(1, movieCode = $$props2.movieCode);
      if ("missAVCode" in $$props2)
        $$invalidate(21, missAVCode = $$props2.missAVCode);
      if ("sukebeiCode" in $$props2)
        $$invalidate(22, sukebeiCode = $$props2.sukebeiCode);
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
      if ("ageWhenRelease" in $$props2)
        $$invalidate(9, ageWhenRelease = $$props2.ageWhenRelease);
      if ("mfrUrl" in $$props2)
        $$invalidate(10, mfrUrl = $$props2.mfrUrl);
      if ("movieMakerUrl" in $$props2)
        $$invalidate(11, movieMakerUrl = $$props2.movieMakerUrl);
      if ("movieTitleUrl" in $$props2)
        $$invalidate(12, movieTitleUrl = $$props2.movieTitleUrl);
      if ("nameUrl" in $$props2)
        $$invalidate(13, nameUrl = $$props2.nameUrl);
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
      ageWhenRelease,
      mfrUrl,
      movieMakerUrl,
      movieTitleUrl,
      nameUrl,
      preview,
      code,
      card,
      hidden,
      entervp,
      setPreview,
      unSetPreview,
      missAVCode,
      sukebeiCode,
      div0_binding,
      a0_binding,
      div3_binding,
      enterViewport_handler,
      exitViewport_handler
    ];
  }
  class Content extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$5, create_fragment$5, safe_not_equal, {
        thumbnail: 0,
        movieCode: 1,
        missAVCode: 21,
        sukebeiCode: 22,
        movieDate: 2,
        mfr: 3,
        movieMaker: 4,
        movieTitle: 5,
        name: 6,
        movieCodeUrl: 7,
        movieDateUrl: 8,
        ageWhenRelease: 9,
        mfrUrl: 10,
        movieMakerUrl: 11,
        movieTitleUrl: 12,
        nameUrl: 13
      });
    }
  }
  const _GetAllMagnet_svelte_svelte_type_style_lang = "";
  function create_fragment$4(ctx) {
    let div;
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        button = element("button");
        button.textContent = "Copy All Magnet";
        attr(button, "class", "btn svelte-5wqp10");
        attr(div, "class", "getmagnetbutton svelte-5wqp10");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, button);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*getAllMagnet*/
            ctx[0]
          );
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function instance$4($$self) {
    function getAllMagnet() {
      let magnets = [];
      for (let magnetel of $2(".fa-magnet")) {
        const magnet = $2(magnetel).attr("href");
        magnets.push(magnet);
      }
      navigator.clipboard.writeText(magnets.join("\n"));
    }
    return [getAllMagnet];
  }
  class GetAllMagnet extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
    }
  }
  function CalculateDate(past, present) {
    if (past.length === 0) {
      return "";
    }
    const pastDate = new Date(past);
    const presentDate = new Date(present);
    const yearDiff = presentDate.getFullYear() - pastDate.getFullYear();
    const monthDiff = presentDate.getMonth() - pastDate.getMonth();
    let totalMonths = yearDiff * 12 + monthDiff;
    if (presentDate.getDate() < pastDate.getDate()) {
      totalMonths--;
    }
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `| ${years} years and ${months} months old`;
  }
  function MovieElement() {
    let movies = [];
    const regex = /^(carib|caribpr|1pon|10mu|paco)+-(\d.+)/i;
    const pacomama = /^(paco)+-(\d.+)/i;
    const movie_infos = $2(".movie_info");
    const birthDate = $2(".mv_barth").text();
    for (const movie_info of movie_infos) {
      let sukebeiCode = $2(movie_info).find(".movie_pn").text().toUpperCase();
      if (sukebeiCode.length === 0) {
        sukebeiCode = $2(movie_info).find(".movie_fileName").text().toUpperCase();
      }
      let missAVCode = sukebeiCode;
      if (regex.test(sukebeiCode)) {
        if (pacomama.test(missAVCode)) {
          missAVCode = pacomama.exec(missAVCode)[2];
        }
        sukebeiCode = regex.exec(sukebeiCode)[2];
      }
      let name = $2(movie_info).find(".movie_artist").children().children();
      if (name.length === 0) {
        name = "No Name";
      } else {
        name = name.text();
      }
      const movie = {
        thumbnail: $2(movie_info).find("img").attr("src"),
        movieCode: sukebeiCode,
        missAVCode: sukebeiCode,
        sukebeiCode,
        movieCodeUrl: $2(movie_info).find(".movie_title").children().attr("href"),
        movieDate: $2(movie_info).find(".movie_create").children().text(),
        ageWhenRelease: CalculateDate(birthDate, $2(movie_info).find(".movie_create").children().text()),
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
      movies.push(movie);
    }
    return movies;
  }
  const _Movies_svelte_svelte_type_style_lang = "";
  function get_each_context$1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    return child_ctx;
  }
  function create_else_block$2(ctx) {
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
  function create_each_block$1(ctx) {
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
  function create_fragment$3(ctx) {
    let getallmagnet;
    let t;
    let div;
    let current;
    getallmagnet = new GetAllMagnet({});
    let each_value = (
      /*movies*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    let each_1_else = null;
    if (!each_value.length) {
      each_1_else = create_else_block$2();
    }
    return {
      c() {
        create_component(getallmagnet.$$.fragment);
        t = space();
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        if (each_1_else) {
          each_1_else.c();
        }
        attr(div, "class", "movie_grid svelte-11wt7vu");
      },
      m(target, anchor) {
        mount_component(getallmagnet, target, anchor);
        insert(target, t, anchor);
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
            const child_ctx = get_each_context$1(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block$1(child_ctx);
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
            each_1_else = create_else_block$2();
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
        transition_in(getallmagnet.$$.fragment, local);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        transition_out(getallmagnet.$$.fragment, local);
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_component(getallmagnet, detaching);
        if (detaching)
          detach(t);
        if (detaching)
          detach(div);
        destroy_each(each_blocks, detaching);
        if (each_1_else)
          each_1_else.d();
      }
    };
  }
  function instance$3($$self, $$props, $$invalidate) {
    let movies = [];
    onMount(() => {
      $$invalidate(0, movies = MovieElement());
    });
    return [movies];
  }
  class Movies extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    }
  }
  function moviePage() {
    let movieCode;
    if ($2(".mv_pn").text().length) {
      movieCode = $2(".mv_pn").text();
    } else {
      movieCode = $2(".mv_fileName").text();
    }
    let movieGenre;
    if ($2(".mv_genre").find("input").length) {
      movieGenre = $2(".mv_genre").find("input");
    } else {
      movieGenre = $2(".mv_tag").find("input");
    }
    let genreEl = movieGenre;
    let movieGenres = [];
    for (const genre of genreEl) {
      const gen = $2(genre).attr("value");
      movieGenres.push(gen);
    }
    console.log(movieGenres);
    let performers = [];
    const perfmboxs = $2(".mv_artist").next().next(".performer_view").first().find(".performer_box");
    for (const perfm of perfmboxs) {
      const performer = {
        performThumb: $2(perfm).first().find("img").attr("src"),
        performCount: $2(perfm).first().find(".performer_cnt").text(),
        // Jumlah Movie
        performName: $2(perfm).first().find(".performer_text").text(),
        linkPerformer: $2(perfm).first().find(".performer_text a").attr("href")
      };
      performers.push(performer);
    }
    const movieDetail = {
      movieThumb: $2(".movie_top").find("img").attr("src"),
      // TO DO Multiple Performer
      performers,
      movieTitle: $2(".mv_title").text(),
      movieCode,
      movieDuration: $2(".mv_duration").text(),
      movieDate: $2(".mv_createDate").text(),
      movieMaker: $2(".mv_writer").text(),
      // sama link
      linkMaker: $2(".mv_writer").attr("href"),
      // sama link
      movieManucfacturer: $2(".mv_mfr").text(),
      // sama link
      linkManucfacturer: $2(".mv_mfr").attr("href"),
      // sama link
      movieLabel: $2(".mv_label").text(),
      // sama link
      linkLabel: $2(".mv_label").attr("href"),
      // sama link
      movieGenres,
      // ini list
      // link url
      linkDate: $2(".mv_createDate").attr("href")
    };
    return movieDetail;
  }
  const _MoviePageContent_svelte_svelte_type_style_lang = "";
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[29] = list[i];
    child_ctx[31] = i;
    return child_ctx;
  }
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[32] = list[i];
    child_ctx[31] = i;
    return child_ctx;
  }
  function create_if_block_3(ctx) {
    let div;
    let p;
    let t1;
    let a;
    let t2;
    let a_href_value;
    return {
      c() {
        div = element("div");
        p = element("p");
        p.textContent = "Maker:";
        t1 = space();
        a = element("a");
        t2 = text(
          /*movieMaker*/
          ctx[7]
        );
        attr(a, "href", a_href_value = "https://db.msin.jp" + /*linkMaker*/
        ctx[8]);
        attr(div, "class", "movie-maker");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, p);
        append(div, t1);
        append(div, a);
        append(a, t2);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*movieMaker*/
        128)
          set_data(
            t2,
            /*movieMaker*/
            ctx2[7]
          );
        if (dirty[0] & /*linkMaker*/
        256 && a_href_value !== (a_href_value = "https://db.msin.jp" + /*linkMaker*/
        ctx2[8])) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block_2(ctx) {
    let div;
    let p;
    let t1;
    let a;
    let t2;
    let a_href_value;
    return {
      c() {
        div = element("div");
        p = element("p");
        p.textContent = "Manufacture:";
        t1 = space();
        a = element("a");
        t2 = text(
          /*movieManucfacturer*/
          ctx[9]
        );
        attr(a, "href", a_href_value = "https://db.msin.jp" + /*linkManucfacturer*/
        ctx[10]);
        attr(div, "class", "movie-manufacture");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, p);
        append(div, t1);
        append(div, a);
        append(a, t2);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*movieManucfacturer*/
        512)
          set_data(
            t2,
            /*movieManucfacturer*/
            ctx2[9]
          );
        if (dirty[0] & /*linkManucfacturer*/
        1024 && a_href_value !== (a_href_value = "https://db.msin.jp" + /*linkManucfacturer*/
        ctx2[10])) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block_1(ctx) {
    let div;
    let p;
    let t1;
    let a;
    let t2;
    let a_href_value;
    return {
      c() {
        div = element("div");
        p = element("p");
        p.textContent = "Labels:";
        t1 = space();
        a = element("a");
        t2 = text(
          /*movieLabel*/
          ctx[11]
        );
        attr(a, "href", a_href_value = "https://db.msin.jp" + /*linkLabel*/
        ctx[12]);
        attr(div, "class", "movie-label");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, p);
        append(div, t1);
        append(div, a);
        append(a, t2);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*movieLabel*/
        2048)
          set_data(
            t2,
            /*movieLabel*/
            ctx2[11]
          );
        if (dirty[0] & /*linkLabel*/
        4096 && a_href_value !== (a_href_value = "https://db.msin.jp" + /*linkLabel*/
        ctx2[12])) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div);
      }
    };
  }
  function create_if_block$1(ctx) {
    let p;
    return {
      c() {
        p = element("p");
        p.textContent = "Unkown?";
      },
      m(target, anchor) {
        insert(target, p, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(p);
      }
    };
  }
  function create_each_block_1(ctx) {
    let div2;
    let div0;
    let a0;
    let img;
    let img_src_value;
    let a0_href_value;
    let t0;
    let p;
    let t1_value = (
      /*performer*/
      ctx[32].performCount + ""
    );
    let t1;
    let t2;
    let div1;
    let a1;
    let t3_value = (
      /*performer*/
      ctx[32].performName + ""
    );
    let t3;
    let a1_href_value;
    let t4;
    return {
      c() {
        div2 = element("div");
        div0 = element("div");
        a0 = element("a");
        img = element("img");
        t0 = space();
        p = element("p");
        t1 = text(t1_value);
        t2 = space();
        div1 = element("div");
        a1 = element("a");
        t3 = text(t3_value);
        t4 = space();
        attr(img, "class", " svelte-5bq3e0");
        if (!src_url_equal(img.src, img_src_value = /*performer*/
        ctx[32].performThumb))
          attr(img, "src", img_src_value);
        attr(img, "loading", "lazy");
        attr(img, "alt", "Actress Thumbnail");
        attr(a0, "href", a0_href_value = "https://db.msin.jp" + /*performer*/
        ctx[32].linkPerformer);
        attr(p, "class", "total-movie svelte-5bq3e0");
        attr(div0, "class", "actress-thumbnail svelte-5bq3e0");
        attr(a1, "href", a1_href_value = "https://db.msin.jp" + /*performer*/
        ctx[32].linkPerformer);
        attr(div1, "class", "actress-name svelte-5bq3e0");
        attr(div2, "class", "actress svelte-5bq3e0");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div0);
        append(div0, a0);
        append(a0, img);
        append(div0, t0);
        append(div0, p);
        append(p, t1);
        append(div2, t2);
        append(div2, div1);
        append(div1, a1);
        append(a1, t3);
        append(div2, t4);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*performers*/
        1 && !src_url_equal(img.src, img_src_value = /*performer*/
        ctx2[32].performThumb)) {
          attr(img, "src", img_src_value);
        }
        if (dirty[0] & /*performers*/
        1 && a0_href_value !== (a0_href_value = "https://db.msin.jp" + /*performer*/
        ctx2[32].linkPerformer)) {
          attr(a0, "href", a0_href_value);
        }
        if (dirty[0] & /*performers*/
        1 && t1_value !== (t1_value = /*performer*/
        ctx2[32].performCount + ""))
          set_data(t1, t1_value);
        if (dirty[0] & /*performers*/
        1 && t3_value !== (t3_value = /*performer*/
        ctx2[32].performName + ""))
          set_data(t3, t3_value);
        if (dirty[0] & /*performers*/
        1 && a1_href_value !== (a1_href_value = "https://db.msin.jp" + /*performer*/
        ctx2[32].linkPerformer)) {
          attr(a1, "href", a1_href_value);
        }
      },
      d(detaching) {
        if (detaching)
          detach(div2);
      }
    };
  }
  function create_else_block$1(ctx) {
    let p;
    return {
      c() {
        p = element("p");
        p.textContent = "-";
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
    let input;
    let input_value_value;
    let t0;
    let label;
    let t1_value = (
      /*genre*/
      ctx[29] + ""
    );
    let t1;
    return {
      c() {
        input = element("input");
        t0 = space();
        label = element("label");
        t1 = text(t1_value);
        attr(input, "id", "genree" + /*i*/
        ctx[31]);
        attr(input, "class", "genree_checkbox svelte-5bq3e0");
        attr(input, "type", "checkbox");
        attr(input, "name", "genre");
        input.value = input_value_value = /*genre*/
        ctx[29];
        attr(label, "for", "genree" + /*i*/
        ctx[31]);
        attr(label, "class", "svelte-5bq3e0");
      },
      m(target, anchor) {
        insert(target, input, anchor);
        insert(target, t0, anchor);
        insert(target, label, anchor);
        append(label, t1);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*movieGenres*/
        2 && input_value_value !== (input_value_value = /*genre*/
        ctx2[29])) {
          input.value = input_value_value;
        }
        if (dirty[0] & /*movieGenres*/
        2 && t1_value !== (t1_value = /*genre*/
        ctx2[29] + ""))
          set_data(t1, t1_value);
      },
      d(detaching) {
        if (detaching)
          detach(input);
        if (detaching)
          detach(t0);
        if (detaching)
          detach(label);
      }
    };
  }
  function create_fragment$2(ctx) {
    let div15;
    let div14;
    let div0;
    let video;
    let t0;
    let img;
    let img_src_value;
    let t1;
    let div6;
    let div1;
    let p0;
    let t3;
    let p1;
    let t4;
    let t5;
    let div2;
    let p2;
    let t7;
    let a0;
    let t8;
    let t9;
    let div4;
    let p3;
    let t11;
    let div3;
    let t12;
    let t13;
    let div5;
    let p4;
    let t15;
    let a1;
    let t16;
    let a1_href_value;
    let t17;
    let t18;
    let t19;
    let t20;
    let div9;
    let div7;
    let t22;
    let div8;
    let t23;
    let t24;
    let div13;
    let div10;
    let t26;
    let div11;
    let t27;
    let div12;
    let input;
    let input_onclick_value;
    let mounted;
    let dispose;
    let if_block0 = (
      /*isMaker*/
      ctx[20] && create_if_block_3(ctx)
    );
    let if_block1 = (
      /*isMfr*/
      ctx[21] && create_if_block_2(ctx)
    );
    let if_block2 = (
      /*isLabel*/
      ctx[22] && create_if_block_1(ctx)
    );
    let if_block3 = !/*isPerformer*/
    ctx[23] && create_if_block$1();
    let each_value_1 = (
      /*performers*/
      ctx[0]
    );
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    let each_value = (
      /*movieGenres*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    let each1_else = null;
    if (!each_value.length) {
      each1_else = create_else_block$1();
    }
    return {
      c() {
        div15 = element("div");
        div14 = element("div");
        div0 = element("div");
        video = element("video");
        t0 = space();
        img = element("img");
        t1 = space();
        div6 = element("div");
        div1 = element("div");
        p0 = element("p");
        p0.textContent = "Title:";
        t3 = space();
        p1 = element("p");
        t4 = text(
          /*movieTitle*/
          ctx[3]
        );
        t5 = space();
        div2 = element("div");
        p2 = element("p");
        p2.textContent = "Movie Code:";
        t7 = space();
        a0 = element("a");
        t8 = text(
          /*movieCode*/
          ctx[4]
        );
        t9 = space();
        div4 = element("div");
        p3 = element("p");
        p3.textContent = "Duration:";
        t11 = space();
        div3 = element("div");
        t12 = text(
          /*movieDuration*/
          ctx[5]
        );
        t13 = space();
        div5 = element("div");
        p4 = element("p");
        p4.textContent = "Product Release Date:";
        t15 = space();
        a1 = element("a");
        t16 = text(
          /*movieDate*/
          ctx[6]
        );
        t17 = space();
        if (if_block0)
          if_block0.c();
        t18 = space();
        if (if_block1)
          if_block1.c();
        t19 = space();
        if (if_block2)
          if_block2.c();
        t20 = space();
        div9 = element("div");
        div7 = element("div");
        div7.innerHTML = `<p>Performers:</p>`;
        t22 = space();
        div8 = element("div");
        if (if_block3)
          if_block3.c();
        t23 = space();
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t24 = space();
        div13 = element("div");
        div10 = element("div");
        div10.innerHTML = `<p>Genre:</p>`;
        t26 = space();
        div11 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        if (each1_else) {
          each1_else.c();
        }
        t27 = space();
        div12 = element("div");
        input = element("input");
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        attr(video, "class", "svelte-5bq3e0");
        toggle_class(
          video,
          "hidden",
          /*hidden*/
          ctx[19] === true
        );
        if (!src_url_equal(img.src, img_src_value = /*movieThumb*/
        ctx[2]))
          attr(img, "src", img_src_value);
        attr(img, "class", "movie_img svelte-5bq3e0");
        attr(img, "loading", "lazy");
        attr(img, "alt", "Movie Thumbnail");
        attr(div0, "class", "image-poster svelte-5bq3e0");
        attr(div1, "class", "movie-title");
        attr(a0, "class", "code");
        attr(a0, "href", "todo");
        attr(
          a0,
          "missavcode",
          /*movieCode*/
          ctx[4]
        );
        attr(div2, "class", "movie-code");
        attr(div3, "class", "duration");
        attr(div4, "class", "movie-duration");
        attr(a1, "href", a1_href_value = "https://db.msin.jp" + /*linkDate*/
        ctx[13]);
        attr(div5, "class", "movie-date");
        attr(div6, "class", "movie-details svelte-5bq3e0");
        set_style(
          div6,
          "--movie-details",
          /*movieDetails*/
          ctx[15]
        );
        attr(div8, "class", "actress-row svelte-5bq3e0");
        attr(div9, "class", "movie-actress svelte-5bq3e0");
        set_style(
          div9,
          "--movie-actress",
          /*movieActress*/
          ctx[14]
        );
        attr(div10, "class", "genre-button");
        attr(div11, "class", "genre-list svelte-5bq3e0");
        attr(input, "id", "gbtn");
        attr(input, "type", "submit");
        attr(input, "onclick", input_onclick_value = /*buttonAttr*/
        ctx[16] + ";");
        input.value = "Search Selected Tag";
        attr(input, "class", "svelte-5bq3e0");
        attr(div13, "class", "genre-box svelte-5bq3e0");
        attr(div14, "class", "grid svelte-5bq3e0");
        attr(div15, "class", "body svelte-5bq3e0");
      },
      m(target, anchor) {
        insert(target, div15, anchor);
        append(div15, div14);
        append(div14, div0);
        append(div0, video);
        append(div0, t0);
        append(div0, img);
        ctx[26](div0);
        append(div14, t1);
        append(div14, div6);
        append(div6, div1);
        append(div1, p0);
        append(div1, t3);
        append(div1, p1);
        append(p1, t4);
        append(div6, t5);
        append(div6, div2);
        append(div2, p2);
        append(div2, t7);
        append(div2, a0);
        append(a0, t8);
        ctx[27](a0);
        append(div6, t9);
        append(div6, div4);
        append(div4, p3);
        append(div4, t11);
        append(div4, div3);
        append(div3, t12);
        append(div6, t13);
        append(div6, div5);
        append(div5, p4);
        append(div5, t15);
        append(div5, a1);
        append(a1, t16);
        append(div6, t17);
        if (if_block0)
          if_block0.m(div6, null);
        append(div6, t18);
        if (if_block1)
          if_block1.m(div6, null);
        append(div6, t19);
        if (if_block2)
          if_block2.m(div6, null);
        append(div14, t20);
        append(div14, div9);
        append(div9, div7);
        append(div9, t22);
        append(div9, div8);
        if (if_block3)
          if_block3.m(div8, null);
        append(div8, t23);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].m(div8, null);
        }
        append(div14, t24);
        append(div14, div13);
        append(div13, div10);
        append(div13, t26);
        append(div13, div11);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div11, null);
        }
        if (each1_else) {
          each1_else.m(div11, null);
        }
        append(div13, t27);
        append(div13, div12);
        append(div12, input);
        if (!mounted) {
          dispose = [
            listen(
              div0,
              "mouseenter",
              /*setPreview*/
              ctx[24]
            ),
            listen(
              div0,
              "mouseleave",
              /*unSetPreview*/
              ctx[25]
            ),
            listen(
              div0,
              "keydown",
              /*setPreview*/
              ctx[24]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*hidden*/
        524288) {
          toggle_class(
            video,
            "hidden",
            /*hidden*/
            ctx2[19] === true
          );
        }
        if (dirty[0] & /*movieThumb*/
        4 && !src_url_equal(img.src, img_src_value = /*movieThumb*/
        ctx2[2])) {
          attr(img, "src", img_src_value);
        }
        if (dirty[0] & /*movieTitle*/
        8)
          set_data(
            t4,
            /*movieTitle*/
            ctx2[3]
          );
        if (dirty[0] & /*movieCode*/
        16)
          set_data(
            t8,
            /*movieCode*/
            ctx2[4]
          );
        if (dirty[0] & /*movieCode*/
        16) {
          attr(
            a0,
            "missavcode",
            /*movieCode*/
            ctx2[4]
          );
        }
        if (dirty[0] & /*movieDuration*/
        32)
          set_data(
            t12,
            /*movieDuration*/
            ctx2[5]
          );
        if (dirty[0] & /*movieDate*/
        64)
          set_data(
            t16,
            /*movieDate*/
            ctx2[6]
          );
        if (dirty[0] & /*linkDate*/
        8192 && a1_href_value !== (a1_href_value = "https://db.msin.jp" + /*linkDate*/
        ctx2[13])) {
          attr(a1, "href", a1_href_value);
        }
        if (
          /*isMaker*/
          ctx2[20]
        )
          if_block0.p(ctx2, dirty);
        if (
          /*isMfr*/
          ctx2[21]
        )
          if_block1.p(ctx2, dirty);
        if (
          /*isLabel*/
          ctx2[22]
        )
          if_block2.p(ctx2, dirty);
        if (dirty[0] & /*movieDetails*/
        32768) {
          set_style(
            div6,
            "--movie-details",
            /*movieDetails*/
            ctx2[15]
          );
        }
        if (dirty[0] & /*performers*/
        1) {
          each_value_1 = /*performers*/
          ctx2[0];
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_1(ctx2, each_value_1, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
            } else {
              each_blocks_1[i] = create_each_block_1(child_ctx);
              each_blocks_1[i].c();
              each_blocks_1[i].m(div8, null);
            }
          }
          for (; i < each_blocks_1.length; i += 1) {
            each_blocks_1[i].d(1);
          }
          each_blocks_1.length = each_value_1.length;
        }
        if (dirty[0] & /*movieActress*/
        16384) {
          set_style(
            div9,
            "--movie-actress",
            /*movieActress*/
            ctx2[14]
          );
        }
        if (dirty[0] & /*movieGenres*/
        2) {
          each_value = /*movieGenres*/
          ctx2[1];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div11, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
          if (!each_value.length && each1_else) {
            each1_else.p(ctx2, dirty);
          } else if (!each_value.length) {
            each1_else = create_else_block$1();
            each1_else.c();
            each1_else.m(div11, null);
          } else if (each1_else) {
            each1_else.d(1);
            each1_else = null;
          }
        }
        if (dirty[0] & /*buttonAttr*/
        65536 && input_onclick_value !== (input_onclick_value = /*buttonAttr*/
        ctx2[16] + ";")) {
          attr(input, "onclick", input_onclick_value);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div15);
        ctx[26](null);
        ctx[27](null);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        if (if_block3)
          if_block3.d();
        destroy_each(each_blocks_1, detaching);
        destroy_each(each_blocks, detaching);
        if (each1_else)
          each1_else.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance$2($$self, $$props, $$invalidate) {
    let { movieThumb } = $$props;
    let { performers } = $$props;
    let { movieTitle } = $$props;
    let { movieCode } = $$props;
    let { movieDuration } = $$props;
    let { movieDate } = $$props;
    let { movieMaker } = $$props;
    let { linkMaker } = $$props;
    let { movieManucfacturer } = $$props;
    let { linkManucfacturer } = $$props;
    let { movieLabel } = $$props;
    let { linkLabel } = $$props;
    let { movieGenres } = $$props;
    let { linkDate } = $$props;
    movieGenres = [];
    performers = [];
    const perfcount = document.querySelector(".performer_view").querySelectorAll(".performer_box");
    console.log("count" + perfcount.length);
    let movieActress = "auto / 1 / auto / -1";
    let movieDetails = "2 / 1 / 2 / -1";
    if (perfcount.length < 2) {
      movieActress = "2 / 1 / 2 / 2";
      movieDetails = "2 / 2 / 2 / -1";
    }
    let buttonAttr;
    if (document.querySelectorAll("#gbtn").length) {
      buttonAttr = document.querySelector("#gbtn").getAttribute("onclick");
    }
    let isMaker = document.querySelectorAll(".mv_writer").length;
    let isMfr = document.querySelectorAll(".mv_mfr").length;
    let isLabel = document.querySelectorAll(".mv_label").length;
    let isPerformer = $2(".mv_artist").next().next(".performer_view").length;
    let preview, code;
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
      $$invalidate(19, hidden = false);
      preview.querySelector("img").style.filter = "brightness(0.3)";
    }
    function unSetPreview() {
      $$invalidate(19, hidden = true);
      preview.querySelector("img").style.filter = "brightness(1)";
    }
    function div0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        preview = $$value;
        $$invalidate(17, preview);
      });
    }
    function a0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        code = $$value;
        $$invalidate(18, code);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("movieThumb" in $$props2)
        $$invalidate(2, movieThumb = $$props2.movieThumb);
      if ("performers" in $$props2)
        $$invalidate(0, performers = $$props2.performers);
      if ("movieTitle" in $$props2)
        $$invalidate(3, movieTitle = $$props2.movieTitle);
      if ("movieCode" in $$props2)
        $$invalidate(4, movieCode = $$props2.movieCode);
      if ("movieDuration" in $$props2)
        $$invalidate(5, movieDuration = $$props2.movieDuration);
      if ("movieDate" in $$props2)
        $$invalidate(6, movieDate = $$props2.movieDate);
      if ("movieMaker" in $$props2)
        $$invalidate(7, movieMaker = $$props2.movieMaker);
      if ("linkMaker" in $$props2)
        $$invalidate(8, linkMaker = $$props2.linkMaker);
      if ("movieManucfacturer" in $$props2)
        $$invalidate(9, movieManucfacturer = $$props2.movieManucfacturer);
      if ("linkManucfacturer" in $$props2)
        $$invalidate(10, linkManucfacturer = $$props2.linkManucfacturer);
      if ("movieLabel" in $$props2)
        $$invalidate(11, movieLabel = $$props2.movieLabel);
      if ("linkLabel" in $$props2)
        $$invalidate(12, linkLabel = $$props2.linkLabel);
      if ("movieGenres" in $$props2)
        $$invalidate(1, movieGenres = $$props2.movieGenres);
      if ("linkDate" in $$props2)
        $$invalidate(13, linkDate = $$props2.linkDate);
    };
    return [
      performers,
      movieGenres,
      movieThumb,
      movieTitle,
      movieCode,
      movieDuration,
      movieDate,
      movieMaker,
      linkMaker,
      movieManucfacturer,
      linkManucfacturer,
      movieLabel,
      linkLabel,
      linkDate,
      movieActress,
      movieDetails,
      buttonAttr,
      preview,
      code,
      hidden,
      isMaker,
      isMfr,
      isLabel,
      isPerformer,
      setPreview,
      unSetPreview,
      div0_binding,
      a0_binding
    ];
  }
  class MoviePageContent extends SvelteComponent {
    constructor(options) {
      super();
      init(
        this,
        options,
        instance$2,
        create_fragment$2,
        safe_not_equal,
        {
          movieThumb: 2,
          performers: 0,
          movieTitle: 3,
          movieCode: 4,
          movieDuration: 5,
          movieDate: 6,
          movieMaker: 7,
          linkMaker: 8,
          movieManucfacturer: 9,
          linkManucfacturer: 10,
          movieLabel: 11,
          linkLabel: 12,
          movieGenres: 1,
          linkDate: 13
        },
        null,
        [-1, -1]
      );
    }
  }
  function create_fragment$1(ctx) {
    let moviepagecontent;
    let current;
    const moviepagecontent_spread_levels = [
      /*movieProps*/
      ctx[0]
    ];
    let moviepagecontent_props = {};
    for (let i = 0; i < moviepagecontent_spread_levels.length; i += 1) {
      moviepagecontent_props = assign(moviepagecontent_props, moviepagecontent_spread_levels[i]);
    }
    moviepagecontent = new MoviePageContent({ props: moviepagecontent_props });
    return {
      c() {
        create_component(moviepagecontent.$$.fragment);
      },
      m(target, anchor) {
        mount_component(moviepagecontent, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const moviepagecontent_changes = dirty & /*movieProps*/
        1 ? get_spread_update(moviepagecontent_spread_levels, [get_spread_object(
          /*movieProps*/
          ctx2[0]
        )]) : {};
        moviepagecontent.$set(moviepagecontent_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(moviepagecontent.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(moviepagecontent.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(moviepagecontent, detaching);
      }
    };
  }
  function instance$1($$self, $$props, $$invalidate) {
    let movieProps;
    onMount(() => {
      $$invalidate(0, movieProps = moviePage());
    });
    console.log(movieProps);
    return [movieProps];
  }
  class MoviePage extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    }
  }
  function create_else_block(ctx) {
    let movies;
    let current;
    movies = new Movies({});
    return {
      c() {
        create_component(movies.$$.fragment);
      },
      m(target, anchor) {
        mount_component(movies, target, anchor);
        current = true;
      },
      i(local) {
        if (current)
          return;
        transition_in(movies.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(movies.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(movies, detaching);
      }
    };
  }
  function create_if_block(ctx) {
    let moviepage;
    let current;
    moviepage = new MoviePage({});
    return {
      c() {
        create_component(moviepage.$$.fragment);
      },
      m(target, anchor) {
        mount_component(moviepage, target, anchor);
        current = true;
      },
      i(local) {
        if (current)
          return;
        transition_in(moviepage.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(moviepage.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(moviepage, detaching);
      }
    };
  }
  function create_fragment(ctx) {
    let main;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [create_if_block, create_else_block];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*isMoviePage*/
        ctx2[0] === true
      )
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        main = element("main");
        if_block.c();
      },
      m(target, anchor) {
        insert(target, main, anchor);
        if_blocks[current_block_type_index].m(main, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2);
        if (current_block_type_index !== previous_block_index) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          }
          transition_in(if_block, 1);
          if_block.m(main, null);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(main);
        if_blocks[current_block_type_index].d();
      }
    };
  }
  const movie_page_regex$1 = /https:\/\/db.msin.jp\/.*page\/movie\?.*/i;
  function instance($$self, $$props, $$invalidate) {
    const currentUrl2 = window.location.href;
    let isMoviePage = false;
    if (movie_page_regex$1.test(currentUrl2)) {
      isMoviePage = true;
      console.log("movie page here");
    }
    return [isMoviePage];
  }
  class MoviesList extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, {});
    }
  }
  function Sukebei(movies) {
    let codes = "";
    for (const movie of movies) {
      const code = $2(movie).find(".movie_code").attr("sukebeicode");
      codes += `${code}|`;
    }
    const sukebeis = `https://sukebei.nyaa.si/?q=${codes}&s=seeders&o=desc`;
    console.log("Requesting: " + sukebeis);
    GM_xmlhttpRequest({
      url: sukebeis,
      onload(response) {
        for (const movie of movies) {
          const code = $2(movie).find(".movie_code");
          const containCode = $2(response.responseText).find(`tr:contains("${$2(code).attr("sukebeicode")}")`).first();
          if (containCode.length) {
            const torrent = "https://sukebei.nyaa.si/" + containCode.find("i.fa-download").parent().attr("href");
            const magnet = containCode.find("i.fa-magnet").parent().attr("href");
            const seedsNumber = containCode.children().eq(-3).text();
            $2(movie).find(".link").append(
              `<a href='https://sukebei.nyaa.si/?q=${code.attr(
                "sukebeicode"
              )}&s=seeders&o=desc' target='_blank' class='sukebei'> <img style='height: 1.2em;' src='https://sukebei.nyaa.si/static/favicon.png'></img></a>`
            );
            $2(movie).find(".link").append(
              `<a style='font-size: 1.2em;' class="fa fa-fw fa-download" href='${torrent}'></a>`
            );
            $2(movie).find(".link").append(
              `<a style='font-size: 1.2em; bottom: 0; position: relative; bottom: -1px;' class="fa fa-fw fa-magnet" href='${magnet}'></a>`
            );
            $2(movie).find(".link").append(
              `<p style='font-size: 1.2em; color: lawngreen; font-weight: 600; position: relative; bottom: 5px;'>${seedsNumber}</p>`
            );
            $2(movie).css("filter", "brightness(1)");
          }
        }
      }
    });
  }
  function Sukebei2(codeEl) {
    const code = codeEl.text();
    const sukebeis = `https://sukebei.nyaa.si/?q=${code.toUpperCase()}&s=seeders&o=desc`;
    console.log("Requesting: " + sukebeis);
    GM_xmlhttpRequest({
      url: sukebeis,
      onload(response) {
        const containCode = $2(response.responseText).find(`tbody tr`).first();
        if (containCode.length) {
          const torrent = "https://sukebei.nyaa.si/" + containCode.find("i.fa-download").parent().attr("href");
          const magnet = containCode.find("i.fa-magnet").parent().attr("href");
          const seedsNumber = containCode.children().eq(-3).text();
          $2(codeEl).after("<div class='anjime'></div>");
          $2(".anjime").append(
            `<a href='https://sukebei.nyaa.si/?q=${code}&s=seeders&o=desc' target='_blank' class='sukebei'> <img style='height: 1.2em;' src='https://sukebei.nyaa.si/static/favicon.png'></img></a>`
          );
          $2(".anjime").append(
            `<a style='font-size: 1.2em;' class="fa fa-fw fa-download" href='${torrent}'></a>`
          );
          $2(".anjime").append(
            `<a style='font-size: 1.2em; bottom: 0; position: relative; bottom: -1px;' class="fa fa-fw fa-magnet" href='${magnet}'></a>`
          );
          $2(".anjime").append(
            `<a style='font-size: 1.2em; color: lawngreen; font-weight: 600; position: relative; bottom: 5px;'>${seedsNumber}</a>`
          );
          $2(".anjime").css({
            "margin-top": "0.4rem",
            "display": "flex",
            "justify-content": "center",
            "gap": "0.4rem"
          });
        }
      }
    });
  }
  function JavStore(movies) {
    for (const movie of movies) {
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

a:not( .playbutton, .twitter_icon, .twitter, .no_target, .movie_image a )[target='_blank']::after {
  content: none;
}
img {
  vertical-align: inherit;
}
p {
  margin-top: 0;
}
input[type='checkbox'] + label:before {
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
  const app = new MoviesList({
    target: (() => {
      const app2 = document.createElement("div");
      let movie_view = document.querySelector(".movie_view");
      if (!movie_view) {
        movie_view = document.querySelector(".movie_view_jp");
      }
      if (movie_view) {
        movie_view.after(app2);
      }
      const currentUrl2 = window.location.href;
      const movie_page_regex2 = /https:\/\/db.msin.jp\/.*page\/movie\?.*/i;
      if (movie_page_regex2.test(currentUrl2)) {
        let cwrap = document.querySelector(".content_wrap");
        if (cwrap) {
          cwrap.before(app2);
        }
      }
      return app2;
    })()
  });
  if (!document.querySelector(".movie_view")) {
    $2(".movie_thumbnail").css("aspect-ratio", "3 / 4");
  }
  $2(".movie_view").remove();
  $2(".movie_view_jp").remove();
  const currentUrl = window.location.href;
  const movie_page_regex = /https:\/\/db.msin.jp\/.*page\/movie\?.*/i;
  if (movie_page_regex.test(currentUrl)) {
    $2("#content_wrap").remove();
    const code = document.querySelector("a.code");
    MissAV(code, "");
    Sukebei2($2(".code"));
  } else {
    const movies = $2(".movie");
    JavStore(movies);
    Sukebei(movies);
  }
  return app;
}($);
