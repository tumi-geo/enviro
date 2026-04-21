import {
  f
} from "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/arcade/geometry/operatorsWorker.js
function t(e, t2) {
  let r2;
  return { loaded: false, load: () => r2 ??= t2().then(((t3) => {
    o[e] = { loaded: true, execute: t3 };
  })) };
}
function r(e) {
  return null == e ? null : e.toJSON();
}
var o = { disjoint: t("disjoint", (() => import("./chunk-M4TWARQ4.js").then(((e) => e.execute)))), intersects: t("intersects", (() => import("./chunk-BETBEPMI.js").then(((e) => e.execute)))), touches: t("touches", (() => import("./chunk-GF767TX4.js").then(((e) => e.execute)))), crosses: t("crosses", (() => import("./chunk-EOPT5QHA.js").then(((e) => e.execute)))), within: t("within", (() => import("./chunk-4MQBPN4N.js").then(((e) => e.execute)))), contains: t("contains", (() => import("./chunk-IE42ODBC.js").then(((e) => e.execute)))), overlaps: t("overlaps", (() => import("./chunk-NMGYSXDG.js").then(((e) => e.execute)))), equals: t("equals", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-4YFH2RQA.js");
  return (r2, o2) => t2.execute(f(r2), f(o2));
}))), relate: t("relate", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-5ZDVLXZA.js");
  return (r2, o2, n2) => t2.execute(f(r2), f(o2), n2);
}))), intersection: t("intersection", (() => import("./chunk-3JV6PODE.js").then(((e) => e.execute)))), union: t("union", (() => import("./chunk-QP6DL7WZ.js").then(((e) => e.executeMany)))), difference: t("difference", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-S6ORRYRY.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}))), symmetricDifference: t("symmetricDifference", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-4FZYSAP7.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}))), clip: t("clip", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-CUHBUYOF.js");
  return (o2, n2) => r(t2.execute(f(o2), f(n2)));
}))), cut: t("cut", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-UB5S5VPX.js");
  return (o2, n2) => t2.execute(f(o2), f(n2)).map(((e) => r(e)));
}))), area: t("area", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-DVLQD6YE.js"), { convertFromSpatialReferenceUnit: r2, toAreaUnit: o2 } = yield import("./chunk-CW46B63O.js");
  return (n2, a) => {
    const s = t2.execute(f(n2));
    return r2(n2.spatialReference, o2(a), s);
  };
}))), geodeticArea: t("geodeticArea", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-DT6XCZEB.js"), { convert: r2, squareMeters: o2, toAreaUnit: n2 } = yield import("./chunk-CW46B63O.js");
  return yield t2.load(), (a, s, i) => {
    const c = t2.execute(f(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}))), length: t("length", (() => __async(null, null, function* () {
  const e = yield import("./chunk-6XZ4EFAY.js"), { convertFromSpatialReferenceUnit: t2, toLengthUnit: r2 } = yield import("./chunk-CW46B63O.js");
  return (o2, n2) => {
    const a = e.execute(o2);
    return t2(o2.spatialReference, r2(n2), a);
  };
}))), geodeticLength: t("geodeticLength", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-ATWVH5SW.js"), { convert: r2, meters: o2, toLengthUnit: n2 } = yield import("./chunk-CW46B63O.js");
  return yield t2.load(), (a, s, i) => {
    const c = t2.execute(f(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}))), distance: t("distance", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-7OU7C7DU.js"), { convertFromSpatialReferenceUnit: r2, toLengthUnit: o2 } = yield import("./chunk-CW46B63O.js");
  return (n2, a, s) => {
    const i = t2.execute(f(n2), f(a));
    return r2(n2.spatialReference, o2(s), i);
  };
}))), densify: t("densify", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-O2VVWJIA.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = yield import("./chunk-CW46B63O.js");
  return (a, s, i) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(f(a), s)));
}))), geodeticDensify: t("geodeticDensify", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-23L3DWAA.js"), { convert: o2, meters: n2, toLengthUnit: a } = yield import("./chunk-CW46B63O.js");
  return yield t2.load(), (s, i, c, p) => (i = o2(a(c), n2, i), r(t2.execute(f(s), i, { curveType: p })));
}))), generalize: t("generalize", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-ZLCTUZSP.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = yield import("./chunk-CW46B63O.js");
  return (a, s, i, c) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(f(a), s, c)));
}))), buffer: t("buffer", (() => __async(null, null, function* () {
  const e = yield import("./chunk-BXU633VW.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = yield import("./chunk-CW46B63O.js");
  return (o2, n2, a) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2));
}))), geodesicBuffer: t("geodesicBuffer", (() => __async(null, null, function* () {
  const e = yield import("./chunk-OHFV26RT.js"), { convert: t2, meters: r2, toLengthUnit: o2 } = yield import("./chunk-CW46B63O.js");
  return yield e.load(), (n2, a, s, i) => (a = t2(o2(s), r2, a), e.execute(n2, a, { curveType: i }));
}))), offset: t("offset", (() => __async(null, null, function* () {
  const e = yield import("./chunk-UMIKYP7M.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = yield import("./chunk-CW46B63O.js");
  return (o2, n2, a, s) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2, s));
}))), rotate: t("rotate", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-YQFNO7AF.js"), { default: o2 } = yield import("./chunk-FBKRNZXD.js");
  return (n2, a, s, i) => {
    const c = new o2().rotate(a, s, i);
    return r(t2.execute(f(n2), c));
  };
}))), centroid: t("centroid", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-PCBV2S3R.js");
  return (o2) => r(t2.execute(f(o2)));
}))), labelPoint: t("labelPoint", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-347CCYMF.js");
  return (o2) => r(t2.execute(f(o2)));
}))), simplify: t("simplify", (() => import("./chunk-RC5AIT3D.js").then(((e) => e.execute)))), isSelfIntersecting: t("isSelfIntersecting", (() => __async(null, null, function* () {
  const { NonSimpleResult: t2 } = yield import("./chunk-YBNM3VQU.js"), r2 = yield import("./chunk-ZK7U32O3.js"), o2 = /* @__PURE__ */ new Set([5, 6, 7, 10, 11, 12]);
  return (n2) => {
    const a = new t2();
    return !r2.isSimple(f(n2), a) && o2.has(a.m_reason);
  };
}))), isSimple: t("isSimple", (() => import("./chunk-RC5AIT3D.js").then(((e) => e.isSimple)))), convexHull: t("convexHull", (() => import("./chunk-ULJDOIX6.js").then(((e) => e.execute)))), getNearestCoordinate: t("getNearestCoordinate", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-TNHYVUFU.js");
  return (o2, n2, a) => {
    const s = t2.getNearestCoordinate(f(o2), f(n2), a);
    return __spreadProps(__spreadValues({}, s), { coordinate: r(s.coordinate) });
  };
}))), getNearestVertex: t("getNearestVertex", (() => __async(null, null, function* () {
  const t2 = yield import("./chunk-TNHYVUFU.js");
  return (o2, n2) => {
    const a = t2.getNearestVertex(f(o2), f(n2));
    return __spreadProps(__spreadValues({}, a), { coordinate: r(a.coordinate) });
  };
}))) };
function n(e, t2) {
  const r2 = o[e];
  return r2.loaded ? r2.execute.apply(void 0, t2) : r2.load().then((() => n(e, t2)));
}
export {
  n as invokeGeometryOp
};
//# sourceMappingURL=chunk-36FWK445.js.map
