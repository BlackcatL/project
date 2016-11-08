var arr = [{
    title:"标题1",
    img:"images/xinliceliangzhe_1.jpg",
    style:'类别1'
},{
    title:"标题2",
    img:"images/xinliceliangzhe_2.jpg",
    style:"类别2"
},{
    title:"标题3",
    img:"images/xinliceliangzhe_3.jpg",
    style:"类别3"
},{
    title:"标题4",
    img:"images/xinliceliangzhe_4.jpg",
    style:"类别4"
}];

/*----------------------------------------- banner -----------------------------------------*/
function begin(arr) {
    arr.push(arr[0]);
    arr.unshift(arr[arr.length - 2]);

    var banner = $("#banner");

    /* 在 banner 中创建 ul */
    var ul = $('<ul/>');
    banner.append(ul);
    ul.addClass("banner_kuang");
    /*-- 设置 ul 的宽度为 n 张图片的总和 --*/
    ul.css({
        width:banner.width() * arr.length + 'px'
    });
    /*-- //设置 ul 的宽度为 n 张图片的总和 --*/
    /* //在 banner 中创建 ul */

    /* 在 ul 中创建 li，li 的个数为 arr 的个数 */
    for (var i = 0; i < arr.length; i++) {
        var li = $("<li/>");
        var img = $("<img/>")
        img.attr({src:arr[i].img});
        li.append(img);
        ul.append(li);
        for (var q = 0; q < arr.length; q++) {
            var title_1 = $("<div />");
            title_1.addClass("annv_1");
            li.append(title_1);
            title_1.text(arr[q].title);
        };
    };
    return banner;
};

/* 让 ul 动起来 */
function move(banner) {
    var off = banner.children("ul").position().left;
    var timer = setInterval(function () {
        off -= banner.width();
        banner.children("ul").animate({
            left:off
        }, 1000,function () {
            /*-- 判断：如果 ul 移动到最后，则从头开始 --*/
            if(off == -(banner.children("ul").width() - banner.width())){
                console.log('iii');
                banner.children("ul").css("left",-banner.width());
                off = -banner.width();
            };
            /*-- //判断：如果 ul 移动到最后，则从头开始 --*/
        });
    },3000);
};
/* //让 ul 动起来 */
var a = begin(arr);
move(a);
/*------------------------------------------------------------------------------------------*/
