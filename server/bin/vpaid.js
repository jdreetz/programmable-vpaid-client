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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Client = __webpack_require__(1);

var _Client2 = _interopRequireDefault(_Client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _Client2.default(window);

// const config = {
//   overrides: {
//     startAd: {
//       operations: [
//         { dispatch: 'AdStarted', delay: 1000 }
//       ],
//       delay: 1000
//     },
//     getAdRemainingTime: {
//       operations: [
//         { ret: 13, delay: 2000 },
//         { ret: 11, delay: 2000 },
//         { ret: 9, delay: 2000 },
//         { ret: 7, delay: 2000 },
//         { ret: 5, delay: 2000 },
//         { ret: 3, delay: 2000 },
//         { ret: 1, delay: 2000 },
//       ]
//     }
//   }
// };


// instance
//   .subscribe(() => console.log('AdLoaded'), 'AdLoaded')
//   .subscribe(() => console.log('AdStarted'), 'AdStarted')
//   .initAd(640, 480, 'normal', 0, JSON.stringify(config), {})
//   .startAd();

// for(let i = 0; i < 5; i++) {
//   let remaining = instance.getAdRemainingTime();
//   console.log('remaining', remaining, new Date());
// }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _VPAIDInterface2 = __webpack_require__(2);

var _VPAIDInterface3 = _interopRequireDefault(_VPAIDInterface2);

var _Decorator = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Client = function (_VPAIDInterface) {
  _inherits(Client, _VPAIDInterface);

  function Client(props) {
    _classCallCheck(this, Client);

    var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, props));

    console.log('Client created', _this);
    window.getVPAIDAd = function () {
      console.log('VPAID accessed', _this);
      return _this;
    };
    return _this;
  }

  _createClass(Client, [{
    key: 'initAd',
    value: function initAd(width, height, viewMode, desiredBitrate) {
      var creativeData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var environmentVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      console.log('calling initAd', arguments);
      this.applyOverrides(creativeData);
      return _get(Client.prototype.__proto__ || Object.getPrototypeOf(Client.prototype), 'initAd', this).call(this, width, height, viewMode, desiredBitrate, creativeData, environmentVars);
    }
  }, {
    key: 'applyOverrides',
    value: function applyOverrides(_ref) {
      var AdParameters = _ref.AdParameters;

      try {
        var parsed = JSON.parse(AdParameters);
        (0, _Decorator.augment)(this, parsed.overrides);
      } catch (e) {
        console.error(e);
      }
    }
  }]);

  return Client;
}(_VPAIDInterface3.default);

