define(["require", "exports", "../Services/providerService"], function (require, exports, service) {
    var ProviderController = (function () {
        function ProviderController(stockstoreService, $scope, Restangular) {
            this.stockstoreService = stockstoreService;
            this.$scope = $scope;
            //stockstoreService.getProviders().then((response: any): void=> {
            //   $scope.providersList = response;
            // });
            $scope.providersList = Restangular.all("location").getList().$object;
        }
        ProviderController.id = "da.controller.providerController";
        ProviderController.$inject = [service.StockProviderService.id, "$scope", "Restangular"];
        return ProviderController;
    })();
    exports.ProviderController = ProviderController;
    angular.module("da.controllers").controller(ProviderController.id, ProviderController);
});
//# sourceMappingURL=providerController.js.map