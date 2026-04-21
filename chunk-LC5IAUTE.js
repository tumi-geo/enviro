import {
  $,
  P
} from "./chunk-YTJBIP3G.js";
import "./chunk-CGRX345G.js";
import "./chunk-XO2Q4GTH.js";
import "./chunk-ZTI4G5D6.js";
import "./chunk-QLRE73SZ.js";
import {
  E,
  c,
  i,
  l,
  u
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
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/save/mapImageLayerUtils.js
var o = "Map Service";
var l2 = "map-image-layer-save";
var m = "map-image-layer-save-as";
function c2(e) {
  return { isValid: "map-image" === e.type && !e.sourceJSON?.tileInfo, errorMessage: "Layer.type should be 'map-image' and reference a dynamic (non-cached) map service" };
}
function p(e) {
  const t = e.layerJSON;
  return Promise.resolve(t && Object.keys(t).length ? t : null);
}
function u2(e, t) {
  return f(e, t), Promise.resolve();
}
function y(e, t) {
  return __async(this, null, function* () {
    const { parsedUrl: s, title: i2, fullExtent: o2 } = e;
    t.url = s.path, t.title ||= i2, t.extent = o2 ? yield l(o2) : null, c(t, E.METADATA), f(e, t);
  });
}
function f(e, t) {
  i(t, E.DYNAMIC);
  const r = e.sublayers?.length ?? 0;
  u(t, E.MULTI_LAYER, r > 1), u(t, E.SINGLE_LAYER, 1 === r);
}
function v(t, r) {
  return __async(this, null, function* () {
    return P({ layer: t, itemType: o, validateLayer: c2, createItemData: p, errorNamePrefix: l2, setItemProperties: u2 }, r);
  });
}
function I(e, r, a) {
  return __async(this, null, function* () {
    return $({ layer: e, itemType: o, validateLayer: c2, createItemData: p, errorNamePrefix: m, newItem: r, setItemProperties: y }, a);
  });
}
export {
  v as save,
  I as saveAs
};
//# sourceMappingURL=chunk-LC5IAUTE.js.map
