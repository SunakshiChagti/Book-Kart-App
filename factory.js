bookKartApp.factory("bookService", function () {

	var books = [
		{
			bookName: "Data Structure",
			bookprice: 200,
			bookImage: "ds.jpg",
			bookDescription: "Data Structure book for B.tech holders",
			bookRating: 4
		},
		{
			bookName: "OOPS",
			bookprice: 200,
			bookImage: "ds.jpg",
			bookDescription: "Object Oriented Programming",
			bookRating: 4
		}

	];
	return {
		getBooks: function () {
			return books;
		}
	}
});

bookKartApp.factory("kartService", function () {

	var kart = [];

	return {
		getKart: function () {
			return kart;
		},
		addToKart: function (books) {
			kart.push(books);
		},
		buy: function () {
			console.log("Thanks for buying");
		}
	}
});
