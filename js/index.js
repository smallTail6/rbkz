$(function () {
    var index = 0;
    var timer = 0;
    timer = setInterval(lunbo, 2000);
    $('.point').on('mouseover', 'a', function () {
        clearInterval(timer);
        index = $(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        position_img();
        timer = setInterval(lunbo, 2000);
    })

    function position_img() {
        $('.lunbo-list li:eq(' + index + ')').siblings().not('.point').css('z-index', '');
        $('.lunbo-list li:eq(' + index + ')').css('z-index', '1');
        
    }

    function lunbo(sort) {
        sort == 'left' ? index-- : index++;
        index = index % $('.lunbo-list li').length;
        position_img();
        $('.point a:eq(' + index + ')').siblings().removeClass('active');
        $('.point a:eq(' + index + ')').addClass('active');
      
    }
    $('.lunbo-list').mouseover(function () {
        clearInterval(timer);
    });
    $('.lunbo-list').mouseout(function () {
        timer = setInterval(lunbo, 2000);
    });
    $('.direction li:first').click(function () {
        lunbo('left');
    })
    $('.direction li:last').click(function () {
        lunbo('right');
    })


    $('.fixed-list').mouseover(function(){
        $('.fixed-list .pack').css('z-index', '99999');
    })
})