import {
  t
} from "./chunk-YQJDMFT7.js";
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

// node_modules/@arcgis/core/layers/save/imageryUtils.js
var l2 = "Image Service";
var o = "imagery-layer-save";
var m = "imagery-layer-save-as";
var n = "imagery-tile-layer-save";
var c2 = "imagery-tile-layer-save-as";
var p = "WCS";
var u2 = "wcs-layer-save";
var g = "wcs-layer-save-as";
function v(e) {
  if ("imagery" === e.type || "wcs" === e.type) return { isValid: true };
  const { raster: t2 } = e, a = t(t2)[0];
  return { isValid: "RasterTileServer" === a?.datasetFormat && ("Raster" === a.tileType || "Map" === a.tileType), errorMessage: "imagery tile layer should be created from a tiled image service." };
}
function f(e) {
  const t2 = e.layerJSON;
  return Promise.resolve(t2 && Object.keys(t2).length ? t2 : null);
}
function d(e, t2) {
  return __async(this, null, function* () {
    const { parsedUrl: r, title: l3, fullExtent: o2 } = e;
    t2.url = r.path, t2.title ||= l3;
    try {
      t2.extent = yield l(o2);
    } catch {
      t2.extent = void 0;
    }
    c(t2, E.METADATA), u(t2, E.TILED_IMAGERY, "imagery-tile" === e.type);
  });
}
function I(t2, r) {
  return __async(this, null, function* () {
    const a = "imagery" === t2.type ? o : "imagery-tile" === t2.type ? n : u2, s = "wcs" === t2.type ? p : l2;
    return P({ layer: t2, itemType: s, validateLayer: v, createItemData: f, errorNamePrefix: a }, r);
  });
}
function T(e, r, a) {
  return __async(this, null, function* () {
    const s = "imagery" === e.type ? m : "imagery-tile" === e.type ? c2 : g, i = "wcs" === e.type ? p : l2;
    return $({ layer: e, itemType: i, validateLayer: v, createItemData: f, errorNamePrefix: s, newItem: r, setItemProperties: d }, a);
  });
}
export {
  I as save,
  T as saveAs
};
//# sourceMappingURL=chunk-XRUHS3FD.js.map
