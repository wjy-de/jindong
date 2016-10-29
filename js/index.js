$(document).ready(function(){
/*banner轮波图*/
/*页面初始化*/
	$(".BCImageBox .li").eq(0).addClass("hot");
	$(".BCImageBox a").eq(0).css("opacity","1")

	var flagBanner=true;
	var t1=setInterval(move,2000);
	var n1=0;
	function move(){
	  n1++;
	  if(n1==$(".BCImageBox a").length){
	    n1=0;
	  }
	  $(".BCImageBox a").each(function(index,obj){
	  	$(this).css("opacity","0");
	  })
		$(".BCImageBox .li").each(function(index,obj){
			$(this).removeClass("hot");
		})
		$(".BCImageBox .li").eq(n1).addClass("hot");
		$(".BCImageBox a").eq(n1).animate({"opacity":"1"},function(){flagBanner=true;})
	}
	function move1(){
	  n1--;
	  if(n1<0){
	    n1=$(".BCImageBox a").length-1;
	  }
	  $(".BCImageBox a").each(function(index,obj){
	  	$(this).css("opacity","0");
	  })
		$(".BCImageBox .li").each(function(index,obj){
			$(this).removeClass("hot");
		})
		$(".BCImageBox .li").eq(n1).addClass("hot");
		$(".BCImageBox a").eq(n1).animate({"opacity":"1"},function(){flagBanner=true;})
	}
	$(".bannerCenter").on({
		mouseover:function(){
			clearInterval(t1);
			$(".BCImageBox").children(".btnL").css("left","0");
			$(".BCImageBox").children(".btnR").css("right","0");
		},
		mouseout:function(){
			t1=setInterval(move,2000);
			$(".BCImageBox").children(".btnL").css("left","-50px");
			$(".BCImageBox").children(".btnR").css("right","-50px");
		}
	})
	$(".BCImageBox .li").each(function(index,obj){
		$(this).on("mouseover",function(){
			var index=$(this).index();
			$(".BCImageBox a").each(function(index1,obj1){$(this).css("opacity","0")});
			$(".BCImageBox .li").each(function(index2,obj2){$(this).removeClass("hot")});
			$(this).addClass("hot");
			$(".BCImageBox a").eq(index).animate({"opacity":"1"},function(){flagBanner=true;})
			n1=index;
		})
	})
	$(".BCImageBox").children(".btnL").click(function(){
		if(flagBanner){
			move1();
			flagBanner=false;
		}
	})
	$(".BCImageBox").children(".btnR").click(function(){
		if(flagBanner){
			move();
			flagBanner=false;
		}
	})
	/*banner轮波图*/

/* 导航选项卡左边*/
  	$(".navigation1L").on({
  		mouseover:function(){
  			$(this).addClass("borderJ");
  			$(this).addClass("colorJ");
  			// $(this).addClass("colorJR");
  			$(".xxk1").css("display","block");
  			$(this).find(".zhe").css("display","block")
  		},
  		mouseout:function(){
  			$(this).removeClass("borderJ");
  			$(this).removeClass("colorJ");
  			// $(this).removeClass("colorJR");
  			$(".xxk1").css("display","none");
  			$(this).find(".zhe").css("display","none")
  		}
  	})
/* 导航选项卡左边*/

/*导航选项卡右边*/
	$(".xxk").each(function(index,obj){
		$(this).on({
			mouseover:function(){
				$(this).addClass("colorJ");
				$(this).children(".xxkBox").css("display","block");
				$(this).children(".zhe1").css("display","block");
				$(this).children(".navP").attr("src","./images/daohang3.png")
			},
			mouseout:function(){
				$(this).removeClass("colorJ");
				$(this).children(".xxkBox").css("display","none");
				$(this).children(".zhe1").css("display","none");
				$(this).children(".navP").attr("src","./images/daohang2.png")
			}
		})
	})
/*导航选项卡右边*/


/*购物车选项卡*/
	$(".logoBox").on({
		mouseover:function(){
			$(this).addClass("lx1");
			$(this).addClass("lx2");
			$(".lixxk").css("display","block");
		},
		mouseout:function(){
			$(this).removeClass("lx1");
			$(this).removeClass("lx2");
			$(".lixxk").css("display","none");
		}
	})
/*购物车选项卡*/


 /*楼层选项卡*/
	$(".floor").each(function(index1,obj1){
		var fRs=$(this ).find(".fR")
		fRs.eq(0).css("display","block")
		var f_list1s=$(this).find(".list1");
		var floor1TTBRs=$(this).find(".floor1TTBR");
		var spans=floor1TTBRs.find("span");
		var f_borders=floor1TTBRs.find(".boders");
		f_borders.eq(0).css("display","block");
		f_list1s.each(function(index2,obj2){
			$(this).on("mouseover",function(){
				fRs.each(function(index3,obj3){
					$(this).css("display","none");
				})
				f_borders.each(function(index4,obj4){
					$(this).css("display","none");
				})
				spans.each(function(index5,obj5){
					$(this).css("display","block");				
				})
				fRs.eq(index2).css("display","block");
				f_borders.eq(index2).css("display","block")
				spans.eq(index2).css("display","none");
				spans.eq(index2-1).css("display","none");
			})
		})
	})
/*楼层选项卡*/

/*楼层轮波图*/
	$(".DwBox").each(function(index,obj){
		var DwImg=$(this).find(".DwImg");
		var btnFL=$(this).find(".btnL");
		var btnFR=$(this).find(".btnR");
		var lunbotuFLi=$(this).find(".lunbotuF").children("li");
		var now=0;
		var next=0;
		var ft=setInterval(moveF,2000);
		lunbotuFLi.eq(0).addClass("lix");
		var fw=$(this).width();
		var flag=true; 
		DwImg.each(function(index1,obj){
			if(index1!=0){
				$(this).css("left",fw+'px')
			}
		})
		function moveF(){
			next++;
			if(next==DwImg.length){
			    next=0;
			}
			DwImg.eq(next).css("left",fw+'px');
			DwImg.eq(now).animate({left:-fw});
			DwImg.eq(next).animate({left:0},function(){
				flag=true;
			});
			lunbotuFLi.eq(now).removeClass("lix");
			lunbotuFLi.eq(next).addClass("lix");
			now=next;
		}
		function moveFL(){
			next--;
			if(next==0){
			    next=DwImg.length-1;
			}
			DwImg.eq(next).css("left",-fw+'px');
			DwImg.eq(now).animate({left:fw});
			DwImg.eq(next).animate({left:0},function(){
				flag=true;
			});
			lunbotuFLi.eq(now).removeClass("lix");
			lunbotuFLi.eq(next).addClass("lix");
			now=next;
		}
		$(this).on({
			mouseover:function(){
				clearInterval(ft);
				btnFL.css("left",0);
				btnFR.css("right",0);
			},
			mouseout:function(){
				ft=setInterval(moveF,2000);
				btnFL.css("left","-30px");
				btnFR.css("right","-30px");
			}
		})
		lunbotuFLi.each(function(index2,obj2){
			var index=$(this).index()
			$(this).on("mouseover",function(){
					if(now>index2){
						DwImg.eq(index).css("left",fw+'px');
						DwImg.eq(now).animate({left:-fw});
						DwImg.eq(index).animate({left:0},function(){
							flag=true;
						});
					}else if(now<index2){
						DwImg.eq(index).css("left",-fw+'px');
						DwImg.eq(now).animate({left:fw});
						DwImg.eq(index).animate({left:0},function(){
							flag=true;
						});
					}
					lunbotuFLi.eq(index).addClass("lix");
					lunbotuFLi.eq(now).removeClass("lix");
					now=index;
					next=now;
			})	
		})
		btnFL.click(function(){
			if(flag){
				moveFL();
				flag=false;
			}
		})
		btnFR.click(function(){
			if(flag){
				moveF()
				flag=false;
			}
		})
	})
/*楼层轮波图*/

/*banner左边选项卡*/
	$(".item").each(function(index,obj){
		$(this).on({
			mouseover:function(){
				$(this).css("background","#f7f7f7");
				$(this).children("i").css("opacity","0");
				$(this).children(".bx").css("display","block");
				$(this).find("h3 a").css("color","#c81623");
				$(this).children(".xdwt").css("display","block");
			},
			mouseout:function(){
				$(this).css("background","#c81623");
				$(this).children("i").css("opacity","1");
				$(this).children(".bx").css("display","none");
				$(this).find("h3 a").css("color","#fff");
				$(this).children(".xdwt").css("display","none");
			}
		})
	})
/*banner左边选项卡*/


/*banner下面轮波*/
	var width=$(".tuijieBoxR").width();
	$(".tuijieBoxRBox").eq(0).css("left","0");
	var nowTu=0;
	var nextTu=0;
	function moveTu(){
		nextTu++;
		if(nextTu>=$(".tuijieBoxRBox").length){
			nextTu=0;
		}
		$(".tuijieBoxRBox").eq(nextTu).css("left",width);
		$(".tuijieBoxRBox").eq(nowTu).animate({"left":-width},500);
		$(".tuijieBoxRBox").eq(nextTu).animate({"left":0},500);
		nowTu=nextTu;
	}
	function moveTuL(){
		nextTu--;
		if(nextTu<0){
			nextTu=$(".tuijieBoxRBox").length-1;
		}
		$(".tuijieBoxRBox").eq(nextTu).css("left",width);
		$(".tuijieBoxRBox").eq(nowTu).animate({"left":-width},500);
		$(".tuijieBoxRBox").eq(nextTu).animate({"left":0},500);
		nowTu=nextTu;
	}
	$(".tuijieBoxR").on({
		mouseover:function(){
			$(this).children(".btnBL").css("left","0")
			$(this).children(".btnBR").css("right","0")
		},
		mouseout:function(){
			$(this).children(".btnBL").css("left","-50px")
			$(this).children(".btnBR").css("right","-50px")
		}
	})
	$(".tuijieBoxR").children(".btnBL").click(function(){
		moveTuL();
	})
	$(".tuijieBoxR").children(".btnBR").click(function(){
		moveTu();
	})
/*banner下面轮波*/

/*楼层跳转*/	
var floor_flag=true;
var now;
$(".floor").each(function(index,obj){
	var h=$(this).offset().top;
	var cHeight=document.documentElement.clientHeight;
	if(floor_flag){
		$(window).scroll(function(){
			var top=$(document).scrollTop();
			if(top>=$(".floor").eq(0).offset().top-400){
				$("#fixL").show();
				var navHeight=$("#fixL").height();
				$("#fixL").css("top",(cHeight-navHeight)/2+'px')
			}else if(top<$(".floor").eq(0).offset().top-400){
				$("#fixL").hide();
			}
			
			if(top>=$(".floor").eq(index).offset().top-200){
				$("#fixL li").each(function(index1,obj){
					// $(this).css("background","#fff");
					$("#fixL .a2").eq(index1).hide();
					$("#fixL .a1").eq(index1).show();

				})
				$("#fixL .a2").eq(index).show();
				$("#fixL .a2").eq(index).css("color","#C81623");
				$("#fixL .a2").css("background","#fff");
				$("#fixL .a1").eq(index).hide();
			}
		})
	}
})
$("#fixL li").each(function(index,obj){
	$(".floor").eq(index).data("h",$(".floor").eq(index).offset().top);
		$("#fixL li").eq(index).click(function(e){
			now=$(this).index();
			floor_flag=false;
			$("body,html").animate({scrollTop:$(".floor").eq(index).offset().top},400,function(){floor_flag=true})
			$(this).children(".a2").css("background-color","#C81623");

		})
		$(this).on({
			mouseover:function(){
				$(this).children(".a1").css("display","none");
				$(this).children(".a2").css("display","block");
				$(this).children(".a2").css("color","#fff");
				$(this).children(".a2").css("background-color","#C81623");
			},
			mouseout:function(){
				$(this).children(".a1").css("display","block");
				$(this).children(".a2").css("display","none");
				$(this).children(".a2").css("background-color","fff");
			}
		})
		
	})

/*猜你喜欢*/
	$(".cai ul").eq(0).css("z-index","10");
	var cNow=0;
	$(".hyp").click(function(){
		cNow++;
		if(cNow>$(".cai ul").length){
			cNow=0;
		}
		$(".cai ul").each(function(index,obj){
			$(this).css("z-index","5");
		})
		$(".cai ul").eq(cNow).css("z-index","10");
	})
	$(".hyp").on({
		mouseover:function(){$(this).css("background-position-y","-29px")
		$(this).css("color","#c81623");
		},
		mouseout:function(){$(this).css("background-position-y","-5px")
		$(this).css("color","#666");}
	})
	$(".caiB").on("mouseover",function(){
		$(this).find(".cai-line").css("right","845px").animate({"right":"-1px"})
	})
/*猜你喜欢*/

/*天天低价节点轮波*/
	var ttdjR_t=setInterval(tRMove,2000);
	var tlH=$(".ttdjR").find("li").eq(0).outerHeight(true);
	$(".ttdjR").find(".tul").css("height",tlH*$(".ttdjR").find("li").length)
	$(".ttdjR").find(".tul").css("top",-tlH)
	function tRMove(){
		var first=$(".ttdjR .tul").first();
		var last=$(".ttdjR .tul").last();
		$(".ttdjR .tul").append(first);
		$(".ttdjR").find(".tul").css("top",-tlH)
		$(".ttdjR").find(".tul").animate({"top":0},600);
	}
/*天天低价节点轮波*/
 
/*天天低价图片动效*/
	$(".ttdjLB-item").each(function(index,obj){
		$(this).on({
			mouseover:function(){
				animate($(".ttdj-img")[index],{"left":"-20"},300);
			},
			mouseout:function(){
				animate($(".ttdj-img")[index],{"left":"0"},300);
			}
		})
	})
/*天天低价图片动效*/

/*右边固定定位*/
	$(".fixR-box1").css("display","block");
	$(".fixR-box").each(function(index,obj){
		$(this).hover(function(){
				$(this).children(".fixR-img").css("background-color","#c81623");
				$(this).children(".fixR-box3").css("display","block");
				$(this).children(".fixR-box3").animate({left:-60},100);
				$(this).children(".fixR-box1").css("display","none");
			},
			function(){
				$(this).children(".fixR-img").css("background-color","#7a6e6e");
				$(this).children(".fixR-box3").animate({left:0},100);
				$(this).children(".fixR-box3").css("display","none");
				$(this).children(".fixR-box1").css("display","block");
			}
		)
	})
/*右边固定定位*/

/*图片点击*/
	$(".a2").click(function(e){
		e.stopPropagation();
		$("#tu").fadeOut();
	})
/*图片点击*/

/*图片懒加载*/
	$(".lazy").lazyload({
			effect:"fadeIn",
			skip_invisible:false
		})

	/*图片懒加载*/

})