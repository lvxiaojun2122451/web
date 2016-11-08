/**
 * Created by Administrator on 2016/11/8.
 */
$(function(){
/*
* 点击申请计划弹出层
* */
(function(){
    var oBtn = $(".tem_appply"),
        pop = $(".tem_pop");
    oBtn.on("click",function(){
        pop.show();
    })
})();

/*
* 隔行变色
* */

(function(){
    var tem_discoloration = $(".tem_discoloration"),
        tr = tem_discoloration.find("tr");

    tr.each(function(i){

        if(i%2){
            tr.eq(i).addClass("odd")
        }else{
            tr.eq(i).addClass("qdd")
        }
    })
    tr.on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
    })


})();

/*
* 临时航线 tab切换
* */

(function(){
    var headLi = $(".temporary_tabHead>ul>li"),
        bodyLi = $(".temporary_tabBody>ul>li"),
        tab = $(".temporary_tab");

    headLi.on("click",function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");

        if( index == 0 ){
            tab.addClass("tem_type_1").removeClass("tem_type_3")
        }else if( index == 1 ){
            tab.removeClass("tem_type_1 tem_type_3")
        }else if( index==2 ){
            tab.addClass("tem_type_3").removeClass("tem_type_1")
        }

    })
})();
/*
* pop弹出层拖动
* */
( function(){
    var pop = $(".tem_pop"),
        head = $(".tem_pop .pop_head"),
        foot = $(".tem_pop .pop_foot");

    head.find("i").on("click" , function(){
        pop.hide();
    })
    foot.find("a:last").on("click" , function(){
        pop.hide();
    })

    head.on("mousedown",function(ev){
        var ev = ev || event;
        var x = ev.pageX - pop.offset().left,
            y = ev.pageY - pop.offset().top,
            viewH = $(document).outerHeight(),
            thisH = pop.outerHeight();

        $(document).on("mousemove",function(ev){
            var ev = ev || event;
            var targetX = ev.pageX - x;
            var targetY = ev.pageY - y;
            if(targetY <=0 ){
               targetY = 0;
            }else if( (targetY+thisH) >= viewH ){
                targetY = viewH - thisH;
            }

            pop.css({
                margin:0,
                left : targetX,
                top : targetY
            });

        });

        $(document).on("mouseup",function(){
            $(document).off("mousemove mouseup");
        })

        return false;
    })

})();



})