import {
  t
} from "./chunk-KKXUY5OH.js";
import {
  g
} from "./chunk-H4CURCSO.js";
import {
  c as c2
} from "./chunk-E6CXKR7Y.js";
import "./chunk-T4V6OAUU.js";
import "./chunk-5QTM7DAF.js";
import "./chunk-CVU3XSZQ.js";
import "./chunk-CMVANBEN.js";
import "./chunk-PPYJGQC2.js";
import "./chunk-6YN6I5ZM.js";
import "./chunk-7O25E3Z7.js";
import "./chunk-QAS34KWO.js";
import "./chunk-N3OHVW7O.js";
import "./chunk-JBWJWCIU.js";
import "./chunk-66I5P6AF.js";
import "./chunk-IB63APHQ.js";
import "./chunk-2JXAQB6C.js";
import "./chunk-T5MN4FZ3.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-LUIFXDWT.js";
import "./chunk-6HEET2ON.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import {
  f
} from "./chunk-OXEAULCD.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-ML2Q6ZHW.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import {
  c
} from "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-S4VGKABR.js";
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

// node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js
function r(e, o) {
  const r2 = e.toJSON();
  return r2.objectIds && (r2.objectIds = r2.objectIds.join(",")), r2.orderByFields && (r2.orderByFields = r2.orderByFields.join(",")), r2.outFields && !o?.returnCountOnly ? r2.outFields.includes("*") ? r2.outFields = "*" : r2.outFields = r2.outFields.join(",") : delete r2.outFields, r2.outSR && (r2.outSR = c(r2.outSR)), r2.dynamicDataSource && (r2.layer = JSON.stringify({ source: r2.dynamicDataSource }), delete r2.dynamicDataSource), r2;
}
function s(e, t2, o) {
  return __async(this, null, function* () {
    const r2 = yield a(e, t2, o), s2 = r2.data, n3 = s2.geometryType, d = s2.spatialReference, c3 = {};
    for (const a2 of s2.relatedRecordGroups) {
      const e2 = { fields: void 0, geometryType: n3, spatialReference: d, hasZ: !!s2.hasZ, hasM: !!s2.hasM, features: a2.relatedRecords };
      if (null != a2.objectId) c3[a2.objectId] = e2;
      else for (const t3 of Object.keys(a2)) "relatedRecords" !== t3 && (c3[a2[t3]] = e2);
    }
    return __spreadProps(__spreadValues({}, r2), { data: c3 });
  });
}
function n(e, t2, o) {
  return __async(this, null, function* () {
    const r2 = yield a(e, t2, o, { returnCountOnly: true }), s2 = r2.data, n3 = {};
    for (const a2 of s2.relatedRecordGroups) null != a2.objectId && (n3[a2.objectId] = a2.count);
    return __spreadProps(__spreadValues({}, r2), { data: n3 });
  });
}
function a(_0, _1) {
  return __async(this, arguments, function* (t2, s2, n3 = {}, a2) {
    const d = t(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, t2.query), { f: "json" }), a2), r(s2, a2)));
    return H(t2.path + "/queryRelatedRecords", __spreadProps(__spreadValues({}, n3), { query: __spreadValues(__spreadValues({}, n3.query), d) }));
  });
}

// node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js
function n2(e, n3, u2) {
  return __async(this, null, function* () {
    n3 = c2.from(n3);
    const a2 = f(e);
    return s(a2, n3, u2).then(((t2) => {
      const r2 = t2.data, e2 = {};
      return Object.keys(r2).forEach(((t3) => e2[t3] = g.fromJSON(r2[t3]))), e2;
    }));
  });
}
function u(r2, o, n3) {
  return __async(this, null, function* () {
    o = c2.from(o);
    const u2 = f(r2);
    return n(u2, o, __spreadValues({}, n3)).then(((t2) => t2.data));
  });
}
export {
  n2 as executeRelationshipQuery,
  u as executeRelationshipQueryForCount
};
//# sourceMappingURL=chunk-Z2X3YVF4.js.map
