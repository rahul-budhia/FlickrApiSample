'use strict';

/**
 * @ngdoc service
 * @name flickrappApp.images
 * @description
 * # images
 * Factory in the flickrappApp.
 */
angular.module('flickrappApp')
	.factory('flickrService', function ($resource) {
		return $resource(
			constants.api.url,
			{},
			//Creates a JSONP request defined as getImages
			{
				getImages: {
					method:'JSONP',
					isArray: false,
					//Default list of query params that will be used unless specified
					params: {
						jsoncallback: 'JSON_CALLBACK',
						method:'flickr.photos.search',
						//URL suffixed with 't' for 'thumbnai', 'z' for 'medium', similarly 'l' for large
						extras: 'count_comments,count_faves,description,realname,url_m,url_z',
						api_key: constants.api.key,
						// per_page:12,
						// page:1,
						// orientation:'square',
						format:'json'
					}
				}
			}
		);
	});
