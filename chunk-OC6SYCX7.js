import {
  c
} from "./chunk-A3O4H2PE.js";
import {
  g
} from "./chunk-H4CURCSO.js";
import {
  R
} from "./chunk-7DSMXWKH.js";
import {
  f
} from "./chunk-OXEAULCD.js";
import {
  __async,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/rest/query/executeQueryJSON.js
function s(r, t, e, s2) {
  return __async(this, null, function* () {
    const n = yield a(r, t, e, s2);
    return g.fromJSON(n);
  });
}
function a(o, s2, a2, n) {
  return __async(this, null, function* () {
    const i = f(o), p = __spreadValues({}, a2), u = R.from(s2), { data: m } = yield c(i, u, u.sourceSpatialReference, p, n);
    return m;
  });
}

export {
  s,
  a
};
//# sourceMappingURL=chunk-OC6SYCX7.js.map
