import {
  b as b2,
  c
} from "./chunk-T44L7J4Z.js";
import "./chunk-KQFCV2R3.js";
import {
  l as l3
} from "./chunk-LKDWYVQN.js";
import "./chunk-2DBAYOG7.js";
import "./chunk-7EBZ666S.js";
import {
  a as a4
} from "./chunk-UGDODU6O.js";
import "./chunk-HKAYCBHM.js";
import {
  b2 as b
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
import "./chunk-GK6TRL6Y.js";
import "./chunk-ZH5LJQAI.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-DV7BEHER.js";
import "./chunk-I2QGHF2M.js";
import {
  a as a3
} from "./chunk-VKWEVSRD.js";
import {
  Y
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
import {
  r as r3,
  s as s2
} from "./chunk-SDPHKB3N.js";
import {
  z
} from "./chunk-7FHCIZTJ.js";
import {
  _
} from "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import {
  r as r2
} from "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
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
import {
  s
} from "./chunk-QXP5CG2R.js";
import {
  l as l2
} from "./chunk-7ZUHIRNS.js";
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2
} from "./chunk-LJ6UKSKZ.js";
import {
  a
} from "./chunk-UMW5MZI7.js";
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

// node_modules/@arcgis/core/analysis/Viewshed.js
var c2 = class extends l2.JSONSupportMixin(a3) {
  constructor(e) {
    super(e), this.observer = null, this.farDistance = 1e3, this.heading = 0, this.tilt = 90, this.horizontalFieldOfView = 45, this.verticalFieldOfView = 45, this.feature = null;
  }
  get valid() {
    return null != this.observer && this.farDistance > 0;
  }
  equals(e) {
    return o(this.observer, e.observer) && this.farDistance === e.farDistance && this.heading === e.heading && this.tilt === e.tilt && this.horizontalFieldOfView === e.horizontalFieldOfView && this.verticalFieldOfView === e.verticalFieldOfView && c(this.feature, e.feature);
  }
};
r([m({ type: _, json: { write: { isRequired: true } } })], c2.prototype, "observer", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0 }, json: { write: { isRequired: true } } })], c2.prototype, "farDistance", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s(((e) => a4.normalize(a(e), void 0, true)))], c2.prototype, "heading", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], c2.prototype, "tilt", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 360 }, json: { write: { isRequired: true } } })], c2.prototype, "horizontalFieldOfView", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], c2.prototype, "verticalFieldOfView", void 0), r([m(b2)], c2.prototype, "feature", void 0), r([m({ readOnly: true, json: { read: false } })], c2.prototype, "valid", null), c2 = r([a2("esri.analysis.Viewshed")], c2);

