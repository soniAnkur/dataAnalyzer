"use strict";
define(["require", "exports"], function (require, exports) {
    var StockProviderService = (function () {
        function StockProviderService($http) {
            this.$http = $http;
            this.$http = $http;
        }
        StockProviderService.prototype.getProviders = function () {
            return this.$http.get("location").then(function (response) {
                return response.data;
            });
        };
        StockProviderService.id = "da.service.providerService";
        return StockProviderService;
    })();
    exports.StockProviderService = StockProviderService;
    factory.$inject = ["$http"];
    function factory($http) {
        return new StockProviderService($http);
    }
    angular.module("da.services").factory(StockProviderService.id, factory);
});
//# sourceMappingURL=providerService.js.map