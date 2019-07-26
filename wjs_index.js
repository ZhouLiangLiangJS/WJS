$(function () {
    //获取所有的item
    var items=$(".carousel-inner .item");
    $(window).on("resize",function () {
        //1. 获取当前屏幕宽度
        var width=$(window).width();
        //2.判断当前屏幕宽度
        if(width>=768){//说明非移动端
            $(items).each(function (index,value) {
                var item=$(this);
                //当前自定义属性中 储存图片路径
                var imgSrc=item.data("largeImage");
                // console.log(imgSrc);
                //添加非移动端的子元素
                item.html('<a href="javascript:;"class="pcImg"></a>').css("backgroundImage","url("+imgSrc+")")
            })

        }else {
            $(items).each(function (index,value) {
                var item=$(this);
                var imgSrc=item.data("smallImage");
                item.html('<a href="javascript:;"class="mobileImg hidden-sm hidden-lg hidden-md"><img src="'+imgSrc+'" alt="..."></a>')
            });
        }
    }).trigger("resize")
})