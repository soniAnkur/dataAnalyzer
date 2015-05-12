'use strict';
define(["require", "exports"], function (require, exports) {
    var StockProviderService = (function () {
        function StockProviderService($http) {
            this.$http = $http;
            this.$http = $http;
        }
        StockProviderService.prototype.getProviders = function () {
            return this.$http.get('http://192.168.158.133:5050/QuandlAAS/v1/providers/').then(function (response) {
                return response.data;
            });
        };
        return StockProviderService;
    })();
    exports.StockProviderService = StockProviderService;
    factory.$inject = ['$http'];
    function factory($http) {
        return new StockProviderService($http);
    }
    angular.module('da.services').factory('da.service.providerService', factory);
});
//# sourceMappingURL=providerService.js.map