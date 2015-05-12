
﻿import ProviderController = require("Provider/Controllers/providerController");

   export class Route {

        static $inject = ["$routeProvider"];


        static configuration($routeProvider: ng.route.IRouteProvider) {
            $routeProvider

                .when("/providers", {

                controller: ProviderController.ProviderController.id,
                templateUrl: "Provider/Partials/providers.html"


            }).when("/providers/:id", {

                controller: "da.controller.stockController",
                templateUrl: "../../Partials/providers.html"

            });

            $routeProvider.otherwise({ redirectTo: "/providers" });



        }

    }

