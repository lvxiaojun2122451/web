/**
 * Created by Administrator on 2016/10/17.
 */

var FMPS = new Object(),//预先飞行计划系统
    viewH = $(window).outerHeight(),
    viewW = $(window).outerWidth(); // 浏览器高
$(function(){

    FMPS.index = {
        //初始化
        init : function(){
            this.loadHTML("coord.html");
            //this.clickLoadHTML();
            this.defaultValue();
        },
        //用户登录菜单
        nav : function(){

            var oNav = $(".nav>li"),
                off = true;
            $(document.body).on("click",function( ev ){
                var ev = ev.target || ev.SrcElement,
                    len = $(ev).parents(".nav").length,
                    _this = null;

                if( off == false && len <= 0 ){
                    $(".nav>li").removeClass("show");
                }

                if( len > 0 ){
                    _this = $(ev).parents(".nav>li");
                    if( _this.hasClass("show") ){
                        $(ev).parents(".nav>li").removeClass("show");
                    }else{
                        $(".nav>li").removeClass("show");
                        $(ev).parents(".nav>li").addClass("show");
                    }
                    off = !off;
                }

            });

        }(),
        //左侧导航功能
        sidebar : function(){
            var sidebar = $(".sidebar"),
                a_toggle = $("#sidebar .a_toggle"),
                min_a_toggle = $(".menu_min .a_toggle"),
                list_li = $(".ul_list>li"),
                shrink = $(".sidebar_foot .shrink"),
                prevH = 0,
                off = true;
            a_toggle.on("click" , aqiToggle1 );
            function aqiToggle1(){
                var li = $(this).parent("li"),
                    ul = $(this).siblings(".ul_list"),
                    currentH = 0,
                    openLi = a_toggle.parent("li.active");

                if( li.hasClass("active") ){
                    li.removeClass("active");
                    ul.stop().animate({
                        height : prevH
                    },300,function(){
                        $(this).hide();
                    });
                }else{
                    openLi.removeClass("active");
                    openLi.children(".ul_list").stop().animate({
                        height : prevH
                    },300,function(){
                        $(this).hide();
                    });
                    li.addClass("active");

                    if( !ul.prop("h") ){
                        ul.prop("h",ul.outerHeight())
                    }
                    currentH = ul.prop("h");
                    ul.show().css("height",prevH).stop().animate({
                        height : currentH
                    },300);
                }
            };

            list_li.on("click" , function(){
                $(".menu_min .sidebar_body>ul>li").removeClass("active");
                $(this).parents("li").first().addClass("open").siblings("li").removeClass("open").find(".ul_list>li").removeClass("active");
                $(this).addClass("active").siblings("li").removeClass("active");
            });
            shrink.on("click" , function(){
                sidebar.find(".ul_list").css({
                    display : "none" ,
                    height : "auto"
                });
                if( off ){
                    a_toggle.off("click" , aqiToggle1 );
                    $(this).addClass("active");
                    sidebar.addClass("menu_min");
                    $("#main_content").css("marginLeft","43px")
                }else{
                    a_toggle.on("click" , aqiToggle1 );
                    $(this).removeClass("active");
                    sidebar.removeClass("menu_min");
                    $("#main_content").css("marginLeft","190px")
                };
                off = !off;
            });

        }(),
        //content加载页面
        loadHTML : function( html ){
            var content = $("#content");
            content.load(html);
        },
        //点击加载相应页面
        clickLoadHTML : function(){
            var _this = this;
            var coordHTML = $(".coordHTML"),
                applyHTML = $(".applyHTML");
            $(document).on("click",function(ev){
                var ev = ev || event,
                    nodes = ev.target || ev.srcElement;

                if( $(nodes).hasClass("coordHTML") ){//加载申请页面
                    _this.loadHTML("coord.html")
                }else if( $(nodes).hasClass("applyHTML") ){//加载查找页面
                    _this.loadHTML("apply.html");
                }else{
                    return;
                }

            })

        },
        //input输入的时候改变DOM的value
        defaultValue : function(){
            $(document).on("input",function(ev){
                var ev = ev || event,
                    nodes = ev.target || ev.srcElement;
                if( nodes.tagName == "INPUT" ||  nodes.tagName == "SELECT" || nodes.tagName == "TEXTAREA"){
                    nodes.defaultValue = nodes.value;
                }else{
                    return false;
                }
            })
        }
    };
    //初始化调用
    FMPS.index.init();








});












