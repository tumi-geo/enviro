import {
  C,
  j,
  x
} from "./chunk-ITC6ZSVJ.js";
import {
  jm
} from "./chunk-UQSJS3WG.js";

// node_modules/@arcgis/core/chunks/containsOperator.js
var s = new jm();
function n(e) {
  const n2 = C(e);
  return s.accelerateGeometry(x(e), j(n2), 1);
}
function a(e, r) {
  return s.execute(x(e), x(r), j(e.spatialReference), null);
}
var c = s.supportsCurves();
var u = Object.freeze(Object.defineProperty({ __proto__: null, accelerateGeometry: n, execute: a, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  a,
  c,
  u
};
//# sourceMappingURL=chunk-OCOAEABJ.js.map
