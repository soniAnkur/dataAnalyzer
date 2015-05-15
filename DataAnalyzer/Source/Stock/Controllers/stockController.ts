///<reference path="../../../Scripts/typings/restangular/restangular.d.ts"/>
import service = require("../Services/stockService");
"use strict";

    interface IStockController extends ng.IScope {
        stocksList: any;     
    }

    interface IRouteInfo extends ng.route.IRouteParamsService {
        providerId: string;
    }

    export class StocksController {

        static id: string = "da.controller.stockController";

        static $inject = [service.StockService.id, "$scope", "$routeParams","Restangular"];

        constructor(private stockstoreService: service.IStockService, private $scope: IStockController, $routeParams: IRouteInfo, Restangular: restangular.IService) {
           
            //stockstoreService.getStocksByProvider($routeParams.providerId).then((response: any): void=> {
            //    $scope.stocksList = response;
                
            //});
           $scope.stocksList = Restangular.one($routeParams.providerId,'index').getList().$object;
            
        }
    }
    angular.module("da.controllers").controller(StocksController.id, StocksController);
