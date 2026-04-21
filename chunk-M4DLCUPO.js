import {
  C,
  E,
  d,
  f as f2,
  f3,
  j as j2,
  o as o2,
  p2 as p,
  p3 as p2,
  s as s2,
  x,
  y
} from "./chunk-W4RRWK5J.js";
import {
  n as n2,
  t as t2,
  v as v2
} from "./chunk-U5Y7KFGT.js";
import "./chunk-XSXCEBNU.js";
import {
  G as G2
} from "./chunk-5SFUQATO.js";
import "./chunk-SOS7AA5K.js";
import "./chunk-LLKQFUVT.js";
import "./chunk-NGCHGSSW.js";
import "./chunk-S37Y2BXV.js";
import "./chunk-YFNQ27UB.js";
import {
  D
} from "./chunk-2YAB7ZD7.js";
import "./chunk-GPBMZWXX.js";
import {
  j
} from "./chunk-5UTDFNZU.js";
import {
  $,
  G,
  H,
  I,
  K,
  Ne,
  P,
  Q,
  U,
  Y,
  Ye,
  _,
  ae,
  de,
  e as e2,
  me,
  n as n3,
  pe,
  r as r2,
  s,
  s2 as s3,
  te,
  v
} from "./chunk-RGB64UKL.js";
import "./chunk-SH4JTOQ2.js";
import "./chunk-CI4X7KPD.js";
import "./chunk-44XQKQJP.js";
import "./chunk-6HJMYH7R.js";
import "./chunk-UFZVBMJ3.js";
import "./chunk-RI2CALM5.js";
import "./chunk-C5U5I45T.js";
import "./chunk-IMXLHKPN.js";
import "./chunk-MNSJWTIB.js";
import "./chunk-MZUMJDHL.js";
import "./chunk-L4AJJTF2.js";
import "./chunk-HR4CHV7Z.js";
import "./chunk-UD5LIUST.js";
import "./chunk-6HEET2ON.js";
import "./chunk-CAKBOYHT.js";
import "./chunk-I2QGHF2M.js";
import "./chunk-OXEAULCD.js";
import "./chunk-7X4IPKG2.js";
import "./chunk-OE6U6P6Y.js";
import "./chunk-6QXOVETH.js";
import "./chunk-DQ6RY3UR.js";
import "./chunk-CDO6C4D7.js";
import "./chunk-MGM5RIUZ.js";
import "./chunk-QW76BD55.js";
import "./chunk-5NWNFL2J.js";
import "./chunk-3XEBNOYK.js";
import "./chunk-3DPIVMX6.js";
import "./chunk-UTK3TWKS.js";
import "./chunk-TKD7HAXN.js";
import {
  e,
  i,
  n,
  o,
  t
} from "./chunk-CDZYVN2H.js";
import "./chunk-SDPHKB3N.js";
import "./chunk-7FHCIZTJ.js";
import {
  c
} from "./chunk-IMOYD7TP.js";
import "./chunk-KS4WXQBA.js";
import {
  f
} from "./chunk-4SLPL4G6.js";
import "./chunk-D2TJBM23.js";
import {
  a,
  r,
  u
} from "./chunk-NC6TU6DS.js";
import "./chunk-3MFXKT2T.js";
import "./chunk-ZAMEBRJJ.js";
import "./chunk-Z33DWCSN.js";
import "./chunk-Q4ZBFQUV.js";
import "./chunk-AQ5AB5ZX.js";
import "./chunk-57B3JMFY.js";
import "./chunk-WLCZHZ7R.js";
import "./chunk-C5KIYOYM.js";
import "./chunk-4W36LOWD.js";
import "./chunk-PDOBFT7G.js";
import "./chunk-23GPBYQT.js";
import "./chunk-QFNIC7HS.js";
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
import "./chunk-TBOXDPPB.js";
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
  __async
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/arcade/arcadeAsyncRuntime.js
function Q2(e3, t3) {
  return __async(this, null, function* () {
    const n4 = [];
    for (let r3 = 0; r3 < t3.arguments.length; r3++) n4.push(yield re(e3, t3.arguments[r3]));
    return n4;
  });
}
function X(e3, t3, n4) {
  return __async(this, null, function* () {
    if (true === t3.preparsed) return n4(e3, null, t3.arguments);
    return n4(e3, t3, yield Q2(e3, t3));
  });
}
var $2 = class extends r2 {
  constructor(e3, t3) {
    super(), this.definition = null, this.context = null, this.definition = e3, this.context = t3;
  }
  createFunction(e3) {
    return (...t3) => {
      const n4 = { spatialReference: this.context.spatialReference, console: this.context.console, lrucache: this.context.lrucache, timeZone: this.context.timeZone ?? null, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, services: this.context.services, abortSignal: this.context.abortSignal, localScope: {}, depthCounter: { depth: e3.depthCounter + 1 }, globalScope: this.context.globalScope };
      if (n4.depthCounter.depth > 64) throw new a(e3, r.MaximumCallDepth, null);
      return ee(this.definition, n4, t3, null);
    };
  }
  call(e3, t3) {
    return ne(e3, t3, ((n4, r3, o3) => {
      const a2 = { spatialReference: e3.spatialReference, services: e3.services, console: e3.console, libraryResolver: e3.libraryResolver, exports: e3.exports, lrucache: e3.lrucache, timeZone: e3.timeZone ?? null, interceptor: e3.interceptor, localScope: {}, abortSignal: e3.abortSignal, globalScope: e3.globalScope, depthCounter: { depth: e3.depthCounter.depth + 1 } };
      if (a2.depthCounter.depth > 64) throw new a(e3, r.MaximumCallDepth, t3);
      return ee(this.definition, a2, o3, t3);
    }));
  }
  marshalledCall(e3, t3, n4, r3) {
    return r3(e3, t3, ((o3, a2, i2) => __async(this, null, function* () {
      const l = { spatialReference: e3.spatialReference, services: e3.services, globalScope: n4.globalScope, depthCounter: { depth: e3.depthCounter.depth + 1 }, libraryResolver: e3.libraryResolver, exports: e3.exports, console: e3.console, abortSignal: e3.abortSignal, lrucache: e3.lrucache, timeZone: e3.timeZone ?? null, interceptor: e3.interceptor, localScope: {} };
      return i2 = i2.map(((t4) => !G(t4) || t4 instanceof s3 ? t4 : n3(t4, e3, r3))), n3(yield ee(this.definition, l, i2, t3), n4, r3);
    })));
  }
};
function ee(e3, n4, r3, o3) {
  return __async(this, null, function* () {
    const a2 = e3.body;
    if (r3.length !== e3.params.length) throw new a(n4, r.WrongNumberOfParameters, null);
    for (let l = 0; l < r3.length; l++) {
      const o4 = e3.params[l];
      "Identifier" === o4.type && null != n4.localScope && (n4.localScope[t2(o4)] = { value: r3[l] });
    }
    const i2 = yield oe(n4, a2);
    if (i2 instanceof v) return i2.value;
    if (i2 === P) throw new a(n4, r.UnexpectedToken, o3);
    if (i2 === Y) throw new a(n4, r.UnexpectedToken, o3);
    return i2 instanceof _ ? i2.value : i2;
  });
}
var te2 = class extends s {
  constructor(e3) {
    super(), this.source = e3;
  }
  global(e3) {
    const n4 = this.executingContext.globalScope[t2(e3)];
    if (G(n4.value) && !(n4.value instanceof s3)) {
      const r3 = new s3();
      return r3.fn = n4.value, r3.parameterEvaluator = ne, r3.context = this.executingContext, this.executingContext.globalScope[t2(e3)] = { value: r3 }, r3;
    }
    return n4.value;
  }
  setGlobal(e3, n4) {
    if (G(n4)) throw new a(null, r.AssignModuleFunction, null);
    this.executingContext.globalScope[t2(e3)] = { value: n4 };
  }
  hasGlobal(e3) {
    return void 0 === this.executingContext.exports[e3] && (e3 = t2(e3)), void 0 !== this.executingContext.exports[e3];
  }
  loadModule(t3) {
    return __async(this, null, function* () {
      const n4 = t3.spatialReference ?? f.WebMercator;
      this.moduleScope = Ve(null, null, t3.timeZone), this.executingContext = { spatialReference: n4, services: t3.services, libraryResolver: new s2(t3.libraryResolver._moduleSingletons, this.source.syntax.loadedModules), exports: {}, abortSignal: t3.abortSignal ?? n2, globalScope: this.moduleScope, console: t3.console ?? Te, lrucache: t3.lrucache, timeZone: t3.timeZone ?? null, interceptor: t3.interceptor, localScope: null, depthCounter: { depth: 1 } }, yield ve(this.executingContext, this.source.syntax);
    });
  }
};
function ne(e3, t3, n4) {
  return __async(this, null, function* () {
    if (true === t3.preparsed) return n4(e3, null, t3.arguments);
    return n4(e3, t3, yield Q2(e3, t3));
  });
}
function re(e3, t3) {
  return __async(this, null, function* () {
    t3.breakpoint && (yield t3.breakpoint());
    try {
      switch (t3.type) {
        case "UpdateExpression":
          return yield he(e3, t3);
        case "AssignmentExpression":
          return yield me2(e3, t3);
        case "TemplateLiteral":
          return yield De(e3, t3);
        case "Identifier":
          return Ee(e3, t3);
        case "MemberExpression":
          return yield ke(e3, t3);
        case "Literal":
          return t3.value;
        case "CallExpression":
          return yield Be(e3, t3);
        case "UnaryExpression":
          return yield Re(e3, t3);
        case "BinaryExpression":
          return yield Ae(e3, t3);
        case "LogicalExpression":
          return yield Ne2(e3, t3);
        case "ArrayExpression":
          return yield Ce(e3, t3);
        case "ObjectExpression":
          return yield ae2(e3, t3);
        default:
          throw new a(e3, r.Unrecognized, t3);
      }
    } catch (n4) {
      throw u(e3, t3, n4);
    }
  });
}
function oe(e3, t3) {
  return __async(this, null, function* () {
    t3.breakpoint && (yield t3.breakpoint());
    try {
      switch (t3.type) {
        case "ImportDeclaration":
          return yield Ie(e3, t3);
        case "ExportNamedDeclaration":
          return yield Me(e3, t3);
        case "VariableDeclaration":
          return yield Oe(e3, t3, 0);
        case "BlockStatement":
          return yield ve(e3, t3);
        case "FunctionDeclaration":
          return yield Fe(e3, t3);
        case "ReturnStatement":
          return yield xe(e3, t3);
        case "IfStatement":
          return yield be(e3, t3);
        case "ExpressionStatement":
          return yield ye(e3, t3);
        case "ForStatement":
          return yield le(e3, t3);
        case "WhileStatement":
          return yield ie(e3, t3);
        case "ForInStatement":
          return yield we(e3, t3);
        case "ForOfStatement":
          return yield de2(e3, t3);
        case "BreakStatement":
          return P;
        case "EmptyStatement":
          return I;
        case "ContinueStatement":
          return Y;
        default:
          throw new a(e3, r.Unrecognized, t3);
      }
    } catch (n4) {
      throw u(e3, t3, n4);
    }
  });
}
function ae2(e3, t3) {
  return __async(this, null, function* () {
    const n4 = [];
    for (let i2 = 0; i2 < t3.properties.length; i2++) {
      const r4 = t3.properties[i2], o4 = yield re(e3, r4.value), a3 = "Identifier" === r4.key.type ? r4.key.name : yield re(e3, r4.key);
      n4[i2] = { key: a3, value: o4 };
    }
    const r3 = /* @__PURE__ */ Object.create(null), o3 = /* @__PURE__ */ new Map();
    for (let i2 = 0; i2 < n4.length; i2++) {
      const a3 = n4[i2];
      if (G(a3.value)) throw new a(e3, r.NoFunctionInDictionary, t3);
      if (false === e(a3.key)) throw new a(e3, r.KeyMustBeString, t3);
      let l = a3.key.toString();
      const u2 = l.toLowerCase();
      o3.has(u2) ? l = o3.get(u2) : o3.set(u2, l), a3.value === I ? r3[l] = null : r3[l] = a3.value;
    }
    const a2 = new j(r3);
    return a2.immutable = false, a2;
  });
}
function ie(e3, t3) {
  return __async(this, null, function* () {
    let n4 = yield re(e3, t3.test);
    if (false === n4) return I;
    if (true !== n4) throw new a(e3, r.BooleanConditionRequired, t3);
    for (; true === n4; ) {
      const r3 = yield oe(e3, t3.body);
      if (r3 === P) break;
      if (r3 instanceof v) return r3;
      if (n4 = yield re(e3, t3.test), true !== n4 && false !== n4) throw new a(e3, r.BooleanConditionRequired, t3);
    }
    return I;
  });
}
function le(e3, t3) {
  return __async(this, null, function* () {
    try {
      for (null !== t3.init && ("VariableDeclaration" === t3.init.type ? yield oe(e3, t3.init) : yield re(e3, t3.init)); ; ) {
        if (null !== t3.test) {
          const n5 = yield re(e3, t3.test);
          if (true === e3.abortSignal?.aborted) throw new a(e3, r.Cancelled, t3);
          if (false === n5) break;
          if (true !== n5) throw new a(e3, r.BooleanConditionRequired, t3);
        }
        const n4 = yield oe(e3, t3.body);
        if (n4 === P) break;
        if (n4 instanceof v) return n4;
        null !== t3.update && (yield re(e3, t3.update));
      }
      return I;
    } catch (n4) {
      throw n4;
    }
  });
}
function se(e3, t3, n4, r3, o3 = "i") {
  return __async(this, null, function* () {
    const a2 = n4.length;
    for (let i2 = 0; i2 < a2; i2++) {
      if ("k" === o3) {
        if (i2 >= n4.length) throw new a(e3, r.OutOfBounds, t3);
        r3.value = n4[i2];
      } else r3.value = i2;
      const a3 = yield oe(e3, t3.body);
      if (a3 === P) break;
      if (a3 instanceof v) return a3;
    }
    return I;
  });
}
function ce(e3, t3, n4, r3, o3 = "i") {
  return __async(this, null, function* () {
    const a2 = n4.length();
    for (let i2 = 0; i2 < a2; i2++) {
      r3.value = "k" === o3 ? n4.get(i2) : i2;
      const a3 = yield oe(e3, t3.body);
      if (a3 === P) break;
      if (a3 instanceof v) return a3;
    }
    return I;
  });
}
function ue(e3, t3, n4, r3) {
  return __async(this, null, function* () {
    const o3 = n4.iterator(e3.abortSignal);
    let a2;
    for (; null != (a2 = yield o3.next()); ) {
      const o4 = D.createFromGraphicLikeObject(a2.geometry, a2.attributes, n4, e3.timeZone);
      o4._underlyingGraphic = a2, r3.value = o4;
      const i2 = yield oe(e3, t3.body);
      if (i2 === P) break;
      if (i2 instanceof v) return i2;
    }
    return I;
  });
}
function fe(e3, t3, n4, r3) {
  return __async(this, null, function* () {
    for (const o3 of n4.keys()) {
      const a2 = n4.field(o3);
      r3.value = j.containerEntry(o3, a2);
      const i2 = yield oe(e3, t3.body);
      if (i2 === P) break;
      if (i2 instanceof v) return i2;
    }
    return I;
  });
}
function pe2(e3, t3, n4, r3) {
  return __async(this, null, function* () {
    for (const o3 of f2(n4)) {
      const i2 = d(n4, o3, e3, t3, 1);
      r3.value = j.containerEntry(o3, i2);
      const s4 = yield oe(e3, t3.body);
      if (s4 === P) break;
      if (s4 instanceof v) return s4;
    }
    return I;
  });
}
function we(e3, n4) {
  return __async(this, null, function* () {
    const r3 = yield re(e3, n4.right);
    "VariableDeclaration" === n4.left.type && (yield oe(e3, n4.left));
    const o3 = t2("VariableDeclaration" === n4.left.type ? n4.left.declarations[0].id : n4.left);
    let a2 = null;
    if (null != e3.localScope && void 0 !== e3.localScope[o3] && (a2 = e3.localScope[o3]), null === a2 && void 0 !== e3.globalScope[o3]) {
      const t3 = e3.globalScope[o3].value;
      a2 = e3.globalScope[o3] = { value: t3 };
    }
    if (null === a2) throw new a(e3, r.InvalidIdentifier, n4);
    return o(r3) || e(r3) ? yield se(e3, n4, r3, a2) : te(r3) ? yield ce(e3, n4, r3, a2) : r3 instanceof j || Q(r3) ? yield se(e3, n4, r3.keys(), a2, "k") : K(r3) ? yield ue(e3, n4, r3, a2) : H(r3) ? yield se(e3, n4, f2(r3), a2, "k") : I;
  });
}
function de2(e3, n4) {
  return __async(this, null, function* () {
    const r3 = yield re(e3, n4.right);
    "VariableDeclaration" === n4.left.type && (yield oe(e3, n4.left));
    const o3 = t2("VariableDeclaration" === n4.left.type ? n4.left.declarations[0].id : n4.left);
    let a2 = null;
    if (null != e3.localScope && void 0 !== e3.localScope[o3] && (a2 = e3.localScope[o3]), null === a2 && void 0 !== e3.globalScope[o3]) {
      const t3 = e3.globalScope[o3].value;
      a2 = e3.globalScope[o3] = { value: t3 };
    }
    if (null === a2) throw new a(e3, r.InvalidIdentifier, n4);
    return o(r3) || e(r3) ? yield se(e3, n4, r3, a2, "k") : te(r3) ? yield ce(e3, n4, r3, a2, "k") : r3 instanceof j || Q(r3) ? yield fe(e3, n4, r3, a2) : K(r3) ? yield ue(e3, n4, r3, a2) : H(r3) ? yield pe2(e3, n4, r3, a2) : I;
  });
}
function he(e3, n4) {
  return __async(this, null, function* () {
    const r3 = n4.argument;
    if ("CallExpression" === r3.type) throw new a(e3, r.NeverReach, n4);
    if ("MemberExpression" === r3.type) {
      const t3 = yield re(e3, r3.object);
      let o4, a3;
      if (true === r3.computed) o4 = yield re(e3, r3.property);
      else {
        if ("Identifier" !== r3.property.type) throw new a(e3, r.Unrecognized, n4);
        o4 = r3.property.name;
      }
      if (o(t3)) {
        if (!n(o4)) throw new a(e3, r.ArrayAccessorMustBeNumber, n4);
        if (o4 < 0 && (o4 = t3.length + o4), o4 < 0 || o4 >= t3.length) throw new a(e3, r.OutOfBounds, n4);
        a3 = Ne(t3[o4]), t3[o4] = "++" === n4.operator ? a3 + 1 : a3 - 1;
      } else if (t3 instanceof j) {
        if (false === e(o4)) throw new a(e3, r.KeyAccessorMustBeString, n4);
        if (true !== t3.hasField(o4)) throw new a(e3, r.FieldNotFound, n4, { key: o4 });
        a3 = Ne(t3.field(o4)), t3.setField(o4, "++" === n4.operator ? a3 + 1 : a3 - 1);
      } else if (t3 instanceof te2) {
        if (false === e(o4)) throw new a(e3, r.ModuleAccessorMustBeString, n4);
        if (true !== t3.hasGlobal(o4)) throw new a(e3, r.ModuleExportNotFound, n4);
        a3 = Ne(t3.global(o4)), t3.setGlobal(o4, "++" === n4.operator ? a3 + 1 : a3 - 1);
      } else {
        if (!$(t3)) throw te(t3) ? new a(e3, r.Immutable, n4) : new a(e3, r.InvalidParameter, n4);
        if (false === e(o4)) throw new a(e3, r.KeyAccessorMustBeString, n4);
        if (true !== t3.hasField(o4)) throw new a(e3, r.FieldNotFound, n4, { key: o4 });
        a3 = Ne(t3.field(o4)), t3.setField(o4, "++" === n4.operator ? a3 + 1 : a3 - 1);
      }
      return false === n4.prefix ? a3 : "++" === n4.operator ? a3 + 1 : a3 - 1;
    }
    const o3 = t2(r3);
    let a2;
    if (null != e3.localScope && void 0 !== e3.localScope[o3]) return a2 = Ne(e3.localScope[o3].value), e3.localScope[o3] = { value: "++" === n4.operator ? a2 + 1 : a2 - 1 }, false === n4.prefix ? a2 : "++" === n4.operator ? a2 + 1 : a2 - 1;
    if (void 0 !== e3.globalScope[o3]) return a2 = Ne(e3.globalScope[o3].value), e3.globalScope[o3] = { value: "++" === n4.operator ? a2 + 1 : a2 - 1 }, false === n4.prefix ? a2 : "++" === n4.operator ? a2 + 1 : a2 - 1;
    throw new a(e3, r.InvalidIdentifier, n4);
  });
}
function ge(e3, t3, n4, r3, o3) {
  switch (t3) {
    case "=":
      return e3 === I ? null : e3;
    case "/=":
      return Ne(n4) / Ne(e3);
    case "*=":
      return Ne(n4) * Ne(e3);
    case "-=":
      return Ne(n4) - Ne(e3);
    case "+=":
      return e(n4) || e(e3) ? pe(n4) + pe(e3) : Ne(n4) + Ne(e3);
    case "%=":
      return Ne(n4) % Ne(e3);
    default:
      throw new a(o3, r.UnsupportedOperator, r3);
  }
}
function me2(e3, n4) {
  return __async(this, null, function* () {
    const r3 = n4.left;
    if ("MemberExpression" === r3.type) {
      const t3 = yield re(e3, r3.object);
      let o4;
      if (true === r3.computed) o4 = yield re(e3, r3.property);
      else {
        if ("Identifier" !== r3.property.type) throw new a(e3, r.InvalidIdentifier, n4);
        o4 = r3.property.name;
      }
      const a2 = yield re(e3, n4.right);
      if (o(t3)) {
        if (!n(o4)) throw new a(e3, r.ArrayAccessorMustBeNumber, n4);
        if (o4 < 0 && (o4 = t3.length + o4), o4 < 0 || o4 > t3.length) throw new a(e3, r.OutOfBounds, n4);
        if (o4 === t3.length) {
          if ("=" !== n4.operator) throw new a(e3, r.OutOfBounds, n4);
          t3[o4] = ge(a2, n4.operator, t3[o4], n4, e3);
        } else t3[o4] = ge(a2, n4.operator, t3[o4], n4, e3);
      } else if (t3 instanceof j) {
        if (false === e(o4)) throw new a(e3, r.KeyAccessorMustBeString, n4);
        if (true === t3.hasField(o4)) t3.setField(o4, ge(a2, n4.operator, t3.field(o4), n4, e3));
        else {
          if ("=" !== n4.operator) throw new a(e3, r.FieldNotFound, n4, { key: o4 });
          t3.setField(o4, ge(a2, n4.operator, null, n4, e3));
        }
      } else if (t3 instanceof te2) {
        if (false === e(o4)) throw new a(e3, r.KeyAccessorMustBeString, n4);
        if (true !== t3.hasGlobal(o4)) throw new a(e3, r.ModuleExportNotFound, n4);
        t3.setGlobal(o4, ge(a2, n4.operator, t3.global(o4), n4, e3));
      } else {
        if (!$(t3)) throw te(t3) ? new a(e3, r.Immutable, n4) : new a(e3, r.InvalidParameter, n4);
        if (false === e(o4)) throw new a(e3, r.KeyAccessorMustBeString, n4);
        if (true === t3.hasField(o4)) t3.setField(o4, ge(a2, n4.operator, t3.field(o4), n4, e3));
        else {
          if ("=" !== n4.operator) throw new a(e3, r.FieldNotFound, n4, { key: o4 });
          t3.setField(o4, ge(a2, n4.operator, null, n4, e3));
        }
      }
      return I;
    }
    const o3 = t2(r3);
    if (null != e3.localScope && void 0 !== e3.localScope[o3]) {
      const t3 = yield re(e3, n4.right);
      return e3.localScope[o3] = { value: ge(t3, n4.operator, e3.localScope[o3].value, n4, e3) }, I;
    }
    if (void 0 !== e3.globalScope[o3]) {
      const t3 = yield re(e3, n4.right);
      return e3.globalScope[o3] = { value: ge(t3, n4.operator, e3.globalScope[o3].value, n4, e3) }, I;
    }
    throw new a(e3, r.InvalidIdentifier, n4);
  });
}
function ye(e3, t3) {
  return __async(this, null, function* () {
    const n4 = yield re(e3, t3.expression);
    return n4 === I ? I : new _(n4);
  });
}
function be(e3, t3) {
  return __async(this, null, function* () {
    const n4 = yield re(e3, t3.test);
    if (true === n4) return oe(e3, t3.consequent);
    if (false === n4) return null !== t3.alternate ? oe(e3, t3.alternate) : I;
    throw new a(e3, r.BooleanConditionRequired, t3);
  });
}
function ve(e3, t3) {
  return __async(this, null, function* () {
    return Se(e3, t3, 0);
  });
}
function Se(e3, t3, n4) {
  return __async(this, null, function* () {
    if (n4 >= t3.body.length) return I;
    const r3 = yield oe(e3, t3.body[n4]);
    return r3 instanceof v || r3 === P || r3 === Y || n4 === t3.body.length - 1 ? r3 : Se(e3, t3, n4 + 1);
  });
}
function xe(e3, t3) {
  return __async(this, null, function* () {
    if (null === t3.argument) return new v(I);
    const n4 = yield re(e3, t3.argument);
    return new v(n4);
  });
}
function Fe(e3, n4) {
  return __async(this, null, function* () {
    const r3 = t2(n4.id);
    return e3.globalScope[r3] = { value: new $2(n4, e3) }, I;
  });
}
function Ie(e3, n4) {
  return __async(this, null, function* () {
    const r3 = t2(n4.specifiers[0].local), o3 = e3.libraryResolver.loadLibrary(r3);
    let a2;
    return e3.libraryResolver._moduleSingletons?.has(o3.uri) ? a2 = e3.libraryResolver._moduleSingletons.get(o3.uri) : (a2 = new te2(o3), yield a2.loadModule(e3), e3.libraryResolver._moduleSingletons?.set(o3.uri, a2)), e3.globalScope[r3] = { value: a2 }, I;
  });
}
function Me(e3, n4) {
  return __async(this, null, function* () {
    if (yield oe(e3, n4.declaration), "FunctionDeclaration" === n4.declaration.type) e3.exports[t2(n4.declaration.id)] = "function";
    else if ("VariableDeclaration" === n4.declaration.type) for (const r3 of n4.declaration.declarations) e3.exports[t2(r3.id)] = "variable";
    return I;
  });
}
function Oe(e3, t3, n4) {
  return __async(this, null, function* () {
    return n4 >= t3.declarations.length ? I : (yield je(e3, t3.declarations[n4]), n4 === t3.declarations.length - 1 || (yield Oe(e3, t3, n4 + 1)), I);
  });
}
function je(e3, n4) {
  return __async(this, null, function* () {
    let r3 = null;
    if (r3 = null === n4.init ? null : yield re(e3, n4.init), null !== e3.localScope) {
      if (r3 === I && (r3 = null), "Identifier" !== n4.id.type) throw new a(e3, r.InvalidIdentifier, n4);
      const o4 = t2(n4.id);
      return void (null != e3.localScope && (e3.localScope[o4] = { value: r3 }));
    }
    if ("Identifier" !== n4.id.type) throw new a(e3, r.InvalidIdentifier, n4);
    const o3 = t2(n4.id);
    r3 === I && (r3 = null), e3.globalScope[o3] = { value: r3 };
  });
}
function ke(e3, t3) {
  return __async(this, null, function* () {
    const n4 = yield re(e3, t3.object);
    if (null === n4) throw new a(e3, r.MemberOfNull, t3);
    if (false === t3.computed) {
      if ("Identifier" === t3.property.type) {
        if (n4 instanceof j || Q(n4)) return n4.field(t3.property.name);
        if (n4 instanceof c) return d(n4, t3.property.name, e3, t3);
        if (n4 instanceof te2) {
          if (!n4.hasGlobal(t3.property.name)) throw new a(e3, r.InvalidIdentifier, t3);
          return n4.global(t3.property.name);
        }
        throw new a(e3, r.InvalidMemberAccessKey, t3);
      }
      throw new a(e3, r.InvalidMemberAccessKey, t3);
    }
    let r3 = yield re(e3, t3.property);
    if (n4 instanceof j || Q(n4)) {
      if (e(r3)) return n4.field(r3);
      throw new a(e3, r.InvalidMemberAccessKey, t3);
    }
    if (n4 instanceof te2) {
      if (e(r3)) return n4.global(r3);
      throw new a(e3, r.InvalidMemberAccessKey, t3);
    }
    if (n4 instanceof c) {
      if (e(r3)) return d(n4, r3, e3, t3);
      throw new a(e3, r.InvalidMemberAccessKey, t3);
    }
    if (o(n4)) {
      if (n(r3) && isFinite(r3) && Math.floor(r3) === r3) {
        if (r3 < 0 && (r3 = n4.length + r3), r3 >= n4.length || r3 < 0) throw new a(e3, r.OutOfBounds, t3);
        return n4[r3];
      }
      throw new a(e3, r.InvalidMemberAccessKey, t3);
    }
    if (te(n4)) {
      if (n(r3) && isFinite(r3) && Math.floor(r3) === r3) {
        if (r3 < 0 && (r3 = n4.length() + r3), r3 >= n4.length() || r3 < 0) throw new a(e3, r.OutOfBounds, t3);
        return n4.get(r3);
      }
      throw new a(e3, r.InvalidMemberAccessKey, t3);
    }
    if (e(n4)) {
      if (n(r3) && isFinite(r3) && Math.floor(r3) === r3) {
        if (r3 < 0 && (r3 = n4.length + r3), r3 >= n4.length || r3 < 0) throw new a(e3, r.OutOfBounds, t3);
        return n4[r3];
      }
      throw new a(e3, r.InvalidMemberAccessKey, t3);
    }
    throw new a(e3, r.InvalidMemberAccessKey, t3);
  });
}
function Re(e3, t3) {
  return __async(this, null, function* () {
    const n4 = yield re(e3, t3.argument);
    if (t(n4)) {
      if ("!" === t3.operator) return !n4;
      if ("-" === t3.operator) return -1 * Ne(n4);
      if ("+" === t3.operator) return 1 * Ne(n4);
      if ("~" === t3.operator) return ~Ne(n4);
      throw new a(e3, r.UnsupportedUnaryOperator, t3);
    }
    if ("-" === t3.operator) return -1 * Ne(n4);
    if ("+" === t3.operator) return 1 * Ne(n4);
    if ("~" === t3.operator) return ~Ne(n4);
    throw new a(e3, r.UnsupportedUnaryOperator, t3);
  });
}
function Ce(e3, t3) {
  return __async(this, null, function* () {
    const n4 = [];
    for (let r3 = 0; r3 < t3.elements.length; r3++) n4.push(yield re(e3, t3.elements[r3]));
    for (let r3 = 0; r3 < n4.length; r3++) {
      if (G(n4[r3])) throw new a(e3, r.NoFunctionInArray, t3);
      n4[r3] === I && (n4[r3] = null);
    }
    return n4;
  });
}
function Ae(e3, t3) {
  return __async(this, null, function* () {
    const n4 = yield re(e3, t3.left), r3 = yield re(e3, t3.right);
    switch (t3.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return Ye(Ne(n4), Ne(r3), t3.operator);
      case "==":
        return de(n4, r3);
      case "!=":
        return !de(n4, r3);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return me(n4, r3, t3.operator);
      case "+":
        return e(n4) || e(r3) ? pe(n4) + pe(r3) : Ne(n4) + Ne(r3);
      case "-":
        return Ne(n4) - Ne(r3);
      case "*":
        return Ne(n4) * Ne(r3);
      case "/":
        return Ne(n4) / Ne(r3);
      case "%":
        return Ne(n4) % Ne(r3);
      default:
        throw new a(e3, r.UnsupportedOperator, t3);
    }
  });
}
function Ne2(e3, t3) {
  return __async(this, null, function* () {
    const n4 = yield re(e3, t3.left);
    if (!t(n4)) throw new a(e3, r.LogicalExpressionOnlyBoolean, t3);
    switch (t3.operator) {
      case "||": {
        if (true === n4) return n4;
        const r3 = yield re(e3, t3.right);
        if (t(r3)) return r3;
        throw new a(e3, r.LogicExpressionOrAnd, t3);
      }
      case "&&": {
        if (false === n4) return n4;
        const r3 = yield re(e3, t3.right);
        if (t(r3)) return r3;
        throw new a(e3, r.LogicExpressionOrAnd, t3);
      }
      default:
        throw new a(e3, r.LogicExpressionOrAnd, t3);
    }
  });
}
function Ee(e3, n4) {
  const r3 = t2(n4);
  if (null != e3.localScope && void 0 !== e3.localScope[r3]) return e3.localScope[r3].value;
  if (void 0 !== e3.globalScope[r3]) return e3.globalScope[r3].value;
  throw new a(e3, r.InvalidIdentifier, n4);
}
function Be(e3, n4) {
  return __async(this, null, function* () {
    if ("MemberExpression" === n4.callee.type) {
      const t3 = yield re(e3, n4.callee.object);
      if (!(t3 instanceof te2)) throw new a(e3, r.FunctionNotFound, n4);
      const r4 = false === n4.callee.computed ? n4.callee.property.name : yield re(e3, n4.callee.property);
      if (!t3.hasGlobal(r4)) throw new a(e3, r.FunctionNotFound, n4);
      const o3 = t3.global(r4);
      if (!G(o3)) throw new a(e3, r.CallNonFunction, n4);
      return o3.call(e3, n4);
    }
    if ("Identifier" !== n4.callee.type) throw new a(e3, r.FunctionNotFound, n4);
    const r3 = t2(n4.callee);
    if (null != e3.localScope && void 0 !== e3.localScope[r3]) {
      const t3 = e3.localScope[r3];
      if (G(t3.value)) return t3.value.call(e3, n4);
      throw new a(e3, r.CallNonFunction, n4);
    }
    if (void 0 !== e3.globalScope[r3]) {
      const t3 = e3.globalScope[r3];
      if (G(t3.value)) return t3.value.call(e3, n4);
      throw new a(e3, r.CallNonFunction, n4);
    }
    throw new a(e3, r.FunctionNotFound, n4);
  });
}
function De(e3, t3) {
  return __async(this, null, function* () {
    let n4 = "", r3 = 0;
    for (const o3 of t3.quasis) if (n4 += o3.value ? o3.value.cooked : "", false === o3.tail) {
      if (t3.expressions[r3]) {
        const o4 = yield re(e3, t3.expressions[r3]);
        if (G(o4)) throw new a(e3, r.NoFunctionInTemplateLiteral, t3);
        n4 += pe(o4);
      }
      r3++;
    }
    return n4;
  });
}
function Ke(e3, t3) {
  return __async(this, null, function* () {
    ae(null === t3.arguments ? [] : t3.arguments, 3, 3, e3, t3);
    const n4 = yield re(e3, t3.arguments[0]);
    if (false === t(n4)) throw new a(e3, r.BooleanConditionRequired, t3);
    return re(e3, n4 ? t3.arguments[1] : t3.arguments[2]);
  });
}
function Ue(e3, t3) {
  return __async(this, null, function* () {
    ae(null === t3.arguments ? [] : t3.arguments, 2, 3, e3, t3);
    const n4 = yield re(e3, t3.arguments[0]);
    if (3 === t3.arguments.length) {
      const r3 = yield re(e3, t3.arguments[1]), a2 = y(n4, r3);
      return null != a2 && "" !== a2 ? a2 : re(e3, t3.arguments[2]);
    }
    return null == n4 || "" === n4 ? re(e3, t3.arguments[1]) : n4;
  });
}
function Ze(e3, t3) {
  return __async(this, null, function* () {
    if (t3.arguments.length < 2) throw new a(e3, r.WrongNumberOfParameters, t3);
    if (2 === t3.arguments.length) return re(e3, t3.arguments[1]);
    if ((t3.arguments.length - 1) % 2 == 0) throw new a(e3, r.WrongNumberOfParameters, t3);
    return Ge(e3, t3, 1, yield re(e3, t3.arguments[0]));
  });
}
function Ge(e3, t3, n4, r3) {
  return __async(this, null, function* () {
    const o3 = yield re(e3, t3.arguments[n4]);
    if (de(o3, r3)) return re(e3, t3.arguments[n4 + 1]);
    const a2 = t3.arguments.length - n4;
    return 1 === a2 ? re(e3, t3.arguments[n4]) : 2 === a2 ? null : 3 === a2 ? re(e3, t3.arguments[n4 + 2]) : Ge(e3, t3, n4 + 2, r3);
  });
}
function Le(e3, t3) {
  return __async(this, null, function* () {
    if (t3.arguments.length < 3) throw new a(e3, r.WrongNumberOfParameters, t3);
    if (t3.arguments.length % 2 == 0) throw new a(e3, r.WrongNumberOfParameters, t3);
    const n4 = yield re(e3, t3.arguments[0]);
    if (false === t(n4)) throw new a(e3, r.BooleanConditionRequired, t3.arguments[0]);
    return qe(e3, t3, 0, n4);
  });
}
function qe(e3, t3, n4, r3) {
  return __async(this, null, function* () {
    if (true === r3) return re(e3, t3.arguments[n4 + 1]);
    if (3 === t3.arguments.length - n4) return re(e3, t3.arguments[n4 + 2]);
    const o3 = yield re(e3, t3.arguments[n4 + 2]);
    if (false === t(o3)) throw new a(e3, r.ModuleExportNotFound, t3.arguments[n4 + 2]);
    return qe(e3, t3, n4 + 2, o3);
  });
}
function Pe() {
  const e3 = /* @__PURE__ */ Object.create(null);
  x(e3, X), E(e3, X), j2(e3, X, Ee), p2(e3, X), C(e3, X), f3(e3, X), G2({ functions: e3, compiled: false, signatures: null, evaluateIdentifier: null, mode: "async", standardFunction: X, standardFunctionAsync: ne }), e3.iif = Ke, e3.defaultvalue = Ue, e3.decode = Ze, e3.when = Le;
  const t3 = function() {
    this.textformatting = { value: j.textFormatting() };
  };
  t3.prototype = /* @__PURE__ */ Object.create(null), t3.prototype.infinity = Object.freeze({ value: Number.POSITIVE_INFINITY }), t3.prototype.pi = Object.freeze({ value: Math.PI });
  for (const [n4, r3] of Object.entries(e3)) t3.prototype[n4] = Object.freeze({ value: new e2(r3) });
  return t3;
}
var We = Pe();
function ze(e3) {
  const t3 = { mode: "async", compiled: false, functions: /* @__PURE__ */ Object.create(null), signatures: [], standardFunction: X, standardFunctionAsync: ne, evaluateIdentifier: Ee };
  for (let n4 = 0; n4 < e3.length; n4++) e3[n4].registerFunctions(t3);
  for (const [n4, r3] of Object.entries(t3.functions)) We.prototype[n4] = Object.freeze({ value: new e2(r3) });
  for (let n4 = 0; n4 < t3.signatures.length; n4++) o2(t3.signatures[n4], "async");
}
function Ve(e3, t3, n4) {
  const r3 = new We();
  null == e3 && (e3 = {}), null == t3 && (t3 = {});
  for (const o3 in t3) r3[o3] = { value: new e2(t3[o3]) };
  for (const o3 in e3) r3[o3] = { value: i(e3[o3]) ? D.createFromGraphic(e3[o3], n4) : e3[o3] };
  return r3;
}
function Te(e3) {
  console.log(e3);
}
function _e(t3, n4) {
  return __async(this, null, function* () {
    const o3 = n4.spatialReference ?? f.WebMercator;
    let a2 = null;
    t3.usesModules && (a2 = new s2(/* @__PURE__ */ new Map(), t3.loadedModules));
    const i2 = Ve(n4.vars, n4.customfunctions, n4.timeZone), l = { spatialReference: o3, services: n4.services, exports: {}, libraryResolver: a2, abortSignal: n4.abortSignal ?? n2, globalScope: i2, console: n4.console ?? Te, timeZone: n4.timeZone ?? null, lrucache: n4.lrucache, interceptor: n4.interceptor, localScope: null, depthCounter: { depth: 1 } }, u2 = yield ve(l, t3);
    if (u2 instanceof v || u2 instanceof _) {
      const e3 = u2.value;
      if (U(e3)) return null;
      if (G(e3)) throw new a(l, r.IllegalResult, null);
      return e3;
    }
    if (U(u2)) return null;
    if (u2 === P) throw new a(l, r.IllegalResult, null);
    if (u2 === Y) throw new a(l, r.IllegalResult, null);
    throw new a(l, r.NeverReach, null);
  });
}
ze([p]), ze([v2]);
export {
  _e as executeScript,
  ze as extend
};
//# sourceMappingURL=chunk-M4DLCUPO.js.map
