import {
  g
} from "./chunk-H4CURCSO.js";
import {
  d
} from "./chunk-T4V6OAUU.js";
import {
  a as a3
} from "./chunk-VKWEVSRD.js";
import {
  o
} from "./chunk-KS4WXQBA.js";
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import {
  a
} from "./chunk-EQ4FTM7V.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/AttributeBinsGraphic.js
var i;
var _a;
var a4 = (_a = class extends a3.ClonableMixin(d) {
  constructor(t) {
    super(t), this.stackedAttributes = null;
  }
  cloneShallow() {
    return new i(__spreadProps(__spreadValues({}, super.cloneShallow()), { stackedAttributes: this.stackedAttributes }));
  }
  toJSON() {
    return __spreadProps(__spreadValues({}, super.toJSON()), { stackedAttributes: a(this.stackedAttributes) });
  }
}, i = _a, _a);
r([m()], a4.prototype, "stackedAttributes", void 0), a4 = i = r([a2("esri.AttributeBinsGraphic")], a4);

// node_modules/@arcgis/core/rest/support/AttributeBinsFeatureSet.js
var i2 = class extends a3.ClonableMixin(g) {
  constructor() {
    super(...arguments), this.features = [];
  }
  readFeatures(r2, t) {
    return this.readFeaturesWithClass(r2, t, a4);
  }
};
r([m({ type: [a4], json: { write: true } })], i2.prototype, "features", void 0), r([o("features")], i2.prototype, "readFeatures", null), i2 = r([a2("esri.rest.support.AttributeBinsFeatureSet")], i2);

export {
  i2 as i
};
//# sourceMappingURL=chunk-LUW6AEW2.js.map
