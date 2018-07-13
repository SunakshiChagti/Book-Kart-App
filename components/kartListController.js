bookKartApp.controller("KartListController", function ($scope, kartService) {
	$scope.kart = kartService.getKart();

	$scope.buy = function (books) {
		kartService.buy(books);
	}
});
