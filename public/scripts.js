$(function() {
  $('#title').autocomplete({
    source: function(req, res) {
      var apiUrl = [
        'http://api.themoviedb.org/3/search/movie?query=',
        req.term,
        '&api_key=29b617f2904b69454f3d6a546e4615d8'
      ].join('');

      $.get(apiUrl, function(data){
        res($.map(data.results, function(item) {
          return {
            label: item.title,
            value: item.id
          };
        }));
      });
    },
    minLength: 3,
    select: function(e, ui) {
      $('#title').val(ui.item.label);
      $('input[name=movieid]').val(ui.item.value);
      return false;
    }
  });

  // Mark movie as "watched" on checkbox click
  $('a.watched').on('click', function(e) {
    e.preventDefault();
    var movie = $(this).parents('.movie');
    $.post('/movie/' + $(this).data('id') + '/watched', function(data) {
      movie.fadeOut();
    });
  });
}());
