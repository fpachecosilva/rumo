/* 
	Hello, guys!! :)
	JS desenvolvido pela bs.agency em 2020. 

	Façam bom uso :)
*/

jQuery(document).ready(function() {

	// Variáveis:
		var BreakPoint = 1050;
		var WidthDevice = $(window).width();
		var heightDevice = $(window).height();
	// :Variáveis

	// Reload no resize da página:
		var screen = '';
		if (WidthDevice < BreakPoint) {
			screen = 'mobile';
		} else if (WidthDevice > BreakPoint) { 
			screen = 'desktop';
		}

		$(window).resize(function(){
			var cur_width = $(window).width();
			if(cur_width < BreakPoint && screen == 'desktop'){
				location.reload(); 
			} else if(cur_width > BreakPoint && screen == 'mobile'){
				location.reload();
			}
		});
	// :Reload no resize da página

    

	// Decodificando SVG:
		$('img.svg').each(function() {
			var $img = $(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			$.get(imgURL, function(data) { var $svg = $(data).find('svg'); 
			if(typeof imgID !== 'undefined') {$svg = $svg.attr('id', imgID);} 
			if(typeof imgClass !== 'undefined') {$svg = $svg.attr('class', imgClass+' replaced-svg');}$svg = $svg.removeAttr('xmlns:a'); 
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))} $img.replaceWith($svg);}, 'xml');
		});
	// :Decodificando SVG

	// Verificando Android ou IOS:
		function getMobileOperatingSystem() {
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;
			if(/windows phone/i.test(userAgent)) { // Windows Phone
				$('.iOS').remove();
			} else if(/android/i.test(userAgent)) { // Android
				$('.iOS').remove();
			} else if(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) { // iOS
				$('.Android').remove();
			}
		}getMobileOperatingSystem();
	// :Verificando Android ou IOS

	// GoogleMaps:
		// var position = [-23.5538037, -46.5431809];

		// function showGoogleMaps() {
		// 	var latLng = new google.maps.LatLng(position[0], position[1]);		
		// 	var mapOptions = { 
		// 		zoom: 16, 
		// 		streetViewControl: false, 
		// 		scaleControl: false, 
		// 		zoomControl: false, 
		// 		mapTypeId: google.maps.MapTypeId.ROADMAP, center: latLng 
		// 	};
		// 	map = new google.maps.Map(document.getElementById('GoogleMaps'), mapOptions);
		// 	marker = new google.maps.Marker({ position: latLng, map: map, draggable: false, animation: google.maps.Animation.DROP });
		// }

		// google.maps.event.addDomListener(window, 'load', showGoogleMaps);
	// :GoogleMaps

		
		// $('.link-abre').each(function() {
			
		// 	$(this).click(function(event) {
		// 		event.preventDefault();
		// 		$('.link-abre').removeClass('active')
		// 		$('li').hide();

		// 		$(this).addClass('active');
				
				
		// 		if ($(this).hasClass('active')) {					
		// 			$(this).siblings().slideToggle('fast');
					
		// 		} 
				
		// 	})
		// })

		$('.link-abre').click(function(event) {
						
			event.preventDefault();
			$('.link-abre').removeClass('active')
			$('li').hide();

			$(this).addClass('active');				
			
			if ($(this).hasClass('active')) {					
				$(this).siblings().show();				
				
			} 
			
		})
		



	// Funções executadas apenas na versão Desktop:
		function DesktopVersion() {
            
            // $('.nav_home .item').hover(function () {
            //     if($(this).find('.dropdown').hasClass('hide')){                    
            //         $(this).find('.dropdown').removeClass('hide') 
            //     }else{
            //         $(this).find('.dropdown').addClass('hide')
            //     }
            // })

            

		}
	// :Funções executadas apenas na versão Desktop

	// Funções executadas apenas na versão Mobile:
		function MobileVersion() {
			 

		}
	// :Funções executadas apenas na versão Mobile

	// Executando versionamentos
		if(WidthDevice <= 900) { MobileVersion(); } else { DesktopVersion(); }
	// FadeIn da página após o carregamento.
		$('body').fadeIn('slow');
	// ScrollTop
		// $('html, body').animate({scrollTop: '0px'}, 600);


});
		