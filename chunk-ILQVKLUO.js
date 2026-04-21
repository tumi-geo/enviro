import {
  a as a4
} from "./chunk-WALVMRGH.js";
import {
  a as a2
} from "./chunk-HR4CHV7Z.js";
import {
  a as a3
} from "./chunk-VKWEVSRD.js";
import {
  o
} from "./chunk-KS4WXQBA.js";
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
  r
} from "./chunk-C5HHJVCI.js";

// node_modules/@arcgis/core/layers/support/FeatureType.js
var n = class extends a3.ClonableMixin(l) {
  constructor(o2) {
    super(o2), this.id = null, this.name = null, this.domains = null, this.templates = null;
  }
  readDomains(o2) {
    const r3 = {};
    for (const t of Object.keys(o2)) r3[t] = a2(o2[t]);
    return r3;
  }
  writeDomains(o2, r3) {
    const t = {};
    for (const s of Object.keys(o2)) o2[s] && (t[s] = o2[s]?.toJSON());
    r3.domains = t;
  }
};
r([m({ json: { write: true } })], n.prototype, "id", void 0), r([m({ json: { write: true } })], n.prototype, "name", void 0), r([m({ json: { write: true } })], n.prototype, "domains", void 0), r([o("domains")], n.prototype, "readDomains", null), r([r2("domains")], n.prototype, "writeDomains", null), r([m({ type: [a4], json: { write: true } })], n.prototype, "templates", void 0), n = r([a("esri.layers.support.FeatureType")], n);

export {
  n
};
//# sourceMappingURL=chunk-ILQVKLUO.js.map
