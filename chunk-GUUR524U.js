import {
  b,
  m2
} from "./chunk-QE6WU2QZ.js";
import {
  a2
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import {
  a,
  e2 as e,
  l2 as l,
  m2 as m,
  y
} from "./chunk-OX6HQ7WO.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/core/asyncUtils.js
function a3(r2, t, o) {
  return y(r2.map(((r3, e2) => t.apply(o, [r3, e2]))));
}
function p(r2, t, o) {
  return __async(this, null, function* () {
    return (yield y(r2.map(((r3, e2) => t.apply(o, [r3, e2]))))).map(((r3) => r3.value));
  });
}
function c(r2) {
  return { ok: true, value: r2 };
}
function h(r2) {
  return { ok: false, error: r2 };
}
function m3(r2) {
  return null != r2 && true === r2.ok ? r2.value : null;
}
function f(r2) {
  return null != r2 && false === r2.ok ? r2.error : null;
}
function _(r2) {
  return __async(this, null, function* () {
    if (null == r2) return { ok: false, error: new Error("no promise provided") };
    try {
      return c(yield r2);
    } catch (t) {
      return h(t);
    }
  });
}
function b2(r2) {
  return __async(this, null, function* () {
    try {
      return c(yield r2);
    } catch (t) {
      return a(t), h(t);
    }
  });
}
function d(r2, t) {
  return new v(r2, t);
}
var v = class extends b {
  get value() {
    return m3(this._result);
  }
  get error() {
    return f(this._result);
  }
  get finished() {
    return null != this._result;
  }
  constructor(r2, t) {
    super({}), this._result = null, this._abortHandle = null, this.abort = () => {
      this._abortController = e(this._abortController);
    }, this.remove = this.abort, this._abortController = new AbortController();
    const { signal: e2 } = this._abortController;
    this.promise = r2(e2), this.promise.then(((r3) => {
      this._result = c(r3), this._cleanup();
    }), ((r3) => {
      this._result = h(r3), this._cleanup();
    })), this._abortHandle = m(t, this.abort);
  }
  normalizeCtorArgs() {
    return {};
  }
  destroy() {
    this.abort();
  }
  _cleanup() {
    this._abortHandle = l(this._abortHandle), this._abortController = null;
  }
};
r([m2()], v.prototype, "value", null), r([m2()], v.prototype, "error", null), r([m2()], v.prototype, "finished", null), r([m2()], v.prototype, "promise", void 0), r([m2()], v.prototype, "_result", void 0), v = r([a2("esri.core.asyncUtils.ReactiveTask")], v);

export {
  a3 as a,
  p,
  _,
  b2 as b,
  d
};
//# sourceMappingURL=chunk-GUUR524U.js.map
