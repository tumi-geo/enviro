import {
  j
} from "./chunk-5UTDFNZU.js";
import {
  $,
  $e,
  Be,
  Ce,
  De,
  He,
  K,
  Ke,
  Oe,
  Ue,
  We,
  ae,
  he,
  pe,
  q
} from "./chunk-RGB64UKL.js";
import {
  b
} from "./chunk-SH4JTOQ2.js";
import "./chunk-CI4X7KPD.js";
import "./chunk-44XQKQJP.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-6HEET2ON.js";
import "./chunk-6QXOVETH.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-UTK3TWKS.js";
import "./chunk-TKD7HAXN.js";
import "./chunk-CDZYVN2H.js";
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

// node_modules/@arcgis/core/arcade/functions/featuresetstring.js
function T(a2, e) {
  return a2 && a2.domain ? "coded-value" === a2.domain.type || "codedValue" === a2.domain.type ? j.convertObjectToArcadeDictionary({ type: "codedValue", name: a2.domain.name, dataType: b[a2.field.type], codedValues: a2.domain.codedValues.map(((n) => ({ name: n.name, code: n.code }))) }, Ke(e)) : j.convertObjectToArcadeDictionary({ type: "range", name: a2.domain.name, dataType: b[a2.field.type], min: a2.domain.minValue, max: a2.domain.maxValue }, Ke(e)) : null;
}
function b2(h) {
  "async" === h.mode && (h.functions.domain = function(n, d) {
    return h.standardFunctionAsync(n, d, ((u, m, f) => __async(null, null, function* () {
      if (ae(f, 2, 3, n, d), $(f[0])) {
        return T(Ue(f[0], pe(f[1]), void 0 === f[2] ? void 0 : f[2]), n);
      }
      if (K(f[0])) {
        yield f[0]._ensureLoaded();
        return T(Ce(pe(f[1]), f[0], null, void 0 === f[2] ? void 0 : f[2]), n);
      }
      throw new a(n, r.InvalidParameter, d);
    })));
  }, h.functions.subtypes = function(o, i) {
    return h.standardFunctionAsync(o, i, ((s, m, f) => __async(null, null, function* () {
      if (ae(f, 1, 1, o, i), $(f[0])) {
        const a2 = He(f[0]);
        return a2 ? j.convertObjectToArcadeDictionary(a2, Ke(o)) : null;
      }
      if (K(f[0])) {
        yield f[0]._ensureLoaded();
        const a2 = f[0].subtypeMetaData();
        return a2 ? j.convertObjectToArcadeDictionary(a2, Ke(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    })));
  }, h.functions.domainname = function(n, o) {
    return h.standardFunctionAsync(n, o, ((d, u, l) => __async(null, null, function* () {
      if (ae(l, 2, 4, n, o), $(l[0])) return $e(l[0], pe(l[1]), l[2], void 0 === l[3] ? void 0 : l[3]);
      if (K(l[0])) {
        yield l[0]._ensureLoaded();
        const n2 = Ce(pe(l[1]), l[0], null, void 0 === l[3] ? void 0 : l[3]);
        return De(n2, l[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    })));
  }, h.signatures.push({ name: "domainname", min: 2, max: 4 }), h.functions.domaincode = function(n, o) {
    return h.standardFunctionAsync(n, o, ((d, u, m) => __async(null, null, function* () {
      if (ae(m, 2, 4, n, o), $(m[0])) return Be(m[0], pe(m[1]), m[2], void 0 === m[3] ? void 0 : m[3]);
      if (K(m[0])) {
        yield m[0]._ensureLoaded();
        const n2 = Ce(pe(m[1]), m[0], null, void 0 === m[3] ? void 0 : m[3]);
        return Oe(n2, m[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    })));
  }, h.signatures.push({ name: "domaincode", min: 2, max: 4 }), h.functions.text = function(n, r2) {
    return h.standardFunctionAsync(n, r2, ((o, i, s) => __async(null, null, function* () {
      if (ae(s, 1, 2, n, r2), K(s[0])) {
        const t = q(s[1], "");
        if ("" === t) return s[0].castToText();
        if ("schema" === t.toLowerCase()) return s[0].convertToText("schema", o.abortSignal);
        if ("featureset" === t.toLowerCase()) return s[0].convertToText("featureset", o.abortSignal);
        throw new a(n, r.InvalidParameter, r2);
      }
      return he(s[0], s[1]);
    })));
  }, h.functions.gdbversion = function(n, o) {
    return h.standardFunctionAsync(n, o, ((i, s, d) => __async(null, null, function* () {
      if (ae(d, 1, 1, n, o), $(d[0])) return d[0].gdbVersion();
      if (K(d[0])) {
        return (yield d[0].load()).gdbVersion;
      }
      throw new a(n, r.InvalidParameter, o);
    })));
  }, h.functions.schema = function(o, i) {
    return h.standardFunctionAsync(o, i, ((s, d, m) => __async(null, null, function* () {
      if (ae(m, 1, 1, o, i), K(m[0])) return yield m[0].load(), j.convertObjectToArcadeDictionary(m[0].schema(), Ke(o));
      if ($(m[0])) {
        const a2 = We(m[0]);
        return a2 ? j.convertObjectToArcadeDictionary(a2, Ke(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    })));
  });
}
export {
  b2 as registerFunctions
};
//# sourceMappingURL=chunk-KX6CEUOE.js.map
