(function($){

  var exports = {};

  var options = {};

  var nav = function(){
    $('.btn-nav').on('click', function(e){
      $('.nav').toggleClass('is-open');
    });
    $('.btn-nav-item').on('click', function(e){
      var sectionNumber = $(this).data('section');
      $([document.documentElement, document.body]).animate({
          scrollTop: $('.section-' + sectionNumber).offset().top
      }, 2000);
    });
  };

  var btnStart = function(){
    $('.btn-start').on('click', function(e){
      $([document.documentElement, document.body]).animate({
          scrollTop: $('main').offset().top
      }, 2000);
    });
  };

  var btnFinish = function(){
    $('.btn-finish').on('click', function(e){
      $([document.documentElement, document.body]).animate({
          scrollTop: $('header').offset().top
      }, 2000);
    });
  };

  var btnCloseFeedback = function(){
    $('.btn-close-feedback').on('click', function(e){
      $(this).closest('.question-feedback').removeClass('is-open');
    });
  };

  /*var dropdown = function () {
    $('.dropdown-open').on('click', function () {
      $(this).parent().toggleClass('is-active').find('.dropdown-content').slideToggle();
      return false;
    });
  };*/

  var podcast = function(){
    $('.btn-podcast-caption').click(function(e) {
      $(this).closest('.podcast').toggleClass('caption-is-active');
    });
    $('.btn-podcast-video').click(function(e) {
      $(this).closest('.podcast').toggleClass('podcast-video-is-active');
    });
  };

  var init = function(){
    podcast();
    nav();
    btnStart();
    btnFinish();
    btnCloseFeedback();
    //dropdown();
  }();

  return exports;

})(jQuery);

