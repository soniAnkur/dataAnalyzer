((): void=> {
    'use strict';
    angular.module('da', ['da.services', 'da.controllers', 'ngRoute'])
        .config(application.routes.Route.configuration);
})(); 