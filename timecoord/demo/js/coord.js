/**
 * Created by Administrator on 2016/10/28.
 */
$(function(){

    //统一调用
    $("#validate").Validate({
        //验证成功
        success : function(){
            alert("验证成功")
        }
    });

    $.fn.Validate.addMethod("phone",function(){


    },"手机格式不对")

})