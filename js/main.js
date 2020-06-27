
/*--------------------------------------  Menu  ----------------------------------------------*/

$('nav li').hover(
  function() {
	  $('ul', this).stop().slideDown(500);
  },
	function() {
    $('ul', this).stop().slideUp(500);
  }
);
 

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
/*--------------------------------------  datepicker  ----------------------------------------------*/
          $(function() {
            $( "#datepicker" ).datepicker();
            $( "#datepicker" ).datepicker("setDate", "10w+2");
         });
           $(function() {
            $( "#datepicker2" ).datepicker();
            $( "#datepicker2" ).datepicker("setDate", "10w+1");
         });
/*--------------------------------------  Slider  ----------------------------------------------*/
   
         $(function() {
            $( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 2000,
               values: [ 0, 2000 ],
               slide: function( event, ui ) {
                  $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
               }
            });
            $( "#price" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
               " - $" + $( "#slider-3" ).slider( "values", 1 ) );
         });
 /*--------------------------------------  owl-carousel  ----------------------------------------------*/
            $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items:3,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout:3000,
                autoplayHoverPause: true
              });
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              })
            })
      

      