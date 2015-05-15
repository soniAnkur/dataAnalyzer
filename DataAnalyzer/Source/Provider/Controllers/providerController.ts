import service = require("../Services/providerService");
    interface IProviderController extends ng.IScope {
        providersList: any;
    }
    export class ProviderController {

        static id: string = "da.controller.providerController";

        providersList: Array<service.IProviderService>;
        static $inject = [service.StockProviderService.id, "$scope"];

        constructor(private stockstoreService: service.IProviderService, private $scope: IProviderController) {
           stockstoreService.getProviders().then((response: any): void=> {
              $scope.providersList = response;
            });
        }
    }
    angular.module("da.controllers").controller(ProviderController.id, ProviderController);
