import route = require("Common/Config/da.routes");

((): void=> {
    'use strict';

    angular.module('da', ['da.services', 'da.controllers', 'ngRoute'])
        .config(route.Route.configuration);
})(); 