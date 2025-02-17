// ==UserScript==
// @name       fc2ppvdb-improved
// @namespace  fc2ppvdb.com-improved
// @version    1.0.4
// @author     KememChan
// @icon       https://www.google.com/s2/favicons?sz=32&domain_url=https%3A%2F%2Ffc2ppvdb.com%2Farticles%2F4558488
// @match      https://fc2ppvdb.com/*
// @require    https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// @grant      GM_addStyle
// @grant      GM_xmlhttpRequest
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const t=document.createElement("style");t.textContent=e,document.head.append(t)})(' @import"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";.resources.svelte-mhmjd3.svelte-mhmjd3{display:flex;justify-content:flex-end;gap:5px;list-style-type:none}.resources.svelte-mhmjd3>.svelte-mhmjd3{transition:transform .3s ease-in-out,color .3s ease-in-out;color:#fff}.seed.svelte-mhmjd3.svelte-mhmjd3{color:#adff2f;transition:all .3s ease-in-out}.resources.svelte-mhmjd3>.svelte-mhmjd3:hover{color:#0f0}.grid-item-wrapper.svelte-12nfdbu.svelte-12nfdbu{transition:transform .3s ease-in-out,filter .3s ease-in-out;will-change:transform,filter}.grid-item-wrapper.svelte-12nfdbu.svelte-12nfdbu:hover{animation:none;transform:scale(1.05)}.grid-item.svelte-12nfdbu.svelte-12nfdbu{position:relative;width:100%;padding-top:56.25%;overflow:hidden;transition:transform .3s ease-in-out;will-change:transform}.grid-item.svelte-12nfdbu.svelte-12nfdbu:hover{animation:none;transform:scale(1.02)}.grid-item.svelte-12nfdbu img.svelte-12nfdbu{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;background-color:#1f2937;transition:filter .3s ease-in-out;will-change:filter}.grid-item.svelte-12nfdbu:hover img.svelte-12nfdbu{animation:none;filter:blur(2px) brightness(.5)}video.svelte-12nfdbu.svelte-12nfdbu{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain}.code.svelte-12nfdbu.svelte-12nfdbu{color:#fff;position:absolute;top:0;background-color:#1f2937e6;padding:5px;font-size:.8rem}.no-video.svelte-12nfdbu.svelte-12nfdbu{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.2rem;padding:10px;background-color:#000c;border-radius:8px;color:#fff;opacity:0;animation:svelte-12nfdbu-popup .3s ease-in-out forwards;will-change:transform,opacity}.flex.svelte-12nfdbu.svelte-12nfdbu{display:flex;justify-content:space-between;align-items:center;transition:transform .3s ease-in-out}.grid-item-title.svelte-12nfdbu.svelte-12nfdbu{color:#fff;font-size:14px;margin-top:5px;width:100%;transition:transform .3s ease-in-out}.title.svelte-12nfdbu.svelte-12nfdbu{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.maker.svelte-12nfdbu.svelte-12nfdbu{color:#6495ed;transition:color .3s ease-in-out,transform .3s ease-in-out}.maker.svelte-12nfdbu.svelte-12nfdbu:hover{color:#1e90ff;transform:scale(1.1)}@keyframes svelte-12nfdbu-popup{0%{opacity:0;transform:translate(-50%,-50%) scale(.8)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}@keyframes svelte-12nfdbu-flash{0%{background-color:#1f2937e6}50%{background-color:#333333e6}to{background-color:#1f2937e6}}@keyframes svelte-12nfdbu-blur{0%{filter:blur(0) brightness(1)}50%{filter:blur(1px) brightness(.7)}to{filter:blur(2px) brightness(.5)}}@keyframes svelte-12nfdbu-scale{0%{transform:scale(1)}50%{transform:scale(1.02)}to{transform:scale(1.05)}}.toggle-container.svelte-9avr2h{margin-bottom:1rem}.grid-container.svelte-9avr2h{display:grid;grid-template-columns:repeat(4,minmax(300px,1fr));gap:1rem;margin:0 auto;animation:svelte-9avr2h-fadeIn 1s ease-out forwards}.toggle-button.svelte-9avr2h{font-size:.8rem;padding:.3rem .7rem;border-radius:5px;border:.5px solid rgba(204,204,204,.5);color:#e4e4e4;background-color:#374151;cursor:pointer;transition:all .3s ease}.toggle-button.active.svelte-9avr2h{background-color:#24581d;color:#e4e4e4;border-color:#cccccc80}@media (min-width: 2000px){.grid-container.svelte-9avr2h{grid-template-columns:repeat(5,1fr);font-size:.9em}}@media (max-width: 1600px){.grid-container.svelte-9avr2h{grid-template-columns:repeat(4,1fr);font-size:.85em}}@media (max-width: 1200px){.grid-container.svelte-9avr2h{grid-template-columns:repeat(3,1fr);font-size:.8em}}@media (max-width: 900px){.grid-container.svelte-9avr2h{grid-template-columns:repeat(2,1fr);font-size:.75em}}@media (max-width: 600px){.grid-container.svelte-9avr2h{grid-template-columns:1fr;font-size:.7em}}@keyframes svelte-9avr2h-fadeIn{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}div.svelte-we16u3{display:inline-block;position:relative;width:100%;height:0;padding-top:56.25%;overflow:hidden}img.svelte-we16u3,video.svelte-we16u3{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;transition:filter .3s ease-in-out;background-color:#1f2937}img.svelte-we16u3:hover{filter:brightness(.5)}.no-video.svelte-we16u3{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:1.5rem} ');

