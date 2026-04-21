import {
  o as o3
} from "./chunk-5RP2ICSS.js";
import {
  o as o2
} from "./chunk-55L5UHEV.js";
import {
  n as n3
} from "./chunk-WOJZB2NE.js";
import {
  o
} from "./chunk-X6QLSTNN.js";
import {
  n as n2
} from "./chunk-DE5G7AIG.js";
import {
  n
} from "./chunk-CE5SL3EZ.js";
import {
  s
} from "./chunk-DYCMDIMU.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js
function f(r) {
  r.fragment.uniforms.add(new o3("projInfo", ((r2) => n4(r2.camera)))), r.fragment.uniforms.add(new o2("zScale", ((r2) => m(r2.camera)))), r.fragment.code.add(n3`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);
}
function n4(r) {
  const o4 = r.projectionMatrix;
  return 0 === o4[11] ? s(c, 2 / (r.fullWidth * o4[0]), 2 / (r.fullHeight * o4[5]), (1 + o4[12]) / o4[0], (1 + o4[13]) / o4[5]) : s(c, -2 / (r.fullWidth * o4[0]), -2 / (r.fullHeight * o4[5]), (1 - o4[8]) / o4[0], (1 - o4[9]) / o4[5]);
}
var c = n();
function m(o4) {
  return 0 === o4.projectionMatrix[11] ? o(l, 0, 1) : o(l, 1, 0);
}
var l = n2();

export {
  f
};
//# sourceMappingURL=chunk-V6UOKKJZ.js.map
