(function () {

    angular
        .module('codestack')
        .controller('CareersCtrl', CareersCtrl);

    CareersCtrl.$inject = ['$scope'];

    function CareersCtrl($scope) {

        ui.init();
        googleAPI.init();

    }

}());
