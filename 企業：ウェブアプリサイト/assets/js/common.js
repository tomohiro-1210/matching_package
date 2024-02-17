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

// 検索モーダル出現
$(".p-search__window__button").click(function () {
    $(".p-modal-dashboard").addClass('appear');
});

// 検索モーダル閉じる
$('[ data-closeButton]').click(function () {
    $(".p-modal-dashboard").removeClass('appear');
});

// プロフィール充実依頼モーダル出現
$(".irai-button").click(function () {
    $(".p-modal-profile").addClass('appear');
});

// プロフィール充実依頼モーダル閉じる
$(document).on("click", ".profile-close", function() {
    $(".p-modal-profile").removeClass('appear');
});



// X押したときメニューを閉じる
$(".sp-menu__close").click(function () {
    $(".sp-menu").removeClass('open');
});
// メニュー押したときメニューを閉じる
$(".sp-menu__item").click(function () {
    $(".sp-menu").removeClass('open');
});