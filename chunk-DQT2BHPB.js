import {
  l as l3,
  n2 as n3,
  o as o2,
  o2 as o3
} from "./chunk-TXJU5K2P.js";
import {
  l as l4
} from "./chunk-5NBTYQY4.js";
import {
  n as n4
} from "./chunk-XQEDALQO.js";
import "./chunk-GJBLIZJ6.js";
import {
  h
} from "./chunk-BAS24CHE.js";
import {
  p as p3
} from "./chunk-ZPRQ3CNR.js";
import "./chunk-VVGDGEK6.js";
import {
  p as p2,
  u as u4,
  u3 as u5
} from "./chunk-PU5BSLV5.js";
import "./chunk-RSRGHKBV.js";
import {
  e
} from "./chunk-CTUUCM6Q.js";
import "./chunk-WAKNM5QU.js";
import {
  B
} from "./chunk-Y43YHFY6.js";
import {
  c,
  n as n2,
  u as u3
} from "./chunk-ITAZ5PY2.js";
import {
  e as e3,
  f,
  s as s2,
  u as u2
} from "./chunk-DXBXCRYC.js";
import "./chunk-47YOCG5C.js";
import {
  l
} from "./chunk-MCAE2U2N.js";
import "./chunk-DRZL4WTP.js";
import {
  M as M2,
  O,
  T as T2,
  U,
  V,
  g,
  o,
  y
} from "./chunk-XZLUABZJ.js";
import "./chunk-7RKFG5YX.js";
import "./chunk-7N32VZ4G.js";
import "./chunk-7EVA2PHC.js";
import "./chunk-GNCPI2AX.js";
import {
  l as l2
} from "./chunk-2JXAQB6C.js";
import {
  P
} from "./chunk-XY257PCG.js";
import "./chunk-YVKWL3MD.js";
import "./chunk-AKEOA7WV.js";
import {
  j,
  n
} from "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import {
  e as e2
} from "./chunk-72EYURPT.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import "./chunk-RFGZMFOP.js";
import "./chunk-GUUR524U.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-2VUW4ILG.js";
import {
  p
} from "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import {
  r as r2
} from "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import {
  r
} from "./chunk-VY2R5MU5.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import {
  M,
  T
} from "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import {
  H
} from "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import {
  u
} from "./chunk-RG4KFLVA.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import {
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/chunks/mat3.js
function e4(e8, t6, o6) {
  const r4 = e8.typedBuffer, f4 = e8.typedBufferStride, d = t6.typedBuffer, n5 = t6.typedBufferStride, c2 = o6 ? o6.count : t6.count;
  let u7 = (o6?.dstIndex ?? 0) * f4, l5 = (o6?.srcIndex ?? 0) * n5;
  for (let p4 = 0; p4 < c2; ++p4) {
    for (let e9 = 0; e9 < 9; ++e9) r4[u7 + e9] = d[l5 + e9];
    u7 += f4, l5 += n5;
  }
}
var t = Object.freeze(Object.defineProperty({ __proto__: null, copy: e4 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/mat4.js
function e5(e8, t6, o6) {
  const r4 = e8.typedBuffer, f4 = e8.typedBufferStride, d = t6.typedBuffer, n5 = t6.typedBufferStride, c2 = o6 ? o6.count : t6.count;
  let u7 = (o6?.dstIndex ?? 0) * f4, l5 = (o6?.srcIndex ?? 0) * n5;
  for (let p4 = 0; p4 < c2; ++p4) {
    for (let e9 = 0; e9 < 16; ++e9) r4[u7 + e9] = d[l5 + e9];
    u7 += f4, l5 += n5;
  }
}
var t2 = Object.freeze(Object.defineProperty({ __proto__: null, copy: e5 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/vec33.js
function e6(e8, f4) {
  t3(e8.typedBuffer, f4.typedBuffer, e8.typedBufferStride, f4.typedBufferStride);
}
function t3(e8, t6, f4 = 3, o6 = f4) {
  const r4 = t6.length / o6;
  let n5 = 0, u7 = 0;
  for (let c2 = 0; c2 < r4; ++c2) e8[n5] = t6[u7], e8[n5 + 1] = t6[u7 + 1], e8[n5 + 2] = t6[u7 + 2], n5 += f4, u7 += o6;
}
function f2(e8, t6, f4, o6, r4) {
  const n5 = e8.typedBuffer, u7 = e8.typedBufferStride, c2 = r4?.count ?? e8.count;
  let d = (r4?.dstIndex ?? 0) * u7;
  for (let l5 = 0; l5 < c2; ++l5) n5[d] = t6, n5[d + 1] = f4, n5[d + 2] = o6, d += u7;
}
var o4 = Object.freeze(Object.defineProperty({ __proto__: null, copy: t3, copyView: e6, fill: f2 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/vec43.js
function e7(e8, f4) {
  t4(e8.typedBuffer, f4, e8.typedBufferStride);
}
function t4(e8, t6, f4 = 4) {
  const o6 = t6.typedBuffer, r4 = t6.typedBufferStride, n5 = t6.count;
  let u7 = 0, c2 = 0;
  for (let d = 0; d < n5; ++d) e8[u7] = o6[c2], e8[u7 + 1] = o6[c2 + 1], e8[u7 + 2] = o6[c2 + 2], e8[u7 + 3] = o6[c2 + 3], u7 += f4, c2 += r4;
}
function f3(e8, t6, f4, o6, r4, n5) {
  const u7 = e8.typedBuffer, c2 = e8.typedBufferStride, d = n5?.count ?? e8.count;
  let l5 = (n5?.dstIndex ?? 0) * c2;
  for (let p4 = 0; p4 < d; ++p4) u7[l5] = t6, u7[l5 + 1] = f4, u7[l5 + 2] = o6, u7[l5 + 3] = r4, l5 += c2;
}
var o5 = Object.freeze(Object.defineProperty({ __proto__: null, copy: t4, copyView: e7, fill: f3 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/geometry/support/buffer/utils.js
function r3(s3, r4) {
  return new s3(new ArrayBuffer(r4 * s3.ElementCount * e(s3.ElementType)));
}

// node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js
function G(e8, t6, r4) {
  return __async(this, null, function* () {
    const n5 = new n3(N(r4)), s3 = (yield l4(n5, t6, r4, true)).model, i = s3.lods.shift(), a = /* @__PURE__ */ new Map(), l5 = /* @__PURE__ */ new Map();
    s3.textures.forEach(((e9, t7) => a.set(t7, J(e9)))), s3.materials.forEach(((e9, t7) => l5.set(t7, W(e9, a))));
    const c2 = H2(i);
    for (const o6 of c2.parts) X(c2, o6, l5);
    const { position: u7, normal: f4, tangent: m, color: p4, texCoord0: d } = c2.vertexAttributes, x = l(e8, r4), h2 = e8.spatialReference.isGeographic ? l(e8) : x, v = B({ vertexAttributes: { position: u7.typedBuffer, normal: f4?.typedBuffer, tangent: m?.typedBuffer }, vertexSpace: h2, spatialReference: e8.spatialReference }, x, { allowBufferReuse: true, sourceUnit: r4?.unitConversionDisabled ? void 0 : "meters" });
    if (!v) throw new s("load-gltf-mesh:vertex-space-projection", `Failed to load mesh from glTF because we could not convert the vertex space from ${h2.type} to ${x.type}`);
    return { transform: null, vertexSpace: x, components: c2.components, spatialReference: e8.spatialReference, vertexAttributes: new p3(__spreadProps(__spreadValues({}, v), { color: p4?.typedBuffer, uv: d?.typedBuffer })) };
  });
}
function N(e8) {
  const t6 = e8?.resolveFile;
  return t6 ? { busy: false, request: (e9, o6, n5) => __async(null, null, function* () {
    const s3 = t6?.(e9) ?? e9, i = "image" === o6 ? "image" : "binary" === o6 || "image+type" === o6 ? "array-buffer" : "json";
    return (yield H(s3, { responseType: i, signal: n5?.signal, timeout: 0 })).data;
  }) } : null;
}
function K(e8, t6) {
  if (null == e8) return "-";
  const r4 = e8.typedBuffer;
  return `${u(t6, r4.buffer, (() => t6.size))}/${r4.byteOffset}/${r4.byteLength}`;
}
function Q(e8) {
  return null != e8 ? e8.toString() : "-";
}
function H2(e8) {
  let t6 = 0;
  const has = { color: false, tangent: false, normal: false, texCoord0: false }, r4 = /* @__PURE__ */ new Map(), o6 = /* @__PURE__ */ new Map(), s3 = [];
  for (const i of e8.parts) {
    const { position: e9, normal: a, color: l5, tangent: c2, texCoord0: u7 } = i.attributes, f4 = `
      ${K(e9, r4)}/
      ${K(a, r4)}/
      ${K(l5, r4)}/
      ${K(c2, r4)}/
      ${K(u7, r4)}/
      ${Q(i.transform)}
    `;
    let m = false;
    const p4 = u(o6, f4, (() => (m = true, { start: t6, length: e9.count })));
    m && (t6 += e9.count), a && (has.normal = true), l5 && (has.color = true), c2 && (has.tangent = true), u7 && (has.texCoord0 = true), s3.push({ gltf: i, writeVertices: m, region: p4 });
  }
  return { vertexAttributes: { position: r3(U, t6), normal: has.normal ? r3(o, t6) : null, tangent: has.tangent ? r3(T2, t6) : null, color: has.color ? r3(g, t6) : null, texCoord0: has.texCoord0 ? r3(y, t6) : null }, parts: s3, components: [] };
}
function J(e8) {
  return new u4({ data: (n4(e8.data), e8.data), wrap: ee(e8.parameters.wrap) });
}
function W(t6, r4) {
  const o6 = new l2(oe(t6.color, t6.opacity)), n5 = t6.emissiveFactor ? new l2(ne(t6.emissiveFactor)) : null, i = (e8) => e8 ? new p2({ scale: e8.scale ? [e8.scale[0], e8.scale[1]] : [1, 1], rotation: M(e8.rotation ?? 0), offset: e8.offset ? [e8.offset[0], e8.offset[1]] : [0, 0] }) : null;
  return new u5({ color: o6, colorTexture: r4.get(t6.colorTexture), normalTexture: r4.get(t6.normalTexture), emissiveColor: n5, emissiveTexture: r4.get(t6.emissiveTexture), occlusionTexture: r4.get(t6.occlusionTexture), alphaMode: Z(t6.alphaMode), alphaCutoff: t6.alphaCutoff, doubleSided: t6.doubleSided, metallic: t6.metallicFactor, roughness: t6.roughnessFactor, metallicRoughnessTexture: r4.get(t6.metallicRoughnessTexture), colorTextureTransform: i(t6.colorTextureTransform), normalTextureTransform: i(t6.normalTextureTransform), occlusionTextureTransform: i(t6.occlusionTextureTransform), emissiveTextureTransform: i(t6.emissiveTextureTransform), metallicRoughnessTextureTransform: i(t6.metallicRoughnessTextureTransform) });
}
function X(e8, t6, r4) {
  t6.writeVertices && Y(e8, t6);
  const { indices: o6, attributes: n5, primitiveType: s3, material: i } = t6.gltf;
  let a = o3(o6 || n5.position.count, s3);
  const l5 = t6.region.start;
  if (l5) {
    const e9 = new Uint32Array(a);
    for (let t7 = 0; t7 < a.length; t7++) e9[t7] += l5;
    a = e9;
  }
  e8.components.push(new h({ name: t6.gltf.name, faces: a, material: r4.get(i), shading: n5.normal ? "source" : "flat", trustSourceNormals: true }));
}
function Y(e8, t6) {
  const { position: r4, normal: o6, tangent: n5, color: s3, texCoord0: u7 } = e8.vertexAttributes, f4 = t6.region.start, { attributes: m, transform: p4 } = t6.gltf, d = m.position.count;
  if (e3(r4.slice(f4, d), m.position, p4), null != m.normal && null != o6) {
    const e9 = j(e2(), p4), t7 = o6.slice(f4, d);
    f(t7, m.normal, e9), T(e9) && s2(t7, t7);
  } else null != o6 && f2(o6, 0, 0, 1, { dstIndex: f4, count: d });
  if (null != m.tangent && null != n5) {
    const e9 = n(e2(), p4), t7 = n5.slice(f4, d);
    n2(t7, m.tangent, e9), T(e9) && u3(t7, t7);
  } else null != n5 && f3(n5, 0, 0, 1, 1, { dstIndex: f4, count: d });
  if (null != m.texCoord0 && null != u7 ? o2(u7.slice(f4, d), m.texCoord0) : null != u7 && l3(u7, 0, 0, { dstIndex: f4, count: d }), null != m.color && null != s3) {
    const e9 = m.color, t7 = s3.slice(f4, d);
    if (4 === e9.elementCount) e9 instanceof T2 ? c(t7, e9, 1, 255) : (e9 instanceof g || e9 instanceof M2) && c(t7, e9, 1 / 255, 255);
    else {
      f3(t7, 255, 255, 255, 255);
      const r5 = O.fromTypedArray(t7.typedBuffer, t7.typedBufferStride);
      e9 instanceof o ? u2(r5, e9, 1, 255) : (e9 instanceof O || e9 instanceof V) && u2(r5, e9, 1 / 255, 255);
    }
  } else null != s3 && f3(s3.slice(f4, d), 255, 255, 255, 255);
}
function Z(e8) {
  switch (e8) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function ee(e8) {
  return { horizontal: te(e8.s), vertical: te(e8.t) };
}
function te(e8) {
  switch (e8) {
    case P.CLAMP_TO_EDGE:
      return "clamp";
    case P.MIRRORED_REPEAT:
      return "mirror";
    case P.REPEAT:
      return "repeat";
  }
}
function re(e8) {
  return e8 ** (1 / p) * 255;
}
function oe(e8, t6) {
  return r2(re(e8[0]), re(e8[1]), re(e8[2]), t6);
}
function ne(e8) {
  return r(re(e8[0]), re(e8[1]), re(e8[2]));
}
export {
  G as loadGLTFMesh
};
//# sourceMappingURL=chunk-DQT2BHPB.js.map
