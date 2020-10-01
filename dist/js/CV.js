/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/CV.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./src/js/CV.js":
/*!**********************!*\
  !*** ./src/js/CV.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _templates_sidebar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/sidebar.js */ "./src/js/templates/sidebar.js");
/* harmony import */ var _templates_cascade_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/cascade.js */ "./src/js/templates/cascade.js");
/* harmony import */ var _utils_themes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/themes.js */ "./src/js/utils/themes.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var CV = /*#__PURE__*/function (_HTMLElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CV, _HTMLElement);

  var _super = _createSuper(CV);

  function CV() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CV);

    _this = _super.call(this);
    _this.theme = _this.getAttribute('theme');
    _this.accentColor = _this.getAttribute('accent-color') || 'coral';
    _this.showMenu = _this.getAttribute('show-menu') === 'true' ? true : false;

    _this.attachShadow({
      mode: 'open'
    });

    _this.setTheme(_this.theme);

    _this.containerElement = _this.shadowRoot.querySelector('article');
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CV, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._importCVData(this.attributes.uri.value);

              case 2:
                console.log(this.containerElement);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "setTheme",
    value: function setTheme(themeName) {
      this.theme = themeName;
      this.shadowRoot.innerHTML = '';
      var theme = document.createElement('template');

      switch (themeName) {
        case _utils_themes_js__WEBPACK_IMPORTED_MODULE_10__["themes"].SIDEBAR:
          theme.innerHTML = Object(_templates_sidebar_js__WEBPACK_IMPORTED_MODULE_8__["tSidebar"])(this.accentColor);
          break;

        case _utils_themes_js__WEBPACK_IMPORTED_MODULE_10__["themes"].CASCADE:
          theme.innerHTML = Object(_templates_cascade_js__WEBPACK_IMPORTED_MODULE_9__["tCascade"])(this.accentColor);
          break;

        default:
          break;
      }

      this.shadowRoot.appendChild(theme.content.cloneNode(true));
    }
  }, {
    key: "selectTheme",
    value: function selectTheme(e) {
      var target = e.path[0];

      if (target.nodeName === 'LI') {
        this.setTheme(target.getAttribute('data-theme'));
        this.renderAll();
      }
    }
  }, {
    key: "attachEventHandlers",
    value: function attachEventHandlers() {
      var _this2 = this;

      this.shadowRoot.querySelector('div.theme-selector').addEventListener('click', function (e) {
        _this2.selectTheme(e);
      });
      this.showMenu && this.shadowRoot.querySelector('#btn-print').addEventListener('click', function () {
        _this2.printCV();
      });
    }
  }, {
    key: "attachHeader",
    value: function attachHeader() {
      var _this$content$title = this.content.title,
          firstName = _this$content$title.firstName,
          middleName = _this$content$title.middleName,
          lastName = _this$content$title.lastName,
          description = _this$content$title.description,
          role = _this$content$title.role;
      this.shadowRoot.querySelector('header h1').innerHTML = "".concat(firstName, " ").concat(middleName && middleName + ' ').concat(lastName);
      this.shadowRoot.querySelector('header p').innerHTML = "".concat(description);
    }
  }, {
    key: "bodyParagraph",
    value: function bodyParagraph(d) {
      return "<p>".concat(d.content, "</p>");
    }
  }, {
    key: "bodyList",
    value: function bodyList(d) {
      return "\n            <ul>\n                ".concat(d.content.map(function (c) {
        return "<li><strong>".concat(c.item, "</strong> - ").concat(c.description, "</li>");
      }).join(''), "\n            </ul>\n        ");
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this3 = this;

      var menuContainer = document.createElement('div');
      var printBtn = document.createElement('button');
      var themeSelector = document.createElement('div');
      menuContainer.id = 'menu';
      printBtn.id = 'btn-print';
      printBtn.innerText = 'Print PDF';
      themeSelector.innerHTML = "\n            <span>Theme &#8691;</span>\n            <ul>\n                ".concat(Object.entries(_utils_themes_js__WEBPACK_IMPORTED_MODULE_10__["themes"]).map(function (t) {
        return "<li data-theme=\"".concat(t[1], "\" class=\"").concat(_this3.theme === t[1] ? 'active' : '', "\">").concat(t[1], "</li>");
      }).join(''), "\n            </ul>\n        ");
      themeSelector.classList.add('theme-selector');
      menuContainer.appendChild(themeSelector);
      menuContainer.appendChild(printBtn);
      this.shadowRoot.querySelector('article').appendChild(menuContainer);
    }
  }, {
    key: "renderHTMLBlock",
    value: function renderHTMLBlock(data) {
      switch (data.type) {
        case 'p':
          return this.bodyParagraph(data);

        case 'ul':
          return this.bodyList(data);

        default:
          return '';
      }
    }
  }, {
    key: "attachBody",
    value: function attachBody() {
      var _this4 = this;

      this.content.body.forEach(function (item) {
        var section = item.section,
            items = item.items;
        var wrapper = document.createElement('section');
        wrapper.innerHTML = "<h2>".concat(section, "</h2>");
        items.forEach(function (exp) {
          var div = document.createElement('div');
          div.innerHTML = "\n                        <h3>".concat(exp.title, " - <span>").concat(exp.subtitle, "</span></h3>\n                        <aside>").concat(exp.date.start, " - ").concat(exp.date.end || 'PRESENT', "</aside>\n                    <div class=\"body-copy\">\n                        ").concat(exp.body.map(function (b) {
            return _this4.renderHTMLBlock(b);
          }).join(''), "\n                    </div>\n                    ");
          wrapper.appendChild(div);
        });

        _this4.shadowRoot.querySelector('main').appendChild(wrapper);
      });
    }
  }, {
    key: "renderContactInfo",
    value: function renderContactInfo(contact) {
      switch (contact.type) {
        case 'email':
          return "<a href=\"mailto:".concat(contact.value, "\">").concat(contact.text || contact.value, "</a>");

        case 'phone':
        case 'telephone':
          return "<a href=\"tel:".concat(contact.value, "\">").concat(contact.text || contact.value, "</a>");

        case 'link':
          return "<a href=\"".concat(contact.value, "\">").concat(contact.text || contact.value, "</a>");

        default:
          return '';
      }
    }
  }, {
    key: "renderSidebarItem",
    value: function renderSidebarItem(item) {
      return "\n            <div class=\"sidebar-item\">\n                <h4>".concat(item.title, "</h4>\n                <ul>\n                    ").concat(item.items.map(function (i) {
        return "<li>".concat(i, "</li>");
      }).join(''), "\n                </ul>\n            </div>     \n        ");
    }
  }, {
    key: "renderSidebar",
    value: function renderSidebar() {
      var _this5 = this;

      this.shadowRoot.querySelector('aside.sidebar').innerHTML = "\n            ".concat(this.content.sidebar.map(function (item) {
        return _this5.renderSidebarItem(item);
      }).join(''), "\n        ");
    }
  }, {
    key: "attachMeta",
    value: function attachMeta() {
      var _this6 = this;

      this.shadowRoot.querySelector('aside.meta').innerHTML = "\n            <ul>\n                <li>".concat(this.content.meta.date, "<li>\n                <li>").concat(this.content.meta.location, "<li>\n                ").concat(this.content.meta.contact.map(function (contact) {
        return "<li>".concat(_this6.renderContactInfo(contact), "</li>");
      }).join(''), "\n            </ul>\n        ");
    }
  }, {
    key: "renderAll",
    value: function renderAll() {
      this.attachHeader();
      this.attachBody();
      this.attachMeta();
      this.renderSidebar();
      this.showMenu && this.renderMenu();
      this.attachEventHandlers();
    }
  }, {
    key: "_importCVData",
    value: function () {
      var _importCVData2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(cvURI) {
        var cvData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch(cvURI);

              case 3:
                cvData = _context2.sent;
                _context2.next = 6;
                return cvData.json();

              case 6:
                this.content = _context2.sent;
                this.renderAll();
                console.log(this.content);
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                this.containerElement.innerHTML = "<pre class=\"failed\">Error: ".concat(_context2.t0, "</pre>");

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function _importCVData(_x) {
        return _importCVData2.apply(this, arguments);
      }

      return _importCVData;
    }()
  }, {
    key: "printCV",
    value: function printCV() {
      var PDF = window.open('', 'PRINT', 'height=800,width=1200');
      PDF.document.write('<html><head><title>' + document.title + '</title>');
      PDF.document.write('</head><body>');
      PDF.document.write(this.shadowRoot.innerHTML);
      PDF.document.write('</body></html>');
      PDF.document.close(); // necessary for IE >= 10

      PDF.focus(); // necessary for IE >= 10

      PDF.print();
      setTimeout(function () {
        // Delay the closing of the new window by one frame
        // Otherwise the window closes too soon and the
        // print dialog disapears!
        PDF.close();
      }, 1);
    }
  }]);

  return CV;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7___default()(HTMLElement));

