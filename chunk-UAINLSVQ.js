import {
  n
} from "./chunk-CVU3XSZQ.js";
import {
  u
} from "./chunk-A5WPSHPA.js";
import {
  p
} from "./chunk-3DPIVMX6.js";
import {
  z
} from "./chunk-7FHCIZTJ.js";
import {
  f
} from "./chunk-4SLPL4G6.js";
import {
  o
} from "./chunk-CSENQMWZ.js";
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import {
  I
} from "./chunk-AZFJ5Z42.js";
import {
  b
} from "./chunk-OX6HQ7WO.js";
import {
  i3 as i,
  s,
  s2
} from "./chunk-EQ4FTM7V.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/support/fromPortalItem.js
function o2(o3) {
  return __async(this, null, function* () {
    const a2 = "portalItem" in o3 ? o3 : { portalItem: o3 }, { fromItem: e } = yield import("./chunk-PLGD72UB.js");
    try {
      return yield e(a2);
    } catch (p2) {
      const o4 = a2?.portalItem, e2 = o4?.id || "unset", l = o4?.portal?.url || s.portalUrl;
      throw i.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()", "Failed to create layer from portal item (portal: '" + l + "', id: '" + e2 + "')", p2), p2;
    }
  });
}

// node_modules/@arcgis/core/layers/Layer.js
var b2 = 0;
var h = class extends o.EventedMixin(n.IdentifiableMixin(p)) {
  constructor() {
    super(...arguments), this.attributionDataUrl = null, this.fullExtent = new z(-180, -90, 180, 90, f.WGS84), this.id = Date.now().toString(16) + "-layer-" + b2++, this.legendEnabled = true, this.listMode = "show", this.opacity = 1, this.parent = null, this.persistenceEnabled = false, this.popupEnabled = true, this.attributionVisible = true, this.spatialReference = f.WGS84, this.title = null, this.type = null, this.url = null, this.visibilityTimeExtent = null, this.visible = true;
  }
  static fromArcGISServerUrl(e) {
    return __async(this, null, function* () {
      const t = "string" == typeof e ? { url: e } : e;
      return (yield import("./chunk-NRW7AH2K.js")).fromUrl(t);
    });
  }
  static fromPortalItem(e) {
    return o2(e);
  }
  initialize() {
    this.when().catch(((e) => {
      b(e) || i.getLogger(this).error("#load()", `Failed to load layer (title: '${this.title ?? "no title"}', id: '${this.id ?? "no id"}')`, { error: e });
    }));
  }
  destroy() {
    const e = this.parent;
    if (e) {
      const t = this;
      "layers" in e && e.layers.includes(t) ? e.layers.remove(t) : "tables" in e && e.tables.includes(t) ? e.tables.remove(t) : "baseLayers" in e && e.baseLayers.includes(t) ? e.baseLayers.remove(t) : "referenceLayers" in e && e.referenceLayers.includes(t) && e.referenceLayers.remove(t), this._set("parent", null);
    }
  }
  get effectiveVisible() {
    let e = this.visible;
    const t = this.parent;
    return e && t && "effectiveVisible" in t && (e &&= t.effectiveVisible), e;
  }
  get hasAttributionData() {
    return null != this.attributionDataUrl;
  }
  get parsedUrl() {
    return I(this.url);
  }
  createLayerView(e, t) {
    return Promise.reject(new s2("layer:create-layer-view", "Layer does not support creating a layer view"));
  }
  fetchAttributionData() {
    return __async(this, null, function* () {
      const e = this.attributionDataUrl;
      if (this.hasAttributionData && e) {
        return (yield H(e, { query: { f: "json" }, responseType: "json" })).data;
      }
      throw new s2("layer:no-attribution-data", "Layer does not have attribution data");
    });
  }
};
r([m({ type: String })], h.prototype, "attributionDataUrl", void 0), r([m({ readOnly: true })], h.prototype, "effectiveVisible", null), r([m({ type: z })], h.prototype, "fullExtent", void 0), r([m({ readOnly: true })], h.prototype, "hasAttributionData", null), r([m({ type: String, clonable: false })], h.prototype, "id", void 0), r([m({ type: Boolean, nonNullable: true })], h.prototype, "legendEnabled", void 0), r([m({ type: ["show", "hide", "hide-children"] })], h.prototype, "listMode", void 0), r([m({ type: Number, range: { min: 0, max: 1 }, nonNullable: true })], h.prototype, "opacity", void 0), r([m({ clonable: false })], h.prototype, "parent", void 0), r([m({ readOnly: true })], h.prototype, "parsedUrl", null), r([m({ type: Boolean, readOnly: true })], h.prototype, "persistenceEnabled", void 0), r([m({ type: Boolean })], h.prototype, "popupEnabled", void 0), r([m({ type: Boolean })], h.prototype, "attributionVisible", void 0), r([m({ type: f })], h.prototype, "spatialReference", void 0), r([m({ type: String })], h.prototype, "title", void 0), r([m({ readOnly: true, json: { read: false } })], h.prototype, "type", void 0), r([m()], h.prototype, "url", void 0), r([m({ type: u })], h.prototype, "visibilityTimeExtent", void 0), r([m({ type: Boolean, nonNullable: true })], h.prototype, "visible", void 0), h = r([a("esri.layers.Layer")], h);

export {
  h
};
//# sourceMappingURL=chunk-UAINLSVQ.js.map
