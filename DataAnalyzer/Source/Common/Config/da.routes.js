define(["require", "exports", "Provider/Controllers/providerController"], function (require, exports, ProviderController) {
    var Route = (function () {
        function Route() {
        }
        Route.configuration = function ($routeProvider) {
            $routeProvider.when("/providers", {
                controller: ProviderController.ProviderController,
                templateUrl: "Provider/Partials/providers.html"
            }).when("/providers/:id", {
                controller: "da.controller.stockController",
                templateUrl: "../../Partials/providers.html"
            });
            $routeProvider.otherwise({ redirectTo: "/providers" });
        };
        Route.$inject = ["$routeProvider"];
        return Route;
    })();
    exports.Route = Route;
});
//# sourceMappingURL=da.routes.js.map