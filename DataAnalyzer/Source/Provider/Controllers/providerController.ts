module da.controller {
    'use strict'

    interface IProviderController extends ng.IScope {
        providersList: any;
    }
    class ProviderController {

        providersList: Array<da.service.IProviderService>;
        static $inject = ['da.service.providerService', '$scope'];

        constructor(private stockstoreService: da.service.IProviderService, private $scope: IProviderController) {

            //$scope.providersList = '[{"source_code":"UHERO","source_id":3},{"source_code":"NSE","source_id":33},{"source_code":"BCB","source_id":35}]';

            // var vm = this;
            stockstoreService.getProviders().then((response: da.service.IStockProvider[]): void=> {
                $scope.providersList = response;
            });
        }
    }
    angular.module('da.controllers').controller('da.controller.providerController', ProviderController);
}