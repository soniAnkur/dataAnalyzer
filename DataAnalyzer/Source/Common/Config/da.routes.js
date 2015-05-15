define(["require", "exports", "Provider/Controllers/providerController", "Stock/Controllers/stockController"], function (require, exports, ProviderController, StockController) {
    var Route = (function () {
        function Route() {
        }
        Route.configuration = function ($routeProvider, RestangularProvider) {
            $routeProvider.when("/providers", {
                controller: ProviderController.ProviderController.id,
                templateUrl: "Provider/Partials/providers.html"
            }).when("/providers/:providerId", {
                controller: StockController.StocksController.id,
                templateUrl: "Stock/Partials/stocks.html"
            });
            $routeProvider.otherwise({ redirectTo: "/providers" });
            RestangularProvider.setBaseUrl("http://10.176.2.88:5050/QuandlAAS/v1/exchange");
        };
        Route.$inject = ["$routeProvider", "RestangularProvider"];
        return Route;
    })();
    exports.Route = Route;
});
//# sourceMappingURL=da.routes.js.map