window.customElements.define('web-cv', CV);

/***/ }),

/***/ "./src/js/styles/default.mjs":
/*!***********************************!*\
  !*** ./src/js/styles/default.mjs ***!
  \***********************************/
/*! exports provided: defaultStyles */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStyles", function() { return defaultStyles; });
const defaultStyles = (accentColor) => `

    :host {
        --font-serif: "Time New Roman", serif;
        --font-sans-serif: Helvetica, Arial, sans-serif;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    article {
        position: relative;
    }

    #menu {
        position: absolute;
        display: flex;
        align-items: center;
        top: 16px;
        left: 50px;
    }

    #btn-print {

    }

    div.theme-selector {
        font-family: var(--font-sans-serif);
        position: relative;
    }

    div.theme-selector span {
        border-left: 2px solid ${accentColor};
        background-color: transparent;
        padding: 5px 10px;
    }

    
    div.theme-selector ul {
        display: none;
        position: absolute;
    }
    div.theme-selector ul li {
        background: #ddd;
        cursor: pointer;
        padding: 10px 10px;
        text-transform: capitalize;
    }
    div.theme-selector ul li:hover, div.theme-selector ul li.active {
        background: ${accentColor};
        color: white;
    }

    div.theme-selector:hover > ul {
        display: block;
    }

    a {
        text-decoration: none;
    }

    button {
        background: ${accentColor};
        color: white;
        padding: 10px;
        border: none;
    }

    ul {
        list-style: none;
    }

    article {
        width: 900px;
        max-width: 100%;
        margin: 0 auto;
        padding: 50px;
        line-height: 1.5;
        letter-spacing: 1.1;
    }

    aside.sidebar ul {
        margin-bottom: 30px;
    }

    aside.sidebar ul li {
        margin-bottom: 10px;
    }

    section {
        color: #353535;
        font-family: var(--font-sans-serif);
    }

    section > div {
        margin-bottom: 20px;
    }

    section p, section ul li {
        margin-bottom: 10px;
        color: #666;
    }
`;


