window.onload = function () {
    // 拿到变量
    var text = document.getElementById('text');
    var commentBtn = $('comment_content').getElementsByTagName('button')[0];
    var ul = $('comment').getElementsByTagName('ul')[0];
    var comboContainer = $('combo_container');

    commentBtn.onclick = function () {
        //取得文本框中的内容
        var comment_content = text.value;

        //判断内容是否为空
        if (comment_content.length === 0) {
            alert('输入内容为空！');
            return;
        }

        //判断输入字数是否能被一行容下
        if (getByteLen(comment_content) > 80) {
            alert('输入内容不得多于40个汉字或80个英文字符！');
            return;
        }

        // 创建新的li
        var li = document.createElement('li');

        //将文本赋予新的li
        li.innerHTML = comment_content + '<a>删除</a>';
        comboContainer.style.height = (parseInt(getCssStyle(comboContainer, 'height')) + 40) + 'px';
        //将li放到ul里面
        ul.insertBefore(li, ul.children[0]);

        //清空原本文本框的内容
        text.value = '';

        alert('留言功能未完工，留言仅有你看到，且在退出后自动清空。给我留言请联系：617512696@qq.com');

        /*删除评论*/
        //获得a标签
        var as = document.getElementsByTagName('a');

        //点击后
        for (var i = 0; i < as.length; i++) {
            var a = as[i];
            a.onclick = function () {
                removeNode(this);
                // this.parentNode.remove();
                comboContainer.style.height = (parseInt(getCssStyle(comboContainer, 'height')) - 40) + 'px';
            }
        }
    }

    //计算字符长度
    function getByteLen(str) {
        var len = 0;
        for (var j = 0; j < str.length; j++) {
            if (str.charCodeAt(j) < 0 || str.charCodeAt(j) > 128) {
                len += 2;
            }
            else {
                len++;
            }
        }
        return len;
    }
}

function removeNode(obj) {
    if (isIE() || isIE11()) {
        obj.parentNode.removeNode(true);
    } else {
        obj.parentNode.remove();
    }
}
function isIE() {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}
function isIE11() {
    if ((/Trident\/7\./).test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
} 