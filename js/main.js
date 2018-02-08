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
                
            },
        });
    })
    function toogleBg(el) {
        el.css({"transition":"all .7s"});
        setTimeout(function(){
            el.css({"background-color":"#22c3aa"});
            setTimeout(function(){
                el.css({"transition":"no","background-color":"#4dd0e1"});
            },750);
        },50)
    } 

});
