import { _ as __unplugin_components_1$9 } from './gallery-lazy.BVsJ3eWf.js';
import { m as makeCoverUrl } from './gallery-makeCoverUrl.BnX14Pi7.js';
import { _ as _export_sfc$1, e as resolveComponent, r as resolveDirective, o as openBlock, c as createElementBlock, b as createVNode, j as withCtx, h as createBlock, l as resolveDynamicComponent, a as createBaseVNode, t as toDisplayString, d as createCommentVNode, s as createTextVNode, w as withDirectives, p as renderSlot, E as defineComponent, S as onMounted, U as onBeforeUnmount, K as watch, L as ref, J as computed, ba as onUpdated, G as inject, N as provide, F as Fragment, i as renderList, m as markRaw, n as normalizeStyle, g as normalizeClass, k as normalizeProps, v as vShow, f as withModifiers, T as Transition } from './lodash.Cy6RZ5mX.js';
import { m as makeFullUrl, _ as __unplugin_components_0$e, a as makeGoodReadsUrl, s as stringifyArray, p as prepareKeys, b as __unplugin_components_1$b, c as slugify, d as __unplugin_components_0$f, e as __unplugin_components_1$c } from './gallery.CzMMdZ_k.js';
import { e as timeStringToSeconds, s as secondsToTimeString } from './content-script-helpers.DZxzr4Lc.js';
import { _ as __unplugin_components_1$a, a as __unplugin_components_0$g } from './gallery-search.DkKiNGb9.js';
import { g as getDefaultExportFromCjs } from './jquery.3Hs3vqLI.js';
import { f as findSubPageSource } from './gallery-findSubPageSource.CB10VwdW.js';
import './index.9Z32wZYy.js';
import './howler.B9zQKWVB.js';
import './tippy.D2CvuMJV.js';
import './jszip.BBGmtqMN.js';
import './gallery-page-title.Bom0rECk.js';

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */


const _sfc_main$w = {
  name: 'carousel-slide',
  props: [ 'detailsBook', 'book', 'index', "mobileWidth", "inLibrary", "inSeries", "inSameSeries", "inWishlist", "storePageURL"],
  mixins: [
    makeCoverUrl,
	],
	
	data: function() {
		return {
		};
	},
	
	computed: {
		tag() {
			return this.mobileWidth ? 'div' : 'a';
		},
	},
	
};

const _hoisted_1$O = ["data-splide-lazy"];
const _hoisted_2$m = { style: {"font-weight":"normal","text-align":"left","padding":"10px","font-size":"13px","line-height":"17px"} };
const _hoisted_3$i = { key: 0 };
const _hoisted_4$h = { style: {"font-size":"1.2em","font-weight":"bold","margin":"0 0 3px 0"} };
const _hoisted_5$e = ["href"];
const _hoisted_6$a = { key: 1 };
const _hoisted_7$8 = { style: {"font-size":"1.1em","font-weight":"normal","margin":"0 0 3px 0"} };
const _hoisted_8$8 = { key: 2 };
const _hoisted_9$6 = { key: 3 };
const _hoisted_10$4 = { key: 4 };
const _hoisted_11$4 = ["content"];
const _hoisted_12$3 = { key: 0 };
const _hoisted_13$2 = { key: 0 };

function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_tippy = resolveComponent("tippy");
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("div", null, [
    createVNode(_component_tippy, {
      tag: "div",
      ref: "tippy",
      "data-book-index": $props.index,
      "data-book-asin": $props.book.asin,
      class: "carousel-cover-tippy"
    }, {
      content: withCtx(() => [
        createBaseVNode("div", _hoisted_2$m, [
          ($props.book.title)
            ? (openBlock(), createElementBlock("div", _hoisted_3$i, [
                createBaseVNode("h3", _hoisted_4$h, [
                  createBaseVNode("a", {
                    href: $props.storePageURL,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, toDisplayString($props.book.title), 9, _hoisted_5$e)
                ])
              ]))
            : createCommentVNode("", true),
          ($props.book.subHeading)
            ? (openBlock(), createElementBlock("div", _hoisted_6$a, [
                createBaseVNode("h2", _hoisted_7$8, toDisplayString($props.book.subHeading), 1)
              ]))
            : createCommentVNode("", true),
          ($props.book.authors)
            ? (openBlock(), createElementBlock("div", _hoisted_8$8, [
                _cache[0] || (_cache[0] = createBaseVNode("strong", null, "Authors: ", -1)),
                createTextVNode(toDisplayString($props.book.authors), 1)
              ]))
            : createCommentVNode("", true),
          ($props.book.narrators)
            ? (openBlock(), createElementBlock("div", _hoisted_9$6, [
                _cache[1] || (_cache[1] = createBaseVNode("strong", null, "Narrators: ", -1)),
                createTextVNode(toDisplayString($props.book.narrators), 1)
              ]))
            : createCommentVNode("", true),
          ($props.book.length)
            ? (openBlock(), createElementBlock("div", _hoisted_10$4, [
                _cache[2] || (_cache[2] = createBaseVNode("strong", null, "Length: ", -1)),
                createTextVNode(toDisplayString($props.book.length), 1)
              ]))
            : createCommentVNode("", true),
          createBaseVNode("div", null, [
            ($props.inSameSeries)
              ? withDirectives((openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "carousel-gallery-link not-link in-same-series",
                  content: 'This carousel book is in the same series as the one you have book details open on right now: <strong>' + $props.detailsBook.title || $props.detailsBook.titleShort + '</strong>'
                }, [...(_cache[3] || (_cache[3] = [
                  createTextVNode(" from this series ", -1)
                ]))], 8, _hoisted_11$4)), [
                  [_directive_tippy, { maxWidth: 300 }]
                ])
              : createCommentVNode("", true),
            ($props.inLibrary && $props.book.asin)
              ? (openBlock(), createBlock(_component_router_link, {
                  key: 1,
                  style: {"background":"#1065d9"},
                  class: "carousel-gallery-link",
                  to: { 
							name: 'library', 
							query: { 
								book: $props.book.asin, 
								refresh: true,
							} 
						}
                }, {
                  default: withCtx(() => [...(_cache[4] || (_cache[4] = [
                    createTextVNode(" book in library ", -1)
                  ]))]),
                  _: 1
                }, 8, ["to"]))
              : createCommentVNode("", true),
            ($props.inSeries && $props.inSeries.asin)
              ? (openBlock(), createBlock(_component_router_link, {
                  key: 2,
                  style: {"background":"#ae2753"},
                  class: "carousel-gallery-link",
                  to: { 
							name: 'series', 
							params: { 
								series: $props.inSeries.asin, 
							}, 
							query: { 
								subPageSource: 'library', 
								refresh: true,
								scrolltop: true,
							} 
						}
                }, {
                  default: withCtx(() => [
                    _cache[6] || (_cache[6] = createTextVNode(" series in library ", -1)),
                    ($props.inSeries.ownedBooksLength)
                      ? (openBlock(), createElementBlock("span", _hoisted_12$3, [
                          createTextVNode(" (" + toDisplayString($props.inSeries.ownedBooksLength), 1),
                          ($props.inSeries.obj.allBooks)
                            ? (openBlock(), createElementBlock("span", _hoisted_13$2, "/" + toDisplayString($props.inSeries.obj.allBooks.length), 1))
                            : createCommentVNode("", true),
                          _cache[5] || (_cache[5] = createTextVNode(") ", -1))
                        ]))
                      : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["to"]))
              : createCommentVNode("", true),
            ($props.inWishlist && $props.book.asin)
              ? (openBlock(), createBlock(_component_router_link, {
                  key: 3,
                  style: {"background":"#dd7100"},
                  class: "carousel-gallery-link",
                  to: { 
							name: 'wishlist', 
							query: { 
								book: $props.book.asin, 
								refresh: true,
							} 
						}
                }, {
                  default: withCtx(() => [...(_cache[7] || (_cache[7] = [
                    createTextVNode(" book in wishlist ", -1)
                  ]))]),
                  _: 1
                }, 8, ["to"]))
              : createCommentVNode("", true)
          ])
        ])
      ]),
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent($options.tag), {
          class: "cover-wrapper",
          href: $options.tag === 'a' ? $props.storePageURL : null,
          target: "_blank",
          rel: "noopener noreferrer",
          ref: "coverLink"
        }, {
          default: withCtx(() => [
            createBaseVNode("img", {
              crossorigin: "anonymous",
              class: "cover",
              "data-splide-lazy": _ctx.makeCoverUrl($props.book.cover, 150),
              alt: ""
            }, null, 8, _hoisted_1$O)
          ]),
          _: 1
        }, 8, ["href"]))
      ]),
      _: 1
    }, 8, ["data-book-index", "data-book-asin"])
  ]))
}
const __unplugin_components_0$d = /*#__PURE__*/_export_sfc$1(_sfc_main$w, [['render',_sfc_render$w],['__scopeId',"data-v-dbbbb0ac"]]);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED,
  MOUNTED,
  IDLE,
  MOVING,
  SCROLLING,
  DRAGGING,
  DESTROYED
};
function empty(array) {
  array.length = 0;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop = function noop2() {
};
function raf(func) {
  return requestAnimationFrame(func);
}
function typeOf(type, subject) {
  return typeof subject === type;
}
function isObject$1(subject) {
  return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
  return subject === null;
}
function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}
function toArray(value) {
  return isArray(value) ? value : [value];
}
function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}
function includes(array, value) {
  return array.indexOf(value) > -1;
}
function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}
function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function(name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}
function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children2) {
  forEach(children2, parent.appendChild.bind(parent));
}
function before(nodes, ref2) {
  forEach(nodes, function(node) {
    var parent = (ref2 || node).parentNode;
    if (parent) {
      parent.insertBefore(node, ref2);
    }
  });
}
function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function(child2) {
    return matches(child2, selector);
  }) : children2;
}
function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn$1(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }
  return object;
}
function assign(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn$1(source, function(value, key) {
      object[key] = source[key];
    });
  });
  return object;
}
function merge$1(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn$1(source, function(value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject$1(value)) {
        object[key] = merge$1({}, isObject$1(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}
function omit(object, keys) {
  forEach(keys || ownKeys(object), function(key) {
    delete object[key];
  });
}
function removeAttribute(elms, attrs) {
  forEach(elms, function(elm) {
    forEach(attrs, function(attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}
function setAttribute(elms, attrs, value) {
  if (isObject$1(attrs)) {
    forOwn$1(attrs, function(value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function(elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}
function create(tag, attrs, parent) {
  var elm = document.createElement(tag);
  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }
  parent && append(parent, elm);
  return elm;
}
function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }
  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}
function display(elm, display2) {
  style(elm, "display", display2);
}
function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}
function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}
function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}
function rect(target) {
  return target.getBoundingClientRect();
}
function remove(nodes) {
  forEach(nodes, function(node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}
function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
  e.preventDefault();
  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}
function query(parent, selector) {
  return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}
function timeOf(e) {
  return e.timeStamp;
}
function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}
var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}
function sign(x) {
  return +(x > 0) - +(x < 0);
}
function format(string, replacements) {
  forEach(replacements, function(replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}
function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}
function EventBinder() {
  var listeners = [];
  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function(target, event, namespace) {
      var isEventTarget = "addEventListener" in target;
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }
  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function(target, event, namespace) {
      listeners = listeners.filter(function(listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }
        return true;
      });
    });
  }
  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;
    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles,
        detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }
    target.dispatchEvent(e);
    return e;
  }
  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function(target) {
      target && forEach(events, function(events2) {
        events2.split(" ").forEach(function(eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }
  function destroy() {
    listeners.forEach(function(data) {
      data[4]();
    });
    empty(listeners);
  }
  return {
    bind,
    unbind,
    dispatch,
    destroy
  };
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();
  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function(e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }
  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }
  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }
  return assign(binder, {
    bus,
    on,
    off: apply(binder.unbind, bus),
    emit
  });
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;
  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);
      if (rate >= 1) {
        onInterval();
        startTime = now();
        if (limit && ++count >= limit) {
          return pause();
        }
      }
      id = raf(update);
    }
  }
  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }
  function pause() {
    paused = true;
  }
  function rewind() {
    startTime = now();
    rate = 0;
    if (onUpdate) {
      onUpdate(rate);
    }
  }
  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }
  function set(time) {
    interval = time;
  }
  function isPaused() {
    return paused;
  }
  return {
    start,
    rewind,
    pause,
    cancel,
    set,
    isPaused
  };
}
function State(initialState) {
  var state = initialState;
  function set(value) {
    state = value;
  }
  function is(states) {
    return includes(toArray(states), state);
  }
  return {
    set,
    is
  };
}
function Throttle(func, duration) {
  var interval = RequestInterval(0, func, null, 1);
  return function() {
    interval.isPaused() && interval.start();
  };
}
function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];
  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function(n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function(key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }
  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }
  function register(options2, query2) {
    var queryList = matchMedia(query2);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }
  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function(merged2, entry) {
      return merge$1(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);
    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }
  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge$1(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }
  function set(opts, base, notify) {
    merge$1(options, opts);
    base && merge$1(Object.getPrototypeOf(options), opts);
    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }
  return {
    setup,
    destroy,
    reduce,
    set
  };
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};
function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }
  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }
  return {
    resolve,
    orient
  };
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};
function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }
  var elm = from;
  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }
    elm = elm.parentElement;
  }
  return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;
  function setup() {
    collect();
    init();
    update();
  }
  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function() {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }
  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }
  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }
  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn$1({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function(className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root,
      track,
      list,
      slides
    });
  }
  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";
    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }
    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }
  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }
  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }
  return assign(elements, {
    setup,
    mount,
    destroy
  });
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
  var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;
  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }
    listen();
  }
  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);
    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }
  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }
  function initNavigation() {
    var controls = Splide2.splides.map(function(target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }
  function onMove() {
    if (!destroyed) {
      update();
    }
  }
  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }
  function updateActivity() {
    var active = isActive();
    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }
  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);
    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }
    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }
    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }
    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }
  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }
  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }
  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }
    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }
  function isWithin(from, distance) {
    var diff = abs(from - index);
    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }
    return diff <= distance;
  }
  var self = {
    index,
    slideIndex,
    slide,
    container,
    isClone,
    mount,
    destroy,
    update,
    style: style$1,
    isWithin
  };
  return self;
}
function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
  var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
  var Slides2 = [];
  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }
  function init() {
    slides.forEach(function(slide, index) {
      register(slide, index, -1);
    });
  }
  function destroy() {
    forEach$1(function(Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }
  function update() {
    forEach$1(function(Slide2) {
      Slide2.update();
    });
  }
  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function(Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }
  function get(excludeClones) {
    return excludeClones ? filter(function(Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }
  function getIn(page) {
    var Controller2 = Components2.Controller;
    var index = Controller2.toIndex(page);
    var max2 = Controller2.hasFocus() ? 1 : options.perPage;
    return filter(function(Slide2) {
      return between(Slide2.index, index, index + max2 - 1);
    });
  }
  function getAt(index) {
    return filter(index)[0];
  }
  function add(items, index) {
    forEach(items, function(slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }
      if (isHTMLElement(slide)) {
        var ref2 = slides[index];
        ref2 ? before(slide, ref2) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }
  function remove$1(matcher) {
    remove(filter(matcher).map(function(Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }
  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }
  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }
  function style2(prop, value, useContainer) {
    forEach$1(function(Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }
  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;
    if (length) {
      images.forEach(function(img) {
        bind(img, "load error", function() {
          if (!--length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }
  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }
  function isEnough() {
    return Slides2.length > options.perPage;
  }
  return {
    mount,
    destroy,
    update,
    register,
    get,
    getIn,
    getAt,
    add,
    remove: remove$1,
    forEach: forEach$1,
    filter,
    style: style2,
    getLength,
    isEnough
  };
}
function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
  var Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
  var getAt = Slides2.getAt, styleSlides = Slides2.style;
  var vertical;
  var rootRect;
  var overflow;
  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }
  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }
  function resize(force) {
    var newRect = rect(root);
    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);
      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }
  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject$1(padding) ? 0 : padding)) || "0px";
  }
  function cssTrackHeight() {
    var height = "";
    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }
    return height;
  }
  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }
  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }
  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }
  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }
  function listSize() {
    return rect(list)[resolve("width")];
  }
  function slideSize(index, withoutGap) {
    var Slide2 = getAt(index || 0);
    return Slide2 ? rect(Slide2.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }
  function totalSize(index, withoutGap) {
    var Slide2 = getAt(index);
    if (Slide2) {
      var right = rect(Slide2.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }
    return 0;
  }
  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }
  function getGap() {
    var Slide2 = getAt(0);
    return Slide2 && parseFloat(style(Slide2.slide, resolve("marginRight"))) || 0;
  }
  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }
  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }
  return {
    mount,
    resize,
    listSize,
    slideSize,
    sliderSize,
    totalSize,
    getPadding,
    isOverflow
  };
}
var MULTIPLIER = 2;
function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements2 = Components2.Elements, Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;
  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }
  function remount() {
    destroy();
    mount();
  }
  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }
  function observe() {
    var count = computeCloneCount();
    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }
  function generate(count) {
    var slides = Slides2.get().slice();
    var length = slides.length;
    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }
      push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide2, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide2.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements2.list, clone);
        push(clones, clone);
        Slides2.register(clone, index - count + (isHead ? 0 : length), Slide2.index);
      });
    }
  }
  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }
  function computeCloneCount() {
    var clones2 = options.clones;
    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements2.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }
    return clones2;
  }
  return {
    mount,
    destroy
  };
}
function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
  var Transition;
  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }
  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }
  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }
    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function() {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }
  function jump(index) {
    translate(toPosition(index, true));
  }
  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }
  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;
      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }
    return position;
  }
  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }
  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }
  function toIndex(position) {
    var Slides2 = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;
    for (var i = 0; i < Slides2.length; i++) {
      var slideIndex = Slides2[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);
      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }
    return index;
  }
  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }
  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }
  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }
    return position;
  }
  function offset(index) {
    var focus2 = options.focus;
    return focus2 === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus2 * slideSize(index) || 0;
  }
  function getLimit(max2) {
    return toPosition(max2 ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }
  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }
  function exceededLimit(max2, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max2 !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max2 !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }
  return {
    mount,
    move,
    jump,
    translate,
    shift,
    cancel,
    toIndex,
    toPosition,
    getPosition,
    getLimit,
    exceededLimit,
    reposition
  };
}
function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, toPosition = Move2.toPosition;
  var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;
  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }
  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
    if (index !== currIndex) {
      currIndex = index;
      Move2.reposition();
    }
  }
  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }
  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);
      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move2.move(dest, index, prevIndex, callback);
      }
    }
  }
  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function() {
      var index = loop(Move2.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }
  function parse(control) {
    var index = currIndex;
    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }
    return index;
  }
  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }
    return destination ? dest : loop(dest);
  }
  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);
      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }
      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }
    return dest;
  }
  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();
      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }
    return dest;
  }
  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }
  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }
    return clamp(end, 0, slideCount - 1);
  }
  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }
  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }
  function toDest(destination) {
    var closest2 = Move2.toIndex(destination);
    return isSlide ? clamp(closest2, 0, endIndex) : closest2;
  }
  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }
  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }
  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }
  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }
  return {
    mount,
    go,
    scroll,
    getNext,
    getPrev,
    getAdjacent,
    getEnd,
    setIndex,
    getIndex,
    toIndex,
    toPage,
    toDest,
    hasFocus,
    isBusy
  };
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on, bind = event.bind, emit = event.emit;
  var classes = options.classes, i18n = options.i18n;
  var Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var placeholder = Elements2.arrows, track = Elements2.track;
  var wrapper = placeholder;
  var prev = Elements2.prev;
  var next = Elements2.next;
  var created;
  var wrapperClasses;
  var arrows = {};
  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }
  function remount() {
    destroy();
    mount();
  }
  function init() {
    var enabled = options.arrows;
    if (enabled && !(prev && next)) {
      createArrows();
    }
    if (prev && next) {
      assign(arrows, {
        prev,
        next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }
  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);
    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }
  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }
  function go(control) {
    Controller2.go(control, true);
  }
  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }
  function createArrow(prev2) {
    var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
    return parseHtml(arrow);
  }
  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller2.getPrev();
      var nextIndex = Controller2.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }
  return {
    arrows,
    mount,
    destroy,
    update
  };
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements2 = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";
  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements2.track.id);
      stopped || play();
      update();
    }
  }
  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function(e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }
    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function(e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }
    if (toggle) {
      bind(toggle, "click", function() {
        stopped ? play() : pause(true);
      });
    }
    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }
  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }
  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }
    stopped = !!stop;
    update();
    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }
  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }
  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }
  function onAnimationFrame(rate) {
    var bar = Elements2.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }
  function onMove(index) {
    var Slide2 = Components2.Slides.getAt(index);
    interval.set(Slide2 && +getAttribute(Slide2.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }
  return {
    mount,
    destroy: interval.cancel,
    play,
    pause,
    isPaused
  };
}
function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }
  function cover(cover2) {
    Components2.Slides.forEach(function(Slide2) {
      var img = child(Slide2.container || Slide2.slide, "img");
      if (img && img.src) {
        toggle(cover2, img, Slide2);
      }
    });
  }
  function toggle(cover2, img, Slide2) {
    Slide2.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
    display(img, cover2 ? "none" : "");
  }
  return {
    mount,
    destroy: apply(cover, false)
  };
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
  var set = Splide2.state.set;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, exceededLimit = Move2.exceededLimit, translate = Move2.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;
  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }
  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();
    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move2.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }
    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }
  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }
  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);
    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;
      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }
  function clear() {
    if (interval) {
      interval.cancel();
    }
  }
  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }
  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }
  return {
    mount,
    destroy: clear,
    scroll,
    cancel
  };
}
var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};
function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
  var state = Splide2.state;
  var Move2 = Components2.Move, Scroll2 = Components2.Scroll, Controller2 = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
  var getPosition = Move2.getPosition, exceededLimit = Move2.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;
  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }
  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }
  function onPointerDown(e) {
    clickPrevented = false;
    if (!disabled) {
      var isTouch = isTouchEvent(e);
      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller2.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move2.cancel();
          Scroll2.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }
  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }
    if (e.cancelable) {
      if (dragging) {
        Move2.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());
        if (expired || hasExceeded) {
          save(e);
        }
        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }
  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }
    if (dragging) {
      move(e);
      prevent(e);
    }
    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }
  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }
  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }
  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);
    if (isFree) {
      Controller2.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller2.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller2.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller2.go(Controller2.toDest(destination), true);
    }
    reduce(true);
  }
  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject$1(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }
  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }
  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);
      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }
    return 0;
  }
  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }
  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }
  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }
  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }
  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }
  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }
  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }
  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }
  function isDragging() {
    return dragging;
  }
  function disable(value) {
    disabled = value;
  }
  return {
    mount,
    disable,
    isDragging
  };
}
var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};
function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;
  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }
  function init() {
    var keyboard = options.keyboard;
    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }
  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }
  function disable(value) {
    disabled = value;
  }
  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function() {
      disabled = _disabled;
    });
  }
  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);
      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }
  return {
    mount,
    destroy,
    disable
  };
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];
  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }
  function init() {
    empty(entries);
    register();
    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }
  function register() {
    Components2.Slides.forEach(function(Slide2) {
      queryAll(Slide2.slide, IMAGE_SELECTOR).forEach(function(img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide2, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }
  function check() {
    entries = entries.filter(function(data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }
  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }
  function onLoad(data, e) {
    var img = data[0], Slide2 = data[1];
    removeClass(Slide2.slide, CLASS_LOADING);
    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide2);
      emit(EVENT_RESIZE);
    }
    isSequential && loadNext();
  }
  function loadNext() {
    entries.length && load(entries.shift());
  }
  return {
    mount,
    destroy: apply(empty, entries),
    check
  };
}
function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Slides2 = Components2.Slides, Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var hasFocus = Controller2.hasFocus, getIndex = Controller2.getIndex, go = Controller2.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements2.pagination;
  var items = [];
  var list;
  var paginationClasses;
  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");
    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list,
        items
      }, getAt(Splide2.index));
    }
  }
  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }
    event.destroy();
  }
  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
    var max2 = hasFocus() ? Controller2.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements2.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
    for (var i = 0; i < max2; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides2.getIn(i).map(function(Slide2) {
        return Slide2.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));
      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }
      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li,
        button,
        page: i
      });
    }
  }
  function onClick(page) {
    go(">" + page, true);
  }
  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;
    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }
    var item = items[nextPage];
    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }
  function getDirection() {
    return options.paginationDirection || options.direction;
  }
  function getAt(index) {
    return items[Controller2.toPage(index)];
  }
  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());
    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }
    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }
    emit(EVENT_PAGINATION_UPDATED, {
      list,
      items
    }, prev, curr);
  }
  return {
    items,
    mount,
    destroy,
    getAt,
    update
  };
}
var TRIGGER_KEYS = [" ", "Enter"];
function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
  var events = [];
  function mount() {
    Splide2.splides.forEach(function(target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });
    if (isNavigation) {
      navigate();
    }
  }
  function destroy() {
    events.forEach(function(event) {
      event.destroy();
    });
    empty(events);
  }
  function remount() {
    destroy();
    mount();
  }
  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function(index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }
  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }
  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }
  function onClick(Slide2) {
    Splide2.go(Slide2.index);
  }
  function onKeydown(Slide2, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide2);
      prevent(e);
    }
  }
  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount,
    destroy,
    remount
  };
}
function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
  var lastTime = 0;
  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }
  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);
      var _min = options.wheelMinThreshold || 0;
      var sleep = options.wheelSleep || 0;
      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }
      shouldPrevent(backwards) && prevent(e);
    }
  }
  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }
  return {
    mount
  };
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }
  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);
    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }
  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }
  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }
  return {
    mount,
    disable,
    destroy
  };
}
var ComponentConstructors = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Media,
  Direction,
  Elements,
  Slides,
  Layout,
  Clones,
  Move,
  Controller,
  Arrows,
  Autoplay,
  Cover,
  Scroll,
  Drag,
  Keyboard,
  LazyLoad,
  Pagination,
  Sync,
  Wheel,
  Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};
function Fade(Splide2, Components2, options) {
  var Slides2 = Components2.Slides;
  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }
  function init() {
    Slides2.forEach(function(Slide2) {
      Slide2.style("transform", "translateX(-" + 100 * Slide2.index + "%)");
    });
  }
  function start(index, done) {
    Slides2.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }
  return {
    mount,
    start,
    cancel: noop
  };
}
function Slide(Splide2, Components2, options) {
  var Move2 = Components2.Move, Controller2 = Components2.Controller, Scroll2 = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;
  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function(e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }
  function start(index, done) {
    var destination = Move2.toPosition(index, true);
    var position = Move2.getPosition();
    var speed = getSpeed(index);
    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll2.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move2.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move2.jump(index);
      done();
    }
  }
  function cancel() {
    transition("");
    Scroll2.cancel();
  }
  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;
    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller2.getIndex(true);
      var end = Controller2.getEnd();
      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }
    return options.speed;
  }
  return {
    mount,
    start,
    cancel
  };
}
var _Splide = /* @__PURE__ */ function() {
  function _Splide2(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge$1({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide2.defaults, options || {});
    try {
      merge$1(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }
    this._o = Object.create(merge$1({}, options));
  }
  var _proto = _Splide2.prototype;
  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;
    var state = this.state, Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn$1(Constructors, function(Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn$1(Components2, function(component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };
  _proto.sync = function sync(splide) {
    this.splides.push({
      splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });
    if (this.state.is(IDLE)) {
      this._C.Sync.remount();
      splide.Components.Sync.remount();
    }
    return this;
  };
  _proto.go = function go(control) {
    this._C.Controller.go(control);
    return this;
  };
  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };
  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };
  _proto.emit = function emit(event) {
    var _this$event;
    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));
    return this;
  };
  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);
    return this;
  };
  _proto.remove = function remove2(matcher) {
    this._C.Slides.remove(matcher);
    return this;
  };
  _proto.is = function is(type) {
    return this._o.type === type;
  };
  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };
  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }
    var event = this.event, state = this.state;
    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn$1(this._C, function(component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }
    return this;
  };
  _createClass(_Splide2, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);
  return _Splide2;
}();
var Splide$1 = _Splide;
Splide$1.defaults = {};
Splide$1.STATES = STATES;
const EVENTS = [
  EVENT_ACTIVE,
  EVENT_ARROWS_MOUNTED,
  EVENT_ARROWS_UPDATED,
  EVENT_AUTOPLAY_PAUSE,
  EVENT_AUTOPLAY_PLAY,
  EVENT_AUTOPLAY_PLAYING,
  EVENT_CLICK,
  EVENT_DESTROY,
  EVENT_DRAG,
  EVENT_DRAGGED,
  EVENT_DRAGGING,
  EVENT_HIDDEN,
  EVENT_INACTIVE,
  EVENT_LAZYLOAD_LOADED,
  EVENT_MOUNTED,
  EVENT_MOVE,
  EVENT_MOVED,
  EVENT_NAVIGATION_MOUNTED,
  EVENT_PAGINATION_MOUNTED,
  EVENT_PAGINATION_UPDATED,
  EVENT_REFRESH,
  EVENT_RESIZE,
  EVENT_RESIZED,
  EVENT_SCROLL,
  EVENT_SCROLLED,
  EVENT_UPDATED,
  EVENT_VISIBLE
];
const SPLIDE_INJECTION_KEY = "splide";
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
const _sfc_main$2$1 = defineComponent({
  name: "SplideTrack",
  setup() {
    onUpdated(() => {
      var _a;
      const splide = inject(SPLIDE_INJECTION_KEY);
      (_a = splide == null ? void 0 : splide.value) == null ? void 0 : _a.refresh();
    });
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1$1 = { class: "splide__track" };
const _hoisted_2$l = { class: "splide__list" };
function _sfc_render$2$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1$1, [
    createBaseVNode("ul", _hoisted_2$l, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
const SplideTrack = /* @__PURE__ */ _export_sfc(_sfc_main$2$1, [["render", _sfc_render$2$1]]);
const _sfc_main$1$1 = defineComponent({
  name: "Splide",
  emits: EVENTS.map((event) => `splide:${event}`),
  components: { SplideTrack },
  props: {
    tag: {
      default: "div",
      type: String
    },
    options: {
      default: {},
      type: Object
    },
    extensions: Object,
    transition: Function,
    hasTrack: {
      default: true,
      type: Boolean
    }
  },
  setup(props, context) {
    const splide = ref();
    const root = ref();
    onMounted(() => {
      if (root.value) {
        splide.value = new Splide$1(root.value, props.options);
        bind(splide.value);
        splide.value.mount(props.extensions, props.transition);
      }
    });
    onBeforeUnmount(() => {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.destroy();
    });
    watch(() => merge({}, props.options), (options) => {
      if (splide.value) {
        splide.value.options = options;
      }
    }, { deep: true });
    provide(SPLIDE_INJECTION_KEY, splide);
    const index = computed(() => {
      var _a;
      return ((_a = splide.value) == null ? void 0 : _a.index) || 0;
    });
    const length = computed(() => {
      var _a;
      return ((_a = splide.value) == null ? void 0 : _a.length) || 0;
    });
    function go(control) {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.go(control);
    }
    function sync(target) {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.sync(target);
    }
    function bind(splide2) {
      EVENTS.forEach((event) => {
        splide2.on(event, (...args) => {
          context.emit(`splide:${event}`, splide2, ...args);
        });
      });
    }
    return {
      splide,
      root,
      index,
      length,
      go,
      sync
    };
  }
});
function _sfc_render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SplideTrack = resolveComponent("SplideTrack");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: "splide",
    ref: "root"
  }, {
    default: withCtx(() => [
      _ctx.hasTrack ? (openBlock(), createBlock(_component_SplideTrack, { key: 0 }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      })) : renderSlot(_ctx.$slots, "default", { key: 1 })
    ]),
    _: 3
  }, 512);
}
const Splide = /* @__PURE__ */ _export_sfc(_sfc_main$1$1, [["render", _sfc_render$1$1]]);
const _sfc_main$v = defineComponent({
  name: "SplideSlide"
});
const _hoisted_1$N = { class: "splide__slide" };
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", _hoisted_1$N, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const SplideSlide = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);

/* unplugin-vue-components disabled */

const _sfc_main$u = {
  name: 'carousel',
  props: [ 'detailsBook', 'books', 'width', 'mobileWidth'],
	components: {
		Splide,
    SplideSlide,
  },
	mixins: [
    makeFullUrl,
	],
	
	data: function() {
		return {
			options: {
				type        : 'loop',
				rewind      : true,
				// autoWidth   : true,
				width				: null,
				trimSpace   : false,
				gap         : '4px',
				lazyLoad    : 'nearby',
				preloadPages: 1,
				perPage     : 5,
			},
			coverSize: 127,
			scrolling: false,
			scrollContainer: null,
			// prepworkDone: false,
			inLibrary: null,
			inSeries: { 
				asin: null, 
				obj: null,
				ownedBooksLength: null,
			},
			inSameSeries: null,
			inWishlist: null,
			// timeStamp: null,
			storePageURL: null,
			scrollContainer: null,
			tippy: null,
      prevIndex: null,
			book: null,
		}
	},
	
	mounted: function() {
		
		const winWidth = window.innerWidth;
		const windowMobile = winWidth <= '716';
		this.options.width = windowMobile ? winWidth : this.$el.offsetWidth;
		const carouselWidth = windowMobile ? winWidth - (42*2) : this.$el.offsetWidth - (42*2);
		
		if ( winWidth <= '500' ) this.coverSize = 102;
		if ( winWidth <= '415' ) this.coverSize = 72;
		
		this.options.perPage = Math.floor(carouselWidth / this.coverSize);
		
		this.scrollContainer = document.querySelector('.list-view-inner-wrap') || window;
		this.scrollContainer.addEventListener('scroll', this.windowScrollStarted, { passive: true });
		
			
	},
	
	beforeUnmount: function() {
		
		this.scrollContainer.removeEventListener('scroll', this.windowScrollStarted, { passive: true });
			
	},
	
	methods: {
		
		appendTo() {
			return document.querySelector('#ale-bookdetails');
		},
		
		windowScrollStarted() {
			
			if ( this.$route.query.carousel )  this.$updateQueries({ carousel: null });
			
		},
		
		tippyMount( t ) {
			
			// console.log( 'after update', t );
		},
		
		// Process the heavy stuff on first hover
		onShow( t, e ) {
			
      const index = e.target.getAttribute('data-book-index');

      // Mouseenter was a bit trigger happy when interacting with tooltip
      if ( this.prevIndex === index ) return;
      this.prevIndex = index;

      // Reset
      this.repositionTooltip(t);
      this.additionalData = null;
			this.inLibrary = null;
			this.inSeries.asin = null;
			this.inSeries.obj = null;
			this.inSeries.ownedBooksLength = null;
			this.inSameSeries = null;
			this.inWishlist = null;

      // In real world the item data has a much bigger role in fetching the additional data...
      this.book = this.books[ index ];

      // Get additional item data and render in the tooltip
			
			// this.tippy = tippy;
			
			// if ( !this.prepworkDone ) {
			this.findBookFromLibrary();
			this.findBookFromSeries();
			this.findSameSeries();
			this.findInWishlist();
			// this.timeStamp = new Date().getTime();
			this.storePageURL = this.makeUrl('book', this.book.asin);
				// this.prepworkDone = true;
			// }
			
			// this.scrollContainer = document.querySelector('.list-view-inner-wrap') || window;
			// this.scrollContainer.addEventListener('scroll', this.scrollHide, { passive: true });
			
      this.$updateQueries({ carousel: true });
			
			// return !!tippy.props.content;
			
			// This somehow causes the next tooltip to disappear
			this.repositionTooltip(t);
			
		},
		
		onHide( t, e ) {
			
			// if ( !this.scrollContainer ) this.scrollContainer = document.querySelector('.list-view-inner-wrap') || window;
			// this.scrollContainer.addEventListener('scroll', this.scrollHide, { passive: true });
			t.clearDelayTimeouts();
			
		},
		
		scrollHide() {
			
			const tippy = this.tippy;
			if ( tippy && tippy.state.isVisible ) {
				tippy.hide();
				tippy.reference.blur();
			}
			
		},
		
    // Repositions tooltip after a possible height change...
    repositionTooltip( tippy ) {
			this.$nextTick(() => {
				try { tippy.popperInstance.update(); } catch (e) {}
			});
    },
		
		
		findBookFromLibrary() {
			
			const library = this.$store.state.library.books;
			const inLibrary = _.find( library, { asin: this.book.asin });
			if ( inLibrary ) this.inLibrary = true;
			
		},
		
		findBookFromSeries() {
			
			const carouselBookAsin = this.book.asin;
			const series = this.$store.state.library.series;
			const inSeries = _.find( series, function( seriesObj ) {
				const allBooksInSeries = _.get(seriesObj, 'allBooks');
				if ( allBooksInSeries ) return _.find( allBooksInSeries, { asin: carouselBookAsin });
			});
			
			if ( inSeries ) {
				this.inSeries.asin = inSeries.asin;
				this.inSeries.obj = inSeries;
				const allBooksInSeries = _.get(inSeries, 'allBooks');
				if ( allBooksInSeries ) this.inSeries.ownedBooksLength = _.filter( allBooksInSeries, function( o ) { return !o.notInLibrary; }).length;
			}
			
		},
		
		findSameSeries() {
			if ( this.inSeries.obj ) {
				
				const allBooks = _.get(this.inSeries, 'obj.allBooks');
				const inSameSeries = _.find( allBooks, { asin: this.detailsBook.asin });
				this.inSameSeries = !!inSameSeries;	
				
			}
		},
		
		findInWishlist() {
			
			const carouselBookAsin = this.book.asin;
			const wishlist = this.$store.state.library.wishlist;
			this.inWishlist = _.find( wishlist, { asin: carouselBookAsin });
			
		},
		
	},
	
};

const _hoisted_1$M = ["data-scrolling"];
const _hoisted_2$k = { class: "ale-heading" };

function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_carousel_slide = __unplugin_components_0$d;
  const _component_splide_slide = resolveComponent("splide-slide");
  const _component_splide = resolveComponent("splide");
  const _component_tippy_singleton = resolveComponent("tippy-singleton");
  const _component_gallery_lazy = __unplugin_components_1$9;

  return (openBlock(), createElementBlock("div", {
    class: "ale-carousel",
    "data-scrolling": _ctx.scrolling
  }, [
    createBaseVNode("h3", _hoisted_2$k, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createVNode(_component_gallery_lazy, {
      offset: -60,
      delay: 10,
      class: "lazyboy"
    }, {
      default: withCtx(() => [
        createVNode(_component_tippy_singleton, {
          "move-transition": "transform 0.2s ease-out",
          placement: "top",
          appendTo: $options.appendTo,
          interactive: true,
          interactiveDebounce: 75,
          interactiveBorder: 30,
          allowHTML: true,
          delay: 1000,
          onTrigger: $options.onShow,
          onUntrigger: $options.onHide
        }, {
          default: withCtx(() => [
            createVNode(_component_splide, {
              options: _ctx.options,
              ref: "splide"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($props.books, (carouselBook, index) => {
                  return (openBlock(), createBlock(_component_splide_slide, {
                    class: "ale-carousel-item",
                    key: index
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_gallery_carousel_slide, {
                        detailsBook: $props.detailsBook,
                        book: carouselBook,
                        index: index,
                        mobileWidth: $props.mobileWidth,
                        inLibrary: _ctx.inLibrary,
                        inSeries: _ctx.inSeries,
                        inSameSeries: _ctx.inSameSeries,
                        inWishlist: _ctx.inWishlist,
                        storePageURL: _ctx.storePageURL
                      }, null, 8, ["detailsBook", "book", "index", "mobileWidth", "inLibrary", "inSeries", "inSameSeries", "inWishlist", "storePageURL"])
                    ]),
                    _: 2
                  }, 1024))
                }), 128))
              ]),
              _: 1
            }, 8, ["options"])
          ]),
          _: 1
        }, 8, ["appendTo", "onTrigger", "onUntrigger"])
      ]),
      _: 1
    })
  ], 8, _hoisted_1$M))
}
const __unplugin_components_13 = /*#__PURE__*/_export_sfc$1(_sfc_main$u, [['render',_sfc_render$u]]);

