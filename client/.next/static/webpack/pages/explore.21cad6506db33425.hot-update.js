/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/explore",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/Modal.module.css":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/Modal.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Modal_modal__yDLSi {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  z-index: 9999;\\r\\n}\\r\\n\\r\\n/* .modalContent {\\r\\n    background-color: white;\\r\\n    padding: 30px;\\r\\n    border-radius: 10px;\\r\\n  } */\\r\\n\\r\\n.Modal_modalContent__JKCgu {\\r\\n  position: relative;\\r\\n  width: 75%;\\r\\n  height: 90%;\\r\\n  /* max-width: 800px;\\r\\n    max-height: 600px; */\\r\\n  background-color: white;\\r\\n  border-radius: 5px;\\r\\n  overflow: hidden;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.Modal_closeIcon__jGJtN {\\r\\n  position: absolute;\\r\\n  top: 10px;\\r\\n  right: 15px;\\r\\n  cursor: pointer;\\r\\n  color: white;\\r\\n  font-size: 29px;\\r\\n}\\r\\n\\r\\n.Modal_modal__yDLSi {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.Modal_modalContent__JKCgu {\\r\\n  cursor:auto;\\r\\n}\\r\\n\\r\\n@media (max-width: 720px) {\\r\\n  .Modal_modalcontent__iXDw_ {\\r\\n    padding-left: 102px;\\r\\n    padding-right: 30px;\\r\\n  }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Modal.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;;;;KAIK;;AAEL;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX;wBACsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;IACE,mBAAmB;IACnB,mBAAmB;EACrB;AACF\",\"sourcesContent\":[\".modal {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  z-index: 9999;\\r\\n}\\r\\n\\r\\n/* .modalContent {\\r\\n    background-color: white;\\r\\n    padding: 30px;\\r\\n    border-radius: 10px;\\r\\n  } */\\r\\n\\r\\n.modalContent {\\r\\n  position: relative;\\r\\n  width: 75%;\\r\\n  height: 90%;\\r\\n  /* max-width: 800px;\\r\\n    max-height: 600px; */\\r\\n  background-color: white;\\r\\n  border-radius: 5px;\\r\\n  overflow: hidden;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.closeIcon {\\r\\n  position: absolute;\\r\\n  top: 10px;\\r\\n  right: 15px;\\r\\n  cursor: pointer;\\r\\n  color: white;\\r\\n  font-size: 29px;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.modalContent {\\r\\n  cursor:auto;\\r\\n}\\r\\n\\r\\n@media (max-width: 720px) {\\r\\n  .modalcontent {\\r\\n    padding-left: 102px;\\r\\n    padding-right: 30px;\\r\\n  }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"modal\": \"Modal_modal__yDLSi\",\n\t\"modalContent\": \"Modal_modalContent__JKCgu\",\n\t\"closeIcon\": \"Modal_closeIcon__jGJtN\",\n\t\"modalcontent\": \"Modal_modalcontent__iXDw_\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL01vZGFsLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLCtEQUErRCxzQkFBc0IsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsMkNBQTJDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixLQUFLLDBCQUEwQixnQ0FBZ0Msc0JBQXNCLDRCQUE0QixRQUFRLHNDQUFzQyx5QkFBeUIsaUJBQWlCLGtCQUFrQiwwQkFBMEIsMkJBQTJCLGdDQUFnQyx5QkFBeUIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLGlDQUFpQyx5QkFBeUIsZ0JBQWdCLGtCQUFrQixzQkFBc0IsbUJBQW1CLHNCQUFzQixLQUFLLDZCQUE2QixzQkFBc0IsS0FBSyxvQ0FBb0Msa0JBQWtCLEtBQUssbUNBQW1DLGtDQUFrQyw0QkFBNEIsNEJBQTRCLE9BQU8sS0FBSyxPQUFPLHdGQUF3RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLGlDQUFpQyxzQkFBc0IsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsMkNBQTJDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG9CQUFvQixLQUFLLDBCQUEwQixnQ0FBZ0Msc0JBQXNCLDRCQUE0QixRQUFRLHlCQUF5Qix5QkFBeUIsaUJBQWlCLGtCQUFrQiwwQkFBMEIsMkJBQTJCLGdDQUFnQyx5QkFBeUIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGtCQUFrQixzQkFBc0IsbUJBQW1CLHNCQUFzQixLQUFLLGdCQUFnQixzQkFBc0IsS0FBSyx1QkFBdUIsa0JBQWtCLEtBQUssbUNBQW1DLHFCQUFxQiw0QkFBNEIsNEJBQTRCLE9BQU8sS0FBSyxtQkFBbUI7QUFDeHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL01vZGFsLm1vZHVsZS5jc3M/YzM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLk1vZGFsX21vZGFsX195RExTaSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLm1vZGFsQ29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfSAqL1xcclxcblxcclxcbi5Nb2RhbF9tb2RhbENvbnRlbnRfX0pLQ2d1IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIC8qIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4OyAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5Nb2RhbF9jbG9zZUljb25fX2pHSnROIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uTW9kYWxfbW9kYWxfX3lETFNpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLk1vZGFsX21vZGFsQ29udGVudF9fSktDZ3Uge1xcclxcbiAgY3Vyc29yOmF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xcclxcbiAgLk1vZGFsX21vZGFsY29udGVudF9faVhEd18ge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL01vZGFsLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7Ozs7S0FJSzs7QUFFTDtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYO3dCQUNzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAubW9kYWxDb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9ICovXFxyXFxuXFxyXFxuLm1vZGFsQ29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICAvKiBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VJY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxDb250ZW50IHtcXHJcXG4gIGN1cnNvcjphdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcXHJcXG4gIC5tb2RhbGNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMnB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtb2RhbFwiOiBcIk1vZGFsX21vZGFsX195RExTaVwiLFxuXHRcIm1vZGFsQ29udGVudFwiOiBcIk1vZGFsX21vZGFsQ29udGVudF9fSktDZ3VcIixcblx0XCJjbG9zZUljb25cIjogXCJNb2RhbF9jbG9zZUljb25fX2pHSnROXCIsXG5cdFwibW9kYWxjb250ZW50XCI6IFwiTW9kYWxfbW9kYWxjb250ZW50X19pWER3X1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/Modal.module.css\n"));

/***/ })

});