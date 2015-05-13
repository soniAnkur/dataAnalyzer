define(["require", "exports", "Common/Config/da.routes", "Provider/Directives/da.provider"], function (require, exports, route, ProviderDirective) {
    (function () {
        'use strict';
        angular.module('da', ['da.services', 'da.controllers', 'ngRoute']).config(route.Route.configuration).directive('providerDirective', function () {
            return new ProviderDirective.DaProvider();
        });
    })();
});
//# sourceMappingURL=da.modules.js.map