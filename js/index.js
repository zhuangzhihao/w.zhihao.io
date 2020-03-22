var $$ = mdui.JQ;
// 更换图片
$$('#button_change_image').on('click', function (e, data) {
    var timestamp = new Date().getTime();
    $$('#mdui_card_image').attr('src', '');
    $$('#mdui_card_image').attr('src', 'https://bing.ioliu.cn/v1/rand?t=' + timestamp);
});
// 刷新按钮
$$('.zhihao-refresh').on('click', function (e, data) {
    location.reload();
});