///<reference path="../../../Scripts/typings/restangular/restangular.d.ts"/>
﻿import ProviderController = require("Provider/Controllers/providerController");

import StockController = require("Stock/Controllers/stockController");

   export class Route {

        static $inject = ["$routeProvider","RestangularProvider"];


        static configuration($routeProvider: ng.route.IRouteProvider, RestangularProvider: restangular.IProvider) {
            $routeProvider

                .when("/providers", {

                controller: ProviderController.ProviderController.id,
                templateUrl: "Provider/Partials/providers.html"

                }).when("/providers/:providerId", {

                controller: StockController.StocksController.id,
                templateUrl: "Stock/Partials/stocks.html"

            });

            $routeProvider.otherwise({ redirectTo: "/providers" });

            RestangularProvider.setBaseUrl("http://10.176.2.88:5050/QuandlAAS/v1/exchange");

        }

    }

