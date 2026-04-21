import {
  D,
  _,
  w
} from "./chunk-3N22WWC5.js";
import {
  Be,
  Me,
  Pe,
  Ve
} from "./chunk-K56WFCCG.js";
import "./chunk-UQSJS3WG.js";
import "./chunk-NGXXDUKF.js";
import "./chunk-HFZLM4KU.js";
import "./chunk-7PVJDRX7.js";
import "./chunk-JSKUOW56.js";
import "./chunk-SHFGBADJ.js";
import "./chunk-3MFXKT2T.js";
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
import "./chunk-FWKJPKUC.js";
import "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/operators/json/convexHullOperator.js
function a(t) {
  const r = Pe(t);
  return Me(w(r.getGeometry()), r.getSpatialReference());
}
function c(e, r = {}) {
  const { merge: o = false } = r, [u, a2] = Be(e);
  return _(u, o).map(((e2) => Me(e2, a2)));
}
function p(e) {
  return D(Ve(e));
}
export {
  a as execute,
  c as executeMany,
  p as isConvex
};
//# sourceMappingURL=chunk-ULJDOIX6.js.map
