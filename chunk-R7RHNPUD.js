import {
  l,
  t,
  u as u2
} from "./chunk-ASSKBLUN.js";
import {
  r as r2
} from "./chunk-UQKFZASE.js";
import "./chunk-2OMOKVI7.js";
import {
  r as r3
} from "./chunk-M3VQABKF.js";
import "./chunk-GI6WJJKW.js";
import {
  d
} from "./chunk-5BPHOAZS.js";
import {
  c,
  f
} from "./chunk-2NCKIQAU.js";
import "./chunk-EOFHL3C5.js";
import "./chunk-NHMMNWPB.js";
import "./chunk-D5HSO267.js";
import "./chunk-VBCXKFWP.js";
import "./chunk-K6ZXT5Q7.js";
import "./chunk-T3JLURCA.js";
import "./chunk-GFLVVUFI.js";
import "./chunk-HKAYCBHM.js";
import {
  u
} from "./chunk-ZIPVJYM7.js";
import "./chunk-7N32VZ4G.js";
import "./chunk-A7D5HX35.js";
import "./chunk-ROJREOS4.js";
import "./chunk-GNCPI2AX.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import "./chunk-72EYURPT.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import {
  w
} from "./chunk-RFGZMFOP.js";
import "./chunk-ZH5LJQAI.js";
import "./chunk-7DSMXWKH.js";
import "./chunk-CJNEK5TE.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-DV7BEHER.js";
import "./chunk-T5MN4FZ3.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-LUIFXDWT.js";
import {
  P
} from "./chunk-XRFOA7QF.js";
import "./chunk-IKPZ63OW.js";
import "./chunk-NQKIL7LC.js";
import "./chunk-6HEET2ON.js";
import "./chunk-OXEAULCD.js";
import "./chunk-VKWEVSRD.js";
import {
  O,
  U
} from "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-42IM5JRX.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-2VUW4ILG.js";
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
import {
  s
} from "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import {
  j
} from "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import {
  b,
  m2 as m
} from "./chunk-QE6WU2QZ.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import "./chunk-BS2W7XFZ.js";
import "./chunk-LADE2ESV.js";
import "./chunk-CDTLZWCX.js";
import "./chunk-AZFJ5Z42.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-TBOXDPPB.js";
import "./chunk-IGNVDP3D.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import {
  i3 as i
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/interactive/snapping/GridSnappingEngine.js
var w2 = class extends b {
  constructor(t2) {
    super(t2), this.options = null;
  }
  destroy() {
    this._set("options", null);
  }
  get grid() {
    return this.view.grid;
  }
  get effectiveViewRotation() {
    return this.grid?.rotateWithMap ? 0 : s(this.view.rotation ?? 0);
  }
  get gridRotation() {
    return s(this.grid?.rotation ?? 0);
  }
  get gridCenter() {
    const { spatialReference: t2, grid: e } = this;
    if (!e || !t2 || !U(e.center.spatialReference, t2)) return null;
    try {
      const r4 = O(e.center, t2), i2 = t2.isWrappable && null != this.view?.center ? P(r4.x, this.view.center.x, t2) : r4.x;
      return f(i2, r4.y, r4.z);
    } catch (i2) {
      return i.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.", i2), null;
    }
  }
  get offsetScaleFactor() {
    const { pixelsPerStride: t2, grid: e } = this;
    if (!e || !t2) return 1;
    const { majorLineInterval: r4, dynamicScaling: i2 } = e;
    return r4 < 1 ? null : l(r4, t2, i2);
  }
  get spatialReference() {
    return this.view.spatialReference;
  }
  get gridMetersPerStride() {
    const { grid: t2 } = this;
    return t2 ? j(t2.spacing, t2.units, "meters") : null;
  }
  get viewMetersPerPixel() {
    const { viewMetersPerSRUnit: t2 } = this;
    return null == t2 ? null : t2 * u(this.view.scale, this.view.spatialReference);
  }
  get viewMetersPerSRUnit() {
    const { spatialReference: t2 } = this.view;
    return this.gridCenter ? u2(this.gridCenter[0], this.gridCenter[1], t2) : null;
  }
  get pixelsPerStride() {
    const { gridMetersPerStride: t2, viewMetersPerPixel: e } = this;
    return e && t2 ? t2 / e : null;
  }
  get updating() {
    return null != this.grid && null != this.spatialReference && null == this.viewMetersPerSRUnit;
  }
  fetchCandidates(t2, e, r4) {
    return __async(this, null, function* () {
      const { options: i2, view: n } = this;
      if (!i2?.effectiveGridEnabled || !n.grid || r4.feature?.attributes && d in r4.feature.attributes) return [];
      const o = r4.coordinateHelper.arrayToPoint(t2), s2 = i2.distance * ("touch" === r4.pointer ? i2.touchSensitivityMultiplier : 1);
      return this.fetchCandidatesSync(o, s2);
    });
  }
  fetchCandidatesSync(t2, e) {
    const r4 = [], { grid: i2, effectiveViewRotation: n, gridRotation: o, gridCenter: s2, viewMetersPerPixel: a2, viewMetersPerSRUnit: c2, offsetScaleFactor: u3, spatialReference: g, gridMetersPerStride: f2, pixelsPerStride: m2 } = this;
    if (!(i2 && a2 && c2 && s2 && g && u3 && f2 && m2)) return r4;
    if (!i2.dynamicScaling && m2 < t) return r4;
    if (!U(t2.spatialReference, g)) return r4;
    const S = O(t2, g), w3 = f(S.x, S.y, S.z), x = P2(w3, -o, s2, -n), C = f2 / c2 * u3, U2 = j2(x, C, s2), { shouldSnapX: b2, shouldSnapY: L } = R(U2, x, e, a2, c2);
    if (!b2 && !L) return [];
    const z = f((b2 ? U2 : x)[0], (L ? U2 : x)[1]), E = P2(z, o, s2, n), F = P2(U2, o, s2, n);
    if (L) {
      const t3 = M(U2, x, C, "y"), e2 = P2(t3, o, s2, n);
      r4.push(new r3({ lineStart: F, lineEnd: e2, targetPoint: E, isDraped: false }));
    }
    if (b2) {
      const t3 = M(U2, x, C, "x"), e2 = P2(t3, o, s2, n);
      r4.push(new r3({ lineStart: F, lineEnd: e2, targetPoint: E, isDraped: false }));
    }
    return b2 && L && r4.push(new r2(E, r4[0], r4[1], false)), r4;
  }
};
r([m({ constructOnly: true })], w2.prototype, "view", void 0), r([m()], w2.prototype, "options", void 0), r([m()], w2.prototype, "grid", null), r([m()], w2.prototype, "effectiveViewRotation", null), r([m()], w2.prototype, "gridRotation", null), r([m()], w2.prototype, "gridCenter", null), r([m()], w2.prototype, "offsetScaleFactor", null), r([m()], w2.prototype, "spatialReference", null), r([m()], w2.prototype, "gridMetersPerStride", null), r([m()], w2.prototype, "viewMetersPerPixel", null), r([m()], w2.prototype, "viewMetersPerSRUnit", null), r([m()], w2.prototype, "pixelsPerStride", null), r([m()], w2.prototype, "updating", null), w2 = r([a("esri.views.interactive.snapping.GridSnappingEngine")], w2);
var P2 = (t2, e, r4, i2) => {
  const n = c(t2[0], t2[1], t2[2]);
  return w(n, w(n, n, r4, e), r4, i2);
};
var j2 = (t2, e, r4) => {
  const i2 = (t2[0] - r4[0]) / e, n = (t2[1] - r4[1]) / e, o = Math.trunc(i2), s2 = Math.trunc(n), a2 = Math.round(i2 % 1), p = Math.round(n % 1), l2 = r4[0] + (o + a2) * e, c2 = r4[1] + (s2 + p) * e;
  return f(l2, c2);
};
var R = (t2, e, r4, i2, n) => {
  if (i2 <= 0) return { shouldSnapX: false, shouldSnapY: false };
  const o = (t2[0] - e[0]) / i2, s2 = (t2[1] - e[1]) / i2;
  return { shouldSnapX: Math.abs(o * n) < r4, shouldSnapY: Math.abs(s2 * n) < r4 };
};
var M = (t2, e, r4, i2) => {
  if ("y" === i2) {
    const i3 = e[0] > t2[0] ? 1 : -1;
    return f(t2[0] + r4 * i3, t2[1]);
  }
  const n = e[1] > t2[1] ? 1 : -1;
  return f(t2[0], t2[1] + r4 * n);
};
export {
  w2 as GridSnappingEngine
};
//# sourceMappingURL=chunk-R7RHNPUD.js.map
