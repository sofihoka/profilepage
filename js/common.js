 jQuery( function() {

 	$(function() {
	    var height=$('#top_hed').outerHeight();
	    $('#sitemap_container').css("padding-top", height);//10pxだけ余裕をもたせる
	    $('#content').css("padding-top", height - 5);//10pxだけ余裕をもたせる
	});

	$("#sp_menu").click(function() {
		$("#g_nav").slideToggle("fast");
		return false;
	 });

	//スムーススクロール
	$(function() {
		var b = $('#top_hed');
		var headerHight = b.height() + 50; //ヘッダの高さ
		$('a[href*="#"]').click(function(){
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
			$("html, body").animate({scrollTop:position}, 550, "swing");
			return false;
		});
	});

	/*ウインドウサイズ変更時のリサイズ*/
	var timer = false;
	$(window).resize(function() {
	    if (timer !== false) {
	        clearTimeout(timer);
	    }
	    timer = setTimeout(function() {
	        console.log('resized');
	        if(window.matchMedia( '(min-width: 960px)' ).matches){

	        	$("#g_nav").css("display","");
	        }
	    }, 100);
	});

	$("#menu-btn").click(function() {
		$(this).toggleClass('open');
		$("#sitemap_container").toggleClass("open");
		$("#sitemap_container").slideToggle("fast");
		return false;
	 });

	$("#gnav ul li").hover(function() {
		$(this).children('.sub-menu').slideToggle();
		return false;
	 });

	var pagetop = $('#fixbtn');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    //header　class付与
	$(window).scroll(function(){
	var height=$('#top_hed').height()+20;
	  if ($(window).scrollTop() > 100) {
	    $('#top_hed').addClass('active');
	    $('#page_up').fadeIn();
	  } else {
	    $('#top_hed').removeClass('active');
	    $('#page_up').fadeOut();
	  }
	});

	/*ウインドウサイズ変更時のリサイズ*/
	var timer = false;
	$(window).resize(function() {
	    if (timer !== false) {
	        clearTimeout(timer);
	    }
	    timer = setTimeout(function() {
	        console.log('resized');
	        $("#menu-btn").removeClass('open');
	        $("#sitemap_container").removeClass('open');
	        $("#sitemap_container").css("display","");
	        if(window.matchMedia( '(min-width: 960px)' ).matches){
	        	$("#sitemap_container").css("display","");
	        }
	    }, 100);
	});

	$('.slick1').slick({
		autoplay: false,
		autoplaySpeed: 4000,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.arroworiginal'),
		prevArrow:'<button type="button" class="slick-prev"><img src="img/recruit/slide_arrow_l.png"></button>',
		nextArrow:'<button type=”button" class="slick-next"><img src="img/recruit/slide_arrow_r.png"></button>',
		responsive: [{
			breakpoint: 980,//切り替えたいデバイス幅を入れる
				settings: {
					slidesToShow: 2,
				}
		},
		{
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                // オプションを追加する場合はここ
            }
        },
		],
 	});
});