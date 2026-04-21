import {
  b
} from "./chunk-N5GWIJHB.js";
import {
  g
} from "./chunk-JR5QXMYP.js";
import "./chunk-QFKNOMU7.js";
import "./chunk-UWGRB6MP.js";
import "./chunk-MIVT6TAB.js";
import "./chunk-CQ25WBTL.js";
import "./chunk-4PDLXIV3.js";
import "./chunk-CTUUCM6Q.js";
import "./chunk-BPQG72PU.js";
import "./chunk-WAKNM5QU.js";
import "./chunk-XZLUABZJ.js";
import "./chunk-7RKFG5YX.js";
import {
  h,
  j,
  v
} from "./chunk-JPVVDYQ3.js";
import {
  E,
  U,
  it
} from "./chunk-HKAYCBHM.js";
import "./chunk-A7D5HX35.js";
import "./chunk-ROJREOS4.js";
import "./chunk-GNCPI2AX.js";
import "./chunk-XY257PCG.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import "./chunk-72EYURPT.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import {
  p,
  q,
  u
} from "./chunk-RFGZMFOP.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import {
  n,
  t
} from "./chunk-VY2R5MU5.js";
import "./chunk-QW76BD55.js";
import "./chunk-SDPHKB3N.js";
import {
  a2 as a
} from "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import {
  r
} from "./chunk-C5HHJVCI.js";
import "./chunk-RG4KFLVA.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-VM6IFKNK.js";
import {
  s
} from "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/sceneLayerSnappingUtils.js
var t2 = 1e3;
function a2(t3, a3, e) {
  const f2 = E(), m = U(f2);
  return q(m, m, t3, 0.5), q(m, m, a3, 0.5), f2[3] = p(m, t3), u(m, m, e), f2;
}

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js
var f = class {
  constructor() {
    this._idToComponent = /* @__PURE__ */ new Map(), this._components = new b(((e) => e.bounds)), this._edges = new b(((e) => e.bounds)), this._tmpLineSegment = v(), this._tmpP1 = n(), this._tmpP2 = n(), this._tmpP3 = n(), this.remoteClient = null;
  }
  fetchCandidates(e, o) {
    return __async(this, null, function* () {
      yield Promise.resolve(), s(o), yield this._ensureEdgeLocations(e, o);
      const s2 = [];
      return this._edges.forEachNeighbor(((t3) => (this._addCandidates(e, t3, s2), s2.length < t2)), e.bounds), { result: { candidates: s2 } };
    });
  }
  _ensureEdgeLocations(e, t3) {
    return __async(this, null, function* () {
      const o = [];
      if (this._components.forEachNeighbor(((e2) => {
        if (null == e2.info) {
          const { id: t4, uid: s3 } = e2;
          o.push({ id: t4, uid: s3 });
        }
        return true;
      }), e.bounds), !o.length) return;
      const s2 = { components: o }, n2 = yield this.remoteClient.invoke("fetchAllEdgeLocations", s2, t3 ?? {});
      for (const i of n2.components) this._setFetchEdgeLocations(i);
    });
  }
  add(e) {
    return __async(this, null, function* () {
      const t3 = new j2(e.id, e.bounds);
      return this._idToComponent.set(t3.id, t3), this._components.add([t3]), { result: {} };
    });
  }
  remove(e) {
    return __async(this, null, function* () {
      const t3 = this._idToComponent.get(e.id);
      if (t3) {
        const e2 = [];
        this._edges.forEachNeighbor(((o) => (o.component === t3 && e2.push(o), true)), t3.bounds), this._edges.remove(e2), this._components.remove([t3]), this._idToComponent.delete(t3.id);
      }
      return { result: {} };
    });
  }
  _setFetchEdgeLocations(e) {
    const t3 = this._idToComponent.get(e.id);
    if (null == t3 || e.uid !== t3.uid) return;
    const o = g.createView(e.locations), s2 = new Array(o.count), n2 = n(), r2 = n();
    for (let i = 0; i < o.count; i++) {
      o.position0.getVec(i, n2), o.position1.getVec(i, r2);
      const c2 = a2(n2, r2, e.origin), d2 = new w(t3, i, c2);
      s2[i] = d2;
    }
    this._edges.add(s2);
    const { objectIds: c, origin: d } = e;
    t3.info = { locations: o, objectIds: c, origin: d };
  }
  _addCandidates(e, t3, o) {
    const { info: n2 } = t3.component, { origin: i, objectIds: r2 } = n2, c = n2.locations, d = c.position0.getVec(t3.index, this._tmpP1), a3 = c.position1.getVec(t3.index, this._tmpP2);
    u(d, d, i), u(a3, a3, i);
    const p2 = r2[c.componentIndex.get(t3.index)];
    this._addEdgeCandidate(e, p2, d, a3, o), b2(e, p2, d, o), b2(e, p2, a3, o);
  }
  _addEdgeCandidate(e, t3, o, s2, i) {
    if (!e.returnEdge) return;
    const c = U(e.bounds), u2 = h(o, s2, this._tmpLineSegment), h2 = j(u2, c, this._tmpP3);
    it(e.bounds, h2) && i.push({ type: "edge", objectId: t3, target: t(h2), distance: p(c, h2), start: t(o), end: t(s2) });
  }
};
f = r([a("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], f);
var _ = f;
function b2(e, t3, o, s2) {
  if (!e.returnVertex || !it(e.bounds, o)) return;
  const i = U(e.bounds);
  s2.push({ type: "vertex", objectId: t3, target: t(o), distance: p(i, o) });
}
var _j = class _j {
  constructor(e, t3) {
    this.id = e, this.bounds = t3, this.info = null, this.uid = ++_j.uid;
  }
};
_j.uid = 0;
var j2 = _j;
var w = class {
  constructor(e, t3, o) {
    this.component = e, this.index = t3, this.bounds = o;
  }
};
export {
  _ as default
};
//# sourceMappingURL=chunk-ITLYST5F.js.map
