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

		
	// Scroll suave
		$('nav a[href^="#"]').on('click', function(e) {
			e.preventDefault();
			var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			  
			$('html, body').animate({ 
			  scrollTop: targetOffset
			}, 500);
		  });


	// Trava Scroll se for home
		// $(document).ready(function(){
		// 	if($('body').prop('id')=='logotipo')
		// 	{
		// 		$('html, body').css({
		// 			overflow: 'hidden',
		// 			height: '100%'
		// 		});
		// 	}
		// })

		$('#botaodotopo').click(function(){
			$(this).css('opacity','0')
			$(this).css('cursor','unset')
		})
	

		  
	// Play Video Topo
		$(function() {
			var video = $('#videotopo')[0];
			$('.blocotopo a').click(function(e) {				
				e.preventDefault();
				video.play()

				$('html, body').css({
					overflow: 'auto',
					height: 'auto'					
				});

				$('.blocotopo').addClass('topobg');

				setTimeout(
					function() 
					{ 
						$('.toporodape p').fadeIn('slow');
						$('.toporodape span').fadeIn('slow');
						$('.blocotopo').removeClass('topobg');
					}, 1200);

			});
		});

	// Play Video Grid
		// $(function() {
		// 	var video = $('#videogrid')[0];
		// 	$(video).click(function(e) {				
		// 		e.preventDefault();
		// 		video.play();
		// 	});
		// });



	// Play Grafismos 1
		$(function() {
			// var video = $('#grafismos2')[0];
			var video = $('#grafismos1')[0];
			
			$(video).siblings('.pelicula').click(function(e) {
				e.preventDefault();
				video.play()

				$(this).fadeOut();

				video.addEventListener('ended', function () {
					$(video).siblings('.pelicula').fadeIn();
				},false);

			});
		});

	// Play Grafismos 2
		$(function() {
			// var video = $('#grafismos2')[0];
			var video = $('#grafismos2')[0];
			
			$(video).siblings('.pelicula').click(function(e) {
				e.preventDefault();
				video.play()

				$(this).fadeOut();

				video.addEventListener('ended', function () {
					$(video).siblings('.pelicula').fadeIn();
				  },false);

			});
		});


	// Play Identidade
		$(function() {				
			var video = $('#dna1')[0];
			
			$(video).siblings('.pelicula').click(function(e) {
				e.preventDefault();
				video.play()

				$(this).fadeOut();

				video.addEventListener('ended', function () {
					$(video).siblings('.pelicula').fadeIn();
				},false);

			});
		});

	
	// Play Manifesto 2
		$(function() {				
			var video = $('#dna2')[0];
			
			$(video).siblings('.pelicula').click(function(e) {
				e.preventDefault();
				video.play()

				$(this).fadeOut();

				video.addEventListener('ended', function () {
					$(video).siblings('.pelicula').fadeIn();
				},false);

			});
		});




	// Slider Inspiração
		if ( document.getElementById('dna') ) {

			const slider = document.querySelector('.wrapper-img');
			let isDown = false;
			let startX;
			let scrollLeft;
	
			slider.addEventListener('mousedown', (e) => {
				isDown = true;
				slider.classList.add('active');
				startX = e.pageX - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
			});
			slider.addEventListener('mouseleave', () => {
				isDown = false;
				slider.classList.remove('active');
			});
			slider.addEventListener('mouseup', () => {
				isDown = false;
				slider.classList.remove('active');
			});
			slider.addEventListener('mousemove', (e) => {
				if(!isDown) return;
				e.preventDefault();
				const x = e.pageX - slider.offsetLeft;
				const walk = (x - startX) * 1.6; //scroll-fast
				slider.scrollLeft = scrollLeft - walk;
				// console.log(walk);
			});
			
		}
	




	// Controle do ver mais
		$(document).scroll(function() { 
			if($(window).scrollTop() === 0) {
				$('.toporodape p').fadeIn();
				$('.toporodape span').fadeIn();
			} else {
				$('.toporodape p').fadeOut();
				$('.toporodape span').fadeOut();
			}
		});
		  

	

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

	// Beer Slider		
		window.onload = (function(){
			var altura = $('#beer-slider').height()+'px';
			
			$('.beer-handle').append('<div class="risco"></div>');
			$('.risco').css('height', altura);

			// var inicial = $('.wrapper-slider').attr('inicial');
			// $('.beer-reveal').css('width', inicial)
			// $('.beer-handle').css('left', inicial)

		})

		
		// $(".wrapper-slider").click(function(){		
		// 	var inicial = $(this).attr('inicial');
		// 	var final = $(this).attr('final');

		// 	if ( $(this).attr('estagio') == 'final' ) {					
		// 			$(".beer-handle").animate({left:inicial}, 300)
		// 			$(".beer-reveal").animate({width:inicial}, 300)
		// 			$(this).attr('estagio','inicial');
		// 		} else {
		// 			$(".beer-handle").animate({left:final}, 300)
		// 			$(".beer-reveal").animate({width:final}, 300)
		// 			$(this).attr('estagio','final');
		// 		}
		// })

		

	// Controle de abertura do menu
		document.onload = showMenu();

		function showMenu() {			
			$('.link-abre.active').siblings().fadeIn(200);
		}


		// Accordeon		
		$('.wrapper-acc .box').click(function() {			
			$(this).addClass('ativo');
			$(this).siblings().removeClass('ativo');
		})
		

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



			// Navegacao Menu		
			$('.link-abre').click(function(event) {
							
				event.preventDefault();
				$('.link-abre').removeClass('active')
				$('li').hide();

				$(this).addClass('active');			
				window.location.href = ($(this).attr('href'));
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

					$('.menu').css('height','66px');
					$('nav .links').css('height','0');					
					
					
				} else {
										
					$(this).addClass('MenuAberto');
					$('.links').addClass('LinksAberto');
					
					$('.menu').css('height','100vh');
					$('nav .links').css('height','100vh');
					
				}
			});

			$('nav li a').click(function(){
				$('.menu').css('height','66px');
			})
			

			$('#topo a').click(function(){				
				$(this).fadeOut();
				$('.rodapemobile').fadeOut();
				$('.blocotopo').css('height','385px')
				$('.blocotopo').css('margin-top','40px')
				$('#topo').css('z-index','0');
			})

			

			

		}
	// :Funções executadas apenas na versão Mobile

	// Executando versionamentos
		if(WidthDevice <= 900) { MobileVersion(); } else { DesktopVersion(); }
	// FadeIn da página após o carregamento.
		$('body').fadeIn(1000);
	// ScrollTop
		// $('html, body').animate({scrollTop: '0px'}, 600);


});
		