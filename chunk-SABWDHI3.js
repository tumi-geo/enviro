import {
  g
} from "./chunk-JBWJWCIU.js";
import {
  m as m2,
  u
} from "./chunk-66I5P6AF.js";
import {
  m
} from "./chunk-IB63APHQ.js";
import {
  S,
  l,
  o,
  r,
  s,
  t,
  y
} from "./chunk-E5DDXGDA.js";

// node_modules/@arcgis/core/symbols/support/defaults.js
var S2 = u.fromJSON(l);
var u2 = m.fromJSON(o);
var c = m2.fromJSON(S);
var a = g.fromJSON(t);
function J(r2) {
  if (null == r2) return null;
  switch (r2.type) {
    case "mesh":
      return null;
    case "point":
    case "multipoint":
      return S2;
    case "polyline":
      return u2;
    case "polygon":
    case "extent":
      return c;
  }
  return null;
}
var N = u.fromJSON(r);
var O = m.fromJSON(s);
var y2 = m2.fromJSON(y);

export {
  S2 as S,
  u2 as u,
  c,
  a,
  J,
  N,
  O,
  y2 as y
};
//# sourceMappingURL=chunk-SABWDHI3.js.map
