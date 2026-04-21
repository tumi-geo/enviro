import {
  n,
  p as p2
} from "./chunk-4U6GJR4R.js";
import {
  i as i2
} from "./chunk-CGRX345G.js";
import {
  s as s2
} from "./chunk-XO2Q4GTH.js";
import {
  o as o2
} from "./chunk-ZTI4G5D6.js";
import {
  m as m3
} from "./chunk-JTJACYMI.js";
import {
  u,
  y
} from "./chunk-EX6CFV7G.js";
import {
  k as k2
} from "./chunk-QKFL335K.js";
import {
  C as C2
} from "./chunk-3XEBNOYK.js";
import {
  z
} from "./chunk-7FHCIZTJ.js";
import {
  o
} from "./chunk-KS4WXQBA.js";
import {
  f
} from "./chunk-4SLPL4G6.js";
import {
  r as r2
} from "./chunk-D2TJBM23.js";
import {
  m2
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import {
  C,
  H,
  S,
  m2 as m,
  p2 as p,
  w
} from "./chunk-CDTLZWCX.js";
import {
  I
} from "./chunk-AZFJ5Z42.js";
import {
  k
} from "./chunk-OX6HQ7WO.js";
import {
  i3 as i,
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
function r3(r4, n3, t, s3, a2, i3, l) {
  return __async(this, null, function* () {
    let d = null;
    if (null != t) {
      const o3 = `${r4}/nodepages/`, n4 = o3 + Math.floor(t.rootIndex / t.nodesPerPage);
      try {
        return { type: "page", rootPage: (yield H(n4, { query: __spreadProps(__spreadValues({ f: "json" }, s3), { token: a2 }), responseType: "json", signal: l })).data, rootIndex: t.rootIndex, pageSize: t.nodesPerPage, lodMetric: t.lodSelectionMetricType, urlPrefix: o3 };
      } catch (g) {
        null != i3 && i3.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", n4, g), d = g;
      }
    }
    if (!n3) return null;
    const p3 = n3?.split("/").pop(), c = `${r4}/nodes/`, u3 = c + p3;
    try {
      return { type: "node", rootNode: (yield H(u3, { query: __spreadProps(__spreadValues({ f: "json" }, s3), { token: a2 }), responseType: "json", signal: l })).data, urlPrefix: c };
    } catch (g) {
      throw new s("sceneservice:root-node-missing", "Root node missing.", { pageError: d, nodeError: g, url: u3 });
    }
  });
}

// node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
var n2 = null;
function u2() {
  return n2;
}

// node_modules/@arcgis/core/layers/mixins/SceneService.js
var R = (R2) => {
  let C3 = class extends R2 {
    constructor() {
      super(...arguments), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.indexInfo = null, this._debouncedSaveOperations = k(((e, t, r4) => __async(this, null, function* () {
        switch (e) {
          case V.SAVE:
            return this._save(t);
          case V.SAVE_AS:
            return this._saveAs(r4, t);
        }
      })));
    }
    readSpatialReference(e, t) {
      return U(t);
    }
    readFullExtent(e, t, r4) {
      if (null != e && "object" == typeof e) {
        const o4 = null == e.spatialReference ? __spreadProps(__spreadValues({}, e), { spatialReference: U(t) }) : e;
        return z.fromJSON(o4, r4);
      }
      const o3 = t.store, i3 = U(t);
      return null == i3 || null == o3?.extent || !Array.isArray(o3.extent) || o3.extent.some(((e2) => e2 < L)) ? null : new z({ xmin: o3.extent[0], ymin: o3.extent[1], xmax: o3.extent[2], ymax: o3.extent[3], spatialReference: i3 });
    }
    parseVersionString(e) {
      const t = { major: Number.NaN, minor: Number.NaN, versionString: e }, r4 = e.split(".");
      return r4.length >= 2 && (t.major = parseInt(r4[0], 10), t.minor = parseInt(r4[1], 10)), t;
    }
    readVersion(e, t) {
      const r4 = t.store, o3 = null != r4.version ? r4.version.toString() : "";
      return this.parseVersionString(o3);
    }
    readTitlePortalItem(e) {
      return "item-title" !== this.sublayerTitleMode ? void 0 : e;
    }
    readTitleService(e, t) {
      const r4 = this.portalItem?.title;
      if ("item-title" === this.sublayerTitleMode) return this.url ? w(this.url, t.name) : t.name;
      let o3 = t.name;
      if (!o3 && this.url) {
        const e2 = p(this.url);
        null != e2 && (o3 = e2.title);
      }
      return "item-title-and-service-name" === this.sublayerTitleMode && r4 && (o3 = r4 + " - " + o3), m(o3);
    }
    set url(e) {
      if (null == e) return void this._set("url", e);
      const t = S({ layer: this, url: e, nonStandardUrlAllowed: false, logger: i.getLogger(this) });
      this._set("url", t.url), null != t.layerId && this._set("layerId", t.layerId);
    }
    writeUrl(e, t, r4, o3) {
      C(this, e, "layers", t, o3);
    }
    get parsedUrl() {
      const e = this._get("url"), t = I(e);
      return t && null != this.layerId && (t.path = `${t.path}/layers/${this.layerId}`), t;
    }
    _fetchIndexAndUpdateExtent(e, t) {
      return __async(this, null, function* () {
        this.indexInfo = r3(this.parsedUrl?.path ?? "", this.rootNode, e, this.customParameters, this.apiKey, i.getLogger(this), t), null == this.fullExtent || this.fullExtent.hasZ || this._updateExtent(yield this.indexInfo);
      });
    }
    _updateExtent(e) {
      if ("page" === e?.type) {
        const t = e.rootIndex % e.pageSize, o3 = e.rootPage?.nodes?.[t];
        if (null == o3?.obb?.center || null == o3.obb.halfSize) throw new s("sceneservice:invalid-node-page", "Invalid node page.");
        if (o3.obb.center[0] < L || null == this.fullExtent || this.fullExtent.hasZ) return;
        const i3 = o3.obb.halfSize, s3 = o3.obb.center[2], a2 = Math.sqrt(i3[0] * i3[0] + i3[1] * i3[1] + i3[2] * i3[2]);
        this.fullExtent.zmin = s3 - a2, this.fullExtent.zmax = s3 + a2;
      } else if ("node" === e?.type) {
        const t = e.rootNode?.mbs;
        if (!Array.isArray(t) || 4 !== t.length || t[0] < L) return;
        const r4 = t[2], o3 = t[3], { fullExtent: i3 } = this;
        i3 && (i3.zmin = r4 - o3, i3.zmax = r4 + o3);
      }
    }
    _fetchService(e) {
      return __async(this, null, function* () {
        if (null == this.url) throw new s("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");
        if (null == this.layerId && /SceneServer\/*$/i.test(this.url)) {
          const t = yield this._fetchFirstLayerId(e);
          null != t && (this.layerId = t);
        }
        return this._fetchServiceLayer(e);
      });
    }
    _fetchFirstLayerId(e) {
      return __async(this, null, function* () {
        const r4 = yield H(this.url ?? "", { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }), responseType: "json", signal: e });
        if (r4.data && Array.isArray(r4.data.layers) && r4.data.layers.length > 0) return r4.data.layers[0].id;
      });
    }
    _fetchServiceLayer(e) {
      return __async(this, null, function* () {
        const r4 = yield H(this.parsedUrl?.path ?? "", { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }), responseType: "json", signal: e });
        r4.ssl && this.url && (this.url = this.url.replace(/^http:/i, "https:"));
        let o3 = false;
        if (r4.data.layerType && "Voxel" === r4.data.layerType && (o3 = true), o3) return this._fetchVoxelServiceLayer();
        const i3 = r4.data;
        this.read(i3, this._getServiceContext()), this.validateLayer(i3);
      });
    }
    _fetchVoxelServiceLayer(e) {
      return __async(this, null, function* () {
        const r4 = (yield H(this.parsedUrl?.path + "/layer", { query: __spreadProps(__spreadValues({ f: "json" }, this.customParameters), { token: this.apiKey }), responseType: "json", signal: e })).data;
        this.read(r4, this._getServiceContext()), this.validateLayer(r4);
      });
    }
    _getServiceContext() {
      return { origin: "service", portalItem: this.portalItem, portal: this.portalItem?.portal, url: this.parsedUrl };
    }
    _ensureLoadBeforeSave() {
      return __async(this, null, function* () {
        yield this.load(), "beforeSave" in this && "function" == typeof this.beforeSave && (yield this.beforeSave());
      });
    }
    validateLayer(e) {
    }
    _saveAs(e, t) {
      return __async(this, null, function* () {
        const o3 = __spreadValues(__spreadValues({}, K), t);
        let i3 = k2.from(e);
        if (!i3) throw new s("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to");
        i3.id && (i3 = i3.clone(), i3.id = null);
        const s3 = i3.portal || C2.getDefault();
        yield this._ensureLoadBeforeSave(), i3.type = P, i3.portal = s3;
        const a2 = o2(i3, "portal-item", true), n3 = { layers: [this.write({}, a2)] };
        return yield Promise.all(a2.resources.pendingOperations ?? []), yield this._validateAgainstJSONSchema(n3, a2, o3), this.url && (i3.url = this.url), i3.title || (i3.title = this.title), T(i3, o3, O.newItem), yield s3.signIn(), yield s3.user.addItem({ item: i3, folder: o3?.folder, data: n3 }), yield p2(this.resourceReferences, a2), this.portalItem = i3, i2(a2), a2.portalItem = i3, i3;
      });
    }
    _save(e) {
      return __async(this, null, function* () {
        const t = __spreadValues(__spreadValues({}, K), e);
        if (!this.portalItem) throw new s("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService");
        if (this.portalItem.type !== P) throw new s("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${P}"`);
        yield this._ensureLoadBeforeSave();
        const o3 = o2(this.portalItem, "portal-item", true), i3 = { layers: [this.write({}, o3)] };
        return yield Promise.all(o3.resources.pendingOperations ?? []), yield this._validateAgainstJSONSchema(i3, o3, t), this.url && (this.portalItem.url = this.url), this.portalItem.title || (this.portalItem.title = this.title), T(this.portalItem, t, O.existingItem), yield n(this.portalItem, i3, this.resourceReferences, o3), i2(o3), this.portalItem;
      });
    }
    _validateAgainstJSONSchema(e, t, i3) {
      return __async(this, null, function* () {
        const s3 = i3?.validationOptions;
        s2(t, { errorName: "sceneservice:save" }, { ignoreUnsupported: s3?.ignoreUnsupported, supplementalUnsupportedErrors: ["scenemodification:unsupported"] });
        const a2 = s3?.enabled, n3 = u2();
        if (a2 && n3) {
          const t2 = (yield n3()).validate(e, i3.portalItemLayerType);
          if (!t2.length) return;
          const a3 = `Layer item did not validate:
${t2.join("\n")}`;
          if (i.getLogger(this).error(`_validateAgainstJSONSchema(): ${a3}`), "throw" === s3.failPolicy) {
            const e2 = t2.map(((e3) => new s("sceneservice:schema-validation", e3)));
            throw new s("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", { validationErrors: e2 });
          }
        }
      });
    }
  };
  return r([m2(u)], C3.prototype, "id", void 0), r([m2({ type: f })], C3.prototype, "spatialReference", void 0), r([o("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], C3.prototype, "readSpatialReference", null), r([m2({ type: z })], C3.prototype, "fullExtent", void 0), r([o("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], C3.prototype, "readFullExtent", null), r([m2({ readOnly: true, type: m3 })], C3.prototype, "heightModelInfo", void 0), r([m2({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: { source: "minScale" }, write: false } } } })], C3.prototype, "minScale", void 0), r([m2({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: { source: "maxScale" }, write: false } } } })], C3.prototype, "maxScale", void 0), r([m2({ readOnly: true })], C3.prototype, "version", void 0), r([o("version", ["store.version"])], C3.prototype, "readVersion", null), r([m2({ type: String, json: { read: { source: "copyrightText" } } })], C3.prototype, "copyright", void 0), r([m2({ type: String, json: { read: false } })], C3.prototype, "sublayerTitleMode", void 0), r([m2({ type: String })], C3.prototype, "title", void 0), r([o("portal-item", "title")], C3.prototype, "readTitlePortalItem", null), r([o("service", "title", ["name"])], C3.prototype, "readTitleService", null), r([m2({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { write: { target: "id", isRequired: true, ignoreOrigin: true }, read: false } } } })], C3.prototype, "layerId", void 0), r([m2(y)], C3.prototype, "url", null), r([r2("url")], C3.prototype, "writeUrl", null), r([m2()], C3.prototype, "parsedUrl", null), r([m2({ readOnly: true })], C3.prototype, "store", void 0), r([m2({ type: String, readOnly: true, json: { read: { source: "store.rootNode" } } })], C3.prototype, "rootNode", void 0), C3 = r([a("esri.layers.mixins.SceneService")], C3), C3;
};
var L = -1e38;
function U(e) {
  if (null != e.spatialReference) return f.fromJSON(e.spatialReference);
  const t = e.store, r4 = t.indexCRS || t.geographicCRS, o3 = r4 && parseInt(r4.slice(r4.lastIndexOf("/") + 1), 10);
  return null != o3 ? new f(o3) : null;
}
function T(e, t, r4) {
  e.typeKeywords || (e.typeKeywords = []);
  const o3 = t.getTypeKeywords();
  for (const i3 of o3) e.typeKeywords.push(i3);
  e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter(((e2, t2, r5) => r5.indexOf(e2) === t2)), r4 === O.newItem && (e.typeKeywords = e.typeKeywords.filter(((e2) => "Hosted Service" !== e2))));
}
var O;
!(function(e) {
  e[e.existingItem = 0] = "existingItem", e[e.newItem = 1] = "newItem";
})(O || (O = {}));
var P = "Scene Service";
var K = { getTypeKeywords: () => [], portalItemLayerType: "unknown", validationOptions: { enabled: true, ignoreUnsupported: false, failPolicy: "throw" } };
var V;
!(function(e) {
  e[e.SAVE = 0] = "SAVE", e[e.SAVE_AS = 1] = "SAVE_AS";
})(V || (V = {}));

export {
  r3 as r,
  R,
  V
};
//# sourceMappingURL=chunk-DSM6S4WO.js.map
