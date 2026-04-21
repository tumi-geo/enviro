import {
  l,
  u
} from "./chunk-T2LUBRZM.js";
import "./chunk-2YAB7ZD7.js";
import {
  a as a2
} from "./chunk-GPBMZWXX.js";
import "./chunk-5UTDFNZU.js";
import {
  H,
  K,
  ae,
  pe,
  we
} from "./chunk-RGB64UKL.js";
import "./chunk-SH4JTOQ2.js";
import "./chunk-CI4X7KPD.js";
import "./chunk-44XQKQJP.js";
import "./chunk-6HJMYH7R.js";
import "./chunk-UFZVBMJ3.js";
import "./chunk-RI2CALM5.js";
import "./chunk-C5U5I45T.js";
import "./chunk-IMXLHKPN.js";
import "./chunk-MNSJWTIB.js";
import "./chunk-MZUMJDHL.js";
import "./chunk-L4AJJTF2.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-UD5LIUST.js";
import "./chunk-6HEET2ON.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-6QXOVETH.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import {
  n
} from "./chunk-UTK3TWKS.js";
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
import "./chunk-Q4ZBFQUV.js";
import "./chunk-AQ5AB5ZX.js";
import "./chunk-WLCZHZ7R.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
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
import "./chunk-TBOXDPPB.js";
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
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/arcade/functions/featuresetgeom.js
function f(a3) {
  return (f2, p2, S) => __async(null, null, function* () {
    if (ae(S, 2, 2, f2, p2), null === (S = we(S))[0] && null === S[1]) return false;
    if (K(S[0])) {
      if (H(S[1])) return new l({ parentfeatureset: S[0], relation: a3, relationGeom: S[1] });
      if (null === S[1]) return new u({ parentfeatureset: S[0] });
      throw new a(f2, r.InvalidParameter, p2);
    }
    if (H(S[0])) {
      if (H(S[1])) {
        switch (a3) {
          case "esriSpatialRelEnvelopeIntersects": {
            const e = n(S[0]), t = n(S[1]);
            return null != e && null != t && a2("intersects", [e.toJSON(), t.toJSON()]);
          }
          case "esriSpatialRelIntersects":
            return a2("intersects", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelContains":
            return a2("contains", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelOverlaps":
            return a2("overlaps", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelWithin":
            return a2("within", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelTouches":
            return a2("touches", [S[0].toJSON(), S[1].toJSON()]);
          case "esriSpatialRelCrosses":
            return a2("crosses", [S[0].toJSON(), S[1].toJSON()]);
        }
        throw new a(f2, r.InvalidParameter, p2);
      }
      if (K(S[1])) return new l({ parentfeatureset: S[1], relation: a3, relationGeom: S[0] });
      if (null === S[1]) return false;
      throw new a(f2, r.InvalidParameter, p2);
    }
    if (null === S[0]) {
      if (K(S[1])) return new u({ parentfeatureset: S[1] });
      if (H(S[1]) || null === S[1]) return false;
    }
    throw new a(f2, r.InvalidParameter, p2);
  });
}
function p(n2) {
  "async" === n2.mode && (n2.functions.intersects = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelIntersects"));
  }, n2.functions.envelopeintersects = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelEnvelopeIntersects"));
  }, n2.signatures.push({ name: "envelopeintersects", min: 2, max: 2 }), n2.functions.contains = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelContains"));
  }, n2.functions.overlaps = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelOverlaps"));
  }, n2.functions.within = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelWithin"));
  }, n2.functions.touches = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelTouches"));
  }, n2.functions.crosses = function(e, t) {
    return n2.standardFunctionAsync(e, t, f("esriSpatialRelCrosses"));
  }, n2.functions.relate = function(u2, f2) {
    return n2.standardFunctionAsync(u2, f2, ((n3, p2, S) => __async(null, null, function* () {
      if (S = we(S), ae(S, 3, 3, u2, f2), H(S[0]) && H(S[1])) return a2("relate", [S[0].toJSON(), S[1].toJSON(), pe(S[2])]);
      if (H(S[0]) && null === S[1]) return false;
      if (H(S[1]) && null === S[0]) return false;
      if (K(S[0]) && null === S[1]) return new u({ parentfeatureset: S[0] });
      if (K(S[1]) && null === S[0]) return new u({ parentfeatureset: S[1] });
      if (K(S[0]) && H(S[1])) return S[0].relate(S[1], pe(S[2]));
      if (K(S[1]) && H(S[0])) return S[1].relate(S[0], pe(S[2]));
      if (null === S[0] && null === S[1]) return false;
      throw new a(u2, r.InvalidParameter, f2);
    })));
  });
}
export {
  p as registerFunctions
};
//# sourceMappingURL=chunk-5KVR3HNW.js.map
