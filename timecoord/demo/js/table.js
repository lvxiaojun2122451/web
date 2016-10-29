/**
 * Created by Administrator on 2016/10/28.
 */
$(function(){

//生成表格对象，jquery创建
    $.fn.Tables = function( options ){
        var
            _this = this,
            id = options.split("~")[1],
            type = options.split("~")[0],
            table = $("#"+id);

        //初始化
        _this.init = function(){
            if( type == "add" ){ //新增
                _this.add();
            }else if( type == "operation"){

            }else{
                return;
            }
        };
        //新增
        _this.add = function(){
            alert(0)
        };

        return _this.init();
    };



//调用统一调用生成表格

$(document).on("click",function( ev ){
    var ev = ev || event,
        nodes = ev.target || ev.srcElement;

    if(typeof( $(nodes).attr("data-Table") ) != "undefined" ){
        var options = $(nodes).attr("data-Table");
        $(nodes).Tables( options )

    };


})


});