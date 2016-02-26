(function () {

    angular
        .module('codestack')
        .controller('WorkCtrl', WorkCtrl);

    WorkCtrl.$inject = ['$scope'];

    function WorkCtrl($scope) {

        ui.init()
            .setWallpaper('.cover', 'images/work.png');

        googleAPI.init();

    }

}());
