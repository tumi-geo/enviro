import {
  i as i2,
  o
} from "./chunk-J5NLIZI7.js";
import "./chunk-MTWHTXSZ.js";
import {
  t
} from "./chunk-DBNTMT3D.js";
import "./chunk-HNYFX443.js";
import {
  i,
  n,
  r as r3
} from "./chunk-R2XUF62V.js";
import "./chunk-Z3ZMR5D4.js";
import "./chunk-V7UPP474.js";
import "./chunk-GI6WJJKW.js";
import {
  y as y2
} from "./chunk-5BPHOAZS.js";
import "./chunk-2NCKIQAU.js";
import "./chunk-EOFHL3C5.js";
import "./chunk-NHMMNWPB.js";
import "./chunk-D5HSO267.js";
import "./chunk-VBCXKFWP.js";
import "./chunk-K6ZXT5Q7.js";
import {
  y
} from "./chunk-T3JLURCA.js";
import "./chunk-GFLVVUFI.js";
import "./chunk-HKAYCBHM.js";
import "./chunk-7N32VZ4G.js";
import "./chunk-A7D5HX35.js";
import "./chunk-ROJREOS4.js";
import "./chunk-GNCPI2AX.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import "./chunk-72EYURPT.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import "./chunk-RFGZMFOP.js";
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
import {
  r as r2
} from "./chunk-OE6U6P6Y.js";
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
import "./chunk-KHKWAA5Q.js";
import "./chunk-Z43IMVPB.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import {
  a as a2,
  h as h2,
  l
} from "./chunk-MBW5VYJA.js";
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
import {
  h,
  s
} from "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureCollectionSnappingSource.js
var f = class extends b {
  get availability() {
    return 1;
  }
  get _snappingElevationAligner() {
    const { view: e } = this, { layer: t2 } = this.layerSource, i3 = null != e && "3d" === e.type;
    if (!i3 || "subtype-group" === t2.type) return i();
    const r4 = (i4, r5) => __async(this, null, function* () {
      return (yield h(e.whenLayerView(t2), r5)).elevationAlignPointsInFeatures(i4, r5);
    });
    return i(i3, { elevationInfo: t2.elevationInfo, alignPointsInFeatures: r4 });
  }
  get _snappingElevationFilter() {
    const { view: e } = this, t2 = null != e && "3d" === e.type && "subtype-group" !== this.layerSource.layer.type;
    return r3(t2);
  }
  get _symbologySnappingFetcher() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    return null != e && "3d" === e.type && "subtype-group" !== t2.type ? n(this._symbologySnappingSupported, ((i3, n2) => __async(this, null, function* () {
      const o2 = yield e.whenLayerView(t2);
      return s(n2), o2.queryForSymbologySnapping({ candidates: i3, spatialReference: e.spatialReference }, n2);
    }))) : n();
  }
  get _layerView() {
    const { view: e } = this;
    if (null == e) return null;
    const { layer: t2 } = this.layerSource;
    return e.allLayerViews.find(((e2) => e2.layer === t2));
  }
  get _layerView3D() {
    const { view: e } = this;
    return null == e || "2d" === e.type ? null : this._layerView;
  }
  get _symbologySnappingSupported() {
    return null != this._layerView3D && this._layerView3D.symbologySnappingSupported;
  }
  initialize() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    null != e && "3d" === e.type && "subtype-group" !== t2.type && this.addHandles([e.elevationProvider.on("elevation-change", (({ context: e2 }) => {
      const { elevationInfo: i3 } = t2;
      y(e2, i3) && this._snappingElevationAligner.notifyElevationSourceChange();
    })), l((() => t2.elevationInfo), (() => this._snappingElevationAligner.notifyElevationSourceChange()), h2), l((() => null != this._layerView3D ? this._layerView3D.layer?.renderer : null), (() => this._symbologySnappingFetcher.notifySymbologyChange()), h2), a2((() => this._layerView3D?.layer), ["edits", "apply-edits", "graphic-update"], (() => this._symbologySnappingFetcher.notifySymbologyChange()))]);
  }
  constructor(e) {
    super(e), this.view = null, this.updating = false, this._memoizedMakeGetGroundElevation = t(i2);
  }
  refresh() {
  }
  fetchCandidates(e, t2) {
    return __async(this, null, function* () {
      const { layer: i3 } = this.layerSource, { source: n2 } = i3;
      if (!n2?.querySnapping) return [];
      const o2 = i3.createQuery();
      this._layerView && "effectiveDisplayFilter" in this._layerView && (o2.where = r2(o2.where, this._layerView.effectiveDisplayFilter?.where));
      const a3 = "returnZ" in i3 ? i3.returnZ : void 0, s2 = y2({ parameters: e, mode: this.view?.type ?? "2d", returnZ: a3, filter: o2 }), p = yield n2.querySnapping(s2, { signal: t2 });
      s(t2);
      const y3 = e.coordinateHelper.spatialReference, c = yield this._snappingElevationAligner.alignCandidates(p.candidates, y3, t2);
      s(t2);
      const g = yield this._symbologySnappingFetcher.fetch(c, t2);
      s(t2);
      const m2 = 0 === g.length ? c : [...c, ...g], d = this._snappingElevationFilter.filter(s2, m2), v = this._memoizedMakeGetGroundElevation(this.view, y3);
      return d.map(((e2) => o(e2, v)));
    });
  }
};
r([m({ constructOnly: true })], f.prototype, "layerSource", void 0), r([m({ constructOnly: true })], f.prototype, "view", void 0), r([m()], f.prototype, "_snappingElevationAligner", null), r([m()], f.prototype, "_snappingElevationFilter", null), r([m()], f.prototype, "_symbologySnappingFetcher", null), r([m()], f.prototype, "_layerView", null), r([m()], f.prototype, "_layerView3D", null), r([m()], f.prototype, "_symbologySnappingSupported", null), f = r([a("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")], f);
export {
  f as FeatureCollectionSnappingSource
};
//# sourceMappingURL=chunk-KDCNT4OG.js.map