const _hoisted_1$L = {
  viewBox: "0 0 448 512",
  width: "1.06em",
  height: "1.2em"
};

function render$m(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$L, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0"
    }, null, -1)
  ]))]))
}

const __unplugin_components_0$c = markRaw({ name: 'fa-solid-chevron-down', render: render$m });
/* vite-plugin-components disabled */

const _hoisted_1$K = {
  viewBox: "0 0 448 512",
  width: "1.06em",
  height: "1.2em"
};

function render$l(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$K, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495L69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001"
    }, null, -1)
  ]))]))
}

const __unplugin_components_0$b = markRaw({ name: 'fa-solid-chevron-up', render: render$l });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$t = {
	props: ['up'],
};

const _hoisted_1$J = { class: "chevron-icon" };

function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa_solid_chevron_up = __unplugin_components_0$b;
  const _component_fa_solid_chevron_down = __unplugin_components_0$c;

  return (openBlock(), createElementBlock("div", _hoisted_1$J, [
    ($props.up)
      ? (openBlock(), createBlock(_component_fa_solid_chevron_up, { key: 0 }))
      : (openBlock(), createBlock(_component_fa_solid_chevron_down, { key: 1 }))
  ]))
}
const __unplugin_components_8$1 = /*#__PURE__*/_export_sfc$1(_sfc_main$t, [['render',_sfc_render$t],['__scopeId',"data-v-1386621c"]]);

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */
const _sfc_main$s = {
  
  name: 'starRating',
  props: ['size','rating','stars','ratings', 'ratingsText', 'prioritizeRatingsText', 'number', 'numberOf', 'block', 'image', 'placeholderImage', 'placeholderOpacity', 'noPlaceholder'],
  
  data: function() {
    return {
      opt: null,
      config: {
        rating: null,
        length: null,
      }
    };  
  },
  
  created: function() {
    
    this.opt = {
      rating: 5,
      stars : 5,
      size  : 15,
      number: false,
      numberOf: false,
      block : false,
      image: false,
      placeholderImage: false,
      placeholderOpacity: false,
      noPlaceholder: false,
    };
    
    const rating = this.splitDecimals( this.rating );
    this.config.rating  = this.toPercentage( rating );
    const noPlaceholder = (this.noPlaceholder || this.opt.noPlacehoder);
    this.config.length = noPlaceholder ? this.config.rating.whole + (this.config.rating.fraction ? 1 : 0) : parseInt( this.stars || this.opt.stars, 10);
    
  },
  methods: {
    
    splitDecimals: function( input ) {
      
      const inputString = ''+input;
      let splitInput;
      if ( inputString.indexOf(".") > -1 ) {
        splitInput = inputString.split('.');
      }
      else if ( inputString.indexOf(",") > -1 ) {
        splitInput = inputString.split(',');
      }
      
      if ( splitInput ) return { whole: splitInput[0], fraction: '.'+splitInput[1] }; 
      else return { whole: input, fraction: null };
      
    },
    
    toPercentage: function( rating ) {
      let percentage = { whole: parseInt( rating.whole, 10) };
      if ( rating.fraction ) percentage.originalFraction = rating.fraction;
      if ( rating.fraction ) percentage.fraction = Math.floor( parseFloat( rating.fraction, 10) * 100 );
      return percentage;
    },
    
  },
};

const _hoisted_1$I = ["data-rating"];
const _hoisted_2$j = {
  key: 0,
  class: "rating-count"
};
const _hoisted_3$h = ["innerHTML"];
const _hoisted_4$g = { key: 0 };
const _hoisted_5$d = ["data-star", "data-whole", "data-fraction"];
const _hoisted_6$9 = ["innerHTML"];
const _hoisted_7$7 = {
  key: 2,
  class: "rating-count"
};
const _hoisted_8$7 = ["innerHTML"];
const _hoisted_9$5 = { key: 0 };

function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return (_ctx.config.rating)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["sRatings-wrapper", { 'sRatings-block': $props.block || _ctx.opt.block, 'prioritize-ratings-text': $props.prioritizeRatingsText }]),
        "data-rating": $props.rating || 0
      }, [
        ($props.ratings && $props.prioritizeRatingsText)
          ? (openBlock(), createElementBlock("div", _hoisted_2$j, [
              createBaseVNode("span", { innerHTML: $props.ratings }, null, 8, _hoisted_3$h),
              ($props.ratingsText !== false)
                ? (openBlock(), createElementBlock("span", _hoisted_4$g, " ratings"))
                : createCommentVNode("", true)
            ]))
          : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.config.length, (star, index) => {
          return (openBlock(), createElementBlock("div", {
            key: index,
            "data-star": star,
            "data-whole": _ctx.config.rating.whole === star,
            "data-fraction": _ctx.config.rating.fraction && _ctx.config.rating.whole === star-1,
            style: normalizeStyle({ width: ((_ctx.config.rating.whole === star-1 && ($props.noPlaceholder || _ctx.opt.noPlaceholder) && _ctx.config.rating.fraction) ? ((($props.size || _ctx.opt.size)*_ctx.config.rating.originalFraction)+'px') : ($props.size || _ctx.opt.size)+'px'), height: ($props.size || _ctx.opt.size)+'px' })
          }, [
            (_ctx.config.rating.whole <= star && !($props.noPlaceholder || _ctx.opt.noPlaceholder))
              ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["sRatings-placeholder", { 'sRatings-show': _ctx.config.rating.whole < star }]),
                  style: normalizeStyle({ left: (_ctx.config.rating.fraction && _ctx.config.rating.whole === star-1) ? _ctx.config.rating.fraction+'%' : '0%', 'background-size': ($props.size || _ctx.opt.size)+'px', 'background-image': ($props.image || $props.placeholderImage || _ctx.opt.placeholderImage) ? ('url('+ (($props.image && !$props.placeholderImage) ? $props.image : ($props.placeholderImage || _ctx.opt.placeholderImage)) +')') : false, opacity: ($props.placeholderOpacity || _ctx.opt.placeholderOpacity) })
                }, null, 6))
              : createCommentVNode("", true),
            (_ctx.config.rating.whole >= star || (_ctx.config.rating.fraction && _ctx.config.rating.whole === star-1))
              ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: "sRatings-star",
                  style: normalizeStyle({ width: (_ctx.config.rating.whole >= star || (_ctx.config.rating.whole === star-1 && ($props.noPlaceholder || _ctx.opt.noPlaceholder))) ? '100%' : _ctx.config.rating.fraction+'%', 'background-size': ($props.size || _ctx.opt.size)+'px', 'background-image': ($props.image || _ctx.opt.image) ? 'url('+ ($props.image || _ctx.opt.image) +')' : false })
                }, null, 4))
              : createCommentVNode("", true)
          ], 12, _hoisted_5$d))
        }), 128)),
        ($props.number || _ctx.opt.number)
          ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "text-label",
              style: normalizeStyle({ width: ($props.numberOf || _ctx.opt.numberOf) ? 'auto' : false, padding: ($props.numberOf || _ctx.opt.numberOf) ? '0 6px' : false }),
              innerHTML: ($props.numberOf || _ctx.opt.numberOf) ? ($props.rating +'/'+ ($props.stars || _ctx.opt.stars)) : $props.rating
            }, null, 12, _hoisted_6$9))
          : createCommentVNode("", true),
        ($props.ratings && !$props.prioritizeRatingsText)
          ? (openBlock(), createElementBlock("div", _hoisted_7$7, [
              _cache[0] || (_cache[0] = createTextVNode("(", -1)),
              createBaseVNode("span", { innerHTML: $props.ratings }, null, 8, _hoisted_8$7),
              ($props.ratingsText !== false)
                ? (openBlock(), createElementBlock("span", _hoisted_9$5, " ratings"))
                : createCommentVNode("", true),
              _cache[1] || (_cache[1] = createTextVNode(")", -1))
            ]))
          : createCommentVNode("", true)
      ], 10, _hoisted_1$I))
    : createCommentVNode("", true)
}
const __unplugin_components_0$a = /*#__PURE__*/_export_sfc$1(_sfc_main$s, [['render',_sfc_render$s],['__scopeId',"data-v-e117bf15"]]);

const _hoisted_1$H = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};

function render$k(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$H, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m14.878.282l.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.532-.867a2.2 2.2 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zM11.43 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5.692a.5.5 0 0 0-.125-.181a.6.6 0 0 0-.22-.14L15 9.77V16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.088a1.42 1.42 0 0 1 .863-.846zm1.424 4.147A.5.5 0 0 0 12.5 6h-5l-.09.008A.5.5 0 0 0 7.5 7h5l.09-.008a.5.5 0 0 0 .264-.845m-.264 4.345a.5.5 0 0 0-.09-.992h-5l-.09.008a.5.5 0 0 0 .09.992h5zm0 3.5A.5.5 0 0 0 12.5 13h-5l-.09.008A.5.5 0 0 0 7.5 14h5z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_6$3 = markRaw({ name: 'fluent-document-one-page-sparkle20-regular', render: render$k });
/* vite-plugin-components disabled */

const _hoisted_1$G = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$j(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$G, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M256 80C141.1 80 48 173.1 48 288v104c0 13.3-10.7 24-24 24S0 405.3 0 392V288C0 146.6 114.6 32 256 32s256 114.6 256 256v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208M80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-16c-35.3 0-64-28.7-64-64zm288-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-16c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_7$1 = markRaw({ name: 'fa6-solid-headphones-simple', render: render$j });
/* vite-plugin-components disabled */

const _hoisted_1$F = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$i(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$F, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-24-168v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24"
    }, null, -1)
  ]))]))
}

const __unplugin_components_4$3 = markRaw({ name: 'fa6-solid-circle-plus', render: render$i });
/* vite-plugin-components disabled */

const _hoisted_1$E = {
  viewBox: "0 0 576 512",
  width: "1.36em",
  height: "1.2em"
};

function render$h(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$E, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32l51.9 207.5C91 492 116.6 512 146 512h284c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-85.6L365.3 12.9c-6.1-11.7-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4L404.3 192H171.7zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16m96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16"
    }, null, -1)
  ]))]))
}

const __unplugin_components_3$4 = markRaw({ name: 'fa6-solid-basket-shopping', render: render$h });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$r = {
  name: "bookTags",
  props: ["book"],
  mixins: [makeFullUrl],
  data: function() {
    return {
    };
  },
  computed: {
    routerOrLink() {
      if ( !this.$store.state.sticky.detailLinksToAudible ) {
        return {
          tag: "router-link",
          attr: 'to',
        };
      }
      else {
        return {
          tag: "a",
          attr: 'href',
        };
      }
    }
  },
};

const _hoisted_1$D = { class: "book-tags" };

function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$D, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.book.tags, (tag) => {
      return (openBlock(), createBlock(resolveDynamicComponent($options.routerOrLink.tag), normalizeProps({
        [($options.routerOrLink.attr) || ""]: _ctx.makeUrl('tags', tag, (!_ctx.$store.state.sticky.detailLinksToAudible ? $props.book.tags : null)),
        target: _ctx.$store.state.sticky.detailLinksToAudible ? '_blank' : null,
        rel: "noopener noreferrer",
        class: "book-tag",
        key: tag.name
      }), {
        default: withCtx(() => [
          createTextVNode(toDisplayString(tag.name), 1)
        ]),
        _: 2
      }, 1040, ["target"]))
    }), 128))
  ]))
}
const __unplugin_components_2$4 = /*#__PURE__*/_export_sfc$1(_sfc_main$r, [['render',_sfc_render$r],['__scopeId',"data-v-cd5bd9c7"]]);

/* unplugin-vue-components disabled */

const _sfc_main$q = {
  name: "arrayToHTML",
  data: function() {
    return {
      inputDataExists: null,
    };
  },
  props: ["label", "array", "delim", "noLabel", "chevron"],
  mixins: [makeFullUrl],
  created: function() {
    this.inputDataExists = this.checkIfArrayHasData();
  },

  computed: {
    identifierClass: function() {
      return "details-" + _.kebabCase(this.label);
    },
  },

  methods: {
    checkIfArrayHasData: function() {
      return this.array && !_.isEmpty( this.array );
    },
    stringifyBookNumbers( numbers ) {
      return _.isArray(numbers) ? _.join(numbers, ',') : numbers;
    },
    routerOrLink( label ) {
      if ( !this.$store.state.sticky.detailLinksToAudible && !(label === 'store' || label === 'book') ) {
        return {
          tag: "router-link",
          attr: 'to',
        };
      }
      else {
        return {
          tag: "a",
          attr: 'href',
        };
      }
    }
  }
};

const _hoisted_1$C = {
  key: 0,
  class: "strong-label"
};
const _hoisted_2$i = { key: 0 };
const _hoisted_3$g = {
  key: 0,
  class: "chevron"
};
const _hoisted_4$f = { key: 1 };
const _hoisted_5$c = {
  key: 0,
  class: "book-number"
};

function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa_solid_chevron_right = __unplugin_components_0$e;

  return (_ctx.inputDataExists)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["array-list-wrapper", $options.identifierClass])
      }, [
        (!$props.noLabel)
          ? (openBlock(), createElementBlock("strong", _hoisted_1$C, toDisplayString($props.label) + ":", 1))
          : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.array, (item, index) => {
          return (openBlock(), createElementBlock("span", {
            clas: "array-item",
            key: item.name + '(' + index + ')'
          }, [
            (index !== 0)
              ? (openBlock(), createElementBlock("span", _hoisted_2$i, [
                  ($props.chevron)
                    ? (openBlock(), createElementBlock("span", _hoisted_3$g, [
                        createVNode(_component_fa_solid_chevron_right)
                      ]))
                    : (openBlock(), createElementBlock("span", _hoisted_4$f, toDisplayString($props.delim || ", "), 1))
                ]))
              : createCommentVNode("", true),
            createBaseVNode("span", null, [
              (openBlock(), createBlock(resolveDynamicComponent($options.routerOrLink($props.label.toLowerCase()).tag), normalizeProps({
                [($options.routerOrLink($props.label.toLowerCase()).attr) || ""]: _ctx.makeUrl($props.label.toLowerCase(), item, (!_ctx.$store.state.sticky.detailLinksToAudible ? $props.array : null)),
                target: _ctx.$store.state.sticky.detailLinksToAudible ? '_blank' : null,
                rel: "noopener noreferrer"
              }), {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.name), 1),
                  (item.bookNumbers)
                    ? (openBlock(), createElementBlock("span", _hoisted_5$c, " (book " + toDisplayString($options.stringifyBookNumbers(item.bookNumbers)) + ")", 1))
                    : createCommentVNode("", true)
                ]),
                _: 2
              }, 1040, ["target"]))
            ])
          ]))
        }), 128))
      ], 2))
    : createCommentVNode("", true)
}
const __unplugin_components_0$9 = /*#__PURE__*/_export_sfc$1(_sfc_main$q, [['render',_sfc_render$q],['__scopeId',"data-v-fcdd9df5"]]);

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$p = {
  name: "bookDetailsTitle",
  props: ["book", "tempAsin"],
  mixins: [ makeFullUrl ],
  computed: {
    showSubtitle() {
      
      const preferSubtitle = this.$store.state.sticky.bookDetailSettings.titleShort;
      const hasSubtitle = !!this.book.subtitle;
      const noTitleDuplicate = !!this.book.title && !!this.book.titleShort && this.book.title !== this.book.titleShort;
      
      return preferSubtitle && ( hasSubtitle || noTitleDuplicate );
      
    },
    audibleURL() {
      if ( this.tempAsin ) {
        const seriesObj = _.get(this.book, 'series.0');
        return this.makeUrl('series', seriesObj);
      }
      else {
        return this.makeUrl('book', this.book.asin);
      }
    },
  },
};

const _hoisted_1$B = { class: "book-title" };
const _hoisted_2$h = ["href"];
const _hoisted_3$f = ["innerHTML"];
const _hoisted_4$e = ["innerHTML"];
const _hoisted_5$b = ["innerHTML"];

function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, [
    createBaseVNode("h2", _hoisted_1$B, [
      createBaseVNode("a", {
        href: $options.audibleURL,
        target: "_blank",
        rel: "noopener noreferrer"
      }, [
        (!_ctx.$store.state.sticky.bookDetailSettings.titleShort)
          ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: $props.book.title || $props.book.titleShort
            }, null, 8, _hoisted_3$f))
          : (openBlock(), createElementBlock("span", {
              key: 1,
              innerHTML: $props.book.titleShort || $props.book.title
            }, null, 8, _hoisted_4$e))
      ], 8, _hoisted_2$h)
    ]),
    ($options.showSubtitle)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "subblementary-book-title",
          innerHTML: $props.book.subtitle || $props.book.title
        }, null, 8, _hoisted_5$b))
      : createCommentVNode("", true)
  ]))
}
const __unplugin_components_1$8 = /*#__PURE__*/_export_sfc$1(_sfc_main$p, [['render',_sfc_render$p]]);

/* unplugin-vue-components disabled */

const _sfc_main$o = {
  name: "bookSummary",
  props: ["book", "bookSummary", "mobileWidth"],
  mixins: [makeFullUrl],
  data: function() {
    return {
      summary: {
        readmore: {
          toggle: false,  
          exists: false
        },
        maxHeight: null,
        maxHeightTemp: null,
        fullHeight: null,
      },
      showReview: false,
    };
  },
  
  watch: {
    summaryHTML( fetched ) {
      if ( fetched ) {        
        this.getSummaryMaxHeight();
      }
    },
  },

  computed: {
    summaryHTML: function() {
      return this.book.summary || this.bookSummary || this.book.blurb;
    },
    showReadMore: function() {
      const summary = this.summary;
      // console.log( 'showReadmore - Has maxHeightTemp: ', summary.maxHeightTemp, 'summary.fullHeight > summary.maxHeightTemp', (summary.fullHeight > summary.maxHeightTemp) )
      if (  !summary.maxHeightTemp ) return;
      return summary.fullHeight > summary.maxHeightTemp;
    },
    review() {
      return _.find( this.$store.state.library.userReviews, { asin: this.book.asin });
    },
    reviewSummary() {
      return '<h2>' + _.get(this.review, 'title') + '</h2>' + _.get(this.review, 'summary');
    },
    reviewRatings() {
      return _.get(this.review, 'ratings', []);
    },
  },

  mounted: function() {
    this.getSummaryMaxHeight();
  },

  created: function() {
    this.$compEmitter.on("afterWindowResize", this.windowResized);
    this.$compEmitter.on("resizeSummary", this.getSummaryMaxHeight);
  },

  beforeUnmount: function() {
    this.$compEmitter.off("afterWindowResize", this.windowResized);
    this.$compEmitter.off("resizeSummary", this.getSummaryMaxHeight);
  },

  methods: {
    
    getSummaryMaxHeight() {

      if ( !this.summaryHTML ) return;
      this.$nextTick(function() {
          
        const minHeight = _.get(this.$refs, 'summaryMetaTop.offsetHeight', 0);
        const minHeightExtra = minHeight + 300;
        const summaryFullHeight = _.get(this.$refs, 'summary.offsetHeight', 0);
        // const summaryFullHeight = _.get(this.$refs, 'summary.scrollHeight', 0);
        this.summary.fullHeight = summaryFullHeight;
        
        // const wrapper = document.querySelector('#ale-bookdetails .details-wrap');
        const sidebar = document.querySelector('#ale-bookdetails .information');
        const sidebarHeight = _.get( sidebar, 'offsetHeight', 0 );
        
        let maxHeight = sidebarHeight;
        if ( this.mobileWidth || summaryFullHeight > minHeightExtra && minHeightExtra > sidebarHeight ) maxHeight = minHeightExtra; 
        
        this.summary.maxHeight = maxHeight;
        this.summary.maxHeightTemp = maxHeight;
        // console.log( minHeightExtra )
        // console.log('%c' + ' ' + '', 'background: #003191; color: #fff; padding: 2px 5px; border-radius: 8px;', _.clone(this.summary));
        
      });
      
    },
    
    windowResized() {
      this.getSummaryMaxHeight();
    },

    summaryReadMoreclick: function() {
      
      this.summary.readmore.toggle = !this.summary.readmore.toggle ? true : false;
      this.summary.maxHeight = this.summary.readmore.toggle ? "none" : this.summary.maxHeightTemp;
      
      // Scrolls up in an attempt to retain the scroll position in relation to the readmore button
      if ( !this.summary.readmore.toggle ) {
        const btnOffset = this.$refs.readMoreBtn.getBoundingClientRect().top;
        this.$nextTick(function() {
          scroll({
            top: (
              this.$refs.readMoreBtn.getBoundingClientRect().top +
              window.pageYOffset -
              btnOffset
            ),
          });
        });
      }
      
    },
    
    clickedShowReview() {
      
      this.getSummaryMaxHeight();
      this.$nextTick(() => {
        this.showReview = !this.showReview;
      });
      
    },
    
  }
};

const _hoisted_1$A = {
  class: "book-summary",
  ref: "summary"
};
const _hoisted_2$g = {
  class: "summary-meta-top",
  ref: "summaryMetaTop"
};
const _hoisted_3$e = {
  key: 0,
  class: "categories"
};
const _hoisted_4$d = { class: "inline-children smoll-text" };
const _hoisted_5$a = { class: "info-tags" };
const _hoisted_6$8 = {
  key: 0,
  class: "info-tag store-page-changed",
  content: "There is a store page for the book, but it's for a different version of the book. <br><br>This is the reason why some data is unavailable."
};
const _hoisted_7$6 = {
  key: 1,
  class: "info-tag store-page-missing",
  content: "Store page was possibly removed or it became unavailable in your region since it was added. In some cases there may still be a store page for a different version of the book. <br><br>This is the reason why some data is unavailable."
};
const _hoisted_8$6 = ["content"];
const _hoisted_9$4 = ["content"];
const _hoisted_10$3 = {
  key: 1,
  class: "release-date",
  content: "YYYY-MM-DD"
};
const _hoisted_11$3 = {
  key: 1,
  class: "my-review-wrapper"
};
const _hoisted_12$2 = {
  key: 0,
  class: "review-ratings"
};
const _hoisted_13$1 = { class: "review-rating" };
const _hoisted_14$1 = ["innerHTML"];

function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_book_details_title = __unplugin_components_1$8;
  const _component_gallery_array_to_html = __unplugin_components_0$9;
  const _component_gallery_book_tags = __unplugin_components_2$4;
  const _component_fa6_solid_basket_shopping = __unplugin_components_3$4;
  const _component_fa6_solid_circle_plus = __unplugin_components_4$3;
  const _component_fa6_solid_headphones_simple = __unplugin_components_7$1;
  const _component_fluent_document_one_page_sparkle_20_regular = __unplugin_components_6$3;
  const _component_gallery_star_ratings = __unplugin_components_0$a;
  const _component_gallery_vertical_chevron = __unplugin_components_8$1;
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["book-summary-wrapper", { expanded: _ctx.summary.readmore.toggle }]),
    ref: "summaryWrapper",
    style: normalizeStyle({
    maxHeight: _ctx.summary.maxHeight ? _ctx.summary.maxHeight + 'px' : null,
    paddingBottom: _ctx.summary.readmore.toggle ? '50px' : '0px',
  })
  }, [
    createBaseVNode("div", _hoisted_1$A, [
      createBaseVNode("div", _hoisted_2$g, [
        createVNode(_component_gallery_book_details_title, { book: $props.book }, null, 8, ["book"]),
        ($props.book.categories)
          ? (openBlock(), createElementBlock("div", _hoisted_3$e, [
              ($props.book.categories)
                ? (openBlock(), createBlock(_component_gallery_array_to_html, {
                    key: 0,
                    label: "categories",
                    noLabel: true,
                    array: $props.book.categories,
                    chevron: true
                  }, null, 8, ["array"]))
                : createCommentVNode("", true)
            ]))
          : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4$d, [
          ($props.book.tags)
            ? (openBlock(), createBlock(_component_gallery_book_tags, {
                key: 0,
                book: $props.book
              }, null, 8, ["book"]))
            : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_5$a, [
            ($props.book.storePageChanged)
              ? withDirectives((openBlock(), createElementBlock("div", _hoisted_6$8, [
                  createVNode(_component_fa6_solid_basket_shopping),
                  _cache[2] || (_cache[2] = createTextVNode(" changed ", -1))
                ])), [
                  [_directive_tippy, { maxWidth: 300 }]
                ])
              : ($props.book.storePageMissing)
                ? withDirectives((openBlock(), createElementBlock("div", _hoisted_7$6, [
                    createVNode(_component_fa6_solid_basket_shopping),
                    _cache[3] || (_cache[3] = createTextVNode(" missing ", -1))
                  ])), [
                    [_directive_tippy, { maxWidth: 300 }]
                  ])
                : createCommentVNode("", true),
            ($props.book.fromPlusCatalog)
              ? withDirectives((openBlock(), createElementBlock("div", {
                  key: 2,
                  class: normalizeClass(["info-tag plus-catalog", { 'plus-catalog-unavailable': $props.book.unavailable }]),
                  content: $props.book.unavailable ? 'Used to be in the plus catalog but you no longer have access to it' : 'In the plus catalog'
                }, [
                  createVNode(_component_fa6_solid_circle_plus),
                  _cache[4] || (_cache[4] = createTextVNode(" Plus catalog ", -1))
                ], 10, _hoisted_8$6)), [
                  [_directive_tippy, { maxWidth: 300 }]
                ])
              : createCommentVNode("", true),
            ($props.book.whispersync)
              ? withDirectives((openBlock(), createElementBlock("div", {
                  key: 3,
                  class: normalizeClass(["info-tag whispersync", { owned: $props.book.whispersync === 'owned' }]),
                  content: $props.book.whispersync === 'owned' ? 'I own the Kindle version' : 'Kindle book available for purchase...'
                }, [
                  createVNode(_component_fa6_solid_headphones_simple),
                  _cache[5] || (_cache[5] = createTextVNode(" whispersync ", -1))
                ], 10, _hoisted_9$4)), [
                  [_directive_tippy, { maxWidth: 300 }]
                ])
              : createCommentVNode("", true)
          ]),
          ($props.book.releaseDate)
            ? withDirectives((openBlock(), createElementBlock("div", _hoisted_10$3, [
                _cache[6] || (_cache[6] = createBaseVNode("span", { class: "strong-label" }, "Released: ", -1)),
                createBaseVNode("span", null, toDisplayString($props.book.releaseDate), 1)
              ])), [
                [_directive_tippy]
              ])
            : createCommentVNode("", true)
        ]),
        _cache[8] || (_cache[8] = createBaseVNode("div", { class: "meta-padding" }, null, -1)),
        ($options.review)
          ? (openBlock(), createElementBlock("div", _hoisted_11$3, [
              createBaseVNode("div", {
                class: normalizeClass(["my-review-btn", { active: _ctx.showReview }]),
                onClick: _cache[0] || (_cache[0] = (...args) => ($options.clickedShowReview && $options.clickedShowReview(...args)))
              }, [
                createVNode(_component_fluent_document_one_page_sparkle_20_regular),
                _cache[7] || (_cache[7] = createTextVNode(" My review ", -1))
              ], 2),
              (_ctx.showReview)
                ? (openBlock(), createElementBlock("div", _hoisted_12$2, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($options.reviewRatings, (rating) => {
                      return (openBlock(), createElementBlock("div", _hoisted_13$1, [
                        createBaseVNode("strong", null, toDisplayString(rating.name) + ":", 1),
                        createVNode(_component_gallery_star_ratings, {
                          size: 12,
                          rating: rating.stars,
                          number: "true"
                        }, null, 8, ["rating"])
                      ]))
                    }), 256))
                  ]))
                : createCommentVNode("", true)
            ]))
          : createCommentVNode("", true)
      ], 512),
      ($options.summaryHTML)
        ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "summary-inner-wrap",
            ref: "summaryInnerWrap",
            innerHTML: _ctx.showReview ? $options.reviewSummary : $options.summaryHTML
          }, null, 8, _hoisted_14$1))
        : createCommentVNode("", true)
    ], 512),
    ($options.showReadMore)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "summary-read-more",
          ref: "readMoreBtn",
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.summaryReadMoreclick && $options.summaryReadMoreclick(...args)))
        }, [
          createBaseVNode("span", null, toDisplayString(_ctx.summary.readmore.toggle ? "Read less" : "Read more"), 1),
          createVNode(_component_gallery_vertical_chevron, {
            class: "read-more-icon",
            up: _ctx.summary.readmore.toggle
          }, null, 8, ["up"])
        ], 512))
      : createCommentVNode("", true)
  ], 6))
}
const __unplugin_components_12 = /*#__PURE__*/_export_sfc$1(_sfc_main$o, [['render',_sfc_render$o]]);

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$n = {
  name: "booksInSeriesLink",
  props: ["series", "book", "index", "seriesName"],
  mixins: [makeFullUrl],
  data: function() {
    return {
      seriesPage: false,
      routerLink: null,
      title: null,
      linkDisabled: false,
      sameSeries: null,
    };
  },
  
  created: function() {
    
    // Because these links lead to the series page, they are disabled
    // when on that page and instead a different book is opened...
    // Except when the link leads to another series...
    this.seriesPage = this.$route.name === 'series';
    
    this.routerLink = { 
      name: 'series', 
      params: { series: this.series.asin }, 
      query: { subPageSource: 'library', refresh: true }, 
    };
    
    if ( this.seriesName ) {
      this.routerLink.query.closeBookDetails = true;
    }
    else {
      this.routerLink.query.book = this.book.asin;
    }
        
    const sameSeries = this.seriesPage && this.$route.params.series === this.series.asin;
    this.linkDisabled = this.book.notInLibrary || sameSeries;
    this.sameSeries = sameSeries;
    
  },

  methods: {
    
    openBook: function( e ) {
      e.preventDefault();
      if ( this.book && !this.book.notInLibrary && this.book.asin !== this.$route.query.book ) {
        this.$compEmitter.emit('book-clicked', this.book.obj.asin);
      }
    },
    
  }
};

