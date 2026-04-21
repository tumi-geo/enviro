import {
  a as a3,
  e,
  u as u2
} from "./chunk-75X5FD5J.js";
import {
  a as a2
} from "./chunk-IXAEY3WK.js";
import {
  u
} from "./chunk-A5WPSHPA.js";
import {
  I
} from "./chunk-7X4IPKG2.js";
import {
  o
} from "./chunk-KS4WXQBA.js";
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";

// node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var f = { type: Boolean, json: { read: { source: "timeAnimation" }, write: { target: "timeAnimation", layerContainerTypes: a2 } } };
var c = (s) => {
  let c2 = class extends s {
    constructor() {
      super(...arguments), this.timeExtent = null, this.timeOffset = null, this.useViewTime = true;
    }
    readOffset(e2, t) {
      const o2 = t.timeInfo.exportOptions;
      if (!o2) return null;
      const r2 = o2.timeOffset, s2 = e.fromJSON(o2.timeOffsetUnits);
      return r2 && s2 ? new a3({ value: r2, unit: s2 }) : null;
    }
    set timeInfo(e2) {
      I(e2, this.fieldsIndex), this._set("timeInfo", e2);
    }
  };
  return r([m({ type: u, json: { write: false } })], c2.prototype, "timeExtent", void 0), r([m({ type: a3 })], c2.prototype, "timeOffset", void 0), r([o("service", "timeOffset", ["timeInfo.exportOptions"])], c2.prototype, "readOffset", null), r([m({ value: null, type: u2, json: { write: true, origins: { "web-document": { read: false, write: false }, "portal-item": { read: false, write: false } } } })], c2.prototype, "timeInfo", null), r([m(f)], c2.prototype, "useViewTime", void 0), c2 = r([a("esri.layers.mixins.TemporalLayer")], c2), c2;
};

export {
  f,
  c
};
//# sourceMappingURL=chunk-N5K3KQFN.js.map
