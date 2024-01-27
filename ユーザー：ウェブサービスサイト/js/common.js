// headerのハンバーガーメニュー
$(".l-header__humburgur").click(function () {
    $(this).toggleClass('open');
    $(".sp-menu").toggleClass('open');
});
// X押したときメニューを閉じる
$(".sp-menu__close").click(function () {
    $(".sp-menu").removeClass('open');
});
// メニュー押したときメニューを閉じる
$(".sp-menu__item").click(function () {
    $(".sp-menu").removeClass('open');
});
// TOPページスライダー
$('.sp-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
  });