import {
  a
} from "./chunk-2ZBJ3QEF.js";
import {
  c,
  e,
  i,
  l as l2,
  n,
  s as s4,
  y
} from "./chunk-NJQ64CA7.js";
import {
  s as s2
} from "./chunk-BCHRF6XZ.js";
import {
  l
} from "./chunk-UOO4OHDH.js";
import {
  s as s3
} from "./chunk-VGPJZZUW.js";
import {
  A,
  H,
  h
} from "./chunk-FNFXIMG2.js";
import {
  k
} from "./chunk-QKFL335K.js";
import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import {
  __async,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/portal/support/portalLayers.js
function L(e2) {
  return __async(this, null, function* () {
    let { portalItem: a2 } = e2;
    !a2 || a2 instanceof k || (a2 = new k(a2));
    const r = yield w(a2);
    return new (0, r.constructor)(__spreadValues({ portalItem: a2 }, r.properties));
  });
}
function w(e2) {
  return __async(this, null, function* () {
    yield e2.load();
    const a2 = new e();
    return S(yield N(e2, a2));
  });
}
function N(a2, r) {
  return __async(this, null, function* () {
    switch (a2.type) {
      case "3DTiles Service":
        return a2.typeKeywords.includes("3DObject") ? b() : P();
      case "CSV":
        return F();
      case "Feature Collection":
        return M(a2);
      case "Feature Service":
        return h2(a2, r);
      case "Feed":
        return x();
      case "GeoJson":
        return G();
      case "Group Layer":
        return J();
      case "Image Service":
        return g(a2, r);
      case "KML":
        return V();
      case "Knowledge Graph Layer":
        return K();
      case "Map Service":
        return v(a2, r);
      case "Media Layer":
        return k2();
      case "Scene Service":
        return I(a2, r);
      case "Stream Service":
        return j();
      case "Video Service":
        return T(a2, r);
      case "Vector Tile Service":
        return C();
      case "WCS":
        return W();
      case "WFS":
        return U();
      case "WMS":
        return D();
      case "WMTS":
        return O();
      default:
        throw new s("portal:unknown-item-type", "Unknown item type '${type}'", { type: a2.type });
    }
  });
}
function S(e2) {
  return __async(this, null, function* () {
    const a2 = e2.className, r = a[a2];
    return { constructor: yield r(), properties: e2.properties };
  });
}
function v(e2, a2) {
  return __async(this, null, function* () {
    return (yield $(e2, a2)) ? { className: "TileLayer" } : { className: "MapImageLayer" };
  });
}
function h2(e2, a2) {
  return __async(this, null, function* () {
    const r = yield A2(e2, a2);
    if ("object" == typeof r) {
      const { sourceJSON: e3, className: a3 } = r, t = { sourceJSON: e3 };
      return null != r.id && (t.layerId = r.id), { className: a3 || "FeatureLayer", properties: t };
    }
    return { className: "GroupLayer" };
  });
}
function I(e2, r) {
  return __async(this, null, function* () {
    const t = yield A2(e2, r, (() => __async(null, null, function* () {
      try {
        if (!e2.url) return [];
        const { serverUrl: t2 } = yield s2(e2.url, { sceneLayerItem: e2 }), s5 = yield r.fetchServiceMetadata(t2);
        return s5?.tables ?? [];
      } catch {
        return [];
      }
    })));
    if ("object" == typeof t) {
      const a2 = {};
      let c2;
      if (null != t.id ? (a2.layerId = t.id, c2 = `${e2.url}/layers/${t.id}`) : c2 = e2.url, e2.typeKeywords?.length) {
        for (const r2 of Object.keys(h)) if (e2.typeKeywords.includes(r2)) return { className: h[r2] };
      }
      const n2 = yield r.fetchServiceMetadata(c2, { customParameters: yield r.fetchCustomParameters(e2, ((e3) => s4(e3)?.customParameters)) });
      return { className: h[n2?.layerType] || "SceneLayer", properties: a2 };
    }
    if (false === t) {
      const a2 = yield r.fetchServiceMetadata(e2.url);
      if ("Voxel" === a2?.layerType) return { className: "VoxelLayer" };
    }
    return { className: "GroupLayer" };
  });
}
function M(e2) {
  return __async(this, null, function* () {
    yield e2.load();
    const a2 = s3(e2, "Map Notes"), r = s3(e2, "Markup");
    if (a2 || r) return { className: "MapNotesLayer" };
    if (s3(e2, "Route Layer")) return { className: "RouteLayer" };
    const t = yield e2.fetchData();
    return 1 === c(t) ? { className: "FeatureLayer" } : { className: "GroupLayer" };
  });
}
function g(e2, a2) {
  return __async(this, null, function* () {
    yield e2.load();
    const r = e2.typeKeywords?.map(((e3) => e3.toLowerCase())) ?? [];
    if (r.includes("elevation 3d layer")) return { className: "ElevationLayer" };
    if (r.includes("tiled imagery")) return { className: "ImageryTileLayer" };
    const t = yield a2.fetchItemData(e2), s5 = t?.layerType;
    if ("ArcGISTiledImageServiceLayer" === s5) return { className: "ImageryTileLayer" };
    if ("ArcGISImageServiceLayer" === s5) return { className: "ImageryLayer" };
    const c2 = yield a2.fetchServiceMetadata(e2.url, { customParameters: yield a2.fetchCustomParameters(e2) }), n2 = c2.cacheType?.toLowerCase(), o = c2.capabilities?.toLowerCase().includes("tilesonly"), i2 = c2.tileInfo?.format?.toLowerCase() ?? "", u = null == n2 && ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"].includes(i2);
    return "map" === n2 || u || o ? { className: "ImageryTileLayer" } : { className: "ImageryLayer" };
  });
}
function j() {
  return { className: "StreamLayer" };
}
function T(e2, a2) {
  return __async(this, null, function* () {
    return "object" == typeof (yield A2(e2, a2)) ? { className: "VideoLayer" } : { className: "GroupLayer" };
  });
}
function C() {
  return { className: "VectorTileLayer" };
}
function G() {
  return { className: "GeoJSONLayer" };
}
function P() {
  return { className: "IntegratedMesh3DTilesLayer" };
}
function b() {
  return { className: "UnsupportedLayer" };
}
function F() {
  return { className: "CSVLayer" };
}
function V() {
  return { className: "KMLLayer" };
}
function K() {
  return { className: "KnowledgeGraphLayer" };
}
function W() {
  return { className: "WCSLayer" };
}
function U() {
  return { className: "WFSLayer" };
}
function D() {
  return { className: "WMSLayer" };
}
function O() {
  return { className: "WMTSLayer" };
}
function x() {
  return { className: "StreamLayer" };
}
function J() {
  return { className: "GroupLayer" };
}
function k2() {
  return { className: "MediaLayer" };
}
function $(e2, a2) {
  return __async(this, null, function* () {
    const { tileInfo: r } = yield a2.fetchServiceMetadata(e2.url, { customParameters: yield a2.fetchCustomParameters(e2) });
    return r;
  });
}
function A2(e2, a2, t) {
  return __async(this, null, function* () {
    const { url: s5, type: o } = e2, i2 = "Feature Service" === o;
    if (!s5) return {};
    if (/\/\d+$/.test(s5)) {
      if (i2) {
        const t2 = yield a2.fetchServiceMetadata(s5, { customParameters: yield a2.fetchCustomParameters(e2, ((e3) => s4(e3)?.customParameters)) });
        return H(e2, A()), { id: t2.id, className: l(t2.type), sourceJSON: t2 };
      }
      return {};
    }
    if ("Video Service" === o) {
      const e3 = yield a2.fetchServiceMetadata(s5);
      return !((e3.layers?.length ?? 0) > 1) && {};
    }
    yield e2.load();
    let d = yield a2.fetchItemData(e2);
    if (i2) {
      const { data: r, preferredHost: t2 } = yield l2(d, s5, a2);
      H(e2, t2);
      const n2 = E(r);
      if ("object" == typeof n2) {
        const e3 = n(r, n2.id);
        n2.className = i(e3?.layerType);
      }
      return n2;
    }
    "Scene Service" === o && (d = yield y(e2, d, a2));
    if (c(d) > 0) return E(d);
    const L2 = yield a2.fetchServiceMetadata(s5);
    return t && (L2.tables = yield t()), E(L2);
  });
}
function E(e2) {
  return 1 === c(e2) && { id: s4(e2)?.id };
}

export {
  L,
  N
};
//# sourceMappingURL=chunk-QXQL3IAF.js.map
