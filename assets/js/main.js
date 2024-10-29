$(function () {

  $(".header__open-btn").click(function () {
    $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".main-menu").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  
  });

  $(".main-menu").click(function () {
    $(".header__open-btn").toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".main-menu").toggleClass("open-menu"); //ナビゲーションにクラスを付与


  });

  $(".main-menu__nav-link").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $(".header__open-btn").removeClass("active"); //ボタンの activeクラスを除去し
 

  });

  $(".main-menu__nav-link").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $(".main-menu").removeClass("open-menu"); //ボタンの activeクラスを除去し
  });


// ヘッダーロゴの動き
  $('.header__logo-wrap').hide();
  // スクロールイベントの設定
  $(window).scroll(function() {
      // .contents-sectionの位置を取得
      var infoSectionTop = $('.contents-section').offset().top;
      // 現在のスクロール位置を取得
      var scrollTop = $(window).scrollTop();

      // スクロール位置が.contents-sectionに達したら
      if (scrollTop >= infoSectionTop) {
          // .header__logo-wrapをふわっと表示
          $('.header__logo-wrap').fadeIn(500);
      }
  });
  


  $(".top-to-js").click(function () {
    $("body,html").animate({
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //親要素へのイベント伝播を止める
  });


  // ページ内リンクヘッダーの高さ
  var headerHeight = 60; // ヘッダーの高さ
  $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });
})
