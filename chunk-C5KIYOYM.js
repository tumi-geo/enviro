import {
  e,
  n,
  o,
  t
} from "./chunk-4W36LOWD.js";
import {
  DateTime
} from "./chunk-23GPBYQT.js";
import {
  b,
  i as i2,
  s
} from "./chunk-QFNIC7HS.js";
import {
  i
} from "./chunk-BS2W7XFZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-HCFRGWKF.js";

// node_modules/@arcgis/core/intl/date.js
var l = { year: void 0, month: void 0, day: void 0, weekday: void 0 };
var y = { hour: void 0, minute: void 0, second: void 0 };
var d = { timeZone: n };
var g = { year: "numeric", month: "numeric", day: "numeric" };
var u = { year: "numeric", month: "long", day: "numeric" };
var c = { year: "numeric", month: "short", day: "numeric" };
var D = { year: "numeric", month: "long", weekday: "long", day: "numeric" };
var f = { hour: "numeric", minute: "numeric" };
var T = __spreadProps(__spreadValues({}, f), { second: "numeric" });
var L = { hourCycle: "h23" };
var S = __spreadValues(__spreadValues({}, f), L);
var M = __spreadValues(__spreadValues({}, T), L);
var w = { "short-date": g, "short-date-short-time": __spreadValues(__spreadValues({}, g), f), "short-date-short-time-24": __spreadValues(__spreadValues({}, g), S), "short-date-long-time": __spreadValues(__spreadValues({}, g), T), "short-date-long-time-24": __spreadValues(__spreadValues({}, g), M), "short-date-le": g, "short-date-le-short-time": __spreadValues(__spreadValues({}, g), f), "short-date-le-short-time-24": __spreadValues(__spreadValues({}, g), S), "short-date-le-long-time": __spreadValues(__spreadValues({}, g), T), "short-date-le-long-time-24": __spreadValues(__spreadValues({}, g), M), "long-month-day-year": u, "long-month-day-year-short-time": __spreadValues(__spreadValues({}, u), f), "long-month-day-year-short-time-24": __spreadValues(__spreadValues({}, u), S), "long-month-day-year-long-time": __spreadValues(__spreadValues({}, u), T), "long-month-day-year-long-time-24": __spreadValues(__spreadValues({}, u), M), "day-short-month-year": c, "day-short-month-year-short-time": __spreadValues(__spreadValues({}, c), f), "day-short-month-year-short-time-24": __spreadValues(__spreadValues({}, c), S), "day-short-month-year-long-time": __spreadValues(__spreadValues({}, c), T), "day-short-month-year-long-time-24": __spreadValues(__spreadValues({}, c), M), "long-date": D, "long-date-short-time": __spreadValues(__spreadValues({}, D), f), "long-date-short-time-24": __spreadValues(__spreadValues({}, D), S), "long-date-long-time": __spreadValues(__spreadValues({}, D), T), "long-date-long-time-24": __spreadValues(__spreadValues({}, D), M), "long-month-year": { month: "long", year: "numeric" }, "short-month-year": { month: "short", year: "numeric" }, year: { year: "numeric" }, "short-time": f, "long-time": T };
var Y = i()({ shortDate: "short-date", shortDateShortTime: "short-date-short-time", shortDateShortTime24: "short-date-short-time-24", shortDateLongTime: "short-date-long-time", shortDateLongTime24: "short-date-long-time-24", shortDateLE: "short-date-le", shortDateLEShortTime: "short-date-le-short-time", shortDateLEShortTime24: "short-date-le-short-time-24", shortDateLELongTime: "short-date-le-long-time", shortDateLELongTime24: "short-date-le-long-time-24", longMonthDayYear: "long-month-day-year", longMonthDayYearShortTime: "long-month-day-year-short-time", longMonthDayYearShortTime24: "long-month-day-year-short-time-24", longMonthDayYearLongTime: "long-month-day-year-long-time", longMonthDayYearLongTime24: "long-month-day-year-long-time-24", dayShortMonthYear: "day-short-month-year", dayShortMonthYearShortTime: "day-short-month-year-short-time", dayShortMonthYearShortTime24: "day-short-month-year-short-time-24", dayShortMonthYearLongTime: "day-short-month-year-long-time", dayShortMonthYearLongTime24: "day-short-month-year-long-time-24", longDate: "long-date", longDateShortTime: "long-date-short-time", longDateShortTime24: "long-date-short-time-24", longDateLongTime: "long-date-long-time", longDateLongTime24: "long-date-long-time-24", longMonthYear: "long-month-year", shortMonthYear: "short-month-year", year: "year" });
var Z = { ar: "ar-u-nu-latn-ca-gregory", nn: "no-NN" };
var p = new Intl.DateTimeFormat("bs", { month: "long" }).formatToParts(new Date(2025, 2));
var v = p.find((({ type: t2 }) => "month" === t2))?.value.toLowerCase();
function j() {
  const t2 = i2(), e2 = s(t2)?.language;
  return (e2 && Z[e2]) ?? t2;
}
"mart" !== v && (Z.bs = "sr-Latn-CS");
var E = /* @__PURE__ */ new WeakMap();
var k = w["short-date-short-time"];
function I(t2) {
  let e2 = E.get(t2);
  if (!e2) {
    const o2 = j(), n2 = P(t2.timeZone ?? e), r = __spreadProps(__spreadValues({}, t2), { timeZone: n2 });
    e2 = new Intl.DateTimeFormat(o2, r), E.set(t2, e2);
  }
  return e2;
}
function N(t2) {
  return w[t2];
}
function C(t2, e2 = k) {
  return I(e2).format(t2);
}
function F(t2, e2 = k) {
  return C(new Date(t2), __spreadValues(__spreadValues(__spreadValues({}, e2), d), y));
}
function b2(t2, e2 = k) {
  return C(/* @__PURE__ */ new Date(`1970-01-01T${t2}Z`), __spreadValues(__spreadValues(__spreadValues({}, e2), d), l));
}
function x(t2, e2 = k) {
  if (e2.timeZone) return C(new Date(t2), e2);
  const o2 = DateTime.fromISO(t2, { setZone: true }), n2 = 0 === o2.offset ? n : e2.timeZone, r = __spreadProps(__spreadValues({}, e2), { timeZone: n2 });
  return o2.toLocaleString(r, { locale: j() });
}
function P(t2) {
  switch (t2) {
    case e:
      return o;
    case t:
      return n;
    default:
      return t2;
  }
}
b((() => {
  E = /* @__PURE__ */ new WeakMap();
}));

export {
  Y,
  N,
  C,
  F,
  b2 as b,
  x,
  P
};
//# sourceMappingURL=chunk-C5KIYOYM.js.map
