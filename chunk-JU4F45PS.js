import {
  N
} from "./chunk-QXQL3IAF.js";
import {
  a
} from "./chunk-2ZBJ3QEF.js";
import {
  e
} from "./chunk-NJQ64CA7.js";
import {
  t
} from "./chunk-5J6F3ZUX.js";
import {
  V
} from "./chunk-FXVZ2Z5Z.js";
import {
  k
} from "./chunk-QKFL335K.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/portal/support/featureCollectionUtils.js
function e2(e3) {
  return t2(e3, "notes");
}
function r(e3) {
  return t2(e3, "markup");
}
function n(e3) {
  return t2(e3, "route");
}
function t2(e3, r2) {
  return !(!e3.layerType || "ArcGISFeatureLayer" !== e3.layerType) && e3.featureCollectionType === r2;
}

// node_modules/@arcgis/core/layers/support/layersCreator.js
function l(e3, r2, a2) {
  return __async(this, null, function* () {
    if (!r2) return;
    const y = r2.map(((e4) => G(e4, a2))), t3 = yield Promise.allSettled(y);
    for (const i of t3) "rejected" === i.status || i.value && e3.add(i.value);
  });
}
var c = { ArcGISDimensionLayer: "DimensionLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISSceneServiceLayer: "SceneLayer", ArcGISTiledElevationServiceLayer: "ElevationLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BuildingSceneLayer: "BuildingSceneLayer", CatalogLayer: "CatalogLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoJSON: "GeoJSONLayer", GroupLayer: "GroupLayer", IntegratedMesh3DTilesLayer: "IntegratedMesh3DTilesLayer", Object3DTilesLayer: "UnsupportedLayer", IntegratedMeshLayer: "IntegratedMeshLayer", KML: "KMLLayer", LineOfSightLayer: "LineOfSightLayer", MediaLayer: "MediaLayer", OGCFeatureLayer: "OGCFeatureLayer", OrientedImageryLayer: "OrientedImageryLayer", PointCloudLayer: "PointCloudLayer", RasterDataLayer: "UnsupportedLayer", VectorTileLayer: "VectorTileLayer", ViewshedLayer: "ViewshedLayer", Voxel: "VoxelLayer", WCS: "WCSLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" };
var s = { ArcGISTiledElevationServiceLayer: "ElevationLayer", DefaultTileLayer: "ElevationLayer", RasterDataElevationLayer: "UnsupportedLayer" };
var p = { ArcGISFeatureLayer: "FeatureLayer" };
var S = { ArcGISImageServiceLayer: "UnsupportedLayer", ArcGISMapServiceLayer: "UnsupportedLayer", ArcGISSceneServiceLayer: "SceneLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", DefaultTileLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WCS: "UnsupportedLayer", WMS: "UnsupportedLayer", WebTiledLayer: "WebTileLayer" };
var u = { ArcGISAnnotationLayer: "UnsupportedLayer", ArcGISDimensionLayer: "UnsupportedLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISStreamLayer: "StreamLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", ArcGISVideoLayer: "VideoLayer", BingMapsAerial: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", CatalogLayer: "CatalogLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoJSON: "GeoJSONLayer", GeoRSS: "GeoRSSLayer", GroupLayer: "GroupLayer", KML: "KMLLayer", KnowledgeGraphLayer: "KnowledgeGraphLayer", MediaLayer: "MediaLayer", OGCFeatureLayer: "OGCFeatureLayer", OrientedImageryLayer: "OrientedImageryLayer", SubtypeGroupLayer: "SubtypeGroupLayer", VectorTileLayer: "VectorTileLayer", WCS: "WCSLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" };
var d = { ArcGISFeatureLayer: "FeatureLayer", SubtypeGroupTable: "SubtypeGroupLayer" };
var I = { ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BingMapsAerial: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", DefaultTileLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WCS: "WCSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" };
var m = __spreadProps(__spreadValues({}, u), { LinkChartLayer: "LinkChartLayer" });
var g = __spreadValues({}, d);
var T = __spreadValues({}, I);
function G(e3, r2) {
  return __async(this, null, function* () {
    return f(yield M(e3, r2), e3, r2);
  });
}
function f(e3, r2, a2) {
  return __async(this, null, function* () {
    const y = new e3();
    return y.read(r2, a2.context), "group" === y.type && ("GroupLayer" === r2.layerType ? yield v(y, r2, a2) : b(r2) ? C(y, r2, a2.context) : A(r2) && (yield h(y, r2, a2.context))), yield t(y, a2.context), y;
  });
}
function M(e3, n2) {
  return __async(this, null, function* () {
    const l2 = n2.context, c2 = w(l2);
    let s2 = e3.layerType || e3.type;
    !s2 && n2?.defaultLayerType && (s2 = n2.defaultLayerType);
    const p2 = c2[s2];
    let S2 = p2 ? a[p2] : a.UnknownLayer;
    if (b(e3)) {
      const t3 = l2?.portal;
      if (e3.itemId) {
        const i = new k({ id: e3.itemId, portal: t3 });
        yield i.load();
        const L = (yield N(i, new e())).className || "UnknownLayer";
        S2 = a[L];
      }
    } else "ArcGISFeatureLayer" === s2 ? e2(e3) || r(e3) ? S2 = a.MapNotesLayer : n(e3) ? S2 = a.RouteLayer : A(e3) && (S2 = a.GroupLayer) : e3.wmtsInfo?.url && e3.wmtsInfo.layerIdentifier ? S2 = a.WMTSLayer : "WFS" === s2 && "2.0.0" !== e3.wfsInfo?.version && (S2 = a.UnsupportedLayer);
    return S2();
  });
}
function A(e3) {
  if ("ArcGISFeatureLayer" !== e3.layerType || b(e3)) return false;
  return (e3.featureCollection?.layers?.length ?? 0) > 1;
}
function b(e3) {
  return "Feature Collection" === e3.type;
}
function w(e3) {
  let r2;
  switch (e3.origin) {
    case "web-scene":
      switch (e3.layerContainerType) {
        case "basemap":
          r2 = S;
          break;
        case "ground":
          r2 = s;
          break;
        case "tables":
          r2 = p;
          break;
        default:
          r2 = c;
      }
      break;
    case "link-chart":
      switch (e3.layerContainerType) {
        case "basemap":
          r2 = T;
          break;
        case "tables":
          r2 = g;
          break;
        default:
          r2 = m;
      }
      break;
    default:
      switch (e3.layerContainerType) {
        case "basemap":
          r2 = I;
          break;
        case "tables":
          r2 = d;
          break;
        default:
          r2 = u;
      }
  }
  return r2;
}
function v(r2, a2, y) {
  return __async(this, null, function* () {
    const t3 = new V(), i = l(t3, Array.isArray(a2.layers) ? a2.layers : [], y);
    try {
      try {
        if (yield i, "group" === r2.type) return r2.layers.addMany(t3), r2;
      } catch (L) {
        r2.destroy();
        for (const e3 of t3) e3.destroy();
        throw L;
      }
    } catch (L) {
      throw L;
    }
  });
}
function C(e3, r2, a2) {
  r2.itemId && (e3.portalItem = new k({ id: r2.itemId, portal: a2?.portal }), e3.when((() => {
    const y = (y2) => {
      const t3 = y2.layerId;
      W(y2, e3, r2, t3, a2);
      const i = r2.featureCollection?.layers?.[t3];
      i && y2.read(i, a2);
    };
    e3.layers?.forEach(y), e3.tables?.forEach(y);
  })));
}
function h(e3, r2, y) {
  return __async(this, null, function* () {
    const t3 = a.FeatureLayer, i = yield t3(), L = r2.featureCollection, o = L?.showLegend, n2 = L?.layers?.map(((a2, t4) => {
      const L2 = new i();
      L2.read(a2, y);
      const n3 = __spreadProps(__spreadValues({}, y), { ignoreDefaults: true });
      return W(L2, e3, r2, t4, n3), null != o && L2.read({ showLegend: o }, n3), L2;
    }));
    e3.layers.addMany(n2 ?? []);
  });
}
function W(e3, r2, a2, y, t3) {
  e3.read({ id: `${r2.id}-sublayer-${y}`, visibility: a2.visibleLayers?.includes(y) ?? true }, t3);
}

export {
  l,
  v
};
//# sourceMappingURL=chunk-JU4F45PS.js.map
