/**
 * Created by Administrator on 2016/10/26.
 */
/*
* check.js 为验证的js
* */
$(function(){
    jQuery.fn.extend({
        check_ver : function(){
            var required = $(this).check_coorsped();
            if( required ){
                var num = $(this).check_num();
                if( num ){
                    var time = $(this).check_time();
                    if( time ){
                        alert( 0 )
                    }
                }
            }
        } ,
        check_coorsped :function(){ //必填项
            var nodes = $("input[check_ver ^= 'true'] , textarea[check_ver ^= 'true']"),
                val = "",
                _this,
                off = true;
            nodes.each(function(){
                _this = $(this);
                val = _this.val();
                if( val == "" ){
                    coord_addClass( _this )
                    off = false;
                    return false;
                };
            });
            if( off ){
                return true;
            }
        },
        check_num : function(){ //数字匹配项
            var nodes = $("input[check_num ^= 'true']"),
                val = "",
                len = 0,
                j = 0,
                off = true;

            nodes.each(function(){
                val = $(this).val();
                var _this = $(this);
                len = val.length;
                if( len == 7 ){
                    for(var i=0; i<len; i++){
                        var num =  parseInt( val.charAt(i) );
                        j++;
                        if( num == 0 || num == j ){
                            off = true;
                        }else{
                            alert(0)
                            coord_addClass(_this)
                            off = false;
                            return false;
                        }
                    }
                    j = 0;
                }else{
                    coord_addClass(_this)
                    off = false;
                    return false;
                }
            });
            if( off ){
                return true;
            }
        },
        check_time : function(){ //关联项
            var nodes = $("input[check_time ^= 'true']"),
                isAllVal = false
                off = true;
            nodes.each(function(){
                if( $(this).val() == "" ){
                    isAllVal = false;
                }else{
                    isAllVal  = true;
                    return false;
                }
            });

            if( isAllVal ){ //部分有value
                nodes.each(function(){

                    if( nodes.eq(0).val() !="" && nodes.eq(1).val() =="" ){
                        coord_addClass( nodes.eq(1) )
                        off = false;
                        return false;
                    }else if( nodes.eq(0).val() =="" && nodes.eq(1).val() !="" ){
                        coord_addClass( nodes.eq(0) )
                        off = false;
                        return false;
                    }else if( nodes.eq(2).val() !="" && nodes.eq(3).val() =="" ){
                        coord_addClass( nodes.eq(3) )
                        off = false;
                        return false;
                    }else if( nodes.eq(2).val() =="" && nodes.eq(3).val() !="" ){
                        coord_addClass( nodes.eq(2) )
                        off = false;
                        return false;
                    }else{
                        off = true;
                    }
                });
            }else{//全部无value
                coord_addClass( nodes )
                nodes.eq(0).focus();
                off = false;
                return false;
            }

            if( off ){
                return true;
            }

        }
    });

function coord_addClass( nodes ){ //加高亮
    var timer = null;
    nodes.addClass("check_ver").focus();
    clearTimeout( timer )
    timer = setTimeout(function(){
        nodes.removeClass("check_ver")
    },600)
}

})