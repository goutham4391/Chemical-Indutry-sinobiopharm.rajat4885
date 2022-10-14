
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
$(function(){
     
        var winH=$(window).height();
        var winW=$(window).width();
	 
	 
	 //pc端导航部分

        $(document).on('click','.page-nav-btn',function(){
            $('.page-nav-btn').toggleClass('visible_nav');
            $('body').toggleClass('body_nav_phone');
        });

        $(document).on('click','.phone-nav-bg',function(){
            $('.nav_phone_con>ul>li').removeClass('on');
            $('.nav_phone_btn').toggleClass('visible_nav');
            $('body').toggleClass('body_nav_phone');
			$("html,body").css({overflow:"visible"});
        });
		
		if(winW>1050){
			pc_nav();	
		}else{
			$(document).on('click','.page-nav-btn',function(){
				$("html,body").toggleClass('phone_hidden');											
		    });
			$(document).on('click','.page-nav-con ul li>a',function(){
				$(this).parents("li").siblings().find(".navlist").slideUp();												
				$(this).parents("li").find(".navlist").slideDown();											
		    });
			
			
		}



        $(document).on('click','.nav_phone_con>ul>li',function(){
            $(this).addClass('on');
        });
        $(document).on('click','.nav_phone_con>ul>li ul>li:first-child',function(e){
            $('.nav_phone_con>ul>li').removeClass('on');
            e.stopPropagation();
        });
		
        $(document).on('click','.nav_phone_con>ul>li .menu_3',function(e){
            $(this).parents("li").addClass('on');
            e.stopPropagation();
        });
        $(document).on('click','.nav_phone_con>ul>li dl>dd:first-child',function(e){
            $('.nav_phone_con>ul>li ul>li').removeClass('on');
            e.stopPropagation();
        });
	  
    // JavaScript Document
    $(document).ready(function () {
        $(window).scroll(function(){
            if($(this).scrollTop()>0){
                $('body').addClass('scrollHeader');
            }else{
                $('body').removeClass('scrollHeader'); 
            }
        });
		
		
    });
    //end
	
	
	//二级导航跳转
	var _hash_a = location.hash.substring(1);
	go_hash(_hash_a);
	
	function go_hash(_hash) {
		var nrnavHeight = $('.page-header').height();
		if(_hash=="submenu"){
			roll = Math.floor($('.page-current-nav').offset().top - nrnavHeight);
			//console.log($('.page-current-nav').offset().top);
			$('html , body').animate({
				scrollTop: roll
			},0);
		}

	}	
	
	//三级导航跳转
	var _hash_a2 = location.hash.substring(1);
	go_hash2(_hash_a2);
	
	function go_hash2(_hash) {
		var nrnavHeight = $('.page-header').height();
		if(_hash=="threemenu"){
			roll2 = Math.floor($('.er-page-key').offset().top - nrnavHeight);
			//console.log($('.er-page-key').offset().top);
			$('html , body').animate({
				scrollTop: roll2
			},0);
		}

	}	
	
	
	
	
    //分享
    var title_2 = encodeURIComponent("生物制药");
	
	
    $(".ft-share .bshare-sinaminiblog").click(function () {//新浪微博
        var url = window.location.href;
        var img = ""
        var title = document.title;
        var op = "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(url) + "&title=" + title + "&searchPic=" + img + ""
        window.open(op)
    })
	
	

    $(".weixin_but").click(function () {//微信
        var url = $(this).attr("data-qrcode")
        //alert(url)
        var title = ""
        title += "<div class='weixin'>"
        title += "<i class='c'>x</i>"
        title += "<h2>二维码</h2>"
        title += "<div class='img'><img src='" + url + "' width='100px;' height='100px;'></div>"
        title += "<p>扫一扫</p>"
        title += "</div>"
        $("body").remove(".weixin");
        $("body").append(title)
        //var op="http://service.weibo.com/share/share.html?url='"+ url +"'&title='"+ title +"'&searchPic=false"
        //window.open(op)
    })
    $(document).on("click", ".weixin .c", function () {
        //alert(0)
        $(".weixin").remove();
    })
        //
	
	
	
	
    //return_top
	$(window).scroll(function(){
		if($(window).scrollTop() > 10){
			$(".page-back-top").fadeIn("slow");
		}else{
			$(".page-back-top").fadeOut("slow");
		};
	});
	$(".page-back-top").click(function(){
		$("html,body").animate({scrollTop:"0px"}, 500);
	});
	
	
	$(document).on("mouseenter", ".page-header .page-language a", function () {
		//$(this).addClass("on").siblings().removeClass("on");															  
	})
	
	
	
	 //搜索展开
	if(winW>750){
		$(document).on("mouseenter", ".page-header .hd-search", function () {
			$(this).addClass("open");
		});
		$(document).on("mouseleave", ".page-header .hd-search", function () {
			$(this).removeClass("open");
		});
	}else{
			
		   // 搜索
	   $(".search_box .sear_but").click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			if ($(".search_wrap").hasClass("on")) {
				$(".search_wrap,.sear_but").removeClass("on");
			} else {
				$(".search_wrap,.sear_but").addClass("on");
			}
	
		})
		$(".search_wrap .sear").click(function (e) {
			e.preventDefault();
			e.stopPropagation();
	
		})
	
		$(document).click(function(){           
			$(".search_wrap").removeClass("on");
		})
		// 搜索
		
	}
	
	
    //	
    //公共选项卡切换
    $(document).on("click", ".tab-box .tab-a", function () {
        $(this).addClass("on").siblings().removeClass("on");
        var ii = $(this).index();		
        $(this).parents(".tab-box").find(".tab-b").eq(ii).show().siblings().hide();
    })
    //
    $(".tab-box").each(function (i) {
        $(this).find(".tab-a:eq(0)").addClass("on");
		$(this).find(".tab-b").eq(0).show().siblings().hide();
    });	
	
		
		
	/*图片转背景*/
	// $(".bg_container img").each(function () {
	// 	$(this).parents(".bg_container").css("background-image", "url(" + $(this).attr("src") + ")");
	// });
    $(".bg_container").each(function () {
        var img = $(this).find("img").attr("src")
        $(this).css("background-image", "url('" + img + "')");
    });
		
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true
        });
        wow.init();
    };
	

})


