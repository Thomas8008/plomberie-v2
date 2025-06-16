  $('.gallery-items').click(function() {
        const src = $(this).find('img').attr('src');
        $('#img01').attr('src', src);
        $('#myModal').css('display', 'flex');
      });

      $('.close').click(function() {
        $('#myModal').hide();
      });

      $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
          $('#myModal').hide();
        }
      });
    




