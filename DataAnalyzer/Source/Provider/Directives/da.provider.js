define(["require", "exports"], function (require, exports) {
    var DaProvider = (function () {
        function DaProvider() {
            this.restrict = "AEC";
            this.templateUrl = "Provider/Directives/providerDirective.html";
        }
        DaProvider.id = "providerDirective";
        return DaProvider;
    })();
    exports.DaProvider = DaProvider;
});
//angular.module('da').directive(DaProvider.id,() => {
//    return new DaProvider();
//});  
//# sourceMappingURL=da.provider.js.map