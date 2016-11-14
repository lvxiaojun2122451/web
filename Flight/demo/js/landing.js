/**
 * Created by Administrator on 2016/10/17.
 */
$(function(){
    $("body").css("height" , viewH + "px");//控制视图高度固定
    FMPS.land = {
        bgMove : function(){
            var oBody = $(".landing_body"),
                timer = null,
                distance = 600;
            timer = setInterval(function(){
                distance > -1200 ? distance-- : distance = viewW;
                //oBody.css("backgroundPosition" , distance );
            },100)
        }() ,
        landing : function(){
            var oForm = $("#landing"),
                user = oForm.find("input[name^='user']"),
                password = oForm.find("input[name^='password']"),
                verify = oForm.find("input[name^='verify']"),
                submit = oForm.find("input[name^='submit']"),
                off = false,
                breakOff = false,
                onOff = false;
            user.on("input blur" , function(){
                off = landForm( this );
            });
            password.on("input blur" , function(){
                breakOff = landForm( this );
            });
            verify.on("input blur" , function(){
                onOff = landForm( this  )
            });

            oForm.on("submit" , function(){
                if( off == false || breakOff == false || onOff == false ){
                    return false;
                };
            });
            function landForm( _this ){
                var _this = $(_this);
                if( _this.val() == '' ){
                    _this.siblings("span").css({
                        visibility : "visible" ,
                        color : "#f00"
                    });
                    return false;
                }else{
                    _this.siblings("span").css({
                        visibility : "visible" ,
                        color : "#8BF240"
                    });
                    return true;
                }
            };
        }()
    };




});

