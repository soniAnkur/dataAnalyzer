define(["require", "exports", "../Services/providerService"], function (require, exports, service) {
    var ProviderController = (function () {
        function ProviderController(stockstoreService, $scope) {
            this.stockstoreService = stockstoreService;
            this.$scope = $scope;
            stockstoreService.getProviders().then(function (response) {
                $scope.providersList = response;
            });
        }
        ProviderController.id = "da.controller.providerController";
        ProviderController.$inject = [service.StockProviderService.id, '$scope'];
        return ProviderController;
    })();
    exports.ProviderController = ProviderController;
    angular.module('da.controllers').controller(ProviderController.id, ProviderController);
});
//# sourceMappingURL=providerController.js.map