function pc_nav(){
    $('.page-header .page-nav-con>ul>li .navlist').fadeOut(0);
    $('.page-header .page-nav-con>ul>li').each(function(){
        //if ($(this).find('li').length>0) {
            $(this).mouseover(function() {
				var i = $(this).index()-1;					   
                $(this).find('.navlist').stop(true,true).delay(200).slideDown(200);
                $(this).siblings().find('.navlist').slideUp(200);
				
            });
        //}

    });
    $('.page-header').mouseleave(function(){
        $('.page-header .navlist').slideUp(300);
    })
}




var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('Safari') > -1; //android终端
//isAndroid=true;
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end))
        } else { return ""; }
    } else { return ""; }
}
/*Cookie*/
if (getCookie("submenuclick")!="") {
    if (parseInt(getCookie("submenuclick"))> 0) {
        $("html").scrollTop(parseInt(getCookie("submenuclick")));
        setCookie("submenuclick", 0);
    }
} else {
    setCookie("submenuclick", 0);
}
	
/*二级菜单滚动位置 及 点击时卷去高度计算*/
if ($(".submenu").length > 0) {
    $(window).on("resize", function () {
        var w = $('.submenu_con').width();
        if (w < $(".submenu ul").width()) {
            var l=$(".submenu").find(".current").position().left,sl = $('.submenu_con').scrollLeft();
            if (l < sl || l + $(".submenu").find(".current").width() -sl > w) {
                $('.submenu_con').scrollLeft(l); 
            }
        } 
    }).trigger("resize");
    $(".submenu a").on("click", function () {
        if ($(this).attr("href").indexOf("http") != 0 && $(this).attr("href").indexOf("javascript") != 0 ){
            setCookie("submenuclick", $(window).scrollTop());
        }
    });
}

/*三级菜单点击时卷去高度计算*/
if ($(".threemenu").length > 0) {
    $(".threemenu a").on("click", function () {
        if ($(this).attr("href").indexOf("http") != 0 && $(this).attr("href").indexOf("javascript") != 0) {
            setCookie("submenuclick", $(window).scrollTop());
        }
    });
}

