/**
 * Created by Administrator on 2016/10/28.
 */
/*
* 验证的js
* */
$(function(){
    $.fn.Validate = function(options){
        var _this = this,
            parent,
            childrens;

        //配置参数
        _this.settings = {
            id : $("body"),
            text : {
                must : "必填项必填项必填项必填项必填项",
                hour : "四位时分数"
            },
            success : function(){}
        };

        $.extend( _this.settings , options );
        parent = _this.settings.id;
        childrens = parent.find("input[validate_must] , input[validate_aaa] , textarea[validate_must] , textarea[validate_aaa]");

        //初始化
        _this.init = function(){
            //逐个验证
            var controller = true;
            $.each(childrens,function(){
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
                _this.settings.success();
            };

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
            //必填项
            var off;
            if( obj.attr("validate_must") == "true" ){
                off = _this.must(obj);
                if( off == false ){
                    return false;
                };
            //有效期
            }else if( obj.attr("validate_time") == "true" ){//aaa

            }else{
                return;
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
        _this.validity = function(){

        }

        _this.init();
        return this;
    };
});