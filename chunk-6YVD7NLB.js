import {
  d,
  w,
  x
} from "./chunk-3IW6BG3Q.js";
import "./chunk-IX7N53F6.js";
import {
  t
} from "./chunk-YSFZEZ63.js";
import "./chunk-E5CS2SYD.js";
import {
  lt,
  wt
} from "./chunk-6HJMYH7R.js";
import "./chunk-UFZVBMJ3.js";
import "./chunk-RI2CALM5.js";
import "./chunk-C5U5I45T.js";
import "./chunk-IMXLHKPN.js";
import "./chunk-OGQLR6GG.js";
import {
  m
} from "./chunk-HR4CHV7Z.js";
import "./chunk-LUIFXDWT.js";
import "./chunk-6HEET2ON.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import {
  o
} from "./chunk-DWOFP23M.js";
import "./chunk-6QXOVETH.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
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
import {
  e3 as e
} from "./chunk-QE6WU2QZ.js";
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
import {
  n
} from "./chunk-FWKJPKUC.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js
function u(t3, e2) {
  return e2;
}
function p(t3, e2, r, s2) {
  switch (r) {
    case 0:
      return f2(t3, e2 + s2, 0);
    case 1:
      return "lowerLeft" === t3.originPosition ? f2(t3, e2 + s2, 1) : y(t3, e2 + s2, 1);
  }
}
function d2(t3, e2, r, s2) {
  return 2 === r ? f2(t3, e2, 2) : p(t3, e2, r, s2);
}
function c(t3, e2, r, s2) {
  return 2 === r ? f2(t3, e2, 3) : p(t3, e2, r, s2);
}
function m2(t3, e2, r, s2) {
  return 3 === r ? f2(t3, e2, 3) : d2(t3, e2, r, s2);
}
function f2({ translate: t3, scale: e2 }, r, s2) {
  return t3[s2] + r * e2[s2];
}
function y({ translate: t3, scale: e2 }, r, s2) {
  return t3[s2] - r * e2[s2];
}
var _ = class {
  constructor(t3) {
    this._options = t3, this.geometryTypes = ["point", "multipoint", "polyline", "polygon"], this._previousCoordinate = [0, 0], this._transform = null, this._applyTransform = u, this._lengths = [], this._currentLengthIndex = 0, this._toAddInCurrentPath = 0, this._vertexDimension = 0, this._coordinateBuffer = null, this._coordinateBufferPtr = 0, this._attributesConstructor = class {
    }, this._missingAttributes = [];
  }
  get missingAttributes() {
    return this._missingAttributes;
  }
  createFeatureResult() {
    return new x();
  }
  finishFeatureResult(t3) {
    if (this._options.applyTransform && (t3.transform = null), this._attributesConstructor = class {
    }, this._coordinateBuffer = null, this._lengths.length = 0, !t3.hasZ) return;
    const e2 = o(t3.geometryType, this._options.sourceSpatialReference, t3.spatialReference);
    if (null != e2) for (const r of t3.features) e2(r.geometry);
  }
  createSpatialReference() {
    return new f();
  }
  addField(t3, e2) {
    t3.fields.push(m.fromJSON(e2));
    const r = t3.fields.map(((t4) => t4.name));
    this._attributesConstructor = function() {
      for (const t4 of r) this[t4] = null;
    };
  }
  addFeature(t3, e2) {
    const r = this._options.maxStringAttributeLength, s2 = this._options.maxStringAttributeFields;
    w(e2.attributes, s2, r, ((r2) => {
      const s3 = e2.attributes[t3.objectIdFieldName];
      null != s3 && this._missingAttributes.push({ objectId: s3, attribute: r2 });
    })), t3.features.push(e2);
  }
  addQueryGeometry(t3, e2) {
    const { queryGeometry: r, queryGeometryType: s2 } = e2, i = this._transform ? wt(r.clone(), r, false, false, this._transform) : r.clone(), o2 = lt(i, s2, false, false);
    switch (s2) {
      case "esriGeometryPoint":
        o2.type = "point";
        break;
      case "esriGeometryPolygon":
        o2.type = "polygon";
        break;
      case "esriGeometryPolyline":
        o2.type = "polyline";
        break;
      case "esriGeometryMultipoint":
        o2.type = "multipoint";
    }
    t3.queryGeometryType = s2, t3.queryGeometry = o2;
  }
  prepareFeatures(e2) {
    switch (this._transform = e2.transform ?? null, this._options.applyTransform && e2.transform && (this._applyTransform = this._deriveApplyTransform(e2)), this._vertexDimension = 2, e2.hasZ && this._vertexDimension++, e2.hasM && this._vertexDimension++, e2.geometryType) {
      case "point":
        this.addCoordinate = (t3, e3, r) => this.addCoordinatePoint(t3, e3, r), this.createGeometry = (t3) => this.createPointGeometry(t3);
        break;
      case "polygon":
        this.addCoordinate = (t3, e3, r) => this._addCoordinatePolygon(t3, e3, r), this.createGeometry = (t3) => this._createPolygonGeometry(t3);
        break;
      case "polyline":
        this.addCoordinate = (t3, e3, r) => this._addCoordinatePolyline(t3, e3, r), this.createGeometry = (t3) => this._createPolylineGeometry(t3);
        break;
      case "multipoint":
        this.addCoordinate = (t3, e3, r) => this._addCoordinateMultipoint(t3, e3, r), this.createGeometry = (t3) => this._createMultipointGeometry(t3);
        break;
      case "mesh":
      case "extent":
        break;
      default:
        n(e2.geometryType);
    }
  }
  createFeature() {
    return this._lengths.length = 0, this._currentLengthIndex = 0, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0, new d(e(), null, new this._attributesConstructor());
  }
  allocateCoordinates() {
    const t3 = this._lengths.reduce(((t4, e2) => t4 + e2), 0);
    this._coordinateBuffer = new Float64Array(t3 * this._vertexDimension), this._coordinateBufferPtr = 0;
  }
  addLength(t3, e2) {
    0 === this._lengths.length && (this._toAddInCurrentPath = e2), this._lengths.push(e2);
  }
  createPointGeometry(t3) {
    const e2 = { type: "point", x: 0, y: 0, spatialReference: t3.spatialReference, hasZ: !!t3.hasZ, hasM: !!t3.hasM };
    return e2.hasZ && (e2.z = 0), e2.hasM && (e2.m = 0), e2;
  }
  addCoordinatePoint(t3, e2, r) {
    const s2 = this._transform ? this._applyTransform(this._transform, e2, r, 0) : e2;
    if (null != s2) switch (r) {
      case 0:
        t3.x = s2;
        break;
      case 1:
        t3.y = s2;
        break;
      case 2:
        t3.hasZ ? t3.z = s2 : t3.m = s2;
        break;
      case 3:
        t3.m = s2;
    }
  }
  _transformPathLikeValue(t3, e2) {
    let r = 0;
    return e2 <= 1 && (r = this._previousCoordinate[e2], this._previousCoordinate[e2] += t3), this._transform ? this._applyTransform(this._transform, t3, e2, r) : t3;
  }
  _addCoordinatePolyline(t3, e2, r) {
    this._dehydratedAddPointsCoordinate(t3.paths, e2, r);
  }
  _addCoordinatePolygon(t3, e2, r) {
    this._dehydratedAddPointsCoordinate(t3.rings, e2, r);
  }
  _addCoordinateMultipoint(t3, e2, r) {
    0 === r && t3.points.push([]);
    const s2 = this._transformPathLikeValue(e2, r);
    t3.points[t3.points.length - 1].push(s2);
  }
  _createPolygonGeometry(t3) {
    return { type: "polygon", rings: [[]], spatialReference: t3.spatialReference, hasZ: !!t3.hasZ, hasM: !!t3.hasM };
  }
  _createPolylineGeometry(t3) {
    return { type: "polyline", paths: [[]], spatialReference: t3.spatialReference, hasZ: !!t3.hasZ, hasM: !!t3.hasM };
  }
  _createMultipointGeometry(t3) {
    return { type: "multipoint", points: [], spatialReference: t3.spatialReference, hasZ: !!t3.hasZ, hasM: !!t3.hasM };
  }
  _dehydratedAddPointsCoordinate(t3, e2, r) {
    0 === r && 0 === this._toAddInCurrentPath-- && (t3.push([]), this._toAddInCurrentPath = this._lengths[++this._currentLengthIndex] - 1, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0);
    const s2 = this._transformPathLikeValue(e2, r), i = t3[t3.length - 1], o2 = this._coordinateBuffer;
    if (o2) {
      if (0 === r) {
        const t4 = this._coordinateBufferPtr * Float64Array.BYTES_PER_ELEMENT;
        i.push(new Float64Array(o2.buffer, t4, this._vertexDimension));
      }
      o2[this._coordinateBufferPtr++] = s2;
    }
  }
  _deriveApplyTransform(t3) {
    const { hasZ: e2, hasM: r } = t3;
    return e2 && r ? m2 : e2 ? d2 : r ? c : p;
  }
};

// node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js
var t2 = class {
  _parseFeatureQuery(t3) {
    const s2 = new _(t3.options), i = t(t3.buffer, s2), o2 = __spreadProps(__spreadValues({}, i), { spatialReference: i.spatialReference?.toJSON(), fields: i.fields ? i.fields.map(((e2) => e2.toJSON())) : void 0, missingAttributes: s2.missingAttributes });
    return Promise.resolve(o2);
  }
};
function s() {
  return new t2();
}
export {
  s as default
};
//# sourceMappingURL=chunk-6YVD7NLB.js.map
