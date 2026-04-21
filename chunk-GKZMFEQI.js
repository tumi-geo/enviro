import {
  n,
  p
} from "./chunk-DNZLMY3K.js";
import "./chunk-NQKIL7LC.js";
import "./chunk-OXEAULCD.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import {
  C
} from "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-PDOBFT7G.js";
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
import {
  s,
  s2
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/portal/support/geometryServiceUtils.js
function n2(t = null, i) {
  return __async(this, null, function* () {
    if (s.geometryServiceUrl) return s.geometryServiceUrl;
    if (!t) throw new s2("internal:geometry-service-url-not-configured", "No geometryServiceUrl in configuration");
    let n3;
    n3 = "portal" in t ? t.portal || C.getDefault() : t, yield n3.load({ signal: i });
    const a2 = n3.helperServices?.geometry?.url;
    if (!a2) throw new s2("internal:geometry-service-url-not-configured", "No geometryServiceUrl in configuration");
    return a2;
  });
}
function a(e, o, a2 = null, c) {
  return __async(this, null, function* () {
    const l = yield n2(a2, c), m = new p({ geometries: [e], outSpatialReference: o }), s3 = yield n(l, m, { signal: c });
    if (s3 && Array.isArray(s3) && 1 === s3.length) return s3[0];
    throw new s2("internal:geometry-service-projection-failed", "Geometry projection failed on service");
  });
}
export {
  n2 as getGeometryServiceURL,
  a as projectGeometry
};
//# sourceMappingURL=chunk-GKZMFEQI.js.map
