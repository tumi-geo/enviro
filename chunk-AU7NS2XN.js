import {
  n
} from "./chunk-SFSCIIBR.js";
import {
  a as a4,
  m as m3,
  p as p2,
  y
} from "./chunk-OUUGPC3Y.js";
import {
  R,
  V
} from "./chunk-DSM6S4WO.js";
import "./chunk-4U6GJR4R.js";
import "./chunk-CGRX345G.js";
import "./chunk-XO2Q4GTH.js";
import "./chunk-ZTI4G5D6.js";
import "./chunk-KMT2VGGD.js";
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
import "./chunk-JTJACYMI.js";
import {
  i as i2
} from "./chunk-MDXQJDY6.js";
import {
  l
} from "./chunk-L52TSGGN.js";
import {
  e
} from "./chunk-UOIXEAP6.js";
import {
  t
} from "./chunk-MAR5KPTI.js";
import {
  b2 as b,
  m as m2
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
import "./chunk-6QXOVETH.js";
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

// node_modules/@arcgis/core/layers/IntegratedMeshLayer.js
var A = class extends R(l(b(j(t(S(e(i2(h)))))))) {
  constructor(...e2) {
    super(...e2), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this.path = null, this.definitionExpression = null;
  }
  initialize() {
    this.addHandles(a3((() => this.modifications), "after-changes", (() => this.modifications = this.modifications), U));
  }
  normalizeCtorArgs(e2, t2) {
    return "string" == typeof e2 ? __spreadValues({ url: e2 }, t2) : e2;
  }
  readModifications(e2, t2, o2) {
    this._modificationsSource = { url: p(e2, o2), context: o2 };
  }
  set elevationInfo(e2) {
    null != e2 && "absolute-height" !== e2.mode || this._set("elevationInfo", e2), this._validateElevationInfo(e2);
  }
  load(e2) {
    return __async(this, null, function* () {
      return this.addResolvingPromise(this._doLoad(e2)), this;
    });
  }
  _doLoad(e2) {
    return __async(this, null, function* () {
      const t2 = e2?.signal;
      try {
        yield this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2);
      } catch (o2) {
        a(o2);
      }
      if (yield this._fetchService(t2), null != this._modificationsSource) {
        const t3 = yield n.fromUrl(this._modificationsSource.url, this.spatialReference, e2);
        this.setAtOrigin("modifications", t3, this._modificationsSource.context.origin), this._modificationsSource = null;
      }
      yield this._fetchIndexAndUpdateExtent(this.nodePages, t2);
    });
  }
  beforeSave() {
    if (null != this._modificationsSource) return this.load().then((() => {
    }), (() => {
    }));
  }
  saveAs(e2, t2) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(V.SAVE_AS, __spreadProps(__spreadValues({}, t2), { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }), e2);
    });
  }
  save() {
    return __async(this, null, function* () {
      const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
      return this._debouncedSaveOperations(V.SAVE, e2);
    });
  }
  validateLayer(e2) {
    if (e2.layerType && "IntegratedMesh" !== e2.layerType) throw new s("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new s("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1) throw new s("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
  _validateElevationInfo(e2) {
    const t2 = "Integrated mesh layers";
    $(i.getLogger(this), Z(t2, "absolute-height", e2)), $(i.getLogger(this), w(t2, e2));
  }
};
r([m({ type: String, readOnly: true })], A.prototype, "geometryType", void 0), r([m({ type: ["show", "hide"] })], A.prototype, "listMode", void 0), r([m({ type: ["IntegratedMeshLayer"] })], A.prototype, "operationalLayerType", void 0), r([m({ json: { read: false }, readOnly: true })], A.prototype, "type", void 0), r([m({ type: p2, readOnly: true })], A.prototype, "nodePages", void 0), r([m({ type: [a4], readOnly: true })], A.prototype, "materialDefinitions", void 0), r([m({ type: [y], readOnly: true })], A.prototype, "textureSetDefinitions", void 0), r([m({ type: [m3], readOnly: true })], A.prototype, "geometryDefinitions", void 0), r([m({ readOnly: true })], A.prototype, "serviceUpdateTimeStamp", void 0), r([m({ type: n, clonable: (e2) => e2.clone() }), v({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], A.prototype, "modifications", void 0), r([o(["web-scene", "portal-item"], "modifications")], A.prototype, "readModifications", null), r([m(m2)], A.prototype, "elevationInfo", null), r([m({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], A.prototype, "path", void 0), A = r([a2("esri.layers.IntegratedMeshLayer")], A);
var P = A;
export {
  P as default
};
//# sourceMappingURL=chunk-AU7NS2XN.js.map
