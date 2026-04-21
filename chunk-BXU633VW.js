import {
  f,
  l
} from "./chunk-EZEJM5AX.js";
import "./chunk-4AB5WP35.js";
import "./chunk-J5C5EJ2W.js";
import {
  Be,
  Ie,
  Me,
  Pe
} from "./chunk-K56WFCCG.js";
import "./chunk-AOVDBVFM.js";
import "./chunk-UQSJS3WG.js";
import "./chunk-NGXXDUKF.js";
import "./chunk-HFZLM4KU.js";
import "./chunk-7PVJDRX7.js";
import "./chunk-JSKUOW56.js";
import "./chunk-SHFGBADJ.js";
import {
  N2 as N
} from "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-C5HHJVCI.js";
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
import "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/operators/json/bufferOperator.js
function a(t, o, m = {}) {
  const { unit: a2 } = m, c2 = Ie(t);
  a2 && c2 && (o = N(o, a2, c2));
  const u = Pe(t), p = u.getSpatialReference();
  return Me(f(u.getGeometry(), p, o), p);
}
function c(e, i, a2 = {}) {
  let { maxDeviation: c2 = NaN, maxVerticesInFullCircle: u = 96, union: p = false, unit: f2 } = a2;
  const l2 = Ie(e);
  f2 && l2 && (i = i.map(((t) => N(t, f2, l2))), c2 && (c2 = N(c2, f2, l2)));
  const [j, x] = Be(e);
  return l(j, x, i, c2, u, p).map(((t) => Me(t, x))).filter(L);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=chunk-BXU633VW.js.map
