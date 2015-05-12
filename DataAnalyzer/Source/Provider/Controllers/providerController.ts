import service = require("../Services/providerService");
    interface IProviderController extends ng.IScope {
        providersList: any;
    }
    export class ProviderController {

        static id: string = "da.controller.providerController";

        providersList: Array<service.IProviderService>;
        static $inject = [service.StockProviderService.id, '$scope'];

        constructor(private stockstoreService: service.IProviderService, private $scope: IProviderController) {

            //$scope.providersList = '[{"source_code":"UHERO","source_id":3},{"source_code":"NSE","source_id":33},{"source_code":"BCB","source_id":35}]';

            // var vm = this;
           stockstoreService.getProviders().then((response: any): void=> {
              $scope.providersList = response;
            });
        }
    }
    angular.module('da.controllers').controller(ProviderController.id, ProviderController);
