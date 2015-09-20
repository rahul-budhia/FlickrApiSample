'use strict';

/**
 * @ngdoc function
 * @name flickrappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrappApp
 */
angular.module('flickrappApp')
  .controller('MainCtrl', function ($scope, flickrService) {
  	//Paging control
  	$scope.currentPage = 1;
  	$scope.maxPages = 1;
  	$scope.numPerPage = 12;
  	$scope.prevPage = function() {
  		($scope.currentPage > 1) ?$scope.currentPage -= 1 : 1;
  		getImages();
  	};
  	$scope.nextPage = function() {
  		($scope.currentPage < $scope.maxPages) ?$scope.currentPage += 1 : $scope.maxPages;
  		getImages();
  	};

  	$scope.search = function() {
  		$scope.currentPage = 1;
  		getImages();
  	};

  	//Fetches images from API
  	function getImages() {
  		flickrService.getImages({text: $scope.query, page: $scope.currentPage, per_page:$scope.numPerPage}, function(res) {
  			console.log("res: ", res);
  			$scope.maxPages = res.photos.pages;
  			$scope.images = res.photos.photo;
  		});
  	};

  	$scope.showExpanded = false;
  	$scope.showExpanded = function(index) {
  		$scope.slideIndex = index;
  		$scope.imgToExpand = $scope.images[index].url_z;
  		$scope.expandedView = true;
  	};
  	$scope.hideExpanded = function() {
  		$scope.expandedView = false;
  	};
    $scope.nextSlide = function() {
      $scope.showExpanded(++$scope.slideIndex)
    };
    $scope.prevSlide = function() {
      $scope.showExpanded(--$scope.slideIndex)
    };
  });
