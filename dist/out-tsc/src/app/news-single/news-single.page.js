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
var news_service_1 = require("../news.service");
var router_1 = require("@angular/router");
var NewsSinglePage = /** @class */ (function () {
    function NewsSinglePage(newsService, router) {
        this.newsService = newsService;
        this.router = router;
    }
    NewsSinglePage.prototype.ngOnInit = function () {
        this.article = this.newsService.currentArticle;
        console.log(this.newsService.currentArticle);
    };
    NewsSinglePage.prototype.goToHome = function () {
        this.newsService.resetData();
        this.router.navigate(['/news']);
    };
    NewsSinglePage = __decorate([
        core_1.Component({
            selector: 'app-news-single',
            templateUrl: './news-single.page.html',
            styleUrls: ['./news-single.page.scss'],
        }),
        __metadata("design:paramtypes", [news_service_1.NewsService, router_1.Router])
    ], NewsSinglePage);
    return NewsSinglePage;
}());
exports.NewsSinglePage = NewsSinglePage;
//# sourceMappingURL=news-single.page.js.map