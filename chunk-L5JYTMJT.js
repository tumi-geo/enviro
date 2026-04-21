import {
  p
} from "./chunk-4U6GJR4R.js";
import {
  $,
  P
} from "./chunk-YTJBIP3G.js";
import "./chunk-CGRX345G.js";
import "./chunk-XO2Q4GTH.js";
import {
  o
} from "./chunk-ZTI4G5D6.js";
import "./chunk-KMT2VGGD.js";
import "./chunk-QLRE73SZ.js";
import {
  E,
  c,
  i,
  s
} from "./chunk-VGPJZZUW.js";
import "./chunk-FNFXIMG2.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-QKFL335K.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-57B3JMFY.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/save/groupLayerUtils.js
var u = "Group Layer";
var c2 = "group-layer-save";
var l = "group-layer-save-as";
var p2 = E.GROUP_LAYER_MAP;
function m(e) {
  return { isValid: "group" === e.type, errorMessage: "Layer.type should be 'group'" };
}
function y(e) {
  return { isValid: s(e, p2), errorMessage: `Layer.portalItem.typeKeywords should have '${p2}'` };
}
function f(e, r) {
  return __spreadProps(__spreadValues({}, o(e, "web-map", true)), { initiator: r });
}
function v(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
function d(e, r) {
  return __async(this, null, function* () {
    r.title ||= e.title, c(r, E.METADATA), i(r, p2);
  });
}
function I(r, t) {
  return __async(this, null, function* () {
    return P({ layer: r, itemType: u, validateLayer: m, validateItem: y, createJSONContext: (e) => f(e, r), createItemData: v, errorNamePrefix: c2, saveResources: (e, t2) => __async(null, null, function* () {
      return r.sourceIsPortalItem || (yield e.removeAllResources().catch((() => {
      }))), p(r.resourceReferences, t2);
    }) }, t);
  });
}
function g(e, t, o2) {
  return __async(this, null, function* () {
    return $({ layer: e, itemType: u, validateLayer: m, createJSONContext: (r) => f(r, e), createItemData: v, errorNamePrefix: l, newItem: t, setItemProperties: d, saveResources: (r, t2) => p(e.resourceReferences, t2) }, o2);
  });
}
export {
  I as save,
  g as saveAs
};
//# sourceMappingURL=chunk-L5JYTMJT.js.map
