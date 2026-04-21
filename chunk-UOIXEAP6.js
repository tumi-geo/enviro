import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";

// node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var e = (e2) => {
  let t = class extends e2 {
    constructor() {
      super(...arguments), this.customParameters = null;
    }
  };
  return r([m({ type: Object, json: { write: { overridePolicy: (r2) => ({ enabled: !!(r2 && Object.keys(r2).length > 0) }) } } })], t.prototype, "customParameters", void 0), t = r([a("esri.layers.mixins.CustomParametersMixin")], t), t;
};

export {
  e
};
//# sourceMappingURL=chunk-UOIXEAP6.js.map
