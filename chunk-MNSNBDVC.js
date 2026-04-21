import {
  f
} from "./chunk-5GFKPKVK.js";
import {
  p
} from "./chunk-ITUTMIB7.js";
import "./chunk-B3QELSYM.js";
import "./chunk-K5OIUFLW.js";
import {
  t
} from "./chunk-MAR5KPTI.js";
import {
  b2 as b,
  d,
  u as u2,
  y
} from "./chunk-EX6CFV7G.js";
import "./chunk-IXAEY3WK.js";
import {
  j
} from "./chunk-JHV3VRSM.js";
import {
  S
} from "./chunk-XABDSHKH.js";
import {
  h
} from "./chunk-UAINLSVQ.js";
import "./chunk-CVU3XSZQ.js";
import "./chunk-VGPJZZUW.js";
import {
  a as a3
} from "./chunk-PPYJGQC2.js";
import "./chunk-N3OHVW7O.js";
import {
  m as m3,
  u
} from "./chunk-66I5P6AF.js";
import {
  c,
  m as m2
} from "./chunk-IB63APHQ.js";
import "./chunk-2JXAQB6C.js";
import "./chunk-FNFXIMG2.js";
import "./chunk-GK6TRL6Y.js";
import "./chunk-ZH5LJQAI.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-DV7BEHER.js";
import "./chunk-GUUR524U.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-42IM5JRX.js";
import "./chunk-CO2FWOAQ.js";
import "./chunk-ML2Q6ZHW.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-QKFL335K.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import {
  z
} from "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import {
  o
} from "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import {
  C
} from "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2
} from "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import {
  qt
} from "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import {
  a
} from "./chunk-OX6HQ7WO.js";
import {
  s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/GeoRSSLayer.js
var G = ["atom", "xml"];
var P = { base: c, key: "type", typeMap: { "simple-line": m2 }, errorContext: "symbol" };
var R = { base: c, key: "type", typeMap: { "picture-marker": a3, "simple-marker": u }, errorContext: "symbol" };
var k = { base: c, key: "type", typeMap: { "simple-fill": m3 }, errorContext: "symbol" };
var _ = class extends p(f(b(j(t(S(h)))))) {
  constructor(...e) {
    super(...e), this.description = null, this.fullExtent = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e, o2) {
    return "string" == typeof e ? __spreadValues({ url: e }, o2) : e;
  }
  readFeatureCollections(e, o2) {
    return o2.featureCollection.layers.forEach(((e2) => {
      const o3 = e2.layerDefinition.drawingInfo.renderer.symbol;
      o3 && "esriSFS" === o3.type && o3.outline?.style.includes("esriSFS") && (o3.outline.style = "esriSLSSolid");
    })), o2.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e = this._get("title");
    return e && "defaults" !== this.originOf("title") ? e : this.url ? qt(this.url, G) || "GeoRSS" : e;
  }
  set title(e) {
    this._set("title", e);
  }
  load(e) {
    const o2 = null != e ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e).catch(a).then((() => this._fetchService(o2))).then(((e2) => {
      this.read(e2, { origin: "service" });
    }))), Promise.resolve(this);
  }
  hasDataChanged() {
    return __async(this, null, function* () {
      const e = yield this._fetchService();
      return this.read(e, { origin: "service", ignoreDefaults: true }), true;
    });
  }
  _fetchService(e) {
    return __async(this, null, function* () {
      const t2 = this.spatialReference, { data: s2 } = yield H(s.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: C(t2) ? void 0 : t2.wkid ?? JSON.stringify(t2) }, signal: e });
      return s2;
    });
  }
  _hasGeometry(e) {
    return this.featureCollections?.some(((o2) => o2.featureSet?.geometryType === e && o2.featureSet.features?.length > 0)) ?? false;
  }
};
r([m()], _.prototype, "description", void 0), r([m()], _.prototype, "featureCollections", void 0), r([o("service", "featureCollections", ["featureCollection.layers"])], _.prototype, "readFeatureCollections", null), r([m({ type: z, json: { name: "lookAtExtent" } })], _.prototype, "fullExtent", void 0), r([m(u2)], _.prototype, "id", void 0), r([m(d)], _.prototype, "legendEnabled", void 0), r([m({ types: P, json: { write: true } })], _.prototype, "lineSymbol", void 0), r([m({ type: ["show", "hide"] })], _.prototype, "listMode", void 0), r([m({ types: R, json: { write: true } })], _.prototype, "pointSymbol", void 0), r([m({ types: k, json: { write: true } })], _.prototype, "polygonSymbol", void 0), r([m({ type: ["GeoRSS"] })], _.prototype, "operationalLayerType", void 0), r([m(y)], _.prototype, "url", void 0), r([m({ json: { origins: { service: { read: { source: "name", reader: (e) => e || void 0 } } } } })], _.prototype, "title", null), r([m({ readOnly: true, json: { read: false }, value: "geo-rss" })], _.prototype, "type", void 0), _ = r([a2("esri.layers.GeoRSSLayer")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=chunk-MNSNBDVC.js.map
