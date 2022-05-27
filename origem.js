function a(a, e) {
  var o = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e &&
      (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(a, e).enumerable;
      })),
      o.push.apply(o, r);
  }
  return o;
}
function e(a, e, o, r, i, t, n) {
  try {
    var s = a[t](n),
      u = s.value;
  } catch (a) {
    return void o(a);
  }
  s.done ? e(u) : Promise.resolve(u).then(r, i);
}
function o(a) {
  return function () {
    var o = this,
      r = arguments;
    return new Promise(function (i, t) {
      var n = a.apply(o, r);
      function s(a) {
        e(n, i, t, s, u, "next", a);
      }
      function u(a) {
        e(n, i, t, s, u, "throw", a);
      }
      s(void 0);
    });
  };
}
function r(a, e) {
  if (!(a instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function i(a, e) {
  for (var o = 0; o < e.length; o++) {
    var r = e[o];
    (r.enumerable = r.enumerable || 0),
      (r.configurable = 1),
      "value" in r && (r.writable = 1),
      Object.defineProperty(a, r.key, r);
  }
}
function t(a, e, o) {
  return (
    e && i(a.prototype, e),
    o && i(a, o),
    Object.defineProperty(a, "prototype", {
      writable: 0,
    }),
    a
  );
}
function n(a, e, o) {
  return (
    e in a
      ? Object.defineProperty(a, e, {
          value: o,
          enumerable: 1,
          configurable: 1,
          writable: 1,
        })
      : (a[e] = o),
    a
  );
}
function s(a, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Super expression must either be null or a function");
  (a.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: a,
      writable: 1,
      configurable: 1,
    },
  })),
    Object.defineProperty(a, "prototype", {
      writable: 0,
    }),
    e && c(a, e);
}
function u(a) {
  return (
    (u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        }),
    u(a)
  );
}
function c(a, e) {
  return (
    (c =
      Object.setPrototypeOf ||
      function (a, e) {
        return (a.__proto__ = e), a;
      }),
    c(a, e)
  );
}
function l() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return 0;
  if (Reflect.construct.sham) return 0;
  if ("function" == typeof Proxy) return 1;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      1
    );
  } catch (a) {
    return 0;
  }
}
function m(a, e, o) {
  return (
    (m = l()
      ? Reflect.construct
      : function (a, e, o) {
          var r = [null];
          r.push.apply(r, e);
          var i = new (Function.bind.apply(a, r))();
          return o && c(i, o.prototype), i;
        }),
    m.apply(null, arguments)
  );
}
function A(a) {
  var e = "function" == typeof Map ? new Map() : void 0;
  return (
    (A = function (a) {
      if (
        null === a ||
        ((o = a), -1 === Function.toString.call(o).indexOf("[native code]"))
      )
        return a;
      var o;
      if ("function" != typeof a)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== e) {
        if (e.has(a)) return e.get(a);
        e.set(a, r);
      }
      function r() {
        return m(a, arguments, u(this).constructor);
      }
      return (
        (r.prototype = Object.create(a.prototype, {
          constructor: {
            value: r,
            enumerable: 0,
            writable: 1,
            configurable: 1,
          },
        })),
        c(r, a)
      );
    }),
    A(a)
  );
}
function g(a) {
  if (void 0 === a)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function d(a, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return g(a);
}
function p(a) {
  var e = l();
  return function () {
    var o,
      r = u(a);
    if (e) {
      var i = u(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return d(this, o);
  };
}
function f(a, e) {
  return (
    e || (e = a.slice(0)),
    Object.freeze(
      Object.defineProperties(a, {
        raw: {
          value: Object.freeze(e),
        },
      })
    )
  );
}
function b(a, e) {
  return (
    (function (a) {
      if (Array.isArray(a)) return a;
    })(a) ||
    (function (a, e) {
      var o =
        null == a
          ? null
          : ("undefined" != typeof Symbol && a[Symbol.iterator]) ||
            a["@@iterator"];
      if (null != o) {
        var r,
          i,
          t = [],
          n = 1,
          s = 0;
        try {
          for (
            o = o.call(a);
            !(n = (r = o.next()).done) &&
            (t.push(r.value), !e || t.length !== e);
            n = 1
          );
        } catch (a) {
          (s = 1), (i = a);
        } finally {
          try {
            n || null == o.return || o.return();
          } finally {
            if (s) throw i;
          }
        }
        return t;
      }
    })(a, e) ||
    h(a, e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function v(a) {
  return (
    (function (a) {
      if (Array.isArray(a)) return w(a);
    })(a) ||
    (function (a) {
      if (
        ("undefined" != typeof Symbol && null != a[Symbol.iterator]) ||
        null != a["@@iterator"]
      )
        return Array.from(a);
    })(a) ||
    h(a) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function h(a, e) {
  if (a) {
    if ("string" == typeof a) return w(a, e);
    var o = Object.prototype.toString.call(a).slice(8, -1);
    return (
      "Object" === o && a.constructor && (o = a.constructor.name),
      "Map" === o || "Set" === o
        ? Array.from(a)
        : "Arguments" === o ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        ? w(a, e)
        : void 0
    );
  }
}
function w(a, e) {
  (null == e || e > a.length) && (e = a.length);
  for (var o = 0, r = new Array(e); o < e; o++) r[o] = a[o];
  return r;
}
function B(a, e) {
  var o =
    ("undefined" != typeof Symbol && a[Symbol.iterator]) || a["@@iterator"];
  if (!o) {
    if (
      Array.isArray(a) ||
      (o = h(a)) ||
      (e && a && "number" == typeof a.length)
    ) {
      o && (a = o);
      var r = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return r >= a.length
            ? {
                done: 1,
              }
            : {
                done: 0,
                value: a[r++],
              };
        },
        e: function (a) {
          throw a;
        },
        f: i,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var t,
    n = 1,
    s = 0;
  return {
    s: function () {
      o = o.call(a);
    },
    n: function () {
      var a = o.next();
      return (n = a.done), a;
    },
    e: function (a) {
      (s = 1), (t = a);
    },
    f: function () {
      try {
        n || null == o.return || o.return();
      } finally {
        if (s) throw t;
      }
    },
  };
}
function y(a, e) {
  return (function (a, e) {
    return e.get ? e.get.call(a) : e.value;
  })(a, Q(a, e, "get"));
}
function E(a, e, o) {
  return (
    (function (a, e, o) {
      if (e.set) e.set.call(a, o);
      else {
        if (!e.writable)
          throw new TypeError("attempted to set read only private field");
        e.value = o;
      }
    })(a, Q(a, e, "set"), o),
    o
  );
}
function Q(a, e, o) {
  if (!e.has(a))
    throw new TypeError("attempted to " + o + " private field on non-instance");
  return e.get(a);
}
function D(a, e, o) {
  if (!e.has(a))
    throw new TypeError("attempted to get private field on non-instance");
  return o;
}
function x(a, e) {
  if (e.has(a))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function j(a, e, o) {
  x(a, e), e.set(a, o);
}
function M(a, e) {
  x(a, e), e.add(a);
}
var z =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
!(function () {
  var a = (function (a) {
    var e,
      o = Object.prototype,
      r = o.hasOwnProperty,
      i = "function" == typeof Symbol ? Symbol : {},
      t = i.iterator || "@@iterator",
      n = i.asyncIterator || "@@asyncIterator",
      s = i.toStringTag || "@@toStringTag";
    function u(a, e, o) {
      return (
        Object.defineProperty(a, e, {
          value: o,
          enumerable: 1,
          configurable: 1,
          writable: 1,
        }),
        a[e]
      );
    }
    try {
      u({}, "");
    } catch (a) {
      u = function (a, e, o) {
        return (a[e] = o);
      };
    }
    function c(a, e, o, r) {
      var i = e && e.prototype instanceof f ? e : f,
        t = Object.create(i.prototype),
        n = new M(r || []);
      return (
        (t._invoke = (function (a, e, o) {
          var r = m;
          return function (i, t) {
            if (r === g) throw new Error("Generator is already running");
            if (r === d) {
              if ("throw" === i) throw t;
              return I();
            }
            for (o.method = i, o.arg = t; ; ) {
              var n = o.delegate;
              if (n) {
                var s = D(n, o);
                if (s) {
                  if (s === p) continue;
                  return s;
                }
              }
              if ("next" === o.method) o.sent = o._sent = o.arg;
              else if ("throw" === o.method) {
                if (r === m) throw ((r = d), o.arg);
                o.dispatchException(o.arg);
              } else "return" === o.method && o.abrupt("return", o.arg);
              r = g;
              var u = l(a, e, o);
              if ("normal" === u.type) {
                if (((r = o.done ? d : A), u.arg === p)) continue;
                return {
                  value: u.arg,
                  done: o.done,
                };
              }
              "throw" === u.type &&
                ((r = d), (o.method = "throw"), (o.arg = u.arg));
            }
          };
        })(a, o, n)),
        t
      );
    }
    function l(a, e, o) {
      try {
        return {
          type: "normal",
          arg: a.call(e, o),
        };
      } catch (a) {
        return {
          type: "throw",
          arg: a,
        };
      }
    }
    a.wrap = c;
    var m = "suspendedStart",
      A = "suspendedYield",
      g = "executing",
      d = "completed",
      p = {};
    function f() {}
    function b() {}
    function v() {}
    var h = {};
    u(h, t, function () {
      return this;
    });
    var w = Object.getPrototypeOf,
      B = w && w(w(z([])));
    B && B !== o && r.call(B, t) && (h = B);
    var y = (v.prototype = f.prototype = Object.create(h));
    function E(a) {
      ["next", "throw", "return"].forEach(function (e) {
        u(a, e, function (a) {
          return this._invoke(e, a);
        });
      });
    }
    function Q(a, e) {
      function o(i, t, n, s) {
        var u = l(a[i], a, t);
        if ("throw" !== u.type) {
          var c = u.arg,
            m = c.value;
          return m && "object" == typeof m && r.call(m, "__await")
            ? e.resolve(m.__await).then(
                function (a) {
                  o("next", a, n, s);
                },
                function (a) {
                  o("throw", a, n, s);
                }
              )
            : e.resolve(m).then(
                function (a) {
                  (c.value = a), n(c);
                },
                function (a) {
                  return o("throw", a, n, s);
                }
              );
        }
        s(u.arg);
      }
      var i;
      this._invoke = function (a, r) {
        function t() {
          return new e(function (e, i) {
            o(a, r, e, i);
          });
        }
        return (i = i ? i.then(t, t) : t());
      };
    }
    function D(a, o) {
      var r = a.iterator[o.method];
      if (r === e) {
        if (((o.delegate = null), "throw" === o.method)) {
          if (
            a.iterator.return &&
            ((o.method = "return"), (o.arg = e), D(a, o), "throw" === o.method)
          )
            return p;
          (o.method = "throw"),
            (o.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            ));
        }
        return p;
      }
      var i = l(r, a.iterator, o.arg);
      if ("throw" === i.type)
        return (o.method = "throw"), (o.arg = i.arg), (o.delegate = null), p;
      var t = i.arg;
      return t
        ? t.done
          ? ((o[a.resultName] = t.value),
            (o.next = a.nextLoc),
            "return" !== o.method && ((o.method = "next"), (o.arg = e)),
            (o.delegate = null),
            p)
          : t
        : ((o.method = "throw"),
          (o.arg = new TypeError("iterator result is not an object")),
          (o.delegate = null),
          p);
    }
    function x(a) {
      var e = {
        tryLoc: a[0],
      };
      1 in a && (e.catchLoc = a[1]),
        2 in a && ((e.finallyLoc = a[2]), (e.afterLoc = a[3])),
        this.tryEntries.push(e);
    }
    function j(a) {
      var e = a.completion || {};
      (e.type = "normal"), delete e.arg, (a.completion = e);
    }
    function M(a) {
      (this.tryEntries = [
        {
          tryLoc: "root",
        },
      ]),
        a.forEach(x, this),
        this.reset(1);
    }
    function z(a) {
      if (a) {
        var o = a[t];
        if (o) return o.call(a);
        if ("function" == typeof a.next) return a;
        if (!isNaN(a.length)) {
          var i = -1,
            n = function o() {
              for (; ++i < a.length; )
                if (r.call(a, i)) return (o.value = a[i]), (o.done = 0), o;
              return (o.value = e), (o.done = 1), o;
            };
          return (n.next = n);
        }
      }
      return {
        next: I,
      };
    }
    function I() {
      return {
        value: e,
        done: 1,
      };
    }
    return (
      (b.prototype = v),
      u(y, "constructor", v),
      u(v, "constructor", b),
      (b.displayName = u(v, s, "GeneratorFunction")),
      (a.isGeneratorFunction = function (a) {
        var e = "function" == typeof a && a.constructor;
        return e
          ? e === b || "GeneratorFunction" === (e.displayName || e.name)
          : 0;
      }),
      (a.mark = function (a) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(a, v)
            : ((a.__proto__ = v), u(a, s, "GeneratorFunction")),
          (a.prototype = Object.create(y)),
          a
        );
      }),
      (a.awrap = function (a) {
        return {
          __await: a,
        };
      }),
      E(Q.prototype),
      u(Q.prototype, n, function () {
        return this;
      }),
      (a.AsyncIterator = Q),
      (a.async = function (e, o, r, i, t) {
        void 0 === t && (t = Promise);
        var n = new Q(c(e, o, r, i), t);
        return a.isGeneratorFunction(o)
          ? n
          : n.next().then(function (a) {
              return a.done ? a.value : n.next();
            });
      }),
      E(y),
      u(y, s, "Generator"),
      u(y, t, function () {
        return this;
      }),
      u(y, "toString", function () {
        return "[object Generator]";
      }),
      (a.keys = function (a) {
        var e = [];
        for (var o in a) e.push(o);
        return (
          e.reverse(),
          function o() {
            for (; e.length; ) {
              var r = e.pop();
              if (r in a) return (o.value = r), (o.done = 0), o;
            }
            return (o.done = 1), o;
          }
        );
      }),
      (a.values = z),
      (M.prototype = {
        constructor: M,
        reset: function (a) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = 0),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = e),
            this.tryEntries.forEach(j),
            !a)
          )
            for (var o in this)
              "t" === o.charAt(0) &&
                r.call(this, o) &&
                !isNaN(+o.slice(1)) &&
                (this[o] = e);
        },
        stop: function () {
          this.done = 1;
          var a = this.tryEntries[0].completion;
          if ("throw" === a.type) throw a.arg;
          return this.rval;
        },
        dispatchException: function (a) {
          if (this.done) throw a;
          var o = this;
          function i(r, i) {
            return (
              (s.type = "throw"),
              (s.arg = a),
              (o.next = r),
              i && ((o.method = "next"), (o.arg = e)),
              !!i
            );
          }
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t],
              s = n.completion;
            if ("root" === n.tryLoc) return i("end");
            if (n.tryLoc <= this.prev) {
              var u = r.call(n, "catchLoc"),
                c = r.call(n, "finallyLoc");
              if (u && c) {
                if (this.prev < n.catchLoc) return i(n.catchLoc, 1);
                if (this.prev < n.finallyLoc) return i(n.finallyLoc);
              } else if (u) {
                if (this.prev < n.catchLoc) return i(n.catchLoc, 1);
              } else {
                if (!c)
                  throw new Error("try statement without catch or finally");
                if (this.prev < n.finallyLoc) return i(n.finallyLoc);
              }
            }
          }
        },
        abrupt: function (a, e) {
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o];
            if (
              i.tryLoc <= this.prev &&
              r.call(i, "finallyLoc") &&
              this.prev < i.finallyLoc
            ) {
              var t = i;
              break;
            }
          }
          t &&
            ("break" === a || "continue" === a) &&
            t.tryLoc <= e &&
            e <= t.finallyLoc &&
            (t = null);
          var n = t ? t.completion : {};
          return (
            (n.type = a),
            (n.arg = e),
            t
              ? ((this.method = "next"), (this.next = t.finallyLoc), p)
              : this.complete(n)
          );
        },
        complete: function (a, e) {
          if ("throw" === a.type) throw a.arg;
          return (
            "break" === a.type || "continue" === a.type
              ? (this.next = a.arg)
              : "return" === a.type
              ? ((this.rval = this.arg = a.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === a.type && e && (this.next = e),
            p
          );
        },
        finish: function (a) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var o = this.tryEntries[e];
            if (o.finallyLoc === a)
              return this.complete(o.completion, o.afterLoc), j(o), p;
          }
        },
        catch: function (a) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var o = this.tryEntries[e];
            if (o.tryLoc === a) {
              var r = o.completion;
              if ("throw" === r.type) {
                var i = r.arg;
                j(o);
              }
              return i;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (a, o, r) {
          return (
            (this.delegate = {
              iterator: z(a),
              resultName: o,
              nextLoc: r,
            }),
            "next" === this.method && (this.arg = e),
            p
          );
        },
      }),
      a
    );
  })({});
  try {
    regeneratorRuntime = a;
  } catch (e) {
    "object" == typeof globalThis
      ? (globalThis.regeneratorRuntime = a)
      : Function("r", "regeneratorRuntime = r")(a);
  }
})();
var I = function (a) {
    return a && a.Math == Math && a;
  },
  C =
    I("object" == typeof globalThis && globalThis) ||
    I("object" == typeof window && window) ||
    I("object" == typeof self && self) ||
    I("object" == typeof z && z) ||
    (function () {
      return this;
    })() ||
    Function("return this")(),
  N = {},
  k = function (a) {
    try {
      return !!a();
    } catch (a) {
      return 1;
    }
  },
  F = !k(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  O = !k(function () {
    var a = function () {}.bind();
    return "function" != typeof a || a.hasOwnProperty("prototype");
  }),
  T = O,
  S = Function.prototype.call,
  L = T
    ? S.bind(S)
    : function () {
        return S.apply(S, arguments);
      },
  U = {},
  R = {}.propertyIsEnumerable,
  Y = Object.getOwnPropertyDescriptor,
  P =
    Y &&
    !R.call(
      {
        1: 2,
      },
      1
    );
U.f = P
  ? function (a) {
      var e = Y(this, a);
      return !!e && e.enumerable;
    }
  : R;
var G,
  q,
  H = function (a, e) {
    return {
      enumerable: !(1 & a),
      configurable: !(2 & a),
      writable: !(4 & a),
      value: e,
    };
  },
  J = O,
  V = Function.prototype,
  W = V.bind,
  K = V.call,
  X = J && W.bind(K, K),
  Z = J
    ? function (a) {
        return a && X(a);
      }
    : function (a) {
        return (
          a &&
          function () {
            return K.apply(a, arguments);
          }
        );
      },
  _ = Z,
  $ = _({}.toString),
  aa = _("".slice),
  ea = function (a) {
    return aa($(a), 8, -1);
  },
  oa = Z,
  ra = k,
  ia = ea,
  ta = C.Object,
  na = oa("".split),
  sa = ra(function () {
    return !ta("z").propertyIsEnumerable(0);
  })
    ? function (a) {
        return "String" == ia(a) ? na(a, "") : ta(a);
      }
    : ta,
  ua = C.TypeError,
  ca = function (a) {
    if (null == a) throw ua("Can't call method on " + a);
    return a;
  },
  la = sa,
  ma = ca,
  Aa = function (a) {
    return la(ma(a));
  },
  ga = function (a) {
    return "function" == typeof a;
  },
  da = ga,
  pa = function (a) {
    return "object" == typeof a ? null !== a : da(a);
  },
  fa = C,
  ba = ga,
  va = function (a) {
    return ba(a) ? a : void 0;
  },
  ha = function (a, e) {
    return arguments.length < 2 ? va(fa[a]) : fa[a] && fa[a][e];
  },
  wa = Z({}.isPrototypeOf),
  Ba = ha("navigator", "userAgent") || "",
  ya = C,
  Ea = Ba,
  Qa = ya.process,
  Da = ya.Deno,
  xa = (Qa && Qa.versions) || (Da && Da.version),
  ja = xa && xa.v8;
ja && (q = (G = ja.split("."))[0] > 0 && G[0] < 4 ? 1 : +(G[0] + G[1])),
  !q &&
    Ea &&
    (!(G = Ea.match(/Edge\/(\d+)/)) || G[1] >= 74) &&
    (G = Ea.match(/Chrome\/(\d+)/)) &&
    (q = +G[1]);
var Ma = q,
  za = Ma,
  Ia = k,
  Ca =
    !!Object.getOwnPropertySymbols &&
    !Ia(function () {
      var a = Symbol();
      return (
        !String(a) ||
        !(Object(a) instanceof Symbol) ||
        (!Symbol.sham && za && za < 41)
      );
    }),
  Na = Ca && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  ka = ha,
  Fa = ga,
  Oa = wa,
  Ta = Na,
  Sa = C.Object,
  La = Ta
    ? function (a) {
        return "symbol" == typeof a;
      }
    : function (a) {
        var e = ka("Symbol");
        return Fa(e) && Oa(e.prototype, Sa(a));
      },
  Ua = C.String,
  Ra = function (a) {
    try {
      return Ua(a);
    } catch (a) {
      return "Object";
    }
  },
  Ya = ga,
  Pa = Ra,
  Ga = C.TypeError,
  qa = function (a) {
    if (Ya(a)) return a;
    throw Ga(Pa(a) + " is not a function");
  },
  Ha = qa,
  Ja = function (a, e) {
    var o = a[e];
    return null == o ? void 0 : Ha(o);
  },
  Va = L,
  Wa = ga,
  Ka = pa,
  Xa = C.TypeError,
  Za = {
    exports: {},
  },
  _a = C,
  $a = Object.defineProperty,
  ae = function (a, e) {
    try {
      $a(_a, a, {
        value: e,
        configurable: 1,
        writable: 1,
      });
    } catch (o) {
      _a[a] = e;
    }
    return e;
  },
  ee = ae,
  oe = C["__core-js_shared__"] || ee("__core-js_shared__", {}),
  re = oe;
(Za.exports = function (a, e) {
  return re[a] || (re[a] = void 0 !== e ? e : {});
})("versions", []).push({
  version: "3.21.1",
  mode: "global",
  copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
  source: "https://github.com/zloirock/core-js",
});
var ie = ca,
  te = C.Object,
  ne = function (a) {
    return te(ie(a));
  },
  se = ne,
  ue = Z({}.hasOwnProperty),
  ce =
    Object.hasOwn ||
    function (a, e) {
      return ue(se(a), e);
    },
  le = Z,
  me = 0,
  Ae = Math.random(),
  ge = le((1).toString),
  de = function (a) {
    return "Symbol(" + (void 0 === a ? "" : a) + ")_" + ge(++me + Ae, 36);
  },
  pe = C,
  fe = Za.exports,
  be = ce,
  ve = de,
  he = Ca,
  we = Na,
  Be = fe("wks"),
  ye = pe.Symbol,
  Ee = ye && ye.for,
  Qe = we ? ye : (ye && ye.withoutSetter) || ve,
  De = function (a) {
    if (!be(Be, a) || (!he && "string" != typeof Be[a])) {
      var e = "Symbol." + a;
      he && be(ye, a) ? (Be[a] = ye[a]) : (Be[a] = we && Ee ? Ee(e) : Qe(e));
    }
    return Be[a];
  },
  xe = L,
  je = pa,
  Me = La,
  ze = Ja,
  Ie = De,
  Ce = C.TypeError,
  Ne = Ie("toPrimitive"),
  ke = function (a, e) {
    if (!je(a) || Me(a)) return a;
    var o,
      r = ze(a, Ne);
    if (r) {
      if ((void 0 === e && (e = "default"), (o = xe(r, a, e)), !je(o) || Me(o)))
        return o;
      throw Ce("Can't convert object to primitive value");
    }
    return (
      void 0 === e && (e = "number"),
      (function (a, e) {
        var o, r;
        if ("string" === e && Wa((o = a.toString)) && !Ka((r = Va(o, a))))
          return r;
        if (Wa((o = a.valueOf)) && !Ka((r = Va(o, a)))) return r;
        if ("string" !== e && Wa((o = a.toString)) && !Ka((r = Va(o, a))))
          return r;
        throw Xa("Can't convert object to primitive value");
      })(a, e)
    );
  },
  Fe = ke,
  Oe = La,
  Te = function (a) {
    var e = Fe(a, "string");
    return Oe(e) ? e : e + "";
  },
  Se = pa,
  Le = C.document,
  Ue = Se(Le) && Se(Le.createElement),
  Re = function (a) {
    return Ue ? Le.createElement(a) : {};
  },
  Ye = Re,
  Pe =
    !F &&
    !k(function () {
      return (
        7 !=
        Object.defineProperty(Ye("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  Ge = F,
  qe = L,
  He = U,
  Je = H,
  Ve = Aa,
  We = Te,
  Ke = ce,
  Xe = Pe,
  Ze = Object.getOwnPropertyDescriptor;
N.f = Ge
  ? Ze
  : function (a, e) {
      if (((a = Ve(a)), (e = We(e)), Xe))
        try {
          return Ze(a, e);
        } catch (a) {}
      if (Ke(a, e)) return Je(!qe(He.f, a, e), a[e]);
    };
var _e = {},
  $e =
    F &&
    k(function () {
      return (
        42 !=
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: 0,
        }).prototype
      );
    }),
  ao = C,
  eo = pa,
  oo = ao.String,
  ro = ao.TypeError,
  io = function (a) {
    if (eo(a)) return a;
    throw ro(oo(a) + " is not an object");
  },
  to = F,
  no = Pe,
  so = $e,
  uo = io,
  co = Te,
  lo = C.TypeError,
  mo = Object.defineProperty,
  Ao = Object.getOwnPropertyDescriptor;
_e.f = to
  ? so
    ? function (a, e, o) {
        if (
          (uo(a),
          (e = co(e)),
          uo(o),
          "function" == typeof a &&
            "prototype" === e &&
            "value" in o &&
            "writable" in o &&
            !o.writable)
        ) {
          var r = Ao(a, e);
          r &&
            r.writable &&
            ((a[e] = o.value),
            (o = {
              configurable:
                "configurable" in o ? o.configurable : r.configurable,
              enumerable: "enumerable" in o ? o.enumerable : r.enumerable,
              writable: 0,
            }));
        }
        return mo(a, e, o);
      }
    : mo
  : function (a, e, o) {
      if ((uo(a), (e = co(e)), uo(o), no))
        try {
          return mo(a, e, o);
        } catch (a) {}
      if ("get" in o || "set" in o) throw lo("Accessors not supported");
      return "value" in o && (a[e] = o.value), a;
    };
var go = _e,
  po = H,
  fo = F
    ? function (a, e, o) {
        return go.f(a, e, po(1, o));
      }
    : function (a, e, o) {
        return (a[e] = o), a;
      },
  bo = {
    exports: {},
  },
  vo = ga,
  ho = oe,
  wo = Z(Function.toString);
vo(ho.inspectSource) ||
  (ho.inspectSource = function (a) {
    return wo(a);
  });
var Bo,
  yo,
  Eo,
  Qo = ho.inspectSource,
  Do = ga,
  xo = Qo,
  jo = C.WeakMap,
  Mo = Do(jo) && /native code/.test(xo(jo)),
  zo = Za.exports,
  Io = de,
  Co = zo("keys"),
  No = function (a) {
    return Co[a] || (Co[a] = Io(a));
  },
  ko = {},
  Fo = Mo,
  Oo = C,
  To = Z,
  So = pa,
  Lo = fo,
  Uo = ce,
  Ro = oe,
  Yo = No,
  Po = ko,
  Go = Oo.TypeError,
  qo = Oo.WeakMap;
if (Fo || Ro.state) {
  var Ho = Ro.state || (Ro.state = new qo()),
    Jo = To(Ho.get),
    Vo = To(Ho.has),
    Wo = To(Ho.set);
  (Bo = function (a, e) {
    if (Vo(Ho, a)) throw new Go("Object already initialized");
    return (e.facade = a), Wo(Ho, a, e), e;
  }),
    (yo = function (a) {
      return Jo(Ho, a) || {};
    }),
    (Eo = function (a) {
      return Vo(Ho, a);
    });
} else {
  var Ko = Yo("state");
  (Po[Ko] = 1),
    (Bo = function (a, e) {
      if (Uo(a, Ko)) throw new Go("Object already initialized");
      return (e.facade = a), Lo(a, Ko, e), e;
    }),
    (yo = function (a) {
      return Uo(a, Ko) ? a[Ko] : {};
    }),
    (Eo = function (a) {
      return Uo(a, Ko);
    });
}
var Xo = {
    set: Bo,
    get: yo,
    has: Eo,
    enforce: function (a) {
      return Eo(a) ? yo(a) : Bo(a, {});
    },
    getterFor: function (a) {
      return function (e) {
        var o;
        if (!So(e) || (o = yo(e)).type !== a)
          throw Go("Incompatible receiver, " + a + " required");
        return o;
      };
    },
  },
  Zo = F,
  _o = ce,
  $o = Function.prototype,
  ar = Zo && Object.getOwnPropertyDescriptor,
  er = _o($o, "name"),
  or = {
    EXISTS: er,
    PROPER: er && "something" === function () {}.name,
    CONFIGURABLE: er && (!Zo || (Zo && ar($o, "name").configurable)),
  },
  rr = C,
  ir = ga,
  tr = ce,
  nr = fo,
  sr = ae,
  ur = Qo,
  cr = or.CONFIGURABLE,
  lr = Xo.get,
  mr = Xo.enforce,
  Ar = String(String).split("String");
(bo.exports = function (a, e, o, r) {
  var i,
    t = r ? !!r.unsafe : 0,
    n = r ? !!r.enumerable : 0,
    s = r ? !!r.noTargetGet : 0,
    u = r && void 0 !== r.name ? r.name : e;
  ir(o) &&
    ("Symbol(" === String(u).slice(0, 7) &&
      (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
    (!tr(o, "name") || (cr && o.name !== u)) && nr(o, "name", u),
    (i = mr(o)).source || (i.source = Ar.join("string" == typeof u ? u : ""))),
    a !== rr
      ? (t ? !s && a[e] && (n = 1) : delete a[e], n ? (a[e] = o) : nr(a, e, o))
      : n
      ? (a[e] = o)
      : sr(e, o);
})(Function.prototype, "toString", function () {
  return (ir(this) && lr(this).source) || ur(this);
});
var gr = {},
  dr = Math.ceil,
  pr = Math.floor,
  fr = function (a) {
    var e = +a;
    return e != e || 0 === e ? 0 : (e > 0 ? pr : dr)(e);
  },
  br = fr,
  vr = Math.max,
  hr = Math.min,
  wr = function (a, e) {
    var o = br(a);
    return o < 0 ? vr(o + e, 0) : hr(o, e);
  },
  Br = fr,
  yr = Math.min,
  Er = function (a) {
    return a > 0 ? yr(Br(a), 9007199254740991) : 0;
  },
  Qr = Er,
  Dr = function (a) {
    return Qr(a.length);
  },
  xr = Aa,
  jr = wr,
  Mr = Dr,
  zr = function (a) {
    return function (e, o, r) {
      var i,
        t = xr(e),
        n = Mr(t),
        s = jr(r, n);
      if (a && o != o) {
        for (; n > s; ) if ((i = t[s++]) != i) return 1;
      } else
        for (; n > s; s++) if ((a || s in t) && t[s] === o) return a || s || 0;
      return !a && -1;
    };
  },
  Ir = {
    includes: zr(1),
    indexOf: zr(0),
  },
  Cr = ce,
  Nr = Aa,
  kr = Ir.indexOf,
  Fr = ko,
  Or = Z([].push),
  Tr = function (a, e) {
    var o,
      r = Nr(a),
      i = 0,
      t = [];
    for (o in r) !Cr(Fr, o) && Cr(r, o) && Or(t, o);
    for (; e.length > i; ) Cr(r, (o = e[i++])) && (~kr(t, o) || Or(t, o));
    return t;
  },
  Sr = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  Lr = Tr,
  Ur = Sr.concat("length", "prototype");
gr.f =
  Object.getOwnPropertyNames ||
  function (a) {
    return Lr(a, Ur);
  };
var Rr = {};
Rr.f = Object.getOwnPropertySymbols;
var Yr = ha,
  Pr = gr,
  Gr = Rr,
  qr = io,
  Hr = Z([].concat),
  Jr =
    Yr("Reflect", "ownKeys") ||
    function (a) {
      var e = Pr.f(qr(a)),
        o = Gr.f;
      return o ? Hr(e, o(a)) : e;
    },
  Vr = ce,
  Wr = Jr,
  Kr = N,
  Xr = _e,
  Zr = function (a, e, o) {
    for (var r = Wr(e), i = Xr.f, t = Kr.f, n = 0; n < r.length; n++) {
      var s = r[n];
      Vr(a, s) || (o && Vr(o, s)) || i(a, s, t(e, s));
    }
  },
  _r = k,
  $r = ga,
  ai = /#|\.prototype\./,
  ei = function (a, e) {
    var o = ri[oi(a)];
    return o == ti ? 1 : o == ii ? 0 : $r(e) ? _r(e) : !!e;
  },
  oi = (ei.normalize = function (a) {
    return String(a).replace(ai, ".").toLowerCase();
  }),
  ri = (ei.data = {}),
  ii = (ei.NATIVE = "N"),
  ti = (ei.POLYFILL = "P"),
  ni = ei,
  si = C,
  ui = N.f,
  ci = fo,
  li = bo.exports,
  mi = ae,
  Ai = Zr,
  gi = ni,
  di = function (a, e) {
    var o,
      r,
      i,
      t,
      n,
      s = a.target,
      u = a.global,
      c = a.stat;
    if ((o = u ? si : c ? si[s] || mi(s, {}) : (si[s] || {}).prototype))
      for (r in e) {
        if (
          ((t = e[r]),
          (i = a.noTargetGet ? (n = ui(o, r)) && n.value : o[r]),
          !gi(u ? r : s + (c ? "." : "#") + r, a.forced) && void 0 !== i)
        ) {
          if (typeof t == typeof i) continue;
          Ai(t, i);
        }
        (a.sham || (i && i.sham)) && ci(t, "sham", 1), li(o, r, t, a);
      }
  },
  pi = ea,
  fi =
    Array.isArray ||
    function (a) {
      return "Array" == pi(a);
    },
  bi = Te,
  vi = _e,
  hi = H,
  wi = function (a, e, o) {
    var r = bi(e);
    r in a ? vi.f(a, r, hi(0, o)) : (a[r] = o);
  },
  Bi = {};
Bi[De("toStringTag")] = "z";
var yi = "[object z]" === String(Bi),
  Ei = C,
  Qi = yi,
  Di = ga,
  xi = ea,
  ji = De("toStringTag"),
  Mi = Ei.Object,
  zi =
    "Arguments" ==
    xi(
      (function () {
        return arguments;
      })()
    ),
  Ii = Qi
    ? xi
    : function (a) {
        var e, o, r;
        return void 0 === a
          ? "Undefined"
          : null === a
          ? "Null"
          : "string" ==
            typeof (o = (function (a, e) {
              try {
                return a[e];
              } catch (a) {}
            })((e = Mi(a)), ji))
          ? o
          : zi
          ? xi(e)
          : "Object" == (r = xi(e)) && Di(e.callee)
          ? "Arguments"
          : r;
      },
  Ci = Z,
  Ni = k,
  ki = ga,
  Fi = Ii,
  Oi = Qo,
  Ti = function () {},
  Si = [],
  Li = ha("Reflect", "construct"),
  Ui = /^\s*(?:class|function)\b/,
  Ri = Ci(Ui.exec),
  Yi = !Ui.exec(Ti),
  Pi = function (a) {
    if (!ki(a)) return 0;
    try {
      return Li(Ti, Si, a), 1;
    } catch (a) {
      return 0;
    }
  },
  Gi = function (a) {
    if (!ki(a)) return 0;
    switch (Fi(a)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return 0;
    }
    try {
      return Yi || !!Ri(Ui, Oi(a));
    } catch (a) {
      return 1;
    }
  };
Gi.sham = 1;
var qi =
    !Li ||
    Ni(function () {
      var a;
      return (
        Pi(Pi.call) ||
        !Pi(Object) ||
        !Pi(function () {
          a = 1;
        }) ||
        a
      );
    })
      ? Gi
      : Pi,
  Hi = C,
  Ji = fi,
  Vi = qi,
  Wi = pa,
  Ki = De("species"),
  Xi = Hi.Array,
  Zi = function (a, e) {
    return new ((function (a) {
      var e;
      return (
        Ji(a) &&
          ((e = a.constructor),
          ((Vi(e) && (e === Xi || Ji(e.prototype))) ||
            (Wi(e) && null === (e = e[Ki]))) &&
            (e = void 0)),
        void 0 === e ? Xi : e
      );
    })(a))(0 === e ? 0 : e);
  },
  _i = k,
  $i = Ma,
  at = De("species"),
  et = function (a) {
    return (
      $i >= 51 ||
      !_i(function () {
        var e = [];
        return (
          ((e.constructor = {})[at] = function () {
            return {
              foo: 1,
            };
          }),
          1 !== e[a](Boolean).foo
        );
      })
    );
  },
  ot = di,
  rt = C,
  it = k,
  tt = fi,
  nt = pa,
  st = ne,
  ut = Dr,
  ct = wi,
  lt = Zi,
  mt = et,
  At = Ma,
  gt = De("isConcatSpreadable"),
  dt = rt.TypeError,
  pt =
    At >= 51 ||
    !it(function () {
      var a = [];
      return (a[gt] = 0), a.concat()[0] !== a;
    }),
  ft = mt("concat"),
  bt = function (a) {
    if (!nt(a)) return 0;
    var e = a[gt];
    return void 0 !== e ? !!e : tt(a);
  };
ot(
  {
    target: "Array",
    proto: 1,
    forced: !pt || !ft,
  },
  {
    concat: function (a) {
      var e,
        o,
        r,
        i,
        t,
        n = st(this),
        s = lt(n, 0),
        u = 0;
      for (e = -1, r = arguments.length; e < r; e++)
        if (bt((t = -1 === e ? n : arguments[e]))) {
          if (u + (i = ut(t)) > 9007199254740991)
            throw dt("Maximum allowed index exceeded");
          for (o = 0; o < i; o++, u++) o in t && ct(s, u, t[o]);
        } else {
          if (u >= 9007199254740991) throw dt("Maximum allowed index exceeded");
          ct(s, u++, t);
        }
      return (s.length = u), s;
    },
  }
);
var vt = Ii,
  ht = yi
    ? {}.toString
    : function () {
        return "[object " + vt(this) + "]";
      },
  wt = yi,
  Bt = bo.exports,
  yt = ht;
wt ||
  Bt(Object.prototype, "toString", yt, {
    unsafe: 1,
  });
var Et = Tr,
  Qt = Sr,
  Dt =
    Object.keys ||
    function (a) {
      return Et(a, Qt);
    },
  xt = ne,
  jt = Dt;
di(
  {
    target: "Object",
    stat: 1,
    forced: k(function () {
      jt(1);
    }),
  },
  {
    keys: function (a) {
      return jt(xt(a));
    },
  }
);
var Mt = qa,
  zt = O,
  It = Z(Z.bind),
  Ct = function (a, e) {
    return (
      Mt(a),
      void 0 === e
        ? a
        : zt
        ? It(a, e)
        : function () {
            return a.apply(e, arguments);
          }
    );
  },
  Nt = Ct,
  kt = sa,
  Ft = ne,
  Ot = Dr,
  Tt = Zi,
  St = Z([].push),
  Lt = function (a) {
    var e = 1 == a,
      o = 2 == a,
      r = 3 == a,
      i = 4 == a,
      t = 6 == a,
      n = 7 == a,
      s = 5 == a || t;
    return function (u, c, l, m) {
      for (
        var A,
          g,
          d = Ft(u),
          p = kt(d),
          f = Nt(c, l),
          b = Ot(p),
          v = 0,
          h = m || Tt,
          w = e ? h(u, b) : o || n ? h(u, 0) : void 0;
        b > v;
        v++
      )
        if ((s || v in p) && ((g = f((A = p[v]), v, d)), a))
          if (e) w[v] = g;
          else if (g)
            switch (a) {
              case 3:
                return 1;
              case 5:
                return A;
              case 6:
                return v;
              case 2:
                St(w, A);
            }
          else
            switch (a) {
              case 4:
                return 0;
              case 7:
                St(w, A);
            }
      return t ? -1 : r || i ? i : w;
    };
  },
  Ut = {
    forEach: Lt(0),
    map: Lt(1),
    filter: Lt(2),
    some: Lt(3),
    every: Lt(4),
    find: Lt(5),
    findIndex: Lt(6),
    filterReject: Lt(7),
  },
  Rt = Ut.map;
di(
  {
    target: "Array",
    proto: 1,
    forced: !et("map"),
  },
  {
    map: function (a) {
      return Rt(this, a, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var Yt = k,
  Pt = function (a, e) {
    var o = [][a];
    return (
      !!o &&
      Yt(function () {
        o.call(
          null,
          e ||
            function () {
              return 1;
            },
          1
        );
      })
    );
  },
  Gt = di,
  qt = sa,
  Ht = Aa,
  Jt = Pt,
  Vt = Z([].join),
  Wt = qt != Object,
  Kt = Jt("join", ",");
Gt(
  {
    target: "Array",
    proto: 1,
    forced: Wt || !Kt,
  },
  {
    join: function (a) {
      return Vt(Ht(this), void 0 === a ? "," : a);
    },
  }
);
var Xt = Ut.filter;
di(
  {
    target: "Array",
    proto: 1,
    forced: !et("filter"),
  },
  {
    filter: function (a) {
      return Xt(this, a, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var Zt = Ii,
  _t = C.String,
  $t = function (a) {
    if ("Symbol" === Zt(a))
      throw TypeError("Cannot convert a Symbol value to a string");
    return _t(a);
  },
  an = io,
  en = function () {
    var a = an(this),
      e = "";
    return (
      a.global && (e += "g"),
      a.ignoreCase && (e += "i"),
      a.multiline && (e += "m"),
      a.dotAll && (e += "s"),
      a.unicode && (e += "u"),
      a.sticky && (e += "y"),
      e
    );
  },
  on = k,
  rn = C.RegExp,
  tn = on(function () {
    var a = rn("a", "y");
    return (a.lastIndex = 2), null != a.exec("abcd");
  }),
  nn =
    tn ||
    on(function () {
      return !rn("a", "y").sticky;
    }),
  sn =
    tn ||
    on(function () {
      var a = rn("^r", "gy");
      return (a.lastIndex = 2), null != a.exec("str");
    }),
  un = {
    BROKEN_CARET: sn,
    MISSED_STICKY: nn,
    UNSUPPORTED_Y: tn,
  },
  cn = {},
  ln = F,
  mn = $e,
  An = _e,
  gn = io,
  dn = Aa,
  pn = Dt;
cn.f =
  ln && !mn
    ? Object.defineProperties
    : function (a, e) {
        gn(a);
        for (var o, r = dn(e), i = pn(e), t = i.length, n = 0; t > n; )
          An.f(a, (o = i[n++]), r[o]);
        return a;
      };
var fn,
  bn = ha("document", "documentElement"),
  vn = io,
  hn = cn,
  wn = Sr,
  Bn = ko,
  yn = bn,
  En = Re,
  Qn = No("IE_PROTO"),
  Dn = function () {},
  xn = function (a) {
    return "<script>" + a + "</script>";
  },
  jn = function (a) {
    a.write(xn("")), a.close();
    var e = a.parentWindow.Object;
    return (a = null), e;
  },
  Mn = function () {
    try {
      fn = new ActiveXObject("htmlfile");
    } catch (a) {}
    var a, e;
    Mn =
      "undefined" != typeof document
        ? document.domain && fn
          ? jn(fn)
          : (((e = En("iframe")).style.display = "none"),
            yn.appendChild(e),
            (e.src = String("javascript:")),
            (a = e.contentWindow.document).open(),
            a.write(xn("document.F=Object")),
            a.close(),
            a.F)
        : jn(fn);
    for (var o = wn.length; o--; ) delete Mn.prototype[wn[o]];
    return Mn();
  };
Bn[Qn] = 1;
var zn,
  In,
  Cn =
    Object.create ||
    function (a, e) {
      var o;
      return (
        null !== a
          ? ((Dn.prototype = vn(a)),
            (o = new Dn()),
            (Dn.prototype = null),
            (o[Qn] = a))
          : (o = Mn()),
        void 0 === e ? o : hn.f(o, e)
      );
    },
  Nn = k,
  kn = C.RegExp,
  Fn = Nn(function () {
    var a = kn(".", "s");
    return !(a.dotAll && a.exec("\n") && "s" === a.flags);
  }),
  On = k,
  Tn = C.RegExp,
  Sn = On(function () {
    var a = Tn("(?<a>b)", "g");
    return "b" !== a.exec("b").groups.a || "bc" !== "b".replace(a, "$<a>c");
  }),
  Ln = L,
  Un = Z,
  Rn = $t,
  Yn = en,
  Pn = un,
  Gn = Za.exports,
  qn = Cn,
  Hn = Xo.get,
  Jn = Fn,
  Vn = Sn,
  Wn = Gn("native-string-replace", String.prototype.replace),
  Kn = RegExp.prototype.exec,
  Xn = Kn,
  Zn = Un("".charAt),
  _n = Un("".indexOf),
  $n = Un("".replace),
  as = Un("".slice),
  es =
    ((In = /b*/g),
    Ln(Kn, (zn = /a/), "a"),
    Ln(Kn, In, "a"),
    0 !== zn.lastIndex || 0 !== In.lastIndex),
  os = Pn.BROKEN_CARET,
  rs = void 0 !== /()??/.exec("")[1];
(es || rs || os || Jn || Vn) &&
  (Xn = function (a) {
    var e,
      o,
      r,
      i,
      t,
      n,
      s,
      u = this,
      c = Hn(u),
      l = Rn(a),
      m = c.raw;
    if (m)
      return (
        (m.lastIndex = u.lastIndex),
        (e = Ln(Xn, m, l)),
        (u.lastIndex = m.lastIndex),
        e
      );
    var A = c.groups,
      g = os && u.sticky,
      d = Ln(Yn, u),
      p = u.source,
      f = 0,
      b = l;
    if (
      (g &&
        ((d = $n(d, "y", "")),
        -1 === _n(d, "g") && (d += "g"),
        (b = as(l, u.lastIndex)),
        u.lastIndex > 0 &&
          (!u.multiline || (u.multiline && "\n" !== Zn(l, u.lastIndex - 1))) &&
          ((p = "(?: " + p + ")"), (b = " " + b), f++),
        (o = new RegExp("^(?:" + p + ")", d))),
      rs && (o = new RegExp("^" + p + "$(?!\\s)", d)),
      es && (r = u.lastIndex),
      (i = Ln(Kn, g ? o : u, b)),
      g
        ? i
          ? ((i.input = as(i.input, f)),
            (i[0] = as(i[0], f)),
            (i.index = u.lastIndex),
            (u.lastIndex += i[0].length))
          : (u.lastIndex = 0)
        : es && i && (u.lastIndex = u.global ? i.index + i[0].length : r),
      rs &&
        i &&
        i.length > 1 &&
        Ln(Wn, i[0], o, function () {
          for (t = 1; t < arguments.length - 2; t++)
            void 0 === arguments[t] && (i[t] = void 0);
        }),
      i && A)
    )
      for (i.groups = n = qn(null), t = 0; t < A.length; t++)
        n[(s = A[t])[0]] = i[s[1]];
    return i;
  });
var is = Xn;
di(
  {
    target: "RegExp",
    proto: 1,
    forced: /./.exec !== is,
  },
  {
    exec: is,
  }
);
var ts = O,
  ns = Function.prototype,
  ss = ns.apply,
  us = ns.call,
  cs =
    ("object" == typeof Reflect && Reflect.apply) ||
    (ts
      ? us.bind(ss)
      : function () {
          return us.apply(ss, arguments);
        }),
  ls = Z,
  ms = bo.exports,
  As = is,
  gs = k,
  ds = De,
  ps = fo,
  fs = ds("species"),
  bs = RegExp.prototype,
  vs = function (a, e, o, r) {
    var i = ds(a),
      t = !gs(function () {
        var e = {};
        return (
          (e[i] = function () {
            return 7;
          }),
          7 != ""[a](e)
        );
      }),
      n =
        t &&
        !gs(function () {
          var e = 0,
            o = /a/;
          return (
            "split" === a &&
              (((o = {}).constructor = {}),
              (o.constructor[fs] = function () {
                return o;
              }),
              (o.flags = ""),
              (o[i] = /./[i])),
            (o.exec = function () {
              return (e = 1), null;
            }),
            o[i](""),
            !e
          );
        });
    if (!t || !n || o) {
      var s = ls(/./[i]),
        u = e(i, ""[a], function (a, e, o, r, i) {
          var n = ls(a),
            u = e.exec;
          return u === As || u === bs.exec
            ? t && !i
              ? {
                  done: 1,
                  value: s(e, o, r),
                }
              : {
                  done: 1,
                  value: n(o, e, r),
                }
            : {
                done: 0,
              };
        });
      ms(String.prototype, a, u[0]), ms(bs, i, u[1]);
    }
    r && ps(bs[i], "sham", 1);
  },
  hs = pa,
  ws = ea,
  Bs = De("match"),
  ys = function (a) {
    var e;
    return hs(a) && (void 0 !== (e = a[Bs]) ? !!e : "RegExp" == ws(a));
  },
  Es = qi,
  Qs = Ra,
  Ds = C.TypeError,
  xs = io,
  js = De("species"),
  Ms = function (a, e) {
    var o,
      r = xs(a).constructor;
    return void 0 === r || null == (o = xs(r)[js])
      ? e
      : (function (a) {
          if (Es(a)) return a;
          throw Ds(Qs(a) + " is not a constructor");
        })(o);
  },
  zs = Z,
  Is = fr,
  Cs = $t,
  Ns = ca,
  ks = zs("".charAt),
  Fs = zs("".charCodeAt),
  Os = zs("".slice),
  Ts = function (a) {
    return function (e, o) {
      var r,
        i,
        t = Cs(Ns(e)),
        n = Is(o),
        s = t.length;
      return n < 0 || n >= s
        ? a
          ? ""
          : void 0
        : (r = Fs(t, n)) < 55296 ||
          r > 56319 ||
          n + 1 === s ||
          (i = Fs(t, n + 1)) < 56320 ||
          i > 57343
        ? a
          ? ks(t, n)
          : r
        : a
        ? Os(t, n, n + 2)
        : i - 56320 + ((r - 55296) << 10) + 65536;
    };
  },
  Ss = {
    codeAt: Ts(0),
    charAt: Ts(1),
  },
  Ls = Ss.charAt,
  Us = function (a, e, o) {
    return e + (o ? Ls(a, e).length : 1);
  },
  Rs = wr,
  Ys = Dr,
  Ps = wi,
  Gs = C.Array,
  qs = Math.max,
  Hs = function (a, e, o) {
    for (
      var r = Ys(a),
        i = Rs(e, r),
        t = Rs(void 0 === o ? r : o, r),
        n = Gs(qs(t - i, 0)),
        s = 0;
      i < t;
      i++, s++
    )
      Ps(n, s, a[i]);
    return (n.length = s), n;
  },
  Js = L,
  Vs = io,
  Ws = ga,
  Ks = ea,
  Xs = is,
  Zs = C.TypeError,
  _s = function (a, e) {
    var o = a.exec;
    if (Ws(o)) {
      var r = Js(o, a, e);
      return null !== r && Vs(r), r;
    }
    if ("RegExp" === Ks(a)) return Js(Xs, a, e);
    throw Zs("RegExp#exec called on incompatible receiver");
  },
  $s = cs,
  au = L,
  eu = Z,
  ou = vs,
  ru = ys,
  iu = io,
  tu = ca,
  nu = Ms,
  su = Us,
  uu = Er,
  cu = $t,
  lu = Ja,
  mu = Hs,
  Au = _s,
  gu = is,
  du = k,
  pu = un.UNSUPPORTED_Y,
  fu = Math.min,
  bu = [].push,
  vu = eu(/./.exec),
  hu = eu(bu),
  wu = eu("".slice),
  Bu = !du(function () {
    var a = /(?:)/,
      e = a.exec;
    a.exec = function () {
      return e.apply(this, arguments);
    };
    var o = "ab".split(a);
    return 2 !== o.length || "a" !== o[0] || "b" !== o[1];
  });
ou(
  "split",
  function (a, e, o) {
    var r;
    return (
      (r =
        "c" == "abbc".split(/(b)*/)[1] ||
        4 != "test".split(/(?:)/, -1).length ||
        2 != "ab".split(/(?:ab)*/).length ||
        4 != ".".split(/(.?)(.?)/).length ||
        ".".split(/()()/).length > 1 ||
        "".split(/.?/).length
          ? function (a, o) {
              var r = cu(tu(this)),
                i = void 0 === o ? 4294967295 : o >>> 0;
              if (0 === i) return [];
              if (void 0 === a) return [r];
              if (!ru(a)) return au(e, r, a, i);
              for (
                var t,
                  n,
                  s,
                  u = [],
                  c =
                    (a.ignoreCase ? "i" : "") +
                    (a.multiline ? "m" : "") +
                    (a.unicode ? "u" : "") +
                    (a.sticky ? "y" : ""),
                  l = 0,
                  m = new RegExp(a.source, c + "g");
                (t = au(gu, m, r)) &&
                !(
                  (n = m.lastIndex) > l &&
                  (hu(u, wu(r, l, t.index)),
                  t.length > 1 && t.index < r.length && $s(bu, u, mu(t, 1)),
                  (s = t[0].length),
                  (l = n),
                  u.length >= i)
                );

              )
                m.lastIndex === t.index && m.lastIndex++;
              return (
                l === r.length
                  ? (!s && vu(m, "")) || hu(u, "")
                  : hu(u, wu(r, l)),
                u.length > i ? mu(u, 0, i) : u
              );
            }
          : "0".split(void 0, 0).length
          ? function (a, o) {
              return void 0 === a && 0 === o ? [] : au(e, this, a, o);
            }
          : e),
      [
        function (e, o) {
          var i = tu(this),
            t = null == e ? void 0 : lu(e, a);
          return t ? au(t, e, i, o) : au(r, cu(i), e, o);
        },
        function (a, i) {
          var t = iu(this),
            n = cu(a),
            s = o(r, t, n, i, r !== e);
          if (s.done) return s.value;
          var u = nu(t, RegExp),
            c = t.unicode,
            l =
              (t.ignoreCase ? "i" : "") +
              (t.multiline ? "m" : "") +
              (t.unicode ? "u" : "") +
              (pu ? "g" : "y"),
            m = new u(pu ? "^(?:" + t.source + ")" : t, l),
            A = void 0 === i ? 4294967295 : i >>> 0;
          if (0 === A) return [];
          if (0 === n.length) return null === Au(m, n) ? [n] : [];
          for (var g = 0, d = 0, p = []; d < n.length; ) {
            m.lastIndex = pu ? 0 : d;
            var f,
              b = Au(m, pu ? wu(n, d) : n);
            if (
              null === b ||
              (f = fu(uu(m.lastIndex + (pu ? d : 0)), n.length)) === g
            )
              d = su(n, d, c);
            else {
              if ((hu(p, wu(n, g, d)), p.length === A)) return p;
              for (var v = 1; v <= b.length - 1; v++)
                if ((hu(p, b[v]), p.length === A)) return p;
              d = g = f;
            }
          }
          return hu(p, wu(n, g)), p;
        },
      ]
    );
  },
  !Bu,
  pu
);
var yu = ca,
  Eu = $t,
  Qu = Z("".replace),
  Du = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
  xu = RegExp("^" + Du + Du + "*"),
  ju = RegExp(Du + Du + "*$"),
  Mu = function (a) {
    return function (e) {
      var o = Eu(yu(e));
      return 1 & a && (o = Qu(o, xu, "")), 2 & a && (o = Qu(o, ju, "")), o;
    };
  },
  zu = {
    start: Mu(1),
    end: Mu(2),
    trim: Mu(3),
  },
  Iu = C,
  Cu = k,
  Nu = Z,
  ku = $t,
  Fu = zu.trim,
  Ou = Iu.parseInt,
  Tu = Iu.Symbol,
  Su = Tu && Tu.iterator,
  Lu = /^[+-]?0x/i,
  Uu = Nu(Lu.exec),
  Ru =
    8 !== Ou("\t\n\v\f\r                　\u2028\u2029\ufeff08") ||
    22 !== Ou("\t\n\v\f\r                　\u2028\u2029\ufeff0x16") ||
    (Su &&
      !Cu(function () {
        Ou(Object(Su));
      }))
      ? function (a, e) {
          var o = Fu(ku(a));
          return Ou(o, e >>> 0 || (Uu(Lu, o) ? 16 : 10));
        }
      : Ou;
di(
  {
    target: "Number",
    stat: 1,
    forced: Number.parseInt != Ru,
  },
  {
    parseInt: Ru,
  }
);
var Yu = C,
  Pu = ga,
  Gu = Yu.String,
  qu = Yu.TypeError,
  Hu = Z,
  Ju = io,
  Vu =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var a,
            e = 0,
            o = {};
          try {
            (a = Hu(
              Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set
            ))(o, []),
              (e = o instanceof Array);
          } catch (a) {}
          return function (o, r) {
            return (
              Ju(o),
              (function (a) {
                if ("object" == typeof a || Pu(a)) return a;
                throw qu("Can't set " + Gu(a) + " as a prototype");
              })(r),
              e ? a(o, r) : (o.__proto__ = r),
              o
            );
          };
        })()
      : void 0),
  Wu = ga,
  Ku = pa,
  Xu = Vu,
  Zu = function (a, e, o) {
    var r, i;
    return (
      Xu &&
        Wu((r = e.constructor)) &&
        r !== o &&
        Ku((i = r.prototype)) &&
        i !== o.prototype &&
        Xu(a, i),
      a
    );
  },
  _u = Z((1).valueOf),
  $u = F,
  ac = C,
  ec = Z,
  oc = ni,
  rc = bo.exports,
  ic = ce,
  tc = Zu,
  nc = wa,
  sc = La,
  uc = ke,
  cc = k,
  lc = gr.f,
  mc = N.f,
  Ac = _e.f,
  gc = _u,
  dc = zu.trim,
  pc = ac.Number,
  fc = pc.prototype,
  bc = ac.TypeError,
  vc = ec("".slice),
  hc = ec("".charCodeAt),
  wc = function (a) {
    var e = uc(a, "number");
    return "bigint" == typeof e ? e : Bc(e);
  },
  Bc = function (a) {
    var e,
      o,
      r,
      i,
      t,
      n,
      s,
      u,
      c = uc(a, "number");
    if (sc(c)) throw bc("Cannot convert a Symbol value to a number");
    if ("string" == typeof c && c.length > 2)
      if (((c = dc(c)), 43 === (e = hc(c, 0)) || 45 === e)) {
        if (88 === (o = hc(c, 2)) || 120 === o) return NaN;
      } else if (48 === e) {
        switch (hc(c, 1)) {
          case 66:
          case 98:
            (r = 2), (i = 49);
            break;
          case 79:
          case 111:
            (r = 8), (i = 55);
            break;
          default:
            return +c;
        }
        for (n = (t = vc(c, 2)).length, s = 0; s < n; s++)
          if ((u = hc(t, s)) < 48 || u > i) return NaN;
        return parseInt(t, r);
      }
    return +c;
  };
if (oc("Number", !pc(" 0o1") || !pc("0b1") || pc("+0x1"))) {
  for (
    var yc,
      Ec = function (a) {
        var e = arguments.length < 1 ? 0 : pc(wc(a)),
          o = this;
        return nc(fc, o) &&
          cc(function () {
            gc(o);
          })
          ? tc(Object(e), o, Ec)
          : e;
      },
      Qc = $u
        ? lc(pc)
        : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(
            ","
          ),
      Dc = 0;
    Qc.length > Dc;
    Dc++
  )
    ic(pc, (yc = Qc[Dc])) && !ic(Ec, yc) && Ac(Ec, yc, mc(pc, yc));
  (Ec.prototype = fc), (fc.constructor = Ec), rc(ac, "Number", Ec);
}
var xc = (function () {
    var a = document.location.pathname.split("/").filter(function (a) {
      return a.length;
    });
    if (0 == a.length) return 1;
    var e = Number.parseInt(a[a.length - 1]);
    return isNaN(e) ? 1 : e;
  })(),
  jc = b(
    {
      4: ["quatro", "Quarteto", 9],
      2: ["duo", "Dueto", 7],
      1: ["termo", "Termo", 6],
    }[xc],
    3
  ),
  Mc = jc[0],
  zc = jc[1],
  Ic = jc[2],
  Cc = {
    2: {
      palavras: "Palavras",
    },
    4: {
      palavras: "Palavras",
    },
    1: {
      palavras: "palavra certa",
    },
  }[xc],
  Nc = C.Promise,
  kc = bo.exports,
  Fc = function (a, e, o) {
    for (var r in e) kc(a, r, e[r], o);
    return a;
  },
  Oc = _e.f,
  Tc = ce,
  Sc = De("toStringTag"),
  Lc = function (a, e, o) {
    a && !o && (a = a.prototype),
      a &&
        !Tc(a, Sc) &&
        Oc(a, Sc, {
          configurable: 1,
          value: e,
        });
  },
  Uc = ha,
  Rc = _e,
  Yc = F,
  Pc = De("species"),
  Gc = function (a) {
    var e = Uc(a),
      o = Rc.f;
    Yc &&
      e &&
      !e[Pc] &&
      o(e, Pc, {
        configurable: 1,
        get: function () {
          return this;
        },
      });
  },
  qc = wa,
  Hc = C.TypeError,
  Jc = function (a, e) {
    if (qc(e, a)) return a;
    throw Hc("Incorrect invocation");
  },
  Vc = {},
  Wc = Vc,
  Kc = De("iterator"),
  Xc = Array.prototype,
  Zc = function (a) {
    return void 0 !== a && (Wc.Array === a || Xc[Kc] === a);
  },
  _c = Ii,
  $c = Ja,
  al = Vc,
  el = De("iterator"),
  ol = function (a) {
    if (null != a) return $c(a, el) || $c(a, "@@iterator") || al[_c(a)];
  },
  rl = L,
  il = qa,
  tl = io,
  nl = Ra,
  sl = ol,
  ul = C.TypeError,
  cl = function (a, e) {
    var o = arguments.length < 2 ? sl(a) : e;
    if (il(o)) return tl(rl(o, a));
    throw ul(nl(a) + " is not iterable");
  },
  ll = L,
  ml = io,
  Al = Ja,
  gl = function (a, e, o) {
    var r, i;
    ml(a);
    try {
      if (!(r = Al(a, "return"))) {
        if ("throw" === e) throw o;
        return o;
      }
      r = ll(r, a);
    } catch (a) {
      (i = 1), (r = a);
    }
    if ("throw" === e) throw o;
    if (i) throw r;
    return ml(r), o;
  },
  dl = Ct,
  pl = L,
  fl = io,
  bl = Ra,
  vl = Zc,
  hl = Dr,
  wl = wa,
  Bl = cl,
  yl = ol,
  El = gl,
  Ql = C.TypeError,
  Dl = function (a, e) {
    (this.stopped = a), (this.result = e);
  },
  xl = Dl.prototype,
  jl = function (a, e, o) {
    var r,
      i,
      t,
      n,
      s,
      u,
      c,
      l = o && o.that,
      m = !(!o || !o.AS_ENTRIES),
      A = !(!o || !o.IS_ITERATOR),
      g = !(!o || !o.INTERRUPTED),
      d = dl(e, l),
      p = function (a) {
        return r && El(r, "normal", a), new Dl(1, a);
      },
      f = function (a) {
        return m
          ? (fl(a), g ? d(a[0], a[1], p) : d(a[0], a[1]))
          : g
          ? d(a, p)
          : d(a);
      };
    if (A) r = a;
    else {
      if (!(i = yl(a))) throw Ql(bl(a) + " is not iterable");
      if (vl(i)) {
        for (t = 0, n = hl(a); n > t; t++)
          if ((s = f(a[t])) && wl(xl, s)) return s;
        return new Dl(0);
      }
      r = Bl(a, i);
    }
    for (u = r.next; !(c = pl(u, r)).done; ) {
      try {
        s = f(c.value);
      } catch (a) {
        El(r, "throw", a);
      }
      if ("object" == typeof s && s && wl(xl, s)) return s;
    }
    return new Dl(0);
  },
  Ml = De("iterator"),
  zl = 0;
try {
  var Il = 0,
    Cl = {
      next: function () {
        return {
          done: !!Il++,
        };
      },
      return: function () {
        zl = 1;
      },
    };
  (Cl[Ml] = function () {
    return this;
  }),
    Array.from(Cl, function () {
      throw 2;
    });
} catch (a) {}
var Nl,
  kl,
  Fl,
  Ol,
  Tl = function (a, e) {
    if (!e && !zl) return 0;
    var o = 0;
    try {
      var r = {};
      (r[Ml] = function () {
        return {
          next: function () {
            return {
              done: (o = 1),
            };
          },
        };
      }),
        a(r);
    } catch (a) {}
    return o;
  },
  Sl = Z([].slice),
  Ll = C.TypeError,
  Ul = /(?:ipad|iphone|ipod).*applewebkit/i.test(Ba),
  Rl = "process" == ea(C.process),
  Yl = C,
  Pl = cs,
  Gl = Ct,
  ql = ga,
  Hl = ce,
  Jl = k,
  Vl = bn,
  Wl = Sl,
  Kl = Re,
  Xl = function (a, e) {
    if (a < e) throw Ll("Not enough arguments");
    return a;
  },
  Zl = Ul,
  _l = Rl,
  $l = Yl.setImmediate,
  am = Yl.clearImmediate,
  em = Yl.process,
  om = Yl.Dispatch,
  rm = Yl.Function,
  im = Yl.MessageChannel,
  tm = Yl.String,
  nm = 0,
  sm = {};
try {
  Nl = Yl.location;
} catch (a) {}
var um = function (a) {
    if (Hl(sm, a)) {
      var e = sm[a];
      delete sm[a], e();
    }
  },
  cm = function (a) {
    return function () {
      um(a);
    };
  },
  lm = function (a) {
    um(a.data);
  },
  mm = function (a) {
    Yl.postMessage(tm(a), Nl.protocol + "//" + Nl.host);
  };
($l && am) ||
  (($l = function (a) {
    Xl(arguments.length, 1);
    var e = ql(a) ? a : rm(a),
      o = Wl(arguments, 1);
    return (
      (sm[++nm] = function () {
        Pl(e, void 0, o);
      }),
      kl(nm),
      nm
    );
  }),
  (am = function (a) {
    delete sm[a];
  }),
  _l
    ? (kl = function (a) {
        em.nextTick(cm(a));
      })
    : om && om.now
    ? (kl = function (a) {
        om.now(cm(a));
      })
    : im && !Zl
    ? ((Ol = (Fl = new im()).port2),
      (Fl.port1.onmessage = lm),
      (kl = Gl(Ol.postMessage, Ol)))
    : Yl.addEventListener &&
      ql(Yl.postMessage) &&
      !Yl.importScripts &&
      Nl &&
      "file:" !== Nl.protocol &&
      !Jl(mm)
    ? ((kl = mm), Yl.addEventListener("message", lm, 0))
    : (kl =
        "onreadystatechange" in Kl("script")
          ? function (a) {
              Vl.appendChild(Kl("script")).onreadystatechange = function () {
                Vl.removeChild(this), um(a);
              };
            }
          : function (a) {
              setTimeout(cm(a), 0);
            }));
var Am,
  gm,
  dm,
  pm,
  fm,
  bm,
  vm,
  hm,
  wm = {
    set: $l,
    clear: am,
  },
  Bm = C,
  ym = /ipad|iphone|ipod/i.test(Ba) && void 0 !== Bm.Pebble,
  Em = /web0s(?!.*chrome)/i.test(Ba),
  Qm = C,
  Dm = Ct,
  xm = N.f,
  jm = wm.set,
  Mm = Ul,
  zm = ym,
  Im = Em,
  Cm = Rl,
  Nm = Qm.MutationObserver || Qm.WebKitMutationObserver,
  km = Qm.document,
  Fm = Qm.process,
  Om = Qm.Promise,
  Tm = xm(Qm, "queueMicrotask"),
  Sm = Tm && Tm.value;
Sm ||
  ((Am = function () {
    var a, e;
    for (Cm && (a = Fm.domain) && a.exit(); gm; ) {
      (e = gm.fn), (gm = gm.next);
      try {
        e();
      } catch (a) {
        throw (gm ? pm() : (dm = void 0), a);
      }
    }
    (dm = void 0), a && a.enter();
  }),
  Mm || Cm || Im || !Nm || !km
    ? !zm && Om && Om.resolve
      ? (((vm = Om.resolve(void 0)).constructor = Om),
        (hm = Dm(vm.then, vm)),
        (pm = function () {
          hm(Am);
        }))
      : Cm
      ? (pm = function () {
          Fm.nextTick(Am);
        })
      : ((jm = Dm(jm, Qm)),
        (pm = function () {
          jm(Am);
        }))
    : ((fm = 1),
      (bm = km.createTextNode("")),
      new Nm(Am).observe(bm, {
        characterData: 1,
      }),
      (pm = function () {
        bm.data = fm = !fm;
      })));
var Lm =
    Sm ||
    function (a) {
      var e = {
        fn: a,
        next: void 0,
      };
      dm && (dm.next = e), gm || ((gm = e), pm()), (dm = e);
    },
  Um = {},
  Rm = qa,
  Ym = function (a) {
    var e, o;
    (this.promise = new a(function (a, r) {
      if (void 0 !== e || void 0 !== o)
        throw TypeError("Bad Promise constructor");
      (e = a), (o = r);
    })),
      (this.resolve = Rm(e)),
      (this.reject = Rm(o));
  };
Um.f = function (a) {
  return new Ym(a);
};
var Pm = io,
  Gm = pa,
  qm = Um,
  Hm = C,
  Jm = function () {
    (this.head = null), (this.tail = null);
  };
Jm.prototype = {
  add: function (a) {
    var e = {
      item: a,
      next: null,
    };
    this.head ? (this.tail.next = e) : (this.head = e), (this.tail = e);
  },
  get: function () {
    var a = this.head;
    if (a)
      return (
        (this.head = a.next), this.tail === a && (this.tail = null), a.item
      );
  },
};
var Vm,
  Wm,
  Km,
  Xm,
  Zm = Jm,
  _m = "object" == typeof window,
  $m = di,
  aA = C,
  eA = ha,
  oA = L,
  rA = Nc,
  iA = bo.exports,
  tA = Fc,
  nA = Vu,
  sA = Lc,
  uA = Gc,
  cA = qa,
  lA = ga,
  mA = pa,
  AA = Jc,
  gA = Qo,
  dA = jl,
  pA = Tl,
  fA = Ms,
  bA = wm.set,
  vA = Lm,
  hA = Um,
  wA = function (a) {
    try {
      return {
        error: 0,
        value: a(),
      };
    } catch (a) {
      return {
        error: 1,
        value: a,
      };
    }
  },
  BA = Zm,
  yA = Xo,
  EA = ni,
  QA = _m,
  DA = Rl,
  xA = Ma,
  jA = De("species"),
  MA = "Promise",
  zA = yA.getterFor(MA),
  IA = yA.set,
  CA = yA.getterFor(MA),
  NA = rA && rA.prototype,
  kA = rA,
  FA = NA,
  OA = aA.TypeError,
  TA = aA.document,
  SA = aA.process,
  LA = hA.f,
  UA = LA,
  RA = !!(TA && TA.createEvent && aA.dispatchEvent),
  YA = lA(aA.PromiseRejectionEvent),
  PA = 0,
  GA = EA(MA, function () {
    var a = gA(kA),
      e = a !== String(kA);
    if (!e && 66 === xA) return 1;
    if (xA >= 51 && /native code/.test(a)) return 0;
    var o = new kA(function (a) {
        a(1);
      }),
      r = function (a) {
        a(
          function () {},
          function () {}
        );
      };
    return (
      ((o.constructor = {})[jA] = r),
      (PA = o.then(function () {}) instanceof r) ? !e && QA && !YA : 1
    );
  }),
  qA =
    GA ||
    !pA(function (a) {
      kA.all(a).catch(function () {});
    }),
  HA = function (a) {
    var e;
    return mA(a) && lA((e = a.then)) ? e : 0;
  },
  JA = function (a, e) {
    var o,
      r,
      i,
      t = e.value,
      n = 1 == e.state,
      s = n ? a.ok : a.fail,
      u = a.resolve,
      c = a.reject,
      l = a.domain;
    try {
      s
        ? (n || (2 === e.rejection && ZA(e), (e.rejection = 1)),
          1 == s
            ? (o = t)
            : (l && l.enter(), (o = s(t)), l && (l.exit(), (i = 1))),
          o === a.promise
            ? c(OA("Promise-chain cycle"))
            : (r = HA(o))
            ? oA(r, o, u, c)
            : u(o))
        : c(t);
    } catch (a) {
      l && !i && l.exit(), c(a);
    }
  },
  VA = function (a, e) {
    a.notified ||
      ((a.notified = 1),
      vA(function () {
        for (var o, r = a.reactions; (o = r.get()); ) JA(o, a);
        (a.notified = 0), e && !a.rejection && KA(a);
      }));
  },
  WA = function (a, e, o) {
    var r, i;
    RA
      ? (((r = TA.createEvent("Event")).promise = e),
        (r.reason = o),
        r.initEvent(a, 0, 1),
        aA.dispatchEvent(r))
      : (r = {
          promise: e,
          reason: o,
        }),
      !YA && (i = aA["on" + a])
        ? i(r)
        : "unhandledrejection" === a &&
          (function () {
            var a = Hm.console;
            a && a.error;
          })();
  },
  KA = function (a) {
    oA(bA, aA, function () {
      var e,
        o = a.facade,
        r = a.value;
      if (
        XA(a) &&
        ((e = wA(function () {
          DA
            ? SA.emit("unhandledRejection", r, o)
            : WA("unhandledrejection", o, r);
        })),
        (a.rejection = DA || XA(a) ? 2 : 1),
        e.error)
      )
        throw e.value;
    });
  },
  XA = function (a) {
    return 1 !== a.rejection && !a.parent;
  },
  ZA = function (a) {
    oA(bA, aA, function () {
      var e = a.facade;
      DA ? SA.emit("rejectionHandled", e) : WA("rejectionhandled", e, a.value);
    });
  },
  _A = function (a, e, o) {
    return function (r) {
      a(e, r, o);
    };
  },
  $A = function (a, e, o) {
    a.done ||
      ((a.done = 1), o && (a = o), (a.value = e), (a.state = 2), VA(a, 1));
  },
  ag = function (a, e, o) {
    if (!a.done) {
      (a.done = 1), o && (a = o);
      try {
        if (a.facade === e) throw OA("Promise can't be resolved itself");
        var r = HA(e);
        r
          ? vA(function () {
              var o = {
                done: 0,
              };
              try {
                oA(r, e, _A(ag, o, a), _A($A, o, a));
              } catch (e) {
                $A(o, e, a);
              }
            })
          : ((a.value = e), (a.state = 1), VA(a, 0));
      } catch (e) {
        $A(
          {
            done: 0,
          },
          e,
          a
        );
      }
    }
  };
if (
  GA &&
  ((FA = (kA = function (a) {
    AA(this, FA), cA(a), oA(Vm, this);
    var e = zA(this);
    try {
      a(_A(ag, e), _A($A, e));
    } catch (a) {
      $A(e, a);
    }
  }).prototype),
  ((Vm = function () {
    IA(this, {
      type: MA,
      done: 0,
      notified: 0,
      parent: 0,
      reactions: new BA(),
      rejection: 0,
      state: 0,
      value: void 0,
    });
  }).prototype = tA(FA, {
    then: function (a, e) {
      var o = CA(this),
        r = LA(fA(this, kA));
      return (
        (o.parent = 1),
        (r.ok = lA(a) ? a : 1),
        (r.fail = lA(e) && e),
        (r.domain = DA ? SA.domain : void 0),
        0 == o.state
          ? o.reactions.add(r)
          : vA(function () {
              JA(r, o);
            }),
        r.promise
      );
    },
    catch: function (a) {
      return this.then(void 0, a);
    },
  })),
  (Wm = function () {
    var a = new Vm(),
      e = zA(a);
    (this.promise = a), (this.resolve = _A(ag, e)), (this.reject = _A($A, e));
  }),
  (hA.f = LA =
    function (a) {
      return a === kA || a === Km ? new Wm(a) : UA(a);
    }),
  lA(rA) && NA !== Object.prototype)
) {
  (Xm = NA.then),
    PA ||
      (iA(
        NA,
        "then",
        function (a, e) {
          var o = this;
          return new kA(function (a, e) {
            oA(Xm, o, a, e);
          }).then(a, e);
        },
        {
          unsafe: 1,
        }
      ),
      iA(NA, "catch", FA.catch, {
        unsafe: 1,
      }));
  try {
    delete NA.constructor;
  } catch (a) {}
  nA && nA(NA, FA);
}
$m(
  {
    global: 1,
    wrap: 1,
    forced: GA,
  },
  {
    Promise: kA,
  }
),
  sA(kA, MA, 0),
  uA(MA),
  (Km = eA(MA)),
  $m(
    {
      target: MA,
      stat: 1,
      forced: GA,
    },
    {
      reject: function (a) {
        var e = LA(this);
        return oA(e.reject, void 0, a), e.promise;
      },
    }
  ),
  $m(
    {
      target: MA,
      stat: 1,
      forced: GA,
    },
    {
      resolve: function (a) {
        return (function (a, e) {
          if ((Pm(a), Gm(e) && e.constructor === a)) return e;
          var o = qm.f(a);
          return (0, o.resolve)(e), o.promise;
        })(this, a);
      },
    }
  ),
  $m(
    {
      target: MA,
      stat: 1,
      forced: qA,
    },
    {
      all: function (a) {
        var e = this,
          o = LA(e),
          r = o.resolve,
          i = o.reject,
          t = wA(function () {
            var o = cA(e.resolve),
              t = [],
              n = 0,
              s = 1;
            dA(a, function (a) {
              var u = n++,
                c = 0;
              s++,
                oA(o, e, a).then(function (a) {
                  c || ((c = 1), (t[u] = a), --s || r(t));
                }, i);
            }),
              --s || r(t);
          });
        return t.error && i(t.value), o.promise;
      },
      race: function (a) {
        var e = this,
          o = LA(e),
          r = o.reject,
          i = wA(function () {
            var i = cA(e.resolve);
            dA(a, function (a) {
              oA(i, e, a).then(o.resolve, r);
            });
          });
        return i.error && r(i.value), o.promise;
      },
    }
  );
var eg = di,
  og = ha,
  rg = cs,
  ig = Z,
  tg = k,
  ng = C.Array,
  sg = og("JSON", "stringify"),
  ug = ig(/./.exec),
  cg = ig("".charAt),
  lg = ig("".charCodeAt),
  mg = ig("".replace),
  Ag = ig((1).toString),
  gg = /[\uD800-\uDFFF]/g,
  dg = /^[\uD800-\uDBFF]$/,
  pg = /^[\uDC00-\uDFFF]$/,
  fg = function (a, e, o) {
    var r = cg(o, e - 1),
      i = cg(o, e + 1);
    return (ug(dg, a) && !ug(pg, i)) || (ug(pg, a) && !ug(dg, r))
      ? "\\u" + Ag(lg(a, 0), 16)
      : a;
  },
  bg = tg(function () {
    return (
      '"\\udf06\\ud834"' !== sg("\udf06\ud834") || '"\\udead"' !== sg("\udead")
    );
  });
sg &&
  eg(
    {
      target: "JSON",
      stat: 1,
      forced: bg,
    },
    {
      stringify: function (a, e, o) {
        for (var r = 0, i = arguments.length, t = ng(i); r < i; r++)
          t[r] = arguments[r];
        var n = rg(sg, null, t);
        return "string" == typeof n ? mg(n, gg, fg) : n;
      },
    }
  );
var vg = "https://term.ooo/event",
  hg = "none";
function wg(a) {
  return Bg.apply(this, arguments);
}
function Bg() {
  return (Bg = o(
    regeneratorRuntime.mark(function a(e) {
      return regeneratorRuntime.wrap(
        function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                if (((e.v = "4ab4f09"), -1 == "4ab4f09".indexOf("build"))) {
                  a.next = 4;
                  break;
                }
                return a.abrupt("return");
              case 4:
                return (
                  (a.prev = 4),
                  (a.next = 7),
                  fetch(vg, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(e),
                  })
                );
              case 7:
                a.next = 11;
                break;
              case 9:
                (a.prev = 9), (a.t0 = a.catch(4));
              case 11:
              case "end":
                return a.stop();
            }
        },
        a,
        null,
        [[4, 9]]
      );
    })
  )).apply(this, arguments);
}
function yg(a, e) {
  return Eg.apply(this, arguments);
}
function Eg() {
  return (Eg = o(
    regeneratorRuntime.mark(function a(e, o) {
      var r, i, t;
      return regeneratorRuntime.wrap(function (a) {
        for (;;)
          switch ((a.prev = a.next)) {
            case 0:
              return (
                (t =
                  null !==
                    (r =
                      null !== (i = navigator.userAgent) && void 0 !== i
                        ? i
                        : navigator.vendor) && void 0 !== r
                    ? r
                    : window.opera),
                (a.next = 3),
                wg({
                  type: "error",
                  ua: t,
                  msg: e,
                  stack: o,
                  game: hg,
                })
              );
            case 3:
            case "end":
              return a.stop();
          }
      }, a);
    })
  )).apply(this, arguments);
}
var Qg = Cn,
  Dg = _e,
  xg = De("unscopables"),
  jg = Array.prototype;
null == jg[xg] &&
  Dg.f(jg, xg, {
    configurable: 1,
    value: Qg(null),
  });
var Mg,
  zg,
  Ig,
  Cg = function (a) {
    jg[xg][a] = 1;
  },
  Ng = !k(function () {
    function a() {}
    return (
      (a.prototype.constructor = null),
      Object.getPrototypeOf(new a()) !== a.prototype
    );
  }),
  kg = C,
  Fg = ce,
  Og = ga,
  Tg = ne,
  Sg = Ng,
  Lg = No("IE_PROTO"),
  Ug = kg.Object,
  Rg = Ug.prototype,
  Yg = Sg
    ? Ug.getPrototypeOf
    : function (a) {
        var e = Tg(a);
        if (Fg(e, Lg)) return e[Lg];
        var o = e.constructor;
        return Og(o) && e instanceof o
          ? o.prototype
          : e instanceof Ug
          ? Rg
          : null;
      },
  Pg = k,
  Gg = ga,
  qg = Yg,
  Hg = bo.exports,
  Jg = De("iterator"),
  Vg = 0;
[].keys &&
  ("next" in (Ig = [].keys())
    ? (zg = qg(qg(Ig))) !== Object.prototype && (Mg = zg)
    : (Vg = 1));
var Wg =
  null == Mg ||
  Pg(function () {
    var a = {};
    return Mg[Jg].call(a) !== a;
  });
Wg && (Mg = {}),
  Gg(Mg[Jg]) ||
    Hg(Mg, Jg, function () {
      return this;
    });
var Kg = {
    IteratorPrototype: Mg,
    BUGGY_SAFARI_ITERATORS: Vg,
  },
  Xg = Kg.IteratorPrototype,
  Zg = Cn,
  _g = H,
  $g = Lc,
  ad = Vc,
  ed = function () {
    return this;
  },
  od = di,
  rd = L,
  id = or,
  td = ga,
  nd = Yg,
  sd = Vu,
  ud = Lc,
  cd = fo,
  ld = bo.exports,
  md = Vc,
  Ad = id.PROPER,
  gd = id.CONFIGURABLE,
  dd = Kg.IteratorPrototype,
  pd = Kg.BUGGY_SAFARI_ITERATORS,
  fd = De("iterator"),
  bd = function () {
    return this;
  },
  vd = function (a, e, o, r, i, t, n) {
    !(function (a, e, o) {
      var r = e + " Iterator";
      (a.prototype = Zg(Xg, {
        next: _g(1, o),
      })),
        $g(a, r, 0),
        (ad[r] = ed);
    })(o, e, r);
    var s,
      u,
      c,
      l = function (a) {
        if (a === i && p) return p;
        if (!pd && a in g) return g[a];
        switch (a) {
          case "keys":
          case "values":
          case "entries":
            return function () {
              return new o(this, a);
            };
        }
        return function () {
          return new o(this);
        };
      },
      m = e + " Iterator",
      A = 0,
      g = a.prototype,
      d = g[fd] || g["@@iterator"] || (i && g[i]),
      p = (!pd && d) || l(i),
      f = ("Array" == e && g.entries) || d;
    if (
      (f &&
        (s = nd(f.call(new a()))) !== Object.prototype &&
        s.next &&
        (nd(s) !== dd && (sd ? sd(s, dd) : td(s[fd]) || ld(s, fd, bd)),
        ud(s, m, 1)),
      Ad &&
        "values" == i &&
        d &&
        "values" !== d.name &&
        (gd
          ? cd(g, "name", "values")
          : ((A = 1),
            (p = function () {
              return rd(d, this);
            }))),
      i)
    )
      if (
        ((u = {
          values: l("values"),
          keys: t ? p : l("keys"),
          entries: l("entries"),
        }),
        n)
      )
        for (c in u) (pd || A || !(c in g)) && ld(g, c, u[c]);
      else
        od(
          {
            target: e,
            proto: 1,
            forced: pd || A,
          },
          u
        );
    return (
      g[fd] !== p &&
        ld(g, fd, p, {
          name: i,
        }),
      (md[e] = p),
      u
    );
  },
  hd = Aa,
  wd = Cg,
  Bd = Vc,
  yd = Xo,
  Ed = _e.f,
  Qd = vd,
  Dd = F,
  xd = yd.set,
  jd = yd.getterFor("Array Iterator"),
  Md = Qd(
    Array,
    "Array",
    function (a, e) {
      xd(this, {
        type: "Array Iterator",
        target: hd(a),
        index: 0,
        kind: e,
      });
    },
    function () {
      var a = jd(this),
        e = a.target,
        o = a.kind,
        r = a.index++;
      return !e || r >= e.length
        ? ((a.target = void 0),
          {
            value: void 0,
            done: 1,
          })
        : "keys" == o
        ? {
            value: r,
            done: 0,
          }
        : "values" == o
        ? {
            value: e[r],
            done: 0,
          }
        : {
            value: [r, e[r]],
            done: 0,
          };
    },
    "values"
  ),
  zd = (Bd.Arguments = Bd.Array);
if ((wd("keys"), wd("values"), wd("entries"), Dd && "values" !== zd.name))
  try {
    Ed(zd, "name", {
      value: "values",
    });
  } catch (a) {}
var Id = {
    exports: {},
  },
  Cd = {},
  Nd = ea,
  kd = Aa,
  Fd = gr.f,
  Od = Hs,
  Td =
    "object" == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [];
Cd.f = function (a) {
  return Td && "Window" == Nd(a)
    ? (function (a) {
        try {
          return Fd(a);
        } catch (a) {
          return Od(Td);
        }
      })(a)
    : Fd(kd(a));
};
var Sd = k(function () {
    if ("function" == typeof ArrayBuffer) {
      var a = new ArrayBuffer(8);
      Object.isExtensible(a) &&
        Object.defineProperty(a, "a", {
          value: 8,
        });
    }
  }),
  Ld = k,
  Ud = pa,
  Rd = ea,
  Yd = Sd,
  Pd = Object.isExtensible,
  Gd =
    Ld(function () {
      Pd(1);
    }) || Yd
      ? function (a) {
          return Ud(a)
            ? Yd && "ArrayBuffer" == Rd(a)
              ? 0
              : Pd
              ? Pd(a)
              : 1
            : 0;
        }
      : Pd,
  qd = !k(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  Hd = di,
  Jd = Z,
  Vd = ko,
  Wd = pa,
  Kd = ce,
  Xd = _e.f,
  Zd = gr,
  _d = Cd,
  $d = Gd,
  ap = qd,
  ep = 0,
  op = de("meta"),
  rp = 0,
  ip = function (a) {
    Xd(a, op, {
      value: {
        objectID: "O" + rp++,
        weakData: {},
      },
    });
  },
  tp = (Id.exports = {
    enable: function () {
      (tp.enable = function () {}), (ep = 1);
      var a = Zd.f,
        e = Jd([].splice),
        o = {};
      (o[op] = 1),
        a(o).length &&
          ((Zd.f = function (o) {
            for (var r = a(o), i = 0, t = r.length; i < t; i++)
              if (r[i] === op) {
                e(r, i, 1);
                break;
              }
            return r;
          }),
          Hd(
            {
              target: "Object",
              stat: 1,
              forced: 1,
            },
            {
              getOwnPropertyNames: _d.f,
            }
          ));
    },
    fastKey: function (a, e) {
      if (!Wd(a))
        return "symbol" == typeof a
          ? a
          : ("string" == typeof a ? "S" : "P") + a;
      if (!Kd(a, op)) {
        if (!$d(a)) return "F";
        if (!e) return "E";
        ip(a);
      }
      return a[op].objectID;
    },
    getWeakData: function (a, e) {
      if (!Kd(a, op)) {
        if (!$d(a)) return 1;
        if (!e) return 0;
        ip(a);
      }
      return a[op].weakData;
    },
    onFreeze: function (a) {
      return ap && ep && $d(a) && !Kd(a, op) && ip(a), a;
    },
  });
Vd[op] = 1;
var np = di,
  sp = C,
  up = Z,
  cp = ni,
  lp = bo.exports,
  mp = Id.exports,
  Ap = jl,
  gp = Jc,
  dp = ga,
  pp = pa,
  fp = k,
  bp = Tl,
  vp = Lc,
  hp = Zu,
  wp = function (a, e, o) {
    var r = -1 !== a.indexOf("Map"),
      i = -1 !== a.indexOf("Weak"),
      t = r ? "set" : "add",
      n = sp[a],
      s = n && n.prototype,
      u = n,
      c = {},
      l = function (a) {
        var e = up(s[a]);
        lp(
          s,
          a,
          "add" == a
            ? function (a) {
                return e(this, 0 === a ? 0 : a), this;
              }
            : "delete" == a
            ? function (a) {
                return i && !pp(a) ? 0 : e(this, 0 === a ? 0 : a);
              }
            : "get" == a
            ? function (a) {
                return i && !pp(a) ? void 0 : e(this, 0 === a ? 0 : a);
              }
            : "has" == a
            ? function (a) {
                return i && !pp(a) ? 0 : e(this, 0 === a ? 0 : a);
              }
            : function (a, o) {
                return e(this, 0 === a ? 0 : a, o), this;
              }
        );
      };
    if (
      cp(
        a,
        !dp(n) ||
          !(
            i ||
            (s.forEach &&
              !fp(function () {
                new n().entries().next();
              }))
          )
      )
    )
      (u = o.getConstructor(e, a, r, t)), mp.enable();
    else if (cp(a, 1)) {
      var m = new u(),
        A = m[t](i ? {} : -0, 1) != m,
        g = fp(function () {
          m.has(1);
        }),
        d = bp(function (a) {
          new n(a);
        }),
        p =
          !i &&
          fp(function () {
            for (var a = new n(), e = 5; e--; ) a[t](e, e);
            return !a.has(-0);
          });
      d ||
        (((u = e(function (a, e) {
          gp(a, s);
          var o = hp(new n(), a, u);
          return (
            null != e &&
              Ap(e, o[t], {
                that: o,
                AS_ENTRIES: r,
              }),
            o
          );
        })).prototype = s),
        (s.constructor = u)),
        (g || p) && (l("delete"), l("has"), r && l("get")),
        (p || A) && l(t),
        i && s.clear && delete s.clear;
    }
    return (
      (c[a] = u),
      np(
        {
          global: 1,
          forced: u != n,
        },
        c
      ),
      vp(u, a),
      i || o.setStrong(u, a, r),
      u
    );
  },
  Bp = _e.f,
  yp = Cn,
  Ep = Fc,
  Qp = Ct,
  Dp = Jc,
  xp = jl,
  jp = vd,
  Mp = Gc,
  zp = F,
  Ip = Id.exports.fastKey,
  Cp = Xo.set,
  Np = Xo.getterFor,
  kp = {
    getConstructor: function (a, e, o, r) {
      var i = a(function (a, i) {
          Dp(a, t),
            Cp(a, {
              type: e,
              index: yp(null),
              first: void 0,
              last: void 0,
              size: 0,
            }),
            zp || (a.size = 0),
            null != i &&
              xp(i, a[r], {
                that: a,
                AS_ENTRIES: o,
              });
        }),
        t = i.prototype,
        n = Np(e),
        s = function (a, e, o) {
          var r,
            i,
            t = n(a),
            s = u(a, e);
          return (
            s
              ? (s.value = o)
              : ((t.last = s =
                  {
                    index: (i = Ip(e, 1)),
                    key: e,
                    value: o,
                    previous: (r = t.last),
                    next: void 0,
                    removed: 0,
                  }),
                t.first || (t.first = s),
                r && (r.next = s),
                zp ? t.size++ : a.size++,
                "F" !== i && (t.index[i] = s)),
            a
          );
        },
        u = function (a, e) {
          var o,
            r = n(a),
            i = Ip(e);
          if ("F" !== i) return r.index[i];
          for (o = r.first; o; o = o.next) if (o.key == e) return o;
        };
      return (
        Ep(t, {
          clear: function () {
            for (var a = n(this), e = a.index, o = a.first; o; )
              (o.removed = 1),
                o.previous && (o.previous = o.previous.next = void 0),
                delete e[o.index],
                (o = o.next);
            (a.first = a.last = void 0), zp ? (a.size = 0) : (this.size = 0);
          },
          delete: function (a) {
            var e = this,
              o = n(e),
              r = u(e, a);
            if (r) {
              var i = r.next,
                t = r.previous;
              delete o.index[r.index],
                (r.removed = 1),
                t && (t.next = i),
                i && (i.previous = t),
                o.first == r && (o.first = i),
                o.last == r && (o.last = t),
                zp ? o.size-- : e.size--;
            }
            return !!r;
          },
          forEach: function (a) {
            for (
              var e,
                o = n(this),
                r = Qp(a, arguments.length > 1 ? arguments[1] : void 0);
              (e = e ? e.next : o.first);

            )
              for (r(e.value, e.key, this); e && e.removed; ) e = e.previous;
          },
          has: function (a) {
            return !!u(this, a);
          },
        }),
        Ep(
          t,
          o
            ? {
                get: function (a) {
                  var e = u(this, a);
                  return e && e.value;
                },
                set: function (a, e) {
                  return s(this, 0 === a ? 0 : a, e);
                },
              }
            : {
                add: function (a) {
                  return s(this, (a = 0 === a ? 0 : a), a);
                },
              }
        ),
        zp &&
          Bp(t, "size", {
            get: function () {
              return n(this).size;
            },
          }),
        i
      );
    },
    setStrong: function (a, e, o) {
      var r = e + " Iterator",
        i = Np(e),
        t = Np(r);
      jp(
        a,
        e,
        function (a, e) {
          Cp(this, {
            type: r,
            target: a,
            state: i(a),
            kind: e,
            last: void 0,
          });
        },
        function () {
          for (var a = t(this), e = a.kind, o = a.last; o && o.removed; )
            o = o.previous;
          return a.target && (a.last = o = o ? o.next : a.state.first)
            ? "keys" == e
              ? {
                  value: o.key,
                  done: 0,
                }
              : "values" == e
              ? {
                  value: o.value,
                  done: 0,
                }
              : {
                  value: [o.key, o.value],
                  done: 0,
                }
            : ((a.target = void 0),
              {
                value: void 0,
                done: 1,
              });
        },
        o ? "entries" : "values",
        !o,
        1
      ),
        Mp(e);
    },
  };
wp(
  "Set",
  function (a) {
    return function () {
      return a(this, arguments.length ? arguments[0] : void 0);
    };
  },
  kp
);
var Fp = Ss.charAt,
  Op = $t,
  Tp = Xo,
  Sp = vd,
  Lp = Tp.set,
  Up = Tp.getterFor("String Iterator");
Sp(
  String,
  "String",
  function (a) {
    Lp(this, {
      type: "String Iterator",
      string: Op(a),
      index: 0,
    });
  },
  function () {
    var a,
      e = Up(this),
      o = e.string,
      r = e.index;
    return r >= o.length
      ? {
          value: void 0,
          done: 1,
        }
      : ((a = Fp(o, r)),
        (e.index += a.length),
        {
          value: a,
          done: 0,
        });
  }
);
var Rp = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  Yp = Re("span").classList,
  Pp = Yp && Yp.constructor && Yp.constructor.prototype,
  Gp = Pp === Object.prototype ? void 0 : Pp,
  qp = C,
  Hp = Rp,
  Jp = Gp,
  Vp = Md,
  Wp = fo,
  Kp = De,
  Xp = Kp("iterator"),
  Zp = Kp("toStringTag"),
  _p = Vp.values,
  $p = function (a, e) {
    if (a) {
      if (a[Xp] !== _p)
        try {
          Wp(a, Xp, _p);
        } catch (e) {
          a[Xp] = _p;
        }
      if ((a[Zp] || Wp(a, Zp, e), Hp[e]))
        for (var o in Vp)
          if (a[o] !== Vp[o])
            try {
              Wp(a, o, Vp[o]);
            } catch (e) {
              a[o] = Vp[o];
            }
    }
  };
for (var af in Hp) $p(qp[af] && qp[af].prototype, af);
$p(Jp, "DOMTokenList");
var ef = Z,
  of = Fc,
  rf = Id.exports.getWeakData,
  tf = io,
  nf = pa,
  sf = Jc,
  uf = jl,
  cf = ce,
  lf = Xo.set,
  mf = Xo.getterFor,
  Af = Ut.find,
  gf = Ut.findIndex,
  df = ef([].splice),
  pf = 0,
  ff = function (a) {
    return a.frozen || (a.frozen = new bf());
  },
  bf = function () {
    this.entries = [];
  },
  vf = function (a, e) {
    return Af(a.entries, function (a) {
      return a[0] === e;
    });
  };
bf.prototype = {
  get: function (a) {
    var e = vf(this, a);
    if (e) return e[1];
  },
  has: function (a) {
    return !!vf(this, a);
  },
  set: function (a, e) {
    var o = vf(this, a);
    o ? (o[1] = e) : this.entries.push([a, e]);
  },
  delete: function (a) {
    var e = gf(this.entries, function (e) {
      return e[0] === a;
    });
    return ~e && df(this.entries, e, 1), !!~e;
  },
};
var hf = {
  getConstructor: function (a, e, o, r) {
    var i = a(function (a, i) {
        sf(a, t),
          lf(a, {
            type: e,
            id: pf++,
            frozen: void 0,
          }),
          null != i &&
            uf(i, a[r], {
              that: a,
              AS_ENTRIES: o,
            });
      }),
      t = i.prototype,
      n = mf(e),
      s = function (a, e, o) {
        var r = n(a),
          i = rf(tf(e), 1);
        return 1 == i ? ff(r).set(e, o) : (i[r.id] = o), a;
      };
    return (
      of(t, {
        delete: function (a) {
          var e = n(this);
          if (!nf(a)) return 0;
          var o = rf(a);
          return 1 == o ? ff(e).delete(a) : o && cf(o, e.id) && delete o[e.id];
        },
        has: function (a) {
          var e = n(this);
          if (!nf(a)) return 0;
          var o = rf(a);
          return 1 == o ? ff(e).has(a) : o && cf(o, e.id);
        },
      }),
      of(
        t,
        o
          ? {
              get: function (a) {
                var e = n(this);
                if (nf(a)) {
                  var o = rf(a);
                  return 1 == o ? ff(e).get(a) : o ? o[e.id] : void 0;
                }
              },
              set: function (a, e) {
                return s(this, a, e);
              },
            }
          : {
              add: function (a) {
                return s(this, a, 1);
              },
            }
      ),
      i
    );
  },
};
wp(
  "WeakSet",
  function (a) {
    return function () {
      return a(this, arguments.length ? arguments[0] : void 0);
    };
  },
  hf
);
var wf = or.PROPER,
  Bf = zu.trim;
di(
  {
    target: "String",
    proto: 1,
    forced: k(function () {
      return (
        !!"\t\n\v\f\r                　\u2028\u2029\ufeff".trim() ||
        "​᠎" !== "​᠎".trim() ||
        (wf &&
          "trim" !== "\t\n\v\f\r                　\u2028\u2029\ufeff".trim.name)
      );
    }),
  },
  {
    trim: function () {
      return Bf(this);
    },
  }
);
var yf,
  Ef,
  Qf = C,
  Df = Z,
  xf = Fc,
  jf = Id.exports,
  Mf = wp,
  zf = hf,
  If = pa,
  Cf = Gd,
  Nf = Xo.enforce,
  kf = Mo,
  Ff = !Qf.ActiveXObject && "ActiveXObject" in Qf,
  Of = function (a) {
    return function () {
      return a(this, arguments.length ? arguments[0] : void 0);
    };
  },
  Tf = Mf("WeakMap", Of, zf);
if (kf && Ff) {
  (yf = zf.getConstructor(Of, "WeakMap", 1)), jf.enable();
  var Sf = Tf.prototype,
    Lf = Df(Sf.delete),
    Uf = Df(Sf.has),
    Rf = Df(Sf.get),
    Yf = Df(Sf.set);
  xf(Sf, {
    delete: function (a) {
      if (If(a) && !Cf(a)) {
        var e = Nf(this);
        return (
          e.frozen || (e.frozen = new yf()), Lf(this, a) || e.frozen.delete(a)
        );
      }
      return Lf(this, a);
    },
    has: function (a) {
      if (If(a) && !Cf(a)) {
        var e = Nf(this);
        return (
          e.frozen || (e.frozen = new yf()), Uf(this, a) || e.frozen.has(a)
        );
      }
      return Uf(this, a);
    },
    get: function (a) {
      if (If(a) && !Cf(a)) {
        var e = Nf(this);
        return (
          e.frozen || (e.frozen = new yf()),
          Uf(this, a) ? Rf(this, a) : e.frozen.get(a)
        );
      }
      return Rf(this, a);
    },
    set: function (a, e) {
      if (If(a) && !Cf(a)) {
        var o = Nf(this);
        o.frozen || (o.frozen = new yf()),
          Uf(this, a) ? Yf(this, a, e) : o.frozen.set(a, e);
      } else Yf(this, a, e);
      return this;
    },
  });
}
function Pf(a) {
  var e = document.createElement("template");
  return (e.innerHTML = a.trim()), e.content;
}
function Gf(a, e) {
  (a.style.animation = null), a.getClientRects(), (a.style.animation = e);
}
function qf(a) {
  for (
    var e = [], o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), i = 1;
    i < o;
    i++
  )
    r[i - 1] = arguments[i];
  for (var t = 0; t < a.length; ++t)
    e.push(a[t]), void 0 !== r[t] && e.push(r[t]);
  return e.join("");
}
var Hf = new WeakMap(),
  Jf = new WeakMap(),
  Vf = (function () {
    s(e, A(HTMLElement));
    var a = p(e);
    function e() {
      var o;
      return (
        r(this, e),
        j(g((o = a.call(this))), Hf, {
          writable: 1,
          value: null,
        }),
        j(g(o), Jf, {
          writable: 1,
          value: 0,
        }),
        o.attachShadow({
          mode: "open",
        }),
        E(g(o), Hf, document.createElement("style")),
        (y(g(o), Hf).type = "text/css"),
        (y(g(o), Hf).textContent = o.stylesheet()),
        (o._template = Pf(o.html())),
        o
      );
    }
    return (
      t(
        e,
        [
          {
            key: "attributeChangedCallback",
            value: function () {
              y(this, Jf) && this.update();
            },
          },
          {
            key: "connectedCallback",
            value: function () {
              for (E(this, Jf, 1); this.shadowRoot.firstChild; )
                this.shadowRoot.removeChild(this.shadowRoot.firstChild);
              this.shadowRoot.append(y(this, Hf)),
                this._template &&
                  this.shadowRoot.append(this._template.cloneNode(1)),
                this.connect(),
                this.update();
            },
          },
          {
            key: "disconnectedCallback",
            value: function () {
              E(this, Jf, 0), this.disconnect();
            },
          },
          {
            key: "connect",
            value: function () {},
          },
          {
            key: "disconnect",
            value: function () {},
          },
          {
            key: "update",
            value: function () {},
          },
          {
            key: "html",
            value: function () {
              return "";
            },
          },
          {
            key: "stylesheet",
            value: function () {
              return qf(Ef || (Ef = f([""])));
            },
          },
        ],
        [
          {
            key: "observedAttributes",
            get: function () {
              return this.attr;
            },
          },
        ]
      ),
      e
    );
  })();
n(Vf, "attr", []);
var Wf,
  Kf = new Set([
    "ababa",
    "abacá",
    "abada",
    "abade",
    "abado",
    "abafa",
    "abafe",
    "abafo",
    "abaju",
    "abala",
    "abale",
    "abalo",
    "abama",
    "abana",
    "abane",
    "abapo",
    "abará",
    "abaré",
    "abata",
    "abate",
    "abati",
    "abato",
    "abdal",
    "abebé",
    "abecê",
    "abedo",
    "abedê",
    "abeta",
    "abete",
    "abeto",
    "abexi",
    "abibe",
    "abicô",
    "abilo",
    "abita",
    "abito",
    "ablua",
    "ablui",
    "abluo",
    "aboar",
    "abobó",
    "aboca",
    "abofé",
    "abohm",
    "aboio",
    "aboiz",
    "abola",
    "abole",
    "aboli",
    "aboma",
    "abona",
    "abone",
    "aboço",
    "abram",
    "abras",
    "abrem",
    "abres",
    "abreu",
    "abria",
    "abris",
    "abriu",
    "abube",
    "abudo",
    "abuna",
    "abusa",
    "abuse",
    "abuta",
    "abuxó",
    "acaba",
    "acabe",
    "acabo",
    "acada",
    "acaia",
    "acaio",
    "acaju",
    "acajá",
    "acalo",
    "acama",
    "acana",
    "acapu",
    "acari",
    "acará",
    "acata",
    "acate",
    "acato",
    "acauã",
    "acaçá",
    "acaém",
    "aceca",
    "aceda",
    "acede",
    "acefe",
    "acelo",
    "acena",
    "acene",
    "acero",
    "aceso",
    "aceto",
    "achai",
    "acham",
    "achas",
    "achei",
    "achem",
    "aches",
    "achim",
    "achou",
    "acibe",
    "acica",
    "acila",
    "acioa",
    "aclia",
    "acnes",
    "acoar",
    "acode",
    "aconá",
    "acori",
    "acral",
    "acres",
    "acrol",
    "acroá",
    "acréu",
    "acuai",
    "acuam",
    "acuar",
    "acuas",
    "acuda",
    "acudi",
    "acudo",
    "acuei",
    "acuem",
    "acues",
    "acume",
    "acumã",
    "acuna",
    "acuou",
    "acura",
    "acuri",
    "acuré",
    "acusa",
    "acuse",
    "acuso",
    "acuta",
    "acuti",
    "adaca",
    "adage",
    "adail",
    "adali",
    "adama",
    "adamo",
    "adejo",
    "adela",
    "adele",
    "adelo",
    "adema",
    "adere",
    "aderi",
    "adeso",
    "adiai",
    "adiam",
    "adias",
    "adibe",
    "adica",
    "adido",
    "adiei",
    "adiem",
    "adies",
    "adino",
    "adiou",
    "adira",
    "adiro",
    "adita",
    "adite",
    "adito",
    "adixá",
    "adoba",
    "adobe",
    "adobo",
    "adoce",
    "adogã",
    "adoli",
    "adolo",
    "adora",
    "adore",
    "adoro",
    "adota",
    "adote",
    "adoto",
    "adova",
    "adoxa",
    "adoxo",
    "adoça",
    "adoço",
    "aduar",
    "aduba",
    "adube",
    "adubo",
    "adufa",
    "adufe",
    "adufo",
    "adula",
    "adule",
    "adulo",
    "aduro",
    "advim",
    "advém",
    "adíon",
    "aerar",
    "afaga",
    "afana",
    "afane",
    "afano",
    "afear",
    "afefé",
    "afegã",
    "afere",
    "aferi",
    "afeta",
    "afete",
    "afiai",
    "afiam",
    "afiar",
    "afias",
    "afiei",
    "afiem",
    "afies",
    "afilo",
    "afina",
    "afine",
    "afino",
    "afiou",
    "afira",
    "afiro",
    "afito",
    "afixa",
    "afixe",
    "afixo",
    "aflar",
    "aflua",
    "aflui",
    "afluo",
    "afoba",
    "afobe",
    "afobo",
    "afofa",
    "afofe",
    "afofo",
    "afoga",
    "afogo",
    "afono",
    "afora",
    "afore",
    "aforo",
    "afoxé",
    "afros",
    "aftas",
    "afurá",
    "agabe",
    "agacé",
    "agadá",
    "agala",
    "agama",
    "agami",
    "agara",
    "agaré",
    "agati",
    "agave",
    "ageia",
    "agema",
    "agiam",
    "agiar",
    "agias",
    "agido",
    "agira",
    "agita",
    "agite",
    "agito",
    "aglia",
    "agnal",
    "agnus",
    "agoge",
    "agogô",
    "agrar",
    "agraz",
    "agror",
    "agrão",
    "agrém",
    "aguar",
    "aguaí",
    "aguce",
    "aguda",
    "agude",
    "aguei",
    "aguem",
    "aguou",
    "aguti",
    "aguça",
    "aguço",
    "aiaia",
    "aiala",
    "aiará",
    "aiaçá",
    "aidro",
    "aigue",
    "ainsa",
    "aiocá",
    "aiola",
    "aioro",
    "aipim",
    "aipos",
    "airar",
    "aires",
    "airol",
    "airão",
    "aitão",
    "aiuba",
    "aiucá",
    "aiuiú",
    "aivão",
    "aixes",
    "ajabó",
    "ajacu",
    "ajais",
    "ajaja",
    "ajapá",
    "ajará",
    "ajaré",
    "ajeru",
    "ajobó",
    "ajuba",
    "ajude",
    "ajudo",
    "ajuga",
    "ajupe",
    "ajupá",
    "ajuri",
    "ajuru",
    "alabá",
    "alabê",
    "alada",
    "alafé",
    "alaga",
    "alago",
    "alalá",
    "alano",
    "alara",
    "alaus",
    "albor",
    "albói",
    "alcaz",
    "alcei",
    "alcem",
    "alces",
    "alcis",
    "aldeã",
    "aldol",
    "alear",
    "alefe",
    "alega",
    "alego",
    "aleia",
    "aleli",
    "alelo",
    "alemã",
    "alepo",
    "aleta",
    "aleto",
    "alfar",
    "alfas",
    "alfil",
    "alfim",
    "alfir",
    "alfol",
    "alfoz",
    "alfur",
    "algar",
    "algas",
    "algaz",
    "alger",
    "algia",
    "algol",
    "algor",
    "algur",
    "alhal",
    "alhas",
    "alhos",
    "aliai",
    "aliam",
    "aliei",
    "aliem",
    "alies",
    "alija",
    "alije",
    "alijo",
    "alila",
    "alilo",
    "alime",
    "alina",
    "aliou",
    "alisa",
    "alise",
    "aliso",
    "alita",
    "aljuz",
    "almez",
    "almuz",
    "aloca",
    "aloco",
    "alodê",
    "alofe",
    "aloja",
    "aloje",
    "alojo",
    "alose",
    "alote",
    "aloés",
    "alpes",
    "alpão",
    "alsol",
    "altas",
    "alter",
    "alteá",
    "altor",
    "aluar",
    "aluda",
    "alude",
    "aludi",
    "aludo",
    "alufá",
    "aluga",
    "alugo",
    "aluir",
    "alujá",
    "alume",
    "aluna",
    "alvar",
    "alvas",
    "alvor",
    "alvos",
    "alvão",
    "alçai",
    "alçam",
    "alças",
    "alçou",
    "alçuz",
    "amaci",
    "amado",
    "amadu",
    "amaga",
    "amais",
    "amalá",
    "amame",
    "amamu",
    "amaná",
    "amapá",
    "amara",
    "amare",
    "amaro",
    "amato",
    "amava",
    "ambel",
    "ambia",
    "ambom",
    "ambre",
    "ambuá",
    "ambuí",
    "ambão",
    "amear",
    "ameei",
    "ameia",
    "ameis",
    "ameju",
    "amela",
    "amelo",
    "amelê",
    "amena",
    "ameça",
    "amial",
    "amiba",
    "amida",
    "amiga",
    "amigo",
    "amila",
    "amilo",
    "amima",
    "amime",
    "amimo",
    "amina",
    "amino",
    "amite",
    "amito",
    "amojo",
    "amola",
    "amole",
    "amolo",
    "amomo",
    "amoré",
    "amota",
    "amuar",
    "amura",
    "amuri",
    "amurê",
    "amuso",
    "anabi",
    "anaco",
    "anacã",
    "anacé",
    "anafa",
    "anafe",
    "anais",
    "anaiá",
    "anajá",
    "anajé",
    "aname",
    "anani",
    "anano",
    "ananá",
    "anata",
    "anati",
    "anato",
    "anauê",
    "ancas",
    "ancho",
    "ancil",
    "anciã",
    "andai",
    "andam",
    "andas",
    "andei",
    "andem",
    "andes",
    "andim",
    "andoa",
    "andor",
    "andou",
    "andua",
    "aneel",
    "anejo",
    "anela",
    "anele",
    "anelo",
    "anema",
    "anesa",
    "anete",
    "aneto",
    "anexa",
    "anexe",
    "angaú",
    "angel",
    "anglo",
    "angor",
    "aniba",
    "anibu",
    "anido",
    "anima",
    "anime",
    "anina",
    "anita",
    "anixi",
    "anixo",
    "anião",
    "anjão",
    "anojo",
    "anona",
    "anori",
    "anoso",
    "anota",
    "anote",
    "anoto",
    "ansar",
    "antal",
    "antar",
    "antas",
    "antia",
    "antre",
    "antão",
    "anuam",
    "anuas",
    "anuaí",
    "anuem",
    "anuir",
    "anuis",
    "anuiu",
    "anujá",
    "anula",
    "anule",
    "anulo",
    "anuri",
    "anuro",
    "anuía",
    "anãos",
    "aoqui",
    "aorta",
    "apaga",
    "apago",
    "apapá",
    "apara",
    "apare",
    "aparo",
    "apeai",
    "apear",
    "apecu",
    "apeei",
    "apega",
    "apego",
    "apeia",
    "apeie",
    "apeio",
    "apela",
    "apele",
    "apena",
    "apene",
    "apeno",
    "apeou",
    "apero",
    "apicu",
    "apiol",
    "apita",
    "apite",
    "apitu",
    "apião",
    "apodo",
    "apoia",
    "apoie",
    "apois",
    "apojo",
    "apolo",
    "apota",
    "apraz",
    "apreá",
    "aptar",
    "aptas",
    "aptos",
    "apuar",
    "apupo",
    "apura",
    "apure",
    "apuro",
    "aqueu",
    "aquém",
    "arabi",
    "arabu",
    "arabá",
    "aracu",
    "arada",
    "arado",
    "arais",
    "araiá",
    "araió",
    "araiú",
    "arale",
    "aramo",
    "aramã",
    "arara",
    "arari",
    "aratu",
    "aratá",
    "araué",
    "arava",
    "araxá",
    "araçá",
    "arbim",
    "arcai",
    "arcal",
    "arcam",
    "arcas",
    "arcaz",
    "archa",
    "arcou",
    "ardam",
    "ardas",
    "ardei",
    "ardem",
    "ardes",
    "ardeu",
    "ardia",
    "ardil",
    "ardis",
    "ardra",
    "arear",
    "areca",
    "aredê",
    "areio",
    "areis",
    "areja",
    "areje",
    "arejo",
    "areou",
    "arepa",
    "arerê",
    "areão",
    "arfai",
    "arfam",
    "arfar",
    "arfas",
    "arfei",
    "arfem",
    "arfes",
    "arfil",
    "arfir",
    "arfou",
    "argal",
    "argas",
    "argau",
    "argel",
    "argol",
    "argos",
    "argot",
    "argua",
    "argui",
    "arguo",
    "argão",
    "ariar",
    "aribé",
    "aricu",
    "aricá",
    "aricó",
    "arife",
    "arigó",
    "arila",
    "arilo",
    "arimo",
    "arimã",
    "ariná",
    "aripo",
    "ariri",
    "ariti",
    "aritá",
    "arjão",
    "armai",
    "armam",
    "armas",
    "armei",
    "armem",
    "armes",
    "armim",
    "armou",
    "armur",
    "armão",
    "arméu",
    "arnal",
    "arnaz",
    "arnês",
    "arocá",
    "arola",
    "arpar",
    "arpoa",
    "arpoe",
    "arpoo",
    "arpão",
    "arpéu",
    "arque",
    "arqui",
    "arral",
    "arras",
    "arreu",
    "arria",
    "arrie",
    "arrio",
    "arruá",
    "arses",
    "artão",
    "aruaí",
    "arubé",
    "aruca",
    "aruga",
    "arujo",
    "arumã",
    "aruru",
    "arurá",
    "arval",
    "arxar",
    "arção",
    "aréus",
    "asada",
    "asado",
    "asana",
    "ascii",
    "aselo",
    "asila",
    "asile",
    "asilo",
    "asnal",
    "asnas",
    "asnil",
    "asnis",
    "asnos",
    "aspar",
    "aspes",
    "aspre",
    "assai",
    "assam",
    "assas",
    "assaz",
    "assei",
    "assem",
    "asses",
    "assoa",
    "assoe",
    "assoo",
    "assou",
    "assuã",
    "astil",
    "astim",
    "astre",
    "ataca",
    "ataco",
    "atada",
    "atado",
    "atais",
    "atalá",
    "atana",
    "atapu",
    "atara",
    "atarê",
    "atava",
    "ateai",
    "atear",
    "ateei",
    "ateia",
    "ateie",
    "ateio",
    "ateis",
    "atela",
    "ateou",
    "aterá",
    "ateus",
    "ateve",
    "atice",
    "atico",
    "atido",
    "atina",
    "atine",
    "atino",
    "atira",
    "atire",
    "atiro",
    "atito",
    "ativa",
    "ative",
    "ativo",
    "atiça",
    "atiçu",
    "atled",
    "atoar",
    "atobá",
    "atola",
    "atole",
    "atolo",
    "atora",
    "atotô",
    "atrai",
    "atril",
    "atroo",
    "atuai",
    "atuam",
    "atuas",
    "atuei",
    "atuem",
    "atues",
    "atuir",
    "atuou",
    "atura",
    "ature",
    "aturo",
    "atxim",
    "aténs",
    "atóis",
    "auari",
    "auati",
    "auaçu",
    "audaz",
    "aueti",
    "augar",
    "auges",
    "augir",
    "auiba",
    "aulir",
    "aunar",
    "auras",
    "aurir",
    "ausia",
    "ausio",
    "autua",
    "autue",
    "autuo",
    "auuva",
    "aução",
    "avano",
    "avant",
    "avara",
    "avari",
    "avaré",
    "avati",
    "aveal",
    "aveio",
    "avena",
    "aveão",
    "aviai",
    "aviam",
    "aviar",
    "avias",
    "aviei",
    "aviem",
    "avier",
    "avies",
    "avios",
    "aviou",
    "avirá",
    "avisa",
    "avise",
    "avito",
    "aviva",
    "avive",
    "avivo",
    "avoar",
    "avoei",
    "avéns",
    "axabó",
    "axexê",
    "axial",
    "axoxô",
    "axura",
    "azado",
    "azalá",
    "azara",
    "azare",
    "azaro",
    "azeda",
    "azede",
    "azera",
    "azeri",
    "aziar",
    "azibó",
    "azida",
    "azina",
    "azoar",
    "azola",
    "azote",
    "azoto",
    "azuis",
    "azula",
    "azule",
    "azulo",
    "açacu",
    "açalá",
    "açame",
    "açamo",
    "açubá",
    "açulo",
    "açumi",
    "aïoli",
    "aônio",
    "aúste",
    "babai",
    "babal",
    "babam",
    "babas",
    "babau",
    "babei",
    "babel",
    "babem",
    "babes",
    "bable",
    "babou",
    "babul",
    "babuí",
    "babão",
    "bacar",
    "bacen",
    "bachi",
    "bacio",
    "badal",
    "badil",
    "badio",
    "badém",
    "baeco",
    "baenã",
    "baeta",
    "bafar",
    "bafio",
    "bafum",
    "bagar",
    "bagas",
    "bagem",
    "bagos",
    "bagre",
    "baguá",
    "bahia",
    "baiar",
    "baias",
    "baila",
    "bailo",
    "bairu",
    "baite",
    "baixe",
    "baixo",
    "baião",
    "bajar",
    "balar",
    "balbo",
    "balda",
    "baldo",
    "balem",
    "bales",
    "balha",
    "balho",
    "balia",
    "balim",
    "balio",
    "balir",
    "balis",
    "baliu",
    "balso",
    "balça",
    "bambo",
    "bambê",
    "banem",
    "banes",
    "banga",
    "bango",
    "bangu",
    "banha",
    "banhe",
    "bania",
    "banis",
    "baniu",
    "banja",
    "banti",
    "banto",
    "bantu",
    "bantá",
    "banza",
    "banzo",
    "banzé",
    "baobá",
    "baraú",
    "barbo",
    "barca",
    "barda",
    "bardo",
    "barga",
    "baria",
    "baris",
    "baroa",
    "barra",
    "barré",
    "barém",
    "basal",
    "basca",
    "bases",
    "basic",
    "basim",
    "basso",
    "bassê",
    "baste",
    "basto",
    "batam",
    "batas",
    "batch",
    "batei",
    "batel",
    "batem",
    "bates",
    "bateu",
    "batia",
    "batim",
    "batmo",
    "batos",
    "batão",
    "baumê",
    "bauru",
    "baxim",
    "baíra",
    "baúle",
    "baúna",
    "beabá",
    "bebam",
    "bebas",
    "bebei",
    "bebem",
    "bebeu",
    "bebra",
    "bebum",
    "bebês",
    "becas",
    "beche",
    "becos",
    "bedel",
    "bedro",
    "bedum",
    "beduí",
    "bedém",
    "begue",
    "begum",
    "beija",
    "beije",
    "beiju",
    "beire",
    "beiro",
    "beiru",
    "beisa",
    "beiça",
    "beiço",
    "belaz",
    "belfa",
    "belfo",
    "belga",
    "belho",
    "beliz",
    "belão",
    "bemba",
    "bembé",
    "bemol",
    "bendi",
    "bendé",
    "bengo",
    "benim",
    "benta",
    "bento",
    "benza",
    "benze",
    "benzi",
    "benzo",
    "bença",
    "beque",
    "berba",
    "berma",
    "berna",
    "berne",
    "berno",
    "berol",
    "beroé",
    "berra",
    "berre",
    "berta",
    "berça",
    "beréu",
    "berós",
    "bespa",
    "bespe",
    "bessi",
    "betar",
    "betas",
    "betle",
    "betol",
    "betre",
    "betão",
    "bezar",
    "biaba",
    "biana",
    "biari",
    "biaro",
    "biata",
    "bibes",
    "bibió",
    "biblá",
    "bibói",
    "bicai",
    "bical",
    "bicam",
    "bicar",
    "bicas",
    "bicha",
    "bicos",
    "bicou",
    "bicão",
    "bidão",
    "biela",
    "bieno",
    "bifar",
    "bifes",
    "bigla",
    "bigle",
    "biguá",
    "bijou",
    "bijus",
    "bijuí",
    "bilha",
    "bilhó",
    "bilro",
    "bimar",
    "bimba",
    "bimbo",
    "binar",
    "binda",
    "binga",
    "binha",
    "biniú",
    "bioba",
    "bioco",
    "biose",
    "biota",
    "bipar",
    "bique",
    "birba",
    "birmã",
    "birre",
    "birro",
    "bisar",
    "bisbi",
    "bisca",
    "bisco",
    "bisel",
    "bisou",
    "bispa",
    "bisso",
    "bisão",
    "bitar",
    "bitas",
    "bitre",
    "biurá",
    "black",
    "blast",
    "blasé",
    "blata",
    "blefa",
    "blefe",
    "blefo",
    "blend",
    "bleso",
    "blini",
    "blitz",
    "blogs",
    "bluco",
    "blues",
    "bluff",
    "blufo",
    "blush",
    "bndes",
    "boaba",
    "boana",
    "boava",
    "bobal",
    "bobar",
    "bobas",
    "bobes",
    "bobos",
    "bobão",
    "bocar",
    "bocel",
    "bocha",
    "boche",
    "bocim",
    "bocué",
    "bocão",
    "bodar",
    "bodas",
    "bodes",
    "bodum",
    "boeta",
    "bofar",
    "bofas",
    "bofes",
    "bogar",
    "bogue",
    "boiai",
    "boiam",
    "boias",
    "boibi",
    "boiei",
    "boiem",
    "boies",
    "boiga",
    "boiil",
    "boimé",
    "boiou",
    "boiru",
    "boita",
    "boite",
    "boião",
    "boiça",
    "boiçu",
    "bojar",
    "bojuí",
    "bolai",
    "bolam",
    "bolar",
    "bolas",
    "bolbo",
    "bolco",
    "boldo",
    "bolei",
    "bolem",
    "boles",
    "bolhó",
    "bolim",
    "bolor",
    "bolos",
    "bolou",
    "bolão",
    "boléu",
    "bombo",
    "bonda",
    "bonga",
    "bongô",
    "bonho",
    "bonza",
    "bonzo",
    "bonés",
    "boque",
    "boral",
    "borco",
    "borde",
    "borga",
    "borgo",
    "borla",
    "borne",
    "borno",
    "bornu",
    "boroa",
    "boros",
    "borra",
    "borre",
    "borro",
    "bosca",
    "bosta",
    "bosão",
    "botai",
    "botam",
    "botas",
    "botei",
    "botem",
    "botes",
    "botim",
    "botos",
    "botou",
    "bouba",
    "bouga",
    "bouri",
    "bouça",
    "bouço",
    "boxar",
    "boxes",
    "braba",
    "brabo",
    "brada",
    "brade",
    "brado",
    "braga",
    "brala",
    "brama",
    "brame",
    "brami",
    "bramo",
    "braça",
    "break",
    "breal",
    "brear",
    "breba",
    "breca",
    "breco",
    "bredo",
    "brefo",
    "breia",
    "breio",
    "breja",
    "brema",
    "brete",
    "bretã",
    "breza",
    "brial",
    "briba",
    "brica",
    "brida",
    "bride",
    "brigo",
    "briol",
    "brios",
    "brise",
    "brita",
    "brito",
    "briza",
    "broas",
    "broco",
    "broma",
    "bromo",
    "brota",
    "brote",
    "broto",
    "broxa",
    "broxo",
    "bruar",
    "bruaá",
    "bruco",
    "brugo",
    "bruma",
    "brumo",
    "bruna",
    "bruno",
    "bruta",
    "bríon",
    "buama",
    "buara",
    "buase",
    "bubão",
    "buchu",
    "bucim",
    "bucle",
    "bucre",
    "bucuí",
    "bufai",
    "bufam",
    "bufas",
    "bufei",
    "bufem",
    "bufes",
    "bufir",
    "bufos",
    "bufou",
    "buggy",
    "bugia",
    "bugio",
    "bugle",
    "bugra",
    "bugre",
    "bujão",
    "bulam",
    "bular",
    "bulas",
    "bulbo",
    "bules",
    "bulha",
    "bulho",
    "bulia",
    "bulir",
    "bulis",
    "buliu",
    "bumba",
    "bumbo",
    "bunda",
    "bundo",
    "bunga",
    "bungo",
    "bunho",
    "buquê",
    "burca",
    "burdo",
    "burel",
    "burgo",
    "buril",
    "burla",
    "burle",
    "burlo",
    "burnu",
    "bursa",
    "burço",
    "busca",
    "busco",
    "busil",
    "butes",
    "butil",
    "butim",
    "butir",
    "butiá",
    "butre",
    "butua",
    "buvar",
    "buxal",
    "buído",
    "buílo",
    "bádur",
    "báfer",
    "báfia",
    "bágoa",
    "bário",
    "básio",
    "básis",
    "bátis",
    "bâmbi",
    "bécua",
    "bélis",
    "bétel",
    "bétis",
    "bíduo",
    "bíter",
    "bívio",
    "bócio",
    "bófia",
    "bórax",
    "bóson",
    "bóton",
    "bóxer",
    "búteo",
    "bútio",
    "búzio",
    "caaba",
    "caacó",
    "caaeé",
    "caama",
    "caami",
    "caapi",
    "caaxi",
    "caaçu",
    "cabal",
    "cabaz",
    "cabaú",
    "cabei",
    "cabem",
    "cabes",
    "cabia",
    "cabiú",
    "cable",
    "caboz",
    "cabre",
    "cabro",
    "cacei",
    "cacem",
    "caces",
    "cacha",
    "cache",
    "cachu",
    "cacim",
    "caciz",
    "cacre",
    "cacto",
    "cadai",
    "cadoz",
    "caeté",
    "cafiz",
    "cafra",
    "cafre",
    "cafta",
    "cafua",
    "cafus",
    "cafuz",
    "cafés",
    "cagai",
    "cagam",
    "cagar",
    "cagas",
    "cagom",
    "cagou",
    "cagoã",
    "cague",
    "cagão",
    "caiai",
    "caiam",
    "caiar",
    "caias",
    "caiba",
    "caibo",
    "caicó",
    "caide",
    "caiei",
    "caiem",
    "caies",
    "caiou",
    "caipa",
    "cairi",
    "cairo",
    "cairá",
    "cairé",
    "caité",
    "caiçu",
    "caiçá",
    "cajus",
    "cajuá",
    "cajuí",
    "cajás",
    "cajão",
    "calai",
    "calam",
    "calas",
    "calau",
    "calce",
    "calei",
    "calem",
    "cales",
    "calha",
    "calhe",
    "calho",
    "calim",
    "caliz",
    "calom",
    "calos",
    "calou",
    "calpa",
    "calta",
    "calum",
    "calão",
    "calço",
    "camal",
    "camas",
    "camaá",
    "camba",
    "cambo",
    "camol",
    "campa",
    "campi",
    "campé",
    "camuá",
    "camão",
    "canas",
    "canaz",
    "cancã",
    "canda",
    "cande",
    "cando",
    "canez",
    "canga",
    "cango",
    "canha",
    "canho",
    "canis",
    "canos",
    "canoé",
    "cansa",
    "canse",
    "canso",
    "canta",
    "cante",
    "canzo",
    "canzá",
    "caoba",
    "capai",
    "capam",
    "capar",
    "capas",
    "capei",
    "capem",
    "capes",
    "capiá",
    "capom",
    "capot",
    "capou",
    "capro",
    "capsa",
    "capta",
    "capte",
    "capto",
    "caput",
    "capão",
    "caras",
    "carda",
    "cardo",
    "carel",
    "caria",
    "caril",
    "cario",
    "cariz",
    "carií",
    "cariú",
    "carme",
    "carna",
    "caroá",
    "caroé",
    "carpe",
    "carpi",
    "carpo",
    "carrê",
    "carte",
    "carto",
    "caruá",
    "carva",
    "carão",
    "caréu",
    "casai",
    "casam",
    "casas",
    "casbá",
    "casei",
    "casem",
    "cases",
    "casou",
    "cassa",
    "casse",
    "casso",
    "casti",
    "casão",
    "catai",
    "catam",
    "catas",
    "catau",
    "catch",
    "catei",
    "catem",
    "cates",
    "catou",
    "catre",
    "catur",
    "catuá",
    "catão",
    "caubi",
    "cauim",
    "caumã",
    "cauna",
    "caupi",
    "cauri",
    "cauré",
    "cause",
    "causo",
    "cauto",
    "cauxi",
    "cavai",
    "cavam",
    "cavas",
    "cavei",
    "cavem",
    "caves",
    "cavou",
    "cavão",
    "caxim",
    "cazol",
    "caçai",
    "caçam",
    "caças",
    "caçoa",
    "caçoe",
    "caçoo",
    "caçou",
    "caçuá",
    "caído",
    "caíva",
    "caúba",
    "caúno",
    "ceado",
    "ceais",
    "ceará",
    "ceata",
    "ceava",
    "cecal",
    "cecém",
    "cedam",
    "cedas",
    "cedei",
    "cedem",
    "cedes",
    "cedeu",
    "cedia",
    "ceeis",
    "cefeu",
    "cegai",
    "cegam",
    "cegar",
    "cegas",
    "cegos",
    "cegou",
    "cegue",
    "ceiam",
    "ceias",
    "ceiba",
    "ceiem",
    "ceies",
    "ceifa",
    "ceife",
    "ceifo",
    "ceira",
    "ceita",
    "ceiva",
    "ceive",
    "celas",
    "celga",
    "celha",
    "cello",
    "celso",
    "celte",
    "cenho",
    "cenra",
    "ceote",
    "cepas",
    "cerar",
    "ceras",
    "cerce",
    "cerda",
    "cerdo",
    "ceres",
    "cerna",
    "cerni",
    "cerol",
    "cerra",
    "cerre",
    "cerro",
    "cerva",
    "cerzi",
    "cessa",
    "cesse",
    "cesso",
    "cetil",
    "cetol",
    "cetra",
    "cevar",
    "cevão",
    "chabu",
    "chabã",
    "chabó",
    "chaco",
    "chada",
    "chaga",
    "chago",
    "chajá",
    "chala",
    "chalo",
    "chama",
    "chame",
    "chamo",
    "chana",
    "chape",
    "chapo",
    "chara",
    "charo",
    "chaté",
    "chauá",
    "chavo",
    "chaça",
    "chaém",
    "chebê",
    "checa",
    "checo",
    "cheda",
    "chede",
    "chefa",
    "chega",
    "chego",
    "chela",
    "chena",
    "chesf",
    "cheta",
    "chevá",
    "chiai",
    "chiam",
    "chias",
    "chiba",
    "chibo",
    "chibé",
    "chica",
    "chico",
    "chiei",
    "chiem",
    "chies",
    "chifu",
    "chila",
    "chile",
    "chili",
    "china",
    "chinó",
    "chiou",
    "chipa",
    "chipe",
    "chipo",
    "chips",
    "chira",
    "chiru",
    "chita",
    "chião",
    "choca",
    "choco",
    "chogó",
    "chola",
    "cholo",
    "chona",
    "choné",
    "chopa",
    "chope",
    "chopp",
    "chora",
    "chore",
    "choto",
    "chova",
    "chove",
    "chovi",
    "chovo",
    "chuca",
    "chufa",
    "chula",
    "chulé",
    "chuna",
    "chupa",
    "chupe",
    "chupo",
    "churi",
    "chuta",
    "chute",
    "chuto",
    "chuxo",
    "chuço",
    "chués",
    "chãos",
    "ciado",
    "ciano",
    "ciara",
    "ciato",
    "cibar",
    "ciber",
    "cicas",
    "cicia",
    "cicie",
    "cicio",
    "cidno",
    "cidra",
    "cidró",
    "ciena",
    "ciese",
    "cifar",
    "cifre",
    "cifro",
    "cigas",
    "cigno",
    "cilha",
    "cimba",
    "cimol",
    "cinca",
    "cinda",
    "cinde",
    "cindi",
    "cindo",
    "cinge",
    "cingi",
    "cinja",
    "cinjo",
    "cinor",
    "cioba",
    "cioco",
    "cioso",
    "cioto",
    "cipós",
    "cirpo",
    "cirro",
    "cirza",
    "cirze",
    "cirzo",
    "cisar",
    "cisca",
    "cisco",
    "cisel",
    "cisma",
    "cisme",
    "cismo",
    "cisso",
    "cista",
    "cisto",
    "citai",
    "citam",
    "citas",
    "citei",
    "citem",
    "cites",
    "citou",
    "citro",
    "ciúro",
    "clade",
    "clado",
    "clama",
    "clame",
    "clamo",
    "clava",
    "clean",
    "clear",
    "clica",
    "clico",
    "clina",
    "cline",
    "clino",
    "clips",
    "clise",
    "clivo",
    "clona",
    "clono",
    "clora",
    "clori",
    "close",
    "clown",
    "cluva",
    "cnute",
    "coada",
    "coado",
    "coage",
    "coagi",
    "coais",
    "coaja",
    "coajo",
    "coara",
    "coati",
    "coato",
    "coatá",
    "coava",
    "coaxa",
    "coaxe",
    "coaxi",
    "coaxo",
    "cobol",
    "cobri",
    "cobro",
    "cocal",
    "cocei",
    "cocem",
    "coces",
    "cocha",
    "coche",
    "cocho",
    "cocos",
    "cocre",
    "cocta",
    "cocto",
    "cocão",
    "coeis",
    "coesa",
    "coevo",
    "cofió",
    "coibi",
    "coifa",
    "coima",
    "coino",
    "coiné",
    "coiol",
    "coira",
    "coiro",
    "coiso",
    "coita",
    "coito",
    "coité",
    "colai",
    "colam",
    "colas",
    "colau",
    "colei",
    "colem",
    "coles",
    "colga",
    "colha",
    "colhe",
    "colhi",
    "colho",
    "colim",
    "colir",
    "colma",
    "colmo",
    "colom",
    "color",
    "colos",
    "colou",
    "colpo",
    "colza",
    "comam",
    "comas",
    "comba",
    "combi",
    "combo",
    "comei",
    "comem",
    "comes",
    "comeu",
    "comia",
    "comua",
    "comão",
    "conas",
    "conca",
    "condi",
    "condo",
    "cones",
    "confa",
    "conga",
    "congo",
    "conha",
    "conho",
    "conio",
    "conja",
    "conte",
    "copal",
    "copar",
    "copel",
    "copie",
    "copio",
    "copla",
    "copos",
    "copra",
    "copta",
    "copto",
    "coque",
    "corai",
    "coram",
    "coras",
    "cordo",
    "corei",
    "corem",
    "cores",
    "coreu",
    "corga",
    "corgo",
    "corla",
    "cormo",
    "corna",
    "corne",
    "coroe",
    "coroo",
    "coros",
    "corou",
    "corra",
    "corre",
    "corri",
    "corro",
    "corsa",
    "corso",
    "corta",
    "corte",
    "corto",
    "corva",
    "corão",
    "corça",
    "corço",
    "cosam",
    "cosas",
    "cosca",
    "cosco",
    "cosei",
    "cosem",
    "coser",
    "coses",
    "coseu",
    "cosia",
    "cosmo",
    "cospe",
    "cossa",
    "cosso",
    "costo",
    "cotai",
    "cotam",
    "cotar",
    "cotas",
    "cotei",
    "cotem",
    "cotes",
    "cotia",
    "cotil",
    "cotim",
    "cotio",
    "cotos",
    "cotou",
    "cotra",
    "cotão",
    "coube",
    "couce",
    "couco",
    "couma",
    "coupé",
    "coura",
    "court",
    "cousa",
    "couso",
    "couto",
    "couça",
    "coval",
    "covas",
    "covil",
    "covoá",
    "covão",
    "coxal",
    "coxia",
    "coxim",
    "coxos",
    "cozam",
    "cozas",
    "cozei",
    "cozem",
    "cozer",
    "cozes",
    "cozeu",
    "cozia",
    "coçai",
    "coçam",
    "coças",
    "coçou",
    "coíba",
    "coíbe",
    "coíbo",
    "craca",
    "crack",
    "crapô",
    "crato",
    "crauá",
    "crava",
    "crave",
    "crawl",
    "creca",
    "crede",
    "creem",
    "crega",
    "creia",
    "creio",
    "creié",
    "crejé",
    "crela",
    "crema",
    "cremo",
    "crena",
    "crera",
    "creta",
    "creto",
    "creve",
    "criai",
    "criam",
    "crias",
    "crica",
    "crico",
    "crido",
    "criei",
    "criem",
    "cries",
    "crila",
    "crina",
    "crino",
    "criou",
    "criso",
    "criva",
    "crive",
    "crivo",
    "croco",
    "croia",
    "croma",
    "crome",
    "cromo",
    "crono",
    "cross",
    "croça",
    "cruas",
    "cruca",
    "crude",
    "cruga",
    "crume",
    "cruor",
    "crupe",
    "cruta",
    "cruza",
    "cruze",
    "cruzo",
    "cuaca",
    "cuada",
    "cuaga",
    "cuatá",
    "cubar",
    "cubas",
    "cubeo",
    "cubié",
    "cubiú",
    "cubla",
    "cubra",
    "cubre",
    "cubro",
    "cucar",
    "cucas",
    "cucha",
    "cucho",
    "cuchê",
    "cudzu",
    "cuera",
    "cuias",
    "cuida",
    "cuide",
    "cuido",
    "cuini",
    "cuipé",
    "cuitá",
    "cuité",
    "cuitó",
    "cuião",
    "cujas",
    "cujus",
    "culpa",
    "culpe",
    "culpo",
    "cumaí",
    "cumba",
    "cumbe",
    "cumbo",
    "cumbu",
    "cumes",
    "cumim",
    "cunau",
    "cunca",
    "cunco",
    "cunha",
    "cunhe",
    "cunho",
    "cupaí",
    "cupez",
    "cupio",
    "cupão",
    "cuque",
    "curai",
    "curam",
    "curas",
    "curau",
    "curda",
    "curdo",
    "curei",
    "curem",
    "cures",
    "curie",
    "curió",
    "curos",
    "curou",
    "curra",
    "curro",
    "curry",
    "cursa",
    "curse",
    "curta",
    "curte",
    "curti",
    "curto",
    "curul",
    "curuá",
    "curve",
    "curvo",
    "curão",
    "cusca",
    "cusco",
    "cuspa",
    "cuspi",
    "cuspo",
    "cusso",
    "custa",
    "custe",
    "cutia",
    "cuxiú",
    "cuíca",
    "cuíra",
    "cácea",
    "cádis",
    "cálix",
    "cápea",
    "cárus",
    "cávea",
    "cávia",
    "cândi",
    "cânon",
    "cébus",
    "cécum",
    "célio",
    "céomo",
    "céreo",
    "cério",
    "césar",
    "césio",
    "cíamo",
    "círio",
    "cível",
    "cóana",
    "cóano",
    "cóbio",
    "códeo",
    "códex",
    "códio",
    "códon",
    "códão",
    "cófea",
    "cógia",
    "cóleo",
    "cólio",
    "cório",
    "côdea",
    "cúbio",
    "cúcio",
    "cúfea",
    "cúfia",
    "cúlex",
    "cúmel",
    "cúmis",
    "cúneo",
    "cúnia",
    "cúria",
    "cúter",
    "dabom",
    "dabua",
    "dacar",
    "dacha",
    "dacma",
    "dacos",
    "dadas",
    "dador",
    "dafne",
    "daime",
    "dairo",
    "daião",
    "dalai",
    "dalém",
    "damba",
    "damos",
    "danai",
    "danam",
    "danar",
    "danas",
    "dance",
    "danda",
    "dando",
    "danei",
    "danem",
    "danes",
    "danou",
    "dante",
    "dança",
    "danço",
    "daraf",
    "darei",
    "darem",
    "dares",
    "darga",
    "daria",
    "darma",
    "darto",
    "darás",
    "darão",
    "datai",
    "datal",
    "datam",
    "datar",
    "datas",
    "datei",
    "datem",
    "dates",
    "datil",
    "datou",
    "davam",
    "davas",
    "dação",
    "dbase",
    "deado",
    "debar",
    "debye",
    "decai",
    "decil",
    "dedal",
    "dedar",
    "deduz",
    "dedéu",
    "degas",
    "deita",
    "deite",
    "deito",
    "deixa",
    "deixe",
    "deixo",
    "dejua",
    "delas",
    "delem",
    "deles",
    "delir",
    "delis",
    "deliu",
    "dembe",
    "dembo",
    "demos",
    "demão",
    "dendi",
    "dendo",
    "dendê",
    "dengo",
    "dento",
    "depus",
    "depós",
    "depõe",
    "deque",
    "deram",
    "deras",
    "derby",
    "derem",
    "deres",
    "derma",
    "derme",
    "desar",
    "desce",
    "desci",
    "desnu",
    "despe",
    "despi",
    "dessa",
    "desse",
    "desta",
    "deste",
    "desça",
    "desço",
    "detém",
    "devam",
    "devas",
    "devei",
    "devem",
    "deves",
    "deveu",
    "devia",
    "devim",
    "devir",
    "dewar",
    "diaba",
    "diabo",
    "diafa",
    "diale",
    "diana",
    "diate",
    "diazo",
    "dicar",
    "dicaz",
    "dicha",
    "didal",
    "didot",
    "dieco",
    "dieno",
    "diese",
    "digam",
    "digar",
    "digas",
    "digna",
    "digne",
    "dilua",
    "dilui",
    "diluo",
    "dimba",
    "dinar",
    "dinca",
    "dinda",
    "dindo",
    "dinga",
    "dingo",
    "diogo",
    "dioma",
    "dioso",
    "diple",
    "diplo",
    "direi",
    "diria",
    "dirrã",
    "dirás",
    "dirão",
    "dirém",
    "disca",
    "disco",
    "disga",
    "disna",
    "dispo",
    "disse",
    "dista",
    "diste",
    "disto",
    "ditai",
    "ditam",
    "ditas",
    "ditei",
    "ditem",
    "dites",
    "ditou",
    "ditua",
    "dizei",
    "dizem",
    "dizes",
    "dizia",
    "dição",
    "diúla",
    "doada",
    "doado",
    "doais",
    "doara",
    "doava",
    "dobar",
    "dobla",
    "doble",
    "dobre",
    "docas",
    "docto",
    "docém",
    "dodói",
    "doeis",
    "doera",
    "dogal",
    "dogre",
    "dogue",
    "doida",
    "doilo",
    "doiro",
    "dolly",
    "dolor",
    "domai",
    "domam",
    "domas",
    "domei",
    "domem",
    "domes",
    "domou",
    "donas",
    "donde",
    "dondo",
    "dongo",
    "dopai",
    "dopam",
    "dopar",
    "dopas",
    "dopei",
    "dopem",
    "dopes",
    "dopou",
    "doque",
    "dorme",
    "dormi",
    "dorna",
    "dosai",
    "dosam",
    "dosas",
    "dosei",
    "dosem",
    "dosou",
    "dotai",
    "dotal",
    "dotam",
    "dotas",
    "dotei",
    "dotem",
    "dotes",
    "dotou",
    "douda",
    "doudo",
    "doula",
    "doura",
    "doure",
    "douro",
    "douta",
    "douto",
    "dozão",
    "doçal",
    "doçar",
    "doíam",
    "doías",
    "draft",
    "draga",
    "drago",
    "drapê",
    "drena",
    "drene",
    "drias",
    "dribo",
    "drink",
    "drive",
    "driça",
    "drofa",
    "droga",
    "drogo",
    "dromo",
    "drope",
    "drops",
    "drupa",
    "drusa",
    "druso",
    "druvá",
    "duala",
    "duana",
    "dubla",
    "dublo",
    "dublê",
    "ducal",
    "duche",
    "ducto",
    "duela",
    "duele",
    "dugão",
    "dulia",
    "dumas",
    "dunar",
    "dundu",
    "dunfa",
    "dunga",
    "dunha",
    "durai",
    "dural",
    "duram",
    "duras",
    "duraz",
    "durei",
    "durem",
    "dures",
    "durex",
    "durez",
    "durgá",
    "durma",
    "durmo",
    "durou",
    "durão",
    "dutos",
    "duzir",
    "duíta",
    "dzeta",
    "dácio",
    "dália",
    "dâmar",
    "dânae",
    "dândi",
    "dânio",
    "début",
    "décor",
    "délia",
    "délio",
    "dérbi",
    "dévio",
    "díada",
    "díade",
    "dídia",
    "dífia",
    "dínio",
    "díope",
    "díxis",
    "dólmã",
    "dória",
    "dório",
    "dóris",
    "dúbia",
    "dúbio",
    "dúrio",
    "ebiri",
    "ebola",
    "ebome",
    "ecese",
    "ecler",
    "ecoai",
    "ecoam",
    "ecoas",
    "ecoei",
    "ecoem",
    "ecoes",
    "ecoou",
    "ecuru",
    "edace",
    "edema",
    "ederé",
    "edita",
    "edite",
    "edito",
    "edoma",
    "educa",
    "educo",
    "edule",
    "edulo",
    "eduto",
    "efebo",
    "efuso",
    "egipã",
    "egito",
    "eguar",
    "eidos",
    "eiras",
    "eirós",
    "eivar",
    "eixar",
    "eixos",
    "eiçar",
    "ejeta",
    "ejete",
    "ejeto",
    "elafá",
    "elami",
    "elche",
    "eledá",
    "eledê",
    "elege",
    "elegi",
    "eleja",
    "elejo",
    "elemi",
    "elena",
    "elepê",
    "eleto",
    "eleva",
    "eleve",
    "elevo",
    "elfos",
    "elida",
    "elide",
    "eluir",
    "eluro",
    "eléis",
    "email",
    "emana",
    "emane",
    "emano",
    "embaí",
    "embiá",
    "embiú",
    "emboá",
    "embuá",
    "embuí",
    "emexo",
    "emfim",
    "emita",
    "emite",
    "emiti",
    "emito",
    "emoji",
    "empar",
    "empós",
    "emula",
    "emule",
    "enana",
    "enano",
    "enase",
    "encha",
    "enche",
    "enchi",
    "enchó",
    "endes",
    "endez",
    "endro",
    "endua",
    "enema",
    "enfia",
    "enfie",
    "enfio",
    "engar",
    "engas",
    "engos",
    "engra",
    "enibu",
    "enito",
    "enjoa",
    "enjoe",
    "enodo",
    "enoja",
    "enoje",
    "enojo",
    "enora",
    "enque",
    "enter",
    "entes",
    "enteu",
    "entoa",
    "entoe",
    "entoo",
    "entra",
    "entre",
    "entro",
    "envia",
    "envie",
    "envio",
    "envés",
    "enxuí",
    "enxós",
    "eoípo",
    "epodo",
    "epuxa",
    "epóxi",
    "equeu",
    "erado",
    "eramá",
    "erato",
    "erbia",
    "ereta",
    "ereto",
    "ergam",
    "ergas",
    "ergol",
    "ergue",
    "ergui",
    "erice",
    "erige",
    "erigi",
    "erija",
    "erijo",
    "erino",
    "ermar",
    "ermos",
    "eroca",
    "eroda",
    "erode",
    "erodi",
    "erodo",
    "eroso",
    "errai",
    "erram",
    "erras",
    "errei",
    "errem",
    "erres",
    "error",
    "errou",
    "eruca",
    "eruga",
    "eruir",
    "eruru",
    "erval",
    "ervar",
    "ervão",
    "escoa",
    "escoe",
    "escol",
    "escoo",
    "eserê",
    "esfex",
    "esgar",
    "esmar",
    "espia",
    "espie",
    "espim",
    "espio",
    "espru",
    "essas",
    "esses",
    "estai",
    "estas",
    "estau",
    "ester",
    "estia",
    "estio",
    "estol",
    "estou",
    "estra",
    "estro",
    "estuo",
    "estão",
    "esvai",
    "esvão",
    "etano",
    "eteno",
    "ethos",
    "etila",
    "etilo",
    "etino",
    "etite",
    "etusa",
    "eubeu",
    "evada",
    "evade",
    "evadi",
    "evado",
    "evasê",
    "evita",
    "evite",
    "evito",
    "evoca",
    "evoco",
    "exala",
    "exale",
    "exalo",
    "exara",
    "exare",
    "exaro",
    "exata",
    "exiba",
    "exibe",
    "exibi",
    "exibo",
    "exido",
    "exige",
    "exigi",
    "exija",
    "exijo",
    "exila",
    "exile",
    "exilo",
    "exima",
    "exime",
    "eximi",
    "eximo",
    "exina",
    "expia",
    "expie",
    "expio",
    "expus",
    "expôs",
    "expõe",
    "extar",
    "exuma",
    "exume",
    "exumo",
    "eólia",
    "eólio",
    "fabro",
    "faces",
    "facha",
    "fachi",
    "facho",
    "facie",
    "facto",
    "fadar",
    "fadas",
    "fados",
    "fagar",
    "faial",
    "faiar",
    "faido",
    "faina",
    "faire",
    "faião",
    "fajau",
    "falai",
    "falam",
    "falas",
    "falaz",
    "falca",
    "falco",
    "falda",
    "falei",
    "falem",
    "fales",
    "falha",
    "falhe",
    "falho",
    "falia",
    "falis",
    "faliu",
    "falou",
    "false",
    "falta",
    "falte",
    "falto",
    "falua",
    "faluz",
    "fanal",
    "fanar",
    "fanca",
    "fanfa",
    "fanga",
    "fanha",
    "fanho",
    "fanta",
    "fante",
    "fanão",
    "faqui",
    "farad",
    "farar",
    "faraz",
    "farei",
    "farel",
    "fareu",
    "faria",
    "farne",
    "farno",
    "farro",
    "farta",
    "farte",
    "farum",
    "farás",
    "fasco",
    "fasma",
    "fasor",
    "fasta",
    "fasto",
    "fatia",
    "fatie",
    "fatio",
    "fatão",
    "fauce",
    "fauno",
    "fauta",
    "faval",
    "favar",
    "favas",
    "favos",
    "faxes",
    "fazei",
    "fazem",
    "fazes",
    "fazia",
    "façam",
    "faúla",
    "febeu",
    "febra",
    "fecal",
    "fecha",
    "feche",
    "fecho",
    "fedam",
    "fedas",
    "fedei",
    "fedem",
    "feder",
    "fedes",
    "fedeu",
    "fedia",
    "feila",
    "feito",
    "feião",
    "felga",
    "felpa",
    "felpo",
    "feléu",
    "fenam",
    "fenar",
    "fende",
    "fendi",
    "fendo",
    "fenil",
    "fenol",
    "fento",
    "feofó",
    "feral",
    "feraz",
    "ferem",
    "feres",
    "ferga",
    "feria",
    "feris",
    "feriu",
    "fermi",
    "feros",
    "ferpa",
    "ferra",
    "ferre",
    "ferry",
    "ferto",
    "ferva",
    "ferve",
    "fervi",
    "fervo",
    "festo",
    "fetos",
    "fevra",
    "fezes",
    "fiada",
    "fiais",
    "fiara",
    "fiava",
    "ficai",
    "ficam",
    "ficas",
    "fiche",
    "ficho",
    "fichu",
    "ficou",
    "ficta",
    "ficto",
    "ficão",
    "fidéu",
    "fieza",
    "figas",
    "figle",
    "figos",
    "filai",
    "filam",
    "filar",
    "filas",
    "filei",
    "filem",
    "files",
    "filia",
    "filie",
    "filio",
    "filma",
    "filmo",
    "filos",
    "filou",
    "filão",
    "fimbo",
    "finar",
    "finas",
    "finca",
    "finco",
    "finda",
    "finde",
    "findo",
    "finfa",
    "finge",
    "fingi",
    "finja",
    "finjo",
    "finta",
    "finte",
    "finto",
    "finês",
    "fiofó",
    "fiota",
    "fiote",
    "fioto",
    "fique",
    "firam",
    "firas",
    "firme",
    "firmo",
    "fisga",
    "fisgo",
    "fisio",
    "fitai",
    "fitam",
    "fitar",
    "fitas",
    "fitei",
    "fitem",
    "fites",
    "fitol",
    "fitos",
    "fitou",
    "fitão",
    "fixai",
    "fixam",
    "fixas",
    "fixei",
    "fixem",
    "fixes",
    "fixou",
    "fizer",
    "fiéis",
    "fiúsa",
    "fiúza",
    "flaco",
    "flama",
    "flame",
    "flape",
    "flare",
    "flash",
    "flate",
    "flato",
    "flava",
    "flavo",
    "flema",
    "fleme",
    "flete",
    "flexo",
    "flint",
    "flirt",
    "flori",
    "flosa",
    "flosô",
    "floxo",
    "flozô",
    "fluam",
    "fluas",
    "fluem",
    "fluis",
    "fluiu",
    "flume",
    "flush",
    "fluta",
    "fluía",
    "flûte",
    "fobar",
    "fobos",
    "focai",
    "focam",
    "focas",
    "focou",
    "focus",
    "fodam",
    "fodas",
    "fodem",
    "foder",
    "fodeu",
    "foeta",
    "fofar",
    "fofos",
    "fofão",
    "fogal",
    "fogar",
    "fogem",
    "foges",
    "foila",
    "foina",
    "foito",
    "folar",
    "foles",
    "folgo",
    "folho",
    "folão",
    "fomes",
    "fomos",
    "fones",
    "fonia",
    "fonjo",
    "foque",
    "foral",
    "foram",
    "foras",
    "force",
    "forde",
    "fordo",
    "forem",
    "fores",
    "foria",
    "forja",
    "forje",
    "forjo",
    "forme",
    "formi",
    "formo",
    "foros",
    "forra",
    "forre",
    "forró",
    "forço",
    "fosia",
    "fosse",
    "foste",
    "fotão",
    "fouce",
    "foyer",
    "foção",
    "fraga",
    "frago",
    "frama",
    "frapê",
    "freai",
    "freei",
    "frega",
    "frege",
    "freia",
    "freie",
    "freme",
    "fremi",
    "freon",
    "freou",
    "fresa",
    "frese",
    "freso",
    "freta",
    "frete",
    "freto",
    "frial",
    "friez",
    "frigi",
    "frija",
    "frijo",
    "frila",
    "frima",
    "frino",
    "frisa",
    "frise",
    "friso",
    "frita",
    "frite",
    "frito",
    "friul",
    "froca",
    "froco",
    "frolo",
    "front",
    "fruem",
    "fruir",
    "fruis",
    "fruiu",
    "fruxu",
    "fruía",
    "fucei",
    "fucem",
    "fuces",
    "fueta",
    "fugar",
    "fugas",
    "fugia",
    "fugis",
    "fugiu",
    "fujam",
    "fujas",
    "fujão",
    "fular",
    "fulas",
    "fulda",
    "fulge",
    "fulgi",
    "fulha",
    "fulos",
    "fulvo",
    "fulão",
    "fumai",
    "fumal",
    "fumam",
    "fumas",
    "fumei",
    "fumem",
    "fumes",
    "fumos",
    "fumou",
    "fumão",
    "funca",
    "funce",
    "funda",
    "funde",
    "fundi",
    "funel",
    "funga",
    "fungu",
    "funho",
    "funje",
    "funéu",
    "furai",
    "fural",
    "furam",
    "furas",
    "furco",
    "furda",
    "furei",
    "furem",
    "fures",
    "furna",
    "furou",
    "furta",
    "furte",
    "furto",
    "furão",
    "fusca",
    "fusco",
    "fusos",
    "fusta",
    "fuste",
    "fusto",
    "futre",
    "futum",
    "fuzil",
    "fuzis",
    "fuçai",
    "fuçam",
    "fuças",
    "fuçou",
    "fábia",
    "fálum",
    "fálus",
    "fásia",
    "fátuo",
    "fânio",
    "fânti",
    "fécio",
    "féleo",
    "félis",
    "fêmeo",
    "fêmur",
    "fênix",
    "fêtão",
    "fíala",
    "fícea",
    "fíceo",
    "fícis",
    "fícus",
    "fídia",
    "fífia",
    "fíler",
    "fócio",
    "fódia",
    "fólio",
    "fólis",
    "fóton",
    "fóvea",
    "fônon",
    "fúcea",
    "fúfia",
    "fúfio",
    "fúmeo",
    "fúsel",
    "fúsil",
    "gabai",
    "gabam",
    "gabar",
    "gabas",
    "gabei",
    "gabem",
    "gabes",
    "gabou",
    "gabro",
    "gabão",
    "gabéu",
    "gacha",
    "gacho",
    "gados",
    "gadão",
    "gaeta",
    "gafar",
    "gafes",
    "gafém",
    "gagau",
    "gagos",
    "gague",
    "gagão",
    "gaial",
    "gaiar",
    "gaias",
    "gaipa",
    "gaipo",
    "gairo",
    "gaiva",
    "gajar",
    "gajas",
    "gajos",
    "gajão",
    "galar",
    "galas",
    "galbo",
    "galem",
    "gales",
    "galga",
    "galgo",
    "galha",
    "galos",
    "galra",
    "gamam",
    "gamar",
    "gamas",
    "gambo",
    "gamei",
    "games",
    "gamão",
    "ganas",
    "ganau",
    "ganda",
    "gando",
    "ganem",
    "ganga",
    "gango",
    "ganha",
    "ganhe",
    "gania",
    "ganir",
    "ganis",
    "ganiu",
    "ganja",
    "gansa",
    "ganta",
    "ganza",
    "ganzi",
    "ganzé",
    "gança",
    "ganço",
    "ganês",
    "garbo",
    "garfa",
    "garfe",
    "garis",
    "garna",
    "garoa",
    "garoe",
    "garoo",
    "garro",
    "garua",
    "garão",
    "garço",
    "gaspa",
    "gasta",
    "gaste",
    "gatal",
    "gatar",
    "gatil",
    "gatos",
    "gatum",
    "gatão",
    "gauda",
    "gaudó",
    "gauge",
    "gaulo",
    "gaura",
    "gauro",
    "gauss",
    "gavar",
    "gazal",
    "gazel",
    "gazes",
    "gazeu",
    "gazia",
    "gazil",
    "gazua",
    "gazão",
    "geado",
    "geais",
    "geara",
    "geava",
    "gebar",
    "gebre",
    "geeis",
    "geena",
    "geiam",
    "geias",
    "geiem",
    "geies",
    "gelai",
    "gelam",
    "gelas",
    "gelba",
    "gelei",
    "gelem",
    "geles",
    "gelfa",
    "gelha",
    "gelmo",
    "gelos",
    "gelou",
    "gelva",
    "gemam",
    "gemar",
    "gemas",
    "gemei",
    "gemem",
    "gemes",
    "gemeu",
    "gemia",
    "genal",
    "genes",
    "genia",
    "genra",
    "geode",
    "geodo",
    "geoso",
    "gerai",
    "geram",
    "geras",
    "gerbo",
    "gerei",
    "geres",
    "geria",
    "geris",
    "geriu",
    "germo",
    "gerou",
    "gerra",
    "gerém",
    "gesta",
    "getas",
    "geteu",
    "giaur",
    "gibis",
    "gibão",
    "giclê",
    "gicão",
    "gigas",
    "gimbo",
    "ginco",
    "ginge",
    "gingo",
    "ginja",
    "giota",
    "gipso",
    "girai",
    "giram",
    "giras",
    "girei",
    "girem",
    "gires",
    "giros",
    "girou",
    "girão",
    "gizar",
    "glacê",
    "gleba",
    "glena",
    "glial",
    "glide",
    "glifo",
    "globa",
    "glomo",
    "glosa",
    "glose",
    "gloso",
    "glote",
    "gluma",
    "glute",
    "gluão",
    "glúon",
    "gneto",
    "gnoma",
    "gnose",
    "goano",
    "gocha",
    "gocho",
    "godes",
    "godos",
    "godão",
    "goete",
    "gofer",
    "gofre",
    "goiar",
    "goiti",
    "goiva",
    "goivo",
    "goiás",
    "golar",
    "golas",
    "golda",
    "goles",
    "golfe",
    "golga",
    "gomal",
    "gomar",
    "gomas",
    "gomba",
    "gombô",
    "gomes",
    "gomia",
    "gomil",
    "gomor",
    "gomos",
    "gonda",
    "gonde",
    "gondo",
    "gonga",
    "gongo",
    "gonzo",
    "gorai",
    "goral",
    "goram",
    "gorar",
    "goras",
    "goraz",
    "gorda",
    "gorei",
    "gorem",
    "gores",
    "gorga",
    "gorja",
    "gorne",
    "gorou",
    "gorra",
    "gosta",
    "goste",
    "gotas",
    "gotra",
    "gotri",
    "gouda",
    "gouli",
    "gouve",
    "gozai",
    "gozam",
    "gozas",
    "gozei",
    "gozem",
    "gozes",
    "gozos",
    "gozou",
    "gozão",
    "graal",
    "grado",
    "grafa",
    "grafe",
    "grafo",
    "grane",
    "grani",
    "grano",
    "grapa",
    "grava",
    "grave",
    "gravo",
    "graxo",
    "grebe",
    "greco",
    "greda",
    "grede",
    "green",
    "grege",
    "grejó",
    "grela",
    "grelo",
    "grená",
    "grepo",
    "greta",
    "greva",
    "grias",
    "grifa",
    "grife",
    "grifo",
    "grijó",
    "grila",
    "grile",
    "grill",
    "grima",
    "gripa",
    "grise",
    "griso",
    "grisu",
    "grita",
    "grite",
    "grode",
    "groir",
    "groló",
    "groma",
    "groom",
    "grosa",
    "grota",
    "gruas",
    "gruau",
    "gruda",
    "grude",
    "grudo",
    "gruim",
    "gruir",
    "gruja",
    "grumo",
    "gruna",
    "grupa",
    "grãos",
    "guaco",
    "guacá",
    "guaia",
    "guaiú",
    "guajá",
    "guano",
    "guaná",
    "guapo",
    "guare",
    "guari",
    "guaru",
    "guará",
    "guató",
    "guaxe",
    "guaxi",
    "guaxo",
    "guaçu",
    "gueba",
    "guebo",
    "guedé",
    "gueja",
    "guere",
    "gueri",
    "gueta",
    "guete",
    "guexa",
    "guiai",
    "guiam",
    "guias",
    "guibo",
    "guibá",
    "guida",
    "guiei",
    "guiem",
    "guies",
    "guiga",
    "guigó",
    "guina",
    "guino",
    "guiné",
    "guiou",
    "guipá",
    "guira",
    "guisa",
    "guita",
    "guito",
    "guizo",
    "guião",
    "guiço",
    "gulag",
    "gular",
    "gumbo",
    "gumes",
    "gunda",
    "gundu",
    "gunga",
    "gurde",
    "guris",
    "gurma",
    "gurus",
    "gusla",
    "gusta",
    "guste",
    "guyot",
    "gábia",
    "gábio",
    "gáfio",
    "gálax",
    "gálea",
    "gália",
    "gálio",
    "gávea",
    "gázeo",
    "gázio",
    "gâmia",
    "gêmea",
    "gígia",
    "gília",
    "gírio",
    "góbio",
    "gódia",
    "gônio",
    "gônis",
    "habés",
    "hacer",
    "hacos",
    "hadji",
    "haiku",
    "hajam",
    "hajas",
    "hajul",
    "hakka",
    "hango",
    "hansa",
    "haras",
    "harda",
    "harlo",
    "harpe",
    "harto",
    "harém",
    "hashi",
    "hasta",
    "haure",
    "hauri",
    "hauçá",
    "havei",
    "havia",
    "hedge",
    "hedra",
    "hemal",
    "henry",
    "hepta",
    "herda",
    "herde",
    "herdo",
    "heril",
    "herma",
    "heroo",
    "hertz",
    "heréu",
    "heteu",
    "hetol",
    "hexil",
    "hexol",
    "hialo",
    "hiava",
    "hidra",
    "hidro",
    "higgs",
    "higra",
    "hilar",
    "himba",
    "hindu",
    "hinir",
    "hiper",
    "hirco",
    "hirto",
    "histo",
    "hobby",
    "holão",
    "hombo",
    "homos",
    "homum",
    "homus",
    "homão",
    "honor",
    "honre",
    "honro",
    "horal",
    "horar",
    "horda",
    "horrá",
    "horsa",
    "hosco",
    "hoste",
    "houve",
    "hovas",
    "huari",
    "huido",
    "hulha",
    "hungo",
    "hunos",
    "hurra",
    "husky",
    "háden",
    "hálux",
    "hápax",
    "hélas",
    "hélia",
    "hélio",
    "hélix",
    "hépia",
    "hévea",
    "híala",
    "hímen",
    "híndi",
    "hóvea",
    "húmil",
    "húmus",
    "iacas",
    "iaguá",
    "iambo",
    "ianam",
    "iande",
    "iansã",
    "iaque",
    "iataí",
    "iates",
    "ibaró",
    "ibeji",
    "ibere",
    "ibero",
    "ibira",
    "ibiri",
    "iboga",
    "ibope",
    "icaco",
    "icaçu",
    "iceis",
    "ichão",
    "icica",
    "icipó",
    "idear",
    "idrol",
    "ieixa",
    "ienes",
    "iento",
    "ietim",
    "igaci",
    "igapó",
    "igara",
    "igbim",
    "iguar",
    "igupá",
    "iiabá",
    "ijebu",
    "ijexá",
    "ilama",
    "ileal",
    "ilesa",
    "ilhai",
    "ilhal",
    "ilham",
    "ilhar",
    "ilhas",
    "ilhei",
    "ilhem",
    "ilhes",
    "ilhoa",
    "ilhou",
    "ilhéu",
    "ilhós",
    "ilita",
    "ilota",
    "iluda",
    "ilude",
    "iludi",
    "iludo",
    "iluso",
    "imago",
    "imame",
    "imamo",
    "imane",
    "imano",
    "imbua",
    "imbuí",
    "imene",
    "imida",
    "imido",
    "imigo",
    "imina",
    "imita",
    "imite",
    "imito",
    "imola",
    "imole",
    "imolo",
    "imoto",
    "impim",
    "impol",
    "impus",
    "impôs",
    "impõe",
    "inaiá",
    "inajá",
    "inajé",
    "inala",
    "inale",
    "inalo",
    "inama",
    "inamu",
    "inana",
    "inane",
    "inata",
    "incas",
    "incha",
    "inche",
    "incho",
    "incoa",
    "incoe",
    "incoo",
    "indas",
    "index",
    "indez",
    "indol",
    "induz",
    "infla",
    "infle",
    "inflo",
    "ingaí",
    "ingre",
    "inhor",
    "iniba",
    "inibe",
    "inibi",
    "inibo",
    "inite",
    "inoma",
    "inova",
    "inove",
    "inovo",
    "input",
    "insta",
    "inste",
    "insto",
    "inter",
    "intra",
    "intua",
    "intui",
    "intuo",
    "inube",
    "inuit",
    "invar",
    "inçar",
    "iodar",
    "iodol",
    "iogue",
    "ionte",
    "ipadu",
    "ipeca",
    "ipecu",
    "ipetê",
    "ippar",
    "ipres",
    "ipsis",
    "ipuca",
    "irada",
    "irade",
    "irara",
    "iraçu",
    "irdes",
    "ireis",
    "irene",
    "ireno",
    "irerê",
    "irial",
    "iriam",
    "iriar",
    "irias",
    "irino",
    "irirá",
    "irite",
    "iriva",
    "irmos",
    "iroco",
    "irona",
    "irone",
    "iroso",
    "iruri",
    "iruçu",
    "isaro",
    "iscar",
    "iscas",
    "islão",
    "isola",
    "isole",
    "isolo",
    "issei",
    "istmo",
    "istro",
    "isuro",
    "itano",
    "itapu",
    "itauá",
    "itens",
    "itera",
    "itere",
    "itero",
    "itobi",
    "itral",
    "itrol",
    "iuane",
    "iudjá",
    "iurta",
    "iurte",
    "ixode",
    "ixodo",
    "ixora",
    "içado",
    "içais",
    "içara",
    "içava",
    "iótio",
    "iônio",
    "jabre",
    "jabão",
    "jacra",
    "jacre",
    "jacuí",
    "jagas",
    "jagra",
    "jagre",
    "jaicó",
    "jaina",
    "jalde",
    "jalne",
    "jalão",
    "jamba",
    "jambo",
    "jambu",
    "jambé",
    "janal",
    "janaú",
    "janda",
    "janga",
    "jango",
    "janja",
    "jante",
    "janto",
    "japas",
    "japim",
    "japoa",
    "japué",
    "japuí",
    "japão",
    "jaque",
    "jarda",
    "jardo",
    "jaspe",
    "jatar",
    "jataí",
    "jator",
    "jatos",
    "jauna",
    "javaé",
    "javre",
    "jazam",
    "jazas",
    "jazei",
    "jazem",
    "jazer",
    "jazes",
    "jazeu",
    "jazia",
    "jeans",
    "jegra",
    "jegre",
    "jeicó",
    "jeira",
    "jejua",
    "jejue",
    "jejuo",
    "jembê",
    "jemiá",
    "jeová",
    "jepiá",
    "jepió",
    "jeque",
    "jequi",
    "jerra",
    "jesus",
    "jetaí",
    "jetom",
    "jeton",
    "jicão",
    "jigue",
    "jihad",
    "jimbe",
    "jimbo",
    "jinga",
    "jingo",
    "jipes",
    "jipio",
    "jipão",
    "jique",
    "jiqui",
    "jirau",
    "jiroé",
    "jitsu",
    "jiçui",
    "joane",
    "jocos",
    "jogai",
    "jogam",
    "jogas",
    "jogou",
    "jogue",
    "jogão",
    "joina",
    "joiça",
    "jolda",
    "joliz",
    "jongo",
    "jorge",
    "jorna",
    "jorne",
    "jorra",
    "jorre",
    "joule",
    "jouça",
    "joçal",
    "joíba",
    "juami",
    "juari",
    "juati",
    "jubaí",
    "jubão",
    "judas",
    "judeu",
    "judia",
    "judie",
    "judio",
    "jugal",
    "jugar",
    "juina",
    "julga",
    "julgo",
    "jumas",
    "jumbo",
    "junco",
    "jundu",
    "jungo",
    "junta",
    "junte",
    "junça",
    "jupiá",
    "jupuá",
    "jupão",
    "juqui",
    "jurai",
    "juram",
    "juras",
    "jurei",
    "jurem",
    "jures",
    "juris",
    "jurou",
    "jurão",
    "jusão",
    "jutaí",
    "juuna",
    "jácea",
    "jápix",
    "jônia",
    "jônio",
    "júvia",
    "kanji",
    "kansa",
    "karma",
    "kayak",
    "kebab",
    "kendo",
    "khmer",
    "kispo",
    "kraft",
    "krill",
    "kyrie",
    "labor",
    "labro",
    "labéu",
    "lacei",
    "lacem",
    "laces",
    "lacha",
    "lacol",
    "lacra",
    "lacro",
    "lacta",
    "ladim",
    "ladra",
    "ladre",
    "ladro",
    "ladão",
    "lagar",
    "lages",
    "lagão",
    "laica",
    "laitu",
    "laiva",
    "laivo",
    "lajem",
    "lajes",
    "lajão",
    "lalau",
    "lamas",
    "lamba",
    "lambe",
    "lambi",
    "lambo",
    "lambu",
    "lamel",
    "lampa",
    "lampo",
    "lanar",
    "landa",
    "lande",
    "landi",
    "landó",
    "lango",
    "lanha",
    "lanho",
    "lanti",
    "lanço",
    "lapas",
    "lapes",
    "lapim",
    "lapiá",
    "lapuz",
    "lapão",
    "laquê",
    "lardo",
    "larga",
    "largo",
    "larim",
    "laroz",
    "laréu",
    "lasca",
    "lasco",
    "laser",
    "lassa",
    "lasso",
    "latam",
    "latem",
    "later",
    "lates",
    "latia",
    "latis",
    "latiu",
    "laude",
    "laulé",
    "lauro",
    "lauto",
    "lavai",
    "lavam",
    "lavas",
    "lavei",
    "lavem",
    "laves",
    "lavor",
    "lavou",
    "lavra",
    "lavre",
    "lavro",
    "laxar",
    "lazzo",
    "lazão",
    "laçai",
    "laçam",
    "laçar",
    "laças",
    "laçou",
    "lação",
    "laúza",
    "leais",
    "lecre",
    "ledes",
    "ledor",
    "legai",
    "legam",
    "legar",
    "legas",
    "legba",
    "legis",
    "legou",
    "legra",
    "legre",
    "legue",
    "legão",
    "leiam",
    "leias",
    "leiga",
    "leila",
    "leino",
    "leira",
    "leita",
    "leiva",
    "leixa",
    "lemas",
    "lemba",
    "lemes",
    "lemna",
    "lemos",
    "lempa",
    "lendo",
    "leneu",
    "lenga",
    "lenho",
    "lenir",
    "lenão",
    "leoas",
    "leoba",
    "leone",
    "lepas",
    "lepes",
    "lepra",
    "lepto",
    "leram",
    "leras",
    "lerca",
    "lerda",
    "lerei",
    "lerem",
    "leres",
    "leria",
    "lerna",
    "lerpe",
    "leruê",
    "lerão",
    "lesai",
    "lesam",
    "lesas",
    "lesei",
    "lesem",
    "leses",
    "lesim",
    "lesou",
    "lesse",
    "lesto",
    "leteu",
    "letro",
    "letão",
    "leuco",
    "levai",
    "levam",
    "levas",
    "levei",
    "levem",
    "leves",
    "levez",
    "levou",
    "lexia",
    "lhama",
    "lhano",
    "liabo",
    "liame",
    "liana",
    "liase",
    "liaça",
    "libar",
    "libau",
    "libro",
    "libré",
    "libua",
    "liceu",
    "lichi",
    "licne",
    "licra",
    "lidai",
    "lidam",
    "lidas",
    "lidei",
    "lidem",
    "lides",
    "lidou",
    "ligai",
    "ligal",
    "ligam",
    "ligas",
    "ligeu",
    "light",
    "ligou",
    "ligue",
    "limai",
    "limam",
    "limar",
    "limas",
    "limei",
    "limem",
    "limes",
    "limou",
    "limpa",
    "limpe",
    "lince",
    "linde",
    "linfa",
    "linga",
    "links",
    "lipes",
    "liral",
    "liras",
    "lirão",
    "lisas",
    "lisim",
    "lisma",
    "lismo",
    "lisol",
    "lissa",
    "lista",
    "liste",
    "listo",
    "litar",
    "litor",
    "litão",
    "livel",
    "livor",
    "livra",
    "lixai",
    "lixam",
    "lixas",
    "lixei",
    "lixem",
    "lixes",
    "lixos",
    "lixou",
    "lixão",
    "lizar",
    "loasa",
    "lobal",
    "lobar",
    "lobaz",
    "lobby",
    "lobão",
    "locai",
    "locam",
    "locar",
    "locas",
    "locou",
    "locro",
    "lodos",
    "loess",
    "logar",
    "login",
    "logon",
    "logos",
    "logra",
    "logre",
    "logro",
    "logue",
    "loisa",
    "loiça",
    "lonas",
    "lonca",
    "londo",
    "lonja",
    "lopes",
    "loque",
    "lorca",
    "lorga",
    "lorpa",
    "lorto",
    "losna",
    "lotai",
    "lotam",
    "lotas",
    "lotei",
    "lotem",
    "lotes",
    "lotos",
    "lotou",
    "louro",
    "louva",
    "louve",
    "louvo",
    "luada",
    "luado",
    "luana",
    "lucas",
    "luchã",
    "lucra",
    "lucre",
    "lucão",
    "ludro",
    "luena",
    "lueta",
    "lufar",
    "lugre",
    "luita",
    "luito",
    "lulas",
    "lulão",
    "lumbo",
    "lumen",
    "lumes",
    "lumia",
    "lunda",
    "lundu",
    "lunga",
    "lupar",
    "lupas",
    "luque",
    "lurar",
    "lurda",
    "lurgo",
    "lurta",
    "lusas",
    "lusco",
    "lusos",
    "lutai",
    "lutam",
    "lutas",
    "lutei",
    "lutem",
    "lutes",
    "lutou",
    "luxar",
    "luxos",
    "luzam",
    "luzas",
    "luzem",
    "luzia",
    "luzio",
    "luzir",
    "luzis",
    "luziu",
    "luziê",
    "luína",
    "lycra",
    "lábil",
    "lácio",
    "lácon",
    "lájea",
    "lária",
    "lárix",
    "lásia",
    "láteo",
    "látex",
    "lâmia",
    "lâmio",
    "lâneo",
    "lânio",
    "légua",
    "lélia",
    "lépis",
    "léxis",
    "lêmur",
    "lêneo",
    "líber",
    "líbio",
    "lícia",
    "lício",
    "lídio",
    "líeis",
    "lígeo",
    "lígio",
    "lílio",
    "líneo",
    "líria",
    "lísio",
    "lítia",
    "lítio",
    "lítuo",
    "lívia",
    "lócus",
    "lódão",
    "lófio",
    "lógea",
    "lólio",
    "lóris",
    "lósia",
    "lóxia",
    "lúcio",
    "lúdio",
    "lúpia",
    "lúpus",
    "lúria",
    "lúteo",
    "mabiú",
    "macau",
    "macaá",
    "macaé",
    "macha",
    "machê",
    "macis",
    "macla",
    "macua",
    "macus",
    "madre",
    "maeta",
    "mafaú",
    "mafra",
    "mafua",
    "magal",
    "magda",
    "magma",
    "magno",
    "magné",
    "magoe",
    "magoo",
    "magra",
    "maias",
    "mailo",
    "maino",
    "mainá",
    "maios",
    "maire",
    "mairu",
    "maita",
    "maião",
    "majus",
    "malar",
    "malas",
    "malga",
    "malha",
    "malhe",
    "malho",
    "malim",
    "malta",
    "malto",
    "malva",
    "malvo",
    "mamai",
    "mamal",
    "mamam",
    "mamas",
    "mamba",
    "mambo",
    "mamei",
    "mamem",
    "mames",
    "mamoa",
    "mamou",
    "mamua",
    "mamum",
    "mamão",
    "manao",
    "manar",
    "manas",
    "manau",
    "manaí",
    "manca",
    "manda",
    "mande",
    "mandi",
    "mandu",
    "manel",
    "manes",
    "mango",
    "mangu",
    "manho",
    "manir",
    "manja",
    "manje",
    "manjo",
    "manju",
    "manos",
    "mantê",
    "manul",
    "manuê",
    "maona",
    "maori",
    "mapas",
    "maple",
    "mapuá",
    "mapão",
    "maque",
    "maqui",
    "marar",
    "maras",
    "marau",
    "marca",
    "marco",
    "marel",
    "mares",
    "marfi",
    "marga",
    "marge",
    "margo",
    "maria",
    "marim",
    "marma",
    "marmo",
    "marna",
    "marno",
    "marra",
    "marso",
    "marta",
    "marto",
    "maruá",
    "maruí",
    "marão",
    "masca",
    "masco",
    "maser",
    "masto",
    "matai",
    "matal",
    "matam",
    "matas",
    "match",
    "matei",
    "matem",
    "mater",
    "mates",
    "matia",
    "matis",
    "matou",
    "matsé",
    "matão",
    "matéu",
    "maula",
    "maura",
    "mauro",
    "maués",
    "mauís",
    "maxim",
    "mazar",
    "mazia",
    "maçal",
    "maçar",
    "maçom",
    "maços",
    "mação",
    "maíra",
    "maíça",
    "maúba",
    "maújo",
    "meaco",
    "meada",
    "meado",
    "meago",
    "meana",
    "meano",
    "meari",
    "meato",
    "meaça",
    "mecha",
    "meche",
    "mecru",
    "medem",
    "medes",
    "medis",
    "mediu",
    "medol",
    "medos",
    "medra",
    "medre",
    "medro",
    "megas",
    "meiri",
    "meião",
    "melai",
    "melam",
    "melar",
    "melas",
    "melca",
    "melei",
    "melem",
    "meles",
    "melez",
    "melfa",
    "melfo",
    "melga",
    "melgo",
    "meloa",
    "melou",
    "melra",
    "melro",
    "membi",
    "membé",
    "menar",
    "menas",
    "menga",
    "mengo",
    "menha",
    "menim",
    "menir",
    "mensa",
    "menso",
    "mente",
    "menti",
    "mento",
    "menus",
    "meolo",
    "meote",
    "meras",
    "merca",
    "merda",
    "merió",
    "merlo",
    "merlu",
    "merma",
    "mermo",
    "merua",
    "meruí",
    "mesas",
    "messa",
    "messe",
    "mesto",
    "mesão",
    "metam",
    "metas",
    "metei",
    "metem",
    "metes",
    "meteu",
    "metia",
    "metil",
    "metim",
    "metiê",
    "mexam",
    "mexas",
    "mexei",
    "mexem",
    "mexes",
    "mexeu",
    "mexia",
    "mexão",
    "mezzo",
    "meçam",
    "meças",
    "meúle",
    "miada",
    "miado",
    "miais",
    "miana",
    "miara",
    "miava",
    "micar",
    "micas",
    "micha",
    "micho",
    "michê",
    "micos",
    "micra",
    "micro",
    "micto",
    "midas",
    "mieis",
    "mielo",
    "migar",
    "migas",
    "migma",
    "migra",
    "migre",
    "migro",
    "miina",
    "miite",
    "mijai",
    "mijam",
    "mijar",
    "mijas",
    "mijei",
    "mijem",
    "mijes",
    "mijos",
    "mijou",
    "mijuí",
    "mijão",
    "milde",
    "mimai",
    "mimam",
    "mimas",
    "mimei",
    "mimem",
    "mimes",
    "mimos",
    "mimou",
    "minai",
    "minam",
    "minar",
    "minas",
    "minaz",
    "minei",
    "minem",
    "mines",
    "minga",
    "mingo",
    "mingu",
    "minie",
    "minis",
    "minor",
    "minou",
    "minta",
    "minto",
    "mioma",
    "miose",
    "mioto",
    "mique",
    "mirai",
    "miram",
    "miras",
    "mirei",
    "mirem",
    "mires",
    "mirou",
    "mirra",
    "mirro",
    "mirto",
    "mirzá",
    "mirão",
    "misgo",
    "misse",
    "missô",
    "miste",
    "mites",
    "mitis",
    "mitra",
    "mitro",
    "mitua",
    "mixar",
    "mixer",
    "mixia",
    "mixió",
    "mixná",
    "mixto",
    "miúda",
    "miúde",
    "miúfa",
    "miúlo",
    "miúra",
    "miúro",
    "miúva",
    "miúça",
    "mnese",
    "moado",
    "moafa",
    "moais",
    "mocar",
    "mocha",
    "moche",
    "mocho",
    "mocoa",
    "mocsa",
    "mocuí",
    "modal",
    "modem",
    "modus",
    "moega",
    "moeis",
    "moera",
    "moeta",
    "mofai",
    "mofam",
    "mofar",
    "mofas",
    "mofei",
    "mofem",
    "mofes",
    "mofos",
    "mofou",
    "mogno",
    "mogol",
    "mogor",
    "mogão",
    "moico",
    "moina",
    "moira",
    "moiro",
    "moiré",
    "moito",
    "moião",
    "mojar",
    "molal",
    "molar",
    "molda",
    "molde",
    "moldo",
    "moles",
    "molha",
    "molhe",
    "molim",
    "monas",
    "monco",
    "monda",
    "mondo",
    "mondé",
    "mongi",
    "mongo",
    "mongu",
    "monha",
    "monho",
    "monhé",
    "monir",
    "monja",
    "monos",
    "monso",
    "monta",
    "monto",
    "moque",
    "moqui",
    "morai",
    "moram",
    "moras",
    "morbo",
    "morca",
    "morda",
    "morde",
    "mordi",
    "mordo",
    "morei",
    "morem",
    "mores",
    "morfe",
    "morfo",
    "moria",
    "moril",
    "morim",
    "mormo",
    "morou",
    "morra",
    "morre",
    "morri",
    "morsa",
    "morse",
    "morso",
    "morta",
    "morte",
    "morão",
    "mosbá",
    "mosco",
    "mossa",
    "mossi",
    "mosto",
    "motes",
    "motos",
    "motum",
    "mouco",
    "moura",
    "mouro",
    "mouse",
    "mouta",
    "movam",
    "movas",
    "movei",
    "movem",
    "moves",
    "moveu",
    "movia",
    "moxar",
    "moádi",
    "moças",
    "moços",
    "moção",
    "moíam",
    "moías",
    "moído",
    "muaca",
    "muafa",
    "muafo",
    "muaje",
    "muana",
    "muane",
    "muave",
    "mucha",
    "mucol",
    "mucor",
    "mucro",
    "mucuí",
    "mudai",
    "mudam",
    "mudas",
    "mudei",
    "mudem",
    "mudes",
    "mudez",
    "mudir",
    "mudos",
    "mudou",
    "mudra",
    "muela",
    "muele",
    "muene",
    "muere",
    "mufla",
    "muflo",
    "mufti",
    "mufuí",
    "mugem",
    "muges",
    "mugia",
    "mugir",
    "mugis",
    "mugiu",
    "mugre",
    "mujam",
    "mujas",
    "mulas",
    "mulei",
    "muleu",
    "mulme",
    "mulsa",
    "mulso",
    "multe",
    "multi",
    "multo",
    "mulum",
    "mumbé",
    "munda",
    "mundé",
    "munem",
    "munes",
    "munga",
    "mungo",
    "mungu",
    "munha",
    "munho",
    "munia",
    "munir",
    "munis",
    "muniu",
    "munto",
    "muolo",
    "muque",
    "murai",
    "muram",
    "murar",
    "muras",
    "murco",
    "murei",
    "murem",
    "mures",
    "murou",
    "murra",
    "murso",
    "murta",
    "murua",
    "muruí",
    "murzá",
    "murça",
    "musal",
    "musca",
    "musco",
    "musmé",
    "musse",
    "mussó",
    "mutia",
    "mutom",
    "mutra",
    "mutum",
    "muuba",
    "muviú",
    "muári",
    "muçum",
    "mácea",
    "mádia",
    "mágis",
    "mároo",
    "mátri",
    "mávia",
    "mécia",
    "médão",
    "méleo",
    "mélia",
    "méloe",
    "mésio",
    "méson",
    "mésua",
    "mício",
    "míleo",
    "mínio",
    "míris",
    "móbil",
    "módio",
    "mólio",
    "móqua",
    "múcua",
    "múgil",
    "múleo",
    "múndi",
    "múnus",
    "múrex",
    "múria",
    "múzua",
    "müsli",
    "naali",
    "nabal",
    "nabla",
    "nablo",
    "nabos",
    "nacho",
    "nacos",
    "nacre",
    "nadai",
    "nadam",
    "nadas",
    "nadei",
    "nadem",
    "nades",
    "nadir",
    "nados",
    "nadou",
    "nafil",
    "nafir",
    "nafta",
    "nagar",
    "nagoa",
    "nagor",
    "nagul",
    "nagão",
    "naibe",
    "naide",
    "naifa",
    "naife",
    "naifo",
    "naira",
    "naire",
    "najas",
    "nakfa",
    "nalga",
    "nalgo",
    "namaz",
    "nambi",
    "nambu",
    "nanai",
    "nanal",
    "nanam",
    "nanar",
    "nanas",
    "nandi",
    "nando",
    "nandu",
    "nanei",
    "nanem",
    "nanes",
    "nanga",
    "nanja",
    "nanou",
    "nanós",
    "naraz",
    "narco",
    "nardo",
    "narlo",
    "narra",
    "narre",
    "narro",
    "nasce",
    "nasci",
    "nassa",
    "nasso",
    "nasça",
    "nasço",
    "natas",
    "natio",
    "natos",
    "natro",
    "nauas",
    "nauro",
    "nauta",
    "navaó",
    "navim",
    "nazis",
    "nebri",
    "necas",
    "necra",
    "necro",
    "necto",
    "nefas",
    "nefro",
    "negai",
    "negam",
    "negas",
    "negou",
    "negra",
    "negue",
    "negus",
    "negão",
    "nelas",
    "neldo",
    "neles",
    "nemba",
    "nembo",
    "nemeu",
    "nende",
    "nendi",
    "nenho",
    "nente",
    "neque",
    "neres",
    "nerol",
    "nerto",
    "nesga",
    "nessa",
    "nesse",
    "nesta",
    "neste",
    "netas",
    "netos",
    "neuma",
    "neura",
    "neuri",
    "neuro",
    "nevai",
    "nevam",
    "nevas",
    "nevei",
    "nevem",
    "neves",
    "nevou",
    "nevri",
    "nevão",
    "nexos",
    "ngola",
    "nhaca",
    "nhati",
    "nhato",
    "nhele",
    "niaia",
    "niboé",
    "nicam",
    "nicar",
    "nicas",
    "nicha",
    "nicol",
    "nicto",
    "nidor",
    "nielo",
    "nifão",
    "nigra",
    "nilas",
    "nilgó",
    "nimas",
    "nimbo",
    "ninai",
    "ninam",
    "ninas",
    "ninei",
    "ninem",
    "nines",
    "ninha",
    "ninou",
    "niopó",
    "niple",
    "nipão",
    "nique",
    "nisca",
    "nisco",
    "nisei",
    "nitro",
    "nobel",
    "nocha",
    "nodal",
    "nodar",
    "nodos",
    "noema",
    "noese",
    "noete",
    "nogai",
    "nogal",
    "nogão",
    "noira",
    "noise",
    "noive",
    "noivo",
    "nomeá",
    "nonal",
    "nonas",
    "nonde",
    "nondo",
    "nones",
    "nonga",
    "nopal",
    "noque",
    "noras",
    "norso",
    "norça",
    "nosco",
    "nosso",
    "notai",
    "notal",
    "notam",
    "notas",
    "notei",
    "notem",
    "notes",
    "notou",
    "noute",
    "noval",
    "novar",
    "novel",
    "noves",
    "noxal",
    "nozul",
    "nucal",
    "nuelo",
    "nueza",
    "nulas",
    "numas",
    "numbu",
    "numes",
    "nundo",
    "nunes",
    "nurse",
    "nuruz",
    "nutar",
    "nutra",
    "nutre",
    "nutri",
    "nutro",
    "nução",
    "nylon",
    "nábão",
    "nácar",
    "nágua",
    "násio",
    "nássi",
    "násua",
    "nátia",
    "návia",
    "náxia",
    "náxio",
    "názir",
    "nègre",
    "nébel",
    "nédio",
    "nélia",
    "néons",
    "néper",
    "népia",
    "néria",
    "nério",
    "nênia",
    "nênio",
    "níger",
    "nígua",
    "nílio",
    "nímio",
    "níton",
    "níveo",
    "nódio",
    "nódoa",
    "nóias",
    "nómos",
    "nória",
    "nório",
    "nóvea",
    "nóxio",
    "nônio",
    "núbil",
    "núbio",
    "núcio",
    "núfar",
    "númen",
    "núveo",
    "núxia",
    "obeba",
    "obesa",
    "oboaz",
    "obori",
    "obrar",
    "obsia",
    "obsta",
    "obste",
    "obsto",
    "obtém",
    "obvie",
    "obvim",
    "obvir",
    "obvém",
    "ocado",
    "ocapi",
    "ocara",
    "ocaso",
    "ocelo",
    "ochas",
    "ocrem",
    "octal",
    "octil",
    "ocupa",
    "ocupe",
    "ocupo",
    "odara",
    "odeia",
    "odeie",
    "odeio",
    "odeom",
    "odeão",
    "odiai",
    "odiei",
    "odila",
    "odina",
    "odiou",
    "odito",
    "odoro",
    "odres",
    "odéon",
    "ofaié",
    "ofega",
    "ofego",
    "ofeso",
    "ofira",
    "ofita",
    "ofite",
    "ofito",
    "ogamo",
    "ogano",
    "ogiva",
    "ogros",
    "oiara",
    "oigar",
    "oirar",
    "oitão",
    "oiçam",
    "olada",
    "olaia",
    "olaré",
    "olear",
    "oleno",
    "oleol",
    "olhai",
    "olhal",
    "olham",
    "olhas",
    "olhei",
    "olhem",
    "olhes",
    "olhou",
    "olhão",
    "oligo",
    "olina",
    "olira",
    "oliva",
    "olivo",
    "olori",
    "omado",
    "omalá",
    "omani",
    "omaso",
    "ombrã",
    "omelê",
    "omiri",
    "omita",
    "omite",
    "omiti",
    "omito",
    "omnes",
    "omolu",
    "ondar",
    "ondim",
    "onera",
    "onere",
    "onero",
    "oneta",
    "onfra",
    "onfuá",
    "onixe",
    "onças",
    "oonim",
    "opaba",
    "opaca",
    "opado",
    "opala",
    "opere",
    "opero",
    "opiar",
    "opilo",
    "opimo",
    "opina",
    "opine",
    "opino",
    "oporá",
    "optai",
    "optam",
    "optas",
    "optei",
    "optem",
    "optes",
    "optou",
    "opõem",
    "opões",
    "oqueá",
    "oquim",
    "oraca",
    "orada",
    "orado",
    "orago",
    "orais",
    "orara",
    "orate",
    "orava",
    "orcas",
    "orcei",
    "orcem",
    "orces",
    "orear",
    "oreia",
    "oreis",
    "oribi",
    "orite",
    "orixá",
    "orlai",
    "orlam",
    "orlar",
    "orlas",
    "orlei",
    "orlem",
    "orles",
    "orleã",
    "orlom",
    "orlou",
    "ornai",
    "ornam",
    "ornar",
    "ornas",
    "ornei",
    "ornem",
    "ornes",
    "ornis",
    "ornou",
    "orobó",
    "oropa",
    "orqui",
    "orucó",
    "orçai",
    "orçam",
    "orçar",
    "orçaz",
    "orçou",
    "oscar",
    "oscos",
    "osmia",
    "osmol",
    "ostai",
    "ostro",
    "otelo",
    "otita",
    "otite",
    "otona",
    "otoni",
    "otose",
    "ototó",
    "ougar",
    "ourar",
    "ouros",
    "ourém",
    "ousai",
    "ousam",
    "ousas",
    "ousei",
    "ousem",
    "ouses",
    "ousia",
    "ousio",
    "ousou",
    "outar",
    "outas",
    "outão",
    "ouvem",
    "ouves",
    "ouvia",
    "ouvis",
    "ouviu",
    "ouçam",
    "ouças",
    "oução",
    "ovada",
    "ovado",
    "ovais",
    "ovala",
    "oveva",
    "ovino",
    "ovula",
    "oxeol",
    "oxida",
    "oxide",
    "oxima",
    "oxina",
    "oxoce",
    "oxura",
    "ozena",
    "ozone",
    "ozono",
    "oçãim",
    "oídio",
    "paari",
    "pacas",
    "pacau",
    "pacaí",
    "pacho",
    "pachã",
    "pacol",
    "pacta",
    "pacto",
    "pacão",
    "padeu",
    "padês",
    "paetê",
    "pagai",
    "pagas",
    "pagel",
    "pagem",
    "pager",
    "pagou",
    "pague",
    "pagão",
    "paica",
    "paigc",
    "paina",
    "paios",
    "paira",
    "paire",
    "pairo",
    "paivo",
    "paixa",
    "paião",
    "pajem",
    "pajeú",
    "pajão",
    "pajés",
    "palar",
    "palas",
    "palau",
    "paleo",
    "palio",
    "palop",
    "palor",
    "palpo",
    "palra",
    "palão",
    "pamas",
    "pambo",
    "pamoá",
    "pampo",
    "panal",
    "panar",
    "panca",
    "panco",
    "pando",
    "panes",
    "panga",
    "pango",
    "panha",
    "panja",
    "panri",
    "panró",
    "pantó",
    "panão",
    "paolu",
    "papai",
    "papal",
    "papam",
    "papar",
    "papas",
    "papei",
    "papem",
    "paper",
    "papes",
    "papos",
    "papou",
    "papua",
    "papus",
    "papão",
    "paqui",
    "paquã",
    "paquê",
    "parai",
    "paral",
    "param",
    "paras",
    "parau",
    "parca",
    "parei",
    "parem",
    "pares",
    "parga",
    "pargo",
    "paria",
    "paris",
    "pariu",
    "parka",
    "parla",
    "parné",
    "parol",
    "parou",
    "parra",
    "parro",
    "parse",
    "parta",
    "parti",
    "parum",
    "paruí",
    "parva",
    "parvi",
    "parvu",
    "parão",
    "pasep",
    "pasma",
    "pasme",
    "pasmo",
    "passa",
    "passe",
    "paste",
    "patau",
    "pataz",
    "pataí",
    "patel",
    "patim",
    "patos",
    "patoá",
    "patuá",
    "patão",
    "patém",
    "patês",
    "paual",
    "pauda",
    "pauis",
    "paula",
    "paulo",
    "pause",
    "pauso",
    "paute",
    "pauto",
    "pavia",
    "pavoa",
    "pavês",
    "paxaú",
    "pazes",
    "pazão",
    "paços",
    "paíba",
    "paúna",
    "paúra",
    "pcdob",
    "peado",
    "pealo",
    "peaça",
    "pecai",
    "pecha",
    "pecou",
    "pecém",
    "pedem",
    "pedes",
    "pedia",
    "pedis",
    "pediu",
    "pegai",
    "pegam",
    "pegas",
    "pegma",
    "pegos",
    "pegou",
    "pegue",
    "pegão",
    "peias",
    "peida",
    "peide",
    "peido",
    "peina",
    "peita",
    "peite",
    "peito",
    "pejar",
    "pelai",
    "pelam",
    "pelar",
    "pelas",
    "pelei",
    "peles",
    "pelma",
    "pelor",
    "pelou",
    "pelta",
    "pelve",
    "pelão",
    "pelém",
    "pemba",
    "pemom",
    "penai",
    "penam",
    "penas",
    "penca",
    "pence",
    "penco",
    "penda",
    "pende",
    "pendi",
    "pendo",
    "penei",
    "penem",
    "penes",
    "pengó",
    "penha",
    "penia",
    "penol",
    "penou",
    "pensa",
    "pense",
    "penso",
    "penão",
    "peona",
    "pepel",
    "peplo",
    "peque",
    "pequi",
    "peral",
    "peras",
    "perau",
    "perca",
    "perce",
    "perco",
    "perde",
    "perdi",
    "peres",
    "pereá",
    "perla",
    "perno",
    "perné",
    "perol",
    "peroá",
    "perra",
    "perro",
    "perum",
    "perus",
    "pesai",
    "pesam",
    "pesas",
    "pesei",
    "pesem",
    "peses",
    "pesga",
    "pesos",
    "pesou",
    "pesto",
    "petal",
    "petar",
    "petim",
    "petiz",
    "petiá",
    "petiú",
    "petra",
    "petum",
    "petão",
    "petém",
    "pexão",
    "pezão",
    "peçam",
    "peças",
    "peúco",
    "peúga",
    "peúle",
    "peúva",
    "piaba",
    "piado",
    "piafé",
    "piaga",
    "piais",
    "pialo",
    "piana",
    "piapé",
    "piara",
    "piauí",
    "piava",
    "piaçá",
    "piaçó",
    "picai",
    "pical",
    "picam",
    "picas",
    "picaú",
    "picha",
    "piche",
    "pichi",
    "picho",
    "picoa",
    "picos",
    "picou",
    "picto",
    "picum",
    "picuá",
    "picuí",
    "picão",
    "pidão",
    "piego",
    "pieis",
    "piela",
    "pielo",
    "piese",
    "piezo",
    "pifai",
    "pifam",
    "pifar",
    "pifas",
    "pifei",
    "pifem",
    "pifes",
    "pifou",
    "pifre",
    "pifão",
    "pigal",
    "pigar",
    "pigma",
    "pigro",
    "piina",
    "pilas",
    "pilau",
    "pilhe",
    "pilho",
    "pilim",
    "pilra",
    "pilão",
    "piléu",
    "pimba",
    "pimbo",
    "pinar",
    "pinas",
    "pince",
    "pinda",
    "pindi",
    "pinel",
    "pinha",
    "pinhé",
    "pinte",
    "pinto",
    "pinço",
    "pinéu",
    "pioca",
    "pioié",
    "piola",
    "piona",
    "piora",
    "piore",
    "pioró",
    "piose",
    "pipal",
    "pipar",
    "pipas",
    "pipes",
    "pipia",
    "pipio",
    "pipiu",
    "pipra",
    "pique",
    "piqui",
    "piraí",
    "piraú",
    "pirca",
    "pirei",
    "pireu",
    "pirex",
    "pirgo",
    "piria",
    "piriz",
    "pirou",
    "piroá",
    "piruá",
    "pisai",
    "pisam",
    "pisas",
    "pisca",
    "pisco",
    "pisei",
    "pisem",
    "pises",
    "pisos",
    "pisou",
    "pisão",
    "pitar",
    "pitiú",
    "pitom",
    "pituã",
    "pituí",
    "pitão",
    "pitém",
    "pitéu",
    "pivôs",
    "pixel",
    "pixuá",
    "pixéu",
    "piões",
    "piúba",
    "piúca",
    "piúgo",
    "piúna",
    "piúva",
    "placê",
    "plaga",
    "plana",
    "plane",
    "plani",
    "plano",
    "platô",
    "plexo",
    "plica",
    "ploce",
    "plomo",
    "plota",
    "plote",
    "ploto",
    "pluga",
    "plugo",
    "plumo",
    "plush",
    "pluto",
    "poaia",
    "poare",
    "poaçu",
    "pobra",
    "pocar",
    "pocha",
    "poche",
    "pocho",
    "podai",
    "podal",
    "podam",
    "podas",
    "podei",
    "podem",
    "podes",
    "podia",
    "podoa",
    "podou",
    "podão",
    "podói",
    "poejo",
    "poial",
    "poiar",
    "poisa",
    "poise",
    "poiso",
    "poita",
    "pojar",
    "polau",
    "polca",
    "polem",
    "poleá",
    "polha",
    "polho",
    "polia",
    "poliu",
    "polje",
    "polme",
    "polmo",
    "polos",
    "polpo",
    "polui",
    "polés",
    "pombe",
    "pomes",
    "pomos",
    "poncã",
    "poncó",
    "ponde",
    "pondo",
    "ponga",
    "pongó",
    "ponha",
    "ponho",
    "ponis",
    "ponjé",
    "ponom",
    "popiã",
    "popão",
    "poque",
    "porei",
    "pores",
    "poria",
    "porno",
    "porra",
    "porro",
    "porte",
    "porto",
    "porás",
    "porão",
    "posai",
    "posam",
    "posas",
    "posca",
    "posei",
    "posem",
    "poses",
    "posou",
    "possa",
    "posso",
    "posta",
    "potes",
    "potin",
    "potra",
    "potro",
    "poula",
    "poule",
    "poulo",
    "poupa",
    "poupe",
    "poupo",
    "pousa",
    "pouse",
    "pouta",
    "povoe",
    "povoo",
    "povão",
    "poçal",
    "poças",
    "prais",
    "prajá",
    "prama",
    "prana",
    "prase",
    "pravo",
    "prear",
    "prega",
    "preia",
    "prelo",
    "prema",
    "preme",
    "premi",
    "preso",
    "previ",
    "prevê",
    "preza",
    "preze",
    "prezo",
    "prima",
    "prime",
    "prino",
    "prior",
    "prise",
    "priva",
    "prive",
    "privo",
    "prião",
    "proar",
    "proas",
    "proba",
    "probo",
    "proco",
    "procá",
    "profs",
    "proiz",
    "prono",
    "proso",
    "proto",
    "prove",
    "provi",
    "provo",
    "pruca",
    "pruga",
    "pruir",
    "pruma",
    "pruno",
    "préon",
    "príon",
    "psaro",
    "pseca",
    "psico",
    "psila",
    "psilo",
    "psoas",
    "psoco",
    "psora",
    "ptdob",
    "ptena",
    "ptero",
    "ptose",
    "puada",
    "puado",
    "puava",
    "puaço",
    "puaçu",
    "pubar",
    "pucha",
    "pucho",
    "puctó",
    "puder",
    "puela",
    "puera",
    "pugna",
    "pujar",
    "pulai",
    "pulam",
    "pulas",
    "pulei",
    "pulem",
    "pules",
    "pulgo",
    "pulha",
    "pulim",
    "pulos",
    "pulou",
    "pulsa",
    "pulse",
    "pulão",
    "pumba",
    "punam",
    "punas",
    "pundé",
    "punem",
    "punes",
    "punga",
    "punha",
    "punia",
    "punis",
    "puniu",
    "pupas",
    "pural",
    "puras",
    "purga",
    "purgo",
    "puris",
    "puros",
    "puruí",
    "puser",
    "putal",
    "putas",
    "putos",
    "putto",
    "puviá",
    "puxai",
    "puxam",
    "puxas",
    "puxei",
    "puxem",
    "puxes",
    "puxou",
    "puíam",
    "puías",
    "puído",
    "puíra",
    "puíta",
    "pádoa",
    "pádua",
    "páfia",
    "páfio",
    "pálea",
    "párea",
    "pário",
    "pársi",
    "páteo",
    "páter",
    "pânax",
    "pânus",
    "pélio",
    "péone",
    "pépia",
    "pênis",
    "pícea",
    "píceo",
    "píero",
    "pífio",
    "píjin",
    "píleo",
    "píneo",
    "pínus",
    "píper",
    "píqua",
    "píseo",
    "písin",
    "pítia",
    "pítio",
    "píton",
    "pódex",
    "pólex",
    "pólio",
    "pólis",
    "pólux",
    "pório",
    "pótea",
    "póvoa",
    "púbis",
    "púgil",
    "púlex",
    "quado",
    "quaga",
    "qualé",
    "quark",
    "quart",
    "quaró",
    "quasa",
    "quati",
    "quatá",
    "queba",
    "queca",
    "quecé",
    "quede",
    "quedo",
    "quela",
    "quelé",
    "quemi",
    "quena",
    "queno",
    "quepe",
    "quera",
    "queri",
    "quero",
    "querê",
    "queto",
    "queza",
    "quiaz",
    "quiba",
    "quicé",
    "quija",
    "quile",
    "quili",
    "quimo",
    "quimé",
    "quino",
    "quios",
    "quipo",
    "quipá",
    "quipé",
    "quiri",
    "quiro",
    "quita",
    "quite",
    "quiti",
    "quito",
    "quiuí",
    "quivi",
    "quixa",
    "quixó",
    "quiza",
    "quiço",
    "quote",
    "quépi",
    "rabal",
    "rabaz",
    "rabdo",
    "rabel",
    "rabia",
    "rabil",
    "rabos",
    "rabão",
    "racha",
    "rache",
    "racho",
    "racle",
    "racum",
    "radia",
    "radie",
    "radão",
    "rafar",
    "raglã",
    "raiai",
    "raial",
    "raiam",
    "raias",
    "raide",
    "raiei",
    "raiem",
    "raies",
    "raiom",
    "raiou",
    "raivó",
    "raião",
    "rajai",
    "rajam",
    "rajar",
    "rajas",
    "rajei",
    "rajem",
    "rajes",
    "rajou",
    "rajão",
    "ralai",
    "ralam",
    "ralas",
    "ralei",
    "ralem",
    "rales",
    "ralha",
    "ralhe",
    "ralho",
    "rally",
    "ralos",
    "ralou",
    "ralão",
    "ramal",
    "ramas",
    "rambo",
    "ramno",
    "ranca",
    "ranfo",
    "range",
    "rangi",
    "rango",
    "ranha",
    "ranho",
    "ranja",
    "ranjo",
    "ranço",
    "rapai",
    "rapam",
    "rapar",
    "rapas",
    "rapei",
    "rapel",
    "rapem",
    "rapes",
    "rapou",
    "rapta",
    "rapte",
    "rapto",
    "rapão",
    "raque",
    "rarar",
    "raros",
    "rasar",
    "rasas",
    "rasca",
    "rasco",
    "rasga",
    "rasgo",
    "rasos",
    "raspa",
    "raspe",
    "raspo",
    "rasta",
    "raste",
    "rasto",
    "rasão",
    "ratan",
    "ratar",
    "ratas",
    "ratel",
    "rates",
    "ratim",
    "ratio",
    "ratos",
    "ratão",
    "rausa",
    "rauso",
    "razia",
    "raças",
    "raíta",
    "reage",
    "reagi",
    "reaja",
    "reajo",
    "reame",
    "reata",
    "reate",
    "reato",
    "reaça",
    "rebar",
    "rebel",
    "reboa",
    "reboe",
    "reboo",
    "rebém",
    "recai",
    "recar",
    "rechã",
    "rechô",
    "recru",
    "recta",
    "recto",
    "recua",
    "recue",
    "recão",
    "recém",
    "redar",
    "redil",
    "redox",
    "redra",
    "reduz",
    "redém",
    "refaz",
    "refez",
    "refia",
    "refil",
    "refis",
    "refiz",
    "refle",
    "regai",
    "regal",
    "regam",
    "regas",
    "regei",
    "regem",
    "reges",
    "regeu",
    "regma",
    "regou",
    "regre",
    "regro",
    "regue",
    "reich",
    "reide",
    "reima",
    "reina",
    "reine",
    "reira",
    "reivó",
    "reixa",
    "rejam",
    "rejas",
    "rejão",
    "relar",
    "relax",
    "releu",
    "relfa",
    "relha",
    "relho",
    "relia",
    "relou",
    "reluz",
    "relão",
    "remai",
    "remam",
    "remas",
    "remei",
    "remel",
    "remem",
    "remes",
    "remia",
    "remir",
    "remis",
    "remiu",
    "remix",
    "remoa",
    "remoo",
    "remos",
    "remou",
    "remói",
    "renal",
    "renas",
    "rende",
    "rendi",
    "rendo",
    "renga",
    "renge",
    "rengo",
    "renhi",
    "renta",
    "renui",
    "renão",
    "repes",
    "repte",
    "repto",
    "repus",
    "repôs",
    "repõe",
    "reque",
    "reses",
    "resma",
    "respe",
    "respo",
    "ressa",
    "resta",
    "reste",
    "retal",
    "retar",
    "retor",
    "retos",
    "retre",
    "retém",
    "reuma",
    "reuni",
    "revel",
    "revez",
    "revia",
    "revim",
    "revir",
    "reviu",
    "revoo",
    "revém",
    "rexio",
    "rezai",
    "rezam",
    "rezas",
    "rezei",
    "rezem",
    "rezes",
    "rezou",
    "rezão",
    "reúna",
    "reúne",
    "reúno",
    "riais",
    "riana",
    "ribar",
    "ribas",
    "ribes",
    "ricas",
    "ricto",
    "rides",
    "ridor",
    "rifai",
    "rifam",
    "rifar",
    "rifas",
    "rifei",
    "rifem",
    "rifes",
    "rifle",
    "rifou",
    "rifte",
    "rifão",
    "rigol",
    "rijal",
    "rijar",
    "rijos",
    "rijão",
    "rilha",
    "rimai",
    "rimam",
    "rimas",
    "rimei",
    "rimem",
    "rimes",
    "rimos",
    "rimou",
    "rinal",
    "rindo",
    "rinha",
    "rinto",
    "ripal",
    "ripar",
    "ripas",
    "ripia",
    "rique",
    "riram",
    "riras",
    "rirei",
    "rirem",
    "rires",
    "riria",
    "rirão",
    "risca",
    "risse",
    "risso",
    "risão",
    "ritão",
    "rixar",
    "rixas",
    "rizar",
    "rizes",
    "riçar",
    "riçol",
    "riúta",
    "roais",
    "robaz",
    "roble",
    "robot",
    "rocal",
    "rocaz",
    "rocei",
    "rocem",
    "roces",
    "rocim",
    "rocló",
    "rocão",
    "rodai",
    "rodal",
    "rodam",
    "rodas",
    "rodei",
    "rodem",
    "rodes",
    "rodim",
    "rodos",
    "rodou",
    "rodão",
    "roeis",
    "roera",
    "rogai",
    "rogal",
    "rogam",
    "rogar",
    "rogas",
    "rogou",
    "rogue",
    "rojar",
    "rojão",
    "rolai",
    "rolam",
    "rolas",
    "rolda",
    "rolei",
    "rolem",
    "roles",
    "rolho",
    "rolim",
    "rolou",
    "rolão",
    "romeu",
    "rompa",
    "rompe",
    "rompi",
    "rompo",
    "romão",
    "romãs",
    "ronca",
    "ronco",
    "ronda",
    "ronde",
    "rondó",
    "ronga",
    "rongó",
    "ronha",
    "rontó",
    "roque",
    "rorar",
    "rosal",
    "rosar",
    "roses",
    "rosna",
    "rosne",
    "rosno",
    "rosti",
    "rosão",
    "rotam",
    "rotar",
    "rotas",
    "rotim",
    "rotor",
    "rotos",
    "rouba",
    "roube",
    "rouge",
    "round",
    "roxas",
    "roxos",
    "roçai",
    "roçam",
    "roças",
    "roçou",
    "roíam",
    "roías",
    "roído",
    "ruano",
    "ruaça",
    "rubim",
    "rubis",
    "rublo",
    "rubra",
    "ruche",
    "rudes",
    "rudez",
    "rufai",
    "rufam",
    "rufar",
    "rufas",
    "rufei",
    "rufem",
    "rufes",
    "rufia",
    "ruflo",
    "rufos",
    "rufou",
    "rugai",
    "rugam",
    "rugar",
    "rugas",
    "rugby",
    "rugem",
    "ruges",
    "rugia",
    "rugis",
    "rugiu",
    "rugou",
    "rugue",
    "ruins",
    "ruirá",
    "rujam",
    "rujas",
    "rular",
    "rules",
    "rumai",
    "rumam",
    "rumar",
    "rumas",
    "rumba",
    "rumbo",
    "rumei",
    "rumem",
    "rumes",
    "rumou",
    "rumpi",
    "runas",
    "runcó",
    "rundo",
    "ruolz",
    "rupar",
    "rupia",
    "rupul",
    "rusco",
    "rusga",
    "rusma",
    "russa",
    "ruste",
    "rusto",
    "rutim",
    "ruçar",
    "ruíam",
    "ruías",
    "ruído",
    "rácio",
    "rádon",
    "ráfia",
    "rágio",
    "ráqui",
    "râmeo",
    "rébus",
    "récio",
    "rédia",
    "régia",
    "régie",
    "régio",
    "rénio",
    "révoa",
    "réxia",
    "rício",
    "ríeis",
    "rígel",
    "rípio",
    "rítio",
    "ríton",
    "róber",
    "róbur",
    "rócio",
    "ródio",
    "rópia",
    "rósea",
    "róseo",
    "rótia",
    "rúbeo",
    "rúbia",
    "rúfio",
    "rúgbi",
    "rúgio",
    "rúmen",
    "sabal",
    "sabat",
    "sabei",
    "sabem",
    "sabes",
    "sabeu",
    "sabin",
    "sabir",
    "sabiú",
    "sable",
    "sabra",
    "sabre",
    "sacal",
    "sacam",
    "sacas",
    "sacaí",
    "sacha",
    "sacho",
    "sachê",
    "sacia",
    "sacie",
    "sacio",
    "sacos",
    "sacou",
    "sacre",
    "sacta",
    "sacuê",
    "sacão",
    "sadrá",
    "sadão",
    "saeta",
    "safai",
    "safam",
    "safar",
    "safas",
    "safei",
    "safem",
    "safes",
    "safio",
    "safou",
    "safre",
    "safro",
    "safão",
    "sagas",
    "sages",
    "sagez",
    "sagra",
    "sagre",
    "sagro",
    "sagui",
    "sagum",
    "saguá",
    "saial",
    "saiam",
    "saias",
    "saiba",
    "saibo",
    "saide",
    "saiga",
    "saijé",
    "saino",
    "sainé",
    "saipé",
    "sairi",
    "sairá",
    "sairé",
    "saivá",
    "saixê",
    "saião",
    "salaz",
    "salda",
    "salde",
    "saldo",
    "salga",
    "salgo",
    "salol",
    "salpa",
    "salso",
    "salta",
    "salte",
    "salva",
    "salve",
    "salvo",
    "salém",
    "sambe",
    "sambo",
    "samos",
    "sampa",
    "samur",
    "samão",
    "sanai",
    "sanam",
    "sanas",
    "sanca",
    "sanco",
    "sande",
    "sanei",
    "sanem",
    "sanes",
    "sanga",
    "sango",
    "sanja",
    "sanou",
    "sansa",
    "sanza",
    "sapal",
    "sapam",
    "sapar",
    "sapos",
    "sapro",
    "sapuá",
    "sapão",
    "saqui",
    "sarai",
    "saram",
    "saran",
    "saras",
    "sarco",
    "sardo",
    "sarei",
    "sarem",
    "sares",
    "sarga",
    "sargo",
    "saria",
    "sarin",
    "sarja",
    "sarné",
    "saros",
    "sarou",
    "saroé",
    "sarra",
    "sarta",
    "saruá",
    "saruê",
    "sarão",
    "sarça",
    "sassa",
    "sauim",
    "sauiá",
    "sauni",
    "saupé",
    "saurá",
    "saval",
    "saviá",
    "saxão",
    "sazão",
    "saíco",
    "saído",
    "saíta",
    "saúba",
    "saúco",
    "saúda",
    "saúdo",
    "saúva",
    "scone",
    "scope",
    "score",
    "seada",
    "sebel",
    "sebes",
    "sebos",
    "secai",
    "secam",
    "secas",
    "secos",
    "secou",
    "secta",
    "secto",
    "sedal",
    "sedan",
    "sedar",
    "sedas",
    "seder",
    "sedes",
    "sedia",
    "sedie",
    "sedio",
    "seduz",
    "sedão",
    "sedém",
    "sefia",
    "segar",
    "segue",
    "segui",
    "segão",
    "seibo",
    "seice",
    "seima",
    "seios",
    "seira",
    "seive",
    "seivo",
    "seixa",
    "seixo",
    "seiça",
    "sejam",
    "sejas",
    "selai",
    "selam",
    "selas",
    "selei",
    "selem",
    "seles",
    "selha",
    "selou",
    "selão",
    "semba",
    "semel",
    "senal",
    "senas",
    "senda",
    "sendo",
    "senga",
    "sengo",
    "senho",
    "senil",
    "senis",
    "senra",
    "sensu",
    "senta",
    "sente",
    "senti",
    "sento",
    "sepse",
    "septa",
    "septo",
    "seque",
    "seral",
    "serei",
    "serem",
    "seres",
    "serfo",
    "seria",
    "seriú",
    "serja",
    "serna",
    "serpa",
    "serpe",
    "serra",
    "serre",
    "serro",
    "sertã",
    "serva",
    "serve",
    "servi",
    "serás",
    "serão",
    "serós",
    "sesgo",
    "sesma",
    "sesmo",
    "sesso",
    "sesta",
    "setar",
    "setas",
    "setes",
    "setia",
    "setra",
    "sevar",
    "sevas",
    "sexar",
    "sexos",
    "sezão",
    "share",
    "sheik",
    "short",
    "shows",
    "shunt",
    "sialo",
    "siame",
    "sibar",
    "sicaf",
    "siclo",
    "sidos",
    "sidra",
    "siena",
    "sifão",
    "sigam",
    "sigas",
    "siglo",
    "sigmó",
    "signa",
    "sigro",
    "silas",
    "silfa",
    "silfo",
    "silha",
    "silho",
    "silos",
    "silte",
    "silva",
    "silve",
    "silvo",
    "simum",
    "simão",
    "sinai",
    "sinar",
    "sindi",
    "sindo",
    "singa",
    "sinhá",
    "sinhô",
    "sinos",
    "sinta",
    "sinto",
    "sinxó",
    "sinão",
    "sioba",
    "siote",
    "sioux",
    "sipai",
    "sipia",
    "sique",
    "sirfo",
    "sirga",
    "sirgo",
    "siris",
    "siriú",
    "sirma",
    "sirte",
    "sirva",
    "sirvo",
    "sisal",
    "sisar",
    "sisgo",
    "sisma",
    "sisor",
    "sisos",
    "sissó",
    "sisão",
    "sitar",
    "sites",
    "sitia",
    "sitie",
    "sitos",
    "situa",
    "situe",
    "situo",
    "siusi",
    "sivan",
    "sivom",
    "sizau",
    "siões",
    "siúba",
    "skate",
    "slack",
    "slide",
    "snipe",
    "snobe",
    "soada",
    "soado",
    "soais",
    "soaje",
    "soala",
    "soara",
    "soava",
    "sobem",
    "sobes",
    "sobeu",
    "sobpé",
    "sobro",
    "socai",
    "socam",
    "socas",
    "soclo",
    "socos",
    "socou",
    "socoí",
    "socão",
    "sodar",
    "sodra",
    "soeis",
    "sofra",
    "sofre",
    "sofri",
    "sofro",
    "sofás",
    "sogar",
    "soguá",
    "soila",
    "soito",
    "solai",
    "solam",
    "solas",
    "solau",
    "solaz",
    "solda",
    "solde",
    "solei",
    "solem",
    "soles",
    "solfa",
    "solha",
    "solho",
    "solia",
    "solos",
    "solou",
    "solta",
    "solte",
    "solão",
    "somai",
    "somam",
    "somas",
    "somei",
    "somem",
    "somes",
    "somiê",
    "somos",
    "somou",
    "sonda",
    "sonde",
    "sondo",
    "songa",
    "sonha",
    "sonhe",
    "sonho",
    "sonos",
    "sonsa",
    "sonso",
    "soplo",
    "sopor",
    "sopra",
    "sopre",
    "sopro",
    "sopão",
    "soque",
    "soral",
    "sorar",
    "sorda",
    "sorgo",
    "sorna",
    "soros",
    "sorri",
    "sorro",
    "sorti",
    "sorva",
    "sorve",
    "sorvi",
    "sorvo",
    "sorça",
    "sosso",
    "sotam",
    "sotas",
    "sotaã",
    "sotia",
    "sotil",
    "soube",
    "sousa",
    "souto",
    "souza",
    "sovai",
    "sovam",
    "sovas",
    "sovei",
    "sovem",
    "soves",
    "sovou",
    "sovéu",
    "sozal",
    "soído",
    "split",
    "spray",
    "squid",
    "stafe",
    "staff",
    "stand",
    "steno",
    "stent",
    "stick",
    "stilb",
    "still",
    "stock",
    "stoma",
    "stops",
    "suada",
    "suais",
    "suara",
    "suava",
    "suazi",
    "suaçu",
    "subam",
    "subas",
    "subia",
    "subis",
    "subiu",
    "sucar",
    "sucho",
    "sucre",
    "sucto",
    "sudam",
    "sudra",
    "sudro",
    "sueca",
    "suede",
    "sueis",
    "sueto",
    "suevo",
    "suflé",
    "sugai",
    "sugam",
    "sugar",
    "sugas",
    "sugou",
    "sugue",
    "sujai",
    "sujam",
    "sujas",
    "sujei",
    "sujem",
    "sujes",
    "sujou",
    "sular",
    "sulca",
    "sulco",
    "sulfa",
    "sulia",
    "sulão",
    "sumam",
    "sumas",
    "sumbo",
    "sumia",
    "sumis",
    "sumiu",
    "sumos",
    "sundo",
    "sunfa",
    "sunto",
    "supra",
    "supre",
    "supri",
    "supro",
    "supus",
    "supôs",
    "supõe",
    "sural",
    "surfa",
    "surfo",
    "surge",
    "surgi",
    "surim",
    "surja",
    "surjo",
    "surre",
    "surro",
    "surta",
    "surte",
    "surça",
    "susep",
    "susta",
    "suste",
    "susão",
    "sutar",
    "sutra",
    "suxar",
    "sução",
    "suína",
    "suíça",
    "suíço",
    "suômi",
    "swing",
    "sáfeo",
    "ságio",
    "sálio",
    "sálix",
    "sápia",
    "sável",
    "sáxeo",
    "sâmio",
    "sândi",
    "sânie",
    "sécia",
    "sécio",
    "sélio",
    "sépia",
    "sépio",
    "séqui",
    "sérum",
    "sésea",
    "sésia",
    "séter",
    "sêmea",
    "sêmen",
    "sêmis",
    "sênio",
    "sícon",
    "síler",
    "sílex",
    "símel",
    "símia",
    "símil",
    "sínus",
    "sírio",
    "sócia",
    "sólea",
    "sóleo",
    "sólio",
    "sórex",
    "sória",
    "sóror",
    "súber",
    "súcia",
    "súcio",
    "súrio",
    "tabes",
    "tabla",
    "taboa",
    "tabus",
    "tabão",
    "tacai",
    "tacam",
    "tacar",
    "tacha",
    "tache",
    "tacho",
    "tacos",
    "tacou",
    "tacus",
    "tacuá",
    "tacão",
    "tafiá",
    "taful",
    "tagal",
    "tagaz",
    "tagma",
    "tagna",
    "tagra",
    "taguá",
    "taibu",
    "taico",
    "taifa",
    "taifó",
    "taiga",
    "taina",
    "taino",
    "taipa",
    "taira",
    "taita",
    "taixi",
    "tajal",
    "talar",
    "talas",
    "tales",
    "talha",
    "talhe",
    "talho",
    "talim",
    "talma",
    "talol",
    "talos",
    "talpa",
    "talão",
    "tamba",
    "tambi",
    "tambo",
    "tambu",
    "tamis",
    "tampe",
    "tampo",
    "tamuz",
    "tamão",
    "tanar",
    "tanas",
    "tancá",
    "tando",
    "tange",
    "tangi",
    "tanha",
    "tanho",
    "tanja",
    "tanjo",
    "tanoa",
    "tanso",
    "tanta",
    "taoca",
    "tapai",
    "tapam",
    "tapas",
    "tapei",
    "tapem",
    "tapes",
    "tapir",
    "tapiz",
    "tapiá",
    "tapií",
    "tapiú",
    "tapou",
    "tapua",
    "tapão",
    "taque",
    "taqui",
    "tarar",
    "taras",
    "tarau",
    "tarca",
    "tardo",
    "taria",
    "tarim",
    "tarol",
    "tarot",
    "tarpa",
    "tarro",
    "tarte",
    "tartã",
    "tarós",
    "tasca",
    "tasco",
    "tasna",
    "tasto",
    "tatos",
    "tatua",
    "tatue",
    "tatuo",
    "tatus",
    "tatuí",
    "tatzé",
    "taura",
    "tauro",
    "tavuá",
    "tavão",
    "taxai",
    "taxam",
    "taxar",
    "taxas",
    "taxei",
    "taxem",
    "taxes",
    "taxia",
    "taxou",
    "teada",
    "teale",
    "teame",
    "tease",
    "teate",
    "tebas",
    "tebeu",
    "tecal",
    "tecar",
    "tecei",
    "tecem",
    "teces",
    "teceu",
    "tecia",
    "tecle",
    "teclo",
    "tecno",
    "tecto",
    "tecum",
    "tedor",
    "tedéu",
    "tegme",
    "tegui",
    "tegão",
    "teiga",
    "teigo",
    "teima",
    "teime",
    "teimo",
    "teipe",
    "teira",
    "teiru",
    "teiró",
    "teité",
    "teixe",
    "teixo",
    "telar",
    "teles",
    "telex",
    "telho",
    "telim",
    "teliz",
    "telso",
    "temam",
    "temas",
    "temba",
    "tembé",
    "temei",
    "temem",
    "temer",
    "temes",
    "temeu",
    "temia",
    "temné",
    "temos",
    "tempe",
    "temão",
    "tenar",
    "tenaz",
    "tende",
    "tendi",
    "tendo",
    "tenha",
    "tenho",
    "tenra",
    "tenro",
    "tense",
    "tenta",
    "tente",
    "tença",
    "teoro",
    "teose",
    "tepor",
    "teque",
    "terei",
    "terem",
    "teres",
    "tergo",
    "teria",
    "terma",
    "terna",
    "terne",
    "terol",
    "terso",
    "terás",
    "terão",
    "tesar",
    "tesbi",
    "tesla",
    "tesse",
    "teste",
    "testo",
    "tesum",
    "tetar",
    "tetas",
    "tetim",
    "tetos",
    "tetra",
    "tetro",
    "tetéu",
    "teuto",
    "tevet",
    "teçam",
    "teças",
    "teína",
    "teúba",
    "teúdo",
    "tiara",
    "tiatã",
    "tibar",
    "tibel",
    "tibes",
    "tibum",
    "tical",
    "ticar",
    "ticas",
    "ticos",
    "ticum",
    "tidas",
    "tidor",
    "tidos",
    "tieta",
    "tiete",
    "tiflo",
    "tifão",
    "tiito",
    "tilar",
    "tilda",
    "tiles",
    "tilha",
    "tilho",
    "tilim",
    "timba",
    "timbu",
    "timbé",
    "timbó",
    "timer",
    "timia",
    "timol",
    "timor",
    "timão",
    "tinca",
    "tinem",
    "tines",
    "tinga",
    "tinge",
    "tingi",
    "tinha",
    "tinhó",
    "tinia",
    "tinir",
    "tinis",
    "tiniu",
    "tinja",
    "tinjo",
    "tinor",
    "tinte",
    "tioca",
    "tioco",
    "tiotê",
    "tipar",
    "tipió",
    "tiple",
    "tipão",
    "tipói",
    "tique",
    "tiqui",
    "tirai",
    "tiram",
    "tiras",
    "tiraz",
    "tirei",
    "tirem",
    "tireo",
    "tires",
    "tirió",
    "tirou",
    "tirso",
    "tirão",
    "tisca",
    "tisco",
    "tisna",
    "tisne",
    "tisso",
    "titim",
    "titio",
    "titor",
    "titão",
    "titãs",
    "tiupá",
    "tiver",
    "tizio",
    "tiziu",
    "tição",
    "tiúba",
    "tiúva",
    "tlaco",
    "tlena",
    "tmema",
    "tmese",
    "toaca",
    "toado",
    "tocai",
    "tocam",
    "tocas",
    "tocho",
    "tocos",
    "tocou",
    "toesa",
    "tofel",
    "togar",
    "togas",
    "toira",
    "toiro",
    "toita",
    "toiça",
    "toiço",
    "tojal",
    "tolar",
    "tolas",
    "tolaz",
    "tolda",
    "tolde",
    "toler",
    "tolha",
    "tolhe",
    "tolhi",
    "tolho",
    "tolos",
    "tolão",
    "tomai",
    "tomam",
    "tomba",
    "tombe",
    "tombo",
    "tomei",
    "tomem",
    "tomes",
    "tomia",
    "tomim",
    "tomos",
    "tomou",
    "tomás",
    "tomão",
    "tonal",
    "tonar",
    "tonca",
    "tonel",
    "toner",
    "tonga",
    "tongo",
    "tonia",
    "tonoa",
    "toona",
    "topai",
    "topam",
    "topas",
    "topaz",
    "topei",
    "topem",
    "topes",
    "topos",
    "topou",
    "toral",
    "torar",
    "toras",
    "toraí",
    "torba",
    "torce",
    "torci",
    "torda",
    "tordo",
    "torga",
    "torgo",
    "torna",
    "torne",
    "torno",
    "toros",
    "torra",
    "torro",
    "torvo",
    "torão",
    "torça",
    "torço",
    "torém",
    "tosai",
    "tosam",
    "tosas",
    "tosei",
    "tosem",
    "toses",
    "tosga",
    "tosou",
    "tossi",
    "tosso",
    "tosta",
    "toste",
    "tosto",
    "tosão",
    "touco",
    "toura",
    "touri",
    "touta",
    "toxia",
    "trace",
    "trade",
    "trado",
    "traem",
    "traga",
    "trago",
    "traia",
    "train",
    "traio",
    "trais",
    "traiu",
    "traja",
    "trajo",
    "trale",
    "tramo",
    "trans",
    "trapa",
    "trape",
    "trará",
    "trata",
    "trate",
    "trato",
    "travo",
    "traze",
    "traça",
    "tredo",
    "trefo",
    "trema",
    "treme",
    "tremi",
    "tremo",
    "trepa",
    "trepe",
    "trepo",
    "treso",
    "treva",
    "trial",
    "triar",
    "trias",
    "trica",
    "tridi",
    "triga",
    "trilo",
    "trina",
    "trino",
    "trios",
    "tripo",
    "trips",
    "trito",
    "troar",
    "troce",
    "trofa",
    "troge",
    "troia",
    "trole",
    "troll",
    "trona",
    "tropo",
    "trota",
    "troto",
    "trova",
    "truca",
    "trude",
    "trudo",
    "truxu",
    "truão",
    "tróis",
    "tsela",
    "tuaca",
    "tuaiá",
    "tubar",
    "tubas",
    "tubel",
    "tubim",
    "tubos",
    "tucho",
    "tucum",
    "tucão",
    "tudel",
    "tudum",
    "tufar",
    "tufos",
    "tugir",
    "tugue",
    "tuias",
    "tuita",
    "tulha",
    "tumbo",
    "tumor",
    "tunal",
    "tunar",
    "tunas",
    "tunco",
    "tunda",
    "tundo",
    "tunes",
    "tunga",
    "tupia",
    "tupir",
    "tupis",
    "tuque",
    "turar",
    "turba",
    "turbe",
    "turbo",
    "turca",
    "turdo",
    "turfa",
    "turfe",
    "turna",
    "turnê",
    "turra",
    "turva",
    "turve",
    "tusco",
    "tussa",
    "tusso",
    "tusta",
    "tusto",
    "tutar",
    "tutia",
    "tutti",
    "tutum",
    "tutão",
    "tuíra",
    "tweed",
    "twist",
    "tácia",
    "táfio",
    "táler",
    "tália",
    "tálio",
    "tálus",
    "tásio",
    "táxon",
    "tâmia",
    "tâmil",
    "tâmul",
    "télio",
    "télos",
    "tério",
    "tésio",
    "tésis",
    "tétio",
    "tétis",
    "tétum",
    "têmio",
    "tênia",
    "tíade",
    "tíbio",
    "tício",
    "tífia",
    "tílea",
    "tília",
    "tímio",
    "tínea",
    "tíner",
    "tíris",
    "tóino",
    "tólia",
    "tória",
    "tório",
    "tômio",
    "tônus",
    "túber",
    "túlio",
    "túnis",
    "tútsi",
    "uabuí",
    "uaicá",
    "uaipi",
    "uaitá",
    "uaiua",
    "ualua",
    "uambé",
    "uamói",
    "uanga",
    "uanhi",
    "uaniá",
    "uapés",
    "uariá",
    "uassu",
    "uaupé",
    "uaurá",
    "uauçu",
    "uaxuá",
    "uaçaí",
    "uaíba",
    "ubaia",
    "ubari",
    "ubatã",
    "ubeba",
    "ubira",
    "ubuçu",
    "uchão",
    "ucila",
    "ucimá",
    "ucola",
    "ucubu",
    "udora",
    "ufana",
    "ufane",
    "ufano",
    "ufpel",
    "ufrgs",
    "ufrrj",
    "uiapé",
    "uiara",
    "uigur",
    "uiqué",
    "uivai",
    "uivam",
    "uivar",
    "uivas",
    "uivei",
    "uivem",
    "uives",
    "uivos",
    "uivou",
    "ujará",
    "ujica",
    "ulano",
    "uleda",
    "ulema",
    "uliia",
    "ulite",
    "ulnal",
    "ulnar",
    "uloma",
    "ulose",
    "ulrei",
    "ultor",
    "ultra",
    "uluco",
    "ulula",
    "ulule",
    "ululo",
    "umari",
    "umauá",
    "umbla",
    "umblo",
    "umbra",
    "umbro",
    "umiri",
    "unais",
    "unani",
    "undai",
    "undar",
    "ungem",
    "unges",
    "ungia",
    "ungir",
    "ungis",
    "ungiu",
    "ungui",
    "unhar",
    "unhão",
    "uniam",
    "unias",
    "unido",
    "unira",
    "unita",
    "unona",
    "untai",
    "untam",
    "untas",
    "untei",
    "untem",
    "untes",
    "untou",
    "untué",
    "unção",
    "upado",
    "upema",
    "uperu",
    "upupa",
    "uraca",
    "urago",
    "urali",
    "urato",
    "uraçu",
    "urbes",
    "urdam",
    "urdas",
    "urdem",
    "urdes",
    "urdia",
    "urdir",
    "urdis",
    "urdiu",
    "uredo",
    "ureia",
    "urgem",
    "urges",
    "urgia",
    "urgir",
    "urgiu",
    "urina",
    "urine",
    "urino",
    "urjam",
    "urose",
    "urrai",
    "urram",
    "urrar",
    "urras",
    "urrei",
    "urrem",
    "urres",
    "urros",
    "urrou",
    "urubá",
    "urumi",
    "urumã",
    "urupá",
    "urupê",
    "urutu",
    "uruxi",
    "uruçu",
    "urzal",
    "urzes",
    "usado",
    "usais",
    "usara",
    "usava",
    "useis",
    "usmar",
    "usque",
    "ussia",
    "ustir",
    "ustão",
    "utata",
    "utena",
    "utota",
    "uvada",
    "uvaia",
    "uvaça",
    "uvaçu",
    "uveal",
    "uíste",
    "vaali",
    "vacal",
    "vacar",
    "vacum",
    "vacuá",
    "vacão",
    "vades",
    "vadia",
    "vadie",
    "vadio",
    "vafro",
    "vagai",
    "vagal",
    "vagam",
    "vagas",
    "vagem",
    "vagia",
    "vagir",
    "vagis",
    "vagiu",
    "vagos",
    "vagou",
    "vague",
    "vaiai",
    "vaiam",
    "vaias",
    "vaiei",
    "vaiem",
    "vaies",
    "vaiou",
    "vaipe",
    "vaixá",
    "valar",
    "valas",
    "valdo",
    "valei",
    "valem",
    "vales",
    "valeu",
    "valgo",
    "valha",
    "valho",
    "valia",
    "valva",
    "valão",
    "vamos",
    "vampe",
    "vampi",
    "vancê",
    "vanda",
    "vante",
    "varai",
    "varam",
    "varar",
    "varas",
    "varei",
    "varem",
    "vares",
    "varga",
    "varge",
    "varia",
    "varie",
    "varig",
    "vario",
    "variz",
    "varja",
    "varoa",
    "varou",
    "varra",
    "varre",
    "varri",
    "varro",
    "varve",
    "vasca",
    "vasco",
    "vasol",
    "vassá",
    "vatel",
    "vaurá",
    "vazai",
    "vazam",
    "vazas",
    "vazei",
    "vazem",
    "vazes",
    "vazou",
    "veada",
    "veado",
    "vedai",
    "vedam",
    "vedar",
    "vedas",
    "vedei",
    "vedem",
    "vedes",
    "vedor",
    "vedou",
    "vedro",
    "veeme",
    "veiar",
    "veiga",
    "veios",
    "veiro",
    "vejam",
    "vejas",
    "velai",
    "velam",
    "velar",
    "velas",
    "velei",
    "velem",
    "veles",
    "velou",
    "vemos",
    "venal",
    "vence",
    "venci",
    "vende",
    "vendi",
    "vendo",
    "venha",
    "venho",
    "venta",
    "vente",
    "vença",
    "venço",
    "vepsa",
    "veras",
    "veraz",
    "verei",
    "verem",
    "veres",
    "verga",
    "vergê",
    "veria",
    "veril",
    "verna",
    "verno",
    "versa",
    "verse",
    "verta",
    "verte",
    "verti",
    "verto",
    "verve",
    "verça",
    "vesco",
    "vesga",
    "vesta",
    "vesti",
    "vetai",
    "vetam",
    "vetas",
    "vetei",
    "vetem",
    "vetes",
    "vetos",
    "vetou",
    "vetão",
    "vexai",
    "vexam",
    "vexar",
    "vexas",
    "vexei",
    "vexem",
    "vexes",
    "vexou",
    "vezar",
    "viado",
    "viaja",
    "viaje",
    "viajo",
    "viana",
    "vibal",
    "vibra",
    "vibre",
    "vibro",
    "vices",
    "vichi",
    "vicia",
    "vicie",
    "victo",
    "vidar",
    "vides",
    "vidra",
    "vidre",
    "vidão",
    "viela",
    "vielo",
    "viera",
    "vigar",
    "vigas",
    "viger",
    "vigia",
    "vigie",
    "vigio",
    "vigna",
    "vilar",
    "vilas",
    "vileu",
    "viloa",
    "vilta",
    "vimar",
    "vimba",
    "vimos",
    "vinca",
    "vinco",
    "vinde",
    "vindo",
    "vinga",
    "vingo",
    "vinha",
    "viole",
    "violo",
    "virai",
    "viram",
    "viras",
    "virei",
    "virem",
    "vires",
    "virga",
    "virge",
    "virgo",
    "viria",
    "viris",
    "virol",
    "virou",
    "virte",
    "virão",
    "visai",
    "visam",
    "visas",
    "visco",
    "visei",
    "visem",
    "vises",
    "visgo",
    "visom",
    "vison",
    "visos",
    "visou",
    "visse",
    "viste",
    "visto",
    "vitae",
    "vitre",
    "vitro",
    "vivam",
    "vivar",
    "vivas",
    "vivaz",
    "vivei",
    "vivem",
    "vives",
    "viveu",
    "vivia",
    "vivió",
    "viviú",
    "vixit",
    "vixnu",
    "vizir",
    "viçar",
    "viúva",
    "viúve",
    "viúvo",
    "voada",
    "voado",
    "voais",
    "voara",
    "voava",
    "voaço",
    "vodca",
    "vodka",
    "vodum",
    "voeis",
    "voejo",
    "vogar",
    "vogue",
    "vogul",
    "voile",
    "volar",
    "volta",
    "volte",
    "volto",
    "volts",
    "volva",
    "volve",
    "volvi",
    "volvo",
    "voncê",
    "vonda",
    "vosco",
    "vossa",
    "votai",
    "votam",
    "votas",
    "votei",
    "votem",
    "votes",
    "votou",
    "vouvê",
    "vovós",
    "vozão",
    "vreia",
    "vulva",
    "vunda",
    "vunje",
    "vurmo",
    "válea",
    "vátio",
    "vélea",
    "vélia",
    "vélum",
    "vério",
    "vênia",
    "vícoa",
    "vídia",
    "víeis",
    "vígil",
    "vímea",
    "vínea",
    "víneo",
    "vítex",
    "vítis",
    "vômer",
    "watts",
    "weber",
    "whist",
    "xabéu",
    "xacra",
    "xador",
    "xaile",
    "xales",
    "xalma",
    "xamãs",
    "xangó",
    "xanto",
    "xaorô",
    "xaque",
    "xarau",
    "xarda",
    "xarel",
    "xaria",
    "xarém",
    "xaréu",
    "xaual",
    "xauim",
    "xaxim",
    "xebre",
    "xelim",
    "xelma",
    "xeque",
    "xereu",
    "xerez",
    "xerga",
    "xerox",
    "xerva",
    "xerém",
    "xeura",
    "xexéu",
    "xibio",
    "xibiu",
    "xiita",
    "xilol",
    "ximbo",
    "ximbé",
    "ximão",
    "xinga",
    "xingo",
    "xintó",
    "xiraz",
    "xiris",
    "xisto",
    "xocar",
    "xogum",
    "xorca",
    "xordo",
    "xotar",
    "xuatê",
    "xucro",
    "xénon",
    "xênia",
    "xênio",
    "xífio",
    "xílon",
    "zabra",
    "zabro",
    "zacum",
    "zagal",
    "zagre",
    "zagão",
    "zaida",
    "zaimo",
    "zaina",
    "zaino",
    "zaira",
    "zaire",
    "zambi",
    "zambo",
    "zambê",
    "zanga",
    "zango",
    "zanho",
    "zanni",
    "zante",
    "zanza",
    "zanze",
    "zanzo",
    "zarca",
    "zarco",
    "zargo",
    "zarpa",
    "zarpe",
    "zarpo",
    "zarra",
    "zarro",
    "zarza",
    "zarão",
    "zavar",
    "zavra",
    "zebro",
    "zefir",
    "zegri",
    "zelai",
    "zelam",
    "zelas",
    "zelei",
    "zelem",
    "zeles",
    "zelha",
    "zelos",
    "zelou",
    "zenda",
    "zende",
    "zenir",
    "zerai",
    "zeram",
    "zeras",
    "zerbo",
    "zerei",
    "zerem",
    "zeres",
    "zeros",
    "zerou",
    "zesto",
    "zeugo",
    "zicha",
    "zicho",
    "zimbo",
    "zines",
    "zinga",
    "zinha",
    "zinho",
    "zinir",
    "zipar",
    "zirbo",
    "zirro",
    "zizia",
    "zizio",
    "zloty",
    "zoada",
    "zoado",
    "zoais",
    "zoara",
    "zoava",
    "zoeis",
    "zogue",
    "zoica",
    "zoico",
    "zoide",
    "zoilo",
    "zoina",
    "zomba",
    "zombe",
    "zombo",
    "zonai",
    "zonal",
    "zonam",
    "zonar",
    "zonei",
    "zonem",
    "zones",
    "zonou",
    "zonza",
    "zoose",
    "zorra",
    "zorro",
    "zoupo",
    "zoura",
    "zuate",
    "zuavo",
    "zucar",
    "zuche",
    "zulus",
    "zumba",
    "zumbe",
    "zumbi",
    "zumbo",
    "zunam",
    "zunar",
    "zunas",
    "zunda",
    "zunem",
    "zunes",
    "zunga",
    "zungo",
    "zungu",
    "zunhi",
    "zunia",
    "zunir",
    "zunis",
    "zuniu",
    "zupar",
    "zurpa",
    "zurra",
    "zurre",
    "zurro",
    "zuruó",
    "zuído",
    "zãibo",
    "zínia",
    "ábaco",
    "ábavo",
    "ábies",
    "ábiga",
    "ábrus",
    "ábsis",
    "ácade",
    "ácare",
    "ácave",
    "ácavo",
    "ácida",
    "ácino",
    "áclis",
    "ácope",
    "ácopo",
    "ácoro",
    "ácron",
    "áctia",
    "ádipe",
    "ádipo",
    "áfodo",
    "ágamo",
    "ágapa",
    "ágape",
    "ágaro",
    "ágata",
    "ágate",
    "ágeno",
    "ágino",
    "ágios",
    "ágono",
    "ágria",
    "águam",
    "águas",
    "águes",
    "álalo",
    "álamo",
    "álcea",
    "álemo",
    "álhia",
    "álica",
    "álife",
    "álpea",
    "álula",
    "álveo",
    "ápage",
    "ápios",
    "ápira",
    "ápiro",
    "ápoca",
    "ápode",
    "áporo",
    "ápoto",
    "áqueo",
    "árcio",
    "árdea",
    "árgio",
    "árgon",
    "árias",
    "árida",
    "ársis",
    "árula",
    "ásaro",
    "áscio",
    "áscon",
    "áscua",
    "áspis",
    "áster",
    "ástur",
    "átele",
    "átila",
    "átimo",
    "átipo",
    "átona",
    "átono",
    "átrio",
    "áurea",
    "ávida",
    "ávila",
    "áxilo",
    "áxone",
    "ázigo",
    "ázimo",
    "âmnio",
    "ânion",
    "ânodo",
    "ébano",
    "ébeno",
    "ébulo",
    "écano",
    "écope",
    "écran",
    "écula",
    "éculo",
    "édico",
    "édipo",
    "éfeta",
    "éfira",
    "éfode",
    "éfodo",
    "éforo",
    "égide",
    "égrio",
    "éguas",
    "élafo",
    "élate",
    "énula",
    "épica",
    "épura",
    "équio",
    "érbio",
    "érebo",
    "éreis",
    "érgio",
    "érica",
    "érico",
    "érina",
    "ésipo",
    "ésoce",
    "ésula",
    "étego",
    "étigo",
    "étimo",
    "évano",
    "êider",
    "êmero",
    "êmese",
    "êmico",
    "êmulo",
    "êxule",
    "íamos",
    "ícaro",
    "ícore",
    "íctis",
    "íctus",
    "ídola",
    "ígneo",
    "íleon",
    "ílion",
    "ímpia",
    "ímpio",
    "ínaco",
    "índia",
    "índri",
    "índua",
    "íngua",
    "ínion",
    "ínsua",
    "ínubo",
    "ínula",
    "ínvio",
    "ísate",
    "ítaca",
    "ítalo",
    "ítria",
    "ítrio",
    "óbelo",
    "óbice",
    "óbito",
    "óbolo",
    "óbulo",
    "óbvia",
    "ócimo",
    "ócrea",
    "óculo",
    "ódios",
    "ófrio",
    "ófris",
    "óleos",
    "óleum",
    "ómnia",
    "ópalo",
    "ópido",
    "órfia",
    "órfãs",
    "órgio",
    "ósido",
    "ósmio",
    "óstio",
    "óvalo",
    "óvano",
    "óvnis",
    "úbere",
    "úbero",
    "úmero",
    "úmida",
    "úncia",
    "úncus",
    "úngue",
    "únsia",
    "úraco",
    "úrano",
    "úrceo",
    "úrico",
    "úropo",
    "úsnea",
    "úvico",
    "úvido",
    "úvula",
  ]),
  Xf = {
    abaca: "abacá",
    abara: "abará",
    abare: "abaré",
    abebe: "abebé",
    abece: "abecê",
    abede: "abedê",
    abico: "abicô",
    abobo: "abobó",
    abofe: "abofé",
    aboco: "aboço",
    abuxo: "abuxó",
    acaja: "acajá",
    acara: "acará",
    acaua: "acauã",
    acaca: "acaçá",
    acaem: "acaém",
    acola: "acolá",
    acona: "aconá",
    acroa: "acroá",
    acreu: "acréu",
    acuma: "acumã",
    acure: "acuré",
    adixa: "adixá",
    adoga: "adogã",
    adoca: "adoça",
    adoco: "adoço",
    advem: "advém",
    adion: "adíon",
    afefe: "afefé",
    afega: "afegã",
    afoxe: "afoxé",
    afura: "afurá",
    agace: "agacé",
    agada: "agadá",
    agare: "agaré",
    agogo: "agogô",
    agrao: "agrão",
    agrem: "agrém",
    aguai: "aguaí",
    aguca: "aguça",
    aguco: "aguço",
    aiara: "aiará",
    aiaca: "aiaçá",
    aioca: "aiocá",
    airao: "airão",
    aitao: "aitão",
    aiuca: "aiucá",
    aiuiu: "aiuiú",
    aivao: "aivão",
    ajabo: "ajabó",
    ajapa: "ajapá",
    ajara: "ajará",
    ajare: "ajaré",
    ajobo: "ajobó",
    ajupa: "ajupá",
    alaba: "alabá",
    alabe: "alabê",
    alafe: "alafé",
    alala: "alalá",
    alboi: "albói",
    aldea: "aldeã",
    alema: "alemã",
    alias: "aliás",
    alode: "alodê",
    aloes: "aloés",
    alpao: "alpão",
    altea: "alteá",
    alufa: "alufá",
    aluja: "alujá",
    alvao: "alvão",
    alcai: "alçai",
    alcam: "alçam",
    alcar: "alçar",
    alcas: "alças",
    alcou: "alçou",
    alcuz: "alçuz",
    amala: "amalá",
    amana: "amaná",
    amapa: "amapá",
    ambua: "ambuá",
    ambui: "ambuí",
    ambao: "ambão",
    amele: "amelê",
    ameca: "ameça",
    amore: "amoré",
    amure: "amurê",
    anaca: "anacã",
    anace: "anacé",
    anaia: "anaiá",
    anaja: "anajá",
    anaje: "anajé",
    anana: "ananá",
    anaue: "anauê",
    ancia: "anciã",
    angau: "angaú",
    aniao: "anião",
    anjao: "anjão",
    antao: "antão",
    anuai: "anuaí",
    anuja: "anujá",
    anuia: "anuía",
    anaos: "anãos",
    aneis: "anéis",
    anoes: "anões",
    apapa: "apapá",
    apiao: "apião",
    aprea: "apreá",
    aquem: "aquém",
    araba: "arabá",
    araia: "araiá",
    araio: "araió",
    araiu: "araiú",
    arama: "aramã",
    arata: "aratá",
    araue: "araué",
    araxa: "araxá",
    araca: "araçá",
    arede: "aredê",
    arere: "arerê",
    areao: "areão",
    argao: "argão",
    aribe: "aribé",
    arica: "aricá",
    arico: "aricó",
    arigo: "arigó",
    arima: "arimã",
    arina: "ariná",
    arita: "aritá",
    arjao: "arjão",
    armao: "armão",
    armeu: "arméu",
    arnes: "arnês",
    aroca: "arocá",
    arpao: "arpão",
    arpeu: "arpéu",
    arrua: "arruá",
    artao: "artão",
    aruai: "aruaí",
    arube: "arubé",
    aruma: "arumã",
    arura: "arurá",
    arcao: "arção",
    areus: "aréus",
    assua: "assuã",
    atala: "atalá",
    atare: "atarê",
    atera: "aterá",
    atica: "atiça",
    aticu: "atiçu",
    atoba: "atobá",
    atoto: "atotô",
    atras: "atrás",
    atens: "aténs",
    atois: "atóis",
    auacu: "auaçu",
    aucao: "aução",
    avare: "avaré",
    avela: "avelã",
    aveao: "aveão",
    avira: "avirá",
    aviao: "avião",
    avens: "avéns",
    axabo: "axabó",
    axexe: "axexê",
    axoxo: "axoxô",
    azala: "azalá",
    azibo: "azibó",
    acacu: "açacu",
    acala: "açalá",
    acame: "açame",
    acamo: "açamo",
    acuba: "açubá",
    acude: "açude",
    aculo: "açulo",
    acumi: "açumi",
    acoes: "ações",
    aerea: "aérea",
    aereo: "aéreo",
    aioli: "aïoli",
    aonio: "aônio",
    auste: "aúste",
    babui: "babuí",
    babao: "babão",
    badem: "badém",
    baena: "baenã",
    bagua: "baguá",
    baiao: "baião",
    balao: "balão",
    balca: "balça",
    bambe: "bambê",
    banta: "bantá",
    banze: "banzé",
    baoba: "baobá",
    barau: "baraú",
    barre: "barré",
    barao: "barão",
    barem: "barém",
    basse: "bassê",
    batao: "batão",
    baume: "baumê",
    baira: "baíra",
    baule: "baúle",
    bauna: "baúna",
    beaba: "beabá",
    bebes: "bebês",
    bedui: "beduí",
    bedem: "bedém",
    beica: "beiça",
    beico: "beiço",
    belao: "belão",
    bembe: "bembé",
    bende: "bendé",
    benca: "bença",
    beroe: "beroé",
    berca: "berça",
    berco: "berço",
    bereu: "beréu",
    beros: "berós",
    betao: "betão",
    bibio: "bibió",
    bibla: "biblá",
    biboi: "bibói",
    bicao: "bicão",
    bidao: "bidão",
    bigua: "biguá",
    bijui: "bijuí",
    bilho: "bilhó",
    biniu: "biniú",
    birma: "birmã",
    bisao: "bisão",
    biura: "biurá",
    blase: "blasé",
    bobao: "bobão",
    bocue: "bocué",
    bocao: "bocão",
    boime: "boimé",
    boiao: "boião",
    boica: "boiça",
    boicu: "boiçu",
    bojui: "bojuí",
    bolho: "bolhó",
    bolao: "bolão",
    boleu: "boléu",
    bongo: "bongô",
    bones: "bonés",
    bosao: "bosão",
    botao: "botão",
    bouca: "bouça",
    bouco: "bouço",
    braca: "braça",
    braco: "braço",
    breta: "bretã",
    bruaa: "bruaá",
    brion: "bríon",
    bubao: "bubão",
    bucui: "bucuí",
    bufao: "bufão",
    bujao: "bujão",
    buque: "buquê",
    burco: "burço",
    butia: "butiá",
    buido: "buído",
    builo: "buílo",
    badur: "bádur",
    bafer: "báfer",
    bafia: "báfia",
    bagoa: "bágoa",
    bario: "bário",
    basio: "básio",
    basis: "básis",
    batis: "bátis",
    bambi: "bâmbi",
    becua: "bécua",
    belis: "bélis",
    betel: "bétel",
    betis: "bétis",
    biduo: "bíduo",
    bilis: "bílis",
    biter: "bíter",
    bivio: "bívio",
    bocio: "bócio",
    bofia: "bófia",
    borax: "bórax",
    boson: "bóson",
    boton: "bóton",
    boxer: "bóxer",
    bonus: "bônus",
    buteo: "búteo",
    butio: "bútio",
    buzio: "búzio",
    caaco: "caacó",
    caaee: "caaeé",
    caacu: "caaçu",
    cabau: "cabaú",
    cabiu: "cabiú",
    caete: "caeté",
    cafes: "cafés",
    cagoa: "cagoã",
    cagao: "cagão",
    caico: "caicó",
    caira: "cairá",
    caire: "cairé",
    caite: "caité",
    caicu: "caiçu",
    caica: "caiçá",
    cajua: "cajuá",
    cajui: "cajuí",
    cajas: "cajás",
    cajao: "cajão",
    calao: "calão",
    calca: "calça",
    calco: "calço",
    camaa: "camaá",
    campe: "campé",
    camua: "camuá",
    camao: "camão",
    canca: "cancã",
    canoe: "canoé",
    canza: "canzá",
    capia: "capiá",
    capao: "capão",
    carii: "carií",
    cariu: "cariú",
    caroa: "caroá",
    caroe: "caroé",
    carre: "carrê",
    carua: "caruá",
    carao: "carão",
    careu: "caréu",
    casba: "casbá",
    casao: "casão",
    catua: "catuá",
    catao: "catão",
    cauma: "caumã",
    caure: "cauré",
    cavao: "cavão",
    cacai: "caçai",
    cacam: "caçam",
    cacar: "caçar",
    cacas: "caças",
    cacoa: "caçoa",
    cacoe: "caçoe",
    cacoo: "caçoo",
    cacou: "caçou",
    cacua: "caçuá",
    cacao: "cação",
    caida: "caída",
    caido: "caído",
    caiva: "caíva",
    cauba: "caúba",
    cauno: "caúno",
    ceara: "ceará",
    cecem: "cecém",
    cevao: "cevão",
    chaba: "chabã",
    chabo: "chabó",
    chaja: "chajá",
    chale: "chalé",
    chate: "chaté",
    chaua: "chauá",
    chaca: "chaça",
    chaem: "chaém",
    chebe: "chebê",
    cheva: "chevá",
    chibe: "chibé",
    chino: "chinó",
    chiao: "chião",
    chogo: "chogó",
    chone: "choné",
    chule: "chulé",
    chuco: "chuço",
    chues: "chués",
    chaos: "chãos",
    cidro: "cidró",
    cipos: "cipós",
    cisao: "cisão",
    ciume: "ciúme",
    ciuro: "ciúro",
    coata: "coatá",
    cocao: "cocão",
    cofio: "cofió",
    coine: "coiné",
    coite: "coité",
    comao: "comão",
    corao: "corão",
    corca: "corça",
    corco: "corço",
    cotao: "cotão",
    coupe: "coupé",
    couca: "couça",
    covoa: "covoá",
    covao: "covão",
    coxao: "coxão",
    cocai: "coçai",
    cocam: "coçam",
    cocar: "coçar",
    cocas: "coças",
    cocou: "coçou",
    coiba: "coíba",
    coibe: "coíbe",
    coibo: "coíbo",
    crapo: "crapô",
    craua: "crauá",
    creie: "creié",
    creje: "crejé",
    croca: "croça",
    cuata: "cuatá",
    cubie: "cubié",
    cubiu: "cubiú",
    cuche: "cuchê",
    cuipe: "cuipé",
    cuita: "cuitá",
    cuite: "cuité",
    cuito: "cuitó",
    cuiao: "cuião",
    cumai: "cumaí",
    cupai: "cupaí",
    cupao: "cupão",
    curio: "curió",
    curua: "curuá",
    curao: "curão",
    cuxiu: "cuxiú",
    cuica: "cuíca",
    cuira: "cuíra",
    cacea: "cácea",
    cadis: "cádis",
    calix: "cálix",
    capea: "cápea",
    carie: "cárie",
    carus: "cárus",
    cavea: "cávea",
    cavia: "cávia",
    candi: "cândi",
    canon: "cânon",
    cebus: "cébus",
    cecum: "cécum",
    celio: "célio",
    ceomo: "céomo",
    cereo: "céreo",
    cerio: "cério",
    cesar: "césar",
    cesio: "césio",
    ciamo: "cíamo",
    cilio: "cílio",
    cirio: "círio",
    civel: "cível",
    coana: "cóana",
    coano: "cóano",
    cobio: "cóbio",
    codeo: "códeo",
    codex: "códex",
    codio: "códio",
    codon: "códon",
    codao: "códão",
    cofea: "cófea",
    cogia: "cógia",
    coleo: "cóleo",
    colio: "cólio",
    colon: "cólon",
    copia: "cópia",
    corio: "cório",
    codea: "côdea",
    cubio: "cúbio",
    cucio: "cúcio",
    cufea: "cúfea",
    cufia: "cúfia",
    culex: "cúlex",
    cumel: "cúmel",
    cumis: "cúmis",
    cuneo: "cúneo",
    cunia: "cúnia",
    curia: "cúria",
    cuter: "cúter",
    cutis: "cútis",
    daiao: "daião",
    dalem: "dalém",
    danca: "dança",
    danco: "danço",
    daras: "darás",
    darao: "darão",
    dacao: "dação",
    dedao: "dedão",
    dedeu: "dedéu",
    demao: "demão",
    dende: "dendê",
    depos: "depós",
    depoe: "depõe",
    desca: "desça",
    desco: "desço",
    detem: "detém",
    dirra: "dirrã",
    diras: "dirás",
    dirao: "dirão",
    direm: "dirém",
    dicao: "dição",
    diula: "diúla",
    docem: "docém",
    dodoi: "dodói",
    dozao: "dozão",
    docal: "doçal",
    docar: "doçar",
    doiam: "doíam",
    doias: "doías",
    drape: "drapê",
    drica: "driça",
    druva: "druvá",
    duble: "dublê",
    dugao: "dugão",
    durga: "durgá",
    durao: "durão",
    duita: "duíta",
    dacio: "dácio",
    dalia: "dália",
    damar: "dâmar",
    danae: "dânae",
    dandi: "dândi",
    danio: "dânio",
    debil: "débil",
    debut: "début",
    decor: "décor",
    delia: "délia",
    delio: "délio",
    derbi: "dérbi",
    devio: "dévio",
    diada: "díada",
    diade: "díade",
    didia: "dídia",
    difia: "dífia",
    dinio: "dínio",
    diope: "díope",
    dixis: "díxis",
    docil: "dócil",
    dolar: "dólar",
    dolma: "dólmã",
    doria: "dória",
    dorio: "dório",
    doris: "dóris",
    dubia: "dúbia",
    dubio: "dúbio",
    durio: "dúrio",
    duzia: "dúzia",
    edere: "ederé",
    egipa: "egipã",
    eiros: "eirós",
    eicar: "eiçar",
    elafa: "elafá",
    eleda: "eledá",
    elede: "eledê",
    elepe: "elepê",
    eleis: "eléis",
    embai: "embaí",
    embia: "embiá",
    embiu: "embiú",
    emboa: "emboá",
    embua: "embuá",
    embui: "embuí",
    empos: "empós",
    encho: "enchó",
    entao: "então",
    enves: "envés",
    enxui: "enxuí",
    enxos: "enxós",
    eoipo: "eoípo",
    epoxi: "epóxi",
    erama: "eramá",
    ervao: "ervão",
    esere: "eserê",
    estao: "estão",
    esvao: "esvão",
    evase: "evasê",
    expos: "expôs",
    expoe: "expõe",
    eolia: "eólia",
    eolio: "eólio",
    facao: "facão",
    faiao: "faião",
    fanao: "fanão",
    farao: "faraó",
    faras: "farás",
    fatao: "fatão",
    facam: "façam",
    faula: "faúla",
    feiao: "feião",
    feleu: "feléu",
    feofo: "feofó",
    ficao: "ficão",
    fideu: "fidéu",
    filao: "filão",
    fines: "finês",
    fiofo: "fiofó",
    fitao: "fitão",
    fieis: "fiéis",
    fiusa: "fiúsa",
    fiuza: "fiúza",
    floso: "flosô",
    flozo: "flozô",
    fluia: "fluía",
    fluor: "flúor",
    flute: "flûte",
    fofao: "fofão",
    fogao: "fogão",
    folao: "folão",
    forro: "forró",
    forca: "força",
    forco: "forço",
    fotao: "fotão",
    focao: "foção",
    frape: "frapê",
    fruia: "fruía",
    fujao: "fujão",
    fulao: "fulão",
    fumao: "fumão",
    funeu: "funéu",
    furao: "furão",
    fusao: "fusão",
    fuzue: "fuzuê",
    fucai: "fuçai",
    fucam: "fuçam",
    fucar: "fuçar",
    fucas: "fuças",
    fucou: "fuçou",
    fabia: "fábia",
    facil: "fácil",
    falum: "fálum",
    falus: "fálus",
    fasia: "fásia",
    fatuo: "fátuo",
    fanio: "fânio",
    fanti: "fânti",
    fecio: "fécio",
    feleo: "féleo",
    felis: "félis",
    femea: "fêmea",
    femeo: "fêmeo",
    femur: "fêmur",
    fenix: "fênix",
    fetao: "fêtão",
    fiala: "fíala",
    ficea: "fícea",
    ficeo: "fíceo",
    ficis: "fícis",
    ficus: "fícus",
    fidia: "fídia",
    fifia: "fífia",
    filer: "fíler",
    focio: "fócio",
    fodia: "fódia",
    folio: "fólio",
    folis: "fólis",
    forum: "fórum",
    foton: "fóton",
    fovea: "fóvea",
    fonon: "fônon",
    fucea: "fúcea",
    fufia: "fúfia",
    fufio: "fúfio",
    fumeo: "fúmeo",
    furia: "fúria",
    fusel: "fúsel",
    fusil: "fúsil",
    futil: "fútil",
    gabao: "gabão",
    gabeu: "gabéu",
    gadao: "gadão",
    gafem: "gafém",
    gagao: "gagão",
    gajao: "gajão",
    galao: "galão",
    gamba: "gambá",
    gamao: "gamão",
    ganze: "ganzé",
    ganca: "gança",
    ganco: "ganço",
    ganes: "ganês",
    garao: "garão",
    garca: "garça",
    garco: "garço",
    gatao: "gatão",
    gaudo: "gaudó",
    gazao: "gazão",
    gerem: "gerém",
    gibao: "gibão",
    gicle: "giclê",
    gicao: "gicão",
    girao: "girão",
    glace: "glacê",
    gluao: "gluão",
    gluon: "glúon",
    godao: "godão",
    goias: "goiás",
    gombo: "gombô",
    gozao: "gozão",
    graca: "graça",
    grejo: "grejó",
    grena: "grená",
    grijo: "grijó",
    grolo: "groló",
    graos: "grãos",
    guaca: "guacá",
    guaiu: "guaiú",
    guaja: "guajá",
    guana: "guaná",
    guara: "guará",
    guato: "guató",
    guacu: "guaçu",
    guede: "guedé",
    guiba: "guibá",
    guigo: "guigó",
    guine: "guiné",
    guipa: "guipá",
    guiao: "guião",
    guico: "guiço",
    gabia: "gábia",
    gabio: "gábio",
    gafio: "gáfio",
    galax: "gálax",
    galea: "gálea",
    galia: "gália",
    galio: "gálio",
    gavea: "gávea",
    gazeo: "gázeo",
    gazio: "gázio",
    gamia: "gâmia",
    gemea: "gêmea",
    gemeo: "gêmeo",
    genio: "gênio",
    gigia: "gígia",
    gilia: "gília",
    giria: "gíria",
    girio: "gírio",
    gobio: "góbio",
    godia: "gódia",
    gonio: "gônio",
    gonis: "gônis",
    habes: "habés",
    harem: "harém",
    hauca: "hauçá",
    hereu: "heréu",
    heroi: "herói",
    holao: "holão",
    homao: "homão",
    horra: "horrá",
    habil: "hábil",
    haden: "háden",
    halux: "hálux",
    hapax: "hápax",
    helas: "hélas",
    helia: "hélia",
    helio: "hélio",
    helix: "hélix",
    hepia: "hépia",
    hevea: "hévea",
    hiala: "híala",
    hifen: "hífen",
    himen: "hímen",
    hindi: "híndi",
    hovea: "hóvea",
    humil: "húmil",
    humus: "húmus",
    iagua: "iaguá",
    iansa: "iansã",
    iatai: "iataí",
    ibaro: "ibaró",
    icacu: "icaçu",
    ichao: "ichão",
    icipo: "icipó",
    ideia: "idéia",
    igapo: "igapó",
    igupa: "igupá",
    iiaba: "iiabá",
    ijexa: "ijexá",
    ilheu: "ilhéu",
    ilhos: "ilhós",
    imbui: "imbuí",
    impos: "impôs",
    impoe: "impõe",
    inaia: "inaiá",
    inaja: "inajá",
    inaje: "inajé",
    ingai: "ingaí",
    inves: "invés",
    incar: "inçar",
    ipete: "ipetê",
    iracu: "iraçu",
    irere: "irerê",
    irira: "irirá",
    irmao: "irmão",
    irmas: "irmãs",
    irucu: "iruçu",
    islao: "islão",
    itaua: "itauá",
    iudja: "iudjá",
    icado: "içado",
    icais: "içais",
    icara: "içara",
    icava: "içava",
    iotio: "iótio",
    ionio: "iônio",
    jabao: "jabão",
    jacui: "jacuí",
    jaico: "jaicó",
    jalao: "jalão",
    jambe: "jambé",
    janau: "janaú",
    japue: "japué",
    japui: "japuí",
    japao: "japão",
    jatai: "jataí",
    javae: "javaé",
    jeico: "jeicó",
    jembe: "jembê",
    jemia: "jemiá",
    jeova: "jeová",
    jepia: "jepiá",
    jepio: "jepió",
    jetai: "jetaí",
    jicao: "jicão",
    jipao: "jipão",
    jiroe: "jiroé",
    jicui: "jiçui",
    jogao: "jogão",
    joica: "joiça",
    jouca: "jouça",
    jocal: "joçal",
    joiba: "joíba",
    jubai: "jubaí",
    jubao: "jubão",
    junca: "junça",
    jupia: "jupiá",
    jupua: "jupuá",
    jupao: "jupão",
    jurao: "jurão",
    jusao: "jusão",
    jutai: "jutaí",
    juiza: "juíza",
    juizo: "juízo",
    jacea: "jácea",
    japix: "jápix",
    joias: "jóias",
    jonia: "jônia",
    jonio: "jônio",
    juvia: "júvia",
    labeu: "labéu",
    ladao: "ladão",
    lagao: "lagão",
    lajao: "lajão",
    lando: "landó",
    lanca: "lança",
    lanco: "lanço",
    lapia: "lapiá",
    lapao: "lapão",
    laque: "laquê",
    lareu: "laréu",
    latao: "latão",
    laule: "laulé",
    lazao: "lazão",
    lacai: "laçai",
    lacam: "laçam",
    lacar: "laçar",
    lacas: "laças",
    lacos: "laços",
    lacou: "laçou",
    lacao: "lação",
    lauza: "laúza",
    legao: "legão",
    lenao: "lenão",
    lenco: "lenço",
    lerue: "leruê",
    lerao: "lerão",
    lesao: "lesão",
    letao: "letão",
    leoes: "leões",
    liaca: "liaça",
    libre: "libré",
    lilas: "lilás",
    limao: "limão",
    lirao: "lirão",
    litao: "litão",
    lixao: "lixão",
    licao: "lição",
    lobao: "lobão",
    loica: "loiça",
    locao: "loção",
    lucha: "luchã",
    lucao: "lucão",
    lulao: "lulão",
    luzie: "luziê",
    luina: "luína",
    labia: "lábia",
    labil: "lábil",
    labio: "lábio",
    lacio: "lácio",
    lacon: "lácon",
    lajea: "lájea",
    lapis: "lápis",
    laria: "lária",
    larix: "lárix",
    lasia: "lásia",
    lateo: "láteo",
    latex: "látex",
    lamia: "lâmia",
    lamio: "lâmio",
    laneo: "lâneo",
    lanio: "lânio",
    legua: "légua",
    lelia: "lélia",
    lepis: "lépis",
    lexis: "léxis",
    lemur: "lêmur",
    leneo: "lêneo",
    liber: "líber",
    libio: "líbio",
    licia: "lícia",
    licio: "lício",
    lider: "líder",
    lidio: "lídio",
    lieis: "líeis",
    ligeo: "lígeo",
    ligio: "lígio",
    lilio: "lílio",
    lineo: "líneo",
    liria: "líria",
    lirio: "lírio",
    lisio: "lísio",
    litia: "lítia",
    litio: "lítio",
    lituo: "lítuo",
    livia: "lívia",
    locus: "lócus",
    lodao: "lódão",
    lofio: "lófio",
    logea: "lógea",
    lolio: "lólio",
    loris: "lóris",
    losia: "lósia",
    lotus: "lótus",
    loxia: "lóxia",
    lucio: "lúcio",
    ludio: "lúdio",
    lupia: "lúpia",
    lupus: "lúpus",
    luria: "lúria",
    luteo: "lúteo",
    mabiu: "mabiú",
    macaa: "macaá",
    macae: "macaé",
    mache: "machê",
    mafau: "mafaú",
    magne: "magné",
    maina: "mainá",
    maiao: "maião",
    mamae: "mamãe",
    mamao: "mamão",
    manai: "manaí",
    manha: "manhã",
    mante: "mantê",
    manue: "manuê",
    mapua: "mapuá",
    mapao: "mapão",
    marua: "maruá",
    marui: "maruí",
    marao: "marão",
    matse: "matsé",
    matao: "matão",
    mateu: "matéu",
    maues: "maués",
    mauis: "mauís",
    macal: "maçal",
    macar: "maçar",
    macom: "maçom",
    macos: "maços",
    macao: "mação",
    macas: "maçãs",
    maira: "maíra",
    maica: "maíça",
    mauba: "maúba",
    maujo: "maújo",
    meaca: "meaça",
    meiao: "meião",
    melao: "melão",
    membe: "membé",
    merce: "mercê",
    merio: "merió",
    merui: "meruí",
    mesao: "mesão",
    metie: "metiê",
    mexao: "mexão",
    mecam: "meçam",
    mecas: "meças",
    meule: "meúle",
    miche: "michê",
    mijui: "mijuí",
    mijao: "mijão",
    mirza: "mirzá",
    mirao: "mirão",
    misso: "missô",
    mixio: "mixió",
    mixna: "mixná",
    miuda: "miúda",
    miude: "miúde",
    miudo: "miúdo",
    miufa: "miúfa",
    miulo: "miúlo",
    miura: "miúra",
    miuro: "miúro",
    miuva: "miúva",
    miuca: "miúça",
    mocui: "mocuí",
    mogao: "mogão",
    moire: "moiré",
    moiao: "moião",
    monde: "mondé",
    monhe: "monhé",
    morao: "morão",
    mosba: "mosbá",
    moadi: "moádi",
    mocas: "moças",
    mocos: "moços",
    mocao: "moção",
    moiam: "moíam",
    moias: "moías",
    moida: "moída",
    moido: "moído",
    mucui: "mucuí",
    mufui: "mufuí",
    mumbe: "mumbé",
    munde: "mundé",
    murui: "muruí",
    murza: "murzá",
    murca: "murça",
    musme: "musmé",
    musso: "mussó",
    muviu: "muviú",
    muari: "muári",
    mucum: "muçum",
    macea: "mácea",
    madia: "mádia",
    mafia: "máfia",
    magis: "mágis",
    magoa: "mágoa",
    maroo: "mároo",
    matri: "mátri",
    mavia: "mávia",
    mecia: "mécia",
    media: "média",
    medio: "médio",
    medao: "médão",
    meleo: "méleo",
    melia: "mélia",
    meloe: "méloe",
    mesio: "mésio",
    meson: "méson",
    mesua: "mésua",
    micio: "mício",
    midia: "mídia",
    mileo: "míleo",
    minio: "mínio",
    miope: "míope",
    miris: "míris",
    mobil: "móbil",
    modio: "módio",
    molio: "mólio",
    moqua: "móqua",
    movel: "móvel",
    mucua: "múcua",
    mugil: "múgil",
    muleo: "múleo",
    mumia: "múmia",
    mundi: "múndi",
    munus: "múnus",
    murex: "múrex",
    muria: "múria",
    mutua: "mútua",
    mutuo: "mútuo",
    muzua: "múzua",
    musli: "müsli",
    nagao: "nagão",
    nanos: "nanós",
    nasca: "nasça",
    nasco: "nasço",
    navao: "navaó",
    nacao: "nação",
    negao: "negão",
    nenem: "neném",
    nevao: "nevão",
    niboe: "niboé",
    nifao: "nifão",
    nilgo: "nilgó",
    niopo: "niopó",
    nipao: "nipão",
    nogao: "nogão",
    nomea: "nomeá",
    norca: "norça",
    nocao: "noção",
    nucao: "nução",
    nabao: "nábão",
    nacar: "nácar",
    nagua: "nágua",
    nasio: "násio",
    nassi: "nássi",
    nasua: "násua",
    natia: "nátia",
    navia: "návia",
    naxia: "náxia",
    naxio: "náxio",
    nazir: "názir",
    negre: "nègre",
    nebel: "nébel",
    nedio: "nédio",
    nelia: "nélia",
    neons: "néons",
    neper: "néper",
    nepia: "népia",
    neria: "néria",
    nerio: "nério",
    nevoa: "névoa",
    nenia: "nênia",
    nenio: "nênio",
    niger: "níger",
    nigua: "nígua",
    nilio: "nílio",
    nimio: "nímio",
    niton: "níton",
    nivel: "nível",
    niveo: "níveo",
    nodio: "nódio",
    nodoa: "nódoa",
    noias: "nóias",
    nomos: "nómos",
    noria: "nória",
    norio: "nório",
    novea: "nóvea",
    noxio: "nóxio",
    nonio: "nônio",
    nubil: "núbil",
    nubio: "núbio",
    nucio: "núcio",
    nufar: "núfar",
    numen: "númen",
    nuveo: "núveo",
    nuxia: "núxia",
    obtem: "obtém",
    obvem: "obvém",
    odeao: "odeão",
    odeon: "odéon",
    ofaie: "ofaié",
    oitao: "oitão",
    oicam: "oiçam",
    olare: "olaré",
    olhao: "olhão",
    omala: "omalá",
    ombra: "ombrã",
    omele: "omelê",
    onfua: "onfuá",
    oncas: "onças",
    opora: "oporá",
    opcao: "opção",
    opoem: "opõem",
    opoes: "opões",
    oquea: "oqueá",
    orixa: "orixá",
    orlea: "orleã",
    orobo: "orobó",
    oruco: "orucó",
    orcai: "orçai",
    orcam: "orçam",
    orcar: "orçar",
    orcaz: "orçaz",
    orcou: "orçou",
    ototo: "ototó",
    ourem: "ourém",
    outao: "outão",
    oucam: "ouçam",
    oucas: "ouças",
    oucao: "oução",
    oxala: "oxalá",
    oasis: "oásis",
    ocaim: "oçãim",
    oidio: "oídio",
    pacai: "pacaí",
    pacha: "pachã",
    pacao: "pacão",
    pades: "padês",
    paete: "paetê",
    pagao: "pagão",
    paiao: "paião",
    pajeu: "pajeú",
    pajao: "pajão",
    pajes: "pajés",
    palao: "palão",
    pamoa: "pamoá",
    panro: "panró",
    panto: "pantó",
    panao: "panão",
    papao: "papão",
    paqua: "paquã",
    paque: "paquê",
    parne: "parné",
    parui: "paruí",
    parao: "parão",
    patai: "pataí",
    patoa: "patoá",
    patua: "patuá",
    patao: "patão",
    patem: "patém",
    pates: "patês",
    pavao: "pavão",
    paves: "pavês",
    paxau: "paxaú",
    pazao: "pazão",
    pacos: "paços",
    paiba: "paíba",
    pauna: "paúna",
    paura: "paúra",
    peaca: "peaça",
    pecem: "pecém",
    pegao: "pegão",
    pelao: "pelão",
    pelem: "pelém",
    pengo: "pengó",
    penao: "penão",
    perea: "pereá",
    perne: "perné",
    peroa: "peroá",
    petia: "petiá",
    petiu: "petiú",
    petao: "petão",
    petem: "petém",
    pexao: "pexão",
    pezao: "pezão",
    pecam: "peçam",
    pecas: "peças",
    peoes: "peões",
    peuco: "peúco",
    peuga: "peúga",
    peule: "peúle",
    peuva: "peúva",
    piafe: "piafé",
    piape: "piapé",
    piaui: "piauí",
    piaca: "piaçá",
    piaco: "piaçó",
    picau: "picaú",
    picua: "picuá",
    picui: "picuí",
    picao: "picão",
    pidao: "pidão",
    pifao: "pifão",
    pilao: "pilão",
    pileu: "piléu",
    pinhe: "pinhé",
    pinca: "pinça",
    pinco: "pinço",
    pineu: "pinéu",
    pioie: "pioié",
    pioro: "pioró",
    pirai: "piraí",
    pirau: "piraú",
    piroa: "piroá",
    pirua: "piruá",
    pirao: "pirão",
    pisao: "pisão",
    pitiu: "pitiú",
    pitua: "pituã",
    pitui: "pituí",
    pitao: "pitão",
    pitem: "pitém",
    piteu: "pitéu",
    pivos: "pivôs",
    pixua: "pixuá",
    pixeu: "pixéu",
    pioes: "piões",
    piuba: "piúba",
    piuca: "piúca",
    piugo: "piúgo",
    piuna: "piúna",
    piuva: "piúva",
    place: "placê",
    plato: "platô",
    poacu: "poaçu",
    podao: "podão",
    podoi: "podói",
    polea: "poleá",
    poles: "polés",
    ponca: "poncã",
    ponco: "poncó",
    pongo: "pongó",
    ponje: "ponjé",
    popia: "popiã",
    popao: "popão",
    poras: "porás",
    porao: "porão",
    porem: "porém",
    povao: "povão",
    pocal: "poçal",
    pocas: "poças",
    pocos: "poços",
    pocao: "poção",
    praja: "prajá",
    praca: "praça",
    preve: "prevê",
    preco: "preço",
    priao: "prião",
    proca: "procá",
    preon: "préon",
    prion: "príon",
    puaco: "puaço",
    puacu: "puaçu",
    pucto: "puctó",
    pulao: "pulão",
    punde: "pundé",
    purui: "puruí",
    puvia: "puviá",
    puxao: "puxão",
    puiam: "puíam",
    puias: "puías",
    puido: "puído",
    puira: "puíra",
    puita: "puíta",
    padoa: "pádoa",
    padua: "pádua",
    pafia: "páfia",
    pafio: "páfio",
    palea: "pálea",
    parea: "párea",
    pareo: "páreo",
    pario: "pário",
    parsi: "pársi",
    pateo: "páteo",
    pater: "páter",
    patio: "pátio",
    panax: "pânax",
    panus: "pânus",
    pelio: "pélio",
    peone: "péone",
    pepia: "pépia",
    penis: "pênis",
    picea: "pícea",
    piceo: "píceo",
    piero: "píero",
    pifio: "pífio",
    pijin: "píjin",
    pileo: "píleo",
    pineo: "píneo",
    pinus: "pínus",
    piper: "píper",
    piqua: "píqua",
    piseo: "píseo",
    pisin: "písin",
    pitia: "pítia",
    pitio: "pítio",
    piton: "píton",
    podex: "pódex",
    podio: "pódio",
    polen: "pólen",
    polex: "pólex",
    polio: "pólio",
    polis: "pólis",
    polux: "pólux",
    porio: "pório",
    potea: "pótea",
    povoa: "póvoa",
    ponei: "pônei",
    pubis: "púbis",
    pugil: "púgil",
    pulex: "púlex",
    quale: "qualé",
    quaro: "quaró",
    quata: "quatá",
    quece: "quecé",
    quele: "quelé",
    quere: "querê",
    quice: "quicé",
    quime: "quimé",
    quipa: "quipá",
    quipe: "quipé",
    quiui: "quiuí",
    quixo: "quixó",
    quico: "quiço",
    quica: "quiçá",
    quepi: "quépi",
    rabao: "rabão",
    radao: "radão",
    ragla: "raglã",
    raivo: "raivó",
    raiao: "raião",
    rajao: "rajão",
    ralao: "ralão",
    ranco: "ranço",
    rapao: "rapão",
    rasao: "rasão",
    ratao: "ratão",
    razao: "razão",
    racas: "raças",
    racao: "ração",
    raita: "raíta",
    reaca: "reaça",
    rebem: "rebém",
    recha: "rechã",
    recho: "rechô",
    recao: "recão",
    recem: "recém",
    redem: "redém",
    refem: "refém",
    reivo: "reivó",
    rejao: "rejão",
    relao: "relão",
    remoi: "remói",
    renao: "renão",
    repos: "repôs",
    repoe: "repõe",
    retem: "retém",
    revem: "revém",
    reves: "revés",
    rezao: "rezão",
    reuna: "reúna",
    reune: "reúne",
    reuno: "reúno",
    reuso: "reúso",
    rifao: "rifão",
    rijao: "rijão",
    rirao: "rirão",
    risao: "risão",
    ritao: "ritão",
    ricar: "riçar",
    ricol: "riçol",
    riuta: "riúta",
    robos: "robôs",
    roclo: "rocló",
    rocao: "rocão",
    rodao: "rodão",
    rojao: "rojão",
    rolao: "rolão",
    romao: "romão",
    romas: "romãs",
    rondo: "rondó",
    rongo: "rongó",
    ronto: "rontó",
    rosao: "rosão",
    rocai: "roçai",
    rocam: "roçam",
    rocar: "roçar",
    rocas: "roças",
    rocou: "roçou",
    roiam: "roíam",
    roias: "roías",
    roido: "roído",
    ruaca: "ruaça",
    ruira: "ruirá",
    runco: "runcó",
    rucar: "ruçar",
    ruiam: "ruíam",
    ruias: "ruías",
    ruido: "ruído",
    ruina: "ruína",
    racio: "rácio",
    radio: "rádio",
    radon: "rádon",
    rafia: "ráfia",
    ragio: "rágio",
    raqui: "ráqui",
    rameo: "râmeo",
    rebus: "rébus",
    recio: "récio",
    redea: "rédea",
    redia: "rédia",
    regia: "régia",
    regie: "régie",
    regio: "régio",
    regua: "régua",
    renio: "rénio",
    revoa: "révoa",
    rexia: "réxia",
    ricio: "rício",
    rieis: "ríeis",
    rigel: "rígel",
    rimel: "rímel",
    ripio: "rípio",
    ritio: "rítio",
    riton: "ríton",
    rober: "róber",
    robur: "róbur",
    rocio: "rócio",
    rodio: "ródio",
    ropia: "rópia",
    rosea: "rósea",
    roseo: "róseo",
    rotia: "rótia",
    rubeo: "rúbeo",
    rubia: "rúbia",
    rufio: "rúfio",
    rugbi: "rúgbi",
    rugio: "rúgio",
    rumen: "rúmen",
    sabia: "sabiá",
    sabiu: "sabiú",
    sabao: "sabão",
    sacai: "sacaí",
    sache: "sachê",
    sacue: "sacuê",
    sacao: "sacão",
    sadra: "sadrá",
    sadao: "sadão",
    safao: "safão",
    sagua: "saguá",
    saije: "saijé",
    saine: "sainé",
    saipe: "saipé",
    saira: "sairá",
    saire: "sairé",
    saiva: "saivá",
    saixe: "saixê",
    saiao: "saião",
    salao: "salão",
    salem: "salém",
    samao: "samão",
    sapua: "sapuá",
    sapao: "sapão",
    sarne: "sarné",
    saroe: "saroé",
    sarua: "saruá",
    sarue: "saruê",
    sarao: "sarão",
    sarca: "sarça",
    sauia: "sauiá",
    saupe: "saupé",
    saura: "saurá",
    savia: "saviá",
    saxao: "saxão",
    sazao: "sazão",
    saico: "saíco",
    saida: "saída",
    saido: "saído",
    saita: "saíta",
    sauba: "saúba",
    sauco: "saúco",
    sauda: "saúda",
    saude: "saúde",
    saudo: "saúdo",
    sauva: "saúva",
    sedao: "sedão",
    sedem: "sedém",
    segao: "segão",
    seica: "seiça",
    selao: "selão",
    senao: "senão",
    seriu: "seriú",
    serta: "sertã",
    seras: "serás",
    serao: "serão",
    seros: "serós",
    sezao: "sezão",
    secao: "seção",
    sifao: "sifão",
    sigmo: "sigmó",
    simao: "simão",
    sinha: "sinhá",
    sinho: "sinhô",
    sinxo: "sinxó",
    sinao: "sinão",
    siriu: "siriú",
    sisso: "sissó",
    sisao: "sisão",
    sioes: "siões",
    siuba: "siúba",
    sobpe: "sobpé",
    socoi: "socoí",
    socao: "socão",
    sofas: "sofás",
    sogua: "soguá",
    solao: "solão",
    somie: "somiê",
    sopao: "sopão",
    sorca: "sorça",
    sotaa: "sotaã",
    soveu: "sovéu",
    soido: "soído",
    suacu: "suaçu",
    sufle: "suflé",
    sulao: "sulão",
    supos: "supôs",
    supoe: "supõe",
    surca: "surça",
    susao: "susão",
    sutia: "sutiã",
    sucao: "sução",
    suina: "suína",
    suino: "suíno",
    suite: "suíte",
    suica: "suíça",
    suico: "suíço",
    suomi: "suômi",
    sabio: "sábio",
    safeo: "sáfeo",
    sagio: "ságio",
    salio: "sálio",
    salix: "sálix",
    sapia: "sápia",
    savel: "sável",
    saxeo: "sáxeo",
    samio: "sâmio",
    sandi: "sândi",
    sanie: "sânie",
    secia: "sécia",
    secio: "sécio",
    selio: "sélio",
    sepia: "sépia",
    sepio: "sépio",
    sequi: "séqui",
    serie: "série",
    serio: "sério",
    serum: "sérum",
    sesea: "sésea",
    sesia: "sésia",
    seter: "séter",
    semea: "sêmea",
    semen: "sêmen",
    semis: "sêmis",
    senio: "sênio",
    sicon: "sícon",
    siler: "síler",
    silex: "sílex",
    simel: "símel",
    simia: "símia",
    simil: "símil",
    simio: "símio",
    sinus: "sínus",
    sirio: "sírio",
    sitio: "sítio",
    socia: "sócia",
    socio: "sócio",
    sodio: "sódio",
    solea: "sólea",
    soleo: "sóleo",
    solio: "sólio",
    sorex: "sórex",
    soria: "sória",
    soror: "sóror",
    sosia: "sósia",
    sotao: "sótão",
    suber: "súber",
    sucia: "súcia",
    sucio: "súcio",
    surio: "súrio",
    tabao: "tabão",
    tacua: "tacuá",
    tacao: "tacão",
    tafia: "tafiá",
    tagua: "taguá",
    taifo: "taifó",
    talao: "talão",
    tamao: "tamão",
    tanca: "tancá",
    tapia: "tapiá",
    tapii: "tapií",
    tapiu: "tapiú",
    tapao: "tapão",
    tarta: "tartã",
    taros: "tarós",
    tatui: "tatuí",
    tatze: "tatzé",
    tavua: "tavuá",
    tavao: "tavão",
    tacas: "taças",
    tedeu: "tedéu",
    tegao: "tegão",
    teiro: "teiró",
    teite: "teité",
    telao: "telão",
    tembe: "tembé",
    temne: "temné",
    temao: "temão",
    tenca: "tença",
    teras: "terás",
    terao: "terão",
    terca: "terça",
    terco: "terço",
    tesao: "tesão",
    teteu: "tetéu",
    tecam: "teçam",
    tecas: "teças",
    teina: "teína",
    teuba: "teúba",
    teudo: "teúdo",
    tiata: "tiatã",
    tifao: "tifão",
    timbe: "timbé",
    timbo: "timbó",
    timao: "timão",
    tinho: "tinhó",
    tiote: "tiotê",
    tipio: "tipió",
    tipao: "tipão",
    tipoi: "tipói",
    tirio: "tirió",
    tirao: "tirão",
    titao: "titão",
    titas: "titãs",
    tiupa: "tiupá",
    ticao: "tição",
    tiuba: "tiúba",
    tiuva: "tiúva",
    toica: "toiça",
    toico: "toiço",
    tolao: "tolão",
    tomas: "tomás",
    tomao: "tomão",
    torai: "toraí",
    torao: "torão",
    torca: "torça",
    torco: "torço",
    torem: "torém",
    tosao: "tosão",
    trara: "trará",
    traca: "traça",
    traco: "traço",
    treno: "trenó",
    trico: "tricô",
    tripe: "tripé",
    truao: "truão",
    trois: "tróis",
    tuaia: "tuaiá",
    tucao: "tucão",
    tufao: "tufão",
    turne: "turnê",
    tutao: "tutão",
    tuira: "tuíra",
    tabua: "tábua",
    tacia: "tácia",
    tafio: "táfio",
    taler: "táler",
    talia: "tália",
    talio: "tálio",
    talus: "tálus",
    tasio: "tásio",
    tatil: "tátil",
    taxis: "táxis",
    taxon: "táxon",
    tamia: "tâmia",
    tamil: "tâmil",
    tamul: "tâmul",
    tedio: "tédio",
    telio: "télio",
    telos: "télos",
    terio: "tério",
    tesio: "tésio",
    tesis: "tésis",
    tetio: "tétio",
    tetis: "tétis",
    tetum: "tétum",
    temio: "têmio",
    tenia: "tênia",
    tenis: "tênis",
    tenue: "tênue",
    tiade: "tíade",
    tibia: "tíbia",
    tibio: "tíbio",
    ticio: "tício",
    tifia: "tífia",
    tilea: "tílea",
    tilia: "tília",
    timio: "tímio",
    tinea: "tínea",
    tiner: "tíner",
    tiris: "tíris",
    toino: "tóino",
    tolia: "tólia",
    torax: "tórax",
    toria: "tória",
    torio: "tório",
    tomio: "tômio",
    tonus: "tônus",
    tuber: "túber",
    tulio: "túlio",
    tunel: "túnel",
    tunis: "túnis",
    tutsi: "tútsi",
    uabui: "uabuí",
    uaica: "uaicá",
    uaita: "uaitá",
    uambe: "uambé",
    uamoi: "uamói",
    uania: "uaniá",
    uapes: "uapés",
    uaria: "uariá",
    uaupe: "uaupé",
    uaura: "uaurá",
    uaucu: "uauçu",
    uaxua: "uaxuá",
    uacai: "uaçaí",
    uaiba: "uaíba",
    ubata: "ubatã",
    ubucu: "ubuçu",
    uchao: "uchão",
    ucima: "ucimá",
    uiape: "uiapé",
    uique: "uiqué",
    ujara: "ujará",
    umaua: "umauá",
    unhao: "unhão",
    uniao: "união",
    untue: "untué",
    uncao: "unção",
    uracu: "uraçu",
    uruba: "urubá",
    uruma: "urumã",
    urupa: "urupá",
    urupe: "urupê",
    urucu: "uruçu",
    ustao: "ustão",
    uvaca: "uvaça",
    uvacu: "uvaçu",
    uiste: "uíste",
    vacua: "vacuá",
    vacao: "vacão",
    vagao: "vagão",
    vaixa: "vaixá",
    valao: "valão",
    vance: "vancê",
    varao: "varão",
    vassa: "vassá",
    vaura: "vaurá",
    vazao: "vazão",
    venca: "vença",
    venco: "venço",
    verge: "vergê",
    verao: "verão",
    verca: "verça",
    vetao: "vetão",
    vidao: "vidão",
    vilao: "vilão",
    virao: "virão",
    visao: "visão",
    vivio: "vivió",
    viviu: "viviú",
    vicar: "viçar",
    viuva: "viúva",
    viuve: "viúve",
    viuvo: "viúvo",
    voaco: "voaço",
    voces: "vocês",
    vonce: "voncê",
    vouve: "vouvê",
    vovos: "vovós",
    vozao: "vozão",
    vacuo: "vácuo",
    valea: "válea",
    vatio: "vátio",
    velea: "vélea",
    velia: "vélia",
    velum: "vélum",
    verio: "vério",
    venia: "vênia",
    venus: "vênus",
    vicio: "vício",
    vicoa: "vícoa",
    video: "vídeo",
    vidia: "vídia",
    vieis: "víeis",
    vigil: "vígil",
    vimea: "vímea",
    vinea: "vínea",
    vineo: "víneo",
    virus: "vírus",
    vitex: "vítex",
    vitis: "vítis",
    volei: "vôlei",
    vomer: "vômer",
    xabeu: "xabéu",
    xamas: "xamãs",
    xango: "xangó",
    xaoro: "xaorô",
    xarem: "xarém",
    xareu: "xaréu",
    xerem: "xerém",
    xexeu: "xexéu",
    ximbe: "ximbé",
    ximao: "ximão",
    xinto: "xintó",
    xuate: "xuatê",
    xenon: "xénon",
    xenia: "xênia",
    xenio: "xênio",
    xifio: "xífio",
    xilon: "xílon",
    zagao: "zagão",
    zambe: "zambê",
    zarao: "zarão",
    zuruo: "zuruó",
    zuido: "zuído",
    zaibo: "zãibo",
    zinia: "zínia",
    ziper: "zíper",
    abaco: "ábaco",
    abavo: "ábavo",
    abies: "ábies",
    abiga: "ábiga",
    abrus: "ábrus",
    absis: "ábsis",
    acade: "ácade",
    acare: "ácare",
    acaro: "ácaro",
    acave: "ácave",
    acavo: "ácavo",
    acida: "ácida",
    acido: "ácido",
    acino: "ácino",
    aclis: "áclis",
    acope: "ácope",
    acopo: "ácopo",
    acoro: "ácoro",
    acron: "ácron",
    actia: "áctia",
    adipe: "ádipe",
    adipo: "ádipo",
    afodo: "áfodo",
    agamo: "ágamo",
    agapa: "ágapa",
    agape: "ágape",
    agaro: "ágaro",
    agata: "ágata",
    agate: "ágate",
    ageis: "ágeis",
    ageno: "ágeno",
    agino: "ágino",
    agios: "ágios",
    agono: "ágono",
    agria: "ágria",
    aguam: "águam",
    aguas: "águas",
    agues: "águes",
    aguia: "águia",
    alalo: "álalo",
    alamo: "álamo",
    album: "álbum",
    alcea: "álcea",
    alemo: "álemo",
    alhia: "álhia",
    alibi: "álibi",
    alica: "álica",
    alife: "álife",
    alpea: "álpea",
    alula: "álula",
    alveo: "álveo",
    apage: "ápage",
    apice: "ápice",
    apios: "ápios",
    apira: "ápira",
    apiro: "ápiro",
    apoca: "ápoca",
    apode: "ápode",
    aporo: "áporo",
    apoto: "ápoto",
    aqueo: "áqueo",
    arabe: "árabe",
    arcio: "árcio",
    ardea: "árdea",
    ardua: "árdua",
    arduo: "árduo",
    areas: "áreas",
    argio: "árgio",
    argon: "árgon",
    arias: "árias",
    arida: "árida",
    arido: "árido",
    aries: "áries",
    arsis: "ársis",
    arula: "árula",
    asaro: "ásaro",
    ascio: "áscio",
    ascon: "áscon",
    ascua: "áscua",
    aspis: "áspis",
    aster: "áster",
    astur: "ástur",
    atele: "átele",
    atila: "átila",
    atimo: "átimo",
    atipo: "átipo",
    atomo: "átomo",
    atona: "átona",
    atono: "átono",
    atrio: "átrio",
    audio: "áudio",
    aurea: "áurea",
    aureo: "áureo",
    avida: "ávida",
    avido: "ávido",
    avila: "ávila",
    axilo: "áxilo",
    axone: "áxone",
    azigo: "ázigo",
    azimo: "ázimo",
    amago: "âmago",
    ambar: "âmbar",
    amnio: "âmnio",
    animo: "ânimo",
    anion: "ânion",
    anodo: "ânodo",
    ansia: "ânsia",
    ebano: "ébano",
    ebeno: "ébeno",
    ebrio: "ébrio",
    ebulo: "ébulo",
    ecano: "écano",
    ecope: "écope",
    ecran: "écran",
    ecula: "écula",
    eculo: "éculo",
    edico: "édico",
    edipo: "édipo",
    efeta: "éfeta",
    efira: "éfira",
    efode: "éfode",
    efodo: "éfodo",
    eforo: "éforo",
    egide: "égide",
    egrio: "égrio",
    eguas: "éguas",
    elafo: "élafo",
    elate: "élate",
    enula: "énula",
    epica: "épica",
    epico: "épico",
    epoca: "época",
    epura: "épura",
    equio: "équio",
    erbio: "érbio",
    erebo: "érebo",
    ereis: "éreis",
    ergio: "érgio",
    erica: "érica",
    erico: "érico",
    erina: "érina",
    esipo: "ésipo",
    esoce: "ésoce",
    esula: "ésula",
    etego: "étego",
    etica: "ética",
    etico: "ético",
    etigo: "étigo",
    etimo: "étimo",
    evano: "évano",
    eider: "êider",
    emero: "êmero",
    emese: "êmese",
    emico: "êmico",
    emulo: "êmulo",
    exito: "êxito",
    exodo: "êxodo",
    exule: "êxule",
    iamos: "íamos",
    icaro: "ícaro",
    icone: "ícone",
    icore: "ícore",
    ictis: "íctis",
    ictus: "íctus",
    idola: "ídola",
    idolo: "ídolo",
    igneo: "ígneo",
    ileon: "íleon",
    ilion: "ílion",
    impar: "ímpar",
    impia: "ímpia",
    impio: "ímpio",
    inaco: "ínaco",
    india: "índia",
    indio: "índio",
    indri: "índri",
    indua: "índua",
    ingua: "íngua",
    inion: "ínion",
    insua: "ínsua",
    inubo: "ínubo",
    inula: "ínula",
    invio: "ínvio",
    isate: "ísate",
    itaca: "ítaca",
    italo: "ítalo",
    itria: "ítria",
    itrio: "ítrio",
    obelo: "óbelo",
    obice: "óbice",
    obito: "óbito",
    obolo: "óbolo",
    obulo: "óbulo",
    obvia: "óbvia",
    obvio: "óbvio",
    ocimo: "ócimo",
    ocrea: "ócrea",
    oculo: "óculo",
    odios: "ódios",
    ofrio: "ófrio",
    ofris: "ófris",
    oleos: "óleos",
    oleum: "óleum",
    omnia: "ómnia",
    opalo: "ópalo",
    opera: "ópera",
    opido: "ópido",
    orfia: "órfia",
    orfao: "órfão",
    orfas: "órfãs",
    orgio: "órgio",
    orgao: "órgão",
    osido: "ósido",
    osmio: "ósmio",
    ossea: "óssea",
    osseo: "ósseo",
    ostio: "óstio",
    otica: "ótica",
    otico: "ótico",
    otima: "ótima",
    otimo: "ótimo",
    ovalo: "óvalo",
    ovano: "óvano",
    ovnis: "óvnis",
    ovulo: "óvulo",
    oxido: "óxido",
    omega: "ômega",
    ubere: "úbere",
    ubero: "úbero",
    umero: "úmero",
    umida: "úmida",
    umido: "úmido",
    uncia: "úncia",
    uncus: "úncus",
    ungue: "úngue",
    unica: "única",
    unico: "único",
    unsia: "únsia",
    uraco: "úraco",
    urano: "úrano",
    urceo: "úrceo",
    urico: "úrico",
    uropo: "úropo",
    usnea: "úsnea",
    uteis: "úteis",
    utero: "útero",
    uvico: "úvico",
    uvido: "úvido",
    uvula: "úvula",
  },
  Zf = [
    "termo",
    "suíte",
    "ávido",
    "festa",
    "bebia",
    "honra",
    "ouvir",
    "pesco",
    "fungo",
    "pagam",
    "ginga",
    "pinta",
    "poder",
    "útero",
    "pilha",
    "sarar",
    "fruta",
    "piano",
    "notar",
    "musgo",
    "tensa",
    "melão",
    "feliz",
    "miojo",
    "pagos",
    "texto",
    "mamãe",
    "ameno",
    "chuva",
    "coral",
    "forte",
    "tonta",
    "temor",
    "ligar",
    "rolar",
    "navio",
    "limbo",
    "calvo",
    "fedor",
    "balde",
    "oxalá",
    "talco",
    "lábia",
    "crime",
    "grade",
    "carta",
    "flora",
    "comum",
    "fatal",
    "pecar",
    "feroz",
    "vírus",
    "armar",
    "couro",
    "êxito",
    "ecoar",
    "balão",
    "falir",
    "tecer",
    "arena",
    "justo",
    "árido",
    "ruiva",
    "múmia",
    "fogão",
    "dupla",
    "touca",
    "sogro",
    "ósseo",
    "treta",
    "átomo",
    "sadio",
    "cólon",
    "pátio",
    "molas",
    "certo",
    "risco",
    "bossa",
    "porre",
    "tigre",
    "vocal",
    "treze",
    "sueco",
    "verbo",
    "latim",
    "povos",
    "longo",
    "lotar",
    "depor",
    "cento",
    "trava",
    "latão",
    "ditos",
    "tórax",
    "polir",
    "cacos",
    "túnel",
    "lindo",
    "pegar",
    "pilar",
    "passo",
    "piada",
    "puxar",
    "taças",
    "manta",
    "barba",
    "subir",
    "tosse",
    "adega",
    "veias",
    "mesma",
    "mirim",
    "mansa",
    "nobre",
    "grama",
    "ritmo",
    "samba",
    "ardor",
    "daqui",
    "bravo",
    "surfe",
    "tanto",
    "imune",
    "lucro",
    "finos",
    "bocas",
    "toldo",
    "major",
    "cabos",
    "estar",
    "focal",
    "ações",
    "queda",
    "juros",
    "elite",
    "burro",
    "fundo",
    "duelo",
    "breve",
    "bolso",
    "linha",
    "parir",
    "furar",
    "quina",
    "pasta",
    "suíno",
    "dosar",
    "cervo",
    "sujar",
    "corda",
    "macia",
    "reler",
    "musas",
    "verme",
    "focar",
    "maçãs",
    "noção",
    "anual",
    "aérea",
    "cerco",
    "sócio",
    "porca",
    "fraco",
    "punho",
    "acima",
    "varão",
    "bolha",
    "tanga",
    "globo",
    "rampa",
    "goela",
    "reais",
    "cheio",
    "fosso",
    "pouco",
    "danos",
    "salas",
    "mimar",
    "sanha",
    "óxido",
    "suave",
    "época",
    "antro",
    "total",
    "jóias",
    "polvo",
    "jejum",
    "atriz",
    "recuo",
    "ágeis",
    "trenó",
    "fluir",
    "muito",
    "ópera",
    "ficar",
    "bucha",
    "magro",
    "frota",
    "série",
    "ácido",
    "ápice",
    "líder",
    "idoso",
    "multa",
    "primo",
    "garça",
    "banal",
    "juíza",
    "jorro",
    "sismo",
    "mercê",
    "pônei",
    "etapa",
    "modas",
    "colar",
    "muita",
    "papel",
    "ruela",
    "meias",
    "gripe",
    "causa",
    "menor",
    "nulos",
    "caule",
    "rubor",
    "optar",
    "redor",
    "nação",
    "galho",
    "roubo",
    "parto",
    "cenas",
    "pódio",
    "lesar",
    "telão",
    "reúso",
    "odiar",
    "usual",
    "latir",
    "altos",
    "livre",
    "vosso",
    "geada",
    "etnia",
    "trevo",
    "rezar",
    "bucal",
    "vetor",
    "filho",
    "miolo",
    "ordem",
    "valor",
    "filha",
    "antes",
    "vetar",
    "surra",
    "prata",
    "ceder",
    "pirão",
    "frear",
    "quilo",
    "rombo",
    "lomba",
    "praia",
    "urnas",
    "aveia",
    "picar",
    "arcar",
    "única",
    "mágoa",
    "jaula",
    "gerar",
    "trena",
    "gemer",
    "riste",
    "lábio",
    "busto",
    "visar",
    "velha",
    "aéreo",
    "adaga",
    "crase",
    "feras",
    "missa",
    "cobra",
    "idéia",
    "briga",
    "dardo",
    "berço",
    "palmo",
    "ralar",
    "reles",
    "blusa",
    "super",
    "grata",
    "longa",
    "tarso",
    "vulto",
    "lenda",
    "grego",
    "pinos",
    "flúor",
    "obeso",
    "sauna",
    "assim",
    "troco",
    "úteis",
    "infra",
    "pudor",
    "cofre",
    "prece",
    "junho",
    "manco",
    "pisar",
    "posse",
    "copas",
    "ninfa",
    "gruta",
    "regra",
    "citar",
    "mural",
    "gíria",
    "ruína",
    "fases",
    "faraó",
    "míope",
    "mando",
    "frios",
    "gelar",
    "chave",
    "sobra",
    "opaco",
    "lagos",
    "corpo",
    "doses",
    "basco",
    "caída",
    "vinda",
    "sujos",
    "igual",
    "lápis",
    "julho",
    "acaso",
    "dados",
    "favor",
    "pente",
    "beata",
    "chulo",
    "rumos",
    "cubos",
    "tento",
    "toque",
    "polpa",
    "ombro",
    "raras",
    "pneus",
    "canil",
    "funil",
    "perto",
    "coala",
    "amplo",
    "orgia",
    "doces",
    "sobre",
    "tédio",
    "pinça",
    "motel",
    "trufa",
    "voraz",
    "azedo",
    "coeso",
    "ácaro",
    "calmo",
    "enfim",
    "mitos",
    "feios",
    "palha",
    "andar",
    "crepe",
    "pingo",
    "avelã",
    "malte",
    "saída",
    "monge",
    "salto",
    "lótus",
    "rímel",
    "lauda",
    "damas",
    "sadia",
    "truco",
    "sério",
    "oeste",
    "selva",
    "reter",
    "bolsa",
    "anexo",
    "renda",
    "lobos",
    "vício",
    "zebra",
    "modos",
    "praxe",
    "pudim",
    "birra",
    "praça",
    "pedra",
    "olhar",
    "pizza",
    "banho",
    "bucho",
    "afins",
    "maior",
    "cabra",
    "visão",
    "irado",
    "razão",
    "macio",
    "troca",
    "salmo",
    "casta",
    "mídia",
    "trupe",
    "morna",
    "falso",
    "lidar",
    "afeto",
    "verso",
    "belos",
    "páreo",
    "vídeo",
    "denso",
    "herói",
    "moeda",
    "vaiar",
    "cópia",
    "coçar",
    "aulas",
    "ganho",
    "chapa",
    "jarra",
    "velho",
    "grilo",
    "sigma",
    "farsa",
    "sigla",
    "clone",
    "cesta",
    "anjos",
    "rugir",
    "luzes",
    "árdua",
    "parvo",
    "censo",
    "virar",
    "apito",
    "gosto",
    "casto",
    "fraca",
    "agudo",
    "sovar",
    "fatos",
    "torso",
    "tumba",
    "veste",
    "leões",
    "secar",
    "berro",
    "sutis",
    "bispo",
    "loção",
    "pesar",
    "digno",
    "bamba",
    "broca",
    "hiato",
    "clube",
    "totem",
    "prumo",
    "meios",
    "vulgo",
    "esqui",
    "épico",
    "minha",
    "ainda",
    "remar",
    "manso",
    "ousar",
    "viral",
    "óvulo",
    "trote",
    "artes",
    "facas",
    "brava",
    "meiga",
    "campo",
    "levar",
    "preta",
    "lebre",
    "pobre",
    "gesso",
    "sabiá",
    "freio",
    "marte",
    "clara",
    "magos",
    "reino",
    "murro",
    "calar",
    "prosa",
    "feita",
    "folga",
    "terço",
    "patas",
    "vogal",
    "zíper",
    "divas",
    "borda",
    "penar",
    "errar",
    "névoa",
    "morto",
    "forma",
    "áureo",
    "vapor",
    "circo",
    "faixa",
    "beijo",
    "bufão",
    "pedir",
    "tropa",
    "vital",
    "vento",
    "cárie",
    "vespa",
    "negro",
    "pardo",
    "local",
    "beato",
    "quais",
    "frase",
    "sucos",
    "botão",
    "balsa",
    "foice",
    "nozes",
    "dente",
    "cedro",
    "aceno",
    "repor",
    "leque",
    "drama",
    "forno",
    "tarde",
    "sarro",
    "certa",
    "trama",
    "milho",
    "dreno",
    "carma",
    "poeta",
    "máfia",
    "lenço",
    "nunca",
    "ficha",
    "ótica",
    "molho",
    "barão",
    "cútis",
    "toada",
    "trens",
    "chalé",
    "ciclo",
    "leigo",
    "golpe",
    "haver",
    "varal",
    "ritos",
    "fibra",
    "nervo",
    "irmãs",
    "sagaz",
    "gente",
    "pombo",
    "zinco",
    "pavor",
    "feixe",
    "pular",
    "titia",
    "deter",
    "axila",
    "brejo",
    "rever",
    "naipe",
    "arder",
    "então",
    "pleno",
    "parma",
    "juízo",
    "noite",
    "seiva",
    "furor",
    "janta",
    "mover",
    "vidro",
    "votar",
    "pilha",
    "brasa",
    "areal",
    "jarro",
    "poços",
    "ninja",
    "nossa",
    "boiar",
    "outra",
    "pires",
    "regar",
    "boato",
    "sumir",
    "lenta",
    "loira",
    "cinza",
    "fisco",
    "agora",
    "lazer",
    "pista",
    "pulga",
    "fosca",
    "males",
    "conto",
    "tocha",
    "retas",
    "cuspe",
    "persa",
    "gêmeo",
    "tenda",
    "águia",
    "meros",
    "robôs",
    "lados",
    "areia",
    "impor",
    "vigor",
    "médio",
    "matiz",
    "órgão",
    "senso",
    "novas",
    "turco",
    "densa",
    "balas",
    "bicho",
    "galão",
    "atual",
    "monte",
    "tribo",
    "tarda",
    "baita",
    "ampla",
    "floco",
    "banjo",
    "olhos",
    "gasto",
    "fácil",
    "acesa",
    "torto",
    "horta",
    "alçar",
    "vivos",
    "gaita",
    "solto",
    "cetro",
    "redes",
    "criar",
    "sacro",
    "banir",
    "prato",
    "gorro",
    "miúdo",
    "moída",
    "aliar",
    "bater",
    "fauna",
    "norte",
    "haste",
    "alado",
    "bloco",
    "pinga",
    "ético",
    "corja",
    "morno",
    "ideal",
    "fusão",
    "verão",
    "vozes",
    "bílis",
    "ímpar",
    "sogra",
    "jovem",
    "testa",
    "metal",
    "falsa",
    "bruto",
    "tenso",
    "dique",
    "fator",
    "sutil",
    "grupo",
    "matar",
    "motor",
    "meses",
    "vazio",
    "cujos",
    "parda",
    "carpa",
    "árabe",
    "plebe",
    "advir",
    "punir",
    "rival",
    "trave",
    "tricô",
    "lento",
    "sarda",
    "gozar",
    "caber",
    "sexta",
    "sacra",
    "rolha",
    "açude",
    "casos",
    "cisão",
    "chata",
    "ossos",
    "expor",
    "venda",
    "casco",
    "banco",
    "bomba",
    "sinal",
    "horto",
    "ramos",
    "fonte",
    "leito",
    "cobre",
    "tíbia",
    "cinco",
    "noiva",
    "ponto",
    "aluno",
    "traje",
    "canal",
    "rouco",
    "boate",
    "mútuo",
    "caros",
    "lente",
    "lares",
    "sacar",
    "porém",
    "feudo",
    "vezes",
    "carga",
    "invés",
    "presa",
    "geral",
    "negar",
    "atuar",
    "ciúme",
    "fiado",
    "força",
    "corvo",
    "gordo",
    "tutor",
    "duros",
    "exame",
    "caldo",
    "cupim",
    "ótimo",
    "mamar",
    "índio",
    "autos",
    "pavio",
    "fobia",
    "jeito",
    "votos",
    "tesão",
    "lagoa",
    "pampa",
    "diodo",
    "parte",
    "ambas",
    "farda",
    "sonar",
    "bacon",
    "gatas",
    "banca",
    "meigo",
    "pavão",
    "fixos",
    "doido",
    "valer",
    "girar",
    "fofas",
    "caspa",
    "opção",
    "macro",
    "prego",
    "perda",
    "enjoo",
    "longe",
    "ícone",
    "ferro",
    "braço",
    "unida",
    "lição",
    "roçar",
    "bambu",
    "dorso",
    "moral",
    "ameba",
    "viril",
    "amora",
    "magna",
    "rural",
    "penal",
    "abuso",
    "sunga",
    "poção",
    "erros",
    "surda",
    "beber",
    "cifra",
    "móvel",
    "atrás",
    "farol",
    "fugaz",
    "zerar",
    "menta",
    "estes",
    "vênus",
    "vista",
    "final",
    "nevar",
    "norma",
    "leste",
    "nudez",
    "telas",
    "tinto",
    "saber",
    "bingo",
    "cacau",
    "fardo",
    "morar",
    "bioma",
    "domar",
    "grega",
    "coice",
    "ervas",
    "medir",
    "mista",
    "atroz",
    "raios",
    "tosar",
    "muros",
    "santa",
    "desde",
    "posto",
    "cesto",
    "abril",
    "penta",
    "celta",
    "mudar",
    "cacho",
    "bando",
    "caixa",
    "resto",
    "libra",
    "régua",
    "calda",
    "preto",
    "tênue",
    "vazar",
    "reger",
    "usina",
    "vazia",
    "todos",
    "durar",
    "rimar",
    "angra",
    "selos",
    "aliás",
    "preço",
    "bufar",
    "nuvem",
    "ética",
    "lapso",
    "união",
    "civis",
    "grito",
    "bônus",
    "cinto",
    "matos",
    "safra",
    "algoz",
    "letra",
    "dogma",
    "pesca",
    "linho",
    "tchau",
    "graxa",
    "casal",
    "lidos",
    "zonas",
    "lorde",
    "larva",
    "gnomo",
    "casca",
    "botar",
    "tinta",
    "prado",
    "ânimo",
    "bacia",
    "magia",
    "saque",
    "grato",
    "bares",
    "rolos",
    "loura",
    "óbvio",
    "viola",
    "linda",
    "sábio",
    "cueca",
    "santo",
    "couve",
    "susto",
    "ostra",
    "altar",
    "fúria",
    "limpo",
    "trair",
    "ídolo",
    "deusa",
    "usura",
    "caçar",
    "todas",
    "obter",
    "tampa",
    "fossa",
    "lavar",
    "gueto",
    "lunar",
    "panda",
    "vácuo",
    "rigor",
    "humor",
    "pulso",
    "terno",
    "anéis",
    "donos",
    "coxão",
    "civil",
    "bocal",
    "aroma",
    "soldo",
    "morro",
    "coxas",
    "cupom",
    "jogos",
    "furos",
    "arcos",
    "louca",
    "peste",
    "crise",
    "homem",
    "duplo",
    "táxis",
    "pauta",
    "canja",
    "cauda",
    "dizer",
    "rapaz",
    "atlas",
    "jogar",
    "sítio",
    "guiar",
    "babar",
    "trono",
    "trigo",
    "novos",
    "massa",
    "horas",
    "junto",
    "ômega",
    "salsa",
    "pinho",
    "brisa",
    "ambos",
    "guria",
    "brega",
    "motim",
    "rumor",
    "sutiã",
    "ducha",
    "misto",
    "farto",
    "pólen",
    "débil",
    "dicas",
    "canto",
    "cargo",
    "seita",
    "graus",
    "baile",
    "zelar",
    "apelo",
    "arroz",
    "canoa",
    "perna",
    "tarja",
    "vasos",
    "fluxo",
    "falar",
    "dobro",
    "órfão",
    "leite",
    "curso",
    "comer",
    "cisne",
    "fêmea",
    "cheia",
    "lugar",
    "prazo",
    "letal",
    "seção",
    "fiapo",
    "vinte",
    "puxão",
    "revés",
    "clipe",
    "tomar",
    "manto",
    "gesto",
    "praga",
    "áudio",
    "ânsia",
    "tripé",
    "licor",
    "álibi",
    "inato",
    "lance",
    "rédea",
    "mútua",
    "vagão",
    "lesma",
    "beira",
    "abono",
    "salão",
    "russo",
    "caqui",
    "pelos",
    "servo",
    "facão",
    "barro",
    "filme",
    "rouca",
    "nisto",
    "corar",
    "idade",
    "lisos",
    "selim",
    "peixe",
    "untar",
    "sanar",
    "grana",
    "panos",
    "relva",
    "plena",
    "besta",
    "banda",
    "sódio",
    "feira",
    "pompa",
    "veloz",
    "belas",
    "poema",
    "tecla",
    "adeus",
    "dobra",
    "fruto",
    "sorte",
    "sabão",
    "sushi",
    "quibe",
    "corno",
    "tênis",
    "tosco",
    "valsa",
    "lacre",
    "fosco",
    "neném",
    "clero",
    "dever",
    "dúzia",
    "ração",
    "terça",
    "sótão",
    "fuzuê",
    "aviso",
    "prole",
    "costa",
    "manga",
    "metro",
    "pirar",
    "verde",
    "único",
    "vacas",
    "suado",
    "fixar",
    "loiro",
    "fogos",
    "dunas",
    "radar",
    "baixa",
    "frevo",
    "terra",
    "calva",
    "harpa",
    "dueto",
    "prova",
    "pluma",
    "irmão",
    "justa",
    "pagar",
    "farpa",
    "cerca",
    "vôlei",
    "rosca",
    "euros",
    "curar",
    "fenda",
    "farra",
    "áreas",
    "unhas",
    "nomes",
    "tábua",
    "gosma",
    "capuz",
    "ileso",
    "lenha",
    "perua",
    "padre",
    "fazer",
    "tocar",
    "bruxo",
    "lojas",
    "lerdo",
    "nisso",
    "golfo",
    "topar",
    "usada",
    "ruivo",
    "saúde",
    "nadar",
    "lixar",
    "vidas",
    "pomba",
    "êxodo",
    "acolá",
    "dotar",
    "raiar",
    "batom",
    "ontem",
    "torpe",
    "oásis",
    "cloro",
    "curva",
    "surto",
    "ricos",
    "ursos",
    "hiena",
    "vasta",
    "risos",
    "febre",
    "fumar",
    "fórum",
    "lutar",
    "catar",
    "trela",
    "litro",
    "surdo",
    "menos",
    "choro",
    "chefe",
    "vasto",
    "cetim",
    "traço",
    "cílio",
    "extra",
    "greve",
    "tapar",
    "tufão",
    "sarau",
    "rosas",
    "touro",
    "trapo",
    "lírio",
    "abano",
    "delta",
    "cação",
    "anzol",
    "sarna",
    "clave",
    "refém",
    "hífen",
    "claro",
    "nasal",
    "burra",
    "conde",
    "ponte",
    "ondas",
    "quota",
    "mexer",
    "verba",
    "aonde",
    "obras",
    "idosa",
    "signo",
    "frias",
    "lesão",
    "mundo",
    "gênio",
    "legal",
    "tempo",
    "âmbar",
    "culta",
    "vinho",
    "livro",
    "ninho",
    "germe",
    "culto",
    "pasto",
    "podre",
    "mirar",
    "teses",
    "ébrio",
    "naves",
    "afago",
    "laudo",
    "ditar",
    "selar",
    "garra",
    "folia",
    "pedal",
    "ninar",
    "tirar",
    "fugir",
    "calor",
    "naval",
    "porta",
    "âmago",
    "ponta",
    "calma",
    "capaz",
    "genro",
    "almas",
    "feias",
    "senão",
    "barco",
    "zonzo",
    "senha",
    "focos",
    "óssea",
    "rosto",
    "socar",
    "carne",
    "garfo",
    "luvas",
    "chiar",
    "vazão",
    "porco",
    "gases",
    "úmido",
    "boina",
    "laços",
    "ferir",
    "média",
    "roupa",
    "duque",
    "bonde",
    "tiros",
    "avaro",
    "exato",
    "dócil",
    "basta",
    "viver",
    "placa",
    "disso",
    "poros",
    "arame",
    "outro",
    "sopas",
    "ótima",
    "bruxa",
    "raiva",
    "museu",
    "astro",
    "rente",
    "lombo",
    "bordo",
    "cinta",
    "manhã",
    "palco",
    "peões",
    "folha",
    "treco",
    "casar",
    "louco",
    "turvo",
    "rádio",
    "tipos",
    "somar",
    "achar",
    "macho",
    "ajuda",
    "times",
    "meter",
    "graça",
    "mosca",
    "milha",
    "carro",
    "algum",
    "conta",
    "nicho",
    "sabor",
    "natal",
    "tátil",
    "cerne",
    "torta",
    "apoio",
    "símio",
    "fetal",
    "hotel",
    "setor",
    "vesgo",
    "amada",
    "firma",
    "hábil",
    "calça",
    "aspas",
    "latas",
    "quase",
    "creme",
    "telha",
    "teias",
    "assar",
    "lousa",
    "baque",
    "rubro",
    "fotos",
    "adiar",
    "dólar",
    "polar",
    "limão",
    "lança",
    "coroa",
    "pomar",
    "tripa",
    "mesmo",
    "jegue",
    "álbum",
    "custo",
    "fútil",
    "laico",
    "dedos",
    "ganso",
    "visor",
    "abrir",
    "dedão",
    "bazar",
    "gerir",
    "mania",
    "rodar",
    "turno",
    "anões",
    "sexto",
    "palma",
    "parco",
    "pouso",
    "moela",
    "ótico",
    "áries",
    "tenor",
    "amido",
    "solar",
    "poste",
    "urubu",
    "coisa",
    "seara",
    "xampu",
    "dieta",
    "rocha",
    "turma",
    "paiol",
    "vilão",
    "nível",
    "pouca",
    "vinil",
    "frade",
    "tonto",
    "cavar",
    "lilás",
    "nariz",
    "torre",
    "parar",
    "supor",
    "gambá",
    "cravo",
    "árduo",
    "tosca",
    "clima",
    "sósia",
    "chato",
    "moita",
    "vagar",
    "pausa",
    "truta",
    "podar",
    "fuçar",
    "posar",
    "autor",
    "cruel",
    "quiçá",
    "avião",
    "retro",
    "dores",
    "credo",
    "hinos",
    "capim",
    "tango",
    "vocês",
    "jurar",
  ],
  _f = B(Zf);
try {
  for (_f.s(); !(Wf = _f.n()).done; ) {
    var $f = Wf.value;
    Kf.add($f);
  }
} catch (a) {
  _f.e(a);
} finally {
  _f.f();
}
var ab,
  eb,
  ob = new Set("abcdefghijklmnopqrstuvwxyz"),
  rb = {
    games: 0,
    wins: 0,
    curstreak: 0,
    avgtime: 0,
    mintime: 0,
    maxtime: 0,
    maxstreak: 0,
    lastwin: void 0,
    histo: [0, 0, 0, 0, 0, 0],
  },
  ib = {
    startTime: 0,
    endTime: 0,
    highContrastChange: 0,
  },
  tb = {
    highContrast: 0,
    hardMode: 0,
  },
  nb = new Set([
    "space",
    "enter",
    "backspace",
    "escape",
    "arrowleft",
    "arrowright",
  ]),
  sb = {
    right: "var(--colorRight)",
    place: "var(--colorPlace)",
    wrong: "var(--colorWrong)",
    null: "var(--colorWrong)",
  },
  ub = new WeakSet(),
  cb = (function () {
    s(e, Vf);
    var a = p(e);
    function e() {
      var o;
      r(this, e);
      for (var i = arguments.length, t = new Array(i), n = 0; n < i; n++)
        t[n] = arguments[n];
      return M(g((o = a.call.apply(a, [this].concat(t)))), ub), o;
    }
    return (
      t(e, [
        {
          key: "reset",
          value: function () {
            var a,
              e = B(this.shadowRoot.querySelectorAll("button"));
            try {
              for (e.s(); !(a = e.n()).done; ) {
                var o = a.value;
                o.classList.remove("right"),
                  o.classList.remove("place"),
                  o.classList.remove("wrong"),
                  (o.style.animationDuration = null);
              }
            } catch (a) {
              e.e(a);
            } finally {
              e.f();
            }
          },
        },
        {
          key: "letterToMulti",
          value: function (a, e, o) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 1;
            return 4 == a
              ? this.letterToQuatro(e, o)
              : 2 == a
              ? this.letterToDuo(e, o)
              : this.letterTo(e, o[0], r);
          },
        },
        {
          key: "letterToDuo",
          value: function (a, e) {
            var o = this.shadowRoot.getElementById("kbd_".concat(a));
            if (o) {
              if (
                e.every(function (a) {
                  return null === a || "wrong" === a;
                })
              )
                return (o.style.background = ""), void o.classList.add("wrong");
              var r = [
                "".concat(sb[e[0]], " 50%"),
                "".concat(sb[e[1]], " 50%"),
              ];
              o.style.background = "linear-gradient(to right, ".concat(
                r.join(","),
                ")"
              );
            }
          },
        },
        {
          key: "letterToQuatro",
          value: function (a, e) {
            var o = this.shadowRoot.getElementById("kbd_".concat(a));
            if (o) {
              if (
                e.every(function (a) {
                  return null === a || "wrong" === a;
                })
              )
                return (o.style.background = ""), void o.classList.add("wrong");
              o.classList.remove("wrong");
              var r = [
                "".concat(sb[e[1]], " 90deg"),
                "".concat(sb[e[3]], " 90deg 180deg"),
                "".concat(sb[e[2]], " 180deg 270deg"),
                "".concat(sb[e[0]], " 270deg"),
              ];
              o.style.background = "conic-gradient(".concat(r.join(","), ")");
            }
          },
        },
        {
          key: "letterTo",
          value: function (a, e) {
            var o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              r = this.shadowRoot.getElementById("kbd_".concat(a));
            r &&
              ("right" === e &&
                (r.classList.remove("place"),
                r.classList.remove("wrong"),
                r.classList.add("right")),
              "place" !== e ||
                r.classList.contains("right") ||
                (r.classList.remove("wrong"), r.classList.add("place")),
              "wrong" !== e ||
                r.classList.contains("right") ||
                r.classList.contains("place") ||
                r.classList.add("wrong"),
              o || (r.style.animationDuration = "0s"));
          },
        },
        {
          key: "connect",
          value: function () {
            var a = this;
            this.reset();
            var e,
              o = B(this.shadowRoot.querySelectorAll("button"));
            try {
              var r = function () {
                var o = e.value,
                  r = o.id.split("_")[1].toLowerCase();
                o.addEventListener("click", function (e) {
                  D(a, ub, lb).call(a, r),
                    e.preventDefault(),
                    e.stopPropagation();
                });
              };
              for (o.s(); !(e = o.n()).done; ) r();
            } catch (a) {
              o.e(a);
            } finally {
              o.f();
            }
            window.addEventListener("keyup", function (e) {
              var o = e.key.toLowerCase();
              " " == o && (o = "space"),
                (ob.has(o) || nb.has(o)) &&
                  (D(a, ub, lb).call(a, o),
                  e.preventDefault(),
                  e.stopPropagation());
            });
          },
        },
        {
          key: "html",
          value: function () {
            var a,
              e = [],
              o = B("qwertyuiopasdfghjkl1zxcvbnm2");
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var r = a.value,
                  i =
                    "1" == r
                      ? "<img src='".concat(
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkwIiBoZWlnaHQ9IjI1NSIgdmlld0JveD0iMCAwIDI5MCAyNTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOS44OTE0IDEyNy4yNTFMMTAzLjA2OCA0MEgyNzVWMjE2SDEwMy4xM0wxOS44OTE0IDEyNy4yNTFaIiBzdHJva2U9IiNGQUZBRkYiIHN0cm9rZS13aWR0aD0iMjYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGxpbmUgeDE9IjEzIiB5MT0iLTEzIiB4Mj0iMTMwLjk0NyIgeTI9Ii0xMyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxMDcgMC43MDcxMDcgLTAuNzY1MzY3IDAuNjQzNTk0IDExNSA4NikiIHN0cm9rZT0iI0ZBRkFGRiIgc3Ryb2tlLXdpZHRoPSIyNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxsaW5lIHgxPSIxMyIgeTE9Ii0xMyIgeDI9IjEzMC45NDciIHkyPSItMTMiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MTA3IC0wLjcwNzEwNyAwLjc2NTM2NyAwLjY0MzU5NCAxMzMuNDY1IDE4Ny43ODYpIiBzdHJva2U9IiNGQUZBRkYiIHN0cm9rZS13aWR0aD0iMjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K",
                          "'>"
                        )
                      : "2" == r
                      ? "ENTER"
                      : r.toUpperCase(),
                  t = "1" == r ? "backspace" : "2" == r ? "enter" : r;
                e.push(
                  '<button id="kbd_'.concat(t, '">').concat(i, "</button>")
                );
              }
            } catch (a) {
              o.e(a);
            } finally {
              o.f();
            }
            return e.join("");
          },
        },
        {
          key: "stylesheet",
          value: function () {
            return qf(
              ab ||
                (ab = f([
                  "\n:host {\n  user-select: none;\n  flex-shrink: 0;\n  padding: 0 0.5em 0.3em 0.5em;\n  margin: 0;\n  box-sizing: border-box;\n  height: var(--kbd-height);\n  font-size: min(4rem, calc(var(--kbd-height) / 7));\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-columns: repeat(32, 1fr);\n  grid-gap: 0.25em;\n}\n\nbutton {\n  touch-action: manipulation;\n  outline: none;\n  background-color: #4C4347;\n  grid-column: span 3;\n  display: flex;\n  font-size: 1em;\n  line-height: 1em;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8%;\n  font-weight: 500;\n  font-family: 'Mitr', sans-serif;\n  cursor: pointer;\n  border: none;\n  color: #FAFAFF;\n}\n\nbutton.right {\n  background-color: var(--colorRight) !important;\n}\n\nbutton.place {\n  background-color: var(--colorPlace);\n}\n\nbutton.wrong {\n  background-color: #594B4F;\n  color: #6E5C62;\n}\n\nbutton.right, button.place, button.wrong {\n  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out,\n    background 0.5s ease-in-out;\n}\n\n#kbd_a {\n  grid-column: 2 / span 3;\n}\n\n#kbd_z {\n  grid-column: 3 / span 3;\n}\n\n#kbd_backspace {\n  grid-column: 30 / span 3;\n}\n\n#kbd_backspace img {\n  width: 1em;\n}\n\n#kbd_enter {\n  grid-row: 3 span 1;\n  grid-column: 25 / span 8;\n  font-size: 0.9em;\n}\n    ",
                ]))
            );
          },
        },
      ]),
      e
    );
  })();
function lb(a) {
  this.dispatchEvent(
    new CustomEvent("kbd", {
      detail: {
        key: a,
      },
    })
  );
}
customElements.define("wc-kbd", cb);
var mb,
  Ab = (function () {
    s(e, Vf);
    var a = p(e);
    function e() {
      return r(this, e), a.apply(this, arguments);
    }
    return (
      t(e, [
        {
          key: "connect",
          value: function () {
            for (
              var a = this,
                e = function () {
                  var e = r[o];
                  a.shadowRoot
                    .getElementById(e)
                    .addEventListener("click", function (o) {
                      a.dispatchEvent(new CustomEvent(e)),
                        o.preventDefault(),
                        o.stopPropagation();
                    });
                },
                o = 0,
                r = ["help", "stats", "config"];
              o < r.length;
              o++
            )
              e();
            (this.bar = 0),
              this.shadowRoot
                .getElementById("bar")
                .addEventListener("click", function (e) {
                  a.bar
                    ? (document.querySelector("wc-bar").hide(),
                      a.shadowRoot
                        .getElementById("bar")
                        .classList.remove("rotate"),
                      (a.bar = 0))
                    : a.showBar(),
                    e.preventDefault(),
                    e.stopPropagation();
                });
          },
        },
        {
          key: "showBar",
          value: function () {
            document.querySelector("wc-bar").show(),
              this.shadowRoot.getElementById("bar").classList.add("rotate"),
              (this.bar = 1);
          },
        },
        {
          key: "update",
          value: function () {
            var a,
              e =
                "true" ==
                (null !== (a = this.getAttribute("stats")) && void 0 !== a
                  ? a
                  : "true");
            this.shadowRoot.getElementById("stats").style.display = e
              ? "flex"
              : "none";
          },
        },
        {
          key: "html",
          value: function () {
            return '\n    <button id="bar"><img src=\''
              .concat(
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00My4zODE1IDc2LjUyNDZMNjMuODg5OCA1Mi45NjQ0TDg0LjM5OCA3Ni41MjQ2IiBzdHJva2U9IiNCN0FFQjQiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
                '\'></button>\n    <button id="help"><div>?</div></button>\n    <h1><slot></slot></h1>\n    <div><button id="stats"><img src=\''
              )
              .concat(
                "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3IDYzLjVDMjcgNTkuMzU3OSAzMC4zNTc5IDU2IDM0LjUgNTZWNTZDMzguNjQyMSA1NiA0MiA1OS4zNTc5IDQyIDYzLjVWMTAySDI3VjYzLjVaIiBmaWxsPSIjQjdBRUI0Ii8+CjxwYXRoIGQ9Ik00NyAzMy41QzQ3IDI5LjM1NzkgNTAuMzU3OSAyNiA1NC41IDI2VjI2QzU4LjY0MjEgMjYgNjIgMjkuMzU3OSA2MiAzMy41VjEwMkg0N1YzMy41WiIgZmlsbD0iI0I3QUVCNCIvPgo8cGF0aCBkPSJNNjcgNTAuNUM2NyA0Ni4zNTc5IDcwLjM1NzkgNDMgNzQuNSA0M1Y0M0M3OC42NDIxIDQzIDgyIDQ2LjM1NzkgODIgNTAuNVYxMDJINjdWNTAuNVoiIGZpbGw9IiNCN0FFQjQiLz4KPHBhdGggZD0iTTg3IDczLjVDODcgNjkuMzU3OSA5MC4zNTc5IDY2IDk0LjUgNjZWNjZDOTguNjQyMSA2NiAxMDIgNjkuMzU3OSAxMDIgNzMuNVYxMDJIODdWNzMuNVoiIGZpbGw9IiNCN0FFQjQiLz4KPC9zdmc+Cg==",
                "'></button></div>\n    <button id=\"config\"><img src='"
              )
              .concat(
                "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ny45ODAxIDU5LjAyNjNDOTguNjE1OCA1OS4yNDAxIDk5LjI4ODggNTkuNDY2NSAxMDAgNTkuNzE5M1Y2OS4yODA3Qzk5LjI5MjggNjkuNTMyMyA5OC42MjE5IDY5Ljc1NzggOTcuOTg2OSA2OS45NzEyQzk0LjI4MzkgNzEuMjE1NyA5MS44MDIgNzIuMDQ5OCA5MC40NzEyIDc1LjI1OTVDODkuMTM5NSA3OC40NzY0IDkwLjMwNzQgODAuODIzNCA5Mi4wNDgxIDg0LjMyMTRDOTIuMzQ1MiA4NC45MTg0IDkyLjY1OSA4NS41NDg5IDkyLjk3OTkgODYuMjIzTDg2LjIyMDEgOTIuOTg1OEM4NS41MzMzIDkyLjY1OTQgODQuODkyNiA5Mi4zNDEgODQuMjg3NCA5Mi4wNDAyQzgwLjc3OTEgOTAuMjk2NiA3OC40NjQzIDg5LjE0NjEgNzUuMjgwMiA5MC40NjgySDc1LjI3NzJDNzIuMDQ4IDkxLjgxMzUgNzEuMjE1OSA5NC4yODcyIDY5Ljk2NyA5OEM2OS43NTQ5IDk4LjYzMDcgNjkuNTMwNyA5OS4yOTcyIDY5LjI4MDcgMTAwSDU5LjcxOTNDNTkuNDY2NyA5OS4yODkzIDU5LjI0MDUgOTguNjE1OCA1OS4wMjY3IDk3Ljk3OTFDNTcuNzgwNyA5NC4yNjkxIDU2Ljk1MzIgOTEuODA1MyA1My43NDY1IDkwLjQ3NzFINTMuNzQzNUM1MC41MjY5IDg5LjE0MyA0OC4xNzU3IDkwLjMxMjMgNDQuNjc4OSA5Mi4wNTE1QzQ0LjA4MTcgOTIuMzQ4NSA0My40NTEgOTIuNjYyMiA0Mi43NzcgOTIuOTgyOEwzNi4wMTcyIDg2LjIyMDFDMzYuMzM4MyA4NS41NDUgMzYuNjUzNiA4NC45MTI1IDM2Ljk1MjggODQuMzEyNUMzOC42NzM3IDgwLjg2MDkgMzkuODU4NiA3OC40ODQ1IDM4LjUyMjkgNzUuMjUzNUMzNy4xOTE1IDcyLjA0NTIgMzQuNzEwNCA3MS4yMTIgMzEuMDA3NSA2OS45Njg2QzMwLjM3NDIgNjkuNzU1OSAyOS43MDUyIDY5LjUzMTMgMjkgNjkuMjgwN1Y1OS43MTkzQzI5LjcxMDMgNTkuNDY2NSAzMC4zODM4IDU5LjI0MDEgMzEuMDIwOSA1OS4wMjZDMzQuNzIxNSA1Ny43ODIgMzcuMTkyOCA1Ni45NTEzIDM4LjUyMjkgNTMuNzQzNUMzOS44NTU3IDUwLjUzMDEgMzguNjk0MyA0OC4xOTMzIDM2Ljk1NTYgNDQuNjk1QzM2LjY1NjYgNDQuMDkzNCAzNi4zNDA1IDQzLjQ1NzYgMzYuMDE3MiA0Mi43NzdMNDIuNzc3IDM2LjAxNzJDNDMuNDU2NiAzNi4zNDA0IDQ0LjA5MTMgMzYuNjU1OCA0NC42OTE0IDM2Ljk1NDFDNDguMjA1MiAzOC43MDA2IDUwLjUzMTkgMzkuODU3IDUzLjc0MzUgMzguNTIyOUg1My43NDY1QzU2Ljk1MTQgMzcuMTkzIDU3Ljc4MTkgMzQuNzIyMSA1OS4wMjU1IDMxLjAyMjJDNTkuMjM5OCAzMC4zODQ4IDU5LjQ2NjMgMjkuNzEwOCA1OS43MTkzIDI5SDY5LjI4MDdDNjkuNTMzIDI5LjcwOTkgNjkuNzU4OSAzMC4zODIzIDY5Ljk3MjUgMzEuMDE4QzcxLjIyMTQgMzQuNzM0OCA3Mi4wNDc3IDM3LjE5NDEgNzUuMjUzNSAzOC41MjI5SDc1LjI1NjVDNzguNDczMiAzOS44NTYgODAuODIzNyAzOC42ODcyIDg0LjMxNDQgMzYuOTUxNEM4NC45MTM2IDM2LjY1MzUgODUuNTQ2NSAzNi4zMzg4IDg2LjIyMyAzNi4wMTcyTDkyLjk4MjggNDIuNzc3QzkyLjY1OTUgNDMuNDU3OSA5Mi4zNDM3IDQ0LjA5MzggOTIuMDQ1MSA0NC42OTUyQzkwLjMwMzIgNDguMjAzNCA4OS4xNDYyIDUwLjUzMzcgOTAuNDc3MSA1My43NDM1VjUzLjc0NjVDOTEuODA0MSA1Ni45NDg5IDk0LjI0OTcgNTcuNzcxNSA5Ny45ODAxIDU5LjAyNjNaTTY0LjUgODBDNzMuMDYwNCA4MCA4MCA3My4wNjA0IDgwIDY0LjVDODAgNTUuOTM5NiA3My4wNjA0IDQ5IDY0LjUgNDlDNTUuOTM5NiA0OSA0OSA1NS45Mzk2IDQ5IDY0LjVDNDkgNzMuMDYwNCA1NS45Mzk2IDgwIDY0LjUgODBaIiBmaWxsPSIjQjdBRUI0Ii8+Cjwvc3ZnPgo=",
                "'></button>\n  "
              );
          },
        },
        {
          key: "stylesheet",
          value: function () {
            return qf(
              eb ||
                (eb = f([
                  "\n:host {\n  height: 6vh;\n  flex-shrink: 0;\n  max-width: 720px;\n  width: 100%;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 5vh 5vh 1fr 5vh 5vh;\n  grid-gap: 0;\n  color: #FAFAFF;\n  font-family: 'Mitr', sans-serif;\n  font-weight: 600;\n  font-size: 1em;\n  user-select: none;\n}\n\nh1 {\n  font-weight: 600;\n  font-size: 4vh;\n  line-height: 6vh;\n  height: 6vh;\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton {\n  z-index: 1000;\n  cursor: pointer;\n  padding: 0;\n  width: 5vh;\n  height: 6vh;\n  background-color: transparent;\n  border: none;\n  color: #B7AEB4;\n  font-weight: 400;\n  line-height: 1em;\n  font-size: 2vh;\n  font-family: 'Mitr', sans-serif;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbutton img, button div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #B7AEB4;\n  border-radius: 20%;\n  width: 3vh;\n  height: 3vh;\n  margin: 0 0.25vh;\n  transition: transform 0.5s ease-in-out;\n}\n\nbutton.rotate img {\n  transform: rotate(180deg);\n}\n\n#bar, #stats {\n  justify-content: flex-end;\n}\n\n#help, #config {\n  justify-content: flex-start;\n}\n\n\n",
                ]))
            );
          },
        },
      ]),
      e
    );
  })();
n(Ab, "attr", ["stats"]), customElements.define("wc-header", Ab);
var gb,
  db = (function () {
    s(e, Vf);
    var a = p(e);
    function e() {
      return r(this, e), a.apply(this, arguments);
    }
    return (
      t(e, [
        {
          key: "connect",
          value: function () {
            this.open = 0;
          },
        },
        {
          key: "popup",
          value: function (a) {
            this.innerHTML = a;
            var e = this.shadowRoot.getElementById("msg");
            e.focus(), (this.open = 1), Gf(e, "0.25s linear popup forwards");
          },
        },
        {
          key: "popoff",
          value: function () {
            this.open &&
              ((this.open = 0),
              Gf(
                this.shadowRoot.getElementById("msg"),
                "0.25s linear popup reverse forwards"
              ));
          },
        },
        {
          key: "html",
          value: function () {
            return '<div aria-live="assertive" tabindex=0 id="msg"><slot></slot></div>';
          },
        },
        {
          key: "stylesheet",
          value: function () {
            return qf(
              mb ||
                (mb = f([
                  "\n:host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #FAFAFF;\n  font-family: 'Mitr', sans-serif;\n  font-weight: 600;\n  user-select: none;\n  touch-action: manipulation;\n  outline: none;\n}\n\n#msg {\n  touch-action: manipulation;\n  outline: none;\n  opacity: 0;\n  z-index: 20000;\n  background-color: #009AFE;\n  font-weight: 400;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n  font-size: 2.5vh;\n  margin: 0 auto;\n  padding: 0.4em 1.5em;\n  border-radius: 0.4em;\n}\n\n#msg ::slotted(b) {\n  font-weight: 400 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.25em;\n  height: 1.25em;\n  background-color: #186295;\n  border-radius: 10%;\n  margin: 0 0.25em;\n}\n\n@keyframes popup {\n  0% {\n    opacity: 0;\n    transform: scale(0, 0);\n  }\n\n  25% {\n    opacity: 1;\n  }\n\n  75% {\n    transform: scale(1.15, 1.15);\n  }\n\n  100% {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n}",
                ]))
            );
          },
        },
      ]),
      e
    );
  })();
n(db, "attr", []), customElements.define("wc-notify", db);
var pb = (function () {
  s(e, Vf);
  var a = p(e);
  function e() {
    var o;
    return r(this, e), ((o = a.call(this)).modals = {}), o;
  }
  return (
    t(e, [
      {
        key: "connect",
        value: function () {
          var a = this;
          this.shadowRoot
            .getElementById("all")
            .addEventListener("click", function (e) {
              a.hide(), e.stopPropagation(), e.preventDefault();
            });
        },
      },
      {
        key: "registerModal",
        value: function (a, e) {
          e.parentNode && e.parentNode.removeChild(e), (this.modals[a] = e);
        },
      },
      {
        key: "getModal",
        value: function (a) {
          return this.modals[a];
        },
      },
      {
        key: "hide",
        value: function () {
          (this.style.display = "none"),
            this.firstChild && this.removeChild(this.firstChild);
        },
      },
      {
        key: "show",
        value: function (a) {
          this.firstChild
            ? this.replaceChild(this.modals[a], this.firstChild)
            : this.appendChild(this.modals[a]),
            (this.style.display = "block");
        },
      },
      {
        key: "isOpen",
        value: function () {
          return "block" == this.style.display;
        },
      },
      {
        key: "html",
        value: function () {
          return "<div id=all><div id=box><slot></slot></div></div>";
        },
      },
      {
        key: "stylesheet",
        value: function () {
          return qf(
            gb ||
              (gb = f([
                "\n:host {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10000;\n  color: white;\n  color: #BBB;\n  font-family: 'Mitr', sans-serif;\n  font-weight: 300;\n}\n\n#all {\n  width: 100%;\n  box-sizing: border-box;\n  height: 100%;\n  background-color: rgba(70, 70, 70, 0.5);\n  display: flex;\n  flex-direction: column;\n  font-size: 3rem;\n  line-height: 1.35em;\n  font-weight: 300;\n  justify-content: center;\n  align-items: center;\n  padding: 6vh 2em 2em 2em;\n}\n\n#box {\n  max-width: 720px;\n  padding: 1.5em;\n  margin: 0;\n  width: 100%;\n  background-color: #312B2D;\n  box-sizing: border-box;\n  border-radius: 0.5em;\n  overflow: auto;\n  z-index: 19000;\n  pointer-events: auto;\n  line-height: 1.5em;\n}\n",
              ]))
          );
        },
      },
    ]),
    e
  );
})();
n(pb, "attr", []), customElements.define("wc-modal", pb);
var fb,
  bb,
  vb = ys,
  hb = C.TypeError,
  wb = De("match"),
  Bb = di,
  yb = Z,
  Eb = N.f,
  Qb = Er,
  Db = $t,
  xb = function (a) {
    if (vb(a)) throw hb("The method doesn't accept regular expressions");
    return a;
  },
  jb = ca,
  Mb = yb("".startsWith),
  zb = yb("".slice),
  Ib = Math.min,
  Cb = (function () {
    var a = /./;
    try {
      "/./".startsWith(a);
    } catch (e) {
      try {
        return (a[wb] = 0), "/./".startsWith(a);
      } catch (a) {}
    }
    return 0;
  })();
Bb(
  {
    target: "String",
    proto: 1,
    forced: !(
      (!Cb &&
        ((fb = Eb(String.prototype, "startsWith")), fb && !fb.writable)) ||
      Cb
    ),
  },
  {
    startsWith: function (a) {
      var e = Db(jb(this));
      xb(a);
      var o = Qb(Ib(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        r = Db(a);
      return Mb ? Mb(e, r, o) : zb(e, o, o + r.length) === r;
    },
  }
);
var Nb = (function () {
  s(e, Vf);
  var a = p(e);
  function e() {
    return r(this, e), a.apply(this, arguments);
  }
  return (
    t(e, [
      {
        key: "connect",
        value: function () {
          var a = this;
          this.update();
          var e,
            o = B(this.shadowRoot.querySelectorAll("a,input,label,#version"));
          try {
            for (o.s(); !(e = o.n()).done; )
              e.value.addEventListener("click", function (a) {
                a.stopPropagation();
              });
          } catch (a) {
            o.e(a);
          } finally {
            o.f();
          }
          var r,
            i = B(this.shadowRoot.querySelectorAll("input"));
          try {
            var t = function () {
              var e = r.value;
              e.addEventListener("change", function () {
                a.dispatchEvent(
                  new CustomEvent("update", {
                    detail: {
                      id: e.id,
                    },
                  })
                );
              });
            };
            for (i.s(); !(r = i.n()).done; ) t();
          } catch (a) {
            i.e(a);
          } finally {
            i.f();
          }
          this.lastCfg && this.setConfig(this.lastCfg);
        },
      },
      {
        key: "getConfig",
        value: function () {
          var a, e;
          return {
            highContrast: !(
              null === (a = this.shadowRoot.getElementById("contrast")) ||
              void 0 === a ||
              !a.checked
            ),
            hardMode: !(
              null === (e = this.shadowRoot.getElementById("hardmode")) ||
              void 0 === e ||
              !e.checked
            ),
          };
        },
      },
      {
        key: "setConfig",
        value: function (a) {
          (this.lastCfg = a),
            this.boxes.has("contrast") &&
              (this.shadowRoot.getElementById("contrast").checked =
                a.highContrast),
            this.boxes.has("hardmode") &&
              (this.shadowRoot.getElementById("hardmode").checked = a.hardMode);
        },
      },
      {
        key: "update",
        value: function () {
          this.boxes = new Set(
            this.getAttribute("boxes")
              .split(",")
              .map(function (a) {
                return a.trim();
              })
          );
          var a,
            e = B(this.shadowRoot.querySelectorAll("div[name]"));
          try {
            for (e.s(); !(a = e.n()).done; ) {
              var o = a.value;
              this.boxes.has(o.getAttribute("name"))
                ? (o.style.display = "grid")
                : (o.style.display = "none");
            }
          } catch (a) {
            e.e(a);
          } finally {
            e.f();
          }
        },
      },
      {
        key: "html",
        value: function () {
          return '\n<div name="contrast">\n<p><label for="contrast">Contraste alto</label></p>\n<span><input id="contrast" class="toggle" type="checkbox"></span>\n</div>\n\n<div name="hardmode">\n<p><label for="hardmode">Modo difícil</label><i>dicas são forçadas</i></p>\n<span><input id="hardmode" class="toggle" type="checkbox"></span>\n</div>\n\n<div name="index">\n<p>Estatísticas</p> <span>\n<a tabindex=0 href=\'https://term.ooo/stato\'>Termostato</a></span>\n</div>\n\n<div name="index">\n<p><b>Termo</b> é baseado no\n<a href="https://www.powerlanguage.co.uk/wordle">Wordle</a>.</p><span></span>\n</div>\n\n<div name="multi">\n<p>Versão multi-palavra do <a href=\'https://term.ooo\'>Termo</a>.</p>\n<span></span>\n</div>\n\n<div>\n<p>Comentários</p><span>\n<a tabindex=0 href=\'mailto:fserb@fserb.com.br\'>E-mail</a>\n<a tabindex=0 href=\'https://twitter.com/fserb\'>Twitter</a>\n</span>\n</div>\n\n<div><p></p>\n<span id=\'version\'>#'.concat(
            "4ab4f09".startsWith("__") ? "dev" : "4ab4f09",
            "</span>\n</div>\n"
          );
        },
      },
      {
        key: "stylesheet",
        value: function () {
          return qf(
            bb ||
              (bb = f([
                "\n:host {\n  pointer-events: auto;\n  z-index: 20000;\n  color: #FAFAFF;\n  font-family: 'Mitr', sans-serif;\n  padding: 1.7rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n}\n\ndiv {\n  display: grid;\n  grid-template-columns: 70% 30%;\n}\n\nb {\n  font-weight: 400;\n}\n\na {\n  color: #EBE;\n}\n\np {\n  margin: 0;\n}\n\np i {\n  display: block;\n  font-size: 0.75em;\n  color: #9F9E9E;\n  margin: 0;\n  line-height: 1em;\n}\n\nspan {\n  text-align: right;\n  line-height: 1em;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n#version {\n  color: #9F9E9E;\n  font-size: 0.75em;\n  font-weight: 300;\n  user-select: all;\n}\n\ninput[type=checkbox] {\n  font-size: 1em;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  outline: 0;\n}\n\ninput.toggle {\n  aspect-ratio: 53 / 32;\n  height: 1.75em;\n  border-radius: 1em;\n  display: inline-block;\n\n  position: relative;\n  margin: 0;\n  background-color: #312A2D;\n  border: 0.1em solid #FAFAFF;\n}\n\ninput.toggle:after {\n  content: '';\n  position: absolute;\n  top: 0.075em;\n  left: 0.1em;\n  height: 1.2em;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  border: 0.1em solid #FAFAFF;\n  background-color: transparent;\n  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\ninput.toggle:checked {\n}\n\ninput.toggle:checked:after {\n  background-color: #fafaff;\n  transform: translatex(1.05em);\n}\n",
              ]))
          );
        },
      },
    ]),
    e
  );
})();
n(Nb, "attr", ["boxes"]), customElements.define("wc-config", Nb);
var kb = fr,
  Fb = $t,
  Ob = ca,
  Tb = C.RangeError,
  Sb = Z,
  Lb = Er,
  Ub = $t,
  Rb = ca,
  Yb = Sb(function (a) {
    var e = Fb(Ob(this)),
      o = "",
      r = kb(a);
    if (r < 0 || r == 1 / 0) throw Tb("Wrong number of repetitions");
    for (; r > 0; (r >>>= 1) && (e += e)) 1 & r && (o += e);
    return o;
  }),
  Pb = Sb("".slice),
  Gb = Math.ceil,
  qb = function (a) {
    return function (e, o, r) {
      var i,
        t,
        n = Ub(Rb(e)),
        s = Lb(o),
        u = n.length,
        c = void 0 === r ? " " : Ub(r);
      return s <= u || "" == c
        ? n
        : ((t = Yb(c, Gb((i = s - u) / c.length))).length > i &&
            (t = Pb(t, 0, i)),
          a ? n + t : t + n);
    };
  },
  Hb = {
    start: qb(0),
    end: qb(1),
  },
  Jb = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(
    Ba
  ),
  Vb = Hb.start;
di(
  {
    target: "String",
    proto: 1,
    forced: Jb,
  },
  {
    padStart: function (a) {
      return Vb(this, a, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var Wb =
    Object.is ||
    function (a, e) {
      return a === e ? 0 !== a || 1 / a == 1 / e : a != a && e != e;
    },
  Kb = L,
  Xb = io,
  Zb = ca,
  _b = Wb,
  $b = $t,
  av = Ja,
  ev = _s;
vs("search", function (a, e, o) {
  return [
    function (e) {
      var o = Zb(this),
        r = null == e ? void 0 : av(e, a);
      return r ? Kb(r, e, o) : new RegExp(e)[a]($b(o));
    },
    function (a) {
      var r = Xb(this),
        i = $b(a),
        t = o(e, r, i);
      if (t.done) return t.value;
      var n = r.lastIndex;
      _b(n, 0) || (r.lastIndex = 0);
      var s = ev(r, i);
      return _b(r.lastIndex, n) || (r.lastIndex = n), null === s ? -1 : s.index;
    },
  ];
});
var ov = Z,
  rv = or.PROPER,
  iv = bo.exports,
  tv = io,
  nv = wa,
  sv = $t,
  uv = k,
  cv = en,
  lv = RegExp.prototype,
  mv = lv.toString,
  Av = ov(cv),
  gv = uv(function () {
    return (
      "/a/b" !=
      mv.call({
        source: "a",
        flags: "b",
      })
    );
  }),
  dv = rv && "toString" != mv.name;
(gv || dv) &&
  iv(
    RegExp.prototype,
    "toString",
    function () {
      var a = tv(this),
        e = sv(a.source),
        o = a.flags;
      return (
        "/" +
        e +
        "/" +
        sv(void 0 === o && nv(lv, a) && !("flags" in lv) ? Av(a) : o)
      );
    },
    {
      unsafe: 1,
    }
  );
var pv = io,
  fv = gl,
  bv = Ct,
  vv = L,
  hv = ne,
  wv = function (a, e, o, r) {
    try {
      return r ? e(pv(o)[0], o[1]) : e(o);
    } catch (e) {
      fv(a, "throw", e);
    }
  },
  Bv = Zc,
  yv = qi,
  Ev = Dr,
  Qv = wi,
  Dv = cl,
  xv = ol,
  jv = C.Array;
di(
  {
    target: "Array",
    stat: 1,
    forced: !Tl(function (a) {
      Array.from(a);
    }),
  },
  {
    from: function (a) {
      var e = hv(a),
        o = yv(this),
        r = arguments.length,
        i = r > 1 ? arguments[1] : void 0,
        t = void 0 !== i;
      t && (i = bv(i, r > 2 ? arguments[2] : void 0));
      var n,
        s,
        u,
        c,
        l,
        m,
        A = xv(e),
        g = 0;
      if (!A || (this == jv && Bv(A)))
        for (n = Ev(e), s = o ? new this(n) : jv(n); n > g; g++)
          (m = t ? i(e[g], g) : e[g]), Qv(s, g, m);
      else
        for (
          l = (c = Dv(e, A)).next, s = o ? new this() : [];
          !(u = vv(l, c)).done;
          g++
        )
          (m = t ? wv(c, i, [u.value, g], 1) : u.value), Qv(s, g, m);
      return (s.length = g), s;
    },
  }
),
  wp(
    "Map",
    function (a) {
      return function () {
        return a(this, arguments.length ? arguments[0] : void 0);
      };
    },
    kp
  );
var Mv = di,
  zv = k,
  Iv = Math.imul;
Mv(
  {
    target: "Math",
    stat: 1,
    forced: zv(function () {
      return -5 != Iv(4294967295, 5) || 2 != Iv.length;
    }),
  },
  {
    imul: function (a, e) {
      var o = 65535,
        r = +a,
        i = +e,
        t = o & r,
        n = o & i;
      return (
        0 |
        (t * n + ((((o & (r >>> 16)) * n + t * (o & (i >>> 16))) << 16) >>> 0))
      );
    },
  }
);
var Cv = Z,
  Nv = ne,
  kv = Math.floor,
  Fv = Cv("".charAt),
  Ov = Cv("".replace),
  Tv = Cv("".slice),
  Sv = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  Lv = /\$([$&'`]|\d{1,2})/g,
  Uv = cs,
  Rv = L,
  Yv = Z,
  Pv = vs,
  Gv = k,
  qv = io,
  Hv = ga,
  Jv = fr,
  Vv = Er,
  Wv = $t,
  Kv = ca,
  Xv = Us,
  Zv = Ja,
  _v = function (a, e, o, r, i, t) {
    var n = o + a.length,
      s = r.length,
      u = Lv;
    return (
      void 0 !== i && ((i = Nv(i)), (u = Sv)),
      Ov(t, u, function (t, u) {
        var c;
        switch (Fv(u, 0)) {
          case "$":
            return "$";
          case "&":
            return a;
          case "`":
            return Tv(e, 0, o);
          case "'":
            return Tv(e, n);
          case "<":
            c = i[Tv(u, 1, -1)];
            break;
          default:
            var l = +u;
            if (0 === l) return t;
            if (l > s) {
              var m = kv(l / 10);
              return 0 === m
                ? t
                : m <= s
                ? void 0 === r[m - 1]
                  ? Fv(u, 1)
                  : r[m - 1] + Fv(u, 1)
                : t;
            }
            c = r[l - 1];
        }
        return void 0 === c ? "" : c;
      })
    );
  },
  $v = _s,
  ah = De("replace"),
  eh = Math.max,
  oh = Math.min,
  rh = Yv([].concat),
  ih = Yv([].push),
  th = Yv("".indexOf),
  nh = Yv("".slice),
  sh = "$0" === "a".replace(/./, "$0"),
  uh = /./[ah] ? "" === /./[ah]("a", "$0") : 0,
  ch = !Gv(function () {
    var a = /./;
    return (
      (a.exec = function () {
        var a = [];
        return (
          (a.groups = {
            a: "7",
          }),
          a
        );
      }),
      "7" !== "".replace(a, "$<a>")
    );
  });
Pv(
  "replace",
  function (a, e, o) {
    var r = uh ? "$" : "$0";
    return [
      function (a, o) {
        var r = Kv(this),
          i = null == a ? void 0 : Zv(a, ah);
        return i ? Rv(i, a, r, o) : Rv(e, Wv(r), a, o);
      },
      function (a, i) {
        var t = qv(this),
          n = Wv(a);
        if ("string" == typeof i && -1 === th(i, r) && -1 === th(i, "$<")) {
          var s = o(e, t, n, i);
          if (s.done) return s.value;
        }
        var u = Hv(i);
        u || (i = Wv(i));
        var c = t.global;
        if (c) {
          var l = t.unicode;
          t.lastIndex = 0;
        }
        for (var m = []; ; ) {
          var A = $v(t, n);
          if (null === A) break;
          if ((ih(m, A), !c)) break;
          "" === Wv(A[0]) && (t.lastIndex = Xv(n, Vv(t.lastIndex), l));
        }
        for (var g, d = "", p = 0, f = 0; f < m.length; f++) {
          for (
            var b = Wv((A = m[f])[0]),
              v = eh(oh(Jv(A.index), n.length), 0),
              h = [],
              w = 1;
            w < A.length;
            w++
          )
            ih(h, void 0 === (g = A[w]) ? g : String(g));
          var B = A.groups;
          if (u) {
            var y = rh([b], h, v, n);
            void 0 !== B && ih(y, B);
            var E = Wv(Uv(i, void 0, y));
          } else E = _v(b, n, v, h, B, i);
          v >= p && ((d += nh(n, p, v) + E), (p = v + b.length));
        }
        return d + nh(n, p);
      },
    ];
  },
  !ch || !sh || uh
);
var lh = di,
  mh = C,
  Ah = fi,
  gh = qi,
  dh = pa,
  ph = wr,
  fh = Dr,
  bh = Aa,
  vh = wi,
  hh = De,
  wh = Sl,
  Bh = et("slice"),
  yh = hh("species"),
  Eh = mh.Array,
  Qh = Math.max;
function Dh(a) {
  return new Promise(function (e) {
    return setTimeout(e, 1e3 * a);
  });
}
lh(
  {
    target: "Array",
    proto: 1,
    forced: !Bh,
  },
  {
    slice: function (a, e) {
      var o,
        r,
        i,
        t = bh(this),
        n = fh(t),
        s = ph(a, n),
        u = ph(void 0 === e ? n : e, n);
      if (
        Ah(t) &&
        ((o = t.constructor),
        ((gh(o) && (o === Eh || Ah(o.prototype))) ||
          (dh(o) && null === (o = o[yh]))) &&
          (o = void 0),
        o === Eh || void 0 === o)
      )
        return wh(t, s, u);
      for (
        r = new (void 0 === o ? Eh : o)(Qh(u - s, 0)), i = 0;
        s < u;
        s++, i++
      )
        s in t && vh(r, i, t[s]);
      return (r.length = i), r;
    },
  }
);
var xh = new Map();
function jh(a, e, o) {
  xh.has(o) || xh.set(o, new Map());
  var r = xh.get(o);
  return (
    r.set(e, 1),
    a.every(function (a) {
      return a.gameOver || 1 == r.get(a);
    })
      ? (xh.delete(o), 1)
      : 0
  );
}
function Mh(a) {
  return a.normalize("NFD").replace(/[^\w]/g, "");
}
function zh(a, e, o, r, i, t) {
  a.beginPath(),
    a.moveTo(e + t, o),
    a.lineTo(e + r - t, o),
    a.arcTo(e + r, o, e + r, o + t, t),
    a.lineTo(e + r, o + i - t),
    a.arcTo(e + r, o + i, e + r - t, o + i, t),
    a.lineTo(e + t, o + i),
    a.arcTo(e, o + i, e, o + i - t, t),
    a.lineTo(e, o + t),
    a.arcTo(e, o, e + t, o, t),
    a.closePath();
}
var Ih,
  Ch = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  },
  Nh = /(\d+).(\d+).(\d+),?\s+(\d+).(\d+)/;
function kh(e, o) {
  var r = o
      ? (function (e) {
          for (var o = 1; o < arguments.length; o++) {
            var r = null != arguments[o] ? arguments[o] : {};
            o % 2
              ? a(Object(r), 1).forEach(function (a) {
                  n(e, a, r[a]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(r, a)
                  );
                });
          }
          return e;
        })(
          {
            timeZone: o,
          },
          Ch
        )
      : Ch,
    i = new Intl.DateTimeFormat("en-US", r).format(e);
  return (
    (i = i.replace(/[\u200E\u200F]/g, "")),
    Nh.exec(i)
      .slice(1)
      .map(function (a) {
        return Number.parseInt(a);
      })
  );
}
function Fh() {
  var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    e = null != a ? a : new Date(),
    o = kh(e),
    r = kh(e, "America/Sao_Paulo"),
    i = new Date(o[2], o[0] - 1, o[1], o[3], o[4], 0, 0),
    t = new Date(r[2], r[0] - 1, r[1], r[3], r[4], 0, 0);
  return (t - i) / 1e3;
}
function Oh() {
  return Math.floor(
    (new Date() -
      ((a = new Date(2022, 0, 2, 0, 0, 0, 0)),
      new Date(2022, 0, 2, 0, 0, -Fh(a), 0))) /
      864e5
  );
  var a;
}
var Th = new WeakSet(),
  Sh = new WeakSet(),
  Lh = (function () {
    s(e, Vf);
    var a = p(e);
    function e() {
      var o;
      r(this, e);
      for (var i = arguments.length, t = new Array(i), n = 0; n < i; n++)
        t[n] = arguments[n];
      return M(g((o = a.call.apply(a, [this].concat(t)))), Sh), M(g(o), Th), o;
    }
    return (
      t(e, [
        {
          key: "connect",
          value: function () {
            var a = this;
            if (
              (this.shadowRoot
                .getElementById("stats_share")
                .addEventListener("click", function (e) {
                  a.dispatchEvent(new CustomEvent("share")),
                    e.stopPropagation(),
                    e.preventDefault();
                }),
              null === this.raf)
            ) {
              var e = Oh(),
                o = function () {
                  var o = new Date();
                  o.setSeconds(o.getSeconds() + Fh());
                  var r = String(23 - o.getHours()).padStart(2, "0"),
                    i = String(59 - o.getMinutes()).padStart(2, "0"),
                    t = String(59 - o.getSeconds()).padStart(2, "0");
                  (a.shadowRoot.getElementById("stats_time").innerText = ""
                    .concat(r, ":")
                    .concat(i, ":")
                    .concat(t)),
                    e != Oh() &&
                      (document.location.search =
                        "?f=" + btoa(Math.random().toString()).substr(10, 8));
                };
              (this.raf = setInterval(o, 1e3)), o();
            }
          },
        },
        {
          key: "disconnect",
          value: function () {
            this.hideStats();
          },
        },
        {
          key: "hideStats",
          value: function () {
            null !== this.raf && (clearInterval(this.raf), (this.raf = null));
          },
        },
        {
          key: "update",
          value: function () {
            var a,
              e =
                "true" ==
                (null !== (a = this.getAttribute("stato")) && void 0 !== a
                  ? a
                  : "false"),
              o = b(D(this, Th, Uh).call(this), 2),
              r = o[0],
              i = o[1],
              t = this.shadowRoot.getElementById("histo");
            (t.innerHTML = ""),
              e
                ? t.appendChild(
                    Pf(
                      "<p><a tabindex=0 href='https://term.ooo/stato'>\n  <img src=\"".concat(
                        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MyA0M0M2MC43OTA5IDQzIDU5IDQ0Ljc5MDkgNTkgNDdWNzMuNTQyM0M1NC4zNjAyIDc1LjAyMzEgNTEgNzkuMzY5MSA1MSA4NC41QzUxIDkwLjg1MTMgNTYuMTQ4NyA5NiA2Mi41IDk2QzY4Ljg1MTMgOTYgNzQgOTAuODUxMyA3NCA4NC41Qzc0IDc5Ljc0NTcgNzEuMTE0OSA3NS42NjUyIDY3IDczLjkxMzhWNDdDNjcgNDQuNzkwOSA2NS4yMDkxIDQzIDYzIDQzWiIgZmlsbD0iI0I3QUVCNCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ2IDM3QzQ2IDI3LjYxMTEgNTMuNjExMSAyMCA2MyAyMEM3Mi4zODg5IDIwIDgwIDI3LjYxMTEgODAgMzdWNjkuODE1M0M4My43MzA4IDczLjk3NSA4NiA3OS40NzI1IDg2IDg1LjVDODYgOTguNDc4NyA3NS40Nzg3IDEwOSA2Mi41IDEwOUM0OS41MjEzIDEwOSAzOSA5OC40Nzg3IDM5IDg1LjVDMzkgNzguOTUxMyA0MS42Nzg2IDczLjAyODMgNDYgNjguNzY2OFYzN1pNNTQgMzdDNTQgMzIuMDI5NCA1OC4wMjk0IDI4IDYzIDI4QzY3Ljk3MDYgMjggNzIgMzIuMDI5NCA3MiAzN1Y3My4yNTE2Qzc1LjY1MDggNzYuMDg3MyA3OCA4MC41MTkzIDc4IDg1LjVDNzggOTQuMDYwNCA3MS4wNjA0IDEwMSA2Mi41IDEwMUM1My45Mzk2IDEwMSA0NyA5NC4wNjA0IDQ3IDg1LjVDNDcgODAuMDc4MiA0OS43ODM4IDc1LjMwNjUgNTQgNzIuNTM2NFYzN1oiIGZpbGw9IiNCN0FFQjQiLz4KPC9zdmc+Cg==",
                        '"></a></p>'
                      )
                    )
                  )
                : t.appendChild(Pf("<p></p>"));
            for (var n = r; n <= i; ++n)
              t.appendChild(
                Pf(
                  "<b>".concat(
                    n,
                    '</b><span><div class="stats_histo">0</div></span>'
                  )
                )
              );
            D(this, Sh, Rh).call(this) &&
              t.appendChild(
                Pf('<b>💀</b><span><div class="stats_histo">0</div></span>')
              );
            var s,
              u = B(this.shadowRoot.querySelectorAll("a"));
            try {
              for (u.s(); !(s = u.n()).done; )
                s.value.addEventListener("click", function (a) {
                  a.stopPropagation();
                });
            } catch (a) {
              u.e(a);
            } finally {
              u.f();
            }
          },
        },
        {
          key: "setStats",
          value: function (a, e) {
            this.shadowRoot.getElementById("stats_games").innerText = a.games;
            var o = a.games > 0 ? Math.round((100 * a.wins) / a.games) : 0;
            (this.shadowRoot.getElementById("stats_pct").innerText = "".concat(
              o,
              "%"
            )),
              (this.shadowRoot.getElementById("stats_streak").innerText =
                a.curstreak),
              (this.shadowRoot.getElementById("stats_maxstreak").innerText =
                a.maxstreak);
            var r = this.shadowRoot.querySelectorAll("#histo .stats_histo"),
              i = Array.from(a.histo),
              t = D(this, Th, Uh).call(this);
            D(this, Sh, Rh).call(this) &&
              (i[t[1] - t[0] + 1] = a.games - a.wins);
            for (
              var n = Math.max.apply(Math, [1].concat(v(i))),
                s = t[1] + (D(this, Sh, Rh).call(this) ? 1 : 0) - t[0],
                u = 0;
              u <= s;
              ++u
            ) {
              var c,
                l = null !== (c = i[u]) && void 0 !== c ? c : 0,
                m = Math.floor((1e4 * l) / n) / 100;
              (r[u].style.width = "".concat(m, "%")),
                (r[u].innerText = l),
                r[u].classList.toggle("dark", 0 == l);
            }
            this.shadowRoot.getElementById("statsnext").style.display = e
              ? "grid"
              : "none";
          },
        },
        {
          key: "html",
          value: function () {
            return '\n<div tabindex=0 id="stats"><h2>progresso</h2>\n<div id="statstable">\n  <b id="stats_games">1</b><p>jogos</p>\n  <b id="stats_pct">100%</b><p>de vitórias</p>\n  <b id="stats_streak">1</b><p>sequência<br>de vitórias</p>\n  <b id="stats_maxstreak">1</b><p>melhor<br>sequência</p>\n</div>\n\n<h2>distribuição de tentativas</h2>\n\n<div id="histo">\n</div>\n\n<div id="statsnext">\n  <div><p>próxima palavra em</p>\n    <b id="stats_time">-</b></div>\n  <div><button tabindex=0 id="stats_share">\n    compartilhe <img src="'.concat(
              "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkFGQUZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTSAxOCAyIEMgMTYuMzU0OTkgMiAxNSAzLjM1NDk5MDQgMTUgNSBDIDE1IDUuMTkwOTUyOSAxNS4wMjE3OTEgNS4zNzcxMjI0IDE1LjA1NjY0MSA1LjU1ODU5MzggTCA3LjkyMTg3NSA5LjcyMDcwMzEgQyA3LjM5ODUzOTkgOS4yNzc4NTM5IDYuNzMyMDc3MSA5IDYgOSBDIDQuMzU0OTkwNCA5IDMgMTAuMzU0OTkgMyAxMiBDIDMgMTMuNjQ1MDEgNC4zNTQ5OTA0IDE1IDYgMTUgQyA2LjczMjA3NzEgMTUgNy4zOTg1Mzk5IDE0LjcyMjE0NiA3LjkyMTg3NSAxNC4yNzkyOTcgTCAxNS4wNTY2NDEgMTguNDM5NDUzIEMgMTUuMDIxNTU1IDE4LjYyMTUxNCAxNSAxOC44MDgzODYgMTUgMTkgQyAxNSAyMC42NDUwMSAxNi4zNTQ5OSAyMiAxOCAyMiBDIDE5LjY0NTAxIDIyIDIxIDIwLjY0NTAxIDIxIDE5IEMgMjEgMTcuMzU0OTkgMTkuNjQ1MDEgMTYgMTggMTYgQyAxNy4yNjc0OCAxNiAxNi42MDE1OTMgMTYuMjc5MzI4IDE2LjA3ODEyNSAxNi43MjI2NTYgTCA4Ljk0MzM1OTQgMTIuNTU4NTk0IEMgOC45NzgyMDk1IDEyLjM3NzEyMiA5IDEyLjE5MDk1MyA5IDEyIEMgOSAxMS44MDkwNDcgOC45NzgyMDk1IDExLjYyMjg3OCA4Ljk0MzM1OTQgMTEuNDQxNDA2IEwgMTYuMDc4MTI1IDcuMjc5Mjk2OSBDIDE2LjYwMTQ2IDcuNzIyMTQ2MSAxNy4yNjc5MjMgOCAxOCA4IEMgMTkuNjQ1MDEgOCAyMSA2LjY0NTAwOTYgMjEgNSBDIDIxIDMuMzU0OTkwNCAxOS42NDUwMSAyIDE4IDIgeiBNIDE4IDQgQyAxOC41NjQxMjkgNCAxOSA0LjQzNTg3MDYgMTkgNSBDIDE5IDUuNTY0MTI5NCAxOC41NjQxMjkgNiAxOCA2IEMgMTcuNDM1ODcxIDYgMTcgNS41NjQxMjk0IDE3IDUgQyAxNyA0LjQzNTg3MDYgMTcuNDM1ODcxIDQgMTggNCB6IE0gNiAxMSBDIDYuNTY0MTI5NCAxMSA3IDExLjQzNTg3MSA3IDEyIEMgNyAxMi41NjQxMjkgNi41NjQxMjk0IDEzIDYgMTMgQyA1LjQzNTg3MDYgMTMgNSAxMi41NjQxMjkgNSAxMiBDIDUgMTEuNDM1ODcxIDUuNDM1ODcwNiAxMSA2IDExIHogTSAxOCAxOCBDIDE4LjU2NDEyOSAxOCAxOSAxOC40MzU4NzEgMTkgMTkgQyAxOSAxOS41NjQxMjkgMTguNTY0MTI5IDIwIDE4IDIwIEMgMTcuNDM1ODcxIDIwIDE3IDE5LjU2NDEyOSAxNyAxOSBDIDE3IDE4LjQzNTg3MSAxNy40MzU4NzEgMTggMTggMTggeiIvPjwvc3ZnPgo=",
              '"></button></div>\n</div>\n</div>'
            );
          },
        },
        {
          key: "stylesheet",
          value: function () {
            return qf(
              Ih ||
                (Ih = f([
                  "\n:host {\n  display: block;\n  pointer-events: auto;\n  font-weight: 300;\n  color: #FAFAFF;\n  font-family: 'Mitr', sans-serif;\n}\n\nb {\n  font-weight: 400;\n}\n\nh2 {\n  margin: 0.5em 0 0 0;\n  font-size: 4rem;\n  color: #FAFAFF;\n  font-weight: 500;\n  text-align: center;\n}\n\n#statstable {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(4, 1fr);\n  text-align: center;\n  color: #BBB;\n  line-height: 1em;\n  padding: 2em 0;\n}\n\n#statstable b {\n  grid-row: 1;\n  color: #FAFAFF;\n  font-size: 2em;\n  padding-bottom: 0.5em;\n}\n\n#statstable p {\n  grid-row: 2;\n  height: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n\n}\n\n#histo {\n  width: 85%;\n  margin: 0 auto 1em auto;\n  display: grid;\n  grid-template-rows: repeate(7, 1fr);\n  grid-template-columns: auto 1fr;\n  grid-gap: 0.2em 0.2em;\n  font-weight: 300;\n  line-height: 1.5em;\n}\n\n#histo b {\n  font-weight: 500;\n  text-align: center;\n}\n\n#histo span div {\n  min-width: 9%;\n  font-weight: 300;\n  box-sizing: border-box;\n  padding: 0 0.75em;\n  background-color: #009AFE;\n  text-align: right;\n}\n\n#histo span div.dark {\n  background-color: #4C4347;\n}\n\n#histo p {\n  grid-column: 1 / span 2;\n  text-align: right;\n  margin: 0;\n  font-size: 0.75em;\n}\n\n#histo p img {\n  width: 2em;\n  height: 2em;\n}\n\n#statsnext {\n  margin: 3em auto 1em auto;\n  display: grid;\n  font-size: 3rem;\n  grid-template-columns: 1fr 1fr;\n  font-weight: 300;\n}\n\n#statsnext div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#statsnext div p {\n  margin: 0;\n  color: #BBB;\n}\n\n#statsnext div b {\n  display: block;\n  font-size: 2em;\n  margin-top: 0.3rem;\n}\n\n#statsnext button {\n  font-family: 'Mitr', sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.25em;\n  background-color: #009AFE;\n  border-radius: 0.25em;\n  cursor: pointer;\n  padding: 0.75em 1.25em;\n  color: #FAFAFF;\n  border: none;\n}\n\n#statsnext button img {\n  width: 1.25em;\n  margin-left: 0.5em;\n}\n\n\n",
                ]))
            );
          },
        },
      ]),
      e
    );
  })();
function Uh() {
  var a,
    e = b(
      (null !== (a = this.getAttribute("range")) && void 0 !== a
        ? a
        : "1-6"
      ).split("-"),
      2
    ),
    o = e[0],
    r = e[1];
  return [Number.parseInt(o), Number.parseInt(r)];
}
function Rh() {
  var a;
  return (
    "true" ==
    (null !== (a = this.getAttribute("death")) && void 0 !== a ? a : "true")
  );
}
n(Lh, "attr", ["range", "stato", "death"]),
  customElements.define("wc-stats", Lh);
var Yh = (function () {
    if ("undefined" != typeof Map) return Map;
    function a(a, e) {
      var o = -1;
      return (
        a.some(function (a, r) {
          return a[0] === e ? ((o = r), 1) : 0;
        }),
        o
      );
    }
    return (function () {
      function e() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(e.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: 1,
          configurable: 1,
        }),
        (e.prototype.get = function (e) {
          var o = a(this.__entries__, e),
            r = this.__entries__[o];
          return r && r[1];
        }),
        (e.prototype.set = function (e, o) {
          var r = a(this.__entries__, e);
          ~r ? (this.__entries__[r][1] = o) : this.__entries__.push([e, o]);
        }),
        (e.prototype.delete = function (e) {
          var o = this.__entries__,
            r = a(o, e);
          ~r && o.splice(r, 1);
        }),
        (e.prototype.has = function (e) {
          return !!~a(this.__entries__, e);
        }),
        (e.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (e.prototype.forEach = function (a, e) {
          void 0 === e && (e = null);
          for (var o = 0, r = this.__entries__; o < r.length; o++) {
            var i = r[o];
            a.call(e, i[1], i[0]);
          }
        }),
        e
      );
    })();
  })(),
  Ph =
    "undefined" != typeof window &&
    "undefined" != typeof document &&
    window.document === document,
  Gh =
    "undefined" != typeof global && global.Math === Math
      ? global
      : "undefined" != typeof self && self.Math === Math
      ? self
      : "undefined" != typeof window && window.Math === Math
      ? window
      : Function("return this")(),
  qh =
    "function" == typeof requestAnimationFrame
      ? requestAnimationFrame.bind(Gh)
      : function (a) {
          return setTimeout(function () {
            return a(Date.now());
          }, 1e3 / 60);
        },
  Hh = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  Jh = "undefined" != typeof MutationObserver,
  Vh = (function () {
    function a() {
      (this.connected_ = 0),
        (this.mutationEventsAdded_ = 0),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = (function (a) {
          var e = 0,
            o = 0,
            r = 0;
          function i() {
            e && ((e = 0), a()), o && n();
          }
          function t() {
            qh(i);
          }
          function n() {
            var a = Date.now();
            if (e) {
              if (a - r < 2) return;
              o = 1;
            } else (e = 1), (o = 0), setTimeout(t, 20);
            r = a;
          }
          return n;
        })(this.refresh.bind(this)));
    }
    return (
      (a.prototype.addObserver = function (a) {
        ~this.observers_.indexOf(a) || this.observers_.push(a),
          this.connected_ || this.connect_();
      }),
      (a.prototype.removeObserver = function (a) {
        var e = this.observers_,
          o = e.indexOf(a);
        ~o && e.splice(o, 1),
          !e.length && this.connected_ && this.disconnect_();
      }),
      (a.prototype.refresh = function () {
        this.updateObservers_() && this.refresh();
      }),
      (a.prototype.updateObservers_ = function () {
        var a = this.observers_.filter(function (a) {
          return a.gatherActive(), a.hasActive();
        });
        return (
          a.forEach(function (a) {
            return a.broadcastActive();
          }),
          a.length > 0
        );
      }),
      (a.prototype.connect_ = function () {
        Ph &&
          !this.connected_ &&
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          Jh
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: 1,
                childList: 1,
                characterData: 1,
                subtree: 1,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = 1)),
          (this.connected_ = 1));
      }),
      (a.prototype.disconnect_ = function () {
        Ph &&
          this.connected_ &&
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = 0),
          (this.connected_ = 0));
      }),
      (a.prototype.onTransitionEnd_ = function (a) {
        var e = a.propertyName,
          o = void 0 === e ? "" : e,
          r = Hh.some(function (a) {
            return !!~o.indexOf(a);
          });
        r && this.refresh();
      }),
      (a.getInstance = function () {
        return this.instance_ || (this.instance_ = new a()), this.instance_;
      }),
      (a.instance_ = null),
      a
    );
  })(),
  Wh = function (a, e) {
    for (var o = 0, r = Object.keys(e); o < r.length; o++) {
      var i = r[o];
      Object.defineProperty(a, i, {
        value: e[i],
        enumerable: 0,
        writable: 0,
        configurable: 1,
      });
    }
    return a;
  },
  Kh = function (a) {
    return (a && a.ownerDocument && a.ownerDocument.defaultView) || Gh;
  },
  Xh = aw(0, 0, 0, 0);
function Zh(a) {
  return parseFloat(a) || 0;
}
function _h(a) {
  for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
  return e.reduce(function (e, o) {
    return e + Zh(a["border-" + o + "-width"]);
  }, 0);
}
var $h =
  "undefined" != typeof SVGGraphicsElement
    ? function (a) {
        return a instanceof Kh(a).SVGGraphicsElement;
      }
    : function (a) {
        return a instanceof Kh(a).SVGElement && "function" == typeof a.getBBox;
      };
function aw(a, e, o, r) {
  return {
    x: a,
    y: e,
    width: o,
    height: r,
  };
}
var ew = (function () {
    function a(a) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = aw(0, 0, 0, 0)),
        (this.target = a);
    }
    return (
      (a.prototype.isActive = function () {
        var a,
          e =
            ((a = this.target),
            Ph
              ? $h(a)
                ? (function (a) {
                    var e = a.getBBox();
                    return aw(0, 0, e.width, e.height);
                  })(a)
                : (function (a) {
                    var e = a.clientWidth,
                      o = a.clientHeight;
                    if (!e && !o) return Xh;
                    var r = Kh(a).getComputedStyle(a),
                      i = (function (a) {
                        for (
                          var e = {},
                            o = 0,
                            r = ["top", "right", "bottom", "left"];
                          o < r.length;
                          o++
                        ) {
                          var i = r[o],
                            t = a["padding-" + i];
                          e[i] = Zh(t);
                        }
                        return e;
                      })(r),
                      t = i.left + i.right,
                      n = i.top + i.bottom,
                      s = Zh(r.width),
                      u = Zh(r.height);
                    if (
                      ("border-box" === r.boxSizing &&
                        (Math.round(s + t) !== e &&
                          (s -= _h(r, "left", "right") + t),
                        Math.round(u + n) !== o &&
                          (u -= _h(r, "top", "bottom") + n)),
                      !(function (a) {
                        return a === Kh(a).document.documentElement;
                      })(a))
                    ) {
                      var c = Math.round(s + t) - e,
                        l = Math.round(u + n) - o;
                      1 !== Math.abs(c) && (s -= c),
                        1 !== Math.abs(l) && (u -= l);
                    }
                    return aw(i.left, i.top, s, u);
                  })(a)
              : Xh);
        return (
          (this.contentRect_ = e),
          e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        );
      }),
      (a.prototype.broadcastRect = function () {
        var a = this.contentRect_;
        return (
          (this.broadcastWidth = a.width), (this.broadcastHeight = a.height), a
        );
      }),
      a
    );
  })(),
  ow = function (a, e) {
    var o = (function (a) {
      var e = a.x,
        o = a.y,
        r = a.width,
        i = a.height,
        t = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
        n = Object.create(t.prototype);
      return (
        Wh(n, {
          x: e,
          y: o,
          width: r,
          height: i,
          top: o,
          right: e + r,
          bottom: i + o,
          left: e,
        }),
        n
      );
    })(e);
    Wh(this, {
      target: a,
      contentRect: o,
    });
  },
  rw = (function () {
    function a(a, e, o) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Yh()),
        "function" != typeof a)
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = a), (this.controller_ = e), (this.callbackCtx_ = o);
    }
    return (
      (a.prototype.observe = function (a) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
          if (!(a instanceof Kh(a).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var e = this.observations_;
          e.has(a) ||
            (e.set(a, new ew(a)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (a.prototype.unobserve = function (a) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if ("undefined" != typeof Element && Element instanceof Object) {
          if (!(a instanceof Kh(a).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var e = this.observations_;
          e.has(a) &&
            (e.delete(a), e.size || this.controller_.removeObserver(this));
        }
      }),
      (a.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (a.prototype.gatherActive = function () {
        var a = this;
        this.clearActive(),
          this.observations_.forEach(function (e) {
            e.isActive() && a.activeObservations_.push(e);
          });
      }),
      (a.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var a = this.callbackCtx_,
            e = this.activeObservations_.map(function (a) {
              return new ow(a.target, a.broadcastRect());
            });
          this.callback_.call(a, e, a), this.clearActive();
        }
      }),
      (a.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (a.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      a
    );
  })(),
  iw = "undefined" != typeof WeakMap ? new WeakMap() : new Yh(),
  tw = function a(e) {
    if (!(this instanceof a))
      throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    var o = Vh.getInstance(),
      r = new rw(e, o, this);
    iw.set(this, r);
  };
["observe", "unobserve", "disconnect"].forEach(function (a) {
  tw.prototype[a] = function () {
    var e;
    return (e = iw.get(this))[a].apply(e, arguments);
  };
});
var nw,
  sw,
  uw,
  cw = void 0 !== Gh.ResizeObserver ? Gh.ResizeObserver : tw,
  lw = {
    right: "correta",
    place: "em outro local",
    wrong: "errada",
  },
  mw = (function () {
    s(n, Vf);
    var a,
      e,
      i = p(n);
    function n() {
      return r(this, n), i.apply(this, arguments);
    }
    return (
      t(n, [
        {
          key: "getLetters",
          value: function () {
            return this.shadowRoot.querySelectorAll(".letter");
          },
        },
        {
          key: "getLetter",
          value: function (a) {
            return this.getLetters()[a];
          },
        },
        {
          key: "setValue",
          value: function (a, e) {
            this.getLetter(a).innerHTML = e;
          },
        },
        {
          key: "letterTo",
          value:
            ((e = o(
              regeneratorRuntime.mark(function a(e, o) {
                var r,
                  i,
                  t = arguments;
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (
                            ((r = t.length > 2 && void 0 !== t[2] ? t[2] : 1),
                            !(i = this.getLetter(e)).classList.contains(o))
                          ) {
                            a.next = 4;
                            break;
                          }
                          return a.abrupt("return");
                        case 4:
                          if (
                            ((i.style.animation = null),
                            i.classList.add(o),
                            i.classList.remove("empty"),
                            (i.ariaLabel = 'letra "'
                              .concat(i.innerText, '" ')
                              .concat(lw[o])),
                            !r)
                          ) {
                            a.next = 13;
                            break;
                          }
                          return (a.next = 11), Dh(0.275);
                        case 11:
                          a.next = 14;
                          break;
                        case 13:
                          i.style.animationDuration = "0s";
                        case 14:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  this
                );
              })
            )),
            function (a, o) {
              return e.apply(this, arguments);
            }),
        },
        {
          key: "setRowEmpty",
          value: function () {
            var a,
              e = B(this.getLetters());
            try {
              for (e.s(); !(a = e.n()).done; ) a.value.classList.add("empty");
            } catch (a) {
              e.e(a);
            } finally {
              e.f();
            }
          },
        },
        {
          key: "setEdit",
          value: function (a) {
            for (var e = this.getLetters(), o = 0; o < 5; ++o)
              e[o].classList.toggle("edit", o == a);
          },
        },
        {
          key: "victory",
          value:
            ((a = o(
              regeneratorRuntime.mark(function a() {
                var e, o, r;
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          for (e = this.getLetters(), o = 0; o < e.length; ++o)
                            (r = e[o]).classList.add("done"),
                              Gf(
                                r,
                                "0.3s ease-out happy ".concat(0.05 * o, "s")
                              );
                          return (a.next = 4), Dh(0.55);
                        case 4:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  this
                );
              })
            )),
            function () {
              return a.apply(this, arguments);
            }),
        },
        {
          key: "connect",
          value: function () {
            var a = this,
              e = this.getAttribute("termo-row");
            (this.tabIndex = 0),
              this.setAttribute("role", "group"),
              this.setAttribute("aria-label", "palavra ".concat(e)),
              this.setAttribute("aria-live", "polite"),
              this.setAttribute("aria-roledescription", "letra");
            for (
              var o = this.shadowRoot.querySelectorAll("div"),
                r = function (r) {
                  var i = o[r];
                  (i.tabIndex = 0),
                    i.setAttribute("role", "text"),
                    i.setAttribute("aria-label", ""),
                    i.setAttribute("aria-live", "polite"),
                    i.setAttribute("aria-roledescription", "letra"),
                    i.setAttribute("termo-row", e),
                    i.setAttribute("termo-pos", r),
                    i.addEventListener("click", function () {
                      a.parentNode.parentNode.host.dispatchEvent(
                        new CustomEvent("letter", {
                          detail: {
                            letter: i,
                            row: Number.parseInt(e),
                            pos: r,
                          },
                        })
                      );
                    });
                },
                i = 0;
              i < o.length;
              ++i
            )
              r(i);
          },
        },
        {
          key: "html",
          value: function () {
            for (var a = [], e = 0; e < 5; ++e)
              a.push("<div lid=".concat(e, ' class="letter"></div>'));
            return a.join("");
          },
        },
        {
          key: "stylesheet",
          value: function () {
            return qf(
              nw ||
                (nw = f([
                  "\n* {\n  touch-action: manipulation;\n  outline: none;\n}\n\n:host {\n  display: grid;\n  grid-template-columns: repeat(5, 1em);\n  grid-gap: 0.0625em;\n  font-size: 1em;\n  height: 1em;\n  margin: 0;\n  line-height: 0;\n}\n\n.letter {\n  aspect-ratio: 1;\n  font-weight: 600;\n  font-family: 'Mitr', sans-serif;\n  color: #FAFAFF;\n  background-color: #615458;\n  border-radius: 10%;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.65em;\n  line-height: 1em;\n  text-transform: uppercase;\n  --happy-jump: 55%;\n  cursor: pointer;\n}\n\n@keyframes rownope {\n  10%  { transform: translateX(-14px); }\n  20%  { transform: translateX(14px); }\n  30%  { transform: translateX(-8px); }\n  40%  { transform: translateX(8px); }\n  50%  { transform: translateX(-4px); }\n  60%  { transform: translateX(4px); }\n  70%  { transform: translateX(-2px); }\n  80%  { transform: translateX(2px); }\n  90%  { transform: translateX(-1px); }\n  100% { transform: translateX(1px); }\n}\n\n@keyframes happy {\n  10%  { transform: translateY(calc(var(--happy-jump)*-0.3)); }\n  20%  { transform: translateY(calc(var(--happy-jump)*-0.58)); }\n  30%  { transform: translateY(calc(var(--happy-jump)*-0.8)); }\n  40%  { transform: translateY(calc(var(--happy-jump)*-0.95)); }\n  50%  { transform: translateY(calc(var(--happy-jump)*-1)); }\n  60%  { transform: translateY(calc(var(--happy-jump)*-0.95)); }\n  70%  { transform: translateY(calc(var(--happy-jump)*-0.8)); }\n  80%  { transform: translateY(calc(var(--happy-jump)*-0.58)); }\n  90%  { transform: translateY(calc(var(--happy-jump)*-0.3)); }\n  100% { transform: translateY(0px); }\n}\n\n@keyframes flip {\n  0% {\n    background-color: transparent;\n    border: 0.125em solid #4C4347;\n    transform: perspective(200px) rotateY(0deg);\n  }\n\n  49.99999% {\n    background-color: transparent;\n    border: 0.125em solid #4C4347;\n    transform: perspective(200px) rotateY(90deg);\n  }\n\n  50% {\n    transform: perspective(200px) rotateY(-90deg);\n    background-color: var(--color);\n    border: none;\n  }\n\n  50.00001% {\n    background-color: var(--color);\n    border: none;\n  }\n\n  100% {\n    transform: perspective(200px) rotateY(0deg);\n    background-color: var(--color);\n  }\n}\n\n@keyframes type {\n  0% {\n    transform: perspective(200px) translateZ(0);\n    color: transparent;\n  }\n\n  24.99999% {\n    color: transparent;\n  }\n\n  25% {\n    transform: perspective(200px) translateZ(30px);\n    color: #FAFAFF;\n  }\n\n  100% {\n    transform: perspective(200px) translateZ(0);\n    color: #FAFAFF;\n  }\n}\n\n.letter.edit {\n  border-bottom: 0.25em solid #4C4347 !important;\n}\n\n.letter.ontype {\n  animation: 0.15s ease-out type 0s none;\n}\n\n.letter.empty {\n  background-color: transparent;\n  border: 0.125em solid #4C4347;\n}\n\n.letter.right {\n  --color: var(--colorRight);\n  animation: 0.45s linear flip 0s forwards;\n}\n\n.letter.place {\n  --color: var(--colorPlace);\n  animation: 0.45s linear flip 0s forwards;\n}\n\n.letter.wrong {\n  --color: var(--colorWrong);\n  animation: 0.45s linear flip 0s forwards;\n}\n\n.letter.done {\n  background-color: var(--colorRight);\n}\n    ",
                ]))
            );
          },
        },
      ]),
      n
    );
  })();
n(mw, "attr", ["termo-row"]), customElements.define("wc-row", mw);
var Aw,
  gw = null !== (sw = window.ResizeObserver) && void 0 !== sw ? sw : cw,
  dw = new WeakMap(),
  pw = (function () {
    s(e, Vf);
    var a = p(e);
    function e() {
      var o;
      r(this, e);
      for (var i = arguments.length, t = new Array(i), n = 0; n < i; n++)
        t[n] = arguments[n];
      return (
        j(g((o = a.call.apply(a, [this].concat(t)))), dw, {
          writable: 1,
          value: null,
        }),
        o
      );
    }
    return (
      t(e, [
        {
          key: "connect",
          value: function () {
            E(this, dw, new gw(this.resize.bind(this))),
              y(this, dw).observe(this.parentNode);
          },
        },
        {
          key: "html",
          value: function () {
            return "<div id=hold></div>";
          },
        },
        {
          key: "stylesheet",
          value: function () {
            return qf(
              uw ||
                (uw = f([
                  "\n:host {\n  user-select: none;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  font-size: 100em;\n  margin: 0 0.2em;\n  box-sizing: border-box;\n}\n\n#hold {\n  font-size: 1em;\n  display: grid;\n  grid-template-rows: repeat(auto-fill, 1em);\n  grid-gap: 0.0625em;\n  margin: 0;\n  padding: 0;\n}\n\n@keyframes rownope {\n  10%  { transform: translateX(-14px); }\n  20%  { transform: translateX(14px); }\n  30%  { transform: translateX(-8px); }\n  40%  { transform: translateX(8px); }\n  50%  { transform: translateX(-4px); }\n  60%  { transform: translateX(4px); }\n  70%  { transform: translateX(-2px); }\n  80%  { transform: translateX(2px); }\n  90%  { transform: translateX(-1px); }\n  100% { transform: translateX(1px); }\n}\n    ",
                ]))
            );
          },
        },
        {
          key: "addRow",
          value: function () {
            var a = this.shadowRoot.querySelectorAll("wc-row").length;
            return (
              this.shadowRoot
                .getElementById("hold")
                .append(Pf("<wc-row termo-row=".concat(a, "></wc-row>"))),
              a
            );
          },
        },
        {
          key: "update",
          value: function () {
            var a,
              e = Number.parseInt(
                null !== (a = this.getAttribute("rows")) && void 0 !== a ? a : 6
              );
            if (-1 != e) {
              for (
                var o = this.shadowRoot.querySelectorAll("wc-row"), r = e;
                r < o.length;
                ++r
              )
                this.shadowRoot.getElementById("hold").removeChild(o[r]);
              for (var i = Math.min(e, o.length); i < e; ++i) this.addRow();
            }
          },
        },
        {
          key: "resize",
          value: function () {
            var a,
              e = Number.parseInt(
                null !== (a = this.getAttribute("rows")) && void 0 !== a ? a : 6
              ),
              o = this.clientWidth / 5.65,
              r = -1 == e ? 1e7 : this.clientHeight / (e + 0.0625 * (e - 1)),
              i = Math.floor(Math.min(o, r));
            this.style.fontSize = "".concat(i, "px");
          },
        },
        {
          key: "getRow",
          value: function (a) {
            return this.shadowRoot.querySelectorAll("wc-row")[a];
          },
        },
        {
          key: "getAllRows",
          value: function () {
            return this.shadowRoot.querySelectorAll("wc-row");
          },
        },
      ]),
      e
    );
  })();
n(pw, "attr", ["rows"]), customElements.define("wc-board", pw);
var fw = (function () {
  s(e, Vf);
  var a = p(e);
  function e() {
    return r(this, e), a.apply(this, arguments);
  }
  return (
    t(e, [
      {
        key: "connect",
        value: function () {
          var a,
            e = B(this.shadowRoot.querySelectorAll("a"));
          try {
            for (e.s(); !(a = e.n()).done; )
              a.value.addEventListener("click", function (a) {
                a.stopPropagation();
              });
          } catch (a) {
            e.e(a);
          } finally {
            e.f();
          }
        },
      },
      {
        key: "isOpen",
        value: function () {
          return this.classList.has("show");
        },
      },
      {
        key: "show",
        value: function () {
          this.classList.add("show");
        },
      },
      {
        key: "hide",
        value: function () {
          this.classList.remove("show");
        },
      },
      {
        key: "disableLink",
        value: function (a) {
          var e = this.shadowRoot.getElementById(a);
          e && (e.classList.add("nope"), e.removeAttribute("href"));
        },
      },
      {
        key: "html",
        value: function () {
          return '\n  <div id=left>\n<a id="termo" href=\'https://term.ooo\'>termo</a>\n<a id="duo" href=\'https://term.ooo/2\'>dueto</a>\n<a id="quatro" href=\'https://term.ooo/4\'>quarteto</a>\n</div>\n<div id="right">\n<a id="about" href=\'https://term.ooo/sobre\'><img src=\''.concat(
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02My41MDA0IDI0QzQxLjY4NDQgMjQgMjQgNDEuNjg0IDI0IDYzLjQ5OTZDMjQgODUuMzE1MiA0MS42ODQ0IDEwMyA2My41MDA0IDEwM0M4NS4zMTY0IDEwMyAxMDMgODUuMzE1MiAxMDMgNjMuNDk5NkMxMDMgNDEuNjg0IDg1LjMxNjQgMjQgNjMuNTAwNCAyNFpNNzAuMzkyMiA4Ni44NTgxQzcwLjM5MjIgOTAuMzk5MyA2Ny4zMzA0IDkzLjI2ODcgNjMuNTU0MyA5My4yNjg3QzU5Ljc3ODIgOTMuMjY4NyA1Ni43MTY0IDkwLjM5OTMgNTYuNzE2NCA4Ni44NTgxVjU3LjQ0NjJDNTYuNzE2NCA1My45MDU5IDU5Ljc3ODIgNTEuMDM1NiA2My41NTQzIDUxLjAzNTZDNjcuMzMwNCA1MS4wMzU2IDcwLjM5MjIgNTMuOTA1OSA3MC4zOTIyIDU3LjQ0NjJWODYuODU4MVpNNjMuNTAwNCA0OC4zOTIyQzU5LjQzOTUgNDguMzkyMiA1Ni4xNDY5IDQ1LjEwMDUgNTYuMTQ2OSA0MS4wMzhDNTYuMTQ2OSAzNi45NzY0IDU5LjQzODcgMzMuNjg0NiA2My41MDA0IDMzLjY4NDZDNjcuNTYyOSAzMy42ODQ2IDcwLjg1NDcgMzYuOTc2NCA3MC44NTQ3IDQxLjAzOEM3MC44NTM5IDQ1LjEwMDUgNjcuNTYyMSA0OC4zOTIyIDYzLjUwMDQgNDguMzkyMloiIGZpbGw9IiNGQUZBRkYiLz4KPC9zdmc+Cg==",
            "'></a></div>\n  "
          );
        },
      },
      {
        key: "stylesheet",
        value: function () {
          return qf(
            Aw ||
              (Aw = f([
                "\n:host {\n  transition: height 0.5s ease-in-out;\n  height: 0;\n  overflow: hidden;\n  flex-shrink: 0;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: 3em;\n  grid-gap: 0;\n  color: #FAFAFF;\n  font-family: 'Mitr', sans-serif;\n  font-weight: 400;\n  font-size: 3em;\n  background-color: #222;\n  user-select: none;\n  z-index: 15000;\n}\n\n:host(.show) {\n  height: 3em;\n}\n\n.nope {\n  opacity: 0.25;\n}\n\n#left, #right {\n  padding: 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  flex-direction: row;\n}\n\n#left {\n  justify-content: flex-start;\n}\n\n#right {\n  justify-content: flex-end;\n}\n\na {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  line-height: 1.5em;\n  height: 4vh;\n  color: #FAFAFF;\n  padding: 0 1em;\n  margin: 0;\n}\n\nimg {\n  height: 1.5em;\n  margin: 0;\n  padding: 0;\n  float: right;\n}\n\n",
              ]))
          );
        },
      },
    ]),
    e
  );
})();
n(fw, "attr", []), customElements.define("wc-bar", fw);
var bw = ce,
  vw = L,
  hw = pa,
  ww = io,
  Bw = function (a) {
    return void 0 !== a && (bw(a, "value") || bw(a, "writable"));
  },
  yw = N,
  Ew = Yg;
di(
  {
    target: "Reflect",
    stat: 1,
  },
  {
    get: function a(e, o) {
      var r,
        i,
        t = arguments.length < 3 ? e : arguments[2];
      return ww(e) === t
        ? e[o]
        : (r = yw.f(e, o))
        ? Bw(r)
          ? r.value
          : void 0 === r.get
          ? void 0
          : vw(r.get, t)
        : hw((i = Ew(e)))
        ? a(i, o, t)
        : void 0;
    },
  }
);
var Qw = C,
  Dw = Lc;
di(
  {
    global: 1,
  },
  {
    Reflect: {},
  }
),
  Dw(Qw.Reflect, "Reflect", 1);
var xw = new Proxy(
  {},
  {
    get: function (a, e) {
      var o = Reflect.get(a, e);
      return o || (o = a[e] = document.querySelector("wc-".concat(e))), o;
    },
  }
);
function jw(a, e) {
  (a.style.animation = null), a.getClientRects(), (a.style.animation = e);
}
function Mw(a) {
  xw.notify.popup(a);
}
function zw() {
  xw.notify.popoff();
}
function Iw() {
  xw.modal.getModal("config").setConfig({
    highContrast: tb.highContrast,
    hardMode: tb.hardMode,
  }),
    document.body.classList.toggle("high", tb.highContrast);
}
var Cw = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
  Nw = fr,
  kw = Er,
  Fw = C.RangeError,
  Ow = C.Array,
  Tw = Math.abs,
  Sw = Math.pow,
  Lw = Math.floor,
  Uw = Math.log,
  Rw = Math.LN2,
  Yw = {
    pack: function (a, e, o) {
      var r,
        i,
        t,
        n = Ow(o),
        s = 8 * o - e - 1,
        u = (1 << s) - 1,
        c = u >> 1,
        l = 23 === e ? Sw(2, -24) - Sw(2, -77) : 0,
        m = a < 0 || (0 === a && 1 / a < 0) ? 1 : 0,
        A = 0;
      for (
        (a = Tw(a)) != a || a === 1 / 0
          ? ((i = a != a ? 1 : 0), (r = u))
          : ((r = Lw(Uw(a) / Rw)),
            a * (t = Sw(2, -r)) < 1 && (r--, (t *= 2)),
            (a += r + c >= 1 ? l / t : l * Sw(2, 1 - c)) * t >= 2 &&
              (r++, (t /= 2)),
            r + c >= u
              ? ((i = 0), (r = u))
              : r + c >= 1
              ? ((i = (a * t - 1) * Sw(2, e)), (r += c))
              : ((i = a * Sw(2, c - 1) * Sw(2, e)), (r = 0)));
        e >= 8;

      )
        (n[A++] = 255 & i), (i /= 256), (e -= 8);
      for (r = (r << e) | i, s += e; s > 0; )
        (n[A++] = 255 & r), (r /= 256), (s -= 8);
      return (n[--A] |= 128 * m), n;
    },
    unpack: function (a, e) {
      var o,
        r = a.length,
        i = 8 * r - e - 1,
        t = (1 << i) - 1,
        n = t >> 1,
        s = i - 7,
        u = r - 1,
        c = a[u--],
        l = 127 & c;
      for (c >>= 7; s > 0; ) (l = 256 * l + a[u--]), (s -= 8);
      for (o = l & ((1 << -s) - 1), l >>= -s, s += e; s > 0; )
        (o = 256 * o + a[u--]), (s -= 8);
      if (0 === l) l = 1 - n;
      else {
        if (l === t) return o ? NaN : c ? -1 / 0 : 1 / 0;
        (o += Sw(2, e)), (l -= n);
      }
      return (c ? -1 : 1) * o * Sw(2, l - e);
    },
  },
  Pw = ne,
  Gw = wr,
  qw = Dr,
  Hw = function (a) {
    for (
      var e = Pw(this),
        o = qw(e),
        r = arguments.length,
        i = Gw(r > 1 ? arguments[1] : void 0, o),
        t = r > 2 ? arguments[2] : void 0,
        n = void 0 === t ? o : Gw(t, o);
      n > i;

    )
      e[i++] = a;
    return e;
  },
  Jw = C,
  Vw = Z,
  Ww = F,
  Kw = Cw,
  Xw = or,
  Zw = fo,
  _w = Fc,
  $w = k,
  aB = Jc,
  eB = fr,
  oB = Er,
  rB = function (a) {
    if (void 0 === a) return 0;
    var e = Nw(a),
      o = kw(e);
    if (e !== o) throw Fw("Wrong length or index");
    return o;
  },
  iB = Yw,
  tB = Yg,
  nB = Vu,
  sB = gr.f,
  uB = _e.f,
  cB = Hw,
  lB = Hs,
  mB = Lc,
  AB = Xw.PROPER,
  gB = Xw.CONFIGURABLE,
  dB = Xo.get,
  pB = Xo.set,
  fB = Jw.ArrayBuffer,
  bB = fB,
  vB = bB && bB.prototype,
  hB = Jw.DataView,
  wB = hB && hB.prototype,
  BB = Object.prototype,
  yB = Jw.Array,
  EB = Jw.RangeError,
  QB = Vw(cB),
  DB = Vw([].reverse),
  xB = iB.pack,
  jB = iB.unpack,
  MB = function (a) {
    return [255 & a];
  },
  zB = function (a) {
    return [255 & a, (a >> 8) & 255];
  },
  IB = function (a) {
    return [255 & a, (a >> 8) & 255, (a >> 16) & 255, (a >> 24) & 255];
  },
  CB = function (a) {
    return (a[3] << 24) | (a[2] << 16) | (a[1] << 8) | a[0];
  },
  NB = function (a) {
    return xB(a, 23, 4);
  },
  kB = function (a) {
    return xB(a, 52, 8);
  },
  FB = function (a, e) {
    uB(a.prototype, e, {
      get: function () {
        return dB(this)[e];
      },
    });
  },
  OB = function (a, e, o, r) {
    var i = rB(o),
      t = dB(a);
    if (i + e > t.byteLength) throw EB("Wrong index");
    var n = dB(t.buffer).bytes,
      s = i + t.byteOffset,
      u = lB(n, s, s + e);
    return r ? u : DB(u);
  },
  TB = function (a, e, o, r, i, t) {
    var n = rB(o),
      s = dB(a);
    if (n + e > s.byteLength) throw EB("Wrong index");
    for (
      var u = dB(s.buffer).bytes, c = n + s.byteOffset, l = r(+i), m = 0;
      m < e;
      m++
    )
      u[c + m] = l[t ? m : e - m - 1];
  };
if (Kw) {
  var SB = AB && "ArrayBuffer" !== fB.name;
  if (
    $w(function () {
      fB(1);
    }) &&
    $w(function () {
      new fB(-1);
    }) &&
    !$w(function () {
      return new fB(), new fB(1.5), new fB(NaN), SB && !gB;
    })
  )
    SB && gB && Zw(fB, "name", "ArrayBuffer");
  else {
    (bB = function (a) {
      return aB(this, vB), new fB(rB(a));
    }).prototype = vB;
    for (var LB, UB = sB(fB), RB = 0; UB.length > RB; )
      (LB = UB[RB++]) in bB || Zw(bB, LB, fB[LB]);
    vB.constructor = bB;
  }
  nB && tB(wB) !== BB && nB(wB, BB);
  var YB = new hB(new bB(2)),
    PB = Vw(wB.setInt8);
  YB.setInt8(0, 2147483648),
    YB.setInt8(1, 2147483649),
    (!YB.getInt8(0) && YB.getInt8(1)) ||
      _w(
        wB,
        {
          setInt8: function (a, e) {
            PB(this, a, (e << 24) >> 24);
          },
          setUint8: function (a, e) {
            PB(this, a, (e << 24) >> 24);
          },
        },
        {
          unsafe: 1,
        }
      );
} else
  (vB = (bB = function (a) {
    aB(this, vB);
    var e = rB(a);
    pB(this, {
      bytes: QB(yB(e), 0),
      byteLength: e,
    }),
      Ww || (this.byteLength = e);
  }).prototype),
    (wB = (hB = function (a, e, o) {
      aB(this, wB), aB(a, vB);
      var r = dB(a).byteLength,
        i = eB(e);
      if (i < 0 || i > r) throw EB("Wrong offset");
      if (i + (o = void 0 === o ? r - i : oB(o)) > r) throw EB("Wrong length");
      pB(this, {
        buffer: a,
        byteLength: o,
        byteOffset: i,
      }),
        Ww || ((this.buffer = a), (this.byteLength = o), (this.byteOffset = i));
    }).prototype),
    Ww &&
      (FB(bB, "byteLength"),
      FB(hB, "buffer"),
      FB(hB, "byteLength"),
      FB(hB, "byteOffset")),
    _w(wB, {
      getInt8: function (a) {
        return (OB(this, 1, a)[0] << 24) >> 24;
      },
      getUint8: function (a) {
        return OB(this, 1, a)[0];
      },
      getInt16: function (a) {
        var e = OB(this, 2, a, arguments.length > 1 ? arguments[1] : void 0);
        return (((e[1] << 8) | e[0]) << 16) >> 16;
      },
      getUint16: function (a) {
        var e = OB(this, 2, a, arguments.length > 1 ? arguments[1] : void 0);
        return (e[1] << 8) | e[0];
      },
      getInt32: function (a) {
        return CB(OB(this, 4, a, arguments.length > 1 ? arguments[1] : void 0));
      },
      getUint32: function (a) {
        return (
          CB(OB(this, 4, a, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        );
      },
      getFloat32: function (a) {
        return jB(
          OB(this, 4, a, arguments.length > 1 ? arguments[1] : void 0),
          23
        );
      },
      getFloat64: function (a) {
        return jB(
          OB(this, 8, a, arguments.length > 1 ? arguments[1] : void 0),
          52
        );
      },
      setInt8: function (a, e) {
        TB(this, 1, a, MB, e);
      },
      setUint8: function (a, e) {
        TB(this, 1, a, MB, e);
      },
      setInt16: function (a, e) {
        TB(this, 2, a, zB, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint16: function (a, e) {
        TB(this, 2, a, zB, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setInt32: function (a, e) {
        TB(this, 4, a, IB, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint32: function (a, e) {
        TB(this, 4, a, IB, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat32: function (a, e) {
        TB(this, 4, a, NB, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat64: function (a, e) {
        TB(this, 8, a, kB, e, arguments.length > 2 ? arguments[2] : void 0);
      },
    });
mB(bB, "ArrayBuffer"), mB(hB, "DataView");
var GB = {
    ArrayBuffer: bB,
    DataView: hB,
  },
  qB = di,
  HB = Z,
  JB = k,
  VB = io,
  WB = wr,
  KB = Er,
  XB = Ms,
  ZB = GB.ArrayBuffer,
  _B = GB.DataView,
  $B = _B.prototype,
  ay = HB(ZB.prototype.slice),
  ey = HB($B.getUint8),
  oy = HB($B.setUint8);
qB(
  {
    target: "ArrayBuffer",
    proto: 1,
    unsafe: 1,
    forced: JB(function () {
      return !new ZB(2).slice(1, void 0).byteLength;
    }),
  },
  {
    slice: function (a, e) {
      if (ay && void 0 === e) return ay(VB(this), a);
      for (
        var o = VB(this).byteLength,
          r = WB(a, o),
          i = WB(void 0 === e ? o : e, o),
          t = new (XB(this, ZB))(KB(i - r)),
          n = new _B(this),
          s = new _B(t),
          u = 0;
        r < i;

      )
        oy(s, u++, ey(n, r++));
      return t;
    },
  }
);
var ry = Gc,
  iy = GB.ArrayBuffer;
di(
  {
    global: 1,
    forced: C.ArrayBuffer !== iy,
  },
  {
    ArrayBuffer: iy,
  }
),
  ry("ArrayBuffer");
for (
  var ty = window.atob(
      "fwWqAEMEgQFhAzMC/wBqBcYAqASKApsBIwVnAaICrQMbBQgAAQXMAdIBlgD4BPYDaAN9AnYBmwQXA6MDKAXEA0wDygMJBCIDsgT/BM8ATAG7BKsBbQDRA/QDMgNXAd0EGgAHA1QEQwABARABnQFfBFYC1gOsBFIAYAIOA44EMATOAXAFJwIhBdgCnwJNBN8AmgDCAOUBHwAcAl4BcgMYBGUBjQELARgF1QCUBa4CCAPvA9cC1gR5BCsAkwVAAHEFrwFqAh8B0wFLBNsC0QIZBeUDjQAsBO0E4gP3AdwABQBiBbkAzwGMBJICkAPZAacCqQBeA5AAjwT7AFwAYgChAAMDAAFxAAMAxwRcBE4DZAR2Ak4EOgH+AxwAxATqASwD+QOgBW4AywEqAz4FUQPUAJYFjQVrAMAADgUjAPIDRAGDAZkBqANMBDkCPAKrBJ4COAECAY4A8wElAf8D1wPsAb0BTgVOAFYALQBIAowAjwW2ApMA4ADjAKQESwDkATAD6AHMAuMBQgLAAzgFFACFA/EDYQQ+ASgAiwNHBGgCRwJAAegAFQLUBEUBwwDnA7UBIAQKAogBPQUBApQC0QScAhACngFlAtcBeAFGApUCBQO+AGAADAKEA7YE8gB0AUYFUwBOAmMEFgF5A7MEhQSOAkoBLQSCAvICNgNJBfUD3wOIAlcC+QDiBMUAbwWzAxICTwR5BWEBegGoANQD+gIUAXcEEQI8BLAATwBfAv0AvAHaAp4E6ANAA1MCLgRqAZwFgABcA+4AYwA8AHsFbwDCAZsFVgR5ACQBwgOJAmkEnQT9BIoFTwPbAT0AVQDzAloEmwKEBSUA7QGYAGcFYAQgAuYCigGSA9oBbwJMAqUCDQIPAg8A4AMgBfQALAH/AV4E7wLSBIYAXQExASsF5ACxATQBcwRvAUkAowKiBV8BUgEcBHAApQH8A7wA/AKsAFQBuwKLBJEBdAWPAAYFKQO3AM8DTQVTAxQDBgE7ASADLgKZAN0BJARPBXUEDQDKAcACGAE4AD8FIQH+ARMDuQNlBIABQAUQAC8CBAQ6AAkDVgWQBXsDFQFkAXQDsAPVBKgBuQFBBKYAjwIbBAMEFgPYAzcF3wS2AawDcALvBN4DNgUpBX0AgAMJAqsCcQFyBLQD6QIOApgFLQJaBXMCggDaA8oA6wTeBLgDlgRYAOYBCARCBfUCMQSFAjUBfAOjBJQBIQTkAzgDAwJ+AEcF7AKABSUCpQOnBKAAUgRhAAgFWwIZAKABggSGAooAUQKiAwcBUAVtArwELQN/BFMBlQM7A40EnQDmAPsDBQK/BPADBAGGBE8C5QIyAuYDDACMAfECvQL3BIMDbAV4Ag8EFwIQBOoEzQCSAdUBrAEUBEoAtQL2AFEFUQQnAMYD3gAlBY4BRACKAwkAjwM8Ab8AaQBcAsEBcgHyBB0DBwV+AbICPgK8AroE8QEfBF0DlwI9A3IAAgUNBKIBUwQ0ApABawSfAWwBdQIvAzoDSgW1AxcF4AFjA0IAMQOfA3sAegTMAJoFtARmApkFjgVkAFkChwQcA5QEGwA7BSkAuAEiAZ8A6wGxBFACEgFMBSsCFwT5ApoBgwSQBDIBJALFAYEESQQjA/oD+wFIBckAeADFAoIDRwGeA8sDVwXSAxUDlQXKBNMEXgANBWwEEwXDBB4FHQFEA3cF/AAvBQ4EbQW4At8BwgJ6AocCiAC6AakBNACuBBEBMwWsAs4A7AQxAD8BIAB3A8YBVwAwBbQCoQUhAv4C1wT2AXcCFAXiAdEAdQNpAjsEswBEAksCRQWXA7ABVgOLBW4FCAJMAEIE+AKHAOIAZQDABDkEKgQ5AU0BvQQFBcQBXgJrA/UA/QEnBYUFzQLbBMgDrwDHAXICiQQFAc0EdwAhAGUDCgDHAOkBMwEQA1IDAAI0BM4EkQUaAisEUANfABED7QNXA/0DRwAyACMEBABJAWsCVwQmAUIDcwAzBK0B7gI3AhcB2wPnAPMDawXtAq8CIgAaAwkF1QPsAHABlwTHA8IE3QIvAT0E2ARLASkE9QTDAwoDKAOyAFAERgT8BEMD7gGUAJ0FLgWbAK8ExQSkAkYB0AA+BEgEFwD9AmgBIgKeAKkDgQXGAlMF+QEfA5YCfgJQAFkFEQXJBN4CAQTYAJYBOwImBB4DvwPrAMkDSwNVAuwDYgKRAiIFlQCyA20E7gSiBPQEIgTcA3wAGgSLAmkFWwV6AyABeATDAV4CEQRVA3sEDQGPAWMCYgHuA1gFfgQtBTkAHgKDAuMCZAUVAB4ARQN8BfQBbAIvBHMDjQK8AzYEXgU0BRsCAQAYAm8DlQQBA5gCoQQ5BXgFjAU/AyUDuwPhA4IFJwT7AosAFQXjA3YDXAHcAV0AvwHTA2YBSgRmAIACMAGhAX4FfQQDATsALADUAkkDBQTdAFgB4QCjAKcAaASFAY0DfwKpBF8DCwPlBDQDNgCtAvcCMALMBJQDuASWA0UApAD6AG8ELgB6AC0BCgW+Ab4DagDpBEUEyASeBaAEkgTyASMCMwNZBDECBgRsANUC9AKlBCcDdQHIATIFWQCwBFoAswETAA0DRAWTA30BfQMnAa0AoQNVBFQDPwTTANQB5QBaA7kCcgUCAAcErgPZA+QCtwKmA7oATwGqAcQA/wKdAlgEwAHqA6cBKAIGACoF4gK9AzgCOgXpAz0CkwThAZgBpAPBAz0BGAMEA74CpAG4AOsDHQCGAaADhAQCA2cDXQRAAmEF7QD7BEkCtwM1A8MC3QOmAioCJgA3AzUAWwTXAJoCqgJhAjwF+QSJAxYEVgHZAqgCCgHwAqoEdgTcBAwFSABuAzkD0wIMBHQEVAXQAZwBUgVEBOgCCwURAFgDlwGuATYC+gEuA5cFhQAzAAsEiAQZAssAiQWVAQwDaQORAHYAQQOrAHADmgQfBVsAPwAWAo4DXQU3AJoDnQO+BJsDDwVGAG4EGgHhAswDEgUoAc8ExQN6BVUBcAQeBKkC1gBlBdAEwQRxApkEhALcAm4BSAHwAcEC8wDpAL0AhwX3A0MCdQD1AQcAlwClABkErwNHAw4B1gKiACsBCwJBBVkDYAFUACQAZwK3BJwE4QRtA2wDEgDNAcgAAwX+ACkCKgFaAeoCnAOYBFEBNwE6BMsEGwFBAs4CpgE/AmsB2QAjARMB6ASGBYIBcQSQAgQChAGJAM8CcwV7ASYDyQGxA9IAxAIuAXYFfAG2AOcBZwRoBXkBQgGrA/gBRgN8AiQD5gRbAWIDUAFxA0oCjANoAOACJQQCBIYDgwVmA7MCAANjBUgDNQR0Av4EywJkA9oA5wKRA7oC3gEJAU4B8QR5AtgB+gSuAFQChwE+A+MEuwEGAw8BmAN/ABkDtgN/AXwEdAAcBTUFWgJDBVUFLAIaBdICigT3AEUC8ABNAB8CUQAYAFwFNgE3BBYFewJBAXUF0QFkAvgAHQLHAlICnwSmBLECoAKZAioA8wSxANACSwVqA4ECHQX4A9oEuQQ+ACYFGQESA5IFWQGnA5kDrQTxAHgDygLbADIELwBmBFsDFAIsBesCtQDvAIcDgQNmBQsA9gKRBJMBJgL2BBIE4AQAAHcBKwMABbACOARjAUEA8AQ1AqoDcwEoBKMBwQBgBdADMQW7ALoDxgR9BYEABwI8AwgBnACEAIAEQwHvAYMAbgJnAH8DYgRfBRAFtAGfBYgDFgC0AIkB5AQbAwQFHAGyAYsBvwIeAV0CJAXqALcBFQSTAkoDAgLnBAwBfgMhA/wBzQPfAmoEjALWAbUEyQJABDoCAARYApIAiAVgA2kBTQLZBG0BDwMKBKECyAJNAx0EEwIpATAAzgMTBAYCVQQdA1QAiQQSBWIB6gL3A6YBNwIfAQEFWwLaAo4D4wTfADICEwAkAMEEzQSlA3EF/QLnACkEqgQJBGkCkQBwBSAB8QLZA8EBNwT1A1cFXgAHA5EEFALHAnECzwP/AWIDzgR7A/cE1gKVAnwEjACUAdIDQAJ5A20DDgOhASsDBQTeAZMCBgF4BVIFswSVABACJQLmAZoCywKVA/gBMgT+AuYDqgLWAzgBwwMjAv4DSwCYARYCsAF6AyUANgFSBHkBsQHNAYYAAwCVBWEBLAKEBDwCdgPCAX4DEwJHAJ4BZgKBAaUEFgUmBLsE9gHRAhcAXQSgA2YBdQFZAfwCSQOzAYkCAgCLAsoACQXOA48BagJjBTwEJwF+AFcCsAQfAtoDJwIEAmsF0gHABOsEcAMJA30DsAD6BCICGAHsA2EEGwQOBPcBUQEHAbMC+QDbAAsCkQUKBQwA8gEDBbkBmgCwA3UAYgVEBTkEwwAWALMALQSABE4ClwViAtEEUwCWAC4DcwFFBJcEWAApA8kDQgGzA18BoAAmABgCCwN5AKYCyAGBBeEBDwDmAt4C8wG1A3IDAwOCBOMCawFmAAUAhwLGBNcDMQWgBV8DjAVEABUAZAIcBZkCmQNWAA8BxgMwA9gCZgWuAh0ALAX0A3oFMQDuARkEGwCwAjsCTAFaBAIFMgB7AmkFwgS8AAUCCgQeAk0AogVSAR4AmwJyAZwCaAJOBbcBLAC1AL4EjAMjAFcBtgGIAcoCmQHiBGUESwKRAbcASALYBPwAzATLA0EBLwHNAlYBnQKEARwAqADkAJkAzABKAFUAdgV6BBUE0wAVAnoATAMUBeMB8gP5AdABQgRhAKABFgQqBKsEzAFmAz4CTwShAMUDmQVQA1oC+gAIBWcCOAVnBP4BZwVFAsYAzQAoAygCkAUYAJME3ACCA+cCEgB2ABEDyQR7AbcDugBJBa8AUAFlBQoDrQCkAXMCuQOuALQExAGPBbsDhwB7BY8AOwH2AlQCRwSFAC0CBgItA6UBmwHbAlkCJQPpAtME4QOdAEYAvQC/BEABgADSAJIDJAFQBJsEwQAUAPgDuQRBAI8C6wK7AssBVQVsBEwC3AEjAx8FVQKsAdEA3wHkAVUD7gQCBPkDwwTFBHgECAMRAHEEsQKoAZgA7ADFAaIDgAVKBbgBSwPfAv0BkQNzBO0D9QDKAx4F0AJNAlMCxAAnBU4EqgCkAJUB5AR0AkQDWgDwBDwFYAQqASMB5gQ7BPoBSARKAu0AAAPBAkwEHgOqA3IFvAQSAnAEgwGpBJ8AIATIAFYDGgBdAIUBlgWUBMACvgJ8AKgDZwPOACIDMwPRA8QEpgDwAWwBiwANAqgCIgVPAOgB9gCuAzoBcQC5AkYEkwGOAKIC+wTTAa8EYwK1AW4FbQF0BQED5wP0BAMCuQAABQsEQAMXA3MAWQXWAJsAfgGvAngBTwEgAOUBbAVABV0DUQU1AvcAhgUIBLQBoAQXBFICPACLBWEDfAFQBaECQwGhA4cBGQVEBGsD+AD/ApQFCwU0BbgA6ATTA4wBBwWNAF4D/wQJAYIBkAQCA/IAIQWJANkCbgOfAkYFigR3ASUBAgFABBME/wAMAoAD2AGnBPEDUwU9AccBWgE+BNQD+wOMBKwEJwMwAXAAgwM5ACED1QIVAfkCDQPuAI0FIgEEAdAEQgUiAOkDPwRYAjMENwEXBREE5QJrBNcEzgHgAyUFRQExA+UDkwMDAXoB5wENACgEOQGiAb0CgQB7BJECIgSNBIkDVgJqBKUALwDqATIFHQSaAQYAQgLgAnsAdgLqALIAWAUMBfAD3gS9AcMCrQJ3BBMBrgG+AcIDEQLCAr8BlAPgAAoBWATRAb8DrQNZBNoB7wKdASoFHQXoAuYARAF3AkMEXAIEBU0DTAWBBGQEWwGCBcYBJgX7ABoEJQSTAIQASwEGBXgDNwCCAAwDYgCCAhEBaQQ9Ax8AOQOXAj0CuwGQA3kEKwBgAEcCPwPEA5YDnAFAAHUEVAGDAjwDbwOKBewBvAOpAgABPAH0ATEEzwEsA8gCaATMAz8FBAPoANgDQgNsA/MCaABrAnQDRQMHBBoC+wExAp8ExwOKA6sBNAHWBDYEUwHzA2wAxwAhBFEEdAR9Be0C6QQBAWQBaQEnBNQChQTpAH0EVATwAvoDbQRcASAD1AGvATYAmwVIA54DWQAPBPMAbgTwADUBEgFOA0MAiwFuAccEKgAkBbgE/gSdBbwCUABnANwDYQWsA9ICrgT4BEEEDgURBZcAkACtAYoAiAM5Bb8ATADcAioCHAKHBMgEDQV9AsEDQQLjA6QEfAW4A2oFTwIdAhAFeQJcAC8EdgTFAmQD1QQrAj4FGwIPBTUEiQW8AaACYwSFA38CpwM6BY4ETQR3AH4E6wE7AzAEHwTxAdADeQXuAn0AbAK9A5ACQgBdBbEDygTfA/EENAQZALIEyQL2A30BBgQHAPIEfwXAADUFqARzAzcFOANQAkcF1ABfAnwCnASGBJgEgQOaBQkCFAN6AgUDlAAaA34CeAIjBS0AMwV/AaYDEwO6BNUDhAOQAZgD9ACWAmUBHAMdAQAC/wNlAG0CiAXVABYDxAKkAzoElwEQAA4BzwAMATYDAATZAGQATgAoAUkE2QEIAOkBXgHqBCsEMgPLAC4FhgIBAEEFUQPiAiwBdAHQAIgAhgEvAmoAzgJPAy8DAwSyAp4CAQIVA8sEbwBRAAUF+AJRAr4APgCtBGAF2gRHA34FOgOjAXUCGgX1BB4EqwIKAJ0ECwBoAY4FKQUyAV8E2QQwBc0DMwLvA3YBMAI2AvIC3wTdAo0BIAVBA1gBVQGWBG8CdQMSBDMBOABbAOgDgwX3AlMEZAV/A/wENwPzBBgERwFiBEMC2gAIAp4A1QHkApIAtgIbAdIEAQRJAqoBnANvBS8F2AD2BA0EEAQhAZMFcgDdA2UDpwJKA5gCWgUsBE0B/AMmA6kDKwFUBckAtgQZAakAnAWPA+AB6wC+A6UCBABKAUYB3gC0At4DVgU/ARwB+wKfBbIDYAKaBOUENQDxAL8CowI6ACQChwV/BDQC5wQmAi4E9AJ3BeIBLQFyAmoDbQUhAvkEXgI2BR4BKQHgBHMFNACPBMUAzwT9AGMBeAC0AykAPQTTAjgCXAWfA68DMwBbBMgDhgO6AqsAXwXPAqwAXgQuAgwEogBFACEAlALXAdsDIwQtBWoBGAXdBF4FzAJ1BW0AaQMXAhQBFwGyAT0FOwCIAm8BRgKmBA4CRAJXAwoC3QC6AUkBZQKjADsF+gIxAW4C1wBSA4UFXQIWASYBqQG0AEgF6gMLAVMDjgGNAxwEWANUA54FPwIpAoQC9QHKAQkAWgMQA1kDuAJDA4sDGgFhAmMAgwR8AxMFBgMfA6wCGQIAAJ0DlwNrAEsEQwWhBA8CtwJcBGABaAVjA4ECoQXDAfUC4QRmBFIASABFBVYENQNOAdsEcQFwAX8ALgHiA7EE4gAQAUoEKwWIBL0EPQBxA4ACpwD9BPwBGQMIAdwE1ASfAeECXAMkA1cEhwMFAVsFjAIoBZoDsQBfAG8EPwCKAqcB7ASJAf0DGwVGA3IEOgJbA7UE7QSSBCQEPgEPA6MDGwOSApsDYAMUBE8FpALCAIMA6wM4BAQEgAHlAEsFDQEYA5UEcALAA9cCowTJAdYB3QFdAboD2wEoAGgDmAW3BEgBtQInAG4AngQSAyoDqwM5ApwAtgO2AI4CAgLkA4UCBwKiBDAA7gOSBeMANAPvAMABkgFeAj4DFQVnAXQAiwSZBE0F/gDGAo0CSQCKAS4A7AJXAIQFIAJ3A5YBuwDvAe8E7QFpAOEA"
    ),
    ny = new DataView(new ArrayBuffer(ty.length)),
    sy = 0;
  sy < ty.length;
  ++sy
)
  ny.setUint8(sy, ty.charCodeAt(sy));
for (var uy = [], cy = 0; cy < ty.length; cy += 2) uy.push(ny.getUint16(cy, 1));
for (
  var ly = window.atob(
      "aQIKBcoAXgUEBWUBZwVWBe4DSwP7AoABlgB+AVUFwgK4AzoCpwGFBAUBpALRAc0CPwXdAjEFIASMAHcA6gHGAx4DQwA+AgkBRQUpARACgAV0Al0DkgNMAvkCYwOcAJkDkAMCAnUEfQE2BOIEoQCYBKIFoQWrAXcE/gPiApMA0gEIAkUANQLAAxEF5wFCBCQEowJSBXYE8gCQBAQBxQCCA40BhwJkA+cCkQFvBBoBZADtA70AVAJQAZQCqwTlAFQFtgLFA6oBHQVoBSoAGwTNBNsCFAQ0BDIBZQV6BCEDXgNgAE8C4AJaBVwEGgUTBU0EDQL3A8sAMQKxARwEBQCdBGwCgAIFBewCAAPKAm8BgwKHBAsCDQArBJMB1wOGAAgFRgEYAIsCIAOAAJUDtwHKAxMBhgLfA8EDDgUnBUcApAFVBFcAoAWHA1sDJwBgBVEBlgNxAK8BJwKgAYoAywMZAHsCNgXnA6oCNALwBPgAlQB/BZYCKgJ4AiQA7gEbBe4AqARfBLcDNQPUAJ8FdwNuAjwDRwWzBFwBHQA5BBQDYAKEABUDBgIqA/oDHAFtBIMEbQECBOEBLAKjAxwFZwLmAYoFLgMABNIAJQTZATwBzwECAzoEdgM9AmIDWwTaAYAEYgAiBRUAVQJHATgBLASrAscDoAJCAgsFxAN3AdAAvQRZAmECiAJ5ADsAXQE7AS8CkQREAzYDnAN5AqUDewFxBBABeAG3BNUC4gHOAusAvgPgAcgEhAUXBOYEdQF5AX0CiASmAckASQHjBP0CXQQtBc8DagLPBMEBLAOiAUQF0QNJBAEB+gTeAWsFTAQ3A50C6QHlA+wEFgQRBMIEnAWhAVkA9wTjAqgCPgArAewDvARkBZYExgDYAuMDKwD/A8wEiQFBBN0D4wE2Ae0EvgKnAqAArgR7AJ8BqQNDAaMBXwJdAKcAuQJWA/cAcQFRAEoC8QC/Al4CKgSWBRsD7wO1AHQBjgFmA7gB2gLfBAQARQFuBcAB0AS/AFoERQOwAQYBJgXlBMIBDwCBBK0AxQF8BKEEYwHFAtYEeADvAq4DVAAKAW4DBQI+A+QCzQAMBRIDPQDzBIgBdARcAjkA9ANGBN0ETQPkAbkEZATgBCIEyQGDAbQA1gO6A4YFfwTcBJAFfADhAtYCvQMtAlkDZQANAZEDVgC7AJsAkQCnA+0AUgQaBDIDMwN3BTgDOgVsBGgD6wK5AMQBSQCzAFEC4wClAgoE/QF9AwUESwSbBJMFEgCyAy8FYwU0AdkCDwIDASgAMwEnAUADHANhAJQDyAN2BVcF6ALDAbYDmQERAT8BygQiAVIBRAESBEYF/AC2AYADfwJBAT8CiwMMALsDVgLGAqoDWwUXBeQEyQStA/8EvAG3AL0BIgD2AowB8AJCAXAETAV7BNoE3gLUBBcB2wRoAjIEPQSmAPoAzgTrBF8FXgIkAW8ChAHgALMDCAAQA+gEJAO0AUYCqwOCBGUEqgQSBfQElQUjAowEwwIHBOkAnAIAACYB5gBYAE8AggFOAJECQwLXAPcCbgTeBKkBHgVrAA0DfAWHBQEF+AQtAyMDRwMKAnsDrgJgAXoF3ANFBKkEogCMA3MBWARcAG4BAAG1AWwBNAN2AH0ARQIGBB0CYgTVBCUFCgBLAYYB+gF3AnwCKAEjBQ4CfgKzAiwA8AF1A0wDbwVRA24AIQDvBAwEZgHEBMEE6QIjBJ4AHgEYA94DnQDtAR0BOwVEAoMFFQWOADcFIwBcBTUAkQUiAgUDKQIpA/UCHwAmBLoA/wAgAHEFaQGxAFcBWgNMAN0BUgL5BG0DpQCoAB8EugIVATUBQAR6ApoCnASBBY0A0APcAB8CjgXSAmkDIALbAKgBUABQAtMCAQQuBdYAkwIoBIUBsgTXAQQDpwQjATEAlwNzABoDlAAZBcMDGgB8A28AdgJ6AdoDUAUwAOgDBwFDBXoA1gFYApYB4QP4Ap4BUQT+AHoDAwL2ABMAtQOYAA0EXgSvBC0B1wQpAAMDvwGiAmYFPQHSA68DvACZAuwBVwPOA9UDSgFoAMcBxwTPAPMDwwQBA5IANwSuAVIDXwNOAuADSgCwANMEYgLJAicEDQX9AC8EpQSNA18ASAM0APUBHgLQAXABzgCaAYoEJQJxA/EDGgJTABYBmQCTAy8A1wILAawEawErA4UF6QQkApQEqwBQBB8FlQJSAEoEjgIJBF4AUQWTBJIBOQW0AwYA3AGUAaID6wNHBI8AQAKOBGEFzwLzAlUARwI5A4MDSALLBL4EbQI/BHICLAU6ALEE2ABhAWcArAB4BdMAWgAXA4ECMgAEBAcDtQR0BTED2AQvAbsCiAUuAnMCmgBTBTIFaQSyAjsC/ANZBYUAfgN1Ag8DqAP7BCoFmQQ5AZsBCAS5AQkAcgEDABEApgNTAlkEzAKJAGMAnwQ1BN8AlwUnA/MBmwNzAyEFawLZAJoDAgEOBPIBjAKgBDcBhgOdA2AD0QCBA2UDPwMMAvYDuAAeBGYEjwIQAOwAoQMuAOcEAQLuBPQCiwQWANMBOwMtAAkD5gNAAEYDKQWwA9sBuAJMAaQAPAA4AkQEAAUKAxcCAwRAAboE8AA3APIC5AC6AZcAMQGjABkE/wL+BKkC/gE+AToDkgQMAVgFqgAoBSAFjwVPA4MAMwDUAmsE7QKtAdgBawM8BVADSQIiA38A8AN2AZUESQUoAxMCMAWjBFUB/AIdBEoDGAHQAsQAjQSVAaQDFAXlAvsBZAJqBbkD6gIfASEEpQGfAPIE/QMYApIFTwGKA0IFPQW1AscC7gLfAgsDNAV7BeoAngUuARMDFQRDBH4EwAKKAj4FngLkA94AuwECBYsBiQRIBb8DTgH1BNoAAAIrBUkDDgPcAiABNgLHAL0C9AGSAggBVANlApQFyAHyA7EDQgNzBIUCyQMcAo8DnwP+AnACiQNNBVoCjwTEAhUCFgMEAvsDPARbAXUFmAHLAWcBtwIQBGkFlwQmAE8FYgF+AOIAjQU5AsgAHABoAU0BmwJTAyEBiABnA/EB+gK/BIICfAHUAXAD5QGvAgcFEwSGBEIAJgJ0AzcCVQPrAcsCcgBwBWwDJQFzBVoBRgBLBfYEngTMAUEFPQNpAEsAZwQpBBAFxgRNAHUAqQDnAMwAGQOkBEgA+AFXBF8BUwH0AOgALwMfA8IDTgXzAKADMQQwAgkFGQHvAQkCPAKBATAE6gTRAigC9wFxAukDwQJkATICGAVWBFwD8QQZAkgBJQCxAgIADANoBIsAigEPBN0AOgFgBGMCMAHNA5oFjAWsAhEDnQVdBV4BfwG8A74BFACCBfECZgKcAcUEwQAsAWED3wHIAmwAMwVWARsABgUdAyYD6AG+AIQDwAT1A/sAGwI4BaECcgMDBQ4BlwF9BGYAnQFiBa0COAAeAMwDtgABAKIEUwTKAXkFcAC0AhECkABIBK8ADwGbBTMC4QALAIIAsAQtBF0ChwGXAqYChQPiA3QA1QG8AoQEWwKsAdIE/AHNARICNQUrAn8D2AMUAm0FQQIPBRYCTQLDAK0E/QQHAjME1AOQAlsAjQJvA54DsgDGARQBtAQ+BBIBcgXZA/wEsgFqARYFeQTvAPYBVwKfAi4EYQQhAvgD5gKHAIsFTgNqBDADmAMIA4kFagOPAZgFuwTCAK4AOARZAWoA+QF5A3gDzgHZBE8EFwA2ANMDfQX5AEoFrANyBNsD9QBBAzsE4QQkBUQAKgEHAG0A/wGzAZoEYwQlA1QBVARsBaYEsAKIA9UAQQAGA5ABWAMYBHgEgQB+BRsBwADRBI4DQwNABZgCSwL5AwsEuAS2BIkCPwBOBOoDWAGZBYQChgDKA/gEIwWLAkYFAgXBAbkEHwV6BQQChQFiAX4CqQAgAhsCXwNEAr8DqQKRBcICqQF4BbAAbAJpAaQBzAPgA3IBJgLrBGQDNQNZAcsDVwIaA3YEnATNA/wE8ABAAqYEKQNqA70DlAChA/cAPADrAB0CiQXGAW0AswC3ASIFjQVVAKECSwLvAxAAWgA/ATkEIQPlBE0DjAEYBFUBmQGlAz0F6wNVAp4AxwHdBC0C+wTOA/UALgDZAV4DDwUAAv8ArgA3AjoCNQERAlACDgLDATYDGQQyBZkF3gKvABICxAAtBKAFAgRcAFgB0AFEBKsAkQQ2AI0DzgDHBLED1wBOAKgAkwBmAaQAewEqAwEAJQLOBCUDhAJRBWsEowKBBA4DfAPYBG8BlgXwBG0BqwKAA9MCIQFDBfoEJgWQAE0FowORAYEFoANaAuEDHQWtA+8AwQOTBKcC2gJkAocDqwGLAGQBlQIHBIMBUgSzBDIDzwM3ACIAJgC8BCYEngEkBG8F9gBoA4wE+AOuA1wBRQNsBDEBdQMQBFQDXQToAJoA4gIwBacAnwR6AjwDyATVBHEAPwMjBNYEHQMgALUC9gNQBUwEhwG/ArUDiQAbBEoEeQUPApAFnQXpAnsAngNgBbUEWQQCAXoDfgO2AxoALQXcAQEBHwGnAzABRQDcBDQDeAG2AXMBcAAxBNIBwgT9AoQA+wLKBIAFZwHzAZwFYAPZBPsAiAXWADQC1QBQAy4BGQI4BI0CHwCdAREArQCSA5gAvgGiBC4FQgIcAHsErAHRAUMCzAFfAL0CDQFiBWsAmwVhAzwB2gDUAi4CKACnBKoDtgQnAAoDsAJeARkAtQCyBD0CUwPlATEF9AGCBAQAlwTLAIIF+AGJBBYD7AQ9AHADmwLxAH0EPQGSBFQEUQENBfQAxgDSAtwD0wBkBBUCJwWwBPMAQgCHBNkDZAADBeECmAVWBIYDKwUDBPYClQRBAO4AbQM1BIwD4QErAwUA8QPPAGMDnAJJAAwC0wNPABUB0AOyA1AAtwLWAycBdgMdAFIBAQLJAt0BKQSfBYEATAOMAkIDEwFLAN4EtwCHAmgE/wF/BL4EPgBqAfMEOQKjBAIAjgCkAu0ExQO4A/sDHAVuAHMF5QJqAPECcwO8APMDOAM0BPoCawOiAnUBDgSaAfkAmgJSBZYBGQNJBIQEJQCuAnQBrgHiAGUC2gFFBP0AOQVAAKgD8AOJAi8A6QReAiMAgwCKAEQD+gETA1MEogMRA9cENgHtAu0DnQR2BQQEYAFABHkAFARxBaYAqAJ5AUYDhAUqAe8EegRCAZwDgwOVAZ4EXALoAxEFGgTJBLMCdwIAAFgAawKLBBUESwENBHcAOwQLBLwBNgQbANAA5AHIAnwBiwGfA0wCSQPIAWID5wEkAZkEPgNZAFABFgCfAFsBgAIgA2cANwVrAeMBNwGTAYUEzAQgAUgCEgRuAWMCLALeAUwFVgKMBegCCwVWA4gAPwLPAZMDlQXEA4MFmAPxBBADDwOuBIoBcwQABbYCUAQvBBcCMQOIAykChgLfAY0BLwGyAjgC/QFVBH0D7wJjBSAEKwTmA7sBOABNAL0EYQCxAHIEbwBxAdME/gTFADMCRQVBBEYBjwQMAEYAwAH2AYMEaAKxBLYAGALfAkEDCQISABID3gCHBeAANQBNAgYA+QOFAl4E9QIbBZEAmwNMAQsBggCUBVQCWwM5AEcEkANHAC0DnAGpBAAEgQL8ABwChQVkBdED0gSgAEgEGQHFASwAfwFnAwABEAXpAzICrABmBf8DxQJ+BGwAdwRABSICFAI9BBUFdgDmAuYEfgHpAG4E4gOUA4UAvwAuA2gFLwPtAX8FmwQSBXQECAN7BWkFjgMPBH0CuQBcBIkDygEhBV8FZwRPAQMA3QA+BeUA9gSNBAgFwwMgBZkCrALpAcMCQAPgBFcA/wI6BXsDjgXIAFMCBgS7AE4DagVyBU0BrAOvAXABMwEeAp8CJQHkAlECjgLCA6IBFQBwAnoBIwIIBKkD6gLFBM0AGwMWBEoCBwUwAKEAAwMKAGACyQCbAI4BygJ4A4MCwQAaAfcCwwTEAmwFlwD8AwwFBQKcAGgB9QOBAZYC+QEIAskDDgUSAY8B2wKgAZICxwILAKMBsQFvAwcCsgDwAaYB/gKhBUcBEwR4BNcCIgFnBfcDuQPCAV0BPwRLBSsCNwQ+AQkDVQXQAv4BDwFOBTIAvgMLAi4EzADPBPwC2AOyAYcA5AMGAroBsANjAPQEfQUBBaUBLwLqBNgBKAQwBDACaQRyAjwCdwFPBEkF6AE+AgoCZQCIBG4DVgG6BM0E1ARPBQwDaQDfBAMBCgQtAL8BbgVOAiwE7wGvBGIE8wLjBOMAdQCGBOsB7AMeBKcBaQMzBHQFFwSRA/IBywF8BCkA7ABFAaAEwAKKA4oFggMMAe4EBAPyBLsC3gPHAKsEuAAiA8QEFwW6A0UCWALoBDQArwKXAsoAHAR/A1QFhgH8AUgBDgERAcsEwADEAVIAOQG4Ap0AfgDWAuwCQQUcAeMCCQFLBBMAYARbAoIBfgUoAUsDJQUrAI8DrQS4BJQEKwFIAyUETAAPAJkAWwWqBJIFrQI8BeEEBAGoAQ0CfAD9AwQFuAHqA2YA+gDyA3YCoAIoAr0AzgGEAecExgN/AF0AKgKYBDoBCQAyBHMABgHVAzoAnQKXBWoERgLbAH0AWAUWAXcFgAG+ADEAUgI6A0gAogWkA/UBlAG/BFMFOwDdAwoFcQNbBIwAbQVZBZsBEwUqBEMAXwEUAcMABgWQAhkF3QK0AnECkQI5A3wCYwRwBRgDuQKqAVYAVQPRAGEF1AG9AYAA1QETAnUEZgPgAvgCsQLuA4sFuQHHAwADAQPbA4gBFwF0AoUD9AMYAPQCbwJHBdIA8gAKAUMDbAHIA20ESAUkAgwEXAUfAqIAKQV6AJYEdQJRACcD1ANZAnQAjwIFAeAB5wPiAX0BBwOGBTYC+wFdBSEE1QKaBSQFYQJdAywDHgOVAHMCRAECA6oAFAMNAxYF5wLnACgFQgWdA4oE2wReADMFOwW8AhoFUgPAA0QAswOzAe4CPQN0AzECmgTRAkoFQQJsA7QEYwFPAmIAXwQzAzADSgPfA/4DFAU6BI8FywJnAtgCcQREBRQAIwNyA3YB+QTrAnkCYABUANwApgI7A1oEawXUAEoAiAKTAswCqASXATQBBwFmBGICIgR3Ax0BlgNPA1cDcASlAPACtwNqAlQBGwEmAZUDCwPqAAMCQAEfBAkEQgSaA28ELAHmAMIANwPGAlwDkgAeBc4CGAW8A9cDFwOXAywF0QSBA5gB/gChAZYA+gNlASkBWQNRBNcBYQQ4BaoCEAEkAzUFKAOsBOUDFgJOBFgEbQJHA0kC+ABeBc0CKgDZAo0AmQOkBLsDHwMcA18C2gN/AqYDKgXhAIkB2gQ0Bc8C2ABlA6UCZQR8BbsEVwSLA0oBOwE/ADwEDQAtAboCJwQFBcECeALJAR4ASQGABAYDtQFbAOQAngJNBD4EnwEnAoQD/wShBAgA5gEJBVEDkAQkAFoFdQUhAjYFTgHTAYoCEAJTARUDzQFeAnIAtAPqAVcFkgE4AVcBBQSPAOIELwV7AgcAjgQzANwCowDuAeQEZQV5AxEEAgLtAPICMgHfAFoBIwH5AkMEZgL3BEMB0gNYA24CeQSvA/cBugD1BJQCngUaAtsBIQDABJgCHgHZAP0EkwXjA8YEGAFhAQEEQQE7AloDkAE/BWgA0ASwARcAqwMFA10CeABHAuwBpQTBBLQBRgTxAVYFrQE1AoICaQImA74CUwC3BAgBtAAdBNYBgQSAA/0BEgBvAREFvQG9Au0EXQG7AVEAiQP7Ad4AFAWbBCgDwQCpBHUEDQLSBKkAKQJPBMQCqACsAKMDjQD3AhcEOwVrAVUC+APfAKsBkgHlAE0D4gOaAxUDTADYA1oDxQFlBWsD9gTAANkDJQUuAUYA5AQhAv0EiQKrAgIB1QK6AeUDrQGVBBEB6AGcA+gAEgKyA44ATAIFA30AegScBV8BzAB+A1QCoQACAKIChgQWBJ4FxAEbBMQATQSxAhAF8gIaBRsC5gSmA3sFEgMqAYAF4QS/AR0EPgOJAR4AMQB8BaADIwRxAbQAEgGPA7kD+wJYA4EB2wIDA9IALwQABT0EIgWbA0sDYAN6AqQExwI3BWEB1gFVBecEIQPWA7kBIAXUBAEAAwSzBD8D3AGzAmkFcwI6BdoA0AMqBR8CIADHAZQD3ACiAAYENQEbAOoB+gTQAg0F4QGUAVoCxgGVA3cDPwTEA24AJQAQBHQBQwIPAIsBhgWXBGcDTgM5BPkDrwH9AJMD4gSBAFQD0wNFBK0CTQLiAfQDrAF2AQoEtwFGAvMAwALpADEBjQL2AZMEHASUBd0BUQTpAxQBVAVAAygAVwRWBDMBRQEOAisCXwKdBPMDNwOCANICWgWtA1YBKQC4AE0B8wLvBMMD0QG+AzwB3QNJBEIEoQK8AEUFiAXJBHIE2gOmAo0FGQB7BDAFegWDA1cC4AHuBLUANAD3BDUFaQB9AlIEaAA6ATkDpQAyAZAEfwH4APIBJwGcBB4CzgK7Aw8EpwNhAiQBBQWRBVAEbAOWAogBmgFeBd8BNAWYAUoE+AKEAd8EBARnBHcAJgMdBbgEkAFcA4sAQQDKAekClQBCBbAAFwGMBQUABwONA7wDcQTVAXUCCgP/ASgFHgOYBUcDIwK4AUEB7wAFAnID+AHtATgASQXFA5YEkABlBFQAMwXOBFMB+wROBDQEEQRPA1gC7gMrAZ8DOgDQBG8FIgKKA7EA1gR4BNcAowEKAPAAmAPwA38DbgKKAeYCvwARAwgD5wPlAkAEnQVdBJ4EOQH8A2wAMwNcAXgABgAXBfIA0wJiAIgDyALrAyYBkwVzA6UB9AFeAn8EmgXbAFQB/ACpAlQENwIgAicDtQJeBHQDpANaAdcD8gTqAmACZQIyBRQDKgJwAq0AIgOgAa8DbgTlBFMCywJhA7oCtwMrBO4AeAMhBBgAYAVNAJwADwFLBHUABgG+AqYBIgE3AYUFvQCHA8oEGAJ8Ah8DLgTCAI4CkgTGA84DTgB5AYgE5gN+ATEEGQQyAiADMQWSAxMAHwAeARsFrwDIAWcB9AQ6A0ECagFXABAArgI2BIcF3wLxBK4E3gN+AGMEsQSfAqQB2wGCAuQBoQMpATQDpAKhAecCgABIBc0DiwVvAnsAWgCTAewDSwA9AtkB1gJbBFkCkwCWBTwCHAITBD0BRQJrBEQCcAMAA30F6APTBAkEHQPUAucBSwEsAYQFMAGHBEQBWAB5BfABPwJFAAAEowBwBG4B4wDGAAsDCgGtBK4AwgFoAZQEzQQ/BRkBIQH+AD0FTwVOAisAgwCRAYoAnwU2AWwCUQUJAdQBKgDfA3gBcQVmBfUEmQJkAGwFqAGZAc8CNQPxAHwDKQWLBJoEYwNXBXEAnwAwApkDWQWQAhoCSgCiA2gEYQWyAiAB0QOfATIANQJDAyUBLAAkBBkDBAMoAaEFpQL0Ai4A4QPzBM8EKQNNBVUElwO9BL8CCgIaBMgD1wLLAJsFwQL0AOEAawV2A+AAkgACA/4EMANiAh0BdwF6AT0AyQIYA5YAbQDxAaAAWwCAAoECQQQvBREAYgGDBTEDPwCmAGIESQCHAREC+QRHADcAEwNWAz4A7gG0An0BtAHqAJgAQABYAVwFHAO7AuMBXwQTBZEDAwJWAAACSgVSAg4DCAV2AsUE5gC2BJUFeQC4A4EFBAHaASAELwMkBXwEDABSBY4EvwQQAiwDugCnAo8BYAEOBTgBPQPeBC8ANwR5AmIFegMMBOkBzwFpA9MAOwAsBbcA9gKwAuECigTgBDwAogFoAuICLgWWAW0DKgNDBCUC0QQtAhcCyQB6ADsCkgXvAYcCEwFAAl0DJAOTAiIAIwFVAGwBJgWKAnkDNgNkAnQCwwBlAxUCxwQkAKEEdQU1AKIEJAKJBbYD2wRdAv4ClQECBTYAUwVQAMIE6gTRAoAEygL9A+MCfgK+AHwA2gRgAGUAGQIlA1cBjwVfAFgFtQHNAXsC0QCfBKoEWwKgBIgAeQQ4AnEDhACoBF0AXATMAjsDbgXYAYgC3ARDAZ0CYQTrBGMFDgS+AUIDZQElBMMBWQA2AhsBTwIrA3YFIwAcARUAzwAaAS0F1ADkAsABBgIcAOkE/gNeAMADBAD8AV8DfwUIALoEnQH5AMQEBQEdAMIDywTxA7oDuQIqBEwEpQPqA7gCXwWMAAwDRwTbAw8FhgEyBEwBCwRqAI8EyABjAggCnQOLA/gEsQMGA/8AtgB4AvACWARCAQEFpQSoA0sFHgR+BZADXQX6AqQAtATIBOUBZAP6AXABHwQnBHMERwIJAh8FgwTsBG0EhANpAvcDggT5AYkAfgS3ArIAOwQLBZsBzQKYBCEAVQF0BJEEOANtBYsCjAMIAUkCZwBHBawCHwE0AfUAZgLMBFIA4ANzALAEJgDrAEABdAVbAT4FFQFKAjAEqgOCAzMATAUSBUYBZgAHAuIABAI4BQMAdwQEBdgCHQJIAMkDCwINAy0A0gF9BMoDCwCeA2kB5ACvBKcBRAQrBSYCFAA2BScCWQMJBY0EeAV/AmYEtgJjAEEDGAGzATkAQgA6ApoCUgOvAocA5wB8AfAEDQBqBL0DNQQCBLsAagK5BAcAMwQBAXsBmwCUAr4EUAEaAzsBOQLYBJ0AhQR1A7UDjAGMAkYEMwKoAtUEEwJnBZEAZAVoBWEAYAR7A4IF4wQDBQwB5gG2ATwEDgG/AzgEBwTVAJQAbgPxAgED9QHGAgoFNAJvBMAEcwF2BA0BcgHPAwMBXAIPAvoAmgCNAXIAngA6BPIDQwDoBJICFgAJA/oDnAEtAdABgwLvA5gCSALjAwYFYwG8As4AxgSXAfcBngLuAk4BAQKgBVkEaAOuAdwCdwVDBbMAogWQBaACRAD2A4kE2QRrABgFfQMWAtUDQAU5BfMBLQRMAy4DSgFBBQwCLgKuA8MEcAC5AOwA9gBtAu0C/wJIAZcA+wNFAy0DwQMoAhsDYgMUAkkDjATMAQEE7AEQA20BGQVxAqwDSAMVBT4BPwGrBN0EgQMPA+0ApwQNBFcDjgGGAlADlgMeBaMCPgLdACgEwQSXAo8CcgWyBIUBPANGBVkBdQFqBSEFBQSsBIMB+wAsAkkBlwVHAScAPgS3BG8ALwLvAgkAMgMjBcICUALtA4UApgRnAhUE6wIUBCcFwwJ3AssB6wHYAJsCmQTdAuQDaQTKAF4C6AIvAQICRAVrAgcF/QJTANQDhAJRAnYADAVmASIEvAQcBdkCQgK1BLABxQBRA1sFVQOrANMB3APaAqoC0ABSARIEUAVaBIUCGAQmBFwAdACPAJUCZgPsAqoBywMjA6cAyQGGA7MDTgXMA0YD/gEaAP8DRAP8AvcA1wRkAdkAsgHOAccDPAWeAbwB3gL5Al4BagOEBJkAmQWKBTECTwH8BHAFFwNTA2QECASrA2wEtAOpAwcBAAHgAl4DkQKxAYIB9QIQAVYFWwPHAP8EUwQWA0oDgAFyAo4DAAAsBMUCFwCpATAAnAJPANIDVgJIBLsEKQSwA80A9QMLAd4BowSqAMEBfwBLAhYFhgDXAVEBbwPWAIUDcwUWAY4F1gOzAoMAogMBABAAfAGIAVQEwgTUAQMFXAX1AWEFogUTA5cF0QS9BL0DkQTBAhQFGQFDAXoAPQR3ASAAhQAXAp0BnAETBH4D4gSKBcYB/gEAAo4APwCrBKcAfgS1AcUCdgPeAioCSgWlBFMBgwQ5A5oEvAGPAP8EvgLcAbgANAKqBCcAfwA6AEIBYQRnAXYBHgARA/wAzQNIBEYBrwC1ABQAjwXzAi4APABUAXACXgCwApECqAMOAjEAqwBqAjADmQDQASgDEQDLAbQCaAQeAVcCIQAVABYBSwCbAtkCAwAvAdwAlAVkAHMFigJtBFMFegWrA5MCNgOiAbUDaAGtBIACAgEEAx8FNADpAGcCwwAcAnICjgV+AlIAEgLlAjMEdgJZAKQEKwEQBBwEvgOHBX0BAwHaAfgCvwDrAWgF6QOhAKYALgNhAAwA5gQpAcwD2gC+AAUC1gQLAqIAIQJtAUUD6gRFAF4EtwPiAe4AUAS3AoAA8QIHAwIDjgToADUCpwKcAPAB9wB4APQDbgJNAM0CnwHVADkCBQXVAyMAqwJMBVQAuQKDBa0CkARXBdACsQP0AmwAagViAjYF/wB5AAQERAVPA2AB8QMSA4AEJwVOAGACpwSlAu0BXAAbAGUBwgOGASwDBgIbBQgFkQUZAkoEfQRhAz8B5QPqAjUDaQA2BPUEwwJKAdUCiwAkAUYCuwH0BJIBOAS4AkEACAJTA0kBTwKYACUAMABAAWMAFAKZBRgEkgAyA8QEQATiAw4FUAMVBOoASQRzAZMBZgHSBMIB7gIiAL4EoAEjBf4A3QKPAisCuwDMBCsDiARfBKQB1wE1AWkCFwBXA5UD0AQcA4IAzwNDAMQCUAEsAdcAbgOBAR4F2QQNAOMEuASTBfIDcgERBO8CzwGMAwAA6gETARYCcQRHACoAnQI3AoIFKgXoAkwD+gM3BSMDhgS3BDIFXgEoAsgAuQSCBEgFMAScAvkDoAAqBGYF3QFdAi8EFQJoAkwAowAGAQYDbAQLAy8FSQDCAO4BBwSkA34BNwOsAUECHgTvAZYArgFUAykEMgALBIwBaQVZBD8FoQHMABADUwTyBHEDFwGGA3MDbwQSBQEEGgQNAkEBGgWbBAwBFAElAbwCSAAxAqMCjAA7AOICGAC/AZoAJgAMBCcBMgRkAqkDMQOyA3wERACYAXYAjARRBW8FQwQKBdgErQPfA0AC2gT6Af4DFQFRAaIElQFFAtcC9QBaAoMDWQVBA+sCVwHtADcEuAHgAxYEAAWSA74BCQFiAaYC4QQdAZYFsACcBHABfwFbAyQEiQFvAuABiAAEBZ4CXgKBBREBKwShA7ICkAJwBMYARwRdBRgBMAI4AaMDggEWBaQCwABZAUUFqQKyBJ4A8AQTApoDBwCFBNIC6AFrBAQAYgDpAhsE+gKeA7YBIgUDBIgCyAPbBCMCjwTnBKkEKAV7AXkEVwBsBT4BUQSEAVoAsQSBAx8AQgTOBFwCrgRfAjUAWAChAr8CPAViA9ME6QT4ARkFjAKEA/ICUABdA/cDwwGpAWsFcwJyBV8BNgIaAewEvQDHAYcDXAGSBKgAVQVkA+cAUAJDBYgFMgJ6AeACxQT7BDsCdAR6BOQD+AOYBSAFYAR+AMYE8ABGA5MEWwQ7A6YErwQJBbEBwwQuBCYBhwBOAgADmwXcA2UASwJGBD0D4AA5BMsCXwUJAokFXgKdAMQBBgR/BF8AxQEfApEB3QB4AVYEYwWuAqgC/gKNAzQFIgRyA9gALgKdBSABjgEPAqgB3AKXAC0D3ATpAf8B/AM5AIUB/QSqAPQAUQOTAAoC8QDXBPIB+wEABM0EUwAgA8AB8ANXBKYDQAVNBQ8AfAKHBPQBngF/ApQA3gFxAh4CSwS0AGQFFAQMAz0BaANEBPkArAOaArEC9wF3BLkBDgOsAiwFDwMmAz8CMQQgApQDVQFgBWwC+QTABB0AiwTlBLIBDQPLAw0BAAENBXkD5gMmBRoAYwGIA6YBygLzAV4FTQGRALYEeQV/BUkF0gEoBMgCnwOQATQEkgK4AyUFYgWfALcBDwRTAiICegJwBccCwQSiApQELgV7AywEmwHUAOsD0wLYA3YELAK5AIsBTwG6ATMC0AOqAfkCgAWUARoDJwLKAJYEAwMmBFIBdADRA7sDZwXkBO8EFgC7BCQCOgO9AVgDLQAIAxkAqASXAbUEKgNtBeUB3gA4BTgDmQQtBA4EpQBhAf8DoAKWAmYAxQDJAWQBrwLAAgsFJwS6A0QBtAMrAAsAMAX2ALAEWAHsAEEFzwBdAHAAvABkBKoDBQRrATYBIgPOAvIARgWJACoBPQIBA+wBoAV4BHkBhQXIBHoDCgAtAtEBrgPeBGMDnwRhAiIBswAJA+8DBQB4AsEANwASBCUE+ACvA0wBvwNdBHkCAQWjAWoAQgArBSgAnAUIAX4F4wFpARsBzwSUAk0EtgBbASgBggJaASkFJAUJBFUA6ARrAv0B0gCwARAFmQO8BEkDbwDIATgC9QN1ANEC/AFHAikDxgIUA0sDTgGNAkIFVQIYAo8BFQUMBQoBsANKAF0BcQAKA9UEqgKGADYAjAUjAUUBGAPnA3UF2wEwAacBwgLrAPUCfQA+APsCZQLkAG8BsQCFAwkAPAJ1A+YA3QPtAp4FFwNwA0sF9wI+BWUEhgUuAUgDugRZAlYA5gLhAswCdwClA84B5wFWA3wDSQKhBCEEUQCsBJEDbQCLAokERgDYAmwBJQONARwBjQVHA4ADZQNaBawAWwXkAl8DjwPuAzsFGAWVAtoCdQFaBFICTwR3AkgBrgCgBBoCgAHjA/MEMwUbAm4EgwKdA3sCOgTnArMEhAIzAGsDigMjBFIFzAHtBNkACAA8AWADlgFeA6UB2QHlAP0CmgXUBJADRAJNAjMBTAIXBaMEzwIxBfYBagQCBRkDywARAnEFHwQgBLwDHABOBOoDUAXJBNQDWAR1BDIBxANoAPYEQgPXA5sAyQMNBMoDUgTdBBABcgRNA5oBFwRDAnYFagGdBGcACgQ9BbMDVAKQBUcFJgJjAnQC1gLjAjwDlwNRAhIBJQKVBFYFfQUWA1kDAQItAdsCSgNtAgcBVQMGBWYDOQGgAykA/QB4A8cD4gA6BYkCHQLzAx8BmAJUBdUB9wTfAZYDigA+BEoC8QEPAe4EfAUGAIcBBwW0BH8D3wSBAMkA2gNAAMsErwEvAsYDBAHwApIFJwPTA1UE+gQ0AfYCewBbAIsFkwNsA44DzQBuAT8DjQRmBLoA+QGBAv0DnAMPBQIAlwLjAIQEZwSfAhsDbQMhAToBwQOGAiED6wQDAlwECwGLAw4BEALKAYkDMQERBd8ArQC/BLsCRANHAW4ANQUdA0ICggO2Ax0F0wHWAJkChACfBXQFdAESAKkAewXOA2IEWgP2A2MEOQUZBJAAlQXfAgUBwANpBB4D7AN4BdEAbgX4BDcBhAVPBWoDawDeA4oEewRvA+YB1gEvAEEEhwKbA/sDlwS1Au0DpwNWAU8AmQGFAjsEUgO5A+wCOADhAYMBNAOeBOgDQAMMAkMDBQNnA3EBPAT8Aj8ENQSkADoCqwF9A/MAHAVYAkgCYACNABMAfADDAz0AygRYBdkDjgJ3A8cAzQFmAgEBmAROA+QBPgP8BFwDZQW6ArIAHQRMBM4AEwUVA7MBPgKVAMUDaQNWAkUETgXTAP8C/gQCBMQAtgLHBHMELAD7AMEB4QPbA9AAHwN1AncFBALYAbQB8QQtBckC0gMpAuAEmAOKAQgESwHhAAICMwNbArcAJAOhBdQC2wD6AL0CcwCtAXIAgQQhBe8AJAB9AjsBdAMHAi8D"
    ),
    my = new DataView(new ArrayBuffer(ly.length)),
    Ay = 0;
  Ay < ly.length;
  ++Ay
)
  my.setUint8(Ay, ly.charCodeAt(Ay));
for (var gy = [], dy = 0; dy < ly.length; dy += 2) gy.push(my.getUint16(dy, 1));
function py() {
  return 1 == xc ? Oh() : Oh() - 51;
}
function fy(a, e) {
  var o,
    r = {},
    i = B(a);
  try {
    for (i.s(); !(o = i.n()).done; ) {
      var t,
        n = o.value;
      r[n] = (null !== (t = r[n]) && void 0 !== t ? t : 0) + 1;
    }
  } catch (a) {
    i.e(a);
  } finally {
    i.f();
  }
  for (var s = 0; s < 5; ++s) {
    var u,
      c = e[s];
    a[s] == c && (r[c] = (null !== (u = r[c]) && void 0 !== u ? u : 0) - 1);
  }
  for (var l = [], m = 0; m < 5; ++m)
    a[m] == e[m]
      ? l.push("right")
      : r[e[m]] > 0
      ? (l.push("place"), r[e[m]]--)
      : l.push("wrong");
  return l;
}
function by(a) {
  return "<b>".concat(Mh(a).toUpperCase(), "</b>");
}
function vy(a, e) {
  for (var o = [], r = [], i = 0; i < 5; ++i) o.push(new Set()), r.push(null);
  var t,
    n = new Map(),
    s = B(e);
  try {
    for (s.s(); !(t = s.n()).done; ) {
      for (var u = t.value, c = fy(a, u), l = {}, m = 0; m < 5; ++m) {
        var A,
          g = u[m];
        l[g] = (null !== (A = l[g]) && void 0 !== A ? A : 0) + 1;
      }
      var d,
        p = B(n.keys());
      try {
        for (p.s(); !(d = p.n()).done; ) {
          var f,
            v = d.value,
            h = b(n.get(v), 2),
            w = h[0],
            y = h[1],
            E = null !== (f = l[v]) && void 0 !== f ? f : 0;
          if (E < w) return "Existe pelo menos ".concat(w, " ").concat(by(v));
          if (E > y)
            return y > 0
              ? "Existe no máximo ".concat(y, " ").concat(by(v))
              : "".concat(by(v), " não faz parte");
        }
      } catch (a) {
        p.e(a);
      } finally {
        p.f();
      }
      for (var Q = 0; Q < 5; ++Q) {
        var D = u[Q];
        if (null !== r[Q] && r[Q] !== D)
          return ""
            .concat(by(r[Q]), " tem que estar na ")
            .concat(Q + 1, "ª posição");
        if (o[Q].has(D))
          return ""
            .concat(by(D), " não pode estar na ")
            .concat(Q + 1, "ª posição");
      }
      for (var x = {}, j = new Set(), M = 0; M < 5; ++M) {
        var z,
          I = u[M];
        if ("wrong" === c[M])
          o[M].add(I),
            (x[I] = null !== (z = x[I]) && void 0 !== z ? z : 0),
            j.add(I);
        else if ("right" === c[M]) {
          var C;
          (r[M] = I),
            (x[I] = (null !== (C = x[I]) && void 0 !== C ? C : 0) + 1);
        } else if ("place" === c[M]) {
          var N;
          o[M].add(I),
            (x[I] = (null !== (N = x[I]) && void 0 !== N ? N : 0) + 1);
        }
      }
      n.clear();
      for (var k = 0, F = Object.keys(x); k < F.length; k++) {
        var O = F[k],
          T = x[O],
          S = j.has(O) ? T : 5;
        n.set(O, [T, S]);
      }
    }
  } catch (a) {
    s.e(a);
  } finally {
    s.f();
  }
  return null;
}
var hy = (function () {
    function a(e) {
      r(this, a), (this.board = e), (this.cursor = 0);
    }
    return (
      t(a, [
        {
          key: "reset",
          value: function () {
            var a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            (this.cursor = a), this.updateEdit();
          },
        },
        {
          key: "moveEditVisual",
          value: function (a) {
            var e = this.board.getLetters(),
              o = this.cursor;
            (o < 0 || o >= 5) && (o = a > 0 ? -1 : 5);
            var r = Math.min(4, Math.max(0, o + a));
            return (this.cursor = r), this.updateEdit(), e[r];
          },
        },
        {
          key: "moveEditToNext",
          value: function () {
            for (var a = this.board.getLetters(), e = 1; e < 5; ++e) {
              var o = (this.cursor + e) % 5;
              if ("" == a[o].innerText)
                return (this.cursor = o), this.updateEdit(), a[o];
            }
            return (this.cursor = 5), this.clearEdit(), null;
          },
        },
        {
          key: "moveEditToPrev",
          value: function () {
            var a = this.board.getLetters();
            return this.cursor <= 0
              ? null
              : (this.cursor--, this.updateEdit(), a[this.cursor]);
          },
        },
        {
          key: "clearEdit",
          value: function () {
            var a,
              e = B(this.board.wcb.getAllRows());
            try {
              for (e.s(); !(a = e.n()).done; ) a.value.setEdit(-1);
            } catch (a) {
              e.e(a);
            } finally {
              e.f();
            }
          },
        },
        {
          key: "updateEdit",
          value: function () {
            this.board.getRow().setEdit(this.cursor);
          },
        },
        {
          key: "getEditLetter",
          value: function () {
            return this.board.getLetter(this.cursor);
          },
        },
      ]),
      a
    );
  })(),
  wy = di,
  By = Ut.findIndex,
  yy = Cg,
  Ey = 1;
"findIndex" in [] &&
  Array(1).findIndex(function () {
    Ey = 0;
  }),
  wy(
    {
      target: "Array",
      proto: 1,
      forced: Ey,
    },
    {
      findIndex: function (a) {
        return By(this, a, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
  yy("findIndex");
var Qy = di,
  Dy = C,
  xy = wr,
  jy = fr,
  My = Dr,
  zy = ne,
  Iy = Zi,
  Cy = wi,
  Ny = et("splice"),
  ky = Dy.TypeError,
  Fy = Math.max,
  Oy = Math.min;
Qy(
  {
    target: "Array",
    proto: 1,
    forced: !Ny,
  },
  {
    splice: function (a, e) {
      var o,
        r,
        i,
        t,
        n,
        s,
        u = zy(this),
        c = My(u),
        l = xy(a, c),
        m = arguments.length;
      if (
        (0 === m
          ? (o = r = 0)
          : 1 === m
          ? ((o = 0), (r = c - l))
          : ((o = m - 2), (r = Oy(Fy(jy(e), 0), c - l))),
        c + o - r > 9007199254740991)
      )
        throw ky("Maximum allowed length exceeded");
      for (i = Iy(u, r), t = 0; t < r; t++) (n = l + t) in u && Cy(i, t, u[n]);
      if (((i.length = r), o < r)) {
        for (t = l; t < c - r; t++)
          (s = t + o), (n = t + r) in u ? (u[s] = u[n]) : delete u[s];
        for (t = c; t > c - r + o; t--) delete u[t - 1];
      } else if (o > r)
        for (t = c - r; t > l; t--)
          (s = t + o - 1), (n = t + r - 1) in u ? (u[s] = u[n]) : delete u[s];
      for (t = 0; t < o; t++) u[t + l] = arguments[t + 2];
      return (u.length = c - r + o), i;
    },
  }
);
var Ty = Ut.forEach,
  Sy = C,
  Ly = Rp,
  Uy = Gp,
  Ry = Pt("forEach")
    ? [].forEach
    : function (a) {
        return Ty(this, a, arguments.length > 1 ? arguments[1] : void 0);
      },
  Yy = fo,
  Py = function (a) {
    if (a && a.forEach !== Ry)
      try {
        Yy(a, "forEach", Ry);
      } catch (e) {
        a.forEach = Ry;
      }
  };
for (var Gy in Ly) Ly[Gy] && Py(Sy[Gy] && Sy[Gy].prototype);
Py(Uy);
var qy = (function () {
    function a() {
      r(this, a), (this._listeners = []);
    }
    return (
      t(a, [
        {
          key: "hasEventListener",
          value: function (a, e) {
            return this._listeners.some(function (o) {
              return o.type === a && o.listener === e;
            });
          },
        },
        {
          key: "addEventListener",
          value: function (a, e) {
            return (
              this.hasEventListener(a, e) ||
                this._listeners.push({
                  type: a,
                  listener: e,
                  options: {
                    once: 0,
                  },
                }),
              this
            );
          },
        },
        {
          key: "removeEventListener",
          value: function (a, e) {
            var o = this._listeners.findIndex(function (o) {
              return o.type === a && o.listener === e;
            });
            return o >= 0 && this._listeners.splice(o, 1), this;
          },
        },
        {
          key: "removeEventListeners",
          value: function () {
            return (this._listeners = []), this;
          },
        },
        {
          key: "dispatchEvent",
          value: function (a) {
            var e = this;
            return (
              this._listeners
                .filter(function (e) {
                  return e.type === a.type;
                })
                .forEach(function (o) {
                  var r = o.type,
                    i = o.listener,
                    t = o.options.once;
                  i.call(e, a), 1 == t && e.removeEventListener(r, i);
                }),
              this
            );
          },
        },
      ]),
      a
    );
  })(),
  Hy = (function () {
    s(n, qy);
    var a,
      e,
      i = p(n);
    function n(a) {
      var e,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
      return (
        r(this, n),
        ((e = i.call(this)).maxRows = o),
        (e.wcb = a),
        (e.curday = -100),
        (e.solution = null),
        (e.normSolution = null),
        (e.tries = []),
        (e.invalids = []),
        (e.curRow = -1),
        (e.curTry = null),
        (e.gameOver = 0),
        (e.cursor = new hy(g(e))),
        (e.won = null),
        (e.locked = 0),
        (e.inHardMode = tb.hardMode),
        e.wcb.addEventListener("letter", function (a) {
          e.gameOver ||
            (e.cursor.getEditLetter() != a.detail.letter &&
              e.curRow == a.detail.row &&
              e.cursor.reset(a.detail.pos));
        }),
        e
      );
    }
    return (
      t(n, [
        {
          key: "getRow",
          value: function () {
            return this.wcb.getRow(this.curRow);
          },
        },
        {
          key: "getLetter",
          value: function (a) {
            return this.wcb.getRow(this.curRow).getLetter(a);
          },
        },
        {
          key: "getLetters",
          value: function () {
            return this.wcb.getRow(this.curRow).getLetters();
          },
        },
        {
          key: "animateVictory",
          value:
            ((e = o(
              regeneratorRuntime.mark(function a() {
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), this.getRow().victory();
                        case 2:
                          return a.abrupt("return", a.sent);
                        case 3:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  this
                );
              })
            )),
            function () {
              return e.apply(this, arguments);
            }),
        },
        {
          key: "event",
          value: function (a) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            this.dispatchEvent(
              new CustomEvent(a, {
                detail: e,
              })
            );
          },
        },
        {
          key: "newLine",
          value: function () {
            if (!this.gameOver) {
              this.tries.length > 0 &&
                0 === this.tries[this.tries.length - 1].length &&
                this.tries.pop(),
                this.cursor.clearEdit(),
                this.curRow++,
                this.cursor.reset();
              var a = this.getRow();
              a.setRowEmpty(),
                a.setEdit(0),
                null !== this.curTry &&
                  this.curTry.length > 0 &&
                  this.tries.push(this.curTry),
                (this.curTry = []);
            }
          },
        },
        {
          key: "setClues",
          value:
            ((a = o(
              regeneratorRuntime.mark(function a(e) {
                var o, r;
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          (o = this.getRow()), (r = 0);
                        case 2:
                          if (!(r < 5)) {
                            a.next = 8;
                            break;
                          }
                          return (a.next = 5), o.letterTo(r, e[r]);
                        case 5:
                          ++r, (a.next = 2);
                          break;
                        case 8:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  this
                );
              })
            )),
            function (e) {
              return a.apply(this, arguments);
            }),
        },
        {
          key: "commitWord",
          value: function () {
            var a = this.curTry
              .filter(function (a) {
                return ob.has(a);
              })
              .join("");
            if (0 == a.length) return this.event("commitError");
            if (5 != a.length)
              return this.event("commitError", {
                msg: "só palavras com 5 letras",
              });
            if (
              !Kf.has(a) &&
              void 0 === Xf[a] &&
              a != this.solution &&
              a != this.normSolution
            )
              return (
                this.invalids.push(a),
                this.event("commitError", {
                  msg: "essa palavra não é aceita",
                })
              );
            if (
              (tb.hardMode
                ? 0 == this.curRow && (this.inHardMode = 1)
                : (this.inHardMode = 0),
              this.inHardMode)
            ) {
              var e = Array.from(this.tries);
              e.push(this.curTry);
              var o = vy(this.normSolution, e);
              if (null !== o)
                return this.event("commitError", {
                  msg: o,
                });
            }
            this.locked = 1;
            var r = this.getLetters();
            if ((this.getRow().setEdit(-1), void 0 !== Xf[a]))
              for (var i = Xf[a], t = 0; t < 5; ++t) r[t].innerText = i[t];
            this.event("commit", {
              cur: this.curTry,
            });
          },
        },
        {
          key: "press",
          value: function (a) {
            if (this.gameOver) return 0;
            if (this.locked) return 0;
            if (this.tries.length > this.maxRows) return 0;
            if (((a = Mh(a)), ob.has(a) && this.curTry)) {
              var e = this.cursor.getEditLetter();
              return e
                ? ((this.curTry[this.cursor.cursor] = a),
                  this.getRow().setValue(this.cursor.cursor, a),
                  e.focus(),
                  jw(e, "0.15s ease-out type 0s none"),
                  this.cursor.moveEditToNext(),
                  1)
                : 0;
            }
            if ("backspace" === a) {
              var o = this.cursor.getEditLetter();
              return (
                (o && null != this.curTry[this.cursor.cursor]) ||
                  (o = this.cursor.moveEditToPrev()),
                null !== o &&
                  ((o.innerText = ""),
                  o.focus(),
                  (this.curTry[this.cursor.cursor] = null)),
                1
              );
            }
            return "arrowright" === a
              ? (this.cursor.moveEditVisual(1), 1)
              : "arrowleft" === a
              ? (this.cursor.moveEditVisual(-1), 1)
              : "space" === a
              ? (this.cursor.moveEditToNext(), 1)
              : "enter" === a
              ? (this.commitWord(), 1)
              : 0;
          },
        },
      ]),
      n
    );
  })();
function Jy(a, e, o) {
  rb.games++;
  var r = Math.max.apply(
    Math,
    v(
      a.map(function (a) {
        return a.curRow;
      })
    )
  );
  1 == e
    ? (rb.wins++,
      rb.histo[r - xc + 1]++,
      void 0 === rb.lastwin && (rb.lastwin = a[0].curday - 1),
      rb.lastwin == a[0].curday - 1 ? rb.curstreak++ : (rb.curstreak = 1),
      (rb.lastwin = a[0].curday))
    : (rb.curstreak = 0),
    (rb.maxstreak = Math.max(rb.maxstreak, rb.curstreak));
  var i =
    ib.startTime && ib.endTime
      ? Math.round((ib.endTime - ib.startTime) / 1e3)
      : 0;
  rb.avgtime || (rb.avgtime = i),
    rb.mintime || (rb.mintime = i),
    rb.maxtime || (rb.maxtime = i),
    (rb.avgtime = ((rb.games - 1) * rb.avgtime + i) / rb.games),
    (rb.maxtime = Math.max(rb.maxtime, i)),
    (rb.mintime = Math.max(rb.mintime, i));
  var t,
    n = [],
    s = B(o.tries);
  try {
    for (s.s(); !(t = s.n()).done; ) {
      var u = t.value;
      n.push(u.join(""));
    }
  } catch (a) {
    s.e(a);
  } finally {
    s.f();
  }
  wg({
    type: "termo" == Mc ? "commit" : Mc,
    tries: n,
    invalids: Array.from(new Set(o.invalids)),
    won: e,
    day: o.curday,
    duration: i,
    stats: rb,
  });
}
var Vy = Cg;
di(
  {
    target: "Array",
    proto: 1,
  },
  {
    fill: Hw,
  }
),
  Vy("fill");
var Wy,
  Ky,
  Xy = di,
  Zy = C,
  _y = L,
  $y = Z,
  aE = ga,
  eE = pa,
  oE =
    ((Wy = 0),
    ((Ky = /[ac]/).exec = function () {
      return (Wy = 1), /./.exec.apply(this, arguments);
    }),
    1 == Ky.test("abc") && Wy),
  rE = Zy.Error,
  iE = $y(/./.test);
Xy(
  {
    target: "RegExp",
    proto: 1,
    forced: !oE,
  },
  {
    test: function (a) {
      var e = this.exec;
      if (!aE(e)) return iE(this, a);
      var o = _y(e, this, a);
      if (null !== o && !eE(o))
        throw new rE(
          "RegExp exec method returned something other than an Object or null"
        );
      return !!o;
    },
  }
);
var tE = {},
  nE = De;
tE.f = nE;
var sE = C,
  uE = ce,
  cE = tE,
  lE = _e.f,
  mE = function (a) {
    var e = sE.Symbol || (sE.Symbol = {});
    uE(e, a) ||
      lE(e, a, {
        value: cE.f(a),
      });
  },
  AE = di,
  gE = C,
  dE = ha,
  pE = cs,
  fE = L,
  bE = Z,
  vE = F,
  hE = Ca,
  wE = k,
  BE = ce,
  yE = fi,
  EE = ga,
  QE = pa,
  DE = wa,
  xE = La,
  jE = io,
  ME = ne,
  zE = Aa,
  IE = Te,
  CE = $t,
  NE = H,
  kE = Cn,
  FE = Dt,
  OE = gr,
  TE = Cd,
  SE = Rr,
  LE = N,
  UE = _e,
  RE = cn,
  YE = U,
  PE = Sl,
  GE = bo.exports,
  qE = Za.exports,
  HE = ko,
  JE = de,
  VE = De,
  WE = tE,
  KE = mE,
  XE = Lc,
  ZE = Xo,
  _E = Ut.forEach,
  $E = No("hidden"),
  aQ = VE("toPrimitive"),
  eQ = ZE.set,
  oQ = ZE.getterFor("Symbol"),
  rQ = Object.prototype,
  iQ = gE.Symbol,
  tQ = iQ && iQ.prototype,
  nQ = gE.TypeError,
  sQ = gE.QObject,
  uQ = dE("JSON", "stringify"),
  cQ = LE.f,
  lQ = UE.f,
  mQ = TE.f,
  AQ = YE.f,
  gQ = bE([].push),
  dQ = qE("symbols"),
  pQ = qE("op-symbols"),
  fQ = qE("string-to-symbol-registry"),
  bQ = qE("symbol-to-string-registry"),
  vQ = qE("wks"),
  hQ = !sQ || !sQ.prototype || !sQ.prototype.findChild,
  wQ =
    vE &&
    wE(function () {
      return (
        7 !=
        kE(
          lQ({}, "a", {
            get: function () {
              return lQ(this, "a", {
                value: 7,
              }).a;
            },
          })
        ).a
      );
    })
      ? function (a, e, o) {
          var r = cQ(rQ, e);
          r && delete rQ[e], lQ(a, e, o), r && a !== rQ && lQ(rQ, e, r);
        }
      : lQ,
  BQ = function (a, e) {
    var o = (dQ[a] = kE(tQ));
    return (
      eQ(o, {
        type: "Symbol",
        tag: a,
        description: e,
      }),
      vE || (o.description = e),
      o
    );
  },
  yQ = function (a, e, o) {
    a === rQ && yQ(pQ, e, o), jE(a);
    var r = IE(e);
    return (
      jE(o),
      BE(dQ, r)
        ? (o.enumerable
            ? (BE(a, $E) && a[$E][r] && (a[$E][r] = 0),
              (o = kE(o, {
                enumerable: NE(0, 0),
              })))
            : (BE(a, $E) || lQ(a, $E, NE(1, {})), (a[$E][r] = 1)),
          wQ(a, r, o))
        : lQ(a, r, o)
    );
  },
  EQ = function (a, e) {
    jE(a);
    var o = zE(e),
      r = FE(o).concat(jQ(o));
    return (
      _E(r, function (e) {
        (vE && !fE(QQ, o, e)) || yQ(a, e, o[e]);
      }),
      a
    );
  },
  QQ = function (a) {
    var e = IE(a),
      o = fE(AQ, this, e);
    return this === rQ && BE(dQ, e) && !BE(pQ, e)
      ? 0
      : o || !BE(this, e) || !BE(dQ, e) || (BE(this, $E) && this[$E][e])
      ? o
      : 1;
  },
  DQ = function (a, e) {
    var o = zE(a),
      r = IE(e);
    if (o !== rQ || !BE(dQ, r) || BE(pQ, r)) {
      var i = cQ(o, r);
      return (
        !i || !BE(dQ, r) || (BE(o, $E) && o[$E][r]) || (i.enumerable = 1), i
      );
    }
  },
  xQ = function (a) {
    var e = mQ(zE(a)),
      o = [];
    return (
      _E(e, function (a) {
        BE(dQ, a) || BE(HE, a) || gQ(o, a);
      }),
      o
    );
  },
  jQ = function (a) {
    var e = a === rQ,
      o = mQ(e ? pQ : zE(a)),
      r = [];
    return (
      _E(o, function (a) {
        !BE(dQ, a) || (e && !BE(rQ, a)) || gQ(r, dQ[a]);
      }),
      r
    );
  };
if (
  (hE ||
    (GE(
      (tQ = (iQ = function () {
        if (DE(tQ, this)) throw nQ("Symbol is not a constructor");
        var a =
            arguments.length && void 0 !== arguments[0]
              ? CE(arguments[0])
              : void 0,
          e = JE(a),
          o = function (a) {
            this === rQ && fE(o, pQ, a),
              BE(this, $E) && BE(this[$E], e) && (this[$E][e] = 0),
              wQ(this, e, NE(1, a));
          };
        return (
          vE &&
            hQ &&
            wQ(rQ, e, {
              configurable: 1,
              set: o,
            }),
          BQ(e, a)
        );
      }).prototype),
      "toString",
      function () {
        return oQ(this).tag;
      }
    ),
    GE(iQ, "withoutSetter", function (a) {
      return BQ(JE(a), a);
    }),
    (YE.f = QQ),
    (UE.f = yQ),
    (RE.f = EQ),
    (LE.f = DQ),
    (OE.f = TE.f = xQ),
    (SE.f = jQ),
    (WE.f = function (a) {
      return BQ(VE(a), a);
    }),
    vE &&
      (lQ(tQ, "description", {
        configurable: 1,
        get: function () {
          return oQ(this).description;
        },
      }),
      GE(rQ, "propertyIsEnumerable", QQ, {
        unsafe: 1,
      }))),
  AE(
    {
      global: 1,
      wrap: 1,
      forced: !hE,
      sham: !hE,
    },
    {
      Symbol: iQ,
    }
  ),
  _E(FE(vQ), function (a) {
    KE(a);
  }),
  AE(
    {
      target: "Symbol",
      stat: 1,
      forced: !hE,
    },
    {
      for: function (a) {
        var e = CE(a);
        if (BE(fQ, e)) return fQ[e];
        var o = iQ(e);
        return (fQ[e] = o), (bQ[o] = e), o;
      },
      keyFor: function (a) {
        if (!xE(a)) throw nQ(a + " is not a symbol");
        if (BE(bQ, a)) return bQ[a];
      },
      useSetter: function () {
        hQ = 1;
      },
      useSimple: function () {
        hQ = 0;
      },
    }
  ),
  AE(
    {
      target: "Object",
      stat: 1,
      forced: !hE,
      sham: !vE,
    },
    {
      create: function (a, e) {
        return void 0 === e ? kE(a) : EQ(kE(a), e);
      },
      defineProperty: yQ,
      defineProperties: EQ,
      getOwnPropertyDescriptor: DQ,
    }
  ),
  AE(
    {
      target: "Object",
      stat: 1,
      forced: !hE,
    },
    {
      getOwnPropertyNames: xQ,
      getOwnPropertySymbols: jQ,
    }
  ),
  AE(
    {
      target: "Object",
      stat: 1,
      forced: wE(function () {
        SE.f(1);
      }),
    },
    {
      getOwnPropertySymbols: function (a) {
        return SE.f(ME(a));
      },
    }
  ),
  uQ &&
    AE(
      {
        target: "JSON",
        stat: 1,
        forced:
          !hE ||
          wE(function () {
            var a = iQ();
            return (
              "[null]" != uQ([a]) ||
              "{}" !=
                uQ({
                  a,
                }) ||
              "{}" != uQ(Object(a))
            );
          }),
      },
      {
        stringify: function (a, e, o) {
          var r = PE(arguments),
            i = e;
          if ((QE(e) || void 0 !== a) && !xE(a))
            return (
              yE(e) ||
                (e = function (a, e) {
                  if ((EE(i) && (e = fE(i, this, a, e)), !xE(e))) return e;
                }),
              (r[1] = e),
              pE(uQ, null, r)
            );
        },
      }
    ),
  !tQ[aQ])
) {
  var MQ = tQ.valueOf;
  GE(tQ, aQ, function () {
    return fE(MQ, this);
  });
}
XE(iQ, "Symbol"), (HE[$E] = 1);
var zQ = di,
  IQ = F,
  CQ = C,
  NQ = Z,
  kQ = ce,
  FQ = ga,
  OQ = wa,
  TQ = $t,
  SQ = _e.f,
  LQ = Zr,
  UQ = CQ.Symbol,
  RQ = UQ && UQ.prototype;
if (IQ && FQ(UQ) && (!("description" in RQ) || void 0 !== UQ().description)) {
  var YQ = {},
    PQ = function () {
      var a =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : TQ(arguments[0]),
        e = OQ(RQ, this) ? new UQ(a) : void 0 === a ? UQ() : UQ(a);
      return "" === a && (YQ[e] = 1), e;
    };
  LQ(PQ, UQ), (PQ.prototype = RQ), (RQ.constructor = PQ);
  var GQ = "Symbol(test)" == String(UQ("test")),
    qQ = NQ(RQ.toString),
    HQ = NQ(RQ.valueOf),
    JQ = /^Symbol\((.*)\)[^)]+$/,
    VQ = NQ("".replace),
    WQ = NQ("".slice);
  SQ(RQ, "description", {
    configurable: 1,
    get: function () {
      var a = HQ(this),
        e = qQ(a);
      if (kQ(YQ, a)) return "";
      var o = GQ ? WQ(e, 7, -1) : VQ(e, JQ, "$1");
      return "" === o ? void 0 : o;
    },
  }),
    zQ(
      {
        global: 1,
        forced: 1,
      },
      {
        Symbol: PQ,
      }
    );
}
mE("iterator");
var KQ = $t,
  XQ = pa,
  ZQ = fo,
  _Q = Z("".replace),
  $Q = String(Error("zxcasd").stack),
  aD = /\n\s*at [^:]*:[^\n]*/,
  eD = aD.test($Q),
  oD = H,
  rD = !k(function () {
    var a = Error("a");
    return "stack" in a
      ? (Object.defineProperty(a, "stack", oD(1, 7)), 7 !== a.stack)
      : 1;
  }),
  iD = ha,
  tD = ce,
  nD = fo,
  sD = wa,
  uD = Vu,
  cD = Zr,
  lD = Zu,
  mD = function (a, e) {
    return void 0 === a ? (arguments.length < 2 ? "" : e) : KQ(a);
  },
  AD = function (a, e) {
    XQ(e) && "cause" in e && ZQ(a, "cause", e.cause);
  },
  gD = function (a, e) {
    if (eD && "string" == typeof a) for (; e--; ) a = _Q(a, aD, "");
    return a;
  },
  dD = rD,
  pD = di,
  fD = cs,
  bD = function (a, e, o, r) {
    var i = r ? 2 : 1,
      t = a.split("."),
      n = t[t.length - 1],
      s = iD.apply(null, t);
    if (s) {
      var u = s.prototype;
      if ((tD(u, "cause") && delete u.cause, !o)) return s;
      var c = iD("Error"),
        l = e(function (a, e) {
          var o = mD(r ? e : a, void 0),
            t = r ? new s(a) : new s();
          return (
            void 0 !== o && nD(t, "message", o),
            dD && nD(t, "stack", gD(t.stack, 2)),
            this && sD(u, this) && lD(t, this, l),
            arguments.length > i && AD(t, arguments[i]),
            t
          );
        });
      (l.prototype = u),
        "Error" !== n &&
          (uD
            ? uD(l, c)
            : cD(l, c, {
                name: 1,
              })),
        cD(l, s);
      try {
        u.name !== n && nD(u, "name", n), (u.constructor = l);
      } catch (a) {}
      return l;
    }
  },
  vD = C.WebAssembly,
  hD =
    7 !==
    Error("e", {
      cause: 7,
    }).cause,
  wD = function (a, e) {
    var o = {};
    (o[a] = bD(a, e, hD)),
      pD(
        {
          global: 1,
          forced: hD,
        },
        o
      );
  },
  BD = function (a, e) {
    if (vD && vD[a]) {
      var o = {};
      (o[a] = bD("WebAssembly." + a, e, hD)),
        pD(
          {
            target: "WebAssembly",
            stat: 1,
            forced: hD,
          },
          o
        );
    }
  };
function yD(a, e, o, r) {
  return new (o || (o = Promise))(function (i, t) {
    function n(a) {
      try {
        u(r.next(a));
      } catch (a) {
        t(a);
      }
    }
    function s(a) {
      try {
        u(r.throw(a));
      } catch (a) {
        t(a);
      }
    }
    function u(a) {
      var e;
      a.done
        ? i(a.value)
        : ((e = a.value),
          e instanceof o
            ? e
            : new o(function (a) {
                a(e);
              })).then(n, s);
    }
    u((r = r.apply(a, e || [])).next());
  });
}
function ED(a, e) {
  var o,
    r,
    i,
    t,
    n = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (t = {
      next: s(0),
      throw: s(1),
      return: s(2),
    }),
    "function" == typeof Symbol &&
      (t[Symbol.iterator] = function () {
        return this;
      }),
    t
  );
  function s(t) {
    return function (s) {
      return (function (t) {
        if (o) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((o = 1),
              r &&
                (i =
                  2 & t[0]
                    ? r.return
                    : t[0]
                    ? r.throw || ((i = r.return) && i.call(r), 0)
                    : r.next) &&
                !(i = i.call(r, t[1])).done)
            )
              return i;
            switch (((r = 0), i && (t = [2 & t[0], i.value]), t[0])) {
              case 0:
              case 1:
                i = t;
                break;
              case 4:
                return (
                  n.label++,
                  {
                    value: t[1],
                    done: 0,
                  }
                );
              case 5:
                n.label++, (r = t[1]), (t = [0]);
                continue;
              case 7:
                (t = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  !(
                    (i = (i = n.trys).length > 0 && i[i.length - 1]) ||
                    (6 !== t[0] && 2 !== t[0])
                  )
                ) {
                  n = 0;
                  continue;
                }
                if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3]))) {
                  n.label = t[1];
                  break;
                }
                if (6 === t[0] && n.label < i[1]) {
                  (n.label = i[1]), (i = t);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(t);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            t = e.call(a, n);
          } catch (a) {
            (t = [6, a]), (r = 0);
          } finally {
            o = i = 0;
          }
        if (5 & t[0]) throw t[1];
        return {
          value: t[0] ? t[1] : void 0,
          done: 1,
        };
      })([t, s]);
    };
  }
}
wD("Error", function (a) {
  return function (e) {
    return fD(a, this, arguments);
  };
}),
  wD("EvalError", function (a) {
    return function (e) {
      return fD(a, this, arguments);
    };
  }),
  wD("RangeError", function (a) {
    return function (e) {
      return fD(a, this, arguments);
    };
  }),
  wD("ReferenceError", function (a) {
    return function (e) {
      return fD(a, this, arguments);
    };
  }),
  wD("SyntaxError", function (a) {
    return function (e) {
      return fD(a, this, arguments);
    };
  }),
  wD("TypeError", function (a) {
    return function (e) {
      return fD(a, this, arguments);
    };
  }),
  wD("URIError", function (a) {
    return function (e) {
      return fD(a, this, arguments);
    };
  }),
  BD("CompileError", function (a) {
    return function (e) {
      return fD(a, this, arguments);
    };
  }),
  BD("LinkError", function (a) {
    return function (e) {
      return fD(a, this, arguments);
    };
  }),
  BD("RuntimeError", function (a) {
    return function (e) {
      return fD(a, this, arguments);
    };
  }),
  function () {
    (console.warn || console.log).apply(console, arguments);
  }.bind("[clipboard-polyfill]");
var QD,
  DD,
  xD,
  jD,
  MD = "undefined" == typeof navigator ? void 0 : navigator,
  zD = null == MD ? void 0 : MD.clipboard;
null === (QD = null == zD ? void 0 : zD.read) || void 0 === QD || QD.bind(zD),
  null === (DD = null == zD ? void 0 : zD.readText) ||
    void 0 === DD ||
    DD.bind(zD);
var ID =
    null === (xD = null == zD ? void 0 : zD.write) || void 0 === xD
      ? void 0
      : xD.bind(zD),
  CD =
    null === (jD = null == zD ? void 0 : zD.writeText) || void 0 === jD
      ? void 0
      : jD.bind(zD),
  ND = "undefined" == typeof window ? void 0 : window,
  kD = null == ND ? void 0 : ND.ClipboardItem,
  FD = ND,
  OD = function () {
    this.success = 0;
  };
function TD(a, e, o) {
  for (var r in ((a.success = 1), e)) {
    var i = e[r],
      t = o.clipboardData;
    t.setData(r, i),
      "text/plain" === r && t.getData(r) !== i && (a.success = 0);
  }
  o.preventDefault();
}
function SD(a) {
  var e = new OD(),
    o = TD.bind(this, e, a);
  document.addEventListener("copy", o);
  try {
    document.execCommand("copy");
  } finally {
    document.removeEventListener("copy", o);
  }
  return e.success;
}
function LD(a, e) {
  UD(a);
  var o = SD(e);
  return RD(), o;
}
function UD(a) {
  var e = document.getSelection();
  if (e) {
    var o = document.createRange();
    o.selectNodeContents(a), e.removeAllRanges(), e.addRange(o);
  }
}
function RD() {
  var a = document.getSelection();
  a && a.removeAllRanges();
}
function YD(a) {
  return yD(this, void 0, void 0, function () {
    var e;
    return ED(this, function () {
      if (
        ((e = "text/plain" in a),
        "undefined" == typeof ClipboardEvent &&
          void 0 !== FD.clipboardData &&
          void 0 !== FD.clipboardData.setData)
      ) {
        if (!e) throw new Error("No `text/plain` value was specified.");
        if (((o = a["text/plain"]), FD.clipboardData.setData("Text", o)))
          return [2, 1];
        throw new Error(
          "Copying failed, possibly because the user rejected it."
        );
      }
      var o;
      return SD(a) ||
        navigator.userAgent.indexOf("Edge") > -1 ||
        LD(document.body, a) ||
        (function (a) {
          var e = document.createElement("div");
          e.setAttribute("style", "-webkit-user-select: text !important"),
            (e.textContent = "temporary element"),
            document.body.appendChild(e);
          var o = LD(e, a);
          return document.body.removeChild(e), o;
        })(a) ||
        (function (a) {
          var e = document.createElement("div");
          e.setAttribute("style", "-webkit-user-select: text !important");
          var o = e;
          e.attachShadow &&
            (o = e.attachShadow({
              mode: "open",
            }));
          var r = document.createElement("span");
          (r.innerText = a),
            o.appendChild(r),
            document.body.appendChild(e),
            UD(r);
          var i = document.execCommand("copy");
          return RD(), document.body.removeChild(e), i;
        })(a["text/plain"])
        ? [2, 1]
        : [2, 0];
    });
  });
}
function PD(a) {
  return yD(this, void 0, void 0, function () {
    return ED(this, function () {
      if (CD) return [2, CD(a)];
      if (
        !YD(
          (function (a) {
            var e = {};
            return (e["text/plain"] = a), e;
          })(a)
        )
      )
        throw new Error("writeText() failed");
      return [2];
    });
  });
}
function GD(a, e) {
  for (var o = 0, r = a; o < r.length; o++)
    if (-1 !== r[o].types.indexOf(e)) return 1;
  return 0;
}
var qD = (function () {
  function a(a, e) {
    var o;
    for (var r in (void 0 === e && (e = {}),
    (this.types = Object.keys(a)),
    (this._items = {}),
    a)) {
      var i = a[r];
      this._items[r] = "string" == typeof i ? HD(r, i) : i;
    }
    this.presentationStyle =
      null !== (o = null == e ? void 0 : e.presentationStyle) && void 0 !== o
        ? o
        : "unspecified";
  }
  return (
    (a.prototype.getType = function (a) {
      return yD(this, void 0, void 0, function () {
        return ED(this, function () {
          return [2, this._items[a]];
        });
      });
    }),
    a
  );
})();
function HD(a, e) {
  return new Blob([e], {
    type: a,
  });
}
function JD(a) {
  return yD(this, void 0, void 0, function () {
    return ED(this, function () {
      return [
        2,
        new Promise(function (e, o) {
          var r = new FileReader();
          r.addEventListener("load", function () {
            var a = r.result;
            "string" == typeof a ? e(a) : o("could not convert blob to string");
          }),
            r.readAsText(a);
        }),
      ];
    });
  });
}
function VD(a) {
  return yD(this, void 0, void 0, function () {
    var e, o, r, i, t, n, s;
    return ED(this, function (u) {
      switch (u.label) {
        case 0:
          (e = {}), (o = 0), (r = a.types), (u.label = 1);
        case 1:
          return o < r.length
            ? ((i = r[o]), (t = e), (n = i), [4, a.getType(i)])
            : [3, 4];
        case 2:
          (t[n] = u.sent()), (u.label = 3);
        case 3:
          return o++, [3, 1];
        case 4:
          return (
            (s = {}),
            a.presentationStyle && (s.presentationStyle = a.presentationStyle),
            [2, new kD(e, s)]
          );
      }
    });
  });
}
function WD(a, e) {
  return yD(this, void 0, void 0, function () {
    return ED(this, function (o) {
      switch (o.label) {
        case 0:
          return [4, a.getType(e)];
        case 1:
          return [4, JD(o.sent())];
        case 2:
          return [2, o.sent()];
      }
    });
  });
}
function KD(a) {
  return yD(this, void 0, void 0, function () {
    var e, o, r, i, t, n;
    return ED(this, function (s) {
      switch (s.label) {
        case 0:
          (e = {}), (o = 0), (r = a.types), (s.label = 1);
        case 1:
          return o < r.length
            ? ((i = r[o]), (t = e), (n = i), [4, WD(a, i)])
            : [3, 4];
        case 2:
          (t[n] = s.sent()), (s.label = 3);
        case 3:
          return o++, [3, 1];
        case 4:
          return [2, e];
      }
    });
  });
}
function XD(a) {
  return yD(this, void 0, void 0, function () {
    var e, o, r;
    return ED(this, function (i) {
      switch (i.label) {
        case 0:
          return ID && kD ? [4, Promise.all(a.map(VD))] : [3, 5];
        case 1:
          (e = i.sent()), (i.label = 2);
        case 2:
          return i.trys.push([2, 4, , 5]), [4, ID(e)];
        case 3:
          return [2, i.sent()];
        case 4:
          if (((o = i.sent()), !GD(a, "text/plain") && !GD(a, "text/html")))
            throw o;
          return [3, 5];
        case 5:
          return GD(a, "text/plain"), (r = YD), [4, KD(a[0])];
        case 6:
          if (!r.apply(void 0, [i.sent()])) throw new Error("write() failed");
          return [2];
      }
    });
  });
}
var ZD = {
  right: "🟩",
  place: "🟨",
  wrong: "⬛",
};
function _D(a) {
  return $D.apply(this, arguments);
}
function $D() {
  return (
    ($D = o(
      regeneratorRuntime.mark(function a(e) {
        var o, r, i, t, n, s, u, c, l, m, A, g;
        return regeneratorRuntime.wrap(function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                (o = e.curRow),
                  (r = e.won ? o + 1 : "X"),
                  (i = null === vy(e.normSolution, e.tries) ? "*" : ""),
                  (t = rb.curstreak > 0 ? " 🔥 ".concat(rb.curstreak) : ""),
                  (n = [
                    "joguei term.ooo #"
                      .concat(e.curday, " ")
                      .concat(i)
                      .concat(r, "/6")
                      .concat(t),
                    "",
                  ]),
                  (s = B(e.tries));
                try {
                  for (s.s(); !(u = s.n()).done; ) {
                    (c = u.value), (l = []), (m = B(fy(e.normSolution, c)));
                    try {
                      for (m.s(); !(A = m.n()).done; )
                        (g = A.value), l.push(ZD[g]);
                    } catch (a) {
                      m.e(a);
                    } finally {
                      m.f();
                    }
                    n.push(l.join(""));
                  }
                } catch (a) {
                  s.e(a);
                } finally {
                  s.f();
                }
                return n.push(""), n.push(""), (a.next = 11), ox(n.join("\n"));
              case 11:
                setTimeout(zw, 2e3);
              case 12:
              case "end":
                return a.stop();
            }
        }, a);
      })
    )),
    $D.apply(this, arguments)
  );
}
function ax(a, e) {
  return ex.apply(this, arguments);
}
function ex() {
  return (ex = o(
    regeneratorRuntime.mark(function a(e, o) {
      var r;
      return regeneratorRuntime.wrap(
        function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                if (
                  ((r = {
                    text: e,
                    files: [
                      new File([o], "quarteto.png", {
                        type: "image/png",
                        lastModified: new Date().getTime(),
                      }),
                    ],
                  }),
                  !(
                    ix() &&
                    -1 ==
                      navigator.userAgent.toLowerCase().indexOf("firefox") &&
                    navigator.share &&
                    navigator.canShare &&
                    navigator.canShare(r)
                  ))
                ) {
                  a.next = 11;
                  break;
                }
                return (a.prev = 2), (a.next = 5), navigator.share(r);
              case 5:
                return Mw("compartilhado"), a.abrupt("return");
              case 9:
                (a.prev = 9), (a.t0 = a.catch(2));
              case 11:
                XD([
                  new qD({
                    "text/plain": new Blob([e], {
                      type: "text/plain",
                    }),
                    "image/png": o,
                  }),
                ]).then(
                  function () {
                    Mw("copiado para o ctrl+V");
                  },
                  function () {
                    Mw("compartilhamento falhou");
                  }
                );
              case 14:
              case "end":
                return a.stop();
            }
        },
        a,
        null,
        [[2, 9]]
      );
    })
  )).apply(this, arguments);
}
function ox(a) {
  return rx.apply(this, arguments);
}
function rx() {
  return (rx = o(
    regeneratorRuntime.mark(function a(e) {
      return regeneratorRuntime.wrap(
        function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                if (
                  ((window._shared = e),
                  !(
                    ix() &&
                    -1 ==
                      navigator.userAgent.toLowerCase().indexOf("firefox") &&
                    navigator.share &&
                    navigator.canShare &&
                    navigator.canShare({
                      text: e,
                    })
                  ))
                ) {
                  a.next = 11;
                  break;
                }
                return (
                  (a.prev = 2),
                  (a.next = 5),
                  navigator.share({
                    text: e,
                  })
                );
              case 5:
                return Mw("compartilhado"), a.abrupt("return");
              case 9:
                (a.prev = 9), (a.t0 = a.catch(2));
              case 11:
                PD(e).then(
                  function () {
                    Mw("copiado para o ctrl+V");
                  },
                  function () {
                    Mw("compartilhamento falhou");
                  }
                );
              case 12:
              case "end":
                return a.stop();
            }
        },
        a,
        null,
        [[2, 9]]
      );
    })
  )).apply(this, arguments);
}
function ix() {
  var a, e;
  if (navigator.userAgentData) return navigator.userAgentData.mobile;
  var o =
    null !==
      (a =
        null !== (e = navigator.userAgent) && void 0 !== e
          ? e
          : navigator.vendor) && void 0 !== a
      ? a
      : window.opera;
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      o
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      o.substr(0, 4)
    )
  );
}
var tx = regeneratorRuntime.mark(lx),
  nx = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🟥"];
function sx(a) {
  return a.won ? nx[a.curRow] : nx[9];
}
var ux = {
  right: "#3AA394",
  place: "#D3AD69",
  wrong: "#312A2C",
};
function cx(a) {
  var e = document.createElement("canvas");
  (e.width = 1024), (e.height = 576);
  var o = e.getContext("2d");
  o.scale(2, 2),
    (o.fillStyle = "#6E5C62"),
    o.fillRect(0, 0, 512, 288),
    (o.lineWidth = 2),
    (o.strokeStyle = "#312A2C"),
    o.strokeRect(0, 0, 512, 288),
    (o.fillStyle = "#FAFAFF"),
    (o.font = "300 20px Mitr"),
    (o.textAlign = "center"),
    o.fillText("".concat(zc, " #").concat(a[0].curday), 256, 36),
    (o.fillStyle = "#312A2C"),
    (o.font = "300 12px Mitr"),
    (o.textAlign = "right"),
    o.fillText("term.ooo/".concat(xc), 496, 272);
  for (
    var r = 5 * xc + 0.75 * (xc + 1),
      i = Ic,
      t = Math.min(512 / r, 188 / i),
      n = 60 + (188 - i * t) / 2,
      s = (512 - 5 * xc * t) / (xc + 1),
      u = 0;
    u < a.length;
    ++u
  ) {
    var c = a[u];
    o.save(), o.translate(s + u * (s + 5 * t), n);
    for (var l = 0; l < Ic; ++l) {
      var m = c.tries[l];
      if (!m) break;
      for (var A = fy(c.normSolution, m), g = 0; g < 5; ++g)
        (o.fillStyle = ux[A[g]]),
          zh(o, g * t, l * t, 0.9 * t, 0.9 * t, (0.9 * t) / 5),
          o.fill();
    }
    o.restore();
  }
  return new Promise(function (a) {
    return e.toBlob(a);
  });
}
function lx(a) {
  var e, o, r, i, t, n, s, u;
  return regeneratorRuntime.wrap(function (c) {
    for (;;)
      switch ((c.prev = c.next)) {
        case 0:
          (e = Math.max.apply(
            Math,
            v(
              a.map(function (a) {
                return a.curRow + 1;
              })
            )
          )),
            (o = 0);
        case 2:
          if (!(o < e)) {
            c.next = 11;
            break;
          }
          (r = []), (i = B(a));
          try {
            for (i.s(); !(t = i.n()).done; )
              (s = t.value),
                (u = null !== (n = s.tries[o]) && void 0 !== n ? n : "%%%%%"),
                r.push(
                  fy(s.normSolution, u)
                    .map(function (a) {
                      return ZD[a];
                    })
                    .join("")
                );
          } catch (a) {
            i.e(a);
          } finally {
            i.f();
          }
          return (c.next = 8), r.join("  ");
        case 8:
          ++o, (c.next = 2);
          break;
        case 11:
        case "end":
          return c.stop();
      }
  }, tx);
}
function mx() {
  return (mx = o(
    regeneratorRuntime.mark(function a(e) {
      var o, r, i;
      return regeneratorRuntime.wrap(function (a) {
        for (;;)
          switch ((a.prev = a.next)) {
            case 0:
              if (1 !== xc) {
                a.next = 2;
                break;
              }
              return a.abrupt("return", _D(e[0]));
            case 2:
              if (
                ((o = rb.curstreak > 0 ? " 🔥 ".concat(rb.curstreak) : ""),
                (r = [
                  "term.ooo/".concat(xc, " #").concat(e[0].curday).concat(o),
                  "",
                ]),
                2 === xc
                  ? r.push(sx(e[0]) + sx(e[1]))
                  : 3 == xc
                  ? r.push(sx(e[0]) + sx(e[1]) + sx(e[2]))
                  : 4 == xc &&
                    (r.push(sx(e[0]) + sx(e[1])), r.push(sx(e[2]) + sx(e[3]))),
                r.push(""),
                !(xc >= 3))
              ) {
                a.next = 15;
                break;
              }
              return r.push(""), (a.next = 10), cx(e);
            case 10:
              return (i = a.sent), (a.next = 13), ax(r.join("\n"), i);
            case 13:
              a.next = 20;
              break;
            case 15:
              return (
                r.push.apply(r, v(lx(e))),
                r.push(""),
                r.push(""),
                (a.next = 20),
                ox(r.join("\n"))
              );
            case 20:
              setTimeout(zw, 2e3);
            case 21:
            case "end":
              return a.stop();
          }
      }, a);
    })
  )).apply(this, arguments);
}
function Ax(a) {
  xw.modal.show(a);
}
function gx(a) {
  Ax("stats"), xw.modal.getModal("stats").setStats(rb, a);
}
function dx() {
  return xw.modal.isOpen();
}
var px = F,
  fx = Z,
  bx = L,
  vx = k,
  hx = Dt,
  wx = Rr,
  Bx = U,
  yx = ne,
  Ex = sa,
  Qx = Object.assign,
  Dx = Object.defineProperty,
  xx = fx([].concat),
  jx =
    !Qx ||
    vx(function () {
      if (
        px &&
        1 !==
          Qx(
            {
              b: 1,
            },
            Qx(
              Dx({}, "a", {
                enumerable: 1,
                get: function () {
                  Dx(this, "b", {
                    value: 3,
                    enumerable: 0,
                  });
                },
              }),
              {
                b: 2,
              }
            )
          ).b
      )
        return 1;
      var a = {},
        e = {},
        o = Symbol(),
        r = "abcdefghijklmnopqrst";
      return (
        (a[o] = 7),
        r.split("").forEach(function (a) {
          e[a] = a;
        }),
        7 != Qx({}, a)[o] || hx(Qx({}, e)).join("") != r
      );
    })
      ? function (a, e) {
          for (
            var o = yx(a), r = arguments.length, i = 1, t = wx.f, n = Bx.f;
            r > i;

          )
            for (
              var s,
                u = Ex(arguments[i++]),
                c = t ? xx(hx(u), t(u)) : hx(u),
                l = c.length,
                m = 0;
              l > m;

            )
              (s = c[m++]), (px && !bx(n, u, s)) || (o[s] = u[s]);
          return o;
        }
      : Qx,
  Mx = jx;
function zx(a, e) {
  if (void 0 !== e) {
    for (var o = 0, r = Object.keys(a); o < r.length; o++) delete a[r[o]];
    return Object.assign(a, e);
  }
}
di(
  {
    target: "Object",
    stat: 1,
    forced: Object.assign !== Mx,
  },
  {
    assign: Mx,
  }
);
var Ix = [
  "curday",
  "solution",
  "normSolution",
  "tries",
  "invalids",
  "curRow",
  "curTry",
  "gameOver",
  "won",
];
function Cx(a) {
  var e,
    o = [],
    r = B(a);
  try {
    for (r.s(); !(e = r.n()).done; ) {
      var i,
        t = e.value,
        n = {},
        s = B(Ix);
      try {
        for (s.s(); !(i = s.n()).done; ) {
          var u = i.value;
          n[u] = t[u];
        }
      } catch (a) {
        s.e(a);
      } finally {
        s.f();
      }
      o.push(n);
    }
  } catch (a) {
    r.e(a);
  } finally {
    r.f();
  }
  !(function (a, e) {
    try {
      window.localStorage.setItem(a, JSON.stringify(e));
    } catch (a) {}
  })(Mc, {
    config: tb,
    meta: ib,
    stats: rb,
    state: o,
  });
}
(hg = Mc),
  window.addEventListener("error", function (a) {
    var e, o;
    return yg(
      null == a || null === (e = a.error) || void 0 === e ? void 0 : e.message,
      null == a || null === (o = a.error) || void 0 === o ? void 0 : o.stack
    );
  }),
  window.addEventListener("unhandledrejection", function (a) {
    var e;
    return yg(
      null == a || null === (e = a.reason) || void 0 === e ? void 0 : e.message,
      "[Promise]"
    );
  });
var Nx = [
    "Genial",
    "Fantástico",
    "Extraordinário",
    "Fenomenal",
    "Impressionante",
    "Ufa!",
  ],
  kx = {};
function Fx(a, e, o, r) {
  var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
    t = kx[a];
  t || (t = kx[a] = new Array(xc)),
    ("right" == o ||
      ("place" == o && "right" != t[e]) ||
      ("wrong" == o && void 0 === t[e])) &&
      (t[e] = o);
  for (var n = 0; n < xc; ++n)
    if (r[n].gameOver) t[n] = null;
    else if (void 0 === t[n]) return;
  xw.kbd.letterToMulti(xc, a, t, i);
}
!(function a(e) {
  if ("complete" !== document.readyState)
    return document.addEventListener(
      "readystatechange",
      function () {
        return a(e);
      },
      {
        once: 1,
      }
    );
  e();
})(function () {
  !(function () {
    document.querySelector("wc-bar").disableLink(Mc),
      (document.querySelector("head title").innerText = zc),
      (document.querySelector("wc-header").innerHTML = zc),
      (document.getElementById("style_".concat(Mc)).media = "");
    for (var a = document.querySelector("main"), e = 0; e < xc; ++e) {
      var o = document.createElement("wc-board");
      (o.id = "board".concat(e)),
        o.setAttribute("rows", Ic),
        (o.ariaLive = "polite"),
        (o.role = "group"),
        a.appendChild(o);
    }
    document
      .querySelector("wc-stats")
      .setAttribute("range", "".concat(xc, "-").concat(Ic));
  })();
  for (
    var a = [],
      e = function (e) {
        var r = new Hy(document.getElementById("board".concat(e)), Ic);
        (r.idx = e),
          a.push(r),
          r.wcb.addEventListener("letter", function (e) {
            if (!r.gameOver && r.curRow == e.detail.row) {
              var o,
                i = B(a);
              try {
                for (i.s(); !(o = i.n()).done; ) {
                  var t = o.value;
                  t.gameOver || t.cursor.reset(e.detail.pos);
                }
              } catch (a) {
                i.e(a);
              } finally {
                i.f();
              }
            }
          }),
          r.addEventListener("commitError", function (e) {
            jh(a, r, "commit-error") && e.detail.msg && Mw(e.detail.msg),
              jw(r.getRow(), "0.75s ease-in-out rownope");
          }),
          r.addEventListener(
            "commit",
            (function () {
              var t = o(
                regeneratorRuntime.mark(function o(t) {
                  var n, s, u, c, l, m, A;
                  return regeneratorRuntime.wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (n = t.detail.cur),
                            (s = fy(r.normSolution, n)),
                            (o.next = 4),
                            r.setClues(s)
                          );
                        case 4:
                          for (u = 0; u < 5; ++u) Fx(n[u], e, s[u], a);
                          if (
                            !s.every(function (a) {
                              return "right" === a;
                            })
                          ) {
                            o.next = 12;
                            break;
                          }
                          return r.animateVictory(), (o.next = 9), i(r, 1);
                        case 9:
                          if ((Cx(a), jh(a, r, "unlock"))) {
                            c = B(a);
                            try {
                              for (c.s(); !(l = c.n()).done; )
                                l.value.locked = 0;
                            } catch (a) {
                              c.e(a);
                            } finally {
                              c.f();
                            }
                          }
                          return o.abrupt("return");
                        case 12:
                          if (!(r.curRow >= r.maxRows - 1)) {
                            o.next = 17;
                            break;
                          }
                          return (
                            jw(r.getRow(), "0.75s ease-in-out rownope"),
                            (o.next = 16),
                            i(r, 0)
                          );
                        case 16:
                          return o.abrupt("return");
                        case 17:
                          if ((r.newLine(), Cx(a), jh(a, r, "unlock"))) {
                            m = B(a);
                            try {
                              for (m.s(); !(A = m.n()).done; )
                                A.value.locked = 0;
                            } catch (a) {
                              m.e(a);
                            } finally {
                              m.f();
                            }
                          }
                        case 20:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                })
              );
              return function (a) {
                return t.apply(this, arguments);
              };
            })()
          );
      },
      r = 0;
    r < xc;
    ++r
  )
    e(r);
  function i(a, e) {
    return t.apply(this, arguments);
  }
  function t() {
    return (
      (t = o(
        regeneratorRuntime.mark(function e(o, r) {
          var i, t, n, s, u;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((o.gameOver = 1),
                    (o.won = r),
                    o.tries.push(o.curTry),
                    r && xc > 1)
                  )
                    for (i = 0, t = Object.keys(kx); i < t.length; i++)
                      (n = t[i]),
                        (kx[n][o.idx] = null),
                        xw.kbd.letterToMulti(xc, n, kx[n], 0);
                  if (
                    a.every(function (a) {
                      return a.gameOver;
                    })
                  ) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt("return");
                case 6:
                  return (e.next = 8), Dh(0.5);
                case 8:
                  return (
                    (s = a.every(function (a) {
                      return a.won;
                    })),
                    s
                      ? ((u = Math.max.apply(
                          Math,
                          v(
                            a.map(function (a) {
                              return a.curRow;
                            })
                          )
                        )),
                        Mw(Nx[u - Ic + 6]))
                      : Mw(
                          "".concat(Cc.palavras, ": ").concat(
                            a
                              .map(function (a) {
                                return a.solution;
                              })
                              .join(", ")
                          )
                        ),
                    (e.next = 12),
                    Dh(1)
                  );
                case 12:
                  (ib.endTime = +new Date()),
                    Jy(a, s, o),
                    xw.header.showBar(),
                    gx(1),
                    Cx(a);
                case 17:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      t.apply(this, arguments)
    );
  }
  (function (a, e, o) {
    1 == xc &&
      (xw.stats.setAttribute("stato", "true"),
      xw.config.setAttribute("boxes", "contrast,hardmode,index")),
      xw.kbd.addEventListener("kbd", function (a) {
        "escape" != a.detail.key ? (zw(), e(a.detail.key)) : o();
      }),
      document.addEventListener("click", function (a) {
        o(), a.stopPropagation(), a.preventDefault();
      }),
      xw.modal.registerModal("help", document.querySelector("div#help")),
      xw.modal.registerModal("stats", document.querySelector("#stats")),
      xw.modal.registerModal("config", xw.config),
      xw.modal.getModal("config").addEventListener("update", function () {
        return (
          (a = xw.modal.getModal("config").getConfig()),
          (tb.highContrast = a.highContrast),
          (tb.hardMode = a.hardMode),
          (ib.highContrastChange = 1),
          void Iw()
        );
        var a;
      });
    for (
      var r = function () {
          var e = t[i];
          xw.header.addEventListener(e, function () {
            "stats" === e
              ? gx(
                  a.every(function (a) {
                    return a.gameOver;
                  })
                )
              : Ax(e);
          });
        },
        i = 0,
        t = ["stats", "config", "help"];
      i < t.length;
      i++
    )
      r();
    xw.modal.getModal("stats").addEventListener("share", function () {
      !(function (a) {
        mx.apply(this, arguments);
      })(a);
    });
  })(
    a,
    function (e) {
      var o,
        r = B(a);
      try {
        for (r.s(); !(o = r.n()).done; ) o.value.press(e);
      } catch (a) {
        r.e(a);
      } finally {
        r.f();
      }
    },
    function () {
      dx() ||
      !a.every(function (a) {
        return a.gameOver;
      })
        ? xw.modal.hide()
        : gx(1);
    }
  ),
    (function (a) {
      var e = (function (a) {
        try {
          var e;
          return JSON.parse(
            null !== (e = window.localStorage.getItem(a)) && void 0 !== e
              ? e
              : "null"
          );
        } catch (a) {
          return null;
        }
      })(Mc);
      if (e && (zx(tb, e.config), zx(rb, e.stats), zx(ib, e.meta), e.state))
        for (var o = 0; o < e.state.length; ++o) {
          var r,
            i = B(Ix);
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var t = r.value;
              void 0 !== e.state[o][t] && (a[o][t] = e.state[o][t]);
            }
          } catch (a) {
            i.e(a);
          } finally {
            i.f();
          }
        }
    })(a),
    Iw(),
    !ib.highContrastChange &&
      tb.highContrast &&
      (Mw("as cores trocaram!"), (ib.highContrastChange = 1)),
    0 === rb.games && a[0].curRow <= 0 && !a[0].gameOver && Ax("help"),
    py() !== a[0].curday &&
      (function (a) {
        for (
          var e = py(),
            o = {
              1: Zf,
              2: uy,
              4: gy,
            }[xc],
            r = (xc * e) % o.length,
            i = o.slice(r, r + xc),
            t = 0;
          t < a.length;
          ++t
        ) {
          var n = a[t];
          (n.solution = 1 == xc ? o[r] : Zf[i[t]]),
            (n.normSolution = Mh(n.solution)),
            (n.curday = e),
            (n.tries = []),
            (n.invalids = []),
            (n.curRow = -1),
            (n.curTry = null),
            (n.gameOver = 0),
            (n.won = null);
        }
        (ib.startTime = +new Date()), (ib.endTime = 0);
      })(a),
    (function (a, e) {
      for (
        var o = 1,
          r = 1,
          i = function (i) {
            var t = a[i];
            !(function (a, e) {
              if (0 != a.tries.length) {
                a.tries = a.tries.filter(function (a) {
                  return 5 == a.length;
                });
                for (var o = 0; o < a.tries.length; ++o) {
                  var r = a.tries[o],
                    i = r.join("");
                  a.curRow = o;
                  for (
                    var t = a.getLetters(),
                      n = fy(a.normSolution, r),
                      s = void 0 !== Xf[i] ? Xf[i] : i,
                      u = a.getRow(),
                      c = 0;
                    c < 5;
                    ++c
                  )
                    (t[c].innerText = s[c]),
                      u.letterTo(c, n[c], 0),
                      e(r[c], n[c]);
                }
              }
            })(t, function (o, r) {
              return e(o, i, r, a, 0);
            }),
              t.gameOver || (o = 0),
              t.won || (r = 0);
          },
          t = 0;
        t < xc;
        ++t
      )
        i(t);
      o &&
        (r ||
          Mw(
            "".concat(Cc.palavras, ": ").concat(
              a
                .map(function (a) {
                  return a.solution;
                })
                .join(", ")
            )
          ),
        Dh(1).then(function () {
          dx() || (xw.header.showBar(), gx(1));
        }));
    })(a, Fx);
  for (var n = 0, s = a; n < s.length; n++) s[n].newLine();
});
