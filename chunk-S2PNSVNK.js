import {
  a,
  c,
  i,
  s,
  u
} from "./chunk-V524FSVH.js";
import {
  e
} from "./chunk-B6W7TW7S.js";
import {
  j
} from "./chunk-3MFXKT2T.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/chunks/geodeticDensifyOperator.js
var i2;
var p;
var u2;
var c2;
var m;
function f() {
  return !!i2 && s();
}
function l() {
  return __async(this, null, function* () {
    if (!f()) {
      const [e2] = yield Promise.all([import("./chunk-OPCP4SZK.js"), i()]);
      i2 = e2.fromGeometry, p = e2.fromSpatialReference, u2 = e2.getSpatialReference, c2 = e2.toGeometry, m = a();
    }
  });
}
function y(t, o, r = {}) {
  const { curveType: a2 = "geodesic", unit: m2 } = r;
  m2 && (o = j(o, m2, "meters"));
  const f2 = u2(t);
  return c2(u(i2(t), o, p(f2), e[a2]), f2);
}
function d(t, o, r = {}) {
  const { curveType: s2 = "geodesic", unit: m2 } = r;
  m2 && (o = j(o, m2, "meters"));
  const f2 = t.map(i2), l2 = u2(t);
  return c(f2, o, p(l2), e[s2]).map(((e2) => c2(e2, l2)));
}
var g = Object.freeze(Object.defineProperty({ __proto__: null, execute: y, executeMany: d, isLoaded: f, load: l, get supportsCurves() {
  return m;
} }, Symbol.toStringTag, { value: "Module" }));

export {
  m,
  f,
  l,
  y,
  d,
  g
};
//# sourceMappingURL=chunk-S2PNSVNK.js.map
