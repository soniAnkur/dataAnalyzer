define(["require", "exports", "../Services/providerService"], function (require, exports, service) {
    var ProviderController = (function () {
        function ProviderController(stockstoreService, $scope) {
            //$scope.providersList = '[{"source_code":"UHERO","source_id":3},{"source_code":"NSE","source_id":33},{"source_code":"BCB","source_id":35}]';
            this.stockstoreService = stockstoreService;
            this.$scope = $scope;
            // var vm = this;
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