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


  $(".top-to-js").click(function () {
    $("body,html").animate({
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //親要素へのイベント伝播を止める
  });

  $('.top-style-js').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 4, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
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
