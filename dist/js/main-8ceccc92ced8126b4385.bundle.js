webpackJsonp([2],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__base_css__);


;(function(win, doc) {
  var docEl = doc.documentElement;

  function setRemUnit() {
    var docWidth = docEl.clientWidth;
    var rem = docWidth / 10;
    docEl.style.fontSize = rem + 'px';
  }

  function showPage() {
    document.getElementsByClassName('wrapper')[0].style.display = "block"
  }

  win.addEventListener('resize', function() {
    setRemUnit();
    showPage()
  }, false);
  win.addEventListener('pageshow', function(e) {
    showPage()
    if (e.persisted) {
      setRemUnit();
    }
  }, false);

  setRemUnit();

  if (win.devicePixelRatio && win.devicePixelRatio >= 2) {
    var testEl = doc.createElement('div');
    var fakeBody = doc.createElement('body');
    testEl.style.border = '0.5px solid transparent';
    fakeBody.appendChild(testEl);
    docEl.appendChild(fakeBody);
    if (testEl.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(5, function() {
			var newContent = __webpack_require__(5);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "blockquote,\nbody,\ndd,\ndir,\ndl,\nfieldset,\nfigure,\nform,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\ninput,\nlegend,\nmenu,\nol,\noptgroup,\np,\npre,\ntbody,\ntd,\ntextarea,\ntfoot,\nth,\nthead,\nul {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style-type: none;\n  list-style-image: none;\n}\n\na {\n  text-decoration: none;\n}\n\na:active {\n  background-color: transparent;\n}\n\na:active,\na:focus,\na:hover {\n  outline: 0 none;\n}\n\nhtml {\n  -webkit-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 0.346667rem;\n  line-height: 1.8;\n  color: #332e2e;\n}\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: helvetica neue,arial,hiragino sans gb,stheiti,wenquanyi micro hei,\\5FAE\\8F6F\\96C5\\9ED1,\\5B8B\\4F53,sans-serif;\n  -ms-text-autospace: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n  -ms-text-spacing: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n  text-spacing: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 400;\n}\n\nh1 {\n  font-size: 0.48rem;\n}\n\nh2 {\n  font-size: 0.4rem;\n}\n\nh3 {\n  font-size: 0.293333rem;\n}\n\nh4 {\n  font-size: 0.24rem;\n}\n\nh5 {\n  font-size: 0.186667rem;\n}\n\nh6 {\n  font-size: 0.16rem;\n}\n\nabbr,\nacronym {\n  border-bottom: 1px dotted;\n  cursor: help;\n}\n\n.hairlines abbr,\n.hairlines acronym {\n  border-bottom: 0.5px dotted;\n}\n\nb,\nstrong {\n  font-weight: 700;\n}\n\ndfn {\n  font-style: italic;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\nmark {\n  background-color: #d2e5ff;\n  color: #000;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monaco,menlo,consolas,courier new,courier,monospace;\n}\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow: auto;\n}\n\nq {\n  quotes: none;\n}\n\nq:after,\nq:before {\n  content: \"\";\n  content: none;\n}\n\nsmall {\n  font-size: 85.7%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -.5em;\n}\n\nsub {\n  bottom: -.25em;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nth {\n  text-align: left;\n}\n\ntable td,\ntable th {\n  border: 1px solid #ddd;\n  padding: 0.106667rem 0.133333rem;\n}\n\n.hairlines table td,\n.hairlines table th {\n  border: 0.5px solid #ddd;\n}\n\ntable th {\n  font-weight: inherit;\n  border-bottom-width: 0.026667rem;\n  border-bottom-color: #ccc;\n}\n\nimg {\n  border: 0 none;\n  -ms-interpolation-mode: bicubic;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfieldset {\n  border: 1px solid silver;\n  margin: 0 0.026667rem;\n  padding: .35em .625em .75em;\n}\n\n.hairlines fieldset {\n  border: 0.5px solid silver;\n}\n\nlegend {\n  border: 0 none;\n  white-space: normal;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  vertical-align: baseline;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\ninput[disabled] {\n  cursor: default;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\n\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\noption:disabled:checked,\nselect:disabled option:checked {\n  color: #d2d2d2;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  input {\n    line-height: normal!important;\n  }\n}\n\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #a9a9a9;\n  opacity: 1;\n}\n\nlabel {\n  cursor: pointer;\n}\n\nselect[multiple],\nselect[size],\nselect[size][multiple] {\n  border: 1px solid #aaa;\n  padding: 0;\n}\n\n.hairlines select[multiple],\n.hairlines select[size],\n.hairlines select[size][multiple] {\n  border: 0.5px solid #aaa;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n[draggable] {\n  cursor: move;\n}\n\n.clearfix {\n  zoom: 1;\n  _height: 1px;\n}\n\n.hairlines .clearfix {\n  _height: 0.5px;\n}\n\n.clearfix:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n\n.app,\n.donation,\nbody,\nhtml {\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n.touch-soon {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-x: hidden;\n  position: absolute;\n  size: 100%;\n}\n\n.hide {\n  display: none;\n}", ""]);

// exports


/***/ })

},[11]);
//# sourceMappingURL=main-8ceccc92ced8126b4385.bundle.js.map