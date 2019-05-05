$(document).ready(function () {
  $('.dropdown_category').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.category_of_questions').slideToggle(300);
  });
  $('.dropdown_category').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.category_of_questions').slideUp(300);
  });
  $('.dropdown_category .category_of_questions li').click(function () {
    $(this).parents('.dropdown_category').find('span').text($(this).text());
    $(this).parents('.dropdown_category').find('input').attr('value', $(this).attr('id'));
  });

  $(document).on('click', 'input[id^="question_checkbox"]', function (e) {
    $(':checkbox', $(e.target).closest('div')).change(function () {
      var height_changed = $('.question_text').innerHeight() + $('.question_title').innerHeight();
      var height_default = $('.question_title').innerHeight();
      if (this.checked) {
        $(e.target).closest('div').height(height_changed);

        $('.check_question').not(this).prop({
          checked: false
        });
        $('.check_question').not(this).closest('div').height(height_default);

      } else {
        $(e.target).closest('div').height(height_default);
      }
    });
  });
});