const _hoisted_1$z = { class: "linky" };
const _hoisted_2$f = {
  key: 0,
  class: "series-not-link"
};
const _hoisted_3$d = ["href", "content"];
const _hoisted_4$c = { class: "numbers" };
const _hoisted_5$9 = { class: "title" };
const _hoisted_6$7 = {
  key: 0,
  style: {"white-space":"normal","padding-bottom":"3px","display":"inline-block"}
};
const _hoisted_7$5 = {
  key: 1,
  class: "numbers"
};
const _hoisted_8$5 = {
  key: 2,
  class: "title"
};

function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("div", _hoisted_1$z, [
    ($props.seriesName && _ctx.linkDisabled)
      ? (openBlock(), createElementBlock("span", _hoisted_2$f, toDisplayString($props.seriesName), 1))
      : (!$props.seriesName && $props.book.notInLibrary && $props.book.asin)
        ? withDirectives((openBlock(), createElementBlock("a", {
            key: 1,
            class: "clickety-click cursor-alias",
            target: "_blank",
            rel: "noopener noreferrer",
            href: _ctx.makeUrl('book', $props.book.asin),
            content: $props.book.title !== $props.book.titleShort ? $props.book.title : false
          }, [
            createBaseVNode("span", _hoisted_4$c, toDisplayString($props.book.bookNumbers), 1),
            createBaseVNode("span", _hoisted_5$9, toDisplayString($props.book.titleShort || $props.book.title), 1)
          ], 8, _hoisted_3$d)), [
            [_directive_tippy, { maxWidth: 350, placement: 'right', flipBehavior: ['right', 'top', 'bottom'] }]
          ])
        : withDirectives((openBlock(), createBlock(_component_router_link, {
            key: 2,
            class: normalizeClass(["clickety-click", { 'link-disabled': _ctx.linkDisabled, 'same-series': _ctx.sameSeries }]),
            event: _ctx.linkDisabled ? '' : 'click',
            onClick: _cache[0] || (_cache[0] = $event => (_ctx.linkDisabled && $options.openBook($event))),
            to: _ctx.linkDisabled ? '' : _ctx.routerLink,
            content: $props.seriesName ? null : ($props.book.notInLibrary ? '<strong>Not available:</strong> ' : '') + ( $props.book.title !== $props.book.titleShort ? $props.book.title : '')
          }, {
            default: withCtx(() => [
              ($props.seriesName)
                ? (openBlock(), createElementBlock("span", _hoisted_6$7, toDisplayString($props.seriesName), 1))
                : createCommentVNode("", true),
              (!$props.seriesName)
                ? (openBlock(), createElementBlock("span", _hoisted_7$5, toDisplayString($props.book.bookNumbers), 1))
                : createCommentVNode("", true),
              (!$props.seriesName)
                ? (openBlock(), createElementBlock("span", _hoisted_8$5, toDisplayString($props.book.titleShort || $props.book.title), 1))
                : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["class", "event", "to", "content"])), [
            [_directive_tippy, { maxWidth: 350, placement: 'right', flipBehavior: ['right', 'top', 'bottom'] }]
          ])
  ]))
}
const __unplugin_components_2$3 = /*#__PURE__*/_export_sfc$1(_sfc_main$n, [['render',_sfc_render$n],['__scopeId',"data-v-c0436286"]]);

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$m = {
  name: "goodReadsLink",
  props: ["book", "icon" , "size", "muted"],
  mixins: [makeGoodReadsUrl],
  data: function() {
    return {
      goodreadsUrl: null
    };
  },
  created: function() {
    if (this.book) {
      this.goodreadsUrl = this.makeGoodReadsUrl();
    }
  }
};

const _hoisted_1$y = ["href"];
const _hoisted_2$e = {
  key: 0,
  src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01LjExMSAxOC45MDdoLjEyOWMuNTg1IDAgMS4xNzYgMCAxLjc2Mi4wMDUuMDc0IDAgLjE0My0uMDE5LjE2Ni4wOTguMzI4IDEuNjM2IDEuMzgzIDIuNTU5IDIuOSAyLjk5NSAxLjI0MS4zNTYgMi40OTUuMzY2IDMuNzQ5LjA4NCAxLjU1OC0uMzQ3IDIuNTgyLTEuMzI3IDMuMTM2LTIuODMxLjM2OS0xLjAwOC40OTQtMi4wNTMuNTA4LTMuMTE3LjAwNS0uMjcyLjAxNC0yLjIwMy0uMDA5LTIuNDc1bC0uMDQxLS4wMTRjLS4wMzcuMDctLjA3OS4xMzYtLjExNS4yMDYtMS4wMTkgMi4wMi0yLjgyNiAzLjE1OS00Ljg2MSAzLjIzOS00Ljc1LjE4OC03LjgxMi0yLjY3Mi03LjkzMi04LjI1OS0uMDIzLTEuMTExLjA4My0yLjE5OC4zODMtMy4yNjcuOTUtMy4zMzMgMy40NC01LjU0MSA3LjA5Ny01LjU2OSAyLjgyNi0uMDE5IDQuNjgxIDEuODE0IDUuMzU5IDMuMjk1LjAyMy4wNTIuMDYuMTA4LjExLjA4OVYuNDk4aDIuMDQzYzAgMTMuMTM5LjAwNSAxNS41NzIuMDA1IDE1LjU3Mi0uMDA1IDMuNjgtMS4yMzIgNi43MzYtNC43NSA3LjYwMy0zLjIwNS43OTItNy4zMzIuMjI1LTkuMDM5LTIuNjgxLS4zNjktLjYzMy0uNTQ0LTEuMzI3LS41OTktMi4wODZ6bTYuNzQ3LTE3LjE5NEM5LjQzNyAxLjY5IDYuODU0IDMuNjIxIDYuNTU0IDcuOTg1Yy0uMTg5IDIuNzY2LjY4MyA1LjcyOCAzLjI5OCA2Ljk2NiAxLjI3My42MDUgMy40MjcuNzAzIDQuOTk1LS40MDggMi4xOTUtMS41NTYgMi44OTEtNC41NDcgMi41MjctNy4yMTktLjQ0OC0zLjMzMy0yLjIwNS01LjYyNS01LjUxNi01LjYxMXoiIGZpbGw9IiM0ZTM0MmUiLz48L3N2Zz4=",
  alt: ""
};
const _hoisted_3$c = {
  key: 1,
  alt: "",
  src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01LjExMSAxOC45MDdoLjEyOWMuNTg1IDAgMS4xNzYgMCAxLjc2Mi4wMDUuMDc0IDAgLjE0My0uMDE5LjE2Ni4wOTguMzI4IDEuNjM2IDEuMzgzIDIuNTU5IDIuOSAyLjk5NSAxLjI0MS4zNTYgMi40OTUuMzY2IDMuNzQ5LjA4NCAxLjU1OC0uMzQ3IDIuNTgyLTEuMzI3IDMuMTM2LTIuODMxLjM2OS0xLjAwOC40OTQtMi4wNTMuNTA4LTMuMTE3LjAwNS0uMjcyLjAxNC0yLjIwMy0uMDA5LTIuNDc1bC0uMDQxLS4wMTRjLS4wMzcuMDctLjA3OS4xMzYtLjExNS4yMDYtMS4wMTkgMi4wMi0yLjgyNiAzLjE1OS00Ljg2MSAzLjIzOS00Ljc1LjE4OC03LjgxMi0yLjY3Mi03LjkzMi04LjI1OS0uMDIzLTEuMTExLjA4My0yLjE5OC4zODMtMy4yNjcuOTUtMy4zMzMgMy40NC01LjU0MSA3LjA5Ny01LjU2OSAyLjgyNi0uMDE5IDQuNjgxIDEuODE0IDUuMzU5IDMuMjk1LjAyMy4wNTIuMDYuMTA4LjExLjA4OVYuNDk4aDIuMDQzYzAgMTMuMTM5LjAwNSAxNS41NzIuMDA1IDE1LjU3Mi0uMDA1IDMuNjgtMS4yMzIgNi43MzYtNC43NSA3LjYwMy0zLjIwNS43OTItNy4zMzIuMjI1LTkuMDM5LTIuNjgxLS4zNjktLjYzMy0uNTQ0LTEuMzI3LS41OTktMi4wODZ6bTYuNzQ3LTE3LjE5NEM5LjQzNyAxLjY5IDYuODU0IDMuNjIxIDYuNTU0IDcuOTg1Yy0uMTg5IDIuNzY2LjY4MyA1LjcyOCAzLjI5OCA2Ljk2NiAxLjI3My42MDUgMy40MjcuNzAzIDQuOTk1LS40MDggMi4xOTUtMS41NTYgMi44OTEtNC41NDcgMi41MjctNy4yMTktLjQ0OC0zLjMzMy0yLjIwNS01LjYyNS01LjUxNi01LjYxMXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
};
const _hoisted_4$b = { key: 1 };

function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_tippy = resolveDirective("tippy");

  return (_ctx.goodreadsUrl || $props.muted)
    ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: _ctx.goodreadsUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        class: normalizeClass(["good-reads-icon", { 'muted': $props.muted, 'placeholder': !_ctx.goodreadsUrl }])
      }, [
        ($props.icon)
          ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              class: "gr-icon",
              style: normalizeStyle({ width: ($props.size || 30) + 'px', height: ($props.size || 30) + 'px' }),
              content: "Search for the book in Goodreads"
            }, [
              (!$props.muted)
                ? (openBlock(), createElementBlock("img", _hoisted_2$e))
                : (openBlock(), createElementBlock("img", _hoisted_3$c))
            ], 4)), [
              [_directive_tippy]
            ])
          : (openBlock(), createElementBlock("span", _hoisted_4$b, "Search in Goodreads"))
      ], 10, _hoisted_1$y))
    : createCommentVNode("", true)
}
const __unplugin_components_1$7 = /*#__PURE__*/_export_sfc$1(_sfc_main$m, [['render',_sfc_render$m],['__scopeId',"data-v-c78c02f7"]]);

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$l = {
  name: "openInApp",
  props: ["book", "size", "muted"],
  data: function() {
    return {
      url: null
    };
  },
  created: function() {
    if ( _.get(this.book, 'asin') ) {
      this.url = 'https://smart.link/o3waqx4wg1gdn?asin=' + this.book.asin;
    }
  }
};

const _hoisted_1$x = ["href", "tabindex"];

function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_tippy = resolveDirective("tippy");

  return (_ctx.url || $props.muted)
    ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: _ctx.url,
        target: "_blank",
        rel: "noopener noreferrer",
        class: normalizeClass(["audible-app-link", { 'muted': $props.muted, 'placeholder': !$props.book.asin }]),
        tabindex: $props.muted ? 0 : -1
      }, [
        withDirectives((openBlock(), createElementBlock("div", {
          class: "gr-icon",
          style: normalizeStyle({ width: ($props.size || 30) + 'px', height: ($props.size || 30) + 'px' }),
          content: "Open in app"
        }, [...(_cache[0] || (_cache[0] = [
          createBaseVNode("img", {
            src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTEuNSA5My43IiB3aWR0aD0iMTUxLjUiIGhlaWdodD0iOTMuNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggODAuN2w3NS43LTQ3LjJ2MTIuOEw3NS44IDkzLjcgMCA0Ni4zVjMzLjVsNzUuOCA0Ny4yeiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggMjEuNWE0OC4xNyA0OC4xNyAwIDAgMC00MC43IDIxLjkgMTIuOTQgMTIuOTQgMCAwIDEgMS44LTEuNmMyMS4zLTE3LjcgNTItMTMuNyA2OC43IDguNmwxMS4xLTcuMWE0OS44MiA0OS44MiAwIDAgMC00MC45LTIxLjgiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NS44IDQzLjRhMjcuNzIgMjcuNzIgMCAwIDAtMjIuNCAxMS41IDIyLjcgMjIuNyAwIDAgMSAxMy41LTQuNGM4LjIgMCAxNS41IDQuMiAyMC40IDExLjNsMTAuNi02LjZhMjUuNzkgMjUuNzkgMCAwIDAtMjIuMS0xMS44TTI0LjYgMjQuMkM1NS44LS40IDk5LjkgNi4zIDEyMy40IDM5bC4yLjIgMTEuNS03LjFhNzAuODIgNzAuODIgMCAwIDAtMTE4LjYgMCA2MC42MyA2MC42MyAwIDAgMSA4LjEtNy45Ii8+PC9nPjwvZz48L3N2Zz4=",
            alt: ""
          }, null, -1)
        ]))], 4)), [
          [_directive_tippy, { 
        placement: ($props.muted ? 'left' : 'top'), 
        flipBehavior: ($props.muted ? ['left', 'top', 'bottom', 'right'] : ['top', 'bottom', 'right', 'left']) 
      }]
        ])
      ], 10, _hoisted_1$x))
    : createCommentVNode("", true)
}
const __unplugin_components_2$2 = /*#__PURE__*/_export_sfc$1(_sfc_main$l, [['render',_sfc_render$l],['__scopeId',"data-v-8ea68bc0"]]);

const _sfc_main$k = {
  name: "booksInSeriesBooks",
  props: ["series", "book"],
  data: function() {
    return {
    };
  },
  
  computed: {
    filteredBooks() {
      const books =  _.filter( this.series.books, ( book ) => {
        if ( _.get(book, 'notInLibrary') ) {
          return this.$store.state.sticky.booksInSeriesAll;
        }
        else {
          if ( this.$store.state.sticky.booksInSeriesFinished ) {
            return true;
          }
          else {
            let progress = _.get(book, 'obj.progress');
            return progress ? !progress.match(/finished/i) : true;
          }
        }
        
      });
      
      return books;
      
    }
  },

  methods: {

    numbersClass: function(book) {
      var progress = _.get(book, 'obj.progress');
      return {
        finished: progress && progress.toLowerCase().match("finished") ? true : false,
        reading: progress && !progress.toLowerCase().match("finished") ? true : false,
        unfinished: !progress,
        current: this.book.asin === _.get(book, 'obj.asin'),
        'not-in-library': book.notInLibrary,
        'in-wishlist': book.inWishlist,
      };
    },

    iconTippyContent: function(book) {
      if ( book.free && book.notInLibrary ) {
        return 'This book is free...';
      }
      else if ( book.plus && book.notInLibrary ) {
        return 'In the plus catalog...';
      }
      else if ( book.notInLibrary ) {
        return 'Not in library...';
      }
      else if (book.inWishlist) {
        return 'In wishlist';
      }
      else {
        const classes = this.numbersClass(book);
        var tippyContent = "";
        if (classes.finished) {
          tippyContent = "Finished!";
        } else if (classes.unfinished) {
          tippyContent = "Not started...";
        } else if (classes.reading) {
          tippyContent = "Started...";
        }
        return tippyContent;
      }
    },

    booksInSeriesIcon: function(book) {
      if ( book.free && book.notInLibrary ) {
        return 'fa-solid fa-circle-minus';
      }
      else if ( book.plus && book.notInLibrary ) {
        return 'fa-solid fa-circle-plus';
      }
      else if (book.inWishlist) {
        return 'fa-solid fa-hand-holding-heart';
      }
      else if ( book.notInLibrary ) {
        return 'fa-solid fa-ban';
      }
      else {
        const classes = this.numbersClass(book);
        var iconClass = "";
        if (classes.finished) {
          iconClass = "fa-solid fa-archive";
        } else if (classes.unfinished) {
          iconClass = "fa-solid fa-book";
        } else if (classes.reading) {
          iconClass = "fa-solid fa-book-reader";
        }
        return iconClass;
      }
    }
  }
};

const _hoisted_1$w = ["data-series-name"];
const _hoisted_2$d = ["content"];

function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_open_in_app = __unplugin_components_2$2;
  const _component_gallery_goodreads_link = __unplugin_components_1$7;
  const _component_gallery_books_in_series_link = __unplugin_components_2$3;
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredBooks, (seriesBook, index) => {
      return (openBlock(), createElementBlock("div", {
        "data-series-name": $props.series.name,
        class: normalizeClass(["numbers-list-item", $options.numbersClass(seriesBook)]),
        key: seriesBook.asin
      }, [
        (_ctx.$store.state.sticky.booksInSeriesOpenInApp)
          ? (openBlock(), createBlock(_component_gallery_open_in_app, {
              key: 0,
              size: 14,
              book: seriesBook,
              muted: true
            }, null, 8, ["book"]))
          : (openBlock(), createBlock(_component_gallery_goodreads_link, {
              key: 1,
              size: 14,
              book: seriesBook,
              icon: true,
              muted: true
            }, null, 8, ["book"])),
        withDirectives((openBlock(), createElementBlock("span", {
          class: "icon",
          content: $options.iconTippyContent(seriesBook)
        }, [
          createBaseVNode("i", {
            class: normalizeClass($options.booksInSeriesIcon(seriesBook))
          }, null, 2)
        ], 8, _hoisted_2$d)), [
          [_directive_tippy, { placement: 'left', flipBehavior: ['left', 'top', 'bottom'] }]
        ]),
        createVNode(_component_gallery_books_in_series_link, {
          series: $props.series,
          book: seriesBook,
          index: index
        }, null, 8, ["series", "book", "index"])
      ], 10, _hoisted_1$w))
    }), 128))
  ]))
}
const __unplugin_components_3$3 = /*#__PURE__*/_export_sfc$1(_sfc_main$k, [['render',_sfc_render$k]]);

const _hoisted_1$v = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$g(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$v, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M32 32h448c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m0 128h448v256c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm128 80c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16"
    }, null, -1)
  ]))]))
}

const __unplugin_components_1$6 = markRaw({ name: 'fa6-solid-box-archive', render: render$g });
/* vite-plugin-components disabled */

const _hoisted_1$u = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$f(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$u, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5m45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5zM0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0"
    }, null, -1)
  ]))]))
}

const __unplugin_components_8 = markRaw({ name: 'fa6-solid-ban', render: render$f });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$j = {
  name: "booksInSeriesFilters",
  props: ['series'],
  data: function() {
    return {
      store: this.$store.state,
      showAllToggle: false,
      showFinishedToggle: false,
      count: {
        notInLibrary: 0,
        finished: 0,
      },
    };
  },
  
  created: function() {
    if ( this.series.collection ) {
      
      this.count.finished = this.countFinished();
      this.showFinishedToggle = this.count.finished > 0;
      
      this.count.notInLibrary = this.countNotInLibrary();
      this.showAllToggle = this.count.notInLibrary > 0;
      
    }
  },
  
  methods: {
    
    countFinished: function() {
      
      let count = 0;
      _.each(this.series.collection, function(o) {
        if ( o.books ) {
          let bookCount = _.filter(o.books, function(o) {
            let progress = _.get(o, 'obj.progress');
            return progress ? progress.match(/finished/i) : false;
          });
          count += bookCount.length;
        }
      });
      
      return count;
      
    },
    
    countNotInLibrary: function() {
      
      let count = 0;
      _.each(this.series.collection, function(o) {
        if ( o.books ) {
          let bookCount = _.filter(o.books, 'notInLibrary');
          count += bookCount.length;
        }
      });
      
      return count;
      
    },
    
    clickedShowAll() {
      this.$store.commit('stickyProp', { key: 'booksInSeriesAll', value: !this.$store.state.sticky.booksInSeriesAll });
      this.$nextTick(function() {
        this.$compEmitter.emit("resizeSummary");
      });
    },
    
    clickedShowFinished() {
      this.$store.commit('stickyProp', { key: 'booksInSeriesFinished', value: !this.$store.state.sticky.booksInSeriesFinished });
      this.$nextTick(function() {
        this.$compEmitter.emit("resizeSummary");
      });
    },

  },
};

const _hoisted_1$t = { class: "row" };
const _hoisted_2$c = { key: 0 };
const _hoisted_3$b = { key: 0 };
const _hoisted_4$a = { key: 0 };
const _hoisted_5$8 = { key: 1 };

function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa6_solid_ban = __unplugin_components_8;
  const _component_fa6_solid_box_archive = __unplugin_components_1$6;

  return (openBlock(), createElementBlock("div", {
    class: "list-filter-wrapper",
    style: normalizeStyle({ top: _ctx.$store.state.sticky.viewMode === 'grid' ? _ctx.$store.state.topNavOffset + 'px' : '31px' })
  }, [
    createBaseVNode("div", _hoisted_1$t, [
      (_ctx.showAllToggle)
        ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "show-all-toggle",
            onClick: _cache[0] || (_cache[0] = (...args) => ($options.clickedShowAll && $options.clickedShowAll(...args)))
          }, [
            createBaseVNode("div", null, [
              createVNode(_component_fa6_solid_ban, {
                style: {"padding-right":"4px"},
                class: normalizeClass({ active: _ctx.$store.state.sticky.booksInSeriesAll})
              }, null, 8, ["class"]),
              (!_ctx.showFinishedToggle)
                ? (openBlock(), createElementBlock("span", _hoisted_2$c, "Not in library:"))
                : createCommentVNode("", true),
              createBaseVNode("span", null, toDisplayString(_ctx.count.notInLibrary), 1)
            ])
          ]))
        : createCommentVNode("", true),
      (_ctx.showFinishedToggle)
        ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "show-finished",
            onClick: _cache[1] || (_cache[1] = (...args) => ($options.clickedShowFinished && $options.clickedShowFinished(...args)))
          }, [
            createBaseVNode("div", null, [
              createVNode(_component_fa6_solid_box_archive, {
                style: {"padding-right":"4px"},
                class: normalizeClass({ active: _ctx.$store.state.sticky.booksInSeriesFinished})
              }, null, 8, ["class"]),
              (!_ctx.showAllToggle)
                ? (openBlock(), createElementBlock("span", _hoisted_3$b, "Finished books:"))
                : createCommentVNode("", true),
              createBaseVNode("span", null, toDisplayString(_ctx.count.finished), 1)
            ])
          ]))
        : createCommentVNode("", true),
      createBaseVNode("div", {
        style: {"flex":"unset","padding-left":"6px","padding-right":"6px","min-width":"30px"},
        onClick: _cache[2] || (_cache[2] = $event => (_ctx.$store.commit('stickyProp', { key: 'booksInSeriesOpenInApp', value: !_ctx.$store.state.sticky.booksInSeriesOpenInApp })))
      }, [
        (_ctx.$store.state.sticky.booksInSeriesOpenInApp)
          ? (openBlock(), createElementBlock("span", _hoisted_4$a, [...(_cache[3] || (_cache[3] = [
              createBaseVNode("img", {
                class: "img-icon",
                src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTEuNSA5My43IiB3aWR0aD0iMTUxLjUiIGhlaWdodD0iOTMuNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggODAuN2w3NS43LTQ3LjJ2MTIuOEw3NS44IDkzLjcgMCA0Ni4zVjMzLjVsNzUuOCA0Ny4yeiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggMjEuNWE0OC4xNyA0OC4xNyAwIDAgMC00MC43IDIxLjkgMTIuOTQgMTIuOTQgMCAwIDEgMS44LTEuNmMyMS4zLTE3LjcgNTItMTMuNyA2OC43IDguNmwxMS4xLTcuMWE0OS44MiA0OS44MiAwIDAgMC00MC45LTIxLjgiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NS44IDQzLjRhMjcuNzIgMjcuNzIgMCAwIDAtMjIuNCAxMS41IDIyLjcgMjIuNyAwIDAgMSAxMy41LTQuNGM4LjIgMCAxNS41IDQuMiAyMC40IDExLjNsMTAuNi02LjZhMjUuNzkgMjUuNzkgMCAwIDAtMjIuMS0xMS44TTI0LjYgMjQuMkM1NS44LS40IDk5LjkgNi4zIDEyMy40IDM5bC4yLjIgMTEuNS03LjFhNzAuODIgNzAuODIgMCAwIDAtMTE4LjYgMCA2MC42MyA2MC42MyAwIDAgMSA4LjEtNy45Ii8+PC9nPjwvZz48L3N2Zz4=",
                alt: ""
              }, null, -1)
            ]))]))
          : (openBlock(), createElementBlock("span", _hoisted_5$8, [...(_cache[4] || (_cache[4] = [
              createBaseVNode("img", {
                class: "img-icon",
                src: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01LjExMSAxOC45MDdoLjEyOWMuNTg1IDAgMS4xNzYgMCAxLjc2Mi4wMDUuMDc0IDAgLjE0My0uMDE5LjE2Ni4wOTguMzI4IDEuNjM2IDEuMzgzIDIuNTU5IDIuOSAyLjk5NSAxLjI0MS4zNTYgMi40OTUuMzY2IDMuNzQ5LjA4NCAxLjU1OC0uMzQ3IDIuNTgyLTEuMzI3IDMuMTM2LTIuODMxLjM2OS0xLjAwOC40OTQtMi4wNTMuNTA4LTMuMTE3LjAwNS0uMjcyLjAxNC0yLjIwMy0uMDA5LTIuNDc1bC0uMDQxLS4wMTRjLS4wMzcuMDctLjA3OS4xMzYtLjExNS4yMDYtMS4wMTkgMi4wMi0yLjgyNiAzLjE1OS00Ljg2MSAzLjIzOS00Ljc1LjE4OC03LjgxMi0yLjY3Mi03LjkzMi04LjI1OS0uMDIzLTEuMTExLjA4My0yLjE5OC4zODMtMy4yNjcuOTUtMy4zMzMgMy40NC01LjU0MSA3LjA5Ny01LjU2OSAyLjgyNi0uMDE5IDQuNjgxIDEuODE0IDUuMzU5IDMuMjk1LjAyMy4wNTIuMDYuMTA4LjExLjA4OVYuNDk4aDIuMDQzYzAgMTMuMTM5LjAwNSAxNS41NzIuMDA1IDE1LjU3Mi0uMDA1IDMuNjgtMS4yMzIgNi43MzYtNC43NSA3LjYwMy0zLjIwNS43OTItNy4zMzIuMjI1LTkuMDM5LTIuNjgxLS4zNjktLjYzMy0uNTQ0LTEuMzI3LS41OTktMi4wODZ6bTYuNzQ3LTE3LjE5NEM5LjQzNyAxLjY5IDYuODU0IDMuNjIxIDYuNTU0IDcuOTg1Yy0uMTg5IDIuNzY2LjY4MyA1LjcyOCAzLjI5OCA2Ljk2NiAxLjI3My42MDUgMy40MjcuNzAzIDQuOTk1LS40MDggMi4xOTUtMS41NTYgMi44OTEtNC41NDcgMi41MjctNy4yMTktLjQ0OC0zLjMzMy0yLjIwNS01LjYyNS01LjUxNi01LjYxMXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
              }, null, -1)
            ]))]))
      ])
    ])
  ], 4))
}
const __unplugin_components_1$5 = /*#__PURE__*/_export_sfc$1(_sfc_main$j, [['render',_sfc_render$j],['__scopeId',"data-v-a69b04a3"]]);

/* unplugin-vue-components disabled */

const _sfc_main$i = {
  name: "booksInSeries",
  props: ["book"],
  mixins: [makeFullUrl],
  data: function() {
    return {
      inSeries: false,
      series: {
        collection: null,
        toggle: false
      },
      // seriesPage: false,
    };
  },

  created: function() {

    // Because these links lead to the series page, they are disabled
    // when on that page and instead a different book is opened...
    // Except when the link leads to another series...
    this.seriesPage = this.$route.name === 'series';

    this.series.collection = this.getBooksInSeries();
    this.series.count = this.getSeriesCount();

    // Check if this book is in a series
    _.each(this.series.collection, (series) => {
      if ( series.books.length ) {
        this.inSeries = true;
        return false;
      }
    });

  },

  mounted: function() {

    if ( this.$store.state.sticky.booksInSeriesToggle ) {
      this.$nextTick(() => {
        this.$compEmitter.emit("resizeSummary");
      });
    }

  },

  methods: {

    inLibraryLength: function( series ) {
      return _.filter( series.books, function( o ) { return !o.notInLibrary; }).length;
    },

    checkFilter: function( book ) {
      if ( _.get(book, 'notInLibrary') ) {
        return this.$store.state.sticky.booksInSeriesAll;
      }
      else {
        if ( this.$store.state.sticky.booksInSeriesFinished ) {
          return true;
        }
        else {
          let progress = _.get(book, 'obj.progress');
          return progress ? !progress.match(/finished/i) : true;
        }
      }

    },

    getBooksInSeries: function() {
      const vue = this;
      let series = [];
      if (vue.book.series) {
        _.each(vue.book.series, function(currentSeries, i) {
          const allBooksInSeries = _.find(vue.$store.state.library.series, {
            asin: currentSeries.asin
          });
          if (allBooksInSeries) {

            let booksSource = allBooksInSeries.books;
            if ( allBooksInSeries.allBooks ) booksSource = allBooksInSeries.allBooks;
            
            series.push({
              asin: currentSeries.asin,
              name: currentSeries.name,
              length: allBooksInSeries.length,
              books: _.map( booksSource , function( book ) {
                let asin = book.asin || book;
                let inLibrary = _.includes( allBooksInSeries.books, asin );
                const wishlistBook = _.find(vue.$store.state.library.wishlist, { asin: asin });
                if ( inLibrary ) {
                  let libBook = _.find(vue.$store.state.library.books, { asin: asin });
                  var libSeries = _.find( libBook.series, { asin: currentSeries.asin });
                  let inLibBookNumbers = !allBooksInSeries.allBooks ? (_.isArray(libSeries.bookNumbers) ? libSeries.bookNumbers.join(', ') : libSeries.bookNumbers) : book.bookNumbers;
                  let newLibBook = {
                    asin: book.asin || libBook.asin,
                    bookNumbers: inLibBookNumbers,
                    title: book.title || libBook.title,
                    titleShort: book.titleShort || libBook.titleShort,
                    obj: libBook,
                  };
                  return newLibBook;
                }
                else if (wishlistBook) {
                  return {
                    asin,
                    title: wishlistBook.title,
                    titleShort: book.titleShort,
                    obj: wishlistBook,
                    bookNumbers: book.bookNumbers,
                    inWishlist: true,
                    notInLibrary: true,
                  }
                }
                else {
                  book.notInLibrary = true;
                  book.obj = {
                    authors: vue.book.authors,
                    notInLibrary: true,
                  };
                  return book;
                }
              })
            });
          }
        });
      }

      return series.length > 0 ? series : null;
    },

    getSeriesCount: function() {
      let array = [];

      _.each(this.series.collection, function(series, seriesIndex ) {
        if ( series.books.length ) {
          _.each(series.books, function(book) {
            if ( !book.notInLibrary ) {
              if ( !array[ seriesIndex ] ) array.push(0);
              ++array[ seriesIndex ];
            }
          });
        }
      });

      return array.join(", ");
    },

    booksInSeriesLabelClick: function() {
      this.$store.commit('stickyProp', { key: 'booksInSeriesToggle', value: !this.$store.state.sticky.booksInSeriesToggle });
      this.$nextTick(() => {
        this.$compEmitter.emit("resizeSummary");
      });
    },
    
  }
};

const _hoisted_1$s = {
  key: 0,
  "data-scroll-to-url-param": "&scrollToSeries=true"
};
const _hoisted_2$b = { class: "count" };
const _hoisted_3$a = {
  key: 0,
  class: "hidden-section my-books-in-series"
};
const _hoisted_4$9 = {
  class: "series-heading",
  content: "<div style='text-align: left;'>The first number is how many books you have in the series. The total is based on every single listing in the series page, including different versions or bundles with books you may already have.</div>"
};
const _hoisted_5$7 = { class: "series-name" };
const _hoisted_6$6 = { class: "series-length" };

