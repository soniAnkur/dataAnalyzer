//this service is responsible for getting list of all providers

module da.service {
'use strict'
    export interface IStockService {
        getStocksByProvider(providerId: string): ng.IPromise<any>;
}
    class StockService implements da.service.IStockService {
        constructor(private $http: ng.IHttpService) {
            this.$http = $http;
        }
        getStocksByProvider(providerId: string): ng.IPromise<Array<any>> {
            return this.$http.get('http://192.168.158.133:5050/QuandlAAS/v1/providers/' + providerId + '/stocks').then((response: ng.IHttpPromiseCallbackArg<any>): any=> {
                return response.data;
            });
        }
    }
    factory.$inject = ['$http'];

    function factory($http: ng.IHttpService): IStockService {
        return new StockService($http);
    }
    angular.module('da.services').factory('da.service.stockService', factory);
}