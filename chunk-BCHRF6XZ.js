import {
  k
} from "./chunk-QKFL335K.js";
import {
  C
} from "./chunk-3XEBNOYK.js";
import {
  H,
  p2 as p,
  s as s2
} from "./chunk-CDTLZWCX.js";
import {
  a
} from "./chunk-OX6HQ7WO.js";
import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/support/associatedFeatureServiceUtils.js
function s3(e, r) {
  return __async(this, null, function* () {
    const n = p(e);
    if (!n) throw new s("invalid-url", "Invalid scene service url");
    const o = __spreadProps(__spreadValues({}, r), { sceneServerUrl: n.url.path, layerId: n.sublayer ?? void 0 });
    if (o.sceneLayerItem ??= yield l(o), null == o.sceneLayerItem) return f(o.sceneServerUrl.replace("/SceneServer", "/FeatureServer"), o);
    const i = yield y(o);
    if (!i?.url) throw new s("related-service-not-found", "Could not find feature service through portal item relationship");
    o.featureServiceItem = i;
    const s4 = yield f(i.url, o);
    return s4.portalItem = i, s4;
  });
}
function l(e) {
  return __async(this, null, function* () {
    const r = (yield c(e)).serviceItemId;
    if (!r) return null;
    const t = new k({ id: r, apiKey: e.apiKey }), a2 = yield u(e);
    null != a2 && (t.portal = new C({ url: a2 }));
    try {
      return yield t.load({ signal: e.signal });
    } catch (s4) {
      return a(s4), null;
    }
  });
}
function c(e) {
  return __async(this, null, function* () {
    if (e.rootDocument) return e.rootDocument;
    const t = { query: __spreadProps(__spreadValues({ f: "json" }, e.customParameters), { token: e.apiKey }), responseType: "json", signal: e.signal };
    try {
      const n = yield H(e.sceneServerUrl, t);
      e.rootDocument = n.data;
    } catch {
      e.rootDocument = {};
    }
    return e.rootDocument;
  });
}
function u(t) {
  return __async(this, null, function* () {
    const a2 = s2?.findServerInfo(t.sceneServerUrl);
    if (a2?.owningSystemUrl) return a2.owningSystemUrl;
    const o = t.sceneServerUrl.replace(/(.*\/rest)\/.*/i, "$1") + "/info";
    try {
      const e = (yield H(o, { query: { f: "json" }, responseType: "json", signal: t.signal })).data.owningSystemUrl;
      if (e) return e;
    } catch (i) {
      a(i);
    }
    return null;
  });
}
function f(e, n) {
  return __async(this, null, function* () {
    const o = p(e);
    if (!o) throw new s("invalid-feature-service-url", "Invalid feature service url");
    const i = o.url.path, s4 = n.layerId;
    if (null == s4) return { serverUrl: i };
    const l2 = c(n), u2 = n.featureServiceItem ? yield n.featureServiceItem.fetchData("json") : null, f2 = (u2?.layers?.[0] || u2?.tables?.[0])?.customParameters, y2 = (e2) => {
      const t = { query: __spreadValues({ f: "json" }, f2), responseType: "json", authMode: e2, signal: n.signal };
      return H(i, t);
    }, m = y2("anonymous").catch((() => y2("no-prompt"))), [p2, d] = yield Promise.all([m, l2]), v = d?.layers, w = p2.data && p2.data.layers;
    if (!Array.isArray(w)) throw new Error("expected layers array");
    if (Array.isArray(v)) for (let r = 0; r < Math.min(v.length, w.length); r++) {
      if (v[r].id === s4) return { serverUrl: i, layerId: w[r].id };
    }
    else if (null != s4 && s4 < w.length) return { serverUrl: i, layerId: w[s4].id };
    throw new Error("could not find matching associated sublayer");
  });
}
function y(_0) {
  return __async(this, arguments, function* ({ sceneLayerItem: e, signal: r }) {
    if (!e) return null;
    try {
      const t = (yield e.fetchRelatedItems({ relationshipType: "Service2Service", direction: "reverse" }, { signal: r })).find(((e2) => "Feature Service" === e2.type)) || null;
      if (!t) return null;
      const n = new k({ portal: t.portal, id: t.id });
      return yield n.load(), n;
    } catch (t) {
      return a(t), null;
    }
  });
}

export {
  s3 as s
};
//# sourceMappingURL=chunk-BCHRF6XZ.js.map
