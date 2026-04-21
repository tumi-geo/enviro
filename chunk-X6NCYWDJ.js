import {
  n
} from "./chunk-67T5JJQS.js";
import {
  i
} from "./chunk-LARIQ6HR.js";
import {
  d
} from "./chunk-ZIPVJYM7.js";
import {
  r as r2
} from "./chunk-OE6U6P6Y.js";
import {
  b,
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/support/ExportImageParameters.js
var n2 = { visible: "visibleSublayers", definitionExpression: "layerDefs", labelingInfo: "hasDynamicLayers", labelsVisible: "hasDynamicLayers", opacity: "hasDynamicLayers", minScale: "visibleSublayers", maxScale: "visibleSublayers", renderer: "hasDynamicLayers", source: "hasDynamicLayers" };
var y = class extends b {
  constructor(e) {
    super(e), this.floors = null, this.scale = 0;
  }
  destroy() {
    this.layer = null;
  }
  get dynamicLayers() {
    if (!this.hasDynamicLayers) return null;
    const e = this.visibleSublayers.map(((e2) => {
      const r3 = n(this.floors, e2);
      return e2.toExportImageJSON(r3);
    }));
    return e.length ? JSON.stringify(e) : null;
  }
  get hasDynamicLayers() {
    return this.layer && i(this.visibleSublayers, this.layer.serviceSublayers, this.layer.gdbVersion);
  }
  set layer(e) {
    this._get("layer") !== e && (this._set("layer", e), this.removeHandles("layer"), e && this.addHandles([e.allSublayers.on("change", (() => this.notifyChange("visibleSublayers"))), e.on("sublayer-update", ((e2) => this.notifyChange(n2[e2.propertyName])))], "layer"));
  }
  get layers() {
    const e = this.visibleSublayers;
    return e ? e.length ? "show:" + e.map(((e2) => e2.id)).join(",") : "show:-1" : null;
  }
  get layerDefs() {
    const e = !!this.floors?.length, r3 = this.visibleSublayers.filter(((r4) => null != r4.definitionExpression || e && null != r4.floorInfo));
    return r3.length ? JSON.stringify(r3.reduce(((e2, r4) => {
      const t = n(this.floors, r4), i2 = r2(t, r4.definitionExpression);
      return null != i2 && (e2[r4.id] = i2), e2;
    }), {})) : null;
  }
  get version() {
    this.commitProperty("layers"), this.commitProperty("layerDefs"), this.commitProperty("dynamicLayers");
    const e = this.layer;
    return e && (e.commitProperty("dpi"), e.commitProperty("imageFormat"), e.commitProperty("imageTransparency"), e.commitProperty("gdbVersion")), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const e = [];
    if (!this.layer) return e;
    const r3 = this.layer.sublayers, s = this.scale, t = (r4) => {
      r4.visible && (0 === s || d(s, r4.minScale, r4.maxScale)) && (r4.sublayers ? r4.sublayers.forEach(t) : e.unshift(r4));
    };
    r3 && r3.forEach(t);
    const i2 = this._get("visibleSublayers");
    return !i2 || i2.length !== e.length || i2.some(((r4, s2) => e[s2] !== r4)) ? e : i2;
  }
  toJSON() {
    const e = this.layer;
    let r3 = { dpi: e.dpi, format: e.imageFormat, transparent: e.imageTransparency, gdbVersion: e.gdbVersion || null };
    return this.hasDynamicLayers && this.dynamicLayers ? r3.dynamicLayers = this.dynamicLayers : r3 = __spreadProps(__spreadValues({}, r3), { layers: this.layers, layerDefs: this.layerDefs }), r3;
  }
};
r([m({ readOnly: true })], y.prototype, "dynamicLayers", null), r([m()], y.prototype, "floors", void 0), r([m({ readOnly: true })], y.prototype, "hasDynamicLayers", null), r([m()], y.prototype, "layer", null), r([m({ readOnly: true })], y.prototype, "layers", null), r([m({ readOnly: true })], y.prototype, "layerDefs", null), r([m({ type: Number })], y.prototype, "scale", void 0), r([m({ readOnly: true })], y.prototype, "version", null), r([m({ readOnly: true })], y.prototype, "visibleSublayers", null), y = r([a("esri.layers.support.ExportImageParameters")], y);

export {
  y
};
//# sourceMappingURL=chunk-X6NCYWDJ.js.map
