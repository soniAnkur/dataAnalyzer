export class DaProvider implements ng.IDirective {
  
    static id: string = "providerDirective";

    constructor() {
        
    }

    restrict = "AEC";

    templateUrl = "Provider/Directives/providerDirective.html";
}


//angular.module('da').directive(DaProvider.id,() => {

//    return new DaProvider();
//}); 