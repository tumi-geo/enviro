import {
  a
} from "./chunk-2ZBJ3QEF.js";
import {
  s as s2
} from "./chunk-BCHRF6XZ.js";
import {
  l,
  n,
  t
} from "./chunk-UOO4OHDH.js";
import {
  h as h2,
  z
} from "./chunk-FNFXIMG2.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-QKFL335K.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-CSENQMWZ.js";
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
import {
  h2 as h,
  p2 as p
} from "./chunk-CDTLZWCX.js";
import {
  I,
  qt
} from "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/support/arcgisLayers.js
var f = { FeatureLayer: true, SceneLayer: true, VideoLayer: true };
function p2(e) {
  return __async(this, null, function* () {
    const { properties: r, url: a2 } = e, t2 = __spreadProps(__spreadValues({}, r), { url: a2 }), s3 = yield v(a2, r?.customParameters), { Constructor: l2, layerId: o, sourceJSON: n2, parsedUrl: c, layers: i, tables: u } = s3;
    if (i.length + u.length === 0) return null != o && (t2.layerId = o), null != n2 && (t2.sourceJSON = n2), new l2(t2);
    const y = new (0, (yield import("./chunk-VXDC3U7J.js")).default)({ title: c.title });
    return yield w(y, s3, t2), y;
  });
}
function m(e, r) {
  return e ? e.find((({ id: e2 }) => e2 === r)) : null;
}
function d(e, r, a2, t2, s3) {
  const l2 = __spreadProps(__spreadValues({}, s3), { layerId: r });
  return null != e && (l2.url = e), null != a2 && (l2.sourceJSON = a2), "sublayerTitleMode" in t2.prototype && (l2.sublayerTitleMode = "service-name"), new t2(l2);
}
function w(e, r, a2) {
  return __async(this, null, function* () {
    const t2 = r.sublayerConstructorProvider;
    for (const { id: s3, serverUrl: l2 } of r.layers) {
      const o = m(r.sublayerInfos, s3), n2 = d(l2, s3, o, (o && t2?.(o)) ?? r.Constructor, a2);
      e.add(n2);
    }
    if (r.tables.length) {
      const t3 = yield L("FeatureLayer");
      r.tables.forEach((({ id: s3, serverUrl: l2 }) => {
        const o = d(l2, s3, m(r.tableInfos, s3), t3, a2);
        e.tables.add(o);
      }));
    }
  });
}
function v(r, a2) {
  return __async(this, null, function* () {
    let s3 = p(r);
    if (null == s3 && (s3 = yield S(r, a2)), null == s3) throw new s("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: r });
    const { serverType: l2, sublayer: n2 } = s3;
    let u;
    const p3 = { FeatureServer: "FeatureLayer", KnowledgeGraphServer: "KnowledgeGraphLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer", VideoServer: "VideoLayer" }, m2 = "FeatureServer" === l2, d2 = "SceneServer" === l2, w2 = { parsedUrl: s3, Constructor: null, layerId: m2 || d2 ? n2 ?? void 0 : void 0, layers: [], tables: [] };
    switch (l2) {
      case "MapServer":
        if (null != n2) {
          const { type: t2 } = yield t(r, { customParameters: a2 });
          switch (u = "FeatureLayer", t2) {
            case "Catalog Layer":
              u = "CatalogLayer";
              break;
            case "Catalog Dynamic Group Layer":
              throw new s("arcgis-layers:unsupported", `fromUrl() not supported for "${t2}" layers`);
          }
        } else {
          u = (yield g(r, a2)) ? "TileLayer" : "MapImageLayer";
        }
        break;
      case "ImageServer": {
        const e = yield t(r, { customParameters: a2 }), { tileInfo: t2, cacheType: s4 } = e;
        u = t2 ? "LERC" !== t2?.format?.toUpperCase() || s4 && "elevation" !== s4.toLowerCase() ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
        break;
      }
      case "SceneServer": {
        const e = yield t(s3.url.path, { customParameters: a2 });
        if (u = "SceneLayer", e) {
          const r2 = e?.layers;
          if ("Voxel" === e?.layerType) u = "VoxelLayer";
          else if (r2?.length) {
            const e2 = r2[0]?.layerType;
            null != e2 && null != h2[e2] && (u = h2[e2]);
          }
        }
        break;
      }
      case "3DTilesServer":
        throw new s("arcgis-layers:unsupported", "fromUrl() not supported for 3DTiles layers");
      case "FeatureServer":
        if (u = "FeatureLayer", null != n2) {
          const e = yield t(r, { customParameters: a2 });
          w2.sourceJSON = e, w2.preferredUrl = z(), u = l(e.type);
        }
        break;
      default:
        u = p3[l2];
    }
    if (f[u] && null == n2) {
      const e = yield h3(r, l2, a2);
      m2 && (w2.preferredUrl = e.preferredUrl, w2.sublayerInfos = e.layerInfos, w2.tableInfos = e.tableInfos);
      if (1 !== e.layers.length + e.tables.length) w2.layers = e.layers, w2.tables = e.tables, m2 && e.layerInfos?.length && (w2.sublayerConstructorProvider = yield P(e.layerInfos));
      else if (m2 || d2) {
        const r2 = e.layerInfos?.[0] ?? e.tableInfos?.[0];
        if (w2.layerId = e.layers[0]?.id ?? e.tables[0]?.id, w2.sourceJSON = r2, m2) {
          const e2 = r2?.type;
          u = l(e2);
        }
      }
    }
    return w2.Constructor = yield L(u), w2;
  });
}
function S(e, t2) {
  return __async(this, null, function* () {
    const l2 = yield t(e, { customParameters: t2 });
    let o = null, n2 = null;
    const c = l2.type;
    if ("Feature Layer" === c || "Table" === c ? (o = "FeatureServer", n2 = l2.id ?? null) : "indexedVector" === c ? o = "VectorTileServer" : l2.hasOwnProperty("mapName") ? o = "MapServer" : l2.hasOwnProperty("bandCount") && l2.hasOwnProperty("pixelSizeX") ? o = "ImageServer" : l2.hasOwnProperty("maxRecordCount") && l2.hasOwnProperty("allowGeometryUpdates") ? o = "FeatureServer" : l2.hasOwnProperty("streamUrls") ? o = "StreamServer" : b(l2) ? (o = "SceneServer", n2 = l2.id) : l2.hasOwnProperty("layers") && b(l2.layers?.[0]) && (o = "SceneServer"), !o) return null;
    const i = null != n2 ? h(e) : null;
    return { title: null != i && l2.name || qt(e), serverType: o, sublayer: n2, url: { path: null != i ? i.serviceUrl : I(e).path } };
  });
}
function b(e) {
  return null != e && e.hasOwnProperty("store") && e.hasOwnProperty("id") && "number" == typeof e.id;
}
function h3(e, r, a2) {
  return __async(this, null, function* () {
    let t2, s3, l2, o = false;
    switch (r) {
      case "FeatureServer": {
        const r2 = yield n(e, { customParameters: a2 });
        l2 = z(e, { preferredHost: r2.preferredHost }), o = !!r2.layersJSON, t2 = r2.layersJSON || r2.serviceJSON;
        break;
      }
      case "SceneServer": {
        const r2 = yield I2(e, a2);
        t2 = r2.serviceInfo, s3 = r2.tableServerUrl;
        break;
      }
      default:
        t2 = yield t(e, { customParameters: a2 });
    }
    const i = t2?.layers, u = t2?.tables;
    return { preferredUrl: l2, layers: i?.map(((e2) => ({ id: e2.id }))).reverse() || [], tables: u?.map(((e2) => ({ serverUrl: s3, id: e2.id }))).reverse() || [], layerInfos: o ? i : [], tableInfos: o ? u : [] };
  });
}
function I2(e, r) {
  return __async(this, null, function* () {
    const a2 = yield t(e, { customParameters: r }), t2 = a2.layers?.[0];
    if (!t2) return { serviceInfo: a2 };
    try {
      const { serverUrl: t3 } = yield s2(e), s3 = yield t(t3, { customParameters: r }).catch((() => null));
      return s3 && (a2.tables = s3.tables), { serviceInfo: a2, tableServerUrl: t3 };
    } catch {
      return { serviceInfo: a2 };
    }
  });
}
function L(e) {
  return __async(this, null, function* () {
    return (0, a[e])();
  });
}
function g(e, r) {
  return __async(this, null, function* () {
    return (yield t(e, { customParameters: r })).tileInfo;
  });
}
function P(e) {
  return __async(this, null, function* () {
    if (!e.length) return;
    const r = /* @__PURE__ */ new Set(), a2 = [];
    for (const { type: l2 } of e) r.has(l2) || (r.add(l2), a2.push(L(l(l2))));
    const t2 = yield Promise.all(a2), s3 = /* @__PURE__ */ new Map();
    return Array.from(r).forEach(((e2, r2) => {
      s3.set(e2, t2[r2]);
    })), (e2) => s3.get(e2.type);
  });
}
export {
  p2 as fromUrl
};
//# sourceMappingURL=chunk-NRW7AH2K.js.map
