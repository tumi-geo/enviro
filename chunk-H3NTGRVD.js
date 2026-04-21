import {
  O,
  V,
  d
} from "./chunk-XHCLZZMA.js";
import {
  I
} from "./chunk-QKU7E3DN.js";
import {
  B,
  j,
  x
} from "./chunk-OHB3OQWR.js";
import {
  R
} from "./chunk-XRFOA7QF.js";
import {
  f
} from "./chunk-DQ6RY3UR.js";
import {
  s
} from "./chunk-3MFXKT2T.js";
import {
  l3 as l
} from "./chunk-OX6HQ7WO.js";
import {
  a
} from "./chunk-EQ4FTM7V.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/graphics/data/executeQueryForSnapping.js
function u(c, u2, y) {
  return __async(this, null, function* () {
    const d2 = l(y), { point: x2, distance: g, returnEdge: R2, vertexMode: j2 } = u2;
    if (!R2 && "none" === j2) return { candidates: [] };
    let w = a(u2.query);
    w = yield c.schedule((() => B(w, c.definitionExpression, c.spatialReference)), d2), w = yield c.reschedule((() => d(w, { availableFields: c.availableFields, fieldsIndex: c.fieldsIndex, geometryType: c.geometryType, spatialReference: c.spatialReference })), d2);
    const h = !s(x2.spatialReference, c.spatialReference);
    h && (yield x(x2.spatialReference, c.spatialReference));
    const b = "number" == typeof g ? g : g.x, Q = "number" == typeof g ? g : g.y, S = { xmin: x2.x - b, xmax: x2.x + b, ymin: x2.y - Q, ymax: x2.y + Q, spatialReference: x2.spatialReference }, U = h ? j(S, c.spatialReference) : S;
    if (!U) return { candidates: [] };
    const q = (yield R(f(x2), null, { signal: d2 }))[0], E = (yield R(f(U), null, { signal: d2 }))[0];
    if (null == q || null == E) return { candidates: [] };
    const F = new O(yield c.reschedule((() => c.searchFeatures(V(E.toJSON()))), d2), w, c);
    yield c.reschedule((() => c.executeObjectIdsQuery(F)), d2), yield c.reschedule((() => c.executeTimeQuery(F)), d2), yield c.reschedule((() => c.executeAttributesQuery(F)), d2), yield c.reschedule((() => f2(c, F, d2)), d2);
    const T = q.toJSON(), v = h ? j(T, c.spatialReference) : T, I2 = h ? Math.max(U.xmax - U.xmin, U.ymax - U.ymin) / 2 : g;
    return F.createSnappingResponse(__spreadProps(__spreadValues({}, u2), { point: v, distance: I2 }), w.returnZ, x2.spatialReference);
  });
}
function f2(e, t, r) {
  return __async(this, null, function* () {
    const { query: a2 } = t, { spatialRel: i } = a2;
    if (!t?.items?.length || !a2.geometry || !i) return;
    const s2 = yield I(i, a2.geometry, e.geometryType, e.hasZ, e.hasM), n = yield e.runSpatialFilter(t.items, ((e2) => s2(e2.geometry)), r);
    t.items = n;
  });
}

export {
  u
};
//# sourceMappingURL=chunk-H3NTGRVD.js.map
