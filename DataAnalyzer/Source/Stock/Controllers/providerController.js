var da;
(function (da) {
    var controller;
    (function (controller) {
        'use strict';
        var Stockstore = (function () {
            function Stockstore(stockstoreService, $scope) {
                //$scope.providersList = '[{"source_code":"UHERO","source_id":3},{"source_code":"NSE","source_id":33},{"source_code":"BCB","source_id":35}]';
                this.stockstoreService = stockstoreService;
                this.$scope = $scope;
                // var vm = this;
                stockstoreService.getProviders().then(function (response) {
                    $scope.providersList = response;
                });
            }
            Stockstore.$inject = ['da.service.providerService', '$scope'];
            return Stockstore;
        })();
        angular.module('da.controllers').controller('da.controllers.providerController', Stockstore);
    })(controller = da.controller || (da.controller = {}));
})(da || (da = {}));
//# sourceMappingURL=providerController.js.map