import {
  n as n2
} from "./chunk-SFSCIIBR.js";
import {
  v
} from "./chunk-NQ7XWYJ7.js";
import "./chunk-EUOUOULV.js";
import {
  $,
  Z,
  w
} from "./chunk-T3JLURCA.js";
import "./chunk-QLRE73SZ.js";
import "./chunk-YXJENN63.js";
import {
  i as i2
} from "./chunk-MDXQJDY6.js";
import {
  l as l2
} from "./chunk-L52TSGGN.js";
import {
  e
} from "./chunk-UOIXEAP6.js";
import {
  t
} from "./chunk-MAR5KPTI.js";
import {
  b2 as b,
  m as m2,
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
import "./chunk-N3OHVW7O.js";
import "./chunk-FNFXIMG2.js";
import {
  E,
  R,
  c,
  d,
  l,
  s as s2,
  u as u2
} from "./chunk-RFGZMFOP.js";
import "./chunk-GK6TRL6Y.js";
import "./chunk-ZH5LJQAI.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-DV7BEHER.js";
import "./chunk-GUUR524U.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import {
  o as o2
} from "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-42IM5JRX.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-DYKJGD4N.js";
import {
  n,
  r as r2
} from "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-QKFL335K.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-CDZYVN2H.js";
import {
  M
} from "./chunk-SDPHKB3N.js";
import {
  z
} from "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import {
  o
} from "./chunk-KS4WXQBA.js";
import {
  f
} from "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import {
  u
} from "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-57B3JMFY.js";
import {
  U,
  a as a3
} from "./chunk-MBW5VYJA.js";
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
  H,
  p
} from "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
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
  i3 as i,
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/IntegratedMesh3DTilesLayer.js
var X = class extends l2(b(j(t(S(e(i2(h))))))) {
  readModifications(e2, t2, i3) {
    this._modificationsSource = { url: p(e2, i3), context: i3 };
  }
  initialize() {
    this.addHandles(a3((() => this.modifications), "after-changes", (() => this.modifications = this.modifications), U));
  }
  constructor(e2) {
    super(e2), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.modifications = null, this._modificationsSource = null, this.spatialReference = new f({ wkid: 4326, vcsWkid: 115700 }), this.fullExtent = new z(-180, -90, 180, 90, this.spatialReference), this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0, this.rootTilesetJSON = null;
  }
  set elevationInfo(e2) {
    null != e2 && "absolute-height" !== e2.mode || this._set("elevationInfo", e2), this._validateElevationInfo(e2);
  }
  _verifyArray(e2, t2) {
    if (!Array.isArray(e2) || e2.length < t2) return false;
    for (const i3 of e2) if ("number" != typeof i3) return false;
    return true;
  }
  _initFullExtent() {
    const e2 = this.rootTilesetJSON?.root?.boundingVolume;
    if (!e2) return;
    if (e2.box) {
      const t3 = e2?.box;
      if (t3[3] > 7645211 && t3[7] > 7645211 && t3[11] > 7645211) return;
    }
    const t2 = this.rootTilesetJSON?.root?.transform, i3 = n();
    if (e2.region && this._verifyArray(e2.region, 6)) {
      const t3 = e2.region, i4 = M(t3[0]), r3 = M(t3[1]), s3 = t3[4], a4 = M(t3[2]), n3 = M(t3[3]), l3 = t3[5];
      this.fullExtent = new z({ xmin: i4, ymin: r3, zmin: s3, xmax: a4, ymax: n3, zmax: l3, spatialReference: this.spatialReference });
    } else if (e2.sphere && this._verifyArray(e2.sphere, 4)) {
      const r3 = e2.sphere, o3 = r2(r3[0], r3[1], r3[2]), s3 = r3[3] / Math.sqrt(3), a4 = n();
      c(a4, o3, r2(s3, s3, s3));
      const n3 = n();
      if (u2(n3, o3, r2(s3, s3, s3)), t2 && this._verifyArray(t2, 16)) {
        const e3 = t2;
        E(i3, a4, e3), s2(a4, i3), E(i3, n3, e3), s2(n3, i3);
      }
      o2(a4, u, 0, a4, f.WGS84, 0), o2(n3, u, 0, n3, f.WGS84, 0);
      const l3 = n(), m3 = n();
      l(l3, a4, n3), d(m3, a4, n3), this.fullExtent = new z({ xmin: l3[0], ymin: l3[1], zmin: l3[2], xmax: m3[0], ymax: m3[1], zmax: m3[2], spatialReference: this.spatialReference });
    } else if (e2.box && this._verifyArray(e2.box, 12)) {
      const i4 = e2.box, r3 = r2(i4[0], i4[1], i4[2]), o3 = r2(i4[3], i4[4], i4[5]), s3 = r2(i4[6], i4[7], i4[8]), a4 = r2(i4[9], i4[10], i4[11]), n3 = [];
      for (let e3 = 0; e3 < 8; ++e3) n3.push(n());
      if (u2(n3[0], r3, o3), u2(n3[0], n3[0], s3), u2(n3[0], n3[0], a4), R(n3[1], r3, o3), u2(n3[1], n3[1], s3), u2(n3[1], n3[1], a4), u2(n3[2], r3, o3), R(n3[2], n3[2], s3), u2(n3[2], n3[2], a4), R(n3[3], r3, o3), R(n3[3], n3[3], s3), u2(n3[3], n3[3], a4), u2(n3[4], r3, o3), u2(n3[4], n3[4], s3), R(n3[4], n3[4], a4), R(n3[5], r3, o3), u2(n3[5], n3[5], s3), R(n3[5], n3[5], a4), u2(n3[6], r3, o3), R(n3[6], n3[6], s3), R(n3[6], n3[6], a4), R(n3[7], r3, o3), R(n3[7], n3[7], s3), R(n3[7], n3[7], a4), t2 && this._verifyArray(t2, 16)) {
        const e3 = t2;
        for (let t3 = 0; t3 < 8; ++t3) E(n3[t3], n3[t3], e3);
      }
      const l3 = r2(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), m3 = r2(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      for (let e3 = 0; e3 < 8; ++e3) o2(n3[e3], u, 0, n3[e3], f.WGS84, 0), l(m3, m3, n3[e3]), d(l3, l3, n3[e3]);
      this.fullExtent = new z({ xmin: m3[0], ymin: m3[1], zmin: m3[2], xmax: l3[0], ymax: l3[1], zmax: l3[2], spatialReference: this.spatialReference });
    }
  }
  load(e2) {
    return __async(this, null, function* () {
      return this.addResolvingPromise(this._doLoad(e2)), this;
    });
  }
  _doLoad(e2) {
    return __async(this, null, function* () {
      const r3 = null != e2 ? e2.signal : null;
      try {
        yield this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (e3) => {
          if (e3.typeKeywords?.includes("IntegratedMesh")) return true;
          throw new s("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
        } }, e2);
      } catch (o3) {
        a(o3);
      }
      if (null != this._modificationsSource) {
        const t2 = yield n2.fromUrl(this._modificationsSource.url, this.spatialReference, e2);
        this.setAtOrigin("modifications", t2, this._modificationsSource.context.origin), this._modificationsSource = null;
      }
      if (this.url) {
        const e3 = H(this.url, { query: __spreadProps(__spreadValues({}, this.customParameters), { token: this.apiKey }), responseType: "json", signal: r3 }).then(((e4) => {
          this.rootTilesetJSON = e4.data, this._initFullExtent();
        }), ((e4) => {
          a(e4);
        }));
        yield e3;
      }
    });
  }
  beforeSave() {
    if (null != this._modificationsSource) return this.load().then((() => {
    }), (() => {
    }));
  }
  fetchAttributionData() {
    return __async(this, null, function* () {
      return this.load().then((() => ({})));
    });
  }
  _validateElevationInfo(e2) {
    const t2 = "Integrated mesh 3d tiles layers";
    $(i.getLogger(this), Z(t2, "absolute-height", e2)), $(i.getLogger(this), w(t2, e2));
  }
};
r([m({ type: ["IntegratedMesh3DTilesLayer"] })], X.prototype, "operationalLayerType", void 0), r([m({ type: n2, clonable: (e2) => e2.clone() }), v({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], X.prototype, "modifications", void 0), r([o(["web-scene", "portal-item"], "modifications")], X.prototype, "readModifications", null), r([m({ type: f })], X.prototype, "spatialReference", void 0), r([m({ type: z })], X.prototype, "fullExtent", void 0), r([m(m2)], X.prototype, "elevationInfo", null), r([m({ type: ["show", "hide"] })], X.prototype, "listMode", void 0), r([m(y)], X.prototype, "url", void 0), r([m({ readOnly: true })], X.prototype, "type", void 0), r([m({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], X.prototype, "path", void 0), r([m({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], X.prototype, "minScale", void 0), r([m({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], X.prototype, "maxScale", void 0), X = r([a2("esri.layers.IntegratedMesh3DTilesLayer")], X);
var G = X;
export {
  G as default
};
//# sourceMappingURL=chunk-67Q7QDRR.js.map
