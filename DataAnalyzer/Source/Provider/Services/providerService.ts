
'use strict'
    export interface IProviderService  {
        getProviders(): ng.IPromise<Array<IStockProvider>>;
    }

    export interface IStockProvider {
        source_code: string;
        source_id: string;
    }

    export class StockProviderService implements IProviderService {
        static id: string = "da.service.providerService";
        constructor(private $http: ng.IHttpService) {
            this.$http = $http;
        }
        getProviders(): ng.IPromise<Array<IStockProvider>> {
            return this.$http.get('http://10.176.1.155:5050/QuandlAAS/v1/exchange/location').then((response: ng.IHttpPromiseCallbackArg<IStockProvider[]>): IStockProvider[]=> {
            return response.data;
            });
        }

    }

    factory.$inject = ['$http'];

    function factory($http: ng.IHttpService): IProviderService {
        return new StockProviderService($http);
    }

    angular.module('da.services').factory(StockProviderService.id, factory);
