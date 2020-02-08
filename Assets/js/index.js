//Navbar button click animation starts here----------------------
var x = 1;

$('#navBtn').click(function(){
    if(x == 1){
        $("#content a").toggleClass("kz-animate");
        x++;
    }
    else{
        $("#content a").toggleClass("kz-animate");
        $("#content a").toggleClass("kz-animate-back");
    }

});

//Navbar button click animation ends here------------------

//Middle section background animation starts here----------

$('.kz-col1 .kz-first, .kz-col1 .col').hover(
    function() {
      $('.kz-col1 .kz-bg').addClass('kz-bg-hov');
      $('.kz-col2 .kz-bg').removeClass('kz-bg-hov');
      $('.kz-col3 .kz-bg').removeClass('kz-bg-hov');
    }
);

$('.kz-col2 .kz-first, .kz-col2 .col').hover(
    function() {
      $('.kz-col2 .kz-bg').addClass('kz-bg-hov');
      $('.kz-col1 .kz-bg').removeClass('kz-bg-hov');
      $('.kz-col3 .kz-bg').removeClass('kz-bg-hov');
    }
);

$('.kz-col3 .kz-first, .kz-col3 .col').hover(
    function() {
      $('.kz-col3 .kz-bg').addClass('kz-bg-hov');
      $('.kz-col2 .kz-bg').removeClass('kz-bg-hov');
      $('.kz-col1 .kz-bg').removeClass('kz-bg-hov');
    }
);

$('.kz-mid-sec').hover(
    function(){ },
    function() {
      $('.kz-col1 .kz-bg').removeClass('kz-bg-hov');
      $('.kz-col2 .kz-bg').removeClass('kz-bg-hov');
      $('.kz-col3 .kz-bg').removeClass('kz-bg-hov');
    }
);

//Middle Section background animation ends here----------

//Form starts here---------------------------------------

function restrictAlphabets(e){
  var x=e.which||e.keycode;
  if((x>=48 && x<=57) || x==8 ||
    (x>=35 && x<=40)|| x==46)
    return true;
  else
    return false;
}

//Form ends here-----------------------------------------

//Result images fade effect start here-------------------

var fader = $('.kz-fade');


fader.each(
  function(i, val){
    $(this).hover(function(){
      fader.addClass('fadeOut');
      $(this).removeClass('fadeOut');
    }, function(){
      fader.removeClass('fadeOut');
    });
  }
);

fader.each(
  function(i, val){
    $(this).on('click', function(){
      $('#kz-modal .col').html(`<img src="./Assets/images/result${i+1}.jpg" alt="image"><br><button>CLOSE</button>`);
      $('#kz-modal').removeClass('kz-none');
    })
  }
)

$('#kz-modal .row, #kz-modal .row .col').on('click', function(){
  $('#kz-modal').addClass('kz-none');
})

//Result images fade effect end here---------------------