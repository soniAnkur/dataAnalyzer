define(["require", "exports"], function (require, exports) {
    var ProviderController = (function () {
        function ProviderController(stockstoreService, $scope) {
            //$scope.providersList = '[{"source_code":"UHERO","source_id":3},{"source_code":"NSE","source_id":33},{"source_code":"BCB","source_id":35}]';
            this.stockstoreService = stockstoreService;
            this.$scope = $scope;
            // var vm = this;
            // stockstoreService.getProviders().then((response: service.IStockProvider[]): void=> {
            //     $scope.providersList = response;
            // });
        }
        ProviderController.$inject = ['da.service.providerService', '$scope'];
        return ProviderController;
    })();
    exports.ProviderController = ProviderController;
    angular.module('da.controllers').controller('da.controller.providerController', ProviderController);
});
//# sourceMappingURL=providerController.js.map