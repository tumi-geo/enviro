import {
  B as B2,
  q,
  w,
  y,
  z
} from "./chunk-VXZO5RHI.js";
import {
  b
} from "./chunk-RSRGHKBV.js";
import {
  e as e2
} from "./chunk-GNCPI2AX.js";
import {
  e
} from "./chunk-GNE22XPD.js";
import {
  B,
  P,
  h
} from "./chunk-2VUW4ILG.js";
import {
  n,
  r as r2,
  t,
  u
} from "./chunk-VY2R5MU5.js";
import {
  l
} from "./chunk-7ZUHIRNS.js";
import {
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import {
  r
} from "./chunk-C5HHJVCI.js";

// node_modules/@arcgis/core/geometry/support/MeshTransform.js
var y2;
var _a;
var A = (_a = class extends l {
  constructor(t2) {
    super(t2), this.translation = n(), this.rotationAxis = u(B2), this.rotationAngle = 0, this.scale = r2(1, 1, 1);
  }
  get rotation() {
    return q(this.rotationAxis, this.rotationAngle);
  }
  set rotation(t2) {
    this.rotationAxis = t(w(t2)), this.rotationAngle = y(t2);
  }
  get localMatrix() {
    const t2 = e();
    return b(d, w(this.rotation), z(this.rotation)), P(t2, d, this.translation, this.scale), t2;
  }
  get localMatrixInverse() {
    return h(e(), this.localMatrix);
  }
  equals(t2) {
    return this === t2 || null != t2 && B(this.localMatrix, t2.localMatrix);
  }
  clone() {
    const t2 = { translation: t(this.translation), rotationAxis: t(this.rotationAxis), rotationAngle: this.rotationAngle, scale: t(this.scale) };
    return new y2(t2);
  }
}, y2 = _a, _a);
r([m({ type: [Number], nonNullable: true, json: { write: true } })], A.prototype, "translation", void 0), r([m({ type: [Number], nonNullable: true, json: { write: true } })], A.prototype, "rotationAxis", void 0), r([m({ type: Number, nonNullable: true, json: { write: true } })], A.prototype, "rotationAngle", void 0), r([m({ type: [Number], nonNullable: true, json: { write: true } })], A.prototype, "scale", void 0), r([m()], A.prototype, "rotation", null), r([m()], A.prototype, "localMatrix", null), r([m()], A.prototype, "localMatrixInverse", null), A = y2 = r([a("esri.geometry.support.MeshTransform")], A);
var d = e2();

export {
  A
};
//# sourceMappingURL=chunk-GG2JPCCX.js.map