function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_vertical_chevron = __unplugin_components_8$1;
  const _component_gallery_books_in_series_filters = __unplugin_components_1$5;
  const _component_gallery_books_in_series_link = __unplugin_components_2$3;
  const _component_gallery_books_in_series_books = __unplugin_components_3$3;
  const _directive_tippy = resolveDirective("tippy");

  return (_ctx.inSeries)
    ? (openBlock(), createElementBlock("div", _hoisted_1$s, [
        createBaseVNode("div", {
          class: "label hidden-section-label my-books-in-series-label",
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.booksInSeriesLabelClick && $options.booksInSeriesLabelClick(...args)))
        }, [
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "heading" }, "My books in the series", -1)),
          createBaseVNode("span", _hoisted_2$b, toDisplayString(_ctx.series.count), 1),
          createVNode(_component_gallery_vertical_chevron, {
            up: _ctx.$store.state.sticky.booksInSeriesToggle
          }, null, 8, ["up"])
        ]),
        (_ctx.$store.state.sticky.booksInSeriesToggle)
          ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
              createVNode(_component_gallery_books_in_series_filters, { series: _ctx.series }, null, 8, ["series"]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.series.collection, (series, seriesIndex) => {
                return (openBlock(), createElementBlock("div", {
                  class: normalizeClass(["series-section", { first: seriesIndex === 0 }]),
                  key: series.asin
                }, [
                  withDirectives((openBlock(), createElementBlock("div", _hoisted_4$9, [
                    createBaseVNode("div", _hoisted_5$7, [
                      createVNode(_component_gallery_books_in_series_link, {
                        series: series,
                        book: {},
                        index: -1,
                        seriesName: series.name
                      }, null, 8, ["series", "seriesName"])
                    ]),
                    createBaseVNode("div", _hoisted_6$6, toDisplayString($options.inLibraryLength( series )) + " / " + toDisplayString(series.length), 1)
                  ])), [
                    [_directive_tippy, { placement: 'right', flipBehavior: ['right', 'top', 'bottom'], maxWidth: 300, allowHTML: true }]
                  ]),
                  createVNode(_component_gallery_books_in_series_books, {
                    series: series,
                    book: $props.book
                  }, null, 8, ["series", "book"])
                ], 2))
              }), 128))
            ]))
          : createCommentVNode("", true)
      ]))
    : createCommentVNode("", true)
}
const __unplugin_components_11 = /*#__PURE__*/_export_sfc$1(_sfc_main$i, [['render',_sfc_render$i]]);

/* unplugin-vue-components disabled */

const _sfc_main$h = {
  name: "collectionsDrawer",
  props: ["book"],
  data: function() {
    return {
      collections: null,
      store: this.$store.state,
    };
  },
  
  created: function() {
   
   this.compileCollections();
    
  },
  
  mounted: function() {
    
    if ( this.$store.state.sticky.collectionsDrawerToggle ) {
      this.$nextTick(() => {
        this.$compEmitter.emit("resizeSummary");
      });
    }
    
  },
  
  methods: {
    
    compileCollections: function() {
      
      const collectionIds = this.book.collectionIds;
      const collections = this.store.library.collections;
      if ( !collectionIds || !collections ) return;
      
      this.collections = _.filter(collections, function( collection ) {
        return _.includes(collectionIds, collection.id);
      });
      
    },
    
    labelClick: function() {
      this.$store.commit('stickyProp', { key: 'collectionsDrawerToggle', value: !this.$store.state.sticky.collectionsDrawerToggle });
      this.$nextTick(() => {
        this.$compEmitter.emit("resizeSummary");
      });
    },
    
  }
  
};

const _hoisted_1$r = { key: 0 };
const _hoisted_2$a = { class: "count" };
const _hoisted_3$9 = {
  key: 0,
  class: "hidden-section"
};
const _hoisted_4$8 = { class: "text" };
const _hoisted_5$6 = { class: "total-books" };

function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_vertical_chevron = __unplugin_components_8$1;
  const _component_router_link = resolveComponent("router-link");

  return (_ctx.collections)
    ? (openBlock(), createElementBlock("div", _hoisted_1$r, [
        createBaseVNode("div", {
          class: "label hidden-section-label",
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.labelClick && $options.labelClick(...args)))
        }, [
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "heading" }, "This book in collections", -1)),
          createBaseVNode("span", _hoisted_2$a, toDisplayString(_ctx.collections.length), 1),
          createVNode(_component_gallery_vertical_chevron, {
            up: _ctx.$store.state.sticky.collectionsDrawerToggle
          }, null, 8, ["up"])
        ]),
        (_ctx.$store.state.sticky.collectionsDrawerToggle)
          ? (openBlock(), createElementBlock("div", _hoisted_3$9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collections, (collection) => {
                return (openBlock(), createBlock(_component_router_link, {
                  class: "collection-link",
                  key: collection.id,
                  to: { 
        name: 'collection', 
        params: { collection: collection.id },
        query: { book: $props.book.asin }
      }
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", _hoisted_4$8, toDisplayString(collection.title), 1),
                    createBaseVNode("span", _hoisted_5$6, toDisplayString(collection.books.length), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]))
              }), 128))
            ]))
          : createCommentVNode("", true)
      ]))
    : createCommentVNode("", true)
}
const __unplugin_components_10 = /*#__PURE__*/_export_sfc$1(_sfc_main$h, [['render',_sfc_render$h],['__scopeId',"data-v-759d3f3d"]]);

/* unplugin-vue-components disabled */

const _sfc_main$g = {
  name: "aleBookBasicInfo",
  props: ["book", "goodreads"],
  data: function() {
    return {
      ratingTippyOpts: { 
        placement: 'top', 
        flipBehavior: ['top', 'right', 'left', 'bottom'], 
        allowHTML: true,
      },
      ratingLegend: `
        <style>
        .ratings-tippy {
          margin: 0; 
          padding: 0px 0px 0px 15px;
        }
        .ratings-tippy li {
          padding-bottom: 5px;
        }
        </style>
        <ol class="ratings-tippy">
          <li>Not for me</li>
          <li>It’s okay</li>
          <li>Pretty good</li>
          <li>It’s great</li>
          <li>I love it</li>
        </ol>
      `,
    };
  },
  
  methods: {
    myRatingLabel: function( rating ) {
      
      switch ( parseFloat(rating) ) {
        case 1:
          return 'Not for me';
        case 2:
          return 'It’s okay';
        case 3:
          return 'Pretty good';
        case 4:
          return 'It’s great';
        case 5:
          return 'I love it';
      }
      
    },
  },
  
};

const _hoisted_1$q = { class: "basic-info" };
const _hoisted_2$9 = { key: 4 };
const _hoisted_3$8 = {
  key: 5,
  class: "language"
};
const _hoisted_4$7 = {
  key: 6,
  class: "format"
};
const _hoisted_5$5 = {
  key: 7,
  class: "format",
  content: "YYYY-MM-DD"
};
const _hoisted_6$5 = {
  key: 8,
  class: "rating"
};
const _hoisted_7$4 = ["content"];
const _hoisted_8$4 = {
  key: 9,
  class: "own-rating"
};
const _hoisted_9$3 = ["content"];

function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_array_to_html = __unplugin_components_0$9;
  const _component_gallery_star_ratings = __unplugin_components_0$a;
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("div", _hoisted_1$q, [
    ($props.book.authors)
      ? (openBlock(), createBlock(_component_gallery_array_to_html, {
          key: 0,
          label: "Author",
          array: $props.book.authors
        }, null, 8, ["array"]))
      : createCommentVNode("", true),
    ($props.book.narrators)
      ? (openBlock(), createBlock(_component_gallery_array_to_html, {
          key: 1,
          label: "Narrator",
          array: $props.book.narrators
        }, null, 8, ["array"]))
      : createCommentVNode("", true),
    ($props.book.series)
      ? (openBlock(), createBlock(_component_gallery_array_to_html, {
          key: 2,
          label: "Series",
          array: $props.book.series
        }, null, 8, ["array"]))
      : createCommentVNode("", true),
    ($props.book.publishers)
      ? (openBlock(), createBlock(_component_gallery_array_to_html, {
          key: 3,
          label: "Publisher",
          array: $props.book.publishers
        }, null, 8, ["array"]))
      : createCommentVNode("", true),
    ($props.book.length)
      ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
          _cache[0] || (_cache[0] = createBaseVNode("strong", { class: "strong-label" }, "Length:", -1)),
          createTextVNode(toDisplayString($props.book.length), 1)
        ]))
      : createCommentVNode("", true),
    ($props.book.language)
      ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
          _cache[1] || (_cache[1] = createBaseVNode("strong", { class: "strong-label" }, "Language:", -1)),
          createBaseVNode("span", null, toDisplayString($props.book.language), 1)
        ]))
      : createCommentVNode("", true),
    ($props.book.format)
      ? (openBlock(), createElementBlock("div", _hoisted_4$7, [
          _cache[2] || (_cache[2] = createBaseVNode("strong", { class: "strong-label" }, "Format:", -1)),
          createBaseVNode("span", null, toDisplayString($props.book.format), 1)
        ]))
      : createCommentVNode("", true),
    ($props.book.releaseDate)
      ? withDirectives((openBlock(), createElementBlock("div", _hoisted_5$5, [
          _cache[3] || (_cache[3] = createBaseVNode("strong", { class: "strong-label" }, "Release date:", -1)),
          createBaseVNode("span", null, toDisplayString($props.book.releaseDate), 1)
        ])), [
          [_directive_tippy]
        ])
      : createCommentVNode("", true),
    ($props.book.rating)
      ? (openBlock(), createElementBlock("div", _hoisted_6$5, [
          withDirectives((openBlock(), createElementBlock("strong", {
            class: "strong-label",
            content: _ctx.ratingLegend
          }, [...(_cache[4] || (_cache[4] = [
            createTextVNode("Rating:", -1)
          ]))], 8, _hoisted_7$4)), [
            [_directive_tippy, _ctx.ratingTippyOpts]
          ]),
          createVNode(_component_gallery_star_ratings, {
            size: 12,
            rating: $props.book.rating,
            number: "true",
            ratings: $props.book.ratings
          }, null, 8, ["rating", "ratings"])
        ]))
      : createCommentVNode("", true),
    ($props.book.myRating)
      ? (openBlock(), createElementBlock("div", _hoisted_8$4, [
          withDirectives((openBlock(), createElementBlock("strong", {
            class: "strong-label",
            content: _ctx.ratingLegend
          }, [...(_cache[5] || (_cache[5] = [
            createTextVNode("My rating: ", -1)
          ]))], 8, _hoisted_9$3)), [
            [_directive_tippy, _ctx.ratingTippyOpts]
          ]),
          withDirectives(createVNode(_component_gallery_star_ratings, {
            size: 12,
            content: $options.myRatingLabel( $props.book.myRating ),
            rating: $props.book.myRating,
            number: "true"
          }, null, 8, ["content", "rating"]), [
            [_directive_tippy, { placement: 'right', flipBehavior: ['right', 'top', 'bottom']  }]
          ])
        ]))
      : createCommentVNode("", true)
  ]))
}
const __unplugin_components_9$1 = /*#__PURE__*/_export_sfc$1(_sfc_main$g, [['render',_sfc_render$g],['__scopeId',"data-v-36e31c42"]]);

const _hoisted_1$p = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};

function render$e(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$p, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m21.32 9.55l-1.89-.63l.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89l-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89l-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78l-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63l-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89l.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89l1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78l1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95M20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14l-1.1 1.1l-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57l-1.1-1.1l.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11l1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57l1.1 1.1l-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4ZM12 8a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
    }, null, -1)
  ]))]))
}

const __unplugin_components_7 = markRaw({ name: 'uil-cog', render: render$e });
/* vite-plugin-components disabled */

const _hoisted_1$o = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};

function render$d(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$o, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M8 7a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10zm0-2h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m0 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
    }, null, -1)
  ]))]))
}

const __unplugin_components_0$8 = markRaw({ name: 'ri-toggle-line', render: render$d });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$f = {
  name: "sidebarFlipper",
  data: function() {
    return {
      detailSettings: this.$store.state.sticky.bookDetailSettings,
      // settings: [
      //   { 
      //     label: 'sidebar',
      //   },
      //   {
      //     label: 'summary',
      //   }
      // ],
    };
  },
  
  methods: {
    flip() {
      this.$store.commit('prop', { 
        key: 'sticky.bookDetailSettings.reverseDirection', 
        value: !this.detailSettings.reverseDirection 
      });
    },
  }
};

function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ri_toggle_line = __unplugin_components_0$8;

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["action-reverse-direction", { flip: _ctx.detailSettings.reverseDirection }]),
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.flip && $options.flip(...args)))
  }, [
    createVNode(_component_ri_toggle_line)
  ], 2))
}
const __unplugin_components_6$2 = /*#__PURE__*/_export_sfc$1(_sfc_main$f, [['render',_sfc_render$f],['__scopeId',"data-v-7ff18f57"]]);

const _hoisted_1$n = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};

function render$c(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$n, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m24 144a8 8 0 0 1 0 16h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32 32 0 1 1 55.74 29.93L120 168Z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_1$4 = markRaw({ name: 'ph-number-circle-two-fill', render: render$c });
/* vite-plugin-components disabled */

const _hoisted_1$m = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};

function render$b(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$m, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m12 152a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80Z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_0$7 = markRaw({ name: 'ph-number-circle-one-fill', render: render$b });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$e = {
  name: "sidebarFlipper",
  data: function() {
    return {
      detailSettings: this.$store.state.sticky.bookDetailSettings,
    };
  },
  
  methods: {
    flip() {
      this.$store.commit('prop', { 
        key: 'sticky.bookDetailSettings.hideFirstSection', 
        value: !this.detailSettings.hideFirstSection 
      });
    },
  }
};

function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ph_number_circle_one_fill = __unplugin_components_0$7;
  const _component_ph_number_circle_two_fill = __unplugin_components_1$4;

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["details-first-hider", { flip: _ctx.detailSettings.hideFirstSection }]),
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.flip && $options.flip(...args)))
  }, [
    (_ctx.detailSettings.hideFirstSection)
      ? (openBlock(), createBlock(_component_ph_number_circle_one_fill, { key: 0 }))
      : (openBlock(), createBlock(_component_ph_number_circle_two_fill, { key: 1 }))
  ], 2))
}
const __unplugin_components_5$2 = /*#__PURE__*/_export_sfc$1(_sfc_main$e, [['render',_sfc_render$e],['__scopeId',"data-v-eb8637be"]]);

const _hoisted_1$l = {
  viewBox: "0 0 640 512",
  width: "1.5em",
  height: "1.2em"
};

function render$a(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$l, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M640 199.9v54l-320 200L0 254v-54l320 200zm-194.5 72l47.1-29.4c-37.2-55.8-100.7-92.6-172.7-92.6s-135.5 36.7-172.6 92.4h.3c2.5-2.3 5.1-4.5 7.7-6.7c89.7-74.4 219.4-58.1 290.2 36.3m-220.1 18.8c16.9-11.9 36.5-18.7 57.4-18.7c34.4 0 65.2 18.4 86.4 47.6l45.4-28.4c-20.9-29.9-55.6-49.5-94.8-49.5c-38.9 0-73.4 19.4-94.4 49M103.6 161.1c131.8-104.3 318.2-76.4 417.5 62.1l.7 1l48.8-30.4C517.1 112.1 424.8 58.1 319.9 58.1c-103.5 0-196.6 53.5-250.5 135.6c9.9-10.5 22.7-23.5 34.2-32.6m467 32.7"
    }, null, -1)
  ]))]))
}

const __unplugin_components_4$2 = markRaw({ name: 'fa6-brands-audible', render: render$a });
/* vite-plugin-components disabled */

const _hoisted_1$k = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$9(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$k, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M84 480H28a12 12 0 0 1-12-12V92a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v376a12 12 0 0 1-12 12m156-272v-52a12 12 0 0 0-12-12H124a12 12 0 0 0-12 12v52ZM112 416v52a12 12 0 0 0 12 12h104a12 12 0 0 0 12-12v-52Zm0-176h128v144H112zm228 240h-72a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12v424a12 12 0 0 1-12 12m29-379.3l30 367.83a12 12 0 0 0 13.45 10.92l72.16-9a12 12 0 0 0 10.47-12.9L465 91.21a12 12 0 0 0-13.2-10.94l-72.13 7.51A12 12 0 0 0 369 100.7"
    }, null, -1)
  ]))]))
}

const __unplugin_components_3$2 = markRaw({ name: 'ion-library-sharp', render: render$9 });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$d = {
  name: "openWebPlayer",
  props: ["book", "icon", "topRight", "size", 'tooltip', 'noBG'],
  data: function() {
    return {
      url: null
    };
  },
  created: function() {
    if (this.book) {
      this.url = 'https://www.audible.com/webplayer?asin=' + this.book.asin;
    }
  }
};

const _hoisted_1$j = ["href"];
const _hoisted_2$8 = ["content"];
const _hoisted_3$7 = { key: 1 };

function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_tippy = resolveDirective("tippy");

  return (_ctx.url)
    ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: _ctx.url,
        target: "_blank",
        rel: "noopener noreferrer",
        class: normalizeClass({ 'top-right': $props.topRight, 'no-bg': $props.noBG })
      }, [
        ($props.icon)
          ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              class: "gr-icon audible-cloudplayer-link",
              style: normalizeStyle({ width: ($props.size || 30) + 'px', height: ($props.size || 30) + 'px' }),
              content: $props.tooltip ? 'Open web player' : ''
            }, [...(_cache[0] || (_cache[0] = [
              createBaseVNode("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTEuNSA5My43IiB3aWR0aD0iMTUxLjUiIGhlaWdodD0iOTMuNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggODAuN2w3NS43LTQ3LjJ2MTIuOEw3NS44IDkzLjcgMCA0Ni4zVjMzLjVsNzUuOCA0Ny4yeiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggMjEuNWE0OC4xNyA0OC4xNyAwIDAgMC00MC43IDIxLjkgMTIuOTQgMTIuOTQgMCAwIDEgMS44LTEuNmMyMS4zLTE3LjcgNTItMTMuNyA2OC43IDguNmwxMS4xLTcuMWE0OS44MiA0OS44MiAwIDAgMC00MC45LTIxLjgiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NS44IDQzLjRhMjcuNzIgMjcuNzIgMCAwIDAtMjIuNCAxMS41IDIyLjcgMjIuNyAwIDAgMSAxMy41LTQuNGM4LjIgMCAxNS41IDQuMiAyMC40IDExLjNsMTAuNi02LjZhMjUuNzkgMjUuNzkgMCAwIDAtMjIuMS0xMS44TTI0LjYgMjQuMkM1NS44LS40IDk5LjkgNi4zIDEyMy40IDM5bC4yLjIgMTEuNS03LjFhNzAuODIgNzAuODIgMCAwIDAtMTE4LjYgMCA2MC42MyA2MC42MyAwIDAgMSA4LjEtNy45Ii8+PC9nPjwvZz48L3N2Zz4=",
                alt: ""
              }, null, -1)
            ]))], 12, _hoisted_2$8)), [
              [_directive_tippy]
            ])
          : (openBlock(), createElementBlock("span", _hoisted_3$7, "Search in Goodreads"))
      ], 10, _hoisted_1$j))
    : createCommentVNode("", true)
}
const __unplugin_components_2$1 = /*#__PURE__*/_export_sfc$1(_sfc_main$d, [['render',_sfc_render$d],['__scopeId',"data-v-7e5681f8"]]);

const _hoisted_1$i = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$8(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$i, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m188.3-108.9c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_0$6 = markRaw({ name: 'fa6-solid-circle-play', render: render$8 });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$c = {
  name: "sampleButton",
  props: ["book", "index", "topRight", "size"],
  methods: {
    playSample: function(book, index) {
      
      if ( !book.sample ) {
        window.open(`${this.$store.state.urlOrigin}/webplayer?asin=${book.asin}&isSample=true`, '_blank');
      }
      else {
        
        this.$store.commit('prop', { 
          key: 'audioPlayer.audio', 
          value: {
            from: "book",
            route: this.$route,
            book: book,
            index: index
          } 
        });
        
      }
      
    }
  },
};

function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa6_solid_circle_play = __unplugin_components_0$6;
  const _directive_tippy = resolveDirective("tippy");

  return withDirectives((openBlock(), createBlock(_component_fa6_solid_circle_play, {
    class: normalizeClass(["pointer", { 'top-right': $props.topRight }]),
    onClick: _cache[0] || (_cache[0] = $event => ($options.playSample($props.book, _ctx.rowIndex))),
    style: normalizeStyle({ width: ($props.size || 30) + 'px', height: 'auto' }),
    content: "Play sample audio"
  }, null, 8, ["class", "style"])), [
    [_directive_tippy]
  ])
}
const __unplugin_components_1$3 = /*#__PURE__*/_export_sfc$1(_sfc_main$c, [['render',_sfc_render$c],['__scopeId',"data-v-84a79cf9"]]);

/* unplugin-vue-components disabled */

const _sfc_main$b = {
  name: "book-info-toolbar",
  props: ["book", "tempAsin"],
  data: function() {
    return {
      size: 20,
    };
  },
};

const _hoisted_1$h = { class: "book-info-toolbar" };

function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_sample_button = __unplugin_components_1$3;
  const _component_gallery_goodreads_link = __unplugin_components_1$7;
  const _component_gallery_open_in_app = __unplugin_components_2$2;
  const _component_gallery_open_web_player = __unplugin_components_2$1;

  return (openBlock(), createElementBlock("div", _hoisted_1$h, [
    createVNode(_component_gallery_sample_button, {
      size: _ctx.size,
      book: $props.book
    }, null, 8, ["size", "book"]),
    createVNode(_component_gallery_goodreads_link, {
      size: _ctx.size,
      book: $props.book,
      icon: true
    }, null, 8, ["size", "book"]),
    (!$props.tempAsin)
      ? (openBlock(), createBlock(_component_gallery_open_in_app, {
          key: 0,
          size: _ctx.size,
          book: $props.book
        }, null, 8, ["size", "book"]))
      : createCommentVNode("", true),
    (!$props.tempAsin && !$props.book.notInLibrary)
      ? (openBlock(), createBlock(_component_gallery_open_web_player, {
          key: 1,
          size: _ctx.size,
          book: $props.book,
          icon: true
        }, null, 8, ["size", "book"]))
      : createCommentVNode("", true)
  ]))
}
const __unplugin_components_2 = /*#__PURE__*/_export_sfc$1(_sfc_main$b, [['render',_sfc_render$b]]);

const progressbarWidth = {
  mixins: [timeStringToSeconds],
  methods: {
    progressbarWidth: function(book) {
      if (book.progress) {
        if (book.progress.toLowerCase().trim() === "finished") {
          return {
            width: "100%"
          };
        } else if (book.length) {
          var progress = this.timeStringToSeconds(book.progress);
          const length = this.timeStringToSeconds(book.length);

          progress = length - progress;

          return {
            width: (progress / length) * 100 + "%"
          };
        } else {
          return {
            width: 0
          };
        }
      } else {
        return {
          width: 0
        };
      }
    }
  }
};

/* unplugin-vue-components disabled */

const _sfc_main$a = {
  name: "bookDetails",
  props: ['asin'],
  mixins: [
    // sortBookNumbers,
    timeStringToSeconds,
    secondsToTimeString,
    progressbarWidth,
    makeCoverUrl,
    makeFullUrl
  ],
  data: function() {
    return {
      store: this.$store.state,
      sticky: this.$store.state.sticky,
      book: null,
      index: null,
      maxWidth: "unset",
      loading: true,
      clickedBook: null,
      peopleAlsoBoughtJSON: null,
      bookSummaryJSON: null,
      scrpt: null,
      imageLoaded: false,
      clientX: 0,
      clientY: 0,
      firstClientX: 0,
      firstClientY: 0,
      animate_detailLinksToAudible: true,
    };
  },
  
  watch: {
    // 'sticky.detailLinksToAudible'( value ) {
    //   if ( !value ) {
        
    //     this.animate_detailLinksToAudible = true;
    //     setTimeout(() => {
    //       this.animate_detailLinksToAudible = false;
    //     }, 3000);
        
    //   }
    // },
  },

  created: function() {
    
    this.index = _.findIndex( this.$store.state.chunkCollection, { asin: this.asin });
    this.book = this.$store.state.chunkCollection[this.index];
    
    this.loadJSON();
    
  },
  
  mounted: function() {
    this.$nextTick(function() {
      
      this.clickedBook = document.querySelector('.ale-book[data-asin="'+ this.book.asin +'"]') || document.querySelector('.ale-row[data-asin="'+ this.book.asin +'"]');
      this.resetScroll();
      
      this.maxWidth = this.repositionBookDetails() + "px";
      this.$store.commit('prop', { key: 'timeStamp', value: new Date().getTime() });
      this.$compEmitter.on("afterWindowResize", this.onWindowResize);
      this.loading = false;
      
      this.scrollToCarousel();
      this.scrollToMyBooksInTheSeries();
      
    });
    
    // window.addEventListener('touchstart', this.touchStart);
    // window.addEventListener('touchmove', this.preventTouch, {passive: false});
      
  },

  beforeUnmount: function() {
    
    if ( this.scrpt ) {
      this.scrpt.remove();
      this.scrpt = null;
    }
    
    this.$compEmitter.off("afterWindowResize", this.onWindowResize);
    this.peopleAlsoBoughtJSON = null;
    this.bookSummaryJSON = null;
    
    // this.closeBookDetails();
    
    this.$store.commit('prop', { key: 'bookDetailSettingsOpen', value: false });
    
    const bookDetailsEl = document.querySelector('#ale-bookdetails');
    if ( bookDetailsEl ) bookDetailsEl.remove();
    
    // window.removeEventListener('touchstart', this.touchStart);
    // window.removeEventListener('touchmove', this.preventTouch, {passive: false});
      
  },

  computed: {
    peopleAlsoBought: function () {
      return this.book.peopleAlsoBought || this.peopleAlsoBoughtJSON;
    },
    getMaxWidth: function() {
      if ( this.sticky.viewMode === 'spreadsheet' ) {
        return this.maxWidth;
      }
      else {
        return window.innerWidth > 800 ? this.maxWidth : "800px";
      }
    },
    mobileWidth() {
       return this.store.windowWidth <= 688;
    },
    tempAsin() {
      return !!this.book.asin.match(/temp-asin/i);
    },
  },
  methods: {
    
    collapseBtnClicked: function( key ) {
      this.$store.commit('stickyProp', { key: key, value: !this.sticky[ key ] });
      this.$nextTick(() => {
        this.$compEmitter.emit("resizeSummary");
      });
    },
    
    loadJSON: function( afterError )  {
      
      if ( this.store.standalone ) {
        let vue = this;
        
        let scrpt = document.createElement("script");
        this.scrpt = scrpt;
        scrpt.src = "data/split-book-data/"+ vue.book.asin +"."+ this.store.library.extras.cacheID +".js";
        scrpt.type="text/javascript";
        scrpt.onload = function() {
          
          vue.bookSummaryJSON = window.bookSummaryJSON;
          window.bookSummaryJSON = true;
          
          vue.peopleAlsoBoughtJSON = window.peopleAlsoBoughtJSON;
          window.peopleAlsoBoughtJSON = true;
          scrpt = null;
          
        };
        // Tries again if there's an error loading the files, but only once...
        scrpt.onerror = function() {
          scrpt = null;
          setTimeout(function() {
            if ( !afterError ) vue.loadJSON( 'afterError'); // Try twice...
          }, 1000);
        };
        document.head.appendChild(scrpt);
        
      }

    },
    
    onWindowResize: function( msg ) {
      if ( msg.widthChanged ) { 
        this.maxWidth = this.repositionBookDetails() + "px";
        this.resetScroll(); 
      }
    },

    changeUrl: function() {
      if (_.get(this.$route, "query.book") !== this.book.asin) {
        this.$router.replace({ query: { book: this.book.asin } });
      }
    },

    resetScroll: function() {
      this.$nextTick(function() {
        this.$nextTick(function() {
          
          if ( this.sticky.viewMode === 'grid' ) {
            scroll({ top: this.clickedBook.offsetTop - this.store.topNavOffset - 25, behavior: 'auto' });
          }
          else {
            document.querySelector('.list-view-inner-wrap').scroll({ top: this.clickedBook.offsetTop - 45 });
          }
          
        });
      });
    },

    scrollToCarousel: function() {
      
      if ( !this.$route.query.carousel ) return;
      this.$updateQueries({ carousel: null });
      
      this.$nextTick(function() {
      
        const scrollPosition = parseFloat(this.$route.query.y);
        if ( this.sticky.viewMode === 'grid' ) {
          scroll({ top: scrollPosition });
        }
        else {
          const listInnerWrap = document.querySelector('.list-view-inner-wrap');
          listInnerWrap.scroll({ top: scrollPosition });
        }
        
      });
    },
    
    scrollToMyBooksInTheSeries: function() {
      
      if ( !this.$route.query.scrollToSeries ) return;
      this.$updateQueries({ scrollToSeries: null });
      this.$store.commit('stickyProp', { key: 'booksInSeriesToggle', value: true });
      
      this.$nextTick(function() {
        
        const targetEl = this.$el.querySelector('.my-books-in-series-label');
        if ( targetEl ) {
          
          let scrollPosition = targetEl.getBoundingClientRect().top + window.scrollY;
          scrollPosition = scrollPosition - $store.state.topNavOffset - 25;
          
          if ( this.sticky.viewMode === 'grid' ) {
            scroll({ top: scrollPosition, behavior: 'smooth' });
          }
          else {
            const listInnerWrap = document.querySelector('.list-view-inner-wrap');
            listInnerWrap.scroll({ top: scrollPosition, behavior: 'smooth' });
          }
          
        }
        
      });
    },

    repositionBookDetails: function() {
      
      const gridView = document.querySelector(".ale-books");
      const domBooks = gridView.querySelector(".ale-book") ? gridView.querySelectorAll(".ale-book") : gridView.querySelector('table tbody').querySelectorAll(".ale-row");

      const target = {};
      
      target.el = domBooks[this.index];
      target.index = this.index;
      target.width = target.el.getBoundingClientRect().width;
      target.siblings = domBooks; // + target.el

      const wrapper = {};
      wrapper.el = gridView;
      wrapper.width = wrapper.el.getBoundingClientRect().width;
      const info = {};
      info.cols = Math.floor(wrapper.width / target.width) || 1;
      
      if (info.cols < 2) {
        info.rowEndEl = target.el;
      } else {
        info.currentRow = Math.floor(target.index / info.cols) + 1;
        info.rowEnd = info.currentRow * info.cols;
        // Rolls back if the last element is not at the end of the row
        info.getRowEndEl = function(index) {
          let el = target.siblings[index];
          if (!el) {
            el = info.getRowEndEl(--index);
          }
          return el;
        };
        info.rowEndEl = info.getRowEndEl(info.rowEnd - 1);
      }
      
      let lastRowEndEl = document.querySelector('.target-row-end');
      if ( lastRowEndEl ) lastRowEndEl.classList.remove('target-row-end');
      info.rowEndEl.classList.add("target-row-end");
      info.rowEndEl.parentNode.insertBefore(
        this.$refs.bookDetails,
        info.rowEndEl.nextSibling
      );

      if ( this.sticky.viewMode !== 'spreadsheet' ) this.repositionBookDetailsArrow(target.el);
      
      return (this.sticky.viewMode === 'spreadsheet') ? wrapper.width-60 : (target.width * info.cols);
    },

    repositionBookDetailsArrow: function(clickedEl) {
      const leftOffset =
        clickedEl.getBoundingClientRect().left + window.scrollX;
      const targetCenter = leftOffset + clickedEl.offsetWidth / 2;

      this.$refs.arrow.style.left = targetCenter + "px";
    },
    
    openAdjacentBookDetails: _.throttle(function( e ) { 
      
      const vue = this;
      // GRID VIEW
      if ( this.sticky.viewMode === 'grid' ) {
        switch (e.srcKey) {
          case "left":
          case "tabShift":
            vue.keyboardMove('prev');
            break;
          case "right":
          case "tab":
            vue.keyboardMove('next');
            break;
          case "up":
          case "down":
            vue.keyboardMove_inGrid_vertically( e );
            break;
        }
      }
      // SPREADSHEET VIEW
      else {
        switch (e.srcKey) {
          case "left":
          case "up":
          case "tabShift":
            vue.keyboardMove('prev');
            break;
          case "right":
          case "down":
          case "tab":
            vue.keyboardMove('next');
            break;
        }
      }
      
    }, 70, { leading: false, trailing: true }),
    
    keyboardMove( direction ) {
      
      const prev = direction === 'prev';
      const nextIndex = prev ? this.index-1 : this.index+1;
      const nextBook = this.store.chunkCollection[ nextIndex ];
      const condition = prev ? (nextIndex > -1) : (nextIndex < this.store.chunkCollection.length);
      if ( condition ) {
        if ( !prev && (nextIndex > this.store.chunkCollection.length-2) ) {
          this.$store.commit('chunkCollectionAdd');
          this.$nextTick(function() {
            this.$compEmitter.emit("book-clicked", nextBook.asin);
          });
        }
        else {
          this.$compEmitter.emit("book-clicked", nextBook.asin);
        }
      }
      
    },
    
    keyboardMove_inGrid_vertically( e ) {
      
      const vue = this;
      const wrapper = {};
      wrapper.el = document.querySelector(".ale-books");
      wrapper.width = wrapper.el.offsetWidth;
      
      const target = {};
      target.el = this.clickedBook;
      target.index = this.index;
      target.width = target.el.offsetWidth;
      
      const cols = Math.floor(wrapper.width / target.width);
      // const currentRow = Math.floor(this.index / cols) + 1;
      // const currentRowLast = (currentRow*cols)-1;
      // const previousRowLast = ((currentRow-1)*cols)-1;
      
      const getVerticalIndex = function() {
        
        const direction = e.srcKey;
        let index = -1;
        if ( direction === 'up' ) {
          index = vue.index - cols;
          if ( index < 0 ) index = 0;
        }
        else {
          index = vue.index + cols;
          const booksLength = vue.store.chunkCollection.length-1;
          if ( index > booksLength ) index = booksLength;
        }
        return index;
        
      };
      
      // this.closeBookDetails();
      
      const nextIndex = getVerticalIndex();
      const nextBook = vue.store.chunkCollection[ nextIndex ];
      const lastIndex = this.store.chunkCollection.length-1;
      const condition = e.srcKey === 'up' ? 
                        !(vue.index === 0 && nextIndex == 0) : 
                        !(vue.index === lastIndex && nextIndex === lastIndex);
      
      if ( condition ) {
        if ( e.srcKey === 'down' && (nextIndex > vue.store.chunkCollection.length-2) ) {
          this.$store.commit('chunkCollectionAdd');
          this.$nextTick(function() {
            this.$compEmitter.emit("book-clicked", nextBook.asin);
          });
        }
        else {
          this.$compEmitter.emit("book-clicked", nextBook.asin);
        }
      }
      
    },

    closeBookDetails: function() {
      
      if ( _.get(this.$route, "query.book") ) this.$compEmitter.emit('book-clicked', null);
      
    },

    // progressToolTipBoundaryEl: function() {
    //   return $("#ale-bookdetails .information .cover-wrap")[0];
    // },

    progressTooltip: function(book) {
      if (book.progress.toLowerCase().trim() === "finished") {
        const length = this.timeStringToSeconds(book.length);
        return "Finished: ( " + this.secondsToTimeString(length) + " )";
      } 
      else {
        const progress = this.timeStringToSeconds(book.progress);
        const length = this.timeStringToSeconds(book.length);

        const difference = length - progress;
        return ( "Progress: " + this.secondsToTimeString(difference) + " / " + this.secondsToTimeString(length) );
      }
    },

    progressInfo: function(book) {
      if (book.progress && book.length) {
        if (book.progress.toLowerCase().trim() === "finished") {
          const length = this.timeStringToSeconds(book.length);
          return (
            '<div class="stretch-center" style="flex: 1;"><strong>Finished!</strong> ( ' +
            this.secondsToTimeString(length, true) +
            " )</div>"
          );
        } else {
          const progress = this.timeStringToSeconds(book.progress);
          const length = this.timeStringToSeconds(book.length);
          const difference = length - progress;
          return (
            "<strong>Progress: </strong>" +
            "<div>" +
            this.secondsToTimeString(difference, true) +
            " / " +
            this.secondsToTimeString(length, true) +
            "</div>"
          );
        }
      } else {
        return '<div class="stretch-center" style="flex: 1;"><strong>Length:</strong> ' + (book.length || 'unkown') + "</div>";
      }
    },
    
    swipeHandler( direction ) {
      
      if ( !this.mobileWidth ) return;
      
      this.$store.commit('prop', { 
        key: 'sticky.bookDetailSettings.reverseDirection', 
        value: !this.$store.state.sticky.bookDetailSettings.reverseDirection 
      });
      
    },
    
    touchStart(e) {
      
      if ( !this.mobileWidth ) return;
      
      this.firstClientX = e.touches[0].clientX;
      this.firstClientY = e.touches[0].clientY;
      
    },

    preventTouch(e) {
    
      if ( !this.mobileWidth ) return;
    
      const minValue = 5; // threshold

      this.clientX = e.touches[0].clientX - this.firstClientX;
      this.clientY = e.touches[0].clientY - this.firstClientY;

      // Vertical scrolling does not work when you start swiping horizontally.
      if( Math.abs(this.clientX) > minValue ){ 
        e.preventDefault();
        e.returnValue = false;
        return false;
      }
    },
    
    detailLinksToAudible() {
      
      this.$store.commit('prop', { key: 'sticky.detailLinksToAudible', value: !this.sticky.detailLinksToAudible });
      
      const el = _.get( this.$refs, 'detailLinksToAudible' );
      el._tippy.show();
      
      setTimeout(() => {
        el._tippy.hide();
      }, 2000);
      
    },
  }
};

