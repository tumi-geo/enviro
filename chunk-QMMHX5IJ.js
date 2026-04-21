import {
  r
} from "./chunk-BIWH4ZRS.js";
import {
  e
} from "./chunk-2J7H6ADN.js";
import "./chunk-AEEQQY6K.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import {
  o
} from "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import {
  f
} from "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import {
  m
} from "./chunk-UMW5MZI7.js";
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
import "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/geometryEngine.js
function i(e2) {
  const r2 = Array.isArray(e2) ? e2[0].spatialReference : e2.spatialReference;
  return r2 ? m(f, r2) : f.WGS84;
}
function o2(n) {
  return e.extendedSpatialReferenceInfo(n);
}
function c(n, t) {
  return o(n), e.clip(r, i(n), n, t);
}
function f2(n, t) {
  return o(n), e.cut(r, i(n), n, t);
}
function s(n, t) {
  return o(n), o(t), e.contains(r, i(n), n, t);
}
function a(n, t) {
  return o(n), o(t), e.crosses(r, i(n), n, t);
}
function l(n, t, o3) {
  return o(n), o(t), e.distance(r, i(n), n, t, o3);
}
function p(n, t) {
  return o(n), o(t), e.equals(r, i(n), n, t);
}
function m2(n, t) {
  return o(n), o(t), e.intersects(r, i(n), n, t);
}
function d(n, t) {
  return o(n), o(t), e.touches(r, i(n), n, t);
}
function g(n, t) {
  return o(n), o(t), e.within(r, i(n), n, t);
}
function h(n, t) {
  return o(n), o(t), e.disjoint(r, i(n), n, t);
}
function w(n, t) {
  return o(n), o(t), e.overlaps(r, i(n), n, t);
}
function R(n, t, o3) {
  return o(n), o(t), e.relate(r, i(n), n, t, o3);
}
function x(n) {
  return o(n), e.isSimple(r, i(n), n);
}
function y(n) {
  return o(n), e.simplify(r, i(n), n);
}
function S(n, e2 = false) {
  return e.convexHull(r, i(n), n, e2);
}
function j(n, t) {
  return o(t), e.difference(r, i(n), n, t);
}
function A(n, t) {
  return o(t), e.symmetricDifference(r, i(n), n, t);
}
function D(n, t) {
  return o(t), e.intersect(r, i(n), n, t);
}
function T(n) {
  return e.union(r, i(n), n);
}
function E(n, e2, t, o3, c2, f3) {
  return e.offset(r, i(n), n, e2, t, o3, c2, f3);
}
function J(n, e2, t, o3 = false) {
  return e.buffer(r, i(n), n, e2, t, o3);
}
function L(n, e2, t, o3, c2, f3) {
  return e.geodesicBuffer(r, i(n), n, e2, t, o3, c2, f3);
}
function N(n, t, o3 = true) {
  return o(n), e.nearestCoordinate(r, i(n), n, t, o3);
}
function O(n, t) {
  return o(n), e.nearestVertex(r, i(n), n, t);
}
function V(n, t, o3, c2) {
  return o(n), e.nearestVertices(r, i(n), n, t, o3, c2);
}
function v(n) {
  return "xmin" in n ? "center" in n ? n.center : null : "x" in n ? n : "extent" in n ? n.extent?.center ?? null : null;
}
function z(n, e2, t) {
  if (null == n) throw new M();
  const u = n.spatialReference;
  if (null == (t = t ?? v(n))) throw new M();
  const i2 = n.constructor.fromJSON(e.rotate(n, e2, t));
  return i2.spatialReference = u, i2;
}
function B(n, e2) {
  if (null == n) throw new M();
  const t = n.spatialReference;
  if (null == (e2 = e2 ?? v(n))) throw new M();
  const u = n.constructor.fromJSON(e.flipHorizontal(n, e2));
  return u.spatialReference = t, u;
}
function G(n, e2) {
  if (null == n) throw new M();
  const t = n.spatialReference;
  if (null == (e2 = e2 ?? v(n))) throw new M();
  const u = n.constructor.fromJSON(e.flipVertical(n, e2));
  return u.spatialReference = t, u;
}
function H(n, t, o3, c2) {
  return o(n), e.generalize(r, i(n), n, t, o3, c2);
}
function I(n, t, o3) {
  return o(n), e.densify(r, i(n), n, t, o3);
}
function b(n, t, o3, c2 = 0) {
  return o(n), e.geodesicDensify(r, i(n), n, t, o3, c2);
}
function k(n, t) {
  return o(n), e.planarArea(r, i(n), n, t);
}
function q(n, t) {
  return o(n), e.planarLength(r, i(n), n, t);
}
function C(n, t, o3) {
  return o(n), e.geodesicArea(r, i(n), n, t, o3);
}
function P(n, t, o3) {
  return o(n), e.geodesicLength(r, i(n), n, t, o3);
}
function W(n, e2) {
  return e.intersectLinesToPoints(r, i(n), n, e2);
}
function F(n, e2) {
  e.changeDefaultSpatialReferenceTolerance(n, e2);
}
function K(n) {
  e.clearDefaultSpatialReferenceTolerance(n);
}
var M = class extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
};
export {
  J as buffer,
  F as changeDefaultSpatialReferenceTolerance,
  K as clearDefaultSpatialReferenceTolerance,
  c as clip,
  s as contains,
  S as convexHull,
  a as crosses,
  f2 as cut,
  I as densify,
  j as difference,
  h as disjoint,
  l as distance,
  p as equals,
  o2 as extendedSpatialReferenceInfo,
  B as flipHorizontal,
  G as flipVertical,
  H as generalize,
  C as geodesicArea,
  L as geodesicBuffer,
  b as geodesicDensify,
  P as geodesicLength,
  D as intersect,
  W as intersectLinesToPoints,
  m2 as intersects,
  x as isSimple,
  N as nearestCoordinate,
  O as nearestVertex,
  V as nearestVertices,
  E as offset,
  w as overlaps,
  k as planarArea,
  q as planarLength,
  R as relate,
  z as rotate,
  y as simplify,
  A as symmetricDifference,
  d as touches,
  T as union,
  g as within
};
//# sourceMappingURL=chunk-QMMHX5IJ.js.map