(function ($) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  async function getMovieList() {
    const movies = $("div.flex.flex-wrap.-m-4 > *");
    return await Promise.all(
      Array.from(movies).map(
        async (movie) => {
          var _a, _b, _c, _d;
          return {
            code: $(movie).find("span").first().text().trim() || "",
            thumbnail: ((_a = $(movie).find("img").attr("data-src")) == null ? void 0 : _a.trim()) || ((_b = $(movie).find("img").attr("src")) == null ? void 0 : _b.trim()) || "",
            title: $(movie).find("div.mt-1 a:eq(0)").text().trim() || "",
            titleUrl: ((_c = $(movie).find("div.mt-1 a:eq(0)").attr("href")) == null ? void 0 : _c.trim()) || "",
            maker: $(movie).find("div.mt-1 a:eq(1)").text().trim() || "",
            makerUrl: ((_d = $(movie).find("div.mt-1 a:eq(1)").attr("href")) == null ? void 0 : _d.trim()) || ""
          };
        }
      )
    );
  }
  function noop() {
  }
  function is_promise(value) {
    return !!value && (typeof value === "object" || typeof value === "function") && typeof /** @type {any} */
    value.then === "function";
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
    return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
  }
  let src_url_equal_anchor;
  function src_url_equal(element_src, url) {
    if (element_src === url) return true;
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
      if (iterations[i]) iterations[i].d(detaching);
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
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.data === data) return;
    text2.data = /** @type {string} */
    data;
  }
  function set_style(node, key, value, important) {
    if (value == null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, "");
    }
  }
  function toggle_class(element2, name, toggle) {
    element2.classList.toggle(name, !!toggle);
  }
  let current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  const dirty_components = [];
  const binding_callbacks = [];
  let render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = /* @__PURE__ */ Promise.resolve();
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
      while (binding_callbacks.length) binding_callbacks.pop()();
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
  function flush_render_callbacks(fns) {
    const filtered = [];
    const targets = [];
    render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
    targets.forEach((c) => c());
    render_callbacks = filtered;
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
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2) block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  function handle_promise(promise, info) {
    const token = info.token = {};
    function update2(type, index, key, value) {
      if (info.token !== token) return;
      info.resolved = value;
      let child_ctx = info.ctx;
      if (key !== void 0) {
        child_ctx = child_ctx.slice();
        child_ctx[key] = value;
      }
      const block = type && (info.current = type)(child_ctx);
      let needs_flush = false;
      if (info.block) {
        if (info.blocks) {
          info.blocks.forEach((block2, i) => {
            if (i !== index && block2) {
              group_outros();
              transition_out(block2, 1, 1, () => {
                if (info.blocks[i] === block2) {
                  info.blocks[i] = null;
                }
              });
              check_outros();
            }
          });
        } else {
          info.block.d(1);
        }
        block.c();
        transition_in(block, 1);
        block.m(info.mount(), info.anchor);
        needs_flush = true;
      }
      info.block = block;
      if (info.blocks) info.blocks[index] = block;
      if (needs_flush) {
        flush();
      }
    }
    if (is_promise(promise)) {
      const current_component2 = get_current_component();
      promise.then(
        (value) => {
          set_current_component(current_component2);
          update2(info.then, 1, info.value, value);
          set_current_component(null);
        },
        (error) => {
          set_current_component(current_component2);
          update2(info.catch, 2, info.error, error);
          set_current_component(null);
          if (!info.hasCatch) {
            throw error;
          }
        }
      );
      if (info.current !== info.pending) {
        update2(info.pending, 0);
        return true;
      }
    } else {
      if (info.current !== info.then) {
        update2(info.then, 1, info.value, promise);
        return true;
      }
      info.resolved = /** @type {T} */
      promise;
    }
  }
  function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const { resolved } = info;
    if (info.current === info.then) {
      child_ctx[info.value] = resolved;
    }
    if (info.current === info.catch) {
      child_ctx[info.error] = resolved;
    }
    info.block.p(child_ctx, dirty);
  }
  function ensure_array_like(array_like_or_iterator) {
    return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      flush_render_callbacks($$.after_update);
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
  function init(component, options, instance2, create_fragment2, not_equal, props, append_styles = null, dirty = [-1]) {
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
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
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
      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }
    set_current_component(parent_component);
  }
  class SvelteComponent {
    constructor() {
      /**
       * ### PRIVATE API
       *
       * Do not use, may change at any time
       *
       * @type {any}
       */
      __publicField(this, "$$");
      /**
       * ### PRIVATE API
       *
       * Do not use, may change at any time
       *
       * @type {any}
       */
      __publicField(this, "$$set");
    }
    /** @returns {void} */
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    /**
     * @template {Extract<keyof Events, string>} K
     * @param {K} type
     * @param {((e: Events[K]) => void) | null | undefined} callback
     * @returns {() => void}
     */
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
    /**
     * @param {Partial<Props>} props
     * @returns {void}
     */
    $set(props) {
      if (this.$$set && !is_empty(props)) {
        this.$$.skip_bound = true;
        this.$$set(props);
        this.$$.skip_bound = false;
      }
    }
  }
  const PUBLIC_VERSION = "4";
  if (typeof window !== "undefined")
    (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  async function getThumb(code) {
    let url = `https://javtiful.com/channel/fc2ppv?q=${code}`;
    try {
      const responseText = await new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          url,
          method: "GET",
          onload: (response) => resolve(response.responseText),
          onerror: reject
        });
      });
      const $responseText = $(responseText);
      const $row = $responseText.find("div.row.row-cols-1.row-cols-sm-2");
      const $contains = $row.find(`div:contains('${code}')`).first();
      const $img = $contains.find("img").attr("data-src");
      return $img;
    } catch (error) {
      console.error("Error fetching thumbnail:", error);
      return null;
    }
  }
  const videoPreviewCache = {};
  async function getVideoPreview(code, missav) {
    let url = `https://123av.com/en/search?keyword=${code}`;
    if (missav) {
      url = `https://missav.ws/en/search/${code}`;
    }
    if (videoPreviewCache[url] !== void 0) {
      return videoPreviewCache[url];
    }
    try {
      const responseText = await new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          url,
          method: "GET",
          onload: (response) => resolve(response.responseText),
          onerror: reject
        });
      });
      const $responseText = $(responseText);
      let previewUrl;
      if (missav) {
        const $gridFirst = $responseText.find("div.grid.grid-cols-2").first();
        previewUrl = $gridFirst.find("video").attr("data-src");
      } else {
        const $gridFirst = $responseText.find("div.col-6.col-sm-4.col-lg-3").first();
        previewUrl = $gridFirst.find("div.thumb").attr("data-preview");
        if (!previewUrl) {
          return await getVideoPreview(code, true);
        }
      }
      if (previewUrl) {
        const previewBlob = await new Promise((resolve, reject) => {
          _GM_xmlhttpRequest({
            url: previewUrl,
            responseType: "blob",
            onload: (r) => resolve(r.response),
            onerror: reject
          });
        });
        const blobUrl = URL.createObjectURL(previewBlob);
        videoPreviewCache[url] = blobUrl;
        return blobUrl;
      } else {
        videoPreviewCache[url] = null;
        return null;
      }
    } catch (error) {
      console.error("Error fetching video preview:", error);
      videoPreviewCache[url] = null;
      return null;
    }
  }
  function create_if_block$2(ctx) {
    let a0;
    let i0;
    let a0_href_value;
    let t0;
    let a1;
    let i1;
    let a1_href_value;
    let t1;
    let a2;
    let i2;
    let a2_href_value;
    let t2;
    let a3;
    let i3;
    let a3_href_value;
    let t3;
    let a4;
    let i4;
    let t4;
    let a5;
    let i5;
    let t5;
    let button;
    let t6;
    return {
      c() {
        a0 = element("a");
        i0 = element("i");
        t0 = space();
        a1 = element("a");
        i1 = element("i");
        t1 = space();
        a2 = element("a");
        i2 = element("i");
        t2 = space();
        a3 = element("a");
        i3 = element("i");
        t3 = space();
        a4 = element("a");
        i4 = element("i");
        t4 = space();
        a5 = element("a");
        i5 = element("i");
        t5 = space();
        button = element("button");
        t6 = text(
          /*seed*/
          ctx[3]
        );
        attr(i0, "class", "fa-solid fa-globe");
        attr(i0, "aria-hidden", "true");
        attr(a0, "class", "missav svelte-mhmjd3");
        attr(a0, "href", a0_href_value = "https://missav.ws/en/search/" + /*code*/
        ctx[0]);
        attr(a0, "target", "_blank");
        attr(a0, "rel", "noopener");
        attr(a0, "title", "Search on MissAV");
        attr(i1, "class", "fa-solid fa-globe");
        attr(i1, "aria-hidden", "true");
        attr(a1, "class", "njav svelte-mhmjd3");
        attr(a1, "href", a1_href_value = "https://123av.com/en/search?keyword=" + /*code*/
        ctx[0]);
        attr(a1, "target", "_blank");
        attr(a1, "rel", "noopener");
        attr(a1, "title", "Search on Njav");
        attr(i2, "class", "fa-solid fa-image");
        attr(i2, "aria-hidden", "true");
        attr(a2, "href", a2_href_value = "https://img.javstore.net/search/images/?q=" + /*code*/
        ctx[0]);
        attr(a2, "target", "_blank");
        attr(a2, "rel", "noopener");
        attr(a2, "title", "Search Images");
        attr(a2, "class", "svelte-mhmjd3");
        attr(i3, "class", "fa-solid fa-magnifying-glass");
        attr(i3, "aria-hidden", "true");
        attr(a3, "class", "sukebei svelte-mhmjd3");
        attr(a3, "href", a3_href_value = "https://sukebei.nyaa.si/?f=0&c=0_0&q=" + /*code*/
        ctx[0] + "&s=seeders&o=desc");
        attr(a3, "target", "_blank");
        attr(a3, "rel", "noopener");
        attr(a3, "title", "Search on Sukebei");
        attr(i4, "class", "fa-solid fa-arrow-down");
        attr(i4, "aria-hidden", "true");
        attr(a4, "class", "torrent svelte-mhmjd3");
        attr(
          a4,
          "href",
          /*torrent*/
          ctx[1]
        );
        attr(a4, "rel", "noopener");
        attr(a4, "title", "Download Torrent");
        attr(i5, "class", "fa-solid fa-magnet");
        attr(i5, "aria-hidden", "true");
        attr(a5, "class", "magnet svelte-mhmjd3");
        attr(
          a5,
          "href",
          /*magnet*/
          ctx[2]
        );
        attr(a5, "rel", "noopener");
        attr(a5, "title", "Download with Magnet");
        attr(button, "class", "seed svelte-mhmjd3");
        attr(button, "type", "button");
      },
      m(target, anchor) {
        insert(target, a0, anchor);
        append(a0, i0);
        insert(target, t0, anchor);
        insert(target, a1, anchor);
        append(a1, i1);
        insert(target, t1, anchor);
        insert(target, a2, anchor);
        append(a2, i2);
        insert(target, t2, anchor);
        insert(target, a3, anchor);
        append(a3, i3);
        insert(target, t3, anchor);
        insert(target, a4, anchor);
        append(a4, i4);
        insert(target, t4, anchor);
        insert(target, a5, anchor);
        append(a5, i5);
        insert(target, t5, anchor);
        insert(target, button, anchor);
        append(button, t6);
      },
      p(ctx2, dirty) {
        if (dirty & /*code*/
        1 && a0_href_value !== (a0_href_value = "https://missav.ws/en/search/" + /*code*/
        ctx2[0])) {
          attr(a0, "href", a0_href_value);
        }
        if (dirty & /*code*/
        1 && a1_href_value !== (a1_href_value = "https://123av.com/en/search?keyword=" + /*code*/
        ctx2[0])) {
          attr(a1, "href", a1_href_value);
        }
        if (dirty & /*code*/
        1 && a2_href_value !== (a2_href_value = "https://img.javstore.net/search/images/?q=" + /*code*/
        ctx2[0])) {
          attr(a2, "href", a2_href_value);
        }
        if (dirty & /*code*/
        1 && a3_href_value !== (a3_href_value = "https://sukebei.nyaa.si/?f=0&c=0_0&q=" + /*code*/
        ctx2[0] + "&s=seeders&o=desc")) {
          attr(a3, "href", a3_href_value);
        }
        if (dirty & /*torrent*/
        2) {
          attr(
            a4,
            "href",
            /*torrent*/
            ctx2[1]
          );
        }
        if (dirty & /*magnet*/
        4) {
          attr(
            a5,
            "href",
            /*magnet*/
            ctx2[2]
          );
        }
        if (dirty & /*seed*/
        8) set_data(
          t6,
          /*seed*/
          ctx2[3]
        );
      },
      d(detaching) {
        if (detaching) {
          detach(a0);
          detach(t0);
          detach(a1);
          detach(t1);
          detach(a2);
          detach(t2);
          detach(a3);
          detach(t3);
          detach(a4);
          detach(t4);
          detach(a5);
          detach(t5);
          detach(button);
        }
      }
    };
  }
  function create_fragment$3(ctx) {
    let li;
    let if_block = (
      /*torrent*/
      ctx[1] && create_if_block$2(ctx)
    );
    return {
      c() {
        li = element("li");
        if (if_block) if_block.c();
        attr(li, "class", "resources svelte-mhmjd3");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        if (if_block) if_block.m(li, null);
      },
      p(ctx2, [dirty]) {
        if (
          /*torrent*/
          ctx2[1]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block$2(ctx2);
            if_block.c();
            if_block.m(li, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(li);
        }
        if (if_block) if_block.d();
      }
    };
  }
  function instance$3($$self, $$props, $$invalidate) {
    let { code } = $$props;
    let { torrent } = $$props;
    let { magnet } = $$props;
    let { seed } = $$props;
    $$self.$$set = ($$props2) => {
      if ("code" in $$props2) $$invalidate(0, code = $$props2.code);
      if ("torrent" in $$props2) $$invalidate(1, torrent = $$props2.torrent);
      if ("magnet" in $$props2) $$invalidate(2, magnet = $$props2.magnet);
      if ("seed" in $$props2) $$invalidate(3, seed = $$props2.seed);
    };
    return [code, torrent, magnet, seed];
  }
  class Resources extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$3, create_fragment$3, safe_not_equal, { code: 0, torrent: 1, magnet: 2, seed: 3 });
    }
  }
  function create_if_block_2$1(ctx) {
    let await_block_anchor;
    let promise;
    let info = {
      ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block_1,
      then: create_then_block_1,
      catch: create_catch_block_1,
      value: 13
    };
    handle_promise(promise = getThumb(
      /*movie*/
      ctx[1].code
    ), info);
    return {
      c() {
        await_block_anchor = empty();
        info.block.c();
      },
      m(target, anchor) {
        insert(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);
        info.mount = () => await_block_anchor.parentNode;
        info.anchor = await_block_anchor;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        info.ctx = ctx;
        if (dirty & /*movie*/
        2 && promise !== (promise = getThumb(
          /*movie*/
          ctx[1].code
        )) && handle_promise(promise, info)) ;
        else {
          update_await_block_branch(info, ctx, dirty);
        }
      },
      d(detaching) {
        if (detaching) {
          detach(await_block_anchor);
        }
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
  }
  function create_catch_block_1(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_then_block_1(ctx) {
    let img;
    let img_src_value;
    let img_alt_value;
    return {
      c() {
        var _a;
        img = element("img");
        if (!src_url_equal(img.src, img_src_value = /*thumbnail*/
        ((_a = ctx[13]) == null ? void 0 : _a.toString()) ?? /*movie*/
        ctx[1].thumbnail)) attr(img, "src", img_src_value);
        attr(img, "alt", img_alt_value = /*movie*/
        ctx[1].title);
        attr(img, "loading", "lazy");
        attr(img, "class", "svelte-12nfdbu");
      },
      m(target, anchor) {
        insert(target, img, anchor);
      },
      p(ctx2, dirty) {
        var _a;
        if (dirty & /*movie*/
        2 && !src_url_equal(img.src, img_src_value = /*thumbnail*/
        ((_a = ctx2[13]) == null ? void 0 : _a.toString()) ?? /*movie*/
        ctx2[1].thumbnail)) {
          attr(img, "src", img_src_value);
        }
        if (dirty & /*movie*/
        2 && img_alt_value !== (img_alt_value = /*movie*/
        ctx2[1].title)) {
          attr(img, "alt", img_alt_value);
        }
      },
      d(detaching) {
        if (detaching) {
          detach(img);
        }
      }
    };
  }
  function create_pending_block_1(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_if_block$1(ctx) {
    let await_block_anchor;
    let promise;
    let info = {
      ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block$1,
      then: create_then_block$1,
      catch: create_catch_block$1,
      value: 12
    };
    handle_promise(promise = getVideoPreview(
      /*movie*/
      ctx[1].code,
      false
    ), info);
    return {
      c() {
        await_block_anchor = empty();
        info.block.c();
      },
      m(target, anchor) {
        insert(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);
        info.mount = () => await_block_anchor.parentNode;
        info.anchor = await_block_anchor;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        info.ctx = ctx;
        if (dirty & /*movie*/
        2 && promise !== (promise = getVideoPreview(
          /*movie*/
          ctx[1].code,
          false
        )) && handle_promise(promise, info)) ;
        else {
          update_await_block_branch(info, ctx, dirty);
        }
      },
      d(detaching) {
        if (detaching) {
          detach(await_block_anchor);
        }
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
  }
  function create_catch_block$1(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_then_block$1(ctx) {
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (
        /*videoPreview*/
        ctx2[12]
      ) return create_if_block_1$1;
      return create_else_block$1;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d(detaching) {
        if (detaching) {
          detach(if_block_anchor);
        }
        if_block.d(detaching);
      }
    };
  }
  function create_else_block$1(ctx) {
    let p;
    return {
      c() {
        p = element("p");
        p.textContent = "No Preview 😭";
        attr(p, "class", "no-video svelte-12nfdbu");
      },
      m(target, anchor) {
        insert(target, p, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(p);
        }
      }
    };
  }
  function create_if_block_1$1(ctx) {
    let video;
    let video_src_value;
    return {
      c() {
        video = element("video");
        if (!src_url_equal(video.src, video_src_value = /*videoPreview*/
        ctx[12])) attr(video, "src", video_src_value);
        video.autoplay = true;
        video.playsInline = true;
        video.loop = true;
        video.muted = true;
        attr(video, "preload", "none");
        attr(video, "class", "svelte-12nfdbu");
      },
      m(target, anchor) {
        insert(target, video, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & /*movie*/
        2 && !src_url_equal(video.src, video_src_value = /*videoPreview*/
        ctx2[12])) {
          attr(video, "src", video_src_value);
        }
      },
      d(detaching) {
        if (detaching) {
          detach(video);
        }
      }
    };
  }
  function create_pending_block$1(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_fragment$2(ctx) {
    var _a, _b, _c;
    let div4;
    let div1;
    let div0;
    let img;
    let img_src_value;
    let img_alt_value;
    let t0;
    let t1;
    let t2;
    let span;
    let t3;
    let t4_value = (
      /*movie*/
      ctx[1].code + ""
    );
    let t4;
    let t5;
    let div3;
    let a0;
    let t6_value = (
      /*movie*/
      ctx[1].title + ""
    );
    let t6;
    let a0_href_value;
    let a0_title_value;
    let t7;
    let div2;
    let a1;
    let t8_value = (
      /*movie*/
      ctx[1].maker + ""
    );
    let t8;
    let a1_href_value;
    let t9;
    let resources;
    let current;
    let mounted;
    let dispose;
    let if_block0 = (
      /*thumbLoaded*/
      ctx[6] && /*isThumb*/
      ctx[2] && create_if_block_2$1(ctx)
    );
    let if_block1 = (
      /*mouseHover*/
      (ctx[4] || /*thumbLoaded*/
      ctx[6] && /*isPreview*/
      ctx[3]) && create_if_block$1(ctx)
    );
    resources = new Resources({
      props: {
        code: (
          /*movie*/
          ctx[1].code
        ),
        torrent: (
          /*torrentDataArray*/
          ((_a = ctx[0][0]) == null ? void 0 : _a.torrent) ?? null
        ),
        magnet: (
          /*torrentDataArray*/
          ((_b = ctx[0][0]) == null ? void 0 : _b.magnet) ?? null
        ),
        seed: (
          /*torrentDataArray*/
          ((_c = ctx[0][0]) == null ? void 0 : _c.seed) ?? null
        )
      }
    });
    return {
      c() {
        div4 = element("div");
        div1 = element("div");
        div0 = element("div");
        img = element("img");
        t0 = space();
        if (if_block0) if_block0.c();
        t1 = space();
        if (if_block1) if_block1.c();
        t2 = space();
        span = element("span");
        t3 = text("FC2-PPV-");
        t4 = text(t4_value);
        t5 = space();
        div3 = element("div");
        a0 = element("a");
        t6 = text(t6_value);
        t7 = space();
        div2 = element("div");
        a1 = element("a");
        t8 = text(t8_value);
        t9 = space();
        create_component(resources.$$.fragment);
        if (!src_url_equal(img.src, img_src_value = /*movie*/
        ctx[1].thumbnail)) attr(img, "src", img_src_value);
        attr(img, "alt", img_alt_value = /*movie*/
        ctx[1].title);
        attr(img, "loading", "lazy");
        attr(img, "class", "svelte-12nfdbu");
        attr(span, "class", "code svelte-12nfdbu");
        attr(div1, "class", "grid-item svelte-12nfdbu");
        attr(a0, "class", "title svelte-12nfdbu");
        attr(a0, "href", a0_href_value = /*movie*/
        ctx[1].titleUrl);
        attr(a0, "title", a0_title_value = /*movie*/
        ctx[1].title);
        attr(a0, "rel", "noopener");
        attr(a1, "class", "maker svelte-12nfdbu");
        attr(a1, "href", a1_href_value = /*movie*/
        ctx[1].makerUrl);
        attr(a1, "rel", "noopener");
        attr(div2, "class", "flex svelte-12nfdbu");
        attr(div3, "class", "grid-item-title svelte-12nfdbu");
        attr(div4, "class", "grid-item-wrapper svelte-12nfdbu");
        set_style(div4, "filter", "brightness(" + /*torrentDataArray*/
        (ctx[0][0] ? "1" : "0.5") + ")");
        set_style(div4, "transition", "filter 0.3s ease-in-out");
      },
      m(target, anchor) {
        insert(target, div4, anchor);
        append(div4, div1);
        append(div1, div0);
        append(div0, img);
        append(div0, t0);
        if (if_block0) if_block0.m(div0, null);
        append(div0, t1);
        if (if_block1) if_block1.m(div0, null);
        append(div1, t2);
        append(div1, span);
        append(span, t3);
        append(span, t4);
        ctx[11](div1);
        append(div4, t5);
        append(div4, div3);
        append(div3, a0);
        append(a0, t6);
        append(div3, t7);
        append(div3, div2);
        append(div2, a1);
        append(a1, t8);
        append(div2, t9);
        mount_component(resources, div2, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              div0,
              "mouseover",
              /*mouseover_handler*/
              ctx[8]
            ),
            listen(
              div0,
              "mouseleave",
              /*mouseleave_handler*/
              ctx[9]
            ),
            listen(
              div0,
              "touchstart",
              /*touchstart_handler*/
              ctx[10],
              { passive: true }
            ),
            action_destroyer(
              /*observeIntersection*/
              ctx[7].call(null, div1)
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        var _a2, _b2, _c2;
        if (!current || dirty & /*movie*/
        2 && !src_url_equal(img.src, img_src_value = /*movie*/
        ctx2[1].thumbnail)) {
          attr(img, "src", img_src_value);
        }
        if (!current || dirty & /*movie*/
        2 && img_alt_value !== (img_alt_value = /*movie*/
        ctx2[1].title)) {
          attr(img, "alt", img_alt_value);
        }
        if (
          /*thumbLoaded*/
          ctx2[6] && /*isThumb*/
          ctx2[2]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_2$1(ctx2);
            if_block0.c();
            if_block0.m(div0, t1);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*mouseHover*/
          ctx2[4] || /*thumbLoaded*/
          ctx2[6] && /*isPreview*/
          ctx2[3]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block$1(ctx2);
            if_block1.c();
            if_block1.m(div0, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if ((!current || dirty & /*movie*/
        2) && t4_value !== (t4_value = /*movie*/
        ctx2[1].code + "")) set_data(t4, t4_value);
        if ((!current || dirty & /*movie*/
        2) && t6_value !== (t6_value = /*movie*/
        ctx2[1].title + "")) set_data(t6, t6_value);
        if (!current || dirty & /*movie*/
        2 && a0_href_value !== (a0_href_value = /*movie*/
        ctx2[1].titleUrl)) {
          attr(a0, "href", a0_href_value);
        }
        if (!current || dirty & /*movie*/
        2 && a0_title_value !== (a0_title_value = /*movie*/
        ctx2[1].title)) {
          attr(a0, "title", a0_title_value);
        }
        if ((!current || dirty & /*movie*/
        2) && t8_value !== (t8_value = /*movie*/
        ctx2[1].maker + "")) set_data(t8, t8_value);
        if (!current || dirty & /*movie*/
        2 && a1_href_value !== (a1_href_value = /*movie*/
        ctx2[1].makerUrl)) {
          attr(a1, "href", a1_href_value);
        }
        const resources_changes = {};
        if (dirty & /*movie*/
        2) resources_changes.code = /*movie*/
        ctx2[1].code;
        if (dirty & /*torrentDataArray*/
        1) resources_changes.torrent = /*torrentDataArray*/
        ((_a2 = ctx2[0][0]) == null ? void 0 : _a2.torrent) ?? null;
        if (dirty & /*torrentDataArray*/
        1) resources_changes.magnet = /*torrentDataArray*/
        ((_b2 = ctx2[0][0]) == null ? void 0 : _b2.magnet) ?? null;
        if (dirty & /*torrentDataArray*/
        1) resources_changes.seed = /*torrentDataArray*/
        ((_c2 = ctx2[0][0]) == null ? void 0 : _c2.seed) ?? null;
        resources.$set(resources_changes);
        if (!current || dirty & /*torrentDataArray*/
        1) {
          set_style(div4, "filter", "brightness(" + /*torrentDataArray*/
          (ctx2[0][0] ? "1" : "0.5") + ")");
        }
      },
      i(local) {
        if (current) return;
        transition_in(resources.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(resources.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div4);
        }
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        ctx[11](null);
        destroy_component(resources);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance$2($$self, $$props, $$invalidate) {
    let mouseHover = false;
    let { torrentDataArray = [] } = $$props;
    let { movie } = $$props;
    let { isThumb } = $$props;
    let { isPreview } = $$props;
    let gridItemRef;
    let thumbLoaded = false;
    const observeIntersection = (element2) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !thumbLoaded) {
            $$invalidate(6, thumbLoaded = true);
          }
        });
      });
      observer.observe(element2);
      return observer;
    };
    const mouseover_handler = () => $$invalidate(4, mouseHover = true);
    const mouseleave_handler = () => $$invalidate(4, mouseHover = false);
    const touchstart_handler = () => $$invalidate(4, mouseHover = true);
    function div1_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        gridItemRef = $$value;
        $$invalidate(5, gridItemRef);
      });
    }
    $$self.$$set = ($$props2) => {
      if ("torrentDataArray" in $$props2) $$invalidate(0, torrentDataArray = $$props2.torrentDataArray);
      if ("movie" in $$props2) $$invalidate(1, movie = $$props2.movie);
      if ("isThumb" in $$props2) $$invalidate(2, isThumb = $$props2.isThumb);
      if ("isPreview" in $$props2) $$invalidate(3, isPreview = $$props2.isPreview);
    };
    return [
      torrentDataArray,
      movie,
      isThumb,
      isPreview,
      mouseHover,
      gridItemRef,
      thumbLoaded,
      observeIntersection,
      mouseover_handler,
      mouseleave_handler,
      touchstart_handler,
      div1_binding
    ];
  }
  class MovieList extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$2, create_fragment$2, safe_not_equal, {
        torrentDataArray: 0,
        movie: 1,
        isThumb: 2,
        isPreview: 3
      });
    }
  }
  const sukebeiCache = {};
  async function getTorrentDataFromSukebei(url) {
    if (sukebeiCache[url] !== void 0) {
      return Promise.resolve(sukebeiCache[url]);
    }
    const newUrl = `https://sukebei.nyaa.si/?f=0&c=0_0&q=${url}&s=seeders&o=desc`;
    return new Promise((resolve, reject) => {
      _GM_xmlhttpRequest({
        url: newUrl,
        onload(response) {
          const $torrentRows = $(response.responseText).find("tbody > *");
          const torrentDataArray = $torrentRows.map((_, row) => {
            const $row = $(row);
            return {
              title: $row.find("td a:eq(1)").text(),
              torrent: "https://sukebei.nyaa.si" + ($row.find("td a i.fa-download").parent().attr("href") ?? ""),
              magnet: $row.find("td a i.fa-magnet").parent().attr("href") ?? "",
              seed: $row.find("td:eq(-3)").text()
            };
          }).get();
          sukebeiCache[url] = torrentDataArray;
          resolve(torrentDataArray);
        },
        onerror(response) {
          reject(response);
        }
      });
    });
  }
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    return child_ctx;
  }
  function create_each_block(ctx) {
    let movielistpage;
    let current;
    function func(...args) {
      return (
        /*func*/
        ctx[6](
          /*movie*/
          ctx[7],
          ...args
        )
      );
    }
    movielistpage = new MovieList({
      props: {
        movie: (
          /*movie*/
          ctx[7]
        ),
        isThumb: (
          /*isThumb*/
          ctx[0]
        ),
        isPreview: (
          /*isPreview*/
          ctx[1]
        ),
        torrentDataArray: (
          /*torrentDataArray*/
          ctx[3].filter(func).map(func_1) || null
        )
      }
    });
    return {
      c() {
        create_component(movielistpage.$$.fragment);
      },
      m(target, anchor) {
        mount_component(movielistpage, target, anchor);
        current = true;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        const movielistpage_changes = {};
        if (dirty & /*movieList*/
        4) movielistpage_changes.movie = /*movie*/
        ctx[7];
        if (dirty & /*isThumb*/
        1) movielistpage_changes.isThumb = /*isThumb*/
        ctx[0];
        if (dirty & /*isPreview*/
        2) movielistpage_changes.isPreview = /*isPreview*/
        ctx[1];
        if (dirty & /*torrentDataArray, movieList*/
        12) movielistpage_changes.torrentDataArray = /*torrentDataArray*/
        ctx[3].filter(func).map(func_1) || null;
        movielistpage.$set(movielistpage_changes);
      },
      i(local) {
        if (current) return;
        transition_in(movielistpage.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(movielistpage.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(movielistpage, detaching);
      }
    };
  }
  function create_fragment$1(ctx) {
    let div0;
    let button0;
    let t0;
    let t1_value = (
      /*isThumb*/
      ctx[0] ? "ON" : "OFF"
    );
    let t1;
    let t2;
    let button1;
    let t3;
    let t4_value = (
      /*isPreview*/
      ctx[1] ? "ON" : "OFF"
    );
    let t4;
    let t5;
    let div1;
    let current;
    let mounted;
    let dispose;
    let each_value = ensure_array_like(
      /*movieList*/
      ctx[2]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        div0 = element("div");
        button0 = element("button");
        t0 = text("Javtiful Thumbnail ");
        t1 = text(t1_value);
        t2 = space();
        button1 = element("button");
        t3 = text("View All Preview ");
        t4 = text(t4_value);
        t5 = space();
        div1 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(button0, "class", "toggle-button svelte-9avr2h");
        toggle_class(
          button0,
          "active",
          /*isThumb*/
          ctx[0]
        );
        attr(button1, "class", "toggle-button svelte-9avr2h");
        toggle_class(
          button1,
          "active",
          /*isPreview*/
          ctx[1]
        );
        attr(div0, "class", "toggle-container svelte-9avr2h");
        attr(div1, "class", "grid-container svelte-9avr2h");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        append(div0, button0);
        append(button0, t0);
        append(button0, t1);
        append(div0, t2);
        append(div0, button1);
        append(button1, t3);
        append(button1, t4);
        insert(target, t5, anchor);
        insert(target, div1, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div1, null);
          }
        }
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler*/
              ctx[4]
            ),
            listen(
              button1,
              "click",
              /*click_handler_1*/
              ctx[5]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if ((!current || dirty & /*isThumb*/
        1) && t1_value !== (t1_value = /*isThumb*/
        ctx2[0] ? "ON" : "OFF")) set_data(t1, t1_value);
        if (!current || dirty & /*isThumb*/
        1) {
          toggle_class(
            button0,
            "active",
            /*isThumb*/
            ctx2[0]
          );
        }
        if ((!current || dirty & /*isPreview*/
        2) && t4_value !== (t4_value = /*isPreview*/
        ctx2[1] ? "ON" : "OFF")) set_data(t4, t4_value);
        if (!current || dirty & /*isPreview*/
        2) {
          toggle_class(
            button1,
            "active",
            /*isPreview*/
            ctx2[1]
          );
        }
        if (dirty & /*movieList, isThumb, isPreview, torrentDataArray*/
        15) {
          each_value = ensure_array_like(
            /*movieList*/
            ctx2[2]
          );
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
              each_blocks[i].m(div1, null);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current) return;
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
        if (detaching) {
          detach(div0);
          detach(t5);
          detach(div1);
        }
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  const CHUNK_SIZE = 30;
  const func_1 = (data) => ({ ...data, seed: data.seed.toString() });
  function instance$1($$self, $$props, $$invalidate) {
    let movieList = [];
    let torrentDataArray = [];
    let isThumb = JSON.parse(localStorage.getItem("isThumb") || "false");
    let isPreview = JSON.parse(localStorage.getItem("isPreview") || "false");
    onMount(async () => {
      $$invalidate(2, movieList = await getMovieList());
      const codes = Array.from(new Set(movieList.map((movie) => movie.code)));
      const chunks = [];
      for (let i = 0; i < codes.length; i += CHUNK_SIZE) {
        chunks.push(codes.slice(i, i + CHUNK_SIZE).join("|"));
      }
      const results = await Promise.all(chunks.map(getTorrentDataFromSukebei));
      $$invalidate(3, torrentDataArray = results.flat());
    });
    const click_handler = () => $$invalidate(0, isThumb = !isThumb);
    const click_handler_1 = () => $$invalidate(1, isPreview = !isPreview);
    const func = (movie, data) => data.title.includes(movie.code);
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*isThumb*/
      1) {
        {
          localStorage.setItem("isThumb", JSON.stringify(isThumb));
        }
      }
      if ($$self.$$.dirty & /*isPreview*/
      2) {
        {
          localStorage.setItem("isPreview", JSON.stringify(isPreview));
        }
      }
    };
    return [
      isThumb,
      isPreview,
      movieList,
      torrentDataArray,
      click_handler,
      click_handler_1,
      func
    ];
  }
  class Movies extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    }
  }
  function getMovieDetail() {
    const $El = $("div.flex.flex-col.items-start.rounded-lg");
    const movieDetail = {
      code: $El.find("span.text-white.ml-2").first().text(),
      thumbnail: $El.find("img").first().attr("src")
    };
    return movieDetail;
  }
  function create_if_block_1(ctx) {
    let await_block_anchor;
    let info = {
      ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block,
      then: create_then_block,
      catch: create_catch_block,
      value: 5
    };
    handle_promise(getVideoPreview(
      /*movieDetail*/
      ctx[2].code,
      false
    ), info);
    return {
      c() {
        await_block_anchor = empty();
        info.block.c();
      },
      m(target, anchor) {
        insert(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);
        info.mount = () => await_block_anchor.parentNode;
        info.anchor = await_block_anchor;
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        update_await_block_branch(info, ctx, dirty);
      },
      d(detaching) {
        if (detaching) {
          detach(await_block_anchor);
        }
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
  }
  function create_catch_block(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_then_block(ctx) {
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (
        /*videoPreview*/
        ctx2[5]
      ) return create_if_block_2;
      return create_else_block;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type(ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p(ctx2, dirty) {
        if_block.p(ctx2, dirty);
      },
      d(detaching) {
        if (detaching) {
          detach(if_block_anchor);
        }
        if_block.d(detaching);
      }
    };
  }
  function create_else_block(ctx) {
    let p;
    return {
      c() {
        p = element("p");
        p.textContent = "No Preview 😭";
        attr(p, "class", "no-video svelte-we16u3");
      },
      m(target, anchor) {
        insert(target, p, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(p);
        }
      }
    };
  }
  function create_if_block_2(ctx) {
    let video;
    let video_src_value;
    return {
      c() {
        video = element("video");
        if (!src_url_equal(video.src, video_src_value = /*videoPreview*/
        ctx[5])) attr(video, "src", video_src_value);
        video.autoplay = true;
        video.loop = true;
        attr(video, "class", "svelte-we16u3");
      },
      m(target, anchor) {
        insert(target, video, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(video);
        }
      }
    };
  }
  function create_pending_block(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_if_block(ctx) {
    let resources;
    let current;
    resources = new Resources({
      props: {
        code: (
          /*movieDetail*/
          ctx[2].code
        ),
        torrent: (
          /*torrentData*/
          ctx[1][0].torrent
        ),
        magnet: (
          /*torrentData*/
          ctx[1][0].magnet
        ),
        seed: (
          /*torrentData*/
          ctx[1][0].seed
        )
      }
    });
    return {
      c() {
        create_component(resources.$$.fragment);
      },
      m(target, anchor) {
        mount_component(resources, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const resources_changes = {};
        if (dirty & /*torrentData*/
        2) resources_changes.torrent = /*torrentData*/
        ctx2[1][0].torrent;
        if (dirty & /*torrentData*/
        2) resources_changes.magnet = /*torrentData*/
        ctx2[1][0].magnet;
        if (dirty & /*torrentData*/
        2) resources_changes.seed = /*torrentData*/
        ctx2[1][0].seed;
        resources.$set(resources_changes);
      },
      i(local) {
        if (current) return;
        transition_in(resources.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(resources.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(resources, detaching);
      }
    };
  }
  function create_fragment(ctx) {
    let div;
    let img;
    let img_src_value;
    let t0;
    let t1;
    let if_block1_anchor;
    let current;
    let mounted;
    let dispose;
    let if_block0 = (
      /*mouseHover*/
      ctx[0] && create_if_block_1(ctx)
    );
    let if_block1 = (
      /*torrentData*/
      ctx[1].length > 0 && create_if_block(ctx)
    );
    return {
      c() {
        div = element("div");
        img = element("img");
        t0 = space();
        if (if_block0) if_block0.c();
        t1 = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty();
        if (!src_url_equal(img.src, img_src_value = /*movieDetail*/
        ctx[2].thumbnail)) attr(img, "src", img_src_value);
        attr(
          img,
          "alt",
          /*movieDetail*/
          ctx[2].code
        );
        attr(img, "class", "svelte-we16u3");
        attr(div, "class", "svelte-we16u3");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, img);
        append(div, t0);
        if (if_block0) if_block0.m(div, null);
        insert(target, t1, anchor);
        if (if_block1) if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              div,
              "touchstart",
              /*handleMouseEnter*/
              ctx[3],
              { passive: true }
            ),
            listen(
              div,
              "focus",
              /*handleMouseEnter*/
              ctx[3]
            ),
            listen(
              div,
              "mouseover",
              /*handleMouseEnter*/
              ctx[3]
            ),
            listen(
              div,
              "mouseleave",
              /*handleMouseLeave*/
              ctx[4]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (
          /*mouseHover*/
          ctx2[0]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_1(ctx2);
            if_block0.c();
            if_block0.m(div, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*torrentData*/
          ctx2[1].length > 0
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & /*torrentData*/
            2) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current) return;
        transition_in(if_block1);
        current = true;
      },
      o(local) {
        transition_out(if_block1);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div);
          detach(t1);
          detach(if_block1_anchor);
        }
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d(detaching);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let movieDetail = getMovieDetail();
    let mouseHover = false;
    let torrentData = [];
    onMount(async () => {
      $$invalidate(1, torrentData = await getTorrentDataFromSukebei(movieDetail.code));
    });
    const handleMouseEnter = () => $$invalidate(0, mouseHover = true);
    const handleMouseLeave = () => $$invalidate(0, mouseHover = false);
    return [mouseHover, torrentData, movieDetail, handleMouseEnter, handleMouseLeave];
  }
  class MovieDetail extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, {});
    }
  }
  const waitForMoviesTarget = () => {
    const moviesTarget = $("div.flex.flex-wrap.-m-4");
    if (moviesTarget.length) {
      const newDivMovies = $("<div>");
      new Movies({
        target: newDivMovies[0]
      });
      moviesTarget.replaceWith(newDivMovies);
    } else {
      setTimeout(waitForMoviesTarget, 1e3);
    }
  };
  waitForMoviesTarget();
  const movieDetailTarget = $(
    "div.flex.flex-col.items-start.rounded-lg > div > a > img"
  ).parent();
  if (movieDetailTarget.length) {
    const newDivDetail = $("<div>");
    new MovieDetail({
      target: newDivDetail[0]
    });
    movieDetailTarget.replaceWith(newDivDetail);
  }
  const containerEl = $("div.container");
  if (containerEl.length) {
    containerEl.removeClass("container");
  }
  const idEl = $("span.text-white.ml-2").first();
  if (idEl.length && /^\d+$/.test(idEl.text())) {
    const originalText = idEl.text();
    idEl.text("FC2-PPV-" + originalText);
  }

})(jQuery);