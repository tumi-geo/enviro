import {
  b as b3,
  c as c3
} from "./chunk-T44L7J4Z.js";
import "./chunk-KQFCV2R3.js";
import {
  l as l4
} from "./chunk-LKDWYVQN.js";
import "./chunk-2DBAYOG7.js";
import "./chunk-7EBZ666S.js";
import {
  v
} from "./chunk-NQ7XWYJ7.js";
import "./chunk-EUOUOULV.js";
import {
  i
} from "./chunk-T3JLURCA.js";
import "./chunk-HKAYCBHM.js";
import "./chunk-QLRE73SZ.js";
import "./chunk-YXJENN63.js";
import {
  b2
} from "./chunk-EX6CFV7G.js";
import "./chunk-IXAEY3WK.js";
import {
  S
} from "./chunk-XABDSHKH.js";
import {
  h as h2
} from "./chunk-UAINLSVQ.js";
import "./chunk-ROJREOS4.js";
import "./chunk-GNCPI2AX.js";
import "./chunk-CVU3XSZQ.js";
import {
  n,
  t
} from "./chunk-QAS34KWO.js";
import "./chunk-N3OHVW7O.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import "./chunk-72EYURPT.js";
import "./chunk-DE5G7AIG.js";
import "./chunk-RFGZMFOP.js";
import {
  c as c2
} from "./chunk-GK6TRL6Y.js";
import "./chunk-ZH5LJQAI.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-DV7BEHER.js";
import {
  a2,
  c,
  l as l3
} from "./chunk-I2QGHF2M.js";
import {
  a as a3
} from "./chunk-VKWEVSRD.js";
import {
  X
} from "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-42IM5JRX.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import {
  V
} from "./chunk-FXVZ2Z5Z.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import {
  _
} from "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-57B3JMFY.js";
import {
  l,
  w
} from "./chunk-MBW5VYJA.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import {
  l as l2
} from "./chunk-7ZUHIRNS.js";
import {
  b,
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
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
import {
  o4 as o
} from "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import {
  h
} from "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/analysis/LineOfSightAnalysisObserver.js
var f = class extends l2.JSONSupportMixin(a3.ClonableMixin(b)) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return o(this.position, o2.position) && o(this.elevationInfo, o2.elevationInfo) && c3(this.feature, o2.feature);
  }
};
r([m({ type: _, json: { write: { isRequired: true } } })], f.prototype, "position", void 0), r([m({ type: c2 }), v()], f.prototype, "elevationInfo", void 0), r([m(b3)], f.prototype, "feature", void 0), f = r([a("esri.analysis.LineOfSightAnalysisObserver")], f);
var u = f;

// node_modules/@arcgis/core/analysis/LineOfSightAnalysisTarget.js
var l5 = class extends l2.JSONSupportMixin(a3) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return o(this.position, o2.position) && o(this.elevationInfo, o2.elevationInfo) && c3(this.feature, o2.feature);
  }
};
r([m({ type: _, json: { write: true, origins: { "web-scene": { write: { isRequired: true } } } } }), v()], l5.prototype, "position", void 0), r([m({ type: c2 }), v()], l5.prototype, "elevationInfo", void 0), r([m(b3)], l5.prototype, "feature", void 0), l5 = r([a("esri.analysis.LineOfSightAnalysisTarget")], l5);

