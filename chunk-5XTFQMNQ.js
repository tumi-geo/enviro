import {
  l
} from "./chunk-LLKQFUVT.js";
import {
  K,
  Ke,
  ae,
  q,
  te
} from "./chunk-RGB64UKL.js";
import "./chunk-SH4JTOQ2.js";
import "./chunk-CI4X7KPD.js";
import "./chunk-44XQKQJP.js";
import {
  R,
  i
} from "./chunk-MNSJWTIB.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-6HEET2ON.js";
import "./chunk-6QXOVETH.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import {
  h
} from "./chunk-UTK3TWKS.js";
import "./chunk-TKD7HAXN.js";
import {
  e,
  o
} from "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import {
  a,
  r
} from "./chunk-NC6TU6DS.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
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
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/arcade/functions/featuresetstats.js
function l2(n, t, e2, a2) {
  return __async(this, null, function* () {
    if (1 === e2.length) {
      if (o(e2[0])) return l(n, e2[0], q(e2[1], -1));
      if (te(e2[0])) return l(n, e2[0].toArray(), q(e2[1], -1));
    } else if (2 === e2.length) {
      if (o(e2[0])) return l(n, e2[0], q(e2[1], -1));
      if (te(e2[0])) return l(n, e2[0].toArray(), q(e2[1], -1));
      if (K(e2[0])) {
        const r2 = yield e2[0].load(), i2 = yield y(R.create(e2[1], { fieldsIndex: r2.getFieldsIndex(), timeZone: r2.dateFieldsTimeZoneDefaultUTC }), a2, t);
        return g(t, yield e2[0].calculateStatistic(n, i2, q(e2[2], 1e3), t.abortSignal));
      }
    } else if (3 === e2.length && K(e2[0])) {
      const r2 = yield e2[0].load(), i2 = yield y(R.create(e2[1], { fieldsIndex: r2.getFieldsIndex(), timeZone: r2.dateFieldsTimeZoneDefaultUTC }), a2, t);
      return g(t, yield e2[0].calculateStatistic(n, i2, q(e2[2], 1e3), t.abortSignal));
    }
    return l(n, e2, -1);
  });
}
function g(t, e2) {
  return e2 instanceof i ? h.fromReaderAsTimeStampOffset(e2.toStorageFormat()) : e2 instanceof Date ? h.dateJSAndZoneToArcadeDate(e2, Ke(t)) : e2;
}
function y(n, t, e2) {
  return __async(this, null, function* () {
    const a2 = n.getVariables();
    if (a2.length > 0) {
      const r2 = {};
      for (const n2 of a2) r2[n2] = t.evaluateIdentifier(e2, { name: n2 });
      n.parameters = r2;
    }
    return n;
  });
}
function A(n) {
  "async" === n.mode && (n.functions.stdev = function(t, e2) {
    return n.standardFunctionAsync(t, e2, ((e3, a2, r2) => l2("stdev", t, r2, n)));
  }, n.functions.variance = function(t, e2) {
    return n.standardFunctionAsync(t, e2, ((e3, a2, r2) => l2("variance", t, r2, n)));
  }, n.functions.average = function(t, e2) {
    return n.standardFunctionAsync(t, e2, ((e3, a2, r2) => l2("mean", t, r2, n)));
  }, n.functions.mean = function(t, e2) {
    return n.standardFunctionAsync(t, e2, ((e3, a2, r2) => l2("mean", t, r2, n)));
  }, n.functions.sum = function(t, e2) {
    return n.standardFunctionAsync(t, e2, ((e3, a2, r2) => l2("sum", t, r2, n)));
  }, n.functions.min = function(t, e2) {
    return n.standardFunctionAsync(t, e2, ((e3, a2, r2) => l2("min", t, r2, n)));
  }, n.functions.max = function(t, e2) {
    return n.standardFunctionAsync(t, e2, ((e3, a2, r2) => l2("max", t, r2, n)));
  }, n.functions.count = function(o2, s) {
    return n.standardFunctionAsync(o2, s, ((n2, c, u) => __async(null, null, function* () {
      if (ae(u, 1, 1, o2, s), K(u[0])) return u[0].count(n2.abortSignal);
      if (o(u[0]) || e(u[0])) return u[0].length;
      if (te(u[0])) return u[0].length();
      throw new a(o2, r.InvalidParameter, s);
    })));
  });
}
export {
  A as registerFunctions
};
//# sourceMappingURL=chunk-5XTFQMNQ.js.map
