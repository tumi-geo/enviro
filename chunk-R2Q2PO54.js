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
import "./chunk-OX6HQ7WO.js";
import "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/layers/CatalogLayerView.js
var i = (i2) => {
  let s = class extends i2 {
    constructor(...r2) {
      super(...r2), this.layerViews = new V();
    }
    get dynamicGroupLayerView() {
      return this.layerViews.find(((r2) => r2.layer === this.layer?.dynamicGroupLayer));
    }
    get footprintLayerView() {
      return this.layerViews.find(((r2) => r2.layer === this.layer?.footprintLayer));
    }
    isUpdating() {
      return !this.dynamicGroupLayerView || !this.footprintLayerView || this.dynamicGroupLayerView.updating || this.footprintLayerView.updating;
    }
  };
  return r([m()], s.prototype, "layer", void 0), r([m()], s.prototype, "layerViews", void 0), r([m({ readOnly: true })], s.prototype, "dynamicGroupLayerView", null), r([m({ readOnly: true })], s.prototype, "footprintLayerView", null), s = r([a("esri.views.layers.CatalogLayerView")], s), s;
};

// node_modules/@arcgis/core/views/2d/layers/CatalogLayerView2D.js
var l = class extends i(S(u)) {
  constructor() {
    super(...arguments), this.layerViews = new V();
  }
  update(e) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange((() => this.layerViews), (() => this._updateStageChildren()), { initial: true })]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach(((e, r2) => this.container.addChildAt(e.container, r2)));
  }
};
r([m()], l.prototype, "layerViews", void 0), l = r([a("esri.views.2d.layers.CatalogLayerView2D")], l);
var c = l;
export {
  c as default
};
//# sourceMappingURL=chunk-R2Q2PO54.js.map