// node_modules/@arcgis/core/analysis/LineOfSightAnalysis.js
var d = V.ofType(l5);
var j = class extends l4 {
  constructor(t2) {
    super(t2), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(l((() => this._computeExtent()), ((t2) => {
      null == t2?.pending && this._set("extent", null != t2 ? t2.extent : null);
    }), w));
  }
  get targets() {
    return this._get("targets") || new d();
  }
  set targets(t2) {
    this._set("targets", n(t2, this.targets, d));
  }
  get spatialReference() {
    return null != this.observer?.position ? this.observer.position.spatialReference : null;
  }
  get valid() {
    return null != this.observer?.position;
  }
  waitComputeExtent() {
    return __async(this, null, function* () {
      const t2 = this._computeExtent();
      return null != t2 ? t2.pending : Promise.resolve();
    });
  }
  _computeExtent() {
    const t2 = this.spatialReference;
    if (null == this.observer?.position || null == t2) return null;
    const e = (t3) => "absolute-height" === i(t3.position, t3.elevationInfo), r2 = this.observer.position, o2 = a2(r2.x, r2.y, r2.z, r2.x, r2.y, r2.z);
    for (const i2 of this.targets) if (null != i2.position) {
      const e2 = X(i2.position, t2);
      if (null != e2.pending) return { pending: e2.pending, extent: null };
      if (null != e2.geometry) {
        const { x: t3, y: r3, z: s2 } = e2.geometry;
        l3(o2, [t3, r3, s2]);
      }
    }
    const s = c(o2, t2);
    return e(this.observer) && this.targets.every(e) || (s.zmin = void 0, s.zmax = void 0), { pending: null, extent: s };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
  equals(t2) {
    return this === t2 || super.equals(t2) && o(this.observer, t2.observer) && h(this.targets.toArray(), t2.targets.toArray(), ((t3, e) => t3.equals(e)));
  }
};
r([m({ type: ["line-of-sight"] })], j.prototype, "type", void 0), r([m({ type: u, json: { read: true, write: true } })], j.prototype, "observer", void 0), r([m({ cast: t, type: d, nonNullable: true, json: { read: true, write: true } })], j.prototype, "targets", null), r([m({ value: null, readOnly: true })], j.prototype, "extent", void 0), r([m()], j.prototype, "spatialReference", null), r([m({ readOnly: true })], j.prototype, "valid", null), j = r([a("esri.analysis.LineOfSightAnalysis")], j);

// node_modules/@arcgis/core/layers/LineOfSightLayer.js
var u2 = V.ofType(l5);
var d2 = class extends b2(S(h2)) {
  constructor(e) {
    super(e), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new j(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(l((() => this.analysis), ((e, t2) => {
      null != t2 && t2.parent === this && (t2.parent = null), null != e && (e.parent = this);
    }), w));
  }
  load() {
    return __async(this, null, function* () {
      return null != this.analysis && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
    });
  }
  get observer() {
    return this.analysis?.observer;
  }
  set observer(e) {
    const { analysis: t2 } = this;
    t2 && (t2.observer = e);
  }
  get targets() {
    return null != this.analysis ? this.analysis.targets : new V();
  }
  set targets(e) {
    n(e, this.analysis?.targets);
  }
  get fullExtent() {
    return null != this.analysis ? this.analysis.extent : null;
  }
  get spatialReference() {
    return null != this.analysis ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(e) {
    this.analysis === e && (this.analysis = new j());
  }
};
r([m({ json: { read: false }, readOnly: true })], d2.prototype, "type", void 0), r([m({ type: ["LineOfSightLayer"] })], d2.prototype, "operationalLayerType", void 0), r([m({ type: u, json: { read: true, write: { isRequired: true, ignoreOrigin: true } } })], d2.prototype, "observer", null), r([m({ type: u2, json: { read: true, write: { ignoreOrigin: true, isRequired: true } } })], d2.prototype, "targets", null), r([m({ type: j, nonNullable: true, json: { read: false, write: false } })], d2.prototype, "analysis", void 0), r([m({ readOnly: true })], d2.prototype, "fullExtent", null), r([m({ readOnly: true })], d2.prototype, "spatialReference", null), r([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], d2.prototype, "opacity", void 0), r([m({ type: ["show", "hide"] })], d2.prototype, "listMode", void 0), d2 = r([a("esri.layers.LineOfSightLayer")], d2);
var m2 = d2;
export {
  m2 as default
};
//# sourceMappingURL=chunk-K7IMFEGT.js.map
