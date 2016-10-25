/**
 * Created by Administrator on 2016/10/24.
 */
$(function(){
    var FMPS = new Object();

    FMPS.coords = {
        _this : this ,
        init : function(){
            var coord_add = $("#coord_add"),
                table = $("#coord_table");
            this.add( coord_add , table );
        },
        tr : '<td><select><option>N</option><option>D</option><option>C</option><option>R</option> <option>A</option> <option>P</option> <option>Z</option> </select> </td> <td><input class="tt" type="text" placeholder="Example:XY123" /></td> <td><input class="tt" type="text" placeholder="Example:XY234" /></td> <td><input class="tt" type="text" placeholder="Example:01JUL" /></td> <td><input class="tt" type="text" placeholder="Example:30SEP" /></td> <td><input class="tt" type="text" placeholder="Example:1234500" /></td> <td><input class="tt" type="text" placeholder="Example:120319" /></td> <td><input class="tt" type="text" placeholder="Example:CDG" /></td> <td><input class="tt" type="text" placeholder="Example:0700" /></td> <td><input class="tt" type="text" placeholder="Example:0750" /></td> <td><input class="tt" type="text" placeholder="Example:CDG" /></td> <td><input class="tt" type="text" placeholder="Example:JJ" /></td>' ,
        add : function( coord_add , table ){
            var tbody = table.find("tbody"),
                _this = this;
            coord_add.on("click" , function(){
                var html = $("<tr>").html( _this.tr );
                html.appendTo( tbody )
            })
        }
    };


    FMPS.coords.init();
});