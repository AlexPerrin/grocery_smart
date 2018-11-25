/*!
 * @license
 *
 * Scandit Barcode Scanner SDK for the Web
 * v. 3.2.0
 *
 * Copyright © 2018 Scandit AG. All Rights Reserved.
 *
 * The use of this software is governed by the Scandit Terms and Conditions.
 * https://ssl.scandit.com/terms/test.pdf
 */
(function(global, factory) {
  "object" === typeof exports && "undefined" !== typeof module
    ? factory(exports)
    : "function" === typeof define && define.amd
      ? define(["exports"], factory)
      : factory((global.ScanditSDK = {}));
})(this, function(exports) {
  "use strict";
  function ___$insertStyle(css) {
    if (!css) return;
    if ("undefined" === typeof window) return;
    var style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
  }
  var commonjsGlobal =
    "undefined" !== typeof window
      ? window
      : "undefined" !== typeof global
        ? global
        : "undefined" !== typeof self
          ? self
          : {};
  function createCommonjsModule(fn, module) {
    return (module = { exports: {} }), fn(module, module.exports), module.exports;
  }
  var _fails = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  var _descriptors = !_fails(function() {
    return (
      7 !=
      Object.defineProperty({}, "a", {
        get: function() {
          return 7;
        }
      }).a
    );
  });
  var _library = false;
  var _global = createCommonjsModule(function(module) {
    var global = (module.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
    if ("number" == typeof __g) __g = global;
  });
  var _core = createCommonjsModule(function(module) {
    var core = (module.exports = { version: "2.5.1" });
    if ("number" == typeof __e) __e = core;
  });
  _core.version;
  var _isObject = function(it) {
    return "object" === typeof it ? null !== it : "function" === typeof it;
  };
  var _anObject = function(it) {
    if (!_isObject(it)) throw TypeError(it + " is not an object!");
    return it;
  };
  var document$1 = _global.document;
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function(it) {
    return is ? document$1.createElement(it) : {};
  };
  var _ie8DomDefine =
    !_descriptors &&
    !_fails(function() {
      return (
        7 !=
        Object.defineProperty(_domCreate("div"), "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  var _toPrimitive = function(it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && "function" == typeof (fn = it.toString) && !_isObject((val = fn.call(it)))) return val;
    if ("function" == typeof (fn = it.valueOf) && !_isObject((val = fn.call(it)))) return val;
    if (!S && "function" == typeof (fn = it.toString) && !_isObject((val = fn.call(it)))) return val;
    throw TypeError("Can't convert object to primitive value");
  };
  var dP = Object.defineProperty;
  var f = _descriptors
    ? Object.defineProperty
    : function defineProperty(O, P, Attributes) {
        _anObject(O);
        P = _toPrimitive(P, true);
        _anObject(Attributes);
        if (_ie8DomDefine)
          try {
            return dP(O, P, Attributes);
          } catch (e) {}
        if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
      };
  var _objectDp = { f: f };
  var _propertyDesc = function(bitmap, value) {
    return { enumerable: !(1 & bitmap), configurable: !(2 & bitmap), writable: !(4 & bitmap), value: value };
  };
  var _hide = _descriptors
    ? function(object, key, value) {
        return _objectDp.f(object, key, _propertyDesc(1, value));
      }
    : function(object, key, value) {
        object[key] = value;
        return object;
      };
  var hasOwnProperty$1 = {}.hasOwnProperty;
  var _has = function(it, key) {
    return hasOwnProperty$1.call(it, key);
  };
  var id = 0;
  var px = Math.random();
  var _uid = function(key) {
    return "Symbol(".concat(void 0 === key ? "" : key, ")_", (++id + px).toString(36));
  };
  var _redefine = createCommonjsModule(function(module) {
    var SRC = _uid("src");
    var TO_STRING = "toString";
    var $toString = Function[TO_STRING];
    var TPL = ("" + $toString).split(TO_STRING);
    _core.inspectSource = function(it) {
      return $toString.call(it);
    };
    (module.exports = function(O, key, val, safe) {
      var isFunction = "function" == typeof val;
      if (isFunction) _has(val, "name") || _hide(val, "name", key);
      if (O[key] === val) return;
      if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
      if (O === _global) O[key] = val;
      else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) O[key] = val;
      else _hide(O, key, val);
    })(Function.prototype, TO_STRING, function toString() {
      return ("function" == typeof this && this[SRC]) || $toString.call(this);
    });
  });
  var _aFunction = function(it) {
    if ("function" != typeof it) throw TypeError(it + " is not a function!");
    return it;
  };
  var _ctx = function(fn, that, length) {
    _aFunction(fn);
    if (void 0 === that) return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  var PROTOTYPE = "prototype";
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL
      ? _global
      : IS_STATIC
        ? _global[name] || (_global[name] = {})
        : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && void 0 !== target[key];
      out = (own ? target : source)[key];
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && "function" == typeof out ? _ctx(Function.call, out) : out;
      if (target) _redefine(target, key, out, type & $export.U);
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  $export.U = 64;
  $export.R = 128;
  var _export = $export;
  var TYPED = _uid("typed_array");
  var VIEW = _uid("view");
  var ABV = !!(_global.ArrayBuffer && _global.DataView);
  var CONSTR = ABV;
  var i = 0;
  var l = 9;
  var Typed;
  var TypedArrayConstructors = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(
    ","
  );
  while (i < l)
    if ((Typed = _global[TypedArrayConstructors[i++]])) {
      _hide(Typed.prototype, TYPED, true);
      _hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  var _typed = { ABV: ABV, CONSTR: CONSTR, TYPED: TYPED, VIEW: VIEW };
  var _redefineAll = function(target, src, safe) {
    for (var key in src) _redefine(target, key, src[key], safe);
    return target;
  };
  var _anInstance = function(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || (void 0 !== forbiddenField && forbiddenField in it))
      throw TypeError(name + ": incorrect invocation!");
    return it;
  };
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function(it) {
    return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  var min = Math.min;
  var _toLength = function(it) {
    return it > 0 ? min(_toInteger(it), 9007199254740991) : 0;
  };
  var _toIndex = function(it) {
    if (void 0 === it) return 0;
    var number = _toInteger(it);
    var length = _toLength(number);
    if (number !== length) throw RangeError("Wrong length!");
    return length;
  };
  var toString = {}.toString;
  var _cof = function(it) {
    return toString.call(it).slice(8, -1);
  };
  var _iobject = Object("z").propertyIsEnumerable(0)
    ? Object
    : function(it) {
        return "String" == _cof(it) ? it.split("") : Object(it);
      };
  var _defined = function(it) {
    if (void 0 == it) throw TypeError("Can't call method on  " + it);
    return it;
  };
  var _toIobject = function(it) {
    return _iobject(_defined(it));
  };
  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function(index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };
  var _arrayIncludes = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      if (IS_INCLUDES && el != el)
        while (length > index) {
          value = O[index++];
          if (value != value) return true;
        }
      else
        for (; length > index; index++)
          if (IS_INCLUDES || index in O) if (O[index] === el) return IS_INCLUDES || index || 0;
      return !IS_INCLUDES && -1;
    };
  };
  var SHARED = "__core-js_shared__";
  var store = _global[SHARED] || (_global[SHARED] = {});
  var _shared = function(key) {
    return store[key] || (store[key] = {});
  };
  var shared = _shared("keys");
  var _sharedKey = function(key) {
    return shared[key] || (shared[key] = _uid(key));
  };
  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey("IE_PROTO");
  var _objectKeysInternal = function(object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    while (names.length > i) if (_has(O, (key = names[i++]))) ~arrayIndexOf(result, key) || result.push(key);
    return result;
  };
  var _enumBugKeys = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
    ","
  );
  var hiddenKeys = _enumBugKeys.concat("length", "prototype");
  var f$1 =
    Object.getOwnPropertyNames ||
    function getOwnPropertyNames(O) {
      return _objectKeysInternal(O, hiddenKeys);
    };
  var _objectGopn = { f: f$1 };
  var _toObject = function(it) {
    return Object(_defined(it));
  };
  var _arrayFill = function fill(value) {
    var O = _toObject(this);
    var length = _toLength(O.length);
    var aLen = arguments.length;
    var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : void 0, length);
    var end = aLen > 2 ? arguments[2] : void 0;
    var endPos = void 0 === end ? length : _toAbsoluteIndex(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };
  var _wks = createCommonjsModule(function(module) {
    var store = _shared("wks");
    var Symbol = _global.Symbol;
    var USE_SYMBOL = "function" == typeof Symbol;
    var $exports = (module.exports = function(name) {
      return (
        store[name] || (store[name] = (USE_SYMBOL && Symbol[name]) || (USE_SYMBOL ? Symbol : _uid)("Symbol." + name))
      );
    });
    $exports.store = store;
  });
  var def = _objectDp.f;
  var TAG = _wks("toStringTag");
  var _setToStringTag = function(it, tag, stat) {
    if (it && !_has((it = stat ? it : it.prototype), TAG)) def(it, TAG, { configurable: true, value: tag });
  };
  var _typedBuffer = createCommonjsModule(function(module, exports) {
    var gOPN = _objectGopn.f;
    var dP = _objectDp.f;
    var ARRAY_BUFFER = "ArrayBuffer";
    var DATA_VIEW = "DataView";
    var PROTOTYPE = "prototype";
    var WRONG_LENGTH = "Wrong length!";
    var WRONG_INDEX = "Wrong index!";
    var $ArrayBuffer = _global[ARRAY_BUFFER];
    var $DataView = _global[DATA_VIEW];
    var Math = _global.Math;
    var RangeError = _global.RangeError;
    var Infinity = _global.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = "buffer";
    var BYTE_LENGTH = "byteLength";
    var BYTE_OFFSET = "byteOffset";
    var $BUFFER = _descriptors ? "_b" : BUFFER;
    var $LENGTH = _descriptors ? "_l" : BYTE_LENGTH;
    var $OFFSET = _descriptors ? "_o" : BYTE_OFFSET;
    function packIEEE754(value, mLen, nBytes) {
      var buffer = Array(nBytes);
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = 23 === mLen ? pow(2, -24) - pow(2, -77) : 0;
      var i = 0;
      var s = value < 0 || (0 === value && 1 / value < 0) ? 1 : 0;
      var e, m, c;
      value = abs(value);
      if (value != value || value === Infinity) {
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);
        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * pow(2, 1 - eBias);
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e += eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[i++] = 255 & m, m /= 256, mLen -= 8);
      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[i++] = 255 & e, e /= 256, eLen -= 8);
      buffer[--i] |= 128 * s;
      return buffer;
    }
    function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = eLen - 7;
      var i = nBytes - 1;
      var s = buffer[i--];
      var e = 127 & s;
      var m;
      s >>= 7;
      for (; nBits > 0; e = 256 * e + buffer[i], i--, nBits -= 8);
      m = e & ((1 << -nBits) - 1);
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = 256 * m + buffer[i], i--, nBits -= 8);
      if (0 === e) e = 1 - eBias;
      else if (e === eMax) return m ? NaN : s ? -Infinity : Infinity;
      else {
        m += pow(2, mLen);
        e -= eBias;
      }
      return (s ? -1 : 1) * m * pow(2, e - mLen);
    }
    function unpackI32(bytes) {
      return (bytes[3] << 24) | (bytes[2] << 16) | (bytes[1] << 8) | bytes[0];
    }
    function packI8(it) {
      return [255 & it];
    }
    function packI16(it) {
      return [255 & it, (it >> 8) & 255];
    }
    function packI32(it) {
      return [255 & it, (it >> 8) & 255, (it >> 16) & 255, (it >> 24) & 255];
    }
    function packF64(it) {
      return packIEEE754(it, 52, 8);
    }
    function packF32(it) {
      return packIEEE754(it, 23, 4);
    }
    function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, {
        get: function() {
          return this[internal];
        }
      });
    }
    function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index;
      var intIndex = _toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    }
    function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index;
      var intIndex = _toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = conversion(+value);
      for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
    }
    if (!_typed.ABV) {
      $ArrayBuffer = function ArrayBuffer(length) {
        _anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = _toIndex(length);
        this._b = _arrayFill.call(Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };
      $DataView = function DataView(buffer, byteOffset, byteLength) {
        _anInstance(this, $DataView, DATA_VIEW);
        _anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = _toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError("Wrong offset!");
        byteLength = void 0 === byteLength ? bufferLength - offset : _toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };
      if (_descriptors) {
        addGetter($ArrayBuffer, BYTE_LENGTH, "_l");
        addGetter($DataView, BUFFER, "_b");
        addGetter($DataView, BYTE_LENGTH, "_l");
        addGetter($DataView, BYTE_OFFSET, "_o");
      }
      _redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return (get(this, 1, byteOffset)[0] << 24) >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (((bytes[1] << 8) | bytes[0]) << 16) >> 16;
        },
        getUint16: function getUint16(byteOffset) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8) | bytes[0];
        },
        getInt32: function getInt32(byteOffset) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    } else {
      if (
        !_fails(function() {
          $ArrayBuffer(1);
        }) ||
        !_fails(function() {
          new $ArrayBuffer(-1);
        }) ||
        _fails(function() {
          new $ArrayBuffer();
          new $ArrayBuffer(1.5);
          new $ArrayBuffer(NaN);
          return $ArrayBuffer.name != ARRAY_BUFFER;
        })
      ) {
        $ArrayBuffer = function ArrayBuffer(length) {
          _anInstance(this, $ArrayBuffer);
          return new BaseBuffer(_toIndex(length));
        };
        var ArrayBufferProto = ($ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE]);
        for (var key, keys = gOPN(BaseBuffer), j = 0; keys.length > j; )
          if (!((key = keys[j++]) in $ArrayBuffer)) _hide($ArrayBuffer, key, BaseBuffer[key]);
        ArrayBufferProto.constructor = $ArrayBuffer;
      }
      var view = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      if (view.getInt8(0) || !view.getInt8(1))
        _redefineAll(
          $DataView[PROTOTYPE],
          {
            setInt8: function setInt8(byteOffset, value) {
              $setInt8.call(this, byteOffset, (value << 24) >> 24);
            },
            setUint8: function setUint8(byteOffset, value) {
              $setInt8.call(this, byteOffset, (value << 24) >> 24);
            }
          },
          true
        );
    }
    _setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    _setToStringTag($DataView, DATA_VIEW);
    _hide($DataView[PROTOTYPE], _typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
  });
  var TAG$1 = _wks("toStringTag");
  var ARG =
    "Arguments" ==
    _cof(
      (function() {
        return arguments;
      })()
    );
  var tryGet = function(it, key) {
    try {
      return it[key];
    } catch (e) {}
  };
  var _classof = function(it) {
    var O, T, B;
    return void 0 === it
      ? "Undefined"
      : null === it
        ? "Null"
        : "string" == typeof (T = tryGet((O = Object(it)), TAG$1))
          ? T
          : ARG
            ? _cof(O)
            : "Object" == (B = _cof(O)) && "function" == typeof O.callee
              ? "Arguments"
              : B;
  };
  var _iterators = {};
  var ITERATOR = _wks("iterator");
  var ArrayProto = Array.prototype;
  var _isArrayIter = function(it) {
    return void 0 !== it && (_iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  var _objectKeys =
    Object.keys ||
    function keys(O) {
      return _objectKeysInternal(O, _enumBugKeys);
    };
  var _objectDps = _descriptors
    ? Object.defineProperties
    : function defineProperties(O, Properties) {
        _anObject(O);
        var keys = _objectKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;
        while (length > i) _objectDp.f(O, (P = keys[i++]), Properties[P]);
        return O;
      };
  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;
  var IE_PROTO$1 = _sharedKey("IE_PROTO");
  var Empty = function() {};
  var PROTOTYPE$1 = "prototype";
  var createDict = function() {
    var iframe = _domCreate("iframe");
    var i = _enumBugKeys.length;
    var lt = "<";
    var gt = ">";
    var iframeDocument;
    iframe.style.display = "none";
    _html.appendChild(iframe);
    iframe.src = "javascript:";
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };
  var _objectCreate =
    Object.create ||
    function create(O, Properties) {
      var result;
      if (null !== O) {
        Empty[PROTOTYPE$1] = _anObject(O);
        result = new Empty();
        Empty[PROTOTYPE$1] = null;
        result[IE_PROTO$1] = O;
      } else result = createDict();
      return void 0 === Properties ? result : _objectDps(result, Properties);
    };
  var IE_PROTO$2 = _sharedKey("IE_PROTO");
  var ObjectProto = Object.prototype;
  var _objectGpo =
    Object.getPrototypeOf ||
    function(O) {
      O = _toObject(O);
      if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
      if ("function" == typeof O.constructor && O instanceof O.constructor) return O.constructor.prototype;
      return O instanceof Object ? ObjectProto : null;
    };
  var ITERATOR$1 = _wks("iterator");
  var core_getIteratorMethod = (_core.getIteratorMethod = function(it) {
    if (void 0 != it) return it[ITERATOR$1] || it["@@iterator"] || _iterators[_classof(it)];
  });
  var _isArray =
    Array.isArray ||
    function isArray(arg) {
      return "Array" == _cof(arg);
    };
  var SPECIES = _wks("species");
  var _arraySpeciesConstructor = function(original) {
    var C;
    if (_isArray(original)) {
      C = original.constructor;
      if ("function" == typeof C && (C === Array || _isArray(C.prototype))) C = void 0;
      if (_isObject(C)) {
        C = C[SPECIES];
        if (null === C) C = void 0;
      }
    }
    return void 0 === C ? Array : C;
  };
  var _arraySpeciesCreate = function(original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };
  var _arrayMethods = function(TYPE, $create) {
    var IS_MAP = 1 == TYPE;
    var IS_FILTER = 2 == TYPE;
    var IS_SOME = 3 == TYPE;
    var IS_EVERY = 4 == TYPE;
    var IS_FIND_INDEX = 6 == TYPE;
    var NO_HOLES = 5 == TYPE || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
      var val, res;
      for (; length > index; index++)
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE)
            if (IS_MAP) result[index] = res;
            else if (res)
              switch (TYPE) {
                case 3:
                  return true;
                case 5:
                  return val;
                case 6:
                  return index;
                case 2:
                  result.push(val);
              }
            else if (IS_EVERY) return false;
        }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
  var SPECIES$1 = _wks("species");
  var _speciesConstructor = function(O, D) {
    var C = _anObject(O).constructor;
    var S;
    return void 0 === C || void 0 == (S = _anObject(C)[SPECIES$1]) ? D : _aFunction(S);
  };
  var UNSCOPABLES = _wks("unscopables");
  var ArrayProto$1 = Array.prototype;
  if (void 0 == ArrayProto$1[UNSCOPABLES]) _hide(ArrayProto$1, UNSCOPABLES, {});
  var _addToUnscopables = function(key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };
  var _iterStep = function(done, value) {
    return { value: value, done: !!done };
  };
  var IteratorPrototype = {};
  _hide(IteratorPrototype, _wks("iterator"), function() {
    return this;
  });
  var _iterCreate = function(Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + " Iterator");
  };
  var ITERATOR$2 = _wks("iterator");
  var BUGGY = !([].keys && "next" in [].keys());
  var FF_ITERATOR = "@@iterator";
  var KEYS = "keys";
  var VALUES = "values";
  var returnThis = function() {
    return this;
  };
  var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + " Iterator";
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR$2] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? (!DEF_VALUES ? $default : getMethod("entries")) : void 0;
    var $anyNative = "Array" == NAME ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        _setToStringTag(IteratorPrototype, TAG, true);
        if (!_library && !_has(IteratorPrototype, ITERATOR$2)) _hide(IteratorPrototype, ITERATOR$2, returnThis);
      }
    }
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR$2])) _hide(proto, ITERATOR$2, $default);
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) {
        for (key in methods) if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  var es6_array_iterator = _iterDefine(
    Array,
    "Array",
    function(iterated, kind) {
      this._t = _toIobject(iterated);
      this._i = 0;
      this._k = kind;
    },
    function() {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = void 0;
        return _iterStep(1);
      }
      if ("keys" == kind) return _iterStep(0, index);
      if ("values" == kind) return _iterStep(0, O[index]);
      return _iterStep(0, [index, O[index]]);
    },
    "values"
  );
  _iterators.Arguments = _iterators.Array;
  _addToUnscopables("keys");
  _addToUnscopables("values");
  _addToUnscopables("entries");
  var ITERATOR$3 = _wks("iterator");
  var SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR$3]();
    riter["return"] = function() {
      SAFE_CLOSING = true;
    };
  } catch (e) {}
  var _iterDetect = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function() {
        return { done: (safe = true) };
      };
      arr[ITERATOR$3] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  var SPECIES$2 = _wks("species");
  var _setSpecies = function(KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$2])
      _objectDp.f(C, SPECIES$2, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  var _arrayCopyWithin =
    [].copyWithin ||
    function copyWithin(target, start) {
      var O = _toObject(this);
      var len = _toLength(O.length);
      var to = _toAbsoluteIndex(target, len);
      var from = _toAbsoluteIndex(start, len);
      var end = arguments.length > 2 ? arguments[2] : void 0;
      var count = Math.min((void 0 === end ? len : _toAbsoluteIndex(end, len)) - from, len - to);
      var inc = 1;
      if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
      }
      while (count-- > 0) {
        if (from in O) O[to] = O[from];
        else delete O[to];
        to += inc;
        from += inc;
      }
      return O;
    };
  var f$2 = {}.propertyIsEnumerable;
  var _objectPie = { f: f$2 };
  var gOPD = Object.getOwnPropertyDescriptor;
  var f$3 = _descriptors
    ? gOPD
    : function getOwnPropertyDescriptor(O, P) {
        O = _toIobject(O);
        P = _toPrimitive(P, true);
        if (_ie8DomDefine)
          try {
            return gOPD(O, P);
          } catch (e) {}
        if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
      };
  var _objectGopd = { f: f$3 };
  var _typedArray = createCommonjsModule(function(module) {
    if (_descriptors) {
      var global = _global;
      var fails = _fails;
      var $export = _export;
      var $typed = _typed;
      var $buffer = _typedBuffer;
      var ctx = _ctx;
      var anInstance = _anInstance;
      var propertyDesc = _propertyDesc;
      var hide = _hide;
      var redefineAll = _redefineAll;
      var toInteger = _toInteger;
      var toLength = _toLength;
      var toIndex = _toIndex;
      var toAbsoluteIndex = _toAbsoluteIndex;
      var toPrimitive = _toPrimitive;
      var has = _has;
      var classof = _classof;
      var isObject = _isObject;
      var toObject = _toObject;
      var isArrayIter = _isArrayIter;
      var create = _objectCreate;
      var getPrototypeOf = _objectGpo;
      var gOPN = _objectGopn.f;
      var getIterFn = core_getIteratorMethod;
      var uid = _uid;
      var wks = _wks;
      var createArrayMethod = _arrayMethods;
      var createArrayIncludes = _arrayIncludes;
      var speciesConstructor = _speciesConstructor;
      var ArrayIterators = es6_array_iterator;
      var Iterators = _iterators;
      var $iterDetect = _iterDetect;
      var setSpecies = _setSpecies;
      var arrayFill = _arrayFill;
      var arrayCopyWithin = _arrayCopyWithin;
      var $DP = _objectDp;
      var $GOPD = _objectGopd;
      var dP = $DP.f;
      var gOPD = $GOPD.f;
      var RangeError = global.RangeError;
      var TypeError = global.TypeError;
      var Uint8Array = global.Uint8Array;
      var ARRAY_BUFFER = "ArrayBuffer";
      var SHARED_BUFFER = "Shared" + ARRAY_BUFFER;
      var BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
      var PROTOTYPE = "prototype";
      var ArrayProto = Array[PROTOTYPE];
      var $ArrayBuffer = $buffer.ArrayBuffer;
      var $DataView = $buffer.DataView;
      var arrayForEach = createArrayMethod(0);
      var arrayFilter = createArrayMethod(2);
      var arraySome = createArrayMethod(3);
      var arrayEvery = createArrayMethod(4);
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var arrayIncludes = createArrayIncludes(true);
      var arrayIndexOf = createArrayIncludes(false);
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var arrayLastIndexOf = ArrayProto.lastIndexOf;
      var arrayReduce = ArrayProto.reduce;
      var arrayReduceRight = ArrayProto.reduceRight;
      var arrayJoin = ArrayProto.join;
      var arraySort = ArrayProto.sort;
      var arraySlice = ArrayProto.slice;
      var arrayToString = ArrayProto.toString;
      var arrayToLocaleString = ArrayProto.toLocaleString;
      var ITERATOR = wks("iterator");
      var TAG = wks("toStringTag");
      var TYPED_CONSTRUCTOR = uid("typed_constructor");
      var DEF_CONSTRUCTOR = uid("def_constructor");
      var ALL_CONSTRUCTORS = $typed.CONSTR;
      var TYPED_ARRAY = $typed.TYPED;
      var VIEW = $typed.VIEW;
      var WRONG_LENGTH = "Wrong length!";
      var $map = createArrayMethod(1, function(O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });
      var LITTLE_ENDIAN = fails(function() {
        return 1 === new Uint8Array(new Uint16Array([1]).buffer)[0];
      });
      var FORCED_SET =
        !!Uint8Array &&
        !!Uint8Array[PROTOTYPE].set &&
        fails(function() {
          new Uint8Array(1).set({});
        });
      var toOffset = function(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError("Wrong offset!");
        return offset;
      };
      var validate = function(it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + " is not a typed array!");
      };
      var allocate = function(C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) throw TypeError("It is not a typed array constructor!");
        return new C(length);
      };
      var speciesFromList = function(O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };
      var fromList = function(C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);
        while (length > index) result[index] = list[index++];
        return result;
      };
      var addGetter = function(it, key, internal) {
        dP(it, key, {
          get: function() {
            return this._d[internal];
          }
        });
      };
      var $from = function from(source) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : void 0;
        var mapping = void 0 !== mapfn;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;
        if (void 0 != iterFn && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++)
            values.push(step.value);
          O = values;
        }
        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++)
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        return result;
      };
      var $of = function of() {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);
        while (length > index) result[index] = arguments[index++];
        return result;
      };
      var TO_LOCALE_BUG =
        !!Uint8Array &&
        fails(function() {
          arrayToLocaleString.call(new Uint8Array(1));
        });
      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };
      var proto = {
        copyWithin: function copyWithin(target, start) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : void 0);
        },
        every: function every(callbackfn) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        },
        fill: function fill(value) {
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn) {
          return speciesFromList(
            this,
            arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0)
          );
        },
        find: function find(predicate) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
        },
        findIndex: function findIndex(predicate) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
        },
        forEach: function forEach(callbackfn) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        },
        indexOf: function indexOf(searchElement) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
        },
        includes: function includes(searchElement) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
        },
        join: function join(separator) {
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement) {
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : void 0);
        },
        reduce: function reduce(callbackfn) {
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn) {
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this;
          var length = validate(that).length;
          var middle = Math.floor(length / 2);
          var index = 0;
          var value;
          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          }
          return that;
        },
        some: function some(callbackfn) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this);
          var length = O.length;
          var $begin = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
            O.buffer,
            O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
            toLength((void 0 === end ? length : toAbsoluteIndex(end, length)) - $begin)
          );
        }
      };
      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };
      var $set = function set(arrayLike) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);
        while (index < len) this[offset + index] = src[index++];
      };
      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };
      var isTAIndex = function(target, key) {
        return (
          isObject(target) &&
          target[TYPED_ARRAY] &&
          "symbol" != typeof key &&
          key in target &&
          String(+key) == String(key)
        );
      };
      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, (key = toPrimitive(key, true))) ? propertyDesc(2, target[key]) : gOPD(target, key);
      };
      var $setDesc = function defineProperty(target, key, desc) {
        if (
          isTAIndex(target, (key = toPrimitive(key, true))) &&
          isObject(desc) &&
          has(desc, "value") &&
          !has(desc, "get") &&
          !has(desc, "set") &&
          !desc.configurable &&
          (!has(desc, "writable") || desc.writable) &&
          (!has(desc, "enumerable") || desc.enumerable)
        ) {
          target[key] = desc.value;
          return target;
        }
        return dP(target, key, desc);
      };
      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }
      $export($export.S + $export.F * !ALL_CONSTRUCTORS, "Object", {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });
      if (
        fails(function() {
          arrayToString.call({});
        })
      )
        arrayToString = arrayToLocaleString = function toString() {
          return arrayJoin.call(this);
        };
      var $TypedArrayPrototype$ = redefineAll({}, proto);
      redefineAll($TypedArrayPrototype$, $iterators);
      hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function() {},
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, "buffer", "b");
      addGetter($TypedArrayPrototype$, "byteOffset", "o");
      addGetter($TypedArrayPrototype$, "byteLength", "l");
      addGetter($TypedArrayPrototype$, "length", "e");
      dP($TypedArrayPrototype$, TAG, {
        get: function() {
          return this[TYPED_ARRAY];
        }
      });
      module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? "Clamped" : "") + "Array";
        var GETTER = "get" + KEY;
        var SETTER = "set" + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
        var getter = function(that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };
        var setter = function(that, index, value) {
          var data = that._d;
          if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 255 ? 255 : 255 & value;
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };
        var addElement = function(that, index) {
          dP(that, index, {
            get: function() {
              return getter(this, index);
            },
            set: function(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };
        if (FORCED) {
          TypedArray = wrapper(function(that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME, "_d");
            var index = 0;
            var offset = 0;
            var buffer, byteLength, length, klass;
            if (!isObject(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            } else if (
              data instanceof $ArrayBuffer ||
              (klass = classof(data)) == ARRAY_BUFFER ||
              klass == SHARED_BUFFER
            ) {
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;
              if (void 0 === $length) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }
              length = byteLength / BYTES;
            } else if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            else return $from.call(TypedArray, data);
            hide(that, "_d", { b: buffer, o: offset, l: byteLength, e: length, v: new $DataView(buffer) });
            while (index < length) addElement(that, index++);
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide(TypedArrayPrototype, "constructor", TypedArray);
        } else if (
          !fails(function() {
            TypedArray(1);
          }) ||
          !fails(function() {
            new TypedArray(-1);
          }) ||
          !$iterDetect(function(iter) {
            new TypedArray();
            new TypedArray(null);
            new TypedArray(1.5);
            new TypedArray(iter);
          }, true)
        ) {
          TypedArray = wrapper(function(that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME);
            var klass;
            if (!isObject(data)) return new Base(toIndex(data));
            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER)
              return void 0 !== $length
                ? new Base(data, toOffset($offset, BYTES), $length)
                : void 0 !== $offset
                  ? new Base(data, toOffset($offset, BYTES))
                  : new Base(data);
            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
            if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          TypedArrayPrototype.constructor = TypedArray;
        }
        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME =
          !!$nativeIterator && ("values" == $nativeIterator.name || void 0 == $nativeIterator.name);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype))
          dP(TypedArrayPrototype, TAG, {
            get: function() {
              return NAME;
            }
          });
        O[NAME] = TypedArray;
        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
        $export($export.S, NAME, { BYTES_PER_ELEMENT: BYTES });
        $export(
          $export.S +
            $export.F *
              fails(function() {
                Base.of.call(TypedArray, 1);
              }),
          NAME,
          { from: $from, of: $of }
        );
        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
        $export($export.P, NAME, proto);
        setSpecies(NAME);
        $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
        if (TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
        $export(
          $export.P +
            $export.F *
              fails(function() {
                new TypedArray(1).slice();
              }),
          NAME,
          { slice: $slice }
        );
        $export(
          $export.P +
            $export.F *
              (fails(function() {
                return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
              }) ||
                !fails(function() {
                  TypedArrayPrototype.toLocaleString.call([1, 2]);
                })),
          NAME,
          { toLocaleString: $toLocaleString }
        );
        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function() {};
  });
  _typedArray(
    "Uint8",
    1,
    function(init) {
      return function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      };
    },
    true
  );
  var ITERATOR$4 = _wks("iterator");
  var TO_STRING_TAG = _wks("toStringTag");
  var ArrayValues = _iterators.Array;
  var DOMIterables = {
    CSSRuleList: true,
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true,
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true,
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };
  for (var collections = _objectKeys(DOMIterables), i$1 = 0; i$1 < collections.length; i$1++) {
    var NAME = collections[i$1];
    var explicit = DOMIterables[NAME];
    var Collection = _global[NAME];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
      if (!proto[ITERATOR$4]) _hide(proto, ITERATOR$4, ArrayValues);
      if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
      _iterators[NAME] = ArrayValues;
      if (explicit)
        for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
    }
  }
  var _stringAt = function(TO_STRING) {
    return function(that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? "" : void 0;
      a = s.charCodeAt(i);
      return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343
        ? TO_STRING
          ? s.charAt(i)
          : a
        : TO_STRING
          ? s.slice(i, i + 2)
          : ((a - 55296) << 10) + (b - 56320) + 65536;
    };
  };
  var $at = _stringAt(true);
  _iterDefine(
    String,
    "String",
    function(iterated) {
      this._t = String(iterated);
      this._i = 0;
    },
    function() {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return { value: void 0, done: true };
      point = $at(O, index);
      this._i += point.length;
      return { value: point, done: false };
    }
  );
  var _fixReWks = function(KEY, length, exec) {
    var SYMBOL = _wks(KEY);
    var fns = exec(_defined, SYMBOL, ""[KEY]);
    var strfn = fns[0];
    var rxfn = fns[1];
    if (
      _fails(function() {
        var O = {};
        O[SYMBOL] = function() {
          return 7;
        };
        return 7 != ""[KEY](O);
      })
    ) {
      _redefine(String.prototype, KEY, strfn);
      _hide(
        RegExp.prototype,
        SYMBOL,
        2 == length
          ? function(string, arg) {
              return rxfn.call(string, this, arg);
            }
          : function(string) {
              return rxfn.call(string, this);
            }
      );
    }
  };
  var MATCH = _wks("match");
  var _isRegexp = function(it) {
    var isRegExp;
    return _isObject(it) && (void 0 !== (isRegExp = it[MATCH]) ? !!isRegExp : "RegExp" == _cof(it));
  };
  _fixReWks("split", 2, function(defined, SPLIT, $split) {
    var isRegExp = _isRegexp;
    var _split = $split;
    var $push = [].push;
    var $SPLIT = "split";
    var LENGTH = "length";
    var LAST_INDEX = "lastIndex";
    if (
      "c" == "abbc"[$SPLIT](/(b)*/)[1] ||
      4 != "test"[$SPLIT](/(?:)/, -1)[LENGTH] ||
      2 != "ab"[$SPLIT](/(?:ab)*/)[LENGTH] ||
      4 != "."[$SPLIT](/(.?)(.?)/)[LENGTH] ||
      "."[$SPLIT](/()()/)[LENGTH] > 1 ||
      ""[$SPLIT](/.?/)[LENGTH]
    ) {
      var NPCG = void 0 === /()??/.exec("")[1];
      $split = function(separator, limit) {
        var string = String(this);
        if (void 0 === separator && 0 === limit) return [];
        if (!isRegExp(separator)) return _split.call(string, separator, limit);
        var output = [];
        var flags =
          (separator.ignoreCase ? "i" : "") +
          (separator.multiline ? "m" : "") +
          (separator.unicode ? "u" : "") +
          (separator.sticky ? "y" : "");
        var lastLastIndex = 0;
        var splitLimit = void 0 === limit ? 4294967295 : limit >>> 0;
        var separatorCopy = new RegExp(separator.source, flags + "g");
        var separator2, match, lastIndex, lastLength, i;
        if (!NPCG) separator2 = new RegExp("^" + separatorCopy.source + "$(?!\\s)", flags);
        while ((match = separatorCopy.exec(string))) {
          lastIndex = match.index + match[0][LENGTH];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (!NPCG && match[LENGTH] > 1)
              match[0].replace(separator2, function() {
                for (i = 1; i < arguments[LENGTH] - 2; i++) if (void 0 === arguments[i]) match[i] = void 0;
              });
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++;
        }
        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test("")) output.push("");
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
    } else if ("0"[$SPLIT](void 0, 0)[LENGTH])
      $split = function(separator, limit) {
        return void 0 === separator && 0 === limit ? [] : _split.call(this, separator, limit);
      };
    return [
      function split(separator, limit) {
        var O = defined(this);
        var fn = void 0 == separator ? void 0 : separator[SPLIT];
        return void 0 !== fn ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
      },
      $split
    ];
  });
  var _strictMethod = function(method, arg) {
    return (
      !!method &&
      _fails(function() {
        arg ? method.call(null, function() {}, 1) : method.call(null);
      })
    );
  };
  var $filter = _arrayMethods(2);
  _export(_export.P + _export.F * !_strictMethod([].filter, true), "Array", {
    filter: function filter(callbackfn) {
      return $filter(this, callbackfn, arguments[1]);
    }
  });
  var _stringWs = "\t\n\v\f\r   ᠎    " + "         　\u2028\u2029\ufeff";
  var space = "[" + _stringWs + "]";
  var non = "​";
  var ltrim = RegExp("^" + space + space + "*");
  var rtrim = RegExp(space + space + "*$");
  var exporter = function(KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = _fails(function() {
      return !!_stringWs[KEY]() || non[KEY]() != non;
    });
    var fn = (exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY]);
    if (ALIAS) exp[ALIAS] = fn;
    _export(_export.P + _export.F * FORCE, "String", exp);
  };
  var trim = (exporter.trim = function(string, TYPE) {
    string = String(_defined(string));
    if (1 & TYPE) string = string.replace(ltrim, "");
    if (2 & TYPE) string = string.replace(rtrim, "");
    return string;
  });
  var _stringTrim = exporter;
  _stringTrim("trim", function($trim) {
    return function trim() {
      return $trim(this, 3);
    };
  });
  var _iterCall = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator["return"];
      if (void 0 !== ret) _anObject(ret.call(iterator));
      throw e;
    }
  };
  var _forOf = createCommonjsModule(function(module) {
    var BREAK = {};
    var RETURN = {};
    var exports = (module.exports = function(iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR
        ? function() {
            return iterable;
          }
        : core_getIteratorMethod(iterable);
      var f = _ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if ("function" != typeof iterFn) throw TypeError(iterable + " is not iterable!");
      if (_isArrayIter(iterFn))
        for (length = _toLength(iterable.length); length > index; index++) {
          result = entries ? f(_anObject((step = iterable[index]))[0], step[1]) : f(iterable[index]);
          if (result === BREAK || result === RETURN) return result;
        }
      else
        for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
          result = _iterCall(iterator, f, step.value, entries);
          if (result === BREAK || result === RETURN) return result;
        }
    });
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });
  var _invoke = function(fn, args, that) {
    var un = void 0 === that;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  var process = _global.process;
  var setTask = _global.setImmediate;
  var clearTask = _global.clearImmediate;
  var MessageChannel = _global.MessageChannel;
  var Dispatch = _global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = "onreadystatechange";
  var defer, channel, port;
  var run = function() {
    var id = +this;
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function(event) {
    run.call(event.data);
  };
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue[++counter] = function() {
        _invoke("function" == typeof fn ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    if ("process" == _cof(process))
      defer = function(id) {
        process.nextTick(_ctx(run, id, 1));
      };
    else if (Dispatch && Dispatch.now)
      defer = function(id) {
        Dispatch.now(_ctx(run, id, 1));
      };
    else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = _ctx(port.postMessage, port, 1);
    } else if (_global.addEventListener && "function" == typeof postMessage && !_global.importScripts) {
      defer = function(id) {
        _global.postMessage(id + "", "*");
      };
      _global.addEventListener("message", listener, false);
    } else if (ONREADYSTATECHANGE in _domCreate("script"))
      defer = function(id) {
        _html.appendChild(_domCreate("script"))[ONREADYSTATECHANGE] = function() {
          _html.removeChild(this);
          run.call(id);
        };
      };
    else
      defer = function(id) {
        setTimeout(_ctx(run, id, 1), 0);
      };
  }
  var _task = { set: setTask, clear: clearTask };
  var macrotask = _task.set;
  var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
  var process$1 = _global.process;
  var Promise$1 = _global.Promise;
  var isNode = "process" == _cof(process$1);
  var _microtask = function() {
    var head, last, notify;
    var flush = function() {
      var parent, fn;
      if (isNode && (parent = process$1.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) notify();
          else last = void 0;
          throw e;
        }
      }
      last = void 0;
      if (parent) parent.enter();
    };
    if (isNode)
      notify = function() {
        process$1.nextTick(flush);
      };
    else if (Observer) {
      var toggle = true;
      var node = document.createTextNode("");
      new Observer(flush).observe(node, { characterData: true });
      notify = function() {
        node.data = toggle = !toggle;
      };
    } else if (Promise$1 && Promise$1.resolve) {
      var promise = Promise$1.resolve();
      notify = function() {
        promise.then(flush);
      };
    } else
      notify = function() {
        macrotask.call(_global, flush);
      };
    return function(fn) {
      var task = { fn: fn, next: void 0 };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  };
  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
      if (void 0 !== resolve || void 0 !== reject) throw TypeError("Bad Promise constructor");
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
  }
  var f$4 = function(C) {
    return new PromiseCapability(C);
  };
  var _newPromiseCapability = { f: f$4 };
  var _perform = function(exec) {
    try {
      return { e: false, v: exec() };
    } catch (e) {
      return { e: true, v: e };
    }
  };
  var _promiseResolve = function(C, x) {
    _anObject(C);
    if (_isObject(x) && x.constructor === C) return x;
    var promiseCapability = _newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };
  var task = _task.set;
  var microtask = _microtask();
  var PROMISE = "Promise";
  var TypeError$1 = _global.TypeError;
  var process$2 = _global.process;
  var $Promise = _global[PROMISE];
  var isNode$1 = "process" == _classof(process$2);
  var empty = function() {};
  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = (newGenericPromiseCapability = _newPromiseCapability.f);
  var USE_NATIVE = !!(function() {
    try {
      var promise = $Promise.resolve(1);
      var FakePromise = ((promise.constructor = {})[_wks("species")] = function(exec) {
        exec(empty, empty);
      });
      return (isNode$1 || "function" == typeof PromiseRejectionEvent) && promise.then(empty) instanceof FakePromise;
    } catch (e) {}
  })();
  var isThenable = function(it) {
    var then;
    return _isObject(it) && "function" == typeof (then = it.then) ? then : false;
  };
  var notify = function(promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function() {
      var value = promise._v;
      var ok = 1 == promise._s;
      var i = 0;
      var run = function(reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then;
        try {
          if (handler) {
            if (!ok) {
              if (2 == promise._h) onHandleUnhandled(promise);
              promise._h = 1;
            }
            if (true === handler) result = value;
            else {
              if (domain) domain.enter();
              result = handler(value);
              if (domain) domain.exit();
            }
            if (result === reaction.promise) reject(TypeError$1("Promise-chain cycle"));
            else if ((then = isThenable(result))) then.call(result, resolve, reject);
            else resolve(result);
          } else reject(value);
        } catch (e) {
          reject(e);
        }
      };
      while (chain.length > i) run(chain[i++]);
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };
  var onUnhandled = function(promise) {
    task.call(_global, function() {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;
      if (unhandled) {
        result = _perform(function() {
          if (isNode$1) process$2.emit("unhandledRejection", value, promise);
          else if ((handler = _global.onunhandledrejection)) handler({ promise: promise, reason: value });
          else if ((console = _global.console) && console.error) console.error("Unhandled promise rejection", value);
        });
        promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
      }
      promise._a = void 0;
      if (unhandled && result.e) throw result.v;
    });
  };
  var isUnhandled = function(promise) {
    if (1 == promise._h) return false;
    var chain = promise._a || promise._c;
    var i = 0;
    var reaction;
    while (chain.length > i) {
      reaction = chain[i++];
      if (reaction.fail || !isUnhandled(reaction.promise)) return false;
    }
    return true;
  };
  var onHandleUnhandled = function(promise) {
    task.call(_global, function() {
      var handler;
      if (isNode$1) process$2.emit("rejectionHandled", promise);
      else if ((handler = _global.onrejectionhandled)) handler({ promise: promise, reason: promise._v });
    });
  };
  var $reject = function(value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise;
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function(value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise;
    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");
      if ((then = isThenable(value)))
        microtask(function() {
          var wrapper = { _w: promise, _d: false };
          try {
            then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e);
    }
  };
  if (!USE_NATIVE) {
    $Promise = function Promise(executor) {
      _anInstance(this, $Promise, PROMISE, "_h");
      _aFunction(executor);
      Internal.call(this);
      try {
        executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    Internal = function Promise(executor) {
      this._c = [];
      this._a = void 0;
      this._s = 0;
      this._d = false;
      this._v = void 0;
      this._h = 0;
      this._n = false;
    };
    Internal.prototype = _redefineAll($Promise.prototype, {
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
        reaction.ok = "function" == typeof onFulfilled ? onFulfilled : true;
        reaction.fail = "function" == typeof onRejected && onRejected;
        reaction.domain = isNode$1 ? process$2.domain : void 0;
        this._c.push(reaction);
        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      catch: function(onRejected) {
        return this.then(void 0, onRejected);
      }
    });
    OwnPromiseCapability = function() {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = _ctx($resolve, promise, 1);
      this.reject = _ctx($reject, promise, 1);
    };
    _newPromiseCapability.f = newPromiseCapability = function(C) {
      return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
  }
  _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
  _setToStringTag($Promise, PROMISE);
  _setSpecies(PROMISE);
  Wrapper = _core[PROMISE];
  _export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
    resolve: function resolve(x) {
      return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
    }
  });
  _export(
    _export.S +
      _export.F *
        !(
          USE_NATIVE &&
          _iterDetect(function(iter) {
            $Promise.all(iter)["catch"](empty);
          })
        ),
    PROMISE,
    {
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = _perform(function() {
          var values = [];
          var index = 0;
          var remaining = 1;
          _forOf(iterable, false, function(promise) {
            var $index = index++;
            var alreadyCalled = false;
            values.push(void 0);
            remaining++;
            C.resolve(promise).then(function(value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.e) reject(result.v);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = _perform(function() {
          _forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (result.e) reject(result.v);
        return capability.promise;
      }
    }
  );
  !(function() {
    if ("undefined" != typeof window) {
      var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
        e = !!t && parseInt(t[1], 10) >= 16;
      if ("objectFit" in document.documentElement.style != !1 && !e)
        return void (window.objectFitPolyfill = function() {
          return !1;
        });
      var i = function(t) {
          var e = window.getComputedStyle(t, null),
            i = e.getPropertyValue("position"),
            n = e.getPropertyValue("overflow"),
            o = e.getPropertyValue("display");
          (i && "static" !== i) || (t.style.position = "relative"),
            "hidden" !== n && (t.style.overflow = "hidden"),
            (o && "inline" !== o) || (t.style.display = "block"),
            0 === t.clientHeight && (t.style.height = "100%"),
            -1 === t.className.indexOf("object-fit-polyfill") && (t.className = t.className + " object-fit-polyfill");
        },
        n = function(t) {
          var e = window.getComputedStyle(t, null),
            i = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px"
            };
          for (var n in i) e.getPropertyValue(n) !== i[n] && (t.style[n] = i[n]);
        },
        o = function(t, e, i) {
          var n, o, l, a, d;
          if (((i = i.split(" ")), i.length < 2 && (i[1] = i[0]), "x" === t))
            (n = i[0]), (o = i[1]), (l = "left"), (a = "right"), (d = e.clientWidth);
          else {
            if ("y" !== t) return;
            (n = i[1]), (o = i[0]), (l = "top"), (a = "bottom"), (d = e.clientHeight);
          }
          return n === l || o === l
            ? void (e.style[l] = "0")
            : n === a || o === a
              ? void (e.style[a] = "0")
              : "center" === n || "50%" === n
                ? ((e.style[l] = "50%"), void (e.style["margin-" + l] = d / -2 + "px"))
                : n.indexOf("%") >= 0
                  ? ((n = parseInt(n)),
                    void (n < 50
                      ? ((e.style[l] = n + "%"), (e.style["margin-" + l] = d * (n / -100) + "px"))
                      : ((n = 100 - n), (e.style[a] = n + "%"), (e.style["margin-" + a] = d * (n / -100) + "px"))))
                  : void (e.style[l] = n);
        },
        l = function(t) {
          var e = t.dataset ? t.dataset.objectFit : t.getAttribute("data-object-fit"),
            l = t.dataset ? t.dataset.objectPosition : t.getAttribute("data-object-position");
          (e = e || "cover"), (l = l || "50% 50%");
          var a = t.parentNode;
          i(a),
            n(t),
            (t.style.position = "absolute"),
            (t.style.height = "100%"),
            (t.style.width = "auto"),
            "scale-down" === e &&
              ((t.style.height = "auto"),
              t.clientWidth < a.clientWidth && t.clientHeight < a.clientHeight
                ? (o("x", t, l), o("y", t, l))
                : ((e = "contain"), (t.style.height = "100%"))),
            "none" === e
              ? ((t.style.width = "auto"), (t.style.height = "auto"), o("x", t, l), o("y", t, l))
              : ("cover" === e && t.clientWidth > a.clientWidth) || ("contain" === e && t.clientWidth < a.clientWidth)
                ? ((t.style.top = "0"), (t.style.marginTop = "0"), o("x", t, l))
                : "scale-down" !== e &&
                  ((t.style.width = "100%"),
                  (t.style.height = "auto"),
                  (t.style.left = "0"),
                  (t.style.marginLeft = "0"),
                  o("y", t, l));
        },
        a = function(t) {
          if (void 0 === t) t = document.querySelectorAll("[data-object-fit]");
          else if (t && t.nodeName) t = [t];
          else {
            if ("object" != typeof t || !t.length || !t[0].nodeName) return !1;
            t = t;
          }
          for (var i = 0; i < t.length; i++)
            if (t[i].nodeName) {
              var n = t[i].nodeName.toLowerCase();
              "img" !== n || e
                ? "video" === n &&
                  (t[i].readyState > 0
                    ? l(t[i])
                    : t[i].addEventListener("loadedmetadata", function() {
                        l(this);
                      }))
                : t[i].complete
                  ? l(t[i])
                  : t[i].addEventListener("load", function() {
                      l(this);
                    });
            }
          return !0;
        };
      document.addEventListener("DOMContentLoaded", function() {
        a();
      }),
        window.addEventListener("resize", function() {
          a();
        }),
        (window.objectFitPolyfill = a);
    }
  })();
  var logDisabled_ = true;
  var deprecationWarnings_ = true;
  function extractVersion(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
  }
  function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
    if (!window.RTCPeerConnection) return;
    var proto = window.RTCPeerConnection.prototype;
    var nativeAddEventListener = proto.addEventListener;
    proto.addEventListener = function(nativeEventName, cb) {
      if (nativeEventName !== eventNameToWrap) return nativeAddEventListener.apply(this, arguments);
      var wrappedCallback = function(e) {
        var modifiedEvent = wrapper(e);
        if (modifiedEvent) cb(modifiedEvent);
      };
      this._eventMap = this._eventMap || {};
      this._eventMap[cb] = wrappedCallback;
      return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
    };
    var nativeRemoveEventListener = proto.removeEventListener;
    proto.removeEventListener = function(nativeEventName, cb) {
      if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb])
        return nativeRemoveEventListener.apply(this, arguments);
      var unwrappedCb = this._eventMap[cb];
      delete this._eventMap[cb];
      return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
    };
    Object.defineProperty(proto, "on" + eventNameToWrap, {
      get: function() {
        return this["_on" + eventNameToWrap];
      },
      set: function(cb) {
        if (this["_on" + eventNameToWrap]) {
          this.removeEventListener(eventNameToWrap, this["_on" + eventNameToWrap]);
          delete this["_on" + eventNameToWrap];
        }
        if (cb) this.addEventListener(eventNameToWrap, (this["_on" + eventNameToWrap] = cb));
      },
      enumerable: true,
      configurable: true
    });
  }
  var utils = {
    extractVersion: extractVersion,
    wrapPeerConnectionEvent: wrapPeerConnectionEvent,
    disableLog: function(bool) {
      if ("boolean" !== typeof bool) return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
      logDisabled_ = bool;
      return bool ? "adapter.js logging disabled" : "adapter.js logging enabled";
    },
    disableWarnings: function(bool) {
      if ("boolean" !== typeof bool) return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
      deprecationWarnings_ = !bool;
      return "adapter.js deprecation warnings " + (bool ? "disabled" : "enabled");
    },
    log: function() {
      if ("object" === typeof window) {
        if (logDisabled_) return;
        if ("undefined" !== typeof console && "function" === typeof console.log) console.log.apply(console, arguments);
      }
    },
    deprecated: function(oldMethod, newMethod) {
      if (!deprecationWarnings_) return;
      console.warn(oldMethod + " is deprecated, please use " + newMethod + " instead.");
    },
    detectBrowser: function(window) {
      var navigator = window && window.navigator;
      var result = {};
      result.browser = null;
      result.version = null;
      if ("undefined" === typeof window || !window.navigator) {
        result.browser = "Not a browser.";
        return result;
      }
      if (navigator.mozGetUserMedia) {
        result.browser = "firefox";
        result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
      } else if (navigator.webkitGetUserMedia) {
        result.browser = "chrome";
        result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
      } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
        result.browser = "edge";
        result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
      } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
        result.browser = "safari";
        result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
      } else {
        result.browser = "Not a supported browser.";
        return result;
      }
      return result;
    }
  };
  var logging = utils.log;
  var getusermedia = function(window) {
    var browserDetails = utils.detectBrowser(window);
    var navigator = window && window.navigator;
    var constraintsToChrome_ = function(c) {
      if ("object" !== typeof c || c.mandatory || c.optional) return c;
      var cc = {};
      Object.keys(c).forEach(function(key) {
        if ("require" === key || "advanced" === key || "mediaSource" === key) return;
        var r = "object" === typeof c[key] ? c[key] : { ideal: c[key] };
        if (void 0 !== r.exact && "number" === typeof r.exact) r.min = r.max = r.exact;
        var oldname_ = function(prefix, name) {
          if (prefix) return prefix + name.charAt(0).toUpperCase() + name.slice(1);
          return "deviceId" === name ? "sourceId" : name;
        };
        if (void 0 !== r.ideal) {
          cc.optional = cc.optional || [];
          var oc = {};
          if ("number" === typeof r.ideal) {
            oc[oldname_("min", key)] = r.ideal;
            cc.optional.push(oc);
            oc = {};
            oc[oldname_("max", key)] = r.ideal;
            cc.optional.push(oc);
          } else {
            oc[oldname_("", key)] = r.ideal;
            cc.optional.push(oc);
          }
        }
        if (void 0 !== r.exact && "number" !== typeof r.exact) {
          cc.mandatory = cc.mandatory || {};
          cc.mandatory[oldname_("", key)] = r.exact;
        } else
          ["min", "max"].forEach(function(mix) {
            if (void 0 !== r[mix]) {
              cc.mandatory = cc.mandatory || {};
              cc.mandatory[oldname_(mix, key)] = r[mix];
            }
          });
      });
      if (c.advanced) cc.optional = (cc.optional || []).concat(c.advanced);
      return cc;
    };
    var shimConstraints_ = function(constraints, func) {
      if (browserDetails.version >= 61) return func(constraints);
      constraints = JSON.parse(JSON.stringify(constraints));
      if (constraints && "object" === typeof constraints.audio) {
        var remap = function(obj, a, b) {
          if (a in obj && !(b in obj)) {
            obj[b] = obj[a];
            delete obj[a];
          }
        };
        constraints = JSON.parse(JSON.stringify(constraints));
        remap(constraints.audio, "autoGainControl", "googAutoGainControl");
        remap(constraints.audio, "noiseSuppression", "googNoiseSuppression");
        constraints.audio = constraintsToChrome_(constraints.audio);
      }
      if (constraints && "object" === typeof constraints.video) {
        var face = constraints.video.facingMode;
        face = face && ("object" === typeof face ? face : { ideal: face });
        var getSupportedFacingModeLies = browserDetails.version < 66;
        if (
          face &&
          ("user" === face.exact ||
            "environment" === face.exact ||
            "user" === face.ideal ||
            "environment" === face.ideal) &&
          !(
            navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies
          )
        ) {
          delete constraints.video.facingMode;
          var matches;
          if ("environment" === face.exact || "environment" === face.ideal) matches = ["back", "rear"];
          else if ("user" === face.exact || "user" === face.ideal) matches = ["front"];
          if (matches)
            return navigator.mediaDevices.enumerateDevices().then(function(devices) {
              devices = devices.filter(function(d) {
                return "videoinput" === d.kind;
              });
              var dev = devices.find(function(d) {
                return matches.some(function(match) {
                  return -1 !== d.label.toLowerCase().indexOf(match);
                });
              });
              if (!dev && devices.length && -1 !== matches.indexOf("back")) dev = devices[devices.length - 1];
              if (dev) constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
              constraints.video = constraintsToChrome_(constraints.video);
              logging("chrome: " + JSON.stringify(constraints));
              return func(constraints);
            });
        }
        constraints.video = constraintsToChrome_(constraints.video);
      }
      logging("chrome: " + JSON.stringify(constraints));
      return func(constraints);
    };
    var shimError_ = function(e) {
      if (browserDetails.version >= 64) return e;
      return {
        name:
          {
            PermissionDeniedError: "NotAllowedError",
            PermissionDismissedError: "NotAllowedError",
            InvalidStateError: "NotAllowedError",
            DevicesNotFoundError: "NotFoundError",
            ConstraintNotSatisfiedError: "OverconstrainedError",
            TrackStartError: "NotReadableError",
            MediaDeviceFailedDueToShutdown: "NotAllowedError",
            MediaDeviceKillSwitchOn: "NotAllowedError",
            TabCaptureError: "AbortError",
            ScreenCaptureError: "AbortError",
            DeviceCaptureError: "AbortError"
          }[e.name] || e.name,
        message: e.message,
        constraint: e.constraint || e.constraintName,
        toString: function() {
          return this.name + (this.message && ": ") + this.message;
        }
      };
    };
    var getUserMedia_ = function(constraints, onSuccess, onError) {
      shimConstraints_(constraints, function(c) {
        navigator.webkitGetUserMedia(c, onSuccess, function(e) {
          if (onError) onError(shimError_(e));
        });
      });
    };
    navigator.getUserMedia = getUserMedia_;
    var getUserMediaPromise_ = function(constraints) {
      return new Promise(function(resolve, reject) {
        navigator.getUserMedia(constraints, resolve, reject);
      });
    };
    if (!navigator.mediaDevices)
      navigator.mediaDevices = {
        getUserMedia: getUserMediaPromise_,
        enumerateDevices: function() {
          return new Promise(function(resolve) {
            var kinds = { audio: "audioinput", video: "videoinput" };
            return window.MediaStreamTrack.getSources(function(devices) {
              resolve(
                devices.map(function(device) {
                  return { label: device.label, kind: kinds[device.kind], deviceId: device.id, groupId: "" };
                })
              );
            });
          });
        },
        getSupportedConstraints: function() {
          return {
            deviceId: true,
            echoCancellation: true,
            facingMode: true,
            frameRate: true,
            height: true,
            width: true
          };
        }
      };
    if (!navigator.mediaDevices.getUserMedia)
      navigator.mediaDevices.getUserMedia = function(constraints) {
        return getUserMediaPromise_(constraints);
      };
    else {
      var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = function(cs) {
        return shimConstraints_(cs, function(c) {
          return origGetUserMedia(c).then(
            function(stream) {
              if ((c.audio && !stream.getAudioTracks().length) || (c.video && !stream.getVideoTracks().length)) {
                stream.getTracks().forEach(function(track) {
                  track.stop();
                });
                throw new DOMException("", "NotFoundError");
              }
              return stream;
            },
            function(e) {
              return Promise.reject(shimError_(e));
            }
          );
        });
      };
    }
    if ("undefined" === typeof navigator.mediaDevices.addEventListener)
      navigator.mediaDevices.addEventListener = function() {
        logging("Dummy mediaDevices.addEventListener called.");
      };
    if ("undefined" === typeof navigator.mediaDevices.removeEventListener)
      navigator.mediaDevices.removeEventListener = function() {
        logging("Dummy mediaDevices.removeEventListener called.");
      };
  };
  var logging$1 = utils.log;
  function walkStats(stats, base, resultSet) {
    if (!base || resultSet.has(base.id)) return;
    resultSet.set(base.id, base);
    Object.keys(base).forEach(function(name) {
      if (name.endsWith("Id")) walkStats(stats, stats.get(base[name]), resultSet);
      else if (name.endsWith("Ids"))
        base[name].forEach(function(id) {
          walkStats(stats, stats.get(id), resultSet);
        });
    });
  }
  function filterStats(result, track, outbound) {
    var streamStatsType = outbound ? "outbound-rtp" : "inbound-rtp";
    var filteredResult = new Map();
    if (null === track) return filteredResult;
    var trackStats = [];
    result.forEach(function(value) {
      if ("track" === value.type && value.trackIdentifier === track.id) trackStats.push(value);
    });
    trackStats.forEach(function(trackStat) {
      result.forEach(function(stats) {
        if (stats.type === streamStatsType && stats.trackId === trackStat.id) walkStats(result, stats, filteredResult);
      });
    });
    return filteredResult;
  }
  var chrome_shim = {
    shimGetUserMedia: getusermedia,
    shimMediaStream: function(window) {
      window.MediaStream = window.MediaStream || window.webkitMediaStream;
    },
    shimOnTrack: function(window) {
      if (
        "object" === typeof window &&
        window.RTCPeerConnection &&
        !("ontrack" in window.RTCPeerConnection.prototype)
      ) {
        Object.defineProperty(window.RTCPeerConnection.prototype, "ontrack", {
          get: function() {
            return this._ontrack;
          },
          set: function(f) {
            if (this._ontrack) this.removeEventListener("track", this._ontrack);
            this.addEventListener("track", (this._ontrack = f));
          },
          enumerable: true,
          configurable: true
        });
        var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function() {
          var pc = this;
          if (!pc._ontrackpoly) {
            pc._ontrackpoly = function(e) {
              e.stream.addEventListener("addtrack", function(te) {
                var receiver;
                if (window.RTCPeerConnection.prototype.getReceivers)
                  receiver = pc.getReceivers().find(function(r) {
                    return r.track && r.track.id === te.track.id;
                  });
                else receiver = { track: te.track };
                var event = new Event("track");
                event.track = te.track;
                event.receiver = receiver;
                event.transceiver = { receiver: receiver };
                event.streams = [e.stream];
                pc.dispatchEvent(event);
              });
              e.stream.getTracks().forEach(function(track) {
                var receiver;
                if (window.RTCPeerConnection.prototype.getReceivers)
                  receiver = pc.getReceivers().find(function(r) {
                    return r.track && r.track.id === track.id;
                  });
                else receiver = { track: track };
                var event = new Event("track");
                event.track = track;
                event.receiver = receiver;
                event.transceiver = { receiver: receiver };
                event.streams = [e.stream];
                pc.dispatchEvent(event);
              });
            };
            pc.addEventListener("addstream", pc._ontrackpoly);
          }
          return origSetRemoteDescription.apply(pc, arguments);
        };
      } else
        utils.wrapPeerConnectionEvent(window, "track", function(e) {
          if (!e.transceiver) Object.defineProperty(e, "transceiver", { value: { receiver: e.receiver } });
          return e;
        });
    },
    shimGetSendersWithDtmf: function(window) {
      if (
        "object" === typeof window &&
        window.RTCPeerConnection &&
        !("getSenders" in window.RTCPeerConnection.prototype) &&
        "createDTMFSender" in window.RTCPeerConnection.prototype
      ) {
        var shimSenderWithDtmf = function(pc, track) {
          return {
            track: track,
            get dtmf() {
              if (void 0 === this._dtmf)
                if ("audio" === track.kind) this._dtmf = pc.createDTMFSender(track);
                else this._dtmf = null;
              return this._dtmf;
            },
            _pc: pc
          };
        };
        if (!window.RTCPeerConnection.prototype.getSenders) {
          window.RTCPeerConnection.prototype.getSenders = function() {
            this._senders = this._senders || [];
            return this._senders.slice();
          };
          var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
          window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
            var pc = this;
            var sender = origAddTrack.apply(pc, arguments);
            if (!sender) {
              sender = shimSenderWithDtmf(pc, track);
              pc._senders.push(sender);
            }
            return sender;
          };
          var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
          window.RTCPeerConnection.prototype.removeTrack = function(sender) {
            var pc = this;
            origRemoveTrack.apply(pc, arguments);
            var idx = pc._senders.indexOf(sender);
            if (-1 !== idx) pc._senders.splice(idx, 1);
          };
        }
        var origAddStream = window.RTCPeerConnection.prototype.addStream;
        window.RTCPeerConnection.prototype.addStream = function(stream) {
          var pc = this;
          pc._senders = pc._senders || [];
          origAddStream.apply(pc, [stream]);
          stream.getTracks().forEach(function(track) {
            pc._senders.push(shimSenderWithDtmf(pc, track));
          });
        };
        var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
        window.RTCPeerConnection.prototype.removeStream = function(stream) {
          var pc = this;
          pc._senders = pc._senders || [];
          origRemoveStream.apply(pc, [stream]);
          stream.getTracks().forEach(function(track) {
            var sender = pc._senders.find(function(s) {
              return s.track === track;
            });
            if (sender) pc._senders.splice(pc._senders.indexOf(sender), 1);
          });
        };
      } else if (
        "object" === typeof window &&
        window.RTCPeerConnection &&
        "getSenders" in window.RTCPeerConnection.prototype &&
        "createDTMFSender" in window.RTCPeerConnection.prototype &&
        window.RTCRtpSender &&
        !("dtmf" in window.RTCRtpSender.prototype)
      ) {
        var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        window.RTCPeerConnection.prototype.getSenders = function() {
          var pc = this;
          var senders = origGetSenders.apply(pc, []);
          senders.forEach(function(sender) {
            sender._pc = pc;
          });
          return senders;
        };
        Object.defineProperty(window.RTCRtpSender.prototype, "dtmf", {
          get: function() {
            if (void 0 === this._dtmf)
              if ("audio" === this.track.kind) this._dtmf = this._pc.createDTMFSender(this.track);
              else this._dtmf = null;
            return this._dtmf;
          }
        });
      }
    },
    shimSenderReceiverGetStats: function(window) {
      if (!("object" === typeof window && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver))
        return;
      if (!("getStats" in window.RTCRtpSender.prototype)) {
        var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
        if (origGetSenders)
          window.RTCPeerConnection.prototype.getSenders = function() {
            var pc = this;
            var senders = origGetSenders.apply(pc, []);
            senders.forEach(function(sender) {
              sender._pc = pc;
            });
            return senders;
          };
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        if (origAddTrack)
          window.RTCPeerConnection.prototype.addTrack = function() {
            var sender = origAddTrack.apply(this, arguments);
            sender._pc = this;
            return sender;
          };
        window.RTCRtpSender.prototype.getStats = function() {
          var sender = this;
          return this._pc.getStats().then(function(result) {
            return filterStats(result, sender.track, true);
          });
        };
      }
      if (!("getStats" in window.RTCRtpReceiver.prototype)) {
        var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
        if (origGetReceivers)
          window.RTCPeerConnection.prototype.getReceivers = function() {
            var pc = this;
            var receivers = origGetReceivers.apply(pc, []);
            receivers.forEach(function(receiver) {
              receiver._pc = pc;
            });
            return receivers;
          };
        utils.wrapPeerConnectionEvent(window, "track", function(e) {
          e.receiver._pc = e.srcElement;
          return e;
        });
        window.RTCRtpReceiver.prototype.getStats = function() {
          var receiver = this;
          return this._pc.getStats().then(function(result) {
            return filterStats(result, receiver.track, false);
          });
        };
      }
      if (!("getStats" in window.RTCRtpSender.prototype && "getStats" in window.RTCRtpReceiver.prototype)) return;
      var origGetStats = window.RTCPeerConnection.prototype.getStats;
      window.RTCPeerConnection.prototype.getStats = function() {
        var pc = this;
        if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
          var track = arguments[0];
          var sender;
          var receiver;
          var err;
          pc.getSenders().forEach(function(s) {
            if (s.track === track)
              if (sender) err = true;
              else sender = s;
          });
          pc.getReceivers().forEach(function(r) {
            if (r.track === track)
              if (receiver) err = true;
              else receiver = r;
            return r.track === track;
          });
          if (err || (sender && receiver))
            return Promise.reject(
              new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")
            );
          else if (sender) return sender.getStats();
          else if (receiver) return receiver.getStats();
          return Promise.reject(
            new DOMException("There is no sender or receiver for the track.", "InvalidAccessError")
          );
        }
        return origGetStats.apply(pc, arguments);
      };
    },
    shimSourceObject: function(window) {
      var URL = window && window.URL;
      if ("object" === typeof window)
        if (window.HTMLMediaElement && !("srcObject" in window.HTMLMediaElement.prototype))
          Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
            get: function() {
              return this._srcObject;
            },
            set: function(stream) {
              var self = this;
              this._srcObject = stream;
              if (this.src) URL.revokeObjectURL(this.src);
              if (!stream) {
                this.src = "";
                return;
              }
              this.src = URL.createObjectURL(stream);
              stream.addEventListener("addtrack", function() {
                if (self.src) URL.revokeObjectURL(self.src);
                self.src = URL.createObjectURL(stream);
              });
              stream.addEventListener("removetrack", function() {
                if (self.src) URL.revokeObjectURL(self.src);
                self.src = URL.createObjectURL(stream);
              });
            }
          });
    },
    shimAddTrackRemoveTrackWithNative: function(window) {
      window.RTCPeerConnection.prototype.getLocalStreams = function() {
        var pc = this;
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        return Object.keys(this._shimmedLocalStreams).map(function(streamId) {
          return pc._shimmedLocalStreams[streamId][0];
        });
      };
      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
        if (!stream) return origAddTrack.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        var sender = origAddTrack.apply(this, arguments);
        if (!this._shimmedLocalStreams[stream.id]) this._shimmedLocalStreams[stream.id] = [stream, sender];
        else if (-1 === this._shimmedLocalStreams[stream.id].indexOf(sender))
          this._shimmedLocalStreams[stream.id].push(sender);
        return sender;
      };
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        stream.getTracks().forEach(function(track) {
          var alreadyExists = pc.getSenders().find(function(s) {
            return s.track === track;
          });
          if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
        });
        var existingSenders = pc.getSenders();
        origAddStream.apply(this, arguments);
        var newSenders = pc.getSenders().filter(function(newSender) {
          return -1 === existingSenders.indexOf(newSender);
        });
        this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
      };
      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        delete this._shimmedLocalStreams[stream.id];
        return origRemoveStream.apply(this, arguments);
      };
      var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack = function(sender) {
        var pc = this;
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        if (sender)
          Object.keys(this._shimmedLocalStreams).forEach(function(streamId) {
            var idx = pc._shimmedLocalStreams[streamId].indexOf(sender);
            if (-1 !== idx) pc._shimmedLocalStreams[streamId].splice(idx, 1);
            if (1 === pc._shimmedLocalStreams[streamId].length) delete pc._shimmedLocalStreams[streamId];
          });
        return origRemoveTrack.apply(this, arguments);
      };
    },
    shimAddTrackRemoveTrack: function(window) {
      var browserDetails = utils.detectBrowser(window);
      if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65)
        return this.shimAddTrackRemoveTrackWithNative(window);
      var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
      window.RTCPeerConnection.prototype.getLocalStreams = function() {
        var pc = this;
        var nativeStreams = origGetLocalStreams.apply(this);
        pc._reverseStreams = pc._reverseStreams || {};
        return nativeStreams.map(function(stream) {
          return pc._reverseStreams[stream.id];
        });
      };
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      window.RTCPeerConnection.prototype.addStream = function(stream) {
        var pc = this;
        pc._streams = pc._streams || {};
        pc._reverseStreams = pc._reverseStreams || {};
        stream.getTracks().forEach(function(track) {
          var alreadyExists = pc.getSenders().find(function(s) {
            return s.track === track;
          });
          if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
        });
        if (!pc._reverseStreams[stream.id]) {
          var newStream = new window.MediaStream(stream.getTracks());
          pc._streams[stream.id] = newStream;
          pc._reverseStreams[newStream.id] = stream;
          stream = newStream;
        }
        origAddStream.apply(pc, [stream]);
      };
      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        pc._streams = pc._streams || {};
        pc._reverseStreams = pc._reverseStreams || {};
        origRemoveStream.apply(pc, [pc._streams[stream.id] || stream]);
        delete pc._reverseStreams[pc._streams[stream.id] ? pc._streams[stream.id].id : stream.id];
        delete pc._streams[stream.id];
      };
      window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
        var pc = this;
        if ("closed" === pc.signalingState)
          throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        var streams = [].slice.call(arguments, 1);
        if (
          1 !== streams.length ||
          !streams[0].getTracks().find(function(t) {
            return t === track;
          })
        )
          throw new DOMException(
            "The adapter.js addTrack polyfill only supports a single " +
              " stream which is associated with the specified track.",
            "NotSupportedError"
          );
        var alreadyExists = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (alreadyExists) throw new DOMException("Track already exists.", "InvalidAccessError");
        pc._streams = pc._streams || {};
        pc._reverseStreams = pc._reverseStreams || {};
        var oldStream = pc._streams[stream.id];
        if (oldStream) {
          oldStream.addTrack(track);
          Promise.resolve().then(function() {
            pc.dispatchEvent(new Event("negotiationneeded"));
          });
        } else {
          var newStream = new window.MediaStream([track]);
          pc._streams[stream.id] = newStream;
          pc._reverseStreams[newStream.id] = stream;
          pc.addStream(newStream);
        }
        return pc.getSenders().find(function(s) {
          return s.track === track;
        });
      };
      function replaceInternalStreamId(pc, description) {
        var sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
          var externalStream = pc._reverseStreams[internalId];
          var internalStream = pc._streams[externalStream.id];
          sdp = sdp.replace(new RegExp(internalStream.id, "g"), externalStream.id);
        });
        return new RTCSessionDescription({ type: description.type, sdp: sdp });
      }
      function replaceExternalStreamId(pc, description) {
        var sdp = description.sdp;
        Object.keys(pc._reverseStreams || []).forEach(function(internalId) {
          var externalStream = pc._reverseStreams[internalId];
          var internalStream = pc._streams[externalStream.id];
          sdp = sdp.replace(new RegExp(externalStream.id, "g"), internalStream.id);
        });
        return new RTCSessionDescription({ type: description.type, sdp: sdp });
      }
      ["createOffer", "createAnswer"].forEach(function(method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          var pc = this;
          var args = arguments;
          var isLegacyCall = arguments.length && "function" === typeof arguments[0];
          if (isLegacyCall)
            return nativeMethod.apply(pc, [
              function(description) {
                var desc = replaceInternalStreamId(pc, description);
                args[0].apply(null, [desc]);
              },
              function(err) {
                if (args[1]) args[1].apply(null, err);
              },
              arguments[2]
            ]);
          return nativeMethod.apply(pc, arguments).then(function(description) {
            return replaceInternalStreamId(pc, description);
          });
        };
      });
      var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
      window.RTCPeerConnection.prototype.setLocalDescription = function() {
        var pc = this;
        if (!arguments.length || !arguments[0].type) return origSetLocalDescription.apply(pc, arguments);
        arguments[0] = replaceExternalStreamId(pc, arguments[0]);
        return origSetLocalDescription.apply(pc, arguments);
      };
      var origLocalDescription = Object.getOwnPropertyDescriptor(
        window.RTCPeerConnection.prototype,
        "localDescription"
      );
      Object.defineProperty(window.RTCPeerConnection.prototype, "localDescription", {
        get: function() {
          var pc = this;
          var description = origLocalDescription.get.apply(this);
          if ("" === description.type) return description;
          return replaceInternalStreamId(pc, description);
        }
      });
      window.RTCPeerConnection.prototype.removeTrack = function(sender) {
        var pc = this;
        if ("closed" === pc.signalingState)
          throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
        if (!sender._pc)
          throw new DOMException(
            "Argument 1 of RTCPeerConnection.removeTrack " + "does not implement interface RTCRtpSender.",
            "TypeError"
          );
        var isLocal = sender._pc === pc;
        if (!isLocal) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
        pc._streams = pc._streams || {};
        var stream;
        Object.keys(pc._streams).forEach(function(streamid) {
          var hasTrack = pc._streams[streamid].getTracks().find(function(track) {
            return sender.track === track;
          });
          if (hasTrack) stream = pc._streams[streamid];
        });
        if (stream) {
          if (1 === stream.getTracks().length) pc.removeStream(pc._reverseStreams[stream.id]);
          else stream.removeTrack(sender.track);
          pc.dispatchEvent(new Event("negotiationneeded"));
        }
      };
    },
    shimPeerConnection: function(window) {
      var browserDetails = utils.detectBrowser(window);
      if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
        window.RTCPeerConnection = function(pcConfig, pcConstraints) {
          logging$1("PeerConnection");
          if (pcConfig && pcConfig.iceTransportPolicy) pcConfig.iceTransports = pcConfig.iceTransportPolicy;
          return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
        };
        window.RTCPeerConnection.prototype = window.webkitRTCPeerConnection.prototype;
        if (window.webkitRTCPeerConnection.generateCertificate)
          Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
            get: function() {
              return window.webkitRTCPeerConnection.generateCertificate;
            }
          });
      }
      var origGetStats = window.RTCPeerConnection.prototype.getStats;
      window.RTCPeerConnection.prototype.getStats = function(selector, successCallback, errorCallback) {
        var pc = this;
        var args = arguments;
        if (arguments.length > 0 && "function" === typeof selector) return origGetStats.apply(this, arguments);
        if (0 === origGetStats.length && (0 === arguments.length || "function" !== typeof arguments[0]))
          return origGetStats.apply(this, []);
        var fixChromeStats_ = function(response) {
          var standardReport = {};
          var reports = response.result();
          reports.forEach(function(report) {
            var standardStats = {
              id: report.id,
              timestamp: report.timestamp,
              type:
                { localcandidate: "local-candidate", remotecandidate: "remote-candidate" }[report.type] || report.type
            };
            report.names().forEach(function(name) {
              standardStats[name] = report.stat(name);
            });
            standardReport[standardStats.id] = standardStats;
          });
          return standardReport;
        };
        var makeMapStats = function(stats) {
          return new Map(
            Object.keys(stats).map(function(key) {
              return [key, stats[key]];
            })
          );
        };
        if (arguments.length >= 2) {
          var successCallbackWrapper_ = function(response) {
            args[1](makeMapStats(fixChromeStats_(response)));
          };
          return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
        }
        return new Promise(function(resolve, reject) {
          origGetStats.apply(pc, [
            function(response) {
              resolve(makeMapStats(fixChromeStats_(response)));
            },
            reject
          ]);
        }).then(successCallback, errorCallback);
      };
      if (browserDetails.version < 51)
        ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            var args = arguments;
            var pc = this;
            var promise = new Promise(function(resolve, reject) {
              nativeMethod.apply(pc, [args[0], resolve, reject]);
            });
            if (args.length < 2) return promise;
            return promise.then(
              function() {
                args[1].apply(null, []);
              },
              function(err) {
                if (args.length >= 3) args[2].apply(null, [err]);
              }
            );
          };
        });
      if (browserDetails.version < 52)
        ["createOffer", "createAnswer"].forEach(function(method) {
          var nativeMethod = window.RTCPeerConnection.prototype[method];
          window.RTCPeerConnection.prototype[method] = function() {
            var pc = this;
            if (arguments.length < 1 || (1 === arguments.length && "object" === typeof arguments[0])) {
              var opts = 1 === arguments.length ? arguments[0] : void 0;
              return new Promise(function(resolve, reject) {
                nativeMethod.apply(pc, [resolve, reject, opts]);
              });
            }
            return nativeMethod.apply(this, arguments);
          };
        });
      ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          arguments[0] = new ("addIceCandidate" === method ? window.RTCIceCandidate : window.RTCSessionDescription)(
            arguments[0]
          );
          return nativeMethod.apply(this, arguments);
        };
      });
      var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
      window.RTCPeerConnection.prototype.addIceCandidate = function() {
        if (!arguments[0]) {
          if (arguments[1]) arguments[1].apply(null);
          return Promise.resolve();
        }
        return nativeAddIceCandidate.apply(this, arguments);
      };
    },
    fixNegotiationNeeded: function(window) {
      utils.wrapPeerConnectionEvent(window, "negotiationneeded", function(e) {
        var pc = e.target;
        if ("stable" !== pc.signalingState) return;
        return e;
      });
    },
    shimGetDisplayMedia: function(window, getSourceId) {
      if ("getDisplayMedia" in window.navigator) return;
      if ("function" !== typeof getSourceId) {
        console.error("shimGetDisplayMedia: getSourceId argument is not " + "a function");
        return;
      }
      navigator.getDisplayMedia = function(constraints) {
        return getSourceId(constraints).then(function(sourceId) {
          var widthSpecified = constraints.video && constraints.video.width;
          var heightSpecified = constraints.video && constraints.video.height;
          var frameRateSpecified = constraints.video && constraints.video.frameRate;
          constraints.video = {
            mandatory: {
              chromeMediaSource: "desktop",
              chromeMediaSourceId: sourceId,
              maxFrameRate: frameRateSpecified || 3
            }
          };
          if (widthSpecified) constraints.video.mandatory.maxWidth = widthSpecified;
          if (heightSpecified) constraints.video.mandatory.maxHeight = heightSpecified;
          return navigator.mediaDevices.getUserMedia(constraints);
        });
      };
    }
  };
  var filtericeservers = function(iceServers, edgeVersion) {
    var hasTurn = false;
    iceServers = JSON.parse(JSON.stringify(iceServers));
    return iceServers.filter(function(server) {
      if (server && (server.urls || server.url)) {
        var urls = server.urls || server.url;
        if (server.url && !server.urls) utils.deprecated("RTCIceServer.url", "RTCIceServer.urls");
        var isString = "string" === typeof urls;
        if (isString) urls = [urls];
        urls = urls.filter(function(url) {
          var validTurn =
            0 === url.indexOf("turn:") &&
            -1 !== url.indexOf("transport=udp") &&
            -1 === url.indexOf("turn:[") &&
            !hasTurn;
          if (validTurn) {
            hasTurn = true;
            return true;
          }
          return 0 === url.indexOf("stun:") && edgeVersion >= 14393 && -1 === url.indexOf("?transport=udp");
        });
        delete server.url;
        server.urls = isString ? urls[0] : urls;
        return !!urls.length;
      }
    });
  };
  var sdp = createCommonjsModule(function(module) {
    var SDPUtils = {};
    SDPUtils.generateIdentifier = function() {
      return Math.random()
        .toString(36)
        .substr(2, 10);
    };
    SDPUtils.localCName = SDPUtils.generateIdentifier();
    SDPUtils.splitLines = function(blob) {
      return blob
        .trim()
        .split("\n")
        .map(function(line) {
          return line.trim();
        });
    };
    SDPUtils.splitSections = function(blob) {
      var parts = blob.split("\nm=");
      return parts.map(function(part, index) {
        return (index > 0 ? "m=" + part : part).trim() + "\r\n";
      });
    };
    SDPUtils.getDescription = function(blob) {
      var sections = SDPUtils.splitSections(blob);
      return sections && sections[0];
    };
    SDPUtils.getMediaSections = function(blob) {
      var sections = SDPUtils.splitSections(blob);
      sections.shift();
      return sections;
    };
    SDPUtils.matchPrefix = function(blob, prefix) {
      return SDPUtils.splitLines(blob).filter(function(line) {
        return 0 === line.indexOf(prefix);
      });
    };
    SDPUtils.parseCandidate = function(line) {
      var parts;
      if (0 === line.indexOf("a=candidate:")) parts = line.substring(12).split(" ");
      else parts = line.substring(10).split(" ");
      var candidate = {
        foundation: parts[0],
        component: parseInt(parts[1], 10),
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        port: parseInt(parts[5], 10),
        type: parts[7]
      };
      for (var i = 8; i < parts.length; i += 2)
        switch (parts[i]) {
          case "raddr":
            candidate.relatedAddress = parts[i + 1];
            break;
          case "rport":
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
          case "tcptype":
            candidate.tcpType = parts[i + 1];
            break;
          case "ufrag":
            candidate.ufrag = parts[i + 1];
            candidate.usernameFragment = parts[i + 1];
            break;
          default:
            candidate[parts[i]] = parts[i + 1];
        }
      return candidate;
    };
    SDPUtils.writeCandidate = function(candidate) {
      var sdp = [];
      sdp.push(candidate.foundation);
      sdp.push(candidate.component);
      sdp.push(candidate.protocol.toUpperCase());
      sdp.push(candidate.priority);
      sdp.push(candidate.ip);
      sdp.push(candidate.port);
      var type = candidate.type;
      sdp.push("typ");
      sdp.push(type);
      if ("host" !== type && candidate.relatedAddress && candidate.relatedPort) {
        sdp.push("raddr");
        sdp.push(candidate.relatedAddress);
        sdp.push("rport");
        sdp.push(candidate.relatedPort);
      }
      if (candidate.tcpType && "tcp" === candidate.protocol.toLowerCase()) {
        sdp.push("tcptype");
        sdp.push(candidate.tcpType);
      }
      if (candidate.usernameFragment || candidate.ufrag) {
        sdp.push("ufrag");
        sdp.push(candidate.usernameFragment || candidate.ufrag);
      }
      return "candidate:" + sdp.join(" ");
    };
    SDPUtils.parseIceOptions = function(line) {
      return line.substr(14).split(" ");
    };
    SDPUtils.parseRtpMap = function(line) {
      var parts = line.substr(9).split(" ");
      var parsed = { payloadType: parseInt(parts.shift(), 10) };
      parts = parts[0].split("/");
      parsed.name = parts[0];
      parsed.clockRate = parseInt(parts[1], 10);
      parsed.numChannels = 3 === parts.length ? parseInt(parts[2], 10) : 1;
      return parsed;
    };
    SDPUtils.writeRtpMap = function(codec) {
      var pt = codec.payloadType;
      if (void 0 !== codec.preferredPayloadType) pt = codec.preferredPayloadType;
      return (
        "a=rtpmap:" +
        pt +
        " " +
        codec.name +
        "/" +
        codec.clockRate +
        (1 !== codec.numChannels ? "/" + codec.numChannels : "") +
        "\r\n"
      );
    };
    SDPUtils.parseExtmap = function(line) {
      var parts = line.substr(9).split(" ");
      return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf("/") > 0 ? parts[0].split("/")[1] : "sendrecv",
        uri: parts[1]
      };
    };
    SDPUtils.writeExtmap = function(headerExtension) {
      return (
        "a=extmap:" +
        (headerExtension.id || headerExtension.preferredId) +
        (headerExtension.direction && "sendrecv" !== headerExtension.direction ? "/" + headerExtension.direction : "") +
        " " +
        headerExtension.uri +
        "\r\n"
      );
    };
    SDPUtils.parseFmtp = function(line) {
      var parsed = {};
      var kv;
      var parts = line.substr(line.indexOf(" ") + 1).split(";");
      for (var j = 0; j < parts.length; j++) {
        kv = parts[j].trim().split("=");
        parsed[kv[0].trim()] = kv[1];
      }
      return parsed;
    };
    SDPUtils.writeFmtp = function(codec) {
      var line = "";
      var pt = codec.payloadType;
      if (void 0 !== codec.preferredPayloadType) pt = codec.preferredPayloadType;
      if (codec.parameters && Object.keys(codec.parameters).length) {
        var params = [];
        Object.keys(codec.parameters).forEach(function(param) {
          params.push(param + "=" + codec.parameters[param]);
        });
        line += "a=fmtp:" + pt + " " + params.join(";") + "\r\n";
      }
      return line;
    };
    SDPUtils.parseRtcpFb = function(line) {
      var parts = line.substr(line.indexOf(" ") + 1).split(" ");
      return { type: parts.shift(), parameter: parts.join(" ") };
    };
    SDPUtils.writeRtcpFb = function(codec) {
      var lines = "";
      var pt = codec.payloadType;
      if (void 0 !== codec.preferredPayloadType) pt = codec.preferredPayloadType;
      if (codec.rtcpFeedback && codec.rtcpFeedback.length)
        codec.rtcpFeedback.forEach(function(fb) {
          lines +=
            "a=rtcp-fb:" +
            pt +
            " " +
            fb.type +
            (fb.parameter && fb.parameter.length ? " " + fb.parameter : "") +
            "\r\n";
        });
      return lines;
    };
    SDPUtils.parseSsrcMedia = function(line) {
      var sp = line.indexOf(" ");
      var parts = { ssrc: parseInt(line.substr(7, sp - 7), 10) };
      var colon = line.indexOf(":", sp);
      if (colon > -1) {
        parts.attribute = line.substr(sp + 1, colon - sp - 1);
        parts.value = line.substr(colon + 1);
      } else parts.attribute = line.substr(sp + 1);
      return parts;
    };
    SDPUtils.getMid = function(mediaSection) {
      var mid = SDPUtils.matchPrefix(mediaSection, "a=mid:")[0];
      if (mid) return mid.substr(6);
    };
    SDPUtils.parseFingerprint = function(line) {
      var parts = line.substr(14).split(" ");
      return { algorithm: parts[0].toLowerCase(), value: parts[1] };
    };
    SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=fingerprint:");
      return { role: "auto", fingerprints: lines.map(SDPUtils.parseFingerprint) };
    };
    SDPUtils.writeDtlsParameters = function(params, setupType) {
      var sdp = "a=setup:" + setupType + "\r\n";
      params.fingerprints.forEach(function(fp) {
        sdp += "a=fingerprint:" + fp.algorithm + " " + fp.value + "\r\n";
      });
      return sdp;
    };
    SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      lines = lines.concat(SDPUtils.splitLines(sessionpart));
      var iceParameters = {
        usernameFragment: lines
          .filter(function(line) {
            return 0 === line.indexOf("a=ice-ufrag:");
          })[0]
          .substr(12),
        password: lines
          .filter(function(line) {
            return 0 === line.indexOf("a=ice-pwd:");
          })[0]
          .substr(10)
      };
      return iceParameters;
    };
    SDPUtils.writeIceParameters = function(params) {
      return "a=ice-ufrag:" + params.usernameFragment + "\r\n" + "a=ice-pwd:" + params.password + "\r\n";
    };
    SDPUtils.parseRtpParameters = function(mediaSection) {
      var description = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] };
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(" ");
      for (var i = 3; i < mline.length; i++) {
        var pt = mline[i];
        var rtpmapline = SDPUtils.matchPrefix(mediaSection, "a=rtpmap:" + pt + " ")[0];
        if (rtpmapline) {
          var codec = SDPUtils.parseRtpMap(rtpmapline);
          var fmtps = SDPUtils.matchPrefix(mediaSection, "a=fmtp:" + pt + " ");
          codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
          codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, "a=rtcp-fb:" + pt + " ").map(SDPUtils.parseRtcpFb);
          description.codecs.push(codec);
          switch (codec.name.toUpperCase()) {
            case "RED":
            case "ULPFEC":
              description.fecMechanisms.push(codec.name.toUpperCase());
          }
        }
      }
      SDPUtils.matchPrefix(mediaSection, "a=extmap:").forEach(function(line) {
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
      });
      return description;
    };
    SDPUtils.writeRtpDescription = function(kind, caps) {
      var sdp = "";
      sdp += "m=" + kind + " ";
      sdp += caps.codecs.length > 0 ? "9" : "0";
      sdp += " UDP/TLS/RTP/SAVPF ";
      sdp +=
        caps.codecs
          .map(function(codec) {
            if (void 0 !== codec.preferredPayloadType) return codec.preferredPayloadType;
            return codec.payloadType;
          })
          .join(" ") + "\r\n";
      sdp += "c=IN IP4 0.0.0.0\r\n";
      sdp += "a=rtcp:9 IN IP4 0.0.0.0\r\n";
      caps.codecs.forEach(function(codec) {
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
      });
      var maxptime = 0;
      caps.codecs.forEach(function(codec) {
        if (codec.maxptime > maxptime) maxptime = codec.maxptime;
      });
      if (maxptime > 0) sdp += "a=maxptime:" + maxptime + "\r\n";
      sdp += "a=rtcp-mux\r\n";
      caps.headerExtensions.forEach(function(extension) {
        sdp += SDPUtils.writeExtmap(extension);
      });
      return sdp;
    };
    SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
      var encodingParameters = [];
      var description = SDPUtils.parseRtpParameters(mediaSection);
      var hasRed = -1 !== description.fecMechanisms.indexOf("RED");
      var hasUlpfec = -1 !== description.fecMechanisms.indexOf("ULPFEC");
      var ssrcs = SDPUtils.matchPrefix(mediaSection, "a=ssrc:")
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(parts) {
          return "cname" === parts.attribute;
        });
      var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
      var secondarySsrc;
      var flows = SDPUtils.matchPrefix(mediaSection, "a=ssrc-group:FID").map(function(line) {
        var parts = line.split(" ");
        parts.shift();
        return parts.map(function(part) {
          return parseInt(part, 10);
        });
      });
      if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) secondarySsrc = flows[0][1];
      description.codecs.forEach(function(codec) {
        if ("RTX" === codec.name.toUpperCase() && codec.parameters.apt) {
          var encParam = {
            ssrc: primarySsrc,
            codecPayloadType: parseInt(codec.parameters.apt, 10),
            rtx: { ssrc: secondarySsrc }
          };
          encodingParameters.push(encParam);
          if (hasRed) {
            encParam = JSON.parse(JSON.stringify(encParam));
            encParam.fec = { ssrc: secondarySsrc, mechanism: hasUlpfec ? "red+ulpfec" : "red" };
            encodingParameters.push(encParam);
          }
        }
      });
      if (0 === encodingParameters.length && primarySsrc) encodingParameters.push({ ssrc: primarySsrc });
      var bandwidth = SDPUtils.matchPrefix(mediaSection, "b=");
      if (bandwidth.length) {
        if (0 === bandwidth[0].indexOf("b=TIAS:")) bandwidth = parseInt(bandwidth[0].substr(7), 10);
        else if (0 === bandwidth[0].indexOf("b=AS:"))
          bandwidth = 1e3 * parseInt(bandwidth[0].substr(5), 10) * 0.95 - 50 * 40 * 8;
        else bandwidth = void 0;
        encodingParameters.forEach(function(params) {
          params.maxBitrate = bandwidth;
        });
      }
      return encodingParameters;
    };
    SDPUtils.parseRtcpParameters = function(mediaSection) {
      var rtcpParameters = {};
      var remoteSsrc = SDPUtils.matchPrefix(mediaSection, "a=ssrc:")
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(obj) {
          return "cname" === obj.attribute;
        })[0];
      if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
      }
      var rsize = SDPUtils.matchPrefix(mediaSection, "a=rtcp-rsize");
      rtcpParameters.reducedSize = rsize.length > 0;
      rtcpParameters.compound = 0 === rsize.length;
      var mux = SDPUtils.matchPrefix(mediaSection, "a=rtcp-mux");
      rtcpParameters.mux = mux.length > 0;
      return rtcpParameters;
    };
    SDPUtils.parseMsid = function(mediaSection) {
      var parts;
      var spec = SDPUtils.matchPrefix(mediaSection, "a=msid:");
      if (1 === spec.length) {
        parts = spec[0].substr(7).split(" ");
        return { stream: parts[0], track: parts[1] };
      }
      var planB = SDPUtils.matchPrefix(mediaSection, "a=ssrc:")
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(parts) {
          return "msid" === parts.attribute;
        });
      if (planB.length > 0) {
        parts = planB[0].value.split(" ");
        return { stream: parts[0], track: parts[1] };
      }
    };
    SDPUtils.generateSessionId = function() {
      return Math.random()
        .toString()
        .substr(2, 21);
    };
    SDPUtils.writeSessionBoilerplate = function(sessId, sessVer) {
      var sessionId;
      var version = void 0 !== sessVer ? sessVer : 2;
      if (sessId) sessionId = sessId;
      else sessionId = SDPUtils.generateSessionId();
      return (
        "v=0\r\n" +
        "o=thisisadapterortc " +
        sessionId +
        " " +
        version +
        " IN IP4 127.0.0.1\r\n" +
        "s=-\r\n" +
        "t=0 0\r\n"
      );
    };
    SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
      var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
      sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());
      sdp += SDPUtils.writeDtlsParameters(
        transceiver.dtlsTransport.getLocalParameters(),
        "offer" === type ? "actpass" : "active"
      );
      sdp += "a=mid:" + transceiver.mid + "\r\n";
      if (transceiver.direction) sdp += "a=" + transceiver.direction + "\r\n";
      else if (transceiver.rtpSender && transceiver.rtpReceiver) sdp += "a=sendrecv\r\n";
      else if (transceiver.rtpSender) sdp += "a=sendonly\r\n";
      else if (transceiver.rtpReceiver) sdp += "a=recvonly\r\n";
      else sdp += "a=inactive\r\n";
      if (transceiver.rtpSender) {
        var msid = "msid:" + stream.id + " " + transceiver.rtpSender.track.id + "\r\n";
        sdp += "a=" + msid;
        sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " " + msid;
        if (transceiver.sendEncodingParameters[0].rtx) {
          sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " " + msid;
          sdp +=
            "a=ssrc-group:FID " +
            transceiver.sendEncodingParameters[0].ssrc +
            " " +
            transceiver.sendEncodingParameters[0].rtx.ssrc +
            "\r\n";
        }
      }
      sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " cname:" + SDPUtils.localCName + "\r\n";
      if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx)
        sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " cname:" + SDPUtils.localCName + "\r\n";
      return sdp;
    };
    SDPUtils.getDirection = function(mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      for (var i = 0; i < lines.length; i++)
        switch (lines[i]) {
          case "a=sendrecv":
          case "a=sendonly":
          case "a=recvonly":
          case "a=inactive":
            return lines[i].substr(2);
        }
      if (sessionpart) return SDPUtils.getDirection(sessionpart);
      return "sendrecv";
    };
    SDPUtils.getKind = function(mediaSection) {
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(" ");
      return mline[0].substr(2);
    };
    SDPUtils.isRejected = function(mediaSection) {
      return "0" === mediaSection.split(" ", 2)[1];
    };
    SDPUtils.parseMLine = function(mediaSection) {
      var lines = SDPUtils.splitLines(mediaSection);
      var parts = lines[0].substr(2).split(" ");
      return { kind: parts[0], port: parseInt(parts[1], 10), protocol: parts[2], fmt: parts.slice(3).join(" ") };
    };
    SDPUtils.parseOLine = function(mediaSection) {
      var line = SDPUtils.matchPrefix(mediaSection, "o=")[0];
      var parts = line.substr(2).split(" ");
      return {
        username: parts[0],
        sessionId: parts[1],
        sessionVersion: parseInt(parts[2], 10),
        netType: parts[3],
        addressType: parts[4],
        address: parts[5]
      };
    };
    module.exports = SDPUtils;
  });
  function fixStatsType(stat) {
    return (
      {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
      }[stat.type] || stat.type
    );
  }
  function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
    var sdp$$1 = sdp.writeRtpDescription(transceiver.kind, caps);
    sdp$$1 += sdp.writeIceParameters(transceiver.iceGatherer.getLocalParameters());
    sdp$$1 += sdp.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      "offer" === type ? "actpass" : dtlsRole || "active"
    );
    sdp$$1 += "a=mid:" + transceiver.mid + "\r\n";
    if (transceiver.rtpSender && transceiver.rtpReceiver) sdp$$1 += "a=sendrecv\r\n";
    else if (transceiver.rtpSender) sdp$$1 += "a=sendonly\r\n";
    else if (transceiver.rtpReceiver) sdp$$1 += "a=recvonly\r\n";
    else sdp$$1 += "a=inactive\r\n";
    if (transceiver.rtpSender) {
      var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
      transceiver.rtpSender._initialTrackId = trackId;
      var msid = "msid:" + (stream ? stream.id : "-") + " " + trackId + "\r\n";
      sdp$$1 += "a=" + msid;
      sdp$$1 += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " " + msid;
      if (transceiver.sendEncodingParameters[0].rtx) {
        sdp$$1 += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " " + msid;
        sdp$$1 +=
          "a=ssrc-group:FID " +
          transceiver.sendEncodingParameters[0].ssrc +
          " " +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          "\r\n";
      }
    }
    sdp$$1 += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " cname:" + sdp.localCName + "\r\n";
    if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx)
      sdp$$1 += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " cname:" + sdp.localCName + "\r\n";
    return sdp$$1;
  }
  function filterIceServers(iceServers, edgeVersion) {
    var hasTurn = false;
    iceServers = JSON.parse(JSON.stringify(iceServers));
    return iceServers.filter(function(server) {
      if (server && (server.urls || server.url)) {
        var urls = server.urls || server.url;
        if (server.url && !server.urls) console.warn("RTCIceServer.url is deprecated! Use urls instead.");
        var isString = "string" === typeof urls;
        if (isString) urls = [urls];
        urls = urls.filter(function(url) {
          var validTurn =
            0 === url.indexOf("turn:") &&
            -1 !== url.indexOf("transport=udp") &&
            -1 === url.indexOf("turn:[") &&
            !hasTurn;
          if (validTurn) {
            hasTurn = true;
            return true;
          }
          return 0 === url.indexOf("stun:") && edgeVersion >= 14393 && -1 === url.indexOf("?transport=udp");
        });
        delete server.url;
        server.urls = isString ? urls[0] : urls;
        return !!urls.length;
      }
    });
  }
  function getCommonCapabilities(localCapabilities, remoteCapabilities) {
    var commonCapabilities = { codecs: [], headerExtensions: [], fecMechanisms: [] };
    var findCodecByPayloadType = function(pt, codecs) {
      pt = parseInt(pt, 10);
      for (var i = 0; i < codecs.length; i++)
        if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) return codecs[i];
    };
    var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
      var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
      var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
      return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
    };
    localCapabilities.codecs.forEach(function(lCodec) {
      for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
        var rCodec = remoteCapabilities.codecs[i];
        if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
          if ("rtx" === lCodec.name.toLowerCase() && lCodec.parameters && rCodec.parameters.apt)
            if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) continue;
          rCodec = JSON.parse(JSON.stringify(rCodec));
          rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels);
          commonCapabilities.codecs.push(rCodec);
          rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
            for (var j = 0; j < lCodec.rtcpFeedback.length; j++)
              if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter)
                return true;
            return false;
          });
          break;
        }
      }
    });
    localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
      for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
        var rHeaderExtension = remoteCapabilities.headerExtensions[i];
        if (lHeaderExtension.uri === rHeaderExtension.uri) {
          commonCapabilities.headerExtensions.push(rHeaderExtension);
          break;
        }
      }
    });
    return commonCapabilities;
  }
  function isActionAllowedInSignalingState(action, type, signalingState) {
    return (
      -1 !==
      {
        offer: {
          setLocalDescription: ["stable", "have-local-offer"],
          setRemoteDescription: ["stable", "have-remote-offer"]
        },
        answer: {
          setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
          setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
        }
      }[type][action].indexOf(signalingState)
    );
  }
  function maybeAddCandidate(iceTransport, candidate) {
    var alreadyAdded = iceTransport.getRemoteCandidates().find(function(remoteCandidate) {
      return (
        candidate.foundation === remoteCandidate.foundation &&
        candidate.ip === remoteCandidate.ip &&
        candidate.port === remoteCandidate.port &&
        candidate.priority === remoteCandidate.priority &&
        candidate.protocol === remoteCandidate.protocol &&
        candidate.type === remoteCandidate.type
      );
    });
    if (!alreadyAdded) iceTransport.addRemoteCandidate(candidate);
    return !alreadyAdded;
  }
  function makeError(name, description) {
    var e = new Error(description);
    e.name = name;
    e.code = {
      NotSupportedError: 9,
      InvalidStateError: 11,
      InvalidAccessError: 15,
      TypeError: void 0,
      OperationError: void 0
    }[name];
    return e;
  }
  var rtcpeerconnection = function(window, edgeVersion) {
    function addTrackToStreamAndFireEvent(track, stream) {
      stream.addTrack(track);
      stream.dispatchEvent(new window.MediaStreamTrackEvent("addtrack", { track: track }));
    }
    function removeTrackFromStreamAndFireEvent(track, stream) {
      stream.removeTrack(track);
      stream.dispatchEvent(new window.MediaStreamTrackEvent("removetrack", { track: track }));
    }
    function fireAddTrack(pc, track, receiver, streams) {
      var trackEvent = new Event("track");
      trackEvent.track = track;
      trackEvent.receiver = receiver;
      trackEvent.transceiver = { receiver: receiver };
      trackEvent.streams = streams;
      window.setTimeout(function() {
        pc._dispatchEvent("track", trackEvent);
      });
    }
    var RTCPeerConnection = function(config) {
      var pc = this;
      var _eventTarget = document.createDocumentFragment();
      ["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function(method) {
        pc[method] = _eventTarget[method].bind(_eventTarget);
      });
      this.canTrickleIceCandidates = null;
      this.needNegotiation = false;
      this.localStreams = [];
      this.remoteStreams = [];
      this._localDescription = null;
      this._remoteDescription = null;
      this.signalingState = "stable";
      this.iceConnectionState = "new";
      this.connectionState = "new";
      this.iceGatheringState = "new";
      config = JSON.parse(JSON.stringify(config || {}));
      this.usingBundle = "max-bundle" === config.bundlePolicy;
      if ("negotiate" === config.rtcpMuxPolicy)
        throw makeError("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
      else if (!config.rtcpMuxPolicy) config.rtcpMuxPolicy = "require";
      switch (config.iceTransportPolicy) {
        case "all":
        case "relay":
          break;
        default:
          config.iceTransportPolicy = "all";
      }
      switch (config.bundlePolicy) {
        case "balanced":
        case "max-compat":
        case "max-bundle":
          break;
        default:
          config.bundlePolicy = "balanced";
      }
      config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
      this._iceGatherers = [];
      if (config.iceCandidatePoolSize)
        for (var i = config.iceCandidatePoolSize; i > 0; i--)
          this._iceGatherers.push(
            new window.RTCIceGatherer({ iceServers: config.iceServers, gatherPolicy: config.iceTransportPolicy })
          );
      else config.iceCandidatePoolSize = 0;
      this._config = config;
      this.transceivers = [];
      this._sdpSessionId = sdp.generateSessionId();
      this._sdpSessionVersion = 0;
      this._dtlsRole = void 0;
      this._isClosed = false;
    };
    Object.defineProperty(RTCPeerConnection.prototype, "localDescription", {
      configurable: true,
      get: function() {
        return this._localDescription;
      }
    });
    Object.defineProperty(RTCPeerConnection.prototype, "remoteDescription", {
      configurable: true,
      get: function() {
        return this._remoteDescription;
      }
    });
    RTCPeerConnection.prototype.onicecandidate = null;
    RTCPeerConnection.prototype.onaddstream = null;
    RTCPeerConnection.prototype.ontrack = null;
    RTCPeerConnection.prototype.onremovestream = null;
    RTCPeerConnection.prototype.onsignalingstatechange = null;
    RTCPeerConnection.prototype.oniceconnectionstatechange = null;
    RTCPeerConnection.prototype.onconnectionstatechange = null;
    RTCPeerConnection.prototype.onicegatheringstatechange = null;
    RTCPeerConnection.prototype.onnegotiationneeded = null;
    RTCPeerConnection.prototype.ondatachannel = null;
    RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
      if (this._isClosed) return;
      this.dispatchEvent(event);
      if ("function" === typeof this["on" + name]) this["on" + name](event);
    };
    RTCPeerConnection.prototype._emitGatheringStateChange = function() {
      var event = new Event("icegatheringstatechange");
      this._dispatchEvent("icegatheringstatechange", event);
    };
    RTCPeerConnection.prototype.getConfiguration = function() {
      return this._config;
    };
    RTCPeerConnection.prototype.getLocalStreams = function() {
      return this.localStreams;
    };
    RTCPeerConnection.prototype.getRemoteStreams = function() {
      return this.remoteStreams;
    };
    RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
      var hasBundleTransport = this.transceivers.length > 0;
      var transceiver = {
        track: null,
        iceGatherer: null,
        iceTransport: null,
        dtlsTransport: null,
        localCapabilities: null,
        remoteCapabilities: null,
        rtpSender: null,
        rtpReceiver: null,
        kind: kind,
        mid: null,
        sendEncodingParameters: null,
        recvEncodingParameters: null,
        stream: null,
        associatedRemoteMediaStreams: [],
        wantReceive: true
      };
      if (this.usingBundle && hasBundleTransport) {
        transceiver.iceTransport = this.transceivers[0].iceTransport;
        transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
      } else {
        var transports = this._createIceAndDtlsTransports();
        transceiver.iceTransport = transports.iceTransport;
        transceiver.dtlsTransport = transports.dtlsTransport;
      }
      if (!doNotAdd) this.transceivers.push(transceiver);
      return transceiver;
    };
    RTCPeerConnection.prototype.addTrack = function(track, stream) {
      if (this._isClosed)
        throw makeError("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
      var alreadyExists = this.transceivers.find(function(s) {
        return s.track === track;
      });
      if (alreadyExists) throw makeError("InvalidAccessError", "Track already exists.");
      var transceiver;
      for (var i = 0; i < this.transceivers.length; i++)
        if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) transceiver = this.transceivers[i];
      if (!transceiver) transceiver = this._createTransceiver(track.kind);
      this._maybeFireNegotiationNeeded();
      if (-1 === this.localStreams.indexOf(stream)) this.localStreams.push(stream);
      transceiver.track = track;
      transceiver.stream = stream;
      transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
      return transceiver.rtpSender;
    };
    RTCPeerConnection.prototype.addStream = function(stream) {
      var pc = this;
      if (edgeVersion >= 15025)
        stream.getTracks().forEach(function(track) {
          pc.addTrack(track, stream);
        });
      else {
        var clonedStream = stream.clone();
        stream.getTracks().forEach(function(track, idx) {
          var clonedTrack = clonedStream.getTracks()[idx];
          track.addEventListener("enabled", function(event) {
            clonedTrack.enabled = event.enabled;
          });
        });
        clonedStream.getTracks().forEach(function(track) {
          pc.addTrack(track, clonedStream);
        });
      }
    };
    RTCPeerConnection.prototype.removeTrack = function(sender) {
      if (this._isClosed)
        throw makeError("InvalidStateError", "Attempted to call removeTrack on a closed peerconnection.");
      if (!(sender instanceof window.RTCRtpSender))
        throw new TypeError(
          "Argument 1 of RTCPeerConnection.removeTrack " + "does not implement interface RTCRtpSender."
        );
      var transceiver = this.transceivers.find(function(t) {
        return t.rtpSender === sender;
      });
      if (!transceiver) throw makeError("InvalidAccessError", "Sender was not created by this connection.");
      var stream = transceiver.stream;
      transceiver.rtpSender.stop();
      transceiver.rtpSender = null;
      transceiver.track = null;
      transceiver.stream = null;
      var localStreams = this.transceivers.map(function(t) {
        return t.stream;
      });
      if (-1 === localStreams.indexOf(stream) && this.localStreams.indexOf(stream) > -1)
        this.localStreams.splice(this.localStreams.indexOf(stream), 1);
      this._maybeFireNegotiationNeeded();
    };
    RTCPeerConnection.prototype.removeStream = function(stream) {
      var pc = this;
      stream.getTracks().forEach(function(track) {
        var sender = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (sender) pc.removeTrack(sender);
      });
    };
    RTCPeerConnection.prototype.getSenders = function() {
      return this.transceivers
        .filter(function(transceiver) {
          return !!transceiver.rtpSender;
        })
        .map(function(transceiver) {
          return transceiver.rtpSender;
        });
    };
    RTCPeerConnection.prototype.getReceivers = function() {
      return this.transceivers
        .filter(function(transceiver) {
          return !!transceiver.rtpReceiver;
        })
        .map(function(transceiver) {
          return transceiver.rtpReceiver;
        });
    };
    RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex, usingBundle) {
      var pc = this;
      if (usingBundle && sdpMLineIndex > 0) return this.transceivers[0].iceGatherer;
      else if (this._iceGatherers.length) return this._iceGatherers.shift();
      var iceGatherer = new window.RTCIceGatherer({
        iceServers: this._config.iceServers,
        gatherPolicy: this._config.iceTransportPolicy
      });
      Object.defineProperty(iceGatherer, "state", { value: "new", writable: true });
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
      this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
        var end = !event.candidate || 0 === Object.keys(event.candidate).length;
        iceGatherer.state = end ? "completed" : "gathering";
        if (null !== pc.transceivers[sdpMLineIndex].bufferedCandidateEvents)
          pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      };
      iceGatherer.addEventListener("localcandidate", this.transceivers[sdpMLineIndex].bufferCandidates);
      return iceGatherer;
    };
    RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
      var pc = this;
      var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
      if (iceGatherer.onlocalcandidate) return;
      var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
      iceGatherer.removeEventListener("localcandidate", this.transceivers[sdpMLineIndex].bufferCandidates);
      iceGatherer.onlocalcandidate = function(evt) {
        if (pc.usingBundle && sdpMLineIndex > 0) return;
        var event = new Event("icecandidate");
        event.candidate = { sdpMid: mid, sdpMLineIndex: sdpMLineIndex };
        var cand = evt.candidate;
        var end = !cand || 0 === Object.keys(cand).length;
        if (end) {
          if ("new" === iceGatherer.state || "gathering" === iceGatherer.state) iceGatherer.state = "completed";
        } else {
          if ("new" === iceGatherer.state) iceGatherer.state = "gathering";
          cand.component = 1;
          cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
          var serializedCandidate = sdp.writeCandidate(cand);
          event.candidate = Object.assign(event.candidate, sdp.parseCandidate(serializedCandidate));
          event.candidate.candidate = serializedCandidate;
          event.candidate.toJSON = function() {
            return {
              candidate: event.candidate.candidate,
              sdpMid: event.candidate.sdpMid,
              sdpMLineIndex: event.candidate.sdpMLineIndex,
              usernameFragment: event.candidate.usernameFragment
            };
          };
        }
        var sections = sdp.getMediaSections(pc._localDescription.sdp);
        if (!end) sections[event.candidate.sdpMLineIndex] += "a=" + event.candidate.candidate + "\r\n";
        else sections[event.candidate.sdpMLineIndex] += "a=end-of-candidates\r\n";
        pc._localDescription.sdp = sdp.getDescription(pc._localDescription.sdp) + sections.join("");
        var complete = pc.transceivers.every(function(transceiver) {
          return transceiver.iceGatherer && "completed" === transceiver.iceGatherer.state;
        });
        if ("gathering" !== pc.iceGatheringState) {
          pc.iceGatheringState = "gathering";
          pc._emitGatheringStateChange();
        }
        if (!end) pc._dispatchEvent("icecandidate", event);
        if (complete) {
          pc._dispatchEvent("icecandidate", new Event("icecandidate"));
          pc.iceGatheringState = "complete";
          pc._emitGatheringStateChange();
        }
      };
      window.setTimeout(function() {
        bufferedCandidateEvents.forEach(function(e) {
          iceGatherer.onlocalcandidate(e);
        });
      }, 0);
    };
    RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
      var pc = this;
      var iceTransport = new window.RTCIceTransport(null);
      iceTransport.onicestatechange = function() {
        pc._updateIceConnectionState();
        pc._updateConnectionState();
      };
      var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
      dtlsTransport.ondtlsstatechange = function() {
        pc._updateConnectionState();
      };
      dtlsTransport.onerror = function() {
        Object.defineProperty(dtlsTransport, "state", { value: "failed", writable: true });
        pc._updateConnectionState();
      };
      return { iceTransport: iceTransport, dtlsTransport: dtlsTransport };
    };
    RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(sdpMLineIndex) {
      var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
      if (iceGatherer) {
        delete iceGatherer.onlocalcandidate;
        delete this.transceivers[sdpMLineIndex].iceGatherer;
      }
      var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
      if (iceTransport) {
        delete iceTransport.onicestatechange;
        delete this.transceivers[sdpMLineIndex].iceTransport;
      }
      var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
      if (dtlsTransport) {
        delete dtlsTransport.ondtlsstatechange;
        delete dtlsTransport.onerror;
        delete this.transceivers[sdpMLineIndex].dtlsTransport;
      }
    };
    RTCPeerConnection.prototype._transceive = function(transceiver, send, recv) {
      var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
      if (send && transceiver.rtpSender) {
        params.encodings = transceiver.sendEncodingParameters;
        params.rtcp = { cname: sdp.localCName, compound: transceiver.rtcpParameters.compound };
        if (transceiver.recvEncodingParameters.length) params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
        transceiver.rtpSender.send(params);
      }
      if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
        if ("video" === transceiver.kind && transceiver.recvEncodingParameters && edgeVersion < 15019)
          transceiver.recvEncodingParameters.forEach(function(p) {
            delete p.rtx;
          });
        if (transceiver.recvEncodingParameters.length) params.encodings = transceiver.recvEncodingParameters;
        else params.encodings = [{}];
        params.rtcp = { compound: transceiver.rtcpParameters.compound };
        if (transceiver.rtcpParameters.cname) params.rtcp.cname = transceiver.rtcpParameters.cname;
        if (transceiver.sendEncodingParameters.length) params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
        transceiver.rtpReceiver.receive(params);
      }
    };
    RTCPeerConnection.prototype.setLocalDescription = function(description) {
      var pc = this;
      if (-1 === ["offer", "answer"].indexOf(description.type))
        return Promise.reject(makeError("TypeError", 'Unsupported type "' + description.type + '"'));
      if (!isActionAllowedInSignalingState("setLocalDescription", description.type, pc.signalingState) || pc._isClosed)
        return Promise.reject(
          makeError("InvalidStateError", "Can not set local " + description.type + " in state " + pc.signalingState)
        );
      var sections;
      var sessionpart;
      if ("offer" === description.type) {
        sections = sdp.splitSections(description.sdp);
        sessionpart = sections.shift();
        sections.forEach(function(mediaSection, sdpMLineIndex) {
          var caps = sdp.parseRtpParameters(mediaSection);
          pc.transceivers[sdpMLineIndex].localCapabilities = caps;
        });
        pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
          pc._gather(transceiver.mid, sdpMLineIndex);
        });
      } else if ("answer" === description.type) {
        sections = sdp.splitSections(pc._remoteDescription.sdp);
        sessionpart = sections.shift();
        var isIceLite = sdp.matchPrefix(sessionpart, "a=ice-lite").length > 0;
        sections.forEach(function(mediaSection, sdpMLineIndex) {
          var transceiver = pc.transceivers[sdpMLineIndex];
          var iceGatherer = transceiver.iceGatherer;
          var iceTransport = transceiver.iceTransport;
          var dtlsTransport = transceiver.dtlsTransport;
          var localCapabilities = transceiver.localCapabilities;
          var remoteCapabilities = transceiver.remoteCapabilities;
          var rejected = sdp.isRejected(mediaSection) && 0 === sdp.matchPrefix(mediaSection, "a=bundle-only").length;
          if (!rejected && !transceiver.rejected) {
            var remoteIceParameters = sdp.getIceParameters(mediaSection, sessionpart);
            var remoteDtlsParameters = sdp.getDtlsParameters(mediaSection, sessionpart);
            if (isIceLite) remoteDtlsParameters.role = "server";
            if (!pc.usingBundle || 0 === sdpMLineIndex) {
              pc._gather(transceiver.mid, sdpMLineIndex);
              if ("new" === iceTransport.state)
                iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? "controlling" : "controlled");
              if ("new" === dtlsTransport.state) dtlsTransport.start(remoteDtlsParameters);
            }
            var params = getCommonCapabilities(localCapabilities, remoteCapabilities);
            pc._transceive(transceiver, params.codecs.length > 0, false);
          }
        });
      }
      pc._localDescription = { type: description.type, sdp: description.sdp };
      if ("offer" === description.type) pc._updateSignalingState("have-local-offer");
      else pc._updateSignalingState("stable");
      return Promise.resolve();
    };
    RTCPeerConnection.prototype.setRemoteDescription = function(description) {
      var pc = this;
      if (-1 === ["offer", "answer"].indexOf(description.type))
        return Promise.reject(makeError("TypeError", 'Unsupported type "' + description.type + '"'));
      if (!isActionAllowedInSignalingState("setRemoteDescription", description.type, pc.signalingState) || pc._isClosed)
        return Promise.reject(
          makeError("InvalidStateError", "Can not set remote " + description.type + " in state " + pc.signalingState)
        );
      var streams = {};
      pc.remoteStreams.forEach(function(stream) {
        streams[stream.id] = stream;
      });
      var receiverList = [];
      var sections = sdp.splitSections(description.sdp);
      var sessionpart = sections.shift();
      var isIceLite = sdp.matchPrefix(sessionpart, "a=ice-lite").length > 0;
      var usingBundle = sdp.matchPrefix(sessionpart, "a=group:BUNDLE ").length > 0;
      pc.usingBundle = usingBundle;
      var iceOptions = sdp.matchPrefix(sessionpart, "a=ice-options:")[0];
      if (iceOptions)
        pc.canTrickleIceCandidates =
          iceOptions
            .substr(14)
            .split(" ")
            .indexOf("trickle") >= 0;
      else pc.canTrickleIceCandidates = false;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var lines = sdp.splitLines(mediaSection);
        var kind = sdp.getKind(mediaSection);
        var rejected = sdp.isRejected(mediaSection) && 0 === sdp.matchPrefix(mediaSection, "a=bundle-only").length;
        var protocol = lines[0].substr(2).split(" ")[2];
        var direction = sdp.getDirection(mediaSection, sessionpart);
        var remoteMsid = sdp.parseMsid(mediaSection);
        var mid = sdp.getMid(mediaSection) || sdp.generateIdentifier();
        if (rejected || ("application" === kind && ("DTLS/SCTP" === protocol || "UDP/DTLS/SCTP" === protocol))) {
          pc.transceivers[sdpMLineIndex] = { mid: mid, kind: kind, protocol: protocol, rejected: true };
          return;
        }
        if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected)
          pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
        var transceiver;
        var iceGatherer;
        var iceTransport;
        var dtlsTransport;
        var rtpReceiver;
        var sendEncodingParameters;
        var recvEncodingParameters;
        var localCapabilities;
        var track;
        var remoteCapabilities = sdp.parseRtpParameters(mediaSection);
        var remoteIceParameters;
        var remoteDtlsParameters;
        if (!rejected) {
          remoteIceParameters = sdp.getIceParameters(mediaSection, sessionpart);
          remoteDtlsParameters = sdp.getDtlsParameters(mediaSection, sessionpart);
          remoteDtlsParameters.role = "client";
        }
        recvEncodingParameters = sdp.parseRtpEncodingParameters(mediaSection);
        var rtcpParameters = sdp.parseRtcpParameters(mediaSection);
        var isComplete = sdp.matchPrefix(mediaSection, "a=end-of-candidates", sessionpart).length > 0;
        var cands = sdp
          .matchPrefix(mediaSection, "a=candidate:")
          .map(function(cand) {
            return sdp.parseCandidate(cand);
          })
          .filter(function(cand) {
            return 1 === cand.component;
          });
        if (
          ("offer" === description.type || "answer" === description.type) &&
          !rejected &&
          usingBundle &&
          sdpMLineIndex > 0 &&
          pc.transceivers[sdpMLineIndex]
        ) {
          pc._disposeIceAndDtlsTransports(sdpMLineIndex);
          pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
          pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
          pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;
          if (pc.transceivers[sdpMLineIndex].rtpSender)
            pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport);
          if (pc.transceivers[sdpMLineIndex].rtpReceiver)
            pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport);
        }
        if ("offer" === description.type && !rejected) {
          transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
          transceiver.mid = mid;
          if (!transceiver.iceGatherer) transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, usingBundle);
          if (cands.length && "new" === transceiver.iceTransport.state)
            if (isComplete && (!usingBundle || 0 === sdpMLineIndex))
              transceiver.iceTransport.setRemoteCandidates(cands);
            else
              cands.forEach(function(candidate) {
                maybeAddCandidate(transceiver.iceTransport, candidate);
              });
          localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);
          if (edgeVersion < 15019)
            localCapabilities.codecs = localCapabilities.codecs.filter(function(codec) {
              return "rtx" !== codec.name;
            });
          sendEncodingParameters = transceiver.sendEncodingParameters || [{ ssrc: 1001 * (2 * sdpMLineIndex + 2) }];
          var isNewTrack = false;
          if ("sendrecv" === direction || "sendonly" === direction) {
            isNewTrack = !transceiver.rtpReceiver;
            rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
            if (isNewTrack) {
              var stream;
              track = rtpReceiver.track;
              if (remoteMsid && "-" === remoteMsid.stream);
              else if (remoteMsid) {
                if (!streams[remoteMsid.stream]) {
                  streams[remoteMsid.stream] = new window.MediaStream();
                  Object.defineProperty(streams[remoteMsid.stream], "id", {
                    get: function() {
                      return remoteMsid.stream;
                    }
                  });
                }
                Object.defineProperty(track, "id", {
                  get: function() {
                    return remoteMsid.track;
                  }
                });
                stream = streams[remoteMsid.stream];
              } else {
                if (!streams.default) streams.default = new window.MediaStream();
                stream = streams.default;
              }
              if (stream) {
                addTrackToStreamAndFireEvent(track, stream);
                transceiver.associatedRemoteMediaStreams.push(stream);
              }
              receiverList.push([track, rtpReceiver, stream]);
            }
          } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
            transceiver.associatedRemoteMediaStreams.forEach(function(s) {
              var nativeTrack = s.getTracks().find(function(t) {
                return t.id === transceiver.rtpReceiver.track.id;
              });
              if (nativeTrack) removeTrackFromStreamAndFireEvent(nativeTrack, s);
            });
            transceiver.associatedRemoteMediaStreams = [];
          }
          transceiver.localCapabilities = localCapabilities;
          transceiver.remoteCapabilities = remoteCapabilities;
          transceiver.rtpReceiver = rtpReceiver;
          transceiver.rtcpParameters = rtcpParameters;
          transceiver.sendEncodingParameters = sendEncodingParameters;
          transceiver.recvEncodingParameters = recvEncodingParameters;
          pc._transceive(pc.transceivers[sdpMLineIndex], false, isNewTrack);
        } else if ("answer" === description.type && !rejected) {
          transceiver = pc.transceivers[sdpMLineIndex];
          iceGatherer = transceiver.iceGatherer;
          iceTransport = transceiver.iceTransport;
          dtlsTransport = transceiver.dtlsTransport;
          rtpReceiver = transceiver.rtpReceiver;
          sendEncodingParameters = transceiver.sendEncodingParameters;
          localCapabilities = transceiver.localCapabilities;
          pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
          pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
          pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;
          if (cands.length && "new" === iceTransport.state)
            if ((isIceLite || isComplete) && (!usingBundle || 0 === sdpMLineIndex))
              iceTransport.setRemoteCandidates(cands);
            else
              cands.forEach(function(candidate) {
                maybeAddCandidate(transceiver.iceTransport, candidate);
              });
          if (!usingBundle || 0 === sdpMLineIndex) {
            if ("new" === iceTransport.state) iceTransport.start(iceGatherer, remoteIceParameters, "controlling");
            if ("new" === dtlsTransport.state) dtlsTransport.start(remoteDtlsParameters);
          }
          var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
          var hasRtx = commonCapabilities.codecs.filter(function(c) {
            return "rtx" === c.name.toLowerCase();
          }).length;
          if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) delete transceiver.sendEncodingParameters[0].rtx;
          pc._transceive(
            transceiver,
            "sendrecv" === direction || "recvonly" === direction,
            "sendrecv" === direction || "sendonly" === direction
          );
          if (rtpReceiver && ("sendrecv" === direction || "sendonly" === direction)) {
            track = rtpReceiver.track;
            if (remoteMsid) {
              if (!streams[remoteMsid.stream]) streams[remoteMsid.stream] = new window.MediaStream();
              addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
              receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
            } else {
              if (!streams.default) streams.default = new window.MediaStream();
              addTrackToStreamAndFireEvent(track, streams.default);
              receiverList.push([track, rtpReceiver, streams.default]);
            }
          } else delete transceiver.rtpReceiver;
        }
      });
      if (void 0 === pc._dtlsRole) pc._dtlsRole = "offer" === description.type ? "active" : "passive";
      pc._remoteDescription = { type: description.type, sdp: description.sdp };
      if ("offer" === description.type) pc._updateSignalingState("have-remote-offer");
      else pc._updateSignalingState("stable");
      Object.keys(streams).forEach(function(sid) {
        var stream = streams[sid];
        if (stream.getTracks().length) {
          if (-1 === pc.remoteStreams.indexOf(stream)) {
            pc.remoteStreams.push(stream);
            var event = new Event("addstream");
            event.stream = stream;
            window.setTimeout(function() {
              pc._dispatchEvent("addstream", event);
            });
          }
          receiverList.forEach(function(item) {
            var track = item[0];
            var receiver = item[1];
            if (stream.id !== item[2].id) return;
            fireAddTrack(pc, track, receiver, [stream]);
          });
        }
      });
      receiverList.forEach(function(item) {
        if (item[2]) return;
        fireAddTrack(pc, item[0], item[1], []);
      });
      window.setTimeout(function() {
        if (!(pc && pc.transceivers)) return;
        pc.transceivers.forEach(function(transceiver) {
          if (
            transceiver.iceTransport &&
            "new" === transceiver.iceTransport.state &&
            transceiver.iceTransport.getRemoteCandidates().length > 0
          ) {
            console.warn("Timeout for addRemoteCandidate. Consider sending " + "an end-of-candidates notification");
            transceiver.iceTransport.addRemoteCandidate({});
          }
        });
      }, 4e3);
      return Promise.resolve();
    };
    RTCPeerConnection.prototype.close = function() {
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport) transceiver.iceTransport.stop();
        if (transceiver.dtlsTransport) transceiver.dtlsTransport.stop();
        if (transceiver.rtpSender) transceiver.rtpSender.stop();
        if (transceiver.rtpReceiver) transceiver.rtpReceiver.stop();
      });
      this._isClosed = true;
      this._updateSignalingState("closed");
    };
    RTCPeerConnection.prototype._updateSignalingState = function(newState) {
      this.signalingState = newState;
      var event = new Event("signalingstatechange");
      this._dispatchEvent("signalingstatechange", event);
    };
    RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
      var pc = this;
      if ("stable" !== this.signalingState || true === this.needNegotiation) return;
      this.needNegotiation = true;
      window.setTimeout(function() {
        if (pc.needNegotiation) {
          pc.needNegotiation = false;
          var event = new Event("negotiationneeded");
          pc._dispatchEvent("negotiationneeded", event);
        }
      }, 0);
    };
    RTCPeerConnection.prototype._updateIceConnectionState = function() {
      var newState;
      var states = { new: 0, closed: 0, checking: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 };
      this.transceivers.forEach(function(transceiver) {
        states[transceiver.iceTransport.state]++;
      });
      newState = "new";
      if (states.failed > 0) newState = "failed";
      else if (states.checking > 0) newState = "checking";
      else if (states.disconnected > 0) newState = "disconnected";
      else if (states.new > 0) newState = "new";
      else if (states.connected > 0) newState = "connected";
      else if (states.completed > 0) newState = "completed";
      if (newState !== this.iceConnectionState) {
        this.iceConnectionState = newState;
        var event = new Event("iceconnectionstatechange");
        this._dispatchEvent("iceconnectionstatechange", event);
      }
    };
    RTCPeerConnection.prototype._updateConnectionState = function() {
      var newState;
      var states = { new: 0, closed: 0, connecting: 0, connected: 0, completed: 0, disconnected: 0, failed: 0 };
      this.transceivers.forEach(function(transceiver) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      });
      states.connected += states.completed;
      newState = "new";
      if (states.failed > 0) newState = "failed";
      else if (states.connecting > 0) newState = "connecting";
      else if (states.disconnected > 0) newState = "disconnected";
      else if (states.new > 0) newState = "new";
      else if (states.connected > 0) newState = "connected";
      if (newState !== this.connectionState) {
        this.connectionState = newState;
        var event = new Event("connectionstatechange");
        this._dispatchEvent("connectionstatechange", event);
      }
    };
    RTCPeerConnection.prototype.createOffer = function() {
      var pc = this;
      if (pc._isClosed) return Promise.reject(makeError("InvalidStateError", "Can not call createOffer after close"));
      var numAudioTracks = pc.transceivers.filter(function(t) {
        return "audio" === t.kind;
      }).length;
      var numVideoTracks = pc.transceivers.filter(function(t) {
        return "video" === t.kind;
      }).length;
      var offerOptions = arguments[0];
      if (offerOptions) {
        if (offerOptions.mandatory || offerOptions.optional)
          throw new TypeError("Legacy mandatory/optional constraints not supported.");
        if (void 0 !== offerOptions.offerToReceiveAudio)
          if (true === offerOptions.offerToReceiveAudio) numAudioTracks = 1;
          else if (false === offerOptions.offerToReceiveAudio) numAudioTracks = 0;
          else numAudioTracks = offerOptions.offerToReceiveAudio;
        if (void 0 !== offerOptions.offerToReceiveVideo)
          if (true === offerOptions.offerToReceiveVideo) numVideoTracks = 1;
          else if (false === offerOptions.offerToReceiveVideo) numVideoTracks = 0;
          else numVideoTracks = offerOptions.offerToReceiveVideo;
      }
      pc.transceivers.forEach(function(transceiver) {
        if ("audio" === transceiver.kind) {
          numAudioTracks--;
          if (numAudioTracks < 0) transceiver.wantReceive = false;
        } else if ("video" === transceiver.kind) {
          numVideoTracks--;
          if (numVideoTracks < 0) transceiver.wantReceive = false;
        }
      });
      while (numAudioTracks > 0 || numVideoTracks > 0) {
        if (numAudioTracks > 0) {
          pc._createTransceiver("audio");
          numAudioTracks--;
        }
        if (numVideoTracks > 0) {
          pc._createTransceiver("video");
          numVideoTracks--;
        }
      }
      var sdp$$1 = sdp.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        var track = transceiver.track;
        var kind = transceiver.kind;
        var mid = transceiver.mid || sdp.generateIdentifier();
        transceiver.mid = mid;
        if (!transceiver.iceGatherer) transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, pc.usingBundle);
        var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
        if (edgeVersion < 15019)
          localCapabilities.codecs = localCapabilities.codecs.filter(function(codec) {
            return "rtx" !== codec.name;
          });
        localCapabilities.codecs.forEach(function(codec) {
          if ("H264" === codec.name && void 0 === codec.parameters["level-asymmetry-allowed"])
            codec.parameters["level-asymmetry-allowed"] = "1";
          if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs)
            transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
              if (
                codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                codec.clockRate === remoteCodec.clockRate
              )
                codec.preferredPayloadType = remoteCodec.payloadType;
            });
        });
        localCapabilities.headerExtensions.forEach(function(hdrExt) {
          var remoteExtensions =
            (transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions) || [];
          remoteExtensions.forEach(function(rHdrExt) {
            if (hdrExt.uri === rHdrExt.uri) hdrExt.id = rHdrExt.id;
          });
        });
        var sendEncodingParameters = transceiver.sendEncodingParameters || [{ ssrc: 1001 * (2 * sdpMLineIndex + 1) }];
        if (track)
          if (edgeVersion >= 15019 && "video" === kind && !sendEncodingParameters[0].rtx)
            sendEncodingParameters[0].rtx = { ssrc: sendEncodingParameters[0].ssrc + 1 };
        if (transceiver.wantReceive)
          transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
        transceiver.localCapabilities = localCapabilities;
        transceiver.sendEncodingParameters = sendEncodingParameters;
      });
      if ("max-compat" !== pc._config.bundlePolicy)
        sdp$$1 +=
          "a=group:BUNDLE " +
          pc.transceivers
            .map(function(t) {
              return t.mid;
            })
            .join(" ") +
          "\r\n";
      sdp$$1 += "a=ice-options:trickle\r\n";
      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        sdp$$1 += writeMediaSection(
          transceiver,
          transceiver.localCapabilities,
          "offer",
          transceiver.stream,
          pc._dtlsRole
        );
        sdp$$1 += "a=rtcp-rsize\r\n";
        if (transceiver.iceGatherer && "new" !== pc.iceGatheringState && (0 === sdpMLineIndex || !pc.usingBundle)) {
          transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
            cand.component = 1;
            sdp$$1 += "a=" + sdp.writeCandidate(cand) + "\r\n";
          });
          if ("completed" === transceiver.iceGatherer.state) sdp$$1 += "a=end-of-candidates\r\n";
        }
      });
      var desc = new window.RTCSessionDescription({ type: "offer", sdp: sdp$$1 });
      return Promise.resolve(desc);
    };
    RTCPeerConnection.prototype.createAnswer = function() {
      var pc = this;
      if (pc._isClosed) return Promise.reject(makeError("InvalidStateError", "Can not call createAnswer after close"));
      if (!("have-remote-offer" === pc.signalingState || "have-local-pranswer" === pc.signalingState))
        return Promise.reject(
          makeError("InvalidStateError", "Can not call createAnswer in signalingState " + pc.signalingState)
        );
      var sdp$$1 = sdp.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
      if (pc.usingBundle)
        sdp$$1 +=
          "a=group:BUNDLE " +
          pc.transceivers
            .map(function(t) {
              return t.mid;
            })
            .join(" ") +
          "\r\n";
      sdp$$1 += "a=ice-options:trickle\r\n";
      var mediaSectionsInOffer = sdp.getMediaSections(pc._remoteDescription.sdp).length;
      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        if (sdpMLineIndex + 1 > mediaSectionsInOffer) return;
        if (transceiver.rejected) {
          if ("application" === transceiver.kind)
            if ("DTLS/SCTP" === transceiver.protocol) sdp$$1 += "m=application 0 DTLS/SCTP 5000\r\n";
            else sdp$$1 += "m=application 0 " + transceiver.protocol + " webrtc-datachannel\r\n";
          else if ("audio" === transceiver.kind)
            sdp$$1 += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\n" + "a=rtpmap:0 PCMU/8000\r\n";
          else if ("video" === transceiver.kind)
            sdp$$1 += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\n" + "a=rtpmap:120 VP8/90000\r\n";
          sdp$$1 += "c=IN IP4 0.0.0.0\r\n" + "a=inactive\r\n" + "a=mid:" + transceiver.mid + "\r\n";
          return;
        }
        if (transceiver.stream) {
          var localTrack;
          if ("audio" === transceiver.kind) localTrack = transceiver.stream.getAudioTracks()[0];
          else if ("video" === transceiver.kind) localTrack = transceiver.stream.getVideoTracks()[0];
          if (localTrack)
            if (edgeVersion >= 15019 && "video" === transceiver.kind && !transceiver.sendEncodingParameters[0].rtx)
              transceiver.sendEncodingParameters[0].rtx = { ssrc: transceiver.sendEncodingParameters[0].ssrc + 1 };
        }
        var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
        var hasRtx = commonCapabilities.codecs.filter(function(c) {
          return "rtx" === c.name.toLowerCase();
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) delete transceiver.sendEncodingParameters[0].rtx;
        sdp$$1 += writeMediaSection(transceiver, commonCapabilities, "answer", transceiver.stream, pc._dtlsRole);
        if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) sdp$$1 += "a=rtcp-rsize\r\n";
      });
      var desc = new window.RTCSessionDescription({ type: "answer", sdp: sdp$$1 });
      return Promise.resolve(desc);
    };
    RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
      var pc = this;
      var sections;
      if (candidate && !(void 0 !== candidate.sdpMLineIndex || candidate.sdpMid))
        return Promise.reject(new TypeError("sdpMLineIndex or sdpMid required"));
      return new Promise(function(resolve, reject) {
        if (!pc._remoteDescription)
          return reject(makeError("InvalidStateError", "Can not add ICE candidate without a remote description"));
        else if (!candidate || "" === candidate.candidate)
          for (var j = 0; j < pc.transceivers.length; j++) {
            if (pc.transceivers[j].rejected) continue;
            pc.transceivers[j].iceTransport.addRemoteCandidate({});
            sections = sdp.getMediaSections(pc._remoteDescription.sdp);
            sections[j] += "a=end-of-candidates\r\n";
            pc._remoteDescription.sdp = sdp.getDescription(pc._remoteDescription.sdp) + sections.join("");
            if (pc.usingBundle) break;
          }
        else {
          var sdpMLineIndex = candidate.sdpMLineIndex;
          if (candidate.sdpMid)
            for (var i = 0; i < pc.transceivers.length; i++)
              if (pc.transceivers[i].mid === candidate.sdpMid) {
                sdpMLineIndex = i;
                break;
              }
          var transceiver = pc.transceivers[sdpMLineIndex];
          if (transceiver) {
            if (transceiver.rejected) return resolve();
            var cand = Object.keys(candidate.candidate).length > 0 ? sdp.parseCandidate(candidate.candidate) : {};
            if ("tcp" === cand.protocol && (0 === cand.port || 9 === cand.port)) return resolve();
            if (cand.component && 1 !== cand.component) return resolve();
            if (
              0 === sdpMLineIndex ||
              (sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport)
            )
              if (!maybeAddCandidate(transceiver.iceTransport, cand))
                return reject(makeError("OperationError", "Can not add ICE candidate"));
            var candidateString = candidate.candidate.trim();
            if (0 === candidateString.indexOf("a=")) candidateString = candidateString.substr(2);
            sections = sdp.getMediaSections(pc._remoteDescription.sdp);
            sections[sdpMLineIndex] += "a=" + (cand.type ? candidateString : "end-of-candidates") + "\r\n";
            pc._remoteDescription.sdp = sdp.getDescription(pc._remoteDescription.sdp) + sections.join("");
          } else return reject(makeError("OperationError", "Can not add ICE candidate"));
        }
        resolve();
      });
    };
    RTCPeerConnection.prototype.getStats = function(selector) {
      if (selector && selector instanceof window.MediaStreamTrack) {
        var senderOrReceiver = null;
        this.transceivers.forEach(function(transceiver) {
          if (transceiver.rtpSender && transceiver.rtpSender.track === selector)
            senderOrReceiver = transceiver.rtpSender;
          else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector)
            senderOrReceiver = transceiver.rtpReceiver;
        });
        if (!senderOrReceiver) throw makeError("InvalidAccessError", "Invalid selector.");
        return senderOrReceiver.getStats();
      }
      var promises = [];
      this.transceivers.forEach(function(transceiver) {
        ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function(method) {
          if (transceiver[method]) promises.push(transceiver[method].getStats());
        });
      });
      return Promise.all(promises).then(function(allStats) {
        var results = new Map();
        allStats.forEach(function(stats) {
          stats.forEach(function(stat) {
            results.set(stat.id, stat);
          });
        });
        return results;
      });
    };
    var ortcObjects = ["RTCRtpSender", "RTCRtpReceiver", "RTCIceGatherer", "RTCIceTransport", "RTCDtlsTransport"];
    ortcObjects.forEach(function(ortcObjectName) {
      var obj = window[ortcObjectName];
      if (obj && obj.prototype && obj.prototype.getStats) {
        var nativeGetstats = obj.prototype.getStats;
        obj.prototype.getStats = function() {
          return nativeGetstats.apply(this).then(function(nativeStats) {
            var mapStats = new Map();
            Object.keys(nativeStats).forEach(function(id) {
              nativeStats[id].type = fixStatsType(nativeStats[id]);
              mapStats.set(id, nativeStats[id]);
            });
            return mapStats;
          });
        };
      }
    });
    var methods = ["createOffer", "createAnswer"];
    methods.forEach(function(method) {
      var nativeMethod = RTCPeerConnection.prototype[method];
      RTCPeerConnection.prototype[method] = function() {
        var args = arguments;
        if ("function" === typeof args[0] || "function" === typeof args[1])
          return nativeMethod.apply(this, [arguments[2]]).then(
            function(description) {
              if ("function" === typeof args[0]) args[0].apply(null, [description]);
            },
            function(error) {
              if ("function" === typeof args[1]) args[1].apply(null, [error]);
            }
          );
        return nativeMethod.apply(this, arguments);
      };
    });
    methods = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"];
    methods.forEach(function(method) {
      var nativeMethod = RTCPeerConnection.prototype[method];
      RTCPeerConnection.prototype[method] = function() {
        var args = arguments;
        if ("function" === typeof args[1] || "function" === typeof args[2])
          return nativeMethod.apply(this, arguments).then(
            function() {
              if ("function" === typeof args[1]) args[1].apply(null);
            },
            function(error) {
              if ("function" === typeof args[2]) args[2].apply(null, [error]);
            }
          );
        return nativeMethod.apply(this, arguments);
      };
    });
    ["getStats"].forEach(function(method) {
      var nativeMethod = RTCPeerConnection.prototype[method];
      RTCPeerConnection.prototype[method] = function() {
        var args = arguments;
        if ("function" === typeof args[1])
          return nativeMethod.apply(this, arguments).then(function() {
            if ("function" === typeof args[1]) args[1].apply(null);
          });
        return nativeMethod.apply(this, arguments);
      };
    });
    return RTCPeerConnection;
  };
  var getusermedia$1 = function(window) {
    var navigator = window && window.navigator;
    var shimError_ = function(e) {
      return {
        name: { PermissionDeniedError: "NotAllowedError" }[e.name] || e.name,
        message: e.message,
        constraint: e.constraint,
        toString: function() {
          return this.name;
        }
      };
    };
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      return origGetUserMedia(c).catch(function(e) {
        return Promise.reject(shimError_(e));
      });
    };
  };
  var edge_shim = {
    shimGetUserMedia: getusermedia$1,
    shimPeerConnection: function(window) {
      var browserDetails = utils.detectBrowser(window);
      if (window.RTCIceGatherer) {
        if (!window.RTCIceCandidate)
          window.RTCIceCandidate = function(args) {
            return args;
          };
        if (!window.RTCSessionDescription)
          window.RTCSessionDescription = function(args) {
            return args;
          };
        if (browserDetails.version < 15025) {
          var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, "enabled");
          Object.defineProperty(window.MediaStreamTrack.prototype, "enabled", {
            set: function(value) {
              origMSTEnabled.set.call(this, value);
              var ev = new Event("enabled");
              ev.enabled = value;
              this.dispatchEvent(ev);
            }
          });
        }
      }
      if (window.RTCRtpSender && !("dtmf" in window.RTCRtpSender.prototype))
        Object.defineProperty(window.RTCRtpSender.prototype, "dtmf", {
          get: function() {
            if (void 0 === this._dtmf)
              if ("audio" === this.track.kind) this._dtmf = new window.RTCDtmfSender(this);
              else if ("video" === this.track.kind) this._dtmf = null;
            return this._dtmf;
          }
        });
      if (window.RTCDtmfSender && !window.RTCDTMFSender) window.RTCDTMFSender = window.RTCDtmfSender;
      var RTCPeerConnectionShim = rtcpeerconnection(window, browserDetails.version);
      window.RTCPeerConnection = function(config) {
        if (config && config.iceServers) config.iceServers = filtericeservers(config.iceServers);
        return new RTCPeerConnectionShim(config);
      };
      window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
    },
    shimReplaceTrack: function(window) {
      if (window.RTCRtpSender && !("replaceTrack" in window.RTCRtpSender.prototype))
        window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
    }
  };
  var logging$2 = utils.log;
  var getusermedia$2 = function(window) {
    var browserDetails = utils.detectBrowser(window);
    var navigator = window && window.navigator;
    var MediaStreamTrack = window && window.MediaStreamTrack;
    var shimError_ = function(e) {
      return {
        name:
          {
            InternalError: "NotReadableError",
            NotSupportedError: "TypeError",
            PermissionDeniedError: "NotAllowedError",
            SecurityError: "NotAllowedError"
          }[e.name] || e.name,
        message:
          {
            "The operation is insecure.":
              "The request is not allowed by the " + "user agent or the platform in the current context."
          }[e.message] || e.message,
        constraint: e.constraint,
        toString: function() {
          return this.name + (this.message && ": ") + this.message;
        }
      };
    };
    var getUserMedia_ = function(constraints, onSuccess, onError) {
      var constraintsToFF37_ = function(c) {
        if ("object" !== typeof c || c.require) return c;
        var require = [];
        Object.keys(c).forEach(function(key) {
          if ("require" === key || "advanced" === key || "mediaSource" === key) return;
          var r = (c[key] = "object" === typeof c[key] ? c[key] : { ideal: c[key] });
          if (void 0 !== r.min || void 0 !== r.max || void 0 !== r.exact) require.push(key);
          if (void 0 !== r.exact) {
            if ("number" === typeof r.exact) r.min = r.max = r.exact;
            else c[key] = r.exact;
            delete r.exact;
          }
          if (void 0 !== r.ideal) {
            c.advanced = c.advanced || [];
            var oc = {};
            if ("number" === typeof r.ideal) oc[key] = { min: r.ideal, max: r.ideal };
            else oc[key] = r.ideal;
            c.advanced.push(oc);
            delete r.ideal;
            if (!Object.keys(r).length) delete c[key];
          }
        });
        if (require.length) c.require = require;
        return c;
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      if (browserDetails.version < 38) {
        logging$2("spec: " + JSON.stringify(constraints));
        if (constraints.audio) constraints.audio = constraintsToFF37_(constraints.audio);
        if (constraints.video) constraints.video = constraintsToFF37_(constraints.video);
        logging$2("ff37: " + JSON.stringify(constraints));
      }
      return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
        onError(shimError_(e));
      });
    };
    var getUserMediaPromise_ = function(constraints) {
      return new Promise(function(resolve, reject) {
        getUserMedia_(constraints, resolve, reject);
      });
    };
    if (!navigator.mediaDevices)
      navigator.mediaDevices = {
        getUserMedia: getUserMediaPromise_,
        addEventListener: function() {},
        removeEventListener: function() {}
      };
    navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices ||
      function() {
        return new Promise(function(resolve) {
          var infos = [
            { kind: "audioinput", deviceId: "default", label: "", groupId: "" },
            { kind: "videoinput", deviceId: "default", label: "", groupId: "" }
          ];
          resolve(infos);
        });
      };
    if (browserDetails.version < 41) {
      var orgEnumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
      navigator.mediaDevices.enumerateDevices = function() {
        return orgEnumerateDevices().then(void 0, function(e) {
          if ("NotFoundError" === e.name) return [];
          throw e;
        });
      };
    }
    if (browserDetails.version < 49) {
      var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = function(c) {
        return origGetUserMedia(c).then(
          function(stream) {
            if ((c.audio && !stream.getAudioTracks().length) || (c.video && !stream.getVideoTracks().length)) {
              stream.getTracks().forEach(function(track) {
                track.stop();
              });
              throw new DOMException("The object can not be found here.", "NotFoundError");
            }
            return stream;
          },
          function(e) {
            return Promise.reject(shimError_(e));
          }
        );
      };
    }
    if (!(browserDetails.version > 55 && "autoGainControl" in navigator.mediaDevices.getSupportedConstraints())) {
      var remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = function(c) {
        if ("object" === typeof c && "object" === typeof c.audio) {
          c = JSON.parse(JSON.stringify(c));
          remap(c.audio, "autoGainControl", "mozAutoGainControl");
          remap(c.audio, "noiseSuppression", "mozNoiseSuppression");
        }
        return nativeGetUserMedia(c);
      };
      if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
        var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
        MediaStreamTrack.prototype.getSettings = function() {
          var obj = nativeGetSettings.apply(this, arguments);
          remap(obj, "mozAutoGainControl", "autoGainControl");
          remap(obj, "mozNoiseSuppression", "noiseSuppression");
          return obj;
        };
      }
      if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
        var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
        MediaStreamTrack.prototype.applyConstraints = function(c) {
          if ("audio" === this.kind && "object" === typeof c) {
            c = JSON.parse(JSON.stringify(c));
            remap(c, "autoGainControl", "mozAutoGainControl");
            remap(c, "noiseSuppression", "mozNoiseSuppression");
          }
          return nativeApplyConstraints.apply(this, [c]);
        };
      }
    }
    navigator.getUserMedia = function(constraints, onSuccess, onError) {
      if (browserDetails.version < 44) return getUserMedia_(constraints, onSuccess, onError);
      utils.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia");
      navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    };
  };
  var firefox_shim = {
    shimGetUserMedia: getusermedia$2,
    shimOnTrack: function(window) {
      if ("object" === typeof window && window.RTCPeerConnection && !("ontrack" in window.RTCPeerConnection.prototype))
        Object.defineProperty(window.RTCPeerConnection.prototype, "ontrack", {
          get: function() {
            return this._ontrack;
          },
          set: function(f) {
            if (this._ontrack) {
              this.removeEventListener("track", this._ontrack);
              this.removeEventListener("addstream", this._ontrackpoly);
            }
            this.addEventListener("track", (this._ontrack = f));
            this.addEventListener(
              "addstream",
              (this._ontrackpoly = function(e) {
                e.stream.getTracks().forEach(
                  function(track) {
                    var event = new Event("track");
                    event.track = track;
                    event.receiver = { track: track };
                    event.transceiver = { receiver: event.receiver };
                    event.streams = [e.stream];
                    this.dispatchEvent(event);
                  }.bind(this)
                );
              }.bind(this))
            );
          },
          enumerable: true,
          configurable: true
        });
      if (
        "object" === typeof window &&
        window.RTCTrackEvent &&
        "receiver" in window.RTCTrackEvent.prototype &&
        !("transceiver" in window.RTCTrackEvent.prototype)
      )
        Object.defineProperty(window.RTCTrackEvent.prototype, "transceiver", {
          get: function() {
            return { receiver: this.receiver };
          }
        });
    },
    shimSourceObject: function(window) {
      if ("object" === typeof window)
        if (window.HTMLMediaElement && !("srcObject" in window.HTMLMediaElement.prototype))
          Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
            get: function() {
              return this.mozSrcObject;
            },
            set: function(stream) {
              this.mozSrcObject = stream;
            }
          });
    },
    shimPeerConnection: function(window) {
      var browserDetails = utils.detectBrowser(window);
      if ("object" !== typeof window || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) return;
      if (!window.RTCPeerConnection) {
        window.RTCPeerConnection = function(pcConfig, pcConstraints) {
          if (browserDetails.version < 38)
            if (pcConfig && pcConfig.iceServers) {
              var newIceServers = [];
              for (var i = 0; i < pcConfig.iceServers.length; i++) {
                var server = pcConfig.iceServers[i];
                if (server.hasOwnProperty("urls"))
                  for (var j = 0; j < server.urls.length; j++) {
                    var newServer = { url: server.urls[j] };
                    if (0 === server.urls[j].indexOf("turn")) {
                      newServer.username = server.username;
                      newServer.credential = server.credential;
                    }
                    newIceServers.push(newServer);
                  }
                else newIceServers.push(pcConfig.iceServers[i]);
              }
              pcConfig.iceServers = newIceServers;
            }
          return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
        };
        window.RTCPeerConnection.prototype = window.mozRTCPeerConnection.prototype;
        if (window.mozRTCPeerConnection.generateCertificate)
          Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
            get: function() {
              return window.mozRTCPeerConnection.generateCertificate;
            }
          });
        window.RTCSessionDescription = window.mozRTCSessionDescription;
        window.RTCIceCandidate = window.mozRTCIceCandidate;
      }
      ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(method) {
        var nativeMethod = window.RTCPeerConnection.prototype[method];
        window.RTCPeerConnection.prototype[method] = function() {
          arguments[0] = new ("addIceCandidate" === method ? window.RTCIceCandidate : window.RTCSessionDescription)(
            arguments[0]
          );
          return nativeMethod.apply(this, arguments);
        };
      });
      var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
      window.RTCPeerConnection.prototype.addIceCandidate = function() {
        if (!arguments[0]) {
          if (arguments[1]) arguments[1].apply(null);
          return Promise.resolve();
        }
        return nativeAddIceCandidate.apply(this, arguments);
      };
      var makeMapStats = function(stats) {
        var map = new Map();
        Object.keys(stats).forEach(function(key) {
          map.set(key, stats[key]);
          map[key] = stats[key];
        });
        return map;
      };
      var modernStatsTypes = {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate"
      };
      var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
      window.RTCPeerConnection.prototype.getStats = function(selector, onSucc, onErr) {
        return nativeGetStats
          .apply(this, [selector || null])
          .then(function(stats) {
            if (browserDetails.version < 48) stats = makeMapStats(stats);
            if (browserDetails.version < 53 && !onSucc)
              try {
                stats.forEach(function(stat) {
                  stat.type = modernStatsTypes[stat.type] || stat.type;
                });
              } catch (e) {
                if ("TypeError" !== e.name) throw e;
                stats.forEach(function(stat, i) {
                  stats.set(i, Object.assign({}, stat, { type: modernStatsTypes[stat.type] || stat.type }));
                });
              }
            return stats;
          })
          .then(onSucc, onErr);
      };
    },
    shimSenderGetStats: function(window) {
      if (!("object" === typeof window && window.RTCPeerConnection && window.RTCRtpSender)) return;
      if (window.RTCRtpSender && "getStats" in window.RTCRtpSender.prototype) return;
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      if (origGetSenders)
        window.RTCPeerConnection.prototype.getSenders = function() {
          var pc = this;
          var senders = origGetSenders.apply(pc, []);
          senders.forEach(function(sender) {
            sender._pc = pc;
          });
          return senders;
        };
      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      if (origAddTrack)
        window.RTCPeerConnection.prototype.addTrack = function() {
          var sender = origAddTrack.apply(this, arguments);
          sender._pc = this;
          return sender;
        };
      window.RTCRtpSender.prototype.getStats = function() {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
      };
    },
    shimReceiverGetStats: function(window) {
      if (!("object" === typeof window && window.RTCPeerConnection && window.RTCRtpSender)) return;
      if (window.RTCRtpSender && "getStats" in window.RTCRtpReceiver.prototype) return;
      var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
      if (origGetReceivers)
        window.RTCPeerConnection.prototype.getReceivers = function() {
          var pc = this;
          var receivers = origGetReceivers.apply(pc, []);
          receivers.forEach(function(receiver) {
            receiver._pc = pc;
          });
          return receivers;
        };
      utils.wrapPeerConnectionEvent(window, "track", function(e) {
        e.receiver._pc = e.srcElement;
        return e;
      });
      window.RTCRtpReceiver.prototype.getStats = function() {
        return this._pc.getStats(this.track);
      };
    },
    shimRemoveStream: function(window) {
      if (!window.RTCPeerConnection || "removeStream" in window.RTCPeerConnection.prototype) return;
      window.RTCPeerConnection.prototype.removeStream = function(stream) {
        var pc = this;
        utils.deprecated("removeStream", "removeTrack");
        this.getSenders().forEach(function(sender) {
          if (sender.track && -1 !== stream.getTracks().indexOf(sender.track)) pc.removeTrack(sender);
        });
      };
    },
    shimRTCDataChannel: function(window) {
      if (window.DataChannel && !window.RTCDataChannel) window.RTCDataChannel = window.DataChannel;
    },
    shimGetDisplayMedia: function(window, preferredMediaSource) {
      if ("getDisplayMedia" in window.navigator) return;
      navigator.getDisplayMedia = function(constraints) {
        if (!(constraints && constraints.video)) {
          var err = new DOMException("getDisplayMedia without video " + "constraints is undefined");
          err.name = "NotFoundError";
          err.code = 8;
          return Promise.reject(err);
        }
        if (true === constraints.video) constraints.video = { mediaSource: preferredMediaSource };
        else constraints.video.mediaSource = preferredMediaSource;
        return navigator.mediaDevices.getUserMedia(constraints);
      };
    }
  };
  var safari_shim = {
    shimLocalStreamsAPI: function(window) {
      if ("object" !== typeof window || !window.RTCPeerConnection) return;
      if (!("getLocalStreams" in window.RTCPeerConnection.prototype))
        window.RTCPeerConnection.prototype.getLocalStreams = function() {
          if (!this._localStreams) this._localStreams = [];
          return this._localStreams;
        };
      if (!("getStreamById" in window.RTCPeerConnection.prototype))
        window.RTCPeerConnection.prototype.getStreamById = function(id) {
          var result = null;
          if (this._localStreams)
            this._localStreams.forEach(function(stream) {
              if (stream.id === id) result = stream;
            });
          if (this._remoteStreams)
            this._remoteStreams.forEach(function(stream) {
              if (stream.id === id) result = stream;
            });
          return result;
        };
      if (!("addStream" in window.RTCPeerConnection.prototype)) {
        var _addTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addStream = function(stream) {
          if (!this._localStreams) this._localStreams = [];
          if (-1 === this._localStreams.indexOf(stream)) this._localStreams.push(stream);
          var pc = this;
          stream.getTracks().forEach(function(track) {
            _addTrack.call(pc, track, stream);
          });
        };
        window.RTCPeerConnection.prototype.addTrack = function(track, stream) {
          if (stream)
            if (!this._localStreams) this._localStreams = [stream];
            else if (-1 === this._localStreams.indexOf(stream)) this._localStreams.push(stream);
          return _addTrack.call(this, track, stream);
        };
      }
      if (!("removeStream" in window.RTCPeerConnection.prototype))
        window.RTCPeerConnection.prototype.removeStream = function(stream) {
          if (!this._localStreams) this._localStreams = [];
          var index = this._localStreams.indexOf(stream);
          if (-1 === index) return;
          this._localStreams.splice(index, 1);
          var pc = this;
          var tracks = stream.getTracks();
          this.getSenders().forEach(function(sender) {
            if (-1 !== tracks.indexOf(sender.track)) pc.removeTrack(sender);
          });
        };
    },
    shimRemoteStreamsAPI: function(window) {
      if ("object" !== typeof window || !window.RTCPeerConnection) return;
      if (!("getRemoteStreams" in window.RTCPeerConnection.prototype))
        window.RTCPeerConnection.prototype.getRemoteStreams = function() {
          return this._remoteStreams ? this._remoteStreams : [];
        };
      if (!("onaddstream" in window.RTCPeerConnection.prototype)) {
        Object.defineProperty(window.RTCPeerConnection.prototype, "onaddstream", {
          get: function() {
            return this._onaddstream;
          },
          set: function(f) {
            if (this._onaddstream) this.removeEventListener("addstream", this._onaddstream);
            this.addEventListener("addstream", (this._onaddstream = f));
          }
        });
        var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
        window.RTCPeerConnection.prototype.setRemoteDescription = function() {
          var pc = this;
          if (!this._onaddstreampoly)
            this.addEventListener(
              "track",
              (this._onaddstreampoly = function(e) {
                e.streams.forEach(function(stream) {
                  if (!pc._remoteStreams) pc._remoteStreams = [];
                  if (pc._remoteStreams.indexOf(stream) >= 0) return;
                  pc._remoteStreams.push(stream);
                  var event = new Event("addstream");
                  event.stream = stream;
                  pc.dispatchEvent(event);
                });
              })
            );
          return origSetRemoteDescription.apply(pc, arguments);
        };
      }
    },
    shimCallbacksAPI: function(window) {
      if ("object" !== typeof window || !window.RTCPeerConnection) return;
      var prototype = window.RTCPeerConnection.prototype;
      var createOffer = prototype.createOffer;
      var createAnswer = prototype.createAnswer;
      var setLocalDescription = prototype.setLocalDescription;
      var setRemoteDescription = prototype.setRemoteDescription;
      var addIceCandidate = prototype.addIceCandidate;
      prototype.createOffer = function(successCallback, failureCallback) {
        var options = arguments.length >= 2 ? arguments[2] : arguments[0];
        var promise = createOffer.apply(this, [options]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
      };
      prototype.createAnswer = function(successCallback, failureCallback) {
        var options = arguments.length >= 2 ? arguments[2] : arguments[0];
        var promise = createAnswer.apply(this, [options]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
      };
      var withCallback = function(description, successCallback, failureCallback) {
        var promise = setLocalDescription.apply(this, [description]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
      };
      prototype.setLocalDescription = withCallback;
      withCallback = function(description, successCallback, failureCallback) {
        var promise = setRemoteDescription.apply(this, [description]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
      };
      prototype.setRemoteDescription = withCallback;
      withCallback = function(candidate, successCallback, failureCallback) {
        var promise = addIceCandidate.apply(this, [candidate]);
        if (!failureCallback) return promise;
        promise.then(successCallback, failureCallback);
        return Promise.resolve();
      };
      prototype.addIceCandidate = withCallback;
    },
    shimGetUserMedia: function(window) {
      var navigator = window && window.navigator;
      if (!navigator.getUserMedia)
        if (navigator.webkitGetUserMedia) navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
        else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
          navigator.getUserMedia = function(constraints, cb, errcb) {
            navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
          }.bind(navigator);
    },
    shimRTCIceServerUrls: function(window) {
      var OrigPeerConnection = window.RTCPeerConnection;
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (pcConfig && pcConfig.iceServers) {
          var newIceServers = [];
          for (var i = 0; i < pcConfig.iceServers.length; i++) {
            var server = pcConfig.iceServers[i];
            if (!server.hasOwnProperty("urls") && server.hasOwnProperty("url")) {
              utils.deprecated("RTCIceServer.url", "RTCIceServer.urls");
              server = JSON.parse(JSON.stringify(server));
              server.urls = server.url;
              delete server.url;
              newIceServers.push(server);
            } else newIceServers.push(pcConfig.iceServers[i]);
          }
          pcConfig.iceServers = newIceServers;
        }
        return new OrigPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
      if ("generateCertificate" in window.RTCPeerConnection)
        Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
          get: function() {
            return OrigPeerConnection.generateCertificate;
          }
        });
    },
    shimTrackEventTransceiver: function(window) {
      if (
        "object" === typeof window &&
        window.RTCPeerConnection &&
        "receiver" in window.RTCTrackEvent.prototype &&
        !window.RTCTransceiver
      )
        Object.defineProperty(window.RTCTrackEvent.prototype, "transceiver", {
          get: function() {
            return { receiver: this.receiver };
          }
        });
    },
    shimCreateOfferLegacy: function(window) {
      var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
      window.RTCPeerConnection.prototype.createOffer = function(offerOptions) {
        var pc = this;
        if (offerOptions) {
          if ("undefined" !== typeof offerOptions.offerToReceiveAudio)
            offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
          var audioTransceiver = pc.getTransceivers().find(function(transceiver) {
            return transceiver.sender.track && "audio" === transceiver.sender.track.kind;
          });
          if (false === offerOptions.offerToReceiveAudio && audioTransceiver) {
            if ("sendrecv" === audioTransceiver.direction)
              if (audioTransceiver.setDirection) audioTransceiver.setDirection("sendonly");
              else audioTransceiver.direction = "sendonly";
            else if ("recvonly" === audioTransceiver.direction)
              if (audioTransceiver.setDirection) audioTransceiver.setDirection("inactive");
              else audioTransceiver.direction = "inactive";
          } else if (true === offerOptions.offerToReceiveAudio && !audioTransceiver) pc.addTransceiver("audio");
          if ("undefined" !== typeof offerOptions.offerToReceiveVideo)
            offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
          var videoTransceiver = pc.getTransceivers().find(function(transceiver) {
            return transceiver.sender.track && "video" === transceiver.sender.track.kind;
          });
          if (false === offerOptions.offerToReceiveVideo && videoTransceiver) {
            if ("sendrecv" === videoTransceiver.direction) videoTransceiver.setDirection("sendonly");
            else if ("recvonly" === videoTransceiver.direction) videoTransceiver.setDirection("inactive");
          } else if (true === offerOptions.offerToReceiveVideo && !videoTransceiver) pc.addTransceiver("video");
        }
        return origCreateOffer.apply(pc, arguments);
      };
    }
  };
  var sdp$1 = createCommonjsModule(function(module) {
    var SDPUtils = {};
    SDPUtils.generateIdentifier = function() {
      return Math.random()
        .toString(36)
        .substr(2, 10);
    };
    SDPUtils.localCName = SDPUtils.generateIdentifier();
    SDPUtils.splitLines = function(blob) {
      return blob
        .trim()
        .split("\n")
        .map(function(line) {
          return line.trim();
        });
    };
    SDPUtils.splitSections = function(blob) {
      var parts = blob.split("\nm=");
      return parts.map(function(part, index) {
        return (index > 0 ? "m=" + part : part).trim() + "\r\n";
      });
    };
    SDPUtils.getDescription = function(blob) {
      var sections = SDPUtils.splitSections(blob);
      return sections && sections[0];
    };
    SDPUtils.getMediaSections = function(blob) {
      var sections = SDPUtils.splitSections(blob);
      sections.shift();
      return sections;
    };
    SDPUtils.matchPrefix = function(blob, prefix) {
      return SDPUtils.splitLines(blob).filter(function(line) {
        return 0 === line.indexOf(prefix);
      });
    };
    SDPUtils.parseCandidate = function(line) {
      var parts;
      if (0 === line.indexOf("a=candidate:")) parts = line.substring(12).split(" ");
      else parts = line.substring(10).split(" ");
      var candidate = {
        foundation: parts[0],
        component: parseInt(parts[1], 10),
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        address: parts[4],
        port: parseInt(parts[5], 10),
        type: parts[7]
      };
      for (var i = 8; i < parts.length; i += 2)
        switch (parts[i]) {
          case "raddr":
            candidate.relatedAddress = parts[i + 1];
            break;
          case "rport":
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
          case "tcptype":
            candidate.tcpType = parts[i + 1];
            break;
          case "ufrag":
            candidate.ufrag = parts[i + 1];
            candidate.usernameFragment = parts[i + 1];
            break;
          default:
            candidate[parts[i]] = parts[i + 1];
        }
      return candidate;
    };
    SDPUtils.writeCandidate = function(candidate) {
      var sdp = [];
      sdp.push(candidate.foundation);
      sdp.push(candidate.component);
      sdp.push(candidate.protocol.toUpperCase());
      sdp.push(candidate.priority);
      sdp.push(candidate.address || candidate.ip);
      sdp.push(candidate.port);
      var type = candidate.type;
      sdp.push("typ");
      sdp.push(type);
      if ("host" !== type && candidate.relatedAddress && candidate.relatedPort) {
        sdp.push("raddr");
        sdp.push(candidate.relatedAddress);
        sdp.push("rport");
        sdp.push(candidate.relatedPort);
      }
      if (candidate.tcpType && "tcp" === candidate.protocol.toLowerCase()) {
        sdp.push("tcptype");
        sdp.push(candidate.tcpType);
      }
      if (candidate.usernameFragment || candidate.ufrag) {
        sdp.push("ufrag");
        sdp.push(candidate.usernameFragment || candidate.ufrag);
      }
      return "candidate:" + sdp.join(" ");
    };
    SDPUtils.parseIceOptions = function(line) {
      return line.substr(14).split(" ");
    };
    SDPUtils.parseRtpMap = function(line) {
      var parts = line.substr(9).split(" ");
      var parsed = { payloadType: parseInt(parts.shift(), 10) };
      parts = parts[0].split("/");
      parsed.name = parts[0];
      parsed.clockRate = parseInt(parts[1], 10);
      parsed.channels = 3 === parts.length ? parseInt(parts[2], 10) : 1;
      parsed.numChannels = parsed.channels;
      return parsed;
    };
    SDPUtils.writeRtpMap = function(codec) {
      var pt = codec.payloadType;
      if (void 0 !== codec.preferredPayloadType) pt = codec.preferredPayloadType;
      var channels = codec.channels || codec.numChannels || 1;
      return (
        "a=rtpmap:" + pt + " " + codec.name + "/" + codec.clockRate + (1 !== channels ? "/" + channels : "") + "\r\n"
      );
    };
    SDPUtils.parseExtmap = function(line) {
      var parts = line.substr(9).split(" ");
      return {
        id: parseInt(parts[0], 10),
        direction: parts[0].indexOf("/") > 0 ? parts[0].split("/")[1] : "sendrecv",
        uri: parts[1]
      };
    };
    SDPUtils.writeExtmap = function(headerExtension) {
      return (
        "a=extmap:" +
        (headerExtension.id || headerExtension.preferredId) +
        (headerExtension.direction && "sendrecv" !== headerExtension.direction ? "/" + headerExtension.direction : "") +
        " " +
        headerExtension.uri +
        "\r\n"
      );
    };
    SDPUtils.parseFmtp = function(line) {
      var parsed = {};
      var kv;
      var parts = line.substr(line.indexOf(" ") + 1).split(";");
      for (var j = 0; j < parts.length; j++) {
        kv = parts[j].trim().split("=");
        parsed[kv[0].trim()] = kv[1];
      }
      return parsed;
    };
    SDPUtils.writeFmtp = function(codec) {
      var line = "";
      var pt = codec.payloadType;
      if (void 0 !== codec.preferredPayloadType) pt = codec.preferredPayloadType;
      if (codec.parameters && Object.keys(codec.parameters).length) {
        var params = [];
        Object.keys(codec.parameters).forEach(function(param) {
          if (codec.parameters[param]) params.push(param + "=" + codec.parameters[param]);
          else params.push(param);
        });
        line += "a=fmtp:" + pt + " " + params.join(";") + "\r\n";
      }
      return line;
    };
    SDPUtils.parseRtcpFb = function(line) {
      var parts = line.substr(line.indexOf(" ") + 1).split(" ");
      return { type: parts.shift(), parameter: parts.join(" ") };
    };
    SDPUtils.writeRtcpFb = function(codec) {
      var lines = "";
      var pt = codec.payloadType;
      if (void 0 !== codec.preferredPayloadType) pt = codec.preferredPayloadType;
      if (codec.rtcpFeedback && codec.rtcpFeedback.length)
        codec.rtcpFeedback.forEach(function(fb) {
          lines +=
            "a=rtcp-fb:" +
            pt +
            " " +
            fb.type +
            (fb.parameter && fb.parameter.length ? " " + fb.parameter : "") +
            "\r\n";
        });
      return lines;
    };
    SDPUtils.parseSsrcMedia = function(line) {
      var sp = line.indexOf(" ");
      var parts = { ssrc: parseInt(line.substr(7, sp - 7), 10) };
      var colon = line.indexOf(":", sp);
      if (colon > -1) {
        parts.attribute = line.substr(sp + 1, colon - sp - 1);
        parts.value = line.substr(colon + 1);
      } else parts.attribute = line.substr(sp + 1);
      return parts;
    };
    SDPUtils.parseSsrcGroup = function(line) {
      var parts = line.substr(13).split(" ");
      return {
        semantics: parts.shift(),
        ssrcs: parts.map(function(ssrc) {
          return parseInt(ssrc, 10);
        })
      };
    };
    SDPUtils.getMid = function(mediaSection) {
      var mid = SDPUtils.matchPrefix(mediaSection, "a=mid:")[0];
      if (mid) return mid.substr(6);
    };
    SDPUtils.parseFingerprint = function(line) {
      var parts = line.substr(14).split(" ");
      return { algorithm: parts[0].toLowerCase(), value: parts[1] };
    };
    SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, "a=fingerprint:");
      return { role: "auto", fingerprints: lines.map(SDPUtils.parseFingerprint) };
    };
    SDPUtils.writeDtlsParameters = function(params, setupType) {
      var sdp = "a=setup:" + setupType + "\r\n";
      params.fingerprints.forEach(function(fp) {
        sdp += "a=fingerprint:" + fp.algorithm + " " + fp.value + "\r\n";
      });
      return sdp;
    };
    SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      lines = lines.concat(SDPUtils.splitLines(sessionpart));
      var iceParameters = {
        usernameFragment: lines
          .filter(function(line) {
            return 0 === line.indexOf("a=ice-ufrag:");
          })[0]
          .substr(12),
        password: lines
          .filter(function(line) {
            return 0 === line.indexOf("a=ice-pwd:");
          })[0]
          .substr(10)
      };
      return iceParameters;
    };
    SDPUtils.writeIceParameters = function(params) {
      return "a=ice-ufrag:" + params.usernameFragment + "\r\n" + "a=ice-pwd:" + params.password + "\r\n";
    };
    SDPUtils.parseRtpParameters = function(mediaSection) {
      var description = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] };
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(" ");
      for (var i = 3; i < mline.length; i++) {
        var pt = mline[i];
        var rtpmapline = SDPUtils.matchPrefix(mediaSection, "a=rtpmap:" + pt + " ")[0];
        if (rtpmapline) {
          var codec = SDPUtils.parseRtpMap(rtpmapline);
          var fmtps = SDPUtils.matchPrefix(mediaSection, "a=fmtp:" + pt + " ");
          codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
          codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, "a=rtcp-fb:" + pt + " ").map(SDPUtils.parseRtcpFb);
          description.codecs.push(codec);
          switch (codec.name.toUpperCase()) {
            case "RED":
            case "ULPFEC":
              description.fecMechanisms.push(codec.name.toUpperCase());
          }
        }
      }
      SDPUtils.matchPrefix(mediaSection, "a=extmap:").forEach(function(line) {
        description.headerExtensions.push(SDPUtils.parseExtmap(line));
      });
      return description;
    };
    SDPUtils.writeRtpDescription = function(kind, caps) {
      var sdp = "";
      sdp += "m=" + kind + " ";
      sdp += caps.codecs.length > 0 ? "9" : "0";
      sdp += " UDP/TLS/RTP/SAVPF ";
      sdp +=
        caps.codecs
          .map(function(codec) {
            if (void 0 !== codec.preferredPayloadType) return codec.preferredPayloadType;
            return codec.payloadType;
          })
          .join(" ") + "\r\n";
      sdp += "c=IN IP4 0.0.0.0\r\n";
      sdp += "a=rtcp:9 IN IP4 0.0.0.0\r\n";
      caps.codecs.forEach(function(codec) {
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFmtp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
      });
      var maxptime = 0;
      caps.codecs.forEach(function(codec) {
        if (codec.maxptime > maxptime) maxptime = codec.maxptime;
      });
      if (maxptime > 0) sdp += "a=maxptime:" + maxptime + "\r\n";
      sdp += "a=rtcp-mux\r\n";
      if (caps.headerExtensions)
        caps.headerExtensions.forEach(function(extension) {
          sdp += SDPUtils.writeExtmap(extension);
        });
      return sdp;
    };
    SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
      var encodingParameters = [];
      var description = SDPUtils.parseRtpParameters(mediaSection);
      var hasRed = -1 !== description.fecMechanisms.indexOf("RED");
      var hasUlpfec = -1 !== description.fecMechanisms.indexOf("ULPFEC");
      var ssrcs = SDPUtils.matchPrefix(mediaSection, "a=ssrc:")
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(parts) {
          return "cname" === parts.attribute;
        });
      var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
      var secondarySsrc;
      var flows = SDPUtils.matchPrefix(mediaSection, "a=ssrc-group:FID").map(function(line) {
        var parts = line.substr(17).split(" ");
        return parts.map(function(part) {
          return parseInt(part, 10);
        });
      });
      if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) secondarySsrc = flows[0][1];
      description.codecs.forEach(function(codec) {
        if ("RTX" === codec.name.toUpperCase() && codec.parameters.apt) {
          var encParam = { ssrc: primarySsrc, codecPayloadType: parseInt(codec.parameters.apt, 10) };
          if (primarySsrc && secondarySsrc) encParam.rtx = { ssrc: secondarySsrc };
          encodingParameters.push(encParam);
          if (hasRed) {
            encParam = JSON.parse(JSON.stringify(encParam));
            encParam.fec = { ssrc: primarySsrc, mechanism: hasUlpfec ? "red+ulpfec" : "red" };
            encodingParameters.push(encParam);
          }
        }
      });
      if (0 === encodingParameters.length && primarySsrc) encodingParameters.push({ ssrc: primarySsrc });
      var bandwidth = SDPUtils.matchPrefix(mediaSection, "b=");
      if (bandwidth.length) {
        if (0 === bandwidth[0].indexOf("b=TIAS:")) bandwidth = parseInt(bandwidth[0].substr(7), 10);
        else if (0 === bandwidth[0].indexOf("b=AS:"))
          bandwidth = 1e3 * parseInt(bandwidth[0].substr(5), 10) * 0.95 - 50 * 40 * 8;
        else bandwidth = void 0;
        encodingParameters.forEach(function(params) {
          params.maxBitrate = bandwidth;
        });
      }
      return encodingParameters;
    };
    SDPUtils.parseRtcpParameters = function(mediaSection) {
      var rtcpParameters = {};
      var remoteSsrc = SDPUtils.matchPrefix(mediaSection, "a=ssrc:")
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(obj) {
          return "cname" === obj.attribute;
        })[0];
      if (remoteSsrc) {
        rtcpParameters.cname = remoteSsrc.value;
        rtcpParameters.ssrc = remoteSsrc.ssrc;
      }
      var rsize = SDPUtils.matchPrefix(mediaSection, "a=rtcp-rsize");
      rtcpParameters.reducedSize = rsize.length > 0;
      rtcpParameters.compound = 0 === rsize.length;
      var mux = SDPUtils.matchPrefix(mediaSection, "a=rtcp-mux");
      rtcpParameters.mux = mux.length > 0;
      return rtcpParameters;
    };
    SDPUtils.parseMsid = function(mediaSection) {
      var parts;
      var spec = SDPUtils.matchPrefix(mediaSection, "a=msid:");
      if (1 === spec.length) {
        parts = spec[0].substr(7).split(" ");
        return { stream: parts[0], track: parts[1] };
      }
      var planB = SDPUtils.matchPrefix(mediaSection, "a=ssrc:")
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(msidParts) {
          return "msid" === msidParts.attribute;
        });
      if (planB.length > 0) {
        parts = planB[0].value.split(" ");
        return { stream: parts[0], track: parts[1] };
      }
    };
    SDPUtils.generateSessionId = function() {
      return Math.random()
        .toString()
        .substr(2, 21);
    };
    SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
      var sessionId;
      var version = void 0 !== sessVer ? sessVer : 2;
      if (sessId) sessionId = sessId;
      else sessionId = SDPUtils.generateSessionId();
      var user = sessUser || "thisisadapterortc";
      return (
        "v=0\r\n" + "o=" + user + " " + sessionId + " " + version + " IN IP4 127.0.0.1\r\n" + "s=-\r\n" + "t=0 0\r\n"
      );
    };
    SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
      var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
      sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());
      sdp += SDPUtils.writeDtlsParameters(
        transceiver.dtlsTransport.getLocalParameters(),
        "offer" === type ? "actpass" : "active"
      );
      sdp += "a=mid:" + transceiver.mid + "\r\n";
      if (transceiver.direction) sdp += "a=" + transceiver.direction + "\r\n";
      else if (transceiver.rtpSender && transceiver.rtpReceiver) sdp += "a=sendrecv\r\n";
      else if (transceiver.rtpSender) sdp += "a=sendonly\r\n";
      else if (transceiver.rtpReceiver) sdp += "a=recvonly\r\n";
      else sdp += "a=inactive\r\n";
      if (transceiver.rtpSender) {
        var msid = "msid:" + stream.id + " " + transceiver.rtpSender.track.id + "\r\n";
        sdp += "a=" + msid;
        sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " " + msid;
        if (transceiver.sendEncodingParameters[0].rtx) {
          sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " " + msid;
          sdp +=
            "a=ssrc-group:FID " +
            transceiver.sendEncodingParameters[0].ssrc +
            " " +
            transceiver.sendEncodingParameters[0].rtx.ssrc +
            "\r\n";
        }
      }
      sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].ssrc + " cname:" + SDPUtils.localCName + "\r\n";
      if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx)
        sdp += "a=ssrc:" + transceiver.sendEncodingParameters[0].rtx.ssrc + " cname:" + SDPUtils.localCName + "\r\n";
      return sdp;
    };
    SDPUtils.getDirection = function(mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      for (var i = 0; i < lines.length; i++)
        switch (lines[i]) {
          case "a=sendrecv":
          case "a=sendonly":
          case "a=recvonly":
          case "a=inactive":
            return lines[i].substr(2);
        }
      if (sessionpart) return SDPUtils.getDirection(sessionpart);
      return "sendrecv";
    };
    SDPUtils.getKind = function(mediaSection) {
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(" ");
      return mline[0].substr(2);
    };
    SDPUtils.isRejected = function(mediaSection) {
      return "0" === mediaSection.split(" ", 2)[1];
    };
    SDPUtils.parseMLine = function(mediaSection) {
      var lines = SDPUtils.splitLines(mediaSection);
      var parts = lines[0].substr(2).split(" ");
      return { kind: parts[0], port: parseInt(parts[1], 10), protocol: parts[2], fmt: parts.slice(3).join(" ") };
    };
    SDPUtils.parseOLine = function(mediaSection) {
      var line = SDPUtils.matchPrefix(mediaSection, "o=")[0];
      var parts = line.substr(2).split(" ");
      return {
        username: parts[0],
        sessionId: parts[1],
        sessionVersion: parseInt(parts[2], 10),
        netType: parts[3],
        addressType: parts[4],
        address: parts[5]
      };
    };
    SDPUtils.isValidSDP = function(blob) {
      if ("string" !== typeof blob || 0 === blob.length) return false;
      var lines = SDPUtils.splitLines(blob);
      for (var i = 0; i < lines.length; i++) if (lines[i].length < 2 || "=" !== lines[i].charAt(1)) return false;
      return true;
    };
    module.exports = SDPUtils;
  });
  var common_shim = {
    shimRTCIceCandidate: function(window) {
      if (!window.RTCIceCandidate || (window.RTCIceCandidate && "foundation" in window.RTCIceCandidate.prototype))
        return;
      var NativeRTCIceCandidate = window.RTCIceCandidate;
      window.RTCIceCandidate = function(args) {
        if ("object" === typeof args && args.candidate && 0 === args.candidate.indexOf("a=")) {
          args = JSON.parse(JSON.stringify(args));
          args.candidate = args.candidate.substr(2);
        }
        if (args.candidate && args.candidate.length) {
          var nativeCandidate = new NativeRTCIceCandidate(args);
          var parsedCandidate = sdp$1.parseCandidate(args.candidate);
          var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);
          augmentedCandidate.toJSON = function() {
            return {
              candidate: augmentedCandidate.candidate,
              sdpMid: augmentedCandidate.sdpMid,
              sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
              usernameFragment: augmentedCandidate.usernameFragment
            };
          };
          return augmentedCandidate;
        }
        return new NativeRTCIceCandidate(args);
      };
      window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
      utils.wrapPeerConnectionEvent(window, "icecandidate", function(e) {
        if (e.candidate)
          Object.defineProperty(e, "candidate", { value: new window.RTCIceCandidate(e.candidate), writable: "false" });
        return e;
      });
    },
    shimCreateObjectURL: function(window) {
      var URL = window && window.URL;
      if (
        !(
          "object" === typeof window &&
          window.HTMLMediaElement &&
          "srcObject" in window.HTMLMediaElement.prototype &&
          URL.createObjectURL &&
          URL.revokeObjectURL
        )
      )
        return;
      var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
      var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
      var streams = new Map(),
        newId = 0;
      URL.createObjectURL = function(stream) {
        if ("getTracks" in stream) {
          var url = "polyblob:" + ++newId;
          streams.set(url, stream);
          utils.deprecated("URL.createObjectURL(stream)", "elem.srcObject = stream");
          return url;
        }
        return nativeCreateObjectURL(stream);
      };
      URL.revokeObjectURL = function(url) {
        nativeRevokeObjectURL(url);
        streams.delete(url);
      };
      var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype, "src");
      Object.defineProperty(window.HTMLMediaElement.prototype, "src", {
        get: function() {
          return dsc.get.apply(this);
        },
        set: function(url) {
          this.srcObject = streams.get(url) || null;
          return dsc.set.apply(this, [url]);
        }
      });
      var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
      window.HTMLMediaElement.prototype.setAttribute = function() {
        if (2 === arguments.length && "src" === ("" + arguments[0]).toLowerCase())
          this.srcObject = streams.get(arguments[1]) || null;
        return nativeSetAttribute.apply(this, arguments);
      };
    },
    shimMaxMessageSize: function(window) {
      if (window.RTCSctpTransport || !window.RTCPeerConnection) return;
      var browserDetails = utils.detectBrowser(window);
      if (!("sctp" in window.RTCPeerConnection.prototype))
        Object.defineProperty(window.RTCPeerConnection.prototype, "sctp", {
          get: function() {
            return "undefined" === typeof this._sctp ? null : this._sctp;
          }
        });
      var sctpInDescription = function(description) {
        var sections = sdp$1.splitSections(description.sdp);
        sections.shift();
        return sections.some(function(mediaSection) {
          var mLine = sdp$1.parseMLine(mediaSection);
          return mLine && "application" === mLine.kind && -1 !== mLine.protocol.indexOf("SCTP");
        });
      };
      var getRemoteFirefoxVersion = function(description) {
        var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (null === match || match.length < 2) return -1;
        var version = parseInt(match[1], 10);
        return version !== version ? -1 : version;
      };
      var getCanSendMaxMessageSize = function(remoteIsFirefox) {
        var canSendMaxMessageSize = 65536;
        if ("firefox" === browserDetails.browser)
          if (browserDetails.version < 57)
            if (-1 === remoteIsFirefox) canSendMaxMessageSize = 16384;
            else canSendMaxMessageSize = 2147483637;
          else if (browserDetails.version < 60) canSendMaxMessageSize = 57 === browserDetails.version ? 65535 : 65536;
          else canSendMaxMessageSize = 2147483637;
        return canSendMaxMessageSize;
      };
      var getMaxMessageSize = function(description, remoteIsFirefox) {
        var maxMessageSize = 65536;
        if ("firefox" === browserDetails.browser && 57 === browserDetails.version) maxMessageSize = 65535;
        var match = sdp$1.matchPrefix(description.sdp, "a=max-message-size:");
        if (match.length > 0) maxMessageSize = parseInt(match[0].substr(19), 10);
        else if ("firefox" === browserDetails.browser && -1 !== remoteIsFirefox) maxMessageSize = 2147483637;
        return maxMessageSize;
      };
      var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function() {
        var pc = this;
        pc._sctp = null;
        if (sctpInDescription(arguments[0])) {
          var isFirefox = getRemoteFirefoxVersion(arguments[0]);
          var canSendMMS = getCanSendMaxMessageSize(isFirefox);
          var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
          var maxMessageSize;
          if (0 === canSendMMS && 0 === remoteMMS) maxMessageSize = Number.POSITIVE_INFINITY;
          else if (0 === canSendMMS || 0 === remoteMMS) maxMessageSize = Math.max(canSendMMS, remoteMMS);
          else maxMessageSize = Math.min(canSendMMS, remoteMMS);
          var sctp = {};
          Object.defineProperty(sctp, "maxMessageSize", {
            get: function() {
              return maxMessageSize;
            }
          });
          pc._sctp = sctp;
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    },
    shimSendThrowTypeError: function(window) {
      if (!(window.RTCPeerConnection && "createDataChannel" in window.RTCPeerConnection.prototype)) return;
      function wrapDcSend(dc, pc) {
        var origDataChannelSend = dc.send;
        dc.send = function() {
          var data = arguments[0];
          var length = data.length || data.size || data.byteLength;
          if ("open" === dc.readyState && pc.sctp && length > pc.sctp.maxMessageSize)
            throw new TypeError("Message too large (can send a maximum of " + pc.sctp.maxMessageSize + " bytes)");
          return origDataChannelSend.apply(dc, arguments);
        };
      }
      var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
      window.RTCPeerConnection.prototype.createDataChannel = function() {
        var pc = this;
        var dataChannel = origCreateDataChannel.apply(pc, arguments);
        wrapDcSend(dataChannel, pc);
        return dataChannel;
      };
      utils.wrapPeerConnectionEvent(window, "datachannel", function(e) {
        wrapDcSend(e.channel, e.target);
        return e;
      });
    }
  };
  var adapter_factory = function(dependencies, opts) {
    var window = dependencies && dependencies.window;
    var options = { shimChrome: true, shimFirefox: true, shimEdge: true, shimSafari: true };
    for (var key in opts) if (hasOwnProperty.call(opts, key)) options[key] = opts[key];
    var logging = utils.log;
    var browserDetails = utils.detectBrowser(window);
    var chromeShim = chrome_shim || null;
    var edgeShim = edge_shim || null;
    var firefoxShim = firefox_shim || null;
    var safariShim = safari_shim || null;
    var commonShim = common_shim || null;
    var adapter = {
      browserDetails: browserDetails,
      commonShim: commonShim,
      extractVersion: utils.extractVersion,
      disableLog: utils.disableLog,
      disableWarnings: utils.disableWarnings
    };
    switch (browserDetails.browser) {
      case "chrome":
        if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
          logging("Chrome shim is not included in this adapter release.");
          return adapter;
        }
        logging("adapter.js shimming chrome.");
        adapter.browserShim = chromeShim;
        commonShim.shimCreateObjectURL(window);
        chromeShim.shimGetUserMedia(window);
        chromeShim.shimMediaStream(window);
        chromeShim.shimSourceObject(window);
        chromeShim.shimPeerConnection(window);
        chromeShim.shimOnTrack(window);
        chromeShim.shimAddTrackRemoveTrack(window);
        chromeShim.shimGetSendersWithDtmf(window);
        chromeShim.shimSenderReceiverGetStats(window);
        chromeShim.fixNegotiationNeeded(window);
        commonShim.shimRTCIceCandidate(window);
        commonShim.shimMaxMessageSize(window);
        commonShim.shimSendThrowTypeError(window);
        break;
      case "firefox":
        if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
          logging("Firefox shim is not included in this adapter release.");
          return adapter;
        }
        logging("adapter.js shimming firefox.");
        adapter.browserShim = firefoxShim;
        commonShim.shimCreateObjectURL(window);
        firefoxShim.shimGetUserMedia(window);
        firefoxShim.shimSourceObject(window);
        firefoxShim.shimPeerConnection(window);
        firefoxShim.shimOnTrack(window);
        firefoxShim.shimRemoveStream(window);
        firefoxShim.shimSenderGetStats(window);
        firefoxShim.shimReceiverGetStats(window);
        firefoxShim.shimRTCDataChannel(window);
        commonShim.shimRTCIceCandidate(window);
        commonShim.shimMaxMessageSize(window);
        commonShim.shimSendThrowTypeError(window);
        break;
      case "edge":
        if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
          logging("MS edge shim is not included in this adapter release.");
          return adapter;
        }
        logging("adapter.js shimming edge.");
        adapter.browserShim = edgeShim;
        commonShim.shimCreateObjectURL(window);
        edgeShim.shimGetUserMedia(window);
        edgeShim.shimPeerConnection(window);
        edgeShim.shimReplaceTrack(window);
        commonShim.shimMaxMessageSize(window);
        commonShim.shimSendThrowTypeError(window);
        break;
      case "safari":
        if (!safariShim || !options.shimSafari) {
          logging("Safari shim is not included in this adapter release.");
          return adapter;
        }
        logging("adapter.js shimming safari.");
        adapter.browserShim = safariShim;
        commonShim.shimCreateObjectURL(window);
        safariShim.shimRTCIceServerUrls(window);
        safariShim.shimCreateOfferLegacy(window);
        safariShim.shimCallbacksAPI(window);
        safariShim.shimLocalStreamsAPI(window);
        safariShim.shimRemoteStreamsAPI(window);
        safariShim.shimTrackEventTransceiver(window);
        safariShim.shimGetUserMedia(window);
        commonShim.shimRTCIceCandidate(window);
        commonShim.shimMaxMessageSize(window);
        commonShim.shimSendThrowTypeError(window);
        break;
      default:
        logging("Unsupported browser!");
    }
    return adapter;
  };
  adapter_factory({ window: commonjsGlobal.window });
  _fixReWks("match", 1, function(defined, MATCH, $match) {
    return [
      function match(regexp) {
        var O = defined(this);
        var fn = void 0 == regexp ? void 0 : regexp[MATCH];
        return void 0 !== fn ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      $match
    ];
  });
  var $indexOf = _arrayIncludes(false);
  var $native = [].indexOf;
  var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
  _export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), "Array", {
    indexOf: function indexOf(searchElement) {
      return NEGATIVE_ZERO ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
    }
  });
  var dP$1 = _objectDp.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME$1 = "name";
  NAME$1 in FProto ||
    (_descriptors &&
      dP$1(FProto, NAME$1, {
        configurable: true,
        get: function() {
          try {
            return ("" + this).match(nameRE)[1];
          } catch (e) {
            return "";
          }
        }
      }));
  var _typeof_1 = createCommonjsModule(function(module) {
    function _typeof2(obj) {
      if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator)
        _typeof2 = function _typeof2(obj) {
          return typeof obj;
        };
      else
        _typeof2 = function _typeof2(obj) {
          return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
            ? "symbol"
            : typeof obj;
        };
      return _typeof2(obj);
    }
    function _typeof(obj) {
      if ("function" === typeof Symbol && "symbol" === _typeof2(Symbol.iterator))
        module.exports = _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      else
        module.exports = _typeof = function _typeof(obj) {
          return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
            ? "symbol"
            : _typeof2(obj);
        };
      return _typeof(obj);
    }
    module.exports = _typeof;
  });
  var uaParser = createCommonjsModule(function(module, exports) {
    /*!
	 * UAParser.js v0.7.19
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 or MIT
	 */
    (function(window, undefined) {
      var LIBVERSION = "0.7.19",
        EMPTY = "",
        UNKNOWN = "?",
        FUNC_TYPE = "function",
        UNDEF_TYPE = "undefined",
        OBJ_TYPE = "object",
        STR_TYPE = "string",
        MAJOR = "major",
        MODEL = "model",
        NAME = "name",
        TYPE = "type",
        VENDOR = "vendor",
        VERSION = "version",
        ARCHITECTURE = "architecture",
        CONSOLE = "console",
        MOBILE = "mobile",
        TABLET = "tablet",
        SMARTTV = "smarttv",
        WEARABLE = "wearable",
        EMBEDDED = "embedded";
      var util = {
        extend: function(regexes, extensions) {
          var margedRegexes = {};
          for (var i in regexes)
            if (extensions[i] && extensions[i].length % 2 === 0) margedRegexes[i] = extensions[i].concat(regexes[i]);
            else margedRegexes[i] = regexes[i];
          return margedRegexes;
        },
        has: function(str1, str2) {
          if ("string" === typeof str1) return -1 !== str2.toLowerCase().indexOf(str1.toLowerCase());
          else return false;
        },
        lowerize: function(str) {
          return str.toLowerCase();
        },
        major: function(version) {
          return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, "").split(".")[0] : undefined;
        },
        trim: function(str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }
      };
      var mapper = {
        rgx: function(ua, arrays) {
          var j,
            k,
            p,
            q,
            matches,
            match,
            i = 0;
          while (i < arrays.length && !matches) {
            var regex = arrays[i],
              props = arrays[i + 1];
            j = k = 0;
            while (j < regex.length && !matches) {
              matches = regex[j++].exec(ua);
              if (!!matches)
                for (p = 0; p < props.length; p++) {
                  match = matches[++k];
                  q = props[p];
                  if (typeof q === OBJ_TYPE && q.length > 0) {
                    if (2 == q.length)
                      if (typeof q[1] == FUNC_TYPE) this[q[0]] = q[1].call(this, match);
                      else this[q[0]] = q[1];
                    else if (3 == q.length)
                      if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test))
                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                      else this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                    else if (4 == q.length) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                  } else this[q] = match ? match : undefined;
                }
            }
            i += 2;
          }
        },
        str: function(str, map) {
          for (var i in map)
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
              for (var j = 0; j < map[i].length; j++)
                if (util.has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
            } else if (util.has(map[i], str)) return i === UNKNOWN ? undefined : i;
          return str;
        }
      };
      var maps = {
        browser: {
          oldsafari: {
            version: {
              "1.0": "/8",
              1.2: "/1",
              1.3: "/3",
              "2.0": "/412",
              "2.0.2": "/416",
              "2.0.3": "/417",
              "2.0.4": "/419",
              "?": "/"
            }
          }
        },
        device: {
          amazon: { model: { "Fire Phone": ["SD", "KF"] } },
          sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } }
        },
        os: {
          windows: {
            version: {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2000: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM"
            }
          }
        }
      };
      var regexes = {
        browser: [
          [
            /(opera\smini)\/([\w\.-]+)/i,
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
            /(opera).+version\/([\w\.]+)/i,
            /(opera)[\/\s]+([\w\.]+)/i
          ],
          [NAME, VERSION],
          [/(opios)[\/\s]+([\w\.]+)/i],
          [[NAME, "Opera Mini"], VERSION],
          [/\s(opr)\/([\w\.]+)/i],
          [[NAME, "Opera"], VERSION],
          [
            /(kindle)\/([\w\.]+)/i,
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
            /(?:ms|\()(ie)\s([\w\.]+)/i,
            /(rekonq)\/([\w\.]*)/i,
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i
          ],
          [NAME, VERSION],
          [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
          [[NAME, "IE"], VERSION],
          [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
          [[NAME, "Edge"], VERSION],
          [/(yabrowser)\/([\w\.]+)/i],
          [[NAME, "Yandex"], VERSION],
          [/(puffin)\/([\w\.]+)/i],
          [[NAME, "Puffin"], VERSION],
          [/(focus)\/([\w\.]+)/i],
          [[NAME, "Firefox Focus"], VERSION],
          [/(opt)\/([\w\.]+)/i],
          [[NAME, "Opera Touch"], VERSION],
          [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
          [[NAME, "UCBrowser"], VERSION],
          [/(comodo_dragon)\/([\w\.]+)/i],
          [[NAME, /_/g, " "], VERSION],
          [/(micromessenger)\/([\w\.]+)/i],
          [[NAME, "WeChat"], VERSION],
          [/(brave)\/([\w\.]+)/i],
          [[NAME, "Brave"], VERSION],
          [/(qqbrowserlite)\/([\w\.]+)/i],
          [NAME, VERSION],
          [/(QQ)\/([\d\.]+)/i],
          [NAME, VERSION],
          [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
          [NAME, VERSION],
          [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
          [NAME, VERSION],
          [/(2345Explorer)[\/\s]?([\w\.]+)/i],
          [NAME, VERSION],
          [/(MetaSr)[\/\s]?([\w\.]+)/i],
          [NAME],
          [/(LBBROWSER)/i],
          [NAME],
          [/xiaomi\/miuibrowser\/([\w\.]+)/i],
          [VERSION, [NAME, "MIUI Browser"]],
          [/;fbav\/([\w\.]+);/i],
          [VERSION, [NAME, "Facebook"]],
          [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
          [NAME, VERSION],
          [/headlesschrome(?:\/([\w\.]+)|\s)/i],
          [VERSION, [NAME, "Chrome Headless"]],
          [/\swv\).+(chrome)\/([\w\.]+)/i],
          [[NAME, /(.+)/, "$1 WebView"], VERSION],
          [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
          [[NAME, /(.+(?:g|us))(.+)/, "$1 $2"], VERSION],
          [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
          [VERSION, [NAME, "Android Browser"]],
          [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
          [NAME, VERSION],
          [/(dolfin)\/([\w\.]+)/i],
          [[NAME, "Dolphin"], VERSION],
          [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
          [[NAME, "Chrome"], VERSION],
          [/(coast)\/([\w\.]+)/i],
          [[NAME, "Opera Coast"], VERSION],
          [/fxios\/([\w\.-]+)/i],
          [VERSION, [NAME, "Firefox"]],
          [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
          [VERSION, [NAME, "Mobile Safari"]],
          [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
          [VERSION, NAME],
          [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
          [[NAME, "GSA"], VERSION],
          [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
          [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]],
          [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
          [NAME, VERSION],
          [/(navigator|netscape)\/([\w\.-]+)/i],
          [[NAME, "Netscape"], VERSION],
          [
            /(swiftfox)/i,
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
            /(links)\s\(([\w\.]+)/i,
            /(gobrowser)\/?([\w\.]*)/i,
            /(ice\s?browser)\/v?([\w\._]+)/i,
            /(mosaic)[\/\s]([\w\.]+)/i
          ],
          [NAME, VERSION]
        ],
        cpu: [
          [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
          [[ARCHITECTURE, "amd64"]],
          [/(ia32(?=;))/i],
          [[ARCHITECTURE, util.lowerize]],
          [/((?:i[346]|x)86)[;\)]/i],
          [[ARCHITECTURE, "ia32"]],
          [/windows\s(ce|mobile);\sppc;/i],
          [[ARCHITECTURE, "arm"]],
          [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
          [[ARCHITECTURE, /ower/, "", util.lowerize]],
          [/(sun4\w)[;\)]/i],
          [[ARCHITECTURE, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
          ],
          [[ARCHITECTURE, util.lowerize]]
        ],
        device: [
          [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
          [MODEL, VENDOR, [TYPE, TABLET]],
          [/applecoremedia\/[\w\.]+ \((ipad)/],
          [MODEL, [VENDOR, "Apple"], [TYPE, TABLET]],
          [/(apple\s{0,1}tv)/i],
          [[MODEL, "Apple TV"], [VENDOR, "Apple"]],
          [
            /(archos)\s(gamepad2?)/i,
            /(hp).+(touchpad)/i,
            /(hp).+(tablet)/i,
            /(kindle)\/([\w\.]+)/i,
            /\s(nook)[\w\s]+build\/(\w+)/i,
            /(dell)\s(strea[kpr\s\d]*[\dko])/i
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [/(kf[A-z]+)\sbuild\/.+silk\//i],
          [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]],
          [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
          [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, "Amazon"], [TYPE, MOBILE]],
          [/android.+aft([bms])\sbuild/i],
          [MODEL, [VENDOR, "Amazon"], [TYPE, SMARTTV]],
          [/\((ip[honed|\s\w*]+);.+(apple)/i],
          [MODEL, VENDOR, [TYPE, MOBILE]],
          [/\((ip[honed|\s\w*]+);/i],
          [MODEL, [VENDOR, "Apple"], [TYPE, MOBILE]],
          [
            /(blackberry)[\s-]?(\w+)/i,
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
            /(hp)\s([\w\s]+\w)/i,
            /(asus)-?(\w+)/i
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [/\(bb10;\s(\w+)/i],
          [MODEL, [VENDOR, "BlackBerry"], [TYPE, MOBILE]],
          [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
          [MODEL, [VENDOR, "Asus"], [TYPE, TABLET]],
          [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
          [[VENDOR, "Sony"], [MODEL, "Xperia Tablet"], [TYPE, TABLET]],
          [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
          [MODEL, [VENDOR, "Sony"], [TYPE, MOBILE]],
          [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
          [VENDOR, MODEL, [TYPE, CONSOLE]],
          [/android.+;\s(shield)\sbuild/i],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
          [/(playstation\s[34portablevi]+)/i],
          [MODEL, [VENDOR, "Sony"], [TYPE, CONSOLE]],
          [/(sprint\s(\w+))/i],
          [
            [VENDOR, mapper.str, maps.device.sprint.vendor],
            [MODEL, mapper.str, maps.device.sprint.model],
            [TYPE, MOBILE]
          ],
          [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
            /(zte)-(\w*)/i,
            /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
          ],
          [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
          [/(nexus\s9)/i],
          [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
          [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
          [MODEL, [VENDOR, "Huawei"], [TYPE, MOBILE]],
          [/(microsoft);\s(lumia[\s\w]+)/i],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
          [MODEL, [VENDOR, "Microsoft"], [TYPE, CONSOLE]],
          [/(kin\.[onetw]{3})/i],
          [[MODEL, /\./g, " "], [VENDOR, "Microsoft"], [TYPE, MOBILE]],
          [
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w*)/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
          ],
          [MODEL, [VENDOR, "Motorola"], [TYPE, MOBILE]],
          [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
          [MODEL, [VENDOR, "Motorola"], [TYPE, TABLET]],
          [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
          [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]],
          [/hbbtv.+maple;(\d+)/i],
          [[MODEL, /^/, "SmartTV"], [VENDOR, "Samsung"], [TYPE, SMARTTV]],
          [/\(dtv[\);].+(aquos)/i],
          [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]],
          [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
          [[VENDOR, "Samsung"], MODEL, [TYPE, TABLET]],
          [/smart-tv.+(samsung)/i],
          [VENDOR, [TYPE, SMARTTV], MODEL],
          [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
          [[VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]],
          [/sie-(\w*)/i],
          [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
          [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
          [[VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]],
          [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
          [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
          [/android.+([vl]k\-?\d{3})\s+build/i],
          [MODEL, [VENDOR, "LG"], [TYPE, TABLET]],
          [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
          [[VENDOR, "LG"], MODEL, [TYPE, TABLET]],
          [/(lg) netcast\.tv/i],
          [VENDOR, MODEL, [TYPE, SMARTTV]],
          [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
          [MODEL, [VENDOR, "LG"], [TYPE, MOBILE]],
          [/android.+(ideatab[a-z0-9\-\s]+)/i],
          [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
          [/linux;.+((jolla));/i],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [/((pebble))app\/[\d\.]+\s/i],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [/crkey/i],
          [[MODEL, "Chromecast"], [VENDOR, "Google"]],
          [/android.+;\s(glass)\s\d/i],
          [MODEL, [VENDOR, "Google"], [TYPE, WEARABLE]],
          [/android.+;\s(pixel c)[\s)]/i],
          [MODEL, [VENDOR, "Google"], [TYPE, TABLET]],
          [/android.+;\s(pixel( [23])?( xl)?)\s/i],
          [MODEL, [VENDOR, "Google"], [TYPE, MOBILE]],
          [
            /android.+;\s(\w+)\s+build\/hm\1/i,
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
            /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i
          ],
          [[MODEL, /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, MOBILE]],
          [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
          [[MODEL, /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, TABLET]],
          [/android.+;\s(m[1-5]\snote)\sbuild/i],
          [MODEL, [VENDOR, "Meizu"], [TYPE, TABLET]],
          [/(mz)-([\w-]{2,})/i],
          [[VENDOR, "Meizu"], MODEL, [TYPE, MOBILE]],
          [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
          [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
          [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
          [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
          [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
          [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
          [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
          [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
          [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
          [[VENDOR, "Barnes & Noble"], MODEL, [TYPE, TABLET]],
          [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
          [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
          [/android.+;\s(k88)\sbuild/i],
          [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
          [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
          [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
          [/android.+[;\/]\s*(zur\d{3})\s+build/i],
          [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
          [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
          [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
          [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
          [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
          [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
          [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
          [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
          [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
          [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
          [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
          [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
          [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
          [/android.+;\s(PH-1)\s/i],
          [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
          [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
          [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
          [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
          [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
          [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [/android.+[;\/]\s*TU_(1491)\s+build/i],
          [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
          [/android.+(KS(.+))\s+build/i],
          [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]],
          [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
          [[TYPE, util.lowerize], VENDOR, MODEL],
          [/(android[\w\.\s\-]{0,9});.+build/i],
          [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
          [/windows.+\sedge\/([\w\.]+)/i],
          [VERSION, [NAME, "EdgeHTML"]],
          [
            /(presto)\/([\w\.]+)/i,
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
            /(icab)[\/\s]([23]\.[\d\.]+)/i
          ],
          [NAME, VERSION],
          [/rv\:([\w\.]{1,9}).+(gecko)/i],
          [VERSION, NAME]
        ],
        os: [
          [/microsoft\s(windows)\s(vista|xp)/i],
          [NAME, VERSION],
          [
            /(windows)\snt\s6\.2;\s(arm)/i,
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
          ],
          [NAME, [VERSION, mapper.str, maps.os.windows.version]],
          [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
          [[NAME, "Windows"], [VERSION, mapper.str, maps.os.windows.version]],
          [/\((bb)(10);/i],
          [[NAME, "BlackBerry"], VERSION],
          [
            /(blackberry)\w*\/?([\w\.]*)/i,
            /(tizen)[\/\s]([\w\.]+)/i,
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
            /linux;.+(sailfish);/i
          ],
          [NAME, VERSION],
          [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
          [[NAME, "Symbian"], VERSION],
          [/\((series40);/i],
          [NAME],
          [/mozilla.+\(mobile;.+gecko.+firefox/i],
          [[NAME, "Firefox OS"], VERSION],
          [
            /(nintendo|playstation)\s([wids34portablevu]+)/i,
            /(mint)[\/\s\(]?(\w*)/i,
            /(mageia|vectorlinux)[;\s]/i,
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
            /(hurd|linux)\s?([\w\.]*)/i,
            /(gnu)\s?([\w\.]*)/i
          ],
          [NAME, VERSION],
          [/(cros)\s[\w]+\s([\w\.]+\w)/i],
          [[NAME, "Chromium OS"], VERSION],
          [/(sunos)\s?([\w\.\d]*)/i],
          [[NAME, "Solaris"], VERSION],
          [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
          [NAME, VERSION],
          [/(haiku)\s(\w+)/i],
          [NAME, VERSION],
          [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
          [[VERSION, /_/g, "."], [NAME, "iOS"]],
          [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
          [[NAME, "Mac OS"], [VERSION, /_/g, "."]],
          [
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
            /(unix)\s?([\w\.]*)/i
          ],
          [NAME, VERSION]
        ]
      };
      var UAParser = function(uastring, extensions) {
        if ("object" === typeof uastring) {
          extensions = uastring;
          uastring = undefined;
        }
        if (!(this instanceof UAParser)) return new UAParser(uastring, extensions).getResult();
        var ua =
          uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
        this.getBrowser = function() {
          var browser = { name: undefined, version: undefined };
          mapper.rgx.call(browser, ua, rgxmap.browser);
          browser.major = util.major(browser.version);
          return browser;
        };
        this.getCPU = function() {
          var cpu = { architecture: undefined };
          mapper.rgx.call(cpu, ua, rgxmap.cpu);
          return cpu;
        };
        this.getDevice = function() {
          var device = { vendor: undefined, model: undefined, type: undefined };
          mapper.rgx.call(device, ua, rgxmap.device);
          return device;
        };
        this.getEngine = function() {
          var engine = { name: undefined, version: undefined };
          mapper.rgx.call(engine, ua, rgxmap.engine);
          return engine;
        };
        this.getOS = function() {
          var os = { name: undefined, version: undefined };
          mapper.rgx.call(os, ua, rgxmap.os);
          return os;
        };
        this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function() {
          return ua;
        };
        this.setUA = function(uastring) {
          ua = uastring;
          return this;
        };
        return this;
      };
      UAParser.VERSION = LIBVERSION;
      UAParser.BROWSER = { NAME: NAME, MAJOR: MAJOR, VERSION: VERSION };
      UAParser.CPU = { ARCHITECTURE: ARCHITECTURE };
      UAParser.DEVICE = {
        MODEL: MODEL,
        VENDOR: VENDOR,
        TYPE: TYPE,
        CONSOLE: CONSOLE,
        MOBILE: MOBILE,
        SMARTTV: SMARTTV,
        TABLET: TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
      };
      UAParser.ENGINE = { NAME: NAME, VERSION: VERSION };
      UAParser.OS = { NAME: NAME, VERSION: VERSION };
      if (module.exports) exports = module.exports = UAParser;
      exports.UAParser = UAParser;
      var $ = window && (window.jQuery || window.Zepto);
      if (typeof $ !== UNDEF_TYPE && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
          return parser.getUA();
        };
        $.ua.set = function(uastring) {
          parser.setUA(uastring);
          var result = parser.getResult();
          for (var prop in result) $.ua[prop] = result[prop];
        };
      }
    })("object" === typeof window ? window : commonjsGlobal);
  });
  var uaParser_1 = uaParser.UAParser;
  (function(BrowserCompatibility) {
    (function(Feature) {
      Feature["BLOB"] = "blob";
      Feature["MEDIA_DEVICES"] = "mediaDevices";
      Feature["URL_OBJECT"] = "urlObject";
      Feature["WEB_WORKERS"] = "webWorkers";
      Feature["WEB_ASSEMBLY"] = "webAssembly";
      Feature["WEB_ASSEMBLY_ERROR_FREE"] = "webAssemblyErrorFree";
    })(BrowserCompatibility.Feature || (BrowserCompatibility.Feature = {}));
  })(exports.BrowserCompatibility || (exports.BrowserCompatibility = {}));
  (function(BrowserHelper) {
    BrowserHelper.userAgentInfo = new uaParser_1(navigator.userAgent);
    function checkBrowserCompatibility() {
      var fullSupport = true;
      var scannerSupport = true;
      var missingFeatures = [];
      if (null == navigator.mediaDevices || "function" !== typeof navigator.mediaDevices.getUserMedia) {
        missingFeatures.push(exports.BrowserCompatibility.Feature.MEDIA_DEVICES);
        fullSupport = false;
      }
      if (!window.hasOwnProperty("Worker") || "function" !== typeof window.Worker) {
        missingFeatures.push(exports.BrowserCompatibility.Feature.WEB_WORKERS);
        fullSupport = scannerSupport = false;
      }
      if (!window.hasOwnProperty("WebAssembly") || "object" !== _typeof_1(window.WebAssembly)) {
        missingFeatures.push(exports.BrowserCompatibility.Feature.WEB_ASSEMBLY);
        fullSupport = scannerSupport = false;
      }
      if (!window.hasOwnProperty("Blob") || "function" !== typeof window.Blob) {
        missingFeatures.push(exports.BrowserCompatibility.Feature.BLOB);
        fullSupport = scannerSupport = false;
      }
      if (
        !window.hasOwnProperty("URL") ||
        ("function" !== typeof window.URL && "object" !== _typeof_1(window.URL)) ||
        "function" !== typeof window.URL.createObjectURL
      ) {
        missingFeatures.push(exports.BrowserCompatibility.Feature.URL_OBJECT);
        fullSupport = scannerSupport = false;
      }
      var os = BrowserHelper.userAgentInfo.getOS();
      if ("iOS" === os.name && null != os.version)
        if (-1 !== ["11.2.2", "11.2.5", "11.2.6"].indexOf(os.version)) {
          missingFeatures.push(exports.BrowserCompatibility.Feature.WEB_ASSEMBLY_ERROR_FREE);
          fullSupport = scannerSupport = false;
        }
      return { fullSupport: fullSupport, scannerSupport: scannerSupport, missingFeatures: missingFeatures };
    }
    BrowserHelper.checkBrowserCompatibility = checkBrowserCompatibility;
    function getCookieValue(key) {
      var cookieMatch = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
      if (null == cookieMatch) return "";
      else {
        var cookieValue = cookieMatch.pop();
        return null == cookieValue ? "" : cookieValue;
      }
    }
    function setCookieValue(key, value, expirationDays) {
      var date = new Date();
      date.setTime(date.getTime() + 24 * expirationDays * 60 * 60 * 1e3);
      document.cookie = key + "=" + value + ";expires=" + date.toUTCString();
    }
    function getDeviceId() {
      var cookieKey = "scandit-device-id";
      var storedDeviceId = getCookieValue(cookieKey);
      if ("" !== storedDeviceId) return storedDeviceId;
      var hexCharacters = "0123456789abcdef";
      var randomDeviceId = "";
      for (var i = 0; i < 40; ++i) randomDeviceId += hexCharacters.charAt(Math.floor(16 * Math.random()));
      setCookieValue(cookieKey, randomDeviceId, 3650);
      return randomDeviceId;
    }
    BrowserHelper.getDeviceId = getDeviceId;
  })(exports.BrowserHelper || (exports.BrowserHelper = {}));
  var $forEach = _arrayMethods(0);
  var STRICT = _strictMethod([].forEach, true);
  _export(_export.P + _export.F * !STRICT, "Array", {
    forEach: function forEach(callbackfn) {
      return $forEach(this, callbackfn, arguments[1]);
    }
  });
  var $some = _arrayMethods(3);
  _export(_export.P + _export.F * !_strictMethod([].some, true), "Array", {
    some: function some(callbackfn) {
      return $some(this, callbackfn, arguments[1]);
    }
  });
  var $map = _arrayMethods(1);
  _export(_export.P + _export.F * !_strictMethod([].map, true), "Array", {
    map: function map(callbackfn) {
      return $map(this, callbackfn, arguments[1]);
    }
  });
  var _meta = createCommonjsModule(function(module) {
    var META = _uid("meta");
    var setDesc = _objectDp.f;
    var id = 0;
    var isExtensible =
      Object.isExtensible ||
      function() {
        return true;
      };
    var FREEZE = !_fails(function() {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function(it) {
      setDesc(it, META, { value: { i: "O" + ++id, w: {} } });
    };
    var fastKey = function(it, create) {
      if (!_isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
      if (!_has(it, META)) {
        if (!isExtensible(it)) return "F";
        if (!create) return "E";
        setMeta(it);
      }
      return it[META].i;
    };
    var getWeak = function(it, create) {
      if (!_has(it, META)) {
        if (!isExtensible(it)) return true;
        if (!create) return false;
        setMeta(it);
      }
      return it[META].w;
    };
    var onFreeze = function(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
      return it;
    };
    var meta = (module.exports = { KEY: META, NEED: false, fastKey: fastKey, getWeak: getWeak, onFreeze: onFreeze });
  });
  _meta.KEY;
  _meta.NEED;
  _meta.fastKey;
  _meta.getWeak;
  _meta.onFreeze;
  var _validateCollection = function(it, TYPE) {
    if (!_isObject(it) || it._t !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required!");
    return it;
  };
  var dP$2 = _objectDp.f;
  var fastKey = _meta.fastKey;
  var SIZE = _descriptors ? "_s" : "size";
  var getEntry = function(that, key) {
    var index = fastKey(key);
    var entry;
    if ("F" !== index) return that._i[index];
    for (entry = that._f; entry; entry = entry.n) if (entry.k == key) return entry;
  };
  var _collectionStrong = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        _anInstance(that, C, NAME, "_i");
        that._t = NAME;
        that._i = _objectCreate(null);
        that._f = void 0;
        that._l = void 0;
        that[SIZE] = 0;
        if (void 0 != iterable) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = void 0;
            delete data[entry.i];
          }
          that._f = that._l = void 0;
          that[SIZE] = 0;
        },
        delete: function(key) {
          var that = _validateCollection(this, NAME);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          _validateCollection(this, NAME);
          var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
          var entry;
          while ((entry = entry ? entry.n : this._f)) {
            f(entry.v, entry.k, this);
            while (entry && entry.r) entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(_validateCollection(this, NAME), key);
        }
      });
      if (_descriptors)
        dP$2(C.prototype, "size", {
          get: function() {
            return _validateCollection(this, NAME)[SIZE];
          }
        });
      return C;
    },
    def: function(that, key, value) {
      var entry = getEntry(that, key);
      var prev, index;
      if (entry) entry.v = value;
      else {
        that._l = entry = {
          i: (index = fastKey(key, true)),
          k: key,
          v: value,
          p: (prev = that._l),
          n: void 0,
          r: false
        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++;
        if ("F" !== index) that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
      _iterDefine(
        C,
        NAME,
        function(iterated, kind) {
          this._t = _validateCollection(iterated, NAME);
          this._k = kind;
          this._l = void 0;
        },
        function() {
          var that = this;
          var kind = that._k;
          var entry = that._l;
          while (entry && entry.r) entry = entry.p;
          if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
            that._t = void 0;
            return _iterStep(1);
          }
          if ("keys" == kind) return _iterStep(0, entry.k);
          if ("values" == kind) return _iterStep(0, entry.v);
          return _iterStep(0, [entry.k, entry.v]);
        },
        IS_MAP ? "entries" : "values",
        !IS_MAP,
        true
      );
      _setSpecies(NAME);
    }
  };
  var check = function(O, proto) {
    _anObject(O);
    if (!_isObject(proto) && null !== proto) throw TypeError(proto + ": can't set as prototype!");
  };
  var _setProto = {
    set:
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function(test, buggy, set) {
            try {
              set = _ctx(Function.call, _objectGopd.f(Object.prototype, "__proto__").set, 2);
              set(test, []);
              buggy = !(test instanceof Array);
            } catch (e) {
              buggy = true;
            }
            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy) O.__proto__ = proto;
              else set(O, proto);
              return O;
            };
          })({}, false)
        : void 0),
    check: check
  };
  var setPrototypeOf = _setProto.set;
  var _inheritIfRequired = function(that, target, C) {
    var S = target.constructor;
    var P;
    if (S !== C && "function" == typeof S && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf)
      setPrototypeOf(that, P);
    return that;
  };
  var _collection = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? "set" : "add";
    var proto = C && C.prototype;
    var O = {};
    var fixMethod = function(KEY) {
      var fn = proto[KEY];
      _redefine(
        proto,
        KEY,
        "delete" == KEY
          ? function(a) {
              return IS_WEAK && !_isObject(a) ? false : fn.call(this, 0 === a ? 0 : a);
            }
          : "has" == KEY
            ? function has(a) {
                return IS_WEAK && !_isObject(a) ? false : fn.call(this, 0 === a ? 0 : a);
              }
            : "get" == KEY
              ? function get(a) {
                  return IS_WEAK && !_isObject(a) ? void 0 : fn.call(this, 0 === a ? 0 : a);
                }
              : "add" == KEY
                ? function add(a) {
                    fn.call(this, 0 === a ? 0 : a);
                    return this;
                  }
                : function set(a, b) {
                    fn.call(this, 0 === a ? 0 : a, b);
                    return this;
                  }
      );
    };
    if (
      "function" != typeof C ||
      !(
        IS_WEAK ||
        (proto.forEach &&
          !_fails(function() {
            new C().entries().next();
          }))
      )
    ) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      _redefineAll(C.prototype, methods);
      _meta.NEED = true;
    } else {
      var instance = new C();
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      var THROWS_ON_PRIMITIVES = _fails(function() {
        instance.has(1);
      });
      var ACCEPT_ITERABLES = _iterDetect(function(iter) {
        new C(iter);
      });
      var BUGGY_ZERO =
        !IS_WEAK &&
        _fails(function() {
          var $instance = new C();
          var index = 5;
          while (index--) $instance[ADDER](index, index);
          return !$instance.has(-0);
        });
      if (!ACCEPT_ITERABLES) {
        C = wrapper(function(target, iterable) {
          _anInstance(target, C, NAME);
          var that = _inheritIfRequired(new Base(), target, C);
          if (void 0 != iterable) _forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod("delete");
        fixMethod("has");
        IS_MAP && fixMethod("get");
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
      if (IS_WEAK && proto.clear) delete proto.clear;
    }
    _setToStringTag(C, NAME);
    O[NAME] = C;
    _export(_export.G + _export.W + _export.F * (C != Base), O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  var MAP = "Map";
  _collection(
    MAP,
    function(get) {
      return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    },
    {
      get: function get(key) {
        var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
        return entry && entry.v;
      },
      set: function set(key, value) {
        return _collectionStrong.def(_validateCollection(this, MAP), 0 === key ? 0 : key, value);
      }
    },
    _collectionStrong,
    true
  );
  /*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */ var extendStatics = function(
    d,
    b
  ) {
    extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = null === b ? Object.create(b) : ((__.prototype = b.prototype), new __());
  }
  function __values(o) {
    var m = "function" === typeof Symbol && o[Symbol.iterator],
      i = 0;
    if (m) return m.call(o);
    return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  }
  function __read(o, n) {
    var m = "function" === typeof Symbol && o[Symbol.iterator];
    if (!m) return o;
    var r,
      e,
      i = m.call(o),
      ar = [];
    try {
      while ((void 0 === n || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  (function(Camera) {
    (function(Type) {
      Type["FRONT"] = "front";
      Type["BACK"] = "back";
    })(Camera.Type || (Camera.Type = {}));
  })(exports.Camera || (exports.Camera = {}));
  _export(_export.S, "Object", { setPrototypeOf: _setProto.set });
  var CustomError = (function(_super) {
    __extends(CustomError, _super);
    function CustomError(_a) {
      var _b = void 0 === _a ? {} : _a,
        _c = _b.name,
        name = void 0 === _c ? "" : _c,
        _d = _b.message,
        message = void 0 === _d ? "" : _d,
        data = _b.data;
      var _this = _super.call(this, message) || this;
      Object.setPrototypeOf(_this, CustomError.prototype);
      _this.name = name;
      _this.data = data;
      return _this;
    }
    return CustomError;
  })(Error);
  (function(CameraAccess) {
    var backCameraKeywords = [
      "rear",
      "back",
      "rück",
      "arrière",
      "trasera",
      "trás",
      "traseira",
      "posteriore",
      "后面",
      "後面",
      "背面",
      "后置",
      "後置",
      "背置",
      "задней",
      "الخلفية",
      "후",
      "arka",
      "achterzijde",
      "หลัง",
      "baksidan",
      "bagside",
      "sau",
      "bak",
      "tylny",
      "takakamera",
      "belakang",
      "אחורית",
      "πίσω",
      "spate",
      "hátsó",
      "zadní",
      "darrere",
      "zadná",
      "задня",
      "stražnja",
      "belakang",
      "बैक"
    ];
    var cameraObjects = new Map();
    var getCamerasPromise;
    function getCameras() {
      if (null != getCamerasPromise) return getCamerasPromise;
      var browserCompatibility = exports.BrowserHelper.checkBrowserCompatibility();
      if (!browserCompatibility.fullSupport)
        return Promise.reject(
          new CustomError({
            name: "UnsupportedBrowserError",
            message: "This OS / Browser has one or more missing features preventing it from working correctly",
            data: browserCompatibility
          })
        );
      getCamerasPromise = new Promise(function(resolve, reject) {
        var accessPermissionPromise = Promise.resolve();
        if (null == CameraAccess.mediaStream)
          accessPermissionPromise = navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        accessPermissionPromise
          .then(function(stream) {
            if (null != stream) CameraAccess.mediaStream = stream;
            return enumerateDevices()
              .then(function(devices) {
                var cameras = devices
                  .filter(function(device) {
                    return "videoinput" === device.kind;
                  })
                  .map(function(videoDevice) {
                    if (cameraObjects.has(videoDevice.deviceId)) return cameraObjects.get(videoDevice.deviceId);
                    var label = null != videoDevice.label ? videoDevice.label : "";
                    var lowercaseLabel = label.toLowerCase();
                    var camera = {
                      deviceId: videoDevice.deviceId,
                      label: label,
                      cameraType: backCameraKeywords.some(function(keyword) {
                        return -1 !== lowercaseLabel.indexOf(keyword);
                      })
                        ? exports.Camera.Type.BACK
                        : exports.Camera.Type.FRONT
                    };
                    if ("" !== label) cameraObjects.set(videoDevice.deviceId, camera);
                    return camera;
                  });
                if (
                  cameras.length > 1 &&
                  !cameras.some(function(camera) {
                    return camera.cameraType === exports.Camera.Type.BACK;
                  })
                ) {
                  var camera = cameras.slice(-1)[0];
                  cameras[cameras.length - 1] = {
                    deviceId: camera.deviceId,
                    label: camera.label,
                    cameraType: exports.Camera.Type.BACK
                  };
                }
                CameraAccess.mediaStream.getVideoTracks().forEach(function(track) {
                  track.stop();
                });
                console.debug.apply(console, __spread(["Camera list: "], cameras));
                getCamerasPromise = void 0;
                return resolve(cameras);
              })
              .catch(function(error) {
                CameraAccess.mediaStream.getVideoTracks().forEach(function(track) {
                  track.stop();
                });
                getCamerasPromise = void 0;
                return reject(error);
              });
          })
          .catch(function(error) {
            getCamerasPromise = void 0;
            return reject(error);
          });
      });
      return getCamerasPromise;
    }
    CameraAccess.getCameras = getCameras;
    function getUserMediaDelayed(getUserMediaParams) {
      console.debug("Camera access:", getUserMediaParams.video);
      return new Promise(function(resolve, reject) {
        window.setTimeout(function() {
          navigator.mediaDevices
            .getUserMedia(getUserMediaParams)
            .then(resolve)
            .catch(reject);
        }, 0);
      });
    }
    function accessCameraStream(resolutionFallbackLevel, camera) {
      var getUserMediaParams = { audio: false, video: {} };
      if (0 === resolutionFallbackLevel)
        getUserMediaParams.video = {
          width: { min: 1400, ideal: 1920, max: 1920 },
          height: { min: 900, ideal: 1440, max: 1440 }
        };
      else if (1 === resolutionFallbackLevel)
        getUserMediaParams.video = {
          width: { min: 1200, ideal: 1920, max: 1920 },
          height: { min: 900, ideal: 1200, max: 1200 }
        };
      else if (2 === resolutionFallbackLevel)
        getUserMediaParams.video = {
          width: { min: 1080, ideal: 1920, max: 1920 },
          height: { min: 900, ideal: 1080, max: 1080 }
        };
      else if (3 === resolutionFallbackLevel)
        getUserMediaParams.video = {
          width: { min: 960, ideal: 1280, max: 1440 },
          height: { min: 480, ideal: 960, max: 960 }
        };
      else if (4 === resolutionFallbackLevel)
        getUserMediaParams.video = {
          width: { min: 720, ideal: 1280, max: 1440 },
          height: { min: 480, ideal: 720, max: 768 }
        };
      else if (5 === resolutionFallbackLevel)
        getUserMediaParams.video = {
          width: { min: 640, ideal: 960, max: 1440 },
          height: { min: 480, ideal: 720, max: 720 }
        };
      if (void 0 === camera) getUserMediaParams.video = true;
      else getUserMediaParams.video.deviceId = { exact: camera.deviceId };
      return getUserMediaDelayed(getUserMediaParams);
    }
    CameraAccess.accessCameraStream = accessCameraStream;
    function enumerateDevices() {
      if ("function" === typeof navigator.enumerateDevices) return navigator.enumerateDevices();
      else if (
        "object" === _typeof_1(navigator.mediaDevices) &&
        "function" === typeof navigator.mediaDevices.enumerateDevices
      )
        return navigator.mediaDevices.enumerateDevices();
      else
        return new Promise(function(resolve, reject) {
          try {
            window.MediaStreamTrack.getSources(function(devices) {
              resolve(
                devices
                  .filter(function(device) {
                    return "video" === device.kind.toLowerCase() || "videoinput" === device.kind.toLowerCase();
                  })
                  .map(function(device) {
                    return {
                      deviceId: null != device.deviceId ? device.deviceId : "",
                      groupId: device.groupId,
                      kind: "videoinput",
                      label: device.label
                    };
                  })
              );
            });
          } catch (error) {
            var browserCompatiblity = {
              fullSupport: false,
              scannerSupport: true,
              missingFeatures: [exports.BrowserCompatibility.Feature.MEDIA_DEVICES]
            };
            return reject(
              new CustomError({
                name: "UnsupportedBrowserError",
                message: "This OS / Browser has one or more missing features preventing it from working correctly",
                data: browserCompatiblity
              })
            );
          }
        });
    }
  })(exports.CameraAccess || (exports.CameraAccess = {}));
  (function(ImageSettings) {
    (function(Format) {
      Format[(Format["GRAY_8U"] = 0)] = "GRAY_8U";
      Format[(Format["RGB_8U"] = 1)] = "RGB_8U";
      Format[(Format["RGBA_8U"] = 2)] = "RGBA_8U";
    })(ImageSettings.Format || (ImageSettings.Format = {}));
  })(exports.ImageSettings || (exports.ImageSettings = {}));
  var arraySlice = [].slice;
  var factories = {};
  var construct = function(F, len, args) {
    if (!(len in factories)) {
      for (var n = [], i = 0; i < len; i++) n[i] = "a[" + i + "]";
      factories[len] = Function("F,a", "return new F(" + n.join(",") + ")");
    }
    return factories[len](F, args);
  };
  var _bind =
    Function.bind ||
    function bind(that) {
      var fn = _aFunction(this);
      var partArgs = arraySlice.call(arguments, 1);
      var bound = function() {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
      };
      if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
      return bound;
    };
  _export(_export.P, "Function", { bind: _bind });
  var eventemitter3 = createCommonjsModule(function(module) {
    var has = Object.prototype.hasOwnProperty,
      prefix = "~";
    function Events() {}
    if (Object.create) {
      Events.prototype = Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if ("function" !== typeof fn) throw new TypeError("The listener must be a function");
      var listener = new EE(fn, context || emitter, once),
        evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) (emitter._events[evt] = listener), emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (0 === --emitter._eventsCount) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var events,
        name,
        names = [];
      if (0 === this._eventsCount) return names;
      for (name in (events = this._events)) if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event,
        handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) ee[i] = handlers[i].fn;
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event,
        listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var args,
        i,
        listeners = this._events[evt],
        len = arguments.length;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
      } else {
        var j,
          length = listeners.length;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) args[j - 1] = arguments[j];
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context))
          clearEvent(this, evt);
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++)
          if (listeners[i].fn !== fn || (once && !listeners[i].once) || (context && listeners[i].context !== context))
            events.push(listeners[i]);
        if (events.length) this._events[evt] = 1 === events.length ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    module.exports = EventEmitter;
  });
  var eventemitter3_1 = eventemitter3.EventEmitter;
  var _flags = function() {
    var that = _anObject(this);
    var result = "";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.unicode) result += "u";
    if (that.sticky) result += "y";
    return result;
  };
  if (_descriptors && "g" != /./g.flags) _objectDp.f(RegExp.prototype, "flags", { configurable: true, get: _flags });
  var TO_STRING = "toString";
  var $toString = /./[TO_STRING];
  var define = function(fn) {
    _redefine(RegExp.prototype, TO_STRING, fn, true);
  };
  if (
    _fails(function() {
      return "/a/b" != $toString.call({ source: "a", flags: "b" });
    })
  )
    define(function toString() {
      var R = _anObject(this);
      return "/".concat(
        R.source,
        "/",
        "flags" in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : void 0
      );
    });
  else if ($toString.name != TO_STRING)
    define(function toString() {
      return $toString.call(this);
    });
  var DateProto = Date.prototype;
  var INVALID_DATE = "Invalid Date";
  var TO_STRING$1 = "toString";
  var $toString$1 = DateProto[TO_STRING$1];
  var getTime = DateProto.getTime;
  if (new Date(NaN) + "" != INVALID_DATE)
    _redefine(DateProto, TO_STRING$1, function toString() {
      var value = getTime.call(this);
      return value === value ? $toString$1.call(this) : INVALID_DATE;
    });
  var _arrayReduce = function(that, callbackfn, aLen, memo, isRight) {
    _aFunction(callbackfn);
    var O = _toObject(that);
    var self = _iobject(O);
    var length = _toLength(O.length);
    var index = isRight ? length - 1 : 0;
    var i = isRight ? -1 : 1;
    if (aLen < 2)
      for (;;) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (isRight ? index < 0 : length <= index) throw TypeError("Reduce of empty array with no initial value");
      }
    for (; isRight ? index >= 0 : length > index; index += i)
      if (index in self) memo = callbackfn(memo, self[index], index, O);
    return memo;
  };
  _export(_export.P + _export.F * !_strictMethod([].reduce, true), "Array", {
    reduce: function reduce(callbackfn) {
      return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
    }
  });
  function engineSDKWorkerFunction() {
    var imageBufferPointer;
    var licenseKey;
    var settings;
    var imageSettings;
    var wasmLoaded = false;
    var scannerSettingsReady = false;
    var scannerImageSettingsReady = false;
    var scanQueue = [];
    var parseQueue = [];
    var contextAvailable = false;
    var scanWorkSubmitted = false;
    var parseWorkSubmitted = false;
    var blurryDecodingEnabled = false;
    function instantiateWasmWithCache(wasmURI, wasmVersion, importObject, successCallback) {
      var dbName = "scandit_wasm_cache";
      var storeName = "scandit_wasm_cache";
      var key = "wasm";
      var db;
      function loadDatabase(resolve, reject) {
        var openDBRequest;
        try {
          openDBRequest = indexedDB.open(dbName, wasmVersion);
        } catch (error) {
          return reject("Failed to open scandit-sdk WebAssembly cache database: " + error);
        }
        openDBRequest.onerror = function() {
          return reject("Failed to open scandit-sdk WebAssembly cache database");
        };
        openDBRequest.onsuccess = function() {
          db = openDBRequest.result;
          var store = db.transaction([storeName]).objectStore(storeName);
          var request = store.get(key);
          request.onerror = function() {
            return reject("Failed to open scandit-sdk WebAssembly cache database");
          };
          request.onsuccess = function() {
            if (null != request.result) return resolve(request.result);
            else return reject("No cached version of the scandit-sdk WebAssembly code has been found");
          };
        };
        openDBRequest.onupgradeneeded = function() {
          db = openDBRequest.result;
          if (db.objectStoreNames.contains(storeName)) db.deleteObjectStore(storeName);
          db.createObjectStore(storeName);
        };
      }
      function storeInDatabase(moduleObject) {
        try {
          var store = db.transaction([storeName], "readwrite").objectStore(storeName);
          var request = store.put(moduleObject, key);
          request.onerror = function(error) {
            console.debug("Failed to cache scandit-sdk WebAssembly code: " + error);
          };
          request.onsuccess = function() {
            console.debug("Successfully cached scandit-sdk WebAssembly code");
          };
        } catch (error) {
          if ("DataCloneError" === error.name)
            console.debug(
              "Failed to cache scandit-sdk WebAssembly code: This browser doesn't support this feature yet"
            );
          else console.debug("Failed to cache scandit-sdk WebAssembly code: " + error);
        }
      }
      loadDatabase(
        function(moduleObject) {
          console.debug("Found cached scandit-sdk WebAssembly code");
          self.WebAssembly.instantiate(moduleObject, importObject).then(function(instance) {
            successCallback(instance);
          });
        },
        function(errMsg) {
          console.debug(errMsg);
          function instantiate() {
            fetch(wasmURI)
              .then(function(response) {
                return response.arrayBuffer();
              })
              .then(function(bytes) {
                self.WebAssembly.instantiate(bytes, importObject).then(function(results) {
                  if (null != db) storeInDatabase(results.module);
                  successCallback(results.instance);
                });
              });
          }
          function instantiateStreaming() {
            self.WebAssembly.instantiateStreaming(fetch(wasmURI), importObject)
              .then(function(results) {
                if (null != db) storeInDatabase(results.module);
                successCallback(results.instance);
              })
              .catch(function(error) {
                console.warn("wasm streaming compile failed: " + error + ", falling back to ArrayBuffer instantiation");
                instantiate();
              });
          }
          if ("function" === typeof self.WebAssembly.instantiateStreaming) instantiateStreaming();
          else instantiate();
        }
      );
    }
    function loadLibrary(deviceId, libraryLocation) {
      var customModule = {
        arguments: [deviceId],
        instantiateWasm: function instantiateWasm(importObject, successCallback) {
          var wasmURI = libraryLocation + "scandit-engine-sdk.wasm?v=3.2.0";
          var wasmVersion = "3.2.0"
            .split(".")
            .map(function(n, i) {
              return parseInt(n, 10) * Math.pow(10, 6 - 3 * i);
            })
            .reduce(function(a, b) {
              return a + b;
            });
          instantiateWasmWithCache(wasmURI, wasmVersion, importObject, successCallback);
          return {};
        },
        noInitialRun: true,
        preRun: function preRun() {
          try {
            FS.mkdir("/scandit_sync_folder");
          } catch (error) {
            if ("EEXIST" !== error.code) throw error;
          }
          FS.mount(IDBFS, {}, "/scandit_sync_folder");
          FS.syncfs(true, function() {
            Module.callMain();
            wasmLoaded = true;
            postMessage(["status", "ready"]);
            workOnScanQueue();
            workOnParseQueue();
          });
        }
      };
      self.Module = customModule;
      if ("function" === typeof importScripts)
        try {
          importScripts(libraryLocation + "scandit-engine-sdk.min.js?v=3.2.0");
        } catch (error) {
          console.warn(error);
          console.error(
            "Couldn't retrieve Scandit SDK Engine library at " +
              libraryLocation +
              "scandit-engine-sdk.min.js, " +
              "did you configure the path for it correctly?"
          );
        }
    }
    function createContext() {
      if (contextAvailable || null == licenseKey || !wasmLoaded) return;
      var licenseKeyLength = Module.lengthBytesUTF8(licenseKey) + 1;
      var licenseKeyPointer = Module._malloc(licenseKeyLength);
      Module.stringToUTF8(licenseKey, licenseKeyPointer, licenseKeyLength);
      Module.asm._create_context(licenseKeyPointer, false);
      Module._free(licenseKeyPointer);
      contextAvailable = true;
    }
    function setupSettings(highQualitySingleFrameMode) {
      if (void 0 === highQualitySingleFrameMode) highQualitySingleFrameMode = false;
      if (null == settings || !contextAvailable || !wasmLoaded) return;
      scannerSettingsReady = false;
      if (null == licenseKey) {
        console.error("No license key found, the library must be set up before the scanning engine can be used");
        return;
      }
      var parsedSettings = JSON.parse(settings);
      var settingsLength = Module.lengthBytesUTF8(settings) + 1;
      var settingsPointer = Module._malloc(settingsLength);
      Module.stringToUTF8(settings, settingsPointer, settingsLength);
      var resultPointer = Module.asm._scanner_settings_new_from_json(
        settingsPointer,
        blurryDecodingEnabled ? 1 : 0,
        parsedSettings.matrixScanEnabled ? 1 : 0,
        highQualitySingleFrameMode
      );
      Module._free(settingsPointer);
      var result = Module.UTF8ToString(resultPointer);
      if ("" !== result) {
        scannerSettingsReady = true;
        postMessage(["status", "scan-settings-updated"]);
        console.debug(JSON.parse(result));
      }
    }
    function setupImageSettings() {
      if (null == imageSettings || !wasmLoaded) return;
      scannerImageSettingsReady = false;
      Module.asm._scanner_image_settings_new(imageSettings.width, imageSettings.height, 1);
      if (null != imageBufferPointer) {
        Module._free(imageBufferPointer);
        imageBufferPointer = void 0;
      }
      imageBufferPointer = Module._malloc(imageSettings.width * imageSettings.height);
      scannerImageSettingsReady = true;
    }
    function scanImage(imageData) {
      Module.HEAPU8.set(imageData, imageBufferPointer);
      return Module.UTF8ToString(Module.asm._scanner_scan(imageBufferPointer));
    }
    function parseString(dataFormat, dataString, options) {
      var dataStringLength = Module.lengthBytesUTF8(dataString) + 1;
      var dataStringPointer = Module._malloc(dataStringLength);
      Module.stringToUTF8(dataString, dataStringPointer, dataStringLength);
      var optionsLength = Module.lengthBytesUTF8(options) + 1;
      var optionsPointer = Module._malloc(optionsLength);
      Module.stringToUTF8(options, optionsPointer, optionsLength);
      var resultPointer = Module.asm._parser_parse_string(
        dataFormat.valueOf(),
        dataStringPointer,
        dataStringLength - 1,
        optionsPointer
      );
      Module._free(dataStringPointer);
      Module._free(optionsPointer);
      return Module.UTF8ToString(resultPointer);
    }
    function workOnScanQueue() {
      if ((!scannerSettingsReady || !scannerImageSettingsReady) && 0 !== scanQueue.length) {
        createContext();
        setupSettings();
        setupImageSettings();
      }
      if (!scannerSettingsReady || !scannerImageSettingsReady) return;
      var currentScanWorkUnit;
      var resultData;
      while (0 !== scanQueue.length) {
        currentScanWorkUnit = scanQueue.shift();
        if (currentScanWorkUnit.highQualitySingleFrameMode) setupSettings(true);
        if (1 === imageSettings.format.valueOf())
          resultData = scanImage(convertImageDataToGrayscale(currentScanWorkUnit.data, 3));
        else if (2 === imageSettings.format.valueOf())
          resultData = scanImage(convertImageDataToGrayscale(currentScanWorkUnit.data, 4));
        else resultData = scanImage(currentScanWorkUnit.data);
        if (currentScanWorkUnit.highQualitySingleFrameMode) setupSettings(false);
        var result = JSON.parse(resultData);
        if (null != result.error)
          postMessage(["work-error", { requestId: currentScanWorkUnit.requestId, error: result.error }]);
        else if (null != result.scanResult)
          postMessage(["work-result", { requestId: currentScanWorkUnit.requestId, result: result }]);
        else {
          console.error("Unrecognized Scandit Engine result:", result);
          postMessage([""], [currentScanWorkUnit.data.buffer]);
        }
      }
    }
    function workOnParseQueue() {
      if (!contextAvailable && 0 !== parseQueue.length) createContext();
      if (!contextAvailable || !wasmLoaded) return;
      var currentParseWorkUnit;
      var resultData;
      while (0 !== parseQueue.length) {
        currentParseWorkUnit = parseQueue.shift();
        resultData = parseString(
          currentParseWorkUnit.dataFormat,
          currentParseWorkUnit.dataString,
          currentParseWorkUnit.options
        );
        var result = JSON.parse(resultData);
        if (null != result.error)
          postMessage(["parse-string-error", { requestId: currentParseWorkUnit.requestId, error: result.error }]);
        else if (null != result.result)
          postMessage(["parse-string-result", { requestId: currentParseWorkUnit.requestId, result: result.result }]);
        else {
          console.error("Unrecognized Scandit Parser result:", result);
          postMessage([
            "parse-string-error",
            {
              requestId: currentParseWorkUnit.requestId,
              error: { errorCode: -1, errorMessage: "Unknown Scandit Parser error" }
            }
          ]);
        }
      }
    }
    function convertImageDataToGrayscale(imageData, channels) {
      var grayscaleImageData = new Uint8ClampedArray(imageData.length / channels);
      var grayscaleImageDataIndex = imageData.length / channels - 1;
      var imageDataIndex = imageData.length - channels;
      while (imageDataIndex >= 0) {
        grayscaleImageData[grayscaleImageDataIndex--] =
          0.299 * imageData[imageDataIndex] +
          0.587 * imageData[imageDataIndex + 1] +
          0.114 * imageData[imageDataIndex + 2];
        imageDataIndex -= channels;
      }
      return grayscaleImageData;
    }
    onmessage = function onmessage(e) {
      var data = e.data;
      switch (data.type) {
        case "enable-blurry-decoding":
          blurryDecodingEnabled = true;
          if (scanWorkSubmitted) {
            setupSettings();
            workOnScanQueue();
          }
          break;
        case "load-library":
          loadLibrary(data.deviceId, data.libraryLocation);
          self.path = data.path;
          break;
        case "license-key":
          licenseKey = data.licenseKey;
          createContext();
          if (parseWorkSubmitted) workOnParseQueue();
          break;
        case "settings":
          settings = data.settings;
          if (scanWorkSubmitted) {
            setupSettings();
            workOnScanQueue();
          }
          break;
        case "image-settings":
          imageSettings = data.imageSettings;
          if (scanWorkSubmitted) {
            setupImageSettings();
            workOnScanQueue();
          }
          break;
        case "work":
          scanWorkSubmitted = true;
          scanQueue.push({
            requestId: data.requestId,
            data: data.data,
            highQualitySingleFrameMode: data.highQualitySingleFrameMode
          });
          workOnScanQueue();
          break;
        case "parse-string":
          parseWorkSubmitted = true;
          parseQueue.push({
            requestId: data.requestId,
            dataFormat: data.dataFormat,
            dataString: data.dataString,
            options: data.options
          });
          workOnParseQueue();
      }
    };
  }
  var engineSDKWorker = new Blob(["(" + engineSDKWorkerFunction.toString() + ")()"], { type: "text/javascript" });
  _typedArray("Uint8", 1, function(init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  (function(Barcode) {
    function createFromWASMResult(result) {
      var decodedData;
      try {
        decodedData = decodeURIComponent(escape(String.fromCharCode.apply(null, result.rawData)));
      } catch (error) {
        decodedData = "";
      }
      return {
        symbology: result.symbology,
        data: decodedData,
        rawData: new Uint8Array(result.rawData),
        location: {
          topLeft: { x: result.location[0][0], y: result.location[0][1] },
          topRight: { x: result.location[1][0], y: result.location[1][1] },
          bottomRight: { x: result.location[2][0], y: result.location[2][1] },
          bottomLeft: { x: result.location[3][0], y: result.location[3][1] }
        },
        compositeFlag: result.compositeFlag,
        isGs1DataCarrier: result.isGs1DataCarrier,
        encodingArray: result.encodingArray
      };
    }
    Barcode.createFromWASMResult = createFromWASMResult;
    (function(Symbology) {
      Symbology["EAN13"] = "ean13";
      Symbology["EAN8"] = "ean8";
      Symbology["UPCA"] = "upca";
      Symbology["UPCE"] = "upce";
      Symbology["CODE128"] = "code128";
      Symbology["CODE32"] = "code32";
      Symbology["CODE39"] = "code39";
      Symbology["CODE93"] = "code93";
      Symbology["INTERLEAVED_2_OF_5"] = "itf";
      Symbology["QR"] = "qr";
      Symbology["DATA_MATRIX"] = "data-matrix";
      Symbology["PDF417"] = "pdf417";
      Symbology["MSI_PLESSEY"] = "msi-plessey";
      Symbology["GS1_DATABAR"] = "databar";
      Symbology["GS1_DATABAR_EXPANDED"] = "databar-expanded";
      Symbology["CODABAR"] = "codabar";
      Symbology["AZTEC"] = "aztec";
      Symbology["TWO_DIGIT_ADD_ON"] = "two-digit-add-on";
      Symbology["FIVE_DIGIT_ADD_ON"] = "five-digit-add-on";
      Symbology["MAXICODE"] = "maxicode";
      Symbology["CODE11"] = "code11";
      Symbology["GS1_DATABAR_LIMITED"] = "databar-limited";
      Symbology["CODE25"] = "code25";
      Symbology["MICRO_PDF417"] = "micropdf417";
      Symbology["RM4SCC"] = "rm4scc";
      Symbology["KIX"] = "kix";
      Symbology["DOTCODE"] = "dotcode";
    })(Barcode.Symbology || (Barcode.Symbology = {}));
    (function(CompositeFlag) {
      CompositeFlag[(CompositeFlag["NONE"] = 0)] = "NONE";
      CompositeFlag[(CompositeFlag["UNKNOWN"] = 1)] = "UNKNOWN";
      CompositeFlag[(CompositeFlag["LINKED"] = 2)] = "LINKED";
      CompositeFlag[(CompositeFlag["GS1_A"] = 4)] = "GS1_A";
      CompositeFlag[(CompositeFlag["GS1_B"] = 8)] = "GS1_B";
      CompositeFlag[(CompositeFlag["GS1_C"] = 16)] = "GS1_C";
    })(Barcode.CompositeFlag || (Barcode.CompositeFlag = {}));
    (function(Symbology) {
      function toHumanizedName(symbology) {
        switch (symbology.toLowerCase()) {
          case Symbology.EAN13:
            return "EAN-13";
          case Symbology.EAN8:
            return "EAN-8";
          case Symbology.UPCA:
            return "UPC-A";
          case Symbology.UPCE:
            return "UPC-E";
          case Symbology.CODE128:
            return "Code 128";
          case Symbology.CODE32:
            return "Code 32";
          case Symbology.CODE39:
            return "Code 39";
          case Symbology.CODE93:
            return "Code 93";
          case Symbology.INTERLEAVED_2_OF_5:
            return "Interleaved Two of Five";
          case Symbology.QR:
            return "QR";
          case Symbology.DATA_MATRIX:
            return "Data Matrix";
          case Symbology.PDF417:
            return "PDF417";
          case Symbology.MSI_PLESSEY:
            return "MSI-Plessey";
          case Symbology.GS1_DATABAR:
            return "GS1 DataBar 14";
          case Symbology.GS1_DATABAR_EXPANDED:
            return "GS1 DataBar Expanded";
          case Symbology.CODABAR:
            return "Codabar";
          case Symbology.AZTEC:
            return "Aztec";
          case Symbology.TWO_DIGIT_ADD_ON:
            return "Two-Digit Add-On";
          case Symbology.FIVE_DIGIT_ADD_ON:
            return "Five-Digit Add-On";
          case Symbology.MAXICODE:
            return "MaxiCode";
          case Symbology.CODE11:
            return "Code 11";
          case Symbology.GS1_DATABAR_LIMITED:
            return "GS1 DataBar Limited";
          case Symbology.CODE25:
            return "Code 25";
          case Symbology.MICRO_PDF417:
            return "MicroPDF417";
          case Symbology.RM4SCC:
            return "RM4SCC";
          case Symbology.KIX:
            return "KIX";
          case Symbology.DOTCODE:
            return "DotCode";
          default:
            return "Unknown";
        }
      }
      Symbology.toHumanizedName = toHumanizedName;
      function toJSONName(symbology) {
        switch (symbology.toLowerCase()) {
          case Symbology.EAN13:
            return "ean13";
          case Symbology.EAN8:
            return "ean8";
          case Symbology.UPCA:
            return "upca";
          case Symbology.UPCE:
            return "upce";
          case Symbology.CODE128:
            return "code128";
          case Symbology.CODE32:
            return "code32";
          case Symbology.CODE39:
            return "code39";
          case Symbology.CODE93:
            return "code93";
          case Symbology.INTERLEAVED_2_OF_5:
            return "itf";
          case Symbology.QR:
            return "qr";
          case Symbology.DATA_MATRIX:
            return "data-matrix";
          case Symbology.PDF417:
            return "pdf417";
          case Symbology.MSI_PLESSEY:
            return "msi-plessey";
          case Symbology.GS1_DATABAR:
            return "databar";
          case Symbology.GS1_DATABAR_EXPANDED:
            return "databar-expanded";
          case Symbology.CODABAR:
            return "codabar";
          case Symbology.AZTEC:
            return "aztec";
          case Symbology.TWO_DIGIT_ADD_ON:
            return "two-digit-add-on";
          case Symbology.FIVE_DIGIT_ADD_ON:
            return "five-digit-add-on";
          case Symbology.MAXICODE:
            return "maxicode";
          case Symbology.CODE11:
            return "code11";
          case Symbology.GS1_DATABAR_LIMITED:
            return "databar-limited";
          case Symbology.CODE25:
            return "code25";
          case Symbology.MICRO_PDF417:
            return "micropdf417";
          case Symbology.RM4SCC:
            return "rm4scc";
          case Symbology.KIX:
            return "kix";
          case Symbology.DOTCODE:
            return "dotcode";
          default:
            return "unknown";
        }
      }
      Symbology.toJSONName = toJSONName;
    })(Barcode.Symbology || (Barcode.Symbology = {}));
  })(exports.Barcode || (exports.Barcode = {}));
  exports.Parser = (function() {
    function Parser(scanner, dataFormat) {
      this.scanner = scanner;
      this.dataFormat = dataFormat;
    }
    Parser.prototype.setOptions = function(options) {
      this.options = options;
    };
    Parser.prototype.parseRawData = function(dataRaw) {
      var dataString;
      try {
        dataString = decodeURIComponent(escape(String.fromCharCode.apply(null, dataRaw)));
      } catch (error) {
        dataString = "";
      }
      return this.scanner.parseString(this.dataFormat, dataString, this.options);
    };
    Parser.prototype.parseString = function(dataString) {
      return this.scanner.parseString(this.dataFormat, dataString, this.options);
    };
    return Parser;
  })();
  (function(Parser) {
    (function(DataFormat) {
      DataFormat[(DataFormat["GS1_AI"] = 1)] = "GS1_AI";
      DataFormat[(DataFormat["HIBC"] = 2)] = "HIBC";
      DataFormat[(DataFormat["DLID"] = 3)] = "DLID";
      DataFormat[(DataFormat["MRTD"] = 4)] = "MRTD";
      DataFormat[(DataFormat["SWISSQR"] = 5)] = "SWISSQR";
    })(Parser.DataFormat || (Parser.DataFormat = {}));
  })(exports.Parser || (exports.Parser = {}));
  var isEnum = _objectPie.f;
  var _objectToArray = function(isEntries) {
    return function(it) {
      var O = _toIobject(it);
      var keys = _objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) if (isEnum.call(O, (key = keys[i++]))) result.push(isEntries ? [key, O[key]] : O[key]);
      return result;
    };
  };
  var $values = _objectToArray(false);
  _export(_export.S, "Object", {
    values: function values(it) {
      return $values(it);
    }
  });
  var _createProperty = function(object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };
  _export(_export.S + _export.F * !_iterDetect(function(iter) {}), "Array", {
    from: function from(arrayLike) {
      var O = _toObject(arrayLike);
      var C = "function" == typeof this ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : void 0;
      var mapping = void 0 !== mapfn;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
      if (void 0 != iterFn && !(C == Array && _isArrayIter(iterFn)))
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++)
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++)
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
      result.length = index;
      return result;
    }
  });
  var SET = "Set";
  _collection(
    SET,
    function(get) {
      return function Set() {
        return get(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    },
    {
      add: function add(value) {
        return _collectionStrong.def(_validateCollection(this, SET), (value = 0 === value ? 0 : value), value);
      }
    },
    _collectionStrong
  );
  exports.SymbologySettings = (function() {
    function SymbologySettings(_a) {
      var _b = void 0 === _a ? {} : _a,
        _c = _b.enabled,
        enabled = void 0 === _c ? false : _c,
        _d = _b.colorInvertedEnabled,
        colorInvertedEnabled = void 0 === _d ? false : _d,
        _e = _b.activeSymbolCounts,
        activeSymbolCounts = void 0 === _e ? [] : _e,
        extensions = _b.extensions,
        checksums = _b.checksums;
      this.enabled = enabled;
      this.colorInvertedEnabled = colorInvertedEnabled;
      this.activeSymbolCounts = activeSymbolCounts;
      this.customExtensions = null != extensions;
      this.customChecksums = null != checksums;
      if (null == extensions) extensions = [];
      if (null == checksums) checksums = [];
      this.extensions = new Set(
        Array.from(extensions).filter(function(e) {
          return (
            e in SymbologySettings.Extension ||
            -1 !== Object.values(SymbologySettings.Extension).indexOf(e.toLowerCase())
          );
        })
      );
      this.checksums = new Set(
        Array.from(checksums).filter(function(c) {
          return (
            c in SymbologySettings.Checksum || -1 !== Object.values(SymbologySettings.Checksum).indexOf(c.toLowerCase())
          );
        })
      );
    }
    SymbologySettings.prototype.isEnabled = function() {
      return this.enabled;
    };
    SymbologySettings.prototype.setEnabled = function(enabled) {
      this.enabled = enabled;
      return this;
    };
    SymbologySettings.prototype.isColorInvertedEnabled = function() {
      return this.colorInvertedEnabled;
    };
    SymbologySettings.prototype.setColorInvertedEnabled = function(enabled) {
      this.colorInvertedEnabled = enabled;
      return this;
    };
    SymbologySettings.prototype.getActiveSymbolCounts = function() {
      return this.activeSymbolCounts;
    };
    SymbologySettings.prototype.setActiveSymbolCounts = function(activeSymbolCounts) {
      this.activeSymbolCounts = activeSymbolCounts;
      return this;
    };
    SymbologySettings.prototype.setActiveSymbolCountsRange = function(minCount, maxCount) {
      this.activeSymbolCounts = Array.from({ length: maxCount - minCount + 1 }, function(_, k) {
        return k + minCount;
      });
      return this;
    };
    SymbologySettings.prototype.getEnabledExtensions = function() {
      return this.extensions;
    };
    SymbologySettings.prototype.enableExtensions = function(extension) {
      this.customExtensions = true;
      if ("object" === _typeof_1(extension))
        this.extensions = new Set(
          __spread(
            this.extensions,
            Array.from(extension).filter(function(e) {
              return (
                e in SymbologySettings.Extension ||
                -1 !== Object.values(SymbologySettings.Extension).indexOf(e.toLowerCase())
              );
            })
          )
        );
      else if (
        extension in SymbologySettings.Extension ||
        -1 !== Object.values(SymbologySettings.Extension).indexOf(extension.toLowerCase())
      )
        this.extensions.add(extension);
      return this;
    };
    SymbologySettings.prototype.disableExtensions = function(extension) {
      if ("object" === _typeof_1(extension))
        this.extensions = new Set(
          __spread(this.extensions).filter(function(x) {
            return extension instanceof Array ? -1 === extension.indexOf(x) : !extension.has(x);
          })
        );
      else this.extensions.delete(extension);
      return this;
    };
    SymbologySettings.prototype.getEnabledChecksums = function() {
      return this.checksums;
    };
    SymbologySettings.prototype.enableChecksums = function(checksum) {
      this.customChecksums = true;
      if ("object" === _typeof_1(checksum))
        this.checksums = new Set(
          __spread(
            this.checksums,
            Array.from(checksum).filter(function(c) {
              return (
                c in SymbologySettings.Checksum ||
                -1 !== Object.values(SymbologySettings.Checksum).indexOf(c.toLowerCase())
              );
            })
          )
        );
      else if (
        checksum in SymbologySettings.Checksum ||
        -1 !== Object.values(SymbologySettings.Checksum).indexOf(checksum.toLowerCase())
      )
        this.checksums.add(checksum);
      return this;
    };
    SymbologySettings.prototype.disableChecksums = function(checksum) {
      if ("object" === _typeof_1(checksum))
        this.checksums = new Set(
          __spread(this.checksums).filter(function(x) {
            return checksum instanceof Array ? -1 === checksum.indexOf(x) : !checksum.has(x);
          })
        );
      else this.checksums.delete(checksum);
      return this;
    };
    SymbologySettings.prototype.toJSON = function() {
      return {
        enabled: this.enabled,
        colorInvertedEnabled: this.colorInvertedEnabled,
        activeSymbolCounts: 0 === this.activeSymbolCounts.length ? void 0 : this.activeSymbolCounts,
        extensions: this.customExtensions ? Array.from(this.extensions) : void 0,
        checksums: this.customChecksums ? Array.from(this.checksums) : void 0
      };
    };
    return SymbologySettings;
  })();
  (function(SymbologySettings) {
    (function(Extension) {
      Extension["DIRECT_PART_MARKING_MODE"] = "direct_part_marking_mode";
      Extension["FULL_ASCII"] = "full_ascii";
      Extension["RELAXED_SHARP_QUIET_ZONE_CHECK"] = "relaxed_sharp_quiet_zone_check";
      Extension["REMOVE_LEADING_ZERO"] = "remove_leading_zero";
      Extension["REMOVE_LEADING_UPCA_ZERO"] = "remove_leading_upca_zero";
      Extension["RETURN_AS_UPCA"] = "return_as_upca";
      Extension["STRIP_LEADING_FNC1"] = "strip_leading_fnc1";
    })(SymbologySettings.Extension || (SymbologySettings.Extension = {}));
    (function(Checksum) {
      Checksum["MOD_10"] = "mod10";
      Checksum["MOD_11"] = "mod11";
      Checksum["MOD_16"] = "mod16";
      Checksum["MOD_43"] = "mod43";
      Checksum["MOD_47"] = "mod47";
      Checksum["MOD_103"] = "mod103";
      Checksum["MOD_1010"] = "mod1010";
      Checksum["MOD_1110"] = "mod1110";
    })(SymbologySettings.Checksum || (SymbologySettings.Checksum = {}));
  })(exports.SymbologySettings || (exports.SymbologySettings = {}));
  var ScanSettings = (function() {
    function ScanSettings(_a) {
      var _b = void 0 === _a ? {} : _a,
        _c = _b.enabledSymbologies,
        enabledSymbologies = void 0 === _c ? [] : _c,
        _d = _b.codeDuplicateFilter,
        codeDuplicateFilter = void 0 === _d ? 0 : _d,
        _e = _b.maxNumberOfCodesPerFrame,
        maxNumberOfCodesPerFrame = void 0 === _e ? 1 : _e,
        _f = _b.searchArea,
        searchArea = void 0 === _f ? { x: 0, y: 0, width: 1, height: 1 } : _f;
      this.symbologySettings = new Map();
      this.enableSymbologies(enabledSymbologies);
      this.codeDuplicateFilter = codeDuplicateFilter;
      this.maxNumberOfCodesPerFrame = maxNumberOfCodesPerFrame;
      this.baseSearchArea = { x: 0, y: 0, width: 1, height: 1 };
      this.searchArea = searchArea;
    }
    ScanSettings.prototype.toJSONString = function() {
      var symbologies = {};
      this.symbologySettings.forEach(function(symbologySettings, symbology) {
        symbologies[exports.Barcode.Symbology.toJSONName(symbology)] = symbologySettings;
      });
      var combinedSearchArea = {
        x: Math.min(1, this.baseSearchArea.x + this.searchArea.x * this.baseSearchArea.width),
        y: Math.min(1, this.baseSearchArea.y + this.searchArea.y * this.baseSearchArea.height),
        width: Math.min(1, this.baseSearchArea.width * this.searchArea.width),
        height: Math.min(1, this.baseSearchArea.height * this.searchArea.height)
      };
      var isFullSearchArea =
        0 === Math.round(100 * combinedSearchArea.x) &&
        0 === Math.round(100 * combinedSearchArea.y) &&
        100 === Math.round(100 * combinedSearchArea.width) &&
        100 === Math.round(100 * combinedSearchArea.height);
      return JSON.stringify({
        symbologies: symbologies,
        codeDuplicateFilter: this.codeDuplicateFilter,
        maxNumberOfCodesPerFrame: this.maxNumberOfCodesPerFrame,
        searchArea: combinedSearchArea,
        codeLocation1d: isFullSearchArea
          ? void 0
          : {
              area: {
                x: combinedSearchArea.x,
                y: combinedSearchArea.y + (0.75 * combinedSearchArea.height) / 2,
                width: combinedSearchArea.width,
                height: 0.25 * combinedSearchArea.height
              }
            },
        codeLocation2d: isFullSearchArea ? void 0 : { area: combinedSearchArea }
      });
    };
    ScanSettings.prototype.getSymbologySettings = function(symbology) {
      if (this.symbologySettings.has(symbology)) return this.symbologySettings.get(symbology);
      else if (
        symbology in exports.Barcode.Symbology ||
        -1 !== Object.values(exports.Barcode.Symbology).indexOf(symbology)
      ) {
        this.symbologySettings.set(symbology, new exports.SymbologySettings());
        return this.symbologySettings.get(symbology);
      } else throw new TypeError('Invalid symbology "' + symbology + '"');
    };
    ScanSettings.prototype.isSymbologyEnabled = function(symbology) {
      return this.getSymbologySettings(symbology).isEnabled();
    };
    ScanSettings.prototype.enableSymbologies = function(symbology) {
      return this.setSymbologiesEnabled(symbology, true);
    };
    ScanSettings.prototype.disableSymbologies = function(symbology) {
      return this.setSymbologiesEnabled(symbology, false);
    };
    ScanSettings.prototype.getCodeDuplicateFilter = function() {
      return this.codeDuplicateFilter;
    };
    ScanSettings.prototype.setCodeDuplicateFilter = function(durationMilliseconds) {
      this.codeDuplicateFilter = durationMilliseconds;
      return this;
    };
    ScanSettings.prototype.getMaxNumberOfCodesPerFrame = function() {
      return this.maxNumberOfCodesPerFrame;
    };
    ScanSettings.prototype.setMaxNumberOfCodesPerFrame = function(limit) {
      this.maxNumberOfCodesPerFrame = limit;
      return this;
    };
    ScanSettings.prototype.getSearchArea = function() {
      return this.searchArea;
    };
    ScanSettings.prototype.setSearchArea = function(searchArea) {
      this.searchArea = searchArea;
      return this;
    };
    ScanSettings.prototype.getBaseSearchArea = function() {
      return this.baseSearchArea;
    };
    ScanSettings.prototype.setBaseSearchArea = function(baseSearchArea) {
      this.baseSearchArea = baseSearchArea;
      return this;
    };
    ScanSettings.prototype.setSymbologiesEnabled = function(symbology, enabled) {
      var e_1, _a, e_2, _b;
      if ("object" === _typeof_1(symbology)) {
        try {
          for (
            var symbology_1 = __values(symbology), symbology_1_1 = symbology_1.next();
            !symbology_1_1.done;
            symbology_1_1 = symbology_1.next()
          ) {
            var s = symbology_1_1.value;
            if (!(s in exports.Barcode.Symbology || -1 !== Object.values(exports.Barcode.Symbology).indexOf(s)))
              throw new TypeError('Invalid symbology "' + s + '"');
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (symbology_1_1 && !symbology_1_1.done && (_a = symbology_1.return)) _a.call(symbology_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        try {
          for (
            var symbology_2 = __values(symbology), symbology_2_1 = symbology_2.next();
            !symbology_2_1.done;
            symbology_2_1 = symbology_2.next()
          ) {
            s = symbology_2_1.value;
            if (this.symbologySettings.has(s)) this.symbologySettings.get(s).setEnabled(enabled);
            else this.symbologySettings.set(s, new exports.SymbologySettings({ enabled: enabled }));
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (symbology_2_1 && !symbology_2_1.done && (_b = symbology_2.return)) _b.call(symbology_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      } else if (
        symbology in exports.Barcode.Symbology ||
        -1 !== Object.values(exports.Barcode.Symbology).indexOf(symbology)
      )
        if (this.symbologySettings.has(symbology)) this.symbologySettings.get(symbology).setEnabled(enabled);
        else this.symbologySettings.set(symbology, new exports.SymbologySettings({ enabled: enabled }));
      else throw new TypeError('Invalid symbology "' + symbology + '"');
      return this;
    };
    return ScanSettings;
  })();
  (function(_super) {
    __extends(ScannerEventEmitter, _super);
    function ScannerEventEmitter() {
      return (null !== _super && _super.apply(this, arguments)) || this;
    }
  })(eventemitter3_1);
  var Scanner$$1 = (function() {
    function Scanner$$1(_a) {
      var _b = void 0 === _a ? {} : _a,
        _c = _b.scanSettings,
        scanSettings = void 0 === _c ? new ScanSettings() : _c,
        imageSettings = _b.imageSettings;
      var browserCompatibility = exports.BrowserHelper.checkBrowserCompatibility();
      if (!browserCompatibility.scannerSupport)
        throw new CustomError({
          name: "UnsupportedBrowserError",
          message: "This OS / Browser has one or more missing features preventing it from working correctly",
          data: browserCompatibility
        });
      if (null == exports.userLicenseKey || "" === exports.userLicenseKey.trim())
        throw new CustomError({
          name: "LibraryNotConfiguredError",
          message: "The library has not correctly been configured yet, please call 'configure' with valid parameters"
        });
      this.isReadyToWork = false;
      this.workerScanQueueLength = 0;
      this.engineSDKWorker = new Worker(URL.createObjectURL(engineSDKWorker));
      this.engineSDKWorker.onmessage = this.engineWorkerOnMessage.bind(this);
      this.engineSDKWorker.postMessage({
        type: "load-library",
        deviceId: deviceId,
        libraryLocation: exports.scanditEngineLocation,
        path: self.location.pathname
      });
      this.eventEmitter = new eventemitter3_1();
      this.workerParseRequestId = 0;
      this.workerScanRequestId = 0;
      this.applyLicenseKey(exports.userLicenseKey);
      this.applyScanSettings(scanSettings);
      if (null != imageSettings) this.applyImageSettings(imageSettings);
    }
    Scanner$$1.prototype.destroy = function() {
      if (null != this.engineSDKWorker) this.engineSDKWorker.terminate();
      this.eventEmitter.removeAllListeners();
    };
    Scanner$$1.prototype.applyScanSettings = function(scanSettings) {
      this.scanSettings = scanSettings;
      this.engineSDKWorker.postMessage({ type: "settings", settings: this.scanSettings.toJSONString() });
      return this;
    };
    Scanner$$1.prototype.applyImageSettings = function(imageSettings) {
      this.imageSettings = imageSettings;
      this.engineSDKWorker.postMessage({ type: "image-settings", imageSettings: imageSettings });
      return this;
    };
    Scanner$$1.prototype.processImage = function(imageData, highQualitySingleFrameMode) {
      var _this = this;
      if (void 0 === highQualitySingleFrameMode) highQualitySingleFrameMode = false;
      if (null == this.imageSettings)
        return Promise.reject(
          new CustomError({ name: "NoImageSettings", message: "No image settings set up in the scanner" })
        );
      var channels;
      switch (this.imageSettings.format.valueOf()) {
        case exports.ImageSettings.Format.GRAY_8U:
          channels = 1;
          break;
        case exports.ImageSettings.Format.RGB_8U:
          channels = 3;
          break;
        case exports.ImageSettings.Format.RGBA_8U:
          channels = 4;
          break;
        default:
          channels = 1;
      }
      if (this.imageSettings.width * this.imageSettings.height * channels !== imageData.length)
        return Promise.reject(
          new CustomError({
            name: "ImageSettingsDataMismatch",
            message: "The provided image data doesn't match the previously set image settings"
          })
        );
      this.workerScanRequestId++;
      this.workerScanQueueLength++;
      return new Promise(function(resolve, reject) {
        var workResultEvent = "work-result-" + _this.workerScanRequestId;
        var workErrorEvent = "work-error-" + _this.workerScanRequestId;
        _this.eventEmitter.once(workResultEvent, function(workResult) {
          _this.eventEmitter.removeAllListeners(workErrorEvent);
          resolve({
            barcodes: workResult.scanResult.map(exports.Barcode.createFromWASMResult),
            imageData: imageData,
            imageSettings: _this.imageSettings
          });
        });
        _this.eventEmitter.once(workErrorEvent, function(error) {
          console.error("Scandit Engine error (" + error.errorCode + "):", error.errorMessage);
          _this.eventEmitter.removeAllListeners(workResultEvent);
          var errorObject = new CustomError({
            name: "ScanditEngineError",
            message: error.errorMessage + " (" + error.errorCode + ")"
          });
          reject(errorObject);
        });
        _this.engineSDKWorker.postMessage({
          type: "work",
          requestId: _this.workerScanRequestId,
          data: imageData,
          highQualitySingleFrameMode: highQualitySingleFrameMode
        });
      });
    };
    Scanner$$1.prototype.isBusyProcessing = function() {
      return 0 !== this.workerScanQueueLength;
    };
    Scanner$$1.prototype.isReady = function() {
      return this.isReadyToWork;
    };
    Scanner$$1.prototype.onReady = function(listener) {
      if (this.isReadyToWork) listener();
      else this.eventEmitter.once("ready", listener, this);
      return this;
    };
    Scanner$$1.prototype.createParserForFormat = function(dataFormat) {
      return new exports.Parser(this, dataFormat);
    };
    Scanner$$1.prototype.getImageSettings = function() {
      return this.imageSettings;
    };
    Scanner$$1.prototype.getScanSettings = function() {
      return this.scanSettings;
    };
    Scanner$$1.prototype.parseString = function(dataFormat, dataString, options) {
      var _this = this;
      this.workerParseRequestId++;
      return new Promise(function(resolve, reject) {
        var parseStringResultEvent = "parse-string-result-" + _this.workerParseRequestId;
        var parseStringErrorEvent = "parse-string-error-" + _this.workerParseRequestId;
        _this.eventEmitter.once(parseStringResultEvent, function(result) {
          _this.eventEmitter.removeAllListeners(parseStringErrorEvent);
          var parserResult = { jsonString: result, fields: [], fieldsByName: {} };
          JSON.parse(result).forEach(function(parserField) {
            parserResult.fields.push(parserField);
            parserResult.fieldsByName[parserField.name] = parserField;
          });
          resolve(parserResult);
        });
        _this.eventEmitter.once(parseStringErrorEvent, function(error) {
          console.error("Scandit Engine error (" + error.errorCode + "):", error.errorMessage);
          _this.eventEmitter.removeAllListeners(parseStringResultEvent);
          var errorObject = new CustomError({
            name: "ScanditEngineError",
            message: error.errorMessage + " (" + error.errorCode + ")"
          });
          reject(errorObject);
        });
        _this.engineSDKWorker.postMessage({
          type: "parse-string",
          requestId: _this.workerParseRequestId,
          dataFormat: dataFormat,
          dataString: dataString,
          options: null == options ? "{}" : JSON.stringify(options)
        });
      });
    };
    Scanner$$1.prototype.applyLicenseKey = function(licenseKey) {
      this.engineSDKWorker.postMessage({ type: "license-key", licenseKey: licenseKey });
      return this;
    };
    Scanner$$1.prototype.engineWorkerOnMessage = function(ev) {
      var messageType = ev.data[0];
      var messageData = ev.data[1];
      if ("status" === messageType) {
        if ("ready" === messageData) {
          this.isReadyToWork = true;
          this.eventEmitter.emit("ready");
        }
      } else if ("work-result" === messageType && null != messageData) {
        this.eventEmitter.emit("work-result-" + messageData.requestId, messageData.result);
        this.workerScanQueueLength--;
      } else if ("work-error" === messageType && null != messageData) {
        this.eventEmitter.emit("work-error-" + messageData.requestId, messageData.error);
        this.workerScanQueueLength--;
      } else if ("parse-string-result" === messageType && null != messageData)
        this.eventEmitter.emit("parse-string-result-" + messageData.requestId, messageData.result);
      else if ("parse-string-error" === messageType && null != messageData)
        this.eventEmitter.emit("parse-string-error-" + messageData.requestId, messageData.error);
    };
    return Scanner$$1;
  })();
  ___$insertStyle(
    '.scandit.scandit-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}.scandit.scandit-barcode-picker{position:relative;width:100%;height:100%;background-color:#000}.scandit .scandit-video{width:100%;height:100%;position:relative;display:block}.scandit .scandit-video.mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.scandit .scandit-logo{position:absolute;bottom:5%;right:5%;max-width:35%;max-height:12.5%;pointer-events:none;-webkit-transform:translateZ(0);transform:translateZ(0)}.scandit .scandit-laser{max-width:75%;max-height:10%}.scandit .scandit-laser,.scandit .scandit-viewfinder{z-index:10;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;-webkit-animation-duration:.25s;animation-duration:.25s;transition:opacity .25s ease;pointer-events:none;-webkit-transform:translateZ(0);transform:translateZ(0)}.scandit .scandit-viewfinder{box-sizing:border-box;width:90%;height:60%;border:2px solid #fff;border-radius:10px}.scandit .scandit-viewfinder.paused{opacity:.4}.scandit .scandit-camera-switcher,.scandit .scandit-torch-toggle{-webkit-tap-highlight-color:rgba(255,255,255,0);position:absolute;top:5%;max-width:15%;max-height:15%;z-index:10;cursor:pointer;-webkit-filter:drop-shadow(0 2px 0 grey);filter:drop-shadow(0 2px 0 #808080);-webkit-transform:translateZ(0);transform:translateZ(0)}.scandit .scandit-camera-switcher{left:5%}.scandit .scandit-torch-toggle{right:5%}.scandit .scandit-camera-upload{-webkit-tap-highlight-color:rgba(255,255,255,0);display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;z-index:5}.scandit .scandit-camera-upload label{cursor:pointer;text-align:center;width:224px;height:224px;min-width:224px;min-height:224px;z-index:10;margin:4px;padding:20px;box-sizing:border-box;border-radius:50%;-webkit-filter:drop-shadow(0 0 .15rem #000);filter:drop-shadow(0 0 .15rem #000)}.scandit .scandit-camera-upload label input[type=file]{position:absolute;top:-9999px}.scandit .scandit-camera-upload label img{width:60%;height:60%}.scandit .scandit-camera-upload label div{font-family:sans-serif;color:#fff;font-size:16pt}.scandit .radial-progress{width:224px;height:224px;background-color:transparent;border:4px solid #fff;border-radius:50%;position:absolute;transition:opacity 1s ease,border-color .5s;-webkit-animation-duration:.25s;animation-duration:.25s;z-index:7;box-shadow:0 0 .3rem #000,inset 0 0 .3rem #000}.scandit .radial-progress[data-progress="0"]{border-color:hsla(0,0%,100%,.2)}.scandit .radial-progress[data-progress="5"]{border-color:hsla(0,0%,100%,.24)}.scandit .radial-progress[data-progress="10"]{border-color:hsla(0,0%,100%,.28)}.scandit .radial-progress[data-progress="15"]{border-color:hsla(0,0%,100%,.32)}.scandit .radial-progress[data-progress="20"]{border-color:hsla(0,0%,100%,.36)}.scandit .radial-progress[data-progress="25"]{border-color:hsla(0,0%,100%,.4)}.scandit .radial-progress[data-progress="30"]{border-color:hsla(0,0%,100%,.44)}.scandit .radial-progress[data-progress="35"]{border-color:hsla(0,0%,100%,.48)}.scandit .radial-progress[data-progress="40"]{border-color:hsla(0,0%,100%,.52)}.scandit .radial-progress[data-progress="45"]{border-color:hsla(0,0%,100%,.56)}.scandit .radial-progress[data-progress="50"]{border-color:hsla(0,0%,100%,.6)}.scandit .radial-progress[data-progress="55"]{border-color:hsla(0,0%,100%,.64)}.scandit .radial-progress[data-progress="60"]{border-color:hsla(0,0%,100%,.68)}.scandit .radial-progress[data-progress="65"]{border-color:hsla(0,0%,100%,.72)}.scandit .radial-progress[data-progress="70"]{border-color:hsla(0,0%,100%,.76)}.scandit .radial-progress[data-progress="75"]{border-color:hsla(0,0%,100%,.8)}.scandit .radial-progress[data-progress="80"]{border-color:hsla(0,0%,100%,.84)}.scandit .radial-progress[data-progress="85"]{border-color:hsla(0,0%,100%,.88)}.scandit .radial-progress[data-progress="90"]{border-color:hsla(0,0%,100%,.92)}.scandit .radial-progress[data-progress="95"]{border-color:hsla(0,0%,100%,.96)}.scandit .radial-progress[data-progress="100"]{border-color:#fff}.scandit .scandit-flash-color{-webkit-animation-name:scandit-flash-color;animation-name:scandit-flash-color}.scandit .scandit-flash-white{-webkit-animation-name:scandit-flash-white;animation-name:scandit-flash-white}.scandit .scandit-flash-white-inset{-webkit-animation-name:scandit-flash-white-inset;animation-name:scandit-flash-white-inset}.scandit .scandit-opacity-pulse{-webkit-animation-duration:.333s,1s;animation-duration:.333s,1s;-webkit-animation-iteration-count:1,infinite;animation-iteration-count:1,infinite;-webkit-animation-delay:0s,.333s;animation-delay:0s,.333s;-webkit-animation-timing-function:cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1);animation-timing-function:cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1);-webkit-animation-name:scandit-opacity-pulse-before,scandit-opacity-pulse;animation-name:scandit-opacity-pulse-before,scandit-opacity-pulse}.scandit .scandit-hidden-opacity{opacity:0}.scandit-hidden{display:none!important}@-webkit-keyframes scandit-flash-color{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2);filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2)}to{-webkit-filter:none;filter:none}}@keyframes scandit-flash-color{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2);filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2)}to{-webkit-filter:none;filter:none}}@-webkit-keyframes scandit-flash-white{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff);filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff)}to{-webkit-filter:none;filter:none}}@keyframes scandit-flash-white{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff);filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff)}to{-webkit-filter:none;filter:none}}@-webkit-keyframes scandit-flash-white-inset{0%{box-shadow:none}50%{box-shadow:inset 0 0 .5rem #fff,inset 0 0 1rem #fff,inset 0 0 2.5rem #fff}to{box-shadow:none}}@keyframes scandit-flash-white-inset{0%{box-shadow:none}50%{box-shadow:inset 0 0 .5rem #fff,inset 0 0 1rem #fff,inset 0 0 2.5rem #fff}to{box-shadow:none}}@-webkit-keyframes scandit-opacity-pulse-before{0%{opacity:1}to{opacity:.4}}@keyframes scandit-opacity-pulse-before{0%{opacity:1}to{opacity:.4}}@-webkit-keyframes scandit-opacity-pulse{0%{opacity:.4}50%{opacity:.6}to{opacity:.4}}@keyframes scandit-opacity-pulse{0%{opacity:.4}50%{opacity:.6}to{opacity:.4}}@-webkit-keyframes scandit-opacity-pulse-after{0%{opacity:.5}to{opacity:1}}@keyframes scandit-opacity-pulse-after{0%{opacity:.5}to{opacity:1}}'
  );
  var howler_core_min = createCommonjsModule(function(module, exports) {
    /*! howler.js v2.0.15 | (c) 2013-2018, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
    !(function() {
      var e = function() {
        this.init();
      };
      e.prototype = {
        init: function() {
          var e = this || n;
          return (
            (e._counter = 1e3),
            (e._codecs = {}),
            (e._howls = []),
            (e._muted = !1),
            (e._volume = 1),
            (e._canPlayEvent = "canplaythrough"),
            (e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null),
            (e.masterGain = null),
            (e.noAudio = !1),
            (e.usingWebAudio = !0),
            (e.autoSuspend = !0),
            (e.ctx = null),
            (e.mobileAutoEnable = !0),
            e._setup(),
            e
          );
        },
        volume: function(e) {
          var o = this || n;
          if (((e = parseFloat(e)), o.ctx || _(), void 0 !== e && e >= 0 && e <= 1)) {
            if (((o._volume = e), o._muted)) return o;
            o.usingWebAudio && o.masterGain.gain.setValueAtTime(e, n.ctx.currentTime);
            for (var t = 0; t < o._howls.length; t++)
              if (!o._howls[t]._webAudio)
                for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
                  var u = o._howls[t]._soundById(r[a]);
                  u && u._node && (u._node.volume = u._volume * e);
                }
            return o;
          }
          return o._volume;
        },
        mute: function(e) {
          var o = this || n;
          o.ctx || _(),
            (o._muted = e),
            o.usingWebAudio && o.masterGain.gain.setValueAtTime(e ? 0 : o._volume, n.ctx.currentTime);
          for (var t = 0; t < o._howls.length; t++)
            if (!o._howls[t]._webAudio)
              for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
                var u = o._howls[t]._soundById(r[a]);
                u && u._node && (u._node.muted = !!e || u._muted);
              }
          return o;
        },
        unload: function() {
          for (var e = this || n, o = e._howls.length - 1; o >= 0; o--) e._howls[o].unload();
          return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), (e.ctx = null), _()), e;
        },
        codecs: function(e) {
          return (this || n)._codecs[e.replace(/^x-/, "")];
        },
        _setup: function() {
          var e = this || n;
          if (((e.state = e.ctx ? e.ctx.state || "running" : "running"), e._autoSuspend(), !e.usingWebAudio))
            if ("undefined" != typeof Audio)
              try {
                var o = new Audio();
                void 0 === o.oncanplaythrough && (e._canPlayEvent = "canplay");
              } catch (n) {
                e.noAudio = !0;
              }
            else e.noAudio = !0;
          try {
            o = new Audio();
            o.muted && (e.noAudio = !0);
          } catch (e) {}
          return e.noAudio || e._setupCodecs(), e;
        },
        _setupCodecs: function() {
          var e = this || n,
            o = null;
          try {
            o = "undefined" != typeof Audio ? new Audio() : null;
          } catch (n) {
            return e;
          }
          if (!o || "function" != typeof o.canPlayType) return e;
          var t = o.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
            a = r && parseInt(r[0].split("/")[1], 10) < 33;
          return (
            (e._codecs = {
              mp3: !(a || (!t && !o.canPlayType("audio/mp3;").replace(/^no$/, ""))),
              mpeg: !!t,
              opus: !!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
              ogg: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
              oga: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
              wav: !!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
              aac: !!o.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!o.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(
                o.canPlayType("audio/x-m4a;") ||
                o.canPlayType("audio/m4a;") ||
                o.canPlayType("audio/aac;")
              ).replace(/^no$/, ""),
              mp4: !!(
                o.canPlayType("audio/x-mp4;") ||
                o.canPlayType("audio/mp4;") ||
                o.canPlayType("audio/aac;")
              ).replace(/^no$/, ""),
              weba: !!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
              webm: !!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
              dolby: !!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
              flac: !!(o.canPlayType("audio/x-flac;") || o.canPlayType("audio/flac;")).replace(/^no$/, "")
            }),
            e
          );
        },
        _enableMobileAudio: function() {
          var e = this || n,
            o = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome/i.test(
              e._navigator && e._navigator.userAgent
            );
          if (!e._mobileEnabled && e.ctx && o) {
            (e._mobileEnabled = !1),
              (e.mobileAutoEnable = !1),
              e._mobileUnloaded || 44100 === e.ctx.sampleRate || ((e._mobileUnloaded = !0), e.unload()),
              (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
            var t = function(o) {
              n._autoResume();
              var r = e.ctx.createBufferSource();
              (r.buffer = e._scratchBuffer),
                r.connect(e.ctx.destination),
                void 0 === r.start ? r.noteOn(0) : r.start(0),
                "function" == typeof e.ctx.resume && e.ctx.resume(),
                (r.onended = function() {
                  r.disconnect(0),
                    (e._mobileEnabled = !0),
                    document.removeEventListener("touchstart", t, !0),
                    document.removeEventListener("touchend", t, !0),
                    document.removeEventListener("click", t, !0);
                  for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("unlock");
                });
            };
            return (
              document.addEventListener("touchstart", t, !0),
              document.addEventListener("touchend", t, !0),
              document.addEventListener("click", t, !0),
              e
            );
          }
        },
        _autoSuspend: function() {
          var e = this;
          if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && n.usingWebAudio) {
            for (var o = 0; o < e._howls.length; o++)
              if (e._howls[o]._webAudio)
                for (var t = 0; t < e._howls[o]._sounds.length; t++) if (!e._howls[o]._sounds[t]._paused) return e;
            return (
              e._suspendTimer && clearTimeout(e._suspendTimer),
              (e._suspendTimer = setTimeout(function() {
                e.autoSuspend &&
                  ((e._suspendTimer = null),
                  (e.state = "suspending"),
                  e.ctx.suspend().then(function() {
                    (e.state = "suspended"), e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
                  }));
              }, 3e4)),
              e
            );
          }
        },
        _autoResume: function() {
          var e = this;
          if (e.ctx && void 0 !== e.ctx.resume && n.usingWebAudio)
            return (
              "running" === e.state && e._suspendTimer
                ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                : "suspended" === e.state
                  ? (e.ctx.resume().then(function() {
                      e.state = "running";
                      for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("resume");
                    }),
                    e._suspendTimer && (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                  : "suspending" === e.state && (e._resumeAfterSuspend = !0),
              e
            );
        }
      };
      var n = new e(),
        o = function(e) {
          var n = this;
          if (!e.src || 0 === e.src.length)
            return void console.error("An array of source files must be passed with any new Howl.");
          n.init(e);
        };
      o.prototype = {
        init: function(e) {
          var o = this;
          return (
            n.ctx || _(),
            (o._autoplay = e.autoplay || !1),
            (o._format = "string" != typeof e.format ? e.format : [e.format]),
            (o._html5 = e.html5 || !1),
            (o._muted = e.mute || !1),
            (o._loop = e.loop || !1),
            (o._pool = e.pool || 5),
            (o._preload = "boolean" != typeof e.preload || e.preload),
            (o._rate = e.rate || 1),
            (o._sprite = e.sprite || {}),
            (o._src = "string" != typeof e.src ? e.src : [e.src]),
            (o._volume = void 0 !== e.volume ? e.volume : 1),
            (o._xhrWithCredentials = e.xhrWithCredentials || !1),
            (o._duration = 0),
            (o._state = "unloaded"),
            (o._sounds = []),
            (o._endTimers = {}),
            (o._queue = []),
            (o._playLock = !1),
            (o._onend = e.onend ? [{ fn: e.onend }] : []),
            (o._onfade = e.onfade ? [{ fn: e.onfade }] : []),
            (o._onload = e.onload ? [{ fn: e.onload }] : []),
            (o._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
            (o._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
            (o._onpause = e.onpause ? [{ fn: e.onpause }] : []),
            (o._onplay = e.onplay ? [{ fn: e.onplay }] : []),
            (o._onstop = e.onstop ? [{ fn: e.onstop }] : []),
            (o._onmute = e.onmute ? [{ fn: e.onmute }] : []),
            (o._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
            (o._onrate = e.onrate ? [{ fn: e.onrate }] : []),
            (o._onseek = e.onseek ? [{ fn: e.onseek }] : []),
            (o._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
            (o._onresume = []),
            (o._webAudio = n.usingWebAudio && !o._html5),
            void 0 !== n.ctx && n.ctx && n.mobileAutoEnable && n._enableMobileAudio(),
            n._howls.push(o),
            o._autoplay &&
              o._queue.push({
                event: "play",
                action: function() {
                  o.play();
                }
              }),
            o._preload && o.load(),
            o
          );
        },
        load: function() {
          var e = this,
            o = null;
          if (n.noAudio) return void e._emit("loaderror", null, "No audio support.");
          "string" == typeof e._src && (e._src = [e._src]);
          for (var r = 0; r < e._src.length; r++) {
            var u, i;
            if (e._format && e._format[r]) u = e._format[r];
            else {
              if ("string" != typeof (i = e._src[r])) {
                e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue;
              }
              (u = /^data:audio\/([^;,]+);/i.exec(i)),
                u || (u = /\.([^.]+)$/.exec(i.split("?", 1)[0])),
                u && (u = u[1].toLowerCase());
            }
            if (
              (u ||
                console.warn(
                  'No file extension was found. Consider using the "format" property or specify an extension.'
                ),
              u && n.codecs(u))
            ) {
              o = e._src[r];
              break;
            }
          }
          return o
            ? ((e._src = o),
              (e._state = "loading"),
              "https:" === window.location.protocol &&
                "http:" === o.slice(0, 5) &&
                ((e._html5 = !0), (e._webAudio = !1)),
              new t(e),
              e._webAudio && a(e),
              e)
            : void e._emit("loaderror", null, "No codec support for selected audio sources.");
        },
        play: function(e, o) {
          var t = this,
            r = null;
          if ("number" == typeof e) (r = e), (e = null);
          else {
            if ("string" == typeof e && "loaded" === t._state && !t._sprite[e]) return null;
            if (void 0 === e) {
              e = "__default";
              for (var a = 0, u = 0; u < t._sounds.length; u++)
                t._sounds[u]._paused && !t._sounds[u]._ended && (a++, (r = t._sounds[u]._id));
              1 === a ? (e = null) : (r = null);
            }
          }
          var i = r ? t._soundById(r) : t._inactiveSound();
          if (!i) return null;
          if ((r && !e && (e = i._sprite || "__default"), "loaded" !== t._state)) {
            (i._sprite = e), (i._ended = !1);
            var d = i._id;
            return (
              t._queue.push({
                event: "play",
                action: function() {
                  t.play(d);
                }
              }),
              d
            );
          }
          if (r && !i._paused) return o || t._loadQueue("play"), i._id;
          t._webAudio && n._autoResume();
          var _ = Math.max(0, i._seek > 0 ? i._seek : t._sprite[e][0] / 1e3),
            s = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - _),
            l = (1e3 * s) / Math.abs(i._rate);
          if (
            ((i._paused = !1),
            (i._ended = !1),
            (i._sprite = e),
            (i._seek = _),
            (i._start = t._sprite[e][0] / 1e3),
            (i._stop = (t._sprite[e][0] + t._sprite[e][1]) / 1e3),
            (i._loop = !(!i._loop && !t._sprite[e][2])),
            i._seek >= i._stop)
          )
            return void t._ended(i);
          var c = i._node;
          if (t._webAudio) {
            var f = function() {
              t._refreshBuffer(i);
              var e = i._muted || t._muted ? 0 : i._volume;
              c.gain.setValueAtTime(e, n.ctx.currentTime),
                (i._playStart = n.ctx.currentTime),
                void 0 === c.bufferSource.start
                  ? i._loop
                    ? c.bufferSource.noteGrainOn(0, _, 86400)
                    : c.bufferSource.noteGrainOn(0, _, s)
                  : i._loop
                    ? c.bufferSource.start(0, _, 86400)
                    : c.bufferSource.start(0, _, s),
                l !== 1 / 0 && (t._endTimers[i._id] = setTimeout(t._ended.bind(t, i), l)),
                o ||
                  setTimeout(function() {
                    t._emit("play", i._id);
                  }, 0);
            };
            "running" === n.state ? f() : (t.once("resume", f), t._clearTimer(i._id));
          } else {
            var p = function() {
                (c.currentTime = _),
                  (c.muted = i._muted || t._muted || n._muted || c.muted),
                  (c.volume = i._volume * n.volume()),
                  (c.playbackRate = i._rate);
                try {
                  var r = c.play();
                  if (
                    (r && "undefined" != typeof Promise && (r instanceof Promise || "function" == typeof r.then)
                      ? ((t._playLock = !0),
                        r
                          .then(function() {
                            (t._playLock = !1), o || t._emit("play", i._id);
                          })
                          .catch(function() {
                            (t._playLock = !1),
                              t._emit(
                                "playerror",
                                i._id,
                                "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                              );
                          }))
                      : o || t._emit("play", i._id),
                    (c.playbackRate = i._rate),
                    c.paused)
                  )
                    return void t._emit(
                      "playerror",
                      i._id,
                      "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                    );
                  "__default" !== e || i._loop
                    ? (t._endTimers[i._id] = setTimeout(t._ended.bind(t, i), l))
                    : ((t._endTimers[i._id] = function() {
                        t._ended(i), c.removeEventListener("ended", t._endTimers[i._id], !1);
                      }),
                      c.addEventListener("ended", t._endTimers[i._id], !1));
                } catch (e) {
                  t._emit("playerror", i._id, e);
                }
              },
              m = (window && window.ejecta) || (!c.readyState && n._navigator.isCocoonJS);
            if (c.readyState >= 3 || m) p();
            else {
              var v = function() {
                p(), c.removeEventListener(n._canPlayEvent, v, !1);
              };
              c.addEventListener(n._canPlayEvent, v, !1), t._clearTimer(i._id);
            }
          }
          return i._id;
        },
        pause: function(e) {
          var n = this;
          if ("loaded" !== n._state || n._playLock)
            return (
              n._queue.push({
                event: "pause",
                action: function() {
                  n.pause(e);
                }
              }),
              n
            );
          for (var o = n._getSoundIds(e), t = 0; t < o.length; t++) {
            n._clearTimer(o[t]);
            var r = n._soundById(o[t]);
            if (
              r &&
              !r._paused &&
              ((r._seek = n.seek(o[t])), (r._rateSeek = 0), (r._paused = !0), n._stopFade(o[t]), r._node)
            )
              if (n._webAudio) {
                if (!r._node.bufferSource) continue;
                void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0),
                  n._cleanBuffer(r._node);
              } else (isNaN(r._node.duration) && r._node.duration !== 1 / 0) || r._node.pause();
            arguments[1] || n._emit("pause", r ? r._id : null);
          }
          return n;
        },
        stop: function(e, n) {
          var o = this;
          if ("loaded" !== o._state || o._playLock)
            return (
              o._queue.push({
                event: "stop",
                action: function() {
                  o.stop(e);
                }
              }),
              o
            );
          for (var t = o._getSoundIds(e), r = 0; r < t.length; r++) {
            o._clearTimer(t[r]);
            var a = o._soundById(t[r]);
            a &&
              ((a._seek = a._start || 0),
              (a._rateSeek = 0),
              (a._paused = !0),
              (a._ended = !0),
              o._stopFade(t[r]),
              a._node &&
                (o._webAudio
                  ? a._node.bufferSource &&
                    (void 0 === a._node.bufferSource.stop
                      ? a._node.bufferSource.noteOff(0)
                      : a._node.bufferSource.stop(0),
                    o._cleanBuffer(a._node))
                  : (isNaN(a._node.duration) && a._node.duration !== 1 / 0) ||
                    ((a._node.currentTime = a._start || 0), a._node.pause())),
              n || o._emit("stop", a._id));
          }
          return o;
        },
        mute: function(e, o) {
          var t = this;
          if ("loaded" !== t._state || t._playLock)
            return (
              t._queue.push({
                event: "mute",
                action: function() {
                  t.mute(e, o);
                }
              }),
              t
            );
          if (void 0 === o) {
            if ("boolean" != typeof e) return t._muted;
            t._muted = e;
          }
          for (var r = t._getSoundIds(o), a = 0; a < r.length; a++) {
            var u = t._soundById(r[a]);
            u &&
              ((u._muted = e),
              u._interval && t._stopFade(u._id),
              t._webAudio && u._node
                ? u._node.gain.setValueAtTime(e ? 0 : u._volume, n.ctx.currentTime)
                : u._node && (u._node.muted = !!n._muted || e),
              t._emit("mute", u._id));
          }
          return t;
        },
        volume: function() {
          var e,
            o,
            t = this,
            r = arguments;
          if (0 === r.length) return t._volume;
          if (1 === r.length || (2 === r.length && void 0 === r[1]))
            t._getSoundIds().indexOf(r[0]) >= 0 ? (o = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
          else r.length >= 2 && ((e = parseFloat(r[0])), (o = parseInt(r[1], 10)));
          var a;
          if (!(void 0 !== e && e >= 0 && e <= 1)) return (a = o ? t._soundById(o) : t._sounds[0]), a ? a._volume : 0;
          if ("loaded" !== t._state || t._playLock)
            return (
              t._queue.push({
                event: "volume",
                action: function() {
                  t.volume.apply(t, r);
                }
              }),
              t
            );
          void 0 === o && (t._volume = e), (o = t._getSoundIds(o));
          for (var u = 0; u < o.length; u++)
            (a = t._soundById(o[u])) &&
              ((a._volume = e),
              r[2] || t._stopFade(o[u]),
              t._webAudio && a._node && !a._muted
                ? a._node.gain.setValueAtTime(e, n.ctx.currentTime)
                : a._node && !a._muted && (a._node.volume = e * n.volume()),
              t._emit("volume", a._id));
          return t;
        },
        fade: function(e, o, t, r) {
          var a = this;
          if ("loaded" !== a._state || a._playLock)
            return (
              a._queue.push({
                event: "fade",
                action: function() {
                  a.fade(e, o, t, r);
                }
              }),
              a
            );
          a.volume(e, r);
          for (var u = a._getSoundIds(r), i = 0; i < u.length; i++) {
            var d = a._soundById(u[i]);
            if (d) {
              if ((r || a._stopFade(u[i]), a._webAudio && !d._muted)) {
                var _ = n.ctx.currentTime,
                  s = _ + t / 1e3;
                (d._volume = e), d._node.gain.setValueAtTime(e, _), d._node.gain.linearRampToValueAtTime(o, s);
              }
              a._startFadeInterval(d, e, o, t, u[i], void 0 === r);
            }
          }
          return a;
        },
        _startFadeInterval: function(e, n, o, t, r, a) {
          var u = this,
            i = n,
            d = o - n,
            _ = Math.abs(d / 0.01),
            s = Math.max(4, _ > 0 ? t / _ : t),
            l = Date.now();
          (e._fadeTo = o),
            (e._interval = setInterval(function() {
              var r = (Date.now() - l) / t;
              (l = Date.now()),
                (i += d * r),
                (i = Math.max(0, i)),
                (i = Math.min(1, i)),
                (i = Math.round(100 * i) / 100),
                u._webAudio ? (e._volume = i) : u.volume(i, e._id, !0),
                a && (u._volume = i),
                ((o < n && i <= o) || (o > n && i >= o)) &&
                  (clearInterval(e._interval),
                  (e._interval = null),
                  (e._fadeTo = null),
                  u.volume(o, e._id),
                  u._emit("fade", e._id));
            }, s));
        },
        _stopFade: function(e) {
          var o = this,
            t = o._soundById(e);
          return (
            t &&
              t._interval &&
              (o._webAudio && t._node.gain.cancelScheduledValues(n.ctx.currentTime),
              clearInterval(t._interval),
              (t._interval = null),
              o.volume(t._fadeTo, e),
              (t._fadeTo = null),
              o._emit("fade", e)),
            o
          );
        },
        loop: function() {
          var e,
            n,
            o,
            t = this,
            r = arguments;
          if (0 === r.length) return t._loop;
          if (1 === r.length) {
            if ("boolean" != typeof r[0]) return !!(o = t._soundById(parseInt(r[0], 10))) && o._loop;
            (e = r[0]), (t._loop = e);
          } else 2 === r.length && ((e = r[0]), (n = parseInt(r[1], 10)));
          for (var a = t._getSoundIds(n), u = 0; u < a.length; u++)
            (o = t._soundById(a[u])) &&
              ((o._loop = e),
              t._webAudio &&
                o._node &&
                o._node.bufferSource &&
                ((o._node.bufferSource.loop = e),
                e && ((o._node.bufferSource.loopStart = o._start || 0), (o._node.bufferSource.loopEnd = o._stop))));
          return t;
        },
        rate: function() {
          var e,
            o,
            t = this,
            r = arguments;
          if (0 === r.length) o = t._sounds[0]._id;
          else if (1 === r.length) {
            var a = t._getSoundIds(),
              u = a.indexOf(r[0]);
            u >= 0 ? (o = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
          } else 2 === r.length && ((e = parseFloat(r[0])), (o = parseInt(r[1], 10)));
          var i;
          if ("number" != typeof e) return (i = t._soundById(o)), i ? i._rate : t._rate;
          if ("loaded" !== t._state || t._playLock)
            return (
              t._queue.push({
                event: "rate",
                action: function() {
                  t.rate.apply(t, r);
                }
              }),
              t
            );
          void 0 === o && (t._rate = e), (o = t._getSoundIds(o));
          for (var d = 0; d < o.length; d++)
            if ((i = t._soundById(o[d]))) {
              (i._rateSeek = t.seek(o[d])),
                (i._playStart = t._webAudio ? n.ctx.currentTime : i._playStart),
                (i._rate = e),
                t._webAudio && i._node && i._node.bufferSource
                  ? i._node.bufferSource.playbackRate.setValueAtTime(e, n.ctx.currentTime)
                  : i._node && (i._node.playbackRate = e);
              var _ = t.seek(o[d]),
                s = (t._sprite[i._sprite][0] + t._sprite[i._sprite][1]) / 1e3 - _,
                l = (1e3 * s) / Math.abs(i._rate);
              (!t._endTimers[o[d]] && i._paused) ||
                (t._clearTimer(o[d]), (t._endTimers[o[d]] = setTimeout(t._ended.bind(t, i), l))),
                t._emit("rate", i._id);
            }
          return t;
        },
        seek: function() {
          var e,
            o,
            t = this,
            r = arguments;
          if (0 === r.length) o = t._sounds[0]._id;
          else if (1 === r.length) {
            var a = t._getSoundIds(),
              u = a.indexOf(r[0]);
            u >= 0 ? (o = parseInt(r[0], 10)) : t._sounds.length && ((o = t._sounds[0]._id), (e = parseFloat(r[0])));
          } else 2 === r.length && ((e = parseFloat(r[0])), (o = parseInt(r[1], 10)));
          if (void 0 === o) return t;
          if ("loaded" !== t._state || t._playLock)
            return (
              t._queue.push({
                event: "seek",
                action: function() {
                  t.seek.apply(t, r);
                }
              }),
              t
            );
          var i = t._soundById(o);
          if (i) {
            if (!("number" == typeof e && e >= 0)) {
              if (t._webAudio) {
                var d = t.playing(o) ? n.ctx.currentTime - i._playStart : 0,
                  _ = i._rateSeek ? i._rateSeek - i._seek : 0;
                return i._seek + (_ + d * Math.abs(i._rate));
              }
              return i._node.currentTime;
            }
            var s = t.playing(o);
            s && t.pause(o, !0),
              (i._seek = e),
              (i._ended = !1),
              t._clearTimer(o),
              !t._webAudio && i._node && (i._node.currentTime = e);
            var l = function() {
              t._emit("seek", o), s && t.play(o, !0);
            };
            if (s && !t._webAudio) {
              var c = function() {
                t._playLock ? setTimeout(c, 0) : l();
              };
              setTimeout(c, 0);
            } else l();
          }
          return t;
        },
        playing: function(e) {
          var n = this;
          if ("number" == typeof e) {
            var o = n._soundById(e);
            return !!o && !o._paused;
          }
          for (var t = 0; t < n._sounds.length; t++) if (!n._sounds[t]._paused) return !0;
          return !1;
        },
        duration: function(e) {
          var n = this,
            o = n._duration,
            t = n._soundById(e);
          return t && (o = n._sprite[t._sprite][1] / 1e3), o;
        },
        state: function() {
          return this._state;
        },
        unload: function() {
          for (var e = this, o = e._sounds, t = 0; t < o.length; t++) {
            if ((o[t]._paused || e.stop(o[t]._id), !e._webAudio))
              /MSIE |Trident\//.test(n._navigator && n._navigator.userAgent) ||
                (o[t]._node.src =
                  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),
                o[t]._node.removeEventListener("error", o[t]._errorFn, !1),
                o[t]._node.removeEventListener(n._canPlayEvent, o[t]._loadFn, !1);
            delete o[t]._node, e._clearTimer(o[t]._id);
          }
          var a = n._howls.indexOf(e);
          a >= 0 && n._howls.splice(a, 1);
          var u = !0;
          for (t = 0; t < n._howls.length; t++)
            if (n._howls[t]._src === e._src) {
              u = !1;
              break;
            }
          return (
            r && u && delete r[e._src], (n.noAudio = !1), (e._state = "unloaded"), (e._sounds = []), (e = null), null
          );
        },
        on: function(e, n, o, t) {
          var r = this,
            a = r["_on" + e];
          return "function" == typeof n && a.push(t ? { id: o, fn: n, once: t } : { id: o, fn: n }), r;
        },
        off: function(e, n, o) {
          var t = this,
            r = t["_on" + e],
            a = 0;
          if (("number" == typeof n && ((o = n), (n = null)), n || o))
            for (a = 0; a < r.length; a++) {
              var u = o === r[a].id;
              if ((n === r[a].fn && u) || (!n && u)) {
                r.splice(a, 1);
                break;
              }
            }
          else if (e) t["_on" + e] = [];
          else {
            var i = Object.keys(t);
            for (a = 0; a < i.length; a++) 0 === i[a].indexOf("_on") && Array.isArray(t[i[a]]) && (t[i[a]] = []);
          }
          return t;
        },
        once: function(e, n, o) {
          var t = this;
          return t.on(e, n, o, 1), t;
        },
        _emit: function(e, n, o) {
          for (var t = this, r = t["_on" + e], a = r.length - 1; a >= 0; a--)
            (r[a].id && r[a].id !== n && "load" !== e) ||
              (setTimeout(
                function(e) {
                  e.call(this, n, o);
                }.bind(t, r[a].fn),
                0
              ),
              r[a].once && t.off(e, r[a].fn, r[a].id));
          return t._loadQueue(e), t;
        },
        _loadQueue: function(e) {
          var n = this;
          if (n._queue.length > 0) {
            var o = n._queue[0];
            o.event === e && (n._queue.shift(), n._loadQueue()), e || o.action();
          }
          return n;
        },
        _ended: function(e) {
          var o = this,
            t = e._sprite;
          if (!o._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
            return setTimeout(o._ended.bind(o, e), 100), o;
          var r = !(!e._loop && !o._sprite[t][2]);
          if ((o._emit("end", e._id), !o._webAudio && r && o.stop(e._id, !0).play(e._id), o._webAudio && r)) {
            o._emit("play", e._id), (e._seek = e._start || 0), (e._rateSeek = 0), (e._playStart = n.ctx.currentTime);
            var a = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
            o._endTimers[e._id] = setTimeout(o._ended.bind(o, e), a);
          }
          return (
            o._webAudio &&
              !r &&
              ((e._paused = !0),
              (e._ended = !0),
              (e._seek = e._start || 0),
              (e._rateSeek = 0),
              o._clearTimer(e._id),
              o._cleanBuffer(e._node),
              n._autoSuspend()),
            o._webAudio || r || o.stop(e._id, !0),
            o
          );
        },
        _clearTimer: function(e) {
          var n = this;
          if (n._endTimers[e]) {
            if ("function" != typeof n._endTimers[e]) clearTimeout(n._endTimers[e]);
            else {
              var o = n._soundById(e);
              o && o._node && o._node.removeEventListener("ended", n._endTimers[e], !1);
            }
            delete n._endTimers[e];
          }
          return n;
        },
        _soundById: function(e) {
          for (var n = this, o = 0; o < n._sounds.length; o++) if (e === n._sounds[o]._id) return n._sounds[o];
          return null;
        },
        _inactiveSound: function() {
          var e = this;
          e._drain();
          for (var n = 0; n < e._sounds.length; n++) if (e._sounds[n]._ended) return e._sounds[n].reset();
          return new t(e);
        },
        _drain: function() {
          var e = this,
            n = e._pool,
            o = 0,
            t = 0;
          if (!(e._sounds.length < n)) {
            for (t = 0; t < e._sounds.length; t++) e._sounds[t]._ended && o++;
            for (t = e._sounds.length - 1; t >= 0; t--) {
              if (o <= n) return;
              e._sounds[t]._ended &&
                (e._webAudio && e._sounds[t]._node && e._sounds[t]._node.disconnect(0), e._sounds.splice(t, 1), o--);
            }
          }
        },
        _getSoundIds: function(e) {
          var n = this;
          if (void 0 === e) {
            for (var o = [], t = 0; t < n._sounds.length; t++) o.push(n._sounds[t]._id);
            return o;
          }
          return [e];
        },
        _refreshBuffer: function(e) {
          var o = this;
          return (
            (e._node.bufferSource = n.ctx.createBufferSource()),
            (e._node.bufferSource.buffer = r[o._src]),
            e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
            (e._node.bufferSource.loop = e._loop),
            e._loop &&
              ((e._node.bufferSource.loopStart = e._start || 0), (e._node.bufferSource.loopEnd = e._stop || 0)),
            e._node.bufferSource.playbackRate.setValueAtTime(e._rate, n.ctx.currentTime),
            o
          );
        },
        _cleanBuffer: function(e) {
          var o = this;
          if (n._scratchBuffer && e.bufferSource) {
            (e.bufferSource.onended = null), e.bufferSource.disconnect(0);
            try {
              e.bufferSource.buffer = n._scratchBuffer;
            } catch (e) {}
          }
          return (e.bufferSource = null), o;
        }
      };
      var t = function(e) {
        (this._parent = e), this.init();
      };
      t.prototype = {
        init: function() {
          var e = this,
            o = e._parent;
          return (
            (e._muted = o._muted),
            (e._loop = o._loop),
            (e._volume = o._volume),
            (e._rate = o._rate),
            (e._seek = 0),
            (e._paused = !0),
            (e._ended = !0),
            (e._sprite = "__default"),
            (e._id = ++n._counter),
            o._sounds.push(e),
            e.create(),
            e
          );
        },
        create: function() {
          var e = this,
            o = e._parent,
            t = n._muted || e._muted || e._parent._muted ? 0 : e._volume;
          return (
            o._webAudio
              ? ((e._node = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain()),
                e._node.gain.setValueAtTime(t, n.ctx.currentTime),
                (e._node.paused = !0),
                e._node.connect(n.masterGain))
              : ((e._node = new Audio()),
                (e._errorFn = e._errorListener.bind(e)),
                e._node.addEventListener("error", e._errorFn, !1),
                (e._loadFn = e._loadListener.bind(e)),
                e._node.addEventListener(n._canPlayEvent, e._loadFn, !1),
                (e._node.src = o._src),
                (e._node.preload = "auto"),
                (e._node.volume = t * n.volume()),
                e._node.load()),
            e
          );
        },
        reset: function() {
          var e = this,
            o = e._parent;
          return (
            (e._muted = o._muted),
            (e._loop = o._loop),
            (e._volume = o._volume),
            (e._rate = o._rate),
            (e._seek = 0),
            (e._rateSeek = 0),
            (e._paused = !0),
            (e._ended = !0),
            (e._sprite = "__default"),
            (e._id = ++n._counter),
            e
          );
        },
        _errorListener: function() {
          var e = this;
          e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0),
            e._node.removeEventListener("error", e._errorFn, !1);
        },
        _loadListener: function() {
          var e = this,
            o = e._parent;
          (o._duration = Math.ceil(10 * e._node.duration) / 10),
            0 === Object.keys(o._sprite).length && (o._sprite = { __default: [0, 1e3 * o._duration] }),
            "loaded" !== o._state && ((o._state = "loaded"), o._emit("load"), o._loadQueue()),
            e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1);
        }
      };
      var r = {},
        a = function(e) {
          var n = e._src;
          if (r[n]) return (e._duration = r[n].duration), void d(e);
          if (/^data:[^;]+;base64,/.test(n)) {
            for (var o = atob(n.split(",")[1]), t = new Uint8Array(o.length), a = 0; a < o.length; ++a)
              t[a] = o.charCodeAt(a);
            i(t.buffer, e);
          } else {
            var _ = new XMLHttpRequest();
            _.open("GET", n, !0),
              (_.withCredentials = e._xhrWithCredentials),
              (_.responseType = "arraybuffer"),
              (_.onload = function() {
                var n = (_.status + "")[0];
                if ("0" !== n && "2" !== n && "3" !== n)
                  return void e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
                i(_.response, e);
              }),
              (_.onerror = function() {
                e._webAudio && ((e._html5 = !0), (e._webAudio = !1), (e._sounds = []), delete r[n], e.load());
              }),
              u(_);
          }
        },
        u = function(e) {
          try {
            e.send();
          } catch (n) {
            e.onerror();
          }
        },
        i = function(e, o) {
          var t = function() {
              o._emit("loaderror", null, "Decoding audio data failed.");
            },
            a = function(e) {
              e && o._sounds.length > 0 ? ((r[o._src] = e), d(o, e)) : t();
            };
          "undefined" != typeof Promise && 1 === n.ctx.decodeAudioData.length
            ? n.ctx
                .decodeAudioData(e)
                .then(a)
                .catch(t)
            : n.ctx.decodeAudioData(e, a, t);
        },
        d = function(e, n) {
          n && !e._duration && (e._duration = n.duration),
            0 === Object.keys(e._sprite).length && (e._sprite = { __default: [0, 1e3 * e._duration] }),
            "loaded" !== e._state && ((e._state = "loaded"), e._emit("load"), e._loadQueue());
        },
        _ = function() {
          try {
            "undefined" != typeof AudioContext
              ? (n.ctx = new AudioContext())
              : "undefined" != typeof webkitAudioContext
                ? (n.ctx = new webkitAudioContext())
                : (n.usingWebAudio = !1);
          } catch (e) {
            n.usingWebAudio = !1;
          }
          var e = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform),
            o = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
            t = o ? parseInt(o[1], 10) : null;
          if (e && t && t < 9) {
            var r = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
            ((n._navigator && n._navigator.standalone && !r) || (n._navigator && !n._navigator.standalone && !r)) &&
              (n.usingWebAudio = !1);
          }
          n.usingWebAudio &&
            ((n.masterGain = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain()),
            n.masterGain.gain.setValueAtTime(n._muted ? 0 : 1, n.ctx.currentTime),
            n.masterGain.connect(n.ctx.destination)),
            n._setup();
        };
      (exports.Howler = n),
        (exports.Howl = o),
        "undefined" != typeof window
          ? ((window.HowlerGlobal = e), (window.Howler = n), (window.Howl = o), (window.Sound = t))
          : "undefined" != typeof commonjsGlobal &&
            ((commonjsGlobal.HowlerGlobal = e),
            (commonjsGlobal.Howler = n),
            (commonjsGlobal.Howl = o),
            (commonjsGlobal.Sound = t));
    })();
  });
  var howler_core_min_1 = howler_core_min.Howler;
  var howler_core_min_2 = howler_core_min.Howl;
  var beepSound =
    "data:audio/mp3;base64,//uwAAAAA8ROTJVigAB4icmSrFAAE/IjVfj6gAJ+RGq/H1AAADEN55555509PSUkYjEMQ5DCaBiMBmSoGPBh6QGGJAZo8BoDwGYJADEBmQbAAbMBcAJ0IIRQuFwuF8vm6aaaaaaCCH/9RcIubDkCgBQAzBOLL5cLhog3p////6BgTBFC4yZfTah/////WmYFwuBgTh///5cEDgnB8AMQ3nnnnnnT09JSRiMQxDkMJoGIwGZKgY8GHpAYYkBmjwGgPAZgkAMQGZBsABswFwAnQghFC4XC4Xy+bppppppoIIf/1Fwi5sOQKAFADME4svlwuGiDen////oGBMEULjJl9NqH////9aZgXC4GBOH///lwQOCcH7usq4IwABEoZUkABBACSAH6LQxWQ1ekTmN4ZafMA1wANy7UyDUPgZzK4WdA1sdhHQGm0eAcG0Uwxsang94vpi3jMEgeLBTM1nUEFdDatet8mwsLJddIZ0CIGTVYoADBkuf9NrJ1f3UsUMJtLy/dMOCTfrUURBBm/6mKA7P6lkcLj/z5mI2/+plE5/9TFgqrf/qYpFf/9v///9Z7////Weu6yrgjAAEShlSQAEEAJIAfotDFZDV6ROY3hlp8wDXAA3LtTINQ+BnMrhZ0DWx2EdAabR4BwbRTDGxqeD3i+mLeMwSB4sFMzWdQQV0Nq163ybCwsl10hnQIgZNVigAMGS5/02snV/dSxQwm0vL90w4JN+tRREEGb/qYoDs/qWRwuP/PmYjb/6mUTn/1MWCqt/+pikV//2////1nv///9Z57qrtSAAaAEOPo6q0VkVoBSMfBmZVHFMomra/sFv//+7IADwAEcXjR92KgAo4vGj7sVABRJeNFzHKLAiS8aLmOUWARYQFAEDoGXFeBv7iAZHHAGKwQLnD0RkkCKmpzOKUjUjUiy0nUlpOh2UUjSoc4VsAaFAMkgspOZb1de+/222v3lN9ikN8FBKOaa0lI/b/+32+TGsxIaGIRJknav9///1fSInqSWHRKS6v///6/nCEJvdVdqQADQAhx9HVWisitAKRj4MzKo4plE1bX9gt/iLCAoAgdAy4rwN/cQDI44AxWCBc4eiMkgRU1OZxSkakakWWk6ktJ0OyikaVDnCtgDQoBkkFlJzLerr33+221+8pvsUhvgoJRzTWkpH7f/2+3yY1mJDQxCJMk7V/v//+r6RE9SSw6JSXV////X84QhNqq9yGAAtDIPgN54cGQ0s4MLUdIZgz1qumUxddqEpWGZfQdAYAOR0btmDgYpm3SG6ec7wnc1aVs2dj+1bbTnyweolsigCR4Bd4UcqIoKbf1mlbVoekvRo/NT+yIW3Ci11PUfr6dTaC7b2fe/yLtUspAgFDuR53///+pvOkM14YR+pvt/+v6/koSLVV7kMABaGQfAbzw4MhpZwYWo6QzBnrVdMpi67UJSsMy+g6AwAcjo3bMHAxTNukN0853hO5q0rZs7H9q22nPlg9RLZFAEjwC7wo5URQU2/rNK2rQ9JejR+an9kQtuFFrqeo/X06m0F23s+9/kXapZSBAKHcjzv///9TedIZrwwj9Tfb/9f1/JQkVi7zplQAFIAgwMk9GmLaGUorLwS8iIOIgIHDACBpGPGPIQTeb9Ig1+zoNGAMN6Ijtv5KI3h0rZfrLVE0dZ6n/+7IAHwAEk3jRez2kEJJvGi9ntIIT3eU/7PqwQnu8p/2fVgg7IPUzJfLB65iPwTcgPIEeWDqpvvvo6N2qSs9T1fIxKtlg1Fg5Kkp6z7nWWdSqqUulspS3s9vkhqoBb8Kg7POv6///9vUQVqqgx7Xmf7f//rbyUN1Rd50yoACkAQYGSejTFtDKUVl4JeREHEQEDhgBA0jHjHkIJvN+kQa/Z0GjAGG9ER238lEbw6Vsv1lqiaOs9SdkHqZkvlg9cxH4JuQHkCPLB1U3330dG7VJWep6vkYlWywaiwclSU9Z9zrLOpVVKXS2Upb2e3yQ1UAt+FQdnnX9f//+3qIK1VQY9rzP9v//1t5KG6jmYd0IAA0gIAD4Llq2gAnFo8YQd9sJd67dV09LYmltad5GkSGPh80IAtg4NUiAWeV15W6FXRpnnczdM46C/SvZzut0SUNUjYiIywAAvA1QCg40iSbnTJdtr85/P3fO63YhxpWgiDUWgsOUjjzp+tq2+r+++jtYd2dURoFQ+LhSOZ0/Xrb/9T9Sz21xU3rrCIH1Zi9ev9/1atZ7aRwqb1nMw7oQABpAQAHwXLVtABOLR4wg77YS7126rp6WxNLa07yNIkMfD5oQBbBwapEAs8rryt0KujTPO5m6Zx0F+lezndbokoapGxERlgABeBqgFBxpEk3OmS7bX5z+fu+d1uxDjStBEGotBYcpHHnT9bVt9X999Haw7s6ojQKh8XCkczp+vW3/6n6lntripvXWEQPqzF69f7/q1az20jhU3rV7maZEAAWQDDArs+W/cFQBSysHAKdYWnzUwc2mlLOlivqupASYLMR//In/+7IAFQAEsHlRe4mkoJYPKi9xNJQSUeVF7hqSwko8qL3DUliIwQla+ytB9/jCGTwOk7YLCgqBZuy6Dc6/c4eQc0L4CDQAc0T4T5smsq7e5vm9np2bqoaspnmWgiEzoOAqU861fWtS6kamrTW703pasnfL4YpEzZ2sf+32//WnrnSY1XDcPXnP/r/q/baZjfd7maZEAAWQDDArs+W/cFQBSysHAKdYWnzUwc2mlLOlivqupASYLMR//ImIwQla+ytB9/jCGTwOk7YLCgqBZuy6Dc6/c4eQc0L4CDQAc0T4T5smsq7e5vm9np2bqoaspnmWgiEzoOAqU861fWtS6kamrTW703pasnfL4YpEzZ2sf+32//WnrnSY1XDcPXnP/r/q/baZjfdpycyVAATgBDA1ALqbMHAeBrYsAWWvHH2AywaA7BHvZmwaGmklUBEh5MPfAYCKjjZQRAGyw/4fwM8hGdB9J4CJscei+u5YLTImQ+QavAASY+iycWpPbNd999Hba+rMXrrCZ0W1StZar1utXOa91mj1O3XkCZ1SkCRAiy16n9Tfq//P+onVdYcXq02/9f9bf+P47nacnMlQAE4AQwNQC6mzBwHga2LAFlrxx9gMsGgOwR72ZsGhppJVARIeTD3wGAio42UEQBssP+H8DPIRnQfSeAibHHovruWC0yJkPkGrwAEmPosnFqT2zXfffR22vqzF66wmdFtUrWWq9brVzmvdZo9Tt15AmdUpAkQIstep/U36v/z/qJ1XWHF6tNv/X/W3/j+O543/+6UACbAYaztA4tsHCcKBx5S8EJ48ScsKkEaV3wtIwd45ACAQBij/+7IAFAAEt3hUfWKgApbvCo+sVABSgV9f+YoAAlAr6/8xQAAgAbKYoGDwWBIDlhrJuWqzTL9SbKMay9NzZaZstX1Hqz6AYYCxHFLl9Pf+tVapulmK7UWt9B61l8Neg3tQSZCrztaV88yFfW7oCbU6RmLPAOCwEggQQ0TqfapGrV//Uf9RC6EzDAiSHKL/////nREb//dKABNgMNZ2gcW2DhOFA48peCE8eJOWFSCNK74WkYO8cgBAIAxQQANlMUDB4LAkByw1k3LVZpl+pNlGNZem5stM2Wr6j1Z9AMMBYjily+nv/WqtU3SzFdqLW+g9ay+GvQb2oJMhV52tK+eZCvrd0BNqdIzFngHBYCQQIIaJ1PtUjVq//qP+ohdCZhgRJDlF/////zoi5C6lVAABQCoDYQD4ZCwVB9kTFKkiv9NQcExMLk3ipgtxrzPf8LZgdNYHsgYIPgbIgAEXEAwCgpAie4XVi5BaBlBUxSQfMO7yfQPFcsGReNjIgX0QvmASaIgQc3SJkgpqr+myNNNNJSSX/n1Hw/4CgwqkXN3qSMTVX//U2skkQuTq9JJEy/+ybvT6p1IjCCpfiL/+SuQupVQAAUAqA2EA+GQsFQfZExSpIr/TUHBMTC5N4qYLca8z3/C2YHTWB7IGCD4GyIABFxAMAoKQInuF1YuQWgZQVMUkHzDu8n0DxXLBkXjYyIF9EL5gEmiIEHN0iZIKaq/psjTTTSUkl/59R8P+AoMKpFzd6kjE1V//1NrJJELk6vSSRMv/sm70+qdSIwgqX4i//klMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+7IAAA/wAABpBwAACAAADSDgAAEAAAGkAAAAIAAANIAAAARMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
  var scanditLogoImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAAhCAMAAAB9TZmqAAABgFBMVEVHcEyCgoL+/v6Kior///+FhYXW1tbn5+eAgIDp6en+/v6BgYH///////////+BgYH///////////+wsLCCgoL4+PiBgYH///+srKyAgID////s7OyCgoKBgYGDg4P///+BgYH6+vqBgYH////MzMz39/f///+BgYGbm5uDg4OMjIyBgYG+vr6QkJD///////+BgYGDg4P+/v7Hx8eOjo6BgYH09PT7+/v///////+MjIz9/f3////////Y2Nj6+vrPz8+BgYH9/f3///+3t7f///+Ghob///+AgICDg4P///+IiIj///////+CgoL6+vqmpqb////////t7e3////////////b29vj4+PNzc3y8vLl5eXv7+/U1NTDw8O8vLyRkZH////x8fGJiYmZmZnDw8Pf39/S0tLT09PCwsKfn5/4+PjV1dWlpaWwsLCjo6OsrKzj4+OZmZnCwsLq6uqurq7///+AgICfn5+Tk5OFhYXCwsLJycmYmJjU1NS/v79wPZvPAAAAdnRSTlMAcvoPxiTEAsby9L8p/eusNEoJBlEZ2Pb67nz25fVGOv1Eh+RW7oyC/ToXzkALzmqTe8BJHmf9Uu+n/B2Dnt7/+6MvEP2ZKrmzXHIx2dScYv6wkf3o3SL+/uDhqLbnuNrVV4u4ie7LNGlhweeUnrTsZOjkis/PjpWtfQAACfhJREFUaN7tmXlbGksWxtlMEwRUVjUgrSQqEAQccXdQQRUVVYxqoolqjGa9WW7uW25Xv/pUdxe9q2TM88zMM55/aE5V1/Lr03XeqrZYHuzBHuzB/vPmX+hzgdmcyh/sXrIx95LKPQ64/JoG5oaHHVztzya8Ssl0rV1PfO6A03YbR4xdzUBnblbgXphZm2hv+W0z9bW0+H7tjmL9d2w6VDPon7XX/CsuxR2fTcr1hervk+oWBM9KDa0bLqVys5pOn1vTrxfvG6SrCT3HpwNiS3O1Gzt/E8dN5RHVadNAsL6aXB9ch3/9zWyUdDF/Bqh8/ngm2Shpkp+QB49xEdJy3MbgW4UjaVQ42nola73ywDWt5XhKpIcWbP4h9F3CIOuOEOodiwNz4wvdDsDW/N/PMYPhb1GiGOMY82CiSeWWObYgXsI2SWo4tq7jusOco9xC7yAGF005WixOocIq1mt1eerrw/BT6/L8cu69C3Hfb+EY3NkJ/tINHOU4Vl/VORxGiTOQ9DOTVjGugrVGwmdn/Zxkcv0qds/gOS9rOa6isM+Zc3TaRUsmvhQw2WDO0Z+mNoRnpEnurgjs8RLVPeD3vNkNhMz+2h1PgZP6anrxkTT69d4hhI8IHzCpX8Eb8gyrU1qOxIHJ/A0c5XqHwL7flCOL9GdK2NMR4JRv7LJmnYQvoF2OEHcsqEpY/s1YzK1JYJy7WRu8KoeGo75iMea7iWMxdncYb6CXLBq8I5jhSd7s1YBnnxzjMqLjSDv8kb6Do8+L6556OXYCpYR41RFdbWXx2NwfBrCRYU+jOO4FgBfjEsn+8EpxZBjAHHsX9Y4Tm+3EtKLFV10CPA73SrjfwPFgA0C8KlIOusILtVmHq1pil1HOsC548YcKgMpWUOHJCtbJrJZjwwi2eu7gaGnHdlu6To4DgHdIugwQIi2+GRvwogJgRByxzwF4+vqos5uNY8EBl/Cfrad6Ry3PGCoGHYCLqr94Nxx6joceeIWqfSLzNVQkQptATE0sBk+rXU9rDJ4IKZtxnMAOCQWB0byO46YNqwN3cIzRv+U6OQauAfSNd9KJ+qMkx1SUY3M2cVIFFiQl6xqaTSQW55hkpWy8Q9zs83EgY+pQOBorDiUT9gMbYOCIjWl7YmDBI2nrFmCaxURFS2YG+JlpoRYrWpT5ewlvN+MYp4Gapbm0dV7H0dKN9ak7OAaB8+U6OXaQkihgPX3jsY5yQkqJS05BWkQ+SbN14FGbkIe+ApvC/8dAZxP18IMYsZg5ngP/MPPHgD9C9K9zBXis5+j9FhL6fCMmu2R0kAV/BaWs9h3eqclf20RQntInkjLD6IYtRAKU2WQbp+NY9KK0eDtHH3CWqpNjmieRz2vDAABHjEVTiU6Izqr3pbgiruydET6Vip6yMHuMV07SluLJJfotZg6Fo9Y/gieERFNREnlm5PiIF6uSdZH5/DXinCQsRxM6OB8vtx6/evXKBWyM1Rb5T2TeXG06hEBtwSBJ6DjSMkGM38axCJxH6uRoyRFCUl0fMmthwNYpvVKjTtpPQ5YQq1Cjh0QD6WBn+6DMcbKNSgx77hqvLCYOTuGorVihOSLAWfzl6JWR498hGh1+K3+JPmG5GZVE2DiuQoaskuNrSvl7ks3fRabMOK5hh1AwPhvOcnqO/iVcBG7lOA2Qtno5WqziS8ununY8GKbL5AIKKTFL+UNSo87zR3PDAFwyngsxH3HvGA294/kNFV0oSYmsfGHkOCohyZcQFm6JbGFClDmrVhOBmlueorZvw1d7bSFrMtP3w/iDCDuefpQa9Ryp5Cvs+2/jeEDDvN54PDhwp/NNIkryUsyNhyiw5Jbo6hHerT/D8DjoOcY3Gc9LqfyRzFHjUMWj1m/DOza/SSPHI1b0Djah055V4aE2Y5BP3iwmd3GdZenktNGkPAZXRNQg7diKpvUcKd0r620cZ/CT1Ls+VsTHzi3mm6LkTEzQfwIDTH0HBS0edGEuaEl25H7IeB7pOWodz2+o+ATHrNfvRo4f2OUxnoh6jB/EEE0QF/O3iPIFXPED0so7GTEpb0c/ifpFoAWm6dQcm4GvJzdz9HvxhkzVyXECGyyTpXtOgRaR41BtGC6fEN04mhcCtrdOjtxNHK/wTOoraDNyPGSXn7Al/s5fYI2L4yxwC8cqXksCrxOF0QFjeT8FIULyu9DbZeBI8W9/uZnjAsIhYq2T4+eauhZDoUAfWm4d0jGn7wXWRJoFKlWWc4Hde8YjtwqssPmb6J4iGx1axd4DZx5bC7Yj/lvOOV9QTlL+6MNWzlhuw0diZQnnOmXkOBbGxY0cm13YIaShTo6hLWBElLxjM8Ak7TWwCqwVhT0c0MlZuCFgj65RxRkAT+8Vj6lteDJFy2YVg0aOWKKj4IbC2JYStJBp4mjtugXjGuIptuGYtmHLsDlvQTwqbca5DLblhVbhSOVA4QaO/swwlt6qovMOjsvnTwDEHf1LAK6ERWSRXILKcscwcCEsLuV1YGNuyePZGUR84T7rY9PoNoBhYK5k5HgMvOinZetnbEWkmQaFc/3BUay7ZmteeN4TnhEZssE2Mt4uGdubd2OXtNWOx2znASPHohdajp7J1xOC9dOCjSOiUp13cCwT8qbCDunfED4typ2/Kh4AG19FcZs72wLgWWpZvgBm7hOPHYTfcYRRqWav8d2gezJxAN7dc8LmK2SaSacxdSjmfR+R8wD3YVspcFnYy/5Gnmkcq8tGjpYMUFBzVMy2+5aQrKVejtw8IVPPYysrnSdZQpbZeUVTsjkWzBK+Q/p7FIv57LT47AMnngazl62Hhb3eUTs3M1RsJHw+WaQCf7KmiJgtEkJCs+7OzUBUURpvCzg1nIV1zhz/U7KXexFCInJ24QK915evWdGUsFhy1eq+fJiW2V0NmXDkltQcgzPHl5OvBXu5N0p4MsXVzdFiTwnbWmdjiCeE3ZcVZLmTpmjxZMkeIiREi/muCIlY78Nx+nCPtkzbfevCnp7jMh1FY5uAU0mB64roU0z+fEAHPK+e2WKjUiChsfNKnlCug+6owrH45YyopGde9W0ipJEKY8+JlqPffaTZz3DlkHRfY7mGPyBAldtpmBfGFuqgOMRA//c5Al+cUT6UnVG+M8kcB/I0vEjblDxW3xJKyybppcNas7J+8Wwo14qkoSfzqnjOW2WmbUQRSemImuOs3HhA33iS53VP1Up0m6iBRLncodFf6cWEah+RTCTEJhpmuXt9cHAgXG3pzPQDJbM8PKsaQ7W9D4PniYfP9Sa2mPsJAMBwyfQjgNqGgfBp6IGZKUfCf1vonmkfWiZt9ru+r1bb9++E/f9qThLNBhL5RkKsd1XN9qRIJP2AzNTSTdLJYVv+znWWZu7ow+p4ow1Ys3Snnry7Yj5rHfjfmda/AA1uqYyEPVX6AAAAAElFTkSuQmCC";
  var laserActiveImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAAvCAMAAACPHW/9AAAAwFBMVEVHcExUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFVydJUyNFUyNFUyNFUyNH8/v5UyNFUyNFUyNFVydJUyNFUyNFUyNFVydJUyNFVydL3/f1YytNUyNFUyNFUyNHx+/ve9fbp+PnR8fNUyNGF2N9009q15+uW3ePD7O+l4+dv0dlv0dj///9Ujp4pAAAAP3RSTlMAiXJnBFsIARM5oA1+UKsuG5W3JEULBishQj5iAm0QkTQZ/h5MF3snWISbSHb8plMFjfjv9Oeyua3Ww9/Nn4y/IgemAAAIrElEQVR42u2da1saOxCAq8jRVuql0qOVIgcvgHhBrBbUYv//vzpzySSTZBeWqo8fOm+E9Vv3eXxnOptNJh8+vD3rhvFC3lHR73/GmmEsxdKKVY+N3ONFN3OT8O+S/GMYnmXtid0rCJAy7b3nrPDyQn5dnk3DiFnaoeJ4Ife98ZnqTnTSPHZ38R0ezWPDMF6BeY6lseK0F+Ej3Vl1MJ1EZ78rmXrmBvxWTLcCO4axU8WUEsk2nIMhJsh6Et75HnQn10l1NB093xB9F9p4UsBBKXuGsQSlIuXSScSQ/Og8Ch9097aT66I6mo6S74i1c++mn7G/v4+fQrYNYymKPWLBEvEkOtD7LhoPvmN+R93R9sR1UR1FR8n7/cqS/oejjI+G8UIyqbb9NQ4NtB6MJ99J99j2deU6q35AnrPDFew99FcY+MN8K6VpGHMpVecwQL5p/1h+dL6/Bwm+i9k92M6yY2IPrpPqaLqT2omrR7hk9l4ETvEHRuAzD8OogNNFgUpd8DeRhgYGACkPvqPuO5jc2XZM7SGxK9dRdRSdknNicIy+Ey/xyDMYDRR1dzGMaihrHKCUxweFhALpD8qj76Q71jLOdknt6y6xB9dZdRCddU4ibpSgdA606q2cWqtWq7VqfDWMUpwk8BVRd99xPHAYkP6oPPkOurPtVMlwaneyU2KHZ1NxHVVvXqDm3uXC0GuR1Nrr+J7bODyr9IGByNUwYtr+wrYEgcClJCZ0FJD6YDz5Drqz7Vi3U2oX2amKgcR+1nWuk+okelmOrmVWB6XxVi9xBHpFNHoNw0gpUkU8WsUfCYoQBLW2uA/Cj0aQ353tBydcyHAdQ8+na5TYsYg52GPXUXUwnbXW2TnC/atKbO+x47xxnrFiGBXIxEGbkoCQAHD2k/CgO2T3JtkOT6ldl9q17JtUxOz1xXXM6WC6N5qVVtm6B2ZfRmrnPo9Xxkxn3InYlWEYGudFDOjDpHEAyin7UXoQnnVn27mQodQusksVw0UMuj6CrM6mU7ZO/6ehIFNZ28uNXjudFUPNJxz8ZRgxw09eDbgEQCEdERwCSn+X+EF48B11B9uxkqFCZmNjk4t2/3xKFTsl9m9Ndh1N7zUa5eWHZO1Y7qFzW+7/GgZ+AVvXW1v0RR/DKMGZgldAFJKAcP7vDhP30fkG6I7ZnWynQoZS+9ev/ISKz6euioHEDkWMdx1UJ8Wdz+NOqEZU1vaJW9ntxBZ+5nzhYRgJJEYBKhQoAjL3wXr0nXRH20+bnNpdHQNPqCQ7VzGS2C9GXnUQncQe+nyNZcjsegZMZ1NgMp0Aj8Av5AF5Qu6RH8wdcctcBY49v42/m6CC8oN8YXnu2CSyivwi01A5dO8RJZxMp+jl8/Pzee+yXasPJLV3pWj3slMVgxV78xTyunN93KG8HWoqjKkZfKZb06A6u462P4DtTyT7Pdn+g3S/I9tvyfYrHInpJPvxbzP+79Qc//BBddEdPLm9cvmRZCfd78t0d7ZP2fbn3mq7VcfU7uqYWPYjnnekKmYAiV1cZ9W5MnGmo+jadQotSuwPvySxR64H1dl2dh1/LLMbLHyku8/sV2z6rU/tJPvTvbhO1cSjtx2E5NzeoNT++SLUMaWy1yPZOZ+L7VtTlP3ndPqFbJ9M0irmKVQxktddYpfMTrofp5ndMNlF9WNnep7ZXWIH2x+C7uT6Y5zaWfZvy8o+lPIF8/oW6z5F3Sec2UNiDxX7vS7Z7+6KqhjU3TK7kVTsKrOz7XeuaM/KGK5iojpmSmU7uT43s0c1Oz2fNs7P8elUlewzrGJwkO6+Yp/oil1ndl2ySxnjXD9OUrv9vU12pzqNUMWEZ9TwiPoUinYpYySzu0dUKmNKa3Y9G0MTj5doO0/G4BzMDAZ+fZrRXEw0FePLmHQu5l5l9rRmvzLZjeLUfhW7ns3GJM+nfj5mqlzHB9Ti2Zh8nr2l5tnjF/67qL9+PxomJYd6ziZ6bVQwz24Y5XPt2SQ7jvDGiebZr7Np9irz7Okb1IvsDeqKjNIXqJ3s/elQvWOS6Rz1psneoRrlL1D16yN+gxpeoPplBLslb1BXy9+ghrUx3cK1Mb2CtTGN4oWMWv6Ol1/nfnkvRStkeJmMrZExooUxTo4E8kjWioXFYdHSsEZj0dqYSqseLwuQNY9h0WMjW0Yz9sTrHnnFY0fu3jCcCR2vc77ocbwyztf/hmWPbtVjbf6qR1nP3o3Xs9fdevaa3yeithz5bRpxMMT6Fy1o53vlj61tN+I17JEX2Xr282SDh9/TIbs5eD37YDRvPXvpTqV6vcI+Jdou5f1XWzr0fwL5ZiW+a9uZY0T7lBpzNioFsfVOJdr9WXGnkt+DulG+B7Vk+3eyZa+m4qCdbEBVwWCbT41Ke1H1/tOgdbtoE6reg3qa7kHd1HtQo+4Ce2l3gfLeAoO4X0YSBfWstUAr7Bo3jMXtBdiatMGA7i5Qj3pshO4C4rokdtVdwPeNOYv7xnD7o6W6xnzWoTBIWsdwRFjrGGNBw5ikT4YyelDaN+ZU+sYcUp+k4r4xlTqCHc7radcsagiWBINvCGYdwYxqHcFO855g1BWMWs2VtwRTHcHQ9aOoI9jcXo/S3NEP/3tOHBSuRV4WGNbq0ajW7DFr+Mg9F2Oy5qfS6/Eg9HpUib2ki+8ed/HtL27iK91PS9ugWhtf4zW6+H7MO/lux518ky6+2vWsZ3VRf/ZqzdnD70l39m1rz268eoN2TML9/Vi90J/9ZE5/9kUnbyx77gYOfdqGHbxhvPLRGycFZ2+EkzfO+LQZOXnjZi0/Z6boTKVFJyrJLy84UcmOVDJefqhSctDYnDOVotPy3GGQ1Q7LO8JhZ+UZ731cHoqojsuT0/Ju1uYeDpmfg/pmp6DaMajGWx2EOvcc1OTg32oHXN+89HxrO+DaeNMjrqsd7M5Huxfy/Y9ZM4wlWVoyZ+mHd2LdMF7Ma5j4P+hE04Z78rHKAAAAAElFTkSuQmCC";
  var laserPausedImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAAvCAMAAACPHW/9AAAAYFBMVEVHcExUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFTyNFUyNE9ws1UyNFUyNFUyNFTyNFCxM5UyNFHxc9RyNE5wcwd5ZO7AAAAH3RSTlMAZ35yAQgbBAwTI4lbRDmUoKtQLrc080osVZvhKMyyq5oARwAAB8JJREFUeNrtnYtS4koQhhUENRFRRBQRff+3PNP3nktCRHbPqTr9T5jErdrVrfr6t5PMdF9d/XndhEK/1H8T0dtQ6K/ol7FxAWIX+Veh0AVVoLaYEAojoP8C1btQ6O8KmBsPiSbwnvSfsHvPB4w7ucBhRyh0EQlROgw5/kKjwDNf4G6ke8yngrrkaYmDr+hIk35CoXPlOKJTAZxQSCHhiK9xV9aFdKN3BNNOJ5w7nTs60tR1PIdCZ2pp52VHXC3lBMh1SqEGBjHPvJe056gj6UsFt6HPdMAH5s9K73zQ9I6Tnlp6CYVqGSCf/hK4+pQTq6OJg4KQF+AVdzV2Yt2jjlDjP1ux2cLzFUZTj3A8hkLn6JXn1yEReRofSD0gT7wb7WLtjnVGHTkHpo3YbIxrBccKjlDoskKucLQiA+lPzAPw7O6OdoNdWGfUCXSBtxhyKnh+g5GEU0sbGqHQKb1tGJYBlFY854EgyL+8GO5CO8HOxm6sA+oIOsEsDBffqODYaZ+OfTpMD6HQWdrLKQ0T8JWFhqIJzAPviHuDdjV2ZZ1RB9ALjgXmzd7jDD/S/qFG+pqGnUKhn+iBJkUojToaLAwIe+Q94f5utJewo7Ej68nWkXTkfIov489AP5PTPA0+zfmY21eh0KgEE4GHh2DlwsFHAQAvuCvtYO0edjV29HVgnUh3/vxwPeLOAnGB8awcIrsKhXLNGY+5Xs95QqJ8PABzHn5kHnh3tDtrB9idsad7U2adSDeY9eCpsueZwV2r7+lInxme+15OoVCtmcwzZgYpqoOCsWP6EXjAHdw90Y53qWbtBjsbO7KebF1QL3Cm06yJdT9jlBXjNQ1/QvEpFCrUu6t+vc4B8rEAmOX0E6CKO3q7WbvBTlmMJOyJdUad4B6U0t0b3X2J8sdHOgo9PcGUBkyhEIphIELwYK1pAph8LHj6e3Z/wZ1p50SG8pgbn7KzsaccZg+oK+gDCcea4e6N7g+Hdv4feYYRCv1IT8/PRE4WExYEAr/aPvGutIu1Ux6T7lARdjV2TGI2zDom2y4d6UvTZr4rujOwv56/vvQj2tIIhTIxGIUSRIkeHwQV/Agj8Q7unmgvrL2GHZMY9nVCvfDrD8k8GGTgFnQUHY4H067SN4xv/IRCA9p9IyeAS6bDzthKpJG2RwqTFAxA/pp4v0bazdqHYSfWGfXCs51tM+nHLX5LZZ1x38kwzr9tootQqME5kQFnYl5QJ6CYdcOdgUfchfaUyoC1D8LedZTFJGNnX/eoU9b95HMTJn0rpAPqauye853EKYNunAfvoYx0vVJ3d/Z+8N5+VNq3Ge2QzaC1b+DxI+Qxbdg/4fZ0442dWLc7BYe6ZNyKumd9dyh8fWesh7OHTno7o54lM4ec92OWyhydtc+asN82nV1gtyTm+Snz9crYt01nrzj3pLfiOfQ/t/WdT9kbeXuGepbFHC1td87+yrDfD+bslsb0RcpON8HFvamzdkvZd2buyrsDPjtCoTx/cfeombET621nB9iJ9fWUnL28QeU71LU+hDHuFXez9/phzO7QeBKzC7xDU4DftY39MJTDoK9Lyi6wjz6NyZ6zu/dJ/Oq2krzcGnvOrnGhj9jtcvu1jSfuoS8/CIniYXv1tql6zN54zr5qP2fP36Bu9rJYYKbvlXgZV/0a1cVA/TRen+M82Q1uvEkNTXt7ys9F+Jax8Qb1w1bU9PIGdT72BvXU2pjB9bi6irGIgew3QGthDK16gGiIpTEhvzYGgfjQ1TFea8d2c21MP2VtzPCqx2LRY75GvV726NaEzZr+H2sdQ+csg2xxravF3YrfYtXjamDV4/B69odsb4Yuma83G7UX/orzZxexkj00bU27QqMI5dt/5oJ4vqB9bD37lJ1KugHK9gaWW/Aa2zlm/heBj4LYqRQa36k0L7ZoCNSzYqOS36pEG5XGdypN2YO69xtc29uqiyiY2xanYkfhtW0zDIXG9qEaN5JdtPZku53Y+/3pPagj1QVaVT2stMCD1hfgKgMaAdmmcPndEAqdridwnW13tu3PVYGBPeKt9QVcdYHHkeoCi2bdGKuB9DasRuWjfVYzBn4U/o3gym5w0YIoKRNqFYmRCyOmVF43hsopcbEkrJPUrhszXBFMC4LVFcHa4npKqywWaJKIeMvLPoVCw0XB+PxWFwdbYTmwt6o4nlQEex+oCCbWPlbr0RcqxWqTUgGyVebRRUUodPFqj4JYWfDxNav1WLBusOdVfJdVFd/091/k896q4Gs1VduFfF1J1KjoG5pUvZeReR2u4fviSvm6Mr6uii+zvrAqvpzHtOqzj8nXZu/qQu3D9dijPHvoRGn2F/XUkpbPrDC7VWdnyLVA+1B99qrzhnaPmdwehnsgVO0Lou9G6A904ei6svdG1XhDSF8M95nJeyqdbKR0r81tfI8buaBQuY+OSqFLNVVSsvyF76zkQB/oqZThzt3ysPHeYqRDnmtTZh3yrK0Zf+7sD0KhczvkOYQyohyM2jAvsbsY65ZX9UFd/KAP6p2c7vwVd6ksm1ZG787Q+V1P2X4BOYKNDfzOMETKF+N9UH/V4XpRNB1e6BdFM1b+hEKT+lkLLbd5P1+meZGBVzZX/0Fjdwf+dN3+pg98KPRDjbF49S/pJhT6tS5B4j8UFQCShr1YqAAAAABJRU5ErkJggg==";
  var cameraImage =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0xNyA1Yy0uOCAwLTEuNC41LTEuOCAxLS40LjUtLjcgMS0xLjEgMS41cy0uNiAxLS44IDEuM2wtLjMuM0gzYy0xLjYgMC0zIDEuNC0zIDN2MjdjMCAxLjYgMS40IDMgMyAzaDQ0YzEuNiAwIDMtMS40IDMtM3YtMjdjMC0xLjYtMS40LTMtMy0zSDM3bC0uMy0uM2MtLjItLjMtLjUtLjctLjgtMS4ycy0uNi0xLTEuMS0xLjVjLS40LS41LTEtMS0xLjgtMXptMCAyaDE2Yy0uMSAwIC4xIDAgLjMuM3MuNS44LjggMS4zLjcgMSAxLjEgMS41IDEgMSAxLjggMWgxMGMuNiAwIDEgLjQgMSAxdjI3YzAgLjYtLjQgMS0xIDFIM2MtLjYgMC0xLS40LTEtMXYtMjdjMC0uNi40LTEgMS0xaDEwYy44IDAgMS40LS41IDEuOC0xcy44LTEgMS4xLTEuNS42LTEgLjgtMS4yLjQtLjMuMy0uM3ptOCA0Yy03LjIgMC0xMyA1LjgtMTMgMTNzNS44IDEzIDEzIDEzIDEzLTUuOCAxMy0xMy01LjgtMTMtMTMtMTN6bTAgMmM2LjEgMCAxMSA0LjkgMTEgMTFzLTQuOSAxMS0xMSAxMS0xMS00LjktMTEtMTEgNC45LTExIDExLTExek04IDE0Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMmgxYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMnptMTcgMWMtNSAwLTkgNC05IDlzNCA5IDkgOSA5LTQgOS05LTQtOS05LTl6bTAgMmMzLjkgMCA3IDMuMSA3IDdzLTMuMSA3LTcgNy03LTMuMS03LTcgMy4xLTcgNy03eiIgY2xhc3M9ImEiLz48L3N2Zz4K";
  var switchCameraImage =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yNi4xNCA4YTQuOTkgNC45OSAwIDAgMC00LjE2IDIuMjI3bC0yLjIxOCAzLjMyOGExLjAwMyAxLjAwMyAwIDAgMS0uODMyLjQ0NUgxOHYtMmMwLTEuMTAyLS44OTgtMi0yLTJoLTZjLTEuMTAyIDAtMiAuODk4LTIgMnYySDVjLTEuNjUyIDAtMyAxLjM0OC0zIDN2MzZjMCAxLjY1MiAxLjM0OCAzIDMgM2g1NGMxLjY1MiAwIDMtMS4zNDggMy0zVjE3YzAtMS42NTItMS4zNDgtMy0zLTNoLTN2LTFjMC0xLjEwMi0uODk4LTItMi0yaC0yYy0xLjEwMiAwLTIgLjg5OC0yIDJ2MWgtNC45MzhhLjk5Ny45OTcgMCAwIDEtLjgyOC0uNDQxbC0yLjI1NC0zLjM1MkE1LjAwMSA1LjAwMSAwIDAgMCAzNy44MjggOHptMCAyaDExLjY4OGMxIDAgMS45MzQuNDk2IDIuNDkyIDEuMzI0bDIuMjU0IDMuMzUyQTIuOTk4IDIuOTk4IDAgMCAwIDQ1LjA2MyAxNkg1OWMuNTUgMCAxIC40NSAxIDF2MzZjMCAuNTUtLjQ1IDEtMSAxSDVjLS41NSAwLTEtLjQ1LTEtMVYxN2MwLS41NS40NS0xIDEtMWgxMy45M2MxLjAwNCAwIDEuOTM3LS41IDIuNDk2LTEuMzM2bDIuMjE5LTMuMzI4QTIuOTk4IDIuOTk4IDAgMCAxIDI2LjE0IDEwek0xMCAxMmg2djJoLTZ6bTQyIDFoMnYxaC0yem0tMjAgNWMtNS4yOSAwLTEwLjI0NiAyLjgzNi0xMi45MzQgNy4zOThhLjk5Ni45OTYgMCAwIDAgLjM1NiAxLjM2OC45OTcuOTk3IDAgMCAwIDEuMzY3LS4zNTZBMTMuMDY1IDEzLjA2NSAwIDAgMSAzMiAyMGM3LjE2OCAwIDEzIDUuODMyIDEzIDEzIDAgLjE4OC0uMDE2LjM3NS0uMDIzLjU2M2wtMi4yNy0yLjI3YTEgMSAwIDEgMC0xLjQxNCAxLjQxNGw0IDRjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhLjk5My45OTMgMCAwIDAgLjcwNy0uMjkzbDQtNGExIDEgMCAxIDAtMS40MTQtMS40MTRsLTIuMzIgMi4zMTZjLjAxMS0uMjAzLjAyNy0uNDA2LjAyNy0uNjA5IDAtOC4yNy02LjczLTE1LTE1LTE1ek0xOCAyOWExIDEgMCAwIDAtLjcwNy4yOTNsLTQgNGExIDEgMCAxIDAgMS40MTQgMS40MTRsMi4zMTMtMi4zMTZjLS4wMDguMjAzLS4wMi40MDYtLjAyLjYwOSAwIDguMjcgNi43MyAxNSAxNSAxNSA1LjM2NyAwIDEwLjM2LTIuODk4IDEzLjAyNy03LjU2M2EuOTk5Ljk5OSAwIDEgMC0xLjczNC0uOTkyQTEzLjA0MiAxMy4wNDIgMCAwIDEgMzIgNDZjLTcuMTY4IDAtMTMtNS44MzItMTMtMTMgMC0uMTg4LjAxMi0uMzc5LjAyLS41NjZsMi4yNzMgMi4yNzNjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhMSAxIDAgMCAwIC43MDctMS43MDdsLTQtNEExIDEgMCAwIDAgMTggMjl6bTkgMmMtLjU1NSAwLTEgLjQ0NS0xIDF2MmMwIC41NTUuNDQ1IDEgMSAxIC41NTUgMCAxLS40NDUgMS0xdi0yYzAtLjU1NS0uNDQ1LTEtMS0xem01IDBjLS41NTUgMC0xIC40NDUtMSAxdjJjMCAuNTU1LjQ0NSAxIDEgMSAuNTU1IDAgMS0uNDQ1IDEtMXYtMmMwLS41NTUtLjQ0NS0xLTEtMXptNSAwYy0uNTU1IDAtMSAuNDQ1LTEgMXYyYzAgLjU1NS40NDUgMSAxIDEgLjU1NSAwIDEtLjQ0NSAxLTF2LTJjMC0uNTU1LS40NDUtMS0xLTF6Ii8+PC9zdmc+Cg==";
  var toggleTorchImage =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0zMC45MzggMWMtLjQ0Ni4wMi0xIC4yMy0xLjMxMy42NTZhMS4zMDIgMS4zMDIgMCAwIDAtLjA2My4wOTRsLTYuNzggMTIuMDYzLS4wNjMuMDkzYy0uNTU1Ljc4NS0uNzI3IDEuNzMtLjU5NCAyLjY1NmwtMjAuNSAyMi41NjMtLjAzMS4wMzFjLTEuMDcgMS4yMTktLjY2NCAzLjAxMi40NjggNC4xNTdoLjAzMmw0LjU5NCA0LjU5M2MuNTcuNTcgMS4yNjUuOTUgMiAxLjA2My43MzQuMTEzIDEuNTQ2LS4wNTUgMi4xNTYtLjU5NGguMDMxbDIyLjU2My0yMC41Yy45My4xMjkgMS44Ny0uMDQzIDIuNjU2LS41OTQuMDItLjAxNS4wNDMtLjAxNS4wNjItLjAzMWwuMDYzLS4wMzEgMTIuMDMxLTYuNzgyYy4wMzEtLjAxOS4wNjMtLjAzOS4wOTQtLjA2Mi40MjItLjMxMy42MzYtLjg2Ny42NTYtMS4zMTMuMDItLjQ0NS0uMDk4LS44NC0uMjUtMS4yNS0uMzA1LS44Mi0uODI4LTEuNjktMS41MzEtMi42ODctMS40MDctMS45OTItMy41MTYtNC4zOS01Ljc1LTYuNjI1LTIuMjM1LTIuMjM0LTQuNjAyLTQuMzEzLTYuNTk0LTUuNzE5LS45OTYtLjcwMy0xLjg2Ny0xLjIyNi0yLjY4OC0xLjUzMS0uNDEtLjE1Mi0uODA0LS4yNy0xLjI1LS4yNXptLjIxOCAyLjAzMWMuMDc4LjAxMi4xNTMuMDI0LjM0NC4wOTQuNTIuMTkxIDEuMy42MzMgMi4yMTkgMS4yODEgMS44MzYgMS4yOTcgNC4xNjggMy4zNTYgNi4zNDMgNS41MzIgMi4xNzYgMi4xNzUgNC4yMzUgNC40NzYgNS41MzIgNi4zMTIuNjQ4LjkxOCAxLjA5IDEuNzMgMS4yODEgMi4yNS4wNy4xOTEuMDgyLjI2Ni4wOTQuMzQ0TDM1LjEyNSAyNS41M2EuOTQ5Ljk0OSAwIDAgMC0uMTI1LjA5NGMtLjMxNi4yNDItLjg2LjMyOC0xLjQzOC4yMTlhMS4wNTYgMS4wNTYgMCAwIDAtLjE4Ny0uMDYzIDMuMTEzIDMuMTEzIDAgMCAxLTEuNDM4LS44MTJsLTYuOTA2LTYuOTA3Yy0uOTc2LS45ODQtMS4xMjktMi40MzctLjY1Ni0zLjA2MmEuNTMyLjUzMiAwIDAgMCAuMDk0LS4wOTR6bS04LjIxOCAxNS41OTRjLjE5OS4yOTcuNDMuNTg2LjY4Ny44NDRsNi45MDYgNi45MDZjLjI2Mi4yNjIuNTQzLjQ4OC44NDQuNjg4TDkuNTMxIDQ2LjkwNmMtLjA4Ni4wNzgtLjI1NC4xMzctLjUzMS4wOTQtLjI3Ny0uMDQzLS42MjktLjIyMy0uOTA2LS41TDMuNSA0MS45MDZjLS41NTktLjU2Ni0uNTYzLTEuMjYxLS40MDYtMS40Mzd6bS0yLjg3NSA4LjMxM2MtLjc3IDAtMS41NDMuMjkyLTIuMTI1Ljg3NWwtMi4xMjUgMi4xMjVhMy4wMjMgMy4wMjMgMCAwIDAgMCA0LjI1IDMuMDIzIDMuMDIzIDAgMCAwIDQuMjUgMGwyLjEyNS0yLjEyNmEzLjAyMyAzLjAyMyAwIDAgMCAwLTQuMjUgMy4wMDIgMy4wMDIgMCAwIDAtMi4xMjUtLjg3NXptMCAyYy4yNTMgMCAuNTE5LjA4Mi43MTguMjguMzk5LjQuMzk5IDEuMDQgMCAxLjQzOGwtMi4xMjUgMi4xMjVhMS4wMTQgMS4wMTQgMCAwIDEtMS40MzcgMCAxLjAxNCAxLjAxNCAwIDAgMSAwLTEuNDM3Yy40MjItLjQyMiAxLjY5OS0xLjY5NiAyLjEyNS0yLjEyNS4xOTktLjIuNDY1LS4yODIuNzE4LS4yODJ6Ii8+PC9zdmc+Cg==";
  var _objectSap = function(KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(
      _export.S +
        _export.F *
          _fails(function() {
            fn(1);
          }),
      "Object",
      exp
    );
  };
  _objectSap("keys", function() {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });
  var abs = Math.abs;
  _export(_export.S, "Math", {
    hypot: function hypot(value1, value2) {
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;
      while (i < aLen) {
        arg = abs(arguments[i++]);
        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return Infinity === larg ? Infinity : larg * Math.sqrt(sum);
    }
  });
  var $find = _arrayMethods(5);
  var KEY = "find";
  var forced = true;
  if (KEY in [])
    Array(1)[KEY](function() {
      forced = false;
    });
  _export(_export.P + _export.F * forced, "Array", {
    find: function find(callbackfn) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  _addToUnscopables(KEY);
  var CameraManager = (function() {
    function CameraManager() {}
    return CameraManager;
  })();
  (function(CameraSettings) {
    (function(ResolutionPreference) {
      ResolutionPreference[(ResolutionPreference["FULL_HD"] = 0)] = "FULL_HD";
      ResolutionPreference[(ResolutionPreference["HD"] = 1)] = "HD";
    })(CameraSettings.ResolutionPreference || (CameraSettings.ResolutionPreference = {}));
  })(exports.CameraSettings || (exports.CameraSettings = {}));
  var BarcodePickerCameraManager = (function(_super) {
    __extends(BarcodePickerCameraManager, _super);
    function BarcodePickerCameraManager(triggerFatalError, barcodePickerGui) {
      var _this = _super.call(this) || this;
      _this.postStreamInitializationListener = _this.postStreamInitialization.bind(_this);
      _this.videoTrackUnmuteListener = _this.videoTrackUnmuteRecovery.bind(_this);
      _this.triggerManualFocusListener = _this.triggerManualFocus.bind(_this);
      _this.triggerZoomStartListener = _this.triggerZoomStart.bind(_this);
      _this.triggerZoomMoveListener = _this.triggerZoomMove.bind(_this);
      _this.triggerFatalError = triggerFatalError;
      _this.barcodePickerGui = barcodePickerGui;
      return _this;
    }
    BarcodePickerCameraManager.prototype.setInteractionOptions = function(
      cameraSwitcherEnabled,
      torchToggleEnabled,
      tapToFocusEnabled,
      pinchToZoomEnabled
    ) {
      this.cameraSwitcherEnabled = cameraSwitcherEnabled;
      this.torchToggleEnabled = torchToggleEnabled;
      this.tapToFocusEnabled = tapToFocusEnabled;
      this.pinchToZoomEnabled = pinchToZoomEnabled;
    };
    BarcodePickerCameraManager.prototype.isCameraSwitcherEnabled = function() {
      return this.cameraSwitcherEnabled;
    };
    BarcodePickerCameraManager.prototype.setCameraSwitcherEnabled = function(enabled) {
      var _this = this;
      this.cameraSwitcherEnabled = enabled;
      if (this.cameraSwitcherEnabled)
        exports.CameraAccess.getCameras().then(function(cameras) {
          if (cameras.length > 1) _this.barcodePickerGui.setCameraSwitcherVisible(true);
        });
      else this.barcodePickerGui.setCameraSwitcherVisible(false);
    };
    BarcodePickerCameraManager.prototype.isTorchToggleEnabled = function() {
      return this.torchToggleEnabled;
    };
    BarcodePickerCameraManager.prototype.setTorchToggleEnabled = function(enabled) {
      this.torchToggleEnabled = enabled;
      if (this.torchToggleEnabled) {
        if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.torch)
          this.barcodePickerGui.setTorchTogglerVisible(true);
      } else this.barcodePickerGui.setTorchTogglerVisible(false);
    };
    BarcodePickerCameraManager.prototype.isTapToFocusEnabled = function() {
      return this.tapToFocusEnabled;
    };
    BarcodePickerCameraManager.prototype.setTapToFocusEnabled = function(enabled) {
      this.tapToFocusEnabled = enabled;
      if (null != this.mediaStream)
        if (this.tapToFocusEnabled) this.enableTapToFocusListeners();
        else this.disableTapToFocusListeners();
    };
    BarcodePickerCameraManager.prototype.isPinchToZoomEnabled = function() {
      return this.pinchToZoomEnabled;
    };
    BarcodePickerCameraManager.prototype.setPinchToZoomEnabled = function(enabled) {
      this.pinchToZoomEnabled = enabled;
      if (null != this.mediaStream)
        if (this.pinchToZoomEnabled) this.enablePinchToZoomListeners();
        else this.disablePinchToZoomListeners();
    };
    BarcodePickerCameraManager.prototype.setSelectedCamera = function(camera) {
      this.selectedCamera = camera;
    };
    BarcodePickerCameraManager.prototype.setSelectedCameraSettings = function(cameraSettings) {
      this.selectedCameraSettings = cameraSettings;
    };
    BarcodePickerCameraManager.prototype.setupCameras = function() {
      var _this = this;
      if (null != this.cameraInitializationPromise) return this.cameraInitializationPromise;
      return exports.CameraAccess.getCameras().then(function(cameras) {
        if (_this.cameraSwitcherEnabled && cameras.length > 1) _this.barcodePickerGui.setCameraSwitcherVisible(true);
        if (null == _this.selectedCamera) {
          var autoselectedCamera = cameras.find(function(currentCamera) {
            return currentCamera.cameraType === exports.Camera.Type.BACK;
          });
          if (void 0 === autoselectedCamera) autoselectedCamera = cameras[0];
          if (void 0 === autoselectedCamera)
            return Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
          return _this.initializeCameraWithSettings(autoselectedCamera, _this.selectedCameraSettings);
        } else return _this.initializeCameraWithSettings(_this.selectedCamera, _this.selectedCameraSettings);
      });
    };
    BarcodePickerCameraManager.prototype.stopStream = function() {
      if (null != this.activeCamera) this.activeCamera.currentResolution = void 0;
      this.activeCamera = void 0;
      if (null != this.mediaStream) {
        window.clearTimeout(this.cameraAccessTimeout);
        window.clearInterval(this.cameraMetadataCheckInterval);
        window.clearTimeout(this.getCapabilitiesTimeout);
        window.clearTimeout(this.manualFocusWaitTimeout);
        window.clearTimeout(this.manualToAutofocusResumeTimeout);
        window.clearInterval(this.autofocusInterval);
        this.mediaStream.getVideoTracks().forEach(function(track) {
          track.stop();
        });
        this.mediaStream = void 0;
        this.mediaTrackCapabilities = void 0;
      }
    };
    BarcodePickerCameraManager.prototype.applyCameraSettings = function(cameraSettings) {
      this.selectedCameraSettings = cameraSettings;
      if (null == this.activeCamera)
        return Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
      return this.initializeCameraWithSettings(this.activeCamera, cameraSettings);
    };
    BarcodePickerCameraManager.prototype.reinitializeCamera = function(camera) {
      if (null == this.activeCamera && null == camera)
        return Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
      return this.initializeCameraWithSettings(
        null == camera ? this.activeCamera : camera,
        this.activeCameraSettings
      ).catch(this.triggerFatalError);
    };
    BarcodePickerCameraManager.prototype.initializeCameraWithSettings = function(camera, cameraSettings) {
      var _this = this;
      var existingCameraInitializationPromise = Promise.resolve();
      if (null != this.cameraInitializationPromise)
        existingCameraInitializationPromise = this.cameraInitializationPromise;
      return existingCameraInitializationPromise.then(function() {
        _this.selectedCamera = camera;
        _this.selectedCameraSettings = _this.activeCameraSettings = cameraSettings;
        if (
          null != cameraSettings &&
          cameraSettings.resolutionPreference === exports.CameraSettings.ResolutionPreference.FULL_HD
        )
          _this.cameraInitializationPromise = _this.initializeCameraAndCheckUpdatedSettings(camera);
        else _this.cameraInitializationPromise = _this.initializeCameraAndCheckUpdatedSettings(camera, 3);
        return _this.cameraInitializationPromise;
      });
    };
    BarcodePickerCameraManager.prototype.setTorchEnabled = function(enabled) {
      if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.torch) {
        this.torchEnabled = enabled;
        var videoTracks = this.mediaStream.getVideoTracks();
        if (0 !== videoTracks.length && "function" === typeof videoTracks[0].applyConstraints)
          videoTracks[0].applyConstraints({ advanced: [{ torch: enabled }] });
      }
    };
    BarcodePickerCameraManager.prototype.toggleTorch = function() {
      this.torchEnabled = !this.torchEnabled;
      this.setTorchEnabled(this.torchEnabled);
    };
    BarcodePickerCameraManager.prototype.setZoom = function(zoomPercentage, currentZoom) {
      if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.zoom) {
        var videoTracks = this.mediaStream.getVideoTracks();
        if (0 !== videoTracks.length && "function" === typeof videoTracks[0].applyConstraints) {
          var zoomRange = this.mediaTrackCapabilities.zoom.max - this.mediaTrackCapabilities.zoom.min;
          if (null == currentZoom) currentZoom = this.mediaTrackCapabilities.zoom.min;
          var targetZoom = Math.max(
            this.mediaTrackCapabilities.zoom.min,
            Math.min(currentZoom + zoomRange * zoomPercentage, this.mediaTrackCapabilities.zoom.max)
          );
          videoTracks[0].applyConstraints({ advanced: [{ zoom: targetZoom }] });
        }
      }
    };
    BarcodePickerCameraManager.prototype.postStreamInitialization = function() {
      var _this = this;
      window.clearTimeout(this.getCapabilitiesTimeout);
      this.getCapabilitiesTimeout = window.setTimeout(function() {
        _this.storeStreamCapabilities();
        _this.setupAutofocus();
        if (
          _this.torchToggleEnabled &&
          null != _this.mediaStream &&
          null != _this.mediaTrackCapabilities &&
          _this.mediaTrackCapabilities.torch
        )
          _this.barcodePickerGui.setTorchTogglerVisible(true);
      }, BarcodePickerCameraManager.getCapabilitiesTimeoutMs);
    };
    BarcodePickerCameraManager.prototype.videoTrackUnmuteRecovery = function() {
      this.reinitializeCamera();
    };
    BarcodePickerCameraManager.prototype.triggerManualFocus = function(event) {
      var _this = this;
      if (null != event) {
        event.preventDefault();
        if ("touchend" === event.type && 0 !== event.touches.length) return;
        if (null != this.pinchToZoomDistance) {
          this.pinchToZoomDistance = void 0;
          return;
        }
      }
      window.clearTimeout(this.manualFocusWaitTimeout);
      window.clearTimeout(this.manualToAutofocusResumeTimeout);
      if (null != this.mediaStream && null != this.mediaTrackCapabilities) {
        var focusModeCapability = this.mediaTrackCapabilities.focusMode;
        if (focusModeCapability instanceof Array && -1 !== focusModeCapability.indexOf("single-shot"))
          if (-1 !== focusModeCapability.indexOf("continuous") && -1 !== focusModeCapability.indexOf("manual")) {
            this.triggerFocusMode("continuous")
              .then(function() {
                _this.manualFocusWaitTimeout = window.setTimeout(function() {
                  _this.triggerFocusMode("manual");
                }, BarcodePickerCameraManager.manualFocusWaitTimeoutMs);
              })
              .catch(function() {});
            this.manualToAutofocusResumeTimeout = window.setTimeout(function() {
              _this.triggerFocusMode("continuous");
            }, BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs);
          } else if (-1 === focusModeCapability.indexOf("continuous")) {
            window.clearInterval(this.autofocusInterval);
            this.triggerFocusMode("single-shot").catch(function() {});
            this.manualToAutofocusResumeTimeout = window.setTimeout(function() {
              _this.autofocusInterval = window.setInterval(
                _this.triggerAutoFocus.bind(_this),
                BarcodePickerCameraManager.autofocusIntervalMs
              );
            }, BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs);
          }
      }
    };
    BarcodePickerCameraManager.prototype.triggerZoomStart = function(event) {
      if (null == event || 2 !== event.touches.length) return;
      event.preventDefault();
      this.pinchToZoomDistance = Math.hypot(
        (event.touches[1].screenX - event.touches[0].screenX) / screen.width,
        (event.touches[1].screenY - event.touches[0].screenY) / screen.height
      );
      if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.zoom) {
        var videoTracks = this.mediaStream.getVideoTracks();
        if (0 !== videoTracks.length && "function" === typeof videoTracks[0].getConstraints) {
          this.pinchToZoomInitialZoom = this.mediaTrackCapabilities.zoom.min;
          var currentConstraints = videoTracks[0].getConstraints();
          if (null != currentConstraints.advanced) {
            var currentZoomConstraint = currentConstraints.advanced.find(function(constraint) {
              return "zoom" in constraint;
            });
            if (null != currentZoomConstraint) this.pinchToZoomInitialZoom = currentZoomConstraint.zoom;
          }
        }
      }
    };
    BarcodePickerCameraManager.prototype.triggerZoomMove = function(event) {
      if (null == this.pinchToZoomDistance || null == event || 2 !== event.touches.length) return;
      event.preventDefault();
      this.setZoom(
        2 *
          (Math.hypot(
            (event.touches[1].screenX - event.touches[0].screenX) / screen.width,
            (event.touches[1].screenY - event.touches[0].screenY) / screen.height
          ) -
            this.pinchToZoomDistance),
        this.pinchToZoomInitialZoom
      );
    };
    BarcodePickerCameraManager.prototype.storeStreamCapabilities = function() {
      if (null != this.mediaStream) {
        var videoTracks = this.mediaStream.getVideoTracks();
        if (0 !== videoTracks.length && "function" === typeof videoTracks[0].getCapabilities)
          this.mediaTrackCapabilities = videoTracks[0].getCapabilities();
      }
    };
    BarcodePickerCameraManager.prototype.setupAutofocus = function() {
      window.clearTimeout(this.manualFocusWaitTimeout);
      window.clearTimeout(this.manualToAutofocusResumeTimeout);
      if (null != this.mediaStream && null != this.mediaTrackCapabilities) {
        var focusModeCapability = this.mediaTrackCapabilities.focusMode;
        if (
          focusModeCapability instanceof Array &&
          -1 === focusModeCapability.indexOf("continuous") &&
          -1 !== focusModeCapability.indexOf("single-shot")
        ) {
          window.clearInterval(this.autofocusInterval);
          this.autofocusInterval = window.setInterval(
            this.triggerAutoFocus.bind(this),
            BarcodePickerCameraManager.autofocusIntervalMs
          );
        }
      }
    };
    BarcodePickerCameraManager.prototype.triggerAutoFocus = function() {
      this.triggerFocusMode("single-shot").catch(function() {});
    };
    BarcodePickerCameraManager.prototype.triggerFocusMode = function(focusMode) {
      if (null != this.mediaStream) {
        var videoTracks = this.mediaStream.getVideoTracks();
        if (0 !== videoTracks.length && "function" === typeof videoTracks[0].applyConstraints)
          return videoTracks[0].applyConstraints({ advanced: [{ focusMode: focusMode }] });
      }
      return Promise.reject(void 0);
    };
    BarcodePickerCameraManager.prototype.enableTapToFocusListeners = function() {
      var _this = this;
      ["touchend", "mousedown"].forEach(function(eventName) {
        _this.barcodePickerGui.videoElement.addEventListener(eventName, _this.triggerManualFocusListener);
      });
    };
    BarcodePickerCameraManager.prototype.enablePinchToZoomListeners = function() {
      this.barcodePickerGui.videoElement.addEventListener("touchstart", this.triggerZoomStartListener);
      this.barcodePickerGui.videoElement.addEventListener("touchmove", this.triggerZoomMoveListener);
    };
    BarcodePickerCameraManager.prototype.disableTapToFocusListeners = function() {
      var _this = this;
      ["touchend", "mousedown"].forEach(function(eventName) {
        _this.barcodePickerGui.videoElement.removeEventListener(eventName, _this.triggerManualFocusListener);
      });
    };
    BarcodePickerCameraManager.prototype.disablePinchToZoomListeners = function() {
      this.barcodePickerGui.videoElement.removeEventListener("touchstart", this.triggerZoomStartListener);
      this.barcodePickerGui.videoElement.removeEventListener("touchmove", this.triggerZoomMoveListener);
    };
    BarcodePickerCameraManager.prototype.initializeCameraAndCheckUpdatedSettings = function(
      camera,
      resolutionFallbackLevel
    ) {
      var _this = this;
      return this.initializeCamera(camera, resolutionFallbackLevel)
        .then(function() {
          if (
            _this.selectedCameraSettings !== _this.activeCameraSettings &&
            (null == _this.selectedCameraSettings ||
              null == _this.activeCameraSettings ||
              Object.keys(_this.selectedCameraSettings).some(function(cameraSettingsProperty) {
                return (
                  _this.selectedCameraSettings[cameraSettingsProperty] !==
                  _this.activeCameraSettings[cameraSettingsProperty]
                );
              }))
          ) {
            _this.activeCameraSettings = _this.selectedCameraSettings;
            return _this.initializeCameraAndCheckUpdatedSettings(camera, resolutionFallbackLevel);
          }
          _this.cameraInitializationPromise = void 0;
          return Promise.resolve();
        })
        .catch(function(error) {
          _this.cameraInitializationPromise = void 0;
          return Promise.reject(error);
        });
    };
    BarcodePickerCameraManager.prototype.retryInitializeCameraIfNeeded = function(
      camera,
      resolutionFallbackLevel,
      resolve,
      reject,
      error
    ) {
      if (resolutionFallbackLevel < 6)
        return this.initializeCamera(camera, resolutionFallbackLevel + 1)
          .then(resolve)
          .catch(reject);
      else return reject(error);
    };
    BarcodePickerCameraManager.prototype.initializeCamera = function(camera, resolutionFallbackLevel) {
      var _this = this;
      if (void 0 === resolutionFallbackLevel) resolutionFallbackLevel = 0;
      if (null == camera)
        return Promise.reject(new CustomError({ name: "NoCameraAvailableError", message: "No camera available" }));
      this.stopStream();
      this.torchEnabled = false;
      this.barcodePickerGui.setTorchTogglerVisible(false);
      return new Promise(function(resolve, reject) {
        exports.CameraAccess.accessCameraStream(resolutionFallbackLevel, camera)
          .then(function(stream) {
            if ("function" === typeof stream.getTracks()[0].getSettings) {
              var mediaTrackSettings = stream.getTracks()[0].getSettings();
              if (
                null != mediaTrackSettings.width &&
                null != mediaTrackSettings.height &&
                (2 === mediaTrackSettings.width || 2 === mediaTrackSettings.height)
              )
                if (6 === resolutionFallbackLevel)
                  return reject(
                    new CustomError({ name: "NotReadableError", message: "Could not initialize camera correctly" })
                  );
                else
                  return _this
                    .initializeCamera(camera, resolutionFallbackLevel + 1)
                    .then(resolve)
                    .catch(reject);
            }
            _this.mediaStream = stream;
            _this.mediaStream.getVideoTracks().forEach(function(track) {
              track.addEventListener("unmute", _this.videoTrackUnmuteListener);
            });
            _this.barcodePickerGui.videoElement.addEventListener(
              "loadedmetadata",
              _this.postStreamInitializationListener
            );
            if (_this.tapToFocusEnabled) _this.enableTapToFocusListeners();
            if (_this.pinchToZoomEnabled) _this.enablePinchToZoomListeners();
            _this.resolveInitializeCamera(camera, resolve, reject);
            _this.barcodePickerGui.videoElement.srcObject = stream;
            _this.barcodePickerGui.videoElement.load();
            var playPromise = _this.barcodePickerGui.videoElement.play();
            if (null != playPromise) playPromise.catch(function() {});
          })
          .catch(function(error) {
            if ("SourceUnavailableError" === error.name) error.name = "NotReadableError";
            if (
              "Invalid constraint" === error.message ||
              ("OverconstrainedError" === error.name && "deviceId" === error.constraint)
            )
              return exports.CameraAccess.getCameras().then(function(cameras) {
                var newCamera = cameras.find(function(currentCamera) {
                  return (
                    currentCamera.label === camera.label &&
                    currentCamera.cameraType === camera.cameraType &&
                    currentCamera.deviceId !== camera.deviceId
                  );
                });
                if (null == newCamera)
                  return _this.retryInitializeCameraIfNeeded(camera, resolutionFallbackLevel, resolve, reject, error);
                else
                  return _this
                    .initializeCamera(newCamera, resolutionFallbackLevel)
                    .then(resolve)
                    .catch(reject);
              });
            if (
              "PermissionDeniedError" === error.name ||
              "PermissionDismissedError" === error.name ||
              "NotAllowedError" === error.name ||
              "NotFoundError" === error.name ||
              "AbortError" === error.name
            )
              return reject(error);
            return _this.retryInitializeCameraIfNeeded(camera, resolutionFallbackLevel, resolve, reject, error);
          });
      });
    };
    BarcodePickerCameraManager.prototype.resolveInitializeCamera = function(camera, resolve, reject) {
      var _this = this;
      var cameraNotReadableError = new CustomError({
        name: "NotReadableError",
        message: "Could not initialize camera correctly"
      });
      window.clearTimeout(this.cameraAccessTimeout);
      this.cameraAccessTimeout = window.setTimeout(function() {
        _this.stopStream();
        reject(cameraNotReadableError);
      }, BarcodePickerCameraManager.cameraAccessTimeoutMs);
      if ("iOS" === exports.BrowserHelper.userAgentInfo.getOS().name)
        this.barcodePickerGui.videoElement.onloadstart = function() {
          _this.barcodePickerGui.videoElement.onloadstart = null;
          window.clearTimeout(_this.cameraAccessTimeout);
          _this.activeCamera = camera;
          _this.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
          resolve();
        };
      else
        this.barcodePickerGui.videoElement.onloadeddata = function() {
          _this.barcodePickerGui.videoElement.onloadeddata = null;
          window.clearTimeout(_this.cameraAccessTimeout);
          if (
            _this.barcodePickerGui.videoElement.videoWidth > 2 &&
            _this.barcodePickerGui.videoElement.videoHeight > 2 &&
            _this.barcodePickerGui.videoElement.currentTime > 0
          ) {
            _this.activeCamera = camera;
            _this.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
            return resolve();
          }
          var cameraMetadataCheckStartTime = performance.now();
          window.clearInterval(_this.cameraMetadataCheckInterval);
          _this.cameraMetadataCheckInterval = window.setInterval(function() {
            if (
              2 === _this.barcodePickerGui.videoElement.videoWidth ||
              2 === _this.barcodePickerGui.videoElement.videoHeight ||
              0 === _this.barcodePickerGui.videoElement.currentTime
            ) {
              if (
                performance.now() - cameraMetadataCheckStartTime >
                BarcodePickerCameraManager.cameraMetadataCheckTimeoutMs
              ) {
                window.clearInterval(_this.cameraMetadataCheckInterval);
                _this.stopStream();
                return reject(cameraNotReadableError);
              }
              return;
            }
            window.clearInterval(_this.cameraMetadataCheckInterval);
            _this.activeCamera = camera;
            _this.barcodePickerGui.videoElement.dispatchEvent(new Event("canplay"));
            return resolve();
          }, BarcodePickerCameraManager.cameraMetadataCheckIntervalMs);
        };
    };
    BarcodePickerCameraManager.cameraAccessTimeoutMs = 4e3;
    BarcodePickerCameraManager.cameraMetadataCheckTimeoutMs = 4e3;
    BarcodePickerCameraManager.cameraMetadataCheckIntervalMs = 50;
    BarcodePickerCameraManager.getCapabilitiesTimeoutMs = 500;
    BarcodePickerCameraManager.autofocusIntervalMs = 1500;
    BarcodePickerCameraManager.manualToAutofocusResumeTimeoutMs = 5e3;
    BarcodePickerCameraManager.manualFocusWaitTimeoutMs = 400;
    return BarcodePickerCameraManager;
  })(CameraManager);
  var $find$1 = _arrayMethods(6);
  var KEY$1 = "findIndex";
  var forced$1 = true;
  if (KEY$1 in [])
    Array(1)[KEY$1](function() {
      forced$1 = false;
    });
  _export(_export.P + _export.F * forced$1, "Array", {
    findIndex: function findIndex(callbackfn) {
      return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  _addToUnscopables(KEY$1);
  var BarcodePickerGui = (function() {
    function BarcodePickerGui(
      scanner,
      originElement,
      singleImageMode,
      scanningPaused,
      visible,
      guiStyle,
      videoFit,
      cameraUploadCallback
    ) {
      var _this = this;
      this.scanner = scanner;
      this.originElement = originElement;
      this.singleImageMode = singleImageMode;
      this.scanningPaused = scanningPaused;
      this.cameraUploadCallback = cameraUploadCallback;
      this.mirrorImage = false;
      this.grandParentElement = document.createElement("div");
      this.grandParentElement.className = BarcodePickerGui.grandParentElementClassName;
      this.originElement.appendChild(this.grandParentElement);
      this.parentElement = document.createElement("div");
      this.parentElement.className = BarcodePickerGui.parentElementClassName;
      this.grandParentElement.appendChild(this.parentElement);
      this.videoImageCanvasContext = document.createElement("canvas").getContext("2d");
      this.videoElement = document.createElement("video");
      this.cameraSwitcherElement = document.createElement("img");
      this.torchTogglerElement = document.createElement("img");
      this.laserActiveImageElement = document.createElement("img");
      this.laserPausedImageElement = document.createElement("img");
      this.viewfinderElement = document.createElement("div");
      if (singleImageMode) {
        this.cameraUploadElement = document.createElement("div");
        this.cameraUploadInputElement = document.createElement("input");
        this.cameraUploadLabelElement = document.createElement("label");
        this.cameraUploadProgressElement = document.createElement("div");
        this.setupCameraUploadGuiAssets();
        this.guiStyle = exports.BarcodePicker.GuiStyle.NONE;
      } else {
        this.setupVideoElement();
        this.setupCameraSwitcher();
        this.setupTorchToggler();
        this.setupFullGuiAssets();
        this.setGuiStyle(guiStyle);
        this.setVideoFit(videoFit);
        this.visibilityListener = this.checkAndRecoverPlayback.bind(this);
        document.addEventListener("visibilitychange", this.visibilityListener);
      }
      this.resizeInterval = window.setInterval(function() {
        _this.resizeIfNeeded();
      }, 250);
      this.setupSharedAssets();
      this.setVisible(visible);
    }
    BarcodePickerGui.prototype.destroy = function() {
      if (null != this.visibilityListener) document.removeEventListener("visibilitychange", this.visibilityListener);
      window.clearInterval(this.resizeInterval);
      this.grandParentElement.remove();
      this.originElement.classList.remove(BarcodePickerGui.hiddenClassName);
    };
    BarcodePickerGui.prototype.setCameraManager = function(cameraManager) {
      this.cameraManager = cameraManager;
    };
    BarcodePickerGui.prototype.pauseScanning = function() {
      this.scanningPaused = true;
      this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenOpacityClassName);
      this.laserPausedImageElement.classList.remove(BarcodePickerGui.hiddenOpacityClassName);
      this.viewfinderElement.classList.add(BarcodePickerGui.pausedClassName);
    };
    BarcodePickerGui.prototype.resumeScanning = function() {
      this.scanningPaused = false;
      this.laserPausedImageElement.classList.add(BarcodePickerGui.hiddenOpacityClassName);
      this.laserActiveImageElement.classList.remove(BarcodePickerGui.hiddenOpacityClassName);
      this.viewfinderElement.classList.remove(BarcodePickerGui.pausedClassName);
    };
    BarcodePickerGui.prototype.isVisible = function() {
      return this.visible;
    };
    BarcodePickerGui.prototype.setVisible = function(visible) {
      this.visible = visible;
      if (visible) this.originElement.classList.remove(BarcodePickerGui.hiddenClassName);
      else this.originElement.classList.add(BarcodePickerGui.hiddenClassName);
    };
    BarcodePickerGui.prototype.isMirrorImageEnabled = function() {
      return this.mirrorImage;
    };
    BarcodePickerGui.prototype.setMirrorImageEnabled = function(enabled) {
      this.mirrorImage = enabled;
      if (enabled) this.videoElement.classList.add(BarcodePickerGui.mirroredClassName);
      else this.videoElement.classList.remove(BarcodePickerGui.mirroredClassName);
    };
    BarcodePickerGui.prototype.setGuiStyle = function(guiStyle) {
      if (this.singleImageMode) return;
      this.guiStyle = guiStyle;
      switch (this.guiStyle) {
        case exports.BarcodePicker.GuiStyle.NONE:
          this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenClassName);
          this.laserPausedImageElement.classList.add(BarcodePickerGui.hiddenClassName);
          this.viewfinderElement.classList.add(BarcodePickerGui.hiddenClassName);
          break;
        case exports.BarcodePicker.GuiStyle.LASER:
          this.laserActiveImageElement.classList.remove(BarcodePickerGui.hiddenClassName);
          this.laserPausedImageElement.classList.remove(BarcodePickerGui.hiddenClassName);
          this.viewfinderElement.classList.add(BarcodePickerGui.hiddenClassName);
          break;
        case exports.BarcodePicker.GuiStyle.VIEWFINDER:
          this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenClassName);
          this.laserPausedImageElement.classList.add(BarcodePickerGui.hiddenClassName);
          this.viewfinderElement.classList.remove(BarcodePickerGui.hiddenClassName);
      }
    };
    BarcodePickerGui.prototype.setVideoFit = function(objectFit) {
      if (this.singleImageMode) return;
      this.videoFit = objectFit;
      if (objectFit === exports.BarcodePicker.ObjectFit.COVER) {
        this.videoElement.style.objectFit = "cover";
        this.videoElement.dataset.objectFit = "cover";
      } else {
        this.videoElement.style.objectFit = "contain";
        this.videoElement.dataset.objectFit = "contain";
        this.scanner.applyScanSettings(
          this.scanner.getScanSettings().setBaseSearchArea({ x: 0, y: 0, width: 1, height: 1 })
        );
      }
      this.lastKnownElementWidth = 0;
      this.lastKnownElementHeight = 0;
      this.resizeIfNeeded();
      window.objectFitPolyfill(this.videoElement);
    };
    BarcodePickerGui.prototype.reassignOriginElement = function(originElement) {
      if (!this.visible) {
        this.originElement.classList.remove(BarcodePickerGui.hiddenClassName);
        originElement.classList.add(BarcodePickerGui.hiddenClassName);
      }
      originElement.appendChild(this.grandParentElement);
      this.checkAndRecoverPlayback();
      this.resizeIfNeeded();
      this.originElement = originElement;
    };
    BarcodePickerGui.prototype.flashGUI = function() {
      if (this.guiStyle === exports.BarcodePicker.GuiStyle.LASER) this.flashLaser();
      else if (this.guiStyle === exports.BarcodePicker.GuiStyle.VIEWFINDER) this.flashViewfinder();
    };
    BarcodePickerGui.prototype.getVideoImageData = function() {
      if (!this.singleImageMode) this.videoImageCanvasContext.drawImage(this.videoElement, 0, 0);
      if (this.videoImageCanvasContext.canvas.width <= 2 || this.videoImageCanvasContext.canvas.height <= 2) return;
      return this.videoImageCanvasContext.getImageData(
        0,
        0,
        this.videoImageCanvasContext.canvas.width,
        this.videoImageCanvasContext.canvas.height
      ).data;
    };
    BarcodePickerGui.prototype.getVideoCurrentTime = function() {
      return this.videoElement.currentTime;
    };
    BarcodePickerGui.prototype.setCameraSwitcherVisible = function(visible) {
      if (visible) this.cameraSwitcherElement.classList.remove(BarcodePickerGui.hiddenClassName);
      else this.cameraSwitcherElement.classList.add(BarcodePickerGui.hiddenClassName);
    };
    BarcodePickerGui.prototype.setTorchTogglerVisible = function(visible) {
      if (visible) this.torchTogglerElement.classList.remove(BarcodePickerGui.hiddenClassName);
      else this.torchTogglerElement.classList.add(BarcodePickerGui.hiddenClassName);
    };
    BarcodePickerGui.prototype.setCameraUploadGuiAvailable = function(available) {
      if (available) {
        this.cameraUploadProgressElement.classList.add(BarcodePickerGui.flashWhiteInsetClassName);
        this.cameraUploadElement.classList.remove(BarcodePickerGui.opacityPulseClassName);
      } else {
        this.cameraUploadProgressElement.classList.remove(BarcodePickerGui.flashWhiteInsetClassName);
        this.cameraUploadElement.classList.add(BarcodePickerGui.opacityPulseClassName);
      }
    };
    BarcodePickerGui.prototype.setupVideoElement = function() {
      var _this = this;
      this.videoElement.setAttribute("autoplay", "autoplay");
      this.videoElement.setAttribute("playsinline", "true");
      this.videoElement.setAttribute("muted", "muted");
      this.videoElement.className = BarcodePickerGui.videoElementClassName;
      this.parentElement.appendChild(this.videoElement);
      this.videoElement.addEventListener("canplay", function() {
        if (null != _this.cameraManager && null != _this.cameraManager.activeCamera) {
          window.setTimeout(function() {
            _this.lastKnownElementWidth = 0;
            _this.lastKnownElementHeight = 0;
            _this.resizeIfNeeded();
            window.objectFitPolyfill(_this.videoElement);
          }, 0);
          _this.cameraManager.activeCamera.currentResolution = {
            width: _this.videoElement.videoWidth,
            height: _this.videoElement.videoHeight
          };
          _this.videoImageCanvasContext.canvas.width = _this.videoElement.videoWidth;
          _this.videoImageCanvasContext.canvas.height = _this.videoElement.videoHeight;
          _this.scanner.applyImageSettings({
            width: _this.videoElement.videoWidth,
            height: _this.videoElement.videoHeight,
            format: exports.ImageSettings.Format.RGBA_8U
          });
          _this.setMirrorImageEnabled(_this.cameraManager.activeCamera.cameraType === exports.Camera.Type.FRONT);
        }
      });
    };
    BarcodePickerGui.prototype.setupSharedAssets = function() {
      var scanditLogoImageElement = document.createElement("img");
      scanditLogoImageElement.src = scanditLogoImage;
      scanditLogoImageElement.className = BarcodePickerGui.scanditLogoImageElementClassName;
      this.parentElement.appendChild(scanditLogoImageElement);
    };
    BarcodePickerGui.prototype.setupCameraUploadGuiAssets = function() {
      var _this = this;
      this.cameraUploadElement.className = BarcodePickerGui.cameraUploadElementClassName;
      this.parentElement.appendChild(this.cameraUploadElement);
      this.cameraUploadInputElement.type = "file";
      this.cameraUploadInputElement.accept = "image/*";
      this.cameraUploadInputElement.setAttribute("capture", "environment");
      this.cameraUploadInputElement.addEventListener("change", this.cameraUploadFile.bind(this));
      this.cameraUploadInputElement.addEventListener("click", function(event) {
        if (_this.scanningPaused || _this.scanner.isBusyProcessing()) event.preventDefault();
      });
      this.cameraUploadLabelElement.appendChild(this.cameraUploadInputElement);
      this.cameraUploadElement.appendChild(this.cameraUploadLabelElement);
      var cameraUploadImageElement = document.createElement("img");
      cameraUploadImageElement.src = cameraImage;
      this.cameraUploadLabelElement.appendChild(cameraUploadImageElement);
      var cameraUploadTextElement = document.createElement("div");
      cameraUploadTextElement.innerText = "Scan from Camera";
      this.cameraUploadLabelElement.appendChild(cameraUploadTextElement);
      this.cameraUploadProgressElement.classList.add("radial-progress");
      this.cameraUploadElement.appendChild(this.cameraUploadProgressElement);
    };
    BarcodePickerGui.prototype.setupFullGuiAssets = function() {
      this.laserActiveImageElement.src = laserActiveImage;
      this.laserActiveImageElement.className = BarcodePickerGui.laserImageElementClassName;
      this.parentElement.appendChild(this.laserActiveImageElement);
      this.laserPausedImageElement.src = laserPausedImage;
      this.laserPausedImageElement.className = BarcodePickerGui.laserImageElementClassName;
      this.parentElement.appendChild(this.laserPausedImageElement);
      this.viewfinderElement.className = BarcodePickerGui.viewfinderElementClassName;
      this.parentElement.appendChild(this.viewfinderElement);
      this.laserActiveImageElement.classList.add(BarcodePickerGui.hiddenOpacityClassName);
      this.laserPausedImageElement.classList.remove(BarcodePickerGui.hiddenOpacityClassName);
      this.viewfinderElement.classList.add(BarcodePickerGui.pausedClassName);
    };
    BarcodePickerGui.prototype.flashLaser = function() {
      this.laserActiveImageElement.classList.remove(BarcodePickerGui.flashColorClassName);
      this.laserActiveImageElement.offsetHeight;
      this.laserActiveImageElement.classList.add(BarcodePickerGui.flashColorClassName);
    };
    BarcodePickerGui.prototype.flashViewfinder = function() {
      this.viewfinderElement.classList.remove(BarcodePickerGui.flashWhiteClassName);
      this.viewfinderElement.offsetHeight;
      this.viewfinderElement.classList.add(BarcodePickerGui.flashWhiteClassName);
    };
    BarcodePickerGui.prototype.resizeIfNeeded = function() {
      if (
        this.lastKnownElementWidth === this.originElement.clientWidth &&
        this.lastKnownElementHeight === this.originElement.clientHeight
      )
        return;
      if (this.singleImageMode) this.resizeCameraUploadIfNeeded();
      else this.resizeVideoIfNeeded();
    };
    BarcodePickerGui.prototype.resizeCameraUploadIfNeeded = function() {
      var width = this.cameraUploadElement.clientWidth;
      var height = this.cameraUploadElement.clientHeight;
      this.lastKnownElementWidth = width;
      this.lastKnownElementHeight = height;
      this.cameraUploadLabelElement.style.transform = "scale(" + Math.min(1, width / 500, height / 300) + ")";
      this.cameraUploadProgressElement.style.transform = "scale(" + Math.min(1, width / 500, height / 300) + ")";
    };
    BarcodePickerGui.prototype.resizeVideoIfNeeded = function() {
      if (
        this.videoElement.videoHeight < 1 ||
        this.originElement.clientHeight < 1 ||
        (this.lastKnownElementWidth === this.originElement.clientWidth &&
          this.lastKnownElementHeight === this.originElement.clientHeight)
      )
        return;
      this.parentElement.style.maxWidth = null;
      this.parentElement.style.maxHeight = null;
      var videoRatio = this.videoElement.videoWidth / this.videoElement.videoHeight;
      var width = this.originElement.clientWidth;
      var height = this.originElement.clientHeight;
      this.lastKnownElementWidth = width;
      this.lastKnownElementHeight = height;
      if (this.videoFit === exports.BarcodePicker.ObjectFit.COVER) {
        var widthPercentage = 1;
        var heightPercentage = 1;
        if (videoRatio < width / height) heightPercentage = Math.min(1, height / (width / videoRatio));
        else widthPercentage = Math.min(1, width / (height * videoRatio));
        this.scanner.applyScanSettings(
          this.scanner
            .getScanSettings()
            .setBaseSearchArea({
              x: (1 - widthPercentage) / 2,
              y: (1 - heightPercentage) / 2,
              width: widthPercentage,
              height: heightPercentage
            })
        );
        return;
      }
      if (videoRatio > width / height) height = width / videoRatio;
      else width = height * videoRatio;
      this.parentElement.style.maxWidth = Math.ceil(width) + "px";
      this.parentElement.style.maxHeight = Math.ceil(height) + "px";
    };
    BarcodePickerGui.prototype.checkAndRecoverPlayback = function() {
      if (
        null != this.cameraManager &&
        null != this.cameraManager.activeCamera &&
        null != this.videoElement &&
        null != this.videoElement.srcObject
      )
        if (!this.videoElement.srcObject.active) this.cameraManager.reinitializeCamera();
        else {
          var playPromise = this.videoElement.play();
          if (null != playPromise) playPromise.catch(function() {});
        }
    };
    BarcodePickerGui.prototype.cameraUploadFileProcess = function(image, width, height) {
      var _this = this;
      this.videoImageCanvasContext.canvas.width = width;
      this.videoImageCanvasContext.canvas.height = height;
      this.videoImageCanvasContext.drawImage(image, 0, 0, width, height);
      this.scanner.applyImageSettings({ width: width, height: height, format: exports.ImageSettings.Format.RGBA_8U });
      this.setCameraUploadGuiAvailable(false);
      this.cameraUploadCallback().then(function() {
        _this.setCameraUploadGuiAvailable(true);
      });
    };
    BarcodePickerGui.prototype.cameraUploadFile = function() {
      var _this = this;
      var files = this.cameraUploadInputElement.files;
      if (null != files && 0 !== files.length) {
        var image_1 = new Image();
        var fileReader = new FileReader();
        fileReader.onload = function(event) {
          _this.cameraUploadInputElement.value = "";
          if (null != event.target) {
            image_1.onload = function() {
              _this.cameraUploadProgressElement.setAttribute("data-progress", "100");
              var resizedImageWidth;
              var resizedImageHeight;
              var resizedImageSizeLimit = 1440;
              if (image_1.naturalWidth <= resizedImageSizeLimit && image_1.naturalHeight <= resizedImageSizeLimit) {
                resizedImageWidth = image_1.naturalWidth;
                resizedImageHeight = image_1.naturalHeight;
              } else if (image_1.naturalWidth > image_1.naturalHeight) {
                resizedImageWidth = resizedImageSizeLimit;
                resizedImageHeight = Math.round((image_1.naturalHeight / image_1.naturalWidth) * resizedImageSizeLimit);
              } else {
                resizedImageWidth = Math.round((image_1.naturalWidth / image_1.naturalHeight) * resizedImageSizeLimit);
                resizedImageHeight = resizedImageSizeLimit;
              }
              _this.cameraUploadFileProcess(image_1, resizedImageWidth, resizedImageHeight);
            };
            image_1.onprogress = function(event2) {
              if (event2.lengthComputable) {
                var progress = 5 * Math.round((event2.loaded / event2.total) * 20);
                if (progress <= 100)
                  _this.cameraUploadProgressElement.setAttribute("data-progress", progress.toString());
              }
            };
            image_1.src = event.target.result;
          }
        };
        this.cameraUploadProgressElement.setAttribute("data-progress", "0");
        fileReader.readAsDataURL(files[0]);
      }
    };
    BarcodePickerGui.prototype.setupCameraSwitcher = function() {
      var _this = this;
      this.cameraSwitcherElement.src = switchCameraImage;
      this.cameraSwitcherElement.className = BarcodePickerGui.cameraSwitcherElementClassName;
      this.cameraSwitcherElement.classList.add(BarcodePickerGui.hiddenClassName);
      this.parentElement.appendChild(this.cameraSwitcherElement);
      ["touchstart", "mousedown"].forEach(function(eventName) {
        _this.cameraSwitcherElement.addEventListener(eventName, function(event) {
          if (null != _this.cameraManager) {
            var cameraManager_1 = _this.cameraManager;
            event.preventDefault();
            exports.CameraAccess.getCameras()
              .then(function(cameras) {
                var newCameraIndex =
                  (cameras.findIndex(function(camera) {
                    return (
                      camera.deviceId ===
                      (null == cameraManager_1.activeCamera ? camera.deviceId : cameraManager_1.activeCamera.deviceId)
                    );
                  }) +
                    1) %
                  cameras.length;
                cameraManager_1
                  .initializeCameraWithSettings(cameras[newCameraIndex], cameraManager_1.activeCameraSettings)
                  .catch(console.error);
              })
              .catch(console.error);
          }
        });
      });
    };
    BarcodePickerGui.prototype.setupTorchToggler = function() {
      var _this = this;
      this.torchTogglerElement.src = toggleTorchImage;
      this.torchTogglerElement.className = BarcodePickerGui.torchTogglerElementClassName;
      this.torchTogglerElement.classList.add(BarcodePickerGui.hiddenClassName);
      this.parentElement.appendChild(this.torchTogglerElement);
      ["touchstart", "mousedown"].forEach(function(eventName) {
        _this.torchTogglerElement.addEventListener(eventName, function(event) {
          if (null != _this.cameraManager) {
            event.preventDefault();
            _this.cameraManager.toggleTorch();
          }
        });
      });
    };
    BarcodePickerGui.grandParentElementClassName = "scandit scandit-container";
    BarcodePickerGui.parentElementClassName = "scandit scandit-barcode-picker";
    BarcodePickerGui.hiddenClassName = "scandit-hidden";
    BarcodePickerGui.hiddenOpacityClassName = "scandit-hidden-opacity";
    BarcodePickerGui.videoElementClassName = "scandit-video";
    BarcodePickerGui.scanditLogoImageElementClassName = "scandit-logo";
    BarcodePickerGui.laserImageElementClassName = "scandit-laser";
    BarcodePickerGui.viewfinderElementClassName = "scandit-viewfinder";
    BarcodePickerGui.cameraSwitcherElementClassName = "scandit-camera-switcher";
    BarcodePickerGui.torchTogglerElementClassName = "scandit-torch-toggle";
    BarcodePickerGui.cameraUploadElementClassName = "scandit-camera-upload";
    BarcodePickerGui.flashColorClassName = "scandit-flash-color";
    BarcodePickerGui.flashWhiteClassName = "scandit-flash-white";
    BarcodePickerGui.flashWhiteInsetClassName = "scandit-flash-white-inset";
    BarcodePickerGui.opacityPulseClassName = "scandit-opacity-pulse";
    BarcodePickerGui.mirroredClassName = "mirrored";
    BarcodePickerGui.pausedClassName = "paused";
    return BarcodePickerGui;
  })();
  var DummyCameraManager = (function(_super) {
    __extends(DummyCameraManager, _super);
    function DummyCameraManager() {
      return (null !== _super && _super.apply(this, arguments)) || this;
    }
    DummyCameraManager.prototype.setInteractionOptions = function(_1, _2, _3, _4) {
      return;
    };
    DummyCameraManager.prototype.isCameraSwitcherEnabled = function() {
      return false;
    };
    DummyCameraManager.prototype.setCameraSwitcherEnabled = function(_1) {
      return;
    };
    DummyCameraManager.prototype.isTorchToggleEnabled = function() {
      return false;
    };
    DummyCameraManager.prototype.setTorchToggleEnabled = function(_1) {
      return;
    };
    DummyCameraManager.prototype.isTapToFocusEnabled = function() {
      return false;
    };
    DummyCameraManager.prototype.setTapToFocusEnabled = function(_1) {
      return;
    };
    DummyCameraManager.prototype.isPinchToZoomEnabled = function() {
      return false;
    };
    DummyCameraManager.prototype.setPinchToZoomEnabled = function(_1) {
      return;
    };
    DummyCameraManager.prototype.setSelectedCamera = function(_1) {
      return;
    };
    DummyCameraManager.prototype.setSelectedCameraSettings = function(_1) {
      return;
    };
    DummyCameraManager.prototype.setupCameras = function() {
      return Promise.resolve();
    };
    DummyCameraManager.prototype.stopStream = function() {
      return;
    };
    DummyCameraManager.prototype.applyCameraSettings = function(_1) {
      return Promise.resolve();
    };
    DummyCameraManager.prototype.reinitializeCamera = function(_1) {
      return Promise.resolve();
    };
    DummyCameraManager.prototype.initializeCameraWithSettings = function(_1, _2) {
      return Promise.resolve();
    };
    DummyCameraManager.prototype.setTorchEnabled = function(_1) {
      return;
    };
    DummyCameraManager.prototype.toggleTorch = function() {
      return;
    };
    DummyCameraManager.prototype.setZoom = function(_1, _2) {
      return;
    };
    return DummyCameraManager;
  })(CameraManager);
  (function(_super) {
    __extends(BarcodePickerEventEmitter, _super);
    function BarcodePickerEventEmitter() {
      return (null !== _super && _super.apply(this, arguments)) || this;
    }
  })(eventemitter3_1);
  exports.BarcodePicker = (function() {
    function BarcodePicker(originElement, _a) {
      var visible = _a.visible,
        singleImageMode = _a.singleImageMode,
        playSoundOnScan = _a.playSoundOnScan,
        vibrateOnScan = _a.vibrateOnScan,
        scanningPaused = _a.scanningPaused,
        guiStyle = _a.guiStyle,
        videoFit = _a.videoFit,
        scanner = _a.scanner,
        scanSettings = _a.scanSettings,
        targetScanningFPS = _a.targetScanningFPS;
      var _this = this;
      this.isReadyToWork = false;
      this.destroyed = false;
      this.scanningPaused = scanningPaused;
      howler_core_min_1.autoSuspend = false;
      this.beepSound = new howler_core_min_2({ src: beepSound });
      this.vibrateFunction =
        navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
      this.eventEmitter = new eventemitter3_1();
      this.setPlaySoundOnScanEnabled(playSoundOnScan);
      this.setVibrateOnScanEnabled(vibrateOnScan);
      this.setTargetScanningFPS(targetScanningFPS);
      if (null == scanner) this.scanner = new Scanner$$1({ scanSettings: scanSettings });
      else {
        this.scanner = scanner;
        this.scanner.applyScanSettings(scanSettings);
      }
      this.scanner.onReady(function() {
        _this.isReadyToWork = true;
        _this.eventEmitter.emit("ready");
      });
      this.barcodePickerGui = new BarcodePickerGui(
        this.scanner,
        originElement,
        singleImageMode,
        scanningPaused,
        visible,
        guiStyle,
        videoFit,
        this.processVideoFrame.bind(this, true)
      );
      if (singleImageMode) this.cameraManager = new DummyCameraManager();
      else {
        this.scheduleVideoProcessing();
        this.cameraManager = new BarcodePickerCameraManager(this.triggerFatalError.bind(this), this.barcodePickerGui);
      }
      this.barcodePickerGui.setCameraManager(this.cameraManager);
    }
    BarcodePicker.create = function(originElement, _a) {
      var _b = void 0 === _a ? {} : _a,
        _c = _b.visible,
        visible = void 0 === _c ? true : _c,
        _d = _b.singleImageMode,
        singleImageMode =
          void 0 === _d
            ? { desktop: { always: false, allowFallback: true }, mobile: { always: false, allowFallback: true } }
            : _d,
        _e = _b.playSoundOnScan,
        playSoundOnScan = void 0 === _e ? false : _e,
        _f = _b.vibrateOnScan,
        vibrateOnScan = void 0 === _f ? false : _f,
        _g = _b.scanningPaused,
        scanningPaused = void 0 === _g ? false : _g,
        _h = _b.guiStyle,
        guiStyle = void 0 === _h ? BarcodePicker.GuiStyle.LASER : _h,
        _j = _b.videoFit,
        videoFit = void 0 === _j ? BarcodePicker.ObjectFit.CONTAIN : _j,
        scanner = _b.scanner,
        _k = _b.scanSettings,
        scanSettings = void 0 === _k ? new ScanSettings() : _k,
        _l = _b.enableCameraSwitcher,
        enableCameraSwitcher = void 0 === _l ? true : _l,
        _m = _b.enableTorchToggle,
        enableTorchToggle = void 0 === _m ? true : _m,
        _o = _b.enableTapToFocus,
        enableTapToFocus = void 0 === _o ? true : _o,
        _p = _b.enablePinchToZoom,
        enablePinchToZoom = void 0 === _p ? true : _p,
        _q = _b.accessCamera,
        accessCamera = void 0 === _q ? true : _q,
        camera = _b.camera,
        cameraSettings = _b.cameraSettings,
        _r = _b.targetScanningFPS,
        targetScanningFPS = void 0 === _r ? 30 : _r;
      var singleImageModeForced;
      var singleImageModeFallbackAllowed;
      var deviceType = exports.BrowserHelper.userAgentInfo.getDevice().type;
      if ("mobile" === deviceType || "tablet" === deviceType) {
        singleImageModeForced = singleImageMode.mobile.always;
        singleImageModeFallbackAllowed = singleImageMode.mobile.allowFallback;
      } else {
        singleImageModeForced = singleImageMode.desktop.always;
        singleImageModeFallbackAllowed = singleImageMode.desktop.allowFallback;
      }
      var browserCompatibility = exports.BrowserHelper.checkBrowserCompatibility();
      if (
        !browserCompatibility.scannerSupport ||
        (!singleImageModeForced && !singleImageModeFallbackAllowed && !browserCompatibility.fullSupport)
      )
        return Promise.reject(
          new CustomError({
            name: "UnsupportedBrowserError",
            message: "This OS / Browser has one or more missing features preventing it from working correctly",
            data: browserCompatibility
          })
        );
      if (null == exports.userLicenseKey || "" === exports.userLicenseKey.trim())
        return Promise.reject(
          new CustomError({
            name: "LibraryNotConfiguredError",
            message: "The library has not correctly been configured yet, please call 'configure' with valid parameters"
          })
        );
      if (!(originElement instanceof HTMLElement))
        return Promise.reject(
          new CustomError({ name: "NoOriginElementError", message: "A valid origin HTML element must be given" })
        );
      if (targetScanningFPS <= 0) targetScanningFPS = 30;
      var barcodePicker = new BarcodePicker(originElement, {
        visible: visible,
        singleImageMode: browserCompatibility.fullSupport ? singleImageModeForced : true,
        playSoundOnScan: playSoundOnScan,
        vibrateOnScan: vibrateOnScan,
        scanningPaused: scanningPaused,
        guiStyle: guiStyle,
        videoFit: videoFit,
        scanner: scanner,
        scanSettings: scanSettings,
        targetScanningFPS: targetScanningFPS
      });
      barcodePicker.cameraManager.setInteractionOptions(
        enableCameraSwitcher,
        enableTorchToggle,
        enableTapToFocus,
        enablePinchToZoom
      );
      barcodePicker.cameraManager.setSelectedCamera(camera);
      barcodePicker.cameraManager.setSelectedCameraSettings(cameraSettings);
      barcodePicker.cameraAccess = accessCamera;
      barcodePicker.onScanError(function(error) {
        if (-1 !== ["localhost", "127.0.0.1", ""].indexOf(window.location.hostname)) alert(error);
      });
      if (accessCamera)
        return barcodePicker.cameraManager.setupCameras().then(function() {
          return barcodePicker;
        });
      return Promise.resolve(barcodePicker);
    };
    BarcodePicker.prototype.destroy = function(destroyScanner) {
      if (void 0 === destroyScanner) destroyScanner = true;
      this.pauseScanning(true);
      this.destroyed = true;
      if (destroyScanner) this.scanner.destroy();
      this.barcodePickerGui.destroy();
      this.eventEmitter.removeAllListeners();
    };
    BarcodePicker.prototype.applyScanSettings = function(scanSettings) {
      this.scanner.applyScanSettings(scanSettings);
      return this;
    };
    BarcodePicker.prototype.isScanningPaused = function() {
      return this.scanningPaused;
    };
    BarcodePicker.prototype.pauseScanning = function(pauseCamera) {
      if (void 0 === pauseCamera) pauseCamera = false;
      this.scanningPaused = true;
      if (pauseCamera) this.cameraManager.stopStream();
      if (this.scanner.isReady()) this.barcodePickerGui.pauseScanning();
      return this;
    };
    BarcodePicker.prototype.resumeScanning = function() {
      var _this = this;
      this.scanningPaused = false;
      if (this.scanner.isReady()) this.barcodePickerGui.resumeScanning();
      if (null == this.cameraManager.activeCamera && this.cameraAccess)
        return this.cameraManager.setupCameras().then(function() {
          return _this;
        });
      return Promise.resolve(this);
    };
    BarcodePicker.prototype.getActiveCamera = function() {
      return this.cameraManager.activeCamera;
    };
    BarcodePicker.prototype.setActiveCamera = function(camera, cameraSettings) {
      var _this = this;
      if (null == camera || !this.cameraAccess) {
        this.cameraManager.setSelectedCamera(camera);
        this.cameraManager.setSelectedCameraSettings(cameraSettings);
        if (this.cameraAccess)
          return this.cameraManager.setupCameras().then(function() {
            return _this;
          });
        else return Promise.resolve(this);
      } else
        return this.cameraManager.initializeCameraWithSettings(camera, cameraSettings).then(function() {
          return _this;
        });
    };
    BarcodePicker.prototype.applyCameraSettings = function(cameraSettings) {
      var _this = this;
      if (!this.cameraAccess) {
        this.cameraManager.setSelectedCameraSettings(cameraSettings);
        return Promise.resolve(this);
      }
      return this.cameraManager.applyCameraSettings(cameraSettings).then(function() {
        return _this;
      });
    };
    BarcodePicker.prototype.isVisible = function() {
      return this.barcodePickerGui.isVisible();
    };
    BarcodePicker.prototype.setVisible = function(visible) {
      this.barcodePickerGui.setVisible(visible);
      return this;
    };
    BarcodePicker.prototype.isMirrorImageEnabled = function() {
      return this.barcodePickerGui.isMirrorImageEnabled();
    };
    BarcodePicker.prototype.setMirrorImageEnabled = function(enabled) {
      this.barcodePickerGui.setMirrorImageEnabled(enabled);
      return this;
    };
    BarcodePicker.prototype.isPlaySoundOnScanEnabled = function() {
      return this.playSoundOnScan;
    };
    BarcodePicker.prototype.setPlaySoundOnScanEnabled = function(enabled) {
      this.playSoundOnScan = enabled;
      return this;
    };
    BarcodePicker.prototype.isVibrateOnScanEnabled = function() {
      return this.vibrateOnScan;
    };
    BarcodePicker.prototype.setVibrateOnScanEnabled = function(enabled) {
      this.vibrateOnScan = enabled;
      return this;
    };
    BarcodePicker.prototype.isCameraSwitcherEnabled = function() {
      return this.cameraManager.isCameraSwitcherEnabled();
    };
    BarcodePicker.prototype.setCameraSwitcherEnabled = function(enabled) {
      this.cameraManager.setCameraSwitcherEnabled(enabled);
      return this;
    };
    BarcodePicker.prototype.isTorchToggleEnabled = function() {
      return this.cameraManager.isTorchToggleEnabled();
    };
    BarcodePicker.prototype.setTorchToggleEnabled = function(enabled) {
      this.cameraManager.setTorchToggleEnabled(enabled);
      return this;
    };
    BarcodePicker.prototype.isTapToFocusEnabled = function() {
      return this.cameraManager.isTapToFocusEnabled();
    };
    BarcodePicker.prototype.setTapToFocusEnabled = function(enabled) {
      this.cameraManager.setTapToFocusEnabled(enabled);
      return this;
    };
    BarcodePicker.prototype.isPinchToZoomEnabled = function() {
      return this.cameraManager.isPinchToZoomEnabled();
    };
    BarcodePicker.prototype.setPinchToZoomEnabled = function(enabled) {
      this.cameraManager.setPinchToZoomEnabled(enabled);
      return this;
    };
    BarcodePicker.prototype.setTorchEnabled = function(enabled) {
      this.cameraManager.setTorchEnabled(enabled);
      return this;
    };
    BarcodePicker.prototype.setZoom = function(zoomPercentage) {
      this.cameraManager.setZoom(zoomPercentage);
      return this;
    };
    BarcodePicker.prototype.isReady = function() {
      return this.isReadyToWork;
    };
    BarcodePicker.prototype.onReady = function(listener) {
      if (this.isReadyToWork) listener();
      else this.eventEmitter.once("ready", listener, this);
      return this;
    };
    BarcodePicker.prototype.onScan = function(listener, once) {
      if (void 0 === once) once = false;
      if (true === once) this.eventEmitter.once("scan", listener, this);
      else this.eventEmitter.on("scan", listener, this);
      return this;
    };
    BarcodePicker.prototype.removeScanListener = function(listener) {
      this.eventEmitter.removeListener("scan", listener);
      return this;
    };
    BarcodePicker.prototype.removeScanListeners = function() {
      this.eventEmitter.removeAllListeners("scan");
      return this;
    };
    BarcodePicker.prototype.onScanError = function(listener, once) {
      if (void 0 === once) once = false;
      if (true === once) this.eventEmitter.once("scanError", listener, this);
      else this.eventEmitter.on("scanError", listener, this);
      return this;
    };
    BarcodePicker.prototype.removeScanErrorListener = function(listener) {
      this.eventEmitter.removeListener("scanError", listener);
      return this;
    };
    BarcodePicker.prototype.removeScanErrorListeners = function() {
      this.eventEmitter.removeAllListeners("scanError");
      return this;
    };
    BarcodePicker.prototype.onSubmitFrame = function(listener, once) {
      if (void 0 === once) once = false;
      if (true === once) this.eventEmitter.once("submitFrame", listener, this);
      else this.eventEmitter.on("submitFrame", listener, this);
      return this;
    };
    BarcodePicker.prototype.removeSubmitFrameListener = function(listener) {
      this.eventEmitter.removeListener("submitFrame", listener);
      return this;
    };
    BarcodePicker.prototype.removeSubmitFrameListeners = function() {
      this.eventEmitter.removeAllListeners("submitFrame");
      return this;
    };
    BarcodePicker.prototype.onProcessFrame = function(listener, once) {
      if (void 0 === once) once = false;
      if (true === once) this.eventEmitter.once("processFrame", listener, this);
      else this.eventEmitter.on("processFrame", listener, this);
      return this;
    };
    BarcodePicker.prototype.removeProcessFrameListener = function(listener) {
      this.eventEmitter.removeListener("processFrame", listener);
      return this;
    };
    BarcodePicker.prototype.removeProcessFrameListeners = function() {
      this.eventEmitter.removeAllListeners("processFrame");
      return this;
    };
    BarcodePicker.prototype.setGuiStyle = function(guiStyle) {
      this.barcodePickerGui.setGuiStyle(guiStyle);
      return this;
    };
    BarcodePicker.prototype.setVideoFit = function(objectFit) {
      this.barcodePickerGui.setVideoFit(objectFit);
      return this;
    };
    BarcodePicker.prototype.accessCamera = function() {
      var _this = this;
      if (!this.cameraAccess || null == this.cameraManager.activeCamera)
        return new Promise(function(resolve, reject) {
          _this.cameraManager
            .setupCameras()
            .then(function() {
              _this.cameraAccess = true;
              return resolve(_this);
            })
            .catch(reject);
        });
      return Promise.resolve(this);
    };
    BarcodePicker.prototype.createParserForFormat = function(dataFormat) {
      return this.scanner.createParserForFormat(dataFormat);
    };
    BarcodePicker.prototype.reassignOriginElement = function(originElement) {
      this.barcodePickerGui.reassignOriginElement(originElement);
      return this;
    };
    BarcodePicker.prototype.setTargetScanningFPS = function(targetScanningFPS) {
      if (targetScanningFPS > 0) this.targetScanningFPS = targetScanningFPS;
      return this;
    };
    BarcodePicker.prototype.getScanner = function() {
      return this.scanner;
    };
    BarcodePicker.prototype.triggerFatalError = function(error) {
      this.fatalError = error;
      console.error(error);
    };
    BarcodePicker.prototype.handleScanResult = function(scanResult) {
      this.eventEmitter.emit("processFrame", scanResult);
      if (0 !== scanResult.barcodes.length) {
        this.barcodePickerGui.flashGUI();
        if (this.playSoundOnScan) this.beepSound.play();
        if (this.vibrateOnScan && null != this.vibrateFunction) this.vibrateFunction.call(navigator, 300);
        this.eventEmitter.emit("scan", scanResult);
      }
    };
    BarcodePicker.prototype.scheduleVideoProcessing = function(timeout) {
      var _this = this;
      if (void 0 === timeout) timeout = 0;
      window.setTimeout(function() {
        _this.videoProcessing();
      }, timeout);
    };
    BarcodePicker.prototype.scheduleNextVideoProcessing = function(processingStartTime) {
      if (this.targetScanningFPS < 30) {
        if (null == this.averageProcessingTime) this.averageProcessingTime = performance.now() - processingStartTime;
        else
          this.averageProcessingTime =
            0.9 * this.averageProcessingTime + 0.1 * (performance.now() - processingStartTime);
        var nextProcessingCallDelay = 1e3 / this.targetScanningFPS - this.averageProcessingTime;
        if (nextProcessingCallDelay > 16) this.scheduleVideoProcessing(nextProcessingCallDelay);
        else this.scheduleVideoProcessing();
      } else this.scheduleVideoProcessing();
    };
    BarcodePicker.prototype.processVideoFrame = function(highQualitySingleFrameMode) {
      var _this = this;
      var imageData = this.barcodePickerGui.getVideoImageData();
      if (null == imageData) return Promise.resolve();
      if (this.eventEmitter.listenerCount("submitFrame") > 0)
        this.eventEmitter.emit("submitFrame", {
          barcodes: [],
          imageData: imageData.slice(),
          imageSettings: this.scanner.getImageSettings()
        });
      return new Promise(function(resolve) {
        _this.scanner
          .processImage(imageData, highQualitySingleFrameMode)
          .then(function(scanResult) {
            if (!_this.scanningPaused) _this.handleScanResult(scanResult);
            resolve();
          })
          .catch(function(scanError) {
            if (!_this.scanningPaused) {
              _this.pauseScanning();
              _this.eventEmitter.emit("scanError", scanError);
            }
            resolve();
          });
      });
    };
    BarcodePicker.prototype.videoProcessing = function() {
      var _this = this;
      if (this.destroyed) return;
      if (
        null == this.cameraManager.activeCamera ||
        null == this.cameraManager.activeCamera.currentResolution ||
        null != this.fatalError ||
        this.scanningPaused ||
        !this.scanner.isReady() ||
        this.scanner.isBusyProcessing() ||
        this.latestVideoTimeProcessed === this.barcodePickerGui.getVideoCurrentTime()
      ) {
        this.scheduleVideoProcessing();
        return;
      }
      if (null == this.latestVideoTimeProcessed) this.resumeScanning();
      var processingStartTime = performance.now();
      this.latestVideoTimeProcessed = this.barcodePickerGui.getVideoCurrentTime();
      try {
        this.processVideoFrame(false).then(function() {
          _this.scheduleNextVideoProcessing(processingStartTime);
        });
      } catch (error) {
        this.triggerFatalError(error);
      }
    };
    return BarcodePicker;
  })();
  (function(BarcodePicker) {
    (function(GuiStyle) {
      GuiStyle["NONE"] = "none";
      GuiStyle["LASER"] = "laser";
      GuiStyle["VIEWFINDER"] = "viewfinder";
    })(BarcodePicker.GuiStyle || (BarcodePicker.GuiStyle = {}));
    (function(ObjectFit) {
      ObjectFit["CONTAIN"] = "contain";
      ObjectFit["COVER"] = "cover";
    })(BarcodePicker.ObjectFit || (BarcodePicker.ObjectFit = {}));
  })(exports.BarcodePicker || (exports.BarcodePicker = {}));
  var deviceId = exports.BrowserHelper.getDeviceId();
  function configure(licenseKey, _a) {
    var _b = void 0 === _a ? {} : _a,
      _c = _b.engineLocation,
      engineLocation = void 0 === _c ? "/" : _c,
      _d = _b.preloadEngineLibrary,
      preloadEngineLibrary = void 0 === _d ? false : _d,
      _e = _b.preloadCameras,
      preloadCameras = void 0 === _e ? false : _e;
    var browserCompatibility = exports.BrowserHelper.checkBrowserCompatibility();
    if (!browserCompatibility.fullSupport && !browserCompatibility.scannerSupport)
      return Promise.reject(
        new CustomError({
          name: "UnsupportedBrowserError",
          message: "This OS / Browser has one or more missing features preventing it from working correctly",
          data: browserCompatibility
        })
      );
    if (null == licenseKey || "" === licenseKey.trim())
      return Promise.reject(new CustomError({ name: "NoLicenseKeyError", message: "No license key provided" }));
    exports.userLicenseKey = licenseKey;
    engineLocation += "/" === engineLocation.slice(-1) ? "" : "/";
    if (/^https?:\/\//.test(engineLocation)) exports.scanditEngineLocation = "" + engineLocation;
    else {
      engineLocation = engineLocation
        .split("/")
        .filter(function(s) {
          return s.length > 0;
        })
        .join("/");
      if ("" === engineLocation) engineLocation = "/";
      else engineLocation = "/" + engineLocation + "/";
      exports.scanditEngineLocation = "" + location.origin + engineLocation;
    }
    var promises = [];
    if (preloadEngineLibrary) promises.push(loadEngineLibrary());
    if (preloadCameras) promises.push(exports.CameraAccess.getCameras());
    return Promise.all(promises)
      .then(function() {
        return;
      })
      .catch(function(error) {
        return Promise.reject(error);
      });
  }
  function loadEngineLibrary() {
    try {
      var scanner = new Scanner$$1();
      scanner.applyImageSettings({ width: 2, height: 2, format: exports.ImageSettings.Format.GRAY_8U });
      return scanner.processImage(new Uint8ClampedArray(4)).then(function() {
        return;
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  exports.deviceId = deviceId;
  exports.configure = configure;
  exports.loadEngineLibrary = loadEngineLibrary;
  exports.UAParser = uaParser_1;
  exports.CustomError = CustomError;
  exports.Scanner = Scanner$$1;
  exports.ScanSettings = ScanSettings;
  exports.engineSDKWorkerFunction = engineSDKWorkerFunction;
  exports.engineSDKWorker = engineSDKWorker;
  Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=index.js.map
