import {
  o
} from "./chunk-NQKIL7LC.js";
import {
  f as f2,
  s
} from "./chunk-OXEAULCD.js";
import {
  v
} from "./chunk-DQ6RY3UR.js";
import {
  f
} from "./chunk-4SLPL4G6.js";
import {
  c
} from "./chunk-3MFXKT2T.js";
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
  w
} from "./chunk-UMW5MZI7.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/rest/support/ProjectParameters.js
var p = class extends l {
  constructor(r2) {
    super(r2), this.geometries = [], this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const r2 = this.geometries.map(((r3) => r3.toJSON())), o2 = this.geometries[0], t = {};
    return t.outSR = c(this.outSpatialReference), t.inSR = c(o2.spatialReference), t.geometries = JSON.stringify({ geometryType: v(o2), geometries: r2 }), this.transformation && (t.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), null != this.transformForward && (t.transformForward = this.transformForward), t;
  }
};
r([m()], p.prototype, "geometries", void 0), r([m({ type: f, json: { read: { source: "outSR" } } })], p.prototype, "outSpatialReference", void 0), r([m()], p.prototype, "transformation", void 0), r([m()], p.prototype, "transformForward", void 0), p = r([a("esri.rest.support.ProjectParameters")], p);

// node_modules/@arcgis/core/rest/geometryService/project.js
var i = w(p);
function n(o2, m2, n2) {
  return __async(this, null, function* () {
    m2 = i(m2);
    const u = f2(o2), c2 = __spreadValues(__spreadProps(__spreadValues({}, u.query), { f: "json" }), m2.toJSON()), j = m2.outSpatialReference, a2 = v(m2.geometries[0]), f3 = s(c2, n2);
    return H(u.path + "/project", f3).then((({ data: { geometries: r2 } }) => o(r2, a2, j)));
  });
}

export {
  p,
  n
};
//# sourceMappingURL=chunk-DNZLMY3K.js.map
