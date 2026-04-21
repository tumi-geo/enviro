import {
  n as n2,
  p
} from "./chunk-DNZLMY3K.js";
import {
  s as s2
} from "./chunk-7WLY6PVT.js";
import {
  e as e2,
  i,
  p as p2,
  p2 as p3
} from "./chunk-BNNXPNSR.js";
import {
  l
} from "./chunk-NGCHGSSW.js";
import {
  t
} from "./chunk-S37Y2BXV.js";
import {
  j as j2
} from "./chunk-5UTDFNZU.js";
import {
  H,
  Ke,
  W,
  ae,
  ee,
  ie,
  ne,
  pe,
  q,
  re
} from "./chunk-RGB64UKL.js";
import "./chunk-SH4JTOQ2.js";
import "./chunk-CI4X7KPD.js";
import "./chunk-44XQKQJP.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-NQKIL7LC.js";
import "./chunk-6HEET2ON.js";
import "./chunk-OXEAULCD.js";
import {
  K,
  O,
  k as k2
} from "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-6QXOVETH.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import {
  k
} from "./chunk-QKFL335K.js";
import {
  C
} from "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-UTK3TWKS.js";
import "./chunk-TKD7HAXN.js";
import {
  c as c2,
  e,
  n,
  o
} from "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import {
  S,
  c,
  j
} from "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import {
  f
} from "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import {
  a,
  r
} from "./chunk-NC6TU6DS.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
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
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import {
  s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/arcade/functions/knowledgegraph.js
var N = null;
function F(r2) {
  return __async(this, null, function* () {
    const t2 = s.geometryServiceUrl ?? "";
    if (!t2) {
      k2() || (yield K());
      for (const e3 of r2) e3.container[e3.indexer] = O(e3.container[e3.indexer], f.WGS84);
      return;
    }
    const n3 = r2.map(((e3) => e3.container[e3.indexer])), o2 = new p({ geometries: n3, outSpatialReference: f.WGS84 }), a2 = yield n2(t2, o2);
    for (let e3 = 0; e3 < a2.length; e3++) {
      const t3 = r2[e3];
      t3.container[t3.indexer] = a2[e3];
    }
  });
}
function M(e3, r2) {
  return __async(this, null, function* () {
    const t2 = new k({ portal: e3, id: r2 });
    return yield t2.load(), null === N && (N = yield import("./chunk-2AKZNQNP.js")), yield N.fetchKnowledgeGraph(t2.url);
  });
}
function Q(e3, r2, t2, n3, o2) {
  if (null === e3) return null;
  if (e(e3) || n(e3)) return e3;
  if (ne(e3)) return e3.toJSDate();
  if (ne(e3)) return e3.toJSDate();
  if (re(e3)) return e3.toStorageFormat();
  if (ie(e3)) return e3.toStorageString();
  if (W(e3)) {
    const a2 = {};
    for (const i2 of e3.keys()) a2[i2] = Q(e3.field(i2), r2, t2, n3, o2), a2[i2] instanceof c && o2.push({ container: a2, indexer: i2 });
    return a2;
  }
  if (o(e3)) {
    const a2 = e3.map(((e4) => Q(e4, r2, t2, n3, o2)));
    for (let e4 = 0; e4 < a2.length; e4++) a2[e4] instanceof c && o2.push({ container: a2, indexer: e4 });
    return a2;
  }
  return H(e3) ? e3.spatialReference.isWGS84 ? e3 : e3.spatialReference.isWebMercator && r2 ? S(e3) : e3 : void 0;
}
function B(e3, r2) {
  if (!e3) return e3;
  if (e3.spatialReference.isWGS84 && r2.spatialReference.isWebMercator) return j(e3);
  if (e3.spatialReference.equals(r2.spatialReference)) return e3;
  throw new a(r2, r.WrongSpatialReference, null);
}
function E(e3, r2) {
  if (!e3) return null;
  const t2 = {};
  for (const n3 in e3) t2[n3] = K2(e3[n3], r2);
  return t2;
}
function K2(e3, r2) {
  return null === e3 ? null : o(e3) ? e3.map(((e4) => K2(e4, r2))) : e3 instanceof p2 ? { graphTypeName: e3.typeName, id: e3.id, graphType: "entity", properties: E(e3.properties, r2) } : e3 instanceof e2 ? { graphType: "object", properties: E(e3.properties, r2) } : e3 instanceof i ? { graphTypeName: e3.typeName, id: e3.id, graphType: "relationship", originId: e3.originId ?? null, destinationId: e3.destinationId ?? null, properties: E(e3.properties, r2) } : e3 instanceof p3 ? { graphType: "path", path: e3.path ? e3.path.map(((e4) => K2(e4, r2))) : null } : H(e3) ? B(e3, r2) : e(e3) || n(e3) || c2(e3) ? e3 : null;
}
function V(e3) {
  "async" === e3.mode && (e3.functions.knowledgegraphbyportalitem = function(t2, s3) {
    return e3.standardFunctionAsync(t2, s3, ((e4, p4, l2) => {
      if (ae(l2, 2, 2, t2, s3), null === l2[0]) throw new a(t2, r.PortalRequired, s3);
      if (l2[0] instanceof t) {
        const e5 = pe(l2[1]);
        let r2;
        r2 = t2.services?.portal ? t2.services.portal : C.getDefault();
        return M(l(l2[0], r2), e5);
      }
      if (false === e(l2[0])) throw new a(t2, r.InvalidParameter, s3);
      const c3 = pe(l2[0]);
      return M(t2.services?.portal ?? C.getDefault(), c3);
    }));
  }, e3.signatures.push({ name: "knowledgegraphbyportalitem", min: 2, max: 2 }), e3.functions.querygraph = function(r2, i2) {
    return e3.standardFunctionAsync(r2, i2, ((e4, c3, f2) => __async(null, null, function* () {
      ae(f2, 2, 4, r2, i2);
      const u = f2[0];
      if (!ee(u)) throw new a(r2, r.InvalidParameter, i2);
      const m = f2[1];
      if (!e(m)) throw new a(r2, r.InvalidParameter, i2);
      null === N && (N = yield import("./chunk-2AKZNQNP.js"));
      let d = null;
      const h = q(f2[2], null);
      if (!(h instanceof j2 || null === h)) throw new a(r2, r.InvalidParameter, i2);
      if (h) {
        let e5 = [];
        d = Q(h, true, false, r2, e5), e5 = e5.filter(((e6) => !e6.container[e6.indexer].spatialReference.isWGS84)), e5.length > 0 && (yield F(e5));
      }
      const g = q(f2[3], false), w = new s2({ openCypherQuery: m, bindParameters: d, provenanceBehavior: g ? "include" : "exclude" });
      (u?.serviceDefinition?.currentVersion ?? 11.3) > 11.2 && (w.outputSpatialReference = r2.spatialReference);
      const y = (yield N.executeQueryStreaming(u, w)).resultRowsStream.getReader(), j3 = [];
      try {
        for (; ; ) {
          const { done: e5, value: t2 } = yield y.read();
          if (e5) break;
          if (o(t2)) for (const n3 of t2) j3.push(K2(n3, r2));
          else {
            const e6 = [];
            for (const n3 of t2) e6.push(K2(t2[n3], r2));
            j3.push(e6);
          }
        }
      } catch (S2) {
        throw S2;
      }
      return j2.convertJsonToArcade(j3, Ke(r2), false, true);
    })));
  }, e3.signatures.push({ name: "querygraph", min: 2, max: 4 }));
}
export {
  V as registerFunctions
};
//# sourceMappingURL=chunk-6VTSNGNB.js.map
