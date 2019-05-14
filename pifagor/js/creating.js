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

  /*$(document).on('click', 'input[id^="question_checkbox"]', function (e) {
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
  });*/
if ( $('.question_item').length ) {
/*  var tabItem = $('.question_item');*/
 $('.question_label').on('click', function(event) {
    var textTabContext = $(this).parents('.question_item').find('.question_text');
    $('.question_item').find('.question_text').not(textTabContext).removeClass('question-text_visible');
    textTabContext.toggleClass('question-text_visible');
    
  });
}

if ( $('.price_carousel').length ) {

  $('.price_carousel').slick({
    infinite: false,
   nextArrow: '<button class="slider-btn slider-btn_next" type="button"><span></span></button>',
    prevArrow: '<button class="slider-btn slider-btn_prev" type="button"><span></span></button>',
    useTransform: false
  }); 

}

if ( $('.carousel-home').length ) {
  $('.carousel-home').slick({
   nextArrow: '<button class="slider-btn slider-btn_next" type="button"><span></span></button>',
  prevArrow: '<button class="slider-btn slider-btn_prev" type="button"><span></span></button>',
    centerMode: true,
    
    centerPadding: '17.96875%',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '0',
          slidesToShow: 1
        }
      },
    ]
  });
}
  
if ( $('.news-home-slider').length ) {
  $('.news-home-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
     responsive: [
      {
        breakpoint: 1200,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
        }
      },
    ]

  });
}

if ( $('.sertificate_slider').length ) {
  $('.sertificate_slider').slick({
    slidesToShow: 1,
    nextArrow: '<button class="slider-btn slider-btn_next" type="button"><span></span></button>',
    prevArrow: '<button class="slider-btn slider-btn_prev" type="button"><span></span></button>',
    initialSlide: 2,
  });
}



  

  $('.category_container a').on('click', function(event) {
    event.preventDefault();
    var idTab = $(this).attr('href');
    console.log(idTab);
    $('.category_container a').removeClass('active_category');
    $(this).addClass('active_category');
    $('.news-tab').removeClass('news-tab_visible');
    $(idTab).addClass('news-tab_visible');
  });
});

