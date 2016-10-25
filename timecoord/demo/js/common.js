/**
 * Created by Administrator on 2016/10/17.
 */

var FMPS = new Object(),//预先飞行计划系统
    viewH = $(window).outerHeight(),
    viewW = $(window).outerWidth(); // 浏览器高

$(function(){

    FMPS.index = {

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

        }()

    };










});












