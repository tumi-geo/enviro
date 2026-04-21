import {
  r as r2
} from "./chunk-D2TJBM23.js";
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

// node_modules/@arcgis/core/rest/support/spatialRelationships.js
var s = new o({ esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "envelope-intersects", esriSpatialRelIndexIntersects: "index-intersects", esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: "relation" });

// node_modules/@arcgis/core/rest/support/StatisticDefinition.js
var c;
var n = new o({ count: "count", sum: "sum", min: "min", max: "max", avg: "avg", stddev: "stddev", var: "var", exceedslimit: "exceedslimit", percentile_cont: "percentile-continuous", percentile_disc: "percentile-discrete", EnvelopeAggregate: "envelope-aggregate", CentroidAggregate: "centroid-aggregate", ConvexHullAggregate: "convex-hull-aggregate" });
var p = c = class extends l {
  constructor(t) {
    super(t), this.maxPointCount = void 0, this.maxRecordCount = void 0, this.maxVertexCount = void 0, this.onStatisticField = null, this.outStatisticFieldName = null, this.statisticType = null, this.statisticParameters = null;
  }
  writeStatisticParameters(t, e) {
    "percentile-continuous" !== this.statisticType && "percentile-discrete" !== this.statisticType || (e.statisticParameters = a(t));
  }
  clone() {
    return new c({ maxPointCount: this.maxPointCount, maxRecordCount: this.maxRecordCount, maxVertexCount: this.maxVertexCount, onStatisticField: this.onStatisticField, outStatisticFieldName: this.outStatisticFieldName, statisticType: this.statisticType, statisticParameters: a(this.statisticParameters) });
  }
};
r([m({ type: Number, json: { write: true } })], p.prototype, "maxPointCount", void 0), r([m({ type: Number, json: { write: true } })], p.prototype, "maxRecordCount", void 0), r([m({ type: Number, json: { write: true } })], p.prototype, "maxVertexCount", void 0), r([m({ type: String, json: { write: true } })], p.prototype, "onStatisticField", void 0), r([m({ type: String, json: { write: true } })], p.prototype, "outStatisticFieldName", void 0), r([m({ type: String, json: { read: { source: "statisticType", reader: n.read }, write: { target: "statisticType", writer: n.write } } })], p.prototype, "statisticType", void 0), r([m({ type: Object })], p.prototype, "statisticParameters", void 0), r([r2("statisticParameters")], p.prototype, "writeStatisticParameters", null), p = c = r([a2("esri.rest.support.StatisticDefinition")], p);

export {
  s,
  p
};
//# sourceMappingURL=chunk-CJNEK5TE.js.map
