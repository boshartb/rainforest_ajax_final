$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.getScript('/products?search=' + searchValue);
  });
});

$(document).on('ready page:load', function() {
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      }
    });
  }
});

 // $(document).on('ready page:load', function() {
 //   $(window).scroll(function() {
 //     if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
 //       console.log($('.pagination span.next').children().attr('href'));
 //       $.getScript($('.pagination span.next').children().attr('href'));
 //     }
 //   });
 // });