exports.default = Client;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pubsubJs = __webpack_require__(3);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VPAIDInterface = function () {
  function VPAIDInterface() {
    _classCallCheck(this, VPAIDInterface);

    this.adVolume = 0;
    this.paused = false;
    this.expanded = false;
    this.size = { width: 640, height: 360 };
  }

  _createClass(VPAIDInterface, [{
    key: 'initAd',
    value: function initAd(width, height, viewMode, desiredBitrate) {
      var creativeData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var environmentVars = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      this.size.width = width;
      this.size.height = height;
      this.viewMode = viewMode;
      this.creativeData = _extends({}, creativeData);
      this.environmentVars = _extends({}, environmentVars);

      this.publish('AdLoaded');
      return this;
    }
  }, {
    key: 'startAd',
    value: function startAd() {
      this.paused = false;
      this.publish('AdStarted');
      return this;
    }
  }, {
    key: 'skipAd',
    value: function skipAd() {
      this.publish('AdSkipped');
      return this;
    }
  }, {
    key: 'stopAd',
    value: function stopAd() {
      this.publish('AdStopped');
      return this;
    }
  }, {
    key: 'pauseAd',
    value: function pauseAd() {
      this.paused = true;
      this.publish('AdPaused');
      return this;
    }
  }, {
    key: 'resumeAd',
    value: function resumeAd() {
      this.paused = false;
      this.publish('AdPlaying');
      return this;
    }
  }, {
    key: 'collapseAd',
    value: function collapseAd() {
      this.expanded = false;
      this.publish('AdExpandedChange');
      return this;
    }
  }, {
    key: 'expandAd',
    value: function expandAd() {
      this.expanded = true;
      this.publish('AdExpandedChange');
      return this;
    }
  }, {
    key: 'resizeAd',
    value: function resizeAd(width, height, viewMode) {
      this.width = width;
      this.height = height;
      this.viewMode = viewMode;
      this.publish('AdSizeChange');
      return this;
    }
  }, {
    key: 'subscribe',
    value: function subscribe(fn, event, listenerScope) {
      _pubsubJs2.default.subscribe(event, fn.bind(listenerScope));
      return this;
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(fn, event) {
      _pubsubJs2.default.unsubscribe(event, fn);
      return this;
    }
  }, {
    key: 'publish',
    value: function publish(event, args) {
      _pubsubJs2.default.publish(event, args);
      return this;
    }
  }, {
    key: 'getAdExpanded',
    value: function getAdExpanded() {
      return this.expanded;
    }
  }, {
    key: 'getAdLinear',
    value: function getAdLinear() {
      return true;
    }
  }, {
    key: 'getAdDuration',
    value: function getAdDuration() {
      return -2;
    }
  }, {
    key: 'getAdRemainingTime',
    value: function getAdRemainingTime() {
      return -2;
    }
  }, {
    key: 'getAdSkippableState',
    value: function getAdSkippableState() {
      return true;
    }
  }, {
    key: 'getAdVolume',
    value: function getAdVolume() {
      return this.adVolume;
    }
  }, {
    key: 'getAdCompanions',
    value: function getAdCompanions() {
      return '';
    }
  }, {
    key: 'getAdIcons',
    value: function getAdIcons() {
      return true;
    }
  }, {
    key: 'getAdHeight',
    value: function getAdHeight() {
      return this.size.height;
    }
  }, {
    key: 'getAdWidth',
    value: function getAdWidth() {
      return this.size.width;
    }
  }, {
    key: 'handshakeVersion',
    value: function handshakeVersion() {
      return '2.0';
    }
  }, {
    key: 'setAdVolume',
    value: function setAdVolume(vol) {
      this.adVolume = vol;
    }
  }]);

  return VPAIDInterface;
}();

exports.default = VPAIDInterface;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
License: MIT - http://mrgnrdrck.mit-license.org

https://github.com/mroderick/PubSubJS
*/
(function (root, factory){
	'use strict';

	var PubSub = {};
	root.PubSub = PubSub;
	factory(PubSub);

	// AMD support
	if (true){
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return PubSub; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	// CommonJS and Node.js module support
	} else if (typeof exports === 'object'){
		if (module !== undefined && module.exports) {
			exports = module.exports = PubSub; // Node.js specific `module.exports`
		}
		exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
		module.exports = exports = PubSub; // CommonJS
	}

}(( typeof window === 'object' && window ) || this, function (PubSub){
	'use strict';

	var messages = {},
		lastUid = -1;

	function hasKeys(obj){
		var key;

		for (key in obj){
			if ( obj.hasOwnProperty(key) ){
				return true;
			}
		}
		return false;
	}

	/**
	 *	Returns a function that throws the passed exception, for use as argument for setTimeout
	 *	@param { Object } ex An Error object
	 */
	function throwException( ex ){
		return function reThrowException(){
			throw ex;
		};
	}

	function callSubscriberWithDelayedExceptions( subscriber, message, data ){
		try {
			subscriber( message, data );
		} catch( ex ){
			setTimeout( throwException( ex ), 0);
		}
	}

	function callSubscriberWithImmediateExceptions( subscriber, message, data ){
		subscriber( message, data );
	}

	function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
		var subscribers = messages[matchedMessage],
			callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
			s;

		if ( !messages.hasOwnProperty( matchedMessage ) ) {
			return;
		}

		for (s in subscribers){
			if ( subscribers.hasOwnProperty(s)){
				callSubscriber( subscribers[s], originalMessage, data );
			}
		}
	}

	function createDeliveryFunction( message, data, immediateExceptions ){
		return function deliverNamespaced(){
			var topic = String( message ),
				position = topic.lastIndexOf( '.' );

			// deliver the message as it is now
			deliverMessage(message, message, data, immediateExceptions);

			// trim the hierarchy and deliver message to each level
			while( position !== -1 ){
				topic = topic.substr( 0, position );
				position = topic.lastIndexOf('.');
				deliverMessage( message, topic, data, immediateExceptions );
			}
		};
	}

	function messageHasSubscribers( message ){
		var topic = String( message ),
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
			position = topic.lastIndexOf( '.' );

		while ( !found && position !== -1 ){
			topic = topic.substr( 0, position );
			position = topic.lastIndexOf( '.' );
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
		}

		return found;
	}

	function publish( message, data, sync, immediateExceptions ){
		var deliver = createDeliveryFunction( message, data, immediateExceptions ),
			hasSubscribers = messageHasSubscribers( message );

		if ( !hasSubscribers ){
			return false;
		}

		if ( sync === true ){
			deliver();
		} else {
			setTimeout( deliver, 0 );
		}
		return true;
	}

	/**
	 *	PubSub.publish( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message, passing the data to it's subscribers
	**/
	PubSub.publish = function( message, data ){
		return publish( message, data, false, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.publishSync( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message synchronously, passing the data to it's subscribers
	**/
	PubSub.publishSync = function( message, data ){
		return publish( message, data, true, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.subscribe( message, func ) -> String
	 *	- message (String): The message to subscribe to
	 *	- func (Function): The function to call when a new message is published
	 *	Subscribes the passed function to the passed message. Every returned token is unique and should be stored if
	 *	you need to unsubscribe
	**/
	PubSub.subscribe = function( message, func ){
		if ( typeof func !== 'function'){
			return false;
		}

		// message is not registered yet
		if ( !messages.hasOwnProperty( message ) ){
			messages[message] = {};
		}

		// forcing token as String, to allow for future expansions without breaking usage
		// and allow for easy use as key names for the 'messages' object
		var token = 'uid_' + String(++lastUid);
		messages[message][token] = func;

		// return token for unsubscribing
		return token;
	};

	/* Public: Clears all subscriptions
	 */
	PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
		messages = {};
	};

	/*Public: Clear subscriptions by the topic
	*/
	PubSub.clearSubscriptions = function clearSubscriptions(topic){
		var m;
		for (m in messages){
			if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
				delete messages[m];
			}
		}
	};

	/* Public: removes subscriptions.
	 * When passed a token, removes a specific subscription.
	 * When passed a function, removes all subscriptions for that function
	 * When passed a topic, removes all subscriptions for that topic (hierarchy)
	 *
	 * value - A token, function or topic to unsubscribe.
	 *
	 * Examples
	 *
	 *		// Example 1 - unsubscribing with a token
	 *		var token = PubSub.subscribe('mytopic', myFunc);
	 *		PubSub.unsubscribe(token);
	 *
	 *		// Example 2 - unsubscribing with a function
	 *		PubSub.unsubscribe(myFunc);
	 *
	 *		// Example 3 - unsubscribing a topic
	 *		PubSub.unsubscribe('mytopic');
	 */
	PubSub.unsubscribe = function(value){
		var descendantTopicExists = function(topic) {
				var m;
				for ( m in messages ){
					if ( messages.hasOwnProperty(m) && m.indexOf(topic) === 0 ){
						// a descendant of the topic exists:
						return true;
					}
				}

				return false;
			},
			isTopic    = typeof value === 'string' && ( messages.hasOwnProperty(value) || descendantTopicExists(value) ),
			isToken    = !isTopic && typeof value === 'string',
			isFunction = typeof value === 'function',
			result = false,
			m, message, t;

		if (isTopic){
			PubSub.clearSubscriptions(value);
			return;
		}

		for ( m in messages ){
			if ( messages.hasOwnProperty( m ) ){
				message = messages[m];

				if ( isToken && message[value] ){
					delete message[value];
					result = value;
					// tokens are unique, so we can just stop here
					break;
				}

				if (isFunction) {
					for ( t in message ){
						if (message.hasOwnProperty(t) && message[t] === value){
							delete message[t];
							result = true;
						}
					}
				}
			}
		}

		return result;
	};
}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.augment = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Handlers = __webpack_require__(5);

var _Queues = __webpack_require__(7);

var augment = exports.augment = function augment(subject, overrides) {
  Object.entries(overrides).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var defaultFn = subject[key];

    var operations = value.operations.map(function (op) {
      return _Handlers.overrideHandler.bind({}, op, subject.publish);
    });
    var queue = new _Queues.LoopableQueue(operations);
    subject[key] = queue.run.bind(queue);
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overrideHandler = undefined;

var _Timing = __webpack_require__(6);

var overrideHandler = exports.overrideHandler = function overrideHandler(operation, publisher) {
  if (typeof operation.ret !== 'undefined') {
    if (operation.delay) {
      (0, _Timing.syncDelay)(operation.delay);
    }
    return operation.ret;
  } else if (operation.dispatch) {
    setTimeout(function () {
      publisher(operation.dispatch);
    }, operation.delay || 0);
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var syncDelay = exports.syncDelay = function syncDelay(delay) {
  var now = new Date().getTime();
  var then = now + delay;

  while (now < then) {
    now = new Date().getTime();
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoopableQueue = exports.LoopableQueue = function () {
  function LoopableQueue(queue) {
    _classCallCheck(this, LoopableQueue);

    this.queue = [].concat(_toConsumableArray(queue));
    this.cur = 0;
  }

  _createClass(LoopableQueue, [{
    key: "run",
    value: function run() {
      var result = this.queue[this.cur].call();
      this.cur = this.cur == this.queue.length - 1 ? 0 : this.cur + 1;

      return result;
    }
  }]);

  return LoopableQueue;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map