import {
  L,
  M,
  N
} from "./chunk-7NSIT6VC.js";
import {
  e2 as e
} from "./chunk-7X4IPKG2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/widgets/Legend/styles/support/relationshipUtils.js
var b = "esri-relationship-ramp";
var u = `${b}--diamond`;
var c = `${b}--square`;
var p = { diamondContainer: `${u}__container`, diamondLeftCol: `${u}__left-column`, diamondRightCol: `${u}__right-column`, diamondMidCol: `${u}__middle-column`, diamondMidColLabel: `${u}__middle-column--label`, diamondMidColRamp: `${u}__middle-column--ramp`, squareTable: `${c}__table`, squareTableRow: `${c}__table-row`, squareTableCell: `${c}__table-cell`, squareTableLabel: `${c}__table-label`, squareTableLabelLeftBottom: `${c}__table-label--left-bottom`, squareTableLabelRightBottom: `${c}__table-label--right-bottom`, squareTableLabelLeftTop: `${c}__table-label--left-top`, squareTableLabelRightTop: `${c}__table-label--right-top` };

// node_modules/@arcgis/core/symbols/support/symbolUtils.js
function L4(e3) {
  return e3 && "opacity" in e3 ? e3.opacity * L4(e3.parent) : 1;
}
function x(e3, t2) {
  return __async(this, null, function* () {
    if (!e3) return;
    const a2 = e3.sourceLayer, i2 = (null != t2 && t2.useSourceLayer ? a2 : e3.layer) ?? a2, r = t2?.ignoreOpacity ? 1 : L4(i2);
    if (null != e3.symbol && (null == t2 || true !== t2.ignoreGraphicSymbol)) {
      const l2 = "web-style" === e3.symbol.type ? yield e3.symbol.fetchSymbol(__spreadProps(__spreadValues({}, t2), { acceptedFormats: t2?.webStyleAcceptedFormats, cache: t2?.webStyleCache })) : e3.symbol.clone();
      return L(l2, null, r), l2;
    }
    const s = t2?.renderer ?? C(i2);
    let u3 = s && "getSymbolAsync" in s ? yield s.getSymbolAsync(e3, t2) : null;
    if (!u3) return;
    if (u3 = "web-style" === u3.type ? yield u3.fetchSymbol(__spreadProps(__spreadValues({}, t2), { acceptedFormats: t2?.webStyleAcceptedFormats, cache: t2?.webStyleCache })) : u3.clone(), !s || !("visualVariables" in s) || !s.visualVariables?.length) return L(u3, null, r), u3;
    if ("arcadeRequiredForVisualVariables" in s && s.arcadeRequiredForVisualVariables && null == t2?.arcade) {
      const e4 = __spreadValues({}, t2);
      e4.arcade = yield e(), t2 = e4;
    }
    const { getColor: f, getOpacity: p3, getAllSizes: y2, getRotationAngle: h2 } = yield import("./chunk-3MYPICZM.js"), m = [], b2 = [], d = [], g = [];
    for (const l2 of s.visualVariables) switch (l2.type) {
      case "color":
        m.push(l2);
        break;
      case "opacity":
        b2.push(l2);
        break;
      case "rotation":
        g.push(l2);
        break;
      case "size":
        l2.target || d.push(l2);
    }
    const w2 = !!m.length && m[m.length - 1], S2 = w2 ? f(w2, e3, t2) : null, v3 = !!b2.length && b2[b2.length - 1];
    let V = v3 ? p3(v3, e3, t2) : null;
    if (null != r && (V = null != V ? V * r : r), t2?.ignoreOpacity && (V = 1), null != S2 && v3 && null != V && (S2.a = 1), L(u3, S2, V), d.length && true !== t2?.ignoreSizeVariables) {
      const l2 = y2(d, e3, t2);
      yield M(u3, l2);
    }
    if (true !== t2?.ignoreRotationVariables) for (const l2 of g) N(u3, h2(l2, e3, t2), l2.axis);
    return u3;
  });
}
function C(e3) {
  if (e3) return "renderer" in e3 ? e3.renderer : void 0;
}

export {
  x
};
//# sourceMappingURL=chunk-YRCLB2DY.js.map
