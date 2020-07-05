// tabs menu
$('.tab_triger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.tab_content[data-tab="'+ id +'"]');
    
    $('.tab_triger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
    
    $('.tab_content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// event calender
$('.event_triger').click(function() {
    var id = $(this).attr('event-tab'),
        content = $('.event_content[event-tab="'+ id +'"]');
    
    $('.event_triger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
    
    $('.event_content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// navigation
$('.nav_triger').click(function() {
    var id = $(this).attr('nav-tab'),
        content = $('.nav_content[nav-tab="'+ id +'"]');
    
    $('.nav_triger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
    
    $('.nav_content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// game
$('.game_triger').click(function() {
    var id = $(this).attr('game-tab'),
        content = $('.game_content[game-tab="'+ id +'"]');
    
    $('.game_triger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
    
    $('.game_content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// game 2
$('.game2_triger').click(function() {
    var id = $(this).attr('game2-tab'),
        content = $('.game2_content[game2-tab="'+ id +'"]');
    
    $('.game2_triger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2
    
    $('.game2_content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});


$(document).ready(function(){
    $('.slide-1').owlCarousel({
        items: 1,
        dors: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        responsive:{
            0:{
                items: 1,
            }
        }
    });
    $('.slide-2').owlCarousel({
        items: 1,
        dors: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        responsive:{
            0:{
                items: 1,
            }
        }
    });
});


// // active page
var curpath = location.pathname.match(/^\/[^/]+/);
var link = curpath && document.querySelector('nav a[href="' + curpath[0] + '"]');
    if (link) {
    link.className += ' active';
}


// drop-down menu   
//to toggle 
// .indent-content , sticky-show, side-menu-show
$(document).ready(function(){
    $('#side-menu-button').on('click', function(e){
      e.preventDefault();
      $('div.container-fluid').toggleClass('indent-content');
      $('.top-nav-sticky').toggleClass('indent-content');
      $('.top-nav').toggleClass('side-menu-show');
    });
    
    $('.drop-menu-toggle').on('click', function(e){
      e.preventDefault();
      $(this).siblings('ul.subnav').slideToggle(275);
    });
  });

