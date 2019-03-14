/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	$(document).ready(function () {

	  function getBackground(cityState) {
	    $.get("https://sweather-weather.herokuapp.com/api/v1/backgrounds?location=" + cityState, function (data, status) {
	      var backgroundUrl = data["data"]["attributes"]["background_url"];
	      $('body').css('background-image', "url(" + backgroundUrl + ")");
	    });
	  };

	  function getCurrentForecast(cityState) {
	    $.get("https://sweather-weather.herokuapp.com/api/v1/forecast?location=" + cityState, function (data, status) {
	      var currentForecastData = data["data"]["attributes"]["current_weather"];
	      var dailyForecastData = data["data"]["attributes"]["daily_weather"];
	      var currentTemp = currentForecastData["temperature"];
	      var currentSummary = currentForecastData["summary"];
	      var highTemp = dailyForecastData[0]["temperatureHigh"];
	      var lowTemp = dailyForecastData[0]["temperatureLow"];
	      var currentDate = currentForecastData["date"];
	      var currentTime = currentForecastData["time"];
	      $(".cityState").text(cityState);
	      $(".currentTemp").text("" + currentTemp + "°");
	      $(".currentSummary").text(currentSummary);
	      // $(".highTemp").text("High: " + `${highTemp}`+ "°");
	      // $(".lowTemp").text("Low: " + `${lowTemp}`+ "°");
	      $(".currentDateTime").text("" + currentDate + ", " + ("" + currentTime));
	      // $(".currentTime").text(currentTime);
	    });
	  }

	  function getDailyForecast(cityState) {
	    $.get("https://sweather-weather.herokuapp.com/api/v1/forecast?location=" + cityState, function (data, status) {
	      var dailyForecastData = data["data"]["attributes"]["daily_weather"];
	      var currentForecastData = data["data"]["attributes"]["current_weather"];
	      var todayForecastSummary = dailyForecastData[0]["summary"];
	      var tomorrowForecastSummary = dailyForecastData[1]["summary"];
	      var shortCurrentSummary = currentForecastData["summary"];
	      var feelsLikeTemp = currentForecastData["apparentTemperature"];
	      var uvIndex = currentForecastData["uvIndex"];
	      var humidity = currentForecastData["humidity"];
	      var visibility = currentForecastData["visibility"];
	      $(".todayForecastSummary").text(todayForecastSummary);
	      $(".tomorrowForecastSummary").text(tomorrowForecastSummary);
	      $(".shortCurrentSummary").text(shortCurrentSummary);
	      $(".feelsLikeTemp").text("Feels like: " + ("" + feelsLikeTemp) + "°");
	      $(".humidity").text("" + humidity * 100 + "%");
	      $(".visibility").text("" + visibility);
	    });
	  }

	  function getHourlyForecast(cityState) {
	    $.get("https://sweather-weather.herokuapp.com/api/v1/forecast?location=" + cityState, function (data, status) {
	      var dailyForecastData = data["data"]["attributes"]["daily_weather"];
	      var currentForecastData = data["data"]["attributes"]["current_weather"];
	      var hourlyForecastData = data["data"]["attributes"]["hourly_weather"];
	      $(".hour1Temp").text("" + hourlyForecastData[0]["temperature"] + "°");
	      $(".hour2Temp").text("" + hourlyForecastData[1]["temperature"] + "°");
	      $(".hour3Temp").text("" + hourlyForecastData[2]["temperature"] + "°");
	      $(".hour4Temp").text("" + hourlyForecastData[3]["temperature"] + "°");
	      $(".hour5Temp").text("" + hourlyForecastData[4]["temperature"] + "°");
	      $(".hour6Temp").text("" + hourlyForecastData[5]["temperature"] + "°");
	      $(".hour7Temp").text("" + hourlyForecastData[6]["temperature"] + "°");
	      $(".hour8Temp").text("" + hourlyForecastData[7]["temperature"] + "°");
	      $(".hour1Time").text(hourlyForecastData[0]["time"]);
	      $(".hour2Time").text(hourlyForecastData[1]["time"]);
	      $(".hour3Time").text(hourlyForecastData[2]["time"]);
	      $(".hour4Time").text(hourlyForecastData[3]["time"]);
	      $(".hour5Time").text(hourlyForecastData[4]["time"]);
	      $(".hour6Time").text(hourlyForecastData[5]["time"]);
	      $(".hour7Time").text(hourlyForecastData[6]["time"]);
	      $(".hour8Time").text(hourlyForecastData[7]["time"]);
	    });
	  }

	  function getExtendedForecast(cityState) {
	    $.get("https://sweather-weather.herokuapp.com/api/v1/forecast?location=" + cityState, function (data, status) {
	      var dailyForecastData = data["data"]["attributes"]["daily_weather"];
	      var currentForecastData = data["data"]["attributes"]["current_weather"];
	      var hourlyForecastData = data["data"]["attributes"]["hourly_weather"];
	      $(".dayOfWeek1").text(dailyForecastData[0]["dayofweek"]);
	      $(".dayOfWeek2").text(dailyForecastData[1]["dayofweek"]);
	      $(".dayOfWeek3").text(dailyForecastData[2]["dayofweek"]);
	      $(".dayOfWeek4").text(dailyForecastData[3]["dayofweek"]);
	      $(".dayOfWeek5").text(dailyForecastData[4]["dayofweek"]);
	      $(".dayOfWeek6").text(dailyForecastData[5]["dayofweek"]);
	      $(".dayOfWeek7").text(dailyForecastData[6]["dayofweek"]);
	      $(".tempHigh1").text("" + dailyForecastData[0]["temperatureHigh"] + "°");
	      $(".tempHigh2").text("" + dailyForecastData[1]["temperatureHigh"] + "°");
	      $(".tempHigh3").text("" + dailyForecastData[2]["temperatureHigh"] + "°");
	      $(".tempHigh4").text("" + dailyForecastData[3]["temperatureHigh"] + "°");
	      $(".tempHigh5").text("" + dailyForecastData[4]["temperatureHigh"] + "°");
	      $(".tempHigh6").text("" + dailyForecastData[5]["temperatureHigh"] + "°");
	      $(".tempHigh7").text("" + dailyForecastData[6]["temperatureHigh"] + "°");
	      $(".tempLow1").text("" + dailyForecastData[0]["temperatureLow"] + "°");
	      $(".tempLow2").text("" + dailyForecastData[1]["temperatureLow"] + "°");
	      $(".tempLow3").text("" + dailyForecastData[2]["temperatureLow"] + "°");
	      $(".tempLow4").text("" + dailyForecastData[3]["temperatureLow"] + "°");
	      $(".tempLow5").text("" + dailyForecastData[4]["temperatureLow"] + "°");
	      $(".tempLow6").text("" + dailyForecastData[5]["temperatureLow"] + "°");
	      $(".tempLow7").text("" + dailyForecastData[6]["temperatureLow"] + "°");
	      $(".precipProb1").text("" + dailyForecastData[0]["precipProbability"] * 100 + "%");
	      $(".precipProb2").text("" + dailyForecastData[1]["precipProbability"] * 100 + "%");
	      $(".precipProb3").text("" + dailyForecastData[2]["precipProbability"] * 100 + "%");
	      $(".precipProb4").text("" + dailyForecastData[3]["precipProbability"] * 100 + "%");
	      $(".precipProb5").text("" + dailyForecastData[4]["precipProbability"] * 100 + "%");
	      $(".precipProb6").text("" + dailyForecastData[5]["precipProbability"] * 100 + "%");
	      $(".precipProb7").text("" + dailyForecastData[6]["precipProbability"] * 100 + "%");
	      $(".shortSummary1").text(dailyForecastData[0]["icon"]);
	      $(".shortSummary2").text(dailyForecastData[1]["icon"]);
	      $(".shortSummary3").text(dailyForecastData[2]["icon"]);
	      $(".shortSummary4").text(dailyForecastData[3]["icon"]);
	      $(".shortSummary5").text(dailyForecastData[4]["icon"]);
	      $(".shortSummary6").text(dailyForecastData[5]["icon"]);
	      $(".shortSummary7").text(dailyForecastData[6]["icon"]);
	    });
	  }

	  $(".hourly-forecast").hide();
	  $(".extended-forecast").hide();
	  $(".current-weather").hide();
	  $(".daily-weather").hide();

	  $("#submitCityStateButton").click(function () {
	    event.preventDefault();
	    var cityState = $('#cityState').val();
	    $(".hourly-forecast").show();
	    $(".extended-forecast").show();
	    $(".current-weather").show();
	    $(".daily-weather").show();

	    getBackground(cityState);
	    getCurrentForecast(cityState);
	    getDailyForecast(cityState);
	    getHourlyForecast(cityState);
	    getExtendedForecast(cityState);
	  });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  background: url(\"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60\");\n  font-family: \"Open Sans\";\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed; }\n\ninput {\n  font-size: 1rem; }\n\nform {\n  display: inline-block; }\n\n.grid-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto auto auto;\n  grid-template-areas: \"headerContainer headerContainer\" \"current-weather daily-weather\" \"hourly-forecast hourly-forecast\" \"extended-forecast extended-forecast\"; }\n\n.headerContainer {\n  grid-area: headerContainer;\n  display: inline-block;\n  text-align: center; }\n\n.mainHeader h1 {\n  font-size: 3rem; }\n\n#submitCityStateButton {\n  background-color: #575761;\n  color: white;\n  padding: 5px;\n  border-radius: 10px; }\n\n.current-weather {\n  background-color: #648381;\n  opacity: 0.9;\n  grid-area: current-weather;\n  padding: 10px;\n  border-style: none;\n  border-radius: 10px;\n  margin: 10px; }\n\n.current-weather h4 {\n  text-transform: uppercase;\n  margin-left: 30px; }\n\n.cityState {\n  font-size: 4rem;\n  margin: auto 20px; }\n\n.currentTemp {\n  font-size: 3rem;\n  margin-left: 30px; }\n\n.currentSummary, .feelsLikeTemp, .currentDateTime {\n  margin-left: 30px; }\n\n.daily-weather {\n  background-color: #648381;\n  opacity: 0.9;\n  grid-area: daily-weather;\n  margin: 10px;\n  padding: 10px;\n  border-style: none;\n  border-radius: 10px; }\n\n.hourly-forecast {\n  background-color: #648381;\n  opacity: 0.9;\n  grid-area: hourly-forecast;\n  margin: 15px;\n  padding: 25px;\n  border-style: none;\n  border-radius: 10px; }\n\n.extended-forecast {\n  background-color: #648381;\n  opacity: 0.9;\n  grid-area: extended-forecast;\n  margin: 10px;\n  padding: 10px;\n  border-style: none;\n  border-radius: 10px;\n  text-align: center; }\n\n.extended-forecast th, td, tr {\n  padding: 20px;\n  text-align: center; }\n\n.tempRows {\n  font-size: 1.5rem; }\n\n#dayscolumn {\n  font-size: 1.2rem; }\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ]);