const _hoisted_1$g = {
  key: 0,
  class: "arrow",
  ref: "arrow"
};
const _hoisted_2$7 = { class: "details-toolbar" };
const _hoisted_3$6 = ["content"];
const _hoisted_4$6 = {
  key: 0,
  class: "information",
  ref: "information"
};
const _hoisted_5$4 = ["content"];
const _hoisted_6$4 = ["href"];
const _hoisted_7$3 = { class: "progressbar" };
const _hoisted_8$3 = ["src"];
const _hoisted_9$2 = ["innerHTML"];
const _hoisted_10$2 = { class: "basic-details" };
const _hoisted_11$2 = ["content"];
const _hoisted_12$1 = {
  key: 0,
  class: "carousel-wrap"
};

function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa6_solid_ban = __unplugin_components_8;
  const _component_gallery_book_details_title = __unplugin_components_1$8;
  const _component_gallery_book_info_toolbar = __unplugin_components_2;
  const _component_ion_library_sharp = __unplugin_components_3$2;
  const _component_fa6_brands_audible = __unplugin_components_4$2;
  const _component_gallery_details_first_hider = __unplugin_components_5$2;
  const _component_gallery_sidebar_flipper = __unplugin_components_6$2;
  const _component_uil_cog = __unplugin_components_7;
  const _component_gallery_vertical_chevron = __unplugin_components_8$1;
  const _component_gallery_book_basic_info = __unplugin_components_9$1;
  const _component_gallery_collections_drawer = __unplugin_components_10;
  const _component_gallery_books_in_series = __unplugin_components_11;
  const _component_gallery_book_summary = __unplugin_components_12;
  const _component_gallery_carousel = __unplugin_components_13;
  const _directive_tippy = resolveDirective("tippy");
  const _directive_shortkey = resolveDirective("shortkey");

  return (_ctx.book)
    ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        id: "ale-bookdetails",
        ref: "bookDetails",
        onShortkey: _cache[6] || (_cache[6] = (...args) => ($options.closeBookDetails && $options.closeBookDetails(...args))),
        class: normalizeClass({ 
      'spreadsheet-details': _ctx.sticky.viewMode === 'spreadsheet', 
      'mobile-width': $options.mobileWidth,
      'links-lead-to-library': !_ctx.sticky.detailLinksToAudible && _ctx.animate_detailLinksToAudible,
    })
      }, [
        (_ctx.sticky.viewMode !== 'spreadsheet')
          ? (openBlock(), createElementBlock("div", _hoisted_1$g, null, 512))
          : createCommentVNode("", true),
        withDirectives((openBlock(), createElementBlock("div", {
          id: "book-info-container",
          onShortkey: _cache[5] || (_cache[5] = (...args) => ($options.openAdjacentBookDetails && $options.openAdjacentBookDetails(...args)))
        }, [
          (_ctx.book.notInLibrary)
            ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "inner-wrap",
                style: normalizeStyle({ maxWidth: $options.getMaxWidth })
              }, [
                withDirectives(createVNode(_component_fa6_solid_ban, {
                  style: {"font-size":"30px","color":"#ff404e","margin-bottom":"20px"},
                  content: "Not in my library..."
                }, null, 512), [
                  [_directive_tippy, { trigger: 'mouseenter click' }]
                ]),
                createVNode(_component_gallery_book_details_title, {
                  book: _ctx.book,
                  tempAsin: $options.tempAsin
                }, null, 8, ["book", "tempAsin"]),
                (_ctx.sticky.bookDetailSettings.sidebar.iconToolbar)
                  ? (openBlock(), createBlock(_component_gallery_book_info_toolbar, {
                      key: 0,
                      style: {"margin-top":"15px"},
                      book: _ctx.book,
                      tempAsin: $options.tempAsin
                    }, null, 8, ["book", "tempAsin"]))
                  : createCommentVNode("", true)
              ], 4))
            : (openBlock(), createElementBlock("div", {
                key: 1,
                class: "inner-wrap",
                style: normalizeStyle({ maxWidth: $options.getMaxWidth })
              }, [
                createBaseVNode("div", _hoisted_2$7, [
                  withDirectives((openBlock(), createElementBlock("div", {
                    class: "audible-vs-local-links",
                    onClick: _cache[0] || (_cache[0] = $event => ($options.detailLinksToAudible())),
                    content: _ctx.sticky.detailLinksToAudible ? 'Links lead to Audible' : 'Links lead to my library',
                    ref: "detailLinksToAudible"
                  }, [
                    (!_ctx.sticky.detailLinksToAudible)
                      ? (openBlock(), createBlock(_component_ion_library_sharp, { key: 0 }))
                      : (openBlock(), createBlock(_component_fa6_brands_audible, { key: 1 }))
                  ], 8, _hoisted_3$6)), [
                    [_directive_tippy, { trigger: 'manual' }]
                  ]),
                  ($options.mobileWidth)
                    ? (openBlock(), createBlock(_component_gallery_details_first_hider, { key: 0 }))
                    : createCommentVNode("", true),
                  createVNode(_component_gallery_sidebar_flipper),
                  createVNode(_component_uil_cog, {
                    class: normalizeClass(["book-details-info", { active: _ctx.store.bookDetailSettingsOpen }]),
                    onClick: _cache[1] || (_cache[1] = $event => (_ctx.$store.commit('prop', { key: 'bookDetailSettingsOpen', value: !_ctx.store.bookDetailSettingsOpen })))
                  }, null, 8, ["class"])
                ]),
                createBaseVNode("div", {
                  class: normalizeClass(["top details-wrap", { 'reverse-direction': _ctx.sticky.bookDetailSettings.reverseDirection }])
                }, [
                  (_ctx.sticky.bookDetailSettings.sidebar.show && !(!_ctx.sticky.bookDetailSettings.reverseDirection && _ctx.sticky.bookDetailSettings.hideFirstSection && $options.mobileWidth))
                    ? (openBlock(), createElementBlock("div", _hoisted_4$6, [
                        (!$options.mobileWidth)
                          ? withDirectives((openBlock(), createElementBlock("div", {
                              key: 0,
                              class: "collapse-btn",
                              content: (!_ctx.sticky.bookDetailsCollapsedCover ? 'Collapse' : 'Expand') + ' cover image.',
                              style: { top: '5px' },
                              onClick: _cache[2] || (_cache[2] = $event => ($options.collapseBtnClicked('bookDetailsCollapsedCover')))
                            }, [
                              createVNode(_component_gallery_vertical_chevron, {
                                up: !_ctx.sticky.bookDetailsCollapsedCover
                              }, null, 8, ["up"])
                            ], 8, _hoisted_5$4)), [
                              [_directive_tippy]
                            ])
                          : createCommentVNode("", true),
                        createBaseVNode("div", {
                          class: normalizeClass(["cover-wrap", { 'cover-height': !_ctx.sticky.bookDetailsCollapsedCover && _ctx.book.cover && !$options.mobileWidth }])
                        }, [
                          createBaseVNode("a", {
                            href: _ctx.makeUrl('book', _ctx.book.asin),
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }, [
                            createBaseVNode("div", _hoisted_7$3, [
                              createBaseVNode("div", {
                                class: "progress",
                                style: normalizeStyle(_ctx.progressbarWidth(_ctx.book))
                              }, null, 4)
                            ]),
                            (!_ctx.sticky.bookDetailsCollapsedCover && _ctx.book.cover && !$options.mobileWidth)
                              ? withDirectives((openBlock(), createElementBlock("img", {
                                  key: 0,
                                  onLoad: _cache[3] || (_cache[3] = $event => (_ctx.imageLoaded = true)),
                                  crossorigin: "anonymous",
                                  class: normalizeClass(["cover", { loaded: _ctx.imageLoaded }]),
                                  src: _ctx.makeCoverUrl(_ctx.book.cover)
                                }, null, 42, _hoisted_8$3)), [
                                  [vShow, _ctx.imageLoaded]
                                ])
                              : createCommentVNode("", true)
                          ], 8, _hoisted_6$4)
                        ], 2),
                        createBaseVNode("div", {
                          class: "progress-info",
                          innerHTML: $options.progressInfo(_ctx.book)
                        }, null, 8, _hoisted_9$2),
                        createBaseVNode("div", _hoisted_10$2, [
                          withDirectives((openBlock(), createElementBlock("div", {
                            class: "collapse-btn",
                            content: (!_ctx.sticky.bookDetailsCollapsedDetails ? 'Collapse' : 'Expand') + ' book details.',
                            style: normalizeStyle({ top: !_ctx.sticky.bookDetailsCollapsedDetails ? '25px' : '-10px' }),
                            onClick: _cache[4] || (_cache[4] = $event => ($options.collapseBtnClicked('bookDetailsCollapsedDetails')))
                          }, [
                            createVNode(_component_gallery_vertical_chevron, {
                              up: !_ctx.sticky.bookDetailsCollapsedDetails
                            }, null, 8, ["up"])
                          ], 12, _hoisted_11$2)), [
                            [_directive_tippy]
                          ]),
                          (_ctx.sticky.bookDetailSettings.sidebar.iconToolbar)
                            ? (openBlock(), createBlock(_component_gallery_book_info_toolbar, {
                                key: 0,
                                book: _ctx.book
                              }, null, 8, ["book"]))
                            : createCommentVNode("", true),
                          (!_ctx.sticky.bookDetailsCollapsedDetails)
                            ? (openBlock(), createBlock(_component_gallery_book_basic_info, {
                                key: 1,
                                book: _ctx.book
                              }, null, 8, ["book"]))
                            : createCommentVNode("", true)
                        ]),
                        (_ctx.sticky.bookDetailSettings.sidebar.seriesList)
                          ? (openBlock(), createBlock(_component_gallery_collections_drawer, {
                              key: 1,
                              book: _ctx.book
                            }, null, 8, ["book"]))
                          : createCommentVNode("", true),
                        (_ctx.sticky.bookDetailSettings.sidebar.collectionsList)
                          ? (openBlock(), createBlock(_component_gallery_books_in_series, {
                              key: 2,
                              book: _ctx.book
                            }, null, 8, ["book"]))
                          : createCommentVNode("", true)
                      ], 512))
                    : createCommentVNode("", true),
                  (!_ctx.loading && !(_ctx.sticky.bookDetailSettings.reverseDirection && _ctx.sticky.bookDetailSettings.hideFirstSection && $options.mobileWidth))
                    ? (openBlock(), createBlock(_component_gallery_book_summary, {
                        key: 1,
                        book: _ctx.book,
                        bookSummary: _ctx.bookSummaryJSON,
                        mobileWidth: $options.mobileWidth
                      }, null, 8, ["book", "bookSummary", "mobileWidth"]))
                    : createCommentVNode("", true)
                ], 2),
                (_ctx.sticky.bookDetailSettings.carousel && !_ctx.loading)
                  ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
                      (($options.peopleAlsoBought && $options.peopleAlsoBought !== true) && !(_ctx.store.standalone && !_ctx.store.siteOnline))
                        ? (openBlock(), createBlock(_component_gallery_carousel, {
                            detailsBook: _ctx.book,
                            books: $options.peopleAlsoBought,
                            key: _ctx.maxWidth,
                            mobileWidth: $options.mobileWidth
                          }, {
                            default: withCtx(() => [...(_cache[7] || (_cache[7] = [
                              createTextVNode(" Listeners also enjoyed ", -1)
                            ]))]),
                            _: 1
                          }, 8, ["detailsBook", "books", "mobileWidth"]))
                        : createCommentVNode("", true)
                    ]))
                  : createCommentVNode("", true)
              ], 4))
        ], 32)), [
          [_directive_shortkey, { left: ['arrowleft'], up: ['arrowup'], right: ['arrowright'], down: ['arrowdown'], tab: ['tab'], tabShift: ['tab', 'shift'] }]
        ])
      ], 34)), [
        [
          _directive_shortkey,
          ['esc'],
          void 0,
          { once: true }
        ]
      ])
    : createCommentVNode("", true)
}
const __unplugin_components_6$1 = /*#__PURE__*/_export_sfc$1(_sfc_main$a, [['render',_sfc_render$a],['__scopeId',"data-v-4d82a01b"]]);

/* unplugin-vue-components disabled */

const _sfc_main$9 = {
  name: "aleListItem",
  props: ["book", "rowIndex", "keys"],
  mixins: [stringifyArray, makeCoverUrl, makeFullUrl],
  data: function() {
    return {
      sticky: this.$store.state.sticky,
      // bookUrl: "",
      coverUrl: "",
      coverUrl27: "",
      bookTitle: "",
      goodreadsUrl: "",
      columns: null,
      imageLoading: true,
    };
  },

  created: function() {
    
    // this.bookUrl = this.makeFullUrl(this.book.url);
    this.coverUrl = this.makeCoverUrl(this.book.cover);
    if (this.coverUrl) this.coverUrl27 = this.coverUrl.replace("_SL500_", "_SL54_");
    this.bookTitle = this.book.title || this.book.titleShort;
    this.columns = this.prepareColumns();
    
  },

  mounted: function() {
    this.$nextTick(function() {
      // setTimeout(function() {
      this.imageLoading = false;
      // }, 600);
    });
  },

  methods: {

    prepareColumns: function() {
      
      const vue = this;
      return _.map(this.keys, function(key) {
        
        let col = {};
        col.key = key;
        col.class = "col-" + _.kebabCase(key);
        
        switch (key) {
          case "authors":
          case "narrators":
          case "categories":
          case "publishers":
          case "tags":
            col.text = vue.stringifyArray(
              vue.book[ key ],
              "name",
              key === "categories" ? " > " : null
            );
            break;

          case "series":
            var series = vue.book.series;
            if ( series ) series = _.map(series, function( series ) {
              let numbers = series.bookNumbers ? (' (book '+ _.castArray(series.bookNumbers).join(", ") +')') : '';
              return !series.name ? '' : series.name + numbers;
            }).join(", ");
            col.text = series || '';
            break;
            
          case "title":
            col.text = vue.book[ key ] || vue.book.titleShort;
            col.class += " sticky-col";
            break;

          case "bookNumbers":
            if ( !vue.book.series ) {
              col.text = '';
            }
            else {
              let allNumbers = vue.book.series.filter(function( o ) { return o.bookNumbers; });
                  allNumbers = allNumbers.map(function( o ) { return o.bookNumbers; });
                  allNumbers = allNumbers.join(", ");
                  
              col.text = allNumbers || '∞';
              
              // let allNumbers = _.filter(vue.book.series, "bookNumbers");
              // allNumbers = _.map(allNumbers, "bookNumbers");
              // allNumbers = _.flatten(allNumbers);
              // if (_.isEmpty(allNumbers)) allNumbers = null;
              // else if (_.isArray(allNumbers)) {
              //   allNumbers = allNumbers.join(", ");
              // }
              // col.text = vue.book.series ? (allNumbers || '∞') : '';
            }
            break;
          
          case "isbn10":
            const isbn10 = _.find( vue.book.isbns, { type: "ISBN_10" });
            if ( isbn10 ) col.text = isbn10.identifier;
            break;
          case "isbn13":
            const isbn13 = _.find( vue.book.isbns, { type: "ISBN_13" });
            if ( isbn13 ) col.text = isbn13.identifier;
            break;
            
          default:
            col.text = vue.book[ key ];
            col.name = "";
            break;
        }

        if (!col.text) col.text = null;
        
        return col;
        
      });
    }
  }
};

const _hoisted_1$f = ["name"];
const _hoisted_2$6 = { class: "ale-col-inner" };
const _hoisted_3$5 = {
  key: 0,
  class: "icons-n-stuff"
};
const _hoisted_4$5 = { class: "info-icon" };
const _hoisted_5$3 = {
  key: 1,
  class: "cloud-player-icon"
};
const _hoisted_6$3 = { class: "thumbnail-wrapper" };
const _hoisted_7$2 = ["src"];
const _hoisted_8$2 = { class: "text-container" };

function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa_solid_chevron_down = __unplugin_components_0$c;
  const _component_gallery_sample_button = __unplugin_components_1$3;
  const _component_gallery_open_web_player = __unplugin_components_2$1;

  return (openBlock(), createElementBlock("tr", {
    class: "ale-row-inner",
    onClick: _cache[0] || (_cache[0] = $event => (_ctx.$compEmitter.emit('book-clicked', $props.book.asin)))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (col) => {
      return (openBlock(), createElementBlock("td", {
        key: col.key,
        class: normalizeClass(["ale-col", col.class]),
        name: col.name
      }, [
        createBaseVNode("div", _hoisted_2$6, [
          (col.key === 'title')
            ? (openBlock(), createElementBlock("span", _hoisted_3$5, [
                createBaseVNode("span", _hoisted_4$5, [
                  createVNode(_component_fa_solid_chevron_down, { class: "pointer" })
                ]),
                (_ctx.sticky.bookDetailSettings.playButton)
                  ? (openBlock(), createBlock(_component_gallery_sample_button, {
                      key: 0,
                      book: $props.book,
                      index: $props.rowIndex,
                      size: 16
                    }, null, 8, ["book", "index"]))
                  : ($props.book.asin && _ctx.sticky.bookDetailSettings.cloudPlayer)
                    ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
                        createVNode(_component_gallery_open_web_player, {
                          size: 20,
                          book: $props.book,
                          icon: true,
                          tooltip: false,
                          noBG: true
                        }, null, 8, ["book"])
                      ]))
                    : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_6$3, [
                  (!_ctx.imageLoading)
                    ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        crossorigin: "anonymous",
                        src: _ctx.coverUrl27,
                        alt: ""
                      }, null, 8, _hoisted_7$2))
                    : createCommentVNode("", true)
                ])
              ]))
            : createCommentVNode("", true),
          createBaseVNode("span", _hoisted_8$2, toDisplayString(col.text || " "), 1)
        ])
      ], 10, _hoisted_1$f))
    }), 128))
  ]))
}
const __unplugin_components_1$2 = /*#__PURE__*/_export_sfc$1(_sfc_main$9, [['render',_sfc_render$9]]);

/* unplugin-vue-components disabled */

/* unplugin-vue-components disabled */
const _sfc_main$8 = {
  name: "colResizer",
  props: ["identifier"],
  data: function() {
    return {
      colClass: "",
      startPosition: null,
      endPosition: null,
      dragging: false,
      minWidth: 30,
      width: null,
      mouseX: 0,
      threshold: 10
    };
  },

  created: function() {
    this.colClass = this.identifier.split(" ")[0];
  },

  methods: {
    resizeMouseDown: function(e) {
      this.endPosition = null;
      this.startPosition = e.clientX;
    },

    resizeMouseMove: _.throttle(function(e) {
      if (this.startPosition) {
        if (Math.abs(this.startPosition - e.clientX) >= this.threshold) {
          this.dragging = true;
          this.mouseX = e.clientX;
        }
      }
    }, 65),

    resizeMouseUp: function(e) {
      if (this.dragging) {
        this.endPosition = e.clientX;
        const prevDistance = this.width ? this.width : e.currentTarget.parentElement.offsetWidth;
        const dragDistance = Math.abs(this.startPosition - this.endPosition);
        const addition = this.endPosition > this.startPosition ? true : false;
        const width = prevDistance + (addition ? +dragDistance : -dragDistance);
        this.width = width < this.minWidth ? this.minWidth : width;
      }

      this.dragging = null;
      this.endPosition = null;
      this.startPosition = null;
      this.mouseX = 0;
    }
  }
};

function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["col-resizer", { dragging: _ctx.startPosition }]),
    onMousedown: _cache[0] || (_cache[0] = (...args) => ($options.resizeMouseDown && $options.resizeMouseDown(...args))),
    onMouseup: _cache[1] || (_cache[1] = (...args) => ($options.resizeMouseUp && $options.resizeMouseUp(...args))),
    onMousemove: _cache[2] || (_cache[2] = (...args) => ($options.resizeMouseMove && $options.resizeMouseMove(...args)))
  }, [
    (_ctx.mouseX)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "floater-boy",
          style: normalizeStyle({ left: _ctx.mouseX + 'px' })
        }, null, 4))
      : createCommentVNode("", true),
    (_ctx.width)
      ? (openBlock(), createBlock(resolveDynamicComponent("style"), {
          key: 1,
          type: "text/css"
        }, {
          default: withCtx(() => [
            createTextVNode(" ." + toDisplayString(_ctx.colClass) + " { width: " + toDisplayString(_ctx.width) + "px !important; } ", 1)
          ]),
          _: 1
        }))
      : createCommentVNode("", true)
  ], 34))
}
const __unplugin_components_0$5 = /*#__PURE__*/_export_sfc$1(_sfc_main$8, [['render',_sfc_render$8],['__scopeId',"data-v-f559502f"]]);

const _sfc_main$7 = {
  name: "aleHeader",
  props: ["keys"],
  data: function() {
    return {
      listName: 'sort',
      optionsList: null,
      headers: null
    };
  },

  created: function() {
    this.optionsList = this.$store.state.listRenderingOpts[ this.listName ];
    this.headers = this.prepareHeaders(this.keys);
  },

  methods: {
    prepareHeaders: function(keys) {
      return _.map(keys, function(key) {
        const header = {
          key: key,
          label: _.startCase(key),
          align: "left",
          class: "col-" + _.kebabCase(key)
        };

        switch (key) {
          case "titleShort":
          case "title":
            header.class = header.class + " sticky-col";
            break;
          case "authors":
          case "narrators":
          case "publishers":
          case "tags":
            header.key += '.name';
            break;
        }

        return header;
      });
    },

    sorterIndex: function(item) {
      return _.findIndex(this.optionsList, {
        key: item.key
      });
    },

    sorterItem: function(name) {
      const regex = new RegExp("^" + name);
      return _.find(this.optionsList, function(o) {
        return o.key.match(regex);
      });
    }
  }
};

const _hoisted_1$e = { class: "list-view-header ale-row" };
const _hoisted_2$5 = { class: "ale-row-inner" };
const _hoisted_3$4 = { class: "ale-col-inner" };
const _hoisted_4$4 = {
  key: 1,
  class: "text-container"
};

function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_col_resizer = __unplugin_components_0$5;
  const _component_gallery_sorter = __unplugin_components_1$a;

  return (openBlock(), createElementBlock("div", _hoisted_1$e, [
    createBaseVNode("tr", _hoisted_2$5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headers, (item, index) => {
        return (openBlock(), createElementBlock("th", {
          key: item.label,
          class: normalizeClass(["header-item ale-col", item.class])
        }, [
          createVNode(_component_gallery_col_resizer, {
            identifier: item.class
          }, null, 8, ["identifier"]),
          createBaseVNode("div", _hoisted_3$4, [
            ($options.sorterIndex(item) > -1)
              ? (openBlock(), createBlock(_component_gallery_sorter, {
                  key: 0,
                  label: false,
                  item: $options.sorterItem(item.key),
                  index: $options.sorterIndex(item),
                  currentList: _ctx.optionsList,
                  listName: _ctx.listName,
                  tippyTop: true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["item", "index", "currentList", "listName"]))
              : (openBlock(), createElementBlock("span", _hoisted_4$4, toDisplayString(item.label), 1))
          ])
        ], 2))
      }), 128))
    ])
  ]))
}
const __unplugin_components_0$4 = /*#__PURE__*/_export_sfc$1(_sfc_main$7, [['render',_sfc_render$7]]);

/* unplugin-vue-components disabled */

const _sfc_main$6 = {
  name: "aleBooks",
  mixins: [stringifyArray, prepareKeys],
  data: function() {
    return {
      spreadsheetTop: 170,
      keys: "",
      prevScrollTop: 0,
    };
  },
  
  watch: {
    '$store.state.desktopPlayerHeight'() {
      this.setSpreadsheetOffset();
    },
  },

  created: function() {
    this.keys = this.prepareKeys();
  },

  mounted: function() {
    this.setSpreadsheetOffset();
    this.$compEmitter.on('afterWindowResize', this.setSpreadsheetOffset);
  },
  beforeUnmount: function() {
    this.$compEmitter.off('afterWindowResize', this.setSpreadsheetOffset);
  },

  methods: {
    
    setSpreadsheetOffset: function() {
      this.$nextTick(function() {
        
        const searchWrap = document.querySelector('#ale-search-wrap');
        const searchOffset = window.pageYOffset + searchWrap.getBoundingClientRect().top;
        const searchHeight = searchWrap.offsetHeight;
        this.spreadsheetTop = searchOffset + searchHeight;
        
      });
    },
    
  }
};

const _hoisted_1$d = { class: "list-view-inner-wrap" };

function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_header = __unplugin_components_0$4;
  const _component_gallery_row = __unplugin_components_1$2;
  const _component_gallery_lazy = __unplugin_components_1$9;

  return (openBlock(), createElementBlock("div", {
    class: "ale-books list-view",
    ref: "listView",
    style: normalizeStyle({ top: _ctx.spreadsheetTop + 'px' })
  }, [
    createBaseVNode("div", _hoisted_1$d, [
      createBaseVNode("table", null, [
        createBaseVNode("thead", null, [
          createVNode(_component_gallery_header, { keys: _ctx.keys }, null, 8, ["keys"])
        ]),
        createBaseVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.$store.state.chunkCollection, (book, index) => {
            return (openBlock(), createBlock(_component_gallery_lazy, {
              class: "ale-row",
              "data-asin": book.asin,
              key: 'book:'+book.asin,
              ref_for: true,
              ref: "domBooks"
            }, {
              default: withCtx(() => [
                createVNode(_component_gallery_row, {
                  book: book,
                  rowIndex: index,
                  keys: _ctx.keys
                }, null, 8, ["book", "rowIndex", "keys"])
              ]),
              _: 2
            }, 1032, ["data-asin"]))
          }), 128))
        ])
      ])
    ])
  ], 4))
}
const __unplugin_components_5$1 = /*#__PURE__*/_export_sfc$1(_sfc_main$6, [['render',_sfc_render$6]]);

const _hoisted_1$c = {
  viewBox: "0 0 448 512",
  width: "1.06em",
  height: "1.2em"
};

function render$7(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$c, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32m32-240c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16m16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16"
    }, null, -1)
  ]))]))
}

const __unplugin_components_9 = markRaw({ name: 'fa6-solid-book', render: render$7 });
/* vite-plugin-components disabled */

const _hoisted_1$b = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$6(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$b, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_6 = markRaw({ name: 'fa-solid-plus-circle', render: render$6 });
/* vite-plugin-components disabled */

const _hoisted_1$a = {
  viewBox: "0 0 448 512",
  width: "1.06em",
  height: "1.2em"
};

function render$5(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$a, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M224 64c-44.2 0-80 35.8-80 80v48h240c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h16v-48C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1.8-42.6-15.2C283.4 82.6 255.9 64 224 64m32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_5 = markRaw({ name: 'fa6-solid-unlock-keyhole', render: render$5 });
/* vite-plugin-components disabled */

const _hoisted_1$9 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};

function render$4(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$9, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m243.31 90.91l-128.4 128.4a16 16 0 0 1-22.62 0l-71.62-72a16 16 0 0 1 0-22.61l20-20a16 16 0 0 1 22.58 0L104 144.22l96.76-95.57a16 16 0 0 1 22.59 0l19.95 19.54a16 16 0 0 1 .01 22.72"
    }, null, -1)
  ]))]))
}

const __unplugin_components_4$1 = markRaw({ name: 'ph-check-fat-fill', render: render$4 });
/* vite-plugin-components disabled */

const _hoisted_1$8 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$3(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$8, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9"
    }, null, -1)
  ]))]))
}

const __unplugin_components_3$1 = markRaw({ name: 'fa-solid-heart', render: render$3 });
/* vite-plugin-components disabled */

const _hoisted_1$7 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render$2(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$7, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m47.6 300.4l180.7 168.7c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l180.7-168.7c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141c-45.6-7.6-92 7.3-124.6 39.9l-12 12l-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5"
    }, null, -1)
  ]))]))
}

const __unplugin_components_1$1 = markRaw({ name: 'fa6-solid-heart', render: render$2 });
/* vite-plugin-components disabled */

/* unplugin-vue-components disabled */

