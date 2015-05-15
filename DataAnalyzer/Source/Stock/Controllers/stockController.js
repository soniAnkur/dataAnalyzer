define(["require", "exports", "../Services/stockService"], function (require, exports, service) {
    "use strict";
    var StocksController = (function () {
        function StocksController(stockstoreService, $scope, $routeParams, Restangular) {
            //stockstoreService.getStocksByProvider($routeParams.providerId).then((response: any): void=> {
            //    $scope.stocksList = response;
            this.stockstoreService = stockstoreService;
            this.$scope = $scope;
            //});
            $scope.stocksList = Restangular.one($routeParams.providerId, 'index').getList().$object;
        }
        StocksController.id = "da.controller.stockController";
        StocksController.$inject = [service.StockService.id, "$scope", "$routeParams", "Restangular"];
        return StocksController;
    })();
    exports.StocksController = StocksController;
    angular.module("da.controllers").controller(StocksController.id, StocksController);
});
//# sourceMappingURL=stockController.js.map