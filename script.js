$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
      },
        250, 
        'linear'
      );
    });  
  });

function submitForm() {
  // Get form values
  let name = document.getElementById("Name").value;
  let project = document.getElementById("Project").value;
  let message = document.getElementById("Message").value;
  
  var mailtoLink = "mailto:vishalsale802@gmail.com" + "?subject=Message from " + name + " " + "Regarding "+ project + "&body=" + message;
  window.location.href = mailtoLink;
}