const _sfc_main$5 = {
  name: "sortValues",
  props: ["book"],
  mixins: [timeStringToSeconds, secondsToTimeString, progressbarWidth],
  data: function() {
    return {
      // notAvailable: "N/A"
      notAvailable: "&nbsp;"
    };
  },
  
  methods: {
    
    sortContents: function() {
      let sortKey = this.$store.getters.sortBy;
      
      switch( sortKey ) {
        
        case "bookNumbers":
          
          if ( this.$route.params.series && this.book.series ) {
            let activeSeries = _.find( this.book.series, { asin: this.$route.params.series });
            return _.isArray(_.get(activeSeries, 'bookNumbers')) ? activeSeries.bookNumbers.join(", ") : '';
          }
          else if (this.book.series) {
            
            let allNumbers = _.filter( this.book.series, 'bookNumbers');
            allNumbers = _.map( allNumbers, "bookNumbers");
            allNumbers = _.flatten(allNumbers);
            if (_.isEmpty(allNumbers)) allNumbers = null;
            else if (_.isArray(allNumbers)) {
              allNumbers = allNumbers.join(", ");
            }
            return allNumbers || "∞";
            
          } else {
            return '';
          }
          
        case "seriesOrder":
          const numbersDelim = ", ";
          if (this.book.series) {
            
            const seriesAsin = this.$route.params.series;
            const series = _.find(this.book.series, { asin: seriesAsin });
            if ( series ) {
              const seriesNumbers = series.bookNumbers;
              if ( seriesNumbers ) {
                return _.castArray(seriesNumbers).join(numbersDelim);
              }
              else {
                return "∞";
              }
            }
            else {
              return this.notAvailable;
            }
            
          } else {
            return this.notAvailable;
          }
        case "authors.name":
        case "narrators.name":
        case "publishers.name":
        case "tags.name":
          var name = _.get( this.book, sortKey.replace('.name', '[0].name') );
          return name || this.notAvailable;
        case "rating":
          if ( this.book.ratings ) {
            // const ratings = this.book.ratings ? " <small>("+ this.book.ratings +")</small>" : "";
            // return this.book[sortKey] + ratings;
            return this.book[sortKey];
          }
          else {
            return this.notAvailable;
          }
        case "ratings":
          if ( this.book.rating ) {
            // const rating = this.book.rating ? " <small>(" + this.book.rating + ")</small>" : "";
            // return this.book[sortKey] + rating;
            return this.book.rating;
          }
          else {
            return this.notAvailable;
          }
        case "progress":
            var css = this.progressbarWidth(this.book);
            return (
              this.progress(this.book) +
              '<div class="progress-bar">' +
              '<div style="width: ' + css.width +';"></div>' +
              "</div>"
            );

        case "title":
          return this.book.titleShort || this.book.title || this.notAvailable;
          
        case "series":
          if ( this.book.series ) {
            return _.map(this.book.series, 'name').join(', ');
          }
          else { return this.notAvailable; }
          
        case "categories":
          if ( this.book.categories ) {
            return this.book.categories[0].name;
          }
          else { return this.notAvailable; }
          
        case "isbn10":
        case "isbn13":
          if ( this.book.isbns ) {
            if ( sortKey === 'isbn10' ) {
              const isbn10 = _.find(this.book.isbns, ["type", "ISBN_10"]);
              if (isbn10) return isbn10.identifier;
            }
            else if ( sortKey === 'isbn13' ) {
              const isbn13 = _.find(this.book.isbns, ["type", "ISBN_13"]);
              if (isbn13) return isbn13.identifier;
            }
            else {
              return this.notAvailable;
            }
          }
          else {
            return this.notAvailable;
          }
          break;
          
        case "narratorsNumber":
          if ( this.book.narrators ) {
            let hasFullCast = _.find( this.book.narrators, function( narrator ) { return narrator.name.match('full cast') });
            if ( hasFullCast && this.book.narrators.length === 1 ) {
              return '​∞ full cast';
            }
            else {
              return (this.book.narrators.length -(hasFullCast ? 1 : 0)) + (hasFullCast ? ' full cast' : '');
            }
          }
          else { return this.notAvailable; }
          
        default:
          if ( this.book[sortKey] ) return this.book[sortKey]
          else return this.notAvailable;
      
      }
    },
    
    progress: function(book) {
      
      if (book.progress && book.length) {
        if (book.progress.toLowerCase().trim() === "finished") {
          const length = this.timeStringToSeconds(book.length);
          return (
            "<div>Finished ( " +this.secondsToTimeString(length, true) + " )</div>"
          );
        } else {
          const progress = this.timeStringToSeconds(book.progress);
          const length = this.timeStringToSeconds(book.length);
          const difference = length - progress;
          return (
            this.secondsToTimeString(difference, true) + " <strong class='audible-orange-text'>/</strong> " + this.secondsToTimeString(length, true)
          );
        }
      } else {
        if ( book.progress ) return "<div>" + book.progress + ' ('+ this.notAvailable +')' + "</div>";
        else if ( book.length ) return "<div>Length: " + book.length + "</div>";
        else return "<div>" + book.progress + "</div>";
      }
    },
    
  }
};

const _hoisted_1$6 = { class: "sort-values-container" };
const _hoisted_2$4 = ["content"];
const _hoisted_3$3 = ["innerHTML", "content"];
const _hoisted_4$3 = { key: 1 };

function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_star_ratings = __unplugin_components_0$a;
  const _component_fa6_solid_heart = __unplugin_components_1$1;
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("div", _hoisted_1$6, [
    ((_ctx.$store.getters.sortBy === 'myRating' || _ctx.$store.getters.sortBy === 'rating' || _ctx.$store.getters.sortBy === 'ratings') && $options.sortContents() !== ' ')
      ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: "ratings",
          content: 
      (_ctx.$store.getters.sortBy !== 'myRating' && $props.book.myRating ? ('My rating: ' + $props.book.myRating + '<br>') : '') + 
      (_ctx.$store.getters.sortBy === 'myRating' && $props.book.rating ? ('Average rating: ' + $props.book.rating + '<br>') : '') + 
      (_ctx.$store.getters.sortBy === 'myRating' && $props.book.ratings ? ('Number of ratings: ' + $props.book.ratings + '<br>') : '') + 
      ''
    
        }, [
          createVNode(_component_gallery_star_ratings, {
            prioritizeRatingsText: _ctx.$store.getters.sortBy === 'ratings',
            size: 10,
            rating: $options.sortContents(),
            number: true,
            ratingsText: false,
            ratings: (_ctx.$store.getters.sortBy === 'rating' || _ctx.$store.getters.sortBy === 'ratings') && $props.book.ratings ? $props.book.ratings : null
          }, null, 8, ["prioritizeRatingsText", "rating", "ratings"])
        ], 8, _hoisted_2$4)), [
          [_directive_tippy, { trigger: 'click mouseenter', allowHTML: true }]
        ])
      : (_ctx.$store.getters.sortBy !== 'favorite')
        ? withDirectives((openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass('sort-'+_ctx.$store.getters.sortBy),
            innerHTML: $options.sortContents(),
            content:  (_ctx.$store.getters.sortBy === 'progress' ? $props.book.progress : '' ) + ''
          }, null, 10, _hoisted_3$3)), [
            [_directive_tippy, { trigger: 'click mouseenter', allowHTML: true }]
          ])
        : (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass('sort-'+_ctx.$store.getters.sortBy)
          }, [
            ($props.book.favorite)
              ? (openBlock(), createBlock(_component_fa6_solid_heart, { key: 0 }))
              : (openBlock(), createElementBlock("span", _hoisted_4$3, " "))
          ], 2))
  ]))
}
const __unplugin_components_0$3 = /*#__PURE__*/_export_sfc$1(_sfc_main$5, [['render',_sfc_render$5]]);

/* unplugin-vue-components disabled */

const _sfc_main$4 = {
  name: "book",
  props: ["book", "index", "sortValuesEnabled", "imageLoaded"],
  mixins: [ makeCoverUrl ],
  data: function() {
    return {
      store: this.$store.state,
      sticky: this.$store.state.sticky,
      smartLink: "https://smart.link/o3waqx4wg1gdn?asin=",
    };
  },
  methods: {
    
    // imageAlt: function(book, index) {
    //   return book.authors[0].name + " - " + book.title;
    // },

    playSample: function(book, index) {
      
      if ( !book.sample ) {
        window.open(`${this.$store.state.urlOrigin}/webplayer?asin=${book.asin}&isSample=true`, '_blank');
      }
      else {
        
        this.$store.commit('prop', { 
          key: 'audioPlayer.audio', 
          value: {
            from: "book",
            route: this.$route,
            book: book,
            index: index
          } 
        });
        
      }
      
    },
    
  }
};

const _hoisted_1$5 = { class: "ale-cover" };
const _hoisted_2$3 = {
  key: 1,
  class: "ale-play-sample cloud-player-icon"
};
const _hoisted_3$2 = ["content"];
const _hoisted_4$2 = { class: "info-icons-wrapper" };
const _hoisted_5$2 = {
  key: 0,
  class: "favorite-marker"
};
const _hoisted_6$2 = {
  key: 1,
  class: "finished-marker"
};
const _hoisted_7$1 = {
  key: 2,
  class: "plus-catalog-marker"
};
const _hoisted_8$1 = { key: 0 };
const _hoisted_9$1 = { key: 1 };
const _hoisted_10$1 = {
  key: 3,
  class: "kindle-marker"
};
const _hoisted_11$1 = {
  key: 1,
  class: "placeholder-cover"
};
const _hoisted_12 = { class: "cover-content" };
const _hoisted_13 = {
  key: 0,
  class: "title"
};
const _hoisted_14 = {
  key: 1,
  class: "author"
};
const _hoisted_15 = {
  key: 2,
  class: "cover-img-wrapper"
};
const _hoisted_16 = ["src"];

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_sort_values = __unplugin_components_0$3;
  const _component_fa6_solid_play = __unplugin_components_1$b;
  const _component_gallery_open_web_player = __unplugin_components_2$1;
  const _component_fa_solid_heart = __unplugin_components_3$1;
  const _component_ph_check_fat_fill = __unplugin_components_4$1;
  const _component_fa6_solid_unlock_keyhole = __unplugin_components_5;
  const _component_fa_solid_plus_circle = __unplugin_components_6;
  const _component_fa6_solid_headphones_simple = __unplugin_components_7$1;
  const _component_fa6_solid_ban = __unplugin_components_8;
  const _component_fa6_solid_book = __unplugin_components_9;
  const _directive_tippy = resolveDirective("tippy");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["details-inner-wrap", { 'not-in-library': $props.book.notInLibrary }])
  }, [
    ($props.sortValuesEnabled)
      ? (openBlock(), createBlock(_component_gallery_sort_values, {
          key: 0,
          book: $props.book
        }, null, 8, ["book"]))
      : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_1$5, [
      (_ctx.sticky.bookDetailSettings.playButton)
        ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "ale-play-sample",
            onClick: _cache[0] || (_cache[0] = $event => ($options.playSample($props.book, $props.index)))
          }, [
            createBaseVNode("div", null, [
              createVNode(_component_fa6_solid_play)
            ])
          ]))
        : ($props.book.asin && _ctx.sticky.bookDetailSettings.cloudPlayer)
          ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
              createVNode(_component_gallery_open_web_player, {
                size: 20,
                book: $props.book,
                icon: true,
                tooltip: false,
                noBG: true
              }, null, 8, ["book"])
            ]))
          : createCommentVNode("", true),
      createBaseVNode("div", {
        class: "ale-click-wrap",
        onMousedown: _cache[3] || (_cache[3] = $event => (_ctx.$haptic(1))),
        onClick: _cache[4] || (_cache[4] = $event => (!$props.book.asin ? null : _ctx.$compEmitter.emit('book-clicked', $props.book.asin)))
      }, [
        ($props.book.blurb && _ctx.sticky.bookDetailSettings.blurb)
          ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              class: "blurb-tooltip",
              content: $props.book.blurb
            }, null, 8, _hoisted_3$2)), [
              [_directive_tippy, { delay: 150, placement: 'left', flipBehavior: ['left', 'right', 'top', 'bottom'], maxWidth: 300 }]
            ])
          : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4$2, [
          ($props.book.favorite && _ctx.sticky.bookDetailSettings.favorite)
            ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
                createBaseVNode("span", null, [
                  createVNode(_component_fa_solid_heart)
                ]),
                _cache[5] || (_cache[5] = createBaseVNode("span", null, "favorite", -1))
              ]))
            : createCommentVNode("", true),
          ($props.book.progress === 'Finished' && _ctx.sticky.bookDetailSettings.finished)
            ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
                createBaseVNode("span", null, [
                  createVNode(_component_ph_check_fat_fill)
                ]),
                _cache[6] || (_cache[6] = createBaseVNode("span", null, "finished", -1))
              ]))
            : createCommentVNode("", true),
          ($props.book.fromPlusCatalog && _ctx.sticky.bookDetailSettings.plusCatalog)
            ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                ($props.book.unavailable)
                  ? (openBlock(), createElementBlock("span", _hoisted_8$1, [
                      createVNode(_component_fa6_solid_unlock_keyhole)
                    ]))
                  : (openBlock(), createElementBlock("span", _hoisted_9$1, [
                      createVNode(_component_fa_solid_plus_circle)
                    ])),
                _cache[7] || (_cache[7] = createBaseVNode("span", null, "catalog", -1))
              ]))
            : createCommentVNode("", true),
          ($props.book.whispersync === 'owned' && _ctx.sticky.bookDetailSettings.whispersync)
            ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                createBaseVNode("span", null, [
                  createVNode(_component_fa6_solid_headphones_simple)
                ]),
                _cache[8] || (_cache[8] = createBaseVNode("span", null, "In my kindle", -1))
              ]))
            : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["ale-info-indicator", { 'not-in-library': $props.book.notInLibrary, 'open-details-icon': !$props.book.notInLibrary }])
        }, [
          createBaseVNode("div", null, [
            ($props.book.notInLibrary)
              ? (openBlock(), createBlock(_component_fa6_solid_ban, { key: 0 }))
              : (openBlock(), createBlock(_component_fa6_solid_book, { key: 1 }))
          ])
        ], 2),
        (!$props.book.cover || false)
          ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
              createBaseVNode("div", _hoisted_12, [
                ($props.book.titleShort || $props.book.title)
                  ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString($props.book.titleShort || $props.book.title), 1))
                  : createCommentVNode("", true),
                ($props.book.authors)
                  ? (openBlock(), createElementBlock("div", _hoisted_14, toDisplayString($props.book.authors[0].name), 1))
                  : createCommentVNode("", true)
              ])
            ]))
          : (openBlock(), createElementBlock("div", _hoisted_15, [
              createVNode(Transition, { name: "fade" }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("img", {
                    onLoad: _cache[1] || (_cache[1] = $event => (_ctx.$emit('update:imageLoaded', true))),
                    class: normalizeClass(["ale-cover-image", { loaded: $props.imageLoaded }]),
                    crossorigin: "anonymous",
                    draggable: "false",
                    onTouchstart: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"])),
                    src: _ctx.makeCoverUrl($props.book.cover, 280),
                    alt: ""
                  }, null, 42, _hoisted_16), [
                    [vShow, $props.imageLoaded]
                  ])
                ]),
                _: 1
              })
            ]))
      ], 32)
    ])
  ], 2))
}
const __unplugin_components_0$2 = /*#__PURE__*/_export_sfc$1(_sfc_main$4, [['render',_sfc_render$4],['__scopeId',"data-v-e3e1f7b5"]]);

/* unplugin-vue-components disabled */

const _sfc_main$3 = {
  name: "aleBooks",
  mixins: [slugify],
  data: function() {
    return {
      imageLoaded: false,
    };
  },
};

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_book = __unplugin_components_0$2;
  const _component_gallery_lazy = __unplugin_components_1$9;

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["ale-books grid-view", { 'sort-values-on': _ctx.$store.getters.sortValues && (_ctx.$store.getters.sortBy !== 'bookNumbers' && _ctx.$store.getters.sortBy !== 'seriesOrder' ) }]),
    ref: "booksWrapper"
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.$store.state.chunkCollection, (book, index) => {
      return (openBlock(), createBlock(_component_gallery_lazy, {
        class: normalizeClass(["ale-book", { 'details-open': !!_ctx.$route.query.book && _ctx.$route.query.book === book.asin, 'image-loaded': _ctx.imageLoaded }]),
        "data-asin": book.asin,
        key: 'book:'+book.asin
      }, {
        default: withCtx(() => [
          createVNode(_component_gallery_book, {
            book: book,
            index: index,
            sortValuesEnabled: _ctx.$store.getters.sortValues,
            imageLoaded: _ctx.imageLoaded,
            "onUpdate:imageLoaded": _cache[0] || (_cache[0] = $event => ((_ctx.imageLoaded) = $event))
          }, null, 8, ["book", "index", "sortValuesEnabled", "imageLoaded"])
        ]),
        _: 2
      }, 1032, ["class", "data-asin"]))
    }), 128))
  ], 2))
}
const __unplugin_components_4 = /*#__PURE__*/_export_sfc$1(_sfc_main$3, [['render',_sfc_render$3]]);

const _hoisted_1$4 = {
  viewBox: "0 0 576 512",
  width: "1.36em",
  height: "1.2em"
};

function render$1(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$4, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32v-48C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64h-32z"
    }, null, -1)
  ]))]))
}

const __unplugin_components_3 = markRaw({ name: 'fa6-solid-lock-open', render: render$1 });
/* vite-plugin-components disabled */

const contextMenuImage = ""+new URL('contextMenuReminder.BpYUWanu.png', import.meta.url).href+"";

/* unplugin-vue-components disabled */

const _sfc_main$2 = {
  name: "contextMenuReminder",
  data() {
    return {
      img: contextMenuImage,
    }
  },
  methods: {
    hide: function() {
      this.$store.commit('stickyProp', { key: 'contextMenuReminder', value: false });
    }, 
  }
  
};

const _hoisted_1$3 = { class: "reminder slide-in-blurred-top" };
const _hoisted_2$2 = ["src"];

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa_solid_times = __unplugin_components_0$f;

  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    _cache[0] || (_cache[0] = createBaseVNode("span", null, [
      createTextVNode("You can open this gallery page any time from "),
      createBaseVNode("br"),
      createTextVNode("the browser context menu (right-click) ")
    ], -1)),
    createBaseVNode("div", null, [
      createBaseVNode("img", {
        src: $data.img,
        alt: ""
      }, null, 8, _hoisted_2$2)
    ]),
    createVNode(_component_fa_solid_times, {
      class: "hide",
      onClick: $options.hide
    }, null, 8, ["onClick"])
  ]))
}
const __unplugin_components_1 = /*#__PURE__*/_export_sfc$1(_sfc_main$2, [['render',_sfc_render$2],['__scopeId',"data-v-9a824e7b"]]);

const _hoisted_1$2 = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("svg", _hoisted_1$2, [...(_cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-86.2-346.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24v-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1h-58.3c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0a32 32 0 1 1-64 0"
    }, null, -1)
  ]))]))
}

const __unplugin_components_0$1 = markRaw({ name: 'fa6-solid-circle-question', render });
/* vite-plugin-components disabled */

const Sidebar = ""+new URL('gallery-sidebar.Bajr0ENT.jpg', import.meta.url).href+"";

const CoverPlusCalatogIndicator = ""+new URL('gallery-cover-plus-calatog-indicator.B1UW-gDE.jpg', import.meta.url).href+"";

const SidebarSeriesList = ""+new URL('gallery-sidebar-series-list.DKTQoPX6.jpg', import.meta.url).href+"";

const SidebarToolbar = ""+new URL('gallery-sidebar-toolbar.CNNqQQcd.jpg', import.meta.url).href+"";

const Carousel = ""+new URL('gallery-carousel.BaPlQJvf.jpg', import.meta.url).href+"";

const PreferShortTitle = ""+new URL('gallery-prefer-short-title.Dxk_hNNF.jpg', import.meta.url).href+"";

const SamplePlayButton = ""+new URL('gallery-sample-play-button.BNgV3E80.jpg', import.meta.url).href+"";

const CoverFavoriteFinishedIndicators = ""+new URL('gallery-cover-favorite-finished-indicators.C5YxlCzj.jpg', import.meta.url).href+"";

const BookCoverCloudPlayerButton = ""+new URL('gallery-book-cover-cloud-player-button.BgZU_K88.jpg', import.meta.url).href+"";

const BlurbHoverCorner = ""+new URL('gallery-blurb-hover-corner.CBDVAavy.jpg', import.meta.url).href+"";

const SidebarCollectionsList = ""+new URL('gallery-sidebar-collections-list.UXmJCueq.jpg', import.meta.url).href+"";

const CoverWhispersyncIndicator = ""+new URL('gallery-cover-whispersync-indicator.Dyv0OkrY.jpg', import.meta.url).href+"";

const SidebarMainInfo = ""+new URL('gallery-sidebar-main-info.CmaR8Kxe.jpg', import.meta.url).href+"";

const SidebarCover = ""+new URL('gallery-sidebar-cover.C2b2Zenh.jpg', import.meta.url).href+"";

/* unplugin-vue-components disabled */

