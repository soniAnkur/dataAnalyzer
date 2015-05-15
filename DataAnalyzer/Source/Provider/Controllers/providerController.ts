///<reference path="../../../Scripts/typings/restangular/restangular.d.ts"/>
import service = require("../Services/providerService");
    interface IProviderController extends ng.IScope {
        providersList: any;
    }
    export class ProviderController {

        static id: string = "da.controller.providerController";

        providersList: Array<service.IProviderService>;
        static $inject = [service.StockProviderService.id, "$scope","Restangular"];

        constructor(private stockstoreService: service.IProviderService, private $scope: IProviderController, Restangular : restangular.IService) {
           //stockstoreService.getProviders().then((response: any): void=> {
           //   $scope.providersList = response;
           // });
            $scope.providersList = Restangular.all("location").getList().$object;
        }
    }
    angular.module("da.controllers").controller(ProviderController.id, ProviderController);
