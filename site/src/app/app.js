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
    angular.
    module('sun', []).
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


}());

// function Ctrl($scope)
// {
//     $scope.date = new Date();
// }
