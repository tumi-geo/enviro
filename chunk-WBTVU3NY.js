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

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodeticArea.js
var r2;
function o() {
  return !!r2 && r();
}
function i() {
  return __async(this, null, function* () {
    if (!o()) {
      const [n2, o2] = yield Promise.all([import("./chunk-F7CDH2SN.js"), import("./chunk-BB7UJJJU.js").then(((e2) => e2.aG)).then((({ injectPe: e2 }) => e2)), _()]);
      r2 = new n2.OperatorGeodeticArea(), o2(G);
    }
  });
}
function s(e2, t, n2) {
  return r2.execute(e2, t, n2, null);
}
function a() {
  return r2.supportsCurves();
}

// node_modules/@arcgis/core/chunks/geodeticAreaOperator.js
var i2;
var p;
var u;
var n;
function c() {
  return !!i2 && o();
}
function m() {
  return __async(this, null, function* () {
    if (!c()) {
      const [e2] = yield Promise.all([import("./chunk-OPCP4SZK.js"), i()]);
      i2 = e2.fromGeometry, p = e2.fromSpatialReference, u = e2.getSpatialReference, n = a();
    }
  });
}
function l(r3, o2 = {}) {
  const { curveType: t = "geodesic", unit: n2 } = o2, c2 = u(r3);
  let m2 = s(i2(r3), p(c2), e[t]);
  return m2 && n2 && (m2 = j(m2, "square-meters", n2)), m2;
}
var f = Object.freeze(Object.defineProperty({ __proto__: null, execute: l, isLoaded: c, load: m, get supportsCurves() {
  return n;
} }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  c,
  m,
  l,
  f
};
//# sourceMappingURL=chunk-WBTVU3NY.js.map
