import {
  D,
  N,
  a,
  g,
  l,
  o
} from "./chunk-FNFXIMG2.js";

// node_modules/@arcgis/core/layers/support/editableLayers.js
function n(t2) {
  return "object" == typeof t2 && null != t2 && "loaded" in t2 && true === t2.loaded && "type" in t2;
}
function e(e2) {
  return !(!n(e2) || !D(e2)?.operations?.supportsEditing || "editingEnabled" in e2 && !N(e2) || a(e2));
}

// node_modules/@arcgis/core/views/draw/support/layerUtils.js
function t(r, e2, s) {
  if (!e2 || !r?.map) return;
  const { map: n2 } = r, t2 = n2.layers.find(((r2) => r2 === e2));
  t2 || n2.add(e2, s), t2 && null != s && n2.layers.reorder(t2, s);
}
function l2(r, e2) {
  const s = "subtype-sublayer" === e2?.type ? e2.parent : e2;
  return r.allLayerViews.find(((r2) => {
    const e3 = r2.layer;
    return e3 === s || "sublayers" in e3 && null != e3.sublayers && e3.sublayers.includes(s);
  }));
}
function a2(t2) {
  return e(t2) || g(t2) || o(t2) || l(t2);
}

export {
  e,
  t,
  l2 as l,
  a2 as a
};
//# sourceMappingURL=chunk-D253UIOP.js.map
