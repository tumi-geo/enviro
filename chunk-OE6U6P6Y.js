import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/core/sql.js
var n;
function t() {
  return __async(this, null, function* () {
    return null == n && (n = import("./chunk-46BHL6OT.js").then(((n2) => new n2.WhereClauseCache(500, 500)))), n;
  });
}
function e(n2, e2) {
  return __async(this, null, function* () {
    const r2 = yield t(), u2 = r2.get(n2, e2);
    if (null == u2) throw r2.getError(n2, e2);
    return u2;
  });
}
function r(n2, t2) {
  return n2 ||= null, t2 ||= null, "1=1" === n2 ? t2 ?? n2 : "1=1" === t2 ? n2 ?? t2 : n2 && t2 ? `(${n2}) AND (${t2})` : n2 ?? t2;
}
function u(n2, t2) {
  return n2 ||= null, t2 ||= null, "1=1" === n2 || "1=1" === t2 || n2 === t2 ? "1=1" === n2 ? n2 : t2 : n2 && t2 ? `(${n2}) OR (${t2})` : n2 ?? t2;
}
function l(n2, t2) {
  return 0 === t2.length ? null : `${n2} IN (${o(t2)})`;
}
function o(n2) {
  return n2.map(((n3) => "string" == typeof n3 ? c(n3) : n3)).join(",");
}
function c(n2) {
  return `'${n2.replaceAll("'", "''")}'`;
}

export {
  e,
  r,
  u,
  l
};
//# sourceMappingURL=chunk-OE6U6P6Y.js.map
