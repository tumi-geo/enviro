import {
  K,
  ee,
  oe
} from "./chunk-Z27BYBA7.js";
import "./chunk-3NDCAGCC.js";
import {
  E,
  N
} from "./chunk-PJ2GQ6WG.js";
import {
  d as d2
} from "./chunk-OVNUHO6E.js";
import "./chunk-ZM2UZP6N.js";
import {
  u
} from "./chunk-H3NTGRVD.js";
import {
  f
} from "./chunk-3F57LRWB.js";
import "./chunk-5OVES4NS.js";
import "./chunk-YLM2AYXH.js";
import {
  L
} from "./chunk-XHCLZZMA.js";
import "./chunk-7U2LZ72X.js";
import "./chunk-QKU7E3DN.js";
import "./chunk-QAYRU6DR.js";
import "./chunk-MFGLLGEH.js";
import {
  j,
  x
} from "./chunk-OHB3OQWR.js";
import {
  lt,
  ut
} from "./chunk-6HJMYH7R.js";
import "./chunk-UFZVBMJ3.js";
import "./chunk-RI2CALM5.js";
import "./chunk-C5U5I45T.js";
import "./chunk-IMXLHKPN.js";
import "./chunk-WTMJWKT2.js";
import "./chunk-4HS2WVSG.js";
import "./chunk-TVNRNCTE.js";
import "./chunk-7I33VZHW.js";
import "./chunk-GPMZGZVW.js";
import "./chunk-OGQLR6GG.js";
import "./chunk-SHOXHKMG.js";
import "./chunk-NZL4FVWZ.js";
import "./chunk-MNSJWTIB.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-LUIFXDWT.js";
import {
  d
} from "./chunk-GUUR524U.js";
import "./chunk-VCVPMXM7.js";
import "./chunk-CWKVKZV4.js";
import "./chunk-JUQ3VLST.js";
import "./chunk-XRFOA7QF.js";
import "./chunk-IKPZ63OW.js";
import "./chunk-NQKIL7LC.js";
import {
  Z
} from "./chunk-UD5LIUST.js";
import "./chunk-6HEET2ON.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import "./chunk-OXEAULCD.js";
import "./chunk-H4665WKA.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-T6SJP53T.js";
import "./chunk-42IM5JRX.js";
import "./chunk-KZTQPSJY.js";
import "./chunk-NSX4LEZU.js";
import "./chunk-CO2FWOAQ.js";
import "./chunk-ML2Q6ZHW.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-KHKWAA5Q.js";
import "./chunk-Z43IMVPB.js";
import "./chunk-UTK3TWKS.js";
import "./chunk-TKD7HAXN.js";
import {
  n as n2
} from "./chunk-CDZYVN2H.js";
import {
  r
} from "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-NC6TU6DS.js";
import {
  s as s4
} from "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-WLCZHZ7R.js";
import "./chunk-C5KIYOYM.js";
import {
  n
} from "./chunk-4W36LOWD.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import {
  s as s3
} from "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-IGNVDP3D.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import {
  b,
  s as s2
} from "./chunk-OX6HQ7WO.js";
import {
  i3 as i,
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/graphics/sources/WFSSourceWorker.js
var S = "esri.layers.WFSLayer";
var j2 = class {
  constructor() {
    this._customParameters = null, this._queryEngine = null, this._supportsPagination = true;
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = null;
  }
  load(_0) {
    return __async(this, arguments, function* (e, r2 = {}) {
      const { getFeatureUrl: a, getFeatureOutputFormat: o, fields: n3, geometryType: i2, featureType: u2, maxRecordCount: l, maxTotalRecordCount: c, maxPageCount: p, objectIdField: f2, customParameters: g } = e, { spatialReference: y, getFeatureSpatialReference: x2 } = oe(a, u2, e.spatialReference);
      try {
        yield x(x2, y);
      } catch {
        throw new s("unsupported-projection", "Projection not supported", { inSpatialReference: x2, outSpatialReference: y });
      }
      s2(r2), this._customParameters = g, this._featureType = u2, this._fieldsIndex = Z.fromLayerJSON({ fields: n3, dateFieldsTimeReference: n3.some(((e2) => "esriFieldTypeDate" === e2.type)) ? { timeZoneIANA: n } : null }), this._geometryType = i2, this._getFeatureUrl = a, this._getFeatureOutputFormat = o, this._getFeatureSpatialReference = x2, this._maxRecordCount = l, this._maxTotalRecordCount = c, this._maxPageCount = p, this._objectIdField = f2, this._spatialReference = y;
      let C = yield this._snapshotFeatures(r2);
      if (C.errors.length > 0 && (this._supportsPagination = false, C = yield this._snapshotFeatures(r2), C.errors.length > 0)) throw C.errors[0];
      const R = { type: "object-id", fieldName: f2 };
      return this._queryEngine = new L({ fieldsIndex: this._fieldsIndex, geometryType: i2, hasM: false, hasZ: false, featureIdInfo: R, spatialReference: y, timeInfo: null, featureStore: new f({ geometryType: i2, hasM: false, hasZ: false }) }), this._queryEngine.featureStore.addMany(C.features), { warnings: q(C), extent: (yield this._queryEngine.fetchRecomputedExtents()).fullExtent };
    });
  }
  applyEdits() {
    return __async(this, null, function* () {
      throw new s("wfs-source:editing-not-supported", "applyEdits() is not supported on WFSLayer");
    });
  }
  queryFeatures() {
    return __async(this, arguments, function* (e = {}, t = {}) {
      return yield this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t.signal);
    });
  }
  queryFeatureCount() {
    return __async(this, arguments, function* (e = {}, t = {}) {
      return yield this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t.signal);
    });
  }
  queryObjectIds() {
    return __async(this, arguments, function* (e = {}, t = {}) {
      yield this._waitSnapshotComplete();
      return (yield this._queryEngine.executeQueryForIds(e, t.signal)).filter(n2);
    });
  }
  queryExtent() {
    return __async(this, arguments, function* (e = {}, t = {}) {
      return yield this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t.signal);
    });
  }
  querySnapping(_0) {
    return __async(this, arguments, function* (e, t = {}) {
      return yield this._waitSnapshotComplete(), u(this._queryEngine, e, t.signal);
    });
  }
  queryAttributeBins(_0) {
    return __async(this, arguments, function* (e, t = {}) {
      return yield this._waitSnapshotComplete(), this._queryEngine.executeAttributeBinsQuery(e, t.signal);
    });
  }
  refresh(t) {
    return __async(this, null, function* () {
      return this._customParameters = t.customParameters, this._maxRecordCount = t.maxRecordCount, this._maxTotalRecordCount = t.maxTotalRecordCount, this._maxPageCount = t.maxPageCount, this._snapshotTask?.abort(), this._snapshotTask = d(((e) => this._snapshotFeatures({ signal: e }))), this._snapshotTask.promise.then(((e) => {
        this._queryEngine.featureStore.clear(), this._queryEngine.featureStore.addMany(e.features);
        for (const t2 of q(e)) i.getLogger(S).warn(new s3("wfs-layer:refresh-warning", t2.message, t2.details));
        e.errors?.length && i.getLogger(S).warn(new s3("wfs-layer:refresh-error", "Refresh completed with errors", { errors: e.errors }));
      }), (() => {
        this._queryEngine.featureStore.clear();
      })), yield this._waitSnapshotComplete(), { extent: (yield this._queryEngine.fetchRecomputedExtents()).fullExtent };
    });
  }
  _waitSnapshotComplete() {
    return __async(this, null, function* () {
      if (this._snapshotTask && !this._snapshotTask.finished) {
        try {
          yield this._snapshotTask.promise;
        } catch {
        }
        return this._waitSnapshotComplete();
      }
    });
  }
  _snapshotFeatures(e) {
    return __async(this, null, function* () {
      const t = e?.signal, r2 = this._maxTotalRecordCount, n3 = this._maxPageCount, i2 = this._supportsPagination && n3 > 1 ? yield ee(this._getFeatureUrl, this._featureType.typeName, { customParameters: this._customParameters, signal: t }) : void 0;
      let u2 = [];
      const l = [];
      if (null == i2) try {
        u2 = yield this._singleQuery(t);
      } catch (c) {
        b(c) || l.push(c);
      }
      else {
        const e2 = Math.min(i2, r2), s5 = T(this, r(Math.ceil(e2 / this._maxRecordCount), 1, n3), t);
        yield Promise.allSettled(Array.from({ length: 10 }).map((() => E2(s5, u2, l))));
      }
      return s2(t), { features: u2, totalRecordCount: i2, maxTotalRecordCount: r2, maxPageCount: n3, errors: l };
    });
  }
  _singleQuery(e) {
    return __async(this, null, function* () {
      const t = Number.isFinite(this._maxRecordCount) && this._maxRecordCount > 0 ? this._maxRecordCount : void 0, r2 = yield K(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, count: t, signal: e });
      return this._processGeoJSON(r2, { signal: e });
    });
  }
  _pageQuery(e, t) {
    return __async(this, null, function* () {
      const r2 = e * this._maxRecordCount, a = yield K(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, startIndex: r2, count: this._maxRecordCount, signal: t });
      return this._processGeoJSON(a, { startIndex: r2, signal: t });
    });
  }
  _processGeoJSON(e, t) {
    E(e, this._getFeatureSpatialReference.wkid);
    const { startIndex: r2, signal: a } = t;
    s2(a);
    const o = N(e, { geometryType: this._geometryType, hasZ: false, objectIdField: this._objectIdField });
    if (!s4(this._spatialReference, this._getFeatureSpatialReference)) for (const s5 of o) null != s5.geometry && (s5.geometry = ut(j(lt(s5.geometry, this._geometryType, false, false), this._getFeatureSpatialReference, this._spatialReference)));
    let n3 = r2 ?? 1;
    for (const s5 of o) {
      const e2 = {};
      d2(this._fieldsIndex, e2, s5.attributes, true), s5.attributes = e2, null == e2[this._objectIdField] && (s5.objectId = e2[this._objectIdField] = n3++);
    }
    return o;
  }
};
function* T(e, t, r2) {
  for (let a = 0; a < t; a++) yield e._pageQuery(a, r2);
}
function E2(e, t, r2) {
  return __async(this, null, function* () {
    let a = e.next();
    for (; !a.done; ) {
      try {
        const e2 = yield a.value;
        t.push(...e2);
      } catch (s5) {
        b(s5) || r2.push(s5);
      }
      a = e.next();
    }
  });
}
function q(e) {
  const t = [];
  return null != e.totalRecordCount && (e.features.length < e.totalRecordCount && t.push({ name: "wfs-layer:maxRecordCount-too-low", message: `Could only fetch ${e.features.length} of ${e.totalRecordCount} in ${e.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`, details: { recordCount: e.features.length, totalRecordCount: e.totalRecordCount } }), e.totalRecordCount > e.maxTotalRecordCount && t.push({ name: "wfs-layer:large-dataset", message: `The number of ${e.totalRecordCount} features exceeds the maximum allowed of ${e.maxTotalRecordCount}.`, details: { recordCount: e.features.length, totalRecordCount: e.totalRecordCount, maxTotalRecordCount: e.maxTotalRecordCount } })), t;
}
export {
  j2 as default
};
//# sourceMappingURL=chunk-AAK6LFBQ.js.map
