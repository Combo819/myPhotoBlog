
window.onload = function () {
    //滚图的样式
    var sliderStyle = [
        //1
        {
            'width': 240,
            'opacity': 0.3,
            'top': 0,
            'left': 150,
            'zIndex': 2
        },
        //2
        {
            'width': 420,
            'opacity': 0.7,
            'top': 120,
            'left': 0,
            'zIndex': 3
        },
        //3
        {
            'width': 600,
            'opacity': 1,
            'top': 200,
            'left': 200,
            'zIndex': 4
        },
        //4
        {
            'width': 420,
            'opacity': 0.7,
            'top': 120,
            'left': 580,
            'zIndex': 3
        },
        //5
        {
            'width': 240,
            'opacity': 0.3,
            'top': 0,
            'left': 610,
            'zIndex': 2
        }
    ];
    var sliderMain = $('slider_main');
    var sliderButton = $('slider_button');
    var btnTimer = null;
    var clientWidth = client().width;
    if (clientWidth <= 768 && clientWidth > 414) {
        sliderStyle = [
            //1
            {
                'width': 120,
                'opacity': 0.3,
                'top': 0,
                'left': 75,
                'zIndex': 2
            },
            //2
            {
                'width': 210,
                'opacity': 0.7,
                'top': 60,
                'left': 0,
                'zIndex': 3
            },
            //3
            {
                'width': 300,
                'opacity': 1,
                'top': 100,
                'left': 100,
                'zIndex': 4
            },
            //4
            {
                'width': 210,
                'opacity': 0.7,
                'top': 60,
                'left': 290,
                'zIndex': 3
            },
            //5
            {
                'width': 120,
                'opacity': 0.3,
                'top': 0,
                'left': 305,
                'zIndex': 2
            }
        ];
        sliderButton.style.display = 'block';
    }
    else if (clientWidth <= 414) {
        sliderStyle = [
            //1
            {
                'width': 60,
                'opacity': 0.3,
                'top': 0,
                'left': 37.5,
                'zIndex': 2
            },
            //2
            {
                'width': 105,
                'opacity': 0.7,
                'top': 30,
                'left': 0,
                'zIndex': 3
            },
            //3
            {
                'width': 150,
                'opacity': 1,
                'top': 50,
                'left': 50,
                'zIndex': 4
            },
            //4
            {
                'width': 105,
                'opacity': 0.7,
                'top': 30,
                'left': 145,
                'zIndex': 3
            },
            //5
            {
                'width': 60,
                'opacity': 0.3,
                'top': 0,
                'left': 152.5,
                'zIndex': 2
            }
        ];
        sliderButton.style.display = 'block';
    }
    for (var i = 0; i < sliderStyle.length; i++) {
        buffer(sliderMain.children[i], sliderStyle[i]);
    }
    sliderMain.onmouseover = function () {
        sliderButton.style.display = 'block';
    }
    sliderButton.onmouseover = function () {
        sliderButton.style.display = 'block';
    }
    sliderMain.onmouseout = function () {
        sliderButton.style.display = 'none';
    }
    sliderButton.onmouseout = function () {
        sliderButton.style.display = 'none';
    }


    setInterval(function () {
        window.onresize = function () {
            clientWidth = client().width;
            if (clientWidth <= 1024) {
                sliderButton.style.display = 'block';
            }
            else if (clientWidth > 1024) {
                sliderMain.onmouseover = function () {
                    sliderButton.style.display = 'block';
                }
                sliderButton.onmouseover = function () {
                    sliderButton.style.display = 'block';
                }
                sliderMain.onmouseout = function () {
                    sliderButton.style.display = 'none';
                }
                sliderButton.onmouseout = function () {
                    sliderButton.style.display = 'none';
                }
            }
            if (clientWidth > 768) {
                sliderStyle = [
                    //1
                    {
                        'width': 240,
                        'opacity': 0.3,
                        'top': 0,
                        'left': 150,
                        'zIndex': 2
                    },
                    //2
                    {
                        'width': 420,
                        'opacity': 0.7,
                        'top': 120,
                        'left': 0,
                        'zIndex': 3
                    },
                    //3
                    {
                        'width': 600,
                        'opacity': 1,
                        'top': 200,
                        'left': 200,
                        'zIndex': 4
                    },
                    //4
                    {
                        'width': 420,
                        'opacity': 0.7,
                        'top': 120,
                        'left': 580,
                        'zIndex': 3
                    },
                    //5
                    {
                        'width': 240,
                        'opacity': 0.3,
                        'top': 0,
                        'left': 610,
                        'zIndex': 2
                    }
                ];
            }
            else if (clientWidth <= 768 && clientWidth > 414) {
                sliderStyle = [
                    //1
                    {
                        'width': 120,
                        'opacity': 0.3,
                        'top': 0,
                        'left': 75,
                        'zIndex': 2
                    },
                    //2
                    {
                        'width': 210,
                        'opacity': 0.7,
                        'top': 60,
                        'left': 0,
                        'zIndex': 3
                    },
                    //3
                    {
                        'width': 300,
                        'opacity': 1,
                        'top': 100,
                        'left': 100,
                        'zIndex': 4
                    },
                    //4
                    {
                        'width': 210,
                        'opacity': 0.7,
                        'top': 60,
                        'left': 290,
                        'zIndex': 3
                    },
                    //5
                    {
                        'width': 120,
                        'opacity': 0.3,
                        'top': 0,
                        'left': 305,
                        'zIndex': 2
                    }
                ];
            }
            else if (clientWidth <= 414 && clientWidth > 375) {
                sliderStyle = [
                    //1
                    {
                        'width': 60,
                        'opacity': 0.3,
                        'top': 0,
                        'left': 37.5,
                        'zIndex': 2
                    },
                    //2
                    {
                        'width': 105,
                        'opacity': 0.7,
                        'top': 30,
                        'left': 0,
                        'zIndex': 3
                    },
                    //3
                    {
                        'width': 150,
                        'opacity': 1,
                        'top': 50,
                        'left': 50,
                        'zIndex': 4
                    },
                    //4
                    {
                        'width': 105,
                        'opacity': 0.7,
                        'top': 30,
                        'left': 145,
                        'zIndex': 3
                    },
                    //5
                    {
                        'width': 60,
                        'opacity': 0.3,
                        'top': 0,
                        'left': 152.5,
                        'zIndex': 2
                    }
                ];
            }
            else if (clientWidth <= 375) {
                sliderStyle = [
                    //1
                    {
                        'width': 60,
                        'opacity': 0.3,
                        'top': 0,
                        'left': 37.5,
                        'zIndex': 2
                    },
                    //2
                    {
                        'width': 105,
                        'opacity': 0.7,
                        'top': 30,
                        'left': 0,
                        'zIndex': 3
                    },
                    //3
                    {
                        'width': 150,
                        'opacity': 1,
                        'top': 50,
                        'left': 50,
                        'zIndex': 4
                    },
                    //4
                    {
                        'width': 105,
                        'opacity': 0.7,
                        'top': 30,
                        'left': 145,
                        'zIndex': 3
                    },
                    //5
                    {
                        'width': 60,
                        'opacity': 0.3,
                        'top': 0,
                        'left': 152.5,
                        'zIndex': 2
                    }
                ];
            }
        }

        for (var i = 0; i < sliderStyle.length; i++) {
            buffer(sliderMain.children[i], sliderStyle[i]);
        }
    }, 400);











    for (var j = 0; j < sliderButton.children.length; j++) {
        var btn = sliderButton.children[j];
        btn.onmousedown = function () {
            if (this.className === 'arrowl') {//必须是this?不能是btn
                sliderStyle.unshift(sliderStyle.pop());
            }
            else {
                sliderStyle.push(sliderStyle.shift());
            }
            for (var i = 0; i < sliderStyle.length; i++) {
                buffer(sliderMain.children[i], sliderStyle[i]);
            }
        }
    }




    var naviBtn = $('navi2').getElementsByTagName('span')[0];
    var navi2Bar = $('navi2').getElementsByTagName('ul')[0];
}
