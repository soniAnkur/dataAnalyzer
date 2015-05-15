define(["require", "exports", "../Services/stockService"], function (require, exports, service) {
    "use strict";
    var StocksController = (function () {
        function StocksController(stockstoreService, $scope, $routeParams) {
            this.stockstoreService = stockstoreService;
            this.$scope = $scope;
            stockstoreService.getStocksByProvider($routeParams.providerId).then(function (response) {
                $scope.stocksList = response;
            });
        }
        StocksController.id = "da.controller.stockController";
        StocksController.$inject = [service.StockService.id, "$scope", "$routeParams"];
        return StocksController;
    })();
    exports.StocksController = StocksController;
    angular.module("da.controllers").controller(StocksController.id, StocksController);
});
//# sourceMappingURL=stockController.js.map