function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _section_five_section_five_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./section-five/section-five.component */
    "./src/app/section-five/section-five.component.ts");
    /* harmony import */


    var _section_four_section_four_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./section-four/section-four.component */
    "./src/app/section-four/section-four.component.ts");
    /* harmony import */


    var _section_six_section_six_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./section-six/section-six.component */
    "./src/app/section-six/section-six.component.ts");
    /* harmony import */


    var _section_three_section_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./section-three/section-three.component */
    "./src/app/section-three/section-three.component.ts");
    /* harmony import */


    var _section_two_section_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./section-two/section-two.component */
    "./src/app/section-two/section-two.component.ts");
    /* harmony import */


    var _shared_sec_one_sec_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/sec-one/sec-one.component */
    "./src/app/shared/sec-one/sec-one.component.ts");

    var routes = [// {path:'',component:SecOneComponent},
    {
      path: 'secOne',
      component: _shared_sec_one_sec_one_component__WEBPACK_IMPORTED_MODULE_7__["SecOneComponent"]
    }, {
      path: 'secTwo',
      component: _section_two_section_two_component__WEBPACK_IMPORTED_MODULE_6__["SectionTwoComponent"]
    }, {
      path: 'secThree',
      component: _section_three_section_three_component__WEBPACK_IMPORTED_MODULE_5__["SectionThreeComponent"]
    }, {
      path: 'secFour',
      component: _section_four_section_four_component__WEBPACK_IMPORTED_MODULE_3__["SectionFourComponent"]
    }, {
      path: 'secFive',
      component: _section_five_section_five_component__WEBPACK_IMPORTED_MODULE_2__["SectionFiveComponent"]
    }, {
      path: 'secSix',
      component: _section_six_section_six_component__WEBPACK_IMPORTED_MODULE_4__["SectionSixComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_sec_one_sec_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/sec-one/sec-one.component */
    "./src/app/shared/sec-one/sec-one.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'MyFirstAngular';
    });

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-sec-one");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
        }
      },
      directives: [_shared_sec_one_sec_one_component__WEBPACK_IMPORTED_MODULE_1__["SecOneComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_sec_one_sec_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/sec-one/sec-one.component */
    "./src/app/shared/sec-one/sec-one.component.ts");
    /* harmony import */


    var _section_two_section_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./section-two/section-two.component */
    "./src/app/section-two/section-two.component.ts");
    /* harmony import */


    var _section_three_section_three_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./section-three/section-three.component */
    "./src/app/section-three/section-three.component.ts");
    /* harmony import */


    var _section_four_section_four_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./section-four/section-four.component */
    "./src/app/section-four/section-four.component.ts");
    /* harmony import */


    var _section_five_section_five_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./section-five/section-five.component */
    "./src/app/section-five/section-five.component.ts");
    /* harmony import */


    var _section_six_section_six_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./section-six/section-six.component */
    "./src/app/section-six/section-six.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_sec_one_sec_one_component__WEBPACK_IMPORTED_MODULE_4__["SecOneComponent"], _section_two_section_two_component__WEBPACK_IMPORTED_MODULE_5__["SectionTwoComponent"], _section_three_section_three_component__WEBPACK_IMPORTED_MODULE_6__["SectionThreeComponent"], _section_four_section_four_component__WEBPACK_IMPORTED_MODULE_7__["SectionFourComponent"], _section_five_section_five_component__WEBPACK_IMPORTED_MODULE_8__["SectionFiveComponent"], _section_six_section_six_component__WEBPACK_IMPORTED_MODULE_9__["SectionSixComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_sec_one_sec_one_component__WEBPACK_IMPORTED_MODULE_4__["SecOneComponent"], _section_two_section_two_component__WEBPACK_IMPORTED_MODULE_5__["SectionTwoComponent"], _section_three_section_three_component__WEBPACK_IMPORTED_MODULE_6__["SectionThreeComponent"], _section_four_section_four_component__WEBPACK_IMPORTED_MODULE_7__["SectionFourComponent"], _section_five_section_five_component__WEBPACK_IMPORTED_MODULE_8__["SectionFiveComponent"], _section_six_section_six_component__WEBPACK_IMPORTED_MODULE_9__["SectionSixComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/section-five/section-five.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/section-five/section-five.component.ts ***!
    \********************************************************/

  /*! exports provided: SectionFiveComponent */

  /***/
  function srcAppSectionFiveSectionFiveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionFiveComponent", function () {
      return SectionFiveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SectionFiveComponent = /*#__PURE__*/function () {
      function SectionFiveComponent() {
        _classCallCheck(this, SectionFiveComponent);
      }

      _createClass(SectionFiveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SectionFiveComponent;
    }();

    SectionFiveComponent.??fac = function SectionFiveComponent_Factory(t) {
      return new (t || SectionFiveComponent)();
    };

    SectionFiveComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SectionFiveComponent,
      selectors: [["app-section-five"]],
      decls: 122,
      vars: 0,
      consts: [["id", "prevention", 1, "five"], [1, "container"], [1, "head1", "text-primary", "text-center", "pt-5", "wow", "bounceInDown"], [1, "head2", "head2", "text-center", "wow", "bounceInLeft"], [1, "headpar", "text-center", "pt-4", "wow", "bounceInRight"], [1, "row"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-5", "wow", "bounceInLeft"], [1, "card", "card2"], ["src", "../../assets/images/Prevention-1.png", "alt", "...", "width", "10px", "height", "160px", 1, "card-img-top", "imgcard2", "rounded-circle"], [1, "card-body", 2, "background-color", "transparent !important"], [1, "card-title", "head5"], [1, "card-text", "headpar"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-5", "wow", "bounceInUp"], ["src", "../../assets/images/Prevention-2.png", "alt", "...", "width", "10px", "height", "160px", 1, "card-img-top", "imgcard2", "rounded-circle"], ["src", "../../assets/images/Prevention-3.png", "alt", "...", "width", "10px", "height", "160px", 1, "card-img-top", "imgcard2", "rounded-circle"], [1, "col-lg-3", "col-md-12", "col-sm-12", "mt-5", "wow", "bounceInRight"], ["src", "../../assets/images/Prevention-4.png", "alt", "...", "width", "10px", "height", "160px", 1, "card-img-top", "imgcard2", "rounded-circle"], ["href", "#", 1, "mt-5", "ml-5", "text-center", "col-lg-4", "col-md-12", "col-sm-12", "covids5"], [1, "fa-solid", "fa-arrow-right", "ml-3"], [1, "mt-5", "btnstyle", "btns4", "btn", "btn-primary", "col-lg-4", "col-md-12", "col-sm-12"], [1, "row", "doctor"], [1, "col-lg-7", "col-md-12", "col-sm-12", "wow", "bounceInLeft"], [1, "head2", "mt-5"], [1, "advice", "mt-5", "ml-4", "headpar", "wow", "bounceInLeft"], [2, "font-weight", "bold"], [1, "fa-solid", "fa-circle-right", "mr-2", 2, "color", "rgb(104, 197, 104)"], ["href", "#"], [1, "drimg", "col-lg-4", "col-md-12", "col-sm-12", "wow", "animate__bounceInRight"], ["src", "../../assets/images/Prevention-5.png", 1, "col-lg-10", "col-md-12", "col-sm-12"], [1, "steps"], [1, "fas", "fa-arrow-right"], [1, "row", "wash"], [1, "col-lg-2", "col-md-4", "col-sm-6", "wow", "bounceInLeft"], ["src", "../../assets/images/hand-a.png", 1, "rounded-circle", "mt-5"], [1, "head2"], [1, "col-lg-2", "col-md-4", "col-sm-6", "wow", "bounceInUp"], ["src", "../../assets/images/hand-b.png", 1, "rounded-circle", "mt-5"], [1, "col-lg-2", "col-md-4", "col-sm-6", "wow", "bounceInDown"], ["src", "../../assets/images/hand-c.png", 1, "rounded-circle", "mt-5"], ["src", "../../assets/images/hand-d.png", 1, "rounded-circle", "mt-5"], ["src", "../../assets/images/hand-e.png", 1, "rounded-circle", "mt-5"], [1, "col-lg-2", "col-md-4", "col-sm-6", "wow", "bounceInRight"], ["src", "../../assets/images/hand-f.png", 1, "rounded-circle", "mt-5"]],
      template: function SectionFiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Wash your hands frequently");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "PREVENTION & ADVICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best way to prevent illness is to avoid being exposed to this virus. Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Wash your hands frequently");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Maintain social distancing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Avoid touching face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Practice respiratory hygiene");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "About Covid-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Have Question? Find Answer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "TAKE STEPS TO PROTECT OTHERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Stay home if you\u2019re sick \u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\u2013 Stay home if you are sick, except to get medical care ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Cover your mouth and nose \u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " with a tissue when you cough or sneeze (throw used tissues in the trash) or use the inside of your elbow. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Wear a facemask if you are sick \u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider\u2019s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Clean AND disinfect frequently touched surfaces daily-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " This includes phones, tables, light switches, doorknobs, countertops, handles, desks, toilets, faucets, and sinks. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Clean the dirty surfaces \u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " Use detergent or soap and water prior to disinfection. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Stay informed about the local COVID-19 situation \u2013 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Get up-to-date information about local COVID-19 activity from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " public health officials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Dedicated, lined trash can \u2013");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " If possible, dedicate a lined trash can for the ill person. Use gloves when removing garbage bags, and handling & disposing of trash. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Follow steps to wash hands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Why do I need wash hand ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Soap on Hand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Palm to Palm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Between Fingers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Back to Hands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Clean with Water");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h5", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Focus on Wrist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24tZml2ZS9zZWN0aW9uLWZpdmUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SectionFiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section-five',
          templateUrl: './section-five.component.html',
          styleUrls: ['./section-five.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/section-four/section-four.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/section-four/section-four.component.ts ***!
    \********************************************************/

  /*! exports provided: SectionFourComponent */

  /***/
  function srcAppSectionFourSectionFourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionFourComponent", function () {
      return SectionFourComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SectionFourComponent = /*#__PURE__*/function () {
      function SectionFourComponent() {
        _classCallCheck(this, SectionFourComponent);
      }

      _createClass(SectionFourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SectionFourComponent;
    }();

    SectionFourComponent.??fac = function SectionFourComponent_Factory(t) {
      return new (t || SectionFourComponent)();
    };

    SectionFourComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SectionFourComponent,
      selectors: [["app-section-four"]],
      decls: 48,
      vars: 0,
      consts: [["id", "faq", 1, "four"], [1, "container"], [1, "head1", "text-primary", "text-center", "wow", "bounceInDown"], [1, "head2", "h2s4", "text-center", "wow", "bounceInLeft"], [1, "headpar", "wow", "bounceInRight"], [1, "row"], [1, "col-lg-4", "col-md-12", "col-sm-12", "mt-5", "wow", "bounceInLeft"], [1, "card", "card3"], ["src", "../../assets/images/symptom-1.png", "alt", "...", "width", "10px", "height", "160px", 1, "card-img-top", "rounded-circle", "imgcard"], [1, "card-body"], [1, "card-title", "hcs4", "text-primary"], [1, "card-text", "par", "pars4"], [2, "font-weight", "bold"], [1, "col-lg-4", "col-md-12", "col-sm-12", "mt-5", "wow", "bounceIn"], ["src", "../../assets/images/symptom-2.png ", "alt", "...", "width", "10px", "height", "160px", 1, "card-img-top", "rounded-circle", "imgcard"], [1, "col-lg-4", "col-md-12", "col-sm-12", "mt-5", "wow", "bounceInRight"], ["src", "../../assets/images/symptom-3.png", "width", "10px", "height", "60px", 1, "card-img-top", "rounded-circle", "imgcard"], [1, "fa-solid", "fa-triangle-exclamation", "mosala", 2, "color", "blue", "font-size", "270%"], [1, "col-lg-6", "col-md-12", "col-sm-12", "ends4"], [1, "text-primary", 2, "font-weight", "bold"], [1, "btnstyle", "btns4", "btn", "btn-primary", "col-lg-4", "col-md-12", "col-sm-12"], [1, "fa-regular", "fa-circle-question", "mr-3"]],
      template: function SectionFourComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "WHAT ARE THE SYMPTOMS OF COVID-19 ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "SYMPTOMS OF CORONAVIRUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Fever");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "High Fever ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\u2013 this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Cough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Continuous cough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " \u2013 this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Shortness of breath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Difficulty breathing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " \u2013 Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Stay at home and call your doctor:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " If you think you have been exposed to COVID-19 and develop a fever and any symptoms, such as cough or difficulty breathing, call your healthcare provider as soon as possible for medical advice. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Have Question? Find Answer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24tZm91ci9zZWN0aW9uLWZvdXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SectionFourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section-four',
          templateUrl: './section-four.component.html',
          styleUrls: ['./section-four.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/section-six/section-six.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/section-six/section-six.component.ts ***!
    \******************************************************/

  /*! exports provided: SectionSixComponent */

  /***/
  function srcAppSectionSixSectionSixComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionSixComponent", function () {
      return SectionSixComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SectionSixComponent = /*#__PURE__*/function () {
      function SectionSixComponent() {
        _classCallCheck(this, SectionSixComponent);
      }

      _createClass(SectionSixComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SectionSixComponent;
    }();

    SectionSixComponent.??fac = function SectionSixComponent_Factory(t) {
      return new (t || SectionSixComponent)();
    };

    SectionSixComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SectionSixComponent,
      selectors: [["app-section-six"]],
      decls: 37,
      vars: 0,
      consts: [[1, "six"], [1, "container-fluied", "m-5"], [1, "row"], [1, "col-lg-8", "col-md-12", "col-sm-12"], [1, "none", "head2", "col-lg-12", "col-md-12", "col-sm-12", "mb-3", "mt-5"], [1, "none", "head3", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], [1, "none", "head4", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], [1, "par", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], [1, "col-lg-4", "col-md-12", "col-sm-12", "wow", "animate__bounceInUp"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"]],
      template: function SectionSixComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h6", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "BE CAREFULL & STAY SAFE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "TREATMENT FOR CORONAVIRUS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "To date, there is no vaccine and no specific antiviral medicine");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " to prevent or treat COVID-2019.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " However, those affected should receive care to relieve symptoms. People with serious illness should be hospitalized. Most patients recover thanks to supportive care. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Antibiotics do not help, as they do not work against viruses. Treatment aims to relieve the symptoms while your body fights the illness. You'll need to stay in isolation, away from other people, until you have recovered. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Self Care");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "If you have mild symptoms, stay at home until you\u2019ve recovered. You can relieve your symptoms if you:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Rest and sleep");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Keep warm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Drink plenty of liquids");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Use a room humidifier or take a hot shower to help ease a sore throat and cough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Medical Treatments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. Call in advance and tell your health provider of any recent travel or recent contact with travelers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24tc2l4L3NlY3Rpb24tc2l4LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SectionSixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section-six',
          templateUrl: './section-six.component.html',
          styleUrls: ['./section-six.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/section-three/section-three.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/section-three/section-three.component.ts ***!
    \**********************************************************/

  /*! exports provided: SectionThreeComponent */

  /***/
  function srcAppSectionThreeSectionThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionThreeComponent", function () {
      return SectionThreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SectionThreeComponent = /*#__PURE__*/function () {
      function SectionThreeComponent() {
        _classCallCheck(this, SectionThreeComponent);
      }

      _createClass(SectionThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SectionThreeComponent;
    }();

    SectionThreeComponent.??fac = function SectionThreeComponent_Factory(t) {
      return new (t || SectionThreeComponent)();
    };

    SectionThreeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SectionThreeComponent,
      selectors: [["app-section-three"]],
      decls: 36,
      vars: 0,
      consts: [["id", "transition", 1, "three"], [1, "container"], [1, "head1", "text-primary", "text-center", "pt-5", "wow", "bounceInDown"], [1, "head2", "text-center", "wow", "bounceInLeft"], [1, "headpar", "wow", "bounceInRight", "mt-4"], [1, "row"], [1, "col-lg-4", "col-md-12", "col-sm-12", "mt-5", "wow", "bounceInLeft"], [1, "card", "card2"], ["src", "../../assets/images/transmission-1.png", "alt", "...", "width", "10px", "height", "160px", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "card-title2", "text-primary"], [1, "card-text", "ml-4", "par", "par2"], [1, "col-lg-4", "col-md-12", "col-sm-12", "mt-5", "wow", "bounceIn"], ["src", "../../assets/images/transmission-2.png", "alt", "...", "width", "10px", "height", "160px", 1, "card-img-top"], [1, "col-lg-4", "col-md-12", "col-sm-12", "mt-5", "wow", "bounceInRight"], ["src", "../../assets/images/transmission-3.png", "alt", "...", "width", "10px", "height", "160px", 1, "card-img-top"], [1, "btnstyle", "bq", "btn", "btn-primary", "wow", "bounceIn"], [1, "fa-regular", "fa-circle-question", "mr-3"]],
      template: function SectionThreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "HOW CORONAVIRUS IS SPREA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "TRANSITION OF COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Because it's a new illness, we do not know exactly how coronavirus spreads from person to person. Similar viruses are spread in cough droplets.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Person-to-person spread as close contact with infectes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Touching or contact with infected surfaces or objects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "A person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Droplets that from infected person coughs or sneezes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Have Question About Spreading?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24tdGhyZWUvc2VjdGlvbi10aHJlZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SectionThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section-three',
          templateUrl: './section-three.component.html',
          styleUrls: ['./section-three.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/section-two/section-two.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/section-two/section-two.component.ts ***!
    \******************************************************/

  /*! exports provided: SectionTwoComponent */

  /***/
  function srcAppSectionTwoSectionTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionTwoComponent", function () {
      return SectionTwoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SectionTwoComponent = /*#__PURE__*/function () {
      function SectionTwoComponent() {
        _classCallCheck(this, SectionTwoComponent);
      }

      _createClass(SectionTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SectionTwoComponent;
    }();

    SectionTwoComponent.??fac = function SectionTwoComponent_Factory(t) {
      return new (t || SectionTwoComponent)();
    };

    SectionTwoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SectionTwoComponent,
      selectors: [["app-section-two"]],
      decls: 62,
      vars: 0,
      consts: [["id", "aboutcorona", 1, "two"], [1, "container-fluied", "m-5"], [1, "head1", "text-primary", "text-center"], [1, "row"], [1, "col-lg-8", "col-md-12", "col-sm-12"], [1, "none", "head2", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], [1, "none", "head3", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], [1, "none", "head4", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], [1, "none", "par", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], [1, "CARD", "col-lg-4", "col-md-12", "col-sm-12", "wow", "animate__bounceInUp"], [1, "tableheader", "text-center", "wow", "bounceInLeft"], [1, "tableheader", "text-primary", "wow", "bounceInRight"], ["href", ""], [1, "fa-solid", "fa-arrow-right", "arrows2"], [1, "tableheader", "text-primary", "wow", "bounceInLeft"]],
      template: function SectionTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "ABOUT THE DISEASE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "CORONAVIRUS (COVID-19)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "COVID-19 is a new illness that can affect your lungs and airways.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "It's caused by a virus called coronavirus. It was discovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " in December 2019 in Wuhan, Hubei, China.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratoryillness such as coughing and sneezing. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "What you need to know ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "How to protect yourself ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Symptoms of coronavirus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "How coronavirus is spread ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Treatment for coronavirus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Myth-Busters of coronavirus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Questions & answers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24tdHdvL3NlY3Rpb24tdHdvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SectionTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section-two',
          templateUrl: './section-two.component.html',
          styleUrls: ['./section-two.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/sec-one/sec-one.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sec-one/sec-one.component.ts ***!
    \*****************************************************/

  /*! exports provided: SecOneComponent */

  /***/
  function srcAppSharedSecOneSecOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecOneComponent", function () {
      return SecOneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SecOneComponent = /*#__PURE__*/function () {
      function SecOneComponent() {
        _classCallCheck(this, SecOneComponent);
      }

      _createClass(SecOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecOneComponent;
    }();

    SecOneComponent.??fac = function SecOneComponent_Factory(t) {
      return new (t || SecOneComponent)();
    };

    SecOneComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SecOneComponent,
      selectors: [["app-sec-one"]],
      decls: 80,
      vars: 0,
      consts: [[1, "one"], [1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-light"], ["href", "#", 1, "navbar-brand"], [1, "fa-solid", "fa-virus", 2, "color", "rgb(228, 59, 59)"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/secOne", 1, "nav-link"], ["routerLink", "/secTwo", 1, "nav-link"], ["routerLink", "/secThree", 1, "nav-link"], ["routerLink", "/secFive", 1, "nav-link"], ["routerLink", "/secSix", 1, "nav-link"], ["routerLink", "/secFour", 1, "nav-link"], ["routerLink", "#", 1, "nav-link"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "submit", 1, "btnnav", "btn", "btn-primary", "my-2", "my-sm-0"], [1, "container"], [1, "row"], [1, "ltr", "col-lg-6", "col-md-12", "col-sm-12", "wow", "animate__bounceInLeft"], [1, "corona", "col-lg-6", "col-md-12", "col-sm-12"], [1, "cv"], [1, "covid"], [1, "virus"], [1, "auto"], ["id", "autowrite"], [1, "btnstyle", "protect", "btn", "btn-primary", "col-lg-6", "col-md-12", "col-sm-12"], [1, "fas", "fa-shield-alt", "ml-3"], ["href", "#", 1, "aboutcorona", "col-lg-6", "col-md-12", "col-sm-12"], [1, "fa-solid", "fa-arrow-right"], [1, "number"], [1, "numword", "col-lg-3", "col-md-12", "col-sm-12"], [1, "nums"], [1, "rtl", "img", "col-lg-6", "col-md-12", "col-sm-12", "wow", "animate__bounceInRight"], ["src", "../../../assets/images/header-img.png"], [1, "arrow"], [1, "fa-solid", "fa-arrow-up"]],
      template: function SecOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "VID19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "About Corona");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Transition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Prevention");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Treatment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "FAQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "DO &DO'nt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "CORONA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h6", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " VIRUS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "How To Protect ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "About Covid-19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "WORLDWIDECASES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " 890000000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "DEATHS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " 498584500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "RECOVERED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " 46016509");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWMtb25lL3NlYy1vbmUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SecOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sec-one',
          templateUrl: './sec-one.component.html',
          styleUrls: ['./sec-one.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\s15 typescript\MyFirstAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map