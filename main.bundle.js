webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-body/app-body.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <app-navbar></app-navbar>\n  <app-certification></app-certification>0\n  <app-skills></app-skills>\n  <app-experiance></app-experiance>\n  <app-portfolio></app-portfolio>\n  <app-education></app-education>\n  <app-contact></app-contact>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app-body/app-body.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/app-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppBodyComponent = (function () {
    function AppBodyComponent() {
    }
    AppBodyComponent.prototype.ngOnInit = function () {
    };
    return AppBodyComponent;
}());
AppBodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-body',
        template: __webpack_require__("../../../../../src/app/app-body/app-body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/app-body.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppBodyComponent);

//# sourceMappingURL=app-body.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-body/biography/biography.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bio\">\n  <h2 class=\"text-center heading\">Let me introduce myself</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"content\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <p>\n            Hey !, I'm Varun Chandra, Master’s student  at University of North Carolina in Computer Science.</p>\n          <blockquote>I believe life becomes easy and work becomes fun when you start pursuing things that interest you.</blockquote>\n          <p> I spend my whole day experimenting, I enjoy work that challenges me to learn something new and stretch in a different direction.\n           I do my best to stay on top of changes in the world of creativeness.</p>\n          <p>\n            My former experiences in developing full stack web applications in all phases of Software development life cycle including Analysis, Design Development, Testing, Implementation and Documentation in JavaScript, JAVA/ J2EE, made me develop and delivering quality products using technologies as in Android, JSP, Java Servlets, HTML5, CSS, JavaScript, Typescript, JQuery, Angular 4, React.js, ExpressJs, Node.js, MongoDB, Bootstrap, REST API, Hibernate, JDBC, JavaScript, HTML, Bootstrap, TypeScript and other web development tools.\n          </p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/app-body/biography/biography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bio {\n  padding: 50px 0; }\n  .bio h2.heading {\n    text-transform: uppercase;\n    padding: 10px 0;\n    position: relative;\n    color: #000000;\n    letter-spacing: 1px;\n    font-weight: bolder; }\n    .bio h2.heading:after {\n      content: '';\n      width: 100px;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      border-bottom: 5px dotted #eee; }\n  .bio .content {\n    letter-spacing: 1px;\n    padding: 30px 0; }\n    .bio .content p {\n      line-height: 25px;\n      color: #000000; }\n    .bio .content li {\n      -webkit-margin-after: 10px;\n              margin-block-end: 10px; }\n    .bio .content a {\n      color: #000000; }\n      .bio .content a i {\n        width: 15px;\n        margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/biography/biography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BiographyComponent = (function () {
    function BiographyComponent() {
        this.name = 'Varun Chandra';
    }
    BiographyComponent.prototype.ngOnInit = function () {
    };
    return BiographyComponent;
}());
BiographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-biography',
        template: __webpack_require__("../../../../../src/app/app-body/biography/biography.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/biography/biography.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BiographyComponent);

//# sourceMappingURL=biography.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-body/certification/certification.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"font-weight: 400; padding-bottom: 15px; \" class=\"text-center heading\">What I love to do <i class=\"fa fa-heart\" style=\"color:#ce2020\" aria-hidden=\"true\"></i></h3>\n<div class=\"row\" style=\"padding-left: 10%\">\n  <div class=\"col-md-12 align-center\">\n    <div class=\"col-md-4\" >\n      <div class=\"\">\n        <i style=\"margin-top: -8px;\" class=\"fa fa-laptop fa-4x -align-center\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"text\">\n        <h3 class=\"text_heading\">Coding</h3>\n        <p>JavaScripter, ng-developer(Angular), Passionate to code and learn new technologies, techie. I pick up new skills quickly, and believe in using which tool is better for my job. Currently I am building JavaScript libraries and Gems.</p>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"\">\n        <img src=\"assets/images/download.png\">\n      </div>\n      <div class=\"text\">\n        <h3 class=\"text_heading\">Web Development</h3>\n        <p>I use to build Web Applications from small scale to large enterprise level. I usually prefer to develop applications using MEAN Stack(Angular JS, Node js, Express), Java web applications, Ruby on Rails, HTML, CSS 3, JQuery. </p>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"\">\n        <img src=\"assets/images/download1.png\">\n      </div>\n      <div class=\"text\">\n        <h3 class=\"text_heading\">Software Engineer</h3>\n        <p>Solving real world problems by building edge cutting software systems, Strong in Data Structure and Algorithms. Involved in tech communities like GitHub and learning Cloud Computing technologies. I am proficient in JavaScript and Java.\n        </p>\n      </div>\n    </div>\n  </div>\n  <!--   <div class=\"col-md-3 col-md-offset-5 col-xs-offset-3\">\n<a class=\"button\" style=\"background-color: black;\" href=\"#work\">Click here - My Works</a>\n</div> -->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app-body/certification/certification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cert {\n  padding: 50px 0; }\n  .cert h2.heading {\n    text-transform: uppercase;\n    padding: 10px 0;\n    position: relative;\n    color: #777;\n    letter-spacing: 1px;\n    font-weight: bolder; }\n    .cert h2.heading:after {\n      content: '';\n      width: 100px;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      border-bottom: 5px dotted #eee; }\n  .cert .content {\n    text-transform: capitalize;\n    padding: 30px 0; }\n    .cert .content .certification {\n      padding: 20px;\n      margin-bottom: 20px;\n      box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n      transition: all .2s ease-in-out;\n      height: 100px;\n      overflow: hidden; }\n      .cert .content .certification:hover {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1); }\n      .cert .content .certification h3, .cert .content .certification h5 {\n        font-weight: 500; }\n      .cert .content .certification h3 {\n        margin-bottom: 10px;\n        margin-top: 0;\n        font-size: 14px; }\n      .cert .content .certification h5 {\n        display: inline;\n        margin-right: 30px;\n        color: #4480ED; }\n        .cert .content .certification h5:after {\n          content: ' | ';\n          font-weight: 500;\n          margin-left: 30px;\n          color: #777; }\n        .cert .content .certification h5 a {\n          color: #4480ED; }\n      .cert .content .certification p {\n        margin-top: 10px; }\n    .cert .content .col-md-4 {\n      margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/certification/certification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CertificationComponent = (function () {
    function CertificationComponent() {
        this.certifications = [
            {
                name: 'Coding',
                date: '2015',
                url: 'http://www.nokia.com',
                company: 'Nokia',
            },
            {
                name: 'Acknowledgement By Eset',
                date: '2015',
                url: 'http://www.eset.com',
                company: 'Eset',
            },
            {
                name: 'Acknowledgement By Eset #2',
                date: '2015',
                url: 'http://www.eset.com',
                company: 'Eset',
            },
            {
                name: 'Acknowledgement By KPN',
                date: '2016',
                url: 'http://www.kpn.com',
                company: 'KPN',
            },
            {
                name: 'Acknowledgement By PasswordPoss',
                date: '2016',
                url: 'http://www.passwordposs.com',
                company: 'PasswordPoss',
            },
            {
                name: 'Certificate of Completion: HTML Fundamentals (HTML5)',
                date: '2016',
                url: 'http://www.sololearn.com',
                company: 'SoloLearn',
            },
            {
                name: 'Certificate of Completion: CSS Fundamentals (CSS3)',
                date: '2016',
                url: 'http://www.sololearn.com',
                company: 'SoloLearn',
            },
            {
                name: 'Certificate of Completion: JavaScript Fundamentals (JS)',
                date: '2016',
                url: 'http://www.sololearn.com',
                company: 'SoloLearn',
            },
        ];
    }
    CertificationComponent.prototype.ngOnInit = function () {
    };
    return CertificationComponent;
}());
CertificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-certification',
        template: __webpack_require__("../../../../../src/app/app-body/certification/certification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/certification/certification.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CertificationComponent);

//# sourceMappingURL=certification.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-body/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"contact\">\n  <h2 class=\"text-center heading\">Contact</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"content\">\n        <form action=\"\" method=\"POST\" role=\"form\">\n          <div class=\"form-group\" *ngFor=\"let form of forms\">\n            <label for=\"{{form.label}}\">{{form.labelContent}} *</label>\n            <input type=\"{{form.type}}\" class=\"form-control\" id=\"{{form.label}}\" placeholder=\"{{form.labelContent}}\" required/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"message\">{{textareaContent}}</label>\n            <textarea id=\"message\" class=\"form-control\" rows=\"10\" placeholder=\"{{textareaContent}}\" required></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-default btn-md\">Send</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app-body/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact h2.heading {\n  text-transform: uppercase;\n  padding: 10px 0;\n  position: relative;\n  color: #777;\n  letter-spacing: 1px;\n  font-weight: bolder; }\n  .contact h2.heading:after {\n    content: '';\n    width: 100px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    border-bottom: 5px dotted #eee; }\n\n.contact .content {\n  padding: 30px 0; }\n  .contact .content form {\n    width: 75%;\n    margin: auto; }\n    .contact .content form .form-control {\n      box-shadow: none;\n      border-radius: 0;\n      transition: all .2s ease-in-out;\n      color: #777;\n      font-weight: 500; }\n      .contact .content form .form-control:focus {\n        border: 1px solid #4480ED; }\n    .contact .content form textarea {\n      resize: none; }\n    .contact .content form .btn {\n      padding: 10px 50px;\n      border-radius: 0;\n      transition: all .2s ease-in-out; }\n      .contact .content form .btn:hover, .contact .content form .btn:active, .contact .content form .btn:focus {\n        background: #4480ED;\n        color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.textareaContent = "Your Message";
        this.forms = [
            {
                label: "name",
                labelContent: "Your Name",
                type: "text",
            },
            {
                label: "email",
                labelContent: "Your Email",
                type: "email",
            },
            {
                label: "number",
                labelContent: "Your Mobile",
                type: "text",
            },
        ];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/app-body/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/contact/contact.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-body/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"education\">\n  <h2 class=\"text-center heading\">Education</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"content\">\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\n          <div class=\"educations\">\n            <h3>{{ educationSection }}</h3>\n            <h5>\n              <a href=\"{{ educationLink }}\" target=\"_blank\">\n                {{ education }}\n              </a>\n            </h5>\n            <span>{{ educationDate }}</span>\n            <p>{{ educationDescription }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app-body/education/education.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".education {\n  padding: 50px 0; }\n  .education h2.heading {\n    text-transform: uppercase;\n    padding: 10px 0;\n    position: relative;\n    color: #777;\n    letter-spacing: 1px;\n    font-weight: bolder; }\n    .education h2.heading:after {\n      content: '';\n      width: 100px;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      border-bottom: 5px dotted #eee; }\n  .education .content {\n    text-transform: capitalize;\n    padding: 30px 0; }\n    .education .content .educations {\n      padding: 20px;\n      margin-bottom: 20px;\n      box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n      transition: all .2s ease-in-out;\n      height: 100px;\n      overflow: hidden; }\n      .education .content .educations:hover {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1); }\n      .education .content .educations h3, .education .content .educations h5 {\n        font-weight: 500; }\n      .education .content .educations h3 {\n        margin-bottom: 10px;\n        margin-top: 0; }\n      .education .content .educations h5 {\n        display: inline;\n        margin-right: 30px;\n        color: #4480ED; }\n        .education .content .educations h5:after {\n          content: ' | ';\n          font-weight: 500;\n          margin-left: 30px;\n          color: #777; }\n        .education .content .educations h5 a {\n          color: #4480ED; }\n      .education .content .educations p {\n        margin-top: 10px; }\n    .education .content .col-md-4 {\n      margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = (function () {
    function EducationComponent() {
        this.educationSection = "Masters in Computer science";
        this.education = "University of North Carolina At Charlotte";
        this.educationDate = "Aug 2016 - Present";
        this.educationDescription = "";
        this.educationLink = "http://www.uncc.edu";
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    return EducationComponent;
}());
EducationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-education',
        template: __webpack_require__("../../../../../src/app/app-body/education/education.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/education/education.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EducationComponent);

//# sourceMappingURL=education.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-body/experiance/experiance.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"exp\">\n  <h2 class=\"text-center heading\">{{experianceTitle}}</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"content\">\n        <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let company of companies\">\n          <div class=\"company\">\n            <h3>{{ company.position }}</h3>\n            <h5>\n              <a href=\"{{company.website}}\" target=\"_blank\">\n                {{ company.name }}\n              </a>\n            </h5>\n            <span>{{ company.date }}</span>\n            <p>{{company.description}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app-body/experiance/experiance.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".exp {\n  padding: 50px 0; }\n  .exp h2.heading {\n    text-transform: uppercase;\n    padding: 10px 0;\n    position: relative;\n    color: #777;\n    letter-spacing: 1px;\n    font-weight: bolder; }\n    .exp h2.heading:after {\n      content: '';\n      width: 100px;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      border-bottom: 5px dotted #eee; }\n  .exp .content {\n    text-transform: capitalize;\n    padding: 30px 0; }\n    .exp .content .company {\n      padding: 20px;\n      margin-bottom: 20px;\n      box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n      transition: all .2s ease-in-out;\n      height: 170px;\n      overflow: hidden; }\n      .exp .content .company:hover {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1); }\n      .exp .content .company h3, .exp .content .company h5 {\n        font-weight: 500; }\n      .exp .content .company h3 {\n        margin-bottom: 10px;\n        margin-top: 0; }\n      .exp .content .company h5 {\n        display: inline;\n        margin-right: 30px;\n        color: #4480ED; }\n        .exp .content .company h5:after {\n          content: ' | ';\n          font-weight: 500;\n          margin-left: 30px;\n          color: #777; }\n        .exp .content .company h5 a {\n          color: #4480ED; }\n      .exp .content .company p {\n        margin-top: 10px; }\n    .exp .content .col-md-4 {\n      margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/experiance/experiance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperianceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperianceComponent = (function () {
    function ExperianceComponent() {
        this.experianceTitle = "experience";
        this.companies = [
            {
                position: 'Software Developer',
                name: 'Value Labs',
                date: 'June 2015 - July 2016',
                description: '•\tThe main objective of the project was to develop a communication portal for customers to interact with claims representatives and share the required documents',
                website: 'http://www.***.us'
            }
        ];
    }
    ExperianceComponent.prototype.ngOnInit = function () {
    };
    return ExperianceComponent;
}());
ExperianceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-experiance',
        template: __webpack_require__("../../../../../src/app/app-body/experiance/experiance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/experiance/experiance.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ExperianceComponent);

//# sourceMappingURL=experiance.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-body/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n\n  <ul class=\"list-unstyled\">\n    <li *ngFor=\"let navNames of navName\">\n      <a routerLink=\"{{navNames.routerLinks}}\">\n        <span>{{navNames.name}}</span>\n        <i class=\"{{navNames.icon}}\" title=\"{{navNames.name}}\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/app-body/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  background: #fff;\n  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n  height: 100%;\n  padding: 20px 0;\n  position: fixed;\n  width: 210px;\n  left: -150px;\n  top: 0;\n  z-index: 2;\n  transition: all .2s ease-in-out; }\n  nav:hover {\n    left: 0; }\n  nav ul {\n    margin: auto; }\n    nav ul li {\n      padding: 10px; }\n      nav ul li a {\n        width: 100%;\n        color: #777;\n        text-transform: capitalize;\n        font-weight: 700;\n        transition: all .2s ease-in-out; }\n        nav ul li a:hover, nav ul li a:focus, nav ul li a:active {\n          text-decoration: none; }\n          nav ul li a:hover span,\n          nav ul li a:hover i, nav ul li a:focus span,\n          nav ul li a:focus i, nav ul li a:active span,\n          nav ul li a:active i {\n            color: #4480ED; }\n        nav ul li a span {\n          display: inline-block;\n          width: 80%; }\n        nav ul li a:hover {\n          padding: 10px 0;\n          color: #4480ED;\n          border-top: 2px solid #4480ED;\n          border-bottom: 2px solid #4480ED; }\n        nav ul li a i {\n          font-size: 20px; }\n\n@media all and (max-width: 768px) {\n  nav {\n    width: 20%;\n    position: fixed;\n    left: 0;\n    text-align: center; }\n    nav ul li a span {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.navName = [
            {
                name: 'Biography',
                icon: 'fa fa-home',
                routerLinks: '/'
            },
            {
                name: 'What can I do',
                icon: 'fa fa-certificate',
                routerLinks: 'cert'
            },
            {
                name: 'Skills',
                icon: 'fa fa-bug',
                routerLinks: 'skills'
            },
            {
                name: 'My Projects',
                icon: 'fa fa-image',
                routerLinks: 'portfolio'
            },
            {
                name: 'Experience',
                icon: 'fa fa-superpowers',
                routerLinks: 'exp'
            },
            {
                name: 'Education',
                icon: 'fa fa-university',
                routerLinks: 'edu'
            },
            {
                name: 'Contact',
                icon: 'fa fa-envelope',
                routerLinks: 'contact'
            },
            {
                name: 'OnePage Portfolio',
                icon: 'fa fa-star',
                routerLinks: 'onePagePortfolio'
            }
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/app-body/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-body/onepage-portfolio/onepage-portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-body></app-body>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app-body/onepage-portfolio/onepage-portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/onepage-portfolio/onepage-portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnepagePortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnepagePortfolioComponent = (function () {
    function OnepagePortfolioComponent() {
    }
    OnepagePortfolioComponent.prototype.ngOnInit = function () {
    };
    return OnepagePortfolioComponent;
}());
OnepagePortfolioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-onePagePortfolio',
        template: __webpack_require__("../../../../../src/app/app-body/onepage-portfolio/onepage-portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/onepage-portfolio/onepage-portfolio.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], OnepagePortfolioComponent);

//# sourceMappingURL=onepage-portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-body/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"portfolio\">\n  <h2 class=\"text-center heading\">portfolio</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"content\">\n        <div class=\"col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let portfolios of portfolio\">\n          <div class=\"portfolio__item\">\n            <a href=\"{{portfolios.link}}\" title=\"{{portfolios.name}}\" target=\"_black\">\n            <img src=\"{{portfolios.imagePath}}{{portfolios.image}}\" class=\"img-responsive\" alt=\"{{portfolios.name}}\" title=\"{{portfolios.name}}\"/>\n          </a>\n            <div class=\"portfolio__description text-center\">\n              <h3>{{portfolios.name}}</h3>\n              <h4>\n                <a href=\"{{portfolios.companyLink}}\" target=\"_blank\">\n                {{portfolios.companyName}}\n              </a>\n              </h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app-body/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".portfolio {\n  padding: 50px 0; }\n  .portfolio h2.heading {\n    text-transform: uppercase;\n    padding: 10px 0;\n    position: relative;\n    color: #777;\n    letter-spacing: 1px;\n    font-weight: bolder; }\n    .portfolio h2.heading:after {\n      content: '';\n      width: 100px;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      border-bottom: 5px dotted #eee; }\n  .portfolio .content {\n    padding: 30px 0; }\n  .portfolio .col-md-4 {\n    padding: 0; }\n  .portfolio__item {\n    position: relative;\n    height: 210px;\n    overflow: hidden; }\n    .portfolio__item:hover img {\n      -webkit-filter: none;\n              filter: none;\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n    .portfolio__item:hover .portfolio__description {\n      transition: all .2s ease-in-out;\n      display: block;\n      bottom: 0; }\n    .portfolio__item img {\n      width: 100%;\n      height: 100%;\n      transition: all .2s ease-in-out; }\n  .portfolio__description {\n    position: absolute;\n    transition: all .2s ease-in-out;\n    bottom: -90px;\n    width: 100%;\n    color: #777;\n    background: #f1f1f1;\n    padding: 2px; }\n    .portfolio__description h3 {\n      font-weight: bold;\n      text-transform: capitalize;\n      font-size: 18px; }\n    .portfolio__description a {\n      color: #4480ED;\n      font-size: 14px;\n      text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
        this.portfolio = [
            {
                name: "MY_BOOK",
                link: "https://rocky-ravine-70292.herokuapp.com/",
                imagePath: "assets/images/portfolio/",
                image: "Capture" + ".JPG",
                companyName: "@mywork",
                companyLink: "https://rocky-ravine-70292.herokuapp.com/",
            },
            {
                name: "Car-Tracker",
                link: "https://github.com/varunchandra36/cartrackerApp",
                imagePath: "assets/images/portfolio/",
                image: "cartraker" + ".JPG",
                companyName: "@mywork",
                companyLink: "https://github.com/varunchandra36/cartrackerApp",
            },
            {
                name: "Automated Customer Visit Management System",
                link: "https://github.com/varunchandra36/",
                imagePath: "assets/images/portfolio/",
                image: "alexengsyn" + "",
                companyName: "@mywork",
                companyLink: "https://github.com/varunchandra36/",
            },
            {
                name: "The Phi Beta Lambda Clothing Closet",
                link: "https://github.com/varunchandra36/",
                imagePath: "assets/images/portfolio/",
                image: "Clothes-Closet-logo" + ".jpg",
                companyName: "@mywork",
                companyLink: "https://github.com/varunchandra36/",
            },
            {
                name: "React Blogging Application",
                link: "https://github.com/varunchandra36/",
                imagePath: "assets/images/portfolio/",
                image: "" + ".png",
                companyName: "@mywork",
                companyLink: "https://github.com/varunchandra36/",
            },
            {
                name: "Weather App",
                link: "https://github.com/varunchandra36/weatherApplication",
                imagePath: "assets/images/portfolio/",
                image: "weather" + ".JPG",
                companyName: "@mywork",
                companyLink: "https://github.com/varunchandra36/weatherApplication",
            },
            {
                name: "Car Service Portal",
                link: "https://github.com/varunchandra36/ServiceRequestPortal",
                imagePath: "assets/images/portfolio/",
                image: "nbad" + ".JPG",
                companyName: "@mywork",
                companyLink: "https://github.com/varunchandra36/ServiceRequestPortal",
            }
        ];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/app-body/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/portfolio/portfolio.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);

//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-body/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"skills\">\n  <h2 class=\"text-center heading\">{{skillsTitle}}</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"content\">\n        <div class=\"col-md-3 col-sm-4 col-xs-12\" *ngFor=\"let skill of skills\">\n          <div class=\"skill\" title=\"{{ skill.name }}\">\n            <img src=\"{{skill.path}}{{skill.imgName}}{{skill.fileExtension}}\" alt=\"{{skill.name}}\" class=\"img-responsive skill__img\">\n            <span class=\"skill__name\">{{ skill.name }}</span>\n            <span class=\"skill__precentage\">{{ skill.percentage }}%</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app-body/skills/skills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skills {\n  padding: 50px 0; }\n  .skills h2.heading {\n    text-transform: uppercase;\n    padding: 10px 0;\n    position: relative;\n    color: #777;\n    letter-spacing: 1px;\n    font-weight: bolder; }\n    .skills h2.heading:after {\n      content: '';\n      width: 100px;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: auto;\n      border-bottom: 5px dotted #eee; }\n  .skills .content {\n    padding: 30px 0; }\n    .skills .content .skill {\n      position: relative;\n      padding: 10px;\n      margin-bottom: 20px;\n      box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n      transition: all .2s ease-in-out;\n      height: 55px;\n      overflow: hidden; }\n      .skills .content .skill:hover {\n        background: #4480ED;\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1); }\n        .skills .content .skill:hover span {\n          color: #fff; }\n      .skills .content .skill__img {\n        display: inline-block;\n        width: 30px;\n        height: 30px; }\n      .skills .content .skill__name {\n        margin-left: 20px; }\n      .skills .content .skill__precentage {\n        float: right;\n        padding: 5px;\n        line-height: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-body/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
        this.skillsTitle = "Skills";
        this.skills = [
            {
                name: 'Angular  4',
                path: 'assets/images/skills/',
                imgName: 'angular',
                fileExtension: '.svg',
                percentage: '75'
            }, {
                name: 'NodeJS',
                path: 'assets/images/skills/',
                imgName: 'nodejs',
                fileExtension: '.png',
                percentage: '80'
            },
            {
                name: 'MongoDB',
                path: 'assets/images/skills/',
                imgName: 'mongodb',
                fileExtension: '.jpg',
                percentage: '80'
            },
            {
                name: 'Express JS',
                path: 'assets/images/skills/',
                imgName: 'express',
                fileExtension: '.png',
                percentage: '75'
            },
            {
                name: 'TypeScript',
                path: 'assets/images/skills/',
                imgName: 'typescript',
                fileExtension: '.png',
                percentage: '70'
            },
            {
                name: 'JavaScript',
                path: 'assets/images/skills/',
                imgName: 'js',
                fileExtension: '.svg',
                percentage: '80'
            },
            {
                name: 'EcmaScript 6',
                path: 'assets/images/skills/',
                imgName: 'es6',
                fileExtension: '.png',
                percentage: '40'
            },
            {
                name: 'jQuery',
                path: 'assets/images/skills/',
                imgName: 'jquery',
                fileExtension: '.svg',
                percentage: '80'
            },
            {
                name: 'HTML5',
                path: 'assets/images/skills/',
                imgName: 'html5',
                fileExtension: '.svg',
                percentage: '95'
            },
            {
                name: 'CSS3',
                path: 'assets/images/skills/',
                imgName: 'css3',
                fileExtension: '.svg',
                percentage: '90'
            },
            {
                name: 'SASS / SCSS',
                path: 'assets/images/skills/',
                imgName: 'sass',
                fileExtension: '.svg',
                percentage: '90'
            },
            {
                name: 'Bootstrap ',
                path: 'assets/images/skills/',
                imgName: 'bootstrap',
                fileExtension: '.svg',
                percentage: '95'
            },
            {
                name: 'Webpack2',
                path: 'assets/images/skills/',
                imgName: 'webpack',
                fileExtension: '.svg',
                percentage: '60'
            },
            {
                name: 'GruntJS',
                path: 'assets/images/skills/',
                imgName: 'grunt',
                fileExtension: '.svg',
                percentage: '90'
            },
            {
                name: 'npm',
                path: 'assets/images/skills/',
                imgName: 'npm',
                fileExtension: '.png',
                percentage: '95'
            },
            {
                name: 'yarn',
                path: 'assets/images/skills/',
                imgName: 'yarn',
                fileExtension: '.jpg',
                percentage: '50'
            },
            {
                name: 'AJAX',
                path: 'assets/images/skills/',
                imgName: 'ajax',
                fileExtension: '.png',
                percentage: '40'
            },
            {
                name: 'SVG',
                path: 'assets/images/skills/',
                imgName: 'svg',
                fileExtension: '.png',
                percentage: '65'
            },
            {
                name: 'JSON',
                path: 'assets/images/skills/',
                imgName: 'json',
                fileExtension: '.png',
                percentage: '100'
            },
            {
                name: 'GIT',
                path: 'assets/images/skills/',
                imgName: 'git',
                fileExtension: '.png',
                percentage: '85'
            },
            {
                name: 'PHP',
                path: 'assets/images/skills/',
                imgName: 'php',
                fileExtension: '.svg',
                percentage: '30'
            },
            {
                name: 'mySQL',
                path: 'assets/images/skills/',
                imgName: 'mysql',
                fileExtension: '.svg',
                percentage: '30'
            },
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-skills',
        template: __webpack_require__("../../../../../src/app/app-body/skills/skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-body/skills/skills.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SkillsComponent);

//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <ul class=\"list-unstyled\">\n        <li *ngFor=\"let socialIcons of socialIcon\">\n          <a href=\"{{socialIcons.link}}\" target=\"_blank\" title=\"{{socialIcons.link}}\">\n            <i class={{socialIcons.icon}}></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"row\">\n      <p>\n        Copyright &copy; 2017 varunchandra\n      </p>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app-footer/app-footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer li {\n  display: inline;\n  margin-right: 10px; }\n  footer li:last-of-type {\n    margin-right: 0; }\n  footer li a {\n    font-size: 16px;\n    color: #000000;\n    text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = (function () {
    function AppFooterComponent() {
        this.socialIcon = [
            {
                link: 'https://www.facebook.com/***',
                icon: 'fa fa-facebook'
            },
            {
                link: 'https://www.twitter.com/***',
                icon: 'fa fa-twitter'
            },
            {
                link: 'https://www.linkedin.com/in/****',
                icon: 'fa fa-linkedin'
            },
            {
                link: 'https://www.github.com/****',
                icon: 'fa fa-github'
            },
            {
                link: 'https://www.codepen.io/***',
                icon: 'fa fa-codepen'
            },
            {
                link: 'https://www.instagram.com/****',
                icon: 'fa fa-instagram'
            },
        ];
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/app-footer/app-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-footer/app-footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppFooterComponent);

//# sourceMappingURL=app-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6 col-xs-6\">\n        <h1>{{name}}</h1>\n        <span>{{positionName}}</span>\n      </div>\n      <div class=\"col-md-3\">\n        <img src=\"../assets/images/portfolio/IMG_3609.jpg\" class=\"img-circle img-responsive\"/>\n      </div>\n\n      <div class=\"col-md-3 col-sm-3 col-xs-12\">\n        <div class=\"header__content\">\n          <address>{{address}}</address>\n          <h3>\n            <a href=\"mob:{{mobileNumber}}\">{{mobileNumber}}</a>\n          </h3>\n          <h3>\n            <a href=\"mailto:{{email}}\">{{email}}</a>\n          </h3>\n          <h3>\n            <a href=\"{{websiteLink}}\">{{websiteName}}</a>\n          </h3>\n          <div class=\"col-md-4 col-sm-4 col-xs-12\">\n            <ul class=\"list-unstyled\">\n              <li *ngFor=\"let socialDetailes of social\">\n                <a href=\"{{socialDetailes.link}}\" title=\"{{socialDetailes.link}}\" target=\"_blank\">\n                  <i class=\"{{socialDetailes.icon}}\"></i>\n                  {{socialDetailes.name}}\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<hr>\n</header>\n<app-biography></app-biography>\n"

/***/ }),

/***/ "../../../../../src/app/app-header/app-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  padding: 50px 0; }\n  header h1 {\n    font-size: 50px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #000000; }\n  header span {\n    font-size: 14px;\n    font-weight: 300;\n    color: #000000;\n    text-transform: uppercase; }\n  header .header__content {\n    font-size: 14px;\n    color: #000000; }\n    header .header__content address {\n      width: 70%;\n      margin-bottom: 5px;\n      color: #000000; }\n    header .header__content h3 {\n      margin-top: 0;\n      margin-bottom: 5px;\n      color: #000000; }\n      header .header__content h3 a {\n        color: #000000;\n        font-size: 14px; }\n        header .header__content h3 a:hover, header .header__content h3 a:focus, header .header__content h3 a:active {\n          text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
        this.name = "Varun Chandra";
        this.positionName = "FULL-STACK DEVELOPER | FRONT-END DEVELOPER";
        this.address = "9309 Kittansett Drive Apt E , Charlotte, NC 28262";
        this.mobileNumber = "+1 980-616-1286";
        this.email = "varunchandra36@gmail.com";
        this.websiteName = "www.varunchandra.com";
        this.websiteLink = "http://www.*****.com";
        this.social = [
            {
                name: "@varunchandra36",
                link: "https://github.com/varunchandra36/",
                icon: "fa fa-github",
                siteName: "Facebook"
            },
            {
                name: "@varunchandra36",
                link: "www.linkedin.com/in/varunchandra36",
                icon: "fa fa-linkedin",
                siteName: "Linkedin"
            },
        ];
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    return AppHeaderComponent;
}());
AppHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-header",
        template: __webpack_require__("../../../../../src/app/app-header/app-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-header/app-header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppHeaderComponent);

//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"newcontainer\">\n<div class=\"small\">\n  <app-header></app-header>\n  <app-body></app-body>\n  <app-footer></app-footer>\n</div>\n\n<div class=\"large\">\n  <app-navbar></app-navbar>\n  <!--<app-header></app-header>-->\n  <router-outlet></router-outlet>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  color: #777; }\n\n::-moz-selection {\n  color: #fff;\n  background: #4480ED; }\n\n::selection {\n  color: #fff;\n  background: #4480ED; }\n\n.large {\n  display: block; }\n\n.small {\n  display: none; }\n\n@media all and (max-width: 768px) {\n  .large {\n    display: none; }\n  .small {\n    display: block; }\n  nav {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_header_app_header_component__ = __webpack_require__("../../../../../src/app/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_body_app_body_component__ = __webpack_require__("../../../../../src/app/app-body/app-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_footer_app_footer_component__ = __webpack_require__("../../../../../src/app/app-footer/app-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_body_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/app-body/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_body_biography_biography_component__ = __webpack_require__("../../../../../src/app/app-body/biography/biography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_body_skills_skills_component__ = __webpack_require__("../../../../../src/app/app-body/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_body_experiance_experiance_component__ = __webpack_require__("../../../../../src/app/app-body/experiance/experiance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_body_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/app-body/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_body_contact_contact_component__ = __webpack_require__("../../../../../src/app/app-body/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_body_education_education_component__ = __webpack_require__("../../../../../src/app/app-body/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_body_certification_certification_component__ = __webpack_require__("../../../../../src/app/app-body/certification/certification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_body_onepage_portfolio_onepage_portfolio_component__ = __webpack_require__("../../../../../src/app/app-body/onepage-portfolio/onepage-portfolio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__app_header_app_header_component__["a" /* AppHeaderComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_10__app_body_skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'exp', component: __WEBPACK_IMPORTED_MODULE_11__app_body_experiance_experiance_component__["a" /* ExperianceComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_12__app_body_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'edu', component: __WEBPACK_IMPORTED_MODULE_15__app_body_education_education_component__["a" /* EducationComponent */] },
    { path: 'cert', component: __WEBPACK_IMPORTED_MODULE_16__app_body_certification_certification_component__["a" /* CertificationComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_13__app_body_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'onePagePortfolio', component: __WEBPACK_IMPORTED_MODULE_17__app_body_onepage_portfolio_onepage_portfolio_component__["a" /* OnepagePortfolioComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__app_header_app_header_component__["a" /* AppHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__app_body_app_body_component__["a" /* AppBodyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__app_footer_app_footer_component__["a" /* AppFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_body_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app_body_biography_biography_component__["a" /* BiographyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_body_skills_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__app_body_experiance_experiance_component__["a" /* ExperianceComponent */],
            __WEBPACK_IMPORTED_MODULE_12__app_body_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_13__app_body_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_15__app_body_education_education_component__["a" /* EducationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__app_body_certification_certification_component__["a" /* CertificationComponent */],
            __WEBPACK_IMPORTED_MODULE_17__app_body_onepage_portfolio_onepage_portfolio_component__["a" /* OnepagePortfolioComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* RouterModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map