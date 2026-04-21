import {
  S
} from "./chunk-E3SAWSXA.js";
import {
  u
} from "./chunk-FDW7BVD3.js";
import "./chunk-ADXKO2CV.js";
import "./chunk-6KY6UKC5.js";
import "./chunk-72IJVIZZ.js";
import "./chunk-WFYAWILE.js";
import "./chunk-IGM2T7AB.js";
import "./chunk-OADRJKXU.js";
import "./chunk-QMX5U76G.js";
import "./chunk-673O3DMU.js";
import "./chunk-UL5UPYWD.js";
import "./chunk-K5OIUFLW.js";
import "./chunk-CVU3XSZQ.js";
import {
  n,
  t
} from "./chunk-QAS34KWO.js";
import "./chunk-2JXAQB6C.js";
import "./chunk-XY257PCG.js";
import "./chunk-5NORWNRZ.js";
import "./chunk-CO2FWOAQ.js";
import "./chunk-ML2Q6ZHW.js";
import {
  V
} from "./chunk-FXVZ2Z5Z.js";
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
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import {
  U,
  l
} from "./chunk-MBW5VYJA.js";
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
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/layers/GroupLayerView.js
var h = class extends u {
  constructor(i) {
    super(i), this.type = "group", this.layerViews = new V();
  }
  destroy() {
    this.layerViews.length = 0;
  }
  _allLayerViewVisibility(i) {
    this.layerViews.forEach(((e) => {
      e.visible = i;
    }));
  }
  initialize() {
    this.addHandles([this.layerViews.on("change", ((i) => this._layerViewsChangeHandler(i))), l((() => this.layer?.visibilityMode), (() => {
      this.layer && this._applyVisibility((() => this._allLayerViewVisibility(this.visible)), (() => this._applyExclusiveVisibility(null)));
    }), U), l((() => this.visible), ((i) => {
      this._applyVisibility((() => this._allLayerViewVisibility(i)), (() => {
      }));
    }), U)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  get creatingLayerViews() {
    return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer) ?? false;
  }
  set layerViews(i) {
    this._set("layerViews", n(i, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce(((i, e) => i + e.updatingProgress), 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.creatingLayerViews || this.layerViews.some(((i) => i.updating));
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some(((i) => i._isOverridden("visible")));
  }
  _findLayerViewForLayer(i) {
    return i && this.layerViews.find(((e) => e.layer === i));
  }
  _firstVisibleOnLayerOrder() {
    const i = this.layer.layers.find(((i2) => {
      const e = this._findLayerViewForLayer(i2);
      return !!e?.visible;
    }));
    return i && this._findLayerViewForLayer(i);
  }
  _applyExclusiveVisibility(i) {
    null == i && null == (i = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (i = this._findLayerViewForLayer(this.layer.layers.at(0))), this.layerViews.forEach(((e) => {
      e.visible = e === i;
    }));
  }
  _layerViewsChangeHandler(i) {
    this.removeHandles("grouplayerview:visible"), this.addHandles(this.layerViews.map(((i2) => l((() => i2.visible), ((e2) => this._applyVisibility((() => {
      e2 !== this.visible && (i2.visible = this.visible);
    }), (() => this._applyExclusiveVisibility(e2 ? i2 : null)))), U))).toArray(), "grouplayerview:visible");
    const e = i.added[i.added.length - 1];
    this._applyVisibility((() => this._allLayerViewVisibility(this.visible)), (() => this._applyExclusiveVisibility(e?.visible ? e : null)));
  }
  _applyVisibility(i, e) {
    this._hasLayerViewVisibleOverrides() && ("inherited" === this.layer?.visibilityMode ? i() : "exclusive" === this.layer?.visibilityMode && e());
  }
};
r([m({ readOnly: true })], h.prototype, "creatingLayerViews", null), r([m({ cast: t })], h.prototype, "layerViews", null), r([m({ readOnly: true })], h.prototype, "updatingProgress", null), r([m()], h.prototype, "view", void 0), h = r([a("esri.views.layers.GroupLayerView")], h);

// node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js
var a2 = class extends S(h) {
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", (() => this._updateStageChildren())));
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach(((e, r2) => this.container.addChildAt(e.container, r2)));
  }
};
a2 = r([a("esri.views.2d.layers.GroupLayerView2D")], a2);
var o = a2;
export {
  o as default
};
//# sourceMappingURL=chunk-VZA75MGJ.js.map
