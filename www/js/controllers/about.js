(function () {

    angular
        .module('codestack')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$scope'];

    function AboutCtrl($scope) {

        ui.init();
        googleAPI.init();

    }

}());
