import {
  p
} from "./chunk-MZUMJDHL.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/arcade/geometry/operatorsWorkerConnection.js
var e;
var o;
var t = false;
function n() {
  return e ??= p("arcadeGeometryOperatorsWorker").then(((r) => {
    o = r, t = true, e = void 0;
  }));
}
function a(r, e2) {
  return __async(this, null, function* () {
    return t ? o.apply("invokeGeometryOp", [r, e2]) : (yield n(), a(r, e2));
  });
}

export {
  a
};
//# sourceMappingURL=chunk-GPBMZWXX.js.map
