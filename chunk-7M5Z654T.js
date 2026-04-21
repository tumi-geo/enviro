import {
  e as e2
} from "./chunk-CL5I3VPQ.js";
import {
  o
} from "./chunk-VR7GZ2HJ.js";
import {
  o as o2,
  o2 as o3
} from "./chunk-4DIMNKJL.js";
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
  s
} from "./chunk-GMFBEJ6D.js";
import {
  i
} from "./chunk-HPBIEUKF.js";
import {
  n as n2,
  u
} from "./chunk-QSRVYVUA.js";
import {
  n
} from "./chunk-WOJZB2NE.js";
import {
  e
} from "./chunk-4PDLXIV3.js";

// node_modules/@arcgis/core/chunks/NativeLine.glsl.js
function u2(u3) {
  const p3 = new i(), { vertex: w, fragment: f2, varyings: b } = p3;
  return p3.include(o, u3), p3.include(e2, u3), f(w, u3), p3.attributes.add(e.POSITION, "vec3"), b.add("vpos", "vec3", { invariant: true }), w.main.add(n`vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`), p3.include(o2, u3), p3.fragment.include(p, u3), f2.uniforms.add(new s("alphaCoverage", ((e4, r) => Math.min(1, e4.width * r.camera.pixelRatio)))), u3.hasVertexColors || f2.uniforms.add(new e3("constantColor", ((e4) => e4.color))), f2.main.add(n`
    discardBySlice(vpos);

    vec4 color = ${u3.hasVertexColors ? "vColor" : "constantColor"};

    ${u3.output === n2.ObjectAndLayerIdColor ? "color.a = 1.0;" : ""}

    if (color.a < ${n.float(o3)}) {
      discard;
    }

    ${u(u3.output) ? n`fragColor = applySlice(color, vpos);` : ""}
    calculateOcclusionAndOutputHighlight();
  `), p3;
}
var p2 = Object.freeze(Object.defineProperty({ __proto__: null, build: u2 }, Symbol.toStringTag, { value: "Module" }));

export {
  u2 as u,
  p2 as p
};
//# sourceMappingURL=chunk-7M5Z654T.js.map
