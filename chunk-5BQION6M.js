import {
  b,
  w,
  x
} from "./chunk-4HS2WVSG.js";
import {
  $,
  C,
  E,
  P,
  U,
  d,
  f,
  k,
  p
} from "./chunk-TVNRNCTE.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/smartMapping/statistics/support/statsWorker.js
function d2(a) {
  return __async(this, null, function* () {
    const { attribute: e, features: l } = a, { normalizationType: s, normalizationField: r, minValue: m, maxValue: u, fieldType: d3, outStatisticTypes: p3 } = e, c2 = yield b({ field: e.field, valueExpression: e.valueExpression, normalizationType: s, normalizationField: r, normalizationTotal: e.normalizationTotal, viewInfoParams: e.viewInfoParams, timeZone: e.timeZone, fieldInfos: e.fieldInfos }, l), v2 = d({ normalizationType: s, normalizationField: r, minValue: m, maxValue: u }), z2 = { value: 0.5, fieldType: d3 }, T = "esriFieldTypeString" === d3 ? f({ values: c2, supportsNullCount: v2, percentileParams: z2, outStatisticTypes: p3 }) : p({ values: c2, minValue: m, maxValue: u, useSampleStdDev: !s, supportsNullCount: v2, percentileParams: z2, outStatisticTypes: p3 });
    return C(T, p3, "esriFieldTypeDate" === d3);
  });
}
function p2(a) {
  return __async(this, null, function* () {
    const { attribute: e, features: n } = a, t = yield b({ field: e.field, field2: e.field2, field3: e.field3, fieldDelimiter: e.fieldDelimiter, valueExpression: e.valueExpression, viewInfoParams: e.viewInfoParams, timeZone: e.timeZone, fieldInfos: e.fieldInfos }, n, false), o = k(t);
    return $(o, e.domains, e.returnAllCodedValues, e.fieldDelimiter);
  });
}
function c(a) {
  return __async(this, null, function* () {
    const { attribute: e, features: n } = a, { field: t, normalizationType: o, normalizationField: l, normalizationTotal: s, classificationMethod: u } = e, f2 = yield b({ field: t, valueExpression: e.valueExpression, normalizationType: o, normalizationField: l, normalizationTotal: s, viewInfoParams: e.viewInfoParams, timeZone: e.timeZone, fieldInfos: e.fieldInfos }, n), d3 = E(f2, { field: t, normalizationType: o, normalizationField: l, normalizationTotal: s, classificationMethod: u, standardDeviationInterval: e.standardDeviationInterval, numClasses: e.numClasses, minValue: e.minValue, maxValue: e.maxValue });
    return P(d3, u);
  });
}
function v(a) {
  return __async(this, null, function* () {
    const { attribute: e, features: n } = a, { field: t, normalizationType: o, normalizationField: l, normalizationTotal: s, classificationMethod: r } = e, m = yield b({ field: t, valueExpression: e.valueExpression, normalizationType: o, normalizationField: l, normalizationTotal: s, viewInfoParams: e.viewInfoParams, timeZone: e.timeZone, fieldInfos: e.fieldInfos }, n);
    return U(m, { field: t, normalizationType: o, normalizationField: l, normalizationTotal: s, classificationMethod: r, standardDeviationInterval: e.standardDeviationInterval, numBins: e.numBins, minValue: e.minValue, maxValue: e.maxValue });
  });
}
function z(i) {
  return __async(this, null, function* () {
    const { attribute: n, features: t } = i, { field: o, radius: l, transform: s, spatialReference: r } = n, m = n.size ?? [0, 0], u = x(t ?? [], s, r, m);
    return w(u, l ?? void 0, o, m[0], m[1]);
  });
}

export {
  d2 as d,
  p2 as p,
  c,
  v,
  z
};
//# sourceMappingURL=chunk-5BQION6M.js.map
