'use strict';
define(["require", "exports"], function (require, exports) {
    var StockService = (function () {
        function StockService($http) {
            this.$http = $http;
            this.$http = $http;
        }
        StockService.prototype.getStocksByProvider = function (providerId) {
            return this.$http.get('http://10.176.1.155:5050/QuandlAAS/v1/providers/' + providerId + '/stocks').then(function (response) {
                return response.data;
            });
        };
        StockService.id = "da.service.stockService";
        return StockService;
    })();
    exports.StockService = StockService;
    factory.$inject = ['$http'];
    function factory($http) {
        return new StockService($http);
    }
    angular.module('da.services').factory(StockService.id, factory);
});
//# sourceMappingURL=stockService.js.map