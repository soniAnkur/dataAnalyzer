var da;
(function (da) {
    var controller;
    (function (controller) {
        'use strict';
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
            ProviderController.$inject = ['da.service.providerService', '$scope'];
            return ProviderController;
        })();
        angular.module('da.controllers').controller('da.controller.providerController', ProviderController);
    })(controller = da.controller || (da.controller = {}));
})(da || (da = {}));
//# sourceMappingURL=providerController.js.map