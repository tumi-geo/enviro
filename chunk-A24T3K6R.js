import {
  R
} from "./chunk-7DSMXWKH.js";
import {
  u
} from "./chunk-A5WPSHPA.js";
import {
  l as l2
} from "./chunk-LUIFXDWT.js";
import {
  l
} from "./chunk-7ZUHIRNS.js";
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import {
  o
} from "./chunk-BS2W7XFZ.js";
import {
  a
} from "./chunk-EQ4FTM7V.js";
import {
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/support/FeatureFilter.js
var p;
var c = new o({ esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "envelope-intersects", esriSpatialRelIndexIntersects: "index-intersects", esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: "relation" });
var u2 = new o({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" });
var m2 = p = class extends l {
  constructor(e) {
    super(e), this.where = null, this.geometry = null, this.spatialRelationship = "intersects", this.distance = void 0, this.objectIds = null, this.units = null, this.timeExtent = null;
  }
  createQuery(e = {}) {
    const { where: t, geometry: i, spatialRelationship: s, timeExtent: o2, objectIds: n, units: a3, distance: p2 } = this;
    return new R(__spreadValues({ geometry: a(i), objectIds: a(n), spatialRelationship: s, timeExtent: a(o2), where: t, units: a3, distance: p2 }, e));
  }
  clone() {
    const { where: e, geometry: t, spatialRelationship: i, timeExtent: s, objectIds: o2, units: n, distance: l3 } = this;
    return new p({ geometry: a(t), objectIds: a(o2), spatialRelationship: i, timeExtent: a(s), where: e, units: n, distance: l3 });
  }
};
r([m({ type: String, json: { write: true } })], m2.prototype, "where", void 0), r([m({ types: l2, json: { write: true } })], m2.prototype, "geometry", void 0), r([m({ type: c.apiValues, json: { name: "spatialRel", read: { reader: c.read }, write: { allowNull: false, writer: c.write, overridePolicy() {
  return { enabled: null != this.geometry };
} } } })], m2.prototype, "spatialRelationship", void 0), r([m({ type: Number, json: { write: { overridePolicy(e) {
  return { enabled: null != e && null != this.geometry };
} } } })], m2.prototype, "distance", void 0), r([m({ type: [Number], json: { write: true } })], m2.prototype, "objectIds", void 0), r([m({ type: u2.apiValues, json: { read: u2.read, write: { writer: u2.write, overridePolicy(e) {
  return { enabled: null != e && null != this.geometry };
} } } })], m2.prototype, "units", void 0), r([m({ type: u, json: { write: true } })], m2.prototype, "timeExtent", void 0), m2 = p = r([a2("esri.layers.support.FeatureFilter")], m2);
var d = m2;

export {
  d
};
//# sourceMappingURL=chunk-A24T3K6R.js.map
