import {
  o as o3
} from "./chunk-RLVQEKME.js";
import {
  o as o2
} from "./chunk-MLCJOZSM.js";
import {
  t
} from "./chunk-LFB3N3V7.js";
import {
  e as e2
} from "./chunk-ZBDX64LE.js";
import {
  i as i2
} from "./chunk-HODCTP2Q.js";
import {
  a as a2
} from "./chunk-7QFWTVCO.js";
import {
  e
} from "./chunk-GNE22XPD.js";
import {
  o
} from "./chunk-RFGZMFOP.js";
import {
  i
} from "./chunk-2VUW4ILG.js";
import {
  a,
  n
} from "./chunk-VY2R5MU5.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js
var t2 = class extends i2 {
  constructor(o4, t3) {
    super(o4, "mat4", a2.Draw, ((r, e3, s) => r.setUniformMatrix4fv(o4, t3(e3, s))));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js
function d(r, i3) {
  i3.instancedDoublePrecision ? r.constants.add("cameraPosition", "vec3", a) : r.uniforms.add(new o2("cameraPosition", ((r2, i4) => o(v, i4.camera.viewInverseTransposeMatrix[3] - r2.origin[0], i4.camera.viewInverseTransposeMatrix[7] - r2.origin[1], i4.camera.viewInverseTransposeMatrix[11] - r2.origin[2]))));
}
function f(i3, o4) {
  if (!o4.instancedDoublePrecision) return void i3.uniforms.add(new t("proj", ((r) => r.camera.projectionMatrix)), new t2("view", ((i4, e3) => i(l, e3.camera.viewMatrix, i4.origin))), new o2("localOrigin", ((r) => r.origin)));
  const a3 = ({ camera: r }) => o(v, r.viewInverseTransposeMatrix[3], r.viewInverseTransposeMatrix[7], r.viewInverseTransposeMatrix[11]);
  i3.uniforms.add(new t("proj", ((r) => r.camera.projectionMatrix)), new t("view", ((i4) => i(l, i4.camera.viewMatrix, a3(i4)))), new o3("localOrigin", ((r) => a3(r))));
}
var l = e();
var v = n();
function p(r) {
  r.uniforms.add(new t("viewNormal", ((r2) => r2.camera.viewInverseTransposeMatrix)));
}
function w(r) {
  r.uniforms.add(new e2("pixelRatio", ((r2) => r2.camera.pixelRatio / r2.overlayStretch)));
}

export {
  d,
  f,
  p,
  w
};
//# sourceMappingURL=chunk-UWCO337E.js.map
