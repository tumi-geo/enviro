import {
  A,
  z
} from "./chunk-FNFXIMG2.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/support/requestPresets.js
function t(t2, o2) {
  return __async(this, null, function* () {
    const { data: r } = yield H(t2, { responseType: "json", query: __spreadProps(__spreadValues({ f: "json" }, o2?.customParameters), { token: o2?.apiKey }) });
    return r;
  });
}

// node_modules/@arcgis/core/layers/support/fetchService.js
var a = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
function n(a2, n2) {
  return __async(this, null, function* () {
    const _a = n2 || {}, { loadContext: s2 } = _a, o2 = __objRest(_a, ["loadContext"]), y2 = s2 ? yield s2.fetchServiceMetadata(a2, o2) : yield t(a2, o2), i2 = A();
    u(y2), c(y2);
    const l2 = { serviceJSON: y2, preferredHost: i2 };
    if ((y2.currentVersion ?? 0) < 10.5) return l2;
    const f = `${z() ?? a2}/layers`, L = s2 ? yield s2.fetchServiceMetadata(f, o2) : yield t(f, o2);
    return u(L), c(L), l2.layersJSON = { layers: L.layers, tables: L.tables }, l2;
  });
}
function s(e) {
  const { type: r } = e;
  return !!r && a.has(r);
}
function o(e) {
  return "Table" === e.type;
}
function c(e) {
  e.layers = e.layers?.filter(s), e.tables = e.tables?.filter(o);
}
function y(e) {
  e.type ||= "Feature Layer";
}
function i(e) {
  e.type ||= "Table";
}
function u(e) {
  e.layers?.forEach(y), e.tables?.forEach(i);
}
function l(e) {
  switch (e) {
    case "Feature Layer":
    case "Table":
      return "FeatureLayer";
    case "Oriented Imagery Layer":
      return "OrientedImageryLayer";
    case "Catalog Layer":
      return "CatalogLayer";
  }
  return "FeatureLayer";
}

export {
  t,
  n,
  l
};
//# sourceMappingURL=chunk-UOO4OHDH.js.map
