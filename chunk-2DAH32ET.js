import {
  o
} from "./chunk-VR7GZ2HJ.js";
import {
  u3 as u
} from "./chunk-MGLEHICA.js";
import {
  e as e2
} from "./chunk-DPWU7IBM.js";
import {
  e as e3,
  i as i2
} from "./chunk-PWY2Z5GI.js";
import {
  p
} from "./chunk-AQOP2XDK.js";
import {
  f
} from "./chunk-UWCO337E.js";
import {
  c
} from "./chunk-G6E5KPMS.js";
import {
  s
} from "./chunk-GMFBEJ6D.js";
import {
  s as s2
} from "./chunk-X7J7WJ73.js";
import {
  i
} from "./chunk-HPBIEUKF.js";
import {
  n as n2
} from "./chunk-QSRVYVUA.js";
import {
  n,
  t
} from "./chunk-WOJZB2NE.js";
import {
  e
} from "./chunk-4PDLXIV3.js";

// node_modules/@arcgis/core/chunks/ImageMaterial.glsl.js
var u2 = class extends c {
};
function w(c2) {
  const u3 = new i(), { vertex: w2, fragment: b2, varyings: f2 } = u3, { output: h, perspectiveInterpolation: j } = c2;
  return f(w2, c2), u3.include(o, c2), u3.include(i2, c2), u3.fragment.include(p, c2), u3.include(e2, c2), u3.include(u, c2), u3.attributes.add(e.POSITION, "vec3"), u3.attributes.add(e.UV0, "vec2"), j && u3.attributes.add(e.PERSPECTIVEDIVIDE, "float"), w2.main.add(n`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${t(j, "gl_Position *= perspectiveDivide;")}`), f2.add("vpos", "vec3", { invariant: true }), f2.add("vTexCoord", "vec2"), b2.include(e3), b2.uniforms.add(new s("opacity", ((e4) => e4.opacity)), new s2("tex", ((e4) => e4.glTexture))).main.add(n`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${t(h === n2.ObjectAndLayerIdColor, "fragColor = vec4(0, 0, 0, 1); return;")}
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`), u3;
}
var b = Object.freeze(Object.defineProperty({ __proto__: null, ImageMaterialPassParameters: u2, build: w }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  w,
  b
};
//# sourceMappingURL=chunk-2DAH32ET.js.map
