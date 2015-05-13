
'use strict'
    export interface IStockService {
        getStocksByProvider(providerId: string): ng.IPromise<any>;
    }

   export class StockService implements IStockService {

        static id: string = "da.service.stockService";

        constructor(private $http: ng.IHttpService) {
            this.$http = $http;
        }
        getStocksByProvider(providerId: string): ng.IPromise<Array<any>> {
            return this.$http.get('http://10.176.1.155:5050/QuandlAAS/v1/providers/' + providerId + '/stocks').then((response: ng.IHttpPromiseCallbackArg<any>): any=> {
                return response.data;
            });
        }
    }
    factory.$inject = ['$http'];

    function factory($http: ng.IHttpService): IStockService {
        return new StockService($http);
    }
    angular.module('da.services').factory(StockService.id, factory);
