import {
  p
} from "./chunk-PAK2LY4A.js";
import "./chunk-SC7NRW7M.js";
import "./chunk-5OCXTKAD.js";
import {
  h
} from "./chunk-2YN3XZOT.js";
import "./chunk-KV2OF6XW.js";
import "./chunk-IMXLHKPN.js";
import "./chunk-MZUMJDHL.js";
import "./chunk-L4AJJTF2.js";
import {
  m as m2
} from "./chunk-JTJACYMI.js";
import {
  l
} from "./chunk-L52TSGGN.js";
import {
  b2 as b,
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
  h as h2
} from "./chunk-UAINLSVQ.js";
import "./chunk-CVU3XSZQ.js";
import "./chunk-VGPJZZUW.js";
import "./chunk-N3OHVW7O.js";
import "./chunk-FNFXIMG2.js";
import "./chunk-JQIIEVNP.js";
import "./chunk-JINM5JNG.js";
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
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-QKFL335K.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-KHKWAA5Q.js";
import "./chunk-Z43IMVPB.js";
import "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import {
  o
} from "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-Q4ZBFQUV.js";
import "./chunk-AQ5AB5ZX.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-WLCZHZ7R.js";
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
  v
} from "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-TBOXDPPB.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import {
  a,
  s as s2,
  t2 as t
} from "./chunk-OX6HQ7WO.js";
import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/support/ElevationTileData.js
var a3 = class {
  constructor(a4, t3, s4, e) {
    this._hasNoDataValues = null, this._minValue = null, this._maxValue = null, "pixelData" in a4 ? (this.values = a4.pixelData, this.width = a4.width, this.height = a4.height, this.noDataValue = a4.noDataValue) : (this.values = a4, this.width = t3, this.height = s4, this.noDataValue = e);
  }
  get hasNoDataValues() {
    if (null == this._hasNoDataValues) {
      const a4 = this.noDataValue;
      this._hasNoDataValues = this.values.includes(a4);
    }
    return this._hasNoDataValues;
  }
  get minValue() {
    return this._ensureBounds(), this._minValue;
  }
  get maxValue() {
    return this._ensureBounds(), this._maxValue;
  }
  get cachedMemory() {
    return this.values.byteLength + 256;
  }
  _ensureBounds() {
    if (null != this._minValue) return;
    const { noDataValue: a4, values: t3 } = this;
    let s4 = 1 / 0, e = -1 / 0, i = true;
    for (const h3 of t3) h3 === a4 ? this._hasNoDataValues = true : (s4 = h3 < s4 ? h3 : s4, e = h3 > e ? h3 : e, i = false);
    i ? (this._minValue = 0, this._maxValue = 0) : (this._minValue = s4, this._maxValue = e > -3e38 ? e : 0);
  }
};

// node_modules/@arcgis/core/layers/support/LercDecoder.js
var r2 = class extends h {
  constructor(e = null) {
    super("LercWorker", "_decode", { _decode: (e2) => [e2.buffer] }, e, { strategy: "dedicated" }), this.schedule = e, this.ref = 0;
  }
  decode(e, r3, t3) {
    return e && 0 !== e.byteLength ? this.invoke({ buffer: e, options: r3 }, t3) : Promise.resolve(null);
  }
  release() {
    --this.ref <= 0 && (t2.forEach(((e, r3) => {
      e === this && t2.delete(r3);
    })), this.destroy());
  }
};
var t2 = /* @__PURE__ */ new Map();
function s3(e = null) {
  let s4 = t2.get(e);
  return s4 || (null != e ? (s4 = new r2(((r3) => e.immediate.schedule(r3))), t2.set(e, s4)) : (s4 = new r2(), t2.set(null, s4))), ++s4.ref, s4;
}

