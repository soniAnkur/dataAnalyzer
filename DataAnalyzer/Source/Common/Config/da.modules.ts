
﻿import route = require("Common/Config/da.routes");

import ProviderDirective = require("Provider/Directives/da.provider");

((): void=> {
    "use strict";

    angular.module("da", ["da.services", "da.controllers", "ngRoute", "ui.bootstrap"])
        .config(route.Route.configuration).directive("providerDirective",() => {

        return new ProviderDirective.DaProvider();
    });
})(); 