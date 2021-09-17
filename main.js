/*
선택자.appendTo(부모요소)
- 선택요소의 부모요소 안쪽에서 제일 뒤에 배치

선택자.prependTo(부모요소)
- 선택요소의 부모요소 안쪽에서 제일 앞에 배치

1. next 버튼 클릭
2. .list margin-left -200% -ul 이동
3. 이동 후에 .list css 원상태(-100%)로 변경
4. 맨 앞부분의 li를 뜯어서 제일 뒤로 보냄
*/

const $list = $(".list");
const $imgs = $list.children("li");
const $prev = $(".prev");
const $next = $(".next");

let speed = 1000;
let enableClick = true;
let len = $(".list li").length;
let timer;


$imgs.last().prependTo($list);

$list.css({
    width: 100 * len + "%",
    height: "100%",
    marginLeft: "-100%"
});

$imgs.css({
    width: 100 / len +"%",
    height: "100%",
    float: "left"
});

$prev.on("click", function(e){
    e.preventDefault();

    if(enableClick){
        $list.animate({ marginLeft : "0%" }, speed, function(){
            $list.css({ marginLeft : "-100%" });
            $list.children("li").last().prependTo($list);
            enableClick = true;
        });
        enableClick = false;
    }

});

$next.on("click", function(e){
    e.preventDefault();

    if(enableClick){
        $list.animate({ marginLeft : "-200%" }, speed, function(){
            $list.css({ marginLeft : "-100%" });
            $list.children("li").first().appendTo($list);
            enableClick = true;
        });
        enableClick = false;
    }

});


/*
자동 재생 기능

let timer = setInterval(콜백함수, 시간)

clearInterval(timer);

setInterval(function(){

}, 2000);
*/

//start 버튼 클릭시
$(".start").on("click", function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    timer = setInterval(function(){
        $list.animate({ marginLeft : "-200%" }, speed, function(){
            $list.css({ marginLeft : "-100%" });
            $list.children("li").first().appendTo($list);
        });
    }, 2000);
    
    $(".stop").removeClass("on");
    $(this).addClass("on");
});


//stop 버튼 클릭시
$(".stop").on("click", function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    clearInterval(timer);

    $(".start").removeClass("on");
    $(this).addClass("on");
});




/* DOM 설정 하지 않고

$(".list li").last().prependTo(".list");

$(".list").css({
    width: 100 * len +"%",
    height: "100%",
    marginLeft: "-100%"
});

$(".list li").css({
    width: 100 / len +"%",
    height: "100%",
    float: "left"
});


$(".next").on("click", function(e){
    e.preventDefault();

    if(enableClick){
        $(".list").animate({ marginLeft :  "-200%"}, 1000, function(){
            $(".list").css({ marginLeft : "-100%" });
            $(".list li").first().appendTo(".list");
            enableClick = true;
        });
        enableClick = false;
    }
    
});

$(".prev").on("click", function(e){
    e.preventDefault();

    if(enableClick){
        $(".list").animate({ marginLeft : "0%"}, 1000, function(){
            $(".list").css({ marginLeft : "-100%"});
            $(".list li").last().prependTo(".list");
            enableClick = true;
        });
        enableClick = false;
    }
    
});
*/