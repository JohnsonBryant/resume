//配置
require.config({
    baseUrl: "js",
    paths: {
        "jquery": ["https://cdn.bootcss.com/jquery/1.11.3/jquery", "lib/jquery1.11.3"],
        "fullpage": ["https://cdn.bootcss.com/fullPage.js/2.9.6/jquery.fullpage", "lib/jquery.fullpage"],
        "sub": "app/sub"
    }
})
//调用
require(['jquery','fullpage'], function($ , fullpage){
    $(function(){
        setTimeout(function() {
            $('.loading-animate').fadeOut(1500);
        }, 1000);

        var page = $("#fullpage");
        $('#fullpage').fullpage({
            menu: '#navBar',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
            navigation: false,
            navigationPosition: 'left',
            slidesNavigation: false,
            scrollingSpeed: "1500",
            loopHorizontal: false,
            verticalCentered: false,
            onLeave: function(index, nextIndex, direction){
                toogleBg($(this[0]));
                var nowPage = $(page.children()[nextIndex-1]);
                if(nextIndex === 1){
                    rmAnimate( nowPage, "shake swing");
                    reStartAnimate( nowPage.find("h2.animated"), " shake", 400);
                    reStartAnimate( nowPage.find("p.animated"), " swing", 500);
                } else if (nextIndex === 2){
                    rmAnimate( nowPage, "shake zoomIn");
                    reStartAnimate( nowPage.find("h2.animated"), " shake", 400);
                    reStartAnimate( nowPage.find("li.animated"), " zoomIn", 500);
                } else if (nextIndex === 3){
                    rmAnimate( nowPage, "shake slideInLeft slideInRight");
                    reStartAnimate( nowPage.find("h2.animated"), " shake", 400);
                    reStartAnimate( nowPage.find("ul.animated.rt"), "slideInRight", 500);
                    reStartAnimate( nowPage.find("ul.animated.lt"), "slideInLeft", 500);
                } else if (nextIndex === 4){
                    rmAnimate( nowPage, "shake zoomIn");
                    reStartAnimate( nowPage.find("h2.animated"), " shake", 400);
                    reStartAnimate( nowPage.find("div.animated"), " zoomIn", 500);
                } else if (nextIndex === 5){
                    rmAnimate( nowPage, "shake tada");
                    reStartAnimate( nowPage.find("h2.animated"), " shake", 1000);
                    reStartAnimate( nowPage.find(".animated").not("h2"), " tada", 1000);
                }
            },
            afterLoad: function(anchorLink, index){
                
            }
        });
        //弹出框
        toggleModel( "#viewOnMobile", "#model");
    })
    function rmAnimate(el,expr){
        el.find(".animated").removeClass(expr);
    }
    function reStartAnimate(el, expr, time){
        setTimeout(function(){
            el.addClass(expr);
        },time)
    }
    function toogleBg(el) {
        el.css({"transition":"all .7s"});
        setTimeout(function(){
            el.css({"background-color":"#22c3aa"});
            setTimeout(function(){
                el.css({"transition":"no","background-color":"#4dd0e1"});
            },750);
        },50)
    }
    //定义弹出层函数，param: 必须为id选择器, controllerw为控制按钮，model 为定义的弹出框HTML结构模板 
    function toggleModel( controller, model){
        document.querySelector(controller).addEventListener( 'click', function(){
            $(model).css({"display":"block","transform":"scale(.7)","opacity":".5"});
            setTimeout(function(){
                $(model).css({"transform":"scale(1)","opacity":"1"});
            },100)
        },false);
        document.querySelector(model).addEventListener( 'click', function(){
            $(model).css({"transform":"scale(.7)","opacity":".5"});
            setTimeout(function(){
                $(model).css({"display":"none"});
            }, 1000)
        },false)
    }

});
