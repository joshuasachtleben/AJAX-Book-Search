var $searchForm = $('#searchForm');

$searchForm.submit(function (event) {
  event.preventDefault();
  var googleAPI = 'https://www.googleapis.com/books/v1/volumes?';
  var queryData = {
    q: $('#searchText').val()
  };
  var displayBooks = function (response) {
    console.log(response);
    var $content = $(".container");
    var bookList = '<ul class="list-group">';
    $.each(response.items, function (i, book) {
      bookList += '<li class="list-group-item">';
      bookList += '<div class="media">';

      bookList += '<div class="media-left">';
      bookList += '<a href="' + book.volumeInfo.infoLink + '">';
      bookList += '<img class="media-object" src="' + book.volumeInfo.imageLinks.smallThumbnail + '" alt="' + book.volumeInfo.title + '">';
      bookList += '</a>';
      bookList += '</div>';

      bookList += '<div class="media-body">';
      bookList += '<h4 class="media-heading">' + book.volumeInfo.title + '</h4>';
      bookList += book.volumeInfo.description;
      bookList += '</div>';

      bookList += '</div>';
      bookList += '</li>';
    });
    bookList += '</ul>';
    $content.html(bookList);
  };
  $.getJSON(googleAPI, queryData, displayBooks)
});
