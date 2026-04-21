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
  o
} from "./chunk-BS2W7XFZ.js";

// node_modules/@arcgis/core/layers/support/OrderByInfo.js
var i;
var p = new o({ asc: "ascending", desc: "descending" });
var _a;
var n = (_a = class extends l {
  constructor(r2) {
    super(r2), this.field = null, this.valueExpression = null, this.order = "ascending";
  }
  clone() {
    return new i({ field: this.field, valueExpression: this.valueExpression, order: this.order });
  }
}, i = _a, _a);
r([m({ type: String, json: { write: true } })], n.prototype, "field", void 0), r([m({ type: String, json: { write: true, origins: { "web-scene": { read: false, write: false } } } })], n.prototype, "valueExpression", void 0), r([m({ type: p.apiValues, json: { type: p.jsonValues, read: p.read, write: p.write } })], n.prototype, "order", void 0), n = i = r([a("esri.layers.support.OrderByInfo")], n);

export {
  n
};
//# sourceMappingURL=chunk-YUKC2DJM.js.map
