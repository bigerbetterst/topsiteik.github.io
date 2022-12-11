function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    function screen_check(){
    if ($(window).width() >= 1501) { 
      $('.show').css('display', 'none');
    } else {
      $('.show').css('display', '');
    };}

    screen_check();
    $(window).on('resize', function(){
      screen_check();
    });