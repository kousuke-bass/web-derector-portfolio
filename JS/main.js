$(function(){
  //特定の要素に飛ばす
  const profill =$('.profill').offset().top;
  const skill=$('.skill').offset().top;
  const seisaku =$('.seisaku').offset().top;
  const contacts =$('.contact').offset().top;
  const maind=$('.maind').offset().top;

//格メニュー項目押した時の、処理
$('.header-list li').on('click',function(){
let click=$(this).attr('id');
let remove = $('.header-list,.menu-trigger');
let text = $('.menu-trigger p');

if(click=="profill"){
  $(window).scrollTop(profill);
  $(remove).removeClass('is-active');
  $(text).text('MENU');
}
else if (click=="skill") {
  $(window).scrollTop(skill);
  $(remove).removeClass('is-active');
  $(text).text('MENU');

}
else if (click=="seisaku") {
  $(window).scrollTop(seisaku);
  $(remove).removeClass('is-active');
  $(text).text('MENU');

}
else if (click=="contact") {
  $(window).scrollTop(contacts);
  $(remove).removeClass('is-active');
  $(text).text('MENU');
}
else if (click=="maind") {
  $(window).scrollTop(maind);
  $(remove).removeClass('is-active');
  $(text).text('MENU');
}
});


//ハンバーガーメニュー
$('.menu-trigger').on('click',function(){
  $('.menu-trigger').toggleClass('is-active');
  $('.header-list').toggleClass('is-active');

  let header=$('.menu-trigger').hasClass('is-active');
  if(header){
    $('.menu-trigger p').text('CLOSE');
  }else{
    $('.menu-trigger p').text('MENU');
  }
});

$('.header-list').on('click',function(){
  $('.header-list,.menu-trigger').removeClass('is-active');
  let header=$('.menu-trigger').hasClass('is-active');
  if(header){
    $('.menu-trigger p').text('CLOSE');
  }else{
    $('.menu-trigger p').text('MENU');
  }
});




//コンテンツを表示
$(window).scroll(function (){
  console.log($(this).scrollTop());//スクロールの高さを表示
    $('.fadein').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 300){
          $(this).addClass('active');
        }
    });
});

//ページトップ
 var topBtn = $('#page-top');   
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


  });
