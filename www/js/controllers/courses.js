(function () {

    angular
        .module('codestack')
        .controller('CoursesCtrl', CoursesCtrl);

    CoursesCtrl.$inject = ['$scope'];

    function CoursesCtrl($scope) {

        ui.init();
        googleAPI.init();

    }

}());
