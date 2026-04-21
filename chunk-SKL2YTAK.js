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
import "./chunk-QAS34KWO.js";
import "./chunk-2JXAQB6C.js";
import "./chunk-XY257PCG.js";
import "./chunk-5NORWNRZ.js";
import "./chunk-CO2FWOAQ.js";
import "./chunk-ML2Q6ZHW.js";
import {
  r as r2
} from "./chunk-OE6U6P6Y.js";
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
import "./chunk-S4VGKABR.js";
import "./chunk-66AJ5KSJ.js";
import "./chunk-LH6JVWB6.js";
import "./chunk-A5RMG3UV.js";
import "./chunk-LGNGM2HE.js";
import "./chunk-VM6IFKNK.js";
import {
  d,
  e,
  k,
  t
} from "./chunk-OX6HQ7WO.js";
import {
  i3 as i
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/layers/CatalogDynamicGroupLayerView.js
var l = Symbol();
var u2 = (u3) => {
  let y = class extends u3 {
    constructor() {
      super(...arguments), this.layerViews = new V(), this._debouncedUpdate = k((() => __async(this, null, function* () {
        const { layer: e2, parent: r3 } = this, t2 = r3?.footprintLayerView;
        let s = [];
        const i3 = this._createQuery();
        if (i3 && t2) {
          const { features: r4 } = yield t2.queryFeatures(i3);
          this.suspended || (s = r4.map(((r5) => e2.acquireLayer(r5))));
        }
        this.removeHandles(l), this.addHandles(s, l);
      })));
    }
    get creatingLayerViews() {
      return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer) ?? false;
    }
    isUpdating() {
      return this.creatingLayerViews || this.layer.updating || this.layerViews.some(((e2) => e2.updating));
    }
    enableLayerUpdates() {
      return t([this._updatingHandles.addWhen((() => false === this.parent?.footprintLayerView?.dataUpdating), (() => this.updateLayers())), this._updatingHandles.add((() => [this.layer.maximumVisibleSublayers, this.layer.parent?.orderBy, this.parent?.footprintLayerView?.filter, this.parent?.footprintLayerView?.timeExtent, this.suspended]), (() => this.updateLayers())), e((() => this.removeHandles(l)))]);
    }
    updateLayers() {
      this.suspended ? this.removeHandles(l) : this._updatingHandles.addPromise(d(this._debouncedUpdate()).catch(((e2) => {
        i.getLogger(this).error(e2);
      })));
    }
    _createQuery() {
      const e2 = this.parent?.footprintLayerView, r3 = this.layer?.parent;
      if (!e2 || !r3 || r3.destroyed) return null;
      const { layer: { maximumVisibleSublayers: t2 }, view: { scale: s } } = this;
      if (!t2) return null;
      const { itemTypeField: i3, itemSourceField: a2, itemNameField: o, minScaleField: d2, maxScaleField: p, objectIdField: l2, orderBy: u4 } = r3, y2 = r2(`${d2} IS NULL OR ${s} <= ${d2} OR ${d2} = 0`, `${p} IS NULL OR ${s} >= ${p}`), c2 = u4?.find(((e3) => e3.field && !e3.valueExpression)), m2 = e2.createQuery();
      if (m2.returnGeometry = false, m2.num = t2, m2.outFields = [l2, a2, o], m2.where = r2(m2.where, y2), null != this.unsupportedItemTypes) {
        const e3 = `${i3} NOT IN (${this.unsupportedItemTypes.map(((e4) => `'${e4}'`))})`;
        m2.where = r2(m2.where, e3);
      }
      return c2?.field && (m2.orderByFields = [`${c2.field} ${"descending" === c2.order ? "DESC" : "ASC"}`], m2.outFields.push(c2.field)), m2;
    }
  };
  return r([m({ readOnly: true })], y.prototype, "creatingLayerViews", null), r([m()], y.prototype, "layer", void 0), r([m()], y.prototype, "layerViews", void 0), r([m({ readOnly: true })], y.prototype, "unsupportedItemTypes", void 0), r([m()], y.prototype, "parent", void 0), r([m({ readOnly: true })], y.prototype, "isUpdating", null), y = r([a("esri.views.layers.CatalogDynamicGroupLayerView")], y), y;
};

// node_modules/@arcgis/core/views/2d/layers/CatalogDynamicGroupLayerView2D.js
var i2 = class extends u2(S(u)) {
  constructor() {
    super(...arguments), this.unsupportedItemTypes = ["Scene Service"], this.layerViews = new V();
  }
  attach() {
    this.addAttachHandles([this.layerViews.on("after-changes", (() => this._updateStageChildren())), this.enableLayerUpdates()]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e2) {
    this.updateLayers();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach(((e2, r3) => this.container.addChildAt(e2.container, r3)));
  }
};
i2 = r([a("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")], i2);
var c = i2;
export {
  c as default
};
//# sourceMappingURL=chunk-SKL2YTAK.js.map
