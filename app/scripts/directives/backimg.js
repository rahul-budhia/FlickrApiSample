'use strict';

/**
 * @ngdoc directive
 * @name flickrappApp.directive:backimg
 * @description
 * # backimg
 */
 angular.module('flickrappApp')
 .directive('backimg', function () {
 	return function(scope, element, attrs){
 		attrs.$observe('backimg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
 	};
 });
