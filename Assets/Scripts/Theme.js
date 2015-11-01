//Theme.js
jQuery(document).ready(function($) {

	//Diyalog Kutularını Gizler
	$('div.dialog').hide();

	//Son Slider'ın Margin-Right Değerini Sıfırla
	$('aside.slider>.inner>img:last').css( 'margin-right', '0' );

	//Son Subinfo List İteminin Margin Left ve Right Değerini Sıfırlar
	$('.subinfo li:last').css('margin', '0');

	//Slider Olayları
	var toplam_img = $('.slider>.inner>img').length;

	var veri_sayisi = 8;

	var sayfa_sayisi = Math.round( toplam_img / veri_sayisi );

	$('.slider>.inner>img:gt('+ (veri_sayisi-1) +')').animate({marginTop:'-170px'}, 0);

	for ( var i = 1; i <= sayfa_sayisi; i++ ) {
	
		$('.slider>.buttons').append('<button class="slider-button"></button> ');

	}

	//Slider Buton Tıklama İşlemi
	$('.slider-button').live('click', function() {
		
		var indis = $(this).index() + 1;

		var gt = veri_sayisi * indis;

		$('.slider>.inner>img').animate({marginTop:'-170px'}, 500);


		for ( i = gt - veri_sayisi; i < gt; i++ ) {
			$('.slider>.inner>img:eq('+ i  +')').animate({marginTop:'0'}, 500);
		}

		$('.slider-button').removeClass( 'active' );
		$(this).addClass( 'active' );

	});

	$('.slider>.buttons>button:first').addClass('active');
	//Slider Olayları Sonu

	$('div.sidebar>ul.inner').sortable({
		handle: $('li.block>div.header'),
		axis: 'y'
	});

});