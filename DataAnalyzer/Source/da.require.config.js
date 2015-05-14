'use strict';
require.config({
    paths: {
        'angular': "../Scripts/angular",
        'angular-route': "../Scripts/angular-route",
        'angular-ui': "../Scripts/angular-ui/ui-bootstrap-tpls.min",
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
        'angular-ui': {
            deps: ['angular'],
            exports: 'angular-ui'
        },
        'registry': {
            deps: ['angular'],
            exports: 'registry'
        },
        'main': {
            deps: ['angular', 'angular-route', 'registry', "angular-ui"],
            exports: 'main'
        }
    }
});
require(["angular", "angular-route", "angular-ui", "registry", "main"], function (angular) {
    angular.bootstrap(document, ['da']);
});
//# sourceMappingURL=da.require.config.js.map