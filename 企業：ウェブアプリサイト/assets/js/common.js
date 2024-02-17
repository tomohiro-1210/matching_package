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
// プロフィール充実依頼モーダル出現
$(".irai-button").click(function () {
    $(".p-modal-profile").addClass('appear');
});
// 検索モーダル閉じる
$('[data-closeButton]').click(function () {
    $(".p-modal-dashboard").removeClass('appear');
    $(".p-modal-profile").removeClass('appear');
});

