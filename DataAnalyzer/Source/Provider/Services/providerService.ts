
'use strict'
    export interface IProviderService  {
        getProviders(): ng.IPromise<Array<IStockProvider>>;
    }

    export interface IStockProvider {
        source_code: string;
        source_id: string;
    }

    export class StockProviderService implements IProviderService {
        constructor(private $http: ng.IHttpService) {
            this.$http = $http;
        }
        getProviders(): ng.IPromise<Array<IStockProvider>> {
            return this.$http.get('http://192.168.158.133:5050/QuandlAAS/v1/providers/').then((response: ng.IHttpPromiseCallbackArg<IStockProvider[]>): IStockProvider[]=> {
            return response.data;
            });
        }

    }

    factory.$inject = ['$http'];

    function factory($http: ng.IHttpService): IProviderService {
        return new StockProviderService($http);
    }

    angular.module('da.services').factory('da.service.providerService', factory);