// node_modules/@arcgis/core/layers/ElevationLayer.js
var S2 = class extends p(l(b(j(S(h2))))) {
  constructor(...e) {
    super(...e), this.capabilities = { operations: { supportsTileMap: false } }, this.copyright = null, this.heightModelInfo = null, this.path = null, this.minScale = void 0, this.maxScale = void 0, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = s3();
  }
  normalizeCtorArgs(e, r3) {
    return "string" == typeof e ? __spreadValues({ url: e }, r3) : e;
  }
  destroy() {
    this._lercDecoder = t(this._lercDecoder);
  }
  readCapabilities(e, r3) {
    const t3 = r3.capabilities && r3.capabilities.split(",").map(((e2) => e2.toLowerCase().trim()));
    if (!t3) return { operations: { supportsTileMap: false } };
    return { operations: { supportsTileMap: t3.includes("tilemap") } };
  }
  readVersion(e, r3) {
    let t3 = r3.currentVersion;
    return t3 || (t3 = 9.3), t3;
  }
  load(e) {
    const r3 = null != e ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: false, validateItem: (e2) => {
      if (e2.typeKeywords) {
        for (let r4 = 0; r4 < e2.typeKeywords.length; r4++) if ("elevation 3d layer" === e2.typeKeywords[r4].toLowerCase()) return true;
      }
      throw new s("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, e).catch(a).then((() => this._fetchImageService(r3)))), Promise.resolve(this);
  }
  fetchTile(e, t3, i, o2) {
    const s4 = o2?.signal, a4 = { responseType: "array-buffer", signal: s4 }, p2 = { noDataValue: o2?.noDataValue, returnFileInfo: true };
    return this.load().then((() => this._fetchTileAvailability(e, t3, i, o2))).then((() => H(this.getTileUrl(e, t3, i), a4))).then(((e2) => this._lercDecoder.decode(e2.data, p2, s4))).then(((e2) => new a3(e2)));
  }
  getTileUrl(e, r3, t3) {
    const i = !this.capabilities.operations.supportsTileMap && this.supportsBlankTile, o2 = v(__spreadProps(__spreadValues({}, this.parsedUrl.query), { blankTile: !i && null }));
    return `${this.parsedUrl.path}/tile/${e}/${r3}/${t3}${o2 ? "?" + o2 : ""}`;
  }
  queryElevation(e, r3) {
    return __async(this, null, function* () {
      const { ElevationQuery: t3 } = yield import("./chunk-CUWHBC65.js");
      s2(r3);
      return new t3().query(this, e, r3);
    });
  }
  createElevationSampler(e, r3) {
    return __async(this, null, function* () {
      const { ElevationQuery: t3 } = yield import("./chunk-CUWHBC65.js");
      s2(r3);
      return new t3().createSampler(this, e, r3);
    });
  }
  _fetchTileAvailability(e, r3, t3, i) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e, r3, t3, i) : Promise.resolve("unknown");
  }
  _fetchImageService(e) {
    return __async(this, null, function* () {
      if (this.sourceJSON) return this.sourceJSON;
      const t3 = { query: __spreadValues({ f: "json" }, this.parsedUrl.query), responseType: "json", signal: e }, i = yield H(this.parsedUrl.path, t3);
      i.ssl && (this.url = this.url?.replace(/^http:/i, "https:")), this.sourceJSON = i.data, this.read(i.data, { origin: "service", url: this.parsedUrl });
    });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile[w];
  }
};
r([m({ readOnly: true })], S2.prototype, "capabilities", void 0), r([o("service", "capabilities", ["capabilities"])], S2.prototype, "readCapabilities", null), r([m({ json: { read: { source: "copyrightText" } } })], S2.prototype, "copyright", void 0), r([m({ readOnly: true, type: m2 })], S2.prototype, "heightModelInfo", void 0), r([m({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], S2.prototype, "path", void 0), r([m({ type: ["show", "hide"] })], S2.prototype, "listMode", void 0), r([m({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S2.prototype, "minScale", void 0), r([m({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S2.prototype, "maxScale", void 0), r([m({ json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], S2.prototype, "opacity", void 0), r([m({ type: ["ArcGISTiledElevationServiceLayer"] })], S2.prototype, "operationalLayerType", void 0), r([m()], S2.prototype, "sourceJSON", void 0), r([m({ json: { read: false }, value: "elevation", readOnly: true })], S2.prototype, "type", void 0), r([m(y)], S2.prototype, "url", void 0), r([m()], S2.prototype, "version", void 0), r([o("version", ["currentVersion"])], S2.prototype, "readVersion", null), S2 = r([a2("esri.layers.ElevationLayer")], S2);
var w = Symbol("default-fetch-tile");
S2.prototype.fetchTile[w] = true;
var T = S2;
export {
  T as default
};
//# sourceMappingURL=chunk-SOVPJVAZ.js.map
