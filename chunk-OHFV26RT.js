import {
  c,
  i,
  s,
  u
} from "./chunk-DMPIG6VB.js";
import "./chunk-NGXXDUKF.js";
import {
  e
} from "./chunk-B6W7TW7S.js";
import {
  j
} from "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import {
  L
} from "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/operators/json/geodesicBufferOperator.js
var a;
var m;
var c2;
function u2() {
  return !!a && s();
}
function p() {
  return __async(this, null, function* () {
    if (!u2()) {
      const [e2] = yield Promise.all([import("./chunk-XMVYXGDQ.js"), u()]);
      a = e2.fromGeometries, m = e2.fromGeometry, c2 = e2.toGeometry;
    }
  });
}
function f(e2, r, i2 = {}) {
  let { curveType: s2 = "geodesic", maxDeviation: a2 = NaN, unit: u3 } = i2;
  u3 && (r = j(r, u3, "meters"), a2 && (a2 = j(a2, u3, "meters")));
  const p2 = m(e2), f2 = p2.getSpatialReference();
  return c2(i(p2.getGeometry(), f2, e[s2], r, a2), f2);
}
function l(r, o, i2 = {}) {
  let { curveType: m2 = "geodesic", maxDeviation: u3 = NaN, union: p2 = false, unit: f2 } = i2;
  f2 && (o = o.map(((e2) => j(e2, f2, "meters"))), u3 && (u3 = j(u3, f2, "meters")));
  const [l2, y] = a(r);
  return c(l2, y, e[m2], o, u3, p2).map(((e2) => c2(e2, y))).filter(L);
}
export {
  f as execute,
  l as executeMany,
  u2 as isLoaded,
  p as load
};
//# sourceMappingURL=chunk-OHFV26RT.js.map
