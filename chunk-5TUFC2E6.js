import {
  l as l2
} from "./chunk-UVTDY76K.js";
import {
  d,
  e,
  t
} from "./chunk-JP5Q7LLG.js";
import {
  f,
  g,
  u as u2,
  y
} from "./chunk-7NSIT6VC.js";
import "./chunk-KM5VA5IN.js";
import {
  c
} from "./chunk-WK2GX2IL.js";
import {
  L
} from "./chunk-S7O4PC7E.js";
import {
  U,
  k
} from "./chunk-OGQLR6GG.js";
import "./chunk-G6OLKX7O.js";
import "./chunk-JLLDOE7V.js";
import "./chunk-B3QELSYM.js";
import "./chunk-K5OIUFLW.js";
import "./chunk-NIWGG66W.js";
import "./chunk-YKSFTLZQ.js";
import "./chunk-6QOGQCGX.js";
import "./chunk-CMVANBEN.js";
import "./chunk-PPYJGQC2.js";
import "./chunk-6YN6I5ZM.js";
import "./chunk-7O25E3Z7.js";
import "./chunk-QAS34KWO.js";
import "./chunk-N3OHVW7O.js";
import {
  s as s2
} from "./chunk-JBWJWCIU.js";
import "./chunk-66I5P6AF.js";
import "./chunk-IB63APHQ.js";
import {
  l
} from "./chunk-2JXAQB6C.js";
import "./chunk-GUUR524U.js";
import "./chunk-I2QGHF2M.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-CO2FWOAQ.js";
import {
  u
} from "./chunk-ML2Q6ZHW.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-KHKWAA5Q.js";
import "./chunk-Z43IMVPB.js";
import "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-5Z6QALRR.js";
import "./chunk-RSPCFOQ5.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
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

