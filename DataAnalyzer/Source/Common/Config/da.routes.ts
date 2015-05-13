
﻿import ProviderController = require("Provider/Controllers/providerController");

import StockController = require("Stock/Controllers/stockController");

   export class Route {

        static $inject = ["$routeProvider"];


        static configuration($routeProvider: ng.route.IRouteProvider) {
            $routeProvider

                .when("/providers", {

                controller: ProviderController.ProviderController.id,
                templateUrl: "Provider/Partials/providers.html"

                }).when("/providers/:providerId", {

                controller: StockController.StocksController.id,
                templateUrl: "Stock/Partials/stocks.html"

            });

            $routeProvider.otherwise({ redirectTo: "/providers" });



        }

    }

