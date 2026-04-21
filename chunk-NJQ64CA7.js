import {
  s
} from "./chunk-BCHRF6XZ.js";
import {
  l,
  t
} from "./chunk-UOO4OHDH.js";
import {
  A
} from "./chunk-FNFXIMG2.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/support/LayerLoadContext.js
var e = class {
  constructor() {
    this._serviceMetadatas = /* @__PURE__ */ new Map(), this._itemDatas = /* @__PURE__ */ new Map();
  }
  fetchServiceMetadata(e2, a2) {
    return __async(this, null, function* () {
      const s3 = this._serviceMetadatas.get(e2);
      if (s3) return s3;
      const r = yield t(e2, a2);
      return this._serviceMetadatas.set(e2, r), r;
    });
  }
  fetchItemData(t2) {
    return __async(this, null, function* () {
      const { id: e2 } = t2;
      if (!e2) return null;
      const { _itemDatas: a2 } = this;
      if (a2.has(e2)) return a2.get(e2);
      const s3 = yield t2.fetchData();
      return a2.set(e2, s3), s3;
    });
  }
  fetchCustomParameters(t2, e2) {
    return __async(this, null, function* () {
      const a2 = yield this.fetchItemData(t2);
      return a2 && "object" == typeof a2 && (e2 ? e2(a2) : a2.customParameters) || null;
    });
  }
};

// node_modules/@arcgis/core/portal/support/loadUtils.js
function a(e2) {
  const t2 = { id: e2.id, name: e2.name }, a2 = l(e2.type);
  return "FeatureLayer" !== a2 && (t2.layerType = a2), t2;
}
function l2(e2, r, l3) {
  return __async(this, null, function* () {
    let n2;
    if (null == e2?.layers || null == e2?.tables) {
      const u2 = yield l3.fetchServiceMetadata(r, { customParameters: s2(e2)?.customParameters });
      n2 = A(), (e2 = e2 || {}).layers = e2.layers || u2?.layers?.map(a), e2.tables = e2.tables || u2?.tables?.map(a);
    }
    return { data: e2, preferredHost: n2 };
  });
}
function s2(e2) {
  if (!e2) return null;
  const { layers: r, tables: t2 } = e2;
  return r?.length ? r[0] : t2?.length ? t2[0] : null;
}
function n(e2, r) {
  if (null == r) return null;
  return [...e2.layers || [], ...e2.tables || []].find(((e3) => e3.id === r));
}
function u(e2, r) {
  return [...e2.layers || [], ...e2.tables || []].filter((({ layerType: e3 }) => e3 ? r.includes(e3) : r.includes("ArcGISFeatureLayer")));
}
function c(e2) {
  return (e2?.layers?.length ?? 0) + (e2?.tables?.length ?? 0);
}
function o(e2) {
  switch (e2) {
    case "catalog":
      return ["CatalogLayer"];
    case "feature":
      return ["ArcGISFeatureLayer"];
    case "oriented-imagery":
      return ["OrientedImageryLayer"];
    case "subtype-group":
      return ["SubtypeGroupLayer", "SubtypeGroupTable"];
  }
  return null;
}
function i(e2) {
  switch (e2) {
    case "CatalogLayer":
      return "CatalogLayer";
    case "OrientedImageryLayer":
      return "OrientedImageryLayer";
    case "SubtypeGroupLayer":
    case "SubtypeGroupTable":
      return "SubtypeGroupLayer";
  }
  return "FeatureLayer";
}
function y(r, t2, l3) {
  return __async(this, null, function* () {
    if (!r?.url) return t2 ?? {};
    if (t2 ??= {}, !t2.layers) {
      const e2 = yield l3.fetchServiceMetadata(r.url);
      t2.layers = e2.layers?.map(a);
    }
    const { serverUrl: n2, portalItem: u2 } = yield s(r.url, { sceneLayerItem: r, customParameters: s2(t2)?.customParameters }).catch((() => ({ serverUrl: null, portalItem: null })));
    if (null == n2) return t2.tables = [], t2;
    if (!t2.tables && u2) {
      const e2 = yield u2.fetchData().catch((() => null));
      if (e2?.tables) t2.tables = e2.tables.map(a);
      else {
        const r2 = yield l3.fetchServiceMetadata(n2, { customParameters: s2(e2)?.customParameters }).catch((() => null));
        t2.tables = r2?.tables?.map(a);
      }
    }
    if (t2.tables) for (const e2 of t2.tables) e2.url = `${n2}/${e2.id}`;
    return t2;
  });
}

export {
  e,
  a,
  l2 as l,
  s2 as s,
  n,
  u,
  c,
  o,
  i,
  y
};
//# sourceMappingURL=chunk-NJQ64CA7.js.map
