var $$ = mdui.JQ;
let initData = () => {
    $$.ajax({
        global: false,
        method: 'GET',
        url: '../data/sx-price.json',
        success: function (data) {
            console.log(data);

        },
        error: function (xhr, textStatus) {
            // xhr 为 XMLHttpRequest 对象
            // textStatus 为包含错误代码的字符串
            mdui.alert(textStatus, "加载失败");
        }
    });
};