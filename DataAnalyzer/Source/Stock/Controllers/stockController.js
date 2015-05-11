var da;
(function (da) {
    var controller;
    (function (controller) {
        'use strict';
        var StocksController = (function () {
            function StocksController(stockstoreService, $scope) {
                this.stockstoreService = stockstoreService;
                this.$scope = $scope;
                $scope.stockssList = '';
                //stockstoreService.getStocksByProvider().then((response: da.service.IStockProvider[]): void=> {
                //    $scope.stockssList = response;
                //});
            }
            StocksController.$inject = ['da.service.providerService', '$scope'];
            return StocksController;
        })();
        angular.module('da.controllers').controller('da.controller.stockController', StocksController);
    })(controller = da.controller || (da.controller = {}));
})(da || (da = {}));
//# sourceMappingURL=stockController.js.map