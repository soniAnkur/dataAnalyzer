'use strict';
require.config({
    paths: {
        'angular': "Scripts/angular",
        'angular-route': "Scripts/angular-route",
        'registry': "da.module.registry",
        'main': "da.module"
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'registry': {
            deps: ['angular'],
            exports: 'registry'
        },
        'main': {
            deps: ['angular', 'angular-route', 'registry'],
            exports: 'main'
        }
    }
});
require(["angular", "angular-route", "registry", "main"], function (angular) {
    angular.bootstrap(document, ['myApp']);
});
//# sourceMappingURL=da.require.config.js.map