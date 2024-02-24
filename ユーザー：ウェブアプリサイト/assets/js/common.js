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
// サイドバー基本情報出現
$('[data-toggle]').click(function () {
    $(this).next().slideToggle(400);
});

// 検索モーダル出現
$('[data-dashboard]').click(function () {
    $(".p-modal-dashboard").addClass('appear');
});
// 日程調整モーダル出現
$('[data-calendar]').click(function () {
    $(".p-modal-calendar").addClass('appear');
});
// 仕事内容モーダル出現
$('[data-job]').click(function () {
    $(".p-modal-job").addClass('appear');
});
// 内定モーダル出現
$('[data-naitei]').click(function () {
    $(".p-modal-naitei").addClass('appear');
});
// 検索モーダル閉じる
$('[data-closeButton]').click(function () {
    $(".p-modal-dashboard").removeClass('appear');
    $(".p-modal-calendar").removeClass('appear');
    $(".p-modal-job").removeClass('appear');
    $(".p-modal-naitei").removeClass('appear');
});

