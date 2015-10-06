/**
 * @file app.js
 * 
 * @@source_header
 */

'use strict';

(function() {

    /**
     * Define the module and its dependencies
     */
    angular.module('sun', []).
    directive('topBarImage', function() {
        return function(scope, element, attrs) {
            element.css({
                'background-image': 'url(../img/background/forestmorning.jpg)',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            });
        };
    });
    // var app = angular.module('sun', [])
    //     app.controller('topbartime', function ($scope, $filter) {
    //         var date = new Date();
    //         $scope.ddMMyyyy = $filter('date')(new Date(), 'dd/MM/yyyy');
    //         $scope.ddMMMMyyyy = $filter('date')(new Date(), 'dd, MMMM yyyy');
    //         $scope.HHmmss = $filter('date')(new Date(), 'HH:mm:ss');
    //         $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a');
    //     });
}());

// function Ctrl($scope)
// {
//     $scope.date = new Date();
// }