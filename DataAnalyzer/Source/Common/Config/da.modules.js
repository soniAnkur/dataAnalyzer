define(["require", "exports", "Common/Config/da.routes"], function (require, exports, route) {
    (function () {
        'use strict';
        angular.module('da', ['da.services', 'da.controllers', 'ngRoute']).config(route.Route.configuration);
    })();
});
//# sourceMappingURL=da.modules.js.map