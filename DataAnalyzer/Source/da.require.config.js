'use strict';
require.config({
    paths: {
        'angular': "../Scripts/angular",
        'angular-route': "../Scripts/angular-route",
        'registry': "Common/Config/da.modules.registry",
        'main': "Common/Config/da.modules"
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
    angular.bootstrap(document, ['da']);
});
//# sourceMappingURL=da.require.config.js.map