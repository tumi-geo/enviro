import {
  i as i3
} from "./chunk-IOQB4FJ2.js";
import {
  M
} from "./chunk-YQZBPYZ3.js";
import {
  r as r2
} from "./chunk-KDWIE4GQ.js";
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
  u as u2
} from "./chunk-FDW7BVD3.js";
import "./chunk-ADXKO2CV.js";
import "./chunk-Z4J3S7XB.js";
import "./chunk-NLBSMJCW.js";
import "./chunk-IEFQQGPU.js";
import {
  a as a2
} from "./chunk-THMCTLP2.js";
import "./chunk-3OCGGKGL.js";
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
import "./chunk-K6ZXT5Q7.js";
import "./chunk-LITKC7YO.js";
import "./chunk-72IJVIZZ.js";
import "./chunk-WFYAWILE.js";
import "./chunk-IGM2T7AB.js";
import "./chunk-OADRJKXU.js";
import "./chunk-6WJXOURI.js";
import "./chunk-QMX5U76G.js";
import "./chunk-G6OLKX7O.js";
import "./chunk-JLLDOE7V.js";
import "./chunk-K3TSEAJS.js";
import "./chunk-UKQFAVES.js";
import "./chunk-673O3DMU.js";
import "./chunk-UL5UPYWD.js";
import "./chunk-K5OIUFLW.js";
import "./chunk-7N32VZ4G.js";
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
import "./chunk-JQIIEVNP.js";
import "./chunk-JINM5JNG.js";
import "./chunk-A5WPSHPA.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import "./chunk-42IM5JRX.js";
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
import {
  z
} from "./chunk-7FHCIZTJ.js";
import "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import {
  l
} from "./chunk-MBW5VYJA.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-CSENQMWZ.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
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
  b,
  s as s2,
  u2 as u
} from "./chunk-OX6HQ7WO.js";
import {
  i3 as i,
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/views/layers/WMSLayerView.js
var m2 = (m3) => {
  let n = class extends m3 {
    initialize() {
      this.exportImageParameters = new a2({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = u(this.exportImageParameters);
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    get timeExtent() {
      return i3(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    fetchPopupFeaturesAtLocation(e, r3) {
      return __async(this, null, function* () {
        const { layer: s3 } = this;
        if (!e) throw new s("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: s3 });
        const { popupEnabled: a3 } = s3;
        if (!a3) throw new s("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: a3 });
        const p = this.createFetchPopupFeaturesQuery(e);
        if (!p) return [];
        const { extent: i4, width: m4, height: n2, x: c, y: u3 } = p;
        if (!(i4 && m4 && n2)) throw new s("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: i4, width: m4, height: n2 });
        const h = yield s3.fetchFeatureInfo(i4, m4, n2, c, u3);
        return s2(r3), h;
      });
    }
  };
  return r([m()], n.prototype, "exportImageParameters", void 0), r([m({ readOnly: true })], n.prototype, "exportImageVersion", null), r([m()], n.prototype, "layer", void 0), r([m({ readOnly: true })], n.prototype, "timeExtent", null), n = r([a("esri.views.layers.WMSLayerView")], n), n;
};

// node_modules/@arcgis/core/views/2d/layers/WMSLayerView2D.js
var g = class extends m2(i2(S(u2))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new r2();
  }
  supportsSpatialReference(e) {
    return this.layer.serviceSupportsSpatialReference(e);
  }
  update(e) {
    this.strategy.update(e).catch(((e2) => {
      b(e2) || i.getLogger(this).error(e2);
    }));
  }
  attach() {
    const { layer: e } = this, { imageMaxHeight: t, imageMaxWidth: r3 } = e;
    this.bitmapContainer = new r2(), this.container.addChild(this.bitmapContainer), this.strategy = new M({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: t, imageMaxWidth: r3, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false }), this.addAttachHandles(l((() => this.exportImageVersion), (() => this.requestUpdate())));
  }
  detach() {
    this.strategy = u(this.strategy), this.container.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e) {
    const { view: t, bitmapContainer: r3 } = this, { x: i4, y: s3 } = e, { spatialReference: a3 } = t;
    let o, p = 0, m3 = 0;
    if (r3.children.some(((e2) => {
      const { width: t2, height: r4, resolution: h2, x: c2, y: d2 } = e2, u3 = c2 + h2 * t2, g2 = d2 - h2 * r4;
      return i4 >= c2 && i4 <= u3 && s3 <= d2 && s3 >= g2 && (o = new z({ xmin: c2, ymin: g2, xmax: u3, ymax: d2, spatialReference: a3 }), p = t2, m3 = r4, true);
    })), !o) return null;
    const h = o.width / p, c = Math.round((i4 - o.xmin) / h), d = Math.round((o.ymax - s3) / h);
    return { extent: o, width: p, height: m3, x: c, y: d };
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.requestUpdate();
    });
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e, t, r3, i4) {
    return this.layer.fetchImageBitmap(e, t, r3, __spreadValues({ timeExtent: this.timeExtent }, i4));
  }
};
r([m()], g.prototype, "strategy", void 0), r([m()], g.prototype, "updating", void 0), g = r([a("esri.views.2d.layers.WMSLayerView2D")], g);
var y = g;
export {
  y as default
};
//# sourceMappingURL=chunk-WRAOA3GG.js.map