/***/ }),

/***/ "./src/js/templates/cascade.js":
/*!*************************************!*\
  !*** ./src/js/templates/cascade.js ***!
  \*************************************/
/*! exports provided: tCascade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tCascade", function() { return tCascade; });
/* harmony import */ var _styles_default_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/default.mjs */ "./src/js/styles/default.mjs");

var tCascade = function tCascade(accentColor) {
  return "\n    <style>\n        ".concat(Object(_styles_default_mjs__WEBPACK_IMPORTED_MODULE_0__["defaultStyles"])(accentColor), "\n\n        article {\n            display: flex;\n            flex-direction: column;\n        }\n\n        header {\n            order: 2;\n            margin-bottom: 30px;\n        }\n        \n        main {\n            order: 3;\n        }\n        \n        aside.meta {\n            width: 100%;\n            order: 1;\n            display:  flex;\n            justify-content: flex-end;\n        }\n        \n        aside.sidebar {\n            order: 4;\n            display: grid;\n            grid-template-columns: repeat(3, minmax(200px, 1fr));\n            grid-column-gap: 20px;\n        }\n\n        aside.meta, aside.sidebar {\n            color: #666;\n        }\n\n        header p, aside.meta, aside.sidebar {\n            font-family: var(--font-sans-serif);\n        }\n\n        header, section {\n            margin-bottom: 30px;\n        }\n\n        section {\n            border-bottom: 1px solid ").concat(accentColor, ";\n        }\n\n        h1 {\n            font-size: 60px;\n            margin-top: -60px;\n            margin-bottom: 20px;\n            border-bottom: 5px solid ").concat(accentColor, ";\n            font-family: var(--font-sans-serif);\n        }\n\n        h2 {\n            border-bottom: 1px solid inherit;\n        }\n        \n        h2, h3, h4 {\n            font-size: 24px;\n            text-transform: capitalize;\n            margin-bottom: 20px;\n        }\n\n        h3, h4 {\n            font-size: 18px;\n        }\n\n        h4 {\n            font-family: var(--font-sans-serif);\n        }\n\n        h3 > span {\n            font-weight: normal;\n            font-style: italic;\n        }\n\n        aside {\n            font-size: 14px;\n        }\n\n        h2, a {\n            color: ").concat(accentColor, ";\n        }\n    </style>\n    <article>\n        <header>\n            <h1></h1>\n            <p></p>\n        </header>\n        <main></main>\n        <aside class=\"meta\">date here</aside>\n        <aside class=\"sidebar\">other shit here</aside>\n    </article>\n    ");
};

/***/ }),

/***/ "./src/js/templates/sidebar.js":
/*!*************************************!*\
  !*** ./src/js/templates/sidebar.js ***!
  \*************************************/
/*! exports provided: tSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tSidebar", function() { return tSidebar; });
/* harmony import */ var _styles_default_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/default.mjs */ "./src/js/styles/default.mjs");

