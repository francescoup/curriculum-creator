import {
  require_react_dom
} from "./chunk-4ASWBRZ3.js";
import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __commonJS
} from "./chunk-LQ2VYIYD.js";

// node_modules/react-to-print/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-to-print/lib/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react(), require_react_dom()) : "function" == typeof define && define.amd ? define("lib", ["react", "react-dom"], t) : "object" == typeof exports ? exports.lib = t(require_react(), require_react_dom()) : e.lib = t(e.react, e["react-dom"]);
    }("undefined" != typeof self ? self : exports, function(e, t) {
      return function() {
        "use strict";
        var r = { 156: function(t2) {
          t2.exports = e;
        }, 111: function(e2) {
          e2.exports = t;
        }, 582: function(e2, t2, r2) {
          r2.r(t2), r2.d(t2, { __addDisposableResource: function() {
            return M;
          }, __assign: function() {
            return i2;
          }, __asyncDelegator: function() {
            return O;
          }, __asyncGenerator: function() {
            return E;
          }, __asyncValues: function() {
            return x;
          }, __await: function() {
            return S;
          }, __awaiter: function() {
            return h;
          }, __classPrivateFieldGet: function() {
            return C;
          }, __classPrivateFieldIn: function() {
            return D;
          }, __classPrivateFieldSet: function() {
            return R;
          }, __createBinding: function() {
            return b;
          }, __decorate: function() {
            return c;
          }, __disposeResources: function() {
            return q;
          }, __esDecorate: function() {
            return u;
          }, __exportStar: function() {
            return v;
          }, __extends: function() {
            return o2;
          }, __generator: function() {
            return y;
          }, __importDefault: function() {
            return k;
          }, __importStar: function() {
            return A;
          }, __makeTemplateObject: function() {
            return j;
          }, __metadata: function() {
            return p;
          }, __param: function() {
            return s;
          }, __propKey: function() {
            return f;
          }, __read: function() {
            return m;
          }, __rest: function() {
            return a;
          }, __runInitializers: function() {
            return l;
          }, __setFunctionName: function() {
            return d;
          }, __spread: function() {
            return _;
          }, __spreadArray: function() {
            return P;
          }, __spreadArrays: function() {
            return w;
          }, __values: function() {
            return g;
          } });
          var n2 = function(e3, t3) {
            return n2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var r3 in t4)
                Object.prototype.hasOwnProperty.call(t4, r3) && (e4[r3] = t4[r3]);
            }, n2(e3, t3);
          };
          function o2(e3, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
            function r3() {
              this.constructor = e3;
            }
            n2(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (r3.prototype = t3.prototype, new r3());
          }
          var i2 = function() {
            return i2 = Object.assign || function(e3) {
              for (var t3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
                for (var o3 in t3 = arguments[r3])
                  Object.prototype.hasOwnProperty.call(t3, o3) && (e3[o3] = t3[o3]);
              return e3;
            }, i2.apply(this, arguments);
          };
          function a(e3, t3) {
            var r3 = {};
            for (var n3 in e3)
              Object.prototype.hasOwnProperty.call(e3, n3) && t3.indexOf(n3) < 0 && (r3[n3] = e3[n3]);
            if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
              var o3 = 0;
              for (n3 = Object.getOwnPropertySymbols(e3); o3 < n3.length; o3++)
                t3.indexOf(n3[o3]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, n3[o3]) && (r3[n3[o3]] = e3[n3[o3]]);
            }
            return r3;
          }
          function c(e3, t3, r3, n3) {
            var o3, i3 = arguments.length, a2 = i3 < 3 ? t3 : null === n3 ? n3 = Object.getOwnPropertyDescriptor(t3, r3) : n3;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a2 = Reflect.decorate(e3, t3, r3, n3);
            else
              for (var c2 = e3.length - 1; c2 >= 0; c2--)
                (o3 = e3[c2]) && (a2 = (i3 < 3 ? o3(a2) : i3 > 3 ? o3(t3, r3, a2) : o3(t3, r3)) || a2);
            return i3 > 3 && a2 && Object.defineProperty(t3, r3, a2), a2;
          }
          function s(e3, t3) {
            return function(r3, n3) {
              t3(r3, n3, e3);
            };
          }
          function u(e3, t3, r3, n3, o3, i3) {
            function a2(e4) {
              if (void 0 !== e4 && "function" != typeof e4)
                throw new TypeError("Function expected");
              return e4;
            }
            for (var c2, s2 = n3.kind, u2 = "getter" === s2 ? "get" : "setter" === s2 ? "set" : "value", l2 = !t3 && e3 ? n3.static ? e3 : e3.prototype : null, f2 = t3 || (l2 ? Object.getOwnPropertyDescriptor(l2, n3.name) : {}), d2 = false, p2 = r3.length - 1; p2 >= 0; p2--) {
              var h2 = {};
              for (var y2 in n3)
                h2[y2] = "access" === y2 ? {} : n3[y2];
              for (var y2 in n3.access)
                h2.access[y2] = n3.access[y2];
              h2.addInitializer = function(e4) {
                if (d2)
                  throw new TypeError("Cannot add initializers after decoration has completed");
                i3.push(a2(e4 || null));
              };
              var b2 = (0, r3[p2])("accessor" === s2 ? { get: f2.get, set: f2.set } : f2[u2], h2);
              if ("accessor" === s2) {
                if (void 0 === b2)
                  continue;
                if (null === b2 || "object" != typeof b2)
                  throw new TypeError("Object expected");
                (c2 = a2(b2.get)) && (f2.get = c2), (c2 = a2(b2.set)) && (f2.set = c2), (c2 = a2(b2.init)) && o3.unshift(c2);
              } else
                (c2 = a2(b2)) && ("field" === s2 ? o3.unshift(c2) : f2[u2] = c2);
            }
            l2 && Object.defineProperty(l2, n3.name, f2), d2 = true;
          }
          function l(e3, t3, r3) {
            for (var n3 = arguments.length > 2, o3 = 0; o3 < t3.length; o3++)
              r3 = n3 ? t3[o3].call(e3, r3) : t3[o3].call(e3);
            return n3 ? r3 : void 0;
          }
          function f(e3) {
            return "symbol" == typeof e3 ? e3 : "".concat(e3);
          }
          function d(e3, t3, r3) {
            return "symbol" == typeof t3 && (t3 = t3.description ? "[".concat(t3.description, "]") : ""), Object.defineProperty(e3, "name", { configurable: true, value: r3 ? "".concat(r3, " ", t3) : t3 });
          }
          function p(e3, t3) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
              return Reflect.metadata(e3, t3);
          }
          function h(e3, t3, r3, n3) {
            return new (r3 || (r3 = Promise))(function(o3, i3) {
              function a2(e4) {
                try {
                  s2(n3.next(e4));
                } catch (e5) {
                  i3(e5);
                }
              }
              function c2(e4) {
                try {
                  s2(n3.throw(e4));
                } catch (e5) {
                  i3(e5);
                }
              }
              function s2(e4) {
                var t4;
                e4.done ? o3(e4.value) : (t4 = e4.value, t4 instanceof r3 ? t4 : new r3(function(e5) {
                  e5(t4);
                })).then(a2, c2);
              }
              s2((n3 = n3.apply(e3, t3 || [])).next());
            });
          }
          function y(e3, t3) {
            var r3, n3, o3, i3, a2 = { label: 0, sent: function() {
              if (1 & o3[0])
                throw o3[1];
              return o3[1];
            }, trys: [], ops: [] };
            return i3 = { next: c2(0), throw: c2(1), return: c2(2) }, "function" == typeof Symbol && (i3[Symbol.iterator] = function() {
              return this;
            }), i3;
            function c2(c3) {
              return function(s2) {
                return function(c4) {
                  if (r3)
                    throw new TypeError("Generator is already executing.");
                  for (; i3 && (i3 = 0, c4[0] && (a2 = 0)), a2; )
                    try {
                      if (r3 = 1, n3 && (o3 = 2 & c4[0] ? n3.return : c4[0] ? n3.throw || ((o3 = n3.return) && o3.call(n3), 0) : n3.next) && !(o3 = o3.call(n3, c4[1])).done)
                        return o3;
                      switch (n3 = 0, o3 && (c4 = [2 & c4[0], o3.value]), c4[0]) {
                        case 0:
                        case 1:
                          o3 = c4;
                          break;
                        case 4:
                          return a2.label++, { value: c4[1], done: false };
                        case 5:
                          a2.label++, n3 = c4[1], c4 = [0];
                          continue;
                        case 7:
                          c4 = a2.ops.pop(), a2.trys.pop();
                          continue;
                        default:
                          if (!((o3 = (o3 = a2.trys).length > 0 && o3[o3.length - 1]) || 6 !== c4[0] && 2 !== c4[0])) {
                            a2 = 0;
                            continue;
                          }
                          if (3 === c4[0] && (!o3 || c4[1] > o3[0] && c4[1] < o3[3])) {
                            a2.label = c4[1];
                            break;
                          }
                          if (6 === c4[0] && a2.label < o3[1]) {
                            a2.label = o3[1], o3 = c4;
                            break;
                          }
                          if (o3 && a2.label < o3[2]) {
                            a2.label = o3[2], a2.ops.push(c4);
                            break;
                          }
                          o3[2] && a2.ops.pop(), a2.trys.pop();
                          continue;
                      }
                      c4 = t3.call(e3, a2);
                    } catch (e4) {
                      c4 = [6, e4], n3 = 0;
                    } finally {
                      r3 = o3 = 0;
                    }
                  if (5 & c4[0])
                    throw c4[1];
                  return { value: c4[0] ? c4[1] : void 0, done: true };
                }([c3, s2]);
              };
            }
          }
          var b = Object.create ? function(e3, t3, r3, n3) {
            void 0 === n3 && (n3 = r3);
            var o3 = Object.getOwnPropertyDescriptor(t3, r3);
            o3 && !("get" in o3 ? !t3.__esModule : o3.writable || o3.configurable) || (o3 = { enumerable: true, get: function() {
              return t3[r3];
            } }), Object.defineProperty(e3, n3, o3);
          } : function(e3, t3, r3, n3) {
            void 0 === n3 && (n3 = r3), e3[n3] = t3[r3];
          };
          function v(e3, t3) {
            for (var r3 in e3)
              "default" === r3 || Object.prototype.hasOwnProperty.call(t3, r3) || b(t3, e3, r3);
          }
          function g(e3) {
            var t3 = "function" == typeof Symbol && Symbol.iterator, r3 = t3 && e3[t3], n3 = 0;
            if (r3)
              return r3.call(e3);
            if (e3 && "number" == typeof e3.length)
              return { next: function() {
                return e3 && n3 >= e3.length && (e3 = void 0), { value: e3 && e3[n3++], done: !e3 };
              } };
            throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }
          function m(e3, t3) {
            var r3 = "function" == typeof Symbol && e3[Symbol.iterator];
            if (!r3)
              return e3;
            var n3, o3, i3 = r3.call(e3), a2 = [];
            try {
              for (; (void 0 === t3 || t3-- > 0) && !(n3 = i3.next()).done; )
                a2.push(n3.value);
            } catch (e4) {
              o3 = { error: e4 };
            } finally {
              try {
                n3 && !n3.done && (r3 = i3.return) && r3.call(i3);
              } finally {
                if (o3)
                  throw o3.error;
              }
            }
            return a2;
          }
          function _() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3 = e3.concat(m(arguments[t3]));
            return e3;
          }
          function w() {
            for (var e3 = 0, t3 = 0, r3 = arguments.length; t3 < r3; t3++)
              e3 += arguments[t3].length;
            var n3 = Array(e3), o3 = 0;
            for (t3 = 0; t3 < r3; t3++)
              for (var i3 = arguments[t3], a2 = 0, c2 = i3.length; a2 < c2; a2++, o3++)
                n3[o3] = i3[a2];
            return n3;
          }
          function P(e3, t3, r3) {
            if (r3 || 2 === arguments.length)
              for (var n3, o3 = 0, i3 = t3.length; o3 < i3; o3++)
                !n3 && o3 in t3 || (n3 || (n3 = Array.prototype.slice.call(t3, 0, o3)), n3[o3] = t3[o3]);
            return e3.concat(n3 || Array.prototype.slice.call(t3));
          }
          function S(e3) {
            return this instanceof S ? (this.v = e3, this) : new S(e3);
          }
          function E(e3, t3, r3) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var n3, o3 = r3.apply(e3, t3 || []), i3 = [];
            return n3 = {}, a2("next"), a2("throw"), a2("return"), n3[Symbol.asyncIterator] = function() {
              return this;
            }, n3;
            function a2(e4) {
              o3[e4] && (n3[e4] = function(t4) {
                return new Promise(function(r4, n4) {
                  i3.push([e4, t4, r4, n4]) > 1 || c2(e4, t4);
                });
              });
            }
            function c2(e4, t4) {
              try {
                (r4 = o3[e4](t4)).value instanceof S ? Promise.resolve(r4.value.v).then(s2, u2) : l2(i3[0][2], r4);
              } catch (e5) {
                l2(i3[0][3], e5);
              }
              var r4;
            }
            function s2(e4) {
              c2("next", e4);
            }
            function u2(e4) {
              c2("throw", e4);
            }
            function l2(e4, t4) {
              e4(t4), i3.shift(), i3.length && c2(i3[0][0], i3[0][1]);
            }
          }
          function O(e3) {
            var t3, r3;
            return t3 = {}, n3("next"), n3("throw", function(e4) {
              throw e4;
            }), n3("return"), t3[Symbol.iterator] = function() {
              return this;
            }, t3;
            function n3(n4, o3) {
              t3[n4] = e3[n4] ? function(t4) {
                return (r3 = !r3) ? { value: S(e3[n4](t4)), done: false } : o3 ? o3(t4) : t4;
              } : o3;
            }
          }
          function x(e3) {
            if (!Symbol.asyncIterator)
              throw new TypeError("Symbol.asyncIterator is not defined.");
            var t3, r3 = e3[Symbol.asyncIterator];
            return r3 ? r3.call(e3) : (e3 = g(e3), t3 = {}, n3("next"), n3("throw"), n3("return"), t3[Symbol.asyncIterator] = function() {
              return this;
            }, t3);
            function n3(r4) {
              t3[r4] = e3[r4] && function(t4) {
                return new Promise(function(n4, o3) {
                  !function(e4, t5, r5, n5) {
                    Promise.resolve(n5).then(function(t6) {
                      e4({ value: t6, done: r5 });
                    }, t5);
                  }(n4, o3, (t4 = e3[r4](t4)).done, t4.value);
                });
              };
            }
          }
          function j(e3, t3) {
            return Object.defineProperty ? Object.defineProperty(e3, "raw", { value: t3 }) : e3.raw = t3, e3;
          }
          var T = Object.create ? function(e3, t3) {
            Object.defineProperty(e3, "default", { enumerable: true, value: t3 });
          } : function(e3, t3) {
            e3.default = t3;
          };
          function A(e3) {
            if (e3 && e3.__esModule)
              return e3;
            var t3 = {};
            if (null != e3)
              for (var r3 in e3)
                "default" !== r3 && Object.prototype.hasOwnProperty.call(e3, r3) && b(t3, e3, r3);
            return T(t3, e3), t3;
          }
          function k(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }
          function C(e3, t3, r3, n3) {
            if ("a" === r3 && !n3)
              throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t3 ? e3 !== t3 || !n3 : !t3.has(e3))
              throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r3 ? n3 : "a" === r3 ? n3.call(e3) : n3 ? n3.value : t3.get(e3);
          }
          function R(e3, t3, r3, n3, o3) {
            if ("m" === n3)
              throw new TypeError("Private method is not writable");
            if ("a" === n3 && !o3)
              throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t3 ? e3 !== t3 || !o3 : !t3.has(e3))
              throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n3 ? o3.call(e3, r3) : o3 ? o3.value = r3 : t3.set(e3, r3), r3;
          }
          function D(e3, t3) {
            if (null === t3 || "object" != typeof t3 && "function" != typeof t3)
              throw new TypeError("Cannot use 'in' operator on non-object");
            return "function" == typeof e3 ? t3 === e3 : e3.has(t3);
          }
          function M(e3, t3, r3) {
            if (null != t3) {
              if ("object" != typeof t3 && "function" != typeof t3)
                throw new TypeError("Object expected.");
              var n3;
              if (r3) {
                if (!Symbol.asyncDispose)
                  throw new TypeError("Symbol.asyncDispose is not defined.");
                n3 = t3[Symbol.asyncDispose];
              }
              if (void 0 === n3) {
                if (!Symbol.dispose)
                  throw new TypeError("Symbol.dispose is not defined.");
                n3 = t3[Symbol.dispose];
              }
              if ("function" != typeof n3)
                throw new TypeError("Object not disposable.");
              e3.stack.push({ value: t3, dispose: n3, async: r3 });
            } else
              r3 && e3.stack.push({ async: true });
            return t3;
          }
          var I = "function" == typeof SuppressedError ? SuppressedError : function(e3, t3, r3) {
            var n3 = new Error(r3);
            return n3.name = "SuppressedError", n3.error = e3, n3.suppressed = t3, n3;
          };
          function q(e3) {
            function t3(t4) {
              e3.error = e3.hasError ? new I(t4, e3.error, "An error was suppressed during disposal.") : t4, e3.hasError = true;
            }
            return function r3() {
              for (; e3.stack.length; ) {
                var n3 = e3.stack.pop();
                try {
                  var o3 = n3.dispose && n3.dispose.call(n3.value);
                  if (n3.async)
                    return Promise.resolve(o3).then(r3, function(e4) {
                      return t3(e4), r3();
                    });
                } catch (e4) {
                  t3(e4);
                }
              }
              if (e3.hasError)
                throw e3.error;
            }();
          }
          t2.default = { __extends: o2, __assign: i2, __rest: a, __decorate: c, __param: s, __metadata: p, __awaiter: h, __generator: y, __createBinding: b, __exportStar: v, __values: g, __read: m, __spread: _, __spreadArrays: w, __spreadArray: P, __await: S, __asyncGenerator: E, __asyncDelegator: O, __asyncValues: x, __makeTemplateObject: j, __importStar: A, __importDefault: k, __classPrivateFieldGet: C, __classPrivateFieldSet: R, __classPrivateFieldIn: D, __addDisposableResource: M, __disposeResources: q };
        } }, n = {};
        function o(e2) {
          var t2 = n[e2];
          if (void 0 !== t2)
            return t2.exports;
          var i2 = n[e2] = { exports: {} };
          return r[e2](i2, i2.exports, o), i2.exports;
        }
        o.d = function(e2, t2) {
          for (var r2 in t2)
            o.o(t2, r2) && !o.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
        }, o.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, o.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var i = {};
        return function() {
          var e2 = i;
          Object.defineProperty(e2, "__esModule", { value: true }), e2.useReactToPrint = e2.PrintContextConsumer = void 0;
          var t2 = o(582), r2 = o(156), n2 = o(111), a = Object.prototype.hasOwnProperty.call(r2, "createContext"), c = Object.prototype.hasOwnProperty.call(r2, "useMemo") && Object.prototype.hasOwnProperty.call(r2, "useCallback"), s = a ? r2.createContext({}) : null;
          e2.PrintContextConsumer = s ? s.Consumer : function() {
            return null;
          };
          var u = { copyStyles: true, pageStyle: "\n        @page {\n            /* Remove browser default header (title) and footer (url) */\n            margin: 0;\n        }\n        @media print {\n            body {\n                /* Tell browsers to print background colors */\n                -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */\n                color-adjust: exact; /* Firefox */\n            }\n        }\n    ", removeAfterPrint: false, suppressErrors: false }, l = function(e3) {
            function o2() {
              var r3 = null !== e3 && e3.apply(this, arguments) || this;
              return r3.startPrint = function(e4) {
                var t3 = r3.props, n3 = t3.onAfterPrint, o3 = t3.onPrintError, i2 = t3.print, a2 = t3.documentTitle;
                setTimeout(function() {
                  var t4, c2;
                  if (e4.contentWindow)
                    if (e4.contentWindow.focus(), i2)
                      i2(e4).then(function() {
                        return null == n3 ? void 0 : n3();
                      }).then(function() {
                        return r3.handleRemoveIframe();
                      }).catch(function(e5) {
                        o3 ? o3("print", e5) : r3.logMessages(["An error was thrown by the specified `print` function"]);
                      });
                    else {
                      if (e4.contentWindow.print) {
                        var s2 = null !== (c2 = null === (t4 = e4.contentDocument) || void 0 === t4 ? void 0 : t4.title) && void 0 !== c2 ? c2 : "", u2 = e4.ownerDocument.title;
                        a2 && (e4.ownerDocument.title = a2, e4.contentDocument && (e4.contentDocument.title = a2)), e4.contentWindow.print(), a2 && (e4.ownerDocument.title = u2, e4.contentDocument && (e4.contentDocument.title = s2));
                      } else
                        r3.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);
                      null == n3 || n3(), r3.handleRemoveIframe();
                    }
                  else
                    r3.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"]);
                }, 500);
              }, r3.triggerPrint = function(e4) {
                var t3 = r3.props, n3 = t3.onBeforePrint, o3 = t3.onPrintError;
                if (n3) {
                  var i2 = n3();
                  i2 && "function" == typeof i2.then ? i2.then(function() {
                    r3.startPrint(e4);
                  }).catch(function(e5) {
                    o3 && o3("onBeforePrint", e5);
                  }) : r3.startPrint(e4);
                } else
                  r3.startPrint(e4);
              }, r3.handleClick = function() {
                var e4 = r3.props, t3 = e4.onBeforeGetContent, n3 = e4.onPrintError;
                if (t3) {
                  var o3 = t3();
                  o3 && "function" == typeof o3.then ? o3.then(r3.handlePrint).catch(function(e5) {
                    n3 && n3("onBeforeGetContent", e5);
                  }) : r3.handlePrint();
                } else
                  r3.handlePrint();
              }, r3.handlePrint = function() {
                var e4 = r3.props, o3 = e4.bodyClass, i2 = e4.content, a2 = e4.copyStyles, c2 = e4.fonts, s2 = e4.pageStyle, u2 = e4.nonce, l2 = i2();
                if (void 0 !== l2)
                  if (null !== l2) {
                    var f = document.createElement("iframe");
                    f.width = "".concat(document.documentElement.clientWidth, "px"), f.height = "".concat(document.documentElement.clientHeight, "px"), f.style.position = "absolute", f.style.top = "-".concat(document.documentElement.clientHeight + 100, "px"), f.style.left = "-".concat(document.documentElement.clientWidth + 100, "px"), f.id = "printWindow", f.srcdoc = "<!DOCTYPE html>";
                    var d = (0, n2.findDOMNode)(l2);
                    if (d) {
                      var p = d.cloneNode(true), h = p instanceof Text, y = document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"), b = h ? [] : p.querySelectorAll("img"), v = h ? [] : p.querySelectorAll("video"), g = c2 ? c2.length : 0;
                      r3.numResourcesToLoad = y.length + b.length + v.length + g, r3.resourcesLoaded = [], r3.resourcesErrored = [];
                      var m = function(e5, n3) {
                        r3.resourcesLoaded.includes(e5) ? r3.logMessages(["Tried to mark a resource that has already been handled", e5], "debug") : (n3 ? (r3.logMessages(t2.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'], t2.__read(n3), false)), r3.resourcesErrored.push(e5)) : r3.resourcesLoaded.push(e5), r3.resourcesLoaded.length + r3.resourcesErrored.length === r3.numResourcesToLoad && r3.triggerPrint(f));
                      };
                      f.onload = function() {
                        var e5, n3, i3, l3;
                        f.onload = null;
                        var y2 = f.contentDocument || (null === (n3 = f.contentWindow) || void 0 === n3 ? void 0 : n3.document);
                        if (y2) {
                          y2.body.appendChild(p), c2 && ((null === (i3 = f.contentDocument) || void 0 === i3 ? void 0 : i3.fonts) && (null === (l3 = f.contentWindow) || void 0 === l3 ? void 0 : l3.FontFace) ? c2.forEach(function(e6) {
                            var t3 = new FontFace(e6.family, e6.source, { weight: e6.weight, style: e6.style });
                            f.contentDocument.fonts.add(t3), t3.loaded.then(function() {
                              m(t3);
                            }).catch(function(e7) {
                              m(t3, ["Failed loading the font:", t3, "Load error:", e7]);
                            });
                          }) : (c2.forEach(function(e6) {
                            return m(e6);
                          }), r3.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));
                          var g2 = "function" == typeof s2 ? s2() : s2;
                          if ("string" != typeof g2)
                            r3.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof g2, '". Styles from `pageStyle` will not be applied.')]);
                          else {
                            var _ = y2.createElement("style");
                            u2 && (_.setAttribute("nonce", u2), y2.head.setAttribute("nonce", u2)), _.appendChild(y2.createTextNode(g2)), y2.head.appendChild(_);
                          }
                          if (o3 && (e5 = y2.body.classList).add.apply(e5, t2.__spreadArray([], t2.__read(o3.split(" ")), false)), !h) {
                            for (var w = h ? [] : d.querySelectorAll("canvas"), P = y2.querySelectorAll("canvas"), S = 0; S < w.length; ++S) {
                              var E = w[S], O = P[S].getContext("2d");
                              O && O.drawImage(E, 0, 0);
                            }
                            var x = function(e6) {
                              var t3 = b[e6], r4 = t3.getAttribute("src");
                              if (r4) {
                                var n4 = new Image();
                                n4.onload = function() {
                                  return m(t3);
                                }, n4.onerror = function(e7, r5, n5, o4, i4) {
                                  return m(t3, ["Error loading <img>", t3, "Error", i4]);
                                }, n4.src = r4;
                              } else
                                m(t3, ['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:', t3]);
                            };
                            for (S = 0; S < b.length; S++)
                              x(S);
                            var j = function(e6) {
                              var t3 = v[e6];
                              t3.preload = "auto";
                              var r4 = t3.getAttribute("poster");
                              if (r4) {
                                var n4 = new Image();
                                n4.onload = function() {
                                  return m(t3);
                                }, n4.onerror = function(e7, n5, o4, i4, a3) {
                                  return m(t3, ["Error loading video poster", r4, "for video", t3, "Error:", a3]);
                                }, n4.src = r4;
                              } else
                                t3.readyState >= 2 ? m(t3) : (t3.onloadeddata = function() {
                                  return m(t3);
                                }, t3.onerror = function(e7, r5, n5, o4, i4) {
                                  return m(t3, ["Error loading video", t3, "Error", i4]);
                                }, t3.onstalled = function() {
                                  return m(t3, ["Loading video stalled, skipping", t3]);
                                });
                            };
                            for (S = 0; S < v.length; S++)
                              j(S);
                            var T = "input", A = d.querySelectorAll(T), k = y2.querySelectorAll(T);
                            for (S = 0; S < A.length; S++)
                              k[S].value = A[S].value;
                            var C = "input[type=checkbox],input[type=radio]", R = d.querySelectorAll(C), D = y2.querySelectorAll(C);
                            for (S = 0; S < R.length; S++)
                              D[S].checked = R[S].checked;
                            var M = "select", I = d.querySelectorAll(M), q = y2.querySelectorAll(M);
                            for (S = 0; S < I.length; S++)
                              q[S].value = I[S].value;
                          }
                          if (a2)
                            for (var F = document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"), L = function(e6, t3) {
                              var n4 = F[e6];
                              if ("style" === n4.tagName.toLowerCase()) {
                                var o4 = y2.createElement(n4.tagName), i4 = n4.sheet;
                                if (i4) {
                                  var a3 = "";
                                  try {
                                    for (var c3 = i4.cssRules.length, s3 = 0; s3 < c3; ++s3)
                                      "string" == typeof i4.cssRules[s3].cssText && (a3 += "".concat(i4.cssRules[s3].cssText, "\r\n"));
                                  } catch (e7) {
                                    r3.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.", n4], "warning");
                                  }
                                  o4.setAttribute("id", "react-to-print-".concat(e6)), u2 && o4.setAttribute("nonce", u2), o4.appendChild(y2.createTextNode(a3)), y2.head.appendChild(o4);
                                }
                              } else if (n4.getAttribute("href"))
                                if (n4.hasAttribute("disabled"))
                                  r3.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:", n4], "warning"), m(n4);
                                else {
                                  for (var l4 = y2.createElement(n4.tagName), f2 = (s3 = 0, n4.attributes.length); s3 < f2; ++s3) {
                                    var d2 = n4.attributes[s3];
                                    d2 && l4.setAttribute(d2.nodeName, d2.nodeValue || "");
                                  }
                                  l4.onload = function() {
                                    return m(l4);
                                  }, l4.onerror = function(e7, t4, r4, n5, o5) {
                                    return m(l4, ["Failed to load", l4, "Error:", o5]);
                                  }, u2 && l4.setAttribute("nonce", u2), y2.head.appendChild(l4);
                                }
                              else
                                r3.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:", n4], "warning"), m(n4);
                            }, W = (S = 0, F.length); S < W; ++S)
                              L(S);
                        }
                        0 !== r3.numResourcesToLoad && a2 || r3.triggerPrint(f);
                      }, r3.handleRemoveIframe(true), document.body.appendChild(f);
                    } else
                      r3.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop']);
                  } else
                    r3.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);
                else
                  r3.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"]);
              }, r3.handleRemoveIframe = function(e4) {
                var t3 = r3.props.removeAfterPrint;
                if (e4 || t3) {
                  var n3 = document.getElementById("printWindow");
                  n3 && document.body.removeChild(n3);
                }
              }, r3.logMessages = function(e4, t3) {
                void 0 === t3 && (t3 = "error"), r3.props.suppressErrors || ("error" === t3 ? console.error(e4) : "warning" === t3 ? console.warn(e4) : "debug" === t3 && console.debug(e4));
              }, r3;
            }
            return t2.__extends(o2, e3), o2.prototype.render = function() {
              var e4 = this.props, t3 = e4.children, n3 = e4.trigger;
              if (n3)
                return r2.cloneElement(n3(), { onClick: this.handleClick });
              if (!s)
                return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']), null;
              var o3 = { handlePrint: this.handleClick };
              return r2.createElement(s.Provider, { value: o3 }, t3);
            }, o2.defaultProps = u, o2;
          }(r2.Component);
          e2.default = l, e2.useReactToPrint = function(e3) {
            if (!c)
              return e3.suppressErrors || console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'), function() {
                throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"');
              };
            var n3 = r2.useMemo(function() {
              return new l(t2.__assign(t2.__assign({}, u), e3));
            }, [e3]);
            return r2.useCallback(function() {
              return n3.handleClick();
            }, [n3]);
          };
        }(), i;
      }();
    });
  }
});
export default require_lib();
//# sourceMappingURL=react-to-print.js.map
