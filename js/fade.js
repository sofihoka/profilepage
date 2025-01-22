$(window).scroll(function() {
    //ウィンドウの高さを取得
    var windowH = $(window).height(),
    //スクロール位置を取得
    scrollY = $(window).scrollTop();
     
    $('.fade,.slidein,.fade-list,.move-img,.blur').each(function() {
        var thisPosition = $(this).offset().top;
        var thisHeight = $(this).height();
        if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
            $(this).addClass('effect');
        }
        //else{$(this).removeClass('effect') ;}
    });
});

//ページタイトルは読み込み時に.effect付与
$(document).ready(function(){
    $('.autoplay').addClass('effect');
});