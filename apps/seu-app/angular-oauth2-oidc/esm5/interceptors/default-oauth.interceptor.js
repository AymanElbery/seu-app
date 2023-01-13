/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { of, merge } from 'rxjs';
import { catchError, filter, map, take, mergeMap, timeout } from 'rxjs/operators';
import { OAuthResourceServerErrorHandler } from './resource-server-error-handler';
import { OAuthModuleConfig } from '../oauth-module.config';
import { OAuthStorage } from '../types';
import { OAuthService } from '../oauth-service';
var DefaultOAuthInterceptor = /** @class */ (function () {
    function DefaultOAuthInterceptor(authStorage, oAuthService, errorHandler, moduleConfig) {
        this.authStorage = authStorage;
        this.oAuthService = oAuthService;
        this.errorHandler = errorHandler;
        this.moduleConfig = moduleConfig;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    DefaultOAuthInterceptor.prototype.checkUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this.moduleConfig.resourceServer.customUrlValidation) {
            return this.moduleConfig.resourceServer.customUrlValidation(url);
        }
        if (this.moduleConfig.resourceServer.allowedUrls) {
            return !!this.moduleConfig.resourceServer.allowedUrls.find((/**
             * @param {?} u
             * @return {?}
             */
            function (u) { return url.startsWith(u); }));
        }
        return true;
    };
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    DefaultOAuthInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        /** @type {?} */
        var url = req.url.toLowerCase();
        if (!this.moduleConfig) {
            return next.handle(req);
        }
        if (!this.moduleConfig.resourceServer) {
            return next.handle(req);
        }
        if (this.moduleConfig.resourceServer.allowedUrls && !this.checkUrl(url)) {
            return next.handle(req);
        }
        /** @type {?} */
        var sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;
        if (!sendAccessToken) {
            return next
                .handle(req)
                .pipe(catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.errorHandler.handleError(err); })));
        }
        return merge(of(this.oAuthService.getAccessToken()).pipe(filter((/**
         * @param {?} token
         * @return {?}
         */
        function (token) { return token ? true : false; }))), this.oAuthService.events.pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.type === 'token_received'; })), timeout(this.oAuthService.waitForTokenInMsec || 0), catchError((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return of(null); })), // timeout is not an error
        map((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.oAuthService.getAccessToken(); })))).pipe(take(1), mergeMap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (token) {
                /** @type {?} */
                var header = 'Bearer ' + token;
                /** @type {?} */
                var headers = req.headers.set('Authorization', header);
                req = req.clone({ headers: headers });
            }
            return next
                .handle(req)
                .pipe(catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return _this.errorHandler.handleError(err); })));
        })));
    };
    DefaultOAuthInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DefaultOAuthInterceptor.ctorParameters = function () { return [
        { type: OAuthStorage },
        { type: OAuthService },
        { type: OAuthResourceServerErrorHandler },
        { type: OAuthModuleConfig, decorators: [{ type: Optional }] }
    ]; };
    return DefaultOAuthInterceptor;
}());
export { DefaultOAuthInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultOAuthInterceptor.prototype.authStorage;
    /**
     * @type {?}
     * @private
     */
    DefaultOAuthInterceptor.prototype.oAuthService;
    /**
     * @type {?}
     * @private
     */
    DefaultOAuthInterceptor.prototype.errorHandler;
    /**
     * @type {?}
     * @private
     */
    DefaultOAuthInterceptor.prototype.moduleConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vYXV0aC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItb2F1dGgyLW9pZGMvIiwic291cmNlcyI6WyJpbnRlcmNlcHRvcnMvZGVmYXVsdC1vYXV0aC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRckQsT0FBTyxFQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQ7SUFHSSxpQ0FDWSxXQUF5QixFQUN6QixZQUEwQixFQUMxQixZQUE2QyxFQUNqQyxZQUErQjtRQUgzQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBaUM7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQW1CO0lBQ25ELENBQUM7Ozs7OztJQUVHLDBDQUFROzs7OztJQUFoQixVQUFpQixHQUFXO1FBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwRTtRQUVELElBQUksSUFB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QUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFsQyxDQUFrQyxFQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBdkVGLFVBQVU7Ozs7Z0JBSEYsWUFBWTtnQkFDWixZQUFZO2dCQUhaLCtCQUErQjtnQkFDL0IsaUJBQWlCLHVCQVdqQixRQUFROztJQWlFakIsOEJBQUM7Q0FBQSxBQXhFRCxJQXdFQztTQXZFWSx1QkFBdUI7Ozs7OztJQUc1Qiw4Q0FBaUM7Ozs7O0lBQ2pDLCtDQUFrQzs7Ozs7SUFDbEMsK0NBQXFEOzs7OztJQUNyRCwrQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEhhbmRsZXIsXHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIG1lcmdlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCB0YWtlLCBtZXJnZU1hcCwgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT0F1dGhSZXNvdXJjZVNlcnZlckVycm9ySGFuZGxlciB9IGZyb20gJy4vcmVzb3VyY2Utc2VydmVyLWVycm9yLWhhbmRsZXInO1xyXG5pbXBvcnQgeyBPQXV0aE1vZHVsZUNvbmZpZyB9IGZyb20gJy4uL29hdXRoLW1vZHVsZS5jb25maWcnO1xyXG5pbXBvcnQgeyBPQXV0aFN0b3JhZ2UgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJy4uL29hdXRoLXNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdE9BdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFN0b3JhZ2U6IE9BdXRoU3RvcmFnZSxcclxuICAgICAgICBwcml2YXRlIG9BdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBPQXV0aFJlc291cmNlU2VydmVyRXJyb3JIYW5kbGVyLFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbW9kdWxlQ29uZmlnOiBPQXV0aE1vZHVsZUNvbmZpZ1xyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrVXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kdWxlQ29uZmlnLnJlc291cmNlU2VydmVyLmN1c3RvbVVybFZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlQ29uZmlnLnJlc291cmNlU2VydmVyLmN1c3RvbVVybFZhbGlkYXRpb24odXJsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZHVsZUNvbmZpZy5yZXNvdXJjZVNlcnZlci5hbGxvd2VkVXJscykge1xyXG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLm1vZHVsZUNvbmZpZy5yZXNvdXJjZVNlcnZlci5hbGxvd2VkVXJscy5maW5kKHUgPT4gdXJsLnN0YXJ0c1dpdGgodSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gIHB1YmxpYyBpbnRlcmNlcHQoXHJcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGNvbnN0IHVybCA9IHJlcS51cmwudG9Mb3dlckNhc2UoKTtcclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLm1vZHVsZUNvbmZpZykge1xyXG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5tb2R1bGVDb25maWcucmVzb3VyY2VTZXJ2ZXIpIHtcclxuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tb2R1bGVDb25maWcucmVzb3VyY2VTZXJ2ZXIuYWxsb3dlZFVybHMgJiYgIXRoaXMuY2hlY2tVcmwodXJsKSkge1xyXG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZW5kQWNjZXNzVG9rZW4gPSB0aGlzLm1vZHVsZUNvbmZpZy5yZXNvdXJjZVNlcnZlci5zZW5kQWNjZXNzVG9rZW47XHJcblxyXG4gICAgaWYgKCFzZW5kQWNjZXNzVG9rZW4pIHtcclxuICAgICAgcmV0dXJuIG5leHRcclxuICAgICAgICAuaGFuZGxlKHJlcSlcclxuICAgICAgICAucGlwZShjYXRjaEVycm9yKGVyciA9PiB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnIpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1lcmdlKFxyXG4gICAgICBvZih0aGlzLm9BdXRoU2VydmljZS5nZXRBY2Nlc3NUb2tlbigpKS5waXBlKFxyXG4gICAgICAgIGZpbHRlcih0b2tlbiA9PiB0b2tlbiA/IHRydWUgOiBmYWxzZSksXHJcbiAgICAgICksXHJcbiAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmV2ZW50cy5waXBlKFxyXG4gICAgICAgIGZpbHRlcihlID0+IGUudHlwZSA9PT0gJ3Rva2VuX3JlY2VpdmVkJyksXHJcbiAgICAgICAgdGltZW91dCh0aGlzLm9BdXRoU2VydmljZS53YWl0Rm9yVG9rZW5Jbk1zZWMgfHwgMCksXHJcbiAgICAgICAgY2F0Y2hFcnJvcihfID0+IG9mKG51bGwpKSwgLy8gdGltZW91dCBpcyBub3QgYW4gZXJyb3JcclxuICAgICAgICBtYXAoXyA9PiB0aGlzLm9BdXRoU2VydmljZS5nZXRBY2Nlc3NUb2tlbigpKSxcclxuICAgICAgKSxcclxuICAgICkucGlwZShcclxuICAgICAgdGFrZSgxKSxcclxuICAgICAgbWVyZ2VNYXAodG9rZW4gPT4ge1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gJ0JlYXJlciAnICsgdG9rZW47XHJcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gcmVxLmhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgaGVhZGVyKTtcclxuICAgICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV4dFxyXG4gICAgICAgICAgLmhhbmRsZShyZXEpXHJcbiAgICAgICAgICAucGlwZShjYXRjaEVycm9yKGVyciA9PiB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnIpKSk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19