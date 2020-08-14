(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(".menu_skills").click(function() {
    $('html,body').animate({
        scrollTop: $(".worked_skills").offset().top},
        'slow');
});
$(".about").click(function() {
    $('html,body').animate({
        scrollTop: $(".about_section").offset().top},
        'slow');
});
$(".graphic").click(function() {
    $('html,body').animate({
        scrollTop: $(".graphic_skills").offset().top},
        'slow');
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

 function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

 function myFun() {
  var dots = document.getElementById("space");
  var moreText = document.getElementById("waste");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
 function myFunf() {
  var dots = document.getElementById("some");
  var moreText = document.getElementById("remain");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

/*$(window).load(function() {
  $(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
})
*/
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });
