import {
  l as l4
} from "./chunk-LKDWYVQN.js";
import {
  a as a4
} from "./chunk-UGDODU6O.js";
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
import "./chunk-CVU3XSZQ.js";
import {
  n,
  t
} from "./chunk-QAS34KWO.js";
import "./chunk-N3OHVW7O.js";
import {
  l as l3
} from "./chunk-2JXAQB6C.js";
import "./chunk-GK6TRL6Y.js";
import "./chunk-ZH5LJQAI.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-DV7BEHER.js";
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
import {
  e,
  o as o2
} from "./chunk-ML2Q6ZHW.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import {
  V
} from "./chunk-FXVZ2Z5Z.js";
import "./chunk-XORXELZL.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
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
  a,
  x
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

// node_modules/@arcgis/core/analysis/DimensionSimpleStyle.js
var a5 = class extends l2.JSONSupportMixin(a3) {
  constructor(o3) {
    super(o3), this.type = "simple", this.color = new l3("black"), this.lineSize = 2, this.fontSize = 10, this.textColor = new l3("black"), this.textBackgroundColor = new l3([255, 255, 255, 0.6]);
  }
  equals(o3) {
    return this === o3 || this.color.equals(o3.color) && this.lineSize === o3.lineSize && this.fontSize === o3.fontSize && this.textColor.equals(o3.textColor) && this.textBackgroundColor.equals(o3.textBackgroundColor);
  }
};
r([m({ type: ["simple"], readOnly: true, json: { write: { isRequired: true } } })], a5.prototype, "type", void 0), r([m({ type: l3, nonNullable: true, json: { type: [x], write: { isRequired: true } } })], a5.prototype, "color", void 0), r([m({ type: Number, cast: o2, nonNullable: true, range: { min: e(1) }, json: { write: { isRequired: true } } })], a5.prototype, "lineSize", void 0), r([m({ type: Number, cast: o2, nonNullable: true, json: { write: { isRequired: true } } })], a5.prototype, "fontSize", void 0), r([m({ type: l3, nonNullable: true, json: { type: [x], write: { isRequired: true } } })], a5.prototype, "textColor", void 0), r([m({ type: l3, nonNullable: true, json: { type: [x], write: { isRequired: true } } })], a5.prototype, "textBackgroundColor", void 0), a5 = r([a2("esri.analysis.DimensionSimpleStyle")], a5);

// node_modules/@arcgis/core/analysis/dimensionUtils.js
var t2;
!(function(t3) {
  t3.Horizontal = "horizontal", t3.Vertical = "vertical", t3.Direct = "direct";
})(t2 || (t2 = {}));
var r3 = [t2.Horizontal, t2.Vertical, t2.Direct];

// node_modules/@arcgis/core/analysis/LengthDimension.js
var c = class extends l2.JSONSupportMixin(a3) {
  constructor(t3) {
    super(t3), this.type = "length", this.startPoint = null, this.endPoint = null, this.measureType = t2.Direct, this.offset = 0, this.orientation = 0;
  }
  get valid() {
    return null != this.startPoint && null != this.endPoint;
  }
  equals(t3) {
    return this === t3 || o(this.startPoint, t3.startPoint) && o(this.endPoint, t3.endPoint) && this.measureType === t3.measureType && this.offset === t3.offset && this.orientation === t3.orientation;
  }
};
r([m({ type: ["length"], json: { write: { isRequired: true } } })], c.prototype, "type", void 0), r([m({ type: _, json: { write: { isRequired: true } } })], c.prototype, "startPoint", void 0), r([m({ type: _, json: { write: { isRequired: true } } })], c.prototype, "endPoint", void 0), r([m({ type: r3, nonNullable: true, json: { write: { isRequired: true } } })], c.prototype, "measureType", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } })], c.prototype, "offset", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s(((t3) => a4.normalize(a(t3), 0, true)))], c.prototype, "orientation", void 0), r([m({ readOnly: true })], c.prototype, "valid", null), c = r([a2("esri.analysis.LengthDimension")], c);

// node_modules/@arcgis/core/analysis/DimensionAnalysis.js
var y = V.ofType(c);
var f = class extends l4 {
  constructor(e2) {
    super(e2), this.type = "dimension", this.style = new a5(), this.extent = null;
  }
  initialize() {
    this.addHandles(l((() => this._computeExtent()), ((e2) => {
      null == e2?.pending && this._set("extent", null != e2 ? e2.extent : null);
    }), w));
  }
  get dimensions() {
    return this._get("dimensions") || new y();
  }
  set dimensions(e2) {
    this._set("dimensions", n(e2, this.dimensions, y));
  }
  get spatialReference() {
    for (const e2 of this.dimensions) {
      if (null != e2.startPoint) return e2.startPoint.spatialReference;
      if (null != e2.endPoint) return e2.endPoint.spatialReference;
    }
    return null;
  }
  get valid() {
    return this.dimensions.every(((e2) => e2.valid));
  }
  waitComputeExtent() {
    return __async(this, null, function* () {
      const e2 = this._computeExtent();
      return null != e2 ? e2.pending : Promise.resolve();
    });
  }
  _computeExtent() {
    const e2 = this.spatialReference;
    if (null == e2) return { pending: null, extent: null };
    const t3 = [];
    for (const o3 of this.dimensions) null != o3.startPoint && t3.push(o3.startPoint), null != o3.endPoint && t3.push(o3.endPoint);
    const n2 = Y(t3, e2);
    if (null != n2.pending) return { pending: n2.pending, extent: null };
    let s2 = null;
    return null != n2.geometries && (s2 = n2.geometries.reduce(((e3, t4) => null == e3 ? null != t4 ? z.fromPoint(t4) : null : null != t4 ? e3.union(z.fromPoint(t4)) : e3), null)), { pending: null, extent: s2 };
  }
  clear() {
    this.dimensions.removeAll();
  }
  equals(e2) {
    return this === e2 || super.equals(e2) && this.style.equals(e2.style) && h(this.dimensions.toArray(), e2.dimensions.toArray(), ((e3, t3) => e3.equals(t3)));
  }
};
r([m({ type: ["dimension"] })], f.prototype, "type", void 0), r([m({ cast: t, type: y, nonNullable: true })], f.prototype, "dimensions", null), r([m({ readOnly: true })], f.prototype, "spatialReference", null), r([m({ types: { key: "type", base: null, typeMap: { simple: a5 } }, nonNullable: true })], f.prototype, "style", void 0), r([m({ value: null, readOnly: true })], f.prototype, "extent", void 0), r([m({ readOnly: true })], f.prototype, "valid", null), f = r([a2("esri.analysis.DimensionAnalysis")], f);

// node_modules/@arcgis/core/layers/DimensionLayer.js
var u = class extends b(S(h2)) {
  constructor(e2) {
    if (super(e2), this.type = "dimension", this.operationalLayerType = "ArcGISDimensionLayer", this.source = new f(), this.opacity = 1, e2) {
      const { source: s2, style: t3 } = e2;
      s2 && t3 && (s2.style = t3);
    }
  }
  initialize() {
    this.addHandles([l((() => this.source), ((e2, s2) => {
      null != s2 && s2.parent === this && (s2.parent = null), null != e2 && (e2.parent = this);
    }), w)]);
  }
  load() {
    return __async(this, null, function* () {
      return this.addResolvingPromise(this.source.waitComputeExtent()), this;
    });
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get style() {
    return this.source.style;
  }
  set style(e2) {
    this.source.style = e2;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e2) {
    this.source === e2 && (this.source = new f());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e2) {
    this.source = e2;
  }
  get dimensions() {
    return this.source.dimensions;
  }
  set dimensions(e2) {
    this.source.dimensions = e2;
  }
  writeDimensions(e2, s2, t3, r4) {
    s2.dimensions = e2.filter((({ startPoint: e3, endPoint: s3 }) => null != e3 && null != s3)).toJSON(r4);
  }
};
r([m({ json: { read: false }, readOnly: true })], u.prototype, "type", void 0), r([m({ type: ["ArcGISDimensionLayer"] })], u.prototype, "operationalLayerType", void 0), r([m({ nonNullable: true })], u.prototype, "source", void 0), r([m({ readOnly: true })], u.prototype, "spatialReference", null), r([m({ types: { key: "type", base: null, typeMap: { simple: a5 } }, json: { write: { ignoreOrigin: true } } })], u.prototype, "style", null), r([m({ readOnly: true })], u.prototype, "fullExtent", null), r([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], u.prototype, "opacity", void 0), r([m({ type: ["show", "hide"] })], u.prototype, "listMode", void 0), r([m({ type: V.ofType(c), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], u.prototype, "dimensions", null), r([r2("web-scene", "dimensions")], u.prototype, "writeDimensions", null), u = r([a2("esri.layers.DimensionLayer")], u);
var d = u;
export {
  d as default
};
//# sourceMappingURL=chunk-P7QUAXAD.js.map
