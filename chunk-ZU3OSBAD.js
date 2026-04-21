import {
  i
} from "./chunk-LUW6AEW2.js";
import {
  R as R2
} from "./chunk-CFXZJU36.js";
import {
  t
} from "./chunk-KKXUY5OH.js";
import "./chunk-MFGLLGEH.js";
import "./chunk-OHB3OQWR.js";
import "./chunk-SHOXHKMG.js";
import "./chunk-H4CURCSO.js";
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
import "./chunk-CJNEK5TE.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-LUIFXDWT.js";
import "./chunk-JUQ3VLST.js";
import {
  R
} from "./chunk-XRFOA7QF.js";
import "./chunk-IKPZ63OW.js";
import "./chunk-NQKIL7LC.js";
import "./chunk-6HEET2ON.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import {
  f
} from "./chunk-OXEAULCD.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-42IM5JRX.js";
import "./chunk-ML2Q6ZHW.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-VY2R5MU5.js";
import {
  v
} from "./chunk-DQ6RY3UR.js";
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
  c,
  s
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
import {
  I,
  V
} from "./chunk-AZFJ5Z42.js";
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

// node_modules/@arcgis/core/rest/query/operations/queryAttributeBins.js
function l(t2) {
  const e = t2.geometry, i3 = t2.toJSON(), r = i3;
  let u, l2, a2;
  if (null != e && (l2 = e.spatialReference, a2 = c(l2), r.geometryType = v(e), r.geometry = JSON.stringify(e), r.inSR = a2), i3.outSR ? (r.outSR = c(i3.outSR), u = t2.outSpatialReference) : e && (r.outSR = r.inSR, u = l2), r.bin &&= JSON.stringify(r.bin), r.quantizationParameters &&= JSON.stringify(r.quantizationParameters), r.outStatistics &&= JSON.stringify(r.outStatistics), r.outTimeReference &&= JSON.stringify(r.outTimeReference), i3.timeExtent) {
    const t3 = i3.timeExtent, { start: e2, end: n } = t3;
    null == e2 && null == n || (r.time = e2 === n ? e2 : `${e2 ?? "null"},${n ?? "null"}`), delete i3.timeExtent;
  }
  return t2.defaultSpatialReference && s(l2, u) && (r.defaultSR = r.inSR, delete r.inSR, delete r.outSR), r;
}
function a(t2, e, i3) {
  return __async(this, null, function* () {
    return null != e.timeExtent && e.timeExtent.isEmpty ? { data: { features: [] } } : yield m(t2, e, i3);
  });
}
function m(_0, _1) {
  return __async(this, arguments, function* (n, o, s2 = {}) {
    const a2 = "string" == typeof n ? I(n) : n, m2 = o.geometry ? [o.geometry] : [], f2 = yield R(m2, null, { signal: s2.signal }), y = f2?.[0];
    null != y && ((o = o.clone()).geometry = y);
    const p = t(__spreadValues(__spreadProps(__spreadValues({}, a2.query), { f: "json" }), l(o)));
    return H(V(a2.path, "queryBins"), __spreadProps(__spreadValues({}, s2), { query: __spreadValues(__spreadValues({}, p), s2.query) }));
  });
}

// node_modules/@arcgis/core/rest/query/executeAttributeBinsQuery.js
function i2(i3, s2, u) {
  return __async(this, null, function* () {
    const { data: m2 } = yield a(f(i3), R2.from(s2), u);
    return i.fromJSON(m2);
  });
}
export {
  i2 as executeAttributeBinsQuery
};
//# sourceMappingURL=chunk-ZU3OSBAD.js.map
