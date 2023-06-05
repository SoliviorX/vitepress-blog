import {
  Teleport,
  Transition,
  computed2 as computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  getCurrentScope,
  h,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  openBlock,
  provide,
  reactive,
  ref,
  renderSlot,
  toRefs,
  unref,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives
} from "./chunk-IONA4CDL.js";
import {
  normalizeClass,
  toDisplayString
} from "./chunk-IHERUIEU.js";

// ../../node_modules/.pnpm/vue-command-palette@0.1.4/node_modules/vue-command-palette/lib/vue-command-palette.js
var Ce;
var Be = typeof window < "u";
var yt = (s) => typeof s == "string";
var ie = () => {
};
Be && ((Ce = window == null ? void 0 : window.navigator) == null ? void 0 : Ce.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function me(s) {
  return typeof s == "function" ? s() : unref(s);
}
function Et(s, e) {
  function t(...n) {
    s(() => e.apply(this, n), { fn: e, thisArg: this, args: n });
  }
  return t;
}
function It(s, e = {}) {
  let t, n;
  return (o) => {
    const i = me(s), a = me(e.maxWait);
    if (t && clearTimeout(t), i <= 0 || a !== void 0 && a <= 0)
      return n && (clearTimeout(n), n = null), o();
    a && !n && (n = setTimeout(() => {
      t && clearTimeout(t), n = null, o();
    }, a)), t = setTimeout(() => {
      n && clearTimeout(n), n = null, o();
    }, i);
  };
}
function St(s) {
  return s;
}
function wt(s) {
  return getCurrentScope() ? (onScopeDispose(s), true) : false;
}
function He(s, e = 200, t = {}) {
  return Et(It(e, t), s);
}
function ue(s, e = 200, t = {}) {
  if (e <= 0)
    return s;
  const n = ref(s.value), r = He(() => {
    n.value = s.value;
  }, e, t);
  return watch(s, () => r()), n;
}
function We(s, e, t) {
  return watch(s, (n, r, o) => {
    n && e(n, r, o);
  }, t);
}
function Mt(s) {
  var e;
  const t = me(s);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
var ze = Be ? window : void 0;
function re(...s) {
  let e, t, n, r;
  if (yt(s[0]) ? ([t, n, r] = s, e = ze) : [e, t, n, r] = s, !e)
    return ie;
  let o = ie;
  const i = watch(() => Mt(e), (c) => {
    o(), c && (c.addEventListener(t, n, r), o = () => {
      c.removeEventListener(t, n, r), o = ie;
    });
  }, { immediate: true, flush: "post" }), a = () => {
    i(), o();
  };
  return wt(a), a;
}
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var ge = "__vueuse_ssr_handlers__";
pe[ge] = pe[ge] || {};
pe[ge];
var bt = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function xt(s = {}) {
  const {
    reactive: e = false,
    target: t = ze,
    aliasMap: n = bt,
    passive: r = true,
    onEventFired: o = ie
  } = s, i = reactive(/* @__PURE__ */ new Set()), a = { toJSON() {
    return {};
  }, current: i }, c = e ? reactive(a) : a, u = /* @__PURE__ */ new Set(), h2 = /* @__PURE__ */ new Set();
  function f(d, g) {
    d in c && (e ? c[d] = g : c[d].value = g);
  }
  function p() {
    for (const d of h2)
      f(d, false);
  }
  function v(d, g) {
    var I, M;
    const S = (I = d.key) == null ? void 0 : I.toLowerCase(), U = [(M = d.code) == null ? void 0 : M.toLowerCase(), S].filter(Boolean);
    S && (g ? i.add(S) : i.delete(S));
    for (const O of U)
      h2.add(O), f(O, g);
    S === "meta" && !g ? (u.forEach((O) => {
      i.delete(O), f(O, false);
    }), u.clear()) : typeof d.getModifierState == "function" && d.getModifierState("Meta") && g && [...i, ...U].forEach((O) => u.add(O));
  }
  re(t, "keydown", (d) => (v(d, true), o(d)), { passive: r }), re(t, "keyup", (d) => (v(d, false), o(d)), { passive: r }), re("blur", p, { passive: true }), re("focus", p, { passive: true });
  const y = new Proxy(c, {
    get(d, g, I) {
      if (typeof g != "string")
        return Reflect.get(d, g, I);
      if (g = g.toLowerCase(), g in n && (g = n[g]), !(g in c))
        if (/[+_-]/.test(g)) {
          const S = g.split(/[+_-]/g).map(($) => $.trim());
          c[g] = computed(() => S.every(($) => unref(y[$])));
        } else
          c[g] = ref(false);
      const M = Reflect.get(d, g, I);
      return e ? unref(M) : M;
    }
  });
  return y;
}
var $e;
(function(s) {
  s.UP = "UP", s.RIGHT = "RIGHT", s.DOWN = "DOWN", s.LEFT = "LEFT", s.NONE = "NONE";
})($e || ($e = {}));
var At = Object.defineProperty;
var Te = Object.getOwnPropertySymbols;
var kt = Object.prototype.hasOwnProperty;
var Ot = Object.prototype.propertyIsEnumerable;
var Ne = (s, e, t) => e in s ? At(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t;
var Lt = (s, e) => {
  for (var t in e || (e = {}))
    kt.call(e, t) && Ne(s, t, e[t]);
  if (Te)
    for (var t of Te(e))
      Ot.call(e, t) && Ne(s, t, e[t]);
  return s;
};
var Rt = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Lt({
  linear: St
}, Rt);
function K(s) {
  return Array.isArray ? Array.isArray(s) : Je(s) === "[object Array]";
}
var Ct = 1 / 0;
function $t(s) {
  if (typeof s == "string")
    return s;
  let e = s + "";
  return e == "0" && 1 / s == -Ct ? "-0" : e;
}
function Tt(s) {
  return s == null ? "" : $t(s);
}
function D(s) {
  return typeof s == "string";
}
function Qe(s) {
  return typeof s == "number";
}
function Nt(s) {
  return s === true || s === false || Pt(s) && Je(s) == "[object Boolean]";
}
function Ye(s) {
  return typeof s == "object";
}
function Pt(s) {
  return Ye(s) && s !== null;
}
function C(s) {
  return s != null;
}
function he(s) {
  return !s.trim().length;
}
function Je(s) {
  return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(s);
}
var Dt = "Incorrect 'index' type";
var Ft = (s) => `Invalid value for key ${s}`;
var Kt = (s) => `Pattern length exceeds max of ${s}.`;
var Gt = (s) => `Missing ${s} property in key`;
var jt = (s) => `Property 'weight' in key '${s}' must be a positive integer`;
var Pe = Object.prototype.hasOwnProperty;
var Vt = class {
  constructor(e) {
    this._keys = [], this._keyMap = {};
    let t = 0;
    e.forEach((n) => {
      let r = Xe(n);
      t += r.weight, this._keys.push(r), this._keyMap[r.id] = r, t += r.weight;
    }), this._keys.forEach((n) => {
      n.weight /= t;
    });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function Xe(s) {
  let e = null, t = null, n = null, r = 1, o = null;
  if (D(s) || K(s))
    n = s, e = De(s), t = _e(s);
  else {
    if (!Pe.call(s, "name"))
      throw new Error(Gt("name"));
    const i = s.name;
    if (n = i, Pe.call(s, "weight") && (r = s.weight, r <= 0))
      throw new Error(jt(i));
    e = De(i), t = _e(i), o = s.getFn;
  }
  return { path: e, id: t, weight: r, src: n, getFn: o };
}
function De(s) {
  return K(s) ? s : s.split(".");
}
function _e(s) {
  return K(s) ? s.join(".") : s;
}
function Ut(s, e) {
  let t = [], n = false;
  const r = (o, i, a) => {
    if (!!C(o))
      if (!i[a])
        t.push(o);
      else {
        let c = i[a];
        const u = o[c];
        if (!C(u))
          return;
        if (a === i.length - 1 && (D(u) || Qe(u) || Nt(u)))
          t.push(Tt(u));
        else if (K(u)) {
          n = true;
          for (let h2 = 0, f = u.length; h2 < f; h2 += 1)
            r(u[h2], i, a + 1);
        } else
          i.length && r(u, i, a + 1);
      }
  };
  return r(s, D(e) ? e.split(".") : e, 0), n ? t : t[0];
}
var Bt = {
  includeMatches: false,
  findAllMatches: false,
  minMatchCharLength: 1
};
var Ht = {
  isCaseSensitive: false,
  includeScore: false,
  keys: [],
  shouldSort: true,
  sortFn: (s, e) => s.score === e.score ? s.idx < e.idx ? -1 : 1 : s.score < e.score ? -1 : 1
};
var Wt = {
  location: 0,
  threshold: 0.6,
  distance: 100
};
var zt = {
  useExtendedSearch: false,
  getFn: Ut,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1
};
var m = {
  ...Ht,
  ...Bt,
  ...Wt,
  ...zt
};
var Qt = /[^ ]+/g;
function Yt(s = 1, e = 3) {
  const t = /* @__PURE__ */ new Map(), n = Math.pow(10, e);
  return {
    get(r) {
      const o = r.match(Qt).length;
      if (t.has(o))
        return t.get(o);
      const i = 1 / Math.pow(o, 0.5 * s), a = parseFloat(Math.round(i * n) / n);
      return t.set(o, a), a;
    },
    clear() {
      t.clear();
    }
  };
}
var xe = class {
  constructor({
    getFn: e = m.getFn,
    fieldNormWeight: t = m.fieldNormWeight
  } = {}) {
    this.norm = Yt(t, 3), this.getFn = e, this.isCreated = false, this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    this.keys = e, this._keysMap = {}, e.forEach((t, n) => {
      this._keysMap[t.id] = n;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = true, D(this.docs[0]) ? this.docs.forEach((e, t) => {
      this._addString(e, t);
    }) : this.docs.forEach((e, t) => {
      this._addObject(e, t);
    }), this.norm.clear());
  }
  add(e) {
    const t = this.size();
    D(e) ? this._addString(e, t) : this._addObject(e, t);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let t = e, n = this.size(); t < n; t += 1)
      this.records[t].i -= 1;
  }
  getValueForItemAtKeyId(e, t) {
    return e[this._keysMap[t]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, t) {
    if (!C(e) || he(e))
      return;
    let n = {
      v: e,
      i: t,
      n: this.norm.get(e)
    };
    this.records.push(n);
  }
  _addObject(e, t) {
    let n = { i: t, $: {} };
    this.keys.forEach((r, o) => {
      let i = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
      if (!!C(i)) {
        if (K(i)) {
          let a = [];
          const c = [{ nestedArrIndex: -1, value: i }];
          for (; c.length; ) {
            const { nestedArrIndex: u, value: h2 } = c.pop();
            if (!!C(h2))
              if (D(h2) && !he(h2)) {
                let f = {
                  v: h2,
                  i: u,
                  n: this.norm.get(h2)
                };
                a.push(f);
              } else
                K(h2) && h2.forEach((f, p) => {
                  c.push({
                    nestedArrIndex: p,
                    value: f
                  });
                });
          }
          n.$[o] = a;
        } else if (D(i) && !he(i)) {
          let a = {
            v: i,
            n: this.norm.get(i)
          };
          n.$[o] = a;
        }
      }
    }), this.records.push(n);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
};
function qe(s, e, { getFn: t = m.getFn, fieldNormWeight: n = m.fieldNormWeight } = {}) {
  const r = new xe({ getFn: t, fieldNormWeight: n });
  return r.setKeys(s.map(Xe)), r.setSources(e), r.create(), r;
}
function Jt(s, { getFn: e = m.getFn, fieldNormWeight: t = m.fieldNormWeight } = {}) {
  const { keys: n, records: r } = s, o = new xe({ getFn: e, fieldNormWeight: t });
  return o.setKeys(n), o.setIndexRecords(r), o;
}
function oe(s, {
  errors: e = 0,
  currentLocation: t = 0,
  expectedLocation: n = 0,
  distance: r = m.distance,
  ignoreLocation: o = m.ignoreLocation
} = {}) {
  const i = e / s.length;
  if (o)
    return i;
  const a = Math.abs(n - t);
  return r ? i + a / r : a ? 1 : i;
}
function Xt(s = [], e = m.minMatchCharLength) {
  let t = [], n = -1, r = -1, o = 0;
  for (let i = s.length; o < i; o += 1) {
    let a = s[o];
    a && n === -1 ? n = o : !a && n !== -1 && (r = o - 1, r - n + 1 >= e && t.push([n, r]), n = -1);
  }
  return s[o - 1] && o - n >= e && t.push([n, o - 1]), t;
}
var W = 32;
function qt(s, e, t, {
  location: n = m.location,
  distance: r = m.distance,
  threshold: o = m.threshold,
  findAllMatches: i = m.findAllMatches,
  minMatchCharLength: a = m.minMatchCharLength,
  includeMatches: c = m.includeMatches,
  ignoreLocation: u = m.ignoreLocation
} = {}) {
  if (e.length > W)
    throw new Error(Kt(W));
  const h2 = e.length, f = s.length, p = Math.max(0, Math.min(n, f));
  let v = o, y = p;
  const d = a > 1 || c, g = d ? Array(f) : [];
  let I;
  for (; (I = s.indexOf(e, y)) > -1; ) {
    let A = oe(e, {
      currentLocation: I,
      expectedLocation: p,
      distance: r,
      ignoreLocation: u
    });
    if (v = Math.min(A, v), y = I + h2, d) {
      let L = 0;
      for (; L < h2; )
        g[I + L] = 1, L += 1;
    }
  }
  y = -1;
  let M = [], S = 1, $ = h2 + f;
  const U = 1 << h2 - 1;
  for (let A = 0; A < h2; A += 1) {
    let L = 0, b = $;
    for (; L < b; )
      oe(e, {
        errors: A,
        currentLocation: p + b,
        expectedLocation: p,
        distance: r,
        ignoreLocation: u
      }) <= v ? L = b : $ = b, b = Math.floor(($ - L) / 2 + L);
    $ = b;
    let te = Math.max(1, p - b + 1), B = i ? f : Math.min(p + b, f) + h2, T = Array(B + 2);
    T[B + 1] = (1 << A) - 1;
    for (let k = B; k >= te; k -= 1) {
      let H = k - 1, q = t[s.charAt(H)];
      if (d && (g[H] = +!!q), T[k] = (T[k + 1] << 1 | 1) & q, A && (T[k] |= (M[k + 1] | M[k]) << 1 | 1 | M[k + 1]), T[k] & U && (S = oe(e, {
        errors: A,
        currentLocation: H,
        expectedLocation: p,
        distance: r,
        ignoreLocation: u
      }), S <= v)) {
        if (v = S, y = H, y <= p)
          break;
        te = Math.max(1, 2 * p - y);
      }
    }
    if (oe(e, {
      errors: A + 1,
      currentLocation: p,
      expectedLocation: p,
      distance: r,
      ignoreLocation: u
    }) > v)
      break;
    M = T;
  }
  const O = {
    isMatch: y >= 0,
    score: Math.max(1e-3, S)
  };
  if (d) {
    const A = Xt(g, a);
    A.length ? c && (O.indices = A) : O.isMatch = false;
  }
  return O;
}
function Zt(s) {
  let e = {};
  for (let t = 0, n = s.length; t < n; t += 1) {
    const r = s.charAt(t);
    e[r] = (e[r] || 0) | 1 << n - t - 1;
  }
  return e;
}
var Ze = class {
  constructor(e, {
    location: t = m.location,
    threshold: n = m.threshold,
    distance: r = m.distance,
    includeMatches: o = m.includeMatches,
    findAllMatches: i = m.findAllMatches,
    minMatchCharLength: a = m.minMatchCharLength,
    isCaseSensitive: c = m.isCaseSensitive,
    ignoreLocation: u = m.ignoreLocation
  } = {}) {
    if (this.options = {
      location: t,
      threshold: n,
      distance: r,
      includeMatches: o,
      findAllMatches: i,
      minMatchCharLength: a,
      isCaseSensitive: c,
      ignoreLocation: u
    }, this.pattern = c ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length)
      return;
    const h2 = (p, v) => {
      this.chunks.push({
        pattern: p,
        alphabet: Zt(p),
        startIndex: v
      });
    }, f = this.pattern.length;
    if (f > W) {
      let p = 0;
      const v = f % W, y = f - v;
      for (; p < y; )
        h2(this.pattern.substr(p, W), p), p += W;
      if (v) {
        const d = f - W;
        h2(this.pattern.substr(d), d);
      }
    } else
      h2(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: t, includeMatches: n } = this.options;
    if (t || (e = e.toLowerCase()), this.pattern === e) {
      let y = {
        isMatch: true,
        score: 0
      };
      return n && (y.indices = [[0, e.length - 1]]), y;
    }
    const {
      location: r,
      distance: o,
      threshold: i,
      findAllMatches: a,
      minMatchCharLength: c,
      ignoreLocation: u
    } = this.options;
    let h2 = [], f = 0, p = false;
    this.chunks.forEach(({ pattern: y, alphabet: d, startIndex: g }) => {
      const { isMatch: I, score: M, indices: S } = qt(e, y, d, {
        location: r + g,
        distance: o,
        threshold: i,
        findAllMatches: a,
        minMatchCharLength: c,
        includeMatches: n,
        ignoreLocation: u
      });
      I && (p = true), f += M, I && S && (h2 = [...h2, ...S]);
    });
    let v = {
      isMatch: p,
      score: p ? f / this.chunks.length : 1
    };
    return p && n && (v.indices = h2), v;
  }
};
var V = class {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return Fe(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return Fe(e, this.singleRegex);
  }
  search() {
  }
};
function Fe(s, e) {
  const t = s.match(e);
  return t ? t[1] : null;
}
var es = class extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const t = e === this.pattern;
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var ts = class extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const n = e.indexOf(this.pattern) === -1;
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
};
var ss = class extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const t = e.startsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var ns = class extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const t = !e.startsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
};
var rs = class extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const t = e.endsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1]
    };
  }
};
var os = class extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const t = !e.endsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
};
var et = class extends V {
  constructor(e, {
    location: t = m.location,
    threshold: n = m.threshold,
    distance: r = m.distance,
    includeMatches: o = m.includeMatches,
    findAllMatches: i = m.findAllMatches,
    minMatchCharLength: a = m.minMatchCharLength,
    isCaseSensitive: c = m.isCaseSensitive,
    ignoreLocation: u = m.ignoreLocation
  } = {}) {
    super(e), this._bitapSearch = new Ze(e, {
      location: t,
      threshold: n,
      distance: r,
      includeMatches: o,
      findAllMatches: i,
      minMatchCharLength: a,
      isCaseSensitive: c,
      ignoreLocation: u
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
};
var tt = class extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let t = 0, n;
    const r = [], o = this.pattern.length;
    for (; (n = e.indexOf(this.pattern, t)) > -1; )
      t = n + o, r.push([n, t - 1]);
    const i = !!r.length;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: r
    };
  }
};
var ve = [
  es,
  tt,
  ss,
  ns,
  os,
  rs,
  ts,
  et
];
var Ke = ve.length;
var is = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
var cs = "|";
function as(s, e = {}) {
  return s.split(cs).map((t) => {
    let n = t.trim().split(is).filter((o) => o && !!o.trim()), r = [];
    for (let o = 0, i = n.length; o < i; o += 1) {
      const a = n[o];
      let c = false, u = -1;
      for (; !c && ++u < Ke; ) {
        const h2 = ve[u];
        let f = h2.isMultiMatch(a);
        f && (r.push(new h2(f, e)), c = true);
      }
      if (!c)
        for (u = -1; ++u < Ke; ) {
          const h2 = ve[u];
          let f = h2.isSingleMatch(a);
          if (f) {
            r.push(new h2(f, e));
            break;
          }
        }
    }
    return r;
  });
}
var ls = /* @__PURE__ */ new Set([et.type, tt.type]);
var us = class {
  constructor(e, {
    isCaseSensitive: t = m.isCaseSensitive,
    includeMatches: n = m.includeMatches,
    minMatchCharLength: r = m.minMatchCharLength,
    ignoreLocation: o = m.ignoreLocation,
    findAllMatches: i = m.findAllMatches,
    location: a = m.location,
    threshold: c = m.threshold,
    distance: u = m.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: t,
      includeMatches: n,
      minMatchCharLength: r,
      findAllMatches: i,
      ignoreLocation: o,
      location: a,
      threshold: c,
      distance: u
    }, this.pattern = t ? e : e.toLowerCase(), this.query = as(this.pattern, this.options);
  }
  static condition(e, t) {
    return t.useExtendedSearch;
  }
  searchIn(e) {
    const t = this.query;
    if (!t)
      return {
        isMatch: false,
        score: 1
      };
    const { includeMatches: n, isCaseSensitive: r } = this.options;
    e = r ? e : e.toLowerCase();
    let o = 0, i = [], a = 0;
    for (let c = 0, u = t.length; c < u; c += 1) {
      const h2 = t[c];
      i.length = 0, o = 0;
      for (let f = 0, p = h2.length; f < p; f += 1) {
        const v = h2[f], { isMatch: y, indices: d, score: g } = v.search(e);
        if (y) {
          if (o += 1, a += g, n) {
            const I = v.constructor.type;
            ls.has(I) ? i = [...i, ...d] : i.push(d);
          }
        } else {
          a = 0, o = 0, i.length = 0;
          break;
        }
      }
      if (o) {
        let f = {
          isMatch: true,
          score: a / o
        };
        return n && (f.indices = i), f;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
};
var ye = [];
function hs(...s) {
  ye.push(...s);
}
function Ee(s, e) {
  for (let t = 0, n = ye.length; t < n; t += 1) {
    let r = ye[t];
    if (r.condition(s, e))
      return new r(s, e);
  }
  return new Ze(s, e);
}
var ae = {
  AND: "$and",
  OR: "$or"
};
var Ie = {
  PATH: "$path",
  PATTERN: "$val"
};
var Se = (s) => !!(s[ae.AND] || s[ae.OR]);
var ds = (s) => !!s[Ie.PATH];
var fs = (s) => !K(s) && Ye(s) && !Se(s);
var Ge = (s) => ({
  [ae.AND]: Object.keys(s).map((e) => ({
    [e]: s[e]
  }))
});
function st(s, e, { auto: t = true } = {}) {
  const n = (r) => {
    let o = Object.keys(r);
    const i = ds(r);
    if (!i && o.length > 1 && !Se(r))
      return n(Ge(r));
    if (fs(r)) {
      const c = i ? r[Ie.PATH] : o[0], u = i ? r[Ie.PATTERN] : r[c];
      if (!D(u))
        throw new Error(Ft(c));
      const h2 = {
        keyId: _e(c),
        pattern: u
      };
      return t && (h2.searcher = Ee(u, e)), h2;
    }
    let a = {
      children: [],
      operator: o[0]
    };
    return o.forEach((c) => {
      const u = r[c];
      K(u) && u.forEach((h2) => {
        a.children.push(n(h2));
      });
    }), a;
  };
  return Se(s) || (s = Ge(s)), n(s);
}
function ms(s, { ignoreFieldNorm: e = m.ignoreFieldNorm }) {
  s.forEach((t) => {
    let n = 1;
    t.matches.forEach(({ key: r, norm: o, score: i }) => {
      const a = r ? r.weight : null;
      n *= Math.pow(
        i === 0 && a ? Number.EPSILON : i,
        (a || 1) * (e ? 1 : o)
      );
    }), t.score = n;
  });
}
function ps(s, e) {
  const t = s.matches;
  e.matches = [], C(t) && t.forEach((n) => {
    if (!C(n.indices) || !n.indices.length)
      return;
    const { indices: r, value: o } = n;
    let i = {
      indices: r,
      value: o
    };
    n.key && (i.key = n.key.src), n.idx > -1 && (i.refIndex = n.idx), e.matches.push(i);
  });
}
function gs(s, e) {
  e.score = s.score;
}
function _s(s, e, {
  includeMatches: t = m.includeMatches,
  includeScore: n = m.includeScore
} = {}) {
  const r = [];
  return t && r.push(ps), n && r.push(gs), s.map((o) => {
    const { idx: i } = o, a = {
      item: e[i],
      refIndex: i
    };
    return r.length && r.forEach((c) => {
      c(o, a);
    }), a;
  });
}
var Y = class {
  constructor(e, t = {}, n) {
    this.options = { ...m, ...t }, this.options.useExtendedSearch, this._keyStore = new Vt(this.options.keys), this.setCollection(e, n);
  }
  setCollection(e, t) {
    if (this._docs = e, t && !(t instanceof xe))
      throw new Error(Dt);
    this._myIndex = t || qe(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(e) {
    !C(e) || (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => false) {
    const t = [];
    for (let n = 0, r = this._docs.length; n < r; n += 1) {
      const o = this._docs[n];
      e(o, n) && (this.removeAt(n), n -= 1, r -= 1, t.push(o));
    }
    return t;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: t = -1 } = {}) {
    const {
      includeMatches: n,
      includeScore: r,
      shouldSort: o,
      sortFn: i,
      ignoreFieldNorm: a
    } = this.options;
    let c = D(e) ? D(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
    return ms(c, { ignoreFieldNorm: a }), o && c.sort(i), Qe(t) && t > -1 && (c = c.slice(0, t)), _s(c, this._docs, {
      includeMatches: n,
      includeScore: r
    });
  }
  _searchStringList(e) {
    const t = Ee(e, this.options), { records: n } = this._myIndex, r = [];
    return n.forEach(({ v: o, i, n: a }) => {
      if (!C(o))
        return;
      const { isMatch: c, score: u, indices: h2 } = t.searchIn(o);
      c && r.push({
        item: o,
        idx: i,
        matches: [{ score: u, value: o, norm: a, indices: h2 }]
      });
    }), r;
  }
  _searchLogical(e) {
    const t = st(e, this.options), n = (a, c, u) => {
      if (!a.children) {
        const { keyId: f, searcher: p } = a, v = this._findMatches({
          key: this._keyStore.get(f),
          value: this._myIndex.getValueForItemAtKeyId(c, f),
          searcher: p
        });
        return v && v.length ? [
          {
            idx: u,
            item: c,
            matches: v
          }
        ] : [];
      }
      const h2 = [];
      for (let f = 0, p = a.children.length; f < p; f += 1) {
        const v = a.children[f], y = n(v, c, u);
        if (y.length)
          h2.push(...y);
        else if (a.operator === ae.AND)
          return [];
      }
      return h2;
    }, r = this._myIndex.records, o = {}, i = [];
    return r.forEach(({ $: a, i: c }) => {
      if (C(a)) {
        let u = n(t, a, c);
        u.length && (o[c] || (o[c] = { idx: c, item: a, matches: [] }, i.push(o[c])), u.forEach(({ matches: h2 }) => {
          o[c].matches.push(...h2);
        }));
      }
    }), i;
  }
  _searchObjectList(e) {
    const t = Ee(e, this.options), { keys: n, records: r } = this._myIndex, o = [];
    return r.forEach(({ $: i, i: a }) => {
      if (!C(i))
        return;
      let c = [];
      n.forEach((u, h2) => {
        c.push(
          ...this._findMatches({
            key: u,
            value: i[h2],
            searcher: t
          })
        );
      }), c.length && o.push({
        idx: a,
        item: i,
        matches: c
      });
    }), o;
  }
  _findMatches({ key: e, value: t, searcher: n }) {
    if (!C(t))
      return [];
    let r = [];
    if (K(t))
      t.forEach(({ v: o, i, n: a }) => {
        if (!C(o))
          return;
        const { isMatch: c, score: u, indices: h2 } = n.searchIn(o);
        c && r.push({
          score: u,
          key: e,
          value: o,
          idx: i,
          norm: a,
          indices: h2
        });
      });
    else {
      const { v: o, n: i } = t, { isMatch: a, score: c, indices: u } = n.searchIn(o);
      a && r.push({ score: c, key: e, value: o, norm: i, indices: u });
    }
    return r;
  }
};
Y.version = "6.6.2";
Y.createIndex = qe;
Y.parseIndex = Jt;
Y.config = m;
Y.parseQuery = st;
hs(us);
var je = reactive({
  selectedNode: "",
  selectedGroup: "",
  search: "",
  dataValue: "",
  filtered: {
    count: 0,
    items: /* @__PURE__ */ new Map(),
    groups: /* @__PURE__ */ new Set()
  }
});
var J = () => ({
  isSearching: computed(() => je.search !== ""),
  ...toRefs(je)
});
function vs(s) {
  return { all: s = s || /* @__PURE__ */ new Map(), on: function(e, t) {
    var n = s.get(e);
    n ? n.push(t) : s.set(e, [t]);
  }, off: function(e, t) {
    var n = s.get(e);
    n && (t ? n.splice(n.indexOf(t) >>> 0, 1) : s.set(e, []));
  }, emit: function(e, t) {
    var n = s.get(e);
    n && n.slice().map(function(r) {
      r(t);
    }), (n = s.get("*")) && n.slice().map(function(r) {
      r(e, t);
    });
  } };
}
var ys = vs();
var le = () => ({
  emitter: ys
});
function Es(s, e) {
  let t = s.nextElementSibling;
  for (; t; ) {
    if (t.matches(e))
      return t;
    t = t.nextElementSibling;
  }
}
function Is(s, e) {
  let t = s.previousElementSibling;
  for (; t; ) {
    if (t.matches(e))
      return t;
    t = t.previousElementSibling;
  }
}
var Ss = ["command-theme"];
var ws = { "command-root": "" };
var Ms = defineComponent({
  name: "Command"
});
var bs = defineComponent({
  ...Ms,
  props: {
    theme: {
      type: String,
      default: "default"
    },
    fuseOptions: {
      type: Object,
      default: () => ({
        threshold: 0.2,
        keys: ["label"]
      })
    }
  },
  emits: ["select-item"],
  setup(s, { emit: e }) {
    const t = s, n = '[command-item=""]', r = "command-item-key", o = '[command-group=""]', i = "command-group-key", a = '[command-group-heading=""]', c = `${n}:not([aria-disabled="true"])`, u = `${n}[aria-selected="true"]`, h2 = "command-item-select", f = "data-value";
    provide("theme", t.theme || "default");
    const { selectedNode: p, search: v, dataValue: y, filtered: d } = J(), { emitter: g } = le(), I = ref(), M = ue(ref(/* @__PURE__ */ new Map()), 333), S = ue(ref(/* @__PURE__ */ new Set()), 333), $ = ue(ref(/* @__PURE__ */ new Map())), U = computed(() => {
      const l = [];
      for (const [E, _] of M.value.entries())
        l.push({
          key: E,
          label: _
        });
      return l;
    }), O = computed(() => {
      const l = Y.createIndex(t.fuseOptions.keys, U.value);
      return new Y(U.value, t.fuseOptions, l);
    }), A = () => {
      var E, _, w;
      const l = L();
      l && (((E = l.parentElement) == null ? void 0 : E.firstElementChild) === l && ((w = (_ = l.closest(o)) == null ? void 0 : _.querySelector(a)) == null || w.scrollIntoView({ block: "nearest" })), l.scrollIntoView({ block: "nearest" }));
    }, L = () => {
      var l;
      return (l = I.value) == null ? void 0 : l.querySelector(u);
    }, b = (l = I.value) => {
      const E = l == null ? void 0 : l.querySelectorAll(
        c
      );
      return E ? Array.from(E) : [];
    }, te = () => {
      var E;
      const l = (E = I.value) == null ? void 0 : E.querySelectorAll(
        o
      );
      return l ? Array.from(l) : [];
    }, B = () => {
      const [l] = b();
      l && l.getAttribute(r) && (p.value = l.getAttribute(r) || "");
    }, T = (l) => {
      const _ = b()[l];
      _ && (p.value = _.getAttribute(r) || "");
    }, se = (l) => {
      const E = L(), _ = b(), w = _.findIndex((ne) => ne === E), G = _[w + l];
      G ? p.value = G.getAttribute(r) || "" : l > 0 ? T(0) : T(_.length - 1);
    }, k = (l) => {
      const E = L();
      let _ = E == null ? void 0 : E.closest(o), w = null;
      for (; _ && !w; )
        _ = l > 0 ? Es(_, o) : Is(_, o), w = _ == null ? void 0 : _.querySelector(c);
      w ? p.value = w.getAttribute(r) || "" : se(l);
    }, H = () => T(0), q = () => T(b().length - 1), Ae = (l) => {
      l.preventDefault(), l.metaKey ? q() : l.altKey ? k(1) : se(1);
    }, ke = (l) => {
      l.preventDefault(), l.metaKey ? H() : l.altKey ? k(-1) : se(-1);
    }, rt = (l) => {
      switch (l.key) {
        case "n":
        case "j": {
          l.ctrlKey && Ae(l);
          break;
        }
        case "ArrowDown": {
          Ae(l);
          break;
        }
        case "p":
        case "k": {
          l.ctrlKey && ke(l);
          break;
        }
        case "ArrowUp": {
          ke(l);
          break;
        }
        case "Home": {
          H();
          break;
        }
        case "End": {
          q();
          break;
        }
        case "Enter": {
          const E = L();
          if (E) {
            const _ = new Event(h2);
            E.dispatchEvent(_);
          }
        }
      }
    }, ot = () => {
      if (!v.value) {
        d.value.count = S.value.size;
        return;
      }
      d.value.groups = new Set("");
      const l = /* @__PURE__ */ new Map(), E = O.value.search(v.value).map((_) => _.item);
      for (const { key: _, label: w } of E)
        l.set(_, w);
      for (const [_, w] of $.value)
        for (const G of w)
          l.get(G) && d.value.groups.add(_);
      nextTick(() => {
        d.value.count = l.size, d.value.items = l;
      });
    }, Oe = () => {
      const l = b(), E = te();
      for (const _ of l) {
        const w = _.getAttribute(r) || "", G = _.getAttribute(f) || "";
        S.value.add(w), M.value.set(w, G), d.value.count = M.value.size;
      }
      for (const _ of E) {
        const w = b(_), G = _.getAttribute(i) || "", ne = new Set("");
        for (const ct of w) {
          const at = ct.getAttribute(r) || "";
          ne.add(at);
        }
        $.value.set(G, ne);
      }
    };
    watch(
      () => p.value,
      (l) => {
        l && nextTick(A);
      },
      { deep: true }
    ), watch(
      () => v.value,
      (l) => {
        ot(), nextTick(B);
      }
    ), g.on("selectItem", (l) => {
      e("select-item", l);
    });
    const it = He((l) => {
      l && (Oe(), nextTick(B));
    }, 100);
    return g.on("rerenderList", it), onMounted(() => {
      Oe(), B();
    }), (l, E) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(s.theme),
      onKeydown: rt,
      ref_key: "commandRef",
      ref: I,
      "command-theme": s.theme
    }, [
      createBaseVNode("div", ws, [
        renderSlot(l.$slots, "default")
      ])
    ], 42, Ss));
  }
});
var X = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [n, r] of e)
    t[n] = r;
  return t;
};
var we = X(bs, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/Command.vue"]]);
var xs = { "command-dialog": "" };
var As = { "command-dialog-mask": "" };
var ks = { "command-dialog-wrapper": "" };
var Os = { "command-dialog-header": "" };
var Ls = { "command-dialog-body": "" };
var Rs = {
  key: 0,
  "command-dialog-footer": ""
};
var Cs = defineComponent({
  name: "Command.Dialog"
});
var $s = defineComponent({
  ...Cs,
  props: {
    visible: { type: Boolean, required: true },
    theme: { type: String, required: true }
  },
  emits: ["select-item"],
  setup(s, { emit: e }) {
    const t = s, { search: n, filtered: r } = J(), { emitter: o } = le(), i = ref();
    o.on("selectItem", (c) => {
      e("select-item", c);
    });
    const a = () => {
      n.value = "", r.value.count = 0, r.value.items = /* @__PURE__ */ new Map(), r.value.groups = /* @__PURE__ */ new Set();
    };
    return We(() => t.visible, a), onBeforeUnmount(a), (c, u) => (openBlock(), createBlock(Teleport, {
      to: "body",
      ref_key: "dialogRef",
      ref: i
    }, [
      createVNode(Transition, {
        name: "command-dialog",
        appear: ""
      }, {
        default: withCtx(() => [
          s.visible ? (openBlock(), createBlock(we, {
            key: 0,
            theme: s.theme
          }, {
            default: withCtx(() => [
              createBaseVNode("div", xs, [
                createBaseVNode("div", As, [
                  createBaseVNode("div", ks, [
                    createBaseVNode("div", Os, [
                      renderSlot(c.$slots, "header")
                    ]),
                    createBaseVNode("div", Ls, [
                      renderSlot(c.$slots, "body")
                    ]),
                    c.$slots.footer ? (openBlock(), createElementBlock("div", Rs, [
                      renderSlot(c.$slots, "footer")
                    ])) : createCommentVNode("v-if", true)
                  ])
                ])
              ])
            ]),
            _: 3
          }, 8, ["theme"])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      })
    ], 512));
  }
});
var Ts = X($s, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandDialog.vue"]]);
var nt = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Ns = ["command-group-key", "data-value"];
var Ps = {
  key: 0,
  "command-group-heading": ""
};
var Ds = {
  "command-group-items": "",
  role: "group"
};
var Fs = defineComponent({
  name: "Command.Group"
});
var Ks = defineComponent({
  ...Fs,
  props: {
    heading: { type: String, required: true }
  },
  setup(s) {
    const e = computed(() => `command-group-${nt()}`), { filtered: t, isSearching: n } = J(), r = computed(
      () => n.value ? t.value.groups.has(e.value) : true
    );
    return (o, i) => withDirectives((openBlock(), createElementBlock("div", {
      "command-group": "",
      role: "presentation",
      key: unref(e),
      "command-group-key": unref(e),
      "data-value": s.heading
    }, [
      s.heading ? (openBlock(), createElementBlock("div", Ps, toDisplayString(s.heading), 1)) : createCommentVNode("v-if", true),
      createBaseVNode("div", Ds, [
        renderSlot(o.$slots, "default")
      ])
    ], 8, Ns)), [
      [vShow, unref(r)]
    ]);
  }
});
var Gs = X(Ks, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandGroup.vue"]]);
var js = ["placeholder", "value"];
var Vs = defineComponent({
  name: "Command.Input"
});
var Us = defineComponent({
  ...Vs,
  props: {
    placeholder: { type: String, required: true },
    value: { type: String, required: false }
  },
  emits: ["input", "update:value"],
  setup(s, { emit: e }) {
    const t = ref(null), { search: n } = J(), r = computed(() => n.value), o = (i) => {
      const a = i, c = i.target;
      n.value = c == null ? void 0 : c.value, e("input", a), e("update:value", n.value);
    };
    return watchEffect(() => {
      var i;
      (i = t.value) == null || i.focus();
    }), (i, a) => (openBlock(), createElementBlock("input", {
      ref_key: "inputRef",
      ref: t,
      "command-input": "",
      "auto-focus": "",
      "auto-complete": "off",
      "auto-correct": "off",
      "spell-check": false,
      "aria-autocomplete": "list",
      role: "combobox",
      "aria-expanded": true,
      placeholder: s.placeholder,
      value: unref(r),
      onInput: o
    }, null, 40, js));
  }
});
var Bs = X(Us, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandInput.vue"]]);
var Hs = ["aria-selected", "aria-disabled", "command-item-key"];
var Ws = defineComponent({
  name: "Command.Item"
});
var zs = defineComponent({
  ...Ws,
  props: {
    shortcut: { type: Array, required: false },
    perform: { type: null, required: false }
  },
  emits: ["select"],
  setup(s, { emit: e }) {
    const t = s, n = "command-item-select", r = "data-value", { current: o } = xt(), { selectedNode: i, filtered: a, isSearching: c } = J(), { emitter: u } = le(), h2 = ref(), f = computed(() => `command-item-${nt()}`), p = computed(() => {
      const d = a.value.items.get(f.value);
      return c.value ? d !== void 0 : true;
    }), v = computed(() => Array.from(o)), y = () => {
      var g;
      const d = {
        key: f.value,
        value: ((g = h2.value) == null ? void 0 : g.getAttribute(r)) || ""
      };
      e("select", d), u.emit("selectItem", d);
    };
    return We(v, (d) => {
      t.shortcut && t.shortcut.length > 0 && t.shortcut.every((I) => o.has(I.toLowerCase())) && t.perform && t.perform();
    }), watchEffect(() => {
      var d;
      (d = h2.value) == null || d.addEventListener(n, y);
    }), onBeforeUnmount(() => {
      var d;
      (d = h2.value) == null || d.removeEventListener(n, y);
    }), (d, g) => withDirectives((openBlock(), createElementBlock("div", {
      ref_key: "itemRef",
      ref: h2,
      "command-item": "",
      role: "option",
      "aria-selected": unref(i) === unref(f),
      "aria-disabled": !unref(p),
      key: unref(f),
      "command-item-key": unref(f),
      onClick: y
    }, [
      renderSlot(d.$slots, "default")
    ], 8, Hs)), [
      [vShow, unref(p)]
    ]);
  }
});
var Qs = X(zs, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandItem.vue"]]);
var Ys = defineComponent({
  name: "Command.List"
});
var Js = defineComponent({
  ...Ys,
  setup(s) {
    const { emitter: e } = le(), t = ref(), n = ref();
    let r = null, o;
    return watchEffect(() => {
      o = n.value;
      const i = t.value;
      o && i && (r = new ResizeObserver((a) => {
        nextTick(() => {
          const c = o == null ? void 0 : o.offsetHeight;
          i == null || i.style.setProperty(
            "--command-list-height",
            `${c == null ? void 0 : c.toFixed(1)}px`
          ), e.emit("rerenderList", true);
        });
      }), r.observe(o));
    }), onBeforeUnmount(() => {
      r !== null && o && r.unobserve(o);
    }), (i, a) => (openBlock(), createElementBlock("div", {
      "command-list": "",
      role: "listbox",
      "aria-label": "Suggestions",
      ref_key: "listRef",
      ref: t
    }, [
      createBaseVNode("div", {
        "command-list-sizer": "",
        ref_key: "heightRef",
        ref: n
      }, [
        renderSlot(i.$slots, "default")
      ], 512)
    ], 512));
  }
});
var Xs = X(Js, [["__file", "/Users/xiaoyunwei/Documents/GitHub/oss/vue-command-palette/packages/CommandList.vue"]]);
var qs = defineComponent({
  name: "Command.Empty",
  setup(s, { attrs: e, slots: t }) {
    const { filtered: n } = J(), r = computed(() => n.value.count === 0);
    return () => r.value ? h(
      "div",
      {
        "command-empty": "",
        role: "presentation",
        ...e
      },
      t
    ) : h("div", {
      "command-empty": "hidden",
      role: "presentation",
      style: {
        display: "none"
      },
      ...e
    });
  }
});
var Zs = defineComponent({
  name: "Command.Loading",
  setup(s, { attrs: e, slots: t }) {
    return () => h(
      "div",
      {
        "command-loading": "",
        role: "progressbar",
        ...e
      },
      t
    );
  }
});
var en = defineComponent({
  name: "Command.Separator",
  setup(s, { attrs: e, slots: t }) {
    return () => h("div", {
      "command-separator": "",
      role: "separator",
      ...e
    });
  }
});
var sn = Object.assign(we, {
  Dialog: Ts,
  Empty: qs,
  Group: Gs,
  Input: Bs,
  Item: Qs,
  List: Xs,
  Loading: Zs,
  Separator: en,
  Root: we
});
export {
  sn as Command
};
//# sourceMappingURL=vue-command-palette.js.map
