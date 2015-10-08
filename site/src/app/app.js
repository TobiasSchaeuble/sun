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
    // angular.module('sun', []).
    // directive('topBarImage', function() {
    //     return function(scope, element, attrs) {
    //         element.css({
    //             'background-image': 'url(../img/background/forestmorning.jpg)',
    //             'background-size': 'cover',
    //             'background-repeat': 'no-repeat',
    //             'background-position': 'center center'
    //         });
    //     };
    // });
    var app = angular.module('sun', [])
    app.controller('topbartime', function($scope, $filter) {
        var date = new Date();
        // $scope.ddMMyyyy = $filter('date')(new Date(), 'dd/MM/yyyy');
        // $scope.ddMMMMyyyy = $filter('date')(new Date(), 'dd, MMMM yyyy');
        
$scope.t2 = {};
        $scope.t2.HHmmss = new Date(), 'HH:mm:ss ';
        // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a');

        
var t = function() {
        setTimeout(function() {
            $scope.t2.HHmmss = new Date(), 'HH:mm:ss';
            console.log("timeout");
            console.log($scope.t2.HHmmss);
            t();
        }, 1000);
};
t();

    });
    app.controller('topBarImage', function($scope) {
    	// console.log("topbarImage");
        $scope.x = {
            'background-image': 'url(../img/background/forestmorning.jpg)'
        }
    });
}());

// function Ctrl($scope)
// {
//     $scope.date = new Date();
// }
