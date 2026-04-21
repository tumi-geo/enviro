import {
  e,
  o,
  u
} from "./chunk-I7TUGIS5.js";
import {
  Be,
  Me,
  Pe
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

// node_modules/@arcgis/core/geometry/operators/json/simplifyOperator.js
function p(e2) {
  const r = Pe(e2), c = r.getSpatialReference();
  return Me(e(r.getGeometry(), c, false), c);
}
function a(e2) {
  const [t, o2] = Be(e2);
  return o(t, o2, false).map(((e3) => Me(e3, o2)));
}
function i(t) {
  const r = Pe(t);
  return u(r.getGeometry(), r.getSpatialReference(), false);
}
export {
  p as execute,
  a as executeMany,
  i as isSimple
};
//# sourceMappingURL=chunk-RC5AIT3D.js.map
