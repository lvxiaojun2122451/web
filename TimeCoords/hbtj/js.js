/**
 * Created by Administrator on 2016/10/24.
 */
$(function(){
    var FMPS = new Object();

    FMPS.coords = {
        init : function(){
            this.coord_add = $("#coord_add");
            this.table = $("#coord_table");
            this.coord_takeoff = $("#coord_takeoff");
            this.coord_text = $("#coord_text");

            this.add( this.coord_add , this.table );//新增
            this.input(); //input事件
            this.check(); //验证
        },
        concerned : "",
        route : {} ,
        tr : '<td><select><option>N</option><option>D</option><option>C</option><option>R</option> <option>A</option> <option>P</option> <option>Z</option> </select> </td> <td><input class="tt" type="text" placeholder="XY123" check_ver="true" /></td> <td><input class="tt" type="text" placeholder="XY234" check_ver="true" /></td> <td><input class="tt" type="text" placeholder="01JUL" check_ver="true" /></td> <td><input class="tt" type="text" placeholder="30SEP" check_ver="true" /></td> <td><input class="tt" type="text" placeholder="1234500" check_ver="true" check_num="true" /></td> <td><input class="tt" type="text" placeholder="120319" /></td> <td><input class="tt" type="text" placeholder="CDG" name="coord_relation" check_time="true" /></td> <td><input class="tt" type="text" placeholder="0700" check_time="true" /></td> <td><input class="tt" type="text" placeholder="0750" check_time="true" /></td> <td><input class="tt" type="text" placeholder="CDG" name="coord_relation" check_time="true" /></td> <td><input class="tt" type="text" placeholder="JJ" check_ver="true" /></td>' ,
        add : function( coord_add , table ){
            var tbody = table.find("tbody"),
                _this = this;
            coord_add.on("click" , function(){
                var html = $("<tr>").html( _this.tr );
                html.appendTo( tbody )
            })
        },
        input : function(){
            var _this = this;
            $(document).on("input" , function(ev){
                var ev = ev || event,
                    This = ev.target || ev.srcElement,
                    id = "",
                    rows = 0,
                    cell = 0;

                if( $(This).attr("name") == "coord_relation" ){
                    id = $(This).attr("id")
                    if( id == "coord_takeoff" ){
                        _this.concerned = $(This).val().toUpperCase();
                    }else{
                        rows = $(This).parents("tr").index();  //行
                        cell = $(This).parent("td").index();  //列
                        _this.route[rows] = _this.route[rows] || {};
                        _this.route[rows][cell] = $(This).val().toUpperCase();
                        _this.change(); //修改route值
                    }
                }else{
                    return;
                }

            })
        },
        change : function(){
            var str = "",
                json = this.route;

            for( var attr in json ){
                str += '<p class="ti10">';
                for(var i in json[attr] ){
                    if( i==7 ){
                        str += json[attr][i] + '-'+this.concerned
                    }else{
                        str += '&nbsp;&nbsp;&nbsp;&nbsp;'+this.concerned+'-'+json[attr][i];
                    }
                }
                str += '&nbsp;&nbsp;&nbsp;&nbsp;<select><option>1</option><option>2</option></select></p>'
            }
            this.coord_text.html( str )
        },
        check : function(){
            $(document).on("click" , function(ev){
                var ev = ev || event,
                    This = ev.target || ev.srcElement;

                if( $(This).attr("check") == "true" ){
                    $(this).check_ver();
                }else{
                    return;
                }

            })
        }

    };


    FMPS.coords.init();
});