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

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodeticDensify.js
var o;
function s2() {
  return !!o && r();
}
function i() {
  return __async(this, null, function* () {
    if (!s2()) {
      const [n, r2] = yield Promise.all([import("./chunk-YT7X423D.js"), import("./chunk-BB7UJJJU.js").then(((n2) => n2.aG)).then((({ injectPe: n2 }) => n2)), _()]);
      o = new n.OperatorGeodeticDensifyByLength(), r2(G);
    }
  });
}
function u(n, e, t, r2) {
  return o.execute(n, e, t, r2, null);
}
function c(e, t, r2, s3) {
  const i2 = o.executeMany(new s(e), t, r2, s3, null);
  return Array.from(i2);
}
function a() {
  return o.supportsCurves();
}

export {
  s2 as s,
  i,
  u,
  c,
  a
};
//# sourceMappingURL=chunk-V524FSVH.js.map
