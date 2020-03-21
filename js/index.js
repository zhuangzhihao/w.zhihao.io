var $$ = mdui.JQ;
// 刷新按钮
$$('#button_change_image').on('click', function (e, data) {
    var timestamp = new Date().getTime();
    $$('#mdui_card_image').attr('src', '');
    $$('#mdui_card_image').attr('src', 'https://bing.ioliu.cn/v1/rand?t=' + timestamp);
});
// 更换图片
$$('.zhihao-refresh').on('click', function (e, data) {
    location.reload();
});