$(function(){
    $(window)
    .on('resize', function(){
        var $nav =$('.nav-global');
        var listFloat =$nav.find('li').css('float');
        if(listFloat == 'none') {
            $nav.css('display','none');
    } else {
        $nav.css('display','block');
    }
});

    $('.menubtn > a')
    .on('click',function(){
        $('.nav-global').slideToggle(400);
    });
});

$(function(){
    var intervalId;
    setTimer();
    function setTimer(){
        intervalId=setInterval(autoClick,5000);
    }
    function autoClick(){
        $('.slide').children('a.next').click();
    }
    function changeImage($click){
        //console.log($click);
        var $current = $click.siblings('.container').children('.current');
        var $new;
        var findSelector='';

        if($click.hasClass('next')){
            $new =$current.next();
            findSelector=':first-child';
        }else{
            $new=$current.prev();
            findSelector=':last-child';
        }
        if($new.length == 0){
         $new=$current.siblings(findSelector);
        }
        $current.removeClass('current');
        $new.addClass('current');
        setTimer();
    }
    $('.slide')
    .on('click','> a',function(event){
        event.preventDefault();
        clearInterval(intervalId);
        event.stopPropagation();
        changeImage($(this));
    });
});