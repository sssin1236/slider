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

/*
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