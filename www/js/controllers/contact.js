(function () {

    angular
        .module('codestack')
        .controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = ['$scope'];

    function ContactCtrl($scope) {

        ui.init();

    }

}());
