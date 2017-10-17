/**
 * @author wang_szhan
 * @version 1.0.0
 * @createDate 2017-10-12
 * @content 各种类型的弹框
 */
(function() {
	'use strict'

	app.controller('homeListCtrl', function($scope, $http, $stateParams, $ionicPopup, $timeout, toastService, publicService, $ionicActionSheet, $ionicHistory, $ionicModal,jQuerySlide) {
		$scope.componentTitle = $stateParams.componentTitle;
		$scope.componentData = $stateParams.componentData;

		function getData(data) {
			$scope.dataList = data;
		}
		publicService.receiveJson(getData, $scope.componentData);
	})
}())