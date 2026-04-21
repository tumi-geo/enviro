import {
  o,
  u
} from "./chunk-3LVAFQDR.js";
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
import {
  L
} from "./chunk-FWKJPKUC.js";
import "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/operators/json/intersectionOperator.js
function c(e, t) {
  const a = Pe(e), c2 = a.getSpatialReference();
  return Me(o(a.getGeometry(), Ve(t), c2), c2);
}
function i(r, o2) {
  const [c2, i2] = Be(r);
  return u(c2, Ve(o2), i2, 7).map(((e) => Me(e, i2))).filter(L);
}
export {
  c as execute,
  i as executeMany
};
//# sourceMappingURL=chunk-3JV6PODE.js.map
