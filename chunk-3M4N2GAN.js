import {
  g as g2,
  g2 as g3
} from "./chunk-PSJ5YEJN.js";
import {
  n as n3,
  o as o3,
  p as p4,
  s as s3
} from "./chunk-XWTKPICM.js";
import "./chunk-4PTZUQN5.js";
import {
  p as p3
} from "./chunk-X6UA2ZEU.js";
import {
  M,
  y
} from "./chunk-OSJ6EHJS.js";
import "./chunk-COZFY632.js";
import {
  r as r3
} from "./chunk-M3VQABKF.js";
import "./chunk-GI6WJJKW.js";
import {
  E as E2,
  Et,
  J,
  g,
  j as j4
} from "./chunk-5BPHOAZS.js";
import {
  E2 as E,
  I,
  N,
  N2,
  a as a2,
  d as d2,
  j as j3,
  p as p2,
  s as s2
} from "./chunk-2NCKIQAU.js";
import "./chunk-EOFHL3C5.js";
import "./chunk-NHMMNWPB.js";
import "./chunk-D5HSO267.js";
import "./chunk-VBCXKFWP.js";
import "./chunk-K6ZXT5Q7.js";
import {
  f,
  o as o2
} from "./chunk-6Z6IVRJF.js";
import {
  j as j2
} from "./chunk-T3JLURCA.js";
import {
  r as r2,
  s
} from "./chunk-UGDODU6O.js";
import "./chunk-EVANVQVU.js";
import "./chunk-GFLVVUFI.js";
import "./chunk-HKAYCBHM.js";
import "./chunk-7N32VZ4G.js";
import "./chunk-A7D5HX35.js";
import "./chunk-ROJREOS4.js";
import "./chunk-GNCPI2AX.js";
import "./chunk-2JXAQB6C.js";
import "./chunk-YVKWL3MD.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import "./chunk-72EYURPT.js";
import {
  _,
  b as b2,
  d,
  e,
  j,
  m as m2,
  p
} from "./chunk-X6QLSTNN.js";
import {
  n as n2
} from "./chunk-DE5G7AIG.js";
import {
  c,
  o,
  q
} from "./chunk-RFGZMFOP.js";
import "./chunk-ZH5LJQAI.js";
import "./chunk-7DSMXWKH.js";
import "./chunk-CJNEK5TE.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-DV7BEHER.js";
import "./chunk-T5MN4FZ3.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-LUIFXDWT.js";
import "./chunk-6HEET2ON.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-42IM5JRX.js";
import "./chunk-ML2Q6ZHW.js";
import "./chunk-OE6U6P6Y.js";
import {
  V
} from "./chunk-FXVZ2Z5Z.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import {
  n
} from "./chunk-VY2R5MU5.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import {
  Z
} from "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-CSENQMWZ.js";
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
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/interactive/snapping/SnappingAlgorithm.js
var l = class {
  constructor(e2, t) {
    this.view = e2, this.options = t, this.squaredShortLineThreshold = p3.shortLineThreshold * p3.shortLineThreshold;
  }
  snap(e2, t) {
    return null != t.vertexHandle ? "vertex" !== t.vertexHandle.type ? [] : this.snapExistingVertex(e2, t) : this.snapNewVertex(e2, t);
  }
  edgeExceedsShortLineThreshold(e2, t) {
    return this.exceedsShortLineThreshold(N(e2.leftVertex.pos, this.view, t), N(e2.rightVertex.pos, this.view, t), t);
  }
  exceedsShortLineThreshold(e2, t, { spatialReference: s4 }) {
    return 0 === this.squaredShortLineThreshold || g(s3(t, s4, j2, this.view), s3(e2, s4, j2, this.view)) > this.squaredShortLineThreshold;
  }
  isVertical(r4, s4, { spatialReference: h3 }) {
    const n4 = Z(h3);
    return m2(s2(r4), s2(s4)) * n4 < p3.verticalLineThresholdMeters;
  }
  squaredProximityThreshold(e2) {
    return "touch" === e2 ? this._squaredTouchProximityThreshold : this._squaredMouseProximityThreshold;
  }
  get _squaredMouseProximityThreshold() {
    return this.options.distance * this.options.distance;
  }
  get _squaredTouchProximityThreshold() {
    const { distance: e2, touchSensitivityMultiplier: t } = this.options, r4 = e2 * t;
    return r4 * r4;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/LineSnapper.js
var E3 = class extends l {
  constructor(e2, t, s4) {
    super(e2, t), this._geodesicLengthMeasurementUtils = s4;
  }
  snapNewVertex(e2, t) {
    const s4 = t.editGeometryOperations.data.components[0], r4 = s4.edges.length, i = [];
    if (r4 < 1) return i;
    const { spatialReference: n4 } = t, a3 = s3(e2, n4, j2, this.view), { view: d3 } = this, l2 = s4.edges[r4 - 1];
    let h3 = l2;
    do {
      if (this.edgeExceedsShortLineThreshold(h3, t)) {
        const s5 = j4(h3, d3, t);
        this._processCandidateProposal(s5.left, s5.right, e2, a3, t, i);
      }
      h3 = h3.leftVertex.leftEdge;
    } while (h3 && h3 !== l2);
    return i;
  }
  snapExistingVertex(e2, t) {
    const s4 = [], r4 = t.vertexHandle, i = r4.component;
    if (i.edges.length < 2) return s4;
    const { view: a3 } = this, { spatialReference: d3 } = t, l2 = s3(e2, d3, j2, a3), h3 = r4.leftEdge, c2 = r4.rightEdge;
    h3 && c2 && this.edgeExceedsShortLineThreshold(h3, t) && this.edgeExceedsShortLineThreshold(c2, t) && this._processCandidateProposal(N(h3.leftVertex.pos, a3, t), N(c2.rightVertex.pos, a3, t), e2, l2, t, s4);
    const f4 = i.edges[0];
    let m4 = f4;
    do {
      if (m4 !== r4.leftEdge && m4 !== r4.rightEdge && this.edgeExceedsShortLineThreshold(m4, t)) {
        const r5 = j4(m4, a3, t);
        this._processCandidateProposal(r5.left, r5.right, e2, l2, t, s4);
      }
      m4 = m4.rightVertex.rightEdge;
    } while (m4 && m4 !== f4);
    return s4;
  }
  _processCandidateProposal(e2, t, s4, r4, n4, l2) {
    const { spatialReference: p5, pointer: f4 } = n4, m4 = n();
    j5(m4, e2, t, s4, n4, this._geodesicLengthMeasurementUtils);
    const u2 = p2(a2(m4));
    g(r4, s3(u2, p5, j2, this.view)) < this.squaredProximityThreshold(f4) && l2.push(new r3({ lineStart: e2, lineEnd: t, targetPoint: u2, isDraped: "on-the-ground" === n4.elevationInfo?.mode }));
  }
};
function j5(e2, t, s4, r4, i, o4) {
  v(e2, t, s4, r4, i, o4) || w(e2, r4, t, s4);
}
function v(i, o4, n4, a3, { spatialReference: d3 }, l2) {
  const p5 = y(o4, n4, d3, d3);
  if (null == p5) return false;
  const h3 = y(n4, a3, d3, d3);
  if (null == h3) return false;
  const c2 = l2.geodesicDistance(n4, a3, d3);
  if (null == c2) return false;
  const g4 = Math.abs(s.shortestSignedDiff(p5, h3)) > Math.PI / 2 ? r2.normalize(p5 + Math.PI) : p5;
  return M(i, n4, d3, f(c2, "meters"), o2(g4, "radians", "geographic"), "geodesic"), i[2] = a3[2], true;
}
function w(e2, t, s4, r4) {
  J(t, { start: s4, end: r4, type: j3.LINE }, e2), e2[2] = t[2];
}

// node_modules/@arcgis/core/views/interactive/snapping/ParallelLineSnapper.js
var f2 = class extends l {
  snapNewVertex(e2, t) {
    const s4 = t.editGeometryOperations.data.components[0], o4 = s4.edges.length, n4 = s4.vertices.length, l2 = [];
    if (o4 < 2) return l2;
    const { view: a3 } = this, h3 = s3(e2, t.spatialReference, j2, a3), d3 = N(s4.vertices[n4 - 1].pos, a3, t), g4 = N(s4.vertices[0].pos, a3, t), f4 = s4.edges[o4 - 1];
    let m4 = f4;
    do {
      if (this.edgeExceedsShortLineThreshold(m4, t)) {
        const r4 = j4(m4, a3, t);
        this._checkEdgeForParallelLines(r4, d3, e2, h3, t, l2), this._checkEdgeForParallelLines(r4, g4, e2, h3, t, l2);
      }
      m4 = m4.leftVertex.leftEdge;
    } while (m4 && m4 !== f4);
    return l2;
  }
  snapExistingVertex(e2, t) {
    const s4 = [], o4 = t.vertexHandle, n4 = o4.component;
    if (n4.edges.length < 3) return s4;
    const { view: l2 } = this, a3 = s3(e2, t.spatialReference, j2, l2), h3 = o4.leftEdge, d3 = o4.rightEdge, g4 = n4.vertices[0], f4 = N(g4.pos, l2, t), m4 = n4.vertices.length, u2 = n4.vertices[m4 - 1], v2 = N(u2.pos, l2, t), x = n4.edges[0];
    let E4 = x;
    do {
      if (E4 !== h3 && E4 !== d3 && this.edgeExceedsShortLineThreshold(E4, t)) {
        const r4 = j4(E4, l2, t);
        h3 && this._checkEdgeForParallelLines(r4, N(h3.leftVertex.pos, l2, t), e2, a3, t, s4), d3 && this._checkEdgeForParallelLines(r4, N(d3.rightVertex.pos, l2, t), e2, a3, t, s4), o4 === g4 ? this._checkEdgeForParallelLines(r4, v2, e2, a3, t, s4) : o4 === u2 && this._checkEdgeForParallelLines(r4, f4, e2, a3, t, s4);
      }
      E4 = E4.rightVertex.rightEdge;
    } while (E4 && E4 !== x);
    return s4;
  }
  _checkEdgeForParallelLines(t, i, a3, c2, f4, v2) {
    const x = t.left, E4 = t.right;
    if (I(u, s2(i), s2(x), s2(E4)), b2(u, s2(i)) < p3.parallelLineThreshold) return;
    I(u, s2(a3), s2(x), s2(E4), s2(i));
    const { spatialReference: L, pointer: P2 } = f4, j6 = p2(d2(u[0], u[1], a3[2]));
    if (g(c2, s3(j6, L, j2, this.view)) < this.squaredProximityThreshold(P2)) {
      if (this.isVertical(j6, i, f4) || this.isVertical(x, E4, f4)) return;
      if (m3(t, v2)) return;
      v2.push(new g2({ referenceLine: t, lineStart: i, targetPoint: j6, isDraped: "on-the-ground" === f4.elevationInfo?.mode }));
    }
  }
};
function m3(t, r4) {
  const i = t.left, o4 = t.right;
  for (const n4 of r4) if (I(u, s2(o4), s2(n4.constraint.start), s2(n4.constraint.end), s2(i)), b2(u, s2(o4)) < p3.parallelLineThreshold) return n4.addReferenceLine(t), true;
  return false;
}
var u = n2();

// node_modules/@arcgis/core/views/interactive/snapping/RightAngleSnapper.js
var y2 = class extends l {
  constructor(e2, t, i) {
    super(e2, t), this._geodesicLengthMeasurementUtils = i;
  }
  snapNewVertex(e2, t) {
    const i = t.editGeometryOperations.data.components[0], r4 = [];
    if (i.vertices.length < 2) return r4;
    const { view: s4 } = this, n4 = s3(e2, t.spatialReference, j2, s4), o4 = i.vertices.at(-1);
    this._checkForSnappingCandidate(p4.LastVertex, r4, o4.leftEdge, o4, o4.leftEdge.leftVertex, e2, n4, t);
    const a3 = i.vertices[0];
    return this._checkForSnappingCandidate(p4.FirstVertex, r4, a3.rightEdge, a3, a3.rightEdge.rightVertex, e2, n4, t), r4;
  }
  snapExistingVertex(e2, t) {
    const i = [], r4 = t.vertexHandle;
    if (r4.component.vertices.length < 3) return i;
    const { view: s4 } = this, n4 = s3(e2, t.spatialReference, j2, s4), o4 = r4.leftEdge, a3 = r4.rightEdge;
    if (o4?.leftVertex.leftEdge) {
      const r5 = o4.leftVertex.leftEdge;
      this._checkForSnappingCandidate(p4.ExistingEdge, i, r5, r5.rightVertex, r5.leftVertex, e2, n4, t);
    }
    if (a3?.rightVertex.rightEdge) {
      const r5 = a3.rightVertex.rightEdge;
      this._checkForSnappingCandidate(p4.ExistingEdge, i, r5, r5.leftVertex, r5.rightVertex, e2, n4, t);
    }
    return i;
  }
  _checkForSnappingCandidate(e2, t, i, r4, s4, n4, o4, a3) {
    if (!this.edgeExceedsShortLineThreshold(i, a3)) return;
    const c2 = this.view, p5 = N(r4.pos, c2, a3), g4 = N(s4.pos, c2, a3);
    F(P, g4, p5, n4, a3, this._geodesicLengthMeasurementUtils), this._checkForSnappingCandidateAlongProjectedRay(e2, t, g4, p5, P, n4, o4, a3);
  }
  _checkForSnappingCandidateAlongProjectedRay(e2, t, i, a3, p5, g4, f4, E4) {
    const { spatialReference: j6, pointer: _2 } = E4, w2 = e(M2, s2(g4), s2(a3)), y3 = j(p5, w2) / p(p5), F2 = d(M2, s2(a3), p5, y3), R2 = p2(d2(F2[0], F2[1], g4[2]));
    if (g(f4, s3(R2, j6, j2, this.view)) > this.squaredProximityThreshold(_2) || this.isVertical(R2, a3, E4) || this.isVertical(a3, i, E4)) return;
    const U2 = q(n(), a3, p5, Math.sign(y3));
    t.push(new n3({ targetPoint: R2, constraint: new Et(a3, a2(U2)), previousVertex: i, otherVertex: a3, otherVertexType: o3.CENTER, selfSnappingType: e2, isDraped: "on-the-ground" === E4.elevationInfo?.mode }));
  }
};
function F(e2, t, i, r4, s4, n4) {
  R(e2, t, i, r4, s4, n4) || U(e2, t, i);
}
function R(r4, s4, n4, o4, { spatialReference: a3 }, c2) {
  const g4 = y(s4, n4, a3, a3);
  if (null == g4) return false;
  const d3 = y(n4, o4, a3, a3);
  if (null == d3) return false;
  const l2 = Math.sign(r2.shortestSignedDiff(g4, d3)) * Math.PI * 0.5, f4 = o2(g4 + l2, "radians", "geographic"), m4 = n(), u2 = c2.geodesicDistance(n4, o4, a3);
  return null != u2 && (M(m4, n4, a3, f(u2, "meters"), f4, "geodesic"), c(r4, m4, n4), true);
}
function U(e2, t, i) {
  const s4 = e(M2, s2(i), s2(t));
  o(e2, s4[1], -s4[0], 0);
}
var M2 = n2();
var P = n();

// node_modules/@arcgis/core/views/interactive/snapping/RightAngleTriangleSnapper.js
var h = class extends l {
  snapNewVertex(e2, t) {
    const i = t.editGeometryOperations.data.components[0], r4 = [], s4 = i.vertices.length;
    if ("polygon" !== t.editGeometryOperations.data.type || s4 < 2) return r4;
    const { view: n4 } = this, p5 = i.vertices[0], a3 = i.vertices[s4 - 1], d3 = N(p5.pos, n4, t), l2 = N(a3.pos, n4, t);
    return this._processCandidateProposal(d3, l2, e2, t, r4), r4;
  }
  snapExistingVertex(e2, t) {
    const i = [], r4 = t.vertexHandle, s4 = r4.component;
    if (s4.edges.length < 2) return i;
    if ("polyline" === t.editGeometryOperations.data.type && (0 === r4.index || r4.index === s4.vertices.length - 1)) return i;
    const { view: n4 } = this, p5 = N(r4.leftEdge.leftVertex.pos, n4, t), a3 = N(r4.rightEdge.rightVertex.pos, n4, t);
    return this._processCandidateProposal(p5, a3, e2, t, i), i;
  }
  _processCandidateProposal(i, o4, a3, h3, g4) {
    if (!this.exceedsShortLineThreshold(i, o4, h3)) return;
    const v2 = _(f3, s2(i), s2(o4), 0.5), x = 0.5 * m2(s2(i), s2(o4)), u2 = N2(f3, s2(a3), v2, x), j6 = p2(d2(u2[0], u2[1], a3[2])), { spatialReference: y3, pointer: w2 } = h3, P2 = s3(a3, y3, j2, this.view);
    if (g(P2, s3(j6, y3, j2, this.view)) < this.squaredProximityThreshold(w2)) {
      if (this.isVertical(i, j6, h3) || this.isVertical(j6, o4, h3)) return;
      g4.push(new g3({ targetPoint: j6, point1: i, point2: o4, isDraped: "on-the-ground" === h3.elevationInfo?.mode }));
    }
  }
};
var f3 = n2();

// node_modules/@arcgis/core/views/interactive/snapping/SelfSnappingEngine.js
var h2 = class extends b {
  constructor(s4) {
    super(s4), this.updating = false, this._snappers = new V(), this._domain = E.SELF;
  }
  initialize() {
    this._snappers.push(new f2(this.view, this.options), new E3(this.view, this.options, this.geodesicLengthMeasurementUtils), new y2(this.view, this.options, this.geodesicLengthMeasurementUtils), new h(this.view, this.options));
  }
  set options(s4) {
    this._set("options", s4);
    for (const o4 of this._snappers) o4.options = s4;
  }
  fetchCandidates(s4, o4, t) {
    return __async(this, null, function* () {
      if (!(o4 & this._domain && this.options.effectiveSelfEnabled)) return [];
      const e2 = [];
      for (const i of this._snappers.items) for (const o5 of i.snap(s4, t)) e2.push(o5);
      return E2(s4, e2), e2;
    });
  }
};
r([m({ readOnly: true })], h2.prototype, "updating", void 0), r([m({ constructOnly: true })], h2.prototype, "view", void 0), r([m({ constructOnly: true })], h2.prototype, "geodesicLengthMeasurementUtils", void 0), r([m()], h2.prototype, "options", null), h2 = r([a("esri.views.interactive.snapping.SelfSnappingEngine")], h2);
export {
  h2 as SelfSnappingEngine
};
//# sourceMappingURL=chunk-3M4N2GAN.js.map
