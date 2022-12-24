/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/price/editor.scss":
/*!*******************************!*\
  !*** ./src/price/editor.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/price/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/price/editor.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);




 //import './style.scss';



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('gs-blocks/price', {
  /*supports: {
  	color: {
  		text: true,
  		background: true,
  		link: true,
  	},
  },*/
  attributes: {
    currency: {
      type: 'string',
      default: '$'
    },
    original_price: {
      type: 'number',
      default: '14,90'
    },
    integer_part: {
      type: 'number',
      default: '9'
    },
    fractional_part: {
      type: 'number',
      default: '90'
    },
    period: {
      type: 'string',
      default: 'month'
    },
    notice: {
      type: 'string',
      default: 'billed annually'
    },
    header: {
      type: 'string',
      source: 'text',
      selector: 'div',
      default: '$12.40' // empty default

    },
    background_color: {
      type: 'string',
      default: '#f8f8f8'
    },
    highlight_color: {
      type: 'string',
      default: '#ce362b'
    },
    primary_color: {
      type: 'string',
      default: '#555'
    },
    secondary_color: {
      type: 'string',
      default: 'black'
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;

    const onChangePriceCurrency = val => {
      setAttributes({
        currency: val
      });
    };

    const onChangeOriginalPrice = val => {
      setAttributes({
        original_price: val
      });
    };

    const onChangeIntegerPart = val => {
      setAttributes({
        integer_part: val
      });
    };

    const onChangeFractionalPart = val => {
      setAttributes({
        fractional_part: val
      });
    };

    const onChangePeriod = val => {
      setAttributes({
        period: val
      });
    };

    const onChangeNotice = val => {
      setAttributes({
        notice: val
      });
    };

    const onChangeBackgroundColor = hexColor => {
      setAttributes({
        background_color: hexColor
      });
    };

    const onChangeHighlightColor = hexColor => {
      setAttributes({
        highlight_color: hexColor
      });
    };

    const onChangePrimaryColor = hexColor => {
      setAttributes({
        primary_color: hexColor
      });
    };

    const onChangeSecondaryColor = hexColor => {
      setAttributes({
        secondary_color: hexColor
      });
    };

    const colors = [{
      name: 'Light Grey',
      color: '#f8f8f8'
    }, {
      name: 'Red',
      color: '#ce362b'
    }, {
      name: 'Dark Grey',
      color: '#555'
    }, {
      name: 'Black',
      color: 'black'
    }, {
      name: 'White',
      color: 'white'
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "gs-blocks-price",
      style: {
        backgroundColor: attributes.background_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "gs-blocks-price-original-price gs-blocks-price-typo-excluded",
      style: {
        color: attributes.highlight_color
      }
    }, attributes.currency + attributes.original_price, ' '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "gs-blocks-price-currency",
      style: {
        color: attributes.primary_color
      }
    }, attributes.currency, ' '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "gs-blocks-price-integer-part",
      style: {
        color: attributes.primary_color
      }
    }, attributes.integer_part, ' '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "gs-blocks-price-after-integer-part",
      style: {
        color: attributes.primary_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "gs-blocks-price-fractional-part"
    }, attributes.fractional_part, ' '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "gs-blocks-price-period gs-blocks-price-typo-excluded gs-blocks-price-period-position-beside"
    }, attributes.period, ' '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "gs-blocks-price-notice",
      style: {
        color: attributes.secondary_color
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "gs-blocks-price-asterisk",
      style: {
        color: attributes.highlight_color
      }
    }, '* '), attributes.notice), ' '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
      key: "settingp"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      id: "controlsp"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Currency', 'price')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl // Element Tag for Gutenberg standard colour selector
    , {
      value: attributes.currency,
      onChange: onChangePriceCurrency // onChange event callback
      ,
      style: {
        maxWidth: '100px'
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Original Price', 'price')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl // Element Tag for Gutenberg standard colour selector
    , {
      value: attributes.original_price,
      onChange: onChangeOriginalPrice // onChange event callback
      ,
      style: {
        maxWidth: '100px'
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Integer Part', 'price')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl // Element Tag for Gutenberg standard colour selector
    , {
      value: attributes.integer_part,
      onChange: onChangeIntegerPart // onChange event callback
      ,
      style: {
        maxWidth: '100px'
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Fractional Part', 'price')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl // Element Tag for Gutenberg standard colour selector
    , {
      value: attributes.fractional_part,
      onChange: onChangeFractionalPart // onChange event callback
      ,
      style: {
        maxWidth: '100px'
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Period', 'price')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl // Element Tag for Gutenberg standard colour selector
    , {
      value: attributes.period,
      onChange: onChangePeriod // onChange event callback
      ,
      style: {
        maxWidth: '100px'
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Notice', 'price')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl // Element Tag for Gutenberg standard colour selector
    , {
      value: attributes.notice,
      onChange: onChangeNotice // onChange event callback
      ,
      style: {
        maxWidth: '200px'
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color:', 'gs-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette // Element Tag for Gutenberg standard colour selector
    , {
      colors: colors,
      value: attributes.background_color,
      onChange: onChangeBackgroundColor // onChange event callback

    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Highlight Color:', 'gs-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette // Element Tag for Gutenberg standard colour selector
    , {
      colors: colors,
      value: attributes.highlight_color,
      onChange: onChangeHighlightColor // onChange event callback

    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Primary Color', 'gs-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette // Element Tag for Gutenberg standard colour selector
    , {
      colors: colors,
      value: attributes.primary_color,
      onChange: onChangePrimaryColor // onChange event callback

    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("legend", {
      className: "blocks-base-control__label"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Secondary Color', 'gs-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.ColorPalette // Element Tag for Gutenberg standard colour selector
    , {
      colors: colors,
      value: attributes.secondary_color,
      onChange: onChangeSecondaryColor // onChange event callback

    }))))));
  },
  save: _ref2 => {
    let {
      attributes
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps.save(), {
      style: {
        backgroundColor: attributes.header_bg_color,
        color: attributes.header_text_color
      }
    }), attributes.header);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map