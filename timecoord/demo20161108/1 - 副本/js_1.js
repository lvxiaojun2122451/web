/**
 * Created by Administrator on 2016/11/8.
 */
$(function(){
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
})
