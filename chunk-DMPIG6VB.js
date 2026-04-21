import {
  s
} from "./chunk-NGXXDUKF.js";
import {
  G,
  _,
  r
} from "./chunk-Z33DWCSN.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodesicBuffer.js
var o;
function s2() {
  return !!o && r();
}
function u() {
  return __async(this, null, function* () {
    if (!s2()) {
      const [e, t] = yield Promise.all([import("./chunk-RFM67MZM.js"), import("./chunk-BB7UJJJU.js").then(((e2) => e2.aG)).then((({ injectPe: e2 }) => e2)), _()]);
      o = new e.OperatorGeodesicBuffer(), t(G);
    }
  });
}
function i(e, r2, n, t, s3) {
  return o.execute(e, r2, n, t, s3, false, null);
}
function c(r2, n, t, s3, u2, i2) {
  const c2 = o.executeMany(new s(r2), n, t, s3, u2, false, i2, null);
  return Array.from(c2);
}
function a() {
  return o.supportsCurves();
}

export {
  s2 as s,
  u,
  i,
  c,
  a
};
//# sourceMappingURL=chunk-DMPIG6VB.js.map