// node_modules/@arcgis/core/analysis/ViewshedAnalysis.js
var v = V.ofType(c2);
var y = class extends l3 {
  constructor(e) {
    super(e), this.type = "viewshed", this._extent = null;
  }
  initialize() {
    this.addHandles(l((() => this._computeExtent()), ((e) => {
      null == e.pending && (this._extent = e.extent);
    }), w));
  }
  get viewsheds() {
    return this._get("viewsheds") || new v();
  }
  set viewsheds(e) {
    this._set("viewsheds", n(e, this.viewsheds, v));
  }
  get spatialReference() {
    for (const e of this.viewsheds) if (null != e.observer) return e.observer.spatialReference;
    return null;
  }
  get extent() {
    return this._extent;
  }
  get valid() {
    return this.viewsheds.every(((e) => e.valid));
  }
  waitComputeExtent() {
    return __async(this, null, function* () {
      const e = this._computeExtent();
      null != e.pending && (yield e.pending);
    });
  }
  _computeExtent() {
    const { spatialReference: e } = this;
    if (null == e) return { pending: null, extent: null };
    const t2 = this.viewsheds.filter(((e2) => null != e2.observer)), r4 = t2.map(((e2) => e2.observer)).toArray(), s3 = Y(r4, e);
    if (null != s3.pending) return { pending: s3.pending, extent: null };
    return { pending: null, extent: s3.geometries.map(((e2, r5) => {
      const s4 = t2.at(r5);
      return null != e2 && null != s4 ? this._computeViewshedExtent(this.viewsheds.at(r5), e2) : null;
    })).filter(((e2) => null != e2)).reduce(((e2, t3) => x(e2, t3)), null) };
  }
  _computeViewshedExtent(e, t2) {
    const { farDistance: r4, heading: s3, tilt: n2, horizontalFieldOfView: i, verticalFieldOfView: o2 } = e, { spatialReference: u2 } = t2, c3 = i / 2, m2 = o2 / 2, h3 = r4 / u2.metersPerUnit, f = [a4.normalize(s3 - c3), s3, a4.normalize(s3 + c3)], v2 = z.fromPoint(t2), y3 = (e2) => {
      const t3 = f.map(((t4) => a4.normalize(t4 - e2)));
      if (t3[0] > t3[2] || 360 === i) return h3;
      const r5 = t3.map(((e3) => Math.abs(e3 > 180 ? 360 - e3 : e3))).reduce(((e3, t4) => e3 > t4 ? t4 : e3));
      return r5 > 90 ? 0 : h3 * Math.cos(s2(r5));
    };
    v2.xmax += y3(90), v2.xmin -= y3(-90), v2.ymax += y3(0), v2.ymin -= y3(180);
    const x2 = t2.z;
    if (null != x2) {
      let e2 = x2, t3 = x2;
      const s4 = n2 - 90, i2 = r3(s4 + m2, -90, 90), o3 = r3(s4 - m2, -90, 90), l4 = u2?.isGeographic ? r4 : h3;
      e2 += l4 * g(i2), t3 += l4 * g(o3);
      const a5 = w2(m2) * l4, d = g(s4) * a5 * (1 - w2(c3));
      n2 < 90 && (e2 -= d), n2 > 90 && (t3 -= d), v2.zmax = Math.max(e2, x2), v2.zmin = Math.min(t3, x2);
    }
    return v2;
  }
  equals(e) {
    return this === e || super.equals(e) && h(this.viewsheds.toArray(), e.viewsheds.toArray(), ((e2, t2) => e2.equals(t2)));
  }
  clear() {
    this.viewsheds.removeAll();
  }
};
function x(e, t2) {
  return null == e ? t2 : null == t2 ? e : e.union(t2);
}
function w2(e) {
  return Math.cos(s2(e));
}
function g(e) {
  return Math.sin(s2(e));
}
r([m({ type: ["viewshed"] })], y.prototype, "type", void 0), r([m({ cast: t, type: v, nonNullable: true })], y.prototype, "viewsheds", null), r([m({ readOnly: true })], y.prototype, "spatialReference", null), r([m()], y.prototype, "_extent", void 0), r([m()], y.prototype, "extent", null), r([m({ readOnly: true })], y.prototype, "valid", null), y = r([a2("esri.analysis.ViewshedAnalysis")], y);

// node_modules/@arcgis/core/layers/ViewshedLayer.js
var y2 = class extends b(S(h2)) {
  constructor(e) {
    super(e), this.type = "viewshed", this.operationalLayerType = "ViewshedLayer", this.source = new y(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(l((() => this.source), ((e, r4) => {
      null != r4 && r4.parent === this && (r4.parent = null), null != e && (e.parent = this);
    }), w));
  }
  load() {
    return __async(this, null, function* () {
      return this.addResolvingPromise(this.source.waitComputeExtent()), this;
    });
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e) {
    this.source === e && (this.source = new y());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e) {
    this.source = e;
  }
  get viewsheds() {
    return this.source.viewsheds;
  }
  set viewsheds(e) {
    this.source.viewsheds = e;
  }
  writeViewsheds(e, r4, s3, t2) {
    r4.viewsheds = e.filter(((e2) => e2.valid)).toJSON(t2);
  }
};
r([m({ json: { read: false }, readOnly: true })], y2.prototype, "type", void 0), r([m({ type: ["ViewshedLayer"] })], y2.prototype, "operationalLayerType", void 0), r([m({ type: y, nonNullable: true })], y2.prototype, "source", void 0), r([m({ readOnly: true })], y2.prototype, "spatialReference", null), r([m({ readOnly: true })], y2.prototype, "fullExtent", null), r([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], y2.prototype, "opacity", void 0), r([m({ type: ["show", "hide"] })], y2.prototype, "listMode", void 0), r([m({ type: V.ofType(c2), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], y2.prototype, "viewsheds", null), r([r2("web-scene", "viewsheds")], y2.prototype, "writeViewsheds", null), y2 = r([a2("esri.layers.ViewshedLayer")], y2);
var u = y2;
export {
  u as default
};
//# sourceMappingURL=chunk-ZGQXL2AD.js.map
