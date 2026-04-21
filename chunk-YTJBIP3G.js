import {
  i as i2
} from "./chunk-CGRX345G.js";
import {
  s as s2
} from "./chunk-XO2Q4GTH.js";
import {
  o
} from "./chunk-ZTI4G5D6.js";
import {
  E,
  i
} from "./chunk-VGPJZZUW.js";
import {
  k
} from "./chunk-QKFL335K.js";
import {
  C
} from "./chunk-3XEBNOYK.js";
import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/save/utils.js
function p(t, r, a) {
  const o2 = a(t);
  if (!o2.isValid) throw new s(`${r}:invalid-parameters`, o2.errorMessage, { layer: t });
}
function l(e) {
  return __async(this, null, function* () {
    const { layer: t, errorNamePrefix: r, validateLayer: a } = e;
    yield t.load(), p(t, r, a);
  });
}
function m(e, t) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`;
}
function c(t) {
  const { item: r, errorNamePrefix: a, layer: o2, validateItem: i3 } = t;
  if (u(t), i3) {
    const t2 = i3(r);
    if (!t2.isValid) throw new s(`${a}:invalid-parameters`, t2.errorMessage, { layer: o2 });
  }
}
function u(t) {
  const { item: r, itemType: a, additionalItemType: o2, errorNamePrefix: i3, layer: n } = t, s3 = [a];
  if (o2 && s3.push(o2), !s3.includes(r.type)) {
    const t2 = s3.map(((e) => `'${e}'`)).join(", ");
    throw new s(`${i3}:portal-item-wrong-type`, `Portal item type should be one of: "${t2}"`, { item: r, layer: n });
  }
}
function f(t) {
  const { layer: r, errorNamePrefix: a } = t, { portalItem: o2 } = r;
  if (!o2) throw new s(`${a}:portal-item-not-set`, m(r, "requires the portalItem property to be set"));
  if (!o2.loaded) throw new s(`${a}:portal-item-not-loaded`, m(r, "cannot be saved to a portal item that does not exist or is inaccessible"));
  c(__spreadProps(__spreadValues({}, t), { item: o2 }));
}
function d(e) {
  const { newItem: t, itemType: o2 } = e;
  let i3 = k.from(t);
  return i3.id && (i3 = i3.clone(), i3.id = null), i3.type ??= o2, i3.portal ??= C.getDefault(), c(__spreadProps(__spreadValues({}, e), { item: i3 })), i3;
}
function y(e) {
  return o(e, "portal-item");
}
function w(e, t, r) {
  return __async(this, null, function* () {
    "beforeSave" in e && "function" == typeof e.beforeSave && (yield e.beforeSave());
    const a = e.write({}, t);
    return yield Promise.all(t.resources?.pendingOperations ?? []), s2(t, { errorName: "layer-write:unsupported" }, r), a;
  });
}
function I(e) {
  i(e, E.JSAPI), e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter(((e2, t, r) => r.indexOf(e2) === t)));
}
function v(e, t, r) {
  return __async(this, null, function* () {
    const a = e.portal;
    yield a.signIn(), yield a.user.addItem({ item: e, data: t, folder: r?.folder });
  });
}
function P(e, r) {
  return __async(this, null, function* () {
    const { layer: a, createItemData: o2, createJSONContext: i3, setItemProperties: n, saveResources: s3, supplementalUnsupportedErrors: p2 } = e;
    yield l(e), f(e);
    const m2 = a.portalItem, c2 = i3 ? i3(m2) : y(m2), u2 = yield w(a, c2, __spreadProps(__spreadValues({}, r), { supplementalUnsupportedErrors: p2 })), d2 = yield o2({ layer: a, layerJSON: u2 }, m2);
    return yield n?.(a, m2, d2), I(m2), yield m2.update({ data: d2 }), i2(c2), yield s3?.(m2, c2), m2;
  });
}
function $(e, r) {
  return __async(this, null, function* () {
    const { layer: a, createItemData: o2, createJSONContext: i3, setItemProperties: n, saveResources: s3, supplementalUnsupportedErrors: p2 } = e;
    yield l(e);
    const m2 = d(e), c2 = i3 ? i3(m2) : y(m2), u2 = yield w(a, c2, __spreadProps(__spreadValues({}, r), { supplementalUnsupportedErrors: p2 })), f2 = yield o2({ layer: a, layerJSON: u2 }, m2);
    return yield n(a, m2, f2), I(m2), yield v(m2, f2, r), a.portalItem = m2, i2(c2), yield s3?.(m2, c2), m2;
  });
}

export {
  p,
  m,
  f,
  d,
  w,
  I,
  v,
  P,
  $
};
//# sourceMappingURL=chunk-YTJBIP3G.js.map