var tSidebar = function tSidebar(accentColor) {
  return "\n    <style>\n        ".concat(Object(_styles_default_mjs__WEBPACK_IMPORTED_MODULE_0__["defaultStyles"])(accentColor), "\n\n        article {\n            display: grid;\n            grid-template-rows: auto 1fr;\n            grid-template-columns: 2fr 1fr;\n            grid-template-areas: \n                \"header meta\" \n                \"main sidebar\";\n            grid-column-gap: 50px;\n            grid-row-gap: 10px;\n        }\n\n        header {\n            grid-area: header;\n        }\n\n        main {\n            grid-area: main;\n        }\n\n        aside.meta {\n            grid-area: meta;\n            align-self: center;\n        }\n\n        aside.sidebar {\n            grid-area: sidebar;\n        }\n\n        aside.meta, aside.sidebar {\n            color: #666;\n        }\n\n        header p, aside.meta, aside.sidebar {\n            font-family: var(--font-sans-serif);\n        }\n\n        section > div aside {\n            margin-bottom: 10px;\n            font-style: italic;\n        }\n\n        h1 {\n            font-size: 52px;\n            margin-bottom: 20px;\n        }\n        \n        h2 {\n            font-size: 14px;\n            text-transform: uppercase;\n            margin-bottom: 20px;\n        }\n        \n        h3, h4 {\n            text-transform: capitalize;\n            font-family: var(--font-serif);\n            margin-bottom: 10px;\n        }\n\n        h4 {\n            font-family: var(--font-sans-serif);\n        }\n\n        h3 > span {\n            font-weight: normal;\n            font-style: italic;\n        }\n\n        aside {\n            font-size: 14px;\n        }\n\n        h2, h4, a {\n            color: ").concat(accentColor, ";\n        }\n    </style>\n    <article>\n        <header>\n            <h1></h1>\n            <p></p>\n        </header>\n        <main></main>\n        <aside class=\"meta\">date here</aside>\n        <aside class=\"sidebar\">other shit here</aside>\n    </article>\n    ");
};

/***/ }),

/***/ "./src/js/utils/themes.js":
/*!********************************!*\
  !*** ./src/js/utils/themes.js ***!
  \********************************/
