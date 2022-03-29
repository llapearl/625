Kakao.init('700fc31d483a5614088956bdb5f2c85d');
$(document).ready(function() {
    
    $(window).on('load', function(){

        $('.area_intro .txt_intro').addClass('on');

        $(window).scroll( function(){
            $('.fade').each( function(i){
                
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_object - 180){
                    $(this).addClass('on')
                }
            });
        });  

    });

    var slideCount = null;
    var $slide_photo = $('.slide_photo')
    var $txt_total = $('.num_total');
	var $txt_now = $('.num_current');

    function setSlideCount() {
        $txt_total.text(slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
        $txt_now.text(currentSlide + 1);
    }

    $slide_photo.on('init', function(event, slick){
        slideCount = slick.slideCount;
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
    });

    $slide_photo.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setCurrentSlideNumber(nextSlide);
    });

    $slide_photo.slick({
        dots: false,
        infinite: true,
        arrows: false
    });
   
    $('.info_bank .link_bank').on('click', function(){
        $(this).parent().toggleClass('on');
        return false;
    });

    $('.link_copy').on('click',function(){
        var text ="";
        text = $(this).parent().find('.num_bank').text();
        $('#clip_target').val(text);
        $('#clip_target').select();

        document.execCommand('copy');
        alert('계좌번호가 복사 되었습니다.: )');
        
        return false;
        
    });

    $('.link_url').on('click',function(){
        var dummy   =  $('#clip_target');
        var text_url    = location.href;
        console.log(text_url);
        
        dummy.val(text_url);
        dummy.select();
        document.execCommand("copy");
        alert('청첩장 url이 복사 되었습니다.: )');
        return false;
    });

});

function shareKakaotalk(){
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '박우진 ♡ 이지우 결혼합니다.',
            description: '11월 13일 일요일 오후 12시 40분\n더파티움 B1 컨벤션홀',
            imageUrl: 'http://www.small-square.com/sample/01/images/preview.jpg',
            link: {
                mobileWebUrl: 'http://www.small-square.com/sample/01/index.html',
                webUrl: 'http://www.small-square.com/sample/01/index.html'
            }
        },
        buttons: [{
                title: '청첩장 보러가기',
                link: {
                    mobileWebUrl: 'http://www.small-square.com/sample/01/index.html',
                    webUrl: 'http://www.small-square.com/sample/01/index.html'
                }
            }
        ]
    });
}