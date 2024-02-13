// headerのハンバーガーメニュー
$(".l-header__company").click(function () {
    $(".l-header__triangle").toggleClass('hide');
    $(".p-menu").toggleClass('hide');
});
$(".l-header__triangle").click(function () {
    $(this).toggleClass('hide');
    $(".p-menu").toggleClass('hide');
});
$(".l-header__humburgur").click(function () {
    $(this).toggleClass('hide');
    $(".l-header__triangle").toggleClass('hide');
    $(".p-menu").toggleClass('hide');
});
// X押したときメニューを閉じる
$(".sp-menu__close").click(function () {
    $(".sp-menu").removeClass('open');
});
// メニュー押したときメニューを閉じる
$(".sp-menu__item").click(function () {
    $(".sp-menu").removeClass('open');
});