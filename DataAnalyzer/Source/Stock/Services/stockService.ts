
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
            return this.$http.get('http://192.168.158.111:5050/QuandlAAS/v1/exchange/' + providerId + "/index").then((response: any): any=> {
                return response.data;
            });
        }
    }
    factory.$inject = ['$http'];

    function factory($http: ng.IHttpService): IStockService {
        return new StockService($http);
    }
    angular.module('da.services').factory(StockService.id, factory);
