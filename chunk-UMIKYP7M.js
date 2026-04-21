import {
  j,
  w
} from "./chunk-ZTGN75G6.js";
import {
  Be,
  Ie,
  Me,
  Pe
} from "./chunk-K56WFCCG.js";
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

// node_modules/@arcgis/core/geometry/operators/json/offsetOperator.js
var u = { round: 0, bevel: 1, miter: 2, square: 3 };
function a(t, o, m = {}) {
  const { miterLimit: a2 = 10, flattenError: c2 = 0, joins: f = "round", unit: p } = m, j2 = Ie(t);
  p && j2 && (o = N(o, p, j2));
  const l = Pe(t), x = l.getSpatialReference();
  return Me(w(l.getGeometry(), x, o, u[f], a2, c2), x);
}
function c(e, i, a2 = {}) {
  const { miterLimit: c2 = 10, flattenError: f = 0, joins: p = "round", unit: j2 } = a2, l = Ie(e);
  j2 && l && (i = N(i, j2, l));
  const [x, d] = Be(e);
  return j(x, d, i, u[p], c2, f).map(((t) => Me(t, d))).filter(L);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=chunk-UMIKYP7M.js.map
