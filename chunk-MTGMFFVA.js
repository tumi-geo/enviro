import {
  m,
  n,
  t
} from "./chunk-H6YYVX3B.js";
import {
  T as T2
} from "./chunk-I7KGMP5D.js";
import "./chunk-DK22575G.js";
import {
  se,
  v
} from "./chunk-HE2IBHDM.js";
import {
  _ as _2,
  h2 as h,
  j,
  p
} from "./chunk-BK6GPQQS.js";
import {
  D,
  I,
  R,
  T,
  c2,
  f3 as f,
  j as j2,
  s2 as s,
  u3 as u
} from "./chunk-M2RZ7ZWK.js";
import {
  c
} from "./chunk-5F5MRPE2.js";
import "./chunk-S7O4PC7E.js";
import "./chunk-AEEQQY6K.js";
import "./chunk-MNBTFEPO.js";
import "./chunk-2JXAQB6C.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-LUIFXDWT.js";
import "./chunk-6HEET2ON.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-XORXELZL.js";
import {
  r as r2
} from "./chunk-6QXOVETH.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
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
import {
  _
} from "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/layers/support/rasterTransforms/IdentityTransform.js
var e;
var a2 = e = class extends t {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  clone() {
    return new e();
  }
};
r([r2({ IdentityXform: "identity" })], a2.prototype, "type", void 0), a2 = e = r([a("esri.layers.support.rasterTransforms.IdentityTransform")], a2);

// node_modules/@arcgis/core/layers/support/rasterTransforms/utils.js
var n2 = { GCSShiftXform: n, IdentityXform: a2, PolynomialXform: m };
function f2(r3) {
  const o = r3?.type;
  if (!o) return null;
  const t2 = n2[r3?.type];
  if (t2) {
    const o2 = new t2();
    return o2.read(r3), o2;
  }
  return null;
}

// node_modules/@arcgis/core/layers/support/RasterWorker.js
var N = class {
  convertVectorFieldData(r3) {
    const e2 = c2.fromJSON(r3.pixelBlock), t2 = f(e2, r3.type);
    return Promise.resolve(null != t2 ? t2.toJSON() : null);
  }
  computeStatisticsHistograms(r3) {
    const e2 = c2.fromJSON(r3.pixelBlock), t2 = h(e2);
    return Promise.resolve(t2);
  }
  decode(r3) {
    return __async(this, null, function* () {
      const e2 = yield j(r3.data, r3.options);
      return e2 && e2.toJSON();
    });
  }
  symbolize(e2) {
    e2.pixelBlock = c2.fromJSON(e2.pixelBlock), e2.extent = e2.extent ? z.fromJSON(e2.extent) : null;
    const t2 = this.symbolizer.symbolize(e2);
    return Promise.resolve(null != t2 ? t2.toJSON() : null);
  }
  updateSymbolizer(r3) {
    return __async(this, null, function* () {
      this.symbolizer = _2.fromJSON(r3.symbolizerJSON), r3.histograms && "rasterStretch" === this.symbolizer?.rendererJSON.type && (this.symbolizer.rendererJSON.histograms = r3.histograms);
    });
  }
  updateRasterFunction(r3) {
    return __async(this, null, function* () {
      this.rasterFunction = T2(r3.rasterFunctionJSON);
    });
  }
  process(t2) {
    return __async(this, null, function* () {
      const o = this.rasterFunction.process({ extent: z.fromJSON(t2.extent), primaryPixelBlocks: t2.primaryPixelBlocks.map(((r3) => null != r3 ? c2.fromJSON(r3) : null)), primaryPixelSizes: t2.primaryPixelSizes?.map(((r3) => null != r3 ? _.fromJSON(r3) : null)), primaryRasterIds: t2.primaryRasterIds });
      return null != o ? o.toJSON() : null;
    });
  }
  stretch(r3) {
    const e2 = this.symbolizer.simpleStretch(c2.fromJSON(r3.srcPixelBlock), r3.stretchParams);
    return Promise.resolve(e2?.toJSON());
  }
  estimateStatisticsHistograms(r3) {
    const e2 = p(c2.fromJSON(r3.srcPixelBlock));
    return Promise.resolve(e2);
  }
  split(r3) {
    const e2 = I(c2.fromJSON(r3.srcPixelBlock), r3.tileSize, r3.maximumPyramidLevel ?? 0, false === r3.useBilinear);
    return e2 && e2.forEach(((r4, t2) => {
      e2.set(t2, r4?.toJSON());
    })), Promise.resolve(e2);
  }
  clipTile(r3) {
    const e2 = c2.fromJSON(r3.pixelBlock), t2 = R(__spreadProps(__spreadValues({}, r3), { pixelBlock: e2 }));
    return Promise.resolve(t2?.toJSON());
  }
  mosaicAndTransform(r3) {
    return __async(this, null, function* () {
      const e2 = r3.srcPixelBlocks.map(((r4) => r4 ? new c2(r4) : null)), t2 = T(e2, r3.srcMosaicSize, { blockWidths: r3.blockWidths, alignmentInfo: r3.alignmentInfo, clipOffset: r3.clipOffset, clipSize: r3.clipSize });
      let o, i = t2;
      return r3.coefs && (i = D(t2, r3.destDimension, r3.coefs, r3.sampleSpacing, r3.interpolation)), r3.projectDirections && r3.gcsGrid && (o = j2(r3.destDimension, r3.gcsGrid), i = u(i, r3.isUV ? "vector-uv" : "vector-magdir", o)), { pixelBlock: i?.toJSON(), localNorthDirections: o };
    });
  }
  createFlowMesh(r3, e2) {
    return __async(this, null, function* () {
      const t2 = { data: new Float32Array(r3.flowData.buffer), mask: new Uint8Array(r3.flowData.maskBuffer), width: r3.flowData.width, height: r3.flowData.height }, { vertexData: s2, indexData: o } = yield s(r3.meshType, r3.simulationSettings, t2, e2.signal);
      return { result: { vertexBuffer: s2.buffer, indexBuffer: o.buffer }, transferList: [s2.buffer, o.buffer] };
    });
  }
  getProjectionOffsetGrid(e2) {
    return __async(this, null, function* () {
      const s2 = z.fromJSON(e2.projectedExtent), o = z.fromJSON(e2.srcBufferExtent);
      let i = null;
      e2.datumTransformationSteps?.length && (i = new c({ steps: e2.datumTransformationSteps })), yield v();
      const n3 = e2.rasterTransform ? f2(e2.rasterTransform) : null;
      return se(__spreadProps(__spreadValues({}, e2), { projectedExtent: s2, srcBufferExtent: o, datumTransformation: i, rasterTransform: n3 }));
    });
  }
};
export {
  N as default
};
//# sourceMappingURL=chunk-MTGMFFVA.js.map
