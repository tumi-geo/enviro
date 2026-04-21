import {
  n,
  r as r3
} from "./chunk-A55BYHH7.js";
import "./chunk-KWUW567O.js";
import "./chunk-GNWP3RYH.js";
import "./chunk-S2QSXBWP.js";
import {
  i as i2
} from "./chunk-WMBGWMR2.js";
import "./chunk-YGQYL3Y4.js";
import "./chunk-Y4SXRQ7J.js";
import {
  S
} from "./chunk-E3SAWSXA.js";
import {
  u
} from "./chunk-FDW7BVD3.js";
import "./chunk-ADXKO2CV.js";
import "./chunk-Z4J3S7XB.js";
import "./chunk-NLBSMJCW.js";
import "./chunk-IEFQQGPU.js";
import "./chunk-HPBIEUKF.js";
import "./chunk-6KY6UKC5.js";
import "./chunk-7QFWTVCO.js";
import "./chunk-33JEY2JU.js";
import "./chunk-PLT5QC7E.js";
import "./chunk-WLEQ277S.js";
import "./chunk-3S6UB5ZE.js";
import "./chunk-BHGJWZGM.js";
import "./chunk-XLXAPNYP.js";
import "./chunk-CQ25WBTL.js";
import "./chunk-6HJMYH7R.js";
import "./chunk-UFZVBMJ3.js";
import "./chunk-RI2CALM5.js";
import "./chunk-C5U5I45T.js";
import "./chunk-IMXLHKPN.js";
import "./chunk-LITKC7YO.js";
import "./chunk-72IJVIZZ.js";
import "./chunk-WFYAWILE.js";
import "./chunk-IGM2T7AB.js";
import "./chunk-OADRJKXU.js";
import {
  p,
  r as r2
} from "./chunk-I5WUR2FL.js";
import {
  h
} from "./chunk-6WJXOURI.js";
import "./chunk-QMX5U76G.js";
import "./chunk-G6OLKX7O.js";
import "./chunk-JLLDOE7V.js";
import {
  e
} from "./chunk-K3TSEAJS.js";
import "./chunk-UKQFAVES.js";
import "./chunk-673O3DMU.js";
import "./chunk-UL5UPYWD.js";
import "./chunk-K5OIUFLW.js";
import "./chunk-BU754T7B.js";
import "./chunk-CVU3XSZQ.js";
import "./chunk-6QOGQCGX.js";
import "./chunk-QAS34KWO.js";
import "./chunk-2JXAQB6C.js";
import "./chunk-XY257PCG.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import "./chunk-RFGZMFOP.js";
import "./chunk-5NORWNRZ.js";
import {
  g
} from "./chunk-VCVPMXM7.js";
import "./chunk-CWKVKZV4.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import "./chunk-CO2FWOAQ.js";
import "./chunk-ML2Q6ZHW.js";
import "./chunk-FXVZ2Z5Z.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
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
  s
} from "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-MBW5VYJA.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import {
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
import "./chunk-ROTWQUU2.js";
import "./chunk-TBOXDPPB.js";
import "./chunk-IGNVDP3D.js";
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import {
  b
} from "./chunk-OX6HQ7WO.js";
import {
  i3 as i
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/2d/layers/WMTSLayerView2D.js
var y = [0, 0];
var _ = class extends i2(r3(S(u))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get tileMatrixSet() {
    const { activeLayer: e2 } = this.layer, { tileMatrixSet: t } = e2;
    if (t && s(t.tileInfo?.spatialReference, this.view.spatialReference)) return t;
    const i3 = this._getTileMatrixSetBySpatialReference(e2);
    return i3 && i3.id !== e2.tileMatrixSetId ? (e2.tileMatrixSetId = i3.id, i3) : null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
  }
  attach() {
    const e2 = this.tileMatrixSet?.tileInfo;
    e2 && (this._tileInfoView = new h(e2), this._fetchQueue = new p({ tileInfoView: this._tileInfoView, concurrency: 16, process: (e3, t) => this.fetchTile(e3, t), scheduler: this.scheduler, priority: g.MAPVIEW_FETCH_QUEUE }), this._tileStrategy = new r2({ cachePolicy: "keep", resampling: true, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.addAttachHandles(this._updatingHandles.add((() => [this.layer?.activeLayer?.styleId, this.tileMatrixSet]), (() => this.doRefresh()))), super.attach());
  }
  detach() {
    super.detach(), this._tileStrategy?.destroy(), this._fetchQueue?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e2) {
    return this.layer.activeLayer.tileMatrixSets?.some(((t) => s(t.tileInfo?.spatialReference, e2))) ?? false;
  }
  doRefresh() {
    return __async(this, null, function* () {
      if (this.attached) {
        if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
        this._fetchQueue.reset(), this._tileStrategy.refresh(((e2) => this._updatingHandles.addPromise(this._enqueueTileFetch(e2))));
      }
    });
  }
  acquireTile(e2) {
    const t = this._bitmapView.createTile(e2), i3 = t.bitmap;
    return [i3.x, i3.y] = this._tileInfoView.getTileCoords(y, t.key), i3.resolution = this._tileInfoView.getTileResolution(t.key), [i3.width, i3.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", (() => e2.destroy())), this.requestUpdate();
  }
  fetchTile(_0) {
    return __async(this, arguments, function* (e2, t = {}) {
      const s2 = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: r4, resamplingLevel: a2 = 0 } = t;
      if (!s2) return this._fetchImage(e2, r4);
      const l = new e(0, 0, 0, 0);
      let o;
      try {
        yield s2.fetchAvailabilityUpsample(e2.level, e2.row, e2.col, l, { signal: r4 }), o = yield this._fetchImage(l, r4);
      } catch (n2) {
        if (b(n2)) throw n2;
        if (a2 < 3) {
          const i3 = this._tileInfoView.getTileParentId(e2.id);
          if (i3) {
            const s3 = new e(i3), r5 = yield this.fetchTile(s3, __spreadProps(__spreadValues({}, t), { resamplingLevel: a2 + 1 }));
            return n(this._tileInfoView, r5, s3, e2);
          }
        }
        throw n2;
      }
      return n(this._tileInfoView, o, l, e2);
    });
  }
  canResume() {
    const e2 = super.canResume();
    return e2 ? null !== this.tileMatrixSet : e2;
  }
  _enqueueTileFetch(e2) {
    return __async(this, null, function* () {
      if (!this._fetchQueue.has(e2.key.id)) {
        try {
          const t = yield this._fetchQueue.push(e2.key);
          e2.bitmap.source = t, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", (() => this.requestUpdate()));
        } catch (s2) {
          b(s2) || i.getLogger(this).error(s2);
        }
        this.requestUpdate();
      }
    });
  }
  _fetchImage(e2, t) {
    return __async(this, null, function* () {
      return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t });
    });
  }
  _getTileMatrixSetBySpatialReference(e2) {
    return e2.tileMatrixSets?.find(((e3) => s(e3.tileInfo?.spatialReference, this.view.spatialReference)));
  }
};
r([m({ readOnly: true })], _.prototype, "tileMatrixSet", null), _ = r([a("esri.views.2d.layers.WMTSLayerView2D")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=chunk-YZ6JYNTV.js.map
