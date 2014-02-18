(function($){
	// Variabili
	var body = $('body'),
		first_visit = true, // Prima visualizzazione della pagina nella corrente sessione
		menu_item = $('nav li');

	// nascondo il menu
	menu_item.css({opacity:0});
	// Controllo se si sta visualizzando la pagina ed è la prima visualizzazione
	if( ifvisible.now() && first_visit) {
	    first_visit = false;

	    // visualizzo gli elementi del menù uno alla volta
		var z = 0;
		var refreshId = setInterval(function() {
		menu_item.css({"transition":"all 2s ease"}).eq(z).animate({opacity:100},{duration:1000});
		   z++;
		   if (z > menu_item.length) {
		      clearInterval(refreshId);
		   }
		}, 400);
	}


	// $('.video').tubular({
	// 	// videoId: 'naHPujsBz54',
 //    videoId: 'RE1hG2knyrU',
	// 	ratio: 16/9, // usually either 4/3 or 16/9 -- tweak as needed
	// 	wrapperZIndex: 0,
	// 	mute: true,
	// 	increaseVolumeBy: 10, // increment value; volume range is 1-100
	// 	start: 0 // starting position in seconds
	// }); // where idOfYourVideo is the YouTube ID.
var video = $('.video');
video.css('height', $(this).height());
$(window).on('resize', function() {
  video.css('height', $(this).height());
});

$('.step').appear();
	$('.step').on('appear', function() {
		var current = $(this).data('section');
		console.log(current);
    	$('header').find("[data-section=" + current + "]").addClass('border').parent().siblings().find('a').removeClass('border');
    });

	var win = $(window);
  var sPath=window.location.pathname,
      sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

    if( sPage == "index.php" || sPage == "") {
      win.scroll(function() {
        if ($(this).scrollTop() > win.height()-20) {
            $( "header" ).addClass('dark');
        } else {
            $( "header" ).removeClass('dark');
        }
      })
    } else {
      win.scroll(function() {
        if ($(this).scrollTop() > 60) {
            $( "header" ).addClass('dark');
        } else {
            $( "header" ).removeClass('dark');
        }
      })
    }





    // IMAGES PROFILE
    $('.image_container_1-3').on('mouseenter', function() {
    	// $(this).addClass('large_container').siblings().removeClass('large_container').addClass('small_container');
    	$(this).siblings().addClass('opacity_6');
    }).on('mouseleave', function() {
    	// $(this).removeClass('large_container').siblings().removeClass('small_container');
    	$(this).siblings().removeClass('opacity_6').stop();
    });


    // $('.image_container_1-2').find('.bio').hide();
    // $('.image_container_1-2').on('mouseenter', function() {
    // 	$(this).find('.bio').fadeIn(400);
    // }).on('mouseleave', function() {
    // 	$(this).find('.bio').fadeOut(200);
    // });

    var map;
var landoebadon = new google.maps.LatLng(45.413383, 11.963348);
if ( Modernizr.mq('all and (max-width: 600px)') ) {
  var center_map = new google.maps.LatLng(45.417571, 11.963348);;
} else {
  var center_map = new google.maps.LatLng(45.417571, 11.981029);
  $( "header" ).on('mouseenter', function() {
      $(this).siblings().addClass('blur opacity transition');
    }).on('mouseleave', function() {
      $(this).siblings().removeClass('blur opacity');
    }).on('click', function() {
      $(this).siblings().removeClass('blur opacity');
    });
}

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
  {
    "stylers": [
      { "saturation": -100 },
      { "lightness": 16 }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "lightness": -15 }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "lightness": 28 }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "labels.text",
    "stylers": [
      { "lightness": 30 }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels.text",
    "stylers": [
      { "lightness": 21 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      { "lightness": -15 }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
      { "saturation": 53 },
      { "hue": "#00ff4d" }
    ]
  },{
  }
];

  var mapOptions = {
    zoom: 14,
    center: center_map,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID,
    panControl: false,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true

  };

  map = new google.maps.Map(document.getElementById('map_canvas'),
      mapOptions);

  var contentString = '<div class="info_window"><h3>LANDO E BADON Snc</h3>' +
      '<p>35027 Noventa Padovana (PD)<br>' +
      'Via G. Marconi, 120/A int. 3<br>' +
      'T/F  049 626775<br>' +
      'C.F. / P. IVA 04748380286</p></div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
      position: landoebadon,
      map: map,
      title: 'Uluru (Ayers Rock)'
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  infowindow.open(map,marker);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);

$("nav select").change(function() {
  window.location = $(this).find("option:selected").val();
});


///////////////////
  //  PARALLASSI  ///
  ///////////////////
  //  Per il funzionamento dello script è sufficiente assegnare agli
  //  elementi che devono scrollare due custom data html5:
  //  data-type="vertical_parallax"
  //  data-speed="1"
  //  Impostando data-speed a "1" lo scorrimento sarà alla stessa velocità
  //  della pagina; sono contemplati anche valori negativi o decimali.
  //  es. <div data-type="vertical_parallax" data-speed="2">Ciao Mondo!</div>

  //  Dichiarazione delle variabili
  var win = $(window);
  // Genero l'effetto solo se la larghezza della finestra è superiore a 800px
  // Necessaria l'inclusione di modernizr
  if ( Modernizr.mq('only all and (min-width: 800px)') && !Modernizr.touch)  {
    $('[data-type="vertical_parallax"]').each(function(){

      //  Dichiarazione delle variabili
      var elm = $(this);

      //  Gestione dell'evento on scroll
      win.on('scroll', function() {
        // console.log(elm.offset().top);

        //  Trasformo il valore di "speed"
        var position = -( (win.scrollTop()-elm.offset().top) * elm.data('speed'))/10,

        //  Assemblo la stringa per la proprietà CSS
            vertical_translate = 'translate3d(0,' + position + 'px, 0px)';

        //  Assegno all'elemento la nuova posizione
        elm.css({
            WebkitTransform : vertical_translate,
            MoxTransform : vertical_translate,
            transform : vertical_translate
        });
      }); // Fine Window scroll
    }); // Fine each elements
  } // Fine modernizr


  // SISTEMA DI "TAB"
  // dichiarazione variabili
  var links = $('.tab_menu a'),
      tab = $('.tab_content > div'),
      images =  $('.tab_images > div');

  // nascono tutti gli elementi che non sono il primo
  tab.first().siblings().addClass('hide');
  images.first().siblings().addClass('visibility_hidden');

  // cliccando nei link del menu
  links.click(function( event ) {
    // annulliamo l'azione del click
    event.preventDefault();
    // memorizziamo il target associato al custom attribute data-panel
    var clicked = $(this).data('panel');
    // mostriamo gli elementi associati (classe) e facciamo scomparire gli altri
    tab.filter("."+ clicked).fadeIn().siblings().fadeOut();
    images.filter("."+ clicked).removeClass('visibility_hidden').siblings().addClass('visibility_hidden');
  });


})(jQuery);