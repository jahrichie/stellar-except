

jQuery(document).ready(function ($) {

    $(".slideto4").click(function() {
      // alert("Handler for .click() called.");
      $('a.simulateclick4').trigger('click');
    });

    $(".slideto5").click(function() {
      // alert("Handler for .click() called.");
      $('a.simulateclick').trigger('click');
    });

    $(".slideto5postcards").click(function() {
       // alert("Handler for .click() called.");
      $('a.simulateclick').trigger('click');
      $('.postcardcheck').prop('checked', true);
    });

    $(".slideto5stickers").click(function() {
      // alert("Handler for .click() called.");
      $('a.simulateclick').trigger('click');
      $('.stickercheck').prop('checked', true);
    });


    $(".slideto5partner").click(function() {
      // alert("Handler for .click() called.");
      $('a.simulateclick').trigger('click');
      $('.stickermap').prop('checked', true);
    });

  // $(':checkbox').iphoneStyle({
  //   checkedLabel: 'YES',
  //   uncheckedLabel: 'NO'
  // });



    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };


     $( "#accordion" ).accordion({
          // active: "active",  
           icons: icons,      
          // collapsible: true,
          header: "h3",
          heightStyle: "content"
        });    


         

     $("a.learn-video-popup").click(function() {
        // $("#followVideo").hide("slide", { direction: "left" }, 1000);

        $.fancybox({
                'padding'       : 0,
                'autoScale'     : false,
                'transitionIn'  : 'none',
                'transitionOut' : 'none',
                'title'         : this.title,
                'width'     : 680,
                'height'        : 495,
                'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type'          : 'swf',
                'swf'           : {
                     'wmode'        : 'transparent',
                    'allowfullscreen'   : 'true',
                    'autoplay'          : 1
                }
            });

        return false;
    });


    $('[data-behavior~=fademe]').hide();
    $('[data-behavior~=fademe]').delay(1000).fadeIn(1000);

    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('[data-behavior~=button]')
    mywindow = $(window);
    htmlbody = $('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        offset = 0
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});








$(function(){
    //conflicting with other fnc keeping it lower
   $('#quotesel').liquidSlider({
      dynamicTabs: false,
      autoSlide:false,
      hoverArrows: false,
      hideSideArrows: false,
      dynamicArrowsGraphical: true,
      dynamicArrowLeftText: "&#171; left",
      dynamicArrowRightText: "right &#187;"

   });

  $('#get-involved-slider').liquidSlider({
    responsive: false,
    autoSlide:false,
    autoHeight:true,
    preloader: false,
    dynamicTabs: true,
    crossLinks: true
  });




});//end  function



$(window).bind("load", function() {
   $(".uiIconText").delay(90000).css('color', 'white');
});

