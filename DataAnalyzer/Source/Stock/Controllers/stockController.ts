import service = require("../Services/stockService");
    'use strict'

    interface IStockController extends ng.IScope {
        stockssList: any;
    }

    interface IRouteInfo extends ng.route.IRouteParamsService {
        providerId: string;
    }

    export class StocksController {

        static id: string = "da.controller.stockController";

        static $inject = [service.StockService.id, '$scope','$routeParams'];

        constructor(private stockstoreService: service.IStockService, private $scope: IStockController, $routeParams: IRouteInfo) {
            $scope.stockssList = '';

            stockstoreService.getStocksByProvider($routeParams.providerId).then((response: any): void=> {
                $scope.stockssList = response;
            });
        }
    }
    angular.module('da.controllers').controller(StocksController.id, StocksController);
