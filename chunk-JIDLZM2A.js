import {
  p
} from "./chunk-ZPRQ3CNR.js";
import "./chunk-VVGDGEK6.js";
import {
  B
} from "./chunk-Y43YHFY6.js";
import "./chunk-ITAZ5PY2.js";
import "./chunk-DXBXCRYC.js";
import "./chunk-47YOCG5C.js";
import "./chunk-MCAE2U2N.js";
import "./chunk-DRZL4WTP.js";
import "./chunk-XZLUABZJ.js";
import "./chunk-7RKFG5YX.js";
import "./chunk-YVKWL3MD.js";
import "./chunk-AKEOA7WV.js";
import "./chunk-UNZMA6FK.js";
import "./chunk-GNE22XPD.js";
import "./chunk-72EYURPT.js";
import "./chunk-X6QLSTNN.js";
import "./chunk-DE5G7AIG.js";
import "./chunk-RFGZMFOP.js";
import "./chunk-VKWEVSRD.js";
import "./chunk-STW7Q3CK.js";
import "./chunk-DWOFP23M.js";
import "./chunk-BWFTAJDA.js";
import "./chunk-ZSMW3U4K.js";
import "./chunk-2VUW4ILG.js";
import "./chunk-XORXELZL.js";
import "./chunk-6QXOVETH.js";
import "./chunk-CE5SL3EZ.js";
import "./chunk-DYCMDIMU.js";
import "./chunk-DYKJGD4N.js";
import "./chunk-VY2R5MU5.js";
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
import "./chunk-QXP5CG2R.js";
import "./chunk-7ZUHIRNS.js";
import "./chunk-QE6WU2QZ.js";
import "./chunk-LJ6UKSKZ.js";
import "./chunk-UMW5MZI7.js";
import "./chunk-C5HHJVCI.js";
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
import {
  s as s2
} from "./chunk-OX6HQ7WO.js";
import {
  a,
  s2 as s
} from "./chunk-EQ4FTM7V.js";
import "./chunk-FWKJPKUC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/convertMeshVertexSpace.js
function i(i2, n, c) {
  return __async(this, null, function* () {
    yield Promise.resolve(), s2(c);
    const l = B(i2, n, { useEllipsoid: c?.useEllipsoid });
    if (!l) throw new s("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
    const m = i2.cloneAndModifyVertexAttributes(new p(__spreadProps(__spreadValues({}, l), { uv: a(i2.vertexAttributes.uv), color: a(i2.vertexAttributes.color) })), n);
    return m.transform = null, m;
  });
}
export {
  i as convertMeshVertexSpace
};
//# sourceMappingURL=chunk-JIDLZM2A.js.map
