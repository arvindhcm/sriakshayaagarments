
var $header_top = $('.header-top');
var $nav = $('nav');
 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});
 
$('#fullpage').fullpage({
  sectionsColor: ['#fff', '#ff5757', '#ff8b20', '#ff5757', '#ffd03c', '#63ACE5' ,'#ff5757' ,'#63ACE5','#ff5757' ],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection','thirdSection','thirdSection', 'fourthSection', 'fifthSection' ,'sixthSection','seventhSection'],
  menu: '#menu',
 
  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },
 
  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },
 
});

document.addEventListener("DOMContentLoaded", function(event) {


    for(let i=1; i<14; i++){
      $("#aniimated-thumbnials").append(
        `<a href="img/`+i+`-min.jpg">
        <img src="img/`+i+`-min.jpg" />
        </a>`
      )
    }

    for(let i=14; i<28; i++){
      $("#aniimated-thumbnials2").append(
        `<a href="img/`+i+`-min.jpg">
        <img src="img/`+i+`-min.jpg" />
        </a>`
      )
    }
    for(let i=28; i<40; i++){
      $("#aniimated-thumbnials3").append(
        `<a href="img/`+i+`-min.jpg">
        <img src="img/`+i+`-min.jpg" />
        </a>`
      )
    }


        // your code goes here
        lightGallery(document.getElementById('aniimated-thumbnials'), {
          thumbnail:true
      }); 
  
      // $("html").css("font-size","100%");
      window.dispatchEvent(new Event('resize'));
  
    

}, false);


