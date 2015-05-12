var DaProvider = (function () {
    function DaProvider() {
        this.restrict = "AEC";
        this.templateUrl = "daProvider.html";
    }
    return DaProvider;
})();
angular.module('da').directive('daProvider', function () {
    return new DaProvider();
});
//# sourceMappingURL=da.provider.js.map