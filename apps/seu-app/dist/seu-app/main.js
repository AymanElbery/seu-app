(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/PrintExample/print-file/print-file.component.css":
/*!******************************************************************!*\
  !*** ./src/app/PrintExample/print-file/print-file.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".printDiv {\r\n    page-break-after: always;\r\n   \r\n  \r\n  }\r\n  div {color:red}\r\n  .printDiv:last-child {\r\n    page-break-after: avoid;\r\n  }\r\n\r\n  \r\n  \r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJpbnRFeGFtcGxlL3ByaW50LWZpbGUvcHJpbnQtZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCOzs7RUFHMUI7RUFDQSxLQUFLLFNBQVM7RUFDZDtJQUNFLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL1ByaW50RXhhbXBsZS9wcmludC1maWxlL3ByaW50LWZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmludERpdiB7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XHJcbiAgIFxyXG4gIFxyXG4gIH1cclxuICBkaXYge2NvbG9yOnJlZH1cclxuICAucHJpbnREaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG5cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/PrintExample/print-file/print-file.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/PrintExample/print-file/print-file.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div style=\"font-size: xx-large\" class=\"printDiv\">HELP</div>\r\n<div class=\"printDiv\">\r\n  <h1>\r\n    Example Document\r\n  </h1>\r\n  <div>\r\n    <p  [class.isValid]=\"printService.isPrinting\" >\r\n      This is an example document that shows how to have a footer that repeats at the bottom of every page, but also isn't covered up by paragraph text.\r\n    </p>\r\n  </div>\r\n  <div>\r\n    <h3 >\r\n      Example Section I\r\n    </h3>\r\n    <p >\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.\r\n      \r\n      Pellentesque vitae augue sed purus dictum ultricies at eu neque. Nullam ut mauris a purus tristique euismod. Sed elementum, leo id placerat congue, leo tellus pharetra orci, eget ultricies odio quam sit amet ipsum. Praesent feugiat, lorem at commodo egestas, felis ligula pharetra sapien, in placerat mauris nisi aliquet tortor. Quisque nibh lectus, laoreet vel mollis a, tincidunt vel ipsum. Sed blandit vehicula sollicitudin. Donec et sapien justo. Ut fermentum ipsum imperdiet diam condimentum, eget varius sapien dictum. Sed sed elit egestas libero maximus finibus eu eget massa.\r\n      \r\n      Duis finibus vestibulum finibus. Nunc lobortis lacus ut libero mattis tempor. Nulla a nunc at nisl elementum congue. Nunc eu consectetur mauris. Etiam non placerat massa. Etiam eu urna in metus tempus molestie sed eget diam. Nunc sem velit, elementum sit amet fringilla in, dictum sit amet sem. Quisque convallis faucibus purus dignissim dictum. Sed semper, mi vel accumsan sollicitudin, massa massa pellentesque justo, eget auctor sapien enim ac elit.\r\n      \r\n      Nullam turpis augue, lacinia ut libero ac, rhoncus bibendum ligula. Mauris ullamcorper maximus turpis, a consequat turpis bibendum sit amet. Nam vitae dui nec velit hendrerit faucibus. Vivamus nunc diam, porta tristique augue nec, dignissim venenatis felis. Proin mattis id risus in feugiat. Etiam cursus faucibus nisi. In in nisi ullamcorper, convallis lectus et, ornare nulla. Cras tristique nulla eros, non maximus odio imperdiet eu. Nullam egestas dignissim est, et fringilla odio pretium eleifend. Nullam tincidunt sapien fermentum, rhoncus risus ac, ullamcorper libero. Vestibulum bibendum molestie dui nec tincidunt. Mauris tempus, orci ut congue vulputate, erat orci aliquam orci, sed eleifend orci dui sed tellus. Pellentesque pellentesque massa vulputate urna pretium, consectetur pulvinar orci pulvinar.\r\n      \r\n      Donec aliquet imperdiet ex, et tincidunt risus convallis eget. Etiam eu fermentum lectus, molestie eleifend nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam dignissim, erat vitae congue molestie, ante urna sagittis est, et sagittis lacus risus vitae est. Sed elementum ipsum et pellentesque dignissim. Sed vehicula feugiat pretium. Donec ex lacus, dictum faucibus lectus sit amet, tempus hendrerit ante. Ut sollicitudin sodales metus, at placerat risus viverra ut.\r\n      \r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.\r\n      \r\n      Duis finibus vestibulum finibus. Nunc lobortis lacus ut libero mattis tempor. Nulla a nunc at nisl elementum congue. Nunc eu consectetur mauris. Etiam non placerat massa. Etiam eu urna in metus tempus molestie sed eget diam. Nunc sem velit, elementum sit amet fringilla in, dictum sit amet sem. Quisque convallis faucibus purus dignissim dictum. Sed semper, mi vel accumsan sollicitudin, massa massa pellentesque justo, eget auctor sapien enim ac elit.\r\n      \r\n      Nullam turpis augue, lacinia ut libero ac, rhoncus bibendum ligula. Mauris ullamcorper maximus turpis, a consequat turpis bibendum sit amet. Nam vitae dui nec velit hendrerit faucibus. Vivamus nunc diam, porta tristique augue nec, dignissim venenatis felis. Proin mattis id risus in feugiat. Etiam cursus faucibus nisi. In in nisi ullamcorper, convallis lectus et, ornare nulla. Cras tristique nulla eros, non maximus odio imperdiet eu. Nullam egestas dignissim est, et fringilla odio pretium eleifend. Nullam tincidunt sapien fermentum, rhoncus risus ac, ullamcorper libero.\r\n    </p>\r\n  </div>\r\n  <br/><br/><br/><br/>\r\n  <div class=\"content-block\">\r\n    <h3>Example Section II</h3>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus sit amet urna lobortis sollicitudin. Nulla mattis purus porta lorem tempor, a cursus tellus facilisis. Aliquam pretium nibh vitae elit placerat vestibulum. Duis felis ipsum, consectetur id pellentesque in, porta sit amet sapien. Ut tristique enim sem, laoreet bibendum nisl fermentum vitae. Ut aliquet sem ac lorem malesuada sodales. Fusce iaculis ipsum ex, in mollis dolor dapibus sit amet. In convallis felis in orci fermentum gravida a vel orci. Sed tincidunt porta nibh sit amet varius. Donec et odio eget odio tempus auctor ac eget ex.\r\n      \r\n      Pellentesque vitae augue sed purus dictum ultricies at eu neque. Nullam ut mauris a purus tristique euismod. Sed elementum, leo id placerat congue, leo tellus pharetra orci, eget ultricies odio quam sit amet ipsum. Praesent feugiat, lorem at commodo egestas, felis ligula pharetra sapien, in placerat mauris nisi aliquet tortor. Quisque nibh lectus, laoreet vel mollis a, tincidunt vel ipsum. Sed blandit vehicula sollicitudin. Donec et sapien justo. Ut fermentum ipsum imperdiet diam condimentum, eget varius sapien dictum. Sed sed elit egestas libero maximus finibus eu eget massa.\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/PrintExample/print-file/print-file.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/PrintExample/print-file/print-file.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrintFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintFileComponent", function() { return PrintFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/print.service */ "./src/app/shared/services/print.service.ts");




var PrintFileComponent = /** @class */ (function () {
    function PrintFileComponent(route, printService) {
        this.printService = printService;
        alert('p');
        console.log(route.snapshot.params.paramData);
        this.paramIds = route.snapshot.params.paramData
            .split(',');
        alert(this.paramIds);
    }
    PrintFileComponent.prototype.ngOnInit = function () {
        alert('h');
        // this.dataDetails = this.paramIds
        //   .map(id => this.getDetails(id));
        // Promise.all(this.dataDetails)
        //   .then(() => this.printService.onDataReady());
        this.printService.onDataReady();
    };
    PrintFileComponent.prototype.getDetails = function (invoiceId) {
        var amount = Math.floor((Math.random() * 100));
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve({ amount: amount }); }, 1000);
        });
    };
    PrintFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-print-file',
            template: __webpack_require__(/*! ./print-file.component.html */ "./src/app/PrintExample/print-file/print-file.component.html"),
            styles: [__webpack_require__(/*! ./print-file.component.css */ "./src/app/PrintExample/print-file/print-file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shared_services_print_service__WEBPACK_IMPORTED_MODULE_3__["PrintService"]])
    ], PrintFileComponent);
    return PrintFileComponent;
}());



/***/ }),

/***/ "./src/app/PrintExample/print-layout/print-layout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/PrintExample/print-layout/print-layout.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header, .header-space,\r\n.footer, .footer-space { height: 100px; }\r\n.header { position: fixed; top: 0; }\r\n.footer { position: fixed; bottom: 0; }\r\n@media screen {\r\n  :host {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJpbnRFeGFtcGxlL3ByaW50LWxheW91dC9wcmludC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTt5QkFDeUIsYUFBYSxFQUFFO0FBQ3hDLFVBQVUsZUFBZSxFQUFFLE1BQU0sRUFBRTtBQUNuQyxVQUFVLGVBQWUsRUFBRSxTQUFTLEVBQUU7QUFFdEM7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvUHJpbnRFeGFtcGxlL3ByaW50LWxheW91dC9wcmludC1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIsIC5oZWFkZXItc3BhY2UsXHJcbi5mb290ZXIsIC5mb290ZXItc3BhY2UgeyBoZWlnaHQ6IDEwMHB4OyB9XHJcbi5oZWFkZXIgeyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgfVxyXG4uZm9vdGVyIHsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDA7IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/PrintExample/print-layout/print-layout.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/PrintExample/print-layout/print-layout.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\r\n  <thead><tr><td>\r\n    <div class=\"header-space\"></div>\r\n  </td></tr></thead>\r\n  <tbody><tr><td>\r\n    <div class=\"content\">\r\n      <router-outlet>\r\n        \r\n      </router-outlet>\r\n    </div>\r\n  </td></tr></tbody>\r\n  <tfoot><tr><td>\r\n    <div class=\"footer-space\"></div>\r\n  </td></tr></tfoot>\r\n</table>\r\n\r\n<div class=\"header\">  HEADER HEADERHEADER   HEADER  HEADER  HEADER HEADER HEADER</div>\r\n<div class=\"footer\"> FOOTER FOOTERFOOTER FOOTER FOOTER FOOTER FOOTER </div>\r\n"

/***/ }),

/***/ "./src/app/PrintExample/print-layout/print-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/PrintExample/print-layout/print-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrintLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintLayoutComponent", function() { return PrintLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrintLayoutComponent = /** @class */ (function () {
    function PrintLayoutComponent() {
    }
    PrintLayoutComponent.prototype.ngOnInit = function () {
    };
    PrintLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-print-layout',
            template: __webpack_require__(/*! ./print-layout.component.html */ "./src/app/PrintExample/print-layout/print-layout.component.html"),
            styles: [__webpack_require__(/*! ./print-layout.component.css */ "./src/app/PrintExample/print-layout/print-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrintLayoutComponent);
    return PrintLayoutComponent;
}());



/***/ }),

/***/ "./src/app/academicaff/academic-record/academic-record.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/academicaff/academic-record/academic-record.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljYWZmL2FjYWRlbWljLXJlY29yZC9hY2FkZW1pYy1yZWNvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicaff/academic-record/academic-record.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/academicaff/academic-record/academic-record.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"padding-top:0\">\r\n               \r\n    <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\r\n    \r\n                            \r\n  <section class=\"service-single\">\r\n\r\n      <div class=\"container\">\r\n              <h3> سجل الطالب الأكاديمي </h3>\r\n           <div class=\"row\">\r\n              <div class=\" col-md-5\">\r\n                <p>  سجل الطالب الأكاديمي سجل الطالب الأكاديمي سجل الطالب الأكاديمي سجل الطالب الأكاديمي</p>\r\n               </div>\r\n              <div class=\" col-md-6 descr\">\r\n                <span>مدة الإنجاز : <span class=\"badge\">3 يوم</span> </span>\r\n                  &nbsp; &nbsp; &nbsp; &nbsp;\r\n                  <a href=\"#\"><i class=\"ik ik-download\"></i> </a>\r\n                  <a href=\"#\"><i class=\"ik ik-film\"></i></a>\r\n              </div>\r\n          </div>\r\n          </div>\r\n       </section>\r\n       \r\n       <div class=\" stu-name col-md-4 col-sm-12 \">\r\n        <div class=\"state\">\r\n           <h5> <span>اسم الطالب : </span>{{recoredData.student_name}}  </h5> \r\n        </div>\r\n   </div>\r\n               \r\n   <section  class=\"ser-state\">\r\n     \r\n    <div class=\"container\">\r\n         <div class=\"row ser-block\">\r\n            <div class=\"col-md-4 col-sm-12\">\r\n                  <div class=\"state\">\r\n                     <h6>الكلية</h6>\r\n                     <h5> {{recoredData.coll}} </h5>\r\n                  </div>\r\n                    <div class=\"progress progress-sm\">\r\n                        <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                    </div>\r\n            </div>\r\n              <div class=\" col-md-4 col-sm-12\">\r\n                  <div class=\"state\">\r\n                     <h6>التخصص </h6>\r\n                     <h5> {{recoredData.major}} </h5>\r\n                  </div>\r\n                    <div class=\"progress progress-sm\">\r\n                        <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                    </div>\r\n         </div>\r\n             <div class=\" col-md-4 col-sm-12\">\r\n                  <div class=\"state\">\r\n                     <h6>الرقم الجامعي\t </h6>\r\n                     <h5>{{recoredData.std_id}} </h5>\r\n                  </div>\r\n                    <div class=\"progress progress-sm\">\r\n                        <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                    </div>\r\n            </div>\r\n            \r\n        </div>\r\n        \r\n        <div class=\"row ser-block\">\r\n            <div class=\" col-md-4 col-sm-12\">\r\n                  <div class=\"state\">\r\n                     <h6>رقم الهوية </h6>\r\n                     <h5>{{recoredData.ssn}} </h5>\r\n                  </div>\r\n                    <div class=\"progress progress-sm\">\r\n                        <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                    </div>\r\n            </div>\r\n         <div class=\" col-md-4 col-sm-12\">\r\n                  <div class=\"state\">\r\n                     <h6>الدرجة\t</h6>\r\n                     <h5>{{recoredData.grade}} </h5>\r\n                  </div>\r\n                    <div class=\"progress progress-sm\">\r\n                        <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                    </div>\r\n         </div>\r\n         <div class=\" col-md-4 col-sm-12\">\r\n                  <div class=\"state\">\r\n                     <h6>حالة الطالب</h6>\r\n                     <h5>{{recoredData.status}} </h5>\r\n                  </div>\r\n                    <div class=\"progress progress-sm\">\r\n                        <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                    </div>\r\n          </div>\r\n         \r\n        </div>\r\n       \r\n     </div>\r\n </section>\r\n       \r\n\r\n\r\n\r\n<div class=\"accordion\"   id=\"accordionExample\">\r\n  <div  *ngFor=\"let item of recoredData.terms ; let i = index\">\r\n      <div class=\"card \" >\r\n          <div class=\"card-header\" id=\"heading{{i}}\">\r\n            <h2 class=\"mb-0\">\r\n              <button class=\"btn btn-link btn-block\" type=\"button\" data-toggle=\"collapse\"  [attr.data-target]=\"'#collapse'+i\" aria-expanded=\"false\" [attr.aria-controls]=\"'collapse'+i\">\r\n    <b>    الفصل {{item.Term}} لسنة {{item.Year}} </b> \r\n       </button>\r\n            </h2>\r\n          </div>\r\n      \r\n          <div id=\"collapse{{i}}\" class=\"collapse\" [attr.aria-labelledby]=\"'heading'+i\" data-parent=\"#accordionExample\">\r\n            <div class=\"container\">\r\n              <div class=\"back\">\r\n          <div class=\"row ser-block\">\r\n                  <div class=\"col-md-3 col-sm-12 \">\r\n                    <div class=\"state\">\r\n                       <h6>الفصل</h6>\r\n                       <h5> {{item.Term}} </h5>\r\n                      <div class=\"progress progress-sm\">\r\n                          <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                 <div class=\" col-md-3 col-sm-12 \">\r\n                    <div class=\"state\">\r\n                       <h6>العام</h6>\r\n                       <h5>{{item.Year}} </h5>\r\n                      <div class=\"progress progress-sm\">\r\n                          <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                      </div>\r\n                      </div>\r\n                </div>\r\n                <div class=\" col-md-3 col-sm-12 \">\r\n                    <div class=\"state\">\r\n                       <h6>التخصص</h6>\r\n                       <h5> {{item.Major}} </h5>\r\n                      <div class=\"progress progress-sm\">\r\n                          <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                      </div>\r\n                       </div>\r\n                  </div>\r\n                <div class=\" col-md-3 col-sm-12 \">\r\n                    <div class=\"state\">\r\n                       <h6>الحالة</h6>\r\n                       <h5>{{item.Status}}  </h5>\r\n                      <div class=\"progress progress-sm\">\r\n                          <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                      </div>\r\n                       </div>\r\n                  </div>\r\n              </div>\r\n                  \r\n            \r\n              <div class=\"table-responsive\">\r\n              \r\n \r\n                  <table class=\"table table-striped table-bordered\">\r\n                      <thead style=\"background: #e6e6e6\">\r\n                            <tr>\r\n                              <th scope=\"col\">رمز المقرر</th>\r\n                              <th scope=\"col\">اسم المقرر</th>\r\n                              <th scope=\"col\">التقدير</th>\r\n                              <th scope=\"col\">الساعات</th>\r\n                              <th scope=\"col\">النقاط</th>\r\n\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let it of item.courses\">\r\n                              <td >{{it.ID}}</td>\r\n                              <td>{{it.CRSE_TITLE}}</td>\r\n                              <td>{{it.GRADE_TITLE}}</td>\r\n                              <td>{{it.HRS}}</td>\r\n                              <td>{{it.Points}}</td>\r\n\r\n                            </tr>\r\n                           \r\n                          </tbody>\r\n                        </table>\r\n                        </div>\r\n                        <div class=\"table-responsive\">\r\n              \r\n \r\n                            <table class=\"table table-striped table-bordered\">\r\n                                <thead style=\"background: #e6e6e6\">\r\n                              <tr>\r\n                                <th scope=\"col\">ساعات </th>\r\n                                <th scope=\"col\">مسجلة </th>\r\n                                <th scope=\"col\">نجاح</th>\r\n                                <th scope=\"col\">مكتسبة</th>\r\n                                <th scope=\"col\">النقاط</th>\r\n                                <th scope=\"col\">المعدل</th>\r\n  \r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <th scope=\"row\">فصلي</th>\r\n                              <td>{{item.registredHours}}</td>\r\n                              <td>{{item.gpa_hours}}</td>\r\n                              <td>{{item.earned_hours}}</td>\r\n                              <td>{{item.quality_points}}</td>\r\n                              <td>{{item.gpa}}</td>\r\n  <tr>\r\n                              <th scope=\"row\">تراكمي</th>\r\n                              <td>{{item.TotalregistredHours}}</td>\r\n                              <td>{{item.total_gpa_hours}}</td>\r\n                              <td>{{item.total_earned_hours}}</td>\r\n                              <td>{{item.total_quality_points}}</td>\r\n                              <td>{{item.total_gpa}}</td>  \r\n                            </tr>\r\n                            </tbody></table>\r\n            \r\n          \r\n              \r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n  </div>\r\n  </div>\r\n  <div  class=\"btn-group btn-group-justified col-md-12 \">\r\n      <div class=\"col-md-4\"></div>\r\n      <a class=\"btn btn-primary\" href=\"{{arabicPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n        طباعة</a>\r\n      <a class=\"btn btn-primary\" href=\"{{EngPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n        Print</a>\r\n      <div class=\"col-md-4\"></div>\r\n    \r\n      </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/academicaff/academic-record/academic-record.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/academicaff/academic-record/academic-record.component.ts ***!
  \**************************************************************************/
/*! exports provided: AcademicRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicRecordComponent", function() { return AcademicRecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_academic_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/academic-record.service */ "./src/app/academicaff/services/academic-record.service.ts");



var AcademicRecordComponent = /** @class */ (function () {
    function AcademicRecordComponent(academicService) {
        this.academicService = academicService;
    }
    AcademicRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.academicService.getِAcademicRecord().then(function (res) {
            _this.recoredData = res.data;
        });
        this.arabicPrint = this.academicService.Download();
        this.EngPrint = this.academicService.DownloadEng();
    };
    AcademicRecordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-record',
            template: __webpack_require__(/*! ./academic-record.component.html */ "./src/app/academicaff/academic-record/academic-record.component.html"),
            styles: [__webpack_require__(/*! ./academic-record.component.css */ "./src/app/academicaff/academic-record/academic-record.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_academic_record_service__WEBPACK_IMPORTED_MODULE_2__["AcademicRecordService"]])
    ], AcademicRecordComponent);
    return AcademicRecordComponent;
}());



/***/ }),

/***/ "./src/app/academicaff/academic-status/academic-status.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/academicaff/academic-status/academic-status.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljYWZmL2FjYWRlbWljLXN0YXR1cy9hY2FkZW1pYy1zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicaff/academic-status/academic-status.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/academicaff/academic-status/academic-status.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"main-content\" style=\"padding-top:0;\">\r\n          <mat-spinner  *ngIf=\"isLoading\" style=\"position: absolute;z-index: 10000;; margin: auto; top: 0; right: 0;  bottom: 0;left: 0; width: 10px; height: 10px;\"></mat-spinner>\r\n\r\n        <section class=\"service-single\">\r\n            <div class=\"container\">\r\n                    <h3> الحالة الأكاديمية </h3>\r\n                 <div class=\"row\">\r\n                    <div class=\" col-md-5\">\r\n                      <p> </p>\r\n                     </div>\r\n                    <div class=\" col-md-6 descr\">\r\n                      <span>مدة الإنجاز : <span class=\"badge\">3 يوم</span> </span>\r\n                        &nbsp; &nbsp; &nbsp; &nbsp;\r\n                        <a href=\"{{arabicPrint}}\"><i class=\"ik ik-download\"></i> </a>\r\n                        <a href=\"#\"><i class=\"ik ik-film\"></i></a>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n             </section>\r\n                    \r\n        <section  class=\"ser-state\">\r\n            <div class=\"container\">\r\n                 <div class=\"row ser-block\">\r\n                    <div class=\" col-md-4 col-sm-12\">\r\n                          <div class=\"state\">\r\n                             <h6>اسم الطالب / الطالبة </h6>\r\n                             <h5>{{student.name}} </h5>\r\n                          </div>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                            </div>\r\n                    </div>\r\n                     <div class=\" col-md-4 col-sm-12\">\r\n                          <div class=\"state\">\r\n                             <h6>الرقم الجامعي\t </h6>\r\n                             <h5>{{student.std_id}} </h5>\r\n                          </div>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\" col-md-4 col-sm-12\">\r\n                          <div class=\"state\">\r\n                             <h6>رقم الهوية </h6>\r\n                             <h5>{{student.ssn}} </h5>\r\n                          </div>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"row ser-block\">\r\n                 <div class=\" col-md-4 col-sm-12\">\r\n                          <div class=\"state\">\r\n                             <h6>فصل القبول\t</h6>\r\n                             <h5>{{student.std_adm_term_label}} </h5>\r\n                          </div>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                            </div>\r\n                 </div>\r\n                 <div class=\" col-md-4 col-sm-12\">\r\n                          <div class=\"state\">\r\n                             <h6>الحالة الأكاديمية الحالية\t</h6>\r\n                             <h5>{{student.current_acadimic_status_label}} </h5>\r\n                          </div>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                            </div>\r\n                  </div>\r\n                  <div class=\" col-md-4 col-sm-12\">\r\n                          <div class=\"state\">\r\n                             <h6>المعدل التراكمي النهائي </h6>\r\n                             <h5>{{student.final_graduation_GPA}} </h5>\r\n                          </div>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                            </div>\r\n                 </div>\r\n                </div>\r\n                \r\n                <div class=\"row  ser-block\">\r\n                 <div class=\" col-md-4 col-sm-12\">\r\n                          <div class=\"state\">\r\n                             <h6>الوضع الأكاديمي</h6>\r\n                             <h5> {{student.acadimic_position_label}}</h5>\r\n                          </div>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                            </div>\r\n                </div>\r\n                 <div class=\" col-md-4 col-sm-12\">\r\n                          <div class=\"state\">\r\n                             <h6>الرسوم الدراسية\t</h6>\r\n                             <h5>{{student.std_fees}} </h5>\r\n                          </div>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                            </div>\r\n                 </div>\r\n                </div>\r\n             </div>\r\n         </section>\r\n                 \r\n                    \r\n         <section  class=\"ser-state\">\r\n            <div class=\"container\">\r\n                <div class=\"widget\">\r\n                    <div class=\"widget-header\" >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                       <h3 class=\"widget-title\" style=\"font-size:12px;text-align: right\">الحالة الأكاديمية للطالب خلال الفصول الدراسية  </h3>\r\n                      </div>\r\n                     <div class=\"col-md-6\">\r\n                      <div class=\"form-group row\">\r\n                        <label for=\"\" class=\"col-sm-3 col-form-label\">الفصل الدراسي </label>\r\n                        <div class=\"col-sm-9\">\r\n                           \r\n                          <select name=\"trems\" [(ngModel)]=\"selectedSems\" #t (change)=\"getTrmsDetails(t.value)\"   class=\"form-control\">\r\n                            <option *ngFor=\"let item of studentTerms\" value=\"{{item.TERM_CODE}}\">{{item.TERM_DESC}}</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                     </div>\r\n                    </div>\r\n                    </div>\r\n                     <div class=\"row ser-block\">\r\n                        <div class=\"col-md-4 col-sm-12 \">\r\n                          <div class=\"state\">\r\n                             <h6>الكلية</h6>\r\n                             <h5> {{studentTermDetails.COLL_CODE}} </h5>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                       <div class=\" col-md-4 col-sm-12 \">\r\n                          <div class=\"state\">\r\n                             <h6>التخصص</h6>\r\n                             <h5> {{studentTermDetails.MAJR_code}}</h5>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                            </div>\r\n                            </div>\r\n                      </div>\r\n                      <div class=\" col-md-4 col-sm-12 \">\r\n                          <div class=\"state\">\r\n                             <h6>الفرع</h6>\r\n                             <h5> {{studentTermDetails.CAMP_code}}</h5>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                            </div>\r\n                             </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                     <div class=\"row ser-block\">\r\n                        <div class=\"col-md-4 col-sm-12 \">\r\n                          <div class=\"state\">\r\n                             <h6>المعدل التراكمي\t</h6>\r\n                             <h5>{{studentTermDetails.gba}}</h5>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                       <div class=\" col-md-4 col-sm-12 \">\r\n                          <div class=\"state\">\r\n                             <h6>حالة التسجيل\t</h6>\r\n                             <h5> {{studentTermDetails.RegisterationStatus}}</h5>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                            </div>\r\n                            </div>\r\n                      </div>\r\n                      <div class=\" col-md-4 col-sm-12 \">\r\n                          <div class=\"state\">\r\n                             <h6>المستوي الدراسي</h6>\r\n                             <h5>{{studentTermDetails.study_level}} </h5>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                            </div>\r\n                             </div>\r\n                        </div>\r\n                    </div>\r\n                 \r\n                    \r\n                     <div class=\"row ser-block\">\r\n                        <div class=\"col-md-4 col-sm-12 \">\r\n                          <div class=\"state\">\r\n                             <h6>الحالة الأكاديمية</h6>\r\n                             <h5>{{studentTermDetails.acadimic_status}}  </h5>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                       <div class=\" col-md-4 col-sm-12 \">\r\n                          <div class=\"state\">\r\n                             <h6>الوضع الأكاديمي\t</h6>\r\n                             <h5>{{studentTermDetails.ACADIMICPOSITION}}</h5>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                            </div>\r\n                            </div>\r\n                      </div>\r\n                      <div class=\" col-md-4 col-sm-12 \">\r\n                          <div class=\"state\">\r\n                             <h6>المرحلة الدراسية</h6>\r\n                             <h5> {{studentTermDetails.STD_UGGR}}</h5>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 10%;\"></div>\r\n                            </div>\r\n                             </div>\r\n                        </div>\r\n                    </div>\r\n                 \r\n                 \r\n                </div>\r\n               </div>\r\n              </section>\r\n                \r\n                  <div style=\"text-align: center\" class=\"prin\">\r\n                        <a class=\"btn\"  href=\"{{arabicPrint}}\">عربي <i class=\"ik ik-save\"></i> </a>\r\n                        <a class=\"btn\"  href=\"{{EngPrint}}\">  <i class=\"ik ik-save\"></i> English  </a>\r\n                     </div>\r\n                    \r\n                  \r\n                          \r\n      </div>\r\n     \r\n       \r\n"

/***/ }),

/***/ "./src/app/academicaff/academic-status/academic-status.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/academicaff/academic-status/academic-status.component.ts ***!
  \**************************************************************************/
/*! exports provided: AcademicStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicStatusComponent", function() { return AcademicStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_academic_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/academic-status.service */ "./src/app/academicaff/services/academic-status.service.ts");



var AcademicStatusComponent = /** @class */ (function () {
    function AcademicStatusComponent(academicStatusService) {
        this.academicStatusService = academicStatusService;
        this.isLoading = false;
    }
    AcademicStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.academicStatusService.getStaudentStatus().then(function (res) {
            _this.student = res.data.student;
            _this.studentTerms = res.data.STD_TERMS;
            _this.studentTermDetails = res.data.STD_TermDetails;
            console.log(_this.studentTermDetails);
            _this.selectedSems = _this.studentTerms[0].TERM_CODE;
            _this.arabicPrint = _this.academicStatusService.DownloadStatus(_this.selectedSems);
            _this.EngPrint = _this.academicStatusService.DownloadEngStatus(_this.selectedSems);
            _this.isLoading = false;
        });
    };
    AcademicStatusComponent.prototype.getTrmsDetails = function (val) {
        var _this = this;
        this.isLoading = true;
        this.arabicPrint = this.academicStatusService.DownloadStatus(this.selectedSems);
        this.EngPrint = this.academicStatusService.DownloadEngStatus(this.selectedSems);
        this.academicStatusService.getStaudentTermDetails(parseInt(val, 10)).then(function (res) {
            _this.studentTermDetails = res.data.STD_TermDetails;
            _this.isLoading = false;
        });
    };
    AcademicStatusComponent.prototype.downlaodFile = function () {
        window.open('http://seuapps.seu.edu.sa/stdservicesapi/academic_status/academic_status_print', 'MsgWindow', 'width=200,height=100');
    };
    AcademicStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-status',
            template: __webpack_require__(/*! ./academic-status.component.html */ "./src/app/academicaff/academic-status/academic-status.component.html"),
            styles: [__webpack_require__(/*! ./academic-status.component.css */ "./src/app/academicaff/academic-status/academic-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_academic_status_service__WEBPACK_IMPORTED_MODULE_2__["AcademicStatusService"]])
    ], AcademicStatusComponent);
    return AcademicStatusComponent;
}());



/***/ }),

/***/ "./src/app/academicaff/academicaff-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/academicaff/academicaff-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AcademicaffRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicaffRoutingModule", function() { return AcademicaffRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _academic_status_academic_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academic-status/academic-status.component */ "./src/app/academicaff/academic-status/academic-status.component.ts");
/* harmony import */ var _certificate_id_certificate_id_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certificate-id/certificate-id.component */ "./src/app/academicaff/certificate-id/certificate-id.component.ts");
/* harmony import */ var _academic_record_academic_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./academic-record/academic-record.component */ "./src/app/academicaff/academic-record/academic-record.component.ts");






var routes = [
    { path: 'academicaff', component: _academic_status_academic_status_component__WEBPACK_IMPORTED_MODULE_3__["AcademicStatusComponent"] },
    {
        path: 'academicaff',
        children: [
            { path: 'status', component: _academic_status_academic_status_component__WEBPACK_IMPORTED_MODULE_3__["AcademicStatusComponent"] },
            { path: 'certificate', component: _certificate_id_certificate_id_component__WEBPACK_IMPORTED_MODULE_4__["CertificateIDComponent"] },
            { path: 'record', component: _academic_record_academic_record_component__WEBPACK_IMPORTED_MODULE_5__["AcademicRecordComponent"] },
        ]
    }
];
var AcademicaffRoutingModule = /** @class */ (function () {
    function AcademicaffRoutingModule() {
    }
    AcademicaffRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AcademicaffRoutingModule);
    return AcademicaffRoutingModule;
}());



/***/ }),

/***/ "./src/app/academicaff/academicaff.module.ts":
/*!***************************************************!*\
  !*** ./src/app/academicaff/academicaff.module.ts ***!
  \***************************************************/
/*! exports provided: AcademicaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicaffModule", function() { return AcademicaffModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _academicaff_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academicaff-routing.module */ "./src/app/academicaff/academicaff-routing.module.ts");
/* harmony import */ var _academic_status_academic_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academic-status/academic-status.component */ "./src/app/academicaff/academic-status/academic-status.component.ts");
/* harmony import */ var _certificate_id_certificate_id_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certificate-id/certificate-id.component */ "./src/app/academicaff/certificate-id/certificate-id.component.ts");
/* harmony import */ var _academic_record_academic_record_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./academic-record/academic-record.component */ "./src/app/academicaff/academic-record/academic-record.component.ts");
/* harmony import */ var _services_academic_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/academic-status.service */ "./src/app/academicaff/services/academic-status.service.ts");
/* harmony import */ var _certificate_id_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./certificate-id.service */ "./src/app/academicaff/certificate-id.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_academic_record_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/academic-record.service */ "./src/app/academicaff/services/academic-record.service.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");












var AcademicaffModule = /** @class */ (function () {
    function AcademicaffModule() {
    }
    AcademicaffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_academic_status_academic_status_component__WEBPACK_IMPORTED_MODULE_4__["AcademicStatusComponent"], _certificate_id_certificate_id_component__WEBPACK_IMPORTED_MODULE_5__["CertificateIDComponent"], _academic_record_academic_record_component__WEBPACK_IMPORTED_MODULE_6__["AcademicRecordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _academicaff_routing_module__WEBPACK_IMPORTED_MODULE_3__["AcademicaffRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]
            ],
            providers: [_services_academic_status_service__WEBPACK_IMPORTED_MODULE_7__["AcademicStatusService"], _certificate_id_service__WEBPACK_IMPORTED_MODULE_8__["CertificateIDService"], _services_academic_record_service__WEBPACK_IMPORTED_MODULE_10__["AcademicRecordService"]]
        })
    ], AcademicaffModule);
    return AcademicaffModule;
}());



/***/ }),

/***/ "./src/app/academicaff/certificate-id.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/academicaff/certificate-id.service.ts ***!
  \*******************************************************/
/*! exports provided: CertificateIDService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateIDService", function() { return CertificateIDService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var CertificateIDService = /** @class */ (function () {
    function CertificateIDService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    CertificateIDService.prototype.getCertificateID = function () {
        return this.httRequest.GetRequest('/identification_crse/get_identification').toPromise();
    };
    CertificateIDService.prototype.DownloadCertificate = function () {
        return this.configService.getApiURI() + '/identification_crse/get_identification_print';
    };
    CertificateIDService.prototype.DownloadEngCertificate = function () {
        return this.configService.getApiURI() + '/identification_crse/get_identification_print?Lang=en';
    };
    CertificateIDService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], CertificateIDService);
    return CertificateIDService;
}());



/***/ }),

/***/ "./src/app/academicaff/certificate-id/certificate-id.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/academicaff/certificate-id/certificate-id.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljYWZmL2NlcnRpZmljYXRlLWlkL2NlcnRpZmljYXRlLWlkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicaff/certificate-id/certificate-id.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/academicaff/certificate-id/certificate-id.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"jumbotron jumbtron-fluid\">\r\n    <h3 class=\"display-5 text-center\">  شهادة تعريف</h3>\r\n<p style=\"text-align: center;direction: rtl\">\r\n\r\n<b>  {{certificateDetails.labels.date}} </b>  {{certificateDetails.values.date}}\r\n<b>  {{certificateDetails.labels.ssn}} </b>  {{certificateDetails.values.ssn}}\r\n<br>\r\n {{certificateDetails.labelngs.txt1}}   {{certificateDetails.values.std_name}}\r\n {{certificateDetails.labels.txt2}}   {{certificateDetails.values.std_id}}\r\n\r\n {{certificateDetails.labels.txt3}}   {{certificateDetails.values.coll}}\r\n\r\n {{certificateDetails.labels.txt4}}   {{certificateDetails.values.major}}\r\n <br/>\r\n\r\n\r\n {{certificateDetails.labels.txt5}}   {{certificateDetails.values.term}}\r\n\r\n {{certificateDetails.labels.txt6}}  \r\n\r\n {{certificateDetails.labels.txt7}}  \r\n <br/>\r\n <br/>\r\n\r\n <ng-template [ngIf]=\"lectures ==null\" [ngIfElse]=\"NoLec\">\r\n  <div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">{{certificateDetails.labels.crn}}</th>\r\n          <th scope=\"col\">{{certificateDetails.labels.course}}</th>\r\n          <th scope=\"col\">{{certificateDetails.labels.day_and_date}}</th>\r\n          <th scope=\"col\">{{certificateDetails.labels.time}}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of lectures\">\r\n          <td >{{item.CRN}}</td>\r\n          <td>{{item.CRSE_TITLE}}</td>\r\n          <td>{{item.CRSE_DAY}}</td>\r\n          <td>{{item.CRSE_TIME}}</td>\r\n        </tr>\r\n       \r\n      </tbody>\r\n    </table>  </div>\r\n    <br/>\r\n    \r\n\r\n</ng-template>\r\n\r\n<ng-template #NoLec>\r\n  <div>\r\n <b>{{certificateDetails.labels.txt8}}  </b>\r\n  </div>\r\n</ng-template>\r\n<br/><br/>\r\n{{certificateDetails.labels.txt9}}  <br/>\r\n{{certificateDetails.labels.txt10}}  \r\n<br/><br/>\r\n<b>\r\n{{certificateDetails.labels.txt11}}  \r\n</b>\r\n{{certificateDetails.labels.txt12}}  \r\n<br/>\r\n<br/>\r\n{{certificateDetails.labels.txt13}}  \r\n\r\n\r\n\r\n\r\n<br/><br/>\r\n\r\n\r\n</p>\r\n\r\n<div  class=\"btn-group btn-group-justified col-md-12 \">\r\n  <div class=\"col-md-4\"></div>\r\n  <a class=\"btn btn-primary\" href=\"{{arabicPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n    طباعة</a>\r\n  <a class=\"btn btn-primary\" href=\"{{EngPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n    Print</a>\r\n  <div class=\"col-md-4\"></div>\r\n\r\n  </div>\r\n</div>\r\n -->\r\n<div class=\"main-content\" style=\"padding-top:0;\">\r\n                    \r\n  <section class=\"service-single\">\r\n      <div class=\"container\">\r\n              <h3>شهادة تعريف</h3>\r\n           <div class=\"row\">\r\n              <div class=\" col-md-5\">\r\n                <p> شهادة تعريف شهادة تعريف شهادة تعريف </p>\r\n               </div>\r\n              <div class=\" col-md-6 descr\">\r\n                <span>مدة الإنجاز : <span class=\"badge\">3 يوم</span> </span>\r\n                  &nbsp; &nbsp; &nbsp; &nbsp;\r\n                  <a href=\"#\"><i class=\"ik ik-download\"></i> </a>\r\n                  <a href=\"#\"><i class=\"ik ik-film\"></i></a>\r\n              </div>\r\n          </div>\r\n          </div>\r\n       </section>\r\n              \r\n  <section  class=\"ser-state\">\r\n      <div class=\"container\">\r\n           <div class=\"row ser-block\">\r\n              <div class=\" col-md-6 col-sm-12\">\r\n                    <div class=\"state\">\r\n                       <h6> {{certificateDetails.labels.date}}  </h6>\r\n                       <h5> {{certificateDetails.values.date}}</h5>\r\n                    </div>\r\n                      <div class=\"progress progress-sm\">\r\n                          <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                      </div>\r\n              </div>\r\n               <div class=\" col-md-6 col-sm-12\">\r\n                    <div class=\"state\">\r\n                       <h6>{{certificateDetails.labels.ssn}} </h6>\r\n                       <h5>{{certificateDetails.values.ssn}}</h5>\r\n                    </div>\r\n                      <div class=\"progress progress-sm\">\r\n                          <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                      </div>\r\n              </div>\r\n              \r\n          </div>\r\n       </div>\r\n   </section>\r\n           <section  class=\"ser-state\">\r\n      <div class=\"container\">\r\n              <p>{{certificateDetails.labelngs.txt1}}   {{certificateDetails.values.std_name}}\r\n                {{certificateDetails.labels.txt2}}   {{certificateDetails.values.std_id}}\r\n               \r\n                {{certificateDetails.labels.txt3}}   {{certificateDetails.values.coll}}\r\n               \r\n                {{certificateDetails.labels.txt4}}   {{certificateDetails.values.major}}\r\n                <br/>\r\n               \r\n               \r\n                {{certificateDetails.labels.txt5}}   {{certificateDetails.values.term}}\r\n               \r\n                {{certificateDetails.labels.txt6}}  \r\n               \r\n                {{certificateDetails.labels.txt7}}  \r\n                <br/>\r\n                <br/> </p>\r\n                <ng-template [ngIf]=\"lectures ==null\" [ngIfElse]=\"NoLec\">\r\n                  <div>\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th scope=\"col\">{{certificateDetails.labels.crn}}</th>\r\n                          <th scope=\"col\">{{certificateDetails.labels.course}}</th>\r\n                          <th scope=\"col\">{{certificateDetails.labels.day_and_date}}</th>\r\n                          <th scope=\"col\">{{certificateDetails.labels.time}}</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let item of lectures\">\r\n                          <td >{{item.CRN}}</td>\r\n                          <td>{{item.CRSE_TITLE}}</td>\r\n                          <td>{{item.CRSE_DAY}}</td>\r\n                          <td>{{item.CRSE_TIME}}</td>\r\n                        </tr>\r\n                       \r\n                      </tbody>\r\n                    </table>  </div>\r\n                    <br/>\r\n                    \r\n                \r\n                </ng-template>\r\n                \r\n                <ng-template #NoLec>\r\n                  <div>\r\n                 <b>{{certificateDetails.labels.txt8}}  </b>\r\n                  </div>\r\n                </ng-template>\r\n                <br/><br/>\r\n                {{certificateDetails.labels.txt9}}  <br/>\r\n                {{certificateDetails.labels.txt10}}  \r\n                <br/><br/>\r\n                <b>\r\n                {{certificateDetails.labels.txt11}}  \r\n                </b>\r\n                {{certificateDetails.labels.txt12}}  \r\n                <br/>\r\n                <br/>\r\n                {{certificateDetails.labels.txt13}}  \r\n                \r\n                \r\n                \r\n                \r\n                <br/><br/>\r\n                \r\n                \r\n       </div>\r\n   </section>\r\n           \r\n\r\n          \r\n            <div style=\"text-align: center\" class=\"prin\">\r\n                  <button class=\"btn\">عربي <i class=\"ik ik-save\"></i> </button>\r\n                  <button class=\"btn\"> <i class=\"ik ik-save\"></i> English  </button>\r\n               </div>\r\n              \r\n            \r\n                    \r\n</div>"

/***/ }),

/***/ "./src/app/academicaff/certificate-id/certificate-id.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/academicaff/certificate-id/certificate-id.component.ts ***!
  \************************************************************************/
/*! exports provided: CertificateIDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateIDComponent", function() { return CertificateIDComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _certificate_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../certificate-id.service */ "./src/app/academicaff/certificate-id.service.ts");



var CertificateIDComponent = /** @class */ (function () {
    function CertificateIDComponent(certificateIDService) {
        this.certificateIDService = certificateIDService;
    }
    CertificateIDComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.arabicPrint = this.certificateIDService.DownloadCertificate();
        this.EngPrint = this.certificateIDService.DownloadEngCertificate();
        this.certificateIDService.getCertificateID().then(function (res) {
            _this.certificateDetails = (res).data;
            _this.lectures = (res).data.Lectures;
        });
    };
    CertificateIDComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certificate-id',
            template: __webpack_require__(/*! ./certificate-id.component.html */ "./src/app/academicaff/certificate-id/certificate-id.component.html"),
            styles: [__webpack_require__(/*! ./certificate-id.component.css */ "./src/app/academicaff/certificate-id/certificate-id.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_certificate_id_service__WEBPACK_IMPORTED_MODULE_2__["CertificateIDService"]])
    ], CertificateIDComponent);
    return CertificateIDComponent;
}());



/***/ }),

/***/ "./src/app/academicaff/services/academic-record.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/academicaff/services/academic-record.service.ts ***!
  \*****************************************************************/
/*! exports provided: AcademicRecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicRecordService", function() { return AcademicRecordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var AcademicRecordService = /** @class */ (function () {
    function AcademicRecordService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    AcademicRecordService.prototype.getِAcademicRecord = function () {
        return this.httRequest.GetRequest('academic_record_service/get_academic_record').toPromise();
    };
    AcademicRecordService.prototype.Download = function () {
        return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print';
    };
    AcademicRecordService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print?Lang=en';
    };
    AcademicRecordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], AcademicRecordService);
    return AcademicRecordService;
}());



/***/ }),

/***/ "./src/app/academicaff/services/academic-status.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/academicaff/services/academic-status.service.ts ***!
  \*****************************************************************/
/*! exports provided: AcademicStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicStatusService", function() { return AcademicStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var AcademicStatusService = /** @class */ (function () {
    function AcademicStatusService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    AcademicStatusService.prototype.getStaudentStatus = function () {
        return this.httRequest.GetRequest('/academic_status/get_status').toPromise();
    };
    AcademicStatusService.prototype.getStaudentTermDetails = function (code) {
        return this.httRequest.GetRequest('/academic_status/getTermDetails?TermCode=' + code).toPromise();
    };
    AcademicStatusService.prototype.DownloadStatus = function (code) {
        return this.configService.getApiURI() + '/academic_status/academic_status_print?TermCode' + code;
    };
    AcademicStatusService.prototype.DownloadEngStatus = function (code) {
        return this.configService.getApiURI() + '/academic_status/academic_status_print?Lang=en&TermCode' + code;
    };
    AcademicStatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], AcademicStatusService);
    return AcademicStatusService;
}());



/***/ }),

/***/ "./src/app/academicprocs/academicprocs-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/academicprocs/academicprocs-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AcademicprocsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicprocsRoutingModule", function() { return AcademicprocsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _withdraw_from_univ_withdraw_from_univ_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withdraw-from-univ/withdraw-from-univ.component */ "./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.ts");
/* harmony import */ var _postpone_request_postpone_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postpone-request/postpone-request.component */ "./src/app/academicprocs/postpone-request/postpone-request.component.ts");
/* harmony import */ var _summer_withdraw_summer_withdraw_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summer-withdraw/summer-withdraw.component */ "./src/app/academicprocs/summer-withdraw/summer-withdraw.component.ts");
/* harmony import */ var _cancel_course_cancel_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel-course/cancel-course.component */ "./src/app/academicprocs/cancel-course/cancel-course.component.ts");
/* harmony import */ var _execuse_request_execuse_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./execuse-request/execuse-request.component */ "./src/app/academicprocs/execuse-request/execuse-request.component.ts");
/* harmony import */ var _course_equalize_course_equalize_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-equalize/course-equalize.component */ "./src/app/academicprocs/course-equalize/course-equalize.component.ts");
/* harmony import */ var _english_equalize_english_equalize_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./english-equalize/english-equalize.component */ "./src/app/academicprocs/english-equalize/english-equalize.component.ts");
/* harmony import */ var _re_eenrollment_re_eenrollment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./re-eenrollment/re-eenrollment.component */ "./src/app/academicprocs/re-eenrollment/re-eenrollment.component.ts");
/* harmony import */ var _change_major_change_major_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./change-major/change-major.component */ "./src/app/academicprocs/change-major/change-major.component.ts");
/* harmony import */ var _change_request_change_request_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-request/change-request.component */ "./src/app/academicprocs/change-request/change-request.component.ts");
/* harmony import */ var _object_exam_object_exam_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object-exam/object-exam.component */ "./src/app/academicprocs/object-exam/object-exam.component.ts");
/* harmony import */ var _lectures_execuses_lectures_execuses_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lectures-execuses/lectures-execuses.component */ "./src/app/academicprocs/lectures-execuses/lectures-execuses.component.ts");
/* harmony import */ var _registeration_helper_registeration_helper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./registeration-helper/registeration-helper.component */ "./src/app/academicprocs/registeration-helper/registeration-helper.component.ts");
/* harmony import */ var _univ_card_univ_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./univ-card/univ-card.component */ "./src/app/academicprocs/univ-card/univ-card.component.ts");
/* harmony import */ var _exam_excuse_exam_excuse_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./exam-excuse/exam-excuse.component */ "./src/app/academicprocs/exam-excuse/exam-excuse.component.ts");
/* harmony import */ var _register_wishes_register_wishes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register-wishes/register-wishes.component */ "./src/app/academicprocs/register-wishes/register-wishes.component.ts");



















var routes = [{ path: 'procedures', component: _withdraw_from_univ_withdraw_from_univ_component__WEBPACK_IMPORTED_MODULE_3__["WithdrawFromUnivComponent"] },
    {
        path: 'procedures',
        children: [
            { path: 'withdrawuniv', component: _withdraw_from_univ_withdraw_from_univ_component__WEBPACK_IMPORTED_MODULE_3__["WithdrawFromUnivComponent"] },
            { path: 'postpone', component: _postpone_request_postpone_request_component__WEBPACK_IMPORTED_MODULE_4__["PostponeRequestComponent"] },
            { path: 'summer', component: _summer_withdraw_summer_withdraw_component__WEBPACK_IMPORTED_MODULE_5__["SummerWithdrawComponent"] },
            { path: 'cancelcourse', component: _cancel_course_cancel_course_component__WEBPACK_IMPORTED_MODULE_6__["CancelCourseComponent"] },
            { path: 'execuse', component: _execuse_request_execuse_request_component__WEBPACK_IMPORTED_MODULE_7__["ExecuseRequestComponent"] },
            { path: 'equalize', component: _course_equalize_course_equalize_component__WEBPACK_IMPORTED_MODULE_8__["CourseEqualizeComponent"] },
            { path: 'eequalize', component: _english_equalize_english_equalize_component__WEBPACK_IMPORTED_MODULE_9__["EnglishEqualizeComponent"] },
            { path: 'reenrol', component: _re_eenrollment_re_eenrollment_component__WEBPACK_IMPORTED_MODULE_10__["ReEenrollmentComponent"] },
            { path: 'changemajor', component: _change_major_change_major_component__WEBPACK_IMPORTED_MODULE_11__["ChangeMajorComponent"] },
            { path: 'changerequest', component: _change_request_change_request_component__WEBPACK_IMPORTED_MODULE_12__["ChangeRequestComponent"] },
            { path: 'objectexam', component: _object_exam_object_exam_component__WEBPACK_IMPORTED_MODULE_13__["ObjectExamComponent"] },
            { path: 'lecexecuse', component: _lectures_execuses_lectures_execuses_component__WEBPACK_IMPORTED_MODULE_14__["LecturesExecusesComponent"] },
            { path: 'reghelper', component: _registeration_helper_registeration_helper_component__WEBPACK_IMPORTED_MODULE_15__["RegisterationHelperComponent"] },
            { path: 'universitycard', component: _univ_card_univ_card_component__WEBPACK_IMPORTED_MODULE_16__["UnivCardComponent"] },
            { path: 'universitycard', component: _univ_card_univ_card_component__WEBPACK_IMPORTED_MODULE_16__["UnivCardComponent"] },
            { path: 'examexcuse', component: _exam_excuse_exam_excuse_component__WEBPACK_IMPORTED_MODULE_17__["ExamExcuseComponent"] },
            { path: 'universitycard', component: _univ_card_univ_card_component__WEBPACK_IMPORTED_MODULE_16__["UnivCardComponent"] },
            { path: 'registerwishes', component: _register_wishes_register_wishes_component__WEBPACK_IMPORTED_MODULE_18__["RegisterWishesComponent"] }
        ]
    }];
var AcademicprocsRoutingModule = /** @class */ (function () {
    function AcademicprocsRoutingModule() {
    }
    AcademicprocsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AcademicprocsRoutingModule);
    return AcademicprocsRoutingModule;
}());



/***/ }),

/***/ "./src/app/academicprocs/academicprocs.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/academicprocs/academicprocs.module.ts ***!
  \*******************************************************/
/*! exports provided: AcademicprocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicprocsModule", function() { return AcademicprocsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _academicprocs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academicprocs-routing.module */ "./src/app/academicprocs/academicprocs-routing.module.ts");
/* harmony import */ var _postpone_request_postpone_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postpone-request/postpone-request.component */ "./src/app/academicprocs/postpone-request/postpone-request.component.ts");
/* harmony import */ var _execuse_request_execuse_request_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./execuse-request/execuse-request.component */ "./src/app/academicprocs/execuse-request/execuse-request.component.ts");
/* harmony import */ var _summer_withdraw_summer_withdraw_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summer-withdraw/summer-withdraw.component */ "./src/app/academicprocs/summer-withdraw/summer-withdraw.component.ts");
/* harmony import */ var _re_eenrollment_re_eenrollment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./re-eenrollment/re-eenrollment.component */ "./src/app/academicprocs/re-eenrollment/re-eenrollment.component.ts");
/* harmony import */ var _except_semester_except_semester_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./except-semester/except-semester.component */ "./src/app/academicprocs/except-semester/except-semester.component.ts");
/* harmony import */ var _change_request_change_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-request/change-request.component */ "./src/app/academicprocs/change-request/change-request.component.ts");
/* harmony import */ var _cancel_course_cancel_course_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cancel-course/cancel-course.component */ "./src/app/academicprocs/cancel-course/cancel-course.component.ts");
/* harmony import */ var _withdraw_from_univ_withdraw_from_univ_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./withdraw-from-univ/withdraw-from-univ.component */ "./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.ts");
/* harmony import */ var _services_withdraw_from_univ_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/withdraw-from-univ.service */ "./src/app/academicprocs/services/withdraw-from-univ.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _withdraw_from_univ_diag_add_request_add_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./withdraw-from-univ/diag/add-request/add-request.component */ "./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_directives_hr_minute_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/directives/hr-minute.directive */ "./src/app/shared/directives/hr-minute.directive.ts");
/* harmony import */ var _shared_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/components/timer/timer.component */ "./src/app/shared/components/timer/timer.component.ts");
/* harmony import */ var _services_term_postpone_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/term-postpone.service */ "./src/app/academicprocs/services/term-postpone.service.ts");
/* harmony import */ var _postpone_request_diag_add_postpone_add_postpone_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./postpone-request/diag/add-postpone/add-postpone.component */ "./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.ts");
/* harmony import */ var _summer_withdraw_diag_add_summer_withdraw_add_summer_withdraw_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component */ "./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.ts");
/* harmony import */ var _services_summer_withdraw_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/summer-withdraw.service */ "./src/app/academicprocs/services/summer-withdraw.service.ts");
/* harmony import */ var _services_cancel_course_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/cancel-course.service */ "./src/app/academicprocs/services/cancel-course.service.ts");
/* harmony import */ var _cancel_course_diag_add_course_cancel_add_course_cancel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cancel-course/diag/add-course-cancel/add-course-cancel.component */ "./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.ts");
/* harmony import */ var _execuse_request_diag_add_execuse_term_add_execuse_term_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./execuse-request/diag/add-execuse-term/add-execuse-term.component */ "./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.ts");
/* harmony import */ var _services_term_execuse_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/term-execuse.service */ "./src/app/academicprocs/services/term-execuse.service.ts");
/* harmony import */ var _course_equalize_course_equalize_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./course-equalize/course-equalize.component */ "./src/app/academicprocs/course-equalize/course-equalize.component.ts");
/* harmony import */ var _course_equalize_diag_add_course_equalize_add_course_equalize_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./course-equalize/diag/add-course-equalize/add-course-equalize.component */ "./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.ts");
/* harmony import */ var _services_course_equalizer_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/course-equalizer.service */ "./src/app/academicprocs/services/course-equalizer.service.ts");
/* harmony import */ var _english_equalize_english_equalize_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./english-equalize/english-equalize.component */ "./src/app/academicprocs/english-equalize/english-equalize.component.ts");
/* harmony import */ var _english_equalize_diag_add_english_equalizer_add_english_equalizer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./english-equalize/diag/add-english-equalizer/add-english-equalizer.component */ "./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.ts");
/* harmony import */ var _services_english_equalizer_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/english-equalizer.service */ "./src/app/academicprocs/services/english-equalizer.service.ts");
/* harmony import */ var _re_eenrollment_diag_add_re_enroll_add_re_enroll_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./re-eenrollment/diag/add-re-enroll/add-re-enroll.component */ "./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.ts");
/* harmony import */ var _services_re_enroll_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/re-enroll.service */ "./src/app/academicprocs/services/re-enroll.service.ts");
/* harmony import */ var _change_major_change_major_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./change-major/change-major.component */ "./src/app/academicprocs/change-major/change-major.component.ts");
/* harmony import */ var _services_change_major_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/change-major.service */ "./src/app/academicprocs/services/change-major.service.ts");
/* harmony import */ var _change_major_diag_add_change_major_add_change_major_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./change-major/diag/add-change-major/add-change-major.component */ "./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.ts");
/* harmony import */ var _change_request_diag_add_request_change_add_request_change_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./change-request/diag/add-request-change/add-request-change.component */ "./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.ts");
/* harmony import */ var _lectures_execuses_lectures_execuses_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./lectures-execuses/lectures-execuses.component */ "./src/app/academicprocs/lectures-execuses/lectures-execuses.component.ts");
/* harmony import */ var _object_exam_object_exam_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./object-exam/object-exam.component */ "./src/app/academicprocs/object-exam/object-exam.component.ts");
/* harmony import */ var _lectures_execuses_diag_add_lectures_execuses_add_lectures_execuses_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component */ "./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.ts");
/* harmony import */ var _object_exam_diag_add_exam_object_add_exam_object_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./object-exam/diag/add-exam-object/add-exam-object.component */ "./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.ts");
/* harmony import */ var _services_lecture_execuse_service_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/lecture-execuse-service.service */ "./src/app/academicprocs/services/lecture-execuse-service.service.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _registeration_helper_registeration_helper_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./registeration-helper/registeration-helper.component */ "./src/app/academicprocs/registeration-helper/registeration-helper.component.ts");
/* harmony import */ var _registeration_helper_diag_add_registeration_helper_add_registeration_helper_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./registeration-helper/diag/add-registeration-helper/add-registeration-helper.component */ "./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.ts");
/* harmony import */ var _univ_card_univ_card_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./univ-card/univ-card.component */ "./src/app/academicprocs/univ-card/univ-card.component.ts");
/* harmony import */ var _univ_card_diag_add_univ_card_add_univ_card_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./univ-card/diag/add-univ-card/add-univ-card.component */ "./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.ts");
/* harmony import */ var _services_uvniv_card_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/uvniv-card.service */ "./src/app/academicprocs/services/uvniv-card.service.ts");
/* harmony import */ var _register_wishes_register_wishes_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./register-wishes/register-wishes.component */ "./src/app/academicprocs/register-wishes/register-wishes.component.ts");
/* harmony import */ var _exam_excuse_exam_excuse_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./exam-excuse/exam-excuse.component */ "./src/app/academicprocs/exam-excuse/exam-excuse.component.ts");
/* harmony import */ var _exam_excuse_diag_add_exam_excuse_add_exam_excuse_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./exam-excuse/diag/add-exam-excuse/add-exam-excuse.component */ "./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.ts");
/* harmony import */ var _services_exam_excuse_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./services/exam-excuse.service */ "./src/app/academicprocs/services/exam-excuse.service.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");

























































var AcademicprocsModule = /** @class */ (function () {
    function AcademicprocsModule() {
    }
    AcademicprocsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_postpone_request_postpone_request_component__WEBPACK_IMPORTED_MODULE_4__["PostponeRequestComponent"],
                _execuse_request_execuse_request_component__WEBPACK_IMPORTED_MODULE_5__["ExecuseRequestComponent"],
                _summer_withdraw_summer_withdraw_component__WEBPACK_IMPORTED_MODULE_6__["SummerWithdrawComponent"],
                _re_eenrollment_re_eenrollment_component__WEBPACK_IMPORTED_MODULE_7__["ReEenrollmentComponent"],
                _except_semester_except_semester_component__WEBPACK_IMPORTED_MODULE_8__["ExceptSemesterComponent"],
                _change_request_change_request_component__WEBPACK_IMPORTED_MODULE_9__["ChangeRequestComponent"],
                _cancel_course_cancel_course_component__WEBPACK_IMPORTED_MODULE_10__["CancelCourseComponent"],
                _withdraw_from_univ_withdraw_from_univ_component__WEBPACK_IMPORTED_MODULE_11__["WithdrawFromUnivComponent"],
                _withdraw_from_univ_diag_add_request_add_request_component__WEBPACK_IMPORTED_MODULE_14__["AddRequestComponent"],
                _postpone_request_diag_add_postpone_add_postpone_component__WEBPACK_IMPORTED_MODULE_21__["AddPostponeComponent"],
                _shared_directives_hr_minute_directive__WEBPACK_IMPORTED_MODULE_18__["HrMinuteDirective"],
                _shared_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_19__["TimerComponent"],
                _summer_withdraw_diag_add_summer_withdraw_add_summer_withdraw_component__WEBPACK_IMPORTED_MODULE_22__["AddSummerWithdrawComponent"],
                _cancel_course_diag_add_course_cancel_add_course_cancel_component__WEBPACK_IMPORTED_MODULE_25__["AddCourseCancelComponent"],
                _execuse_request_diag_add_execuse_term_add_execuse_term_component__WEBPACK_IMPORTED_MODULE_26__["AddExecuseTermComponent"],
                _course_equalize_course_equalize_component__WEBPACK_IMPORTED_MODULE_28__["CourseEqualizeComponent"],
                _course_equalize_diag_add_course_equalize_add_course_equalize_component__WEBPACK_IMPORTED_MODULE_29__["AddCourseEqualizeComponent"],
                _english_equalize_english_equalize_component__WEBPACK_IMPORTED_MODULE_31__["EnglishEqualizeComponent"],
                _english_equalize_diag_add_english_equalizer_add_english_equalizer_component__WEBPACK_IMPORTED_MODULE_32__["AddEnglishEqualizerComponent"],
                _re_eenrollment_diag_add_re_enroll_add_re_enroll_component__WEBPACK_IMPORTED_MODULE_34__["AddReEnrollComponent"],
                _change_major_change_major_component__WEBPACK_IMPORTED_MODULE_36__["ChangeMajorComponent"],
                _change_major_diag_add_change_major_add_change_major_component__WEBPACK_IMPORTED_MODULE_38__["AddChangeMajorComponent"],
                _change_request_diag_add_request_change_add_request_change_component__WEBPACK_IMPORTED_MODULE_39__["AddRequestChangeComponent"],
                _lectures_execuses_lectures_execuses_component__WEBPACK_IMPORTED_MODULE_40__["LecturesExecusesComponent"],
                _object_exam_object_exam_component__WEBPACK_IMPORTED_MODULE_41__["ObjectExamComponent"],
                _lectures_execuses_diag_add_lectures_execuses_add_lectures_execuses_component__WEBPACK_IMPORTED_MODULE_42__["AddLecturesExecusesComponent"],
                _object_exam_diag_add_exam_object_add_exam_object_component__WEBPACK_IMPORTED_MODULE_43__["AddExamObjectComponent"],
                _registeration_helper_registeration_helper_component__WEBPACK_IMPORTED_MODULE_47__["RegisterationHelperComponent"],
                _registeration_helper_diag_add_registeration_helper_add_registeration_helper_component__WEBPACK_IMPORTED_MODULE_48__["AddRegisterationHelperComponent"],
                _univ_card_univ_card_component__WEBPACK_IMPORTED_MODULE_49__["UnivCardComponent"],
                _univ_card_diag_add_univ_card_add_univ_card_component__WEBPACK_IMPORTED_MODULE_50__["AddUnivCardComponent"],
                _univ_card_diag_add_univ_card_add_univ_card_component__WEBPACK_IMPORTED_MODULE_50__["AddUnivCardComponent"],
                _exam_excuse_exam_excuse_component__WEBPACK_IMPORTED_MODULE_53__["ExamExcuseComponent"],
                _exam_excuse_diag_add_exam_excuse_add_exam_excuse_component__WEBPACK_IMPORTED_MODULE_54__["AddExamExcuseComponent"],
                _univ_card_diag_add_univ_card_add_univ_card_component__WEBPACK_IMPORTED_MODULE_50__["AddUnivCardComponent"],
                _register_wishes_register_wishes_component__WEBPACK_IMPORTED_MODULE_52__["RegisterWishesComponent"]
            ],
            entryComponents: [_withdraw_from_univ_diag_add_request_add_request_component__WEBPACK_IMPORTED_MODULE_14__["AddRequestComponent"],
                _postpone_request_diag_add_postpone_add_postpone_component__WEBPACK_IMPORTED_MODULE_21__["AddPostponeComponent"],
                _summer_withdraw_diag_add_summer_withdraw_add_summer_withdraw_component__WEBPACK_IMPORTED_MODULE_22__["AddSummerWithdrawComponent"],
                _cancel_course_diag_add_course_cancel_add_course_cancel_component__WEBPACK_IMPORTED_MODULE_25__["AddCourseCancelComponent"],
                _execuse_request_diag_add_execuse_term_add_execuse_term_component__WEBPACK_IMPORTED_MODULE_26__["AddExecuseTermComponent"],
                _course_equalize_diag_add_course_equalize_add_course_equalize_component__WEBPACK_IMPORTED_MODULE_29__["AddCourseEqualizeComponent"],
                _english_equalize_diag_add_english_equalizer_add_english_equalizer_component__WEBPACK_IMPORTED_MODULE_32__["AddEnglishEqualizerComponent"],
                _re_eenrollment_diag_add_re_enroll_add_re_enroll_component__WEBPACK_IMPORTED_MODULE_34__["AddReEnrollComponent"],
                _change_major_diag_add_change_major_add_change_major_component__WEBPACK_IMPORTED_MODULE_38__["AddChangeMajorComponent"],
                _change_request_diag_add_request_change_add_request_change_component__WEBPACK_IMPORTED_MODULE_39__["AddRequestChangeComponent"],
                _lectures_execuses_diag_add_lectures_execuses_add_lectures_execuses_component__WEBPACK_IMPORTED_MODULE_42__["AddLecturesExecusesComponent"],
                _object_exam_diag_add_exam_object_add_exam_object_component__WEBPACK_IMPORTED_MODULE_43__["AddExamObjectComponent"],
                _registeration_helper_diag_add_registeration_helper_add_registeration_helper_component__WEBPACK_IMPORTED_MODULE_48__["AddRegisterationHelperComponent"],
                _univ_card_diag_add_univ_card_add_univ_card_component__WEBPACK_IMPORTED_MODULE_50__["AddUnivCardComponent"],
                _exam_excuse_diag_add_exam_excuse_add_exam_excuse_component__WEBPACK_IMPORTED_MODULE_54__["AddExamExcuseComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _academicprocs_routing_module__WEBPACK_IMPORTED_MODULE_3__["AcademicprocsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_46__["MatNativeDateModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_56__["MatProgressSpinnerModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot() // ToastrModule added
            ],
            providers: [_services_withdraw_from_univ_service__WEBPACK_IMPORTED_MODULE_12__["WithdrawFromUnivService"],
                _services_term_postpone_service__WEBPACK_IMPORTED_MODULE_20__["TermPostponeService"],
                _services_summer_withdraw_service__WEBPACK_IMPORTED_MODULE_23__["SummerWithdrawService"],
                _services_cancel_course_service__WEBPACK_IMPORTED_MODULE_24__["CancelCourseService"],
                _services_term_execuse_service__WEBPACK_IMPORTED_MODULE_27__["TermExecuseService"],
                _services_course_equalizer_service__WEBPACK_IMPORTED_MODULE_30__["CourseEqualizerService"],
                _services_english_equalizer_service__WEBPACK_IMPORTED_MODULE_33__["EnglishEqualizerService"],
                _services_re_enroll_service__WEBPACK_IMPORTED_MODULE_35__["ReEnrollService"],
                _services_change_major_service__WEBPACK_IMPORTED_MODULE_37__["ChangeMajorService"],
                _services_lecture_execuse_service_service__WEBPACK_IMPORTED_MODULE_44__["LectureExecuseServiceService"],
                _services_uvniv_card_service__WEBPACK_IMPORTED_MODULE_51__["UvnivCardService"],
                _services_exam_excuse_service__WEBPACK_IMPORTED_MODULE_55__["ExamExcuseService"]
            ]
        })
    ], AcademicprocsModule);
    return AcademicprocsModule;
}());



/***/ }),

/***/ "./src/app/academicprocs/cancel-course/cancel-course.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/academicprocs/cancel-course/cancel-course.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvY2FuY2VsLWNvdXJzZS9jYW5jZWwtY291cnNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/cancel-course/cancel-course.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/academicprocs/cancel-course/cancel-course.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n  {{msg.body}}!\r\n</div>\r\n<div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n<div style=\"direction: ltr;text-align: center\">\r\n  \r\n  <button *ngIf=\"!reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n  اضافة طلب\r\n</button>\r\n<br/>\r\n<br/>\r\n\r\n</div>\r\n<div>\r\n<table style=\"text-align: center\" class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">رقم الطلب</th>\r\n\r\n      <th scope=\"col\">تاريخ الطلب</th>\r\n      <th scope=\"col\">حالة الطلب</th>\r\n      <th scope=\"col\"> طباعة الطلب</th>\r\n      <th scope=\"col\"> حذف الطلب </th>\r\n\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let it of reqData.requests;let i=index;\">\r\n      <td>{{it.request_number}}</td>\r\n     \r\n\r\n      <td>{{it.insert_date}}</td>\r\n      <td>{{it.status}}</td>\r\n      <td><a class=\"btn btn-primary\" [href]=\"print(it.request_number)\" ><span class=\"glyphicon glyphicon-print\"></span>\r\n        Print</a></td>\r\n\r\n      <td><button [disabled]='!it.deletable || it.time_to_delete_per_hour<=0'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"><app-timer [hr]=\"it.time_to_delete_per_hour\"></app-timer></i> </button></td>\r\n\r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/academicprocs/cancel-course/cancel-course.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/academicprocs/cancel-course/cancel-course.component.ts ***!
  \************************************************************************/
/*! exports provided: CancelCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelCourseComponent", function() { return CancelCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_cancel_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cancel-course.service */ "./src/app/academicprocs/services/cancel-course.service.ts");
/* harmony import */ var _diag_add_course_cancel_add_course_cancel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-course-cancel/add-course-cancel.component */ "./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.ts");






var CancelCourseComponent = /** @class */ (function () {
    function CancelCourseComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    CancelCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cancelCousre = { courses: null, agreement: 1 };
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            //console.log(this.reqData.requests);
        });
    };
    CancelCourseComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_course_cancel_add_course_cancel_component__WEBPACK_IMPORTED_MODULE_5__["AddCourseCancelComponent"], dialogConfig);
    };
    CancelCourseComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    CancelCourseComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    CancelCourseComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    CancelCourseComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
        }
    };
    CancelCourseComponent.prototype.call = function (hr) {
        return Math.floor(Math.random() * 10) + hr;
    };
    CancelCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancel-course',
            template: __webpack_require__(/*! ./cancel-course.component.html */ "./src/app/academicprocs/cancel-course/cancel-course.component.html"),
            styles: [__webpack_require__(/*! ./cancel-course.component.css */ "./src/app/academicprocs/cancel-course/cancel-course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_cancel_course_service__WEBPACK_IMPORTED_MODULE_4__["CancelCourseService"]])
    ], CancelCourseComponent);
    return CancelCourseComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvY2FuY2VsLWNvdXJzZS9kaWFnL2FkZC1jb3Vyc2UtY2FuY2VsL2FkZC1jb3Vyc2UtY2FuY2VsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\"> طلب انسحاب من الجامعه</h5>\r\n        \r\n      </div>\r\n      <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n\r\n      <div class=\"modal-body\">\r\n<table style=\"text-align: center\" class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">اسم المقرر </th>\r\n  \r\n        <th scope=\"col\"> رمز المقرر</th>\r\n        <th scope=\"col\">عدد الساعات </th>\r\n        <th scope=\"col\">   </th>\r\n  \r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let it of reqData.RegisteredCourses;let i=index;\">\r\n        <td>{{it.CRSE_TITLE}}</td>\r\n       \r\n  \r\n        <td>{{it.CRES_CODE}}</td>\r\n        <td>{{it.CREDIT_HR}}</td>\r\n     \r\n  \r\n        <td>\r\n            <input type=\"checkbox\" name=\"chkCourse\" (change)=\"changeStatus(it.CRES_CODE,$event,i)\" #chkCourse  id=\"defaultUnchecked\">\r\n       </td>\r\n  \r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>\r\n <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n\r\n<button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n</div>\r\n      </div></form></div></div></mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddCourseCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCourseCancelComponent", function() { return AddCourseCancelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_academicprocs_services_cancel_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/academicprocs/services/cancel-course.service */ "./src/app/academicprocs/services/cancel-course.service.ts");





var AddCourseCancelComponent = /** @class */ (function () {
    function AddCourseCancelComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
        this.imageSrc = '';
    }
    AddCourseCancelComponent.prototype.ngOnInit = function () {
        this.cancelCousre = { courses: [], agreement: 1 };
        this.reqData = this.acadmicProc.reqData;
    };
    AddCourseCancelComponent.prototype.changeStatus = function (id, e, i) {
        if (e.target.checked) {
            var selCouse = { value: id };
            this.cancelCousre.courses.push(selCouse);
            console.log(this.cancelCousre.courses);
        }
        else {
            this.cancelCousre.courses.splice(i, 1);
        }
    };
    AddCourseCancelComponent.prototype.addRequest = function (data) {
        var _this = this;
        console.log(data);
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddCourseCancelComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.cancelCousre);
        this.dialogRef.close();
    };
    AddCourseCancelComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddCourseCancelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-course-cancel',
            template: __webpack_require__(/*! ./add-course-cancel.component.html */ "./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.html"),
            styles: [__webpack_require__(/*! ./add-course-cancel.component.css */ "./src/app/academicprocs/cancel-course/diag/add-course-cancel/add-course-cancel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_academicprocs_services_cancel_course_service__WEBPACK_IMPORTED_MODULE_4__["CancelCourseService"]])
    ], AddCourseCancelComponent);
    return AddCourseCancelComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/change-major/change-major.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/academicprocs/change-major/change-major.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvY2hhbmdlLW1ham9yL2NoYW5nZS1tYWpvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/academicprocs/change-major/change-major.component.html":
/*!************************************************************************!*\
  !*** ./src/app/academicprocs/change-major/change-major.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\r\n\r\n<div  *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n  <div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n      {{msg.body}}!\r\n    </div>\r\n  <div style=\"direction: ltr;text-align: center\">\r\n    \r\n    <button *ngIf=\"!reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n    اضافة طلب\r\n  </button>\r\n  <br/>\r\n  <br/>\r\n  \r\n  </div>\r\n  <div>\r\n    <div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n      <thead style=\"background: #ebecf0\">\r\n\r\n      <tr>\r\n        <th scope=\"col\">رقم الطلب</th>\r\n  \r\n        <th scope=\"col\">تاريخ الطلب</th>\r\n        <th scope=\"col\"> التخصص الحالي</th>\r\n        <th scope=\"col\"> التخصص المطلوب</th>\r\n\r\n        <th scope=\"col\"> حذف الطلب </th>\r\n  \r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let it of reqData.reqs;let i=index;\">\r\n        <td>{{it.request_number}}</td>\r\n       \r\n  \r\n        <td>{{it.insert_date}}</td>\r\n        <td>{{it.CURR_PROG}}</td>\r\n        <td>{{it.REQ_PROG}}</td>\r\n        \r\n  \r\n        <td><button [disabled]='!it.deletable'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"></i> </button></td>\r\n  \r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/academicprocs/change-major/change-major.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/academicprocs/change-major/change-major.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangeMajorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeMajorComponent", function() { return ChangeMajorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_change_major_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/change-major.service */ "./src/app/academicprocs/services/change-major.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _diag_add_change_major_add_change_major_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-change-major/add-change-major.component */ "./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.ts");






var ChangeMajorComponent = /** @class */ (function () {
    function ChangeMajorComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    ChangeMajorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cancelCousre = { courses: null, agreement: 1 };
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            // console.log(this.reqData.reqs);
        });
    };
    ChangeMajorComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_change_major_add_change_major_component__WEBPACK_IMPORTED_MODULE_5__["AddChangeMajorComponent"], dialogConfig);
    };
    ChangeMajorComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    ChangeMajorComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    ChangeMajorComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    ChangeMajorComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                console.log(id);
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1) {
                    _this.acadmicProc.reqData.requests.splice(index, 1);
                }
            });
        }
    };
    ChangeMajorComponent.prototype.call = function (hr) {
        return Math.floor(Math.random() * 10) + hr;
    };
    ChangeMajorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-major',
            template: __webpack_require__(/*! ./change-major.component.html */ "./src/app/academicprocs/change-major/change-major.component.html"),
            styles: [__webpack_require__(/*! ./change-major.component.css */ "./src/app/academicprocs/change-major/change-major.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _services_change_major_service__WEBPACK_IMPORTED_MODULE_2__["ChangeMajorService"]])
    ], ChangeMajorComponent);
    return ChangeMajorComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvY2hhbmdlLW1ham9yL2RpYWcvYWRkLWNoYW5nZS1tYWpvci9hZGQtY2hhbmdlLW1ham9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<mat-dialog-content>\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\"> طلب  تغير التخصص </h5>\r\n          \r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <P class=\"text-center\">بيانات بيانات بيانات</P>\r\n          <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n            \r\n          <div class=\"form-group\">\r\n             \r\n                 <select name=\"major\" #BranchID=\"ngModel\" [(ngModel)]=\"mj.major\" class=\"form-control\" \r\n            [class.is-invalid]=\"mj.major==''\">\r\n              <option value=\"\">اختر  التخصص</option>\r\n              <option *ngFor=\"let item of reqData.majors\" value=\"{{item.MAJOR_PK}}\">{{item.MAJOR_TITLE}}</option>\r\n            </select>\r\n          </div>\r\n      \r\n          <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                      <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n  \r\n            <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n          </div>\r\n        </form>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddChangeMajorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChangeMajorComponent", function() { return AddChangeMajorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_academicprocs_services_change_major_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/academicprocs/services/change-major.service */ "./src/app/academicprocs/services/change-major.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddChangeMajorComponent = /** @class */ (function () {
    function AddChangeMajorComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    AddChangeMajorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mj = { major: '' };
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
        });
    };
    AddChangeMajorComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddChangeMajorComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.mj);
        console.log(this.mj);
        this.dialogRef.close();
    };
    AddChangeMajorComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        /* if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
         */
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AddChangeMajorComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
    };
    AddChangeMajorComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    AddChangeMajorComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.toastr.success('', res.messages.body);
            });
            this.acadmicProc.reqData.reqs.splice(index, 1);
        }
    };
    AddChangeMajorComponent.prototype.call = function (hr) {
        return Math.floor(Math.random() * 10) + hr;
    };
    AddChangeMajorComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddChangeMajorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-change-major',
            template: __webpack_require__(/*! ./add-change-major.component.html */ "./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.html"),
            styles: [__webpack_require__(/*! ./add-change-major.component.css */ "./src/app/academicprocs/change-major/diag/add-change-major/add-change-major.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_academicprocs_services_change_major_service__WEBPACK_IMPORTED_MODULE_2__["ChangeMajorService"]])
    ], AddChangeMajorComponent);
    return AddChangeMajorComponent;
}());

//


/***/ }),

/***/ "./src/app/academicprocs/change-request/change-request.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/academicprocs/change-request/change-request.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvY2hhbmdlLXJlcXVlc3QvY2hhbmdlLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/change-request/change-request.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/academicprocs/change-request/change-request.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n  {{msg.body}}!\r\n</div>\r\n\r\n<div style=\"direction: ltr;text-align: center\">\r\n  \r\n  <button *ngIf=\"reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n  اضافة طلب\r\n</button>\r\n<br/>\r\n<br/>\r\n\r\n</div>\r\n<div>\r\n<table style=\"text-align: center\" class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">الفرع المطلوب</th>\r\n\r\n      <th scope=\"col\">تاريخ انشاء الطلب</th>\r\n\r\n      <th scope=\"col\">تاريخ الرد</th>\r\n      <th scope=\"col\">حالة الطلب</th>\r\n      <th scope=\"col\">الاجراء</th>\r\n\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let it of reqData.reqs;let i=index;\">\r\n      <td>{{i+1}}</td>\r\n      <td>{{it.CAMP_TITLE}}</td>\r\n      <td>{{it.insert_date}}</td>\r\n\r\n\r\n      <td>{{it.APPROVAL_DATE}} </td>\r\n      <td>{{it.status}}</td>\r\n      \r\n\r\n      <td><button [disabled]='!it.deletable'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"></i> </button></td>\r\n\r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/academicprocs/change-request/change-request.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/academicprocs/change-request/change-request.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChangeRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeRequestComponent", function() { return ChangeRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_change_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/change-request.service */ "./src/app/academicprocs/services/change-request.service.ts");
/* harmony import */ var _diag_add_request_change_add_request_change_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-request-change/add-request-change.component */ "./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.ts");


//import { changeRequest } from 'src/app/shared/models/cancel-cousre';




var ChangeRequestComponent = /** @class */ (function () {
    //canAdd:boolean;
    function ChangeRequestComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    ChangeRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.changeRequest = {courses: null, agreement: 1};
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            //console.log(this.reqData.reqs);
            //console.log(this.reqData);
            //this.canAdd = this.reqData.can_add_new_request;
        });
    };
    ChangeRequestComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_request_change_add_request_change_component__WEBPACK_IMPORTED_MODULE_5__["AddRequestChangeComponent"], dialogConfig);
    };
    ChangeRequestComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    ChangeRequestComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    ChangeRequestComponent.prototype.delete = function (id, index) {
        // console.log(id);
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
        }
    };
    ChangeRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-request',
            template: __webpack_require__(/*! ./change-request.component.html */ "./src/app/academicprocs/change-request/change-request.component.html"),
            styles: [__webpack_require__(/*! ./change-request.component.css */ "./src/app/academicprocs/change-request/change-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_change_request_service__WEBPACK_IMPORTED_MODULE_4__["ChangeRequestService"]])
    ], ChangeRequestComponent);
    return ChangeRequestComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvY2hhbmdlLXJlcXVlc3QvZGlhZy9hZGQtcmVxdWVzdC1jaGFuZ2UvYWRkLXJlcXVlc3QtY2hhbmdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\"> طلب تغيير فرع </h5>\r\n        \r\n      </div>\r\n      <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit()\">\r\n\r\n      <div class=\"modal-body\">\r\n<!--drop down list-->\r\n<p style=\"text-align:center\" >اختيار الفرع</p>\r\n\r\n<select class=\"form-control\" #CampID=\"ngModel\" [(ngModel)]=\"cmp.camp\"  name=\"Camp\" [class.is-invalid]=\"cmp.camp == ''\">\r\n  <option value=''>اختر  الفرع</option>\r\n  <option *ngFor=\"let camp of camps\" [value]=\"camp.CAMP_CODE\">{{camp.CAMP_DESC}}</option>\r\n</select>\r\n\r\n<!--<mat-select >\r\n  <mat-option *ngFor=\"let camp of reqData.camps\" [value]=\"camp.CAMP_CODE\">{{camp.CAMP_DESC}}</mat-option>\r\n</mat-select>-->\r\n<br>\r\n  \r\n <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n\r\n<button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n</div>\r\n      </div></form></div></div></mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AddRequestChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRequestChangeComponent", function() { return AddRequestChangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_academicprocs_services_change_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/academicprocs/services/change-request.service */ "./src/app/academicprocs/services/change-request.service.ts");





var AddRequestChangeComponent = /** @class */ (function () {
    function AddRequestChangeComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
        //choosedCode:string;
        this.imageSrc = '';
    }
    AddRequestChangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.changeRequest = {camp: []};
        this.cmp = { camp: '' };
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.camps = _this.acadmicProc.reqData.camps;
            _this.msgs = _this.acadmicProc.msgs;
            //console.log(this.camps);
            //this.canAdd = this.reqData.can_add_new_request;
        });
    };
    AddRequestChangeComponent.prototype.addRequest = function (data) {
        var _this = this;
        //console.log(data);
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
        //this.cmp = {camp:''};
    };
    AddRequestChangeComponent.prototype.onSubmit = function () {
        if (this.cmp.camp == "")
            return;
        //this.changeRequest.camp.push({key:"camp",value:this.choosedCode});
        /*let dropDown;
        dropDown = document.getElementById("selected_id") as HTMLSelectElement;
        let selectedItem =dropDown[dropDown.selectedIndex];
        //console.log(selectedItem.innerHTML  + "" + selectedItem.value);
        this.changeRequest.camp.push({key:selectedItem.innerHTML,value:selectedItem.value});*/
        /*if(this.changeRequest.camp.length == 0)
          return;*/
        this.addRequest(this.cmp);
        this.dialogRef.close();
    };
    AddRequestChangeComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddRequestChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-request-change',
            template: __webpack_require__(/*! ./add-request-change.component.html */ "./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.html"),
            styles: [__webpack_require__(/*! ./add-request-change.component.css */ "./src/app/academicprocs/change-request/diag/add-request-change/add-request-change.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_academicprocs_services_change_request_service__WEBPACK_IMPORTED_MODULE_4__["ChangeRequestService"]])
    ], AddRequestChangeComponent);
    return AddRequestChangeComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/course-equalize/course-equalize.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/academicprocs/course-equalize/course-equalize.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvY291cnNlLWVxdWFsaXplL2NvdXJzZS1lcXVhbGl6ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/academicprocs/course-equalize/course-equalize.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/academicprocs/course-equalize/course-equalize.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n  <div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n      {{msg.body}}!\r\n    </div>\r\n  <div style=\"direction: ltr;text-align: center\">\r\n    \r\n    <button *ngIf=\"!reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n    اضافة طلب\r\n  </button>\r\n  <br/>\r\n  <br/>\r\n  \r\n  </div>\r\n  <div>\r\n  <table style=\"text-align: center\" class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">رقم الطلب</th>\r\n  \r\n        <th scope=\"col\">تاريخ الطلب</th>\r\n        <th scope=\"col\">حالة الطلب</th>\r\n        <th scope=\"col\"> الرد </th>\r\n        <th scope=\"col\"> تاريخ الرد </th>\r\n\r\n        <th scope=\"col\"> طباعة الطلب</th>\r\n        <th scope=\"col\"> حذف الطلب </th>\r\n  \r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let it of reqData.reqs;let i=index;\">\r\n        <td>{{it.request_number}}</td>\r\n       \r\n  \r\n        <td>{{it.insert_date}}</td>\r\n        <td>{{it.status}}</td>\r\n        <td>{{it.rejection_reason}}</td>\r\n        <td>{{it.approval_date}}</td>\r\n        <td><a class=\"btn btn-primary\" [href]=\"print(it.request_number)\" ><span class=\"glyphicon glyphicon-print\"></span>\r\n          Print</a></td>\r\n  \r\n        <td><button [disabled]='!it.deletable'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"></i> </button></td>\r\n  \r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/academicprocs/course-equalize/course-equalize.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/academicprocs/course-equalize/course-equalize.component.ts ***!
  \****************************************************************************/
/*! exports provided: CourseEqualizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseEqualizeComponent", function() { return CourseEqualizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_equalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course-equalizer.service */ "./src/app/academicprocs/services/course-equalizer.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _diag_add_course_equalize_add_course_equalize_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-course-equalize/add-course-equalize.component */ "./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.ts");






var CourseEqualizeComponent = /** @class */ (function () {
    function CourseEqualizeComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    CourseEqualizeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reason = '';
        this.acadmicProc.getِgetRequests().then(function (res) {
            console.log(res);
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            //console.log(this.reqData.reqs);
        });
    };
    CourseEqualizeComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '70%';
        this.dialog.open(_diag_add_course_equalize_add_course_equalize_component__WEBPACK_IMPORTED_MODULE_5__["AddCourseEqualizeComponent"], dialogConfig);
    };
    CourseEqualizeComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    CourseEqualizeComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    CourseEqualizeComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    CourseEqualizeComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
        }
    };
    CourseEqualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-equalize',
            template: __webpack_require__(/*! ./course-equalize.component.html */ "./src/app/academicprocs/course-equalize/course-equalize.component.html"),
            styles: [__webpack_require__(/*! ./course-equalize.component.css */ "./src/app/academicprocs/course-equalize/course-equalize.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _services_course_equalizer_service__WEBPACK_IMPORTED_MODULE_2__["CourseEqualizerService"]])
    ], CourseEqualizeComponent);
    return CourseEqualizeComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvY291cnNlLWVxdWFsaXplL2RpYWcvYWRkLWNvdXJzZS1lcXVhbGl6ZS9hZGQtY291cnNlLWVxdWFsaXplLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<mat-dialog-content>\r\n    \r\n        <div class=\"modal-header\">\r\n          <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\">   معادلة مقررات</h5>\r\n          \r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <P class=\"text-center\">---  </P>\r\n          <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n            \r\n          <div class=\"form-group\">\r\n             \r\n                 <select name=\"PREV_UNIV\" #PREV_UNIV=\"ngModel\" [(ngModel)]=\"curseEqual.PREV_UNIV\" class=\"form-control\" \r\n            [class.is-invalid]=\" curseEqual.PREV_UNIV==0\">\r\n              <option value=\"0\">الجامعه  </option>\r\n              <option *ngFor=\"let item of reqData.univ_list_arr\" value=\"{{item.UN_ID}}\">{{item.UNIV_AR}}</option>\r\n            </select>\r\n          </div>\r\n          <table style=\"text-align: center\" class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">اسم المقرر </th>\r\n                  <th scope=\"col\">عدد الساعات </th>\r\n                  <th scope=\"col\">الدرجه  </th>\r\n                  <th scope=\"col\">اللغه  </th>\r\n\r\n                  <th scope=\"col\">   </th>\r\n            \r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let it of reqData.course_list;let i=index;\">\r\n                  <td>{{it.CRSE_TITLE}}</td>\r\n                 \r\n            \r\n                  <td>    <input   #TRNS_HRS=\"ngModel\" name=\"TRNS_HRS\" [(ngModel)]=\"it.TRNS_HRS\"  class=\"form-control col-md-6\" min=\"1\" max=\"10\" type=\"number\" value=\"1\" id=\"example-number-input\">\r\n                  </td>\r\n                  <td>   \r\n                      <select class=\"custom-select  col-md-10\"  #TRNS_GRADE=\"ngModel\" name=\"TRNS_GRADE\" [(ngModel)]=\"it.TRNS_GRADE\" id=\"inlineFormCustomSelect\">\r\n                        <option  value=\"A\">A</option>\r\n                        <option value=\"A+\">A+</option>\r\n                        <option value=\"B\">B</option>\r\n                        <option selected value=\"B+\">B+</option>\r\n\r\n                      </select>\r\n                    \r\n                  </td>\r\n                  <td>   \r\n                      <select class=\"custom-select  col-md-10\"  #TRNS_LANG=\"ngModel\" name=\"TRNS_LANG\" [(ngModel)]=\"it.TRNS_LANG\" id=\"inlineFormCustomSelect\">\r\n                          <option selected value=\"1\">عربي</option>\r\n                          <option value=\"2\">ENG</option>\r\n                         \r\n  \r\n                        </select>\r\n                  </td>\r\n                  \r\n            \r\n                  <td>\r\n                      <input type=\"checkbox\" name=\"chkCourse\" (change)=\"changeStatus(it,$event)\" #chkCourse  id=\"defaultUnchecked\">\r\n                 </td>\r\n            \r\n                </tr>\r\n                \r\n              </tbody>\r\n            </table>\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\">وصف المقرر </div>\r\n                </div>\r\n                <input name=\"imageUrl\" type=\"file\" accept=\"*/*\" (change)=\"handleInputChange($event)\" />\r\n            </div> \r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\">صورة السجل </div>\r\n                </div>\r\n                <input name=\"imageUrl2\" type=\"file\" accept=\"*/*\" (change)=\"handleInputChange2($event)\" />\r\n            </div> \r\n          <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                      <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n  \r\n            <button  type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n          </div>\r\n        </form>\r\n        </div>\r\n        \r\n  \r\n  </mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddCourseEqualizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCourseEqualizeComponent", function() { return AddCourseEqualizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_academicprocs_services_course_equalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/academicprocs/services/course-equalizer.service */ "./src/app/academicprocs/services/course-equalizer.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddCourseEqualizeComponent = /** @class */ (function () {
    function AddCourseEqualizeComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
        this.imageSrc = '';
    }
    AddCourseEqualizeComponent.prototype.ngOnInit = function () {
        this.curseEqual = { courses: [],
            can_add_new_request: false,
            course_list: [],
            messages: [],
            univ_list_arr: [],
            PREV_UNIV: 0,
            DESC_CRSE_FILE: '', TRANSCRIPT_FILE: '' };
        this.reqData = this.acadmicProc.reqData;
    };
    AddCourseEqualizeComponent.prototype.changeStatus = function (it, e) {
        if (e.target.checked) {
            console.log(it);
            it.TRNS_CRSE = it.CRSE_PK;
            this.curseEqual.courses.push(it);
            console.log(this.curseEqual.courses[0]);
        }
        else {
            for (var i = 0; i < this.curseEqual.courses.length; i++) {
                if (this.curseEqual.courses[i].TRNS_CRSE == it.TRNS_CRSE)
                    this.curseEqual.courses.splice(i, 1);
            }
        }
        console.log(this.curseEqual.courses);
    };
    AddCourseEqualizeComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AddCourseEqualizeComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.curseEqual.DESC_CRSE_FILE = reader.result;
        console.log(this.curseEqual.DESC_CRSE_FILE);
    };
    AddCourseEqualizeComponent.prototype.handleInputChange2 = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded2.bind(this);
        reader.readAsDataURL(file);
    };
    AddCourseEqualizeComponent.prototype._handleReaderLoaded2 = function (e) {
        var reader = e.target;
        this.curseEqual.TRANSCRIPT_FILE = reader.result;
        console.log(this.curseEqual.TRANSCRIPT_FILE);
    };
    AddCourseEqualizeComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddCourseEqualizeComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.curseEqual);
        console.log(this.curseEqual);
        this.dialogRef.close();
    };
    AddCourseEqualizeComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddCourseEqualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-course-equalize',
            template: __webpack_require__(/*! ./add-course-equalize.component.html */ "./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.html"),
            styles: [__webpack_require__(/*! ./add-course-equalize.component.css */ "./src/app/academicprocs/course-equalize/diag/add-course-equalize/add-course-equalize.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_academicprocs_services_course_equalizer_service__WEBPACK_IMPORTED_MODULE_2__["CourseEqualizerService"]])
    ], AddCourseEqualizeComponent);
    return AddCourseEqualizeComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvZW5nbGlzaC1lcXVhbGl6ZS9kaWFnL2FkZC1lbmdsaXNoLWVxdWFsaXplci9hZGQtZW5nbGlzaC1lcXVhbGl6ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n   \r\n     \r\n        <div class=\"modal-header\">\r\n          <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\">      طلب معادلة اللغه الانجليزيه </h5>\r\n          \r\n        </div>\r\n        <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n        <div class=\"modal-body\">\r\n            <table style=\"text-align: center\" class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">اسم الاختبار </th>\r\n                    <th scope=\"col\">الدرجه  </th>\r\n  \r\n                    <th scope=\"col\">   </th>\r\n              \r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let it of reqData.ENG_TESTS;let i=index;\">\r\n                    <td>{{it.TEST_TITLE}}</td>\r\n                   \r\n              \r\n                    <td>    <input   #score=\"ngModel\" name=\"score\" [(ngModel)]=\"it.score\"  class=\"form-control col-md-6\" min=\"1\" max=\"10\" type=\"number\" value=\"1\" id=\"example-number-input\">\r\n                    </td>\r\n                   \r\n                  \r\n                    \r\n              \r\n                    <td>\r\n                        <input type=\"checkbox\" name=\"chkCourse\" (change)=\"changeStatus(it,$event)\" #chkCourse  id=\"defaultUnchecked\">\r\n                   </td>\r\n              \r\n                  </tr>\r\n                  \r\n                </tbody>\r\n              </table>\r\n              <div class=\"image-upload\">\r\n                  <input name=\"imageUrl\" type=\"file\" accept=\"*/*\" (change)=\"handleInputChange($event)\" />\r\n              </div> \r\n             \r\n            <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                        <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n    \r\n              <button  type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n            </div>\r\n            </div>\r\n          </form>\r\n     \r\n          \r\n    \r\n    </mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddEnglishEqualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEnglishEqualizerComponent", function() { return AddEnglishEqualizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_academicprocs_services_english_equalizer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/academicprocs/services/english-equalizer.service */ "./src/app/academicprocs/services/english-equalizer.service.ts");





var AddEnglishEqualizerComponent = /** @class */ (function () {
    function AddEnglishEqualizerComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
        this.imageSrc = '';
    }
    AddEnglishEqualizerComponent.prototype.ngOnInit = function () {
        this.englishEqual = { tests: [], attachment: '', ENG_TESTS: [] };
        this.reqData = this.acadmicProc.reqData;
    };
    AddEnglishEqualizerComponent.prototype.changeStatus = function (it, e) {
        if (e.target.checked) {
            it.test = it.TEST_PK;
            this.englishEqual.tests.push(it);
            console.log(this.englishEqual.tests);
        }
        else {
            for (var i = 0; i < this.englishEqual.tests.length; i++) {
                if (this.englishEqual.tests[i].test == it.test)
                    this.englishEqual.tests.splice(i, 1);
            }
        }
        //console.log(this.englishEqual.tests);
    };
    AddEnglishEqualizerComponent.prototype.addRequest = function (data) {
        var _this = this;
        console.log(data);
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddEnglishEqualizerComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.englishEqual);
        this.dialogRef.close();
    };
    AddEnglishEqualizerComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddEnglishEqualizerComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        /* if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
         */
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AddEnglishEqualizerComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.englishEqual.attachment = reader.result;
        console.log(this.englishEqual.attachment);
    };
    AddEnglishEqualizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-english-equalizer',
            template: __webpack_require__(/*! ./add-english-equalizer.component.html */ "./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.html"),
            styles: [__webpack_require__(/*! ./add-english-equalizer.component.css */ "./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_academicprocs_services_english_equalizer_service__WEBPACK_IMPORTED_MODULE_4__["EnglishEqualizerService"]])
    ], AddEnglishEqualizerComponent);
    return AddEnglishEqualizerComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/english-equalize/english-equalize.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/academicprocs/english-equalize/english-equalize.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvZW5nbGlzaC1lcXVhbGl6ZS9lbmdsaXNoLWVxdWFsaXplLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/english-equalize/english-equalize.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/academicprocs/english-equalize/english-equalize.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n  <div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n      {{msg.body}}!\r\n    </div>\r\n  <div style=\"direction: ltr;text-align: center\">\r\n    \r\n    <button *ngIf=\"reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n    اضافة طلب\r\n  </button>\r\n  <br/>\r\n  <br/>\r\n  \r\n  </div>\r\n  <div>\r\n  <table style=\"text-align: center\" class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">رقم الطلب</th>\r\n  \r\n        <th scope=\"col\">تاريخ الطلب</th>\r\n        <th scope=\"col\">تاريخ الرد</th>\r\n\r\n        <th scope=\"col\">حالة الطلب</th>\r\n        <th scope=\"col\"> طباعه</th>\r\n  \r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let it of reqData.requests;let i=index;\">\r\n        <td>{{it.request_number}}</td>\r\n       \r\n  \r\n        <td>{{it.insert_date}}</td>\r\n        \r\n        <td>{{it.approval_date}}</td>\r\n        <td>{{it.status}}</td>\r\n\r\n        <td><a class=\"btn btn-primary\" [href]=\"print(it.request_number)\" ><span class=\"glyphicon glyphicon-print\"></span>\r\n          Print</a></td>\r\n  \r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/academicprocs/english-equalize/english-equalize.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/academicprocs/english-equalize/english-equalize.component.ts ***!
  \******************************************************************************/
/*! exports provided: EnglishEqualizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnglishEqualizeComponent", function() { return EnglishEqualizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_english_equalizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/english-equalizer.service */ "./src/app/academicprocs/services/english-equalizer.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _diag_add_english_equalizer_add_english_equalizer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-english-equalizer/add-english-equalizer.component */ "./src/app/academicprocs/english-equalize/diag/add-english-equalizer/add-english-equalizer.component.ts");






var EnglishEqualizeComponent = /** @class */ (function () {
    function EnglishEqualizeComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    EnglishEqualizeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reason = '';
        this.acadmicProc.getِgetRequests().then(function (res) {
            console.log(res);
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
        });
    };
    EnglishEqualizeComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_english_equalizer_add_english_equalizer_component__WEBPACK_IMPORTED_MODULE_5__["AddEnglishEqualizerComponent"], dialogConfig);
    };
    EnglishEqualizeComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    EnglishEqualizeComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    EnglishEqualizeComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    EnglishEqualizeComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
            //this.acadmicProc.reqData.reqs.splice(index, 1);
        }
    };
    EnglishEqualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-english-equalize',
            template: __webpack_require__(/*! ./english-equalize.component.html */ "./src/app/academicprocs/english-equalize/english-equalize.component.html"),
            styles: [__webpack_require__(/*! ./english-equalize.component.css */ "./src/app/academicprocs/english-equalize/english-equalize.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _services_english_equalizer_service__WEBPACK_IMPORTED_MODULE_2__["EnglishEqualizerService"]])
    ], EnglishEqualizeComponent);
    return EnglishEqualizeComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvZXhhbS1leGN1c2UvZGlhZy9hZGQtZXhhbS1leGN1c2UvYWRkLWV4YW0tZXhjdXNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n   \r\n     \r\n  <div class=\"modal-header\">\r\n    <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\">      تقديم الأعذار للمتغيبين عن الاختبارات بعذر    </h5>\r\n    \r\n  </div>\r\n  <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n  <div class=\"modal-body\">\r\n      <div class=\"main-content\" style=\"padding-top:0;\">\r\n          <section  class=\"ser-state\">\r\n              <div class=\"container\">\r\n                   <div class=\"row ser-block\">\r\n                      <div class=\"col-md-12 col-sm-12\">\r\n                          <div class=\"state\">\r\n                              <h6> اختر المقرر </h6>\r\n                              <table style=\"text-align: center\" class=\"table\">\r\n                                  <thead  style=\"font-size: 15px;\">\r\n                                    <tr>\r\n                                      <th scope=\"col\">اسم المقرر </th>\r\n      \r\n                                      <th scope=\"col\"> رقم المقرر  </th>\r\n                                      <th scope=\"col\">   </th>\r\n                                      <th scope=\"col\"> #  </th>\r\n\r\n                                \r\n                                    </tr>\r\n                                  </thead>\r\n                                  <tbody style=\"font-size: 14px;\">\r\n                                    <tr *ngFor=\"let it of reqData.schedules;let i=index;\">\r\n                                      <td>{{it.CRSE_TITLE}}</td>\r\n                                      <td>{{it.CRN}}</td>\r\n                                \r\n                                      <td>\r\n                                          <input type=\"checkbox\" name=\"courses\" (change)=\"changeStatus(it,$event)\" #courses  id=\"defaultUnchecked\">\r\n                                    </td>\r\n                                    <td>{{i+1}}</td>\r\n                                \r\n                                    </tr>\r\n                                    \r\n                                  </tbody>\r\n                                </table>\r\n                          </div>\r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\" ></div>\r\n                            </div>\r\n                      </div>\r\n                        \r\n                      <div class=\"col-md-12 col-sm-12\">\r\n                            <div class=\"state\">\r\n                              <h6> اختر نوع الاختبار </h6>\r\n                              <select name=\"type\" #time=\"ngModel\" [(ngModel)]=\"examExcuse.type\" class=\"form-control\" \r\n                              [class.is-invalid]=\"examExcuse.type==''\">\r\n                                <option value=\"\">نوع الاختبار</option>\r\n                                <option *ngFor=\"let item of reqData.exams_type\" value=\"{{item.id}}\">{{item.value}}</option>\r\n                              </select>\r\n                            </div>\r\n                              <div class=\"progress progress-sm\">\r\n                                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                              </div>\r\n                      </div>\r\n                      <div class=\"col-md-12 col-sm-12\">\r\n                        <div class=\"state\">\r\n                          <h6> سبب التغيب عن الاختبار  </h6>\r\n                          <textarea name=\"reason\" class=\"form-control\"  #reason=\"ngModel\" [(ngModel)]=\"examExcuse.reason\"></textarea>\r\n                        </div>\r\n                          <div class=\"progress progress-sm\">\r\n                              <div class=\"progress-bar bg-info\" style=\"width: 15%;\" ></div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-12 col-sm-12\">\r\n                        <div class=\"state\">\r\n                          <h6> رفع الوثائق التي تثبت سبب تغيبك عن الاختبار </h6>\r\n                          <div class=\"custom-file\">\r\n                              <input name=\"attachment\"  id=\"attachment\" type=\"file\" accept=\"*/*\" (change)=\"handleInputChange($event)\" />\r\n                              <label  for=\"attachment\"  class=\"custom-file-label \">\r\n                              </label> \r\n                            </div>\r\n                          </div>\r\n                          <div class=\"progress progress-sm\">\r\n                              <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                          </div>\r\n                 \r\n                     </div>\r\n                     <div style=\"margin-top: 15px;\">\r\n                        <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                                    <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n                                     <button  type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n                        </div>\r\n                      </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n           </section>\r\n      </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    \r\n\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddExamExcuseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamExcuseComponent", function() { return AddExamExcuseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_exam_excuse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/exam-excuse.service */ "./src/app/academicprocs/services/exam-excuse.service.ts");





var AddExamExcuseComponent = /** @class */ (function () {
    function AddExamExcuseComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    AddExamExcuseComponent.prototype.ngOnInit = function () {
        this.examExcuse = { courses: [], reason: '', type: '', attachment: '' };
        this.reqData = this.acadmicProc.reqData;
    };
    AddExamExcuseComponent.prototype.changeStatus = function (it, e) {
        if (e.target.checked) {
            this.examExcuse.courses.push({ CRSE: it.CRN });
            //   console.log(this.examExcuse.courses);
            // } else {
            //   for(let i = 0 ; i<this.examExcuse.courses.length;i++)
            //   {
            //     if(this.examExcuse.courses[i].CRSE ==it.test)
            //       this.examExcuse.courses.splice(i, 1);
            //   }
        }
        //console.log(this.englishEqual.tests);
    };
    AddExamExcuseComponent.prototype.addRequest = function (data) {
        var _this = this;
        console.log(data);
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddExamExcuseComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.examExcuse);
        this.dialogRef.close();
    };
    AddExamExcuseComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddExamExcuseComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /pdf-*/;
        var reader = new FileReader();
        /* if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
         */
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AddExamExcuseComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.examExcuse.attachment = reader.result;
        console.log(this.examExcuse.attachment);
    };
    AddExamExcuseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-exam-excuse',
            template: __webpack_require__(/*! ./add-exam-excuse.component.html */ "./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.html"),
            styles: [__webpack_require__(/*! ./add-exam-excuse.component.css */ "./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_exam_excuse_service__WEBPACK_IMPORTED_MODULE_4__["ExamExcuseService"]])
    ], AddExamExcuseComponent);
    return AddExamExcuseComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/exam-excuse/exam-excuse.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/academicprocs/exam-excuse/exam-excuse.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvZXhhbS1leGN1c2UvZXhhbS1leGN1c2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/exam-excuse/exam-excuse.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/academicprocs/exam-excuse/exam-excuse.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\r\n\r\n  <div  *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n      {{msg.body}}!\r\n    </div>\r\n    <div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n        {{msg.body}}!\r\n      </div>\r\n    <div style=\"direction: ltr;text-align: center\">\r\n      \r\n      <button *ngIf=\"reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n      اضافة طلب\r\n    </button>\r\n    <br/>\r\n    <br/>\r\n    \r\n    </div>\r\n    <div>\r\n      <div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-bordered\">\r\n        <thead style=\"background: #ebecf0\">\r\n  \r\n        <tr>\r\n          <th scope=\"col\">رقم الطلب</th>\r\n          <th scope=\"col\">CRN</th>\r\n          <th scope=\"col\">اسم المقرر</th>\r\n          <th scope=\"col\">تاريخ إنشاء الطلب</th>\r\n          <th scope=\"col\">تاريخ الرد </th>\r\n          <th scope=\"col\"> حالة الطلب</th>\r\n          <th scope=\"col\"> حذف الطلب </th>\r\n    \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let it of reqData.requests;let i=index;\">\r\n          <td>{{it.request_number}}</td>\r\n          <td>{{it.courseId}}</td>\r\n          <td>{{it.course_title}}</td>\r\n          <td>{{it.insert_date}}</td>\r\n          <td>{{it.admin_date}}</td>\r\n          <td>{{it.status}}</td>\r\n         \r\n         \r\n          <td><button [disabled]='!it.deletable'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"></i> </button></td>\r\n    \r\n        </tr>\r\n        \r\n      </tbody>\r\n    </table></div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/academicprocs/exam-excuse/exam-excuse.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/academicprocs/exam-excuse/exam-excuse.component.ts ***!
  \********************************************************************/
/*! exports provided: ExamExcuseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamExcuseComponent", function() { return ExamExcuseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_exam_excuse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/exam-excuse.service */ "./src/app/academicprocs/services/exam-excuse.service.ts");
/* harmony import */ var _diag_add_exam_excuse_add_exam_excuse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-exam-excuse/add-exam-excuse.component */ "./src/app/academicprocs/exam-excuse/diag/add-exam-excuse/add-exam-excuse.component.ts");






var ExamExcuseComponent = /** @class */ (function () {
    function ExamExcuseComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    ExamExcuseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acadmicProc.getِgetRequests().then(function (res) {
            console.log(res);
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
        });
    };
    ExamExcuseComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_exam_excuse_add_exam_excuse_component__WEBPACK_IMPORTED_MODULE_5__["AddExamExcuseComponent"], dialogConfig);
    };
    ExamExcuseComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    ExamExcuseComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    ExamExcuseComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
            //this.acadmicProc.reqData.reqs.splice(index, 1);
        }
    };
    ExamExcuseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exam-excuse',
            template: __webpack_require__(/*! ./exam-excuse.component.html */ "./src/app/academicprocs/exam-excuse/exam-excuse.component.html"),
            styles: [__webpack_require__(/*! ./exam-excuse.component.css */ "./src/app/academicprocs/exam-excuse/exam-excuse.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_exam_excuse_service__WEBPACK_IMPORTED_MODULE_4__["ExamExcuseService"]])
    ], ExamExcuseComponent);
    return ExamExcuseComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/except-semester/except-semester.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/academicprocs/except-semester/except-semester.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvZXhjZXB0LXNlbWVzdGVyL2V4Y2VwdC1zZW1lc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/academicprocs/except-semester/except-semester.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/academicprocs/except-semester/except-semester.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  except-semester works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/academicprocs/except-semester/except-semester.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/academicprocs/except-semester/except-semester.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExceptSemesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptSemesterComponent", function() { return ExceptSemesterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExceptSemesterComponent = /** @class */ (function () {
    function ExceptSemesterComponent() {
    }
    ExceptSemesterComponent.prototype.ngOnInit = function () {
    };
    ExceptSemesterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-except-semester',
            template: __webpack_require__(/*! ./except-semester.component.html */ "./src/app/academicprocs/except-semester/except-semester.component.html"),
            styles: [__webpack_require__(/*! ./except-semester.component.css */ "./src/app/academicprocs/except-semester/except-semester.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExceptSemesterComponent);
    return ExceptSemesterComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvZXhlY3VzZS1yZXF1ZXN0L2RpYWcvYWRkLWV4ZWN1c2UtdGVybS9hZGQtZXhlY3VzZS10ZXJtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<mat-dialog-content>\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\"> طلب الاعتذار عن الفصل الدراسي</h5>\r\n            \r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <P class=\"text-center\">  </P>\r\n          <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n            \r\n      \r\n          \r\n           \r\n         \r\n          <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\"> السبب</div>\r\n                  </div>\r\n                  <input required name=\"reason\" #reason=\"ngModel\" [(ngModel)]=\"postpone.reason\" class=\"form-control\" >\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n            \r\n              \r\n       \r\n           \r\n          <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                      <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n  \r\n            <button  [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n          </div>\r\n        </form>\r\n        </div>\r\n    </div>\r\n        \r\n     </div>\r\n  </mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddExecuseTermComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExecuseTermComponent", function() { return AddExecuseTermComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_academicprocs_services_term_execuse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/academicprocs/services/term-execuse.service */ "./src/app/academicprocs/services/term-execuse.service.ts");





var AddExecuseTermComponent = /** @class */ (function () {
    function AddExecuseTermComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
        this.imageSrc = '';
    }
    AddExecuseTermComponent.prototype.ngOnInit = function () {
        this.postpone = { reason: '' };
        this.reqData = this.acadmicProc.reqData;
    };
    AddExecuseTermComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            console.log(data);
            _this.msgs = res.messages;
            console.log(_this.msgs);
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddExecuseTermComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
        this.dialogRef.close();
    };
    AddExecuseTermComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddExecuseTermComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-execuse-term',
            template: __webpack_require__(/*! ./add-execuse-term.component.html */ "./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.html"),
            styles: [__webpack_require__(/*! ./add-execuse-term.component.css */ "./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_academicprocs_services_term_execuse_service__WEBPACK_IMPORTED_MODULE_4__["TermExecuseService"]])
    ], AddExecuseTermComponent);
    return AddExecuseTermComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/execuse-request/execuse-request.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/academicprocs/execuse-request/execuse-request.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvZXhlY3VzZS1yZXF1ZXN0L2V4ZWN1c2UtcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/academicprocs/execuse-request/execuse-request.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/academicprocs/execuse-request/execuse-request.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n  <div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n      {{msg.body}}!\r\n    </div>\r\n  <div style=\"direction: ltr;text-align: center\">\r\n    \r\n    <button *ngIf=\"!reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n    اضافة طلب\r\n  </button>\r\n  <br/>\r\n  <br/>\r\n  \r\n  </div>\r\n  <div>\r\n  <table style=\"text-align: center\" class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">رقم الطلب</th>\r\n  \r\n        <th scope=\"col\">تاريخ الطلب</th>\r\n        <th scope=\"col\">حالة الطلب</th>\r\n        <th scope=\"col\"> طباعة الطلب</th>\r\n        <th scope=\"col\"> حذف الطلب </th>\r\n  \r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let it of reqData.reqs;let i=index;\">\r\n        <td>{{it.request_number}}</td>\r\n       \r\n  \r\n        <td>{{it.insert_date}}</td>\r\n        <td>{{it.status}}</td>\r\n        <td><a class=\"btn btn-primary\" [href]=\"print(it.request_number)\" ><span class=\"glyphicon glyphicon-print\"></span>\r\n          Print</a></td>\r\n  \r\n        <td><button [disabled]='!it.deletable'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"></i> </button></td>\r\n  \r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/academicprocs/execuse-request/execuse-request.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/academicprocs/execuse-request/execuse-request.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExecuseRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuseRequestComponent", function() { return ExecuseRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_term_execuse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/term-execuse.service */ "./src/app/academicprocs/services/term-execuse.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _diag_add_execuse_term_add_execuse_term_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-execuse-term/add-execuse-term.component */ "./src/app/academicprocs/execuse-request/diag/add-execuse-term/add-execuse-term.component.ts");






var ExecuseRequestComponent = /** @class */ (function () {
    function ExecuseRequestComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    ExecuseRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reason = '';
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            //console.log(this.reqData.reqs);
        });
    };
    ExecuseRequestComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_execuse_term_add_execuse_term_component__WEBPACK_IMPORTED_MODULE_5__["AddExecuseTermComponent"], dialogConfig);
    };
    ExecuseRequestComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    ExecuseRequestComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    ExecuseRequestComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    ExecuseRequestComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                //console.log( this.status);
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
        }
    };
    ExecuseRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-execuse-request',
            template: __webpack_require__(/*! ./execuse-request.component.html */ "./src/app/academicprocs/execuse-request/execuse-request.component.html"),
            styles: [__webpack_require__(/*! ./execuse-request.component.css */ "./src/app/academicprocs/execuse-request/execuse-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _services_term_execuse_service__WEBPACK_IMPORTED_MODULE_2__["TermExecuseService"]])
    ], ExecuseRequestComponent);
    return ExecuseRequestComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvbGVjdHVyZXMtZXhlY3VzZXMvZGlhZy9hZGQtbGVjdHVyZXMtZXhlY3VzZXMvYWRkLWxlY3R1cmVzLWV4ZWN1c2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<mat-dialog-content>\r\n    \r\n  <div class=\"modal-header\">\r\n    <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\">   معادلة مقررات</h5>\r\n    \r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <P class=\"text-center\">---  </P>\r\n    <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n      \r\n    <div class=\"form-group\">\r\n       \r\n           <select name=\"week\" #week=\"ngModel\" [(ngModel)]=\"lectureExecuse.week\" class=\"form-control\" \r\n      [class.is-invalid]=\" lectureExecuse.week==''\">\r\n        <option value=\"\">الاسبوع  </option>\r\n        <option *ngFor=\"let item of reqData.weeks_list\" value=\"{{item.id}}\">{{item.value}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n       \r\n      <select name=\"reason\" #reason=\"ngModel\" [(ngModel)]=\"lectureExecuse.reason\" class=\"form-control\" \r\n [class.is-invalid]=\" lectureExecuse.reason==''\">\r\n   <option value=\"\">العذر  </option>\r\n   <option *ngFor=\"let item of reqData.text_list\" value=\"{{item.text1}}\">{{item.text1}}</option>\r\n </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n <select name=\"type\" #type=\"ngModel\" [(ngModel)]=\"lectureExecuse.type\" class=\"form-control\" \r\n [class.is-invalid]=\" lectureExecuse.reason==''\">\r\n   <option value=\"\">نوع المحاضره  </option>\r\n   <option *ngFor=\"let item of reqData.lectures_type\" value=\"{{item.id}}\">{{item.value}}</option>\r\n </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n <input class=\"form-control\" name=\"date\"  #date=\"ngModel\" [(ngModel)]=\"lectureExecuse.date\"   type=\"date\" style=\"direction: rtl;text-align:right\">\r\n</div>\r\n    <table style=\"text-align: center\" class=\"table\">\r\n        <thead>\r\n          <tr>\r\n              <th scope=\"col\">crn  </th>\r\n\r\n            <th scope=\"col\">اسم المقرر </th>\r\n    \r\n\r\n            <th scope=\"col\">   </th>\r\n      \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let it of reqData.schedules;let i=index;\">\r\n              <td>{{it.CRN}}</td>\r\n\r\n            <td>{{it.CRSE_TITLE}}</td>\r\n           \r\n      \r\n           \r\n           \r\n            \r\n      \r\n            <td>\r\n                <input type=\"checkbox\" name=\"chkCourse\" (change)=\"changeStatus(it,$event,i)\" #chkCourse  id=\"defaultUnchecked\">\r\n           </td>\r\n      \r\n          </tr>\r\n          \r\n        </tbody>\r\n      </table>\r\n      <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\">ملف  </div>\r\n          </div>\r\n          <input name=\"imageUrl\" type=\"file\" accept=\"*/*\" (change)=\"handleInputChange($event)\" />\r\n      </div> \r\n     \r\n    <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n\r\n      <button  type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n    </div>\r\n  </form>\r\n  </div>\r\n  \r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AddLecturesExecusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLecturesExecusesComponent", function() { return AddLecturesExecusesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_academicprocs_services_lecture_execuse_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/academicprocs/services/lecture-execuse-service.service */ "./src/app/academicprocs/services/lecture-execuse-service.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddLecturesExecusesComponent = /** @class */ (function () {
    function AddLecturesExecusesComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
        this.imageSrc = '';
    }
    AddLecturesExecusesComponent.prototype.ngOnInit = function () {
        this.lectureExecuse = { courses: [], attachment: '', reason: '', date: '', type: '', week: ''
        };
        this.reqData = this.acadmicProc.reqData;
        console.log(this.reqData);
    };
    AddLecturesExecusesComponent.prototype.changeStatus = function (it, e) {
        if (e.target.checked) {
            this.lectureExecuse.courses.push({ CRSE: it.CRN });
        }
        else {
            for (var i = 0; i < this.lectureExecuse.courses.length; i++) {
                console.log(this.lectureExecuse.courses[i]);
                console.log(it.CRN);
                if (this.lectureExecuse.courses[i].CRSE === it.CRN) {
                    this.lectureExecuse.courses.splice(i, 1);
                }
            }
        }
        console.log(this.lectureExecuse.courses);
    };
    AddLecturesExecusesComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AddLecturesExecusesComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.lectureExecuse.attachment = reader.result;
        console.log(this.lectureExecuse.attachment);
    };
    AddLecturesExecusesComponent.prototype.handleInputChange2 = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded2.bind(this);
        reader.readAsDataURL(file);
    };
    AddLecturesExecusesComponent.prototype._handleReaderLoaded2 = function (e) {
        var reader = e.target;
        this.lectureExecuse.attachment = reader.result;
        console.log(this.lectureExecuse.attachment);
    };
    AddLecturesExecusesComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddLecturesExecusesComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.lectureExecuse);
        console.log(this.lectureExecuse);
        this.dialogRef.close();
    };
    AddLecturesExecusesComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddLecturesExecusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-lectures-execuses',
            template: __webpack_require__(/*! ./add-lectures-execuses.component.html */ "./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.html"),
            styles: [__webpack_require__(/*! ./add-lectures-execuses.component.css */ "./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_academicprocs_services_lecture_execuse_service_service__WEBPACK_IMPORTED_MODULE_2__["LectureExecuseServiceService"]])
    ], AddLecturesExecusesComponent);
    return AddLecturesExecusesComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/lectures-execuses/lectures-execuses.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/academicprocs/lectures-execuses/lectures-execuses.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvbGVjdHVyZXMtZXhlY3VzZXMvbGVjdHVyZXMtZXhlY3VzZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/lectures-execuses/lectures-execuses.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/academicprocs/lectures-execuses/lectures-execuses.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n  {{msg.body}}!\r\n</div>\r\n<div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n<div style=\"direction: ltr;text-align: center\">\r\n  \r\n  <button *ngIf=\"reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n  اضافة طلب\r\n</button>\r\n<br/>\r\n<br/>\r\n\r\n</div>\r\n<div>\r\n<table style=\"text-align: center\" class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">رقم الطلب</th>\r\n\r\n      <th scope=\"col\"> CRN</th>\r\n      <th scope=\"col\"> المقرر </th>\r\n      <th scope=\"col\">  انشاء الطلب </th>\r\n      <th scope=\"col\"> تاريخ الغياب  </th>\r\n\r\n      <th scope=\"col\">  اسبوع الغياب</th>\r\n      <th scope=\"col\">   نوع المحاضره</th>\r\n      <th scope=\"col\">   حالة الطلب </th>\r\n      <th scope=\"col\">    ملف العذر </th>\r\n\r\n\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let it of reqData.requests;let i=index;\">\r\n      <td>{{it.request_number}}</td>\r\n      <td>{{it.courseId}}</td>\r\n      <td>{{it.course_title}}</td>\r\n      <td>{{it.insert_date}}</td>\r\n\r\n      <td>{{it.absance_date}}</td>\r\n      <td>{{it.week}}</td>\r\n\r\n      <td>{{it.class_type}}</td>\r\n\r\n\r\n\r\n      <td>{{it.status}}</td>\r\n\r\n      <td><a class=\"btn btn-primary\" [href]=\"print(it.request_number)\" ><span class=\"glyphicon glyphicon-print\"></span>\r\n        Print</a></td>\r\n\r\n\r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/academicprocs/lectures-execuses/lectures-execuses.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/academicprocs/lectures-execuses/lectures-execuses.component.ts ***!
  \********************************************************************************/
/*! exports provided: LecturesExecusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturesExecusesComponent", function() { return LecturesExecusesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lecture_execuse_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lecture-execuse-service.service */ "./src/app/academicprocs/services/lecture-execuse-service.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _diag_add_lectures_execuses_add_lectures_execuses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-lectures-execuses/add-lectures-execuses.component */ "./src/app/academicprocs/lectures-execuses/diag/add-lectures-execuses/add-lectures-execuses.component.ts");






var LecturesExecusesComponent = /** @class */ (function () {
    function LecturesExecusesComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    LecturesExecusesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lectureExecuse = { attachment: '', courses: [], date: '', reason: '', type: '', week: '' };
        this.acadmicProc.getRequests().then(function (res) {
            console.log(res);
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
        });
    };
    LecturesExecusesComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '70%';
        this.dialog.open(_diag_add_lectures_execuses_add_lectures_execuses_component__WEBPACK_IMPORTED_MODULE_5__["AddLecturesExecusesComponent"], dialogConfig);
    };
    LecturesExecusesComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    LecturesExecusesComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    LecturesExecusesComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    LecturesExecusesComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.toastr.success('', res.messages.body);
            });
            this.acadmicProc.reqData.reqs.splice(index, 1);
        }
    };
    LecturesExecusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lectures-execuses',
            template: __webpack_require__(/*! ./lectures-execuses.component.html */ "./src/app/academicprocs/lectures-execuses/lectures-execuses.component.html"),
            styles: [__webpack_require__(/*! ./lectures-execuses.component.css */ "./src/app/academicprocs/lectures-execuses/lectures-execuses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _services_lecture_execuse_service_service__WEBPACK_IMPORTED_MODULE_2__["LectureExecuseServiceService"]])
    ], LecturesExecusesComponent);
    return LecturesExecusesComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3Mvb2JqZWN0LWV4YW0vZGlhZy9hZGQtZXhhbS1vYmplY3QvYWRkLWV4YW0tb2JqZWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n   \r\n     \r\n  <div class=\"modal-header\">\r\n    <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\">    اضافة اعتراض على احد الاختبارات </h5>\r\n    \r\n  </div>\r\n  <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n  <div class=\"modal-body\">\r\n      \r\n    <p style=\"text-align:center\" >اختيار المنهج</p>\r\n\r\n    <table style=\"text-align: center\" class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">اسم المنهج </th>\r\n          <th scope=\"col\">اسم المعلم  </th>\r\n\r\n          <th scope=\"col\">   </th>\r\n    \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let it of exam.exams;let i=index;\">\r\n          <td>{{it.CRSE_TITLE}}</td>\r\n         \r\n    \r\n          <td>    <input    name=\"teacherName\"  class=\"form-control col-md-6\"  #TeacherID=\"ngModel\" [(ngModel)]=\"it.teacher\"  name=\"Teacher\" >\r\n          </td>\r\n         \r\n        \r\n          \r\n    \r\n          <td>\r\n              <input type=\"checkbox\" name=\"chkCourse\" (change)=\"changeStatus(it,$event)\" #chkCourse  > \r\n         </td>\r\n    \r\n        </tr>\r\n        \r\n      </tbody>\r\n    </table>\r\n    \r\n    <select class=\"form-control\" #BankID=\"ngModel\" [(ngModel)]=\"exam.bank\"  name=\"Bank\" [class.is-invalid]=\"exam.bank == -1\">\r\n      <option value=-1>اختر  البنك</option>\r\n      <option *ngFor=\"let bank of reqData.banks\" [value]=\"bank.id\">{{bank.value}}</option>\r\n    </select>\r\n\r\n    <br>\r\n\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-12\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\"> أسباب الاعتراض</div>\r\n          </div>\r\n          <input name=\"reason\" #reason=\"ngModel\" [(ngModel)]=\"exam.reason\" class=\"form-control\" >\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\"> رقم الحساب</div>\r\n          </div>\r\n          <input   #accountNumber=\"ngModel\" name=\"accountNumber\" [(ngModel)]=\"exam.account_number\"  class=\"form-control\" type=\"text\" >\r\n        </div>\r\n        <br>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\"> الضريبة</div>\r\n          </div>\r\n          <input   #feesAmount=\"ngModel\" name=\"feesAmount\" [(ngModel)]=\"exam.fees_amount\" class=\"form-control\"  type=\"text\" >\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n    \r\n    <!-- <select class=\"form-control\" #bankIDD=\"ngModel\" [(ngModel)]=\"exam.bank\"  name=\"Bank\" [class.is-invalid]=\"exam.bank == ''\">\r\n      <option value=''>اختر  البنك</option>\r\n      <option *ngFor=\"let bank of reqData.banks\" [value]=\"bank.key\">{{bank.value}}</option>\r\n    </select> -->\r\n    \r\n\r\n\r\n    <br>\r\n        <div class=\"image-upload\">\r\n            <input name=\"Url\" type=\"file\" accept=\"*/*\" (change)=\"handleInputChange($event)\" />\r\n        </div> \r\n       \r\n      <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                  <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n\r\n        <button  type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n      </div>\r\n      </div>\r\n    </form>\r\n\r\n    \r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddExamObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamObjectComponent", function() { return AddExamObjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_academicprocs_services_object_exam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/academicprocs/services/object-exam.service */ "./src/app/academicprocs/services/object-exam.service.ts");





var AddExamObjectComponent = /** @class */ (function () {
    //exams;
    //courses:[];
    //teacherName:string;
    //choosedCode:string;
    //private imageSrc = '';
    function AddExamObjectComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    AddExamObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.changeRequest = {camp: []};
        //this.exam = {camp:''};
        this.exam = { courses: [], exams: [], bank: -1, reason: "", account_number: "", fees_amount: "", attachment: "" };
        this.acadmicProc.getgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            _this.exam.exams = _this.acadmicProc.reqData.exams;
            //this.canAdd = this.reqData.can_add_new_request;
            //this.exams=this.reqData.exams;
            //console.log(this.reqData.banks[0]);
        });
    };
    AddExamObjectComponent.prototype.addRequest = function (data) {
        var _this = this;
        data.bank = parseInt(data.bank);
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
            console.log(data);
        });
        //this.cmp = {camp:''};
    };
    AddExamObjectComponent.prototype.onSubmit = function () {
        /*let dropDown;
        dropDown = document.getElementById("selected_id") as HTMLSelectElement;
        let selectedItem =dropDown[dropDown.selectedIndex];
        //console.log(selectedItem.innerHTML  + "" + selectedItem.value);
        this.changeRequest.camp.push({key:selectedItem.innerHTML,value:selectedItem.value});*/
        /*if(this.changeRequest.camp.length == 0)
          return;*/
        //this.exam.fees_amount="200";
        //this.exam.account_number="4444-uu-df";
        this.addRequest(this.exam);
        this.dialogRef.close();
    };
    AddExamObjectComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddExamObjectComponent.prototype.changeStatus = function (item, e) {
        //console.log(index);
        if (e.target.checked) {
            console.log(item);
            //let teacherName = item.teacher;
            this.exam.courses.push({ CRSE: parseInt(item.CRN), teacher: item.teacher });
        }
        else {
            // let id = e.target.getAttribute('data-CheckBoxId');
            //console.log(e.target);
            for (var i = 0; i < this.exam.courses.length; i++) {
                if (this.exam.courses[i].CRSE == item.CRN)
                    this.exam.courses.splice(i, 1);
            }
            //this.exam.courses.splice(index, 1);
            //console.log(22);
        }
        // console.log(this.exam.courses);
    };
    AddExamObjectComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AddExamObjectComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.exam.attachment = reader.result;
        console.log(this.exam.attachment);
    };
    AddExamObjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-exam-object',
            template: __webpack_require__(/*! ./add-exam-object.component.html */ "./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.html"),
            styles: [__webpack_require__(/*! ./add-exam-object.component.css */ "./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_academicprocs_services_object_exam_service__WEBPACK_IMPORTED_MODULE_4__["ObjectExamService"]])
    ], AddExamObjectComponent);
    return AddExamObjectComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/object-exam/object-exam.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/academicprocs/object-exam/object-exam.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3Mvb2JqZWN0LWV4YW0vb2JqZWN0LWV4YW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/object-exam/object-exam.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/academicprocs/object-exam/object-exam.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n  {{msg.body}}!\r\n</div>\r\n\r\n<div style=\"direction: ltr;text-align: center\">\r\n  \r\n  <button *ngIf=\"!reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n  اضافة طلب\r\n</button>\r\n<br/>\r\n<br/>\r\n\r\n</div>\r\n<div>\r\n<table style=\"text-align: center\" class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">CRN</th>\r\n      <th scope=\"col\">اسم المقرر</th>\r\n\r\n      <th scope=\"col\">تاريخ انشاء الطلب</th>\r\n\r\n      <th scope=\"col\">حالة الطلب</th>\r\n      <th scope=\"col\">الاجراء</th>\r\n\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let it of reqData.requests;let i=index;\">\r\n      <td>{{it.courseId}}</td>\r\n      <td>{{it.course_title}}</td>\r\n      <td>{{it.insert_date}}</td>\r\n\r\n      <td>{{it.status}}</td>\r\n      \r\n\r\n      <td><button [disabled]='!it.deletable'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"></i> </button></td>\r\n\r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/academicprocs/object-exam/object-exam.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/academicprocs/object-exam/object-exam.component.ts ***!
  \********************************************************************/
/*! exports provided: ObjectExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectExamComponent", function() { return ObjectExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_object_exam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/object-exam.service */ "./src/app/academicprocs/services/object-exam.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _diag_add_exam_object_add_exam_object_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-exam-object/add-exam-object.component */ "./src/app/academicprocs/object-exam/diag/add-exam-object/add-exam-object.component.ts");






var ObjectExamComponent = /** @class */ (function () {
    function ObjectExamComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    ObjectExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acadmicProc.getRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            console.log(_this.reqData.banks.CRN);
            console.log(res.status);
        });
    };
    ObjectExamComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_exam_object_add_exam_object_component__WEBPACK_IMPORTED_MODULE_5__["AddExamObjectComponent"], dialogConfig);
    };
    /* addRequest(data) {
      this.acadmicProc.AddRequest(data).then(  res => {
        this.acadmicProc.msgs = (res as any).messages;
          });
    }
    onSubmit(form: NgForm) {
  this.addRequest(form.value);
  
  
    }
  
    */
    ObjectExamComponent.prototype.delete = function (id, index) {
        // console.log(id);
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                //console.log((res as any).status);
                _this.msgs = res.messages;
                _this.status = res.status;
                //console.log(this.status);
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
            //console.log(this.status);
        }
    };
    ObjectExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-object-exam',
            template: __webpack_require__(/*! ./object-exam.component.html */ "./src/app/academicprocs/object-exam/object-exam.component.html"),
            styles: [__webpack_require__(/*! ./object-exam.component.css */ "./src/app/academicprocs/object-exam/object-exam.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _services_object_exam_service__WEBPACK_IMPORTED_MODULE_3__["ObjectExamService"]])
    ], ObjectExamComponent);
    return ObjectExamComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvcG9zdHBvbmUtcmVxdWVzdC9kaWFnL2FkZC1wb3N0cG9uZS9hZGQtcG9zdHBvbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<mat-dialog-content>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\"> طلب تأجيل من الجامعه</h5>\r\n        \r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <P class=\"text-center\">  </P>\r\n        <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n          \r\n    \r\n        \r\n         \r\n       \r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"> السبب</div>\r\n                </div>\r\n                <input name=\"reason\" #reason=\"ngModel\" [(ngModel)]=\"postpone.reason\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n          \r\n            \r\n     \r\n         \r\n        <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                    <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n\r\n          <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n        </div>\r\n      </form>\r\n      </div>\r\n  </div>\r\n      \r\n   </div>\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddPostponeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostponeComponent", function() { return AddPostponeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_academicprocs_services_term_postpone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/academicprocs/services/term-postpone.service */ "./src/app/academicprocs/services/term-postpone.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddPostponeComponent = /** @class */ (function () {
    function AddPostponeComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
        this.imageSrc = '';
    }
    AddPostponeComponent.prototype.ngOnInit = function () {
        this.postpone = { reason: '' };
        this.reqData = this.acadmicProc.reqData;
    };
    AddPostponeComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            console.log(data);
            _this.msgs = res.messages;
            console.log(_this.msgs);
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddPostponeComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
        this.dialogRef.close();
    };
    AddPostponeComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddPostponeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-postpone',
            template: __webpack_require__(/*! ./add-postpone.component.html */ "./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.html"),
            styles: [__webpack_require__(/*! ./add-postpone.component.css */ "./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_academicprocs_services_term_postpone_service__WEBPACK_IMPORTED_MODULE_3__["TermPostponeService"]])
    ], AddPostponeComponent);
    return AddPostponeComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/postpone-request/postpone-request.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/academicprocs/postpone-request/postpone-request.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvcG9zdHBvbmUtcmVxdWVzdC9wb3N0cG9uZS1yZXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/postpone-request/postpone-request.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/academicprocs/postpone-request/postpone-request.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n  {{msg.body}}!\r\n</div>\r\n<div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n<div style=\"direction: ltr;text-align: center\">\r\n  \r\n  <button *ngIf=\"reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n  اضافة طلب\r\n</button>\r\n<br/>\r\n<br/>\r\n\r\n</div>\r\n<div>\r\n<table style=\"text-align: center\" class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">رقم الطلب</th>\r\n\r\n      <th scope=\"col\">تاريخ الطلب</th>\r\n      <th scope=\"col\">حالة الطلب</th>\r\n      <th scope=\"col\"> طباعة الطلب</th>\r\n      <th scope=\"col\"> حذف الطلب </th>\r\n\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let it of reqData.reqs;let i=index;\">\r\n      <td>{{it.request_number}}</td>\r\n     \r\n\r\n      <td>{{it.insert_date}}</td>\r\n      <td>{{it.status}}</td>\r\n      <td><a class=\"btn btn-primary\" [href]=\"print(it.request_number)\" ><span class=\"glyphicon glyphicon-print\"></span>\r\n        Print</a></td>\r\n\r\n      <td><button [disabled]='it.deletable || it.time_to_delete_per_hour<=0'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"><app-timer [hr]=\"it.time_to_delete_per_hour\"></app-timer></i> </button></td>\r\n\r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/academicprocs/postpone-request/postpone-request.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/academicprocs/postpone-request/postpone-request.component.ts ***!
  \******************************************************************************/
/*! exports provided: PostponeRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostponeRequestComponent", function() { return PostponeRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_term_postpone_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/term-postpone.service */ "./src/app/academicprocs/services/term-postpone.service.ts");
/* harmony import */ var _diag_add_postpone_add_postpone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-postpone/add-postpone.component */ "./src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component.ts");






var PostponeRequestComponent = /** @class */ (function () {
    function PostponeRequestComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    PostponeRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reason = '';
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
        });
    };
    PostponeRequestComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_postpone_add_postpone_component__WEBPACK_IMPORTED_MODULE_5__["AddPostponeComponent"], dialogConfig);
    };
    PostponeRequestComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    PostponeRequestComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    PostponeRequestComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    PostponeRequestComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
        }
    };
    PostponeRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postpone-request',
            template: __webpack_require__(/*! ./postpone-request.component.html */ "./src/app/academicprocs/postpone-request/postpone-request.component.html"),
            styles: [__webpack_require__(/*! ./postpone-request.component.css */ "./src/app/academicprocs/postpone-request/postpone-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_term_postpone_service__WEBPACK_IMPORTED_MODULE_4__["TermPostponeService"]])
    ], PostponeRequestComponent);
    return PostponeRequestComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvcmUtZWVucm9sbG1lbnQvZGlhZy9hZGQtcmUtZW5yb2xsL2FkZC1yZS1lbnJvbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<mat-dialog-content>\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\"> طلب اعادة قيد   </h5>\r\n            \r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <P class=\"text-center\">  </P>\r\n          <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n            \r\n      \r\n          \r\n           \r\n         \r\n          <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\"> السبب</div>\r\n                  </div>\r\n                  <input name=\"reason\" #reason=\"ngModel\" [(ngModel)]=\"reEnroll.reason\" class=\"form-control\" >\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n            \r\n            <div class=\"image-upload\">\r\n                <input name=\"imageUrl\" type=\"file\" accept=\"*/*\" (change)=\"handleInputChange($event)\" />\r\n            </div> \r\n       \r\n           \r\n          <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                      <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n  \r\n            <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n          </div>\r\n        </form>\r\n        </div>\r\n    </div>\r\n        \r\n     </div>\r\n  </mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddReEnrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReEnrollComponent", function() { return AddReEnrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_academicprocs_services_re_enroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/academicprocs/services/re-enroll.service */ "./src/app/academicprocs/services/re-enroll.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddReEnrollComponent = /** @class */ (function () {
    function AddReEnrollComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    AddReEnrollComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reEnroll = { proof: '', reason: '', has_proof: '1' };
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
        });
    };
    AddReEnrollComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddReEnrollComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.reEnroll);
        console.log(this.reEnroll);
        this.dialogRef.close();
    };
    AddReEnrollComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        /* if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
         */
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AddReEnrollComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.reEnroll.proof = reader.result;
        console.log(this.reEnroll.proof);
    };
    AddReEnrollComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    AddReEnrollComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.toastr.success('', res.messages.body);
            });
            this.acadmicProc.reqData.reqs.splice(index, 1);
        }
    };
    AddReEnrollComponent.prototype.call = function (hr) {
        return Math.floor(Math.random() * 10) + hr;
    };
    AddReEnrollComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddReEnrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-re-enroll',
            template: __webpack_require__(/*! ./add-re-enroll.component.html */ "./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.html"),
            styles: [__webpack_require__(/*! ./add-re-enroll.component.css */ "./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_academicprocs_services_re_enroll_service__WEBPACK_IMPORTED_MODULE_2__["ReEnrollService"]])
    ], AddReEnrollComponent);
    return AddReEnrollComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/re-eenrollment/re-eenrollment.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/academicprocs/re-eenrollment/re-eenrollment.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvcmUtZWVucm9sbG1lbnQvcmUtZWVucm9sbG1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/re-eenrollment/re-eenrollment.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/academicprocs/re-eenrollment/re-eenrollment.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n  <div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n      {{msg.body}}!\r\n    </div>\r\n  <div style=\"direction: ltr;text-align: center\">\r\n    \r\n    <button *ngIf=\"reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n    اضافة طلب\r\n  </button>\r\n  <br/>\r\n  <br/>\r\n  \r\n  </div>\r\n  <div>\r\n  <table style=\"text-align: center\" class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">رقم الطلب</th>\r\n  \r\n        <th scope=\"col\">تاريخ الطلب</th>\r\n        <th scope=\"col\">حالة الطلب</th>\r\n        <th scope=\"col\"> طباعة الطلب</th>\r\n        <th scope=\"col\"> حذف الطلب </th>\r\n  \r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let it of reqData.requests;let i=index;\">\r\n        <td>{{it.request_number}}</td>\r\n  \r\n        <td>{{it.insert_date}}</td>\r\n        <td>{{it.status}}</td>\r\n        <td><a class=\"btn btn-primary\" [href]=\"print(it.request_number)\" ><span class=\"glyphicon glyphicon-print\"></span>\r\n          Print</a></td>\r\n  \r\n        <td><button [disabled]='!it.deletable || it.time_to_delete_per_hour<=0'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"><app-timer [hr]=\"it.time_to_delete_per_hour\"></app-timer></i> </button></td>\r\n  \r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/academicprocs/re-eenrollment/re-eenrollment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/academicprocs/re-eenrollment/re-eenrollment.component.ts ***!
  \**************************************************************************/
/*! exports provided: ReEenrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReEenrollmentComponent", function() { return ReEenrollmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_re_enroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/re-enroll.service */ "./src/app/academicprocs/services/re-enroll.service.ts");
/* harmony import */ var _diag_add_re_enroll_add_re_enroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-re-enroll/add-re-enroll.component */ "./src/app/academicprocs/re-eenrollment/diag/add-re-enroll/add-re-enroll.component.ts");






var ReEenrollmentComponent = /** @class */ (function () {
    function ReEenrollmentComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    ReEenrollmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reEnroll = { proof: '', reason: '', has_proof: '1' };
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
        });
    };
    ReEenrollmentComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_re_enroll_add_re_enroll_component__WEBPACK_IMPORTED_MODULE_5__["AddReEnrollComponent"], dialogConfig);
    };
    ReEenrollmentComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    ReEenrollmentComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    ReEenrollmentComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    ReEenrollmentComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
        }
    };
    ReEenrollmentComponent.prototype.call = function (hr) {
        return Math.floor(Math.random() * 10) + hr;
    };
    ReEenrollmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-re-eenrollment',
            template: __webpack_require__(/*! ./re-eenrollment.component.html */ "./src/app/academicprocs/re-eenrollment/re-eenrollment.component.html"),
            styles: [__webpack_require__(/*! ./re-eenrollment.component.css */ "./src/app/academicprocs/re-eenrollment/re-eenrollment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_re_enroll_service__WEBPACK_IMPORTED_MODULE_4__["ReEnrollService"]])
    ], ReEenrollmentComponent);
    return ReEenrollmentComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/register-wishes/register-wishes.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/academicprocs/register-wishes/register-wishes.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvcmVnaXN0ZXItd2lzaGVzL3JlZ2lzdGVyLXdpc2hlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/academicprocs/register-wishes/register-wishes.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/academicprocs/register-wishes/register-wishes.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div>\n    <div *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\n      {{msg.body}}! \n    </div>\n\n\n\n\n    <div class=\"widget\">\n      <div class=\"widget-header\">\n        <h3 class=\"widget-title\">بيانات الطالب / الطالبة</h3>\n      </div>\n\n\n      <section class=\"ser-state\">\n        <div class=\"container\">\n          <div class=\"row ser-block\">\n            <div class=\" col-md-6 col-sm-12\">\n              <div class=\"state\">\n                <h6>اسم الطالب / الطالبة </h6>\n                <h5>{{reqData.student_name}} </h5>\n              </div>\n              <div class=\"progress progress-sm\">\n                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n              </div>\n            </div>\n            <div class=\" col-md-6 col-sm-12\">\n              <div class=\"state\">\n                <h6>رقم الطالب / الطالبة </h6>\n                <h5>{{reqData.student_id}} </h5>\n              </div>\n              <div class=\"progress progress-sm\">\n                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"row ser-block\">\n            <div class=\" col-md-6 col-sm-12\">\n              <div class=\"state\">\n                <h6>الكلية </h6>\n                <h5>{{reqData.colledge}} </h5>\n              </div>\n              <div class=\"progress progress-sm\">\n                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n              </div>\n            </div>\n            <div class=\" col-md-6 col-sm-12\">\n              <div class=\"state\">\n                <h6>التخصص </h6>\n                <h5>{{reqData.major}} </h5>\n              </div>\n              <div class=\"progress progress-sm\">\n                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"row  ser-block\">\n            <div class=\" col-md-6 col-sm-12\">\n              <div class=\"state\">\n                <h6>الحالة الأكاديمية </h6>\n                <h5>{{reqData.academic_status}} </h5>\n              </div>\n              <div class=\"progress progress-sm\">\n                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n              </div>\n            </div>\n            <div class=\" col-md-6 col-sm-12\">\n              <div class=\"state\">\n                <h6>فرع الدراسة </h6>\n                <h5>{{reqData.branch}} </h5>\n              </div>\n              <div class=\"progress progress-sm\">\n                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n\n\n    </div>\n    <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n      <section class=\"ser-state\">\n        <div class=\"widget\">\n          <div class=\"widget-header\">\n\n            <h3 class=\"widget-title\"> اختر الرغبات</h3>\n          </div>\n\n          <div class=\"container\">\n            <div class=\"row ser-block\">\n              <div class=\" col-md-4 col-sm-12\">\n                <div class=\"state\">\n                  <h6>هل ترغب ب يومين (يبدأ من 5 مساء) </h6>\n                  <input type=\"checkbox\" class=\"checkbox\" style=\"height: 20px;width:20px;\" #TowDaya=\"ngModel\" [(ngModel)]=\"registerWishes.tow_days\"\n                    name=\"TowDaya\" ng-true-value=0 ng-false-value=1>\n                </div>\n                <div class=\"progress progress-sm\">\n                  <div class=\"progress-bar bg-info\" style=\"width: 25%;\"></div>\n                </div>\n              </div>\n              <div class=\" col-md-4 col-sm-12\">\n                <div class=\"state\">\n                  <h6>الأيام و الفترات المتاحة </h6>\n                  <select required class=\"form-control\" #Wishes=\"ngModel\" [(ngModel)]=\"registerWishes.wish\"\n                    name=\"Wishes\" [class.is-invalid]=\"registerWishes.wish == ''\">\n                    <option value=''>اختر الفترة المتاحة</option>\n                    <option *ngFor=\"let wish of reqData.wishes_list\" [value]=\"wish.id\">{{wish.value}}</option>\n                  </select>\n\n                </div>\n                <div class=\"progress progress-sm\">\n                  <div class=\"progress-bar bg-info\" style=\"width: 25%;\"></div>\n                </div>\n              </div>\n\n              <div class=\" col-md-4 col-sm-12\">\n                <div class=\"state\">\n                  <h6> <br /> </h6>\n                  <button [disabled]=\"reqData.can_add_new_request\" type=\"submit\" class=\"btn btn-dark\"><i\n                      class=\"fa fa-database\"></i> ارسال الطلب</button>\n\n                </div>\n                <!--  <div class=\"progress progress-sm\">\n                      <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n                    </div>-->\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </section>\n    </form>\n\n    <div class=\"widget\">\n      <div class=\"widget-header\">\n\n\n\n\n        <h3 class=\"widget-title\"> الرغبات التي قمت بإدخالها</h3>\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped table-bordered\">\n          <thead style=\"background: #ebecf0\">\n\n            <tr>\n              <th scope=\"col\">ترتيب الرغبة</th>\n\n              <th scope=\"col\">اليوم و الفترة</th>\n              <th scope=\"col\"> تاريخ الطلب</th>\n              <th scope=\"col\"> إلغاء الطلب</th>\n\n\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let it of reqData.requests;let i=index;\">\n              <td>{{it.sort}}</td>\n\n\n              <td>{{it.duration}}</td>\n              <td>{{it.insert_date}}</td>\n\n              <td><button class=\"btn btn-sm btn-danger\" style=\"color: white\" (click)=\"delete(it.request_number,i)\"><i\n                    class=\"fa fa-trash\"></i> </button></td>\n              <!--[disabled]='!it.deletable'-->\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/academicprocs/register-wishes/register-wishes.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/academicprocs/register-wishes/register-wishes.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterWishesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterWishesComponent", function() { return RegisterWishesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_register_wishes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/register-wishes.service */ "./src/app/academicprocs/services/register-wishes.service.ts");





var RegisterWishesComponent = /** @class */ (function () {
    function RegisterWishesComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    RegisterWishesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerWishes = { tow_days: 0, wish: '' };
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
        });
    };
    RegisterWishesComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                console.log(id);
                var messages = res.messages;
                _this.status = res.status;
                messages.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1) {
                    _this.acadmicProc.reqData.requests.splice(index, 1);
                }
            });
        }
    };
    RegisterWishesComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.registerWishes);
    };
    RegisterWishesComponent.prototype.addRequest = function (data) {
        //console.log(data);
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            var msgss = res.messages;
            msgss.forEach(function (element) {
                _this.toastr.success('', element.body);
                _this.registerWishes = { tow_days: 0, wish: '' };
            });
        });
        //this.cmp = {camp:''};
    };
    RegisterWishesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-wishes',
            template: __webpack_require__(/*! ./register-wishes.component.html */ "./src/app/academicprocs/register-wishes/register-wishes.component.html"),
            styles: [__webpack_require__(/*! ./register-wishes.component.css */ "./src/app/academicprocs/register-wishes/register-wishes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_register_wishes_service__WEBPACK_IMPORTED_MODULE_4__["RegisterWishesService"]])
    ], RegisterWishesComponent);
    return RegisterWishesComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.css":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvcmVnaXN0ZXJhdGlvbi1oZWxwZXIvZGlhZy9hZGQtcmVnaXN0ZXJhdGlvbi1oZWxwZXIvYWRkLXJlZ2lzdGVyYXRpb24taGVscGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content style=\"height: 2500px\">\n\n\n    <div class=\"widget\">\n        <!--<div class=\"widget-header\">\n          <h3 class=\"widget-title\"> تسجيل طلب</h3>\n        </div>\n      -->\n        \n  <mat-spinner  *ngIf=\"isLoading\" style=\"position: absolute;z-index: 10000;; margin: auto; top: 0; right: 0;  bottom: 0;left: 0; width: 10px; height: 10px;\"></mat-spinner>\n\n     \n\n      <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n\n        <section class=\"ser-state\">\n          <div class=\"container\">\n            <div class=\"row ser-block\">\n              <div class=\" col-md-6 col-sm-12\">\n                <div class=\"state\">\n                  <h6>الكلية </h6>\n                  <select required class=\"form-control\" #CollegeID=\"ngModel\" [(ngModel)]=\"registerationHelper.colledge\"\n                    name=\"College\" [class.is-invalid]=\"registerationHelper.colledge == ''\" #t\n                    (change)=\"collegeCourses(t.value)\">\n\n                    <option *ngFor=\"let coll of colleges\" [value]=\"coll.id\">{{coll.value}}</option>\n                  </select>\n\n                </div>\n                <div class=\"progress progress-sm\">\n                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n                </div>\n              </div>\n              <div class=\" col-md-6 col-sm-12\">\n                <div class=\"state\">\n                  <h6>المقررات </h6>\n                  <select required class=\"form-control\" #CourseID=\"ngModel\" [(ngModel)]=\"registerationHelper.course\"\n                    name=\"CourseID\" [class.is-invalid]=\"registerationHelper.course == ''\" #c\n                    (change)=\"courseDepartments(c.value)\">\n                    <option value=''>اختر المقرر</option>\n                    <option *ngFor=\"let course of courses\" [value]=\"course.CRS_CODE\">{{course.CRSE_TITLE}}</option>\n                  </select>\n                </div>\n                <div class=\"progress progress-sm\">\n                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"row ser-block\">\n              <div class=\" col-md-6 col-sm-12\">\n                <div class=\"state\">\n                  <h6>الشعب </h6>\n                  <select required class=\"form-control\" #DeptID=\"ngModel\" [(ngModel)]=\"registerationHelper.department\"\n                    name=\"DeptID\" [class.is-invalid]=\"registerationHelper.department == ''\">\n                    <option value=''>اختر الشعبة</option>\n                    <option *ngFor=\"let dept of departments\" [value]=\"dept.CRN\">{{dept.BLDG_DESC}}</option>\n                  </select>\n                </div>\n                <div class=\"progress progress-sm\">\n                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n                </div>\n              </div>\n              <div class=\" col-md-6 col-sm-12\">\n                <div class=\"state\">\n                  <h6>رسالة الخطأ </h6>\n                  <select required class=\"form-control\" #ErrorMsgID=\"ngModel\" [(ngModel)]=\"registerationHelper.message\"\n                    name=\"ErrorMsgID\" [class.is-invalid]=\"registerationHelper.message == ''\">\n                    <option *ngFor=\"let msg of errorMessages\" [value]=\"msg.id\">{{msg.value}}</option>\n                  </select>\n                </div>\n                <div class=\"progress progress-sm\">\n                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"row  ser-block\">\n              <div class=\" col-md-12 col-sm-12\">\n                <div class=\"state\">\n                  <h6>ملاحظات </h6>\n                  <textarea [class.is-invalid]=\"form.invalid\" type=\"text\" class=\"form-control\" [(ngModel)]=\"registerationHelper.comment\"\n                    #NotesID=\"ngModel\" name=\"NotesID\" required></textarea>\n\n                </div>\n                <div class=\"progress progress-sm\">\n                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </section>\n\n        <div class=\"modal-body\">\n          <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" (click)=\"closeDiag()\" class=\"btn btn-outline-dark ml-1\"><i class=\"fa fa-close\"></i>\n              الغاء</button>\n\n            <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\n          </div>\n        </div>\n      </form>\n    </div>\n \n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AddRegisterationHelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRegisterationHelperComponent", function() { return AddRegisterationHelperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_academicprocs_services_registration_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/academicprocs/services/registration-helper.service */ "./src/app/academicprocs/services/registration-helper.service.ts");





var AddRegisterationHelperComponent = /** @class */ (function () {
    function AddRegisterationHelperComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
        this.isLoading = false;
    }
    AddRegisterationHelperComponent.prototype.ngOnInit = function () {
        this.registerationHelper = { colledge: '', course: '', department: '', comment: '', message: '' };
        this.reqData = this.acadmicProc.reqData;
        this.colleges = this.acadmicProc.reqData.colledges;
        this.errorMessages = this.acadmicProc.reqData.error_messages;
    };
    AddRegisterationHelperComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.registerationHelper);
        this.dialogRef.close();
    };
    AddRegisterationHelperComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddRegisterationHelperComponent.prototype.addRequest = function (data) {
        var _this = this;
        //console.log(data);
        this.isLoading = true;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
            _this.isLoading = false;
        });
        //this.cmp = {camp:''};
    };
    AddRegisterationHelperComponent.prototype.collegeCourses = function (collegeId) {
        var _this = this;
        this.isLoading = true;
        this.acadmicProc.getِgetCourse(collegeId).then(function (res) {
            _this.acadmicProc.courses = res.data;
            _this.courses = _this.acadmicProc.courses;
            _this.isLoading = false;
        });
    };
    AddRegisterationHelperComponent.prototype.courseDepartments = function (courseId) {
        var _this = this;
        this.isLoading = true;
        this.acadmicProc.getِgetDepartments(courseId).then(function (res) {
            _this.acadmicProc.departments = res.data;
            _this.departments = _this.acadmicProc.departments;
            _this.isLoading = false;
        });
    };
    AddRegisterationHelperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-registeration-helper',
            template: __webpack_require__(/*! ./add-registeration-helper.component.html */ "./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.html"),
            styles: [__webpack_require__(/*! ./add-registeration-helper.component.css */ "./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_academicprocs_services_registration_helper_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationHelperService"]])
    ], AddRegisterationHelperComponent);
    return AddRegisterationHelperComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/registeration-helper/registeration-helper.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/academicprocs/registeration-helper/registeration-helper.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvcmVnaXN0ZXJhdGlvbi1oZWxwZXIvcmVnaXN0ZXJhdGlvbi1oZWxwZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/registeration-helper/registeration-helper.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/academicprocs/registeration-helper/registeration-helper.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n  <div *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\n    {{msg.body}}!\n  </div>\n\n\n\n\n  <div class=\"widget\">\n    <div class=\"widget-header\">\n      <h3 class=\"widget-title\">الجدول الدراسي</h3>\n    </div>\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-bordered\">\n        <thead style=\"background: #ebecf0\">\n\n          <tr>\n            <th scope=\"col\">CRN</th>\n\n            <th scope=\"col\">المادة</th>\n            <th scope=\"col\"> اليوم</th>\n            <th scope=\"col\"> الوقت</th>\n\n\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let it of reqData.schedule;let i=index;\">\n            <td>{{it.CRN}}</td>\n\n\n            <td>{{it.CRSE_TITLE}}</td>\n            <td>{{it.DAYES}}</td>\n            <td>{{it.LECT_TIME}}</td>\n\n\n\n\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n\n\n\n\n  <div class=\"widget\">\n    <div class=\"widget-header\">\n\n      <button *ngIf=\"!reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\" (click)=\"openDialoge()\">\n        اضافة طلب\n      </button>\n      <h3 class=\"widget-title\"> الطلبات السابقة</h3>\n    </div>\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped table-bordered\">\n        <thead style=\"background: #ebecf0\">\n\n          <tr>\n            <th scope=\"col\">المقرر</th>\n\n            <th scope=\"col\">رسالة الخطأ</th>\n            <th scope=\"col\"> تاريخ الطلب</th>\n            <th scope=\"col\"> الحالة</th>\n            <th scope=\"col\"> ملاحظات</th>\n            <th scope=\"col\"> إلغاء الطلب</th>\n\n\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let it of reqData.requests;let i=index;\">\n            <td>{{it.course}}</td>\n\n\n            <td>{{it.message}}</td>\n            <td>{{it.insert_date}}</td>\n            <td>{{it.status}}</td>\n            <td>{{it.admin_note}}</td>\n\n            <td><button [disabled]='!it.deletable' class=\"btn btn-sm btn-danger\" style=\"color: white\"\n                (click)=\"delete(it.request_number,i)\"><i class=\"fa fa-trash\"></i> </button></td>\n            <!--[disabled]='!it.deletable'-->\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/academicprocs/registeration-helper/registeration-helper.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/academicprocs/registeration-helper/registeration-helper.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RegisterationHelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationHelperComponent", function() { return RegisterationHelperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_registration_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/registration-helper.service */ "./src/app/academicprocs/services/registration-helper.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _diag_add_registeration_helper_add_registeration_helper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-registeration-helper/add-registeration-helper.component */ "./src/app/academicprocs/registeration-helper/diag/add-registeration-helper/add-registeration-helper.component.ts");






var RegisterationHelperComponent = /** @class */ (function () {
    /*colleges: any;
    college: { theCollege };
  
    errorMessages: any;
    errorMessage: { theMessages };*/
    function RegisterationHelperComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    RegisterationHelperComponent.prototype.ngOnInit = function () {
        // this.cancelCousre = {courses: null, agreement: 1};
        var _this = this;
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            //this.colleges = this.acadmicProc.reqData.colledges;
            //  this.errorMessages = this.acadmicProc.reqData.error_messages;
            // console.log(this.reqData.reqs);
        });
    };
    RegisterationHelperComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                console.log(id);
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1) {
                    _this.acadmicProc.reqData.requests.splice(index, 1);
                }
            });
        }
    };
    RegisterationHelperComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '60%';
        dialogConfig.height = '80%';
        dialogConfig.direction = "rtl";
        this.dialog.open(_diag_add_registeration_helper_add_registeration_helper_component__WEBPACK_IMPORTED_MODULE_5__["AddRegisterationHelperComponent"], dialogConfig);
    };
    RegisterationHelperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registeration-helper',
            template: __webpack_require__(/*! ./registeration-helper.component.html */ "./src/app/academicprocs/registeration-helper/registeration-helper.component.html"),
            styles: [__webpack_require__(/*! ./registeration-helper.component.css */ "./src/app/academicprocs/registeration-helper/registeration-helper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_registration_helper_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationHelperService"]])
    ], RegisterationHelperComponent);
    return RegisterationHelperComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/cancel-course.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/academicprocs/services/cancel-course.service.ts ***!
  \*****************************************************************/
/*! exports provided: CancelCourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelCourseService", function() { return CancelCourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var CancelCourseService = /** @class */ (function () {
    function CancelCourseService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    CancelCourseService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('course_cancel?std_id=S120000101').toPromise();
    };
    CancelCourseService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('course_cancel/insert?std_id=S120000101', data).toPromise();
    };
    CancelCourseService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('course_cancel/remove/' + id + '?std_id=S120000101').toPromise();
    };
    CancelCourseService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/course_cancel/download/crse_cancel/' + req + '?std_id=S160239561';
    };
    CancelCourseService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/crse_cancel/download?Lang=en';
    };
    CancelCourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], CancelCourseService);
    return CancelCourseService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/change-major.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/academicprocs/services/change-major.service.ts ***!
  \****************************************************************/
/*! exports provided: ChangeMajorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeMajorService", function() { return ChangeMajorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var ChangeMajorService = /** @class */ (function () {
    function ChangeMajorService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    ChangeMajorService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('change_major_service?std_id=S120000101').toPromise();
    };
    ChangeMajorService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('change_major_service/insert?std_id=S120000101', data).toPromise();
    };
    ChangeMajorService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('change_major_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    ChangeMajorService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/return_service/download/return_request/' + req + '?std_id=S160239561';
    };
    ChangeMajorService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/return_service/download?Lang=en';
    };
    ChangeMajorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], ChangeMajorService);
    return ChangeMajorService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/change-request.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/academicprocs/services/change-request.service.ts ***!
  \******************************************************************/
/*! exports provided: ChangeRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeRequestService", function() { return ChangeRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var ChangeRequestService = /** @class */ (function () {
    function ChangeRequestService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    ChangeRequestService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('change_camp_service?std_id=S120000101').toPromise();
    };
    ChangeRequestService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('change_camp_service/insert?std_id=S120000101', data).toPromise();
    };
    ChangeRequestService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('change_camp_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    ChangeRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], ChangeRequestService);
    return ChangeRequestService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/course-equalizer.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/academicprocs/services/course-equalizer.service.ts ***!
  \********************************************************************/
/*! exports provided: CourseEqualizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseEqualizerService", function() { return CourseEqualizerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var CourseEqualizerService = /** @class */ (function () {
    function CourseEqualizerService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    CourseEqualizerService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('course_transfer_service?std_id=S120000101').toPromise();
    };
    CourseEqualizerService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('course_transfer_service/insert?std_id=S120000101', data).toPromise();
    };
    CourseEqualizerService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('course_transfer_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    CourseEqualizerService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/execuse_service/download/execuse_request/' + req + '?std_id=S160239561';
    };
    CourseEqualizerService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/postpone_service/download?Lang=en';
    };
    CourseEqualizerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], CourseEqualizerService);
    return CourseEqualizerService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/english-equalizer.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/academicprocs/services/english-equalizer.service.ts ***!
  \*********************************************************************/
/*! exports provided: EnglishEqualizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnglishEqualizerService", function() { return EnglishEqualizerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var EnglishEqualizerService = /** @class */ (function () {
    function EnglishEqualizerService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    EnglishEqualizerService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('english_certificates_service?std_id=S120000101').toPromise();
    };
    EnglishEqualizerService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('english_certificates_service/insert?std_id=S120000101', data).toPromise();
    };
    EnglishEqualizerService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('english_certificates_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    EnglishEqualizerService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/english_certificates_service/download/english_certificates/' + req + '?std_id=S160239561';
    };
    EnglishEqualizerService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/postpone_service/download?Lang=en';
    };
    EnglishEqualizerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], EnglishEqualizerService);
    return EnglishEqualizerService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/exam-excuse.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/academicprocs/services/exam-excuse.service.ts ***!
  \***************************************************************/
/*! exports provided: ExamExcuseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamExcuseService", function() { return ExamExcuseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var ExamExcuseService = /** @class */ (function () {
    function ExamExcuseService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    ExamExcuseService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('exam_excuse_service?std_id=S190000060').toPromise();
    };
    ExamExcuseService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('exam_excuse_service/insert?std_id=S190000060', data).toPromise();
    };
    ExamExcuseService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('exam_excuse_service/remove/' + id + '?std_id=S190000060').toPromise();
    };
    ExamExcuseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], ExamExcuseService);
    return ExamExcuseService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/lecture-execuse-service.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/academicprocs/services/lecture-execuse-service.service.ts ***!
  \***************************************************************************/
/*! exports provided: LectureExecuseServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureExecuseServiceService", function() { return LectureExecuseServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var LectureExecuseServiceService = /** @class */ (function () {
    function LectureExecuseServiceService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    LectureExecuseServiceService.prototype.getRequests = function () {
        return this.httRequest.GetRequest('lecture_excuse_service?std_id=S180105049').toPromise();
    };
    LectureExecuseServiceService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('lecture_excuse_service/insert?std_id=S120000101', data).toPromise();
    };
    LectureExecuseServiceService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('lecture_excuse_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    LectureExecuseServiceService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/lecture_excuse_service/download/' + req + '?std_id=S160239561';
    };
    LectureExecuseServiceService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/lecture_excuse_service/download?Lang=en';
    };
    LectureExecuseServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], LectureExecuseServiceService);
    return LectureExecuseServiceService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/object-exam.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/academicprocs/services/object-exam.service.ts ***!
  \***************************************************************/
/*! exports provided: ObjectExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectExamService", function() { return ObjectExamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var ObjectExamService = /** @class */ (function () {
    function ObjectExamService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    ObjectExamService.prototype.getRequests = function () {
        return this.httRequest.GetRequest('exam_objections_service').toPromise();
    };
    ObjectExamService.prototype.getgetRequests = function () {
        return this.httRequest.GetRequest('exam_objections_service?std_id=S160239561').toPromise();
    };
    ObjectExamService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('exam_objections_service/insert?', data).toPromise();
    };
    ObjectExamService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('exam_objections_service/remove/' + id + '?std_id=S160239561').toPromise();
    };
    ObjectExamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], ObjectExamService);
    return ObjectExamService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/re-enroll.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/academicprocs/services/re-enroll.service.ts ***!
  \*************************************************************/
/*! exports provided: ReEnrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReEnrollService", function() { return ReEnrollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var ReEnrollService = /** @class */ (function () {
    function ReEnrollService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    ReEnrollService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('return_service?std_id=S120000101').toPromise();
    };
    ReEnrollService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('return_service/insert?std_id=S120000101', data).toPromise();
    };
    ReEnrollService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('return_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    ReEnrollService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/return_service/download/return_request/' + req + '?std_id=S160239561';
    };
    ReEnrollService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/return_service/download?Lang=en';
    };
    ReEnrollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], ReEnrollService);
    return ReEnrollService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/register-wishes.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/academicprocs/services/register-wishes.service.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterWishesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterWishesService", function() { return RegisterWishesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");




var RegisterWishesService = /** @class */ (function () {
    function RegisterWishesService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    RegisterWishesService.prototype.getِgetRequests = function () {
        //?std_id=S180105049
        return this.httRequest.GetRequest('register_wishes_service?std_id=S190000060').toPromise();
    };
    RegisterWishesService.prototype.deleteReq = function (id) {
        //+ '?std_id=S120000101'
        return this.httRequest.GetRequest('register_wishes_service/cancel/' + id).toPromise();
    };
    RegisterWishesService.prototype.AddRequest = function (data) {
        console.log(data);
        return this.httRequest.postRequest('register_wishes_service/insert', data).toPromise();
    };
    RegisterWishesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"]])
    ], RegisterWishesService);
    return RegisterWishesService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/registration-helper.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/academicprocs/services/registration-helper.service.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrationHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationHelperService", function() { return RegistrationHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var RegistrationHelperService = /** @class */ (function () {
    function RegistrationHelperService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    RegistrationHelperService.prototype.getِgetRequests = function () {
        //?std_id=S180105049
        //?std_id=S160239561
        //?std_id=S190000060
        //?std_id=S120000101
        return this.httRequest.GetRequest('registeration_helper_service').toPromise();
    };
    RegistrationHelperService.prototype.getِgetCourse = function (collegeId) {
        //?std_id=S190000060
        return this.httRequest.GetRequest('registeration_helper_service/get_courses_for_colledges/' + collegeId).toPromise();
    };
    RegistrationHelperService.prototype.getِgetDepartments = function (courseId) {
        //?std_id=S190000060
        return this.httRequest.GetRequest('registeration_helper_service/get_departments/' + courseId).toPromise();
    };
    RegistrationHelperService.prototype.deleteReq = function (id) {
        //+ '?std_id=S120000101'
        return this.httRequest.GetRequest('registeration_helper_service/cancel/' + id).toPromise();
    };
    RegistrationHelperService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('registeration_helper_service/insert', data).toPromise();
    };
    RegistrationHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], RegistrationHelperService);
    return RegistrationHelperService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/summer-withdraw.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/academicprocs/services/summer-withdraw.service.ts ***!
  \*******************************************************************/
/*! exports provided: SummerWithdrawService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummerWithdrawService", function() { return SummerWithdrawService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var SummerWithdrawService = /** @class */ (function () {
    function SummerWithdrawService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    SummerWithdrawService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('execuse_service?std_id=S120000101').toPromise();
    };
    SummerWithdrawService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('execuse_service/insert?std_id=S120000101', data).toPromise();
    };
    SummerWithdrawService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('execuse_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    SummerWithdrawService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/cancel_summer_service/execuse_service/download/' + req + '?std_id=S160239561';
    };
    SummerWithdrawService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/execuse_service/download?Lang=en';
    };
    SummerWithdrawService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], SummerWithdrawService);
    return SummerWithdrawService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/term-execuse.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/academicprocs/services/term-execuse.service.ts ***!
  \****************************************************************/
/*! exports provided: TermExecuseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermExecuseService", function() { return TermExecuseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var TermExecuseService = /** @class */ (function () {
    function TermExecuseService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    TermExecuseService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('execuse_service?std_id=S120000101').toPromise();
    };
    TermExecuseService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('execuse_service/insert?std_id=S120000101', data).toPromise();
    };
    TermExecuseService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('execuse_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    TermExecuseService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/execuse_service/download/execuse_request/' + req + '?std_id=S160239561';
    };
    TermExecuseService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/postpone_service/download?Lang=en';
    };
    TermExecuseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], TermExecuseService);
    return TermExecuseService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/term-postpone.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/academicprocs/services/term-postpone.service.ts ***!
  \*****************************************************************/
/*! exports provided: TermPostponeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermPostponeService", function() { return TermPostponeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var TermPostponeService = /** @class */ (function () {
    function TermPostponeService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    TermPostponeService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('postpone_service?std_id=S120000101').toPromise();
    };
    TermPostponeService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('postpone_service/insert?std_id=S120000101', data).toPromise();
    };
    TermPostponeService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('postpone_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    TermPostponeService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/postpone_service/download/postpone/' + req + '?std_id=S160239561';
    };
    TermPostponeService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/postpone_service/download?Lang=en';
    };
    TermPostponeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], TermPostponeService);
    return TermPostponeService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/uvniv-card.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/academicprocs/services/uvniv-card.service.ts ***!
  \**************************************************************/
/*! exports provided: UvnivCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UvnivCardService", function() { return UvnivCardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var UvnivCardService = /** @class */ (function () {
    function UvnivCardService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    UvnivCardService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('card_university_service?std_id=S120000101').toPromise();
    };
    UvnivCardService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('card_university_service/insert?std_id=S120000101', data).toPromise();
    };
    UvnivCardService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('card_university_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    UvnivCardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], UvnivCardService);
    return UvnivCardService;
}());



/***/ }),

/***/ "./src/app/academicprocs/services/withdraw-from-univ.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/academicprocs/services/withdraw-from-univ.service.ts ***!
  \**********************************************************************/
/*! exports provided: WithdrawFromUnivService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawFromUnivService", function() { return WithdrawFromUnivService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var WithdrawFromUnivService = /** @class */ (function () {
    function WithdrawFromUnivService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    WithdrawFromUnivService.prototype.getِgetRequests = function () {
        return this.httRequest.GetRequest('withdraw_service?std_id=S120000101').toPromise();
    };
    WithdrawFromUnivService.prototype.AddRequest = function (data) {
        return this.httRequest.postRequest('withdraw_service/insert?std_id=S120000101', data).toPromise();
    };
    WithdrawFromUnivService.prototype.deleteReq = function (id) {
        return this.httRequest.GetRequest('withdraw_service/remove/' + id + '?std_id=S120000101').toPromise();
    };
    WithdrawFromUnivService.prototype.Download = function (req) {
        return this.configService.getApiURI() + '/withdraw_service/download/' + req + '?std_id=S160239561';
    };
    WithdrawFromUnivService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/fees_stmt_request_service/download?Lang=en';
    };
    WithdrawFromUnivService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], WithdrawFromUnivService);
    return WithdrawFromUnivService;
}());



/***/ }),

/***/ "./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3Mvc3VtbWVyLXdpdGhkcmF3L2RpYWcvYWRkLXN1bW1lci13aXRoZHJhdy9hZGQtc3VtbWVyLXdpdGhkcmF3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<mat-dialog-content>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\"> الاعتذار عن الفصل الصيفي  </h5>\r\n        \r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <P class=\"text-center\">  </P>\r\n        <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n          \r\n    \r\n        \r\n         \r\n       \r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"> السبب</div>\r\n                </div>\r\n                <input name=\"reason\" #reason=\"ngModel\" [(ngModel)]=\"postpone.reason\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n          \r\n            \r\n     \r\n         \r\n        <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                    <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n\r\n          <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n        </div>\r\n      </form>\r\n      </div>\r\n  </div>\r\n      \r\n   </div>\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddSummerWithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSummerWithdrawComponent", function() { return AddSummerWithdrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_academicprocs_services_summer_withdraw_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/academicprocs/services/summer-withdraw.service */ "./src/app/academicprocs/services/summer-withdraw.service.ts");





var AddSummerWithdrawComponent = /** @class */ (function () {
    function AddSummerWithdrawComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    AddSummerWithdrawComponent.prototype.ngOnInit = function () {
        this.postpone = { reason: '' };
        this.reqData = this.acadmicProc.reqData;
    };
    AddSummerWithdrawComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            console.log(data);
            _this.msgs = res.messages;
            console.log(_this.msgs);
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddSummerWithdrawComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
        this.dialogRef.close();
    };
    AddSummerWithdrawComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddSummerWithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-summer-withdraw',
            template: __webpack_require__(/*! ./add-summer-withdraw.component.html */ "./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.html"),
            styles: [__webpack_require__(/*! ./add-summer-withdraw.component.css */ "./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_academicprocs_services_summer_withdraw_service__WEBPACK_IMPORTED_MODULE_4__["SummerWithdrawService"]])
    ], AddSummerWithdrawComponent);
    return AddSummerWithdrawComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/summer-withdraw/summer-withdraw.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/academicprocs/summer-withdraw/summer-withdraw.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3Mvc3VtbWVyLXdpdGhkcmF3L3N1bW1lci13aXRoZHJhdy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/academicprocs/summer-withdraw/summer-withdraw.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/academicprocs/summer-withdraw/summer-withdraw.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n  {{msg.body}}!\r\n</div>\r\n<div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n<div style=\"direction: ltr;text-align: center\">\r\n  \r\n  <button *ngIf=\"reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n  اضافة طلب\r\n</button>\r\n<br/>\r\n<br/>\r\n\r\n</div>\r\n<div>\r\n<table style=\"text-align: center\" class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">رقم الطلب</th>\r\n\r\n      <th scope=\"col\">تاريخ الطلب</th>\r\n      <th scope=\"col\">حالة الطلب</th>\r\n      <th scope=\"col\"> حذف الطلب </th>\r\n\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let it of reqData.reqs;let i=index;\">\r\n      <td>{{it.request_number}}</td>\r\n     \r\n\r\n      <td>{{it.insert_date}}</td>\r\n      <td>{{it.status}}</td>\r\n      \r\n\r\n      <td><button [disabled]='!it.deletable'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"></i> </button></td>\r\n\r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/academicprocs/summer-withdraw/summer-withdraw.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/academicprocs/summer-withdraw/summer-withdraw.component.ts ***!
  \****************************************************************************/
/*! exports provided: SummerWithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummerWithdrawComponent", function() { return SummerWithdrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_summer_withdraw_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/summer-withdraw.service */ "./src/app/academicprocs/services/summer-withdraw.service.ts");
/* harmony import */ var _diag_add_summer_withdraw_add_summer_withdraw_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-summer-withdraw/add-summer-withdraw.component */ "./src/app/academicprocs/summer-withdraw/diag/add-summer-withdraw/add-summer-withdraw.component.ts");






var SummerWithdrawComponent = /** @class */ (function () {
    function SummerWithdrawComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    SummerWithdrawComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reason = '';
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            //console.log(this.reqData.reqs[0].time_to_delete_per_hour);
        });
    };
    SummerWithdrawComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_summer_withdraw_add_summer_withdraw_component__WEBPACK_IMPORTED_MODULE_5__["AddSummerWithdrawComponent"], dialogConfig);
    };
    SummerWithdrawComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    SummerWithdrawComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    SummerWithdrawComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    SummerWithdrawComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
        }
    };
    SummerWithdrawComponent.prototype.deleteReq = function (id) {
        throw new Error('Method not implemented.');
    };
    SummerWithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summer-withdraw',
            template: __webpack_require__(/*! ./summer-withdraw.component.html */ "./src/app/academicprocs/summer-withdraw/summer-withdraw.component.html"),
            styles: [__webpack_require__(/*! ./summer-withdraw.component.css */ "./src/app/academicprocs/summer-withdraw/summer-withdraw.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_summer_withdraw_service__WEBPACK_IMPORTED_MODULE_4__["SummerWithdrawService"]])
    ], SummerWithdrawComponent);
    return SummerWithdrawComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvdW5pdi1jYXJkL2RpYWcvYWRkLXVuaXYtY2FyZC9hZGQtdW5pdi1jYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n\r\n<mat-dialog-content>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5  class=\"modal-title  \" id=\"exampleModalLabel\"> طلب بطاقة جامعية   </h5>\r\n          \r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <P class=\"text-center\">  </P>\r\n        <div>\r\n          <h6>شروط تقديم الطلب </h6>\r\n            <ul class=\"list-group\" style=\"font-size: 12px;\">\r\n                <li class=\"list-group-item list-group-item-info\">:رفع صورة شخصية للمتقدم على ان تكون</li>\r\n                <li class=\"list-group-item list-group-item-info\">مقاس الصورة 4*6</li>\r\n                <li class=\"list-group-item list-group-item-info\">ملونة وبخلفية بيضاء</li>\r\n                <li class=\"list-group-item list-group-item-info\">للطالبات : يجب ان تكون الطالبة محجبة</li>\r\n                <li class=\"list-group-item list-group-item-info\">يجب ان تكون الصورة ذات جودة عالية</li>\r\n                <li class=\"list-group-item list-group-item-info\">لن يتم استخراج بطاقة جامعية من غير صورة شخصية</li>\r\n              </ul>\r\n        </div>\r\n        <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\" class=\"mt-20\">\r\n            <div class=\"main-content\" style=\"padding-top:0;\">\r\n            <section  class=\"ser-state\">\r\n                <div class=\"container\">\r\n                     <div class=\"row ser-block\">\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                              <div class=\"state\">\r\n                                 <h6>اسم الطالب / الطالبة </h6>\r\n                                 <input name=\"name\" #name=\"ngModel\" [(ngModel)]=\"card.name\" class=\"form-control\" >\r\n                              </div>\r\n                                <div class=\"progress progress-sm\">\r\n                                    <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                                </div>\r\n                         </div>\r\n                          <div class=\"col-md-12 col-sm-12\">\r\n                              <div class=\"state\">\r\n                                <h6>رقم بطاقة الهوية الوطنية او ما يقوم مقامها</h6>\r\n                                <input name=\"ssn\" #ssn=\"ngModel\" [(ngModel)]=\"card.ssn\" class=\"form-control\" >\r\n                              </div>\r\n                                <div class=\"progress progress-sm\">\r\n                                    <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <div class=\"state\">\r\n                              <h6>رقم الجوال </h6>\r\n                              <input name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"card.phone\" class=\"form-control\" >\r\n                            </div>\r\n                              <div class=\"progress progress-sm\">\r\n                                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                              </div>\r\n                      </div>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <div class=\"state\">\r\n                              <h6>المرحلة الدراسية</h6>\r\n                                      <select name=\"level\" #level=\"ngModel\" [(ngModel)]=\"card.level\" class=\"form-control\" \r\n                          [class.is-invalid]=\"card.level==''\">\r\n                            <option value=\"\">اختر المرحلة الدراسية</option> \r\n                            <option *ngFor=\"let item of reqData.levels\" value=\"{{item.id}}\">{{item.value}}</option>\r\n                          </select>\r\n                            </div>\r\n                              <div class=\"progress progress-sm\">\r\n                                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                              </div>\r\n                      </div>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <div class=\"state\">\r\n                              <h6> فترة الدراسة </h6>\r\n                              <select name=\"time\" #time=\"ngModel\" [(ngModel)]=\"card.time\" class=\"form-control\" \r\n                              [class.is-invalid]=\"card.time==''\">\r\n                                <option value=\"\">اختر فترة الدراسة</option>\r\n                                <option *ngFor=\"let item of reqData.times\" value=\"{{item.id}}\">{{item.value}}</option>\r\n                              </select>\r\n                            </div>\r\n                              <div class=\"progress progress-sm\">\r\n                                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                              </div>\r\n                      </div>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <div class=\"state\">\r\n                              <h6>اليوم </h6>\r\n                              <select name=\"day\" #time=\"ngModel\" [(ngModel)]=\"card.day\" class=\"form-control\" \r\n                              [class.is-invalid]=\"card.day==''\">\r\n                                <option value=\"\">اختر اليوم </option>\r\n                                <option *ngFor=\"let item of reqData.days\" value=\"{{item.id}}\">{{item.value}}</option>\r\n                              </select>\r\n                            </div>\r\n                              <div class=\"progress progress-sm\">\r\n                                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                              </div>\r\n                      </div>\r\n                        <div class=\"col-md-12 col-sm-12\">\r\n                            <div class=\"state\">\r\n                              <h6>  اضف صورة شخصية </h6>\r\n                              <div class=\"custom-file\">\r\n                                  <input name=\"photo\"  type=\"file\" accept=\"*/*\" (change)=\"handleInputChange($event)\"  class=\"custom-file-input\" id=\"customFileLangHTML\"  />\r\n                                  <label class=\"custom-file-label\" for=\"customFileLangHTML\" >\r\n                                    اضف صورة</label>\r\n                                </div>\r\n                            </div>\r\n                              <div class=\"progress progress-sm\">\r\n                                  <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                              </div>\r\n                      </div>\r\n                      <div class=\"col-md-12 col-sm-12\">\r\n                          <div class=\"state\">\r\n                            <h6>  اضف صورة الهوية </h6>\r\n                            <div class=\"custom-file\">\r\n                                <input name=\"ssn_file\"  type=\"file\" accept=\"*/*\" (change)=\"handleInputChangeFile($event)\" class=\"custom-file-input\" />\r\n                                 <label  for=\"customFileLang\"  class=\"custom-file-label \">\r\n                                 </label> \r\n                              </div>\r\n                            </div>\r\n                             \r\n                            <div class=\"progress progress-sm\">\r\n                                <div class=\"progress-bar bg-info\" style=\"width: 15%;\"></div>\r\n                            </div>\r\n                    \r\n                     </div>\r\n                  </div>\r\n                </div>\r\n             </section>\r\n             <div style=\"margin-top: 10px;\">\r\n                <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                  <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n                 <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n                </div>\r\n           </div>\r\n            </div>\r\n\r\n       \r\n      </form>\r\n\r\n    \r\n\r\n\r\n      </div>\r\n  </div>\r\n      \r\n   </div>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddUnivCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUnivCardComponent", function() { return AddUnivCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_uvniv_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/uvniv-card.service */ "./src/app/academicprocs/services/uvniv-card.service.ts");





var AddUnivCardComponent = /** @class */ (function () {
    function AddUnivCardComponent(data, dialogRef, toastr, univCard) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.univCard = univCard;
    }
    AddUnivCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.card = { name: '', phone: '', ssn: '', day: '', time: '', level: '', photo: '', ssn_file: '' };
        this.univCard.getِgetRequests().then(function (res) {
            _this.univCard.reqData = res.data;
            _this.univCard.msgs = res.messages;
            _this.reqData = _this.univCard.reqData;
            _this.msgs = _this.univCard.msgs;
        });
    };
    AddUnivCardComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.univCard.AddRequest(data).then(function (res) {
            _this.univCard.msgs = res.messages;
            _this.msgs = _this.univCard.msgs;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddUnivCardComponent.prototype.onSubmit = function (form) {
        this.addRequest(this.card);
        console.log(this.card);
        this.dialogRef.close();
    };
    AddUnivCardComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        /* if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
         */
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AddUnivCardComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.card.photo = reader.result;
        //console.log(this.card.photo);
    };
    AddUnivCardComponent.prototype.handleInputChangeFile = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        /* if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
         */
        reader.onload = this._handleReaderLoadedFile.bind(this);
        reader.readAsDataURL(file);
    };
    AddUnivCardComponent.prototype._handleReaderLoadedFile = function (e) {
        var reader = e.target;
        this.card.ssn_file = reader.result;
        //console.log(this.card.photo);
    };
    //   print(req) {
    // return    this.univCard.Download(req);
    //   }
    AddUnivCardComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.univCard.deleteReq(id).then(function (res) {
                _this.toastr.success('', res.messages.body);
            });
            this.univCard.reqData.reqs.splice(index, 1);
        }
    };
    AddUnivCardComponent.prototype.call = function (hr) {
        return Math.floor(Math.random() * 10) + hr;
    };
    AddUnivCardComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddUnivCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-univ-card',
            template: __webpack_require__(/*! ./add-univ-card.component.html */ "./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.html"),
            styles: [__webpack_require__(/*! ./add-univ-card.component.css */ "./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_uvniv_card_service__WEBPACK_IMPORTED_MODULE_4__["UvnivCardService"]])
    ], AddUnivCardComponent);
    return AddUnivCardComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/univ-card/univ-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/academicprocs/univ-card/univ-card.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3MvdW5pdi1jYXJkL3VuaXYtY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/academicprocs/univ-card/univ-card.component.html":
/*!******************************************************************!*\
  !*** ./src/app/academicprocs/univ-card/univ-card.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\r\n\r\n  <div  *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n      {{msg.body}}!\r\n    </div>\r\n    <div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n        {{msg.body}}!\r\n      </div>\r\n    <div style=\"direction: ltr;text-align: center\">\r\n      \r\n      <button *ngIf=\"!reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n      اضافة طلب\r\n    </button>\r\n    <br/>\r\n    <br/>\r\n    \r\n    </div>\r\n    <div>\r\n      <div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-bordered\">\r\n        <thead style=\"background: #ebecf0\">\r\n  \r\n        <tr>\r\n          <th scope=\"col\">رقم الطلب</th>\r\n    \r\n          <th scope=\"col\">تاريخ الطلب</th>\r\n          <th scope=\"col\"> حالة الطلب</th>\r\n        \r\n  \r\n          <th scope=\"col\"> حذف الطلب </th>\r\n    \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let it of reqData.requests;let i=index;\">\r\n          <td>{{it.id}}</td>\r\n          <td>{{it.INSRT_DATE}}</td>\r\n          <td>{{it.status}}</td>\r\n         \r\n         \r\n          \r\n    \r\n          <td><button [disabled]='!it.deletable'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.id,i)\"><i  class=\"fa fa-trash\"></i> </button></td>\r\n    \r\n        </tr>\r\n        \r\n      </tbody>\r\n    </table></div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/academicprocs/univ-card/univ-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/academicprocs/univ-card/univ-card.component.ts ***!
  \****************************************************************/
/*! exports provided: UnivCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnivCardComponent", function() { return UnivCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_uvniv_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/uvniv-card.service */ "./src/app/academicprocs/services/uvniv-card.service.ts");
/* harmony import */ var _diag_add_univ_card_add_univ_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag/add-univ-card/add-univ-card.component */ "./src/app/academicprocs/univ-card/diag/add-univ-card/add-univ-card.component.ts");






var UnivCardComponent = /** @class */ (function () {
    function UnivCardComponent(dialog, toastr, univCard) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.univCard = univCard;
    }
    UnivCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.card = { name: '', phone: '', ssn: '', day: '', time: '', level: '', photo: '', ssn_file: '' };
        this.univCard.getِgetRequests().then(function (res) {
            _this.univCard.reqData = res.data;
            _this.univCard.msgs = res.messages;
            _this.reqData = _this.univCard.reqData;
            _this.msgs = _this.univCard.msgs;
        });
    };
    UnivCardComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_univ_card_add_univ_card_component__WEBPACK_IMPORTED_MODULE_5__["AddUnivCardComponent"], dialogConfig);
    };
    UnivCardComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.univCard.AddRequest(data).then(function (res) {
            _this.univCard.msgs = res.messages;
            alert(_this.univCard.msgs[0]);
        });
    };
    UnivCardComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    //   print(req) {
    // return    this.univCard.Download(req);
    //   }
    UnivCardComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.univCard.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.univCard.reqData.requests.splice(index, 1);
            });
        }
    };
    UnivCardComponent.prototype.call = function (hr) {
        return Math.floor(Math.random() * 10) + hr;
    };
    UnivCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-univ-card',
            template: __webpack_require__(/*! ./univ-card.component.html */ "./src/app/academicprocs/univ-card/univ-card.component.html"),
            styles: [__webpack_require__(/*! ./univ-card.component.css */ "./src/app/academicprocs/univ-card/univ-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _services_uvniv_card_service__WEBPACK_IMPORTED_MODULE_4__["UvnivCardService"]])
    ], UnivCardComponent);
    return UnivCardComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3Mvd2l0aGRyYXctZnJvbS11bml2L2RpYWcvYWRkLXJlcXVlc3QvYWRkLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<mat-dialog-content>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 style=\"text-align: center\" class=\"modal-title \" id=\"exampleModalLabel\"> طلب انسحاب من الجامعه</h5>\r\n        \r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <P class=\"text-center\">بيانات بيانات بيانات</P>\r\n        <form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n          \r\n        <div class=\"form-group\">\r\n           \r\n               <select name=\"branch\" #BranchID=\"ngModel\" [(ngModel)]=\"withdraw.branch\" class=\"form-control\" \r\n          [class.is-invalid]=\"!isValid && withdraw.branch==0\">\r\n            <option value=\"\">اختر اقرب فرع</option>\r\n            <option *ngFor=\"let item of reqData.branches\" value=\"{{item.id}}\">{{item.name}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\">رقم الهاتف</div>\r\n              </div>\r\n              <input name=\"mobile\" #mobile=\"ngModel\" [(ngModel)]=\"withdraw.mobile\" class=\"form-control\" >\r\n            </div>\r\n          </div>\r\n         \r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\">البريد الالكتروني</div>\r\n                </div>\r\n                <input name=\"email\" #email=\"ngModel\" [(ngModel)]=\"withdraw.email\" class=\"form-control\" >\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n          <div *ngIf=\"!reqData.display_bank_account\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">IBAN </div>\r\n                  </div>\r\n                  <input name=\"IBAN\" #IBAN=\"ngModel\" [(ngModel)]=\"withdraw.IBAN\" class=\"form-control\" >\r\n                </div>\r\n              </div>\r\n             \r\n            </div>\r\n            <div class=\"form-group\">\r\n           \r\n              <select name=\"BANKID\" #BANKID=\"ngModel\" [(ngModel)]=\"withdraw.BANKID\" class=\"form-control\" \r\n         [class.is-invalid]=\"!isValid && withdraw.BANKID==0\">\r\n           <option value=\"0\">اختر  البنك</option>\r\n           <option *ngFor=\"let item of reqData.bankList\" value=\"{{item.BANK_PK}}\">{{item.BANK_TITLE}}</option>\r\n         </select>\r\n       </div>\r\n       <div class=\"image-upload\">\r\n        <img [src]=\"withdraw.bankimage\" style=\"width:400px;height:300px\"/>\r\n        <input name=\"imageUrl\" type=\"file\" accept=\"image/*\" (change)=\"handleInputChange($event)\" />\r\n    </div> \r\n\r\n          </div>\r\n        <div class=\"btn-group\" style=\"direction: ltr\" role=\"group\" aria-label=\"Basic example\">\r\n                    <button type=\"button\" (click)=\"closeDiag()\"  class=\"btn btn-outline-dark ml-1\" ><i class=\"fa fa-close\"></i> الغاء</button>\r\n\r\n          <button type=\"submit\" class=\"btn btn-dark\"><i class=\"fa fa-database\"></i> حفظ</button>\r\n        </div>\r\n      </form>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRequestComponent", function() { return AddRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_academicprocs_services_withdraw_from_univ_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/academicprocs/services/withdraw-from-univ.service */ "./src/app/academicprocs/services/withdraw-from-univ.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddRequestComponent = /** @class */ (function () {
    function AddRequestComponent(data, dialogRef, toastr, acadmicProc) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
        this.imageSrc = '';
    }
    AddRequestComponent.prototype.ngOnInit = function () {
        this.withdraw = { FeesForstd: 0, IBAN: '', IBANNAME: '', branch: '', email: '', mobile: null, bankimage: '', BANKID: 0 };
        this.reqData = this.acadmicProc.reqData;
    };
    AddRequestComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    AddRequestComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.withdraw.bankimage = reader.result;
        console.log(this.withdraw.bankimage);
    };
    AddRequestComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.msgs = res.messages;
            _this.msgs.forEach(function (element) {
                _this.toastr.success('', element.body);
            });
        });
    };
    AddRequestComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
        this.dialogRef.close();
    };
    AddRequestComponent.prototype.closeDiag = function () {
        this.dialogRef.close();
    };
    AddRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-request',
            template: __webpack_require__(/*! ./add-request.component.html */ "./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.html"),
            styles: [__webpack_require__(/*! ./add-request.component.css */ "./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_academicprocs_services_withdraw_from_univ_service__WEBPACK_IMPORTED_MODULE_3__["WithdrawFromUnivService"]])
    ], AddRequestComponent);
    return AddRequestComponent;
}());



/***/ }),

/***/ "./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcHJvY3Mvd2l0aGRyYXctZnJvbS11bml2L3dpdGhkcmF3LWZyb20tdW5pdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: right\" *ngFor=\"let msg of msgs\" class=\"alert alert-info\" role=\"alert\">\r\n  {{msg.body}}!\r\n</div>\r\n<div *ngIf=\"msg!=null\" style=\"text-align: right\"  class=\"alert alert-info\" role=\"alert\">\r\n    {{msg.body}}!\r\n  </div>\r\n<div style=\"direction: ltr;text-align: center\">\r\n  \r\n  <button *ngIf=\"reqData.can_add_new_request\" type=\"button\" class=\"btn btn-primary\"  (click)=\"openDialoge()\">\r\n  اضافة طلب\r\n</button>\r\n<br/>\r\n<br/>\r\n\r\n</div>\r\n<div>\r\n<table style=\"text-align: center\" class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">رقم الطلب</th>\r\n      <th scope=\"col\">الفصل الدراسه </th>\r\n      <th scope=\"col\">طباعة الافاده  </th>\r\n\r\n      <th scope=\"col\">تاريخ الطلب</th>\r\n      <th scope=\"col\">حالة الطلب</th>\r\n      <th scope=\"col\"> طباعة الطلب</th>\r\n      <th scope=\"col\"> حذف الطلب </th>\r\n\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let it of reqData.reqs;let i=index;\">\r\n      <td>{{it.request_number}}</td>\r\n      <td>{{it.term}}</td>\r\n      <td>Print Resp</td>\r\n\r\n      <td>{{it.insert_date}}</td>\r\n      <td>{{it.status}}</td>\r\n      <td><a class=\"btn btn-primary\" [href]=\"print(it.request_number)\" ><span class=\"glyphicon glyphicon-print\"></span>\r\n        Print</a></td>\r\n\r\n      <td><button [disabled]='!it.deletable || it.time_to_delete_per_hour<=0'  class=\"btn btn-sm btn-danger\" style=\"color: white\"  (click)=\"delete(it.request_number,i)\"><i  class=\"fa fa-trash\"><app-timer [hr]=\"it.time_to_delete_per_hour\"></app-timer></i> </button></td>\r\n\r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WithdrawFromUnivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawFromUnivComponent", function() { return WithdrawFromUnivComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_withdraw_from_univ_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/withdraw-from-univ.service */ "./src/app/academicprocs/services/withdraw-from-univ.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _diag_add_request_add_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diag/add-request/add-request.component */ "./src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var WithdrawFromUnivComponent = /** @class */ (function () {
    function WithdrawFromUnivComponent(dialog, toastr, acadmicProc) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.acadmicProc = acadmicProc;
    }
    WithdrawFromUnivComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.withdraw = { FeesForstd: 0, IBAN: '', IBANNAME: '', branch: '', email: '', mobile: null, bankimage: '', BANKID: 0 };
        this.acadmicProc.getِgetRequests().then(function (res) {
            _this.acadmicProc.reqData = res.data;
            _this.acadmicProc.msgs = res.messages;
            _this.reqData = _this.acadmicProc.reqData;
            _this.msgs = _this.acadmicProc.msgs;
            //console.log(this.reqData.reqs);
        });
    };
    WithdrawFromUnivComponent.prototype.openDialoge = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.width = '50%';
        this.dialog.open(_diag_add_request_add_request_component__WEBPACK_IMPORTED_MODULE_4__["AddRequestComponent"], dialogConfig);
    };
    WithdrawFromUnivComponent.prototype.addRequest = function (data) {
        var _this = this;
        this.acadmicProc.AddRequest(data).then(function (res) {
            _this.acadmicProc.msgs = res.messages;
        });
    };
    WithdrawFromUnivComponent.prototype.onSubmit = function (form) {
        this.addRequest(form.value);
    };
    WithdrawFromUnivComponent.prototype.print = function (req) {
        return this.acadmicProc.Download(req);
    };
    WithdrawFromUnivComponent.prototype.delete = function (id, index) {
        var _this = this;
        if (confirm('هل انت متأكد')) {
            this.acadmicProc.deleteReq(id).then(function (res) {
                _this.msgs = res.messages;
                _this.status = res.status;
                _this.msgs.forEach(function (element) {
                    _this.toastr.success('', element.body);
                });
                if (_this.status == 1)
                    _this.acadmicProc.reqData.requests.splice(index, 1);
            });
        }
    };
    WithdrawFromUnivComponent.prototype.call = function (hr) {
        return Math.floor(Math.random() * 10) + hr;
    };
    WithdrawFromUnivComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-withdraw-from-univ',
            template: __webpack_require__(/*! ./withdraw-from-univ.component.html */ "./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.html"),
            styles: [__webpack_require__(/*! ./withdraw-from-univ.component.css */ "./src/app/academicprocs/withdraw-from-univ/withdraw-from-univ.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _services_withdraw_from_univ_service__WEBPACK_IMPORTED_MODULE_2__["WithdrawFromUnivService"]])
    ], WithdrawFromUnivComponent);
    return WithdrawFromUnivComponent;
}());



/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");





var routes = [
    { path: 'register', component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationFormComponent"] },
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"] },
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user.service */ "./src/app/account/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"], _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/login-form/login-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n \r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n      <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\r\n          \r\n          <div class=\"form-group\">\r\n            <label for=\"email\">اسم المستخدم</label>\r\n            <input id=\"email\" type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail>\r\n            <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">كلمة المرور</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" placeholder=\"Password\" ngModel>\r\n          </div>          \r\n\r\n          <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">دخول</button>\r\n          </div>\r\n\r\n          <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n              <strong>Oops!</strong> {{errors}}\r\n            </div> \r\n          \r\n        </form>\r\n   </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.ts ***!
  \************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/account/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_user_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/user-manager.service */ "./src/app/shared/services/user-manager.service.ts");






var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(userService, userManger, router, activatedRoute) {
        var _this = this;
        this.userService = userService;
        this.userManger = userManger;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    }
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isRequesting = false; }))
                .subscribe(function (result) {
                console.log(result);
                if (result.status == 1) {
                    _this.router.navigate(['/dashboard/home']);
                    _this.userManger.saveToken(result.data);
                    _this.userManger.login();
                }
                else {
                    if (result.messages) {
                        _this.errors = result.messages[0].body;
                    }
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/account/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/account/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_services_user_manager_service__WEBPACK_IMPORTED_MODULE_5__["UserManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0cmF0aW9uLWZvcm0vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <h2>Please enter your information</h2>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n      <form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\r\n          <div class=\"form-group\">\r\n              <label for=\"first-name\">الاسم الاول</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"First name\" name=\"firstName\" tmFocus ngModel>              \r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"last-name\"> الاسم الاخير</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Last name\" name=\"lastName\" ngModel>              \r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">اسم المستخدم </label>\r\n          \t<input id=\"fusername\" type=\"text\" validateUserName required name=\"username\"  class=\"form-control\" placeholder=\"UserName\" ngModel  #username=\"ngModel\">\r\n            <small [hidden]=\"username.valid   ||(username.pristine && !submitted)\" class=\"text-danger\">Please enter a valid username</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">البريد</label>\r\n          \t<input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel  #email=\"ngModel\">\r\n            <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">كلمة المرور</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" ngModel>\r\n          </div>   \r\n          <div class=\"form-group\">\r\n             <label for=\"address\">العنوان</label>\r\n             <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"address\"  required name=\"address\" ngModel>              \r\n          </div> \r\n\r\n          <div class=\"form-group\">\r\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\r\n          </div>\r\n\r\n          <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n              <strong>Oops!</strong> {{errors}}\r\n            </div>               \r\n          \r\n        </form>\r\n   </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/account/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.addUser(value.username, value.email, value.password, value.firstName, value.lastName, value.address)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { _this.isRequesting = false; }))
                .subscribe(function (result) {
                if (result) {
                    _this.errors = result;
                }
            }, function (error) {
                _this.errors = 'ERR' + error;
                ;
            });
        }
    };
    RegistrationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/account/registration-form/registration-form.component.html"),
            styles: [__webpack_require__(/*! ./registration-form.component.css */ "./src/app/account/registration-form/registration-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/account/services/user.service.ts":
/*!**************************************************!*\
  !*** ./src/app/account/services/user.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");







var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService(configService, httRequest) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.httRequest = httRequest;
        _this.baseUrl = '';
        _this.logedIn = false;
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserService.prototype.addUser = function (username, email, password, firstName, lastName, location) {
        var body = { username: username, email: email, password: password, firstName: firstName, lastName: lastName, location: location };
        return this.httRequest.postRequest('accounts', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { console.error(err); return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
    };
    UserService.prototype.login = function (userName, password) {
        console.log('ser');
        return this.httRequest.postRequest('auth/login', { userName: userName, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { console.error(err); return err; }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_5__["HttpRequestService"]])
    ], UserService);
    return UserService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"]));



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _PrintExample_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PrintExample/print-layout/print-layout.component */ "./src/app/PrintExample/print-layout/print-layout.component.ts");
/* harmony import */ var _PrintExample_print_file_print_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PrintExample/print-file/print-file.component */ "./src/app/PrintExample/print-file/print-file.component.ts");






var routes = [
    { path: 'print',
        outlet: 'print',
        component: _PrintExample_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_4__["PrintLayoutComponent"],
        children: [
            { path: 'print-file/:paramData', component: _PrintExample_print_file_print_file_component__WEBPACK_IMPORTED_MODULE_5__["PrintFileComponent"] },
        ]
    },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\"  >\r\n<div class=\"wrapper\">\r\n<app-header></app-header>\r\n<div class=\"page-wrap\">\r\n\r\n<app-menu></app-menu>\r\n<div  [class.isPrinting]=\"printService.isPrinting\"  class=\"container-fluid\"> \r\n\t\r\n\t<router-outlet></router-outlet>\r\n\t<router-outlet name=\"print\"></router-outlet>\r\n\r\n</div>\r\n</div>\r\n <app-footer></app-footer>\r\n          \r\n</div>\r\n   \r\n\r\n<!-- Main jumbotron for a primary marketing message or call to action \r\n<div   class=\"jumbotron\">\r\n  <div class=\"container\">\r\n\t<h1 class=\"display-3\"> </h1>\r\n\t<p>This demo shows  flow using Angular and ASP.NET Core 3.0 WebApi</p>\r\n\t<p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"/register\">تسجيل مستخدم جديد</a>\r\n\t  \r\n\t  <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\" routerLink=\"/login\">تسجيل دخول  </a>       \r\n\t  <button class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\"  (click)=\"onPrintFile()\"> طباعة  </button></p>       \r\n\r\n\t</div>\r\n</div> -->\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/print.service */ "./src/app/shared/services/print.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(printService) {
        this.printService = printService;
        this.title = 'seu-app';
        this.print = printService;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");
/* harmony import */ var _shared_services_user_manager_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/user-manager.service */ "./src/app/shared/services/user-manager.service.ts");
/* harmony import */ var _auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auto-generated/auto-generated.component */ "./src/app/auto-generated/auto-generated.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_app_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/app-storage.service */ "./src/app/shared/services/app-storage.service.ts");
/* harmony import */ var _academicprocs_academicprocs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./academicprocs/academicprocs.module */ "./src/app/academicprocs/academicprocs.module.ts");
/* harmony import */ var _academicaff_academicaff_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./academicaff/academicaff.module */ "./src/app/academicaff/academicaff.module.ts");
/* harmony import */ var _name_component_name_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./name-component/name-component.component */ "./src/app/name-component/name-component.component.ts");
/* harmony import */ var _register_courses_register_courses_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register-courses/register-courses.module */ "./src/app/register-courses/register-courses.module.ts");
/* harmony import */ var _lectures_absence_lectures_absence_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lectures-absence/lectures-absence.module */ "./src/app/lectures-absence/lectures-absence.module.ts");
/* harmony import */ var _finance_affair_finance_affair_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./finance-affair/finance-affair.module */ "./src/app/finance-affair/finance-affair.module.ts");
/* harmony import */ var _exams_affair_exams_affair_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./exams-affair/exams-affair.module */ "./src/app/exams-affair/exams-affair.module.ts");
/* harmony import */ var _other_affair_other_affair_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./other-affair/other-affair.module */ "./src/app/other-affair/other-affair.module.ts");
/* harmony import */ var _shared_services_print_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/print.service */ "./src/app/shared/services/print.service.ts");
/* harmony import */ var _PrintExample_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./PrintExample/print-layout/print-layout.component */ "./src/app/PrintExample/print-layout/print-layout.component.ts");
/* harmony import */ var _PrintExample_print_file_print_file_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./PrintExample/print-file/print-file.component */ "./src/app/PrintExample/print-file/print-file.component.ts");
/* harmony import */ var _graduates_affairs_graduates_affairs_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./graduates-affairs/graduates-affairs.module */ "./src/app/graduates-affairs/graduates-affairs.module.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/page-header/page-header.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_13__["AutoGeneratedComponent"],
                _name_component_name_component_component__WEBPACK_IMPORTED_MODULE_18__["NameComponentComponent"],
                _PrintExample_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_25__["PrintLayoutComponent"],
                _PrintExample_print_file_print_file_component__WEBPACK_IMPORTED_MODULE_26__["PrintFileComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_30__["MenuComponent"],
                _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_31__["PageHeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_28__["AngularFontAwesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_6__["AccountModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _academicprocs_academicprocs_module__WEBPACK_IMPORTED_MODULE_16__["AcademicprocsModule"],
                _academicaff_academicaff_module__WEBPACK_IMPORTED_MODULE_17__["AcademicaffModule"],
                _register_courses_register_courses_module__WEBPACK_IMPORTED_MODULE_19__["RegisterCoursesModule"],
                _lectures_absence_lectures_absence_module__WEBPACK_IMPORTED_MODULE_20__["LecturesAbsenceModule"],
                _finance_affair_finance_affair_module__WEBPACK_IMPORTED_MODULE_21__["FinanceAffairModule"],
                _exams_affair_exams_affair_module__WEBPACK_IMPORTED_MODULE_22__["ExamsAffairModule"],
                _other_affair_other_affair_module__WEBPACK_IMPORTED_MODULE_23__["OtherAffairModule"],
                _graduates_affairs_graduates_affairs_module__WEBPACK_IMPORTED_MODULE_27__["GraduatesAffairsModule"]
            ],
            providers: [_shared_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"],
                _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_11__["HttpRequestService"],
                _shared_services_user_manager_service__WEBPACK_IMPORTED_MODULE_12__["UserManagerService"],
                _shared_services_app_storage_service__WEBPACK_IMPORTED_MODULE_15__["AppStorageService"],
                _shared_services_print_service__WEBPACK_IMPORTED_MODULE_24__["PrintService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auto-generated/auto-generated.component.css":
/*!*************************************************************!*\
  !*** ./src/app/auto-generated/auto-generated.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/auto-generated/auto-generated.component.html":
/*!**************************************************************!*\
  !*** ./src/app/auto-generated/auto-generated.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  auto-generated works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auto-generated/auto-generated.component.ts":
/*!************************************************************!*\
  !*** ./src/app/auto-generated/auto-generated.component.ts ***!
  \************************************************************/
/*! exports provided: AutoGeneratedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoGeneratedComponent", function() { return AutoGeneratedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutoGeneratedComponent = /** @class */ (function () {
    function AutoGeneratedComponent() {
    }
    AutoGeneratedComponent.prototype.ngOnInit = function () {
    };
    AutoGeneratedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auto-generated',
            template: __webpack_require__(/*! ./auto-generated.component.html */ "./src/app/auto-generated/auto-generated.component.html"),
            styles: [__webpack_require__(/*! ./auto-generated.component.css */ "./src/app/auto-generated/auto-generated.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AutoGeneratedComponent);
    return AutoGeneratedComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/dashboard/posts/posts.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");






var routes = [
    {
        path: 'dashboard',
        children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/dashboard/spinner/spinner.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/dashboard/posts/posts.component.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/posts.service */ "./src/app/dashboard/services/posts.service.ts");








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]
            ],
            providers: [
                _services_posts_service__WEBPACK_IMPORTED_MODULE_7__["PostsService"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\r\n   <br/><br/><br/>\r\n    <div class=\"container\">dd</div></main>\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/posts.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/posts/posts.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/posts/posts.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/posts/posts.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <br/>\r\n  <br/>\r\n  <br/>\r\n  posts works!\r\n  <button (click)=\"GetPosts()\"  value=\"Load Posts\">Auth Posts</button>\r\n  <button (click)=\"GetPostsAnon()\"  value=\"Load Posts\">Posts</button>\r\n  <button (click)=\"update()\"  value=\"Load Posts\">update</button>\r\n\r\n  {{showMsg$ |async}}\r\n \r\n  <ul >\r\n    <li  *ngFor=\"let post of posts$ | async ;\">{{post.title}} </li>\r\n  \r\n  </ul>\r\n  <ng-template #loading>\r\n    <p>\r\n      Show this only if \"show\" is not true\r\n    </p>\r\n  </ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/posts/posts.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/posts/posts.component.ts ***!
  \****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/posts.service */ "./src/app/dashboard/services/posts.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var PostsComponent = /** @class */ (function () {
    function PostsComponent(postServ) {
        this.postServ = postServ;
        this.showError = false;
        this.showMsg = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.showMsg$ = this.showMsg.asObservable();
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent.prototype.GetPosts = function () {
        this.posts$ = this.postServ.getAuthPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PostsComponent.prototype.GetPostsAnon = function () {
        this.posts$ = this.postServ.getPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    PostsComponent.prototype.showdata = function () {
        this.showMsg.next(false);
    };
    PostsComponent.prototype.update = function () {
        this.showMsg.next(true);
    };
    PostsComponent.prototype.errorHandler = function (error) {
        this.showMsg.next(true);
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(" " + error.statusText + " ");
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/dashboard/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/dashboard/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/services/posts.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/services/posts.service.ts ***!
  \*****************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var PostsService = /** @class */ (function () {
    function PostsService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    PostsService.prototype.getAuthPosts = function () {
        return this.httRequest.GetAuthRequest('Posts');
    };
    PostsService.prototype.getPosts = function () {
        return this.httRequest.GetRequest('Posts');
    };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/dashboard/spinner/spinner.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/spinner/spinner.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/spinner/spinner.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/spinner/spinner.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  spinner works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/spinner/spinner.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/spinner/spinner.component.ts ***!
  \********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/dashboard/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/dashboard/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/exams-affair/exams-absence-excuses/exams-absence-excuses.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/exams-affair/exams-absence-excuses/exams-absence-excuses.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1zLWFmZmFpci9leGFtcy1hYnNlbmNlLWV4Y3VzZXMvZXhhbXMtYWJzZW5jZS1leGN1c2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/exams-affair/exams-absence-excuses/exams-absence-excuses.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/exams-affair/exams-absence-excuses/exams-absence-excuses.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/exams-affair/exams-absence-excuses/exams-absence-excuses.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/exams-affair/exams-absence-excuses/exams-absence-excuses.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ExamsAbsenceExcusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsAbsenceExcusesComponent", function() { return ExamsAbsenceExcusesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamsAbsenceExcusesComponent = /** @class */ (function () {
    function ExamsAbsenceExcusesComponent() {
    }
    ExamsAbsenceExcusesComponent.prototype.ngOnInit = function () {
    };
    ExamsAbsenceExcusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exams-absence-excuses',
            template: __webpack_require__(/*! ./exams-absence-excuses.component.html */ "./src/app/exams-affair/exams-absence-excuses/exams-absence-excuses.component.html"),
            styles: [__webpack_require__(/*! ./exams-absence-excuses.component.css */ "./src/app/exams-affair/exams-absence-excuses/exams-absence-excuses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamsAbsenceExcusesComponent);
    return ExamsAbsenceExcusesComponent;
}());



/***/ }),

/***/ "./src/app/exams-affair/exams-affair-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/exams-affair/exams-affair-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ExamsAffairRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsAffairRoutingModule", function() { return ExamsAffairRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exams_attend_stat_exams_attend_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exams-attend-stat/exams-attend-stat.component */ "./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.ts");
/* harmony import */ var _exams_attend_app_exams_attend_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exams-attend-app/exams-attend-app.component */ "./src/app/exams-affair/exams-attend-app/exams-attend-app.component.ts");





var routes = [{ path: 'exams', component: _exams_attend_stat_exams_attend_stat_component__WEBPACK_IMPORTED_MODULE_3__["ExamsAttendStatComponent"] },
    {
        path: 'exams',
        children: [
            { path: 'attend', component: _exams_attend_stat_exams_attend_stat_component__WEBPACK_IMPORTED_MODULE_3__["ExamsAttendStatComponent"] },
            { path: 'attendapp', component: _exams_attend_app_exams_attend_app_component__WEBPACK_IMPORTED_MODULE_4__["ExamsAttendAppComponent"] },
        ]
    }];
var ExamsAffairRoutingModule = /** @class */ (function () {
    function ExamsAffairRoutingModule() {
    }
    ExamsAffairRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExamsAffairRoutingModule);
    return ExamsAffairRoutingModule;
}());



/***/ }),

/***/ "./src/app/exams-affair/exams-affair.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/exams-affair/exams-affair.module.ts ***!
  \*****************************************************/
/*! exports provided: ExamsAffairModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsAffairModule", function() { return ExamsAffairModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _exams_affair_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exams-affair-routing.module */ "./src/app/exams-affair/exams-affair-routing.module.ts");
/* harmony import */ var _exams_schedule_exams_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exams-schedule/exams-schedule.component */ "./src/app/exams-affair/exams-schedule/exams-schedule.component.ts");
/* harmony import */ var _exams_attend_stat_exams_attend_stat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exams-attend-stat/exams-attend-stat.component */ "./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.ts");
/* harmony import */ var _exams_absence_excuses_exams_absence_excuses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exams-absence-excuses/exams-absence-excuses.component */ "./src/app/exams-affair/exams-absence-excuses/exams-absence-excuses.component.ts");
/* harmony import */ var _exams_result_objection_exams_result_objection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exams-result-objection/exams-result-objection.component */ "./src/app/exams-affair/exams-result-objection/exams-result-objection.component.ts");
/* harmony import */ var _services_exam_attendance_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/exam-attendance.service */ "./src/app/exams-affair/services/exam-attendance.service.ts");
/* harmony import */ var _exams_attend_app_exams_attend_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exams-attend-app/exams-attend-app.component */ "./src/app/exams-affair/exams-attend-app/exams-attend-app.component.ts");
/* harmony import */ var _services_exams_attend_app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/exams-attend-app.service */ "./src/app/exams-affair/services/exams-attend-app.service.ts");











var ExamsAffairModule = /** @class */ (function () {
    function ExamsAffairModule() {
    }
    ExamsAffairModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_exams_schedule_exams_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ExamsScheduleComponent"],
                _exams_attend_stat_exams_attend_stat_component__WEBPACK_IMPORTED_MODULE_5__["ExamsAttendStatComponent"],
                _exams_absence_excuses_exams_absence_excuses_component__WEBPACK_IMPORTED_MODULE_6__["ExamsAbsenceExcusesComponent"],
                _exams_result_objection_exams_result_objection_component__WEBPACK_IMPORTED_MODULE_7__["ExamsResultObjectionComponent"],
                _exams_attend_app_exams_attend_app_component__WEBPACK_IMPORTED_MODULE_9__["ExamsAttendAppComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _exams_affair_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExamsAffairRoutingModule"]
            ],
            providers: [_services_exam_attendance_service__WEBPACK_IMPORTED_MODULE_8__["ExamAttendanceService"], _services_exams_attend_app_service__WEBPACK_IMPORTED_MODULE_10__["ExamsAttendAppService"]]
        })
    ], ExamsAffairModule);
    return ExamsAffairModule;
}());



/***/ }),

/***/ "./src/app/exams-affair/exams-attend-app/exams-attend-app.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/exams-affair/exams-attend-app/exams-attend-app.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1zLWFmZmFpci9leGFtcy1hdHRlbmQtYXBwL2V4YW1zLWF0dGVuZC1hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/exams-affair/exams-attend-app/exams-attend-app.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/exams-affair/exams-attend-app/exams-attend-app.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"padding-top:0;\">\r\n                    \r\n    <section class=\"service-single\">\r\n            <div class=\"container\">\r\n                    <h3> شهادة اثبات حضور اختبارات\r\n                      </h3>\r\n                 <div class=\"row\">\r\n                    <div class=\" col-md-5\">\r\n                      <p> شهادة اثبات حضور اختبارات\r\n                        </p>\r\n                     </div>\r\n                    <div class=\" col-md-6 descr\">\r\n                      <span>مدة الإنجاز : <span class=\"badge\">3 يوم</span> </span>\r\n                        &nbsp; &nbsp; &nbsp; &nbsp;\r\n                        <a href=\"#\"><i class=\"ik ik-download\"></i> </a>\r\n                        <a href=\"#\"><i class=\"ik ik-film\"></i></a>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n         </section>\r\n         <section  class=\"ser-state\">\r\n    <div *ngIf=\"status==0\"  class=\"alert alert-primary text-center\" role=\"alert\">\r\n        {{absData.messages}} \r\n      </div>\r\n              <nav>\r\n                  <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n               \r\n                    <a class=\"nav-item nav-link active\" id=\"one-tab\" data-toggle=\"tab\" href=\"#one\" role=\"tab\" aria-controls=\"One\" aria-selected=\"true\">\r\n                        {{eaData.Term_Exam_With_Schedule.labels.title}}   \r\n                    </a>\r\n                \r\n                    <a class=\" nav-item nav-link\" id=\"two-tab\" data-toggle=\"tab\" href=\"#two\" role=\"tab\" aria-controls=\"Two\" aria-selected=\"false\">الاختبارات الفصليه بدون جدول</a>\r\n                    <a class=\"nav-item nav-link\" id=\"three-tab\" data-toggle=\"tab\" href=\"#three\" role=\"tab\" aria-controls=\"Three\" aria-selected=\"false\">الاختبارات النهائيه مع الجدول</a>\r\n               \r\n                    <a class=\"nav-item nav-link\" id=\"four-tab\" data-toggle=\"tab\" href=\"#four\" role=\"tab\" aria-controls=\"Four\" aria-selected=\"false\">الاختبارات النهائيه بدون جدول</a>\r\n              \r\n                  </div></nav>\r\n          \r\n    \r\n            <div class=\"tab-content\" id=\"myTabContent\">\r\n              <div class=\"tab-pane fade show active p-3\" id=\"one\" role=\"tabpanel\" aria-labelledby=\"one-tab\">\r\n                \r\n                 <div class=\"widget\">\r\n                    <div class=\"widget-header\" style=\"padding: 5px 0\" >\r\n                        <h3 class=\"widget-title\" style=\"font-size:14px;\">{{eaData.Term_Exam_With_Schedule.labels.title}}</h3></div>\r\n                    <div class=\"hints\">\r\n                   \r\n                <p style=\"text-align: right;padding: 5px\"> \r\n                    {{eaData.Term_Exam_With_Schedule.labels.date}}: {{eaData.Term_Exam_With_Schedule.values.date}}\r\n                    <br/>\r\n                     الرقم الجامعي : {{eaData.Term_Exam_With_Schedule.values.std_id}}\r\n                \r\n                <br/>\r\n                {{eaData.Term_Exam_With_Schedule.labels.txt1}}\r\n                {{eaData.Term_Exam_With_Schedule.values.student_name}}\r\n                {{eaData.Term_Exam_With_Schedule.labels.txt2}}\r\n                {{eaData.Term_Exam_With_Schedule.values.std_id}}\r\n                {{eaData.Term_Exam_With_Schedule.labels.txt3}}\r\n                {{eaData.Term_Exam_With_Schedule.values.coll}}\r\n                {{eaData.Term_Exam_With_Schedule.labels.txt4}}\r\n                {{eaData.Term_Exam_With_Schedule.values.term}}\r\n                <br/>\r\n                {{eaData.Term_Exam_With_Schedule.labels.txt5}}\r\n  \r\n                {{eaData.Term_Exam_With_Schedule.values.startDay}}\r\n                {{eaData.Term_Exam_With_Schedule.labels.txt6}}\r\n                {{eaData.Term_Exam_With_Schedule.values.endDay}}\r\n                <br/>\r\n                {{eaData.Term_Exam_With_Schedule.labels.txt7}}\r\n  \r\n                \r\n  \r\n                \r\n                    </p>  </div> \r\n                  </div>   \r\n                  <div class=\"widget\">  \r\n                      <div class=\"table-responsive\">\r\n                          <table class=\"table table-striped table-bordered\">\r\n                          <thead style=\"background: #ebecf0\">\r\n                      <tr>\r\n                        <th scope=\"col\">CRN </th>\r\n                        <th scope=\"col\">اسم المقرر</th>\r\n                        <th scope=\"col\">اليوم</th>\r\n                        <th scope=\"col\">الوقت</th>\r\n                        <th scope=\"col\">الحضور</th>\r\n\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let it of eaData.Term_Exam_With_Schedule.Term_Schedule\">\r\n                        <td >{{it.CRN}}</td>\r\n                        <td>{{it.CRSE_TITLE}}</td>\r\n                        <td>{{it.CRSE_DAY}}</td>\r\n                        <td style=\"direction: ltr\">({{toHTML(it.CRSE_TIME)}})</td>\r\n                        <td>{{it.STD_ATTEND}}</td>\r\n                      </tr>\r\n                     \r\n                    </tbody>\r\n                  </table></div> </div>\r\n                  <br>\r\n                  <div class=\"widget\">\r\n                  <p style=\"text-align: right;padding: 5px\">\r\n                  {{eaData.Term_Exam_With_Schedule.labels.txt8}}\r\n           \r\n                  {{eaData.Term_Exam_With_Schedule.labels.txt9}}\r\n            <br>\r\n            {{eaData.Term_Exam_With_Schedule.labels.txt10}}\r\n            \r\n            {{eaData.Term_Exam_With_Schedule.labels.txt11}}</p>\r\n          </div>\r\n          \r\n          <div style=\"text-align: center\" class=\"prin\">               \r\n                <a class=\"btn \" href=\"{{termSchedule}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                  طباعة</a>\r\n                  <a class=\"btn \" href=\"{{termScheduleEn}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                    Print</a>\r\n              \r\n                </div>\r\n          </div>\r\n              <div class=\"tab-pane fade p-3\" id=\"two\" role=\"tabpanel\" aria-labelledby=\"two-tab\">\r\n                  \r\n                  <div class=\"widget\">\r\n                      <div class=\"widget-header\" style=\"padding: 5px 0\" >\r\n                          <h3 class=\"widget-title\" style=\"font-size:14px;\">{{eaData.Term_Exam_Without_Schedule.labels.title}}</h3></div>\r\n                      <div class=\"hints\">\r\n                     \r\n                  <p style=\"text-align: right;padding: 5px\"> \r\n                \r\n                      {{eaData.Term_Exam_Without_Schedule.labels.date}}: {{eaData.Term_Exam_Without_Schedule.values.date}}\r\n                      <br/>\r\n                       الرقم الجامعي : {{eaData.Term_Exam_Without_Schedule.values.std_id}}\r\n                       <br/>\r\n                       {{eaData.Term_Exam_Without_Schedule.labels.txt1}}\r\n                       {{eaData.Term_Exam_Without_Schedule.values.student_name}}\r\n                       {{eaData.Term_Exam_Without_Schedule.labels.txt2}}\r\n                       {{eaData.Term_Exam_Without_Schedule.values.std_id}}\r\n                       {{eaData.Term_Exam_Without_Schedule.labels.txt3}}\r\n                       {{eaData.Term_Exam_Without_Schedule.values.coll}}\r\n                       {{eaData.Term_Exam_Without_Schedule.labels.txt4}}\r\n                       {{eaData.Term_Exam_Without_Schedule.values.term}}\r\n                       <br/>\r\n                       {{eaData.Term_Exam_Without_Schedule.labels.txt5}}\r\n         \r\n                       {{eaData.Term_Exam_Without_Schedule.values.startDay}}\r\n                       {{eaData.Term_Exam_Without_Schedule.labels.txt6}}\r\n                       {{eaData.Term_Exam_Without_Schedule.values.endDay}}\r\n                       <br/>\r\n                       {{eaData.Term_Exam_Without_Schedule.labels.txt7}}\r\n         <br>\r\n         {{eaData.Term_Exam_Without_Schedule.labels.txt8}}\r\n  \r\n         {{eaData.Term_Exam_Without_Schedule.labels.txt9}}\r\n   <br>\r\n   {{eaData.Term_Exam_Without_Schedule.labels.txt10}}\r\n   \r\n   {{eaData.Term_Exam_Without_Schedule.labels.txt11}}\r\n  \r\n  \r\n  \r\n                  \r\n                      </p>     </div></div>    \r\n                      <div style=\"text-align: center\" class=\"prin\">               \r\n\r\n                          <a class=\"btn btn-primary\" href=\"{{term}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                            طباعة</a>\r\n                            <a class=\"btn btn-primary\" href=\"{{term}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                              Print</a>\r\n                          \r\n                          </div>\r\n              </div>\r\n              <div class=\"tab-pane fade p-3\" id=\"three\" role=\"tabpanel\" aria-labelledby=\"three-tab\">\r\n                  <div class=\"widget\">\r\n                      <div class=\"widget-header\" style=\"padding: 5px 0\" >\r\n                          <h3 class=\"widget-title\" style=\"font-size:14px;\">{{eaData.Final_Exam_With_Schedule.labels.title}}  </h3>\r\n                 </div>\r\n                 <div class=\"hints\">\r\n                   \r\n                    <p style=\"text-align: right;padding: 5px\"> \r\n                                            {{eaData.Final_Exam_With_Schedule.labels.date}}: {{eaData.Final_Exam_With_Schedule.values.date}}\r\n                      <br/>\r\n                       الرقم الجامعي : {{eaData.Final_Exam_With_Schedule.values.std_id}}\r\n                  \r\n                  <br/>\r\n                  {{eaData.Final_Exam_With_Schedule.labels.txt1}}\r\n                  {{eaData.Final_Exam_With_Schedule.values.student_name}}\r\n                  {{eaData.Final_Exam_With_Schedule.labels.txt2}}\r\n                  {{eaData.Final_Exam_With_Schedule.values.std_id}}\r\n                  {{eaData.Final_Exam_With_Schedule.labels.txt3}}\r\n                  {{eaData.Final_Exam_With_Schedule.values.coll}}\r\n                  {{eaData.Final_Exam_With_Schedule.labels.txt4}}\r\n                  {{eaData.Final_Exam_With_Schedule.values.term}}\r\n                  <br/>\r\n                  {{eaData.Final_Exam_With_Schedule.labels.txt5}}\r\n    \r\n                  {{eaData.Final_Exam_With_Schedule.values.startDay}}\r\n                  {{eaData.Final_Exam_With_Schedule.labels.txt6}}\r\n                  {{eaData.Final_Exam_With_Schedule.values.endDay}}\r\n                  <br/>\r\n                  {{eaData.Final_Exam_With_Schedule.labels.txt7}}\r\n    \r\n                  \r\n    \r\n                  \r\n                      </p>    </div>  \r\n                      </div> \r\n                      <div class=\"table-responsive\">\r\n                          <table class=\"table table-striped table-bordered\">\r\n                              <thead style=\"background: #ebecf0\">                      \r\n                        <tr>\r\n                          <th scope=\"col\">CRN </th>\r\n                          <th scope=\"col\">اسم المقرر</th>\r\n                          <th scope=\"col\">اليوم</th>\r\n                          <th scope=\"col\">الوقت</th>\r\n                          <th scope=\"col\">الحضور</th>\r\n\r\n    \r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let it of eaData.Final_Exam_With_Schedule.Final_Schedule\">\r\n                          <td >{{it.CRN}}</td>\r\n                          <td>{{it.CRSE_TITLE}}</td>\r\n                          <td>{{it.CRSE_DAY}}</td>\r\n                          <td style=\"direction: ltr\">({{toHTML(it.CRSE_TIME)}})</td>\r\n                          <td>{{it.STD_ATTEND}}</td>\r\n\r\n    \r\n                        </tr>\r\n                       \r\n                      </tbody>\r\n                    </table></div>  \r\n                    <br>\r\n                    <div class=\"widget\"><div class=\"hints\">\r\n                    <p style=\"text-align: right\">\r\n                    {{eaData.Final_Exam_With_Schedule.labels.txt8}}\r\n             \r\n                    {{eaData.Final_Exam_With_Schedule.labels.txt9}}\r\n              <br>\r\n              {{eaData.Final_Exam_With_Schedule.labels.txt10}}\r\n              \r\n              {{eaData.Final_Exam_With_Schedule.labels.txt11}}</p>\r\n            </div> </div>\r\n            <div style=\"text-align: center\" class=\"prin\">               \r\n\r\n                  <a class=\"btn btn-primary\" href=\"{{finalschedule}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                    طباعة</a>\r\n                    <a class=\"btn btn-primary\" href=\"{{finalscheduleEn}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                      Print</a>\r\n                  \r\n                \r\n                  </div>\r\n                  </div>\r\n                  <div class=\"tab-pane fade p-3\" id=\"four\" role=\"tabpanel\" aria-labelledby=\"four-tab\">\r\n                    <div class=\"widget\"><div class=\"widget-header\">\r\n                      <h3 class=\"widget-title\" style=\"font-size:14px;\">{{eaData.Final_Exam_Without_Schedule.labels.title}}  </h3>\r\n                    </div>\r\n                      <p class=\"card-text\" style=\"text-align: right\" > \r\n                          {{eaData.Final_Exam_Without_Schedule.labels.date}}: {{eaData.Final_Exam_Without_Schedule.values.date}}\r\n                          <br/>\r\n                           الرقم الجامعي : {{eaData.Final_Exam_Without_Schedule.values.std_id}}\r\n                           <br/>\r\n                           {{eaData.Final_Exam_Without_Schedule.labels.txt1}}\r\n                           {{eaData.Final_Exam_Without_Schedule.values.student_name}}\r\n                           {{eaData.Final_Exam_Without_Schedule.labels.txt2}}\r\n                           {{eaData.Final_Exam_Without_Schedule.values.std_id}}\r\n                           {{eaData.Final_Exam_Without_Schedule.labels.txt3}}\r\n                           {{eaData.Final_Exam_Without_Schedule.values.coll}}\r\n                           {{eaData.Final_Exam_Without_Schedule.labels.txt4}}\r\n                           {{eaData.Final_Exam_Without_Schedule.values.term}}\r\n                           <br/>\r\n                           {{eaData.Final_Exam_Without_Schedule.labels.txt5}}\r\n             \r\n                           {{eaData.Final_Exam_Without_Schedule.values.startDay}}\r\n                           {{eaData.Final_Exam_Without_Schedule.labels.txt6}}\r\n                           {{eaData.Final_Exam_Without_Schedule.values.endDay}}\r\n                           <br/>\r\n                           {{eaData.Final_Exam_Without_Schedule.labels.txt7}}\r\n             <br>\r\n             {{eaData.Final_Exam_Without_Schedule.labels.txt8}}\r\n      \r\n             {{eaData.Final_Exam_Without_Schedule.labels.txt9}}\r\n       <br>\r\n       {{eaData.Final_Exam_Without_Schedule.labels.txt10}}\r\n       \r\n       {{eaData.Final_Exam_Without_Schedule.labels.txt11}}\r\n      \r\n      \r\n      \r\n                      \r\n                          </p>\r\n                    </div>    \r\n                    <div style=\"text-align: center\" class=\"prin\">               \r\n\r\n                              <a class=\"btn \" href=\"{{final}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                                طباعة</a>\r\n                                <a class=\"btn\" href=\"{{finalEn}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                                  Print</a>\r\n                                \r\n                              \r\n                            \r\n                              </div>\r\n                        </div></div></section>"

/***/ }),

/***/ "./src/app/exams-affair/exams-attend-app/exams-attend-app.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/exams-affair/exams-attend-app/exams-attend-app.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExamsAttendAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsAttendAppComponent", function() { return ExamsAttendAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_exams_attend_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exams-attend-app.service */ "./src/app/exams-affair/services/exams-attend-app.service.ts");



var ExamsAttendAppComponent = /** @class */ (function () {
    function ExamsAttendAppComponent(academicService) {
        this.academicService = academicService;
    }
    ExamsAttendAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.academicService.getِExamsAttednace('S180105049').then(function (res) {
            _this.eaData = res.data;
        });
        this.finalschedule = this.academicService.Print_Final_Exam_With_Schedule();
        this.final = this.academicService.Print_Final_Exam_Without_Schedule();
        this.termSchedule = this.academicService.Print_Term_Exam_With_Schedule();
        this.term = this.academicService.Print_Term_Exam_Without_Schedule();
        this.finalscheduleEn = this.academicService.Print_Final_Exam_With_ScheduleEn();
        this.finalEn = this.academicService.Print_Final_Exam_Without_ScheduleEn();
        this.termScheduleEn = this.academicService.Print_Term_Exam_With_ScheduleEn();
        this.termEn = this.academicService.Print_Term_Exam_Without_ScheduleEn();
    };
    ExamsAttendAppComponent.prototype.toHTML = function (input) {
        return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
    };
    ExamsAttendAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exams-attend-app',
            template: __webpack_require__(/*! ./exams-attend-app.component.html */ "./src/app/exams-affair/exams-attend-app/exams-attend-app.component.html"),
            styles: [__webpack_require__(/*! ./exams-attend-app.component.css */ "./src/app/exams-affair/exams-attend-app/exams-attend-app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_exams_attend_app_service__WEBPACK_IMPORTED_MODULE_2__["ExamsAttendAppService"]])
    ], ExamsAttendAppComponent);
    return ExamsAttendAppComponent;
}());



/***/ }),

/***/ "./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1zLWFmZmFpci9leGFtcy1hdHRlbmQtc3RhdC9leGFtcy1hdHRlbmQtc3RhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 class=\"text-center\">شهادة حضور  اختبارات</h3>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"card mt-3 tab-card\">\r\n          <div class=\"card-header tab-card-header\">\r\n            <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" id=\"one-tab\" data-toggle=\"tab\" href=\"#one\" role=\"tab\" aria-controls=\"One\" aria-selected=\"true\">\r\n                      {{eaData.Term_Exam_With_Schedule.labels.title}}   \r\n                  </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" id=\"two-tab\" data-toggle=\"tab\" href=\"#two\" role=\"tab\" aria-controls=\"Two\" aria-selected=\"false\">الاختبارات الفصليه بدون جدول</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" id=\"three-tab\" data-toggle=\"tab\" href=\"#three\" role=\"tab\" aria-controls=\"Three\" aria-selected=\"false\">الاختبارات النهائيه مع الجدول</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" id=\"four-tab\" data-toggle=\"tab\" href=\"#four\" role=\"tab\" aria-controls=\"Four\" aria-selected=\"false\">الاختبارات النهائيه بدون جدول</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n  \r\n          <div class=\"tab-content\" id=\"myTabContent\">\r\n            <div class=\"tab-pane fade show active p-3\" id=\"one\" role=\"tabpanel\" aria-labelledby=\"one-tab\">\r\n              <h5 class=\"card-title text-center\">{{eaData.Term_Exam_With_Schedule.labels.title}}  </h5>\r\n              <p class=\"card-text\" style=\"text-align: right\" > \r\n                  {{eaData.Term_Exam_With_Schedule.labels.date}}: {{eaData.Term_Exam_With_Schedule.values.date}}\r\n                  <br/>\r\n                   الرقم الجامعي : {{eaData.Term_Exam_With_Schedule.values.std_id}}\r\n              \r\n              <br/>\r\n              {{eaData.Term_Exam_With_Schedule.labels.txt1}}\r\n              {{eaData.Term_Exam_With_Schedule.values.student_name}}\r\n              {{eaData.Term_Exam_With_Schedule.labels.txt2}}\r\n              {{eaData.Term_Exam_With_Schedule.values.std_id}}\r\n              {{eaData.Term_Exam_With_Schedule.labels.txt3}}\r\n              {{eaData.Term_Exam_With_Schedule.values.coll}}\r\n              {{eaData.Term_Exam_With_Schedule.labels.txt4}}\r\n              {{eaData.Term_Exam_With_Schedule.values.term}}\r\n              <br/>\r\n              {{eaData.Term_Exam_With_Schedule.labels.txt5}}\r\n\r\n              {{eaData.Term_Exam_With_Schedule.values.startDay}}\r\n              {{eaData.Term_Exam_With_Schedule.labels.txt6}}\r\n              {{eaData.Term_Exam_With_Schedule.values.endDay}}\r\n              <br/>\r\n              {{eaData.Term_Exam_With_Schedule.labels.txt7}}\r\n\r\n              \r\n\r\n              \r\n                  </p>         \r\n              <table style=\"direction: rtl\" class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th scope=\"col\">CRN </th>\r\n                      <th scope=\"col\">اسم المقرر</th>\r\n                      <th scope=\"col\">اليوم</th>\r\n                      <th scope=\"col\">الوقت</th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let it of eaData.Term_Exam_With_Schedule.Term_Schedule\">\r\n                      <td >{{it.CRN}}</td>\r\n                      <td>{{it.CRSE_TITLE}}</td>\r\n                      <td>{{it.CRSE_DAY}}</td>\r\n                      <td style=\"direction: ltr\">({{toHTML(it.CRSE_TIME)}})</td>\r\n\r\n                    </tr>\r\n                   \r\n                  </tbody>\r\n                </table>\r\n                <br>\r\n                <p style=\"text-align: right\">\r\n                {{eaData.Term_Exam_With_Schedule.labels.txt8}}\r\n         \r\n                {{eaData.Term_Exam_With_Schedule.labels.txt9}}\r\n          <br>\r\n          {{eaData.Term_Exam_With_Schedule.labels.txt10}}\r\n          \r\n          {{eaData.Term_Exam_With_Schedule.labels.txt11}}</p>\r\n           \r\n        \r\n          <div  class=\"btn-group btn-group-justified col-md-12 \">\r\n              <div class=\"col-md-4\"></div>\r\n              <a class=\"btn btn-primary\" href=\"{{termSchedule}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                طباعة</a>\r\n                <a class=\"btn btn-primary\" href=\"{{termScheduleEn}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                  Print</a>\r\n              <div class=\"col-md-4\"></div>\r\n            \r\n              </div>\r\n        </div>\r\n            <div class=\"tab-pane fade p-3\" id=\"two\" role=\"tabpanel\" aria-labelledby=\"two-tab\">\r\n                <h5 class=\"card-title text-center\">{{eaData.Term_Exam_Without_Schedule.labels.title}}  </h5>\r\n                <p class=\"card-text\" style=\"text-align: right\" > \r\n                    {{eaData.Term_Exam_Without_Schedule.labels.date}}: {{eaData.Term_Exam_Without_Schedule.values.date}}\r\n                    <br/>\r\n                     الرقم الجامعي : {{eaData.Term_Exam_Without_Schedule.values.std_id}}\r\n                     <br/>\r\n                     {{eaData.Term_Exam_Without_Schedule.labels.txt1}}\r\n                     {{eaData.Term_Exam_Without_Schedule.values.student_name}}\r\n                     {{eaData.Term_Exam_Without_Schedule.labels.txt2}}\r\n                     {{eaData.Term_Exam_Without_Schedule.values.std_id}}\r\n                     {{eaData.Term_Exam_Without_Schedule.labels.txt3}}\r\n                     {{eaData.Term_Exam_Without_Schedule.values.coll}}\r\n                     {{eaData.Term_Exam_Without_Schedule.labels.txt4}}\r\n                     {{eaData.Term_Exam_Without_Schedule.values.term}}\r\n                     <br/>\r\n                     {{eaData.Term_Exam_Without_Schedule.labels.txt5}}\r\n       \r\n                     {{eaData.Term_Exam_Without_Schedule.values.startDay}}\r\n                     {{eaData.Term_Exam_Without_Schedule.labels.txt6}}\r\n                     {{eaData.Term_Exam_Without_Schedule.values.endDay}}\r\n                     <br/>\r\n                     {{eaData.Term_Exam_Without_Schedule.labels.txt7}}\r\n       <br>\r\n       {{eaData.Term_Exam_Without_Schedule.labels.txt8}}\r\n\r\n       {{eaData.Term_Exam_Without_Schedule.labels.txt9}}\r\n <br>\r\n {{eaData.Term_Exam_Without_Schedule.labels.txt10}}\r\n \r\n {{eaData.Term_Exam_Without_Schedule.labels.txt11}}\r\n\r\n\r\n\r\n                \r\n                    </p>         \r\n                    <div  class=\"btn-group btn-group-justified col-md-12 \">\r\n                        <div class=\"col-md-4\"></div>\r\n                        <a class=\"btn btn-primary\" href=\"{{term}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                          طباعة</a>\r\n                          <a class=\"btn btn-primary\" href=\"{{termEn}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                            Print</a>\r\n                          <div class=\"col-md-4\"></div>\r\n                        </div>\r\n            </div>\r\n            <div class=\"tab-pane fade p-3\" id=\"three\" role=\"tabpanel\" aria-labelledby=\"three-tab\">\r\n                <h5 class=\"card-title text-center\">{{eaData.Final_Exam_With_Schedule.labels.title}}  </h5>\r\n                <p class=\"card-text\" style=\"text-align: right\" > \r\n                    {{eaData.Final_Exam_With_Schedule.labels.date}}: {{eaData.Final_Exam_With_Schedule.values.date}}\r\n                    <br/>\r\n                     الرقم الجامعي : {{eaData.Final_Exam_With_Schedule.values.std_id}}\r\n                \r\n                <br/>\r\n                {{eaData.Final_Exam_With_Schedule.labels.txt1}}\r\n                {{eaData.Final_Exam_With_Schedule.values.student_name}}\r\n                {{eaData.Final_Exam_With_Schedule.labels.txt2}}\r\n                {{eaData.Final_Exam_With_Schedule.values.std_id}}\r\n                {{eaData.Final_Exam_With_Schedule.labels.txt3}}\r\n                {{eaData.Final_Exam_With_Schedule.values.coll}}\r\n                {{eaData.Final_Exam_With_Schedule.labels.txt4}}\r\n                {{eaData.Final_Exam_With_Schedule.values.term}}\r\n                <br/>\r\n                {{eaData.Final_Exam_With_Schedule.labels.txt5}}\r\n  \r\n                {{eaData.Final_Exam_With_Schedule.values.startDay}}\r\n                {{eaData.Final_Exam_With_Schedule.labels.txt6}}\r\n                {{eaData.Final_Exam_With_Schedule.values.endDay}}\r\n                <br/>\r\n                {{eaData.Final_Exam_With_Schedule.labels.txt7}}\r\n  \r\n                \r\n  \r\n                \r\n                    </p>         \r\n                <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">CRN </th>\r\n                        <th scope=\"col\">اسم المقرر</th>\r\n                        <th scope=\"col\">اليوم</th>\r\n                        <th scope=\"col\">الوقت</th>\r\n  \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let it of eaData.Final_Exam_With_Schedule.Final_Schedule\">\r\n                        <td >{{it.CRN}}</td>\r\n                        <td>{{it.CRSE_TITLE}}</td>\r\n                        <td>{{it.CRSE_DAY}}</td>\r\n                        <td style=\"direction:ltr\">({{toHTML(it.CRSE_TIME)}})</td>\r\n  \r\n                      </tr>\r\n                     \r\n                    </tbody>\r\n                  </table>\r\n                  <br>\r\n                  <p style=\"text-align: right\">\r\n                  {{eaData.Final_Exam_With_Schedule.labels.txt8}}\r\n           \r\n                  {{eaData.Final_Exam_With_Schedule.labels.txt9}}\r\n            <br>\r\n            {{eaData.Final_Exam_With_Schedule.labels.txt10}}\r\n            \r\n            {{eaData.Final_Exam_With_Schedule.labels.txt11}}</p>\r\n                      \r\n            <div  class=\"btn-group btn-group-justified col-md-12 \">\r\n                <div class=\"col-md-4\"></div>\r\n                <a class=\"btn btn-primary\" href=\"{{finalschedule}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                  طباعة</a>\r\n                  <a class=\"btn btn-primary\" href=\"{{finalscheduleEn}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                    Print</a>\r\n                <div class=\"col-md-4\"></div>\r\n              \r\n                </div>\r\n                </div>\r\n                <div class=\"tab-pane fade p-3\" id=\"four\" role=\"tabpanel\" aria-labelledby=\"four-tab\">\r\n                    <h5 class=\"card-title text-center\">{{eaData.Final_Exam_Without_Schedule.labels.title}}  </h5>\r\n                    <p class=\"card-text\" style=\"text-align: right\" > \r\n                        {{eaData.Final_Exam_Without_Schedule.labels.date}}: {{eaData.Final_Exam_Without_Schedule.values.date}}\r\n                        <br/>\r\n                         الرقم الجامعي : {{eaData.Final_Exam_Without_Schedule.values.std_id}}\r\n                         <br/>\r\n                         {{eaData.Final_Exam_Without_Schedule.labels.txt1}}\r\n                         {{eaData.Final_Exam_Without_Schedule.values.student_name}}\r\n                         {{eaData.Final_Exam_Without_Schedule.labels.txt2}}\r\n                         {{eaData.Final_Exam_Without_Schedule.values.std_id}}\r\n                         {{eaData.Final_Exam_Without_Schedule.labels.txt3}}\r\n                         {{eaData.Final_Exam_Without_Schedule.values.coll}}\r\n                         {{eaData.Final_Exam_Without_Schedule.labels.txt4}}\r\n                         {{eaData.Final_Exam_Without_Schedule.values.term}}\r\n                         <br/>\r\n                         {{eaData.Final_Exam_Without_Schedule.labels.txt5}}\r\n           \r\n                         {{eaData.Final_Exam_Without_Schedule.values.startDay}}\r\n                         {{eaData.Final_Exam_Without_Schedule.labels.txt6}}\r\n                         {{eaData.Final_Exam_Without_Schedule.values.endDay}}\r\n                         <br/>\r\n                         {{eaData.Final_Exam_Without_Schedule.labels.txt7}}\r\n           <br>\r\n           {{eaData.Final_Exam_Without_Schedule.labels.txt8}}\r\n    \r\n           {{eaData.Final_Exam_Without_Schedule.labels.txt9}}\r\n     <br>\r\n     {{eaData.Final_Exam_Without_Schedule.labels.txt10}}\r\n     \r\n     {{eaData.Final_Exam_Without_Schedule.labels.txt11}}\r\n    \r\n    \r\n    \r\n                    \r\n                        </p>    \r\n                        <div  class=\"btn-group btn-group-justified col-md-12 \">\r\n                            <div class=\"col-md-4\"></div>\r\n                            <a class=\"btn btn-primary\" href=\"{{final}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                              طباعة</a>\r\n                              <a class=\"btn btn-primary\" href=\"{{finalEn}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                                English</a>\r\n                              \r\n                            <div class=\"col-md-4\"></div>\r\n                          \r\n                            </div>\r\n                      </div>"

/***/ }),

/***/ "./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExamsAttendStatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsAttendStatComponent", function() { return ExamsAttendStatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_exam_attendance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exam-attendance.service */ "./src/app/exams-affair/services/exam-attendance.service.ts");



var ExamsAttendStatComponent = /** @class */ (function () {
    function ExamsAttendStatComponent(academicService) {
        this.academicService = academicService;
    }
    ExamsAttendStatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.academicService.getِExamsAttednace('S180105049').then(function (res) {
            _this.eaData = res.data;
        });
        this.finalschedule = this.academicService.Print_Final_Exam_With_Schedule();
        this.final = this.academicService.Print_Final_Exam_Without_Schedule();
        this.termSchedule = this.academicService.Print_Term_Exam_With_Schedule();
        this.term = this.academicService.Print_Term_Exam_Without_Schedule();
        this.finalscheduleEn = this.academicService.Print_Final_Exam_With_ScheduleEn();
        this.finalEn = this.academicService.Print_Final_Exam_Without_ScheduleEn();
        this.termScheduleEn = this.academicService.Print_Term_Exam_With_ScheduleEn();
        this.termEn = this.academicService.Print_Term_Exam_Without_ScheduleEn();
    };
    ExamsAttendStatComponent.prototype.toHTML = function (input) {
        return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
    };
    ExamsAttendStatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exams-attend-stat',
            template: __webpack_require__(/*! ./exams-attend-stat.component.html */ "./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.html"),
            styles: [__webpack_require__(/*! ./exams-attend-stat.component.css */ "./src/app/exams-affair/exams-attend-stat/exams-attend-stat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_exam_attendance_service__WEBPACK_IMPORTED_MODULE_2__["ExamAttendanceService"]])
    ], ExamsAttendStatComponent);
    return ExamsAttendStatComponent;
}());



/***/ }),

/***/ "./src/app/exams-affair/exams-result-objection/exams-result-objection.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/exams-affair/exams-result-objection/exams-result-objection.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1zLWFmZmFpci9leGFtcy1yZXN1bHQtb2JqZWN0aW9uL2V4YW1zLXJlc3VsdC1vYmplY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/exams-affair/exams-result-objection/exams-result-objection.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/exams-affair/exams-result-objection/exams-result-objection.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  exams-result-objection works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/exams-affair/exams-result-objection/exams-result-objection.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/exams-affair/exams-result-objection/exams-result-objection.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExamsResultObjectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsResultObjectionComponent", function() { return ExamsResultObjectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamsResultObjectionComponent = /** @class */ (function () {
    function ExamsResultObjectionComponent() {
    }
    ExamsResultObjectionComponent.prototype.ngOnInit = function () {
    };
    ExamsResultObjectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exams-result-objection',
            template: __webpack_require__(/*! ./exams-result-objection.component.html */ "./src/app/exams-affair/exams-result-objection/exams-result-objection.component.html"),
            styles: [__webpack_require__(/*! ./exams-result-objection.component.css */ "./src/app/exams-affair/exams-result-objection/exams-result-objection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamsResultObjectionComponent);
    return ExamsResultObjectionComponent;
}());



/***/ }),

/***/ "./src/app/exams-affair/exams-schedule/exams-schedule.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/exams-affair/exams-schedule/exams-schedule.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1zLWFmZmFpci9leGFtcy1zY2hlZHVsZS9leGFtcy1zY2hlZHVsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/exams-affair/exams-schedule/exams-schedule.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/exams-affair/exams-schedule/exams-schedule.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  exams-schedule works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/exams-affair/exams-schedule/exams-schedule.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/exams-affair/exams-schedule/exams-schedule.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExamsScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsScheduleComponent", function() { return ExamsScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExamsScheduleComponent = /** @class */ (function () {
    function ExamsScheduleComponent() {
    }
    ExamsScheduleComponent.prototype.ngOnInit = function () {
    };
    ExamsScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exams-schedule',
            template: __webpack_require__(/*! ./exams-schedule.component.html */ "./src/app/exams-affair/exams-schedule/exams-schedule.component.html"),
            styles: [__webpack_require__(/*! ./exams-schedule.component.css */ "./src/app/exams-affair/exams-schedule/exams-schedule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExamsScheduleComponent);
    return ExamsScheduleComponent;
}());



/***/ }),

/***/ "./src/app/exams-affair/services/exam-attendance.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/exams-affair/services/exam-attendance.service.ts ***!
  \******************************************************************/
/*! exports provided: ExamAttendanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamAttendanceService", function() { return ExamAttendanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var ExamAttendanceService = /** @class */ (function () {
    function ExamAttendanceService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    ExamAttendanceService.prototype.getِExamsAttednace = function (id) {
        return this.httRequest.GetRequest('attendance_service?std_id=S180105049').toPromise();
    };
    ExamAttendanceService.prototype.Print_Term_Exam_With_Schedule = function () {
        return this.configService.getApiURI() + '/attendance_service/download?type=Term_Exam_With_Schedule';
    };
    ExamAttendanceService.prototype.Print_Term_Exam_Without_Schedule = function () {
        return this.configService.getApiURI() + '/attendance_service/download?type=Term_Exam_Without_Schedule';
    };
    ExamAttendanceService.prototype.Print_Final_Exam_With_Schedule = function () {
        return this.configService.getApiURI() + '/attendance_service/download?type=Final_Exam_With_Schedule';
    };
    ExamAttendanceService.prototype.Print_Final_Exam_Without_Schedule = function () {
        return this.configService.getApiURI() + '/attendance_service/download?type=Final_Exam_Without_Schedule';
    };
    ExamAttendanceService.prototype.Print_Term_Exam_With_ScheduleEn = function () {
        return this.configService.getApiURI() + '/attendance_service/download?type=Term_Exam_With_Schedule&Lang=en';
    };
    ExamAttendanceService.prototype.Print_Term_Exam_Without_ScheduleEn = function () {
        return this.configService.getApiURI() + '/attendance_service/download?type=Term_Exam_Without_Schedule&Lang=en';
    };
    ExamAttendanceService.prototype.Print_Final_Exam_With_ScheduleEn = function () {
        return this.configService.getApiURI() + '/attendance_service/download?type=Final_Exam_With_Schedule&Lang=en';
    };
    ExamAttendanceService.prototype.Print_Final_Exam_Without_ScheduleEn = function () {
        return this.configService.getApiURI() + '/attendance_service/download?type=Final_Exam_Without_Schedule&Lang=en';
    };
    ExamAttendanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], ExamAttendanceService);
    return ExamAttendanceService;
}());



/***/ }),

/***/ "./src/app/exams-affair/services/exams-attend-app.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/exams-affair/services/exams-attend-app.service.ts ***!
  \*******************************************************************/
/*! exports provided: ExamsAttendAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsAttendAppService", function() { return ExamsAttendAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var ExamsAttendAppService = /** @class */ (function () {
    function ExamsAttendAppService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    ExamsAttendAppService.prototype.getِExamsAttednace = function (id) {
        return this.httRequest.GetRequest('proof_attendance_service?std_id=S180105049').toPromise();
    };
    ExamsAttendAppService.prototype.Print_Term_Exam_With_Schedule = function () {
        return this.configService.getApiURI() + '/proof_attendance_service/download?type=Term_Exam_With_Schedule';
    };
    ExamsAttendAppService.prototype.Print_Term_Exam_Without_Schedule = function () {
        return this.configService.getApiURI() + '/proof_attendance_service/download?type=Term_Exam_Without_Schedule';
    };
    ExamsAttendAppService.prototype.Print_Final_Exam_With_Schedule = function () {
        return this.configService.getApiURI() + '/proof_attendance_service/download?type=Final_Exam_With_Schedule';
    };
    ExamsAttendAppService.prototype.Print_Final_Exam_Without_Schedule = function () {
        return this.configService.getApiURI() + '/proof_attendance_service/download?type=Final_Exam_Without_Schedule';
    };
    ExamsAttendAppService.prototype.Print_Term_Exam_With_ScheduleEn = function () {
        return this.configService.getApiURI() + '/proof_attendance_service/download?type=Term_Exam_With_Schedule&Lang=en';
    };
    ExamsAttendAppService.prototype.Print_Term_Exam_Without_ScheduleEn = function () {
        return this.configService.getApiURI() + '/proof_attendance_service/download?type=Term_Exam_Without_Schedule&Lang=en';
    };
    ExamsAttendAppService.prototype.Print_Final_Exam_With_ScheduleEn = function () {
        return this.configService.getApiURI() + '/proof_attendance_service/download?type=Final_Exam_With_Schedule&Lang=en';
    };
    ExamsAttendAppService.prototype.Print_Final_Exam_Without_ScheduleEn = function () {
        return this.configService.getApiURI() + '/proof_attendance_service/download?type=Final_Exam_Without_Schedule&Lang=en';
    };
    ExamsAttendAppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], ExamsAttendAppService);
    return ExamsAttendAppService;
}());



/***/ }),

/***/ "./src/app/finance-affair/finance-affair-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/finance-affair/finance-affair-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FinanceAffairRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceAffairRoutingModule", function() { return FinanceAffairRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tuition_fees_stat_tuition_fees_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tuition-fees-stat/tuition-fees-stat.component */ "./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.ts");




var routes = [
    { path: 'finance', component: _tuition_fees_stat_tuition_fees_stat_component__WEBPACK_IMPORTED_MODULE_3__["TuitionFeesStatComponent"] },
    {
        path: 'finance',
        children: [
            { path: 'fees', component: _tuition_fees_stat_tuition_fees_stat_component__WEBPACK_IMPORTED_MODULE_3__["TuitionFeesStatComponent"] }
        ]
    }
];
var FinanceAffairRoutingModule = /** @class */ (function () {
    function FinanceAffairRoutingModule() {
    }
    FinanceAffairRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FinanceAffairRoutingModule);
    return FinanceAffairRoutingModule;
}());



/***/ }),

/***/ "./src/app/finance-affair/finance-affair.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/finance-affair/finance-affair.module.ts ***!
  \*********************************************************/
/*! exports provided: FinanceAffairModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceAffairModule", function() { return FinanceAffairModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _finance_affair_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finance-affair-routing.module */ "./src/app/finance-affair/finance-affair-routing.module.ts");
/* harmony import */ var _tuition_fees_stat_tuition_fees_stat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tuition-fees-stat/tuition-fees-stat.component */ "./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.ts");
/* harmony import */ var _tuition_fees_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tuition-fees.service */ "./src/app/finance-affair/tuition-fees.service.ts");






var FinanceAffairModule = /** @class */ (function () {
    function FinanceAffairModule() {
    }
    FinanceAffairModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tuition_fees_stat_tuition_fees_stat_component__WEBPACK_IMPORTED_MODULE_4__["TuitionFeesStatComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _finance_affair_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinanceAffairRoutingModule"]
            ],
            providers: [
                _tuition_fees_service__WEBPACK_IMPORTED_MODULE_5__["TuitionFeesService"]
            ]
        })
    ], FinanceAffairModule);
    return FinanceAffairModule;
}());



/***/ }),

/***/ "./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFuY2UtYWZmYWlyL3R1aXRpb24tZmVlcy1zdGF0L3R1aXRpb24tZmVlcy1zdGF0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbtron-fluid\">\r\n    <h3 class=\"display-5 text-center\">  افادة الرسوم الداسية</h3>\r\n    \r\n    <div class=\"row\">\r\n  <div  class=\"col-md-1\"></div>\r\n  <div class=\"col-md-10\">\r\n    <div class=\"form-group\">\r\n      \r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text\"><b>اسم الطالب </b> </div>\r\n        </div>\r\n        <input  value=\"{{feesData.values.std_name}}\"  class=\"form-control\" readonly>\r\n      </div>\r\n    </div>   \r\n  </div>\r\n\r\n   <div  class=\"col-md-1\"></div>\r\n\r\n</div>\r\n<div class=\"row\">\r\n    <div  class=\"col-md-1\"></div>\r\n\r\n    <div class=\"col-md-5\">\r\n      <div class=\"form-group\">\r\n        \r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\"><b> رقم الهويه </b> </div>\r\n          </div>\r\n          <input name=\"ID\"   value=\"{{feesData.values.ssn}}\"  class=\"form-control\" readonly>\r\n        </div>\r\n      </div>   \r\n    </div>\r\n    <div class=\"col-md-5\">\r\n  \r\n        <div class=\"form-group\">\r\n        \r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><b>  رقم الطالب / الطالبه</b> </div>\r\n              </div>\r\n              <input name=\"fsermester\"  value=\"{{feesData.values.std_id}}\"   class=\"form-control\" readonly>\r\n            </div>\r\n          </div>   \r\n      </div>  <div  class=\"col-md-1\"></div>\r\n\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n      <div  class=\"col-md-1\"></div>\r\n\r\n      <div class=\"col-md-5\">\r\n        <div class=\"form-group\">\r\n          \r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\"><b> الكلية     </b> </div>\r\n            </div>\r\n            <input name=\"accamdeicStatus\"   value=\" {{feesData.values.coll}}  \"  class=\"form-control\" readonly>\r\n          </div>\r\n        </div>   \r\n      </div>\r\n      <div class=\"col-md-5\">\r\n    \r\n          <div class=\"form-group\">\r\n          \r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><b>التخصص    </b> </div>\r\n                </div>\r\n                <input name=\"TotalGrade\"  value=\"{{feesData.values.major}}\"   class=\"form-control\" readonly>\r\n              </div>\r\n            </div>   \r\n        </div>\r\n        <div  class=\"col-md-1\"></div>\r\n\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n        <div  class=\"col-md-1\"></div>\r\n\r\n        <div class=\"col-md-5\">\r\n          <div class=\"form-group\">\r\n            \r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><b> المستووى الدراسي </b> </div>\r\n              </div>\r\n              <input name=\"AcademicCurrentStatus\"  value=\"{{feesData.values.level}}\"   class=\"form-control\" readonly>\r\n            </div>\r\n          </div>   \r\n        </div>\r\n\r\n        <div class=\"col-md-5\">\r\n      \r\n            <div class=\"form-group\">\r\n            \r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\"><b> المرحله  </b> </div>\r\n                  </div>\r\n                  <input name=\"Fees\"  value=\"{{feesData.values.stage}}\"   class=\"form-control\" readonly>\r\n                </div>\r\n              </div>   \r\n          </div>        <div  class=\"col-md-1\"></div>\r\n\r\n      </div> \r\n      <div class=\"row\">\r\n          <div  class=\"col-md-1\"></div>\r\n  \r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              \r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><b>  الحالة </b> </div>\r\n                </div>\r\n                <input name=\"AcademicCurrentStatus\"  value=\"{{feesData.values.status}}\"   class=\"form-control\" readonly>\r\n              </div>\r\n            </div>   \r\n          </div>\r\n  \r\n          <div class=\"col-md-5\">\r\n        \r\n              <div class=\"form-group\">\r\n              \r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <div class=\"input-group-text\"><b> الفرع  </b> </div>\r\n                    </div>\r\n                    <input name=\"Fees\"  value=\"{{feesData.values.branch}}\"   class=\"form-control\" readonly>\r\n                  </div>\r\n                </div>   \r\n            </div>        <div  class=\"col-md-1\"></div>\r\n  \r\n        </div> \r\n    </div>\r\n      <div class=\"jumbotron jumbtron-fluid\">\r\n\r\n   <div class=\"row\">\r\n\r\n      <p style=\"direction: rtl;float: right;text-align: right;padding-right: 50px\">\r\n          {{feesData.labels.txt1}}   {{feesData.values.term}}\r\n          {{feesData.labels.txt2}} {{feesData.values.final_graduation_GPA}} {{feesData.labels.txt7}}\r\n         <br/>\r\n          {{feesData.labels.txt3}}\r\n          {{feesData.values.total}}\r\n\r\n          {{feesData.labels.txt4}}\r\n          <br/>\r\n            {{feesData.labels.txt5}}\r\n          <br/>\r\n          <b> {{feesData.labels.txt6}}</b>\r\n        </p>\r\n      </div> </div>\r\n        <div  class=\"btn-group btn-group-justified col-md-12 \">\r\n            <div class=\"col-md-4\"></div>\r\n            <a class=\"btn btn-primary\" href=\"{{arabicPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n              طباعة</a>\r\n            <a class=\"btn btn-primary\" href=\"{{EngPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n              Print</a>\r\n            <div class=\"col-md-4\"></div>\r\n          \r\n            </div>\r\n   "

/***/ }),

/***/ "./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TuitionFeesStatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuitionFeesStatComponent", function() { return TuitionFeesStatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tuition_fees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tuition-fees.service */ "./src/app/finance-affair/tuition-fees.service.ts");



var TuitionFeesStatComponent = /** @class */ (function () {
    function TuitionFeesStatComponent(academicService) {
        this.academicService = academicService;
    }
    TuitionFeesStatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.academicService.getِTuitionFeez().then(function (res) {
            _this.feesData = res.data;
        });
        this.arabicPrint = this.academicService.Download();
        this.EngPrint = this.academicService.DownloadEng();
    };
    TuitionFeesStatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tuition-fees-stat',
            template: __webpack_require__(/*! ./tuition-fees-stat.component.html */ "./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.html"),
            styles: [__webpack_require__(/*! ./tuition-fees-stat.component.css */ "./src/app/finance-affair/tuition-fees-stat/tuition-fees-stat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tuition_fees_service__WEBPACK_IMPORTED_MODULE_2__["TuitionFeesService"]])
    ], TuitionFeesStatComponent);
    return TuitionFeesStatComponent;
}());



/***/ }),

/***/ "./src/app/finance-affair/tuition-fees.service.ts":
/*!********************************************************!*\
  !*** ./src/app/finance-affair/tuition-fees.service.ts ***!
  \********************************************************/
/*! exports provided: TuitionFeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuitionFeesService", function() { return TuitionFeesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var TuitionFeesService = /** @class */ (function () {
    function TuitionFeesService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    TuitionFeesService.prototype.getِTuitionFeez = function () {
        return this.httRequest.GetRequest('fees_stmt_request_service').toPromise();
    };
    TuitionFeesService.prototype.Download = function () {
        return this.configService.getApiURI() + '/fees_stmt_request_service/download';
    };
    TuitionFeesService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/fees_stmt_request_service/download?Lang=en';
    };
    TuitionFeesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], TuitionFeesService);
    return TuitionFeesService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"w-100 clearfix\">\r\n      <span class=\"text-center\"> © 2019 الجامعة السعودية الإلكترونية . جميع الحقوق محفوظة  </span>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/graduates-affairs/graduate-state/graduate-state.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/graduates-affairs/graduate-state/graduate-state.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYWR1YXRlcy1hZmZhaXJzL2dyYWR1YXRlLXN0YXRlL2dyYWR1YXRlLXN0YXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/graduates-affairs/graduate-state/graduate-state.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/graduates-affairs/graduate-state/graduate-state.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"padding-top:0;\">\r\n\r\n</div>\r\n\r\n\r\n<div class=\"jumbotron jumbtron-fluid\">\r\n    <h3 class=\"display-5 text-center\">   {{graduateData.labels.title}}</h3>\r\n    <h6 class=\"display-6 text-center\">\r\n {{graduateData.labels.date}}:{{graduateData.values.date}}</h6>\r\n    <div class=\"row\">\r\n  <div  class=\"col-md-1\"></div>\r\n  <div class=\"col-md-10\">\r\n    <div class=\"form-group\">\r\n      \r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text\"><b>{{graduateData.labels.student_name}} </b> </div>\r\n        </div>\r\n        <input  value=\"{{graduateData.values.student_name}}\"  class=\"form-control\" readonly>\r\n      </div>\r\n    </div>   \r\n  </div>\r\n\r\n   <div  class=\"col-md-1\"></div>\r\n\r\n</div>\r\n<div class=\"row\">\r\n    <div  class=\"col-md-1\"></div>\r\n\r\n    <div class=\"col-md-5\">\r\n      <div class=\"form-group\">\r\n        \r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\"><b> {{graduateData.labels.college}} </b> </div>\r\n          </div>\r\n          <input name=\"ID\"   value=\"{{graduateData.values.coll}}\"  class=\"form-control\" readonly>\r\n        </div>\r\n      </div>   \r\n    </div>\r\n    <div class=\"col-md-5\">\r\n  \r\n        <div class=\"form-group\">\r\n        \r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><b>  رقم الطالب / الطالبه</b> </div>\r\n              </div>\r\n              <input name=\"fsermester\"  value=\"{{graduateData.values.std_id}}\"   class=\"form-control\" readonly>\r\n            </div>\r\n          </div>   \r\n      </div>  <div  class=\"col-md-1\"></div>\r\n\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n      <div  class=\"col-md-1\"></div>\r\n\r\n      <div class=\"col-md-5\">\r\n        <div class=\"form-group\">\r\n          \r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\"><b> {{graduateData.labels.ssn}}    </b> </div>\r\n            </div>\r\n            <input name=\"accamdeicStatus\"   value=\" {{graduateData.values.ssn}}  \"  class=\"form-control\" readonly>\r\n          </div>\r\n        </div>   \r\n      </div>\r\n      <div class=\"col-md-5\">\r\n    \r\n          <div class=\"form-group\">\r\n          \r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><b>{{graduateData.labels.major}}    </b> </div>\r\n                </div>\r\n                <input name=\"TotalGrade\"  value=\"{{graduateData.values.major}}\"   class=\"form-control\" readonly>\r\n              </div>\r\n            </div>   \r\n        </div>\r\n        <div  class=\"col-md-1\"></div>\r\n\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n        <div  class=\"col-md-1\"></div>\r\n\r\n        <div class=\"col-md-5\">\r\n          <div class=\"form-group\">\r\n            \r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><b> {{graduateData.labels.branch}} </b> </div>\r\n              </div>\r\n              <input name=\"AcademicCurrentStatus\"  value=\"{{graduateData.values.branch}}\"   class=\"form-control\" readonly>\r\n            </div>\r\n          </div>   \r\n        </div>\r\n\r\n        <div class=\"col-md-5\">\r\n      \r\n            <div class=\"form-group\">\r\n            \r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\"><b> المرحله  </b> </div>\r\n                  </div>\r\n                  <input name=\"Fees\"  value=\"{{graduateData.values.level}}\"   class=\"form-control\" readonly>\r\n                </div>\r\n              </div>   \r\n          </div>        <div  class=\"col-md-1\"></div>\r\n\r\n      </div> </div>\r\n      <div class=\"jumbotron jumbtron-fluid\">\r\n\r\n   <div class=\"row\">\r\n\r\n      <p style=\"direction: rtl;float: right;text-align: right;padding-right: 50px\">\r\n          {{graduateData.labels.txt1}}   {{graduateData.values.term}}\r\n          {{graduateData.labels.txt2}} {{graduateData.values.final_graduation_GPA}} {{graduateData.labels.txt7}}\r\n         <br/>\r\n          {{graduateData.labels.txt3}}\r\n          <br/>\r\n          {{graduateData.labels.txt4}}\r\n          <br/>\r\n          <b>ملحوظة</b>  {{graduateData.labels.txt5}}\r\n          <br/>\r\n          <b> {{graduateData.labels.txt6}}</b>\r\n        </p>\r\n      </div> </div>\r\n        <div  class=\"btn-group btn-group-justified col-md-12 \">\r\n            <div class=\"col-md-4\"></div>\r\n            <a class=\"btn btn-primary\" href=\"{{arabicPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n              طباعة</a>\r\n            <a class=\"btn btn-primary\" href=\"{{EngPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n              Print</a>\r\n            <div class=\"col-md-4\"></div>\r\n          \r\n            </div>\r\n   "

/***/ }),

/***/ "./src/app/graduates-affairs/graduate-state/graduate-state.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/graduates-affairs/graduate-state/graduate-state.component.ts ***!
  \******************************************************************************/
/*! exports provided: GraduateStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraduateStateComponent", function() { return GraduateStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_graduates_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/graduates-state.service */ "./src/app/graduates-affairs/services/graduates-state.service.ts");



var GraduateStateComponent = /** @class */ (function () {
    function GraduateStateComponent(graduateStateSer) {
        this.graduateStateSer = graduateStateSer;
    }
    GraduateStateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.arabicPrint = this.graduateStateSer.DownloadStatement();
        this.EngPrint = this.graduateStateSer.DownloadEngStatement();
        this.graduateStateSer.getStatement().then(function (res) { _this.graduateData = res.data; });
    };
    GraduateStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graduate-state',
            template: __webpack_require__(/*! ./graduate-state.component.html */ "./src/app/graduates-affairs/graduate-state/graduate-state.component.html"),
            styles: [__webpack_require__(/*! ./graduate-state.component.css */ "./src/app/graduates-affairs/graduate-state/graduate-state.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_graduates_state_service__WEBPACK_IMPORTED_MODULE_2__["GraduatesStateService"]])
    ], GraduateStateComponent);
    return GraduateStateComponent;
}());



/***/ }),

/***/ "./src/app/graduates-affairs/graduates-affairs-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/graduates-affairs/graduates-affairs-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GraduatesAffairsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraduatesAffairsRoutingModule", function() { return GraduatesAffairsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _graduate_state_graduate_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graduate-state/graduate-state.component */ "./src/app/graduates-affairs/graduate-state/graduate-state.component.ts");




var routes = [
    { path: 'graduates', component: _graduate_state_graduate_state_component__WEBPACK_IMPORTED_MODULE_3__["GraduateStateComponent"] },
    {
        path: 'graduates',
        children: [
            { path: 'statement', component: _graduate_state_graduate_state_component__WEBPACK_IMPORTED_MODULE_3__["GraduateStateComponent"] }
        ]
    }
];
var GraduatesAffairsRoutingModule = /** @class */ (function () {
    function GraduatesAffairsRoutingModule() {
    }
    GraduatesAffairsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GraduatesAffairsRoutingModule);
    return GraduatesAffairsRoutingModule;
}());



/***/ }),

/***/ "./src/app/graduates-affairs/graduates-affairs.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/graduates-affairs/graduates-affairs.module.ts ***!
  \***************************************************************/
/*! exports provided: GraduatesAffairsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraduatesAffairsModule", function() { return GraduatesAffairsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _graduates_affairs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graduates-affairs-routing.module */ "./src/app/graduates-affairs/graduates-affairs-routing.module.ts");
/* harmony import */ var _graduate_state_graduate_state_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graduate-state/graduate-state.component */ "./src/app/graduates-affairs/graduate-state/graduate-state.component.ts");
/* harmony import */ var _services_graduates_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/graduates-state.service */ "./src/app/graduates-affairs/services/graduates-state.service.ts");






var GraduatesAffairsModule = /** @class */ (function () {
    function GraduatesAffairsModule() {
    }
    GraduatesAffairsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_graduate_state_graduate_state_component__WEBPACK_IMPORTED_MODULE_4__["GraduateStateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _graduates_affairs_routing_module__WEBPACK_IMPORTED_MODULE_3__["GraduatesAffairsRoutingModule"]
            ],
            providers: [_services_graduates_state_service__WEBPACK_IMPORTED_MODULE_5__["GraduatesStateService"]]
        })
    ], GraduatesAffairsModule);
    return GraduatesAffairsModule;
}());



/***/ }),

/***/ "./src/app/graduates-affairs/services/graduates-state.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/graduates-affairs/services/graduates-state.service.ts ***!
  \***********************************************************************/
/*! exports provided: GraduatesStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraduatesStateService", function() { return GraduatesStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var GraduatesStateService = /** @class */ (function () {
    function GraduatesStateService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    GraduatesStateService.prototype.getStatement = function () {
        return this.httRequest.GetRequest('/graduation_statement/statement').toPromise();
    };
    GraduatesStateService.prototype.DownloadStatement = function () {
        return this.configService.getApiURI() + '/graduation_statement/get_statement_print';
    };
    GraduatesStateService.prototype.DownloadEngStatement = function () {
        return this.configService.getApiURI() + '/graduation_statement/get_statement_print?Lang=en';
    };
    GraduatesStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], GraduatesStateService);
    return GraduatesStateService;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user-manager.service */ "./src/app/shared/services/user-manager.service.ts");




var AuthGuard = /** @class */ (function () {
    /**
     *
     */
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.IsLoggedIn()) {
            this.router.navigate(['/login']);
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_manager_service__WEBPACK_IMPORTED_MODULE_3__["UserManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--header>\r\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n\r\n    <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      \r\n        <ul *ngIf=\"status\" class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n               <a class=\"nav-link\" (click)=\"logout()\" href=\"#\">تسجيل خروج</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/dashboard\">home</a> \r\n            </li>   \r\n           \r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"dashboard/posts\">بيانات</a> \r\n              </li> \r\n                    \r\n          </ul>\r\n\r\n          <ul *ngIf=\"!status\" class=\"nav navbar-nav\">\r\n             \r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/academicaff/status\">الحالة </a> \r\n              </li>  \r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/academicaff/certificate\">  تعريف</a> \r\n                </li>  \r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/graduates/statement\">  خريج </a> \r\n                    </li>  \r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/academicaff/record\"> السجل  </a> \r\n                      </li>  \r\n                      <li class=\"nav-item\">\r\n                          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/finance/fees\"> المصاريف  </a> \r\n                          </li> \r\n                          <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/lecabsence/medicalreport\">  الطبي  </a> \r\n                              </li> \r\n\r\n                              <li class=\"nav-item\">\r\n                                  <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/lecabsence/lectabs\">   الغياب  </a> \r\n                                  </li> \r\n\r\n                                           <li class=\"nav-item\">\r\n                                                  <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/exams/attend\">  اختبارات   </a> \r\n                                                  </li> \r\n                                                  <li class=\"nav-item\">\r\n                                                      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/exams/attendapp\"> اثبات ح    </a> \r\n                                                      </li> \r\n                                                      <li class=\"nav-item\">\r\n                                                        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/withdrawuniv\"> انسحاب     </a> \r\n                                                        </li>\r\n                                                        <li class=\"nav-item\">\r\n                                                          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/postpone\"> تاجيل     </a> \r\n                                                          </li>\r\n                                                          <li class=\"nav-item\">\r\n                                                            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/summer\"> الصيفي     </a> \r\n                                                            </li>\r\n                                                            <li class=\"nav-item\">\r\n                                                              <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/cancelcourse\"> غ مقرر     </a> \r\n                                                              </li>\r\n                                                              <li class=\"nav-item\">\r\n                                                                  <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/execuse\"> الاعتذار     </a> \r\n                                                                  </li>\r\n                                                                  <li class=\"nav-item\">\r\n                                                                      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/equalize\"> معادلة     </a> \r\n                                                                      </li>\r\n                                                                      <li class=\"nav-item\">\r\n                                                                          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/eequalize\"> E     </a> \r\n                                                                          </li>\r\n                                                                          <li class=\"nav-item\">\r\n                                                                              <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/reenrol\"> Eroll    </a> \r\n                                                                              </li>\r\n                                                                              <li class=\"nav-item\">\r\n                                                                                  <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/changemajor\"> major    </a> \r\n                                                                                  </li>\r\n                                                                                  <li class=\"nav-item\">\r\n                                                                                    <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/changerequest\"> CR    </a> \r\n                                                                                    </li>\r\n                                                                                    <li class=\"nav-item\">\r\n                                                                                      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/lecexecuse\"> LE    </a> \r\n                                                                                      </li>\r\n                                                                                    <li class=\"nav-item\">\r\n                                                                                      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/procedures/objectexam\"> OE   </a> \r\n                                                                                      </li>\r\n                                      \r\n          </ul>\r\n                     \r\n          \r\n    </div>\r\n  </nav>\r\n</header-->\r\n\r\n<header class=\"header-top\" header-theme=\"\" >\r\n  <div class=\"container-fluid\">\r\n      <div class=\"d-flex justify-content-between\">\r\n                <div class=\"top-menu d-flex align-items-center\">\r\n              <a type=\"\" class=\"btn-icon mobile-nav-toggle d-lg-none\"><span></span></a>\r\n              <div class=\"d-none d-sm-block\">\r\n               <a href=\"#\" class=\"social\"><i class=\"ik ik-facebook\"></i></a>\r\n               <a href=\"#\" class=\"social\"><i class=\"ik ik-youtube\"></i></a>\r\n               <a href=\"#\" class=\"social\"><i class=\"ik ik-twitter\"></i></a>\r\n               <a href=\"#\" class=\"social\"><i class=\"ik ik-instagram\"></i></a>\r\n           </div>\r\n              <div class=\"header-search d-none d-sm-block\">\r\n                  <div class=\"input-group \">\r\n                      <span class=\"input-group-addon search-close\"><i class=\"ik ik-x\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\">\r\n                      <span class=\"input-group-addon search-btn\"><i class=\"ik ik-search\"></i></span>\r\n                  </div>\r\n              </div>\r\n                    \r\n               <div class=\"d-none d-sm-block\">   \r\n              <a href=\"#\" class=\"social\" style=\"font-size: 20px; font-weight: 400\"> E  </a>\r\n               <a href=\"#\" class=\"social\"  style=\"font-size: 20px; margin-top: -6px; display: none\"> ع</a>\r\n                </div>\r\n\r\n\r\n          </div>\r\n        \r\n       \r\n          <div class=\"top-menu d-flex align-items-center\">\r\n               <div class=\"dropdown\">\r\n                  <a class=\"dropdown-toggle pub-ser\" href=\"#\" id=\"menuDropdown\" data-toggle=\"dropdown\">\r\n                    <i class=\"ik ik-chevron-down\"></i>  طلباتي </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right menu-grid pub-ser2\">\r\n                  <p style=\"border-radius: 5px 5px 0 0\"> <span class=\"badge bg-danger\" style=\"padding: 3px 6px\">  2</span> &nbsp; طلبات قيد التنفيذ </p>\r\n                      <ul class=\"list-group\" >\r\n                        <li class=\"list-group-item active\"> إخلاء طرف<span class=\"badge bg-danger\">ينتهي بعد 1 يوم</span></li>\r\n                        <li class=\"list-group-item \"> خدمة سداد الرسوم الدراسية<span class=\"badge bg-danger\">ينتهي بعد 3 ساعة</span></li>\r\n                      </ul>\r\n                      \r\n                        <p>   <span class=\"badge bg-danger\"style=\"padding: 3px 6px\">  4</span> &nbsp; طلبات منتهية </p>\r\n                      <ul class=\"list-group\" >\r\n                        <li class=\"list-group-item active\">خدمة الإعفاء من الرسوم الدراسية </li>\r\n                        <li class=\"list-group-item \"> خدمة نظام إدارة الهوية </li>\r\n                        <li class=\"list-group-item active\"> شهادة التعريف</li>\r\n                       <li class=\"list-group-item \">الحالة الأكاديمية</li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n              \r\n              <div class=\"dropdown\">\r\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"notiDropdown\"  data-toggle=\"dropdown\">\r\n                  <i class=\"ik ik-bell\"></i><span class=\"badge bg-danger\">3</span></a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right notification-dropdown\">\r\n                      <h4 class=\"header\">الإشعارات</h4>\r\n                      <div class=\"notifications-wrap\">\r\n                          <a href=\"#\" class=\"media\">\r\n                           <span class=\"d-flex\"><i class=\"ik ik-check\"></i>  </span>\r\n                              <span class=\"media-body\">\r\n                                  <span class=\"heading-font-family media-heading\">تمت الموافقه ع طلبك</span> \r\n                              </span>\r\n                          </a>\r\n                          <a href=\"#\" class=\"media\">\r\n                           <span class=\"d-flex\"><i class=\"ik ik-check\"></i>  </span>\r\n                              <span class=\"media-body\">\r\n                                  <span class=\"heading-font-family media-heading\">لديك خبر جديد</span> \r\n                              </span>\r\n                          </a>\r\n                           <a href=\"#\" class=\"media\">                                                                                   <span class=\"d-flex\"><i class=\"ik ik-check\"></i>  </span>\r\n                              <span class=\"media-body\">\r\n                                  <span class=\"heading-font-family media-heading\">لديك خبر جديد</span> \r\n                              </span>\r\n                          </a>\r\n                      </div>\r\n                      <div class=\"footer\"><a href=\"\">كل الإشعارات</a></div>\r\n                  </div>\r\n              </div>\r\n              \r\n             \r\n              <div class=\"dropdown\">\r\n                  <a class=\"dropdown-toggle pub-ser\" href=\"#\" id=\"userDropdown\" data-toggle=\"dropdown\">\r\n                  <i class=\"ik ik-chevron-down\"></i>\r\n                 <img class=\"avatar\" src=\"assets/images/avatar.png\" alt=\"\"> <span style=\"font-size: 11px\"> مرحبا : محمد علي </span>   </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\r\n                      <a class=\"dropdown-item\" href=\"\">الملف الشخصي <i class=\"ik ik-user dropdown-icon\"></i> </a>\r\n                      <a class=\"dropdown-item\" href=\"\">تسجيل خروج <i class=\"ik ik-power dropdown-icon\"></i> </a>\r\n                  </div>\r\n              </div>\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n</header>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user-manager.service */ "./src/app/shared/services/user-manager.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userManager) {
        this.userManager = userManager;
        this.status = false;
    }
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent.prototype.logout = function () {
        this.userManager.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userManager.authNavStatus$.subscribe(function (res) { return _this.status = res; });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_manager_service__WEBPACK_IMPORTED_MODULE_2__["UserManagerService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   \r\n\r\n       \r\n        <div class=\"main-content\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                             <div class=\"widget \">\r\n                    <div class=\"widget-header\">\r\n                        <h3 class=\"widget-title\"> <i class=\"ik ik-bar-chart-2\"></i> أخباري  </h3>\r\n                    </div>\r\n                  \r\n                    <div class=\"widget-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 \">\r\n                                <div class=\"owl-container\">\r\n                                    <div class=\"owl-carousel basic\">\r\n                                      <div class=\"card\">\r\n                                            <div class=\"news\">\r\n                                              <img src=\"assets/images/gallery/1.jpg\" alt=\"\" class=\"img-thumbnail\">\r\n                                              <div class=\"details\">\r\n                                                <h3><a href=\"#\">الجامعة الإلكترونية تنظم حفل المعايدة السنوي بمناسبة عيد الفطر لمنسوبيها</a></h3>\r\n                                                <div class=\"social\">\r\n                                                   <p style=\"text-align: center; margin-top: 10px; color: #fff\"> <i class=\"fa fa-calendar\" style=\"color: #f28d1e\"></i> 09.10.2019 </p>\r\n                                                </div>\r\n                                              </div>\r\n                                          \r\n                                        </div>\r\n                                        </div>\r\n                                        \r\n                                          <div class=\"card\">\r\n                                            <div class=\"news\">\r\n                                              <img src=\"assets/images/gallery/1.jpg\" alt=\"\" class=\"img-thumbnail\">\r\n                                              <div class=\"details\">\r\n                                                <h3><a href=\"#\">الجامعة الإلكترونية تنظم حفل المعايدة السنوي بمناسبة عيد الفطر لمنسوبيها</a></h3>\r\n                                                <div class=\"social\">\r\n                                                   <p style=\"text-align: center; margin-top: 10px; color: #fff\"> <i class=\"fa fa-calendar\" style=\"color: #f28d1e\"></i> 09.10.2019 </p>\r\n                                                </div>\r\n                                              </div>\r\n                                          \r\n                                        </div>\r\n                                         </div>\r\n                                      <div class=\"card\">\r\n                                             <div class=\"news\">\r\n                                              <img src=\"assets/images/gallery/1.jpg\" alt=\"\" class=\"img-thumbnail\">\r\n                                              <div class=\"details\">\r\n                                                <h3><a href=\"#\">الجامعة الإلكترونية تنظم حفل المعايدة السنوي بمناسبة عيد الفطر لمنسوبيها</a></h3>\r\n                                                <div class=\"social\">\r\n                                                   <p style=\"text-align: center; margin-top: 10px; color: #fff\"> <i class=\"fa fa-calendar\" style=\"color: #f28d1e\"></i> 09.10.2019 </p>\r\n                                                </div>\r\n                                              </div>\r\n                                          \r\n                                        </div>\r\n                                        </div>\r\n                                       <div class=\"card\">\r\n                                             <div class=\"news\">\r\n                                              <img src=\"assets/images/gallery/1.jpg\" alt=\"\" class=\"img-thumbnail\">\r\n                                              <div class=\"details\">\r\n                                                <h3><a href=\"#\">الجامعة الإلكترونية تنظم حفل المعايدة السنوي بمناسبة عيد الفطر لمنسوبيها</a></h3>\r\n                                                <div class=\"social\">\r\n                                                   <p style=\"text-align: center; margin-top: 10px; color: #fff\"> <i class=\"fa fa-calendar\" style=\"color: #f28d1e\"></i> 09.10.2019 </p>\r\n                                                </div>\r\n                                              </div>\r\n                                          \r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"slider-nav text-center\">\r\n                                        <a href=\"#\" class=\"left-arrow owl-prev\">\r\n                                            <i class=\"ik ik-chevron-right\"></i>\r\n                                        </a>\r\n                                        <div class=\"slider-dot-container\"></div>\r\n                                        <a href=\"#\" class=\"right-arrow owl-next\">\r\n                                            <i class=\"ik ik-chevron-left\"></i>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                                 </div>\r\n                           </div>\r\n                       </div>\r\n                               \r\n                     <div class=\"col-md-6\">\r\n                    <div class=\"widget \">\r\n                    <div class=\"widget-header\">\r\n                        <h3 class=\"widget-title\"> <i class=\"ik ik-image\"></i>  إعلاناتي </h3>\r\n                    </div>\r\n                    <div class=\"widget-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 \">\r\n                                <div class=\"owl-container\">\r\n                                    <div class=\"owl-carousel advertise\">\r\n                                      <div class=\"card\">\r\n                                      <div class=\"news\">\r\n                                         <img src=\"assets/images/adv.png\" alt=\"\" class=\"img-thumbnail\">\r\n                                        </div>\r\n                                        </div>\r\n                                       <div class=\"card\">\r\n                                          <div class=\"news\">\r\n                                              <img src=\"assets/images/adv2.png\" alt=\"\" class=\"img-thumbnail\">\r\n                                        </div>\r\n                                        </div>\r\n                                         <div class=\"card\">\r\n                                           <div class=\"news\">\r\n                                              <img src=\"assets/images/adv3.png\" alt=\"\" class=\"img-thumbnail\">\r\n                                        </div>\r\n                                        </div>\r\n                                      \r\n                                    </div>\r\n                                    <div class=\"slider-nav text-center\">\r\n                                        <a href=\"#\" class=\"left-arrow owl-prev\">\r\n                                            <i class=\"ik ik-chevron-right\"></i>\r\n                                        </a>\r\n                                        <div class=\"slider-dot-container\"></div>\r\n                                        <a href=\"#\" class=\"right-arrow owl-next\">\r\n                                            <i class=\"ik ik-chevron-left\"></i>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                                 </div>\r\n                           </div>\r\n                       </div>\r\n                               \r\n                     </div>\r\n            \r\n                 \r\n                <div class=\"row\">\r\n                   <div class=\"col-md-6\">\r\n                    <div class=\"widget\">\r\n                        <div class=\"card latest-update-card\">\r\n                         <div class=\"widget-header\">\r\n                        <h3 class=\"widget-title\"> <i class=\"ik ik-calendar\"></i>  فعالياتي </h3>\r\n                        </div>\r\n                        <div class=\"card-block\">\r\n                            <div class=\"latest-update-box\">\r\n                                <div class=\"row pb-30\">\r\n                                    <div class=\"col-auto update-meta pr-0\">\r\n                                        <i class=\"ik ik-calendar bg-icon update-icon\"></i>\r\n                                    </div>\r\n                                    <div class=\"col\">\r\n                                        <a href=\"#\"><h6>الجامعة الإلكترونية تنظم حفل المعايدة السنوي بمناسبة عيد الفطر لمنسوبيها </h6></a>\r\n                                        <p class=\" mb-0\"><i class=\"fa fa-calendar\" style=\"color: #1c2172\"></i> 12 محرم </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row pb-30\">\r\n                                    <div class=\"col-auto update-meta pr-0\">\r\n                                        <i class=\"ik ik-calendar bg-icon update-icon\"> </i>\r\n                                    </div>\r\n                                    <div class=\"col\">\r\n                                        <a href=\"#\"><h6>الجامعة الإلكترونية تنظم حفل المعايدة السنوي بمناسبة عيد الفطر لمنسوبيها </h6></a>\r\n                                        <p class=\" mb-0\"><i class=\"fa fa-calendar\" style=\"color: #1c2172\"></i> 22 محرم </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row pb-30\">\r\n                                    <div class=\"col-auto update-meta pr-0\">\r\n                                        <i class=\"ik ik-calendar bg-icon update-icon\"></i>\r\n                                    </div>\r\n                                    <div class=\"col\">\r\n                                        <a href=\"#\"><h6>الجامعة الإلكترونية تنظم حفل المعايدة السنوي بمناسبة عيد الفطر لمنسوبيها </h6></a>\r\n                                        <p class=\" mb-0\"><i class=\"fa fa-calendar\" style=\"color: #1c2172\"></i> 28 محرم </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row pb-30\">\r\n                                    <div class=\"col-auto update-meta pr-0\">\r\n                                        <i class=\"ik ik-calendar bg-icon update-icon\"></i>\r\n                                    </div>\r\n                                    <div class=\"col\">\r\n                                        <a href=\"#\"><h6>الجامعة الإلكترونية تنظم حفل المعايدة السنوي بمناسبة عيد الفطر لمنسوبيها </h6></a>\r\n                                        <p class=\" mb-0\"><i class=\"fa fa-calendar\" style=\"color: #1c2172\"></i> 30 محرم </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                                </div>\r\n                        </div>\r\n                    </div>\r\n                           </div>\r\n                       \r\n                   <div class=\"col-md-6\">\r\n                    <div class=\"widget\">\r\n                        <div class=\"card\">\r\n                            <div class=\"widget-header\">\r\n                            <h3 class=\"widget-title\"> <i class=\"ik ik-info\"></i>  خدمات عامة </h3>\r\n                           </div>\r\n                            <div class=\"card-body\" style=\"padding: 0 15px\">\r\n                            <div class=\"row\">\r\n                             <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-bold\"></i>\r\n                                 <p><a href=\"\">نظام BlackBoard </a></p>\r\n                             </div>\r\n                                 <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-mail\"></i>\r\n                                 <p><a href=\"\">البريد الإلكتروني </a></p>\r\n                             </div>\r\n                            </div>\r\n                                \r\n                            <div class=\"row\">\r\n                                     <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-book-open\"></i>\r\n                                 <p><a href=\"\">إدارة المصادر المعرفية </a></p>\r\n                             </div>\r\n                             <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-message-square\"></i>\r\n                                 <p><a href=\"\">المنتدي </a></p>\r\n                             </div>\r\n                            </div>\r\n                                \r\n                                <div class=\"row\">\r\n                                 <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-calendar\"></i>\r\n                                 <p><a href=\"\">التقويم الدراسي </a></p>\r\n                                </div>\r\n                                 <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-clipboard\"></i>\r\n                                 <p><a href=\"\">تعليمات الأنظمة التعليمية </a></p>\r\n                                </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                             <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-users\"></i>\r\n                                 <p><a href=\"\">دعم الدخول الموحد  </a></p>\r\n                             </div>\r\n                                 <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-settings\"></i>\r\n                                 <p><a href=\"\">نظام دعم   </a></p>\r\n                             </div>\r\n                            </div>\r\n                             <div class=\"row\">\r\n                               <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-link\"></i>\r\n                                 <p><a href=\"\"> تحديث بيانات </a></p>\r\n                             </div>\r\n                             <div class=\"col-md-6 new-ser\">\r\n                                <i class=\"ik ik-command\"></i>\r\n                                 <p><a href=\"\">الحقوق الطلابية  </a></p>\r\n                             </div>\r\n                                 \r\n                            </div>\r\n                                 <div class=\"row\">\r\n                                    <div class=\"col-md-12 new-ser\">\r\n                                <i class=\"ik ik-tablet\"></i>\r\n                                 <p><a href=\"\"> خدمات نظام معلومات الطلبة  </a></p>\r\n                             </div> \r\n                                </div>\r\n                            </div>\r\n                       \r\n                        </div>\r\n                    </div>\r\n                 </div>\r\n                         \r\n               </div>\r\n                \r\n               \r\n                \r\n           </div>\r\n                 \r\n                      \r\n    </div>\r\n        \r\n        \r\n       \r\n\r\n       \r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/print.service */ "./src/app/shared/services/print.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(printService) {
        this.printService = printService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onPrintFile = function () {
        alert('start');
        var paramsData = ['101', '102'];
        alert('1');
        this.printService
            .printDocument('print-file', paramsData);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lectures-absence/absence-excuses/absence-excuses.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/lectures-absence/absence-excuses/absence-excuses.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmVzLWFic2VuY2UvYWJzZW5jZS1leGN1c2VzL2Fic2VuY2UtZXhjdXNlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lectures-absence/absence-excuses/absence-excuses.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/lectures-absence/absence-excuses/absence-excuses.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  absence-excuses works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/lectures-absence/absence-excuses/absence-excuses.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/lectures-absence/absence-excuses/absence-excuses.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AbsenceExcusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenceExcusesComponent", function() { return AbsenceExcusesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AbsenceExcusesComponent = /** @class */ (function () {
    function AbsenceExcusesComponent() {
    }
    AbsenceExcusesComponent.prototype.ngOnInit = function () {
    };
    AbsenceExcusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-absence-excuses',
            template: __webpack_require__(/*! ./absence-excuses.component.html */ "./src/app/lectures-absence/absence-excuses/absence-excuses.component.html"),
            styles: [__webpack_require__(/*! ./absence-excuses.component.css */ "./src/app/lectures-absence/absence-excuses/absence-excuses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AbsenceExcusesComponent);
    return AbsenceExcusesComponent;
}());



/***/ }),

/***/ "./src/app/lectures-absence/absence-query/absence-query.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/lectures-absence/absence-query/absence-query.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {text-align: right}\r\nth {text-align: right}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVjdHVyZXMtYWJzZW5jZS9hYnNlbmNlLXF1ZXJ5L2Fic2VuY2UtcXVlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGlCQUFpQjtBQUNyQixJQUFJLGlCQUFpQiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmVzLWFic2VuY2UvYWJzZW5jZS1xdWVyeS9hYnNlbmNlLXF1ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCB7dGV4dC1hbGlnbjogcmlnaHR9XHJcbnRoIHt0ZXh0LWFsaWduOiByaWdodH0iXX0= */"

/***/ }),

/***/ "./src/app/lectures-absence/absence-query/absence-query.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/lectures-absence/absence-query/absence-query.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"padding-top:0;\">\r\n                    \r\n    <section class=\"service-single\">\r\n            <div class=\"container\">\r\n                    <h3> استعلام الغياب  </h3>\r\n                 <div class=\"row\">\r\n                    <div class=\" col-md-5\">\r\n                      <p> استعلام الغياب  استعلام الغياب  استعلام الغياب  استعلام الغياب  استعلام الغياب </p>\r\n                     </div>\r\n                    <div class=\" col-md-6 descr\">\r\n                      <span>مدة الإنجاز : <span class=\"badge\">3 يوم</span> </span>\r\n                        &nbsp; &nbsp; &nbsp; &nbsp;\r\n                        <a href=\"#\"><i class=\"ik ik-download\"></i> </a>\r\n                        <a href=\"#\"><i class=\"ik ik-film\"></i></a>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n         </section>\r\n    <div *ngIf=\"status==0\"  class=\"alert alert-primary text-center\" role=\"alert\">\r\n        {{absData.messages}} \r\n      </div>\r\n      <section  class=\"ser-state\">\r\n        <nav>          \r\n        <div class=\"nav-item  nav nav-tabs \" id=\"myTab\" role=\"tablist\">\r\n                  <a class=\"nav-link nav-link active\" id=\"one-tab\" data-toggle=\"tab\" href=\"#one\" role=\"tab\" aria-controls=\"One\" aria-selected=\"true\">\r\n                      نسبة غياب المحاضرات الكلية\r\n\r\n                  </a>\r\n              \r\n                  <a class=\"nav-item nav-link \" id=\"two-tab\" data-toggle=\"tab\" href=\"#two\" role=\"tab\" aria-controls=\"Two\" aria-selected=\"false\">\r\n                      نسبة غياب المحاضرات التقليدية\r\n\r\n        </a>\r\n              \r\n              \r\n                  <a class=\"nav-item  nav-link \" id=\"three-tab\" data-toggle=\"tab\" href=\"#three\" role=\"tab\" aria-controls=\"Three\" aria-selected=\"false\">\r\n                      نسبة غياب المحاضرات الافتراضيه\r\n        </a>\r\n              \r\n             \r\n            </div>\r\n        \r\n          </nav> \r\n          <div class=\"tab-content\" id=\"myTabContent\">\r\n              <div class=\"tab-pane fade show active\" id=\"one\" >\r\n              <div class=\"widget\">\r\n                  <div class=\"widget-header\" style=\"padding: 5px 0\" >\r\n                 <h3 class=\"widget-title\" style=\"font-size:14px;\">المحاضرات </h3>\r\n                 </div>\r\n                          <div class=\"table-responsive\">\r\n                              <table *ngIf=\"absData.absent_percentage_total.length>0;else array1\" class=\"table table-striped table-bordered\">\r\n                        <thead style=\"background: #ebecf0\">\r\n              \r\n              \r\n                 \r\n                    <tr>\r\n                      <th scope=\"col\">CRN </th>\r\n                      <th scope=\"col\">كود المقرر</th>\r\n                      <th scope=\"col\">اسم المقرر</th>\r\n                      <th scope=\"col\">نسبة الغباب</th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let it of absData.absent_percentage_total\">\r\n                      <td >{{it.CRN}}</td>\r\n                      <td >{{it.CRES_CODE}}</td>\r\n                      <td>{{it.CRSE_TITLE}}</td>\r\n                      <td>{{it.ABSENT_PERCENTAGE_TOTAL}}</td>\r\n                    </tr>\r\n                   \r\n                  </tbody>\r\n                </table></div>\r\n                <br> <ng-template #array1>\r\n                \r\n                    <div class=\"row\">\r\n                        <div  class=\"col-md-1\"></div>\r\n                        <div class=\"col-md-10\">\r\n                          <div class=\"form-group\">\r\n                            \r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-prepend\">\r\n                                <div class=\"input-group-text\"><b>نسبة غياب المحاضرات الكلية  </b> </div>\r\n                              </div>\r\n                              <input  value=\"0\"  class=\"form-control\" readonly>\r\n                            </div>\r\n                          </div>   \r\n                        </div>\r\n                        \r\n                         <div  class=\"col-md-1\"></div>\r\n                      \r\n                      </div>\r\n         \r\n               </ng-template>\r\n           \r\n        \r\n         \r\n        </div></div>\r\n            <div class=\"tab-pane fade p-3\" id=\"two\" role=\"tabpanel\" aria-labelledby=\"two-tab\">\r\n                <div class=\"widget\">\r\n                    <div class=\"widget-header\" style=\"padding: 5px 0\" >\r\n                   <h3 class=\"widget-title\" style=\"font-size:14px;\">المحاضرات </h3>\r\n                   </div>\r\n                            <div class=\"table-responsive\">\r\n                   \r\n\r\n              <table  *ngIf=\"absData.absent_percentage_actual_lectures.length>=0;else emptyArr2\" class=\"table table-striped table-bordered\">\r\n                  <thead  style=\"background: #ebecf0\">\r\n                      <tr>\r\n                        <th scope=\"col\">CRN </th>\r\n                        <th scope=\"col\">كود المقرر</th>\r\n                        <th scope=\"col\">اسم المقرر</th>\r\n                        <th scope=\"col\">نسبة الغباب</th>\r\n  \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let it of absData.absent_percentage_actual_lectures\">\r\n                        <td >{{it.CRN}}</td>\r\n                        <td >{{it.CRES_CODE}}</td>\r\n                        <td>{{it.CRSE_TITLE}}</td>\r\n                        <td>{{it.ABSENT_PERCENTAGE_FTF}}</td>\r\n                      </tr>\r\n                     \r\n                    </tbody>\r\n             \r\n                </table>\r\n                            </div>\r\n                <ng-template #emptyArr2>\r\n                <div  class=\"row\">\r\n                    <div  class=\"col-md-1\"></div>\r\n                    <div class=\"col-md-10\">\r\n                      <div class=\"form-group\">\r\n                        \r\n                        <div class=\"input-group\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\"><b>نسبة غياب المحاضرات التقليدية  </b> </div>\r\n                          </div>\r\n                          <input  value=\"0\"  class=\"form-control\" readonly>\r\n                        </div>\r\n                      </div>   \r\n                    </div>\r\n                    \r\n                     <div  class=\"col-md-1\"></div>\r\n                  \r\n                  </div>\r\n                </ng-template></div>\r\n                      \r\n         </div>\r\n            <div class=\"tab-pane fade p-3\" id=\"three\" role=\"tabpanel\" aria-labelledby=\"three-tab\">\r\n                <div class=\"widget\">\r\n                    <div class=\"widget-header\" style=\"padding: 5px 0\" >\r\n                   <h3 class=\"widget-title\" style=\"font-size:14px;\">المحاضرات </h3>\r\n                   </div>\r\n                   \r\n               <div class=\"table-responsive\"> \r\n                <table  class=\"table table-striped table-bordered\" *ngIf=\"absData.absent_percentage_virtual_lectures.length>=0;else emptyArr3\">\r\n                    <thead style=\"background: #ebecf0\">\r\n                        <tr >\r\n                          <th scope=\"col\">CRN </th>\r\n                          <th scope=\"col\">كود المقرر</th>\r\n                          <th scope=\"col\">اسم المقرر</th>\r\n                          <th scope=\"col\">نسبة الغباب</th>\r\n    \r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let it of absData.absent_percentage_virtual_lectures\">\r\n                          <td >{{it.CRN}}</td>\r\n                          <td >{{it.CRES_CODE}}</td>\r\n                          <td>{{it.CRSE_TITLE}}</td>\r\n                          <td>{{it.ABSENT_PERCENTAGE_VERT}}</td>\r\n                        </tr>\r\n                       \r\n                      </tbody>\r\n                               </table></div>\r\n                  <br>\r\n                  <ng-template  #emptyArr3>\r\n                      <div class=\"row\">\r\n                          <div  class=\"col-md-1\"></div>\r\n                          <div class=\"col-md-10\">\r\n                            <div class=\"form-group\">\r\n                              \r\n                              <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                  <div class=\"input-group-text\"><b>نسبة غياب المحاضرات الافتراضيه  </b> </div>\r\n                                </div>\r\n                                <input  value=\"{{absData.absent_percentage_virtual_lectures}}\"  class=\"form-control\" readonly>\r\n                              </div>\r\n                            </div>   \r\n                          </div>\r\n                          \r\n                           <div  class=\"col-md-1\"></div>\r\n                        \r\n                        </div>\r\n                  </ng-template>\r\n                </div>\r\n                </div>\r\n          </div>\r\n              </section>\r\n                  \r\n    \r\n\r\n\r\n              <div class=\"widget\">\r\n                  <div class=\"widget-header\" style=\"padding: 5px 0\" >\r\n                 <h3 class=\"widget-title\" style=\"font-size:14px;\">المحاضرات </h3>\r\n                 </div>\r\n                          <div class=\"table-responsive\">\r\n                        <table class=\"table table-striped table-bordered\">\r\n                        <thead style=\"background: #ebecf0\">\r\n                <tr>\r\n                  <th scope=\"col\">رمز المقرر </th>\r\n                  <th scope=\"col\">اسم المقرر</th>\r\n                  <th scope=\"col\">نوع المحاضره</th>\r\n                  <th scope=\"col\">حالة الحضور</th>\r\n\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let it of absData.lectures\">\r\n                  <td >{{it.CODE}}</td>\r\n                  <td>{{it.TITLE}}</td>\r\n                  <td>{{it.TYPE}}</td>\r\n                  <td>{{it.STATUS}}</td>\r\n                </tr>\r\n               \r\n              </tbody>\r\n            </table>\r\n\r\n      \r\n            </div></div>\r\n            <div  class=\"btn-group btn-group-justified col-md-12 \">\r\n                <div class=\"col-md-4\"></div>\r\n                <a class=\"btn btn-primary\" href=\"{{arabicPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                  طباعة</a>\r\n                <a class=\"btn btn-primary\" href=\"{{EngPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n                  Print</a>\r\n                <div class=\"col-md-4\"></div>\r\n              \r\n                </div>"

/***/ }),

/***/ "./src/app/lectures-absence/absence-query/absence-query.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/lectures-absence/absence-query/absence-query.component.ts ***!
  \***************************************************************************/
/*! exports provided: AbsenceQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenceQueryComponent", function() { return AbsenceQueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lecture_abs_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lecture-abs-query.service */ "./src/app/lectures-absence/services/lecture-abs-query.service.ts");



var AbsenceQueryComponent = /** @class */ (function () {
    function AbsenceQueryComponent(academicService) {
        this.academicService = academicService;
    }
    AbsenceQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.academicService.getِAbsemceQuery().then(function (res) {
            _this.absData = res.data;
            console.log(_this.absData.absent_percentage_total);
            _this.status = res.status;
        });
        this.arabicPrint = this.academicService.Download();
        this.EngPrint = this.academicService.DownloadEng();
    };
    AbsenceQueryComponent.prototype.toHTML = function (input) {
        return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
    };
    AbsenceQueryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-absence-query',
            template: __webpack_require__(/*! ./absence-query.component.html */ "./src/app/lectures-absence/absence-query/absence-query.component.html"),
            styles: [__webpack_require__(/*! ./absence-query.component.css */ "./src/app/lectures-absence/absence-query/absence-query.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_lecture_abs_query_service__WEBPACK_IMPORTED_MODULE_2__["LectureAbsQueryService"]])
    ], AbsenceQueryComponent);
    return AbsenceQueryComponent;
}());



/***/ }),

/***/ "./src/app/lectures-absence/lectures-absence-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/lectures-absence/lectures-absence-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LecturesAbsenceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturesAbsenceRoutingModule", function() { return LecturesAbsenceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _medical_report_medical_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medical-report/medical-report.component */ "./src/app/lectures-absence/medical-report/medical-report.component.ts");
/* harmony import */ var _absence_query_absence_query_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./absence-query/absence-query.component */ "./src/app/lectures-absence/absence-query/absence-query.component.ts");





var routes = [{ path: 'lecabsence', component: _medical_report_medical_report_component__WEBPACK_IMPORTED_MODULE_3__["MedicalReportComponent"] },
    {
        path: 'lecabsence',
        children: [
            { path: 'medicalreport', component: _medical_report_medical_report_component__WEBPACK_IMPORTED_MODULE_3__["MedicalReportComponent"] },
            { path: 'lectabs', component: _absence_query_absence_query_component__WEBPACK_IMPORTED_MODULE_4__["AbsenceQueryComponent"] },
        ]
    }];
var LecturesAbsenceRoutingModule = /** @class */ (function () {
    function LecturesAbsenceRoutingModule() {
    }
    LecturesAbsenceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LecturesAbsenceRoutingModule);
    return LecturesAbsenceRoutingModule;
}());



/***/ }),

/***/ "./src/app/lectures-absence/lectures-absence.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/lectures-absence/lectures-absence.module.ts ***!
  \*************************************************************/
/*! exports provided: LecturesAbsenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturesAbsenceModule", function() { return LecturesAbsenceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lectures_absence_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lectures-absence-routing.module */ "./src/app/lectures-absence/lectures-absence-routing.module.ts");
/* harmony import */ var _absence_excuses_absence_excuses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./absence-excuses/absence-excuses.component */ "./src/app/lectures-absence/absence-excuses/absence-excuses.component.ts");
/* harmony import */ var _absence_query_absence_query_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./absence-query/absence-query.component */ "./src/app/lectures-absence/absence-query/absence-query.component.ts");
/* harmony import */ var _medical_report_medical_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-report/medical-report.component */ "./src/app/lectures-absence/medical-report/medical-report.component.ts");
/* harmony import */ var _services_medical_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/medical-report.service */ "./src/app/lectures-absence/services/medical-report.service.ts");
/* harmony import */ var _services_lecture_abs_query_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/lecture-abs-query.service */ "./src/app/lectures-absence/services/lecture-abs-query.service.ts");









var LecturesAbsenceModule = /** @class */ (function () {
    function LecturesAbsenceModule() {
    }
    LecturesAbsenceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_absence_excuses_absence_excuses_component__WEBPACK_IMPORTED_MODULE_4__["AbsenceExcusesComponent"], _absence_query_absence_query_component__WEBPACK_IMPORTED_MODULE_5__["AbsenceQueryComponent"], _medical_report_medical_report_component__WEBPACK_IMPORTED_MODULE_6__["MedicalReportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _lectures_absence_routing_module__WEBPACK_IMPORTED_MODULE_3__["LecturesAbsenceRoutingModule"]
            ],
            providers: [_services_medical_report_service__WEBPACK_IMPORTED_MODULE_7__["MedicalReportService"], _services_lecture_abs_query_service__WEBPACK_IMPORTED_MODULE_8__["LectureAbsQueryService"]]
        })
    ], LecturesAbsenceModule);
    return LecturesAbsenceModule;
}());



/***/ }),

/***/ "./src/app/lectures-absence/medical-report/medical-report.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/lectures-absence/medical-report/medical-report.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmVzLWFic2VuY2UvbWVkaWNhbC1yZXBvcnQvbWVkaWNhbC1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/lectures-absence/medical-report/medical-report.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/lectures-absence/medical-report/medical-report.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbtron-fluid\">\r\n    <h3 class=\"display-5 text-center\">   التقرير الطبي</h3>\r\n    <h6 class=\"display-6 text-center\">   {{mrData.labels.txt1}} : {{mrData.values.date}} </h6>\r\n    <h6 class=\"display-6 text-center\">   السجل المدني :  {{mrData.values.ssn}} </h6>\r\n\r\n    <div class=\"row\">\r\n  <div  class=\"col-md-1\"></div>\r\n  <div class=\"col-md-5\">\r\n    <div class=\"form-group\">\r\n      \r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <div class=\"input-group-text\"><b>اسم الطالب </b> </div>\r\n        </div>\r\n        <input  value=\"{{mrData.values.std_name}}\"  class=\"form-control\" readonly>\r\n      </div>\r\n    </div>   \r\n  </div>\r\n  <div class=\"col-md-5\">\r\n      <div class=\"form-group\">\r\n        \r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\"><b>الرقم الجامعي  </b> </div>\r\n          </div>\r\n          <input  value=\"{{mrData.values.std_id}}\"  class=\"form-control\" readonly>\r\n        </div>\r\n      </div>   \r\n    </div>\r\n   <div  class=\"col-md-1\"></div>\r\n\r\n</div>\r\n\r\n  \r\n  <div class=\"row\">\r\n      <div  class=\"col-md-1\"></div>\r\n\r\n      <div class=\"col-md-5\">\r\n        <div class=\"form-group\">\r\n          \r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\"><b> الكلية     </b> </div>\r\n            </div>\r\n            <input name=\"accamdeicStatus\"   value=\" {{mrData.values.coll}}  \"  class=\"form-control\" readonly>\r\n          </div>\r\n        </div>   \r\n      </div>\r\n      <div class=\"col-md-5\">\r\n    \r\n          <div class=\"form-group\">\r\n          \r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><b>التخصص    </b> </div>\r\n                </div>\r\n                <input name=\"TotalGrade\"  value=\"{{mrData.values.major}}\"   class=\"form-control\" readonly>\r\n              </div>\r\n            </div>   \r\n        </div>\r\n        <div  class=\"col-md-1\"></div>\r\n\r\n    </div>\r\n    \r\n  \r\n    </div>\r\n      <div class=\"jumbotron jumbtron-fluid\">\r\n\r\n   <div class=\"row\">\r\n\r\n      <p style=\"direction: rtl;float: right;text-align: right;padding-right: 50px\">\r\n          \r\n        {{mrData.labels.txt2}}\r\n         <br/>\r\n         <br/>\r\n         <b>\r\n        -{{mrData.labels.txt3}}\r\n          </b>\r\n        \r\n        </p>\r\n      </div> </div>\r\n        <div  class=\"btn-group btn-group-justified col-md-12 \">\r\n            <div class=\"col-md-4\"></div>\r\n            <a class=\"btn btn-primary\" href=\"{{arabicPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n              طباعة</a>\r\n            <a class=\"btn btn-primary\" href=\"{{EngPrint}}\"><span class=\"glyphicon glyphicon-print\"></span>\r\n              Print</a>\r\n            <div class=\"col-md-4\"></div>\r\n          \r\n            </div>\r\n   "

/***/ }),

/***/ "./src/app/lectures-absence/medical-report/medical-report.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/lectures-absence/medical-report/medical-report.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MedicalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalReportComponent", function() { return MedicalReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_medical_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/medical-report.service */ "./src/app/lectures-absence/services/medical-report.service.ts");



var MedicalReportComponent = /** @class */ (function () {
    function MedicalReportComponent(academicService) {
        this.academicService = academicService;
    }
    MedicalReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.academicService.getِMedicalReport().then(function (res) {
            _this.mrData = res.data;
        });
        this.arabicPrint = this.academicService.Download();
        this.EngPrint = this.academicService.DownloadEng();
    };
    MedicalReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medical-report',
            template: __webpack_require__(/*! ./medical-report.component.html */ "./src/app/lectures-absence/medical-report/medical-report.component.html"),
            styles: [__webpack_require__(/*! ./medical-report.component.css */ "./src/app/lectures-absence/medical-report/medical-report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_medical_report_service__WEBPACK_IMPORTED_MODULE_2__["MedicalReportService"]])
    ], MedicalReportComponent);
    return MedicalReportComponent;
}());



/***/ }),

/***/ "./src/app/lectures-absence/services/lecture-abs-query.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/lectures-absence/services/lecture-abs-query.service.ts ***!
  \************************************************************************/
/*! exports provided: LectureAbsQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureAbsQueryService", function() { return LectureAbsQueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var LectureAbsQueryService = /** @class */ (function () {
    function LectureAbsQueryService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    LectureAbsQueryService.prototype.getِAbsemceQuery = function () {
        return this.httRequest.GetRequest('absent_service?std_id=S180105049 ').toPromise();
    };
    LectureAbsQueryService.prototype.Download = function () {
        return this.configService.getApiURI() + '/absent_service/download';
    };
    LectureAbsQueryService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/absent_service/download?Lang=en';
    };
    LectureAbsQueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], LectureAbsQueryService);
    return LectureAbsQueryService;
}());



/***/ }),

/***/ "./src/app/lectures-absence/services/medical-report.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/lectures-absence/services/medical-report.service.ts ***!
  \*********************************************************************/
/*! exports provided: MedicalReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalReportService", function() { return MedicalReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/http-request.service */ "./src/app/shared/services/http-request.service.ts");




var MedicalReportService = /** @class */ (function () {
    function MedicalReportService(configService, httRequest) {
        this.configService = configService;
        this.httRequest = httRequest;
    }
    MedicalReportService.prototype.getِMedicalReport = function () {
        return this.httRequest.GetRequest('medical_report_service').toPromise();
    };
    MedicalReportService.prototype.Download = function () {
        return this.configService.getApiURI() + '/medical_report_service/download';
    };
    MedicalReportService.prototype.DownloadEng = function () {
        return this.configService.getApiURI() + '/medical_report_service/download?Lang=en';
    };
    MedicalReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_app_shared_services_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], MedicalReportService);
    return MedicalReportService;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-sidebar colored\">\r\n  <div class=\"sidebar-header\">\r\n      <a id=\"sidebarClose\" class=\"nav-close\"><i class=\"ik ik-x\"></i></a>\r\n       <a class=\"header-brand\" href=\"#\">\r\n          <div class=\"logo-img\">\r\n             <img src=\"assets/images/logo-ar.png\" class=\"header-brand-img\" alt=\"lavalite\"> \r\n          </div>\r\n      </a>\r\n  </div>\r\n  \r\n  <div class=\"sidebar-content\">\r\n      <div class=\"nav-container\">\r\n          <nav id=\"main-menu-navigation\" class=\"navigation-main\">\r\n                   <div class=\"nav-item has-sub \">\r\n                  <a href=\"javascript:void(0)\"><span>مصادر التعلم</span> <i class=\"ik ik-book-open\"></i></a>\r\n                  <div class=\"submenu-content\">\r\n                      <a href=\"#\" class=\"menu-item\">خدمة 1</a>\r\n                      <a href=\"#\" class=\"menu-item\">خدمة 2</a>\r\n                       <a href=\"#\" class=\"menu-item\">خدمة 3 </a>\r\n                  </div>\r\n              </div>\r\n                 <div class=\"nav-item has-sub \">\r\n                  <a href=\"javascript:void(0)\"><span> الشئون الأكاديمية</span> <i class=\"ik ik-user\"></i></a>\r\n                  <div class=\"submenu-content\">\r\n                      <a href=\"#\" class=\"menu-item\" routerLink=\"/academicaff/status\">الحالة الاكاديمية</a>\r\n                      <a href=\"#\" class=\"menu-item\"  routerLink=\"/academicaff/certificate\">  شهادة تعريف</a>\r\n                       <a href=\"#\" class=\"menu-item\"  routerLink=\"/graduates/statement\">  شهادة تخرج</a>\r\n                       <a href=\"#\" class=\"menu-item\"  routerLink=\"/academicaff/record\"> السجل الطلابي</a> \r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/lecabsence/medicalreport\">  التقرير الطبي  </a>\r\n                       <a href=\"#\" class=\"menu-item\"   routerLink=\"/lecabsence/lectabs\">   تقرير الغياب  </a> \r\n                  </div>\r\n              </div>\r\n                <div class=\"nav-item has-sub \">\r\n                  <a href=\"javascript:void(0)\"><span> الإجراءات الأكاديمية</span> <i class=\"ik ik-layers\"></i></a>\r\n                  <div class=\"submenu-content\">\r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/changemajor\"> تغيير التخصص </a> \r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/changerequest\"> تغيير فرع الدراسة </a>\r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/execuse\"> الاعتذار عن فصل دراسي </a>\r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/reenrol\"> طلب اعادة قيد </a>\r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/postpone\"> تاجيل     </a>\r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/reghelper\"> مساعد التسجيل     </a>\r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/universitycard\"> البطاقة الجامعية     </a>\r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/examexcuse\"> تقديم الأعذار للمتغيبين عن الاختبارات   </a>\r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/registerwishes\"> رغبات التسجيل للمستجدين     </a>\r\n\r\n                  </div>\r\n              </div>\r\n                 <div class=\"nav-item has-sub \">\r\n                  <a href=\"javascript:void(0)\"><span>  التغيب عن المحاضرات </span> <i class=\"ik ik-info\"></i></a>\r\n                 <div class=\"submenu-content\">\r\n                      <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/lecexecuse\">تغيب عن المحاضرة</a> \r\n                      \r\n                  </div>\r\n              </div>\r\n                <div class=\"nav-item has-sub \">\r\n                  <a href=\"javascript:void(0)\"><span> تسجيل المقررات </span> <i class=\"ik ik-server\"></i></a>\r\n                  <div class=\"submenu-content\">\r\n                      <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/cancelcourse\"> الغاء المقرر     </a>\r\n                      <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/summer\"> الاعتذار عن الفصل الصيفي     </a>\r\n                  </div>\r\n              </div>\r\n                <div class=\"nav-item has-sub \">\r\n                  <a href=\"javascript:void(0)\"><span>المعادلات </span> <i class=\"ik ik-sidebar\"></i></a>\r\n                 <div class=\"submenu-content\">\r\n                      <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/eequalize\"> ادخال ما يعادل اللغة الانجليزية  </a>\r\n                      <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/equalize\"> معادلة منهج معين    </a> \r\n                  </div>\r\n              </div>\r\n                <div class=\"nav-item has-sub \">\r\n                  <a href=\"javascript:void(0)\"><span>  الشئون المالية </span> <i class=\"ik ik-dollar-sign\"></i></a>\r\n                  <div class=\"submenu-content\">\r\n                      <a href=\"#\" class=\"menu-item\" routerLink=\"/finance/fees\"> دفع المصاريف  </a> \r\n                      \r\n                  </div>\r\n              </div>\r\n                <div class=\"nav-item has-sub \">\r\n                 <a href=\"javascript:void(0)\"><span> شئون الإختبارات </span> <i class=\"ik ik-trending-down\"></i></a>\r\n                  <div class=\"submenu-content\">\r\n                      <a href=\"#\" class=\"menu-item\" routerLink=\"/procedures/objectexam\"> الاعتراض على الاختبارات </a> \r\n                      <a href=\"#\" class=\"menu-item\" routerLink=\"/exams/attend\">  جداول الاختبارات   </a>\r\n                       <a href=\"#\" class=\"menu-item\" routerLink=\"/exams/attendapp\"> اثبات حضور الاختبارات    </a> \r\n\r\n                  </div>\r\n              </div>\r\n                <div class=\"nav-lavel\">  </div>\r\n               <div class=\"nav-item has-sub \">\r\n                 <a href=\"javascript:void(0)\"> <span class=\"badge badge-danger\">11</span><span>خدمات عامة </span>\r\n                     <i class=\"ik ik-align-right\"></i> </a>\r\n                  <div class=\"submenu-content\">\r\n                      <a href=\"#\" class=\"menu-item\"> نظام BlackBoard  <i class=\"ik ik-bold\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\"> البريد الإلكتروني      <i class=\"ik ik-mail\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\"> إدارة المصادر المعرفية  <i class=\"ik ik-book-open\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\"> المنتدي           <i class=\"ik ik-message-square\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\"> التقويم الدراسي       <i class=\"ik ik-calendar\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\">تعليمات الأنظمة التعليمية <i class=\"ik ik-clipboard\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\">دعم الدخول الموحد     <i class=\"ik ik-users\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\">نظام دعم           <i class=\"ik ik-settings\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\"> تحديث بيانات        <i class=\"ik ik-link\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\">الحقوق الطلابية        <i class=\"ik ik-command\"></i> </a>\r\n                      <a href=\"#\" class=\"menu-item\"> خدمات نظام معلومات الطلبة   <i class=\"ik ik-tablet\"></i> </a>\r\n                  </div>\r\n              </div>\r\n         \r\n                  <div class=\"nav-lavel\"> </div>\r\n                    <div class=\"nav-item\">\r\n                    <a class=\"nav-link\"  ><span>  إرشادات عامة  </span> <i class=\"ik ik-alert-circle\"></i>\r\n                   </a>\r\n                   </div>\r\n                  <div class=\"nav-item\">\r\n                    <a class=\"nav-link\"><span>استفسارات  </span> <i class=\"ik ik-settings\"></i>\r\n                    </a>\r\n                  </div>\r\n           \r\n          </nav>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/name-component/name-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/name-component/name-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hbWUtY29tcG9uZW50L25hbWUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/name-component/name-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/name-component/name-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  name-component works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/name-component/name-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/name-component/name-component.component.ts ***!
  \************************************************************/
/*! exports provided: NameComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameComponentComponent", function() { return NameComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NameComponentComponent = /** @class */ (function () {
    function NameComponentComponent() {
    }
    NameComponentComponent.prototype.ngOnInit = function () {
    };
    NameComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-name-component',
            template: __webpack_require__(/*! ./name-component.component.html */ "./src/app/name-component/name-component.component.html"),
            styles: [__webpack_require__(/*! ./name-component.component.css */ "./src/app/name-component/name-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NameComponentComponent);
    return NameComponentComponent;
}());



/***/ }),

/***/ "./src/app/other-affair/idreplacement/idreplacement.component.css":
/*!************************************************************************!*\
  !*** ./src/app/other-affair/idreplacement/idreplacement.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyLWFmZmFpci9pZHJlcGxhY2VtZW50L2lkcmVwbGFjZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/other-affair/idreplacement/idreplacement.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/other-affair/idreplacement/idreplacement.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  idreplacement works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/other-affair/idreplacement/idreplacement.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/other-affair/idreplacement/idreplacement.component.ts ***!
  \***********************************************************************/
/*! exports provided: IDReplacementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDReplacementComponent", function() { return IDReplacementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IDReplacementComponent = /** @class */ (function () {
    function IDReplacementComponent() {
    }
    IDReplacementComponent.prototype.ngOnInit = function () {
    };
    IDReplacementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-idreplacement',
            template: __webpack_require__(/*! ./idreplacement.component.html */ "./src/app/other-affair/idreplacement/idreplacement.component.html"),
            styles: [__webpack_require__(/*! ./idreplacement.component.css */ "./src/app/other-affair/idreplacement/idreplacement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IDReplacementComponent);
    return IDReplacementComponent;
}());



/***/ }),

/***/ "./src/app/other-affair/other-affair-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/other-affair/other-affair-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OtherAffairRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherAffairRoutingModule", function() { return OtherAffairRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var OtherAffairRoutingModule = /** @class */ (function () {
    function OtherAffairRoutingModule() {
    }
    OtherAffairRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OtherAffairRoutingModule);
    return OtherAffairRoutingModule;
}());



/***/ }),

/***/ "./src/app/other-affair/other-affair.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/other-affair/other-affair.module.ts ***!
  \*****************************************************/
/*! exports provided: OtherAffairModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherAffairModule", function() { return OtherAffairModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _other_affair_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other-affair-routing.module */ "./src/app/other-affair/other-affair-routing.module.ts");
/* harmony import */ var _university_id_university_id_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./university-id/university-id.component */ "./src/app/other-affair/university-id/university-id.component.ts");
/* harmony import */ var _idreplacement_idreplacement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./idreplacement/idreplacement.component */ "./src/app/other-affair/idreplacement/idreplacement.component.ts");






var OtherAffairModule = /** @class */ (function () {
    function OtherAffairModule() {
    }
    OtherAffairModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_university_id_university_id_component__WEBPACK_IMPORTED_MODULE_4__["UniversityIDComponent"], _idreplacement_idreplacement_component__WEBPACK_IMPORTED_MODULE_5__["IDReplacementComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _other_affair_routing_module__WEBPACK_IMPORTED_MODULE_3__["OtherAffairRoutingModule"]
            ]
        })
    ], OtherAffairModule);
    return OtherAffairModule;
}());



/***/ }),

/***/ "./src/app/other-affair/university-id/university-id.component.css":
/*!************************************************************************!*\
  !*** ./src/app/other-affair/university-id/university-id.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyLWFmZmFpci91bml2ZXJzaXR5LWlkL3VuaXZlcnNpdHktaWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/other-affair/university-id/university-id.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/other-affair/university-id/university-id.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  university-id works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/other-affair/university-id/university-id.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/other-affair/university-id/university-id.component.ts ***!
  \***********************************************************************/
/*! exports provided: UniversityIDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityIDComponent", function() { return UniversityIDComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UniversityIDComponent = /** @class */ (function () {
    function UniversityIDComponent() {
    }
    UniversityIDComponent.prototype.ngOnInit = function () {
    };
    UniversityIDComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-university-id',
            template: __webpack_require__(/*! ./university-id.component.html */ "./src/app/other-affair/university-id/university-id.component.html"),
            styles: [__webpack_require__(/*! ./university-id.component.css */ "./src/app/other-affair/university-id/university-id.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UniversityIDComponent);
    return UniversityIDComponent;
}());



/***/ }),

/***/ "./src/app/page-header/page-header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/page-header/page-header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-header/page-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-header/page-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\"  >\r\n  <div class=\"wrapper\">\r\n<header class=\"header-top\" header-theme=\"\" >\r\n  <div class=\"container-fluid\">\r\n      <div class=\"d-flex justify-content-between\">\r\n                <div class=\"top-menu d-flex align-items-center\">\r\n              <a type=\"\" class=\"btn-icon mobile-nav-toggle d-lg-none\"><span></span></a>\r\n              <div class=\"d-none d-sm-block\">\r\n               <a href=\"#\" class=\"social\"><i class=\"ik ik-facebook\"></i></a>\r\n               <a href=\"#\" class=\"social\"><i class=\"ik ik-youtube\"></i></a>\r\n               <a href=\"#\" class=\"social\"><i class=\"ik ik-twitter\"></i></a>\r\n               <a href=\"#\" class=\"social\"><i class=\"ik ik-instagram\"></i></a>\r\n           </div>\r\n              <div class=\"header-search d-none d-sm-block\">\r\n                  <div class=\"input-group \">\r\n                      <span class=\"input-group-addon search-close\"><i class=\"ik ik-x\"></i></span>\r\n                      <input type=\"text\" class=\"form-control\">\r\n                      <span class=\"input-group-addon search-btn\"><i class=\"ik ik-search\"></i></span>\r\n                  </div>\r\n              </div>\r\n                    \r\n               <div class=\"d-none d-sm-block\">   \r\n              <a href=\"#\" class=\"social\" style=\"font-size: 20px; font-weight: 400\"> E  </a>\r\n               <a href=\"#\" class=\"social\"  style=\"font-size: 20px; margin-top: -6px; display: none\"> ع</a>\r\n                </div>\r\n\r\n\r\n          </div>\r\n        \r\n       \r\n          <div class=\"top-menu d-flex align-items-center\">\r\n               <div class=\"dropdown\">\r\n                  <a class=\"dropdown-toggle pub-ser\" href=\"#\" id=\"menuDropdown\" data-toggle=\"dropdown\">\r\n                    <i class=\"ik ik-chevron-down\"></i>  طلباتي </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right menu-grid pub-ser2\">\r\n                  <p style=\"border-radius: 5px 5px 0 0\"> <span class=\"badge bg-danger\" style=\"padding: 3px 6px\">  2</span> &nbsp; طلبات قيد التنفيذ </p>\r\n                      <ul class=\"list-group\" >\r\n                        <li class=\"list-group-item active\"> إخلاء طرف<span class=\"badge bg-danger\">ينتهي بعد 1 يوم</span></li>\r\n                        <li class=\"list-group-item \"> خدمة سداد الرسوم الدراسية<span class=\"badge bg-danger\">ينتهي بعد 3 ساعة</span></li>\r\n                      </ul>\r\n                      \r\n                        <p>   <span class=\"badge bg-danger\"style=\"padding: 3px 6px\">  4</span> &nbsp; طلبات منتهية </p>\r\n                      <ul class=\"list-group\" >\r\n                        <li class=\"list-group-item active\">خدمة الإعفاء من الرسوم الدراسية </li>\r\n                        <li class=\"list-group-item \"> خدمة نظام إدارة الهوية </li>\r\n                        <li class=\"list-group-item active\"> شهادة التعريف</li>\r\n                       <li class=\"list-group-item \">الحالة الأكاديمية</li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n              \r\n              <div class=\"dropdown\">\r\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"notiDropdown\"  data-toggle=\"dropdown\">\r\n                  <i class=\"ik ik-bell\"></i><span class=\"badge bg-danger\">3</span></a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right notification-dropdown\">\r\n                      <h4 class=\"header\">الإشعارات</h4>\r\n                      <div class=\"notifications-wrap\">\r\n                          <a href=\"#\" class=\"media\">\r\n                           <span class=\"d-flex\"><i class=\"ik ik-check\"></i>  </span>\r\n                              <span class=\"media-body\">\r\n                                  <span class=\"heading-font-family media-heading\">تمت الموافقه ع طلبك</span> \r\n                              </span>\r\n                          </a>\r\n                          <a href=\"#\" class=\"media\">\r\n                           <span class=\"d-flex\"><i class=\"ik ik-check\"></i>  </span>\r\n                              <span class=\"media-body\">\r\n                                  <span class=\"heading-font-family media-heading\">لديك خبر جديد</span> \r\n                              </span>\r\n                          </a>\r\n                           <a href=\"#\" class=\"media\">                                                                                   <span class=\"d-flex\"><i class=\"ik ik-check\"></i>  </span>\r\n                              <span class=\"media-body\">\r\n                                  <span class=\"heading-font-family media-heading\">لديك خبر جديد</span> \r\n                              </span>\r\n                          </a>\r\n                      </div>\r\n                      <div class=\"footer\"><a href=\"\">كل الإشعارات</a></div>\r\n                  </div>\r\n              </div>\r\n              \r\n             \r\n              <div class=\"dropdown\">\r\n                  <a class=\"dropdown-toggle pub-ser\" href=\"#\" id=\"userDropdown\" data-toggle=\"dropdown\">\r\n                  <i class=\"ik ik-chevron-down\"></i>\r\n                 <img class=\"avatar\" src=\"assets/images/avatar.png\" alt=\"\"> <span style=\"font-size: 11px\"> مرحبا : محمد علي </span>   </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\r\n                      <a class=\"dropdown-item\" href=\"\">الملف الشخصي <i class=\"ik ik-user dropdown-icon\"></i> </a>\r\n                      <a class=\"dropdown-item\" href=\"\">تسجيل خروج <i class=\"ik ik-power dropdown-icon\"></i> </a>\r\n                  </div>\r\n              </div>\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/page-header/page-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-header/page-header.component.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.css */ "./src/app/page-header/page-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/register-courses/freshmen-wishes/freshmen-wishes.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/register-courses/freshmen-wishes/freshmen-wishes.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWNvdXJzZXMvZnJlc2htZW4td2lzaGVzL2ZyZXNobWVuLXdpc2hlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/register-courses/freshmen-wishes/freshmen-wishes.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/register-courses/freshmen-wishes/freshmen-wishes.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  freshmen-wishes works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/register-courses/freshmen-wishes/freshmen-wishes.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/register-courses/freshmen-wishes/freshmen-wishes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FreshmenWishesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreshmenWishesComponent", function() { return FreshmenWishesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FreshmenWishesComponent = /** @class */ (function () {
    function FreshmenWishesComponent() {
    }
    FreshmenWishesComponent.prototype.ngOnInit = function () {
    };
    FreshmenWishesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freshmen-wishes',
            template: __webpack_require__(/*! ./freshmen-wishes.component.html */ "./src/app/register-courses/freshmen-wishes/freshmen-wishes.component.html"),
            styles: [__webpack_require__(/*! ./freshmen-wishes.component.css */ "./src/app/register-courses/freshmen-wishes/freshmen-wishes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreshmenWishesComponent);
    return FreshmenWishesComponent;
}());



/***/ }),

/***/ "./src/app/register-courses/register-courses-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/register-courses/register-courses-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterCoursesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCoursesRoutingModule", function() { return RegisterCoursesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var RegisterCoursesRoutingModule = /** @class */ (function () {
    function RegisterCoursesRoutingModule() {
    }
    RegisterCoursesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RegisterCoursesRoutingModule);
    return RegisterCoursesRoutingModule;
}());



/***/ }),

/***/ "./src/app/register-courses/register-courses.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/register-courses/register-courses.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterCoursesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCoursesModule", function() { return RegisterCoursesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_courses_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-courses-routing.module */ "./src/app/register-courses/register-courses-routing.module.ts");
/* harmony import */ var _freshmen_wishes_freshmen_wishes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./freshmen-wishes/freshmen-wishes.component */ "./src/app/register-courses/freshmen-wishes/freshmen-wishes.component.ts");
/* harmony import */ var _register_help_register_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-help/register-help.component */ "./src/app/register-courses/register-help/register-help.component.ts");






var RegisterCoursesModule = /** @class */ (function () {
    function RegisterCoursesModule() {
    }
    RegisterCoursesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_freshmen_wishes_freshmen_wishes_component__WEBPACK_IMPORTED_MODULE_4__["FreshmenWishesComponent"], _register_help_register_help_component__WEBPACK_IMPORTED_MODULE_5__["RegisterHelpComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _register_courses_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterCoursesRoutingModule"]
            ]
        })
    ], RegisterCoursesModule);
    return RegisterCoursesModule;
}());



/***/ }),

/***/ "./src/app/register-courses/register-help/register-help.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/register-courses/register-help/register-help.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWNvdXJzZXMvcmVnaXN0ZXItaGVscC9yZWdpc3Rlci1oZWxwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register-courses/register-help/register-help.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/register-courses/register-help/register-help.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  register-help works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/register-courses/register-help/register-help.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/register-courses/register-help/register-help.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterHelpComponent", function() { return RegisterHelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterHelpComponent = /** @class */ (function () {
    function RegisterHelpComponent() {
    }
    RegisterHelpComponent.prototype.ngOnInit = function () {
    };
    RegisterHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-help',
            template: __webpack_require__(/*! ./register-help.component.html */ "./src/app/register-courses/register-help/register-help.component.html"),
            styles: [__webpack_require__(/*! ./register-help.component.css */ "./src/app/register-courses/register-help/register-help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterHelpComponent);
    return RegisterHelpComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/timer/timer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/timer/timer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/timer/timer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/timer/timer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{timerText}}"

/***/ }),

/***/ "./src/app/shared/components/timer/timer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/timer/timer.component.ts ***!
  \************************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this.timer = 100;
        this.toHHMMSS = function (secs) {
            var sec = parseInt(secs, 10);
            var hours = Math.floor(sec / 3600);
            var minutes = Math.floor(sec / 60) % 60;
            var seconds = sec % 60;
            return [hours, minutes, seconds]
                .map(function (v) { return v < 10 ? '0' + v : v; })
                .filter(function (v, i) { return v !== '00' || i > 0; })
                .join(':');
        };
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = this.hr * 60 * 60;
        setInterval(function () {
            _this.timer = (_this.timer) - 1;
            if (_this.timer > 0) {
                _this.timerText = _this.toHHMMSS(_this.timer);
            }
            else {
                _this.timerText = '0';
            }
        }, 1000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TimerComponent.prototype, "hr", void 0);
    TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/shared/components/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.css */ "./src/app/shared/components/timer/timer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/hr-minute.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/hr-minute.directive.ts ***!
  \**********************************************************/
/*! exports provided: HrMinuteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrMinuteDirective", function() { return HrMinuteDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HrMinuteDirective = /** @class */ (function () {
    function HrMinuteDirective(el) {
        this.el = el;
    }
    HrMinuteDirective.prototype.ngAfterViewInit = function () {
        this.HrMin = 'Min';
        this.el.nativeElement.innerText = this.hr * 10;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HrMinuteDirective.prototype, "hr", void 0);
    HrMinuteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHrMinute]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HrMinuteDirective);
    return HrMinuteDirective;
}());



/***/ }),

/***/ "./src/app/shared/services/app-storage.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/app-storage.service.ts ***!
  \********************************************************/
/*! exports provided: AppStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStorageService", function() { return AppStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppStorageService = /** @class */ (function () {
    function AppStorageService() {
    }
    AppStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    AppStorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    AppStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    AppStorageService.prototype.clear = function () {
        localStorage.clear();
    };
    AppStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppStorageService);
    return AppStorageService;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiURI = 'http://seuapps.seu.edu.sa/stdservicesapi';
        this._tokenName = 'auth_token';
    }
    ConfigService.prototype.getToken = function () {
        return this._tokenName;
    };
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/http-request.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/http-request.service.ts ***!
  \*********************************************************/
/*! exports provided: HttpRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestService", function() { return HttpRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HttpRequestService = /** @class */ (function () {
    function HttpRequestService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    HttpRequestService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return headers;
    };
    HttpRequestService.prototype.createAuthRequestHeader = function (toekn) {
        // set headers here e.g.
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            Authorization: "Bearer " + toekn,
            'Content-Type': 'application/json',
        });
        return headers;
    };
    HttpRequestService.prototype.GetRequest = function (path) {
        var url = this.configService.getApiURI() + '/' + path;
        //  let headers= new Headers();
        // headers.append('Content-Type', 'application/json');
        var headers = this.createRequestHeader();
        // let options = new RequestOptions({ headers: headers });
        return this.http.post(url, { headers: headers });
    };
    HttpRequestService.prototype.GetFullUrlRequest = function (path) {
        var url = path;
        //  let headers= new Headers();
        // headers.append('Content-Type', 'application/json');
        var headers = this.createRequestHeader();
        // let options = new RequestOptions({ headers: headers });
        return this.http.post(url, { headers: headers });
    };
    HttpRequestService.prototype.GetAuthRequest = function (path) {
        var url = this.configService.getApiURI() + '/' + path;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem(this.configService.getToken());
        if (authToken) {
            var token = JSON.parse(authToken);
            var toeknStr = token.auth_token;
            // tslint:disable-next-line: no-shadowed-variable
            var headers_1 = this.createAuthRequestHeader(toeknStr);
            // headers.append('Authorization', `Bearer ${toeknStr}`);
            // let options = new RequestOptions({ headers: headers });
            return this.http.get(url, { headers: headers_1 });
        }
    };
    HttpRequestService.prototype.postRequest = function (path, body) {
        var url = this.configService.getApiURI() + '/' + path;
        var headers = this.createRequestHeader();
        // headers.append('Content-Type', 'application/json');
        //  let options = new RequestOptions({ headers: headers });
        return this.http.post(url, JSON.stringify(body), { headers: headers });
    };
    HttpRequestService.prototype.postAuthRequest = function (path, body) {
        var url = this.configService.getApiURI() + '/' + path;
        /// let headers= new Headers();
        //  headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem(this.configService.getToken());
        if (authToken) {
            var token = JSON.parse(authToken);
            var toeknStr = token.auth_token;
            var headers = this.createAuthRequestHeader(toeknStr);
            // headers.append('Authorization', `Bearer ${toeknStr}`);
            // let options = new RequestOptions({ headers: headers });
            return this.http.post(url, JSON.stringify(body), { headers: headers });
        }
    };
    HttpRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], HttpRequestService);
    return HttpRequestService;
}());



/***/ }),

/***/ "./src/app/shared/services/print.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/print.service.ts ***!
  \**************************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PrintService = /** @class */ (function () {
    function PrintService(router) {
        this.router = router;
        this.isPrinting = false;
        this.test = '111';
    }
    PrintService.prototype.printDocument = function (documentName, documentData) {
        this.isPrinting = true;
        this.router.navigate(['/',
            { outlets: {
                    print: ['print', documentName, documentData.join()]
                } }]);
        alert('nav');
    };
    PrintService.prototype.onDataReady = function () {
        var _this = this;
        setTimeout(function () {
            window.print();
            _this.isPrinting = false;
            _this.router.navigate([{ outlets: { print: null } }]);
        });
        alert('printed');
    };
    PrintService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PrintService);
    return PrintService;
}());



/***/ }),

/***/ "./src/app/shared/services/user-manager.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/user-manager.service.ts ***!
  \*********************************************************/
/*! exports provided: UserManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerService", function() { return UserManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _app_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-storage.service */ "./src/app/shared/services/app-storage.service.ts");





var UserManagerService = /** @class */ (function () {
    function UserManagerService(configService, appStore) {
        this.configService = configService;
        this.appStore = appStore;
        this._authNavStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        // Observable navItem stream
        this.authNavStatus$ = this._authNavStatusSource.asObservable();
    }
    UserManagerService.prototype.logout = function () {
        this.appStore.removeItem('auth_token');
        this._authNavStatusSource.next(false);
    };
    UserManagerService.prototype.saveToken = function (token) {
        this.appStore.setItem(this.configService.getToken(), token);
    };
    UserManagerService.prototype.getApp = function () {
        return this.appStore.getItem(this.configService.getToken());
    };
    UserManagerService.prototype.IsLoggedIn = function () {
        var IsLoggedIn = false;
        this.authNavStatus$.subscribe(function (x) { return IsLoggedIn = x; });
        return IsLoggedIn;
    };
    UserManagerService.prototype.login = function () {
        this._authNavStatusSource.next(true);
    };
    UserManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _app_storage_service__WEBPACK_IMPORTED_MODULE_4__["AppStorageService"]])
    ], UserManagerService);
    return UserManagerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\SourceCode\std\apps\seu-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map