/*! exports provided: themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
var themes = {
  SIDEBAR: 'sidebar',
  CASCADE: 'cascade'
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ1YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlcy9kZWZhdWx0Lm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGVtcGxhdGVzL2Nhc2NhZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RlbXBsYXRlcy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy90aGVtZXMuanMiXSwibmFtZXMiOlsiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwidmFsdWUiLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwic2V0UHJvdG90eXBlT2YiLCJyZXF1aXJlIiwiaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NvbnN0cnVjdCIsIlBhcmVudCIsIkNsYXNzIiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImEiLCJwdXNoIiwiRnVuY3Rpb24iLCJiaW5kIiwicHJvdG90eXBlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZ2V0UHJvdG90eXBlT2YiLCJvIiwiZ2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl9pc05hdGl2ZUZ1bmN0aW9uIiwidG9TdHJpbmciLCJjYWxsIiwiaW5kZXhPZiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJEYXRlIiwiZSIsIl90eXBlb2YiLCJhc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9zZXRQcm90b3R5cGVPZiIsInAiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImlzTmF0aXZlRnVuY3Rpb24iLCJfd3JhcE5hdGl2ZVN1cGVyIiwiX2NhY2hlIiwiTWFwIiwiaGFzIiwiZ2V0Iiwic2V0IiwiV3JhcHBlciIsInJ1bnRpbWUiLCJPcCIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlY29yZCIsInJlc3VsdCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIm5leHQiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsIkNWIiwidGhlbWUiLCJnZXRBdHRyaWJ1dGUiLCJhY2NlbnRDb2xvciIsInNob3dNZW51IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsInNldFRoZW1lIiwiY29udGFpbmVyRWxlbWVudCIsInNoYWRvd1Jvb3QiLCJxdWVyeVNlbGVjdG9yIiwiX2ltcG9ydENWRGF0YSIsImF0dHJpYnV0ZXMiLCJ1cmkiLCJjb25zb2xlIiwibG9nIiwidGhlbWVOYW1lIiwiaW5uZXJIVE1MIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGhlbWVzIiwiU0lERUJBUiIsInRTaWRlYmFyIiwiQ0FTQ0FERSIsInRDYXNjYWRlIiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwicGF0aCIsIm5vZGVOYW1lIiwicmVuZGVyQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlbGVjdFRoZW1lIiwicHJpbnRDViIsInRpdGxlIiwiZmlyc3ROYW1lIiwibWlkZGxlTmFtZSIsImxhc3ROYW1lIiwiZGVzY3JpcHRpb24iLCJyb2xlIiwiZCIsIm1hcCIsImMiLCJpdGVtIiwiam9pbiIsIm1lbnVDb250YWluZXIiLCJwcmludEJ0biIsInRoZW1lU2VsZWN0b3IiLCJpZCIsImlubmVyVGV4dCIsImVudHJpZXMiLCJ0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YSIsImJvZHlQYXJhZ3JhcGgiLCJib2R5TGlzdCIsImJvZHkiLCJzZWN0aW9uIiwiaXRlbXMiLCJ3cmFwcGVyIiwiZXhwIiwiZGl2Iiwic3VidGl0bGUiLCJkYXRlIiwic3RhcnQiLCJlbmQiLCJiIiwicmVuZGVySFRNTEJsb2NrIiwiY29udGFjdCIsInRleHQiLCJzaWRlYmFyIiwicmVuZGVyU2lkZWJhckl0ZW0iLCJtZXRhIiwibG9jYXRpb24iLCJyZW5kZXJDb250YWN0SW5mbyIsImF0dGFjaEhlYWRlciIsImF0dGFjaEJvZHkiLCJhdHRhY2hNZXRhIiwicmVuZGVyU2lkZWJhciIsInJlbmRlck1lbnUiLCJhdHRhY2hFdmVudEhhbmRsZXJzIiwiY3ZVUkkiLCJmZXRjaCIsImN2RGF0YSIsImpzb24iLCJQREYiLCJ3aW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImZvY3VzIiwicHJpbnQiLCJzZXRUaW1lb3V0IiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmF1bHRTdHlsZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxTQUFTQSxzQkFBVCxDQUFnQ0MsSUFBaEMsRUFBc0M7QUFDcEMsTUFBSUEsSUFBSSxLQUFLLEtBQUssQ0FBbEIsRUFBcUI7QUFDbkIsVUFBTSxJQUFJQyxjQUFKLENBQW1CLDJEQUFuQixDQUFOO0FBQ0Q7O0FBRUQsU0FBT0QsSUFBUDtBQUNEOztBQUVERSxN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Z0xBb0RlQSxXQXBEZiw0bkJBb0ZIQSxXQXBGRztBQUFBLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTW1CLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNuQixXQUFEO0FBQUEsMENBRWQ2Rix5RUFBYSxDQUFDN0YsV0FBRCxDQUZDLHlqREE0RUhBLFdBNUVHO0FBQUEsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFPLElBQU1pQixNQUFNLEdBQUc7QUFDbEJDLFNBQU8sRUFBRSxTQURTO0FBRWxCRSxTQUFPLEVBQUU7QUFGUyxDQUFmLEMiLCJmaWxlIjoiQ1YuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9DVi5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdFwiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZUZ1bmN0aW9uOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZUZ1bmN0aW9uID0gcmVxdWlyZShcIi4vaXNOYXRpdmVGdW5jdGlvblwiKTtcblxudmFyIGNvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdFwiKTtcblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIWlzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9O1xuXG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImltcG9ydCB7IHRTaWRlYmFyIH0gZnJvbSAnLi90ZW1wbGF0ZXMvc2lkZWJhci5qcyc7XG5pbXBvcnQgeyB0Q2FzY2FkZSB9IGZyb20gJy4vdGVtcGxhdGVzL2Nhc2NhZGUuanMnO1xuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSAnLi91dGlscy90aGVtZXMuanMnO1xuXG5jbGFzcyBDViBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50aGVtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0aGVtZScpO1xuICAgICAgICB0aGlzLmFjY2VudENvbG9yID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FjY2VudC1jb2xvcicpIHx8ICdjb3JhbCc7XG4gICAgICAgIHRoaXMuc2hvd01lbnUgPVxuICAgICAgICAgICAgdGhpcy5nZXRBdHRyaWJ1dGUoJ3Nob3ctbWVudScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB0aGlzLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpO1xuICAgIH1cblxuICAgIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBhd2FpdCB0aGlzLl9pbXBvcnRDVkRhdGEodGhpcy5hdHRyaWJ1dGVzLnVyaS52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFpbmVyRWxlbWVudCk7XG4gICAgfVxuXG4gICAgc2V0VGhlbWUodGhlbWVOYW1lKSB7XG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGVtZU5hbWU7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgdGhlbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBzd2l0Y2ggKHRoZW1lTmFtZSkge1xuICAgICAgICAgICAgY2FzZSB0aGVtZXMuU0lERUJBUjpcbiAgICAgICAgICAgICAgICB0aGVtZS5pbm5lckhUTUwgPSB0U2lkZWJhcih0aGlzLmFjY2VudENvbG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhlbWVzLkNBU0NBREU6XG4gICAgICAgICAgICAgICAgdGhlbWUuaW5uZXJIVE1MID0gdENhc2NhZGUodGhpcy5hY2NlbnRDb2xvcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoZW1lLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG5cbiAgICBzZWxlY3RUaGVtZShlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUucGF0aFswXTtcbiAgICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICAgICAgdGhpcy5zZXRUaGVtZSh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJykpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF0dGFjaEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50aGVtZS1zZWxlY3RvcicpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGhlbWUoZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNob3dNZW51ICYmXG4gICAgICAgICAgICB0aGlzLnNoYWRvd1Jvb3RcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI2J0bi1wcmludCcpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW50Q1YoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhdHRhY2hIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgIG1pZGRsZU5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcm9sZSxcbiAgICAgICAgfSA9IHRoaXMuY29udGVudC50aXRsZTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpLmlubmVySFRNTCA9IGAke2ZpcnN0TmFtZX0gJHtcbiAgICAgICAgICAgIG1pZGRsZU5hbWUgJiYgbWlkZGxlTmFtZSArICcgJ1xuICAgICAgICB9JHtsYXN0TmFtZX1gO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaGVhZGVyIHAnKS5pbm5lckhUTUwgPSBgJHtkZXNjcmlwdGlvbn1gO1xuICAgIH1cblxuICAgIGJvZHlQYXJhZ3JhcGgoZCkge1xuICAgICAgICByZXR1cm4gYDxwPiR7ZC5jb250ZW50fTwvcD5gO1xuICAgIH1cblxuICAgIGJvZHlMaXN0KGQpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAke2QuY29udGVudFxuICAgICAgICAgICAgICAgICAgICAubWFwKChjKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxsaT48c3Ryb25nPiR7Yy5pdGVtfTwvc3Ryb25nPiAtICR7Yy5kZXNjcmlwdGlvbn08L2xpPmA7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSgpIHtcbiAgICAgICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwcmludEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCB0aGVtZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVDb250YWluZXIuaWQgPSAnbWVudSc7XG4gICAgICAgIHByaW50QnRuLmlkID0gJ2J0bi1wcmludCc7XG4gICAgICAgIHByaW50QnRuLmlubmVyVGV4dCA9ICdQcmludCBQREYnO1xuICAgICAgICB0aGVtZVNlbGVjdG9yLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzcGFuPlRoZW1lICYjODY5MTs8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgJHtPYmplY3QuZW50cmllcyh0aGVtZXMpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAodCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPGxpIGRhdGEtdGhlbWU9XCIke3RbMV19XCIgY2xhc3M9XCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW1lID09PSB0WzFdID8gJ2FjdGl2ZScgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIj4ke3RbMV19PC9saT5gXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgYDtcbiAgICAgICAgdGhlbWVTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCd0aGVtZS1zZWxlY3RvcicpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoZW1lU2VsZWN0b3IpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW50QnRuKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUnKS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZW5kZXJIVE1MQmxvY2soZGF0YSkge1xuICAgICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keVBhcmFncmFwaChkYXRhKTtcbiAgICAgICAgICAgIGNhc2UgJ3VsJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2R5TGlzdChkYXRhKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXR0YWNoQm9keSgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmJvZHkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzZWN0aW9uLCBpdGVtcyB9ID0gaXRlbTtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IGA8aDI+JHtzZWN0aW9ufTwvaDI+YDtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGV4cCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JHtleHAudGl0bGV9IC0gPHNwYW4+JHtleHAuc3VidGl0bGV9PC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXNpZGU+JHtleHAuZGF0ZS5zdGFydH0gLSAke1xuICAgICAgICAgICAgICAgICAgICBleHAuZGF0ZS5lbmQgfHwgJ1BSRVNFTlQnXG4gICAgICAgICAgICAgICAgfTwvYXNpZGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5LWNvcHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7ZXhwLmJvZHkubWFwKChiKSA9PiB0aGlzLnJlbmRlckhUTUxCbG9jayhiKSkuam9pbignJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udGFjdEluZm8oY29udGFjdCkge1xuICAgICAgICBzd2l0Y2ggKGNvbnRhY3QudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBgPGEgaHJlZj1cIm1haWx0bzoke2NvbnRhY3QudmFsdWV9XCI+JHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC50ZXh0IHx8IGNvbnRhY3QudmFsdWVcbiAgICAgICAgICAgICAgICB9PC9hPmA7XG4gICAgICAgICAgICBjYXNlICdwaG9uZSc6XG4gICAgICAgICAgICBjYXNlICd0ZWxlcGhvbmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBgPGEgaHJlZj1cInRlbDoke2NvbnRhY3QudmFsdWV9XCI+JHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC50ZXh0IHx8IGNvbnRhY3QudmFsdWVcbiAgICAgICAgICAgICAgICB9PC9hPmA7XG4gICAgICAgICAgICBjYXNlICdsaW5rJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxhIGhyZWY9XCIke2NvbnRhY3QudmFsdWV9XCI+JHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC50ZXh0IHx8IGNvbnRhY3QudmFsdWVcbiAgICAgICAgICAgICAgICB9PC9hPmA7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclNpZGViYXJJdGVtKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8aDQ+JHtpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAke2l0ZW0uaXRlbXMubWFwKChpKSA9PiBgPGxpPiR7aX08L2xpPmApLmpvaW4oJycpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj4gICAgIFxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHJlbmRlclNpZGViYXIoKSB7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdhc2lkZS5zaWRlYmFyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgJHt0aGlzLmNvbnRlbnQuc2lkZWJhclxuICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IHRoaXMucmVuZGVyU2lkZWJhckl0ZW0oaXRlbSkpXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpfVxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGF0dGFjaE1ldGEoKSB7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdhc2lkZS5tZXRhJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT4ke3RoaXMuY29udGVudC5tZXRhLmRhdGV9PGxpPlxuICAgICAgICAgICAgICAgIDxsaT4ke3RoaXMuY29udGVudC5tZXRhLmxvY2F0aW9ufTxsaT5cbiAgICAgICAgICAgICAgICAke3RoaXMuY29udGVudC5tZXRhLmNvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChjb250YWN0KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8bGk+JHt0aGlzLnJlbmRlckNvbnRhY3RJbmZvKGNvbnRhY3QpfTwvbGk+YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcmVuZGVyQWxsKCkge1xuICAgICAgICB0aGlzLmF0dGFjaEhlYWRlcigpO1xuICAgICAgICB0aGlzLmF0dGFjaEJvZHkoKTtcbiAgICAgICAgdGhpcy5hdHRhY2hNZXRhKCk7XG4gICAgICAgIHRoaXMucmVuZGVyU2lkZWJhcigpO1xuICAgICAgICB0aGlzLnNob3dNZW51ICYmIHRoaXMucmVuZGVyTWVudSgpO1xuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBhc3luYyBfaW1wb3J0Q1ZEYXRhKGN2VVJJKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBjdkRhdGEgPSBhd2FpdCBmZXRjaChjdlVSSSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBhd2FpdCBjdkRhdGEuanNvbigpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IGA8cHJlIGNsYXNzPVwiZmFpbGVkXCI+RXJyb3I6ICR7ZXJyfTwvcHJlPmA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmludENWKCkge1xuICAgICAgICBjb25zdCBQREYgPSB3aW5kb3cub3BlbignJywgJ1BSSU5UJywgJ2hlaWdodD04MDAsd2lkdGg9MTIwMCcpO1xuXG4gICAgICAgIFBERi5kb2N1bWVudC53cml0ZSgnPGh0bWw+PGhlYWQ+PHRpdGxlPicgKyBkb2N1bWVudC50aXRsZSArICc8L3RpdGxlPicpO1xuICAgICAgICBQREYuZG9jdW1lbnQud3JpdGUoJzwvaGVhZD48Ym9keT4nKTtcbiAgICAgICAgUERGLmRvY3VtZW50LndyaXRlKHRoaXMuc2hhZG93Um9vdC5pbm5lckhUTUwpO1xuICAgICAgICBQREYuZG9jdW1lbnQud3JpdGUoJzwvYm9keT48L2h0bWw+Jyk7XG5cbiAgICAgICAgUERGLmRvY3VtZW50LmNsb3NlKCk7IC8vIG5lY2Vzc2FyeSBmb3IgSUUgPj0gMTBcbiAgICAgICAgUERGLmZvY3VzKCk7IC8vIG5lY2Vzc2FyeSBmb3IgSUUgPj0gMTBcblxuICAgICAgICBQREYucHJpbnQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBEZWxheSB0aGUgY2xvc2luZyBvZiB0aGUgbmV3IHdpbmRvdyBieSBvbmUgZnJhbWVcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSB0aGUgd2luZG93IGNsb3NlcyB0b28gc29vbiBhbmQgdGhlXG4gICAgICAgICAgICAvLyBwcmludCBkaWFsb2cgZGlzYXBlYXJzIVxuICAgICAgICAgICAgUERGLmNsb3NlKCk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnd2ViLWN2JywgQ1YpO1xuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRTdHlsZXMgPSAoYWNjZW50Q29sb3IpID0+IGBcblxuICAgIDpob3N0IHtcbiAgICAgICAgLS1mb250LXNlcmlmOiBcIlRpbWUgTmV3IFJvbWFuXCIsIHNlcmlmO1xuICAgICAgICAtLWZvbnQtc2Fucy1zZXJpZjogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAqIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIGFydGljbGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI21lbnUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICB9XG5cbiAgICAjYnRuLXByaW50IHtcblxuICAgIH1cblxuICAgIGRpdi50aGVtZS1zZWxlY3RvciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMtc2VyaWYpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgZGl2LnRoZW1lLXNlbGVjdG9yIHNwYW4ge1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7YWNjZW50Q29sb3J9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgfVxuXG4gICAgXG4gICAgZGl2LnRoZW1lLXNlbGVjdG9yIHVsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICBkaXYudGhlbWUtc2VsZWN0b3IgdWwgbGkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICAgIGRpdi50aGVtZS1zZWxlY3RvciB1bCBsaTpob3ZlciwgZGl2LnRoZW1lLXNlbGVjdG9yIHVsIGxpLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7YWNjZW50Q29sb3J9O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgZGl2LnRoZW1lLXNlbGVjdG9yOmhvdmVyID4gdWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7YWNjZW50Q29sb3J9O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgYXJ0aWNsZSB7XG4gICAgICAgIHdpZHRoOiA5MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMTtcbiAgICB9XG5cbiAgICBhc2lkZS5zaWRlYmFyIHVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICBhc2lkZS5zaWRlYmFyIHVsIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgY29sb3I6ICMzNTM1MzU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMtc2VyaWYpO1xuICAgIH1cblxuICAgIHNlY3Rpb24gPiBkaXYge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIHNlY3Rpb24gcCwgc2VjdGlvbiB1bCBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cbmA7XG4iLCJpbXBvcnQgeyBkZWZhdWx0U3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2RlZmF1bHQubWpzJztcblxuZXhwb3J0IGNvbnN0IHRDYXNjYWRlID0gKGFjY2VudENvbG9yKSA9PiBgXG4gICAgPHN0eWxlPlxuICAgICAgICAke2RlZmF1bHRTdHlsZXMoYWNjZW50Q29sb3IpfVxuXG4gICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIG9yZGVyOiAzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhc2lkZS5tZXRhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiAgZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFzaWRlLnNpZGViYXIge1xuICAgICAgICAgICAgb3JkZXI6IDQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzaWRlLm1ldGEsIGFzaWRlLnNpZGViYXIge1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIgcCwgYXNpZGUubWV0YSwgYXNpZGUuc2lkZWJhciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zLXNlcmlmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlciwgc2VjdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHthY2NlbnRDb2xvcn07XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJHthY2NlbnRDb2xvcn07XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zLXNlcmlmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoMiwgaDMsIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzLCBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zLXNlcmlmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgzID4gc3BhbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG5cbiAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIsIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7YWNjZW50Q29sb3J9O1xuICAgICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT48L2gxPlxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4+PC9tYWluPlxuICAgICAgICA8YXNpZGUgY2xhc3M9XCJtZXRhXCI+ZGF0ZSBoZXJlPC9hc2lkZT5cbiAgICAgICAgPGFzaWRlIGNsYXNzPVwic2lkZWJhclwiPm90aGVyIHNoaXQgaGVyZTwvYXNpZGU+XG4gICAgPC9hcnRpY2xlPlxuICAgIGA7XG4iLCJpbXBvcnQgeyBkZWZhdWx0U3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2RlZmF1bHQubWpzJztcblxuZXhwb3J0IGNvbnN0IHRTaWRlYmFyID0gKGFjY2VudENvbG9yKSA9PiBgXG4gICAgPHN0eWxlPlxuICAgICAgICAke2RlZmF1bHRTdHlsZXMoYWNjZW50Q29sb3IpfVxuXG4gICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICBcImhlYWRlciBtZXRhXCIgXG4gICAgICAgICAgICAgICAgXCJtYWluIHNpZGViYXJcIjtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogNTBweDtcbiAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgICAgICB9XG5cbiAgICAgICAgYXNpZGUubWV0YSB7XG4gICAgICAgICAgICBncmlkLWFyZWE6IG1ldGE7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhc2lkZS5zaWRlYmFyIHtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzaWRlLm1ldGEsIGFzaWRlLnNpZGViYXIge1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIgcCwgYXNpZGUubWV0YSwgYXNpZGUuc2lkZWJhciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zLXNlcmlmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24gPiBkaXYgYXNpZGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoMywgaDQge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZXJpZik7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucy1zZXJpZik7XG4gICAgICAgIH1cblxuICAgICAgICBoMyA+IHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuXG4gICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyLCBoNCwgYSB7XG4gICAgICAgICAgICBjb2xvcjogJHthY2NlbnRDb2xvcn07XG4gICAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxhcnRpY2xlPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPjwvaDE+XG4gICAgICAgICAgICA8cD48L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbj48L21haW4+XG4gICAgICAgIDxhc2lkZSBjbGFzcz1cIm1ldGFcIj5kYXRlIGhlcmU8L2FzaWRlPlxuICAgICAgICA8YXNpZGUgY2xhc3M9XCJzaWRlYmFyXCI+b3RoZXIgc2hpdCBoZXJlPC9hc2lkZT5cbiAgICA8L2FydGljbGU+XG4gICAgYDtcbiIsImV4cG9ydCBjb25zdCB0aGVtZXMgPSB7XG4gICAgU0lERUJBUjogJ3NpZGViYXInLFxuICAgIENBU0NBREU6ICdjYXNjYWRlJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9