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