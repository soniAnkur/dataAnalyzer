//this service is responsible for getting list of all providers
var da;
(function (da) {
    var service;
    (function (service) {
        'use strict';
        var StockService = (function () {
            function StockService($http) {
                this.$http = $http;
                this.$http = $http;
            }
            StockService.prototype.getStocksByProvider = function (providerId) {
                return this.$http.get('http://192.168.158.133:5050/QuandlAAS/v1/providers/' + providerId + '/stocks').then(function (response) {
                    return response.data;
                });
            };
            return StockService;
        })();
        factory.$inject = ['$http'];
        function factory($http) {
            return new StockService($http);
        }
        angular.module('da.services').factory('da.service.stockService', factory);
    })(service = da.service || (da.service = {}));
})(da || (da = {}));
//# sourceMappingURL=stockService.js.map