const _sfc_main$1 = {
  name: "bookDetailsSettings",
  data: function() {
    const vue = this;
    const store = this.$store.state;
    const sticky = this.$store.state.sticky;
    return {
      store: store,
      showSettings: true,
      settings: [
        
        { type: 'heading', label: 'Grid book cover' },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show sample play button', 
          infoOpen: false,
          info: `<img src="${SamplePlayButton}" class="tippy-info-image" />`,
          parent: 'sampleButton',
          value: sticky.bookDetailSettings.playButton,
          event: function( e ) {
            
            // Makes sure cloud player button is never enabled at the same time
            const update = [{ key: 'sticky.bookDetailSettings.playButton', value: e.target.checked }];
            if ( sticky.bookDetailSettings.cloudPlayer ) {
              update.push({ key: 'sticky.bookDetailSettings.cloudPlayer', value: !e.target.checked });
              vue.mutateChildren( 'cloudButton', 'value', !e.target.checked );
            }
            vue.mutateChildren( 'sampleButton', 'value', e.target.checked );
            vue.$store.commit('prop', update);
            
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show cloud player button', 
          parent: 'cloudButton',
          infoOpen: false,
          info: `You have to be logged in to this button. Try opening <a target="_blank" href="${store.urlOrigin}/library">your library</a> first before opening the cloud player.<br>If you can open your library, you can also open the cloud player through the ALE gallery.<br><img src="${BookCoverCloudPlayerButton}" class="tippy-info-image" />`,
          interactiveTippy: true,
          value: sticky.bookDetailSettings.cloudPlayer,
          event: function( e ) {

            // Makes sure sample play button is never enabled at the same time 
            const update = [{ key: 'sticky.bookDetailSettings.cloudPlayer', value: e.target.checked }];
            if ( sticky.bookDetailSettings.playButton ) {
              update.push({ key: 'sticky.bookDetailSettings.playButton', value: !e.target.checked });
              vue.mutateChildren( 'sampleButton', 'value', !e.target.checked );
            }
            vue.mutateChildren( 'cloudButton', 'value', e.target.checked );
            vue.$store.commit('prop', update);
            
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show blurb on hover', 
          infoOpen: false,
          info: `This is never visible on mobile <br/><img src="${BlurbHoverCorner}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.blurb,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.blurb', value: e.target.checked });
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show whispersync (owned) indicator', 
          infoOpen: false,
          info: `<img src="${CoverWhispersyncIndicator}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.whispersync,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.whispersync', value: e.target.checked });
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show plus catalog indicator', 
          infoOpen: false,
          info: `<img src="${CoverPlusCalatogIndicator}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.plusCatalog,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.plusCatalog', value: e.target.checked });
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show favorite indicator', 
          infoOpen: false,
          info: `<strong>The RED dot</strong><br><img src="${CoverFavoriteFinishedIndicators}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.favorite,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.favorite', value: e.target.checked });
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show finished indicator', 
          infoOpen: false,
          info: `<strong>The GREEN dot</strong><br><img src="${CoverFavoriteFinishedIndicators}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.finished,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.finished', value: e.target.checked });
          },
        },
        { type: 'divider' },
        
        { type: 'heading', label: 'Above summary' },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Prefer short title', 
          infoOpen: false,
          info: `This makes the title a little more readable without actually removing anything from the title, just diplaying it differently. Short title is used if available (for newly extracted data since v.0.2.9). Subtitle is shown below with a smaller font similar to Audible store pages. <br/><br/><strong>In case subtitle is not available, the full title is shown below instead, so you always get to see the full title either way.</strong><br/><img src='${PreferShortTitle}' class='tippy-info-image' />`,
          value: sticky.bookDetailSettings.titleShort,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.titleShort', value: e.target.checked });
            vue.$nextTick(() => {
              vue.$compEmitter.emit("resizeSummary");
            });
          }
        },
        { type: 'divider' },
        { type: 'heading', label: 'Sidebar' },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show sidebar', 
          infoOpen: false,
          info: `<strong>The entire sidebar!</strong> <br><img src="${Sidebar}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.sidebar.show,
          event: function( e ) {
            
            const checked = e.target.checked;
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.sidebar.show', value: checked });
            vue.$nextTick(() => {
              vue.$compEmitter.emit("resizeSummary");
            });
            
            vue.mutateChildren( 'sidebar', 'enabled', checked );
            
          },
          init: function( setting ) {
            vue.mutateChildren( 'sidebar', 'enabled', sticky.bookDetailSettings.sidebar.show );
          }
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show book cover', 
          parent: 'sidebar',
          infoOpen: false,
          info: `There is also an easy access toggle swith on the left side of the sidebar (arrow up) <br><img src="${SidebarCover}" class="tippy-info-image" />`,
          value: !sticky.bookDetailsCollapsedCover,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailsCollapsedCover', value: !e.target.checked });
            vue.$nextTick(() => {
              vue.$compEmitter.emit("resizeSummary");
            });
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show icon toolbar', 
          parent: 'sidebar',
          infoOpen: false,
          info: `<img src="${SidebarToolbar}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.sidebar.iconToolbar,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.sidebar.iconToolbar', value: e.target.checked });
            vue.$nextTick(() => {
              vue.$compEmitter.emit("resizeSummary");
            });
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show main details', 
          parent: 'sidebar',
          infoOpen: false,
          info: `There is also an easy access toggle swith on the left side of the sidebar (arrow up) <br><img src="${SidebarMainInfo}" class="tippy-info-image" />`, 
          value: !sticky.bookDetailsCollapsedDetails,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailsCollapsedDetails', value: !e.target.checked });
            vue.$nextTick(() => {
              vue.$compEmitter.emit("resizeSummary");
            });
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show collections list', 
          parent: 'sidebar',
          infoOpen: false,
          info: `If a book is in a collection... <br><img src="${SidebarCollectionsList}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.sidebar.collectionsList,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.sidebar.collectionsList', value: e.target.checked });
            vue.$nextTick(() => {
              vue.$compEmitter.emit("resizeSummary");
            });
          },
        },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show series list', 
          parent: 'sidebar',
          infoOpen: false,
          info: `If a book is in a series... <br><img src="${SidebarSeriesList}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.sidebar.seriesList,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.sidebar.seriesList', value: e.target.checked });
            vue.$nextTick(() => {
              vue.$compEmitter.emit("resizeSummary");
            });
          },
        },
        { type: 'divider' },
        
        { type: 'heading', label: 'Bottom of the details view' },
        { 
          enabled: true,
          type: 'checkbox', 
          label: 'Show carousel', 
          infoOpen: false,
          info: `<img src="${Carousel}" class="tippy-info-image" />`,
          value: sticky.bookDetailSettings.carousel,
          event: function( e ) {
            vue.$store.commit('prop', { key: 'sticky.bookDetailSettings.carousel', value: e.target.checked });
          },
        },
        
      ],
    };
  },
  
  created: function() {
    
    const hasPreps = _.filter( this.settings, 'init');
    _.each(hasPreps, function( setting ) {
      setting.init( setting );
    });
    
    this.dividerIds();
    
  },
  
  methods: {
    
    // Mutate a prop in children or items where "location" matches input "itemKey"
    mutateChildren: function( itemKey, propKey, value ) {
      
      const children = _.filter(this.settings, { parent: itemKey });
      _.each( children, function( child ) {
        child[ propKey ] = value;
      });
      
    },
    
    dividerIds: function() {
      
      const dividerStr = 'divider';
      const dividers = _.filter( this.settings, { type: dividerStr });
      _.each(dividers, function( divider, index ) {
        divider.label = dividerStr +'-'+ index;
      });
      
    },
    
    openInfo( current ) {
      _.each( this.settings, ( setting ) => {
        
        const clicked = current.label === setting.label;
        setting.infoOpen = clicked ? !setting.infoOpen : false;
        
      });
    },
  }
  
};

const _hoisted_1$1 = { class: "tabs" };
const _hoisted_2$1 = {
  key: 0,
  class: "settings-wrapper"
};
const _hoisted_3$1 = {
  key: 0,
  class: "heading"
};
const _hoisted_4$1 = {
  key: 1,
  class: "divider"
};
const _hoisted_5$1 = {
  key: 2,
  class: "inner-wrapper"
};
const _hoisted_6$1 = { class: "row-wrapper" };
const _hoisted_7 = ["checked", "onChange", "disabled"];
const _hoisted_8 = { class: "label-text" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = {
  key: 1,
  class: "shortcuts-wrapper"
};

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_fa6_solid_circle_question = __unplugin_components_0$1;
  const _component_gallery_modal = __unplugin_components_1$c;

  return (openBlock(), createBlock(_component_gallery_modal, {
    class: "bookdetails-settings",
    onCloseModal: _cache[2] || (_cache[2] = $event => (_ctx.$store.commit('prop', { key: 'bookDetailSettingsOpen', value: !_ctx.store.bookDetailSettingsOpen })))
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$1, [
        createBaseVNode("h3", {
          onClick: _cache[0] || (_cache[0] = $event => (_ctx.showSettings = true)),
          class: normalizeClass({ active: _ctx.showSettings })
        }, "Settings", 2),
        createBaseVNode("h3", {
          onClick: _cache[1] || (_cache[1] = $event => (_ctx.showSettings = false)),
          class: normalizeClass({ active: !_ctx.showSettings })
        }, "Shortcuts", 2)
      ]),
      createBaseVNode("div", null, [
        (_ctx.showSettings)
          ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
              _cache[4] || (_cache[4] = createBaseVNode("div", { class: "settings-info" }, " Your browser will remember these settings! ", -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.settings, (setting) => {
                return (openBlock(), createElementBlock("div", {
                  class: normalizeClass(["setting", { disabled: !setting.enabled }]),
                  key: setting.label
                }, [
                  (setting.type === 'heading')
                    ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                        createBaseVNode("h3", null, toDisplayString(setting.label), 1)
                      ]))
                    : (setting.type === 'divider')
                      ? (openBlock(), createElementBlock("div", _hoisted_4$1))
                      : (openBlock(), createElementBlock("div", _hoisted_5$1, [
                          createBaseVNode("div", _hoisted_6$1, [
                            createBaseVNode("label", null, [
                              createBaseVNode("input", {
                                type: "checkbox",
                                checked: setting.value,
                                onChange: setting.event,
                                disabled: !setting.enabled
                              }, null, 40, _hoisted_7),
                              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "visual-checkbox" }, [
                                createBaseVNode("div", { class: "switch" })
                              ], -1)),
                              createBaseVNode("div", _hoisted_8, [
                                createBaseVNode("span", null, toDisplayString(setting.label), 1)
                              ])
                            ]),
                            (setting.info)
                              ? (openBlock(), createElementBlock("div", {
                                  key: 0,
                                  class: normalizeClass(["more-info-icon", { open: setting.infoOpen }]),
                                  onClick: $event => ($options.openInfo( setting ))
                                }, [
                                  createVNode(_component_fa6_solid_circle_question)
                                ], 10, _hoisted_9))
                              : createCommentVNode("", true)
                          ]),
                          (setting.infoOpen)
                            ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: "setting-info",
                                innerHTML: setting.info
                              }, null, 8, _hoisted_10))
                            : createCommentVNode("", true)
                        ]))
                ], 2))
              }), 128))
            ]))
          : (openBlock(), createElementBlock("div", _hoisted_11, [...(_cache[5] || (_cache[5] = [
              createBaseVNode("h3", null, "Desktop", -1),
              createBaseVNode("table", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", null, "Description"),
                  createBaseVNode("th", null, "Shortcut")
                ]),
                createBaseVNode("tr", null, [
                  createBaseVNode("td", null, "Close"),
                  createBaseVNode("td", null, "Esc")
                ]),
                createBaseVNode("tr", null, [
                  createBaseVNode("td", null, "Open adjacent book"),
                  createBaseVNode("td", null, "Arrow Keys")
                ]),
                createBaseVNode("tr", null, [
                  createBaseVNode("td", null, "Open adjacent book"),
                  createBaseVNode("td", null, "TAB & Shift+TAB")
                ])
              ], -1),
              createBaseVNode("h3", null, "Mobile", -1),
              createBaseVNode("table", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", null, "Description"),
                  createBaseVNode("th", null, "Shortcut")
                ]),
                createBaseVNode("tr", null, [
                  createBaseVNode("td", null, "Make infobox and summary change places"),
                  createBaseVNode("td", null, "Swipe left or right")
                ])
              ], -1)
            ]))]))
      ])
    ]),
    _: 1
  }))
}
const __unplugin_components_0 = /*#__PURE__*/_export_sfc$1(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-fe046e34"]]);

const prepCategoriesSubPage = {
  mixins: [slugify],
  methods: {
    prepCategoriesSubPage: function(book) {
      if (this.$route.name === "category") {
        
        const vue = this;
        const category = {
          parent: this.$route.params.parent,
          child: this.$route.params.child,
          book: this.$route.params.query
        };
        
        let categoryBooks = _.filter( this.subPageSource.collection, function( book ) {
          if ( book.categories ) {
            const cat = book.categories[0] ? vue.slugify( book.categories[0].name ) : false;
            const kitten = book.categories[1] ? vue.slugify( book.categories[1].name ) : false;
            if ( cat && kitten && (category.parent === cat && category.child === kitten) ) {  return true; }
            else if ( cat && (category.parent === cat && !category.child) ) { return true; }
          }
        });
        
        // Set page title
        if ( categoryBooks && (category.parent || category.child)  ) {
          const parentCategoryName = _.get(categoryBooks, '0.categories.0.name');
          const childCategoryName = _.get(categoryBooks, '0.categories.1.name');
          if ( parentCategoryName ) this.pageTitle = this.$store.commit('prop', { key: 'pageTitle', value: parentCategoryName });
          if ( childCategoryName && category.child ) this.$store.commit('prop', { key: 'pageSubTitle', value: childCategoryName });
          else if ( this.$route.query.tagTitle ) this.$store.commit('prop', { key: 'pageSubTitle', value: this.$route.query.tagTitle });
        }
        
        // Just thinking about things... 
        // this.getTags( categoryBooks );

        // Init arrays
        this.$store.commit("prop", { key: 'pageCollection', value: categoryBooks });
        this.collectionSource = 'pageCollection';
        
      }
    },
    // getTags: function( books ) {
      
    //   let allTags = _.filter( books, 'tags');
    //   allTags = _.map( allTags, 'tags');
    //   allTags = _.flatten( allTags );
    //   if (_.isEmpty( allTags ) ) allTags = null;
    //   else { allTags = _.union(allTags); }
      
    //   console.log( allTags )
      
    // },
  }
};

const prepCollectionsSubPage = {
  mixins: [slugify],
  methods: {
    prepCollectionsSubPage: function(book) {
      
      if (this.$route.name === "collection") {
        let collectionID = this.$route.params.collection;
        let collection = _.find( this.$store.state.library.collections, { id: collectionID });
        if ( collection ) {
          
          let collectionBooks = _.filter( this.$store.state.library.books, function( book ) {
            return _.includes( collection.books, book.asin );
          });
          
          // Set page title
          if ( collection.title        ) this.$store.commit('prop', { key: 'pageTitle',    value: collection.title });
          if ( collection.description  ) this.$store.commit('prop', { key: 'pageSubTitle', value: collection.description });
          
          // Init arrays
          this.$store.commit("prop", { key: 'pageCollection', value: collectionBooks });
          this.collectionSource = 'pageCollection';
          
        }
        
      }
    }
  }
};

const prepSeriesSubPage = {
  methods: {
    prepSeriesSubPage: function() {
      
      if (this.$route.name === "series") {
        
        
        const seriesASIN = this.$route.params.series;
        const series = _.find( this.$store.state.library.series, { asin: seriesASIN });
        const seriesHasBooks = series && series.books && series.books.length > 0 && this.subPageSource.name == 'library';
        
        if ( seriesHasBooks ) {
          // Add book number sorting + activate sort values
          this.$store.commit('addListRenderingOpts', { 
            listName: 'sort', 
            option: { active: false,  current: false, key: 'seriesOrder', label: 'Series order', type: 'sort', tippy: "The infinite symbol (∞) means the book doesn't have a number" },
            activate: (this.$route.query.sort && this.$route.query.sort !== 'seriesOrder') ? false : true,
            sortValues: true,
            splice: 3,
          });
          
          
          this.$store.commit('addListRenderingOpts', { 
            listName: 'filter', 
            option: {
              type: 'divider',
              key: 'divider-series-filters'
            },
            splice: 3,
          });
          
          const seriesFilters = this.$store.state.sticky.seriesFilters;
          
          const routeFilters = (this.$route.query.filterExtras || '').split(',');
          
          this.$store.commit('addListRenderingOpts', { 
            listName: 'filter', 
            option: {
              active: _.includes( routeFilters, 'notInLibrary') || seriesFilters.notInLibrary,
              type: 'filterExtras',
              label: 'Not In Library',
              key: 'notInLibrary',
              group: 'filterExtras',
              condition: function(book) {
                return _.get( book, 'notInLibrary');
              },
              tippy: `This filter is persistent: if you open the gallery later or when you open another series sub page, this setting will carry over.`,
            },
            splice: 3,
          });
          
          this.$store.commit('addListRenderingOpts', { 
            listName: 'filter', 
            option: {
              active: _.includes( routeFilters, 'inLibrary') || seriesFilters.inLibrary,
              type: 'filterExtras',
              label: 'In Library',
              key: 'inLibrary',
              group: 'filterExtras',
              condition: function(book) {
                return !_.get( book, 'notInLibrary');
              },
              tippy: `This filter is persistent: if you open the gallery later or when you open another series sub page, this setting will carry over.`,
            },
            splice: 3,
          });
          // this.$store.commit('addListRenderingOpts', { 
          //   listName: 'filter', 
          //   option: {
          //     active: true,
          //     type: 'filterExtras',
          //     label: 'All in series',
          //     key: 'all-in-series',
          //     group: 'filterExtras',
          //     condition: function(book) {
          //       return true;
          //     }
          //   },
          //   splice: 3,
          // });
          
        }
        else {
          this.$store.commit("updateListRenderingOpts", {
            listName: 'sort',
            key: 'bookNumbers',
            active: false,
            sortValues: true,
          });
        }
        
        // Build series sub page array         
        let books = [];
        if ( seriesHasBooks ) {
          
          const allBooks = _.get(series, 'allBooks');
          const seriesBooks = _.get(series, 'books');
          
          let fakeAdded_counter = 0;
          books = _.map(allBooks, ( book ) => {
            
            ++fakeAdded_counter;
            
            const inLibrary = _.includes( seriesBooks, book.asin ) || !book.notInLibrary;
            const notInLibrary =  !inLibrary;
            
            // NOT in library
            if ( notInLibrary ) {
              
              const notInLib_book = _.merge({
                added: fakeAdded_counter,
                series: [
                  {
                    asin: series.asin,
                    name: series.name,
                    bookNumbers: book.bookNumbers,
                  }
                ]
              }, book);
              
              if ( !notInLib_book.asin ) notInLib_book.asin = series.asin + '-' + fakeAdded_counter + '-temp-asin';
              
              return notInLib_book;
            }
            // IN library
            else if ( inLibrary ) {
              
              let b =  _.find( this.subPageSource.collection, { asin: book.asin });
                  b = _.cloneDeep( b );
                  
              b.added = fakeAdded_counter;
              
              return b;
            }
            
          });
          
          // let books = _.filter( this.subPageSource.collection, function( book ) {
          //   return _.includes( series.books, book.asin );
          // });
        }
        else {
          books = _.filter( this.subPageSource.collection, function( book ) {
            return _.find( book.series, { asin: seriesASIN });
          });
        }
        
        
        // Set page title
        if ( books.length > 0 ) {
          
          // This is a bit weird just because like why aren't I just fetching a property called
          // series.title or series.name or something... But the point of this is to cater for
          // multiple situations...
          let title = null;
          _.each( books, ( book ) => {
            const titleSeries = _.find( _.get(book, 'series'), ( series ) => {
              series = series || {};
              return seriesASIN === series.asin && !!series.name;
            });
            if ( titleSeries ) {
              title = titleSeries.name;
              return false;
            }
          });
          
          if ( title ) this.$store.commit('prop', { key: 'pageTitle', value: title });
          if ( !seriesHasBooks ) this.$store.commit('prop', { key: 'pageSubTitle', value: "Couldn't find series order: using number sort" });
          
        }
        
        // Init arrays
        this.$store.commit("prop", { key: 'pageCollection', value: books });
        this.collectionSource = 'pageCollection';
        
      }
    }
  }
};

const prepNarratorsSubPage = {
  mixins: [slugify],
  methods: {
    prepNarratorsSubPage: function() {
      const vue = this;
      if (this.$route.name === "narrator") {
        
        const narratorSlug = this.$route.params.narrator;
        
        // Build narrators sub page array 
        let books = _.filter( this.subPageSource.collection, function( book ) {
          if ( book.narrators ) return _.find(book.narrators, function( narrator ) { return vue.slugify(narrator.name) === narratorSlug;  });
        });
        
        // Set page title
        const narrators = _.get(books, '0.narrators');
        const narrator = _.find(narrators, ( narrator ) => { return this.slugify(narrator.name) === narratorSlug;  });
        this.$store.commit('prop', { key: 'pageTitle', value:  _.get(narrator, 'name') });
        
        // Init arrays
        this.$store.commit("prop", { key: 'pageCollection', value: books });
        this.collectionSource = 'pageCollection';
        
      }
    }
  }
};

const prepAuthorsSubPage = {
  methods: {
    prepAuthorsSubPage: function() {
      if (this.$route.name === "author") {
        
        const authorUrl = this.$route.params.author;
        
        // Build author sub page array 
        let books = _.filter( this.subPageSource.collection, function( book ) {
          if ( book.authors ) return _.find(book.authors, function( author ) { return author.url === authorUrl; });
        });
        
        // Set page title
        const authors = _.get(books, '0.authors');
        const author = _.find(authors, ( author ) => { return author.url === authorUrl;  });
        this.$store.commit('prop', { key: 'pageTitle', value:  _.get(author, 'name') });
        
        // Init arrays
        this.$store.commit("prop", { key: 'pageCollection', value: books });
        this.collectionSource = 'pageCollection';
        
      }
    }
  }
};

const prepPublishersSubPage = {
  mixins: [slugify],
  methods: {
    prepPublishersSubPage: function() {
      const vue = this;
      if (this.$route.name === "publisher") {
        
        const publisherSlug = this.$route.params.publisher;
        
        // Build publishers sub page array 
        let books = _.filter( this.subPageSource.collection, function( book ) {
          if ( book.publishers ) return _.find(book.publishers, function( publisher ) { return vue.slugify(publisher.name) === publisherSlug;  });
        });
        
        // Set page title
        if ( books.length > 0 ) {
          const publisher = _.find(books[0].publishers, function( publisher ) { return vue.slugify(publisher.name) === publisherSlug;  });
          if ( publisher ) {
            // this.pageTitle = publisher.name;
            if ( publisher.name ) this.$store.commit('prop', { key: 'pageTitle', value: publisher.name });
          }
        }
        
        // Init arrays
        this.$store.commit("prop", { key: 'pageCollection', value: books });
        this.collectionSource = 'pageCollection';
        
      }
    }
  }
};

const prepPodcasts = {
  mixins: [slugify],
  methods: {
    prepPodcasts: function(book) {
      if ( this.$route.name === "podcasts" ) {
        
        // Init arrays
        this.$store.commit("prop", { key: 'pageCollection', value: this.$store.getters.podcasts });
        this.collectionSource = 'pageCollection';
        
      }
    },
    
  }
};

const prepWishlist = {
  mixins: [slugify],
  methods: {
    prepWishlist: function(book) {
      if ( this.$route.name === "wishlist" ) {
        
        // Init arrays
        this.$store.commit("prop", { key: 'pageCollection', value: this.$store.state.library.wishlist });
        this.collectionSource = 'pageCollection';
        
      }
    }
  }
};

const galleryListRenderingOpts = {
  methods: {

    updateListRenderingOptions: function() {
      
      const vue = this;
      let list = {
        scope: [{
            active: true,
            key: 'title',
            // weight: 2,
            weight: 15,
          },
          {
            active: true,
            key: 'authors.name',
            // weight: .9,
            weight: 5,
          },
          {
            active: true,
            key: 'narrators.name',
            // weight: .9,
            weight: 5,
          },
          {
            active: true,
            key: 'series.name',
            // weight: .8,
            weight: 10,
          },
          {
            active: false,
            key: 'categories.name',
            // weight: .2,
            weight: 1,
          },
          {
            active: false,
            key: 'tags.name',
            // weight: .2,
            weight: 1,
          },
          {
            active: false,
            key: 'publishers.name',
            // weight: .2,
            weight: 1,
          },
          {
            active: false,
            key: 'blurb',
            // weight: .5,
            weight: 1,
          },
          {
            active: false,
            key: 'summary',
            // weight: .4,
            weight: 1,
          },
          {
            active: true,
            key: 'asin',
            weight: 20,
          },
        ],
        filter: [{
            active: true,
            type: 'filter',
            label: 'Not started',
            key: 'notStarted',
            condition: function(book) {
              return !book.progress;
            }
          },
          {
            active: true,
            type: 'filter',
            label: 'Started',
            key: 'started',
            condition: function(book) {
              return book.progress && !book.progress.toLowerCase().match('finished') ? true : false;
            },
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
          },
          {
            active: true,
            type: 'filter',
            label: 'Finished',
            key: 'finished',
            condition: function(book) {
              return book.progress && book.progress.toLowerCase().match('finished') ? true : false;
            },
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
          },

          // { type: 'divider', key: 'divider1' },

          // { active: true,  type: 'filterExtras', label: 'All',          key: 'all',          group: 'filterExtras', condition: function( book ) { return book.asin;            } },
          {
            onlyWishlist: true,
            active: false,
            type: 'filterExtras',
            label: 'On sale',
            key: 'onsale',
            group: 'filterExtras',
            condition: function(book) {
              return book.onSale;
            }
          },
          
          {
            onlyWishlist: true,
            active: false,
            type: 'filterExtras',
            label: 'Price',
            key: 'price',
            group: 'filterExtras',
            range: true,
            rangeMinDist: 0,
            rangeSuffix: '',
            rangeInterval: 1,
            rangeMin: function() {
              let books = vue.$store.getters.collectionSource;
              const min = _.minBy(books, 'price');
              return min ? Math.floor(min.price) : -1;
            },
            rangeMax: function() {
              let books = vue.$store.getters.collectionSource;
              const max = _.maxBy(books, 'price');
              return max ? Math.ceil(max.price) : -1;
            },
            condition: function(book) {
              if ( book.price ) {
                let min = this.range[0];
                let max = this.range[1];
                return book.price >= min && book.price <= max;
              }
            },
          },

          { type: 'divider', key: 'divider1', onlyWishlist: true, },

          {
            excludeFromSeriesSubPage: true,
            active: false,
            type: 'filterExtras',
            label: 'In series',
            key: 'inseries',
            group: 'filterExtras',
            condition: function(book) {
              return book.series;
            }
          },
          {
            excludeFromSeriesSubPage: true,
            active: false,
            type: 'filterExtras',
            label: 'Not in series',
            key: 'not-inseries',
            group: 'filterExtras',
            condition: function(book) {
              return !book.series;
            }
          },
          {
            excludeFromSeriesSubPage: true,
            type: 'divider',
            key: 'divider1.1'
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Not from plus catalog',
            key: 'not-from-plus-catalog',
            group: 'filterExtras',
            condition: function(book) {
              return !book.fromPlusCatalog;
            }
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Plus catalog: Available',
            key: 'plus-catalog-available',
            group: 'filterExtras',
            condition: function(book) {
              return book.fromPlusCatalog && !book.unavailable;
            },
            tippy: "It is possible for this status to change after last gallery update..."
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Plus catalog: Unavailable',
            excludeFromWishlist: true,
            key: 'plus-catalog-unavailable',
            group: 'filterExtras',
            condition: function(book) {
              return book.fromPlusCatalog && book.unavailable;
            },
            tippy: "Books that are from the plus catalog, but they are locked. Conditions: a book left the plus catalog or inactive membership."
          },
          {
            type: 'divider',
            key: 'divider1.3.1',
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Podcast episodes: include',
            key: 'podcasts-inlcude',
            group: 'filterExtras',
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            condition: function(book) {
              return _.get(book, "format") === 'Podcast' && !_.get(book, "podcastParent");
            }
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Podcast episodes: exclude',
            key: 'podcasts-exclude',
            group: 'filterExtras',
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            condition: function(book) {
              
              return _.get(book, "format") !== 'Podcast' && !_.get(book, "podcastParent");
            }
          },
          {
            type: 'divider',
            key: 'divider1.3'
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Store page available',
            key: 'store-page-available',
            group: 'filterExtras',
            condition: function(book) {
              return !(book.storePageChanged || book.storePageMissing);
            }
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Store page unavailable',
            key: 'store-page-unavailable',
            group: 'filterExtras',
            condition: function(book) {
              return book.storePageChanged || book.storePageMissing;
            },
            tippy: "Store page has been removed or changed after it was added."
          },
          {
            type: 'divider',
            key: 'divider1.4',
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Favorites: include',
            key: 'favorites',
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            group: 'filterExtras',
            condition: function(book) {
              return book.favorite;
            }
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Favorites: exclude',
            key: 'favorites-not',
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            group: 'filterExtras',
            condition: function(book) {
              return !book.favorite;
            }
          },
          
          {
            type: 'divider',
            key: 'divider1.4.1',
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Books I have rated',
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            key: 'rated-by-me',
            group: 'filterExtras',
            condition: function(book) {
              return book.myRating;
            },
          },
          {
            active: false,
            type: 'filterExtras',
            label: "Books I haven't rated",
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            key: 'not-rated-by-me',
            group: 'filterExtras',
            condition: function(book) {
              return !book.myRating;
            },
          },
          {
            active: false,
            type: 'filterExtras',
            label: "Books I have reviewed",
            key: 'my-review',
            group: 'filterExtras',
            condition: function(book) {
              return _.find( vue.$store.state.library.userReviews, { asin: book.asin });
            }
          },
          
          {
            type: 'divider',
            key: 'divider1.4.2',
            excludeFromWishlist: true
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'New books',
            excludeFromWishlist: true,
            key: 'new-books',
            group: 'filterExtras',
            condition: function(book) {
              return book.isNew;
            },
            tippy: "Most recent additions."
          },

          {
            type: 'divider',
            key: 'divider2.0'
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Full cast: include',
            key: 'full-cast-include',
            group: 'filterExtras',
            condition: function(book) {
              return _.find(book.narrators, function(narrator) {
                return narrator.name.match(/full cast/im);
              });
            }
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Full cast: exclude',
            key: 'full-cast-exclude',
            group: 'filterExtras',
            condition: function(book) {
              return !_.find(book.narrators, function(narrator) {
                return narrator.name.match(/full cast/im);
              });
            }
          },
          {
            type: 'divider',
            key: 'divider1.9'
          },
          {
            active: false,
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            type: 'filterExtras',
            label: 'Whisperync: owned',
            key: 'whispersync-owned',
            group: 'filterExtras',
            condition: function(book) {
              return book.whispersync === 'owned';
            }
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Whispersync: available',
            excludeFromPodcasts: true,
            key: 'whispersync-available',
            group: 'filterExtras',
            condition: function(book) {
              return book.whispersync === 'available';
            }
          },
          {
            active: false,
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            type: 'filterExtras',
            label: 'Whisperync: available + owned',
            key: 'whispersync-owned-or-available',
            group: 'filterExtras',
            condition: function(book) {
              return book.whispersync;
            }
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Whispersync: unavailable',
            excludeFromPodcasts: true,
            key: 'whispersync-false',
            group: 'filterExtras',
            tippy: 'Either unavailable or unkown...',
            condition: function(book) {
              return !book.whispersync;
            }
          },
          {
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            type: 'divider',
            key: 'divider-archived',
          },
          
          {
            active: false,
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            type: 'filterExtras',
            label: 'Archived',
            key: 'archived',
            group: 'filterExtras',
            condition: function(book) {
              return book.archived;
            }
          },
          {
            active: false,
            excludeFromWishlist: true,
            excludeFromPodcasts: true,
            type: 'filterExtras',
            label: 'Not archived',
            key: 'not-archived',
            group: 'filterExtras',
            condition: function(book) {
              return !book.archived;
            }
          },
          
          {
            excludeFromPodcasts: true,
            type: 'divider',
            key: 'divider2.2'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Length',
            key: 'length',
            group: 'filterExtras',
            range: true,
            rangeMinDist: 1,
            rangeSuffix: 'h',
            rangeMin: function() {
              return 0;
            },
            rangeMax: function() {
              let books = vue.$store.getters.collectionSource;
              let longest = _.maxBy(books, function(book) {
                return vue.timeStringToSeconds(book.length);
              });
              // seconds to minutes + rounded UP
              return longest ? Math.ceil(vue.timeStringToSeconds(longest.length) / 3600) : 0;
            },
            condition: function(book) {
              if (book.length) {
                let min = this.range[0];
                let max = this.range[1];
                let length = vue.timeStringToSeconds(book.length) / 3600;
                return length >= min && length <= max;
                // return Math.ceil(length) >= min && Math.floor(length) <= max; 
              }
            },
            // Good idea, but I think it made it too restrictive and 0-10 was a little tightly packed.
            // rangeMarks: function( max ) {
            //   return lengthMarksCalc( max );
            // } 
          },

          {
            type: 'divider',
            key: 'divider2.1'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Narrators',
            key: 'narrators',
            group: 'filterExtras',
            range: true,
            rangeMinDist: 0,
            rangeSuffix: '',
            rangeMin: function() {
              return 1;
            },
            rangeMax: function() {
              let books = vue.$store.getters.collectionSource;
              let most = _.maxBy(books, function(book) {
                let narrators = _.filter(book.narrators, function(narrator) {
                  return narrator.name && !narrator.name.match('full cast');
                });
                if (!narrators.length && book.narrators && book.narrators.length) narrators = book.narrators; // If there's one narrator and it's "full cast", consider that as one...
                return (book.narrators) ? book.narrators.length : 0;
              });
              return most ? most.narrators.length : 0;
            },
            condition: function(book) {
              if (book.narrators) {
                let hasFullCast = _.find(book.narrators, function(narrator) {
                  return narrator.name.match('full cast')
                });
                let min = this.range[0];
                let max = this.range[1];
                let length = book.narrators.length;
                if (hasFullCast && length === 1) {
                  length = max;
                  return length >= min && length <= max;
                } else {
                  return length >= min && length <= max;
                }
              }
            }
          },

          {
            type: 'divider',
            key: 'divider3',
            excludeFromWishlist: true,
          },

          {
            active: false,
            type: 'filterExtras',
            excludeFromWishlist: true,
            label: 'books in series',
            key: 'booksinseries',
            group: 'filterExtras',
            range: true,
            rangeMinDist: 0,
            rangeSuffix: '',
            tippy: 'Number of owned books in series',
            rangeMin: function() {
              return 1;
            },
            rangeMax: function() {
              let books = _.filter(vue.$store.getters.collectionSource, 'series');

              let most = 1;
              _.each(books, function(book) {
                let bigBoe = _.maxBy(book.series, function(series) {
                  let foundSeries = _.find(vue.$store.state.library.series, {
                    asin: series.asin
                  });
                  if (foundSeries && foundSeries.books) return foundSeries.books.length;
                });
                if (bigBoe) {
                  const bigBoeLength = _.find(vue.$store.state.library.series, {
                    asin: bigBoe.asin
                  }).books.length;
                  if (most < bigBoeLength) most = bigBoeLength;
                }
              });

              return most;
            },
            condition: function(book) {
              if (book.series) {

                let min = this.range[0];
                let max = this.range[1];

                let result = false;
                _.each(book.series, function(cSeries) {
                  const series = _.find(vue.$store.state.library.series, {
                    asin: cSeries.asin
                  });
                  if (series) {
                    if (series.books.length >= min && series.books.length <= max) {
                      result = true;
                      return false;
                    }
                  }
                });

                return result;

              }
            }
          },

          {
            type: 'divider',
            key: 'divider4'
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Average rating',
            key: 'rating',
            group: 'filterExtras',
            range: true,
            rangeMinDist: 0,
            rangeSuffix: '',
            rangeMin: function() {
              let books = vue.$store.getters.collectionSource;
              let smallestRating = _.minBy(books, function(book) {
                if (book.rating) return parseFloat(book.rating);
              });
              // return smallestRating ? Math.floor(parseFloat(smallestRating.rating)) : 0; 
              return smallestRating ? parseFloat(smallestRating.rating) : 0;
            },
            rangeMax: function() {
              let books = vue.$store.getters.collectionSource;
              let biggestRating = _.maxBy(books, function(book) {
                if (book.rating) return parseFloat(book.rating);
              });
              // return biggestRating ? Math.ceil(parseFloat(biggestRating.rating)) : 0; 
              return biggestRating ? parseFloat(biggestRating.rating) : 0;
            },
            condition: function(book) {
              if (book.rating) {
                let min = this.range[0];
                let max = this.range[1];
                let rating = parseFloat(book.rating);
                // return Math.floor(rating) >= min && Math.ceil(rating) <= max; 
                return rating >= min && rating <= max;
              }
            },
            rangeInterval: .1,
          },

          {
            type: 'divider',
            key: 'divider5.2'
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Ratings',
            key: 'number-of-ratings',
            group: 'filterExtras',
            range: true,
            rangeMinDist: 1,
            rangeSuffix: '',
            rangeMin: function() {
              // return 1; 

              let books = vue.$store.getters.collectionSource;
              let bigBoe = _.minBy(books, function(book) {
                if (book.ratings) return parseFloat(book.ratings)
              });
              // seconds to minutes + rounded UP
              return bigBoe ? bigBoe.ratings : 0;

            },
            rangeMax: function() {
              let books = vue.$store.getters.collectionSource;
              let bigBoe = _.maxBy(books, function(book) {
                if (book.ratings) return parseFloat(book.ratings)
              });
              // seconds to minutes + rounded UP
              return bigBoe ? bigBoe.ratings : 0;
            },
            condition: function(book) {
              if (book.ratings) {
                let min = this.range[0];
                let max = this.range[1];
                let ratings = parseFloat(book.ratings);
                return ratings >= min && ratings <= max;
              }
            }
          },

          {
            type: 'divider',
            key: 'divider5',
            excludeFromWishlist: true
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'My rating',
            excludeFromWishlist: true,
            key: 'myrating',
            group: 'filterExtras',
            range: true,
            rangeMinDist: 0,
            rangeSuffix: '',
            rangeInterval: 1,
            rangeMarks: function( range ) {
              return true;
            }, 
            rangeMin: function() {
              let books = vue.$store.getters.collectionSource;
              let smallestRating = _.minBy(books, function(book) {
                if (book.myRating) return parseFloat(book.myRating);
              });
              return smallestRating ? parseFloat(smallestRating.myRating) : 0;
            },
            rangeMax: function() {
              let books = vue.$store.getters.collectionSource;
              let biggestRating = _.maxBy(books, function(book) {
                if (book.myRating) return parseFloat(book.myRating);
              });
              return biggestRating ? parseFloat(biggestRating.myRating) : 0;
            },
            condition: function(book) {
              if (book.myRating) {
                let min = this.range[0];
                let max = this.range[1];
                let rating = parseFloat(book.myRating);
                return rating >= min && rating <= max;
              }
            },
            tooltipFormatter: function( val ) {
              switch ( val ) {
                case 1:
                  return val+' (Not for me)';
                case 2:
                  return val+' (It’s okay)';
                case 3:
                  return val+' (Pretty good)';
                case 4:
                  return val+' (It’s great)';
                case 5:
                  return val+' (I love it)';
                default: 
                  return 0;
              }
            },
          },

          {
            type: 'divider',
            key: 'divider5.1'
          },
          {
            active: false,
            type: 'filterExtras',
            label: 'Added',
            key: 'added',
            group: 'filterExtras',
            range: true,
            rangeMinDist: 1,
            rangeSuffix: '',
            rangeMin: function() {
              let books = vue.$store.getters.collectionSource;
              let smalled = _.minBy(books, function(book) {
                if (book.added) return parseFloat(book.added);
              });
              return smalled ? parseFloat(smalled.added) : 0;
            },
            rangeMax: function() {
              let books = vue.$store.getters.collectionSource;
              let biggest = _.maxBy(books, function(book) {
                if (book.added) return parseFloat(book.added);
              });
              return biggest ? parseFloat(biggest.added) : 0;
            },
            condition: function(book) {
              if (book.added) {
                let min = this.range[0];
                let max = this.range[1];
                let added = parseFloat(book.added);
                return added >= min && added <= max;
              }
            },
            rangeInterval: 1,
            tippy: "Low number = old book <br> High number = new book <br><br> For example: if you pick the range 1-10 you get 10 of the oldest books based on when they were added."
          },

          {
            type: 'divider',
            key: 'divider8.8'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Authors',
            key: 'authors-by-name',
            group: 'filterExtras',
            dropdownOpts: function(type) {
              let allTags = [];
              _.each(vue.$store.getters.collectionSource, function(book) {
                if (book.authors) allTags.push(_.map(book.authors, 'name'));
              });
              allTags = _.union(_.flatten(allTags)).sort();
              return allTags;
            },
            value: [],
            condition: function(book) {
              if ( book.authors ) {
                let bookTags = _.map(book.authors, 'name');
                let selectedTags = this.value;
                if ( selectedTags.length > 0 ) {
                  let found = false;
                  _.each(selectedTags, function(selectedTag) {
                    if (_.includes(bookTags, selectedTag)) {
                      found = true;
                      return false;
                    }
                  });
                  return found;
                }
              }
            }
          },
          {
            type: 'divider',
            key: 'divider8.9'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Narrators',
            key: 'narrators-by-name',
            group: 'filterExtras',
            dropdownOpts: function(type) {
              let allTags = [];
              _.each(vue.$store.getters.collectionSource, function(book) {
                if (book.narrators) allTags.push(_.map(book.narrators, 'name'));
              });
              allTags = _.union(_.flatten(allTags)).sort();
              return allTags;
            },
            value: [],
            condition: function(book) {
              if ( book.narrators ) {
                let bookTags = _.map(book.narrators, 'name');
                let selectedTags = this.value;
                if ( selectedTags.length > 0 ) {
                  let found = false;
                  _.each(selectedTags, function(selectedTag) {
                    if (_.includes(bookTags, selectedTag)) {
                      found = true;
                      return false;
                    }
                  });
                  return found;
                }
              }
            }
          },

          {
            type: 'divider',
            key: 'divider9.0'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Tags',
            key: 'tags',
            group: 'filterExtras',
            dropdownOpts: function(type) {
              let allTags = [];
              _.each(vue.$store.getters.collectionSource, function(book) {
                if (book.tags) allTags.push(_.map(book.tags, 'name'));
              });
              allTags = _.union(_.flatten(allTags)).sort();
              return allTags;
            },
            value: [],
            condition: function(book) {
              if ( book.tags ) {
                let bookTags = _.map(book.tags, 'name');
                let selectedTags = this.value;
                if ( selectedTags.length > 0 ) {
                  let found = false;
                  _.each(selectedTags, function(selectedTag) {
                    if (_.includes(bookTags, selectedTag)) {
                      found = true;
                      return false;
                    }
                  });
                  return found;
                }
              }
            }
          },

          {
            type: 'divider',
            key: 'divider9.1'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Language',
            key: 'language',
            group: 'filterExtras',
            dropdownOpts: function(type) {
              let allTags = [];
              _.each(vue.$store.getters.collectionSource, function(book) {
                if (book.language) allTags.push(book.language);
              });
              allTags = _.union(allTags).sort();
              return allTags;
            },
            value: [],
            condition: function(book) {
              if ( book.language ) {
                let selectedTags = this.value;
                return _.includes(selectedTags, book.language);
              }
            }
          },

          // {
          //   type: 'divider',
          //   key: 'divider9.2'
          // },

          // {
          //   active: false,
          //   type: 'filterExtras',
          //   label: 'Parent category',
          //   key: 'parent-category',
          //   group: 'filterExtras',
          //   dropdownOpts: function(type) {
          //     let allTags = [];
          //     _.each(vue.$store.getters.collectionSource, function(book) {
          //       if (book.categories && book.categories[0]) allTags.push(book.categories[0].name);
          //     });
          //     allTags = _.union(allTags).sort();
          //     return allTags;
          //   },
          //   value: [],
          //   condition: function(book) {
          //     if ( book.categories && book.categories[0] ) {
          //       let selectedTags = this.value;
          //       return (book.categories && book.categories[0]) ? _.includes(selectedTags, book.categories[0].name) : false;
          //     }
          //   }
          // },

          // {
          //   type: 'divider',
          //   key: 'divider9.3'
          // },

          // {
          //   active: false,
          //   type: 'filterExtras',
          //   label: 'Child category',
          //   key: 'child-category',
          //   group: 'filterExtras',
          //   dropdownOpts: function(type) {
          //     let allTags = [];
          //     _.each(vue.$store.getters.collectionSource, function(book) {
          //       if (book.categories && book.categories[1]) allTags.push(book.categories[1].name);
          //     });
          //     allTags = _.union(allTags).sort();
          //     return allTags;
          //   },
          //   value: [],
          //   condition: function(book) {
          //     if ( book.categories && book.categories[1] ) {
          //       let selectedTags = this.value;
          //       return (book.categories && book.categories[1]) ? _.includes(selectedTags, book.categories[1].name) : false;
          //     }
          //   }
          // },

          {
            type: 'divider',
            key: 'divider9.4'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Series by name',
            key: 'series-by-name',
            group: 'filterExtras',
            dropdownOpts: function(type) {
              let allTags = [];
              _.each(vue.$store.getters.collectionSource, function(book) {
                if (book.series) allTags.push(_.map(book.series, 'name'));
              });
              allTags = _.union(_.flatten(allTags)).sort();
              return allTags;
            },
            value: [],
            condition: function(book) {
              if ( book.series ) {
                let bookTags = _.map(book.series, 'name');
                let selectedTags = this.value;
                if ( selectedTags.length > 0 ) {
                  let found = false;
                  _.each(selectedTags, function(selectedTag) {
                    if (_.includes(bookTags, selectedTag)) {
                      found = true;
                      return false;
                    }
                  });
                  return found;
                }
              }
            }
          },
          
          {
            type: 'divider',
            key: 'divider9.5'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Format',
            key: 'format',
            group: 'filterExtras',
            dropdownOpts: function(type) {
              let allTags = [];
              _.each(vue.$store.getters.collectionSource, function(book) {
                if (book.format) allTags.push( book.format );
              });
              allTags = _.union( allTags ).sort();
              return allTags;
            },
            value: [],
            condition: function(book) {
              if ( book.format ) {
                return book.format ? _.includes( this.value, book.format) : false;
              }
            }
          },
          
          {
            type: 'divider',
            key: 'divider9.6'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Publishers',
            key: 'publishers-by-name',
            group: 'filterExtras',
            dropdownOpts: function(type) {
              let allTags = [];
              _.each(vue.$store.getters.collectionSource, function(book) {
                if (book.publishers) allTags.push(_.map(book.publishers, 'name'));
              });
              allTags = _.union(_.flatten(allTags)).sort();
              return allTags;
            },
            value: [],
            condition: function(book) {
              if ( book.publishers ) {
                let bookTags = _.map(book.publishers, 'name');
                let selectedTags = this.value;
                if ( selectedTags.length > 0 ) {
                  let found = false;
                  _.each(selectedTags, function(selectedTag) {
                    if (_.includes(bookTags, selectedTag)) {
                      found = true;
                      return false;
                    }
                  });
                  return found;
                }
              }
            }
          },
          
          {
            type: 'divider',
            key: 'divider9.7'
          },

          {
            active: false,
            type: 'filterExtras',
            label: 'Collections',
            key: 'collections',
            group: 'filterExtras',
            excludeFromWishlist: true,
            dropdownTrackBy: 'valueProp',
            dropdownLabel: 'label',
            dropdownValueProp: 'valueProp',
            dropdownOpts: function(type) {
              if ( vue.$store.state.library.collections ) {
                let allTags = _.map( vue.$store.state.library.collections, function( collection ) {
                  return {
                    label: collection.title,
                    valueProp: collection.id,
                  };
                });
                // _.each(vue.$store.state.library.collections, function(book) {
                //   if (book.publishers) allTags.push(_.map(book.publishers, 'name'));
                // });
                return _.sortBy(allTags, 'title');
              }
              else { return []; }
            },
            value: [],
            condition: function( book ) {
              
              const selectedTags = _.get(this, 'value') || [];
              const collectionIds = _.get(book, 'collectionIds', []);
              const allCollections = _.get(vue.$store.state, 'library.collections', []);
              if ( selectedTags.length && collectionIds.length && allCollections.length ) {
                
                let ping = false;
                _.each(selectedTags, ( selected ) => {
                  if ( _.includes(book.collectionIds, selected) ) {
                    ping = true;
                    return false;
                  }
                });
                
                return ping;
                
              }
            }
          },

        ],
        sort: [{
            active: false,
            sticky: true,
            key: 'sortValues',
            label: 'Show sort values',
            type: 'sortExtras',
            tippy: "Shows the active sorter's value on top of the cover in the grid view."
          },
          {
            active: false,
            key: 'randomize',
            label: 'Randomize',
            type: 'sortExtras',
            tippy: "Sorting is ignored and the order is randomized."
          },
          
          // Just an idea...
          // {
          //   active: false,
          //   key: 'autofilternil',
          //   label: 'Auto filter nil',
          //   type: 'sortExtras',
          //   tippy: "If a sorting value is missing, it's automatically filtered out of the list."
          // },

          {
            type: 'divider',
            key: 'divider1'
          },
          // active: true = arrow down / descending
          {
            active: true,
            current: true,
            key: 'added',
            label: 'Added',
            type: 'sort',
            tippy: '<small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top'
          },
          {
            onlyWishlist: true,
            active: true,
            current: false,
            key: 'price',
            label: 'Price',
            type: 'sort',
          },
          {
            active: true,
            current: false,
            key: 'title',
            label: 'Title',
            type: 'sort'
          },
          {
            active: true,
            current: false,
            key: 'authors.name',
            label: 'Author',
            type: 'sort'
          },
          {
            active: true,
            current: false,
            key: 'narrators.name',
            label: 'Narrator',
            type: 'sort'
          },
          {
            active: true,
            current: false,
            key: 'narratorsNumber',
            label: 'Number of narrators',
            type: 'sort'
          },
          {
            active: false,
            current: false,
            key: 'length',
            label: 'Length',
            type: 'sort'
          },
          {
            active: true,
            current: false,
            key: 'series',
            label: 'Series',
            type: 'sort',
            tippy: 'Sorts books by the series name alphabetically.'
          },
          // { active: true , current: false, key: 'seriesNumber'  , label: 'Series length'          , type: 'sort' }, 

          {
            type: 'divider',
            key: 'divider2'
          },
          {
            active: false,
            current: false,
            key: 'releaseDate',
            label: 'Release date',
            type: 'sort'
          },
          {
            active: false,
            current: false,
            key: 'rating',
            label: 'Average rating',
            type: 'sort'
          },
          {
            active: false,
            current: false,
            key: 'ratings',
            label: 'Number of ratings',
            type: 'sort'
          },
          {
            active: false,
            current: false,
            key: 'myRating',
            label: 'My rating',
            type: 'sort',
            excludeFromWishlist: true
          },
          {
            active: true,
            current: false,
            key: 'publishers.name',
            label: 'Publishers',
            type: 'sort'
          },

          {
            type: 'divider',
            key: 'divider3'
          },
          {
            active: false,
            current: false,
            key: 'progress',
            label: 'Progress',
            type: 'sort',
            excludeFromWishlist: true
          },
          {
            active: false,
            current: false,
            key: 'favorite',
            label: 'Favorite',
            type: 'sort',
            excludeFromWishlist: true,
          },
          {
            active: true,
            current: false,
            key: 'categories',
            label: 'Categories',
            type: 'sort',
          },
          {
            active: true,
            current: false,
            key: 'tags.name',
            label: 'Tags',
            type: 'sort',
          },
          {
            active: false,
            current: false,
            key: 'isNew',
            label: 'New books',
            type: 'sort',
            excludeFromWishlist: true,
          },
          {
            active: false,
            current: false,
            key: 'archived',
            label: 'Archived',
            type: 'sort',
            excludeFromWishlist: true,
          },

          {
            type: 'divider',
            key: 'divider4',
          },
          {
            active: true,
            current: false,
            key: 'language',
            label: 'Language',
            type: 'sort'
          },
          {
            active: true,
            current: false,
            key: 'format',
            label: 'Format',
            type: 'sort'
          },
          {
            active: false,
            current: false,
            key: 'whispersync',
            label: 'Whispersync',
            type: 'sort',
          },
          {
            active: false,
            current: false,
            key: 'fromPlusCatalog',
            label: 'From plus catalog',
            type: 'sort'
          },
          {
            active: false,
            current: false,
            key: 'unavailable',
            label: 'Plus catalog: Unavailable',
            type: 'sort',
          },
          {
            active: false,
            current: false,
            key: 'downloaded',
            label: 'Downloaded',
            type: 'sort',
            excludeFromWishlist: true
          },

          {
            type: 'divider',
            key: 'divider5'
          },
          {
            active: false,
            current: false,
            key: 'storePageMissing',
            label: 'Store page missing',
            type: 'sort',
            tippy: 'The original store page could not be found. There may be a new store page that replaced it.'
          },
          {
            active: false,
            current: false,
            key: 'storePageChanged',
            label: 'Store page changed',
            type: 'sort',
            tippy: 'There is a store page that exists, but it is for a different version of the book.'
          },
          {
            active: false,
            current: false,
            key: 'isbn10',
            label: 'Isbn 10',
            type: 'sort',
            excludeFromWishlist: true
          },
          {
            active: false,
            current: false,
            key: 'isbn13',
            label: 'Isbn 13',
            type: 'sort',
            excludeFromWishlist: true
          },
          {
            active: true,
            current: false,
            key: 'bookNumbers',
            label: 'Book Numbers',
            type: 'sort',
            tippy: '<strong>This is only a simple number sort.</strong> <br> If you want the correct series order, as listed in Audible, check the series page in the top menu or the "my books in the series" button in book details. <br><br>Click any book cover (or row) to reveal book details. <br><br> The infinite symbol (∞) means the book is in a series but does not have a number.'
          },
        ],
      };
      
      this.removeArchived( list );
      
      // FIXME: thinking about adding a dropdown that allows sorting with A and showing value from B
      // For example, sort by "Added" and show "Author" as the 'sort value'
      // this.addSortValueDropdown( list );

      this.addExcludeDropdowns( list );
      
      
      // This should always be last, because it executes filters etc from url parameters...
      this.$setListRenderingOpts( list );

    },
    
    addExcludeDropdowns( list ) {
      
      let filters = list.filter;
      
      // Split the array in two
      const firstDropdown_index = _.findIndex( filters, 'dropdownOpts');
      filters =_.chunk( filters, firstDropdown_index-1 );
      const dropdowns = filters[1];
      
      // Remove dividers for now...
      _.remove( dropdowns, ( filter) => {
        return filter.type === 'divider';
      });
      
      const clonedDropdowns = _.cloneDeep( dropdowns );
      
      _.each( clonedDropdowns, ( dropdown ) => {
        dropdown.conditionOriginal = dropdown.condition; 
        dropdown.condition = function( book ) {
          return !dropdown.conditionOriginal( book );
        };
        dropdown.placeholder = 'Exclude...';
        // dropdown.label       = dropdown.label + ' — Exclude';
        dropdown.key         = dropdown.key + '-exclude';
        dropdown.exclude     = true;
      });
      
      // const clonedFilters = _.clone( filters );
      
      let zipper = _.zip( dropdowns, clonedDropdowns );
            
      _.each( zipper, ( node, index ) => {
        node.unshift({
          type: 'divider',
          key: 'divider-99999.' + index,
        });
      });
      
      zipper = _.flatten( zipper );
      filters[ 1 ] = zipper;
      list.filter = _.flatten( filters );
      
    },
    
    removeArchived: function( list ) {

      if ( !this.$store.state.library.collections ) return;
      
      let collections = this.$store.state.library.collections;
      let archive = collections ? _.find( collections, { id: '__ARCHIVE' }) : null;
      if ( !archive || archive.books.length < 1 ) {
        let removeArchiveKeys = ['archived', 'not-archived'];
        _.remove(list.filter, function( filter ) {
          return filter.key === 'divider-archived' || _.includes( removeArchiveKeys, filter.key );
        });
        _.remove(list.sort, function( sorter ) {
          return _.includes( removeArchiveKeys, sorter.key );
        });
      }
      
    },
    
    // addSortValueDropdown: function( list) {
      
    //   // Obviously this is not complete in any way... but...
    //   // FIXME: Make sure series/subpage sorter "bookNumbers" is moved
    //   // FIXME: Not sure why yet, but the options list's arrow is not getting a new position when this dropdown makes it wider....
      
    //   let vue = this;
    //   let newItem = {
    //     active: false,
    //     sticky: true,
    //     key: 'sortValues-list',
    //     label: 'Show value from a',
    //     type: 'sortExtras',
    //     tippy: "Shows the active sorter's value on top of the cover in the grid view.",
    //     dropdownOpts: function(type) {
    //       let allTags = _.filter(list.sort, { type: 'sort' });
    //       allTags = _.map( allTags, 'label');
    //       return allTags;
    //     },
    //     value: [],
    //     condition: function(book) {
    //       if ( book.authors ) {
    //         let bookTags = _.map(book.authors, 'name');
    //         let selectedTags = this.value;
    //         if ( selectedTags.length > 0 ) {
    //           let found = false;
    //           _.each(selectedTags, function(selectedTag) {
    //             if (_.includes(bookTags, selectedTag)) {
    //               found = true;
    //               return false;
    //             }
    //           });
    //           return found;
    //         }
    //       }
    //     }
    //   };
      
    //   list.sort.splice(1,0, newItem);
      
    // },
    
  }
};

var smoothscroll$1 = {exports: {}};

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */

(function (module, exports$1) {
	(function () {

	  // polyfill
	  function polyfill() {
	    // aliases
	    var w = window;
	    var d = document;

	    // return if scroll behavior is supported and polyfill is not forced
	    if (
	      'scrollBehavior' in d.documentElement.style &&
	      w.__forceSmoothScrollPolyfill__ !== true
	    ) {
	      return;
	    }

	    // globals
	    var Element = w.HTMLElement || w.Element;
	    var SCROLL_TIME = 468;

	    // object gathering original scroll methods
	    var original = {
	      scroll: w.scroll || w.scrollTo,
	      scrollBy: w.scrollBy,
	      elementScroll: Element.prototype.scroll || scrollElement,
	      scrollIntoView: Element.prototype.scrollIntoView
	    };

	    // define timing method
	    var now =
	      w.performance && w.performance.now
	        ? w.performance.now.bind(w.performance)
	        : Date.now;

	    /**
	     * indicates if a the current browser is made by Microsoft
	     * @method isMicrosoftBrowser
	     * @param {String} userAgent
	     * @returns {Boolean}
	     */
	    function isMicrosoftBrowser(userAgent) {
	      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

	      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
	    }

	    /*
	     * IE has rounding bug rounding down clientHeight and clientWidth and
	     * rounding up scrollHeight and scrollWidth causing false positives
	     * on hasScrollableSpace
	     */
	    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

	    /**
	     * changes scroll position inside an element
	     * @method scrollElement
	     * @param {Number} x
	     * @param {Number} y
	     * @returns {undefined}
	     */
	    function scrollElement(x, y) {
	      this.scrollLeft = x;
	      this.scrollTop = y;
	    }

	    /**
	     * returns result of applying ease math function to a number
	     * @method ease
	     * @param {Number} k
	     * @returns {Number}
	     */
	    function ease(k) {
	      return 0.5 * (1 - Math.cos(Math.PI * k));
	    }

	    /**
	     * indicates if a smooth behavior should be applied
	     * @method shouldBailOut
	     * @param {Number|Object} firstArg
	     * @returns {Boolean}
	     */
	    function shouldBailOut(firstArg) {
	      if (
	        firstArg === null ||
	        typeof firstArg !== 'object' ||
	        firstArg.behavior === undefined ||
	        firstArg.behavior === 'auto' ||
	        firstArg.behavior === 'instant'
	      ) {
	        // first argument is not an object/null
	        // or behavior is auto, instant or undefined
	        return true;
	      }

	      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
	        // first argument is an object and behavior is smooth
	        return false;
	      }

	      // throw error when behavior is not supported
	      throw new TypeError(
	        'behavior member of ScrollOptions ' +
	          firstArg.behavior +
	          ' is not a valid value for enumeration ScrollBehavior.'
	      );
	    }

	    /**
	     * indicates if an element has scrollable space in the provided axis
	     * @method hasScrollableSpace
	     * @param {Node} el
	     * @param {String} axis
	     * @returns {Boolean}
	     */
	    function hasScrollableSpace(el, axis) {
	      if (axis === 'Y') {
	        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
	      }

	      if (axis === 'X') {
	        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
	      }
	    }

	    /**
	     * indicates if an element has a scrollable overflow property in the axis
	     * @method canOverflow
	     * @param {Node} el
	     * @param {String} axis
	     * @returns {Boolean}
	     */
	    function canOverflow(el, axis) {
	      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

	      return overflowValue === 'auto' || overflowValue === 'scroll';
	    }

	    /**
	     * indicates if an element can be scrolled in either axis
	     * @method isScrollable
	     * @param {Node} el
	     * @param {String} axis
	     * @returns {Boolean}
	     */
	    function isScrollable(el) {
	      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
	      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

	      return isScrollableY || isScrollableX;
	    }

	    /**
	     * finds scrollable parent of an element
	     * @method findScrollableParent
	     * @param {Node} el
	     * @returns {Node} el
	     */
	    function findScrollableParent(el) {
	      while (el !== d.body && isScrollable(el) === false) {
	        el = el.parentNode || el.host;
	      }

	      return el;
	    }

	    /**
	     * self invoked function that, given a context, steps through scrolling
	     * @method step
	     * @param {Object} context
	     * @returns {undefined}
	     */
	    function step(context) {
	      var time = now();
	      var value;
	      var currentX;
	      var currentY;
	      var elapsed = (time - context.startTime) / SCROLL_TIME;

	      // avoid elapsed times higher than one
	      elapsed = elapsed > 1 ? 1 : elapsed;

	      // apply easing to elapsed time
	      value = ease(elapsed);

	      currentX = context.startX + (context.x - context.startX) * value;
	      currentY = context.startY + (context.y - context.startY) * value;

	      context.method.call(context.scrollable, currentX, currentY);

	      // scroll more if we have not reached our destination
	      if (currentX !== context.x || currentY !== context.y) {
	        w.requestAnimationFrame(step.bind(w, context));
	      }
	    }

	    /**
	     * scrolls window or element with a smooth behavior
	     * @method smoothScroll
	     * @param {Object|Node} el
	     * @param {Number} x
	     * @param {Number} y
	     * @returns {undefined}
	     */
	    function smoothScroll(el, x, y) {
	      var scrollable;
	      var startX;
	      var startY;
	      var method;
	      var startTime = now();

	      // define scroll context
	      if (el === d.body) {
	        scrollable = w;
	        startX = w.scrollX || w.pageXOffset;
	        startY = w.scrollY || w.pageYOffset;
	        method = original.scroll;
	      } else {
	        scrollable = el;
	        startX = el.scrollLeft;
	        startY = el.scrollTop;
	        method = scrollElement;
	      }

	      // scroll looping over a frame
	      step({
	        scrollable: scrollable,
	        method: method,
	        startTime: startTime,
	        startX: startX,
	        startY: startY,
	        x: x,
	        y: y
	      });
	    }

	    // ORIGINAL METHODS OVERRIDES
	    // w.scroll and w.scrollTo
	    w.scroll = w.scrollTo = function() {
	      // avoid action when no arguments are passed
	      if (arguments[0] === undefined) {
	        return;
	      }

	      // avoid smooth behavior if not required
	      if (shouldBailOut(arguments[0]) === true) {
	        original.scroll.call(
	          w,
	          arguments[0].left !== undefined
	            ? arguments[0].left
	            : typeof arguments[0] !== 'object'
	              ? arguments[0]
	              : w.scrollX || w.pageXOffset,
	          // use top prop, second argument if present or fallback to scrollY
	          arguments[0].top !== undefined
	            ? arguments[0].top
	            : arguments[1] !== undefined
	              ? arguments[1]
	              : w.scrollY || w.pageYOffset
	        );

	        return;
	      }

	      // LET THE SMOOTHNESS BEGIN!
	      smoothScroll.call(
	        w,
	        d.body,
	        arguments[0].left !== undefined
	          ? ~~arguments[0].left
	          : w.scrollX || w.pageXOffset,
	        arguments[0].top !== undefined
	          ? ~~arguments[0].top
	          : w.scrollY || w.pageYOffset
	      );
	    };

	    // w.scrollBy
	    w.scrollBy = function() {
	      // avoid action when no arguments are passed
	      if (arguments[0] === undefined) {
	        return;
	      }

	      // avoid smooth behavior if not required
	      if (shouldBailOut(arguments[0])) {
	        original.scrollBy.call(
	          w,
	          arguments[0].left !== undefined
	            ? arguments[0].left
	            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
	          arguments[0].top !== undefined
	            ? arguments[0].top
	            : arguments[1] !== undefined ? arguments[1] : 0
	        );

	        return;
	      }

	      // LET THE SMOOTHNESS BEGIN!
	      smoothScroll.call(
	        w,
	        d.body,
	        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
	        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
	      );
	    };

	    // Element.prototype.scroll and Element.prototype.scrollTo
	    Element.prototype.scroll = Element.prototype.scrollTo = function() {
	      // avoid action when no arguments are passed
	      if (arguments[0] === undefined) {
	        return;
	      }

	      // avoid smooth behavior if not required
	      if (shouldBailOut(arguments[0]) === true) {
	        // if one number is passed, throw error to match Firefox implementation
	        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
	          throw new SyntaxError('Value could not be converted');
	        }

	        original.elementScroll.call(
	          this,
	          // use left prop, first number argument or fallback to scrollLeft
	          arguments[0].left !== undefined
	            ? ~~arguments[0].left
	            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
	          // use top prop, second argument or fallback to scrollTop
	          arguments[0].top !== undefined
	            ? ~~arguments[0].top
	            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
	        );

	        return;
	      }

	      var left = arguments[0].left;
	      var top = arguments[0].top;

	      // LET THE SMOOTHNESS BEGIN!
	      smoothScroll.call(
	        this,
	        this,
	        typeof left === 'undefined' ? this.scrollLeft : ~~left,
	        typeof top === 'undefined' ? this.scrollTop : ~~top
	      );
	    };

	    // Element.prototype.scrollBy
	    Element.prototype.scrollBy = function() {
	      // avoid action when no arguments are passed
	      if (arguments[0] === undefined) {
	        return;
	      }

	      // avoid smooth behavior if not required
	      if (shouldBailOut(arguments[0]) === true) {
	        original.elementScroll.call(
	          this,
	          arguments[0].left !== undefined
	            ? ~~arguments[0].left + this.scrollLeft
	            : ~~arguments[0] + this.scrollLeft,
	          arguments[0].top !== undefined
	            ? ~~arguments[0].top + this.scrollTop
	            : ~~arguments[1] + this.scrollTop
	        );

	        return;
	      }

	      this.scroll({
	        left: ~~arguments[0].left + this.scrollLeft,
	        top: ~~arguments[0].top + this.scrollTop,
	        behavior: arguments[0].behavior
	      });
	    };

	    // Element.prototype.scrollIntoView
	    Element.prototype.scrollIntoView = function() {
	      // avoid smooth behavior if not required
	      if (shouldBailOut(arguments[0]) === true) {
	        original.scrollIntoView.call(
	          this,
	          arguments[0] === undefined ? true : arguments[0]
	        );

	        return;
	      }

	      // LET THE SMOOTHNESS BEGIN!
	      var scrollableParent = findScrollableParent(this);
	      var parentRects = scrollableParent.getBoundingClientRect();
	      var clientRects = this.getBoundingClientRect();

	      if (scrollableParent !== d.body) {
	        // reveal element inside parent
	        smoothScroll.call(
	          this,
	          scrollableParent,
	          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
	          scrollableParent.scrollTop + clientRects.top - parentRects.top
	        );

	        // reveal parent in viewport unless is fixed
	        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
	          w.scrollBy({
	            left: parentRects.left,
	            top: parentRects.top,
	            behavior: 'smooth'
	          });
	        }
	      } else {
	        // reveal element in viewport
	        w.scrollBy({
	          left: clientRects.left,
	          top: clientRects.top,
	          behavior: 'smooth'
	        });
	      }
	    };
	  }

	  {
	    // commonjs
	    module.exports = { polyfill: polyfill };
	  }

	}()); 
} (smoothscroll$1));

var smoothscrollExports = smoothscroll$1.exports;
const smoothscroll = /*@__PURE__*/getDefaultExportFromCjs(smoothscrollExports);

/* unplugin-vue-components disabled */

smoothscroll.polyfill();

const _sfc_main = {
  name: "GalleryRoot",
  mixins: [
    prepCategoriesSubPage, 
    prepCollectionsSubPage, 
    prepSeriesSubPage,
    prepNarratorsSubPage,
    prepAuthorsSubPage,
    prepPublishersSubPage,
    prepPodcasts,
    prepWishlist,
    timeStringToSeconds,
    galleryListRenderingOpts,
    findSubPageSource,
  
  ],
  
  data: function() {
    return {
      loading: true,
      collectionSource: 'library.books',
      pageTitle: null,
      pageSubTitle: null,
      scrollContainer: null,
      collapseView: null,
      realLength: 0,
      prepsCompleted: false,
      errorMessage: false,
      mountedChildren: false,
    };
  },
  
  beforeCreate: function() {
    
    if ( this.$route.query.view ) {
      this.$store.commit('stickyProp', { key: 'viewMode', value: this.$route.query.view });
    }
    
  },
  
  computed: {
    galleryStyle: function() {
      
      if ( this.$store.state.searchOptOpenHeight ) {
        
        return {
          overflow: 'hidden',
          height: this.$store.state.searchOptOpenHeight + 'px',
        };
        
      }
      else {
        return false;
      }
      
    },
  },
  
  created: function() {
    
    this.updateListRenderingOptions();
    
    // Setup for other pages that use the gallery page to show titles
    this.prepCategoriesSubPage();    
    this.prepCollectionsSubPage();    
    this.prepSeriesSubPage();
    this.prepNarratorsSubPage();
    this.prepAuthorsSubPage();
    this.prepPublishersSubPage();
    this.prepPodcasts();
    this.prepWishlist();
    
    this.prepsCompleted = true;
    
    // this.pageLoadBook = _.get(this.$route, "query.book");
    // ID: tn664iGW (related to 3Ez82Egn)
    // Makes it so just the book with book details open with open on page load
    // this.collapseView = this.pageLoadBook && this.$route.name !== 'series';
    
    this.$compEmitter.on("book-clicked", this.toggleBookDetails);
    
  },
  
  mounted() {
    // console.log('%c' + 'GALLERY.vue MOUNTED' + '', 'background: green; color: #fff; padding: 2px 5px; border-radius: 8px;');
    this.$nextTick(function() {
      this.errorMessage = true;
    });
  },
  
  beforeUnmount: function() {
    this.$compEmitter.off("book-clicked", this.toggleBookDetails);
    // console.log('%c' + 'GALLERY.vue DESTROYED' + '', 'background: #f41b1b; color: #fff; padding: 2px 5px; border-radius: 8px;');
    this.errorMessage = false;
  },
  
  watch: {
    '$store.getters.collection': function() {
      
      this.$store.commit("chunkCollectionReset");
      
      // if ( this.pageLoadBook && this.$route.name === 'series' ) {
      //   this.$store.commit("prop", { key: 'chunkCollection', value: this.$store.getters.collection });
      // }
      // else {
        this.$store.commit("chunkCollectionAdd");
      // }
      
    },
    '$route.query.book': function( bookParam ) {
      
      // This is mostly in place because I didn't make certain things work in a reactive way
      // When you back or forward navigate to the same route (by name) this refreshes the view
      if ( !this.$store.state.bookClicked ) {
        this.$updateQueries({ refresh: true });
      }
      else {
        this.$store.commit('prop', { key: 'bookClicked', value: false });
      }
      
    },
  },
  
  methods: {
    
    childrenMounted: function() {
      
      this.$nextTick(function() {
        
        let scrollPosition = this.$route.query.y ? parseFloat(this.$route.query.y) : 0;
        if ( this.$route.query.scrolltop ) scrollPosition = 0;
        
        // Book query: open book details on load
        if ( this.$route.query.book ) {
          
          let wrapper = document.querySelector(".ale-books");
          wrapper.offsetTop;
          let grid = this.$store.state.sticky.viewMode === 'grid';
          let bookHeight = grid ? wrapper.querySelector('.ale-book').getBoundingClientRect().height : wrapper.querySelector('table tbody .ale-row').getBoundingClientRect().height;
          let wrapperMax = grid ? wrapper.getBoundingClientRect().width : wrapper.getBoundingClientRect().height;
          let cols = Math.floor(wrapperMax / bookHeight) || 1;
          
          // this.$store.commit("chunkCollectionAdd", { chunkDistance: this.$store.state.chunkDistance * factor });
          
          let bookIndex = _.findIndex(this.$store.getters.collection, { asin: this.$route.query.book });
          let currentRow = Math.floor(bookIndex / cols) + 1;
          let rowEnd = currentRow * cols;
          this.$store.commit("chunkCollectionAdd", { chunkDistance: rowEnd + this.$store.state.chunkDistance });
          // ID: 3Ez82Egn (related to tn664iGW)
          // Makes it so just the book with book details open with open on page load
          // this.realLength = this.$store.getters.collection.length;
          // if ( this.collapseView && ( this.realLength === 1 ) ) this.collapseView = false;
          // if ( this.collapseView ) {
            //   this.$store.commit("prop", { key: 'mutatingCollection', value: [book] });
          // }
          
          // this.$nextTick(function() {
          //   this.$compEmitter.emit("book-clicked", { book: this.$store.state.chunkCollection[bookIndex], index: bookIndex, force: true });
          // });
          
          this.$nextTick(function() {
            this.mountedChildren = true;
          });
          
        }
        else if ( scrollPosition || this.$route.query.scrolltop ) {
          
          this.$updateQueries({ scrolltop: null });

          let wrapper = document.querySelector(".ale-books");
          let wrapperOffset = wrapper.offsetTop;
          let grid = this.$store.state.sticky.viewMode === 'grid';
          let bookHeight = grid ? wrapper.querySelector('.ale-book').getBoundingClientRect().height : wrapper.querySelector('table tbody .ale-row').getBoundingClientRect().height;
          let visibleArea = scrollPosition + window.innerHeight - wrapperOffset;
          let maxItems = Math.ceil(visibleArea / bookHeight) || 1;
          let wrapperMax = grid ? wrapper.getBoundingClientRect().width : wrapper.getBoundingClientRect().height;
          let cols = Math.floor(wrapperMax / bookHeight) || 1;
          let visibleBooks = grid ? maxItems*cols : cols;
          let factor = Math.ceil(visibleBooks / this.$store.state.chunkDistance) || 1;
          if ( factor > 1 ) this.$store.commit("chunkCollectionAdd", { chunkDistance: this.$store.state.chunkDistance * factor });
          
          this.$nextTick(function() {
            if (this.$store.state.sticky.viewMode === 'grid') {
              scroll({
                top: scrollPosition
              });
            } else {
              document.querySelector('.list-view-inner-wrap').scroll({
                top: scrollPosition
              });
            }
            
            this.$nextTick(function() {
              this.mountedChildren = true;
            });
            
          });
          
        }
        else {
          this.$nextTick(function() {
            this.mountedChildren = true;
          });
        }
        
      });
    },
    
    expandView: function() {
      
      // this.$updateQueries({ book: null }, { history: true });
      
    },
    
    gridViewMounted: function() {
      
      this.scrollContainer = window;
      this.scrollContainer.removeEventListener('scroll', this.addDomItems);
      this.scrollContainer.addEventListener('scroll', this.addDomItems, { passive: true });
      
      this.childrenMounted();
      
    },
    listViewMounted: function() {
      
      this.scrollContainer = document.querySelector('.list-view-inner-wrap');
      this.scrollContainer.removeEventListener('scroll', this.addDomItems);
      this.scrollContainer.addEventListener('scroll', this.addDomItems, { passive: true });
      
      this.childrenMounted();
      
    },
    viewsbeforeUnmount: function() {
      
      this.scrollContainer.removeEventListener('scroll', this.addDomItems);
      this.mountedChildren = false;
      
    },
    
    addDomItems: _.throttle( function(e) {
      if ( this.$store.state.lazyScroll ) {
        
        const gridView = this.$store.state.sticky.viewMode === 'grid';
        let bottomOffset = gridView ? 550 + (window.innerHeight/2) : (this.scrollContainer.clientHeight/3);
        let container = gridView ? document.documentElement : this.scrollContainer;
        let atTheBottom = container.scrollTop + (container.innerHeight || container.clientHeight) + bottomOffset >= container.scrollHeight;
        
        // At the bottom of currently rendered chunk
        if ( atTheBottom ) this.$store.commit('chunkCollectionAdd');
        
        // Update scroll distance
        // Don't update with book details open, because it takes precedence
			  this.$updateQueries({ y: container.scrollTop });
        
      }
    }, 450, { leading: false, trailing: true }),
    
    searchMounted() {
      
      const vue = this;
      this.$nextTick(function() {
        setTimeout(function() {
          vue.loading = false;
        }, 10);
      });
      
    },
    
    // updateScrollDistance: _.debounce( function( scrollTop ) {
    //   this.$updateQueries({ y: scrollTop });
    // }, 100, { leading: false, trailing: true }),
    
    toggleBookDetails: function( asin ) {
      
      this.$store.commit('prop', { key: 'bookClicked', value: true });
      
      const clicked = {
        asin: asin,
      };
      
      const query = {
        asin: _.get(this.$route, 'query.book'),
        newValue: clicked.asin,
      };
      
      // Abort if changing url param is unnecessary
      // - This was causing issues when it was overlapping with other url param changes      
      if ( 
        !query.newValue === !query.asin && !query.newValue // || // If false + identical value
        //  query.newValue ===  query.asin && !!query.newValue  // If true + identical value
      ) return;
      
      // Already open, so close it
      if ( clicked.asin === query.asin ) query.newValue = null;
      // nullify false
      if ( !query.newValue ) query.newValue = null;
      // Active book clicked: close bookdetails
      this.$updateQueries({ book: query.newValue }, { src: 'toggleBookDetails' });
      
    },
    
  },
  
  
  
};

const _hoisted_1 = { id: "ale-gallery" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 4 };
const _hoisted_4 = {
  key: 5,
  id: "nothing-here-404"
};
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  key: 1,
  class: "error404"
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_gallery_book_details_settings = __unplugin_components_0;
  const _component_context_menu_reminder = __unplugin_components_1;
  const _component_gallery_search = __unplugin_components_0$g;
  const _component_fa6_solid_lock_open = __unplugin_components_3;
  const _component_gallery_grid_view = __unplugin_components_4;
  const _component_gallery_list_view = __unplugin_components_5$1;
  const _component_gallery_book_details = __unplugin_components_6$1;

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    (_ctx.$store.state.bookDetailSettingsOpen)
      ? (openBlock(), createBlock(_component_gallery_book_details_settings, { key: 0 }))
      : createCommentVNode("", true),
    (!_ctx.$store.state.standalone && _ctx.$store.state.sticky.contextMenuReminder)
      ? (openBlock(), createBlock(_component_context_menu_reminder, { key: 1 }))
      : createCommentVNode("", true),
    (_ctx.prepsCompleted)
      ? (openBlock(), createBlock(_component_gallery_search, {
          key: 2,
          collectionSource: _ctx.collectionSource,
          onVnodeMounted: $options.searchMounted
        }, null, 8, ["collectionSource", "onVnodeMounted"]))
      : createCommentVNode("", true),
    (_ctx.collapseView)
      ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: "collection-expanded-btn",
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.expandView && $options.expandView(...args)))
        }, [
          createBaseVNode("div", null, [
            _cache[1] || (_cache[1] = createBaseVNode("span", null, "Expand view", -1)),
            (_ctx.realLength)
              ? (openBlock(), createElementBlock("span", _hoisted_2, "( " + toDisplayString(_ctx.realLength) + " )", 1))
              : createCommentVNode("", true),
            createVNode(_component_fa6_solid_lock_open)
          ])
        ]))
      : createCommentVNode("", true),
    (!_ctx.loading && _ctx.$store.getters.collection && _ctx.$store.getters.collection.length > 0)
      ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", {
            style: normalizeStyle($options.galleryStyle)
          }, [
            (_ctx.$store.state.sticky.viewMode === 'grid')
              ? (openBlock(), createBlock(_component_gallery_grid_view, {
                  key: 0,
                  onVnodeMounted: $options.gridViewMounted,
                  onVnodeBeforeUnmount: $options.viewsbeforeUnmount
                }, null, 8, ["onVnodeMounted", "onVnodeBeforeUnmount"]))
              : (_ctx.$store.state.sticky.viewMode === 'spreadsheet')
                ? (openBlock(), createBlock(_component_gallery_list_view, {
                    key: 1,
                    onVnodeMounted: $options.listViewMounted,
                    onVnodeBeforeUnmount: $options.viewsbeforeUnmount
                  }, null, 8, ["onVnodeMounted", "onVnodeBeforeUnmount"]))
                : createCommentVNode("", true),
            (_ctx.mountedChildren && _ctx.$route.query.book)
              ? (openBlock(), createBlock(_component_gallery_book_details, {
                  key: _ctx.$route.query.book,
                  asin: _ctx.$route.query.book
                }, null, 8, ["asin"]))
              : createCommentVNode("", true)
          ], 4)
        ]))
      : (_ctx.errorMessage)
        ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (_ctx.$store.getters.searchIsActive && !_ctx.$store.state.searchCollection.length)
              ? (openBlock(), createElementBlock("h3", _hoisted_5, "Search: no results"))
              : (openBlock(), createElementBlock("h3", _hoisted_6, "404: There's nothing here"))
          ]))
        : createCommentVNode("", true)
  ]))
}
const galleryRoot = /*#__PURE__*/_export_sfc$1(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-b80edad3"]]);

export { galleryRoot as default };
