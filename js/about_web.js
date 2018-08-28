window.onload = function () {
    var floorHeightArr = [0];
    var allFloor = $('explanation_container').children;
    var floorIndex = $('floor_index').getElementsByTagName('li');
    var lastScreen = getLastScreen();
    var isClick;
    var clientWidth = client().width;

    var floorTimer = null;



    for (var i = 0; i < allFloor.length; i++) {
        allFloor[i].offsetTop <= lastScreen ? floorHeightArr.push(allFloor[i].offsetTop) : floorHeightArr.push(lastScreen);//防止最后宽度不够不停地往下
    }

    setInterval(function(){
        lastScreen = getLastScreen();
        for (var i = 0; i < allFloor.length; i++) {           
            allFloor[i].offsetTop <= lastScreen ? floorHeightArr[i + 1] = allFloor[i].offsetTop : floorHeightArr[i + 1]= lastScreen;//防止最后宽度不够不停地往下
        }
    },400)
    for (var j = 0; j < floorIndex.length; j++) {
        (function (j) {
            floorIndex[j].onmousedown = function () {
                isClick = true;
                for (var k = 0; k < floorIndex.length; k++) {
                    floorIndex[k].style.backgroundColor = 'rgb(218, 218, 218)';
                }
                this.style.backgroundColor = 'white';
                buffer(document.documentElement, { 'scrollTop': floorHeightArr[j] }, function () { isClick = false; }) || buffer(document.body, { 'scrollTop': floorHeightArr[j] }, function () { isClick = false; });
            }
        })(j)
    }

    setInterval(function () {
        window.onscroll = function () {
            clearTimeout(floorTimer);

            if (!isClick) {
                var roll = Math.ceil(scroll().top);
                for (var n = 0; n < floorIndex.length; n++) {
                    if (roll >= (floorHeightArr[n])) {
                        for (var m = 0; m < floorIndex.length; m++) {
                            floorIndex[m].style.backgroundColor = 'rgb(218, 218, 218)';
                        }
                        floorIndex[n].style.backgroundColor = 'white';
                    }
                }
            }
            //手机屏幕只有个滚动时电梯条才会出现    
            clientWidth = client().width;
            if (clientWidth <= 414) {
                $('floor_index').style.display = 'block';
                floorTimer = setTimeout(function () {
                    $('floor_index').style.display = 'none';
                }, 2500);

            } else {
                $('floor_index').style.display = 'block';
            }
        }
    }, 400);

}

function getLastScreen() {
    var screenH = window.innerHeight;
    var allH = document.body.clientHeight || document.documentElement.clientHeight;
    return allH - screenH;
}

