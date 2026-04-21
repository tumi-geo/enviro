import {
  p
} from "./chunk-ZIPVJYM7.js";
import {
  a as a2
} from "./chunk-IXAEY3WK.js";
import {
  i
} from "./chunk-QAUX3SGZ.js";
import {
  a as a3
} from "./chunk-VKWEVSRD.js";
import {
  V
} from "./chunk-FXVZ2Z5Z.js";
import {
  r as r2
} from "./chunk-D2TJBM23.js";
import {
  n
} from "./chunk-57B3JMFY.js";
import {
  l
} from "./chunk-7ZUHIRNS.js";
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
  e
} from "./chunk-EQ4FTM7V.js";

// node_modules/@arcgis/core/layers/support/DisplayFilter.js
var p2 = { write: { overridePolicy: (o, r3, e2) => ({ enabled: !e2 || "scale" === e2.filterMode }) } };
var c = class extends a3.ClonableMixin(l) {
  constructor(o) {
    super(o), this.id = n(), this.maxScale = 0, this.minScale = 0, this.title = "", this.where = null;
  }
};
r([m({ type: String, json: { write: true } })], c.prototype, "id", void 0), r([m({ type: Number, json: p2 })], c.prototype, "maxScale", void 0), r([m({ type: Number, json: p2 })], c.prototype, "minScale", void 0), r([m({ type: String, json: { write: true } })], c.prototype, "title", void 0), r([m({ type: String, json: { write: true } })], c.prototype, "where", void 0), c = r([a("esri.layers.support.DisplayFilter")], c);

// node_modules/@arcgis/core/layers/support/DisplayFilterInfo.js
var c2 = class extends a3.ClonableMixin(l) {
  constructor(r3) {
    super(r3), this.activeFilterId = null, this.filters = new (V.ofType(c))(), this.mode = "manual";
  }
  writeFilters(r3, o, e2, t) {
    const s = r3.toArray();
    "scale" === this.mode && s.sort(((r4, o2) => {
      const e3 = p(o2.minScale, r4.minScale), t2 = r4.maxScale - o2.maxScale;
      return 0 === e3 ? t2 : e3;
    })), o[e2] = s.map(((r4) => r4.toJSON(t)));
  }
  write(r3, o) {
    return super.write(r3, i(this, o));
  }
};
r([m({ type: String, json: { write: { overridePolicy: (r3, o, e2) => ({ enabled: "manual" === e2.filterMode, isRequired: true }) } } })], c2.prototype, "activeFilterId", void 0), r([m({ type: V.ofType(c), nonNullable: true, json: { write: true } })], c2.prototype, "filters", void 0), r([r2("filters")], c2.prototype, "writeFilters", null), r([m({ type: ["manual", "scale"], nonNullable: true, json: { name: "filterMode", write: true } })], c2.prototype, "mode", void 0), c2 = r([a("esri.layers.support.DisplayFilterInfo")], c2);

// node_modules/@arcgis/core/layers/mixins/DisplayFilteredLayer.js
var a4 = (e2) => {
  let i2 = class extends e2 {
    constructor() {
      super(...arguments), this.displayFilterEnabled = true, this.displayFilterInfo = null;
    }
  };
  return r([m(p3)], i2.prototype, "displayFilterEnabled", void 0), r([m(l2)], i2.prototype, "displayFilterInfo", void 0), i2 = r([a("esri.layers.mixins.DisplayFilteredLayer")], i2), i2;
};
var p3 = { type: Boolean, json: { name: "layerDefinition.disableDisplayFilter", read: { reader: (r3) => !r3 }, write: { layerContainerTypes: a2, writer(r3, o, s) {
  e(s, !r3, o);
} }, origins: { "web-scene": { write: false, read: false } } } };
var l2 = { type: c2, json: { name: "layerDefinition.displayFilterInfo", write: { enabled: true, allowNull: true, layerContainerTypes: a2 }, origins: { "web-scene": { write: false, read: false } } } };

export {
  a4 as a,
  p3 as p,
  l2 as l
};
//# sourceMappingURL=chunk-I6SBWFBG.js.map
