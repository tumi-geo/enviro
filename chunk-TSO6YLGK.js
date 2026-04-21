import {
  l as l2
} from "./chunk-2JXAQB6C.js";
import {
  r as r2
} from "./chunk-D2TJBM23.js";
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
  x
} from "./chunk-UMW5MZI7.js";
import {
  r
} from "./chunk-C5HHJVCI.js";

// node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js
var i;
var c = i = class extends l {
  constructor(r3) {
    super(r3), this.color = null, this.label = null, this.value = null;
  }
  writeValue(r3, o, e) {
    o[e] = r3 ?? 0;
  }
  clone() {
    return new i({ color: this.color && this.color.clone(), label: this.label, value: this.value });
  }
};
r([m({ type: l2, json: { type: [x], write: { isRequired: true } } })], c.prototype, "color", void 0), r([m({ type: String, json: { write: true } })], c.prototype, "label", void 0), r([m({ type: Number, json: { write: { writerEnsuresNonNull: true } } })], c.prototype, "value", void 0), r([r2("value")], c.prototype, "writeValue", null), c = i = r([a("esri.renderers.visualVariables.support.ColorStop")], c);
var a2 = c;

export {
  a2 as a
};
//# sourceMappingURL=chunk-TSO6YLGK.js.map
