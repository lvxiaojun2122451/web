/**
 * Created by Administrator on 2016/10/28.
 */

$(function(){
/*
 * 验证的js
 * */
(function($){

    //验证细节
    $.fn.Validate = function(options){
        var _this = this;
        //配置参数
        _this.settings = $.extend({

            //文本
            text :{
                must : "必填项",
                num : "数字",
                phone : "电话号"
            },
            //验证成功以后
            success : function(){}
        },options);

        //元素
        _this.element = {
            //当前提交按钮
            submit : _this.find("*[ validate ^= 'true']")
        };

        //初始化
        _this.init = function(){

            //提交按钮绑定事件
            _this.element.submit.on("click",function(){

                //需要验证的元素
                _this.element['obj'] = _this.find("input[data-Validate]");

                //逐个验证
                var controller = true;
                $.each( _this.element.obj ,function(){
                    var off = _this.verification( $(this) );
                    if( off == false){
                        controller = false;
                        $(this).focus();
                        return false;
                    }else{
                        controller = true;
                    };
                });
                if(controller){
                    _this.settings.success.call(_this);
                };
            });
        };
        //验证弹出层创建
        _this.pop = function(obj ,text){
            var detailsScrollY = $(".details>div").first().scrollTop();
            var text = _this.settings.text[text] || text,
                w = obj.outerWidth(),
                h = obj.outerHeight(),
                x = obj.offset().left,
                y = obj.offset().top;
            var left = w+x+10;
            var top =  y + detailsScrollY;
            var time = null;

            $(".errorMessage").remove();
            var oDiv = $('<div class="errorMessage" style="left: '+left+'px; top: '+top+'px;"></div>').html( text );
            oDiv.appendTo( $("body") );
            clearTimeout(time);
            setTimeout(function(){
                oDiv.fadeOut(function(){
                    $(this).remove();
                    clearTimeout(time);
                });
            },2000)
        }
        //验证
        _this.verification = function( obj ){
            var keyWork = obj.attr("data-Validate").split(","),
                len = keyWork.length,
                off = true;
            $.each( keyWork , function(i){
                if(off == false){
                    return false;
                }
                off = _this[keyWork](obj);
            });
            if(off == false){
                return false;
            }
        };

        //必填
        _this.must = function(obj){
            var val = obj.val();
            if( val=="" || typeof val == "undefiend"){
                _this.pop(obj , "must");
                return false;
            }
        };
        //有效期
        _this.num = function(){

        };
        _this.init();
        return this;
    };

    //给验证添加自定义方法
    $.extend( $.fn.Validate,{
        addMethod : function( name, method, message ){
            var a = new $.fn.Validate();
            console.log(  a )
            method()
        }
    })
})(jQuery);
});