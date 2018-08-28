var naviBtn = $('navi2').getElementsByTagName('span')[0];
var navi2Bar = $('navi2').getElementsByTagName('ul')[0];
var searchBtn = $('search').getElementsByTagName('button')[0];
var searchBar = $('search').getElementsByTagName('input')[0];
var allImg = document.getElementsByTagName('img');

for(var i = 0; i<allImg.length; i++){
    (function(i){
        allImg[i].onclick = "return false";
    })(i);
}

naviBtn.onclick = function (event) {
    //阻止冒泡,否则被下面的document监听到会马上变成none
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
    navi2Bar.style.display = 'block';
}

document.onclick = function (event) {
    var event = event || window.event;
    var clickTargetId = event.target.id ? event.target.id : event.srcElement.id;

    if (clickTargetId !== 'navi2') {
        navi2Bar.style.display = 'none';
    }
}

searchBtn.onclick = function(){
    if(searchBar.innerText == null){
        alert('搜索内容不得为空！');
    }
    else{
        alert('嘻嘻~搜索功能尚未完工');
    }
}



