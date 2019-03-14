/*global $, console, mixitup, google*/

$(function () {
    
    'use strict';

/*********************************************Start Main Page*********************************************/
    
    var header = $('header');
    
/*Adjust Header Height*/
    
    //Make the header height smaller to be suitable in long devices such in tablets
    
    if ($(window).height() >= 700) {
        
        header.height($(window).height() / 2);
    
    } else {
        
        header.height($(window).height()); //if the device is not so long the header will fill the entire window

    }
    
    //Make the height Adapt If the Window has been resized
    
    $(window).on('resize', function () {

        if ($(window).height() >= 700) {
        
            header.height($(window).height() / 2);

        } else {

            header.height($(window).height());

        }

    });

/*Nice Scroll*/
    
    var navTabs = $('header nav ul li');
    
    navTabs.on('click', function () {
        
        //on click we get the value of attribute(data-nav) of the clicked tab
        
        var dataNav = $(this).data('nav');
        
        //Scroll To Sections by matching the previous data-nav value with the desired section id
        
        $('html, body').animate({

            scrollTop: $('#' + dataNav).offset().top

        }, 1000);
    });
        
/*Centering Banner Vertically In the Header*/
    
    var headerHeight = header.innerHeight(),
        
        banner = $('header .banner'),
        
        navBar = $('header nav'),
        
        bannerHeight = banner.innerHeight(),
        
        navBarHeight = navBar.innerHeight();
    
    banner.css({
        marginTop: ((headerHeight - navBarHeight - bannerHeight) / 2) + 'px'
    });
    
    $(window).on('resize', function () {
        
        var headerHeight = header.innerHeight(),
        
            banner = $('header .banner'),
        
            navBar = $('header nav'),
        
            bannerHeight = banner.innerHeight(),
        
            navBarHeight = navBar.innerHeight();
    
        banner.css({
            marginTop: ((headerHeight - navBarHeight - bannerHeight) / 2) + 'px'
        });
        
    });
    

/*Menu Bars Click*/
    
    //Menu Appears On Bars Click
    
    $('.mobile-nav .menu-bars').on('click', function () {
        
        $('.mobile-nav .overlay').fadeIn(200, function () {
           
            $('.mobile-nav .menu').fadeIn(700);
        });
    });
    
    //Menu Disappers On Overlay Click
    
    $('.mobile-nav .overlay').on('click', function () {
        
        $(this).fadeOut(200);
        
        $('.mobile-nav .menu').fadeOut(300);
    });
    
/*Menu Tabs Change Style On Scroll*/
    
    var sections = $('.page-section'); //Array with all sections
    
    $(window).on('scroll', function () {
        
        var windowTop = $(window).scrollTop(),
            
            windowHeight =  $(window).height(),
           
            windowBottom = windowTop + windowHeight;
        
        sections.each(function () {
            
            var section = $(this),
                
                sectionHeight = section.outerHeight(),
            
                sectionTop = $(this).offset().top,
                
                sectionBottom = sectionTop + sectionHeight;
            
            //If the section is in our viewport the correspnding navTab will be active and others will not
            
            if (sectionTop <= windowBottom && sectionBottom >= windowTop) {
                
                var sectionId = section.attr('id');
                
                $('header ul li[data-nav="' + sectionId + '"]').addClass('active').siblings('li.active').removeClass('active');
                
            }
            
            // To fix home tab as it's not in the condition all the time
            
            if (windowTop === 0) {
                
                $('nav ul li').removeClass('active');
                
                $('nav ul li[data-nav="home"]').addClass('active');
            }
        });
    });
    
/*Testimonils*/
    
    //Avatar overlay Animation appears on hover

    $('.testimonials .item .avatar').hover(function () {
        
        $(this).children('.avatar-overlay').fadeIn(800);
     
    }, function () {
        
        $(this).children('.avatar-overlay').fadeOut(800);
        
    });
    
    //Testimonils Owl Carousel
    
    var testimonialsCarousel = $('.testimonials .owl-carousel');
    
    if (testimonialsCarousel.length) {
        
        testimonialsCarousel.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ['<i class="fas fa-chevron-left medium-rose"></i>', '<i class="fas fa-chevron-right medium-rose"></i>'],
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }
    
/*Products Filtering Active Button*/
    
    $('.products .filtering-box button').on('click', function () {
       
        $(this).siblings('button').removeClass('active');
        
        $(this).addClass('active');
    });
    
        
/*Trigger MixItUp Shuffle Library to Filter Products*/
    
    var shuffle = $('.shuffle');

    if (shuffle.length) {

        var mixer = mixitup('.shuffle');
    }
        
/*Offers Order Now Button Scroll To Products*/
    
    var offerButton = $('.offers .offer-button');
    
    if (offerButton) { //Check If The Button Exists
        
        offerButton.on('click', function () {
            
            $('html, body').animate({
               
                scrollTop: $('#products').offset().top
                
            }, 2000);
        });
    }
/*Contact Label Animate on Input Focus in and out*/
    
    $('.contact form .input-field input, .contact form .input-field textarea').on({
        
        focusin: function () {
            
            $(this).siblings('label').animate({
                
                top: -20 + 'px'
                
            }, 100).css('color', '#A7B9AD');
        },
        
        focusout: function () {
                        
            if (!$(this).val().length > 0) {
                
                $(this).siblings('label').animate({
                
                    top: 5 + 'px'
                    
                }, 100).css('color', '#C5D3C2');
            }
            
        }
    });

/*Adjust Map Height to match contact form height in the small devices*/
    
    $('.contact .map').height($('.contact form').outerHeight());
    
    $(window).on('resize', function () {
        
        $('.contact .map').height($('.contact form').outerHeight());
    });
    
/*To Up Button*/
    
    var upButton = $('.up');
    
    //Fade In and Out
    
    $(window).on('scroll', function () {
               
        if ($(window).scrollTop() > 526) {
        
            upButton.fadeIn();
        
        } else {

            upButton.fadeOut();
        }
    });
    
    //Scroll To Top
    
    upButton.on('click', function () {
      
        $('html ,body').animate({
            
            scrollTop: 0
            
        }, 1000);
        
    });


/*********************************************End Main Page*********************************************/
    
/*********************************************Start Product Page*********************************************/
    
/*Scroll To Site Map on navBar sitemap tap click*/
    
    $('nav ul li.sitemap').click(function () {
        
        $('html, body').animate({
           
            scrollTop: $('footer').offset().top
        });
    });
    
/*********************************************End Product Page*********************************************/

/*********************************************Start Check Out Page*********************************************/
    
/*Redirect To Home Page On Logo Click*/
    
    $('nav .logo').on('click', function () {
       
        $(location).attr('href', 'index.html');
    });


/*Check Out Form*/
    
    var itemPrice = $('.check-out-details form .item-price .price').text(),
        
        itemsAvailable = $('.check-out-details form .items-available .available').text(),
        
        finalCheck = $('.check-out-details form .final-check'),
        
        select = $('select');
            

/* Add Items amount Options */
    
    var x;
    
    for (x = 1; x <= itemsAvailable; x = x + 1) {
        
        var option = document.createElement('option'),
           
            optionValue = option.setAttribute('value', x);
           
        option.innerHTML = x;
        
        select.append(option);
    }
    
/*Check Out Final Check*/
    select.on('change', function () {
        
        var amount = $('select option:selected').val();
        
        finalCheck.text(itemPrice * amount + '$');
  
    });

/*Remove Placeholder on input click*/
    
    var placeholderValue;
    
    $('.check-out-details form .field input').on({
        
        focusin: function () {
            
            placeholderValue = $(this).attr('placeholder');
            
            $(this).attr('placeholder', '');
            
        },
        
        focusout: function () {
            
            if ($(this).val().length === 0) {
                
                $(this).attr('placeholder', placeholderValue);
            }
        }
    });

/*Some Form Validation*/
    
    //Validate name field is filled
    
    $('#name').on('input', function () {
       
        var name = $(this).val();
        
        if (name) {
            
            $(this).siblings('i').removeClass('invalid').addClass('valid');
            
        } else {
            
            $(this).siblings('i').removeClass('valid').addClass('invalid');
        }
        
    });
    
    //Validate Phone field is filled
    
    var phone;
    
    $('#phone').on({
        
        input: function () {
       
            phone = $(this).val();
                                
            if (!phone.match(/[0-9]/)) {
                 
                $(this).val('');
                
            }

            if (phone.length === 11) { /*I am Using the Egyptian mobile phone numbers format with 11 characters but you can change this number later or add any other format*/

                $(this).siblings('i').removeClass('invalid').addClass('valid');

            }
        },
        
        focusout: function () {
            
            if (phone.length < 11) {
               
                $(this).siblings('i').removeClass('valid').addClass('invalid');
            }
            
        }
        
    });
    
    //Validate Adress field is filled
    
    $('#adress').on('input', function () {
       
        var adress = $(this).val();
        
        if (adress) {
            
            $(this).siblings('i').removeClass('invalid').addClass('valid');
            
        } else {
            
            $(this).siblings('i').removeClass('valid').addClass('invalid');
        }
        
    });
    
     //Validate Date and Time field is filled
    
    $('#date').on('input', function () {
       
        var date = $(this).val();
        
        if (date) {
            
            $(this).siblings('i').removeClass('invalid').addClass('valid');
            
        } else {
            
            $(this).siblings('i').removeClass('valid').addClass('invalid');
        }
        
    });
    
    //Validate The date that the customer can not enter previous dates
    
        //getting user date and Time
    
    var theDate = new Date(),
        
        today = theDate.getDate(),
        
        month = theDate.getMonth(),
        
        year = theDate.getFullYear(),
        
        minutes = theDate.getMinutes(),
        
        hour = theDate.getHours(),
        
        dateInput = $('#date');
    
    dateInput.attr('min', year + '-' + month + '-' + today + 'T' + hour + ':' + minutes);
    
    
    
    
    
    //Validate Submission
    
    var submitButton = $('#submit-button'),
        
        errors;
    
    submitButton.on('click', function (e) {
        
        var valids = $('.check-out-details form .field i');
        
        valids.each(function () {
           
            if ($(this).hasClass('valid')) {
                
                errors = false;
                            
            } else {
                
                errors = true;
                
                e.preventDefault();
                
                $('.error').css({
                    
                    display: 'block'
                    
                });
            }
            
        });
    });
/*********************************************End Check Out Page*********************************************/

});

//Loading fade out and removed when the page is loaded

$(window).on('load', function () {
    
    'use strict';
    
    $('.loading').fadeOut(1000, function () {
       
        $('html, body').css('overflowY', 'visible');
       
        $(this).remove();
    });
});


// Google Maps API

function myMap() {
     
    'use strict';
     
    var mapProp = {
         
            center: new google.maps.LatLng(31.2, 29.82), /*those two value numbers represent your latitude and      longitude you can spot your location from searching google or google maps*/
         
            zoom: 10
        },
     
        map = new google.maps.Map(document.getElementById('map'), mapProp);
}

