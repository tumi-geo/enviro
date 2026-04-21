import {
  n as n2
} from "./chunk-QSRVYVUA.js";
import {
  n
} from "./chunk-WOJZB2NE.js";
import {
  e
} from "./chunk-4PDLXIV3.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js
function e2(e3, t) {
  if (t.output !== n2.ObjectAndLayerIdColor) return e3.vertex.code.add(n`void forwardObjectAndLayerIdColor() {}`), void e3.fragment.code.add(n`void outputObjectAndLayerIdColor() {}`);
  const a = t.objectAndLayerIdColorInstanced;
  e3.varyings.add("objectAndLayerIdColorVarying", "vec4"), e3.attributes.add(a ? e.INSTANCEOBJECTANDLAYERIDCOLOR : e.OLIDCOLOR, "vec4"), e3.vertex.code.add(n`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${a ? "instanceObjectAndLayerIdColor" : "objectAndLayerIdColor"} * 0.003921568627451;
    }`), e3.fragment.code.add(n`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`);
}

export {
  e2 as e
};
//# sourceMappingURL=chunk-DPWU7IBM.js.map
