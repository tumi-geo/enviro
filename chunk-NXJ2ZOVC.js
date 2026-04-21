import {
  r as r3
} from "./chunk-MTWHTXSZ.js";
import "./chunk-HNYFX443.js";
import {
  h as h2
} from "./chunk-2YN3XZOT.js";
import {
  t
} from "./chunk-EXLCW3WT.js";
import {
  f
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
  r as r2
} from "./chunk-V7UPP474.js";
import "./chunk-GI6WJJKW.js";
import "./chunk-5BPHOAZS.js";
import {
  a as a3,
  p
} from "./chunk-2NCKIQAU.js";
import "./chunk-EOFHL3C5.js";
import "./chunk-NHMMNWPB.js";
import "./chunk-D5HSO267.js";
import "./chunk-VBCXKFWP.js";
import "./chunk-K6ZXT5Q7.js";
import "./chunk-T3JLURCA.js";
import "./chunk-GFLVVUFI.js";
import {
  V
} from "./chunk-HKAYCBHM.js";
import "./chunk-MZUMJDHL.js";
import "./chunk-L4AJJTF2.js";
import "./chunk-7N32VZ4G.js";
import "./chunk-A7D5HX35.js";
import "./chunk-ROJREOS4.js";
import "./chunk-GNCPI2AX.js";
import "./chunk-XY257PCG.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import "./chunk-72EYURPT.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import "./chunk-RFGZMFOP.js";
import {
  h
} from "./chunk-5NORWNRZ.js";
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
import "./chunk-ZSMW3U4K.js";
import "./chunk-42IM5JRX.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-2VUW4ILG.js";
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
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-Q4ZBFQUV.js";
import "./chunk-AQ5AB5ZX.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-WLCZHZ7R.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import {
  b,
  m2
} from "./chunk-QE6WU2QZ.js";
import {
  a2
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
import {
  c,
  c3 as c2,
  e2 as e,
  l2 as l,
  s
} from "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import {
  L,
  a,
  m2 as m
} from "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeWorkerHandle.js
var a4 = class extends h2 {
  constructor(e2) {
    super("EdgeProcessingWorker", "extract", { extract: (e3) => [e3.dataBuffer], extractComponentsEdgeLocations: (e3) => [e3.dataBuffer], extractEdgeLocations: (e3) => [e3.dataBuffer] }, e2);
  }
  process(e2, t2, r4) {
    return __async(this, null, function* () {
      if (r4) return f(e2);
      return i(yield this.invoke(new o(e2), t2));
    });
  }
  extractEdgeLocations(e2, t2) {
    return __async(this, null, function* () {
      const r4 = yield this.invokeMethod("extractEdgeLocations", new o(e2), t2);
      return t(r4);
    });
  }
  extractComponentsEdgeLocations(e2, t2) {
    return __async(this, null, function* () {
      const r4 = yield this.invokeMethod("extractComponentsEdgeLocations", new o(e2), t2);
      return t(r4);
    });
  }
};
function i(e2) {
  return { regular: { instancesData: t(e2.regular.instancesData), lodInfo: { lengths: new Float32Array(e2.regular.lodInfo.lengths) } }, silhouette: { instancesData: t(e2.silhouette.instancesData), lodInfo: { lengths: new Float32Array(e2.silhouette.lodInfo.lengths) } }, averageEdgeLength: e2.averageEdgeLength };
}
var o = class {
  constructor(r4) {
    this.dataBuffer = r4.data.buffer, this.writerSettings = r4.writerSettings, this.skipDeduplicate = r4.skipDeduplicate, this.indices = m(r4.indices) ? r4.indices.buffer : r4.indices, this.indicesType = m(r4.indices) ? a(r4.indices) ? "Uint32Array" : "Uint16Array" : "Array", this.indicesLength = r4.indicesLength;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorkerHandle.js
var l2 = class extends b {
  constructor(e2) {
    super(e2), this.availability = 0, this._ids = /* @__PURE__ */ new Set();
  }
  destroy() {
    this._workerHandle.destroy(), this._workerHandle = null;
  }
  initialize() {
    this._workerHandle = new h3(this.schedule, { fetchAllEdgeLocations: (e2, t2) => this._fetchAllEdgeLocations(e2, t2) });
  }
  fetchCandidates(e2, t2) {
    return __async(this, null, function* () {
      const r4 = e2.coordinateHelper, { point: o2 } = e2, s2 = u;
      this.renderCoordsHelper.toRenderCoords(o2, r4.spatialReference, s2);
      const n2 = e2.distance, a5 = "number" == typeof n2 ? n2 : n2.distance, d = yield this._workerHandle.invoke({ bounds: V(s2[0], s2[1], s2[2], a5), returnEdge: e2.returnEdge, returnVertex: "none" !== e2.vertexMode }, t2);
      return d.candidates.sort(((e3, t3) => e3.distance - t3.distance)), d.candidates.map(((e3) => this._convertCandidate(r4, e3)));
    });
  }
  add(e2, t2) {
    return __async(this, null, function* () {
      this._ids.add(e2.id), yield this._workerHandle.invokeMethod("add", e2, t2);
    });
  }
  remove(e2, t2) {
    return __async(this, null, function* () {
      this._ids.delete(e2.id), yield this._workerHandle.invokeMethod("remove", e2, t2);
    });
  }
  _convertCandidate(e2, t2) {
    switch (t2.type) {
      case "edge":
        return new r2({ objectId: t2.objectId, targetPoint: p(this._convertRenderCoordinate(e2, t2.target)), edgeStart: this._convertRenderCoordinate(e2, t2.start), edgeEnd: this._convertRenderCoordinate(e2, t2.end), isDraped: false });
      case "vertex":
        return new r3({ objectId: t2.objectId, targetPoint: p(this._convertRenderCoordinate(e2, t2.target)), isDraped: false });
    }
  }
  _convertRenderCoordinate({ spatialReference: e2 }, t2) {
    const r4 = n();
    return this.renderCoordsHelper.fromRenderCoords(t2, r4, e2), a3(r4);
  }
  _fetchAllEdgeLocations(e2, t2) {
    return __async(this, null, function* () {
      const r4 = [], o2 = [];
      for (const { id: s2, uid: n2 } of e2.components) this._ids.has(s2) && r4.push((() => __async(this, null, function* () {
        const e3 = yield this.fetchEdgeLocations(s2, t2.signal), r5 = e3.locations.buffer;
        return o2.push(r5), { id: s2, uid: n2, objectIds: e3.objectIds, locations: r5, origin: e3.origin, type: e3.type };
      }))());
      return { result: { components: (yield Promise.all(r4)).filter((({ id: e3 }) => this._ids.has(e3))) }, transferList: o2 };
    });
  }
};
r([m2({ constructOnly: true })], l2.prototype, "renderCoordsHelper", void 0), r([m2({ constructOnly: true })], l2.prototype, "fetchEdgeLocations", void 0), r([m2({ constructOnly: true })], l2.prototype, "schedule", void 0), r([m2({ readOnly: true })], l2.prototype, "availability", void 0), l2 = r([a2("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")], l2);
var h3 = class extends h2 {
  constructor(e2, t2) {
    super("SceneLayerSnappingSourceWorker", "fetchCandidates", {}, e2, { strategy: "dedicated", client: t2 });
  }
};
var u = n();

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/I3SSnappingSource.js
var p2 = class extends b {
  get updating() {
    return this._updatingHandles.updating;
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._updatingHandles = new h(), this._abortController = new AbortController();
  }
  destroy() {
    this._tracker = l(this._tracker), this._abortController = e(this._abortController), this._updatingHandles.destroy();
  }
  initialize() {
    const { view: e2 } = this, r4 = e2.resourceController;
    this._edgeWorker = new a4(h4(r4)), this._workerHandle = new l2({ renderCoordsHelper: this.view.renderCoordsHelper, schedule: h4(r4), fetchEdgeLocations: (e3, r5) => __async(this, null, function* () {
      if (null == this._tracker) throw new Error("tracker-not-initialized");
      return this._tracker.fetchEdgeLocations(e3, this._edgeWorker, r5);
    }) }), this._updatingHandles.addPromise(this._setupLayerView()), this.addHandles([c(this._workerHandle), c(this._edgeWorker)]);
  }
  fetchCandidates(e2, r4) {
    return __async(this, null, function* () {
      return this._workerHandle.fetchCandidates(e2, r4);
    });
  }
  refresh() {
  }
  _setupLayerView() {
    return __async(this, null, function* () {
      if (this.destroyed) return;
      const e2 = this._abortController?.signal, r4 = yield this.getLayerView();
      null == r4 || c2(e2) || (this._tracker = r4.trackSnappingSources({ add: (r5, t2) => {
        this._updatingHandles.addPromise(this._workerHandle.add({ id: r5, bounds: t2 }, e2));
      }, remove: (r5) => {
        this._updatingHandles.addPromise(this._workerHandle.remove({ id: r5 }, e2));
      } }));
    });
  }
};
function h4(e2) {
  return (r4) => e2.immediate.schedule(r4);
}
r([m2({ constructOnly: true })], p2.prototype, "getLayerView", void 0), r([m2({ constructOnly: true })], p2.prototype, "view", void 0), r([m2({ readOnly: true })], p2.prototype, "updating", null), r([m2({ readOnly: true })], p2.prototype, "availability", void 0), p2 = r([a2("esri.views.interactive.snapping.featureSources.I3SSnappingSource")], p2);

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/SceneLayerSnappingSource.js
var c3 = class extends b {
  get updating() {
    return this._i3sSources.some(((e2) => e2.updating));
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._i3sSources = [];
  }
  destroy() {
    this._i3sSources.forEach(((e2) => e2.destroy())), this._i3sSources.length = 0;
  }
  initialize() {
    const { view: e2 } = this, r4 = this.layerSource.layer;
    this._i3sSources = "building-scene" === r4.type ? this._getBuildingSceneI3SSources(e2, r4) : [this._getSceneLayerI3SSource(e2, r4)];
  }
  fetchCandidates(e2, r4) {
    return __async(this, null, function* () {
      const t2 = yield Promise.all(this._i3sSources.map(((t3) => t3.fetchCandidates(e2, r4))));
      return s(r4), t2.flat();
    });
  }
  refresh() {
    this._i3sSources.forEach(((e2) => e2.refresh()));
  }
  _getBuildingSceneI3SSources(e2, r4) {
    return r4.allSublayers.toArray().map(((t2) => "building-component" === t2.type ? new p2({ getLayerView: () => __async(null, null, function* () {
      return (yield e2.whenLayerView(r4)).whenSublayerView(t2);
    }), view: e2 }) : null)).filter(L);
  }
  _getSceneLayerI3SSource(e2, r4) {
    return new p2({ getLayerView: () => __async(null, null, function* () {
      const t2 = yield e2.whenLayerView(r4);
      return "scene-layer-graphics-3d" === t2.type ? void 0 : t2;
    }), view: e2 });
  }
};
r([m2({ constructOnly: true })], c3.prototype, "layerSource", void 0), r([m2({ constructOnly: true })], c3.prototype, "view", void 0), r([m2({ readOnly: true })], c3.prototype, "updating", null), r([m2({ readOnly: true })], c3.prototype, "availability", void 0), c3 = r([a2("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")], c3);
export {
  c3 as SceneLayerSnappingSource
};
//# sourceMappingURL=chunk-NXJ2ZOVC.js.map
