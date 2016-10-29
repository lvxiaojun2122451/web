/**
 * Created by Administrator on 2016/10/28.
 */
$(function(){

//生成表格对象，jquery创建
    $.fn.Tables = function( options ){
        var _this = this;

        //需要添加的内容
        _this.content = null;

        //配置参数
        _this.settings = {
            options : null ,
            //如果第一个tr里面有input或者select等， 新创建的tr的input，select的value是否继承
            isInheritFocus : true,
            //是否是在table的最下面添加还是在选中的当前行添加
            isLastAdd : true ,
            //回调函数
            callback : function(){}

        };
        $.extend( _this.settings , options );
        var id = _this.settings.options.split("~")[1],
            type = _this.settings.options.split("~")[0],
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
            var obj;
            if( _this.settings.isLastAdd ){ //最后添加
                obj = table.find("tbody>tr:last");
            }else{//当前行后面添加
                obj = _this.parents("tr").first();
            };
            var content = _this.content( obj , _this.settings.isInheritFocus );
            obj.after("<tr>"+content+"</tr>");
        };

        //获取具体tr里面是什么内容
        _this.content = function(){
            var isInheritFocus = arguments[1],
                tr = arguments[0],
                str = "";
            var td = tr.children();
            //如果为真为继承
            if(isInheritFocus){
                str = tr.html();
            }else{//不继承

            }

            return str;
        }

        return _this.init();
    };



//调用统一调用生成表格

$(document).on("click",function( ev ){
    var ev = ev || event,
        nodes = ev.target || ev.srcElement;

    if(typeof( $(nodes).attr("data-Table") ) != "undefined" ){
        var options = $(nodes).attr("data-Table");
        $(nodes).Tables({
            options : options
        })

    };
});


});