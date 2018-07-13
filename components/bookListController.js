bookKartApp.controller("BookListController", function ($scope, bookService, kartService) {
	$scope.bookList = bookService.getBooks();

	$scope.addToKart = function (books) {
		console.log(books);
		kartService.addToKart(books);
	}
});