// node_modules/@arcgis/core/symbols/support/previewSymbol2D.js
var g2 = "picture-fill";
var y2 = "picture-marker";
var w = "simple-fill";
var x = "simple-line";
var b = "simple-marker";
var v = "text";
var M = "Aa";
var S = t.size;
var z = t.maxSize;
var k2 = t.maxOutlineSize;
var L2 = t.lineWidth;
var C = 225;
var $ = document.createElement("canvas");
function j(t2, e2, i) {
  if ("polygon" === t2.type) {
    const o = t2.extent, n = 0 === o.width ? 1 : o.width, l3 = 0 === o.height ? 1 : o.height;
    t2 = U({ originPosition: "upperLeft", scale: [n / e2, l3 / i], translate: [o.xmin, o.ymax] }, {}, t2);
    let s3 = "";
    for (let e3 = 0; e3 < t2.rings.length; e3++) {
      const i2 = t2.rings[e3];
      for (let t3 = 0; t3 < i2.length; t3++) {
        const e4 = i2[t3][0], o2 = i2[t3][1];
        let n2 = "";
        0 === t3 ? (n2 = `M${e4.toString()} ${o2.toString()}`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2) : t3 === i2.length - 1 ? (n2 = `l${e4.toString()} ${o2.toString()} Z`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2) : (n2 = `l${e4.toString()} ${o2.toString()}`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2);
      }
    }
    return s3;
  }
  if ("polyline" === t2.type) {
    const o = t2.extent, n = 0 === o.width ? 1 : o.width, a = 0 === o.height ? 1 : o.height;
    t2 = k({ originPosition: "upperLeft", scale: [n / e2, a / i], translate: [o.xmin, o.ymax] }, {}, t2);
    let s3 = "";
    for (let e3 = 0; e3 < t2.paths.length; e3++) {
      const i2 = t2.paths[e3];
      for (let t3 = 0; t3 < i2.length; t3++) {
        const e4 = i2[t3][0], o2 = i2[t3][1];
        let n2 = "";
        0 === t3 ? (n2 = `M${e4.toString()} ${o2.toString()}`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2) : (n2 = `l${e4.toString()} ${o2.toString()}`, "" !== s3 && (n2 = ` ${n2}`), s3 += n2);
      }
    }
    return s3;
  }
  return "";
}
function B(t2, e2) {
  const i = $.getContext("2d"), o = [];
  e2 && (e2.weight && o.push(e2.weight), e2.size && o.push(e2.size + "px"), e2.family && o.push(e2.family)), i.font = o.join(" ");
  const { width: n, actualBoundingBoxLeft: a, actualBoundingBoxRight: l3, actualBoundingBoxAscent: s3, actualBoundingBoxDescent: r } = i.measureText(t2);
  return { width: Math.ceil(Math.max(n, a + l3)), height: Math.ceil(s3 + r), x: Math.floor(a), y: Math.floor((s3 - r) / 2) };
}
function P(t2) {
  const e2 = t2?.size;
  return { width: null != e2 && "object" == typeof e2 && "width" in e2 ? u(e2.width) : null, height: null != e2 && "object" == typeof e2 && "height" in e2 ? u(e2.height) : null };
}
function E(t2, e2) {
  return __async(this, null, function* () {
    const i = e2.fill, o = t2.color;
    if ("pattern" === i?.type && o && t2.type !== g2) {
      const t3 = yield f(i.src, o.toCss(true));
      i.src = t3, e2.fill = i;
    }
  });
}
function U2(t2, e2, i, n) {
  return __async(this, null, function* () {
    if (!("font" in t2) || !t2.font || "text" !== e2.shape.type) return;
    try {
      yield c(t2.font);
    } catch {
    }
    const { width: a, height: l3 } = P(n);
    if (!/[\uE600-\uE6FF]/.test(e2.shape.text)) {
      const { width: o, height: s3, x: r, y: h } = B(e2.shape.text, { weight: e2.font?.weight, size: e2.font?.size, family: e2.font?.family });
      i[0] = a ?? o, i[1] = l3 ?? s3, e2.shape.x = r, e2.shape.y = h;
      let c2 = "angle" in t2 ? t2.angle : null;
      if (null != n?.rotation && (c2 = (c2 ?? 0) + n.rotation), c2) {
        const t3 = c2 * (Math.PI / 180), e3 = Math.abs(Math.sin(t3)), o2 = Math.abs(Math.cos(t3));
        i[1] = i[0] * e3 + i[1] * o2;
      }
    }
  });
}
function A(t2, e2, i, o, a) {
  if (null != t2.haloColor && null != t2.haloSize) {
    a.masking ??= i.map((() => []));
    const l3 = u(t2.haloSize);
    o[0] += l3, o[1] += l3, i.unshift([__spreadProps(__spreadValues({}, e2), { fill: null, stroke: { color: t2.haloColor, width: 2 * l3, join: "round", cap: "round" } })]), a.masking.unshift([{ shape: { type: "rect", x: 0, y: 0, width: o[0] + 2 * s2, height: o[1] + 2 * s2 }, fill: [255, 255, 255], stroke: null }, __spreadProps(__spreadValues({}, e2), { fill: [0, 0, 0, 0], stroke: null })]);
  }
  null == t2.backgroundColor && null == t2.borderLineColor || (o[0] += 2 * s2, o[1] += 2 * s2, i.unshift([{ shape: { type: "rect", x: 0, y: 0, width: o[0], height: o[1] }, fill: t2.backgroundColor, stroke: { color: t2.borderLineColor, width: u(t2.borderLineSize) } }]), a.masking?.unshift([]));
}
function F(t2, e2) {
  return t2 > e2 ? "dark" : "light";
}
function Z(t2, e2) {
  const i = "number" == typeof e2?.size ? e2?.size : null, o = null != i ? u(i) : null, a = null != e2?.maxSize ? u(e2.maxSize) : null;
  let l3 = "angle" in t2 ? t2.angle : null;
  null != e2?.rotation && (l3 = (l3 ?? 0) + e2.rotation);
  const c2 = u2(t2);
  let m = y(t2);
  "dark" !== q(t2, 245) || e2?.ignoreWhiteSymbols || (m = __spreadProps(__spreadValues({ width: 0.75 }, m), { color: "#bdc3c7" }));
  let p = null;
  const d2 = { shape: null, fill: c2, stroke: m, offset: [0, 0] };
  m?.width && (m.width = Math.min(m.width, k2));
  const f2 = m?.width || 0;
  let C2 = null != e2?.size && (null == e2?.scale || e2?.scale), $2 = 0, E2 = 0, U3 = false;
  switch (t2.type) {
    case b: {
      const i2 = t2.style, { width: s3, height: r } = P(e2);
      let h = s3 === r && null != s3 ? s3 : null != o ? o : Math.min(u(t2.size), a || z);
      if (true === e2?.useMarkerSymbolSize && null !== s3 && null !== r) {
        const e3 = Math.min(u(t2.size), a || z);
        h = e3 > s3 && e3 > r ? Math.min(s3, r) : e3;
      }
      switch ($2 = h, E2 = h, i2) {
        case "circle":
          d2.shape = { type: "circle", cx: 0, cy: 0, r: 0.5 * h }, C2 || ($2 += f2, E2 += f2);
          break;
        case "cross":
          d2.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * E2] }, { command: "L", values: [$2, 0.5 * E2] }, { command: "M", values: [0.5 * $2, 0] }, { command: "L", values: [0.5 * $2, E2] }] };
          break;
        case "diamond":
          d2.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * E2] }, { command: "L", values: [0.5 * $2, 0] }, { command: "L", values: [$2, 0.5 * E2] }, { command: "L", values: [0.5 * $2, E2] }, { command: "Z", values: [] }] }, C2 || ($2 += f2, E2 += f2);
          break;
        case "square":
          d2.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [$2, 0] }, { command: "L", values: [$2, E2] }, { command: "L", values: [0, E2] }, { command: "Z", values: [] }] }, C2 || ($2 += f2, E2 += f2), l3 && (U3 = true);
          break;
        case "triangle":
          d2.shape = { type: "path", path: [{ command: "M", values: [0.5 * $2, 0] }, { command: "L", values: [$2, E2] }, { command: "L", values: [0, E2] }, { command: "Z", values: [] }] }, C2 || ($2 += f2, E2 += f2), l3 && (U3 = true);
          break;
        case "x":
          d2.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [$2, E2] }, { command: "M", values: [$2, 0] }, { command: "L", values: [0, E2] }] }, l3 && (U3 = true);
          break;
        case "path":
          d2.shape = { type: "path", path: t2.path || "" }, C2 || ($2 += f2, E2 += f2), l3 && (U3 = true), C2 = true;
      }
      break;
    }
    case x: {
      const { width: t3, height: i2 } = P(e2), n = g(m).reduce(((t4, e3) => t4 + e3), 0), a2 = n && Math.ceil(L2 / n), l4 = i2 ?? o ?? f2, s3 = t3 ?? (n * a2 || L2);
      if (C2 = true, "polyline" === e2?.geometry?.type && e2?.geometry?.extent) {
        $2 = s3, E2 = i2 ?? $2;
        const t4 = 1e3, o2 = 0.15 * t4;
        p = [$2, E2], E2 = p[0] > p[1] ? t4 * p[1] / p[0] : t4, $2 = p[0] > p[1] ? t4 : t4 * p[0] / p[1], m?.width && (m.width = m.width * t4 / (p[1] > p[0] ? p[1] : p[0]), m.width > o2 && (m.width = o2)), d2.shape = { type: "path", path: j(e2.geometry, $2, E2) };
      } else $2 = null != e2?.maxSize ? Math.min(s3, e2.maxSize) : s3, E2 = l4, m && (m.width = l4), d2.shape = { type: "path", path: [{ command: "M", values: [l4 / 2, E2 / 2] }, { command: "L", values: [$2 - l4 / 2, E2 / 2] }] };
      break;
    }
    case g2:
    case w: {
      const t3 = "object" == typeof e2?.symbolConfig && !!e2?.symbolConfig?.isSquareFill, { width: i2, height: n } = P(e2);
      $2 = !t3 && i2 !== n || null == i2 ? null != o ? o : S : i2, E2 = !t3 && i2 !== n || null == n ? $2 : n, C2 || ($2 += f2, E2 += f2), C2 = true, e2?.geometry?.extent && "polygon" === e2?.geometry?.type ? (p = [$2, E2], E2 = p[0] > p[1] ? 1e3 * p[1] / p[0] : 1e3, $2 = p[0] > p[1] ? 1e3 : 1e3 * p[0] / p[1], d2.shape = { type: "path", path: j(e2.geometry, $2, E2) }) : d2.shape = t3 ? { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [$2, 0] }, { command: "L", values: [$2, E2] }, { command: "L", values: [0, E2] }, { command: "L", values: [0, 0] }, { command: "Z", values: [] }] } : e.fill[0];
      break;
    }
    case y2: {
      const i2 = Math.min(u(t2.width), a || z), s3 = Math.min(u(t2.height), a || z), { width: r, height: h } = P(e2), c3 = r === h && null != r ? r : null != o ? o : Math.max(i2, s3), m2 = t2.width / t2.height;
      $2 = m2 <= 1 ? Math.ceil(c3 * m2) : c3, E2 = m2 <= 1 ? c3 : Math.ceil(c3 / m2), d2.shape = { type: "image", x: -Math.round($2 / 2), y: -Math.round(E2 / 2), width: $2, height: E2, src: t2.url || "" }, l3 && (U3 = true);
      break;
    }
    case v: {
      const i2 = t2, l4 = e2?.overrideText || i2.text || M, s3 = i2.font, { width: r, height: h } = P(e2), c3 = null != h ? h : null != o ? o : Math.min(u(s3.size), a || z), { width: m2, height: u3 } = B(l4, { weight: s3.weight, size: c3, family: s3.family }), p2 = /[\uE600-\uE6FF]/.test(l4);
      $2 = r ?? (p2 ? c3 : m2), E2 = p2 ? c3 : u3;
      let f3 = 0.5 * (p2 ? c3 : u3);
      p2 && (f3 += 5), d2.shape = { type: "text", text: l4, x: i2.xoffset || 0, y: i2.yoffset || f3, align: "middle", alignBaseline: i2.verticalAlignment, decoration: s3 && s3.decoration, rotated: i2.rotated, kerning: i2.kerning }, d2.font = s3 && { size: c3, style: s3.style, decoration: s3.decoration, weight: s3.weight, family: s3.family };
      break;
    }
  }
  return { shapeDescriptor: d2, size: [$2, E2], outputSize: p, renderOptions: { node: e2?.node, scale: C2, opacity: e2?.opacity, rotations: [l3], useRotationSize: U3, effectView: e2?.effectView, ariaLabel: e2?.ariaLabel, clipBloomEffect: e2?.clipBloomEffect } };
}
function D(t2, e2) {
  return __async(this, null, function* () {
    const { shapeDescriptor: o, size: n, renderOptions: a, outputSize: l3 } = Z(t2, e2);
    if (!o.shape) throw new s("symbolPreview: renderPreviewHTML2D", "symbol not supported.");
    yield E(t2, o), yield U2(t2, o, n, e2);
    const s3 = [[o]];
    if ("object" == typeof e2?.symbolConfig && e2?.symbolConfig?.applyColorModulation) {
      const t3 = 0.6 * n[0];
      s3.unshift([__spreadProps(__spreadValues({}, o), { offset: [-t3, 0], fill: d(o.fill, -0.3) })]), s3.push([__spreadProps(__spreadValues({}, o), { offset: [t3, 0], fill: d(o.fill, 0.3) })]), n[0] += 2 * t3, a.scale = false;
    }
    "text" === t2.type && A(t2, o, s3, n, a);
    const r = l2(s3, n, a);
    if (l3 && r) {
      const t3 = "img" === r.nodeName.toLowerCase() ? r : r.firstChild;
      "svg" === t3.nodeName.toLowerCase() && t3.setAttribute("viewBox", `0 0 ${n[0].toString()} ${n[1].toString()}`), t3.setAttribute("width", l3[0].toString()), t3.setAttribute("height", l3[1].toString()), l3.length > 2 && (t3.style.setProperty("padding-left", l3[2]?.toString() + "px"), t3.style.setProperty("padding-right", l3[2]?.toString() + "px"), t3.style.setProperty("padding-top", l3[3]?.toString() + "px"), t3.style.setProperty("padding-bottom", l3[3]?.toString() + "px"), t3.style.setProperty("box-sizing", "border-box"));
    }
    return r;
  });
}
function q(i, o = C) {
  const n = u2(i), a = y(i), l3 = !n || "type" in n ? null : new l(n), h = a?.color ? new l(a?.color) : null, c2 = l3 ? F(L(l3), o) : null, m = h ? F(L(h), o) : null;
  return m ? c2 ? c2 === m ? c2 : o >= C ? "light" : "dark" : m : c2;
}
export {
  q as getContrastingBackgroundTheme,
  Z as getRenderSymbolParameters,
  D as previewSymbol2D
};
//# sourceMappingURL=chunk-5TUFC2E6.js.map
