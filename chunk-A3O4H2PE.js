import {
  t
} from "./chunk-KKXUY5OH.js";
import {
  t as t2
} from "./chunk-YSFZEZ63.js";
import {
  t as t3
} from "./chunk-RJTBWU4L.js";
import {
  R
} from "./chunk-XRFOA7QF.js";
import {
  v
} from "./chunk-DQ6RY3UR.js";
import {
  c
} from "./chunk-3MFXKT2T.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import {
  I,
  V
} from "./chunk-AZFJ5Z42.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/rest/query/operations/query.js
var l = "Layer does not support extent calculation.";
function d(e, t4) {
  if (t4 && "extent" === e.type) return `${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;
  if (t4 && "point" === e.type) return `${e.x},${e.y}`;
  const r = e.toJSON();
  return delete r.spatialReference, JSON.stringify(r);
}
function y(e, t4, r) {
  const i = e.geometry, a = e.toJSON();
  delete a.compactGeometryEnabled, delete a.defaultSpatialReferenceEnabled;
  const s = a;
  let u, l2, y2;
  if (i && (l2 = i.spatialReference, y2 = c(l2), s.geometryType = v(i), s.geometry = d(i, e.compactGeometryEnabled), s.inSR = y2), a.groupByFieldsForStatistics && (s.groupByFieldsForStatistics = a.groupByFieldsForStatistics.join(",")), a.objectIds) switch (r?.uniqueIdFields?.length) {
    case void 0:
      s.objectIds = a.objectIds.join(",");
      break;
    case 1:
      s.uniqueIds = JSON.stringify(a.objectIds), delete s.objectIds;
      break;
    default:
      s.uniqueIds = JSON.stringify(a.objectIds.map(((e2) => JSON.parse(e2)))), delete s.objectIds;
  }
  if (a.orderByFields && (s.orderByFields = a.orderByFields.join(",")), !a.outFields || !a.returnDistinctValues && (t4?.returnCountOnly || t4?.returnExtentOnly || t4?.returnIdsOnly) ? delete s.outFields : a.outFields.includes("*") ? s.outFields = "*" : s.outFields = a.outFields.join(","), a.outSR ? (s.outSR = c(a.outSR), u = e.outSpatialReference) : i && (a.returnGeometry || a.returnCentroid) && (s.outSR = s.inSR, u = l2), a.returnGeometry && delete a.returnGeometry, a.outStatistics && (s.outStatistics = JSON.stringify(a.outStatistics)), a.fullText && (s.fullText = JSON.stringify(a.fullText)), a.pixelSize && (s.pixelSize = JSON.stringify(a.pixelSize)), a.quantizationParameters && (e.defaultSpatialReferenceEnabled && null != l2 && null != e.quantizationParameters?.extent && l2.equals(e.quantizationParameters.extent.spatialReference) && delete a.quantizationParameters.extent.spatialReference, s.quantizationParameters = JSON.stringify(a.quantizationParameters)), a.parameterValues && (s.parameterValues = JSON.stringify(a.parameterValues)), a.rangeValues && (s.rangeValues = JSON.stringify(a.rangeValues)), a.dynamicDataSource && (s.layer = JSON.stringify({ source: a.dynamicDataSource }), delete a.dynamicDataSource), a.timeExtent) {
    const e2 = a.timeExtent, { start: t5, end: r2 } = e2;
    null == t5 && null == r2 || (s.time = t5 === r2 ? t5 : `${t5 ?? "null"},${r2 ?? "null"}`), delete a.timeExtent;
  }
  return e.defaultSpatialReferenceEnabled && null != l2 && null != u && l2.equals(u) && (s.defaultSR = s.inSR, delete s.inSR, delete s.outSR), s;
}
function c2(e, t4, r, n, i) {
  return __async(this, null, function* () {
    const o = t4.timeExtent?.isEmpty ? { data: { features: [] } } : yield g(e, t4, "json", n, void 0, i);
    return t3(t4, r, o.data), o;
  });
}
function f(e, t4, r, n, i) {
  return __async(this, null, function* () {
    if (t4.timeExtent?.isEmpty) return { data: r.createFeatureResult() };
    const o = yield m(e, t4, n, i), a = o;
    return a.data = t2(o.data, r), a;
  });
}
function m(e, t4, r, n) {
  return g(e, t4, "pbf", r, void 0, n);
}
function p(e, t4, r, n) {
  return t4.timeExtent?.isEmpty ? Promise.resolve({ data: { objectIds: [] } }) : g(e, t4, "json", r, { returnIdsOnly: true }, n);
}
function S(e, t4, r, n) {
  return t4.timeExtent?.isEmpty ? Promise.resolve({ data: { count: 0 } }) : g(e, t4, "json", r, { returnIdsOnly: true, returnCountOnly: true }, n);
}
function O(e, t4, r) {
  return __async(this, null, function* () {
    if (t4.timeExtent?.isEmpty) return { data: { count: 0, extent: null } };
    const n = yield g(e, t4, "json", r, { returnExtentOnly: true, returnCountOnly: true }), i = n.data;
    if (i.hasOwnProperty("extent")) return n;
    if (i.features) throw new Error(l);
    if (i.hasOwnProperty("count")) throw new Error(l);
    return n;
  });
}
function x(e, t4) {
  if (!e.returnIdsOnly || !t4.uniqueIdFields) return e;
  const r = __spreadProps(__spreadValues({}, e), { returnUniqueIdsOnly: true });
  return delete r.returnIdsOnly, r;
}
function g(_0, _1, _2) {
  return __async(this, arguments, function* (n, o, s, u = {}, l2 = {}, d2 = {}) {
    const c3 = "string" == typeof n ? I(n) : n, f2 = o.geometry ? [o.geometry] : [], m2 = yield R(f2, null, { signal: u.signal }), p2 = m2?.[0];
    null != p2 && ((o = o.clone()).geometry = p2);
    const S2 = t(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, c3.query), { f: s }), x(l2, d2)), y(o, l2, d2)));
    return H(V(c3.path, j(o, l2) ? "query3d" : "query"), __spreadProps(__spreadValues({}, u), { responseType: "pbf" === s ? "array-buffer" : "json", query: __spreadValues(__spreadValues({}, S2), u.query) }));
  });
}
function j(e, t4) {
  return null != e.formatOf3DObjects && !(t4.returnCountOnly || t4.returnExtentOnly || t4.returnIdsOnly);
}

export {
  c2 as c,
  f,
  m,
  p,
  S,
  O
};
//# sourceMappingURL=chunk-A3O4H2PE.js.map
