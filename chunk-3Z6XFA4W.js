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

// node_modules/@arcgis/core/layers/support/FeatureReduction.js
var t = class extends l {
  constructor() {
    super(...arguments), this.type = null;
  }
};
r([m({ type: ["selection", "cluster", "binning"], readOnly: true, json: { read: false, write: true } })], t.prototype, "type", void 0), t = r([a("esri.layers.support.FeatureReduction")], t);

// node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js
var s;
var c = s = class extends t {
  constructor(o) {
    super(o), this.type = "selection";
  }
  clone() {
    return new s();
  }
};
r([m({ type: ["selection"] })], c.prototype, "type", void 0), c = s = r([a("esri.layers.support.FeatureReductionSelection")], c);

export {
  t,
  c
};
//# sourceMappingURL=chunk-3Z6XFA4W.js.map
