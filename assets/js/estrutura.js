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

		
		// Scroll suave
		$('nav a[href^="#"]').on('click', function(e) {
			e.preventDefault();
			var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			  
			$('html, body').animate({ 
			  scrollTop: targetOffset
			}, 500);
		  });
		  

		// Navegacao Menu		
		$('.link-abre').click(function(event) {
						
			event.preventDefault();
			$('.link-abre').removeClass('active')
			$('li').hide();

			$(this).addClass('active');			
			window.location.href = ($(this).attr('href'));			
		})

		// Muda botao
		$.fn.rotateClass = function(cls1, cls2, cls3) {
			if ($(this).hasClass(cls1)) {
				return $(this).removeClass(cls1).addClass(cls2);

			} else if ($(this).hasClass(cls2)) {
				return $(this).removeClass(cls2).addClass(cls3);

			} else if ($(this).hasClass(cls3)) {
				return $(this).removeClass(cls3).addClass(cls1);
				
			} else {
				return $(this).toggleClass(cls1);
			}
		}	
		
		$('#sessao6').on('click', function(e) {
			$('#mudabotao').rotateClass('estado1', 'estado2', 'estado3').animate();
		});


		// Exercite o tom de voz Sessao3
		$(document).ready( function() {
			
			var total = $('#sessao3 .cima span').length;
			$('#sessao3 #total').text(total);
			var ativo =  $('#sessao3 .dir span.active').index() + 1;
			$('#sessao3 #atual').text(ativo);

			$('#sessao3 .setas .avancar').click( function() {
				
				var ativo =  $('#sessao3 .dir span.active');
				var index = ativo.index();
				var proximo = index+1;
				var anterior = index-2;

				// Controle de opacidade das setas
				if ( proximo + 1 == total ) {
					$(this).addClass('op20');
				}

				if ( proximo + 1 != total ) {
					$('#sessao3 .setas .voltar').removeClass('op20');
				}
				
				// Controle de limites das setas
				if ( proximo == total ) {
					return false;
				} else {

					$('#sessao3 .dir span.active').removeClass('active');
					$('#sessao3 #atual').text(index+2)

					$('#sessao3 .dir span').each(function() {
						if ($(this).index() == proximo ) {
							$(this).addClass('active');						 
						}
					})
				}
			})

			var ativo =  $('#sessao3 .dir span.active').index();

			$('#sessao3 .setas .voltar').click( function() {
				
				var ativo =  $('#sessao3 .dir span.active');
				var index = ativo.index();
				var proximo = index+1;
				var anterior = index-1;

				// Controle de opacidade das setas
				if ( anterior == total - total ) {
					$(this).addClass('op20');
				}

				if ( anterior != total - total ) {
					$('#sessao3 .setas .avancar').removeClass('op20');
				}
				
				// Controle de limites das setas
				if ( anterior == -1 ) {
					return false;
				} else {

					$('#sessao3 .dir span.active').removeClass('active');
					$('#sessao3 #atual').text(index)

					$('#sessao3 .dir span').each(function() {
						if ($(this).index() == anterior ) {
							$(this).addClass('active');						 
						}
					})
				}
			})

			// Controle de cores
			$('#sessao3 .cima').click(function(){
				$('#sessao3 .exercite').removeClass('certo')
				$('#sessao3 .exercite').toggleClass('errado')				
			})

			$('#sessao3 .baixo').click(function(){				
				$('#sessao3 .exercite').removeClass('errado')
				$('#sessao3 .exercite').toggleClass('certo')
			})

			$('#sessao3 .principal').click(function(){
				$('#sessao3 .exercite').removeClass('errado certo')
			})

		})

		// Exercite o tom de voz Sessao5
		$(document).ready( function() {
			
			var total = $('#sessao5 .cima span').length;
			$('#sessao5 #total').text(total);
			var ativo =  $('#sessao5 .dir span.active').index() + 1;
			$('#sessao5 #atual').text(ativo);

			$('#sessao5 .setas .avancar').click( function() {
				
				var ativo =  $('#sessao5 .dir span.active');
				var index = ativo.index();
				var proximo = index+1;
				var anterior = index-2;

				// Controle de opacidade das setas
				if ( proximo + 1 == total ) {
					$(this).addClass('op20');
				}

				if ( proximo + 1 != total ) {
					$('#sessao5 .setas .voltar').removeClass('op20');
				}
				
				// Controle de limites das setas
				if ( proximo == total ) {
					return false;
				} else {

					$('#sessao5 .dir span.active').removeClass('active');
					$('#sessao5 #atual').text(index+2)

					$('#sessao5 .dir span').each(function() {
						if ($(this).index() == proximo ) {
							$(this).addClass('active');						 
						}
					})
				}
			})

			var ativo =  $('#sessao5 .dir span.active').index();

			$('#sessao5 .setas .voltar').click( function() {
				
				var ativo =  $('#sessao5 .dir span.active');
				var index = ativo.index();
				var proximo = index+1;
				var anterior = index-1;

				// Controle de opacidade das setas
				if ( anterior == total - total ) {
					$(this).addClass('op20');
				}

				if ( anterior != total - total ) {
					$('#sessao5 .setas .avancar').removeClass('op20');
				}
				
				// Controle de limites das setas
				if ( anterior == -1 ) {
					return false;
				} else {

					$('#sessao5 .dir span.active').removeClass('active');
					$('#sessao5 #atual').text(index)

					$('#sessao5 .dir span').each(function() {
						if ($(this).index() == anterior ) {
							$(this).addClass('active');						 
						}
					})
				}
			})

			// Controle de cores
			$('#sessao5 .cima').click(function(){
				$('#sessao5 .exercite').removeClass('certo')
				$('#sessao5 .exercite').toggleClass('errado')				
			})

			$('#sessao5 .baixo').click(function(){				
				$('#sessao5 .exercite').removeClass('errado')
				$('#sessao5 .exercite').toggleClass('certo')
			})

			$('#sessao5 .principal').click(function(){
				$('#sessao5 .exercite').removeClass('errado certo')
			})

		})

		// Exercite o tom de voz Sessao7
		$(document).ready( function() {
			
			var total = $('#sessao7 .cima span').length;
			$('#sessao7 #total').text(total);
			var ativo =  $('#sessao7 .dir span.active').index() + 1;
			$('#sessao7 #atual').text(ativo);

			$('#sessao7 .setas .avancar').click( function() {
				
				var ativo =  $('#sessao7 .dir span.active');
				var index = ativo.index();
				var proximo = index+1;
				var anterior = index-2;

				// Controle de opacidade das setas
				if ( proximo + 1 == total ) {
					$(this).addClass('op20');
				}

				if ( proximo + 1 != total ) {
					$('#sessao7 .setas .voltar').removeClass('op20');
				}
				
				// Controle de limites das setas
				if ( proximo == total ) {
					return false;
				} else {

					$('#sessao7 .dir span.active').removeClass('active');
					$('#sessao7 #atual').text(index+2)

					$('#sessao7 .dir span').each(function() {
						if ($(this).index() == proximo ) {
							$(this).addClass('active');						 
						}
					})
				}
			})

			var ativo =  $('#sessao7 .dir span.active').index();

			$('#sessao7 .setas .voltar').click( function() {
				
				var ativo =  $('#sessao7 .dir span.active');
				var index = ativo.index();
				var proximo = index+1;
				var anterior = index-1;

				// Controle de opacidade das setas
				if ( anterior == total - total ) {
					$(this).addClass('op20');
				}

				if ( anterior != total - total ) {
					$('#sessao7 .setas .avancar').removeClass('op20');
				}
				
				// Controle de limites das setas
				if ( anterior == -1 ) {
					return false;
				} else {

					$('#sessao7 .dir span.active').removeClass('active');
					$('#sessao7 #atual').text(index)

					$('#sessao7 .dir span').each(function() {
						if ($(this).index() == anterior ) {
							$(this).addClass('active');						 
						}
					})
				}
			})

			// Controle de cores
			$('#sessao7 .cima').click(function(){
				$('#sessao7 .exercite').removeClass('certo')
				$('#sessao7 .exercite').toggleClass('errado')				
			})

			$('#sessao7 .baixo').click(function(){				
				$('#sessao7 .exercite').removeClass('errado')
				$('#sessao7 .exercite').toggleClass('certo')
			})

			$('#sessao7 .principal').click(function(){
				$('#sessao7 .exercite').removeClass('errado certo')
			})

		})
		

		// Controle de abertura do menu
		document.onload = showMenu();

		function showMenu() {			
			$('.link-abre.active').siblings().fadeIn(200);
		}


	// Funções executadas apenas na versão Desktop:
		function DesktopVersion() {
            
           //Nav Tabs		
			$(document).ready( function() {
				var sizeInitial = $('.nav li.active').width()
				$('.slider-bar').css('width', sizeInitial + 20)
			})	
			
			$('#sessao2 .nav_tabs .nav li').click(function () {				
				var nav = $(this).attr('nav')
				var size = $(this).width();
				var pos = $(this).position().left		
				$('#sessao2 .nav_tabs .tab').removeClass('active')
				$('#sessao2 .nav_tabs .nav li').removeClass('active')
				$(this).addClass('active')
				$('#sessao2 .nav_tabs .tab:eq('+nav+')').addClass('active')
				$('#sessao2 .slider-bar').width(size + 20)
				$('#sessao2 .slider-bar').css('margin-left',pos)	
			})

			$('#sessao4 .nav_tabs .nav li').click(function () {				
				var nav = $(this).attr('nav')
				var size = $(this).width();
				var pos = $(this).position().left		
				$('#sessao4 .nav_tabs .tab').removeClass('active')
				$('#sessao4 .nav_tabs .nav li').removeClass('active')
				$(this).addClass('active')
				$('#sessao4 .nav_tabs .tab:eq('+nav+')').addClass('active')
				$('#sessao4 .slider-bar').width(size + 20)
				$('#sessao4 .slider-bar').css('margin-left',pos)	
			})

			$('#sessao6 .nav_tabs .nav li').click(function () {				
				var nav = $(this).attr('nav')
				var size = $(this).width();
				var pos = $(this).position().left		
				$('#sessao6 .nav_tabs .tab').removeClass('active')
				$('#sessao6 .nav_tabs .nav li').removeClass('active')
				$(this).addClass('active')
				$('#sessao6 .nav_tabs .tab:eq('+nav+')').addClass('active')
				$('#sessao6 .slider-bar').width(size + 20)
				$('#sessao6 .slider-bar').css('margin-left',pos)	
			})
		}
	// :Funções executadas apenas na versão Desktop



	// Funções executadas apenas na versão Mobile:
		function MobileVersion() {
			 
			// Abrir e fechar menu no Mobile
			$('#abrirmenu').click(function() {
				if($(this).hasClass('MenuAberto')) {

					$(this).removeClass('MenuAberto');
					$('.links').removeClass('LinksAberto');
					
					
				} else {
										
					$(this).addClass('MenuAberto');
					$('.links').addClass('LinksAberto');
					
					
				}
			});

		}
	// :Funções executadas apenas na versão Mobile

	// Executando versionamentos
		if(WidthDevice <= 900) { MobileVersion(); } else { DesktopVersion(); }
	// FadeIn da página após o carregamento.
		$('body').fadeIn(1000);
	// ScrollTop
		// $('html, body').animate({scrollTop: '0px'}, 600);


});
		