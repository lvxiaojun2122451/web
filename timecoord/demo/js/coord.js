/**
 * Created by Administrator on 2016/10/28.
 */
$(function(){

    //统一调用
    $(document).on("click",function( ev ){
        var ev = ev || event,
            nodes = ev.target || ev.srcElement;
        if( $(nodes).attr("validate") == "true" ){
            var id = $("#validate");
            $(nodes).Validate({
                id : id,
                success : function(){

                }
            });
        }else{
            return false;
        }
    })

})