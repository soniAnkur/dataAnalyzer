class DaProvider implements ng.IDirective {
  
    constructor() {
        
    }

    restrict = "AEC";

    templateUrl = "daProvider.html";
}


angular.module('da').directive('daProvider',() => {

    return new DaProvider();
}); 