import {
  S,
  p
} from "./chunk-A3O4H2PE.js";
import {
  R
} from "./chunk-7DSMXWKH.js";
import {
  f
} from "./chunk-OXEAULCD.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/rest/query/executeForCount.js
function s(s3, i2, m, n2) {
  return __async(this, null, function* () {
    const p2 = f(s3), { data: u } = yield S(p2, R.from(i2), m, n2);
    return u.count;
  });
}

// node_modules/@arcgis/core/rest/query/executeForIds.js
function i(i2, n2, u, a) {
  return __async(this, null, function* () {
    const e = f(i2), { data: f2 } = yield p(e, R.from(n2), u, a);
    return f2.objectIds ?? s2(f2.uniqueIds) ?? [];
  });
}
function n(r) {
  return !Array.isArray(r[0]);
}
function s2(r) {
  if (r) return n(r) ? r : r.map(((r2) => JSON.stringify(r2)));
}

export {
  s,
  i
};
//# sourceMappingURL=chunk-4IETU7AZ.js.map
