module da.controller {
    'use strict'

    interface IStockController extends ng.IScope {
        stockssList: any;
    }
    class StocksController {
        static $inject = ['da.service.stockService', '$scope'];

        constructor(private stockstoreService: da.service.IStockService, private $scope: IStockController) {

            $scope.stockssList = '';

            //stockstoreService.getStocksByProvider().then((response: da.service.IStockProvider[]): void=> {
            //    $scope.stockssList = response;
            //});
        }
    }
    angular.module('da.controllers').controller('da.controller.stockController', StocksController);
}