import {
  e as e2
} from "./chunk-CL5I3VPQ.js";
import {
  o
} from "./chunk-VR7GZ2HJ.js";
import {
  u3 as u
} from "./chunk-MGLEHICA.js";
import {
  e as e4
} from "./chunk-DPWU7IBM.js";
import {
  n as n2
} from "./chunk-WYMJ7YI4.js";
import {
  e as e5,
  i as i2
} from "./chunk-PWY2Z5GI.js";
import {
  p
} from "./chunk-AQOP2XDK.js";
import {
  f
} from "./chunk-UWCO337E.js";
import {
  e as e3
} from "./chunk-JECBKVB6.js";
import {
  i
} from "./chunk-HPBIEUKF.js";
import {
  n
} from "./chunk-WOJZB2NE.js";
import {
  e
} from "./chunk-4PDLXIV3.js";

// node_modules/@arcgis/core/chunks/ColorMaterial.glsl.js
function c(c2) {
  const m2 = new i(), { vertex: u2, fragment: w, attributes: p2, varyings: f2 } = m2, { vvColor: C, hasVertexColors: h } = c2;
  return f(u2, c2), m2.include(o, c2), m2.include(e2, c2), m2.include(n2, c2), m2.include(e4, c2), w.include(p, c2), m2.include(u, c2), m2.include(i2, c2), p2.add(e.POSITION, "vec3"), C && p2.add(e.COLORFEATUREATTRIBUTE, "float"), h || f2.add("vColor", "vec4"), f2.add("vpos", "vec3", { invariant: true }), u2.uniforms.add(new e3("uColor", ((e6) => e6.color))), u2.main.add(n`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${h ? "vColor *= uColor;" : C ? "vColor = uColor * interpolateVVColor(colorFeatureAttribute);" : "vColor = uColor;"}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`), w.include(e5), w.main.add(n`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOID(vColor, vpos, vColor.rgb);`), m2;
}
var m = Object.freeze(Object.defineProperty({ __proto__: null, build: c }, Symbol.toStringTag, { value: "Module" }));

export {
  c,
  m
};
//# sourceMappingURL=chunk-7UEX73LK.js.map
