import {
  e as e3,
  i
} from "./chunk-FOBVGNW3.js";
import {
  c,
  c2,
  f2,
  f3,
  h,
  i as i2,
  i2 as i5
} from "./chunk-GQ2XXYCS.js";
import {
  L,
  f as f4,
  r as r2,
  t as t3,
  v
} from "./chunk-6Z5MVNVI.js";
import {
  c as c3,
  h as h2
} from "./chunk-4P7A7GI5.js";
import {
  a as a4,
  m,
  n2,
  n3 as n4
} from "./chunk-HT62HMH7.js";
import {
  e as e4
} from "./chunk-CL5I3VPQ.js";
import {
  d as d2,
  o as o4
} from "./chunk-VR7GZ2HJ.js";
import {
  d,
  o as o3,
  u as u2,
  u3
} from "./chunk-MGLEHICA.js";
import {
  s2 as s4
} from "./chunk-STVGBGLP.js";
import {
  n as n3
} from "./chunk-WYMJ7YI4.js";
import {
  i as i4
} from "./chunk-PWY2Z5GI.js";
import {
  o2 as o5
} from "./chunk-4DIMNKJL.js";
import {
  p
} from "./chunk-AQOP2XDK.js";
import {
  d as d3,
  f
} from "./chunk-UWCO337E.js";
import {
  e as e5
} from "./chunk-JECBKVB6.js";
import {
  e as e6
} from "./chunk-PFLJNWWG.js";
import {
  s as s2
} from "./chunk-GMFBEJ6D.js";
import {
  s as s3
} from "./chunk-X7J7WJ73.js";
import {
  i as i3
} from "./chunk-HPBIEUKF.js";
import {
  a2 as a3,
  t as t2
} from "./chunk-6JZX5JOH.js";
import {
  o
} from "./chunk-EVOZZJWV.js";
import {
  o2,
  u
} from "./chunk-QSRVYVUA.js";
import {
  e as e2
} from "./chunk-UCITK3EQ.js";
import {
  n,
  t
} from "./chunk-WOJZB2NE.js";
import {
  a as a2
} from "./chunk-7QFWTVCO.js";
import {
  e
} from "./chunk-4PDLXIV3.js";
import {
  r
} from "./chunk-72EYURPT.js";
import {
  a
} from "./chunk-DE5G7AIG.js";
import {
  s
} from "./chunk-CE5SL3EZ.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js
function T(T2, u4) {
  const x = T2.fragment, { hasVertexTangents: g, doubleSidedMode: f5, hasNormalTexture: v2, textureCoordinateType: p2, bindType: b, hasNormalTextureTransform: y } = u4;
  g ? (T2.attributes.add(e.TANGENT, "vec4"), T2.varyings.add("vTangent", "vec4"), f5 === i.WindingOrder ? x.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`) : x.code.add(n`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)) : x.code.add(n`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`), v2 && p2 !== o3.None && (T2.include(u2, u4), x.uniforms.add(b === a2.Pass ? new s3("normalTexture", ((e7) => e7.textureNormal)) : new o("normalTexture", ((e7) => e7.textureNormal))), y && (x.uniforms.add(new e6("scale", ((e7) => e7.scale ?? a))), x.uniforms.add(new o2("normalTextureTransformMatrix", ((t5) => t5.normalTextureTransformMatrix ?? r)))), x.code.add(n`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`), y && x.code.add(n`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`), x.code.add(n`return tangentSpace * rawNormal;
}`));
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js
function s5(e7, s6) {
  s6.hasColorTextureTransform ? (e7.varyings.add("colorUV", "vec2"), e7.vertex.uniforms.add(new o2("colorTextureTransformMatrix", ((e8) => e8.colorTextureTransformMatrix ?? r))).code.add(n`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : e7.vertex.code.add(n`void forwardColorUV(){}`);
}
function i6(s6, i7) {
  i7.hasNormalTextureTransform && i7.textureCoordinateType !== o3.None ? (s6.varyings.add("normalUV", "vec2"), s6.vertex.uniforms.add(new o2("normalTextureTransformMatrix", ((e7) => e7.normalTextureTransformMatrix ?? r))).code.add(n`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : s6.vertex.code.add(n`void forwardNormalUV(){}`);
}
function t4(s6, i7) {
  i7.hasEmissionTextureTransform && i7.textureCoordinateType !== o3.None ? (s6.varyings.add("emissiveUV", "vec2"), s6.vertex.uniforms.add(new o2("emissiveTextureTransformMatrix", ((e7) => e7.emissiveTextureTransformMatrix ?? r))).code.add(n`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : s6.vertex.code.add(n`void forwardEmissiveUV(){}`);
}
function d4(s6, i7) {
  i7.hasOcclusionTextureTransform && i7.textureCoordinateType !== o3.None ? (s6.varyings.add("occlusionUV", "vec2"), s6.vertex.uniforms.add(new o2("occlusionTextureTransformMatrix", ((e7) => e7.occlusionTextureTransformMatrix ?? r))).code.add(n`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : s6.vertex.code.add(n`void forwardOcclusionUV(){}`);
}
function n5(s6, i7) {
  i7.hasMetallicRoughnessTextureTransform && i7.textureCoordinateType !== o3.None ? (s6.varyings.add("metallicRoughnessUV", "vec2"), s6.vertex.uniforms.add(new o2("metallicRoughnessTextureTransformMatrix", ((e7) => e7.metallicRoughnessTextureTransformMatrix ?? r))).code.add(n`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : s6.vertex.code.add(n`void forwardMetallicRoughnessUV(){}`);
}

// node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js
function K(K2) {
  const Q2 = new i3(), { attributes: X, vertex: Y, fragment: Z, varyings: ee } = Q2, { output: re, normalType: oe, offsetBackfaces: ie, instancedColor: ae, spherical: le, receiveShadows: se, snowCover: ne, pbrMode: te, textureAlphaPremultiplied: de, instancedDoublePrecision: ce, hasVertexColors: me, hasVertexTangents: ge, hasColorTexture: ve, hasNormalTexture: be, hasNormalTextureTransform: ue, hasColorTextureTransform: we, hasBloom: pe } = K2;
  if (f(Y, K2), X.add(e.POSITION, "vec3"), ee.add("vpos", "vec3", { invariant: true }), Q2.include(n3, K2), Q2.include(f2, K2), Q2.include(s4, K2), Q2.include(s5, K2), !u(re)) return Q2.include(h, K2), Q2;
  Q2.include(i6, K2), Q2.include(t4, K2), Q2.include(d4, K2), Q2.include(n5, K2), d3(Y, K2), Q2.include(t2, K2), Q2.include(o4, K2);
  const he = oe === a3.Attribute || oe === a3.Compressed;
  return he && ie && Q2.include(c2), Q2.include(T, K2), Q2.include(c, K2), ae && Q2.attributes.add(e.INSTANCECOLOR, "vec4"), ee.add("vPositionLocal", "vec3"), Q2.include(d, K2), Q2.include(d2, K2), Q2.include(i2, K2), Q2.include(e4, K2), Y.uniforms.add(new e5("externalColor", ((r3) => "ignore" === r3.colorMixMode ? s : r3.externalColor))), ee.add("vcolorExt", "vec4"), Q2.include(i4, K2), Y.main.add(n`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${t(ae, "vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${t(he, "vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${t(ge, "vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${t(he && ie, "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${n.float(o5)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `), Q2.include(L, K2), Z.include(t3, K2), Q2.include(f3, K2), Q2.include(ce ? c3 : h2, K2), Z.include(p, K2), Q2.include(u3, K2), d3(Z, K2), Z.uniforms.add(Y.uniforms.get("localOrigin"), new e2("ambient", ((e7) => e7.ambient)), new e2("diffuse", ((e7) => e7.diffuse)), new s2("opacity", ((e7) => e7.opacity)), new s2("layerOpacity", ((e7) => e7.layerOpacity))), ve && Z.uniforms.add(new s3("tex", ((e7) => e7.texture))), Q2.include(m, K2), Z.include(n4, K2), Z.include(i5), Q2.include(e3, K2), Z.include(r2, K2), v(Z), f4(Z), a4(Z), Z.main.add(n`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${ve ? n`
            vec4 texColor = texture(tex, ${we ? "colorUV" : "vuv0"});
            ${t(de, "texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);` : n`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${oe === a3.ScreenDerivative ? n`vec3 normal = screenDerivativeNormal(vPositionLocal);` : n`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${se ? "max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))" : t(le, "lightingGlobalFactor * (1.0 - additionalAmbientScale)", "0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${t(me, "vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${t(me, "vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${be ? `mat3 tangentSpace = computeTangentSpace(${ge ? "normal" : "normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ue ? "normalUV" : "vuv0"});` : "vec3 shadingNormal = normal;"}
    vec3 normalGround = ${le ? "normalize(posWorld);" : "vec3(0.0, 0.0, 1.0);"}

    ${t(ne, n`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${te === n2.Normal || te === n2.Schematic ? n`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${pe ? "vec4(0.0)" : "getEmissions(albedo)"};
            ${t(ne, "mrr = applySnowToMRR(mrr, snow);\n                 emission = snowCoverForEmissions(emission, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : n`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${t(ne, ", snow")});
  `), Q2;
}
var Q = Object.freeze(Object.defineProperty({ __proto__: null, build: K }, Symbol.toStringTag, { value: "Module" }));

export {
  K,
  Q
};
//# sourceMappingURL=chunk-VS6SMYWX.js.map
