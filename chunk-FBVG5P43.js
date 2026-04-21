import {
  e
} from "./chunk-B6W7TW7S.js";
import {
  j
} from "./chunk-3MFXKT2T.js";
import {
  G,
  _,
  r
} from "./chunk-Z33DWCSN.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodeticLength.js
var r2;
function o() {
  return !!r2 && r();
}
function i() {
  return __async(this, null, function* () {
    if (!o()) {
      const [e2, o2] = yield Promise.all([import("./chunk-7FKP5ARB.js"), import("./chunk-BB7UJJJU.js").then(((t) => t.aG)).then((({ injectPe: t }) => t)), _()]);
      r2 = new e2.OperatorGeodeticLength(), o2(G);
    }
  });
}
function s(t, n2, e2) {
  return r2.execute(t, n2, e2, null);
}
function c() {
  return r2.supportsCurves();
}

// node_modules/@arcgis/core/chunks/geodeticLengthOperator.js
var i2;
var p;
var n;
var u;
function c2() {
  return !!i2 && o();
}
function m() {
  return __async(this, null, function* () {
    if (!c2()) {
      const [e2] = yield Promise.all([import("./chunk-OPCP4SZK.js"), i()]);
      i2 = e2.fromGeometry, p = e2.fromSpatialReference, n = e2.getSpatialReference, u = c();
    }
  });
}
function l(t, o2 = {}) {
  const { curveType: r3 = "geodesic", unit: u2 } = o2, c3 = n(t);
  let m2 = s(i2(t), p(c3), e[r3]);
  return m2 && u2 && (m2 = j(m2, "meters", u2)), m2;
}
var f = Object.freeze(Object.defineProperty({ __proto__: null, execute: l, isLoaded: c2, load: m, get supportsCurves() {
  return u;
} }, Symbol.toStringTag, { value: "Module" }));

export {
  u,
  c2 as c,
  m,
  l,
  f
};
//# sourceMappingURL=chunk-FBVG5P43.js.map
