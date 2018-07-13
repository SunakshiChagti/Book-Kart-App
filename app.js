var bookKartApp = angular.module("bookKartApp", ["ngRoute"]);

bookKartApp.config(function ($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "components/bookList.html",
			controller: "BookListController"
		}).when("/kart", {
			templateUrl: "components/kartList.html",
			controller: "KartListController"
		}).otherwise({
			redirectTo: "/books"
		});
});

