$.backstretch([
        "images/home1.jpg",
        "images/home2.jpg",
        "images/home3.jpg"
        ], {
        fade: 750,
        duration: 6000
      });
$(function(){$("#portfolio-grid").mixitup({effects:["fade","scale","grayscale"]})}),$(document).ready(function(){$(".tooltips").tooltip({selector:"[data-toggle=tooltip]",container:"body"}),$("ul.scroll-nav a").smoothScroll({easing:"swing",speed:500}),$("#back-top a").smoothScroll({easing:"swing",speed:500}),$("#quote").parallax("50%",.05),$("#pricing-table").parallax("50%",.01),$("#back-top").hide(),$(function(){$(window).scroll(function(){$(this).scrollTop()>100?$("#back-top").fadeIn():$("#back-top").fadeOut()})})}),$(document).ready(function(){function a(a,e){return Math.floor(Math.random()*(e-a+1)+a)}$("#SimpleCaptcha").html([a(1,100),"+",a(1,200),"="].join(" ")),$("#ContactForm").bootstrapValidator({message:"This value is not valid",fields:{YourName:{validators:{notEmpty:{message:"Your name is required and can't be empty"}}},YourEmail:{validators:{notEmpty:{message:"The email address is required and can't be empty"},emailAddress:{message:"The input is not a valid email address"}}},YourWebsite:{validators:{uri:{message:"The input is not a valid URL"}}},YourMessage:{validators:{notEmpty:{message:"Message is required and can't be empty"}}},captcha:{validators:{callback:{message:"Wrong answer",callback:function(a){var e=$("#SimpleCaptcha").html().split(" "),t=parseInt(e[0])+parseInt(e[2]);return a==t}}}}}})});
