"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../environments/environment");
var http_1 = require("@angular/common/http");
var API_URL = environment_1.environment.apiUrl;
var API_KEY = environment_1.environment.apiKey;
var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.currentArticle = null;
    }
    NewsService.prototype.getData = function (url) {
        return this.http.get(API_URL + "/" + url + "&apikey=" + API_KEY);
    };
    NewsService.prototype.resetData = function () {
        this.currentArticle = null;
        console.log("al darle atrás, el currenArticle es" + this.currentArticle);
    };
    NewsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map