//获取手机的宽
	var scrWid = window.innerWidth;
	// var scrHei = window.innerHeight;

	// var scrHei1 = document.body.clientHeight;
		var scrHei = document.documentElement.clientHeight;
	// alert("scrHei"+scrHei)
	// alert("scrHei1"+scrHei1)
	// alert("scrHei2"+scrHei2)


//判断手机横竖屏状态：
	function hengshuping(){ 
	  if(window.orientation==180||window.orientation==0){
	  	$(".num_box scroll").css("display","block");
	  	$(".cc").css("display","none");
	  	scrWid = document.body.clientWidth;
		scrHei = window.innerHeight;
			
	   } 
	if(window.orientation==90||window.orientation==-90){ 
	        $(".cc").css("display","block");
	        $(".num_box scroll").css("display","none");
	    } 
	 } 
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false); 	
	
	
	//获取用户设备
	var user = window.navigator.userAgent.toLowerCase();

	var android = user.match(/android/i) == "android";
	var iphone = user.match(/iphone/i) == "iphone";
//	var windows = user.match(/iphone/i) == "windows";
	
	//定义banner的下标
	var index = 0;
	//定义触摸的坐标
	var y_start = 0;
	var y_end = 0;
	var y = 0;
	var x_start = 0;
	var x_end = 0;
	var x = 0;
	var one;//触摸屏幕的手指
	//当前页数
	var yFlag = 0;
	
	//判断设备(移动端)
	if(android || iphone){
		var about_vedio = document.querySelector("#num_1 .shipin video");
		//播放视频
	
		// about_vedio.play();
		// document.addEventListener("WeixinJSBridgeReady", function () {
		// 	about_vedio = document.querySelector("#num_1 shipin video");
        //     about_vedio.play(); 
        // }, false);
		

//		alert("宽  "+scrWid+"\n  高     "+scrHei);
		
		/****************************************     首页    ************************************************/
		//定义banner计时器
		var bannerDate;
		//重写自动播放
		function start(){
			bannerDate = setInterval(function(){
				if(index < 2){
					index ++;	
				}else{
					index = 0;
				}
				switch(index){
					case 0:
						$(".num_box ul").css("transform","translateX(0)");
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
						showAnimate(index);
						break;
					case 1:
						$(".num_box ul").css("transform","translateX(-"+scrWid+"px)");
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
						showAnimate(index);
						break;
					case 2:
						$(".num_box ul").css("transform","translateX(-"+(scrWid*2)+"px)");
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
						showAnimate(index);
						break;
				}
			},5000);
		}
		
		//文字动画
		function showAnimate(index){
			setTimeout(function(){
				$(".m_logo").animate({left:"0"});	
			},100);
			setTimeout(function(){
				$(".m_grayFont").animate({left:"-100%"});	
			},500);
			setTimeout(function(){
				$(".m_redFont").animate({left:"-100%"});	
			},1000);
			setTimeout(function(){
				$(".m_graySFont").animate({left:"-100%"});	
			},1500);
			setTimeout(function(){
				$(".banner2  li").eq(index).children().css("left","200%");
			},0);

			
		
		}
		//初始化
		showAnimate(0);
		
		
		//添加banner触摸事件
		var m_banner = document.querySelector(".banner"); 
		m_banner.addEventListener("touchstart",function(evt){
			one = evt.touches[0];
			x_start = one.pageX;
			//清除banner的计数器
			clearInterval(bannerDate);
		});
		//添加banner拖动事件
		m_banner.addEventListener("touchmove",function(evt){
			one = evt.touches[0];		
			x_end = one.pageX;
			x = x_end - x_start;
		});		
		//添加banner的触摸结束事件
		m_banner.addEventListener("touchend",function(evt){
			//下一张
			if(x != 0){
				if( x < -5){
					if(index == 2){
						$(".num_box ul").css("transform","translateX(0)");
						index = 0;
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
					}
					else{
						$(".num_box ul").css("transform","translateX(-"+(index+1)*scrWid+"px)");
						index ++;
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
					}
				}
				//上一张
				if( x > 5){
					if(index == 0){
						$(".num_box ul").css("transform","translateX(-"+(scrWid*2)+"px)");
						index = 2;
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
					}
					else{
						$(".num_box ul").css("transform","translateX(-"+(index-1)*scrWid+"px)");
						index --;
						$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
					}
				}
				//banner重置计时器
				bannerDate = setInterval(function(){
					if(index < 2){
						index ++;	
					}else{
						index = 0;
					}
					switch(index){
						case 0:
							$(".num_box ul").css("transform","translateX(0)");
							$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
							showAnimate(index);
							break;
						case 1:
							$(".num_box ul").css("transform","translateX(-"+scrWid+"px)");
							$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
							showAnimate(index);
							break;
						case 2:
							$(".num_box ul").css("transform","translateX(-"+(scrWid*2)+"px)");
							$(".arrow a").eq(index).addClass("on").siblings().removeClass("on");
							showAnimate(index);
							break;
					}
				},5000);
				showAnimate(index);
			}
			x = 0;
		});
		
		
		
		/****************************************     关于我们    ************************ ************************/
		var about_textBox = document.querySelector(".about_textBox");
		
	
		var abIndex = -1;
		var abDate;
		//关于我们动画
		function abAnimate(yFlag){
			if(yFlag == 1){
				abDate = setInterval(function(){
					abIndex ++;
					if(abIndex >=5){
						clearInterval(abDate);
						abIndex = -1;
					}
					else{
						$(".textBox").children().eq(abIndex).css("opacity","1");
					}
				},200);	
			}
			else{
				$(".ab_p").css("opacity","0");
				$(".ab_redFont").css("opacity","0");
				abIndex = -1;
			}
		}
		
		
		
		//关于我们动画
		function ab_animate(yFlag){
			if(yFlag == 1){
				if(scrWid < 340){
					$(".ab_img").animate({
						opacity:"1",
						top:"200px"	
					},1700);
				}else{
					$(".ab_img").animate({
						opacity:"1",
						top:"170px"	
					},1700);
				}
				setTimeout(function(){
					$(".ab_redFont").animate({opacity:"1"});	
				},500);
				setTimeout(function(){
					$(".ab_p").animate({opacity:"1"});	
				},1000);	
			}else{
				
			}
		}
		
		
		
		
		
		
		
		/********************************    服务项目              ******************************************/
		$(".siceMian").css("height","100%");
		var line1 = document.createElement("div");
		line1.className = "line1";
		line1.id = "line1";
		var line2 = line1.cloneNode(true);
		line2.id = "line2";
		var line3 = document.createElement("div");
		line3.id = "line3";
		line3.className = "line2";
		line1.style.top = "33.33%";
		line1.style.left = "0%";
		line2.style.top = "66.66%";
		line2.style.left = "0%";
		line3.style.top = "0";
		line3.style.left = "50%";
		$("#num_2").css("z-index","999");
		$("#num_2").append(line1);
		$("#num_2").append(line2);
		$("#num_2").append(line3);
		$(".siceMian menu").css("height","100%");
		$(".siceMian menu li").addClass("serverLi");
		$(".siceMian menu li article").css({
			"width":"100%",

		});
		$(".siceMian menu li article section").css("line-height","18px");
		$(".siceMian menu li article figure").css({
			"width":"50px",
			"height":"50px",
			"background-size":'100% 100%'
		});
		$(".siceMian menu li article aside").css({
		
			"margin":"12px 0"
		});
		$(".siceMian menu li article p").css({
		
			"padding-left":"5%",
			"padding-right":"5%"
		});
		
		
		
		var serIndex = -1;
		var serDate;
		//服务动画
		function serAnimate(yFlag){
			if(yFlag == 2){
				serDate = setInterval(function(){
					serIndex ++;
					if(serIndex >=9){
						clearInterval(serDate);
					}
					else{
						if( serIndex >=6){
							switch (serIndex){
								case 6:
									$("#line1").css("opacity","1");
									break;
								case 7:
									$("#line2").css("opacity","1");
									break;
								case 8:
									$("#line3").css("opacity","1");
									break;
							}
						}else{
							$(".serverLi").eq(serIndex).children("article").css("transform","scale(1)");							
						}
					}
				},200);	
			}
			else{
				$("#line1").css("opacity","0");
				$("#line2").css("opacity","0");
				$("#line3").css("opacity","0");
				$(".serverLi").children("article").css("transform","scale(0)");
				serIndex = -1;
			}
		}
		
		
		/********************************    案例              ******************************************/
		$("#num_3").css("background","#e8e5e4");
		// $(".tBannerTopImg").css({
		// 	"width":(0.5*scrWid)+"px"
		// });
	
		$(".tBannerMidImg").css({
			"width" : (0.9*scrWid)+"px",
			"left":(0.05*scrWid)+"px"
		});

	
		
		//设置图片的位置
		// setTimeout(function(){
		// 	for(var i=0;i<$(".tBannerTopImg").length;i++){
		// 		(function(i){
		// 			if($(".tBannerTopImg").eq(i).height() >= 145){
		// 				$(".tBannerTopImg").eq(i).css({
		// 					"width":"auto",
		// 					"height":$(".tBannerTopImg").eq(i).height()*0.6 +"px",
		// 					'left':"35%"
		// 				});
		// 				}
		// 		})(i)
		// 	}
		// },1000);
		$(".bannerRound").css("width",scrWid + "px");

		var serPosti = 0;
		var serBBImg1 = document.querySelector("#goLeft");
		var serBBImg2 = document.querySelector("#goRight");
		//上一个
		serBBImg2.addEventListener("touchend",function(){
			serPosti -= 80;
			$(".serBInBox").css("transform","translateX("+serPosti+"px)");
		});
		//下一个
		serBBImg1.addEventListener("touchend",function(){
			serPosti += 80;
			$(".serBInBox").css("transform","translateX("+serPosti+"px)");
			if(serPosti >= 0){
				setTimeout(function(){
					$(".serBInBox").css("transform","translateX(0)");
					serPosti = 0;
				},500);
			}
		});
		
		//获得所有的小盒子
		var inBoxList = document.querySelectorAll(".inBox");
		//设置inBox点击事件
		
		
		//设置所有图片变为灰色
		
		
			//当前banner下标
		var bannerIndex = 0;
		//当前banner的index
		var currentBannerIndex = 0;
		//定义banner的坐标
		var bannerXStart = 0;
		var bannerXEnd = 0;
		var bannerXFinal = 0;
		var bannerOne;
		//获取所有的topBox
		var topBoxList = document.querySelectorAll(".topBox");
		var serTopBox = document.querySelector(".serTopBox");
		
		//点击不同的图标切换不同的banner
		var inBoxList = document.querySelectorAll(".inBox");
		var topBoxList = document.querySelectorAll(".topBox");
		for(var i=0;i<inBoxList.length;i++){
			(function(i){
				inBoxList[i].addEventListener("touchend",function(){
					//先隐藏所有的topBox
					for(var j=0;j<topBoxList.length;j++){
						(function(j){
							topBoxList[j].style.display = "none";
						})(j)
					}
					bannerIndex = i;
					//显示点击对应的topBox
					topBoxList[i].style.display = "block";
					// setTimeout(function(){
					// 	for(var k=0;k<$(".tBannerTopImg").length;k++){
					// 		(function(k){
					// 			if(scrWid <=360){
					// 				if($(".tBannerTopImg").eq(k).height() >= 100){
					// 					$(".tBannerTopImg").eq(k).css({
					// 						"width":"auto",
					// 						"height":$(".tBannerTopImg").eq(k).height()*0.5 +"px"	
					// 					});
					// 				}
					// 			}else{
					// 				if($(".tBannerTopImg").eq(k).height() >= 130){
					// 					$(".tBannerTopImg").eq(k).css({
					// 						"width":"auto",
					// 						"height":$(".tBannerTopImg").eq(k).height()*0.7 +"px"	
					// 					});
					// 				}
					// 				setTimeout(function(){
					// 					if($(".tBannerTopImg").eq(k).height() >= 130){
					// 						$(".tBannerTopImg").eq(k).css({
					// 							"width":"auto",
					// 							"height":$(".tBannerTopImg").eq(k).height()*0.7 +"px"	
					// 						});
					// 					}
					// 				},1);
					// 			}
					// 		})(k)
					// 	}	
					// },10)
					setTimeout(function(){
						caseImgAnimate(bannerIndex,0);	
					},20);
					//设置显示的bannerBox图片显示第一张
					currentBannerIndex = 0;
//					$(".topBox").eq(bannerIndex).css("transform","translateX(0%)");
					for(var p=0;p<$(".topBox").length;p++){
						(function(p){
							$(".topBox").eq(p).children(".tBannerBox").eq(0).css("left","0");
							$(".topBox").eq(p).children(".tBannerBox").eq(1).css("left","100%");
						})(p)
					}
					$(".topBox").eq(bannerIndex).children(".bannerRound").css("transform","translateX(0%)");
					$(".topBox").eq(bannerIndex).children(".bannerRound").children("a").removeClass("roundActive");
					$(".topBox").eq(bannerIndex).children(".bannerRound").children("a").eq(currentBannerIndex).addClass("roundActive");
				});
			})(i)
		}
		
		//
		$(".serMoveBox").each(function(index,item){
			var childrenNum = $(this).children(".tBannerBox").length;
			$(this).width(childrenNum*100+"%");
		});
			
		$(".tBannerBox").width(scrWid);
		
		/**
		 * 案例图片动画
		 * bannerIndex           :    选择的banner下标
		 * currentBannerIndex    :    当前图片在bannerBox的下标    
		 * 
		 */
		function caseImgAnimate(bannerIndex,currentBannerIndex){
			$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(1).css("transform","scale(1.1)");
			setTimeout(function(){
				$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(0).css("transform","scale(0.2)");
				$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(1).css("transform","scale(0.9)");
			},300);
			setTimeout(function(){
				$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(0).css("transform","scale(1)");
				$('.topBox').eq(bannerIndex).children(".tBannerBox").eq(currentBannerIndex).children("img").eq(1).css("transform","scale(1)");
			},600);
			
		}
		
		
		
		
		
		
		/********************************    经典案例              ******************************************/
		$("#num_4yd").css({
			"z-index":"999"
		});
		
		var caseFlag = -1;
		var caseDate;
		//经典案例动画
		function caseAnimate(yFlag){
			if(yFlag == 4){
				caseDate = setInterval(function(){
					caseFlag ++;
					if(caseFlag >=16){
						clearInterval(caseDate);
					}
					else{
						$(".caseDiv").eq(caseFlag).css("opacity","1");
			
					}
				},100);	
			}
			else{
				$(".caseDiv").css("opacity","0");
				caseFlag = -1;
			}
		}
		
		
		/********************************    联系我们            ******************************************/
		$("#num_5").css({
			"background":"#edeae9",
			"position":"relative"
		});
		
	
		
		var conIndex = -1;
		var conDate;
		//联系我们动画
		
	function conAnimate(yFlag){
			if(yFlag == 5){
				conDate = setInterval(function(){
					conIndex ++;
					if(conIndex >=7){
						clearInterval(conDate);
						conIndex = -1;
					}
					else{
						switch (conIndex){
							case 0:
								if(scrWid <= 375){
									$(".con_topRed").css("top","");										
								}else{
									$(".con_topRed").css("top","");	
								}
								break;
							case 1:
								$(".con_code").css("top","10%");
								$(".con_font1").css("top","35%");
								break;
							case 2:
								$(".con_logo").css("top","42%");
								break;
						 	case 3:
						 		$(".con_font2").css("top","49%");
								break;
							case 4:
								$(".con_font3").css("top","57%");
								break;
							case 5:
								$(".con_font4").css("top","61%");	
								break;
							case 6:
								$("#tel").css("top","71%");
								break;
						}
					}
				},300);	
			}
			
		}
		
		
		
		
		/********************************    body            ******************************************/
		    var overscroll = function (els) {
	        for (var i = 0; i < els.length; ++i) {
	            var el = els[i];
	            el.addEventListener('touchstart', function () {
	                var top = this.scrollTop
	                    , totalScroll = this.scrollHeight
	                    , currentScroll = top + this.offsetHeight;
	                //If we're at the top or the bottom of the containers
	                //scroll, push up or down one pixel.
	                //
	                //this prevents the scroll from "passing through" to
	                //the body.
	                if (top === 0) {
	                    this.scrollTop = 1;
	                } else if (currentScroll === totalScroll) {
	                    this.scrollTop = top - 1;
	                }
	            });
	            el.addEventListener('touchmove', function (evt) {
	                //if the content is actually scrollable, i.e. the content is long enough
	                //that scrolling can occur
	                if (this.offsetHeight < this.scrollHeight)
	                    evt._isScroller = true;
	            });
	        }
	    };
	    
	    //禁止body的滚动事件
	    document.body.addEventListener('touchmove', function (evt) {
	        //In this case, the default behavior is scrolling the body, which
	        //would result in an overflow.  Since we don't want that, we preventDefault.
	        if (!evt._isScroller) {
	            evt.preventDefault();
	        }
	    });
	    
	    //给class为.scroll的元素加上自定义的滚动事件
	    overscroll(document.querySelectorAll('.scroll'));
			
			
		
		var numBox = document.querySelector(".num_box");
		//添加numBox的触摸事件
		numBox.addEventListener("touchstart",function(evt){
			y = 0;
			y_start = 0;
			y_end = 0;
			one = evt.touches[0];
			y_start = one.pageY;
		});
		numBox.addEventListener("touchmove",function(evt){
			one = evt.touches[0];
			y_end = one.pageY;
		});
		numBox.addEventListener("touchend",function(evt){
			//判断是否是点了一下
			if(y_end != 0){
				y = y_end - y_start;
				//向上
				if(y > 80){
					if(yFlag != 0){
						yFlag --;
						console.log(yFlag)
						console.log(scrHei)
						$(".num_box").css("transform","translateY(-"+(scrHei*yFlag)+"px)");

						exeAniamte(yFlag);
					}
				}
				//向下
				if(y < -80){
					if(yFlag != 5){
						yFlag ++;
				
						$(".num_box").css("transform","translateY(-"+(scrHei*yFlag)+"px)");
						exeAniamte(yFlag);
					}
				}
		
				y = 0;
				y_start = 0;
				y_end = 0;					
			}
		});		
		
		
		
		//执行动画
		function exeAniamte(yFlag){
			//初始化动画sssss
			goInit();
			switch (yFlag){
					case 0:
						break;
					case 1:
						abAnimate(yFlag);
						break;
					case 2:
						serAnimate(yFlag);
						break;
					case 4:
						caseAnimate(yFlag);
						break;
					case 5:
						conAnimate(yFlag);
						break;
				}
		}
		
		//动画初始化
		function goInit(){
			//首页
				// $(".m_logo").css("left","");
				// $(".banner2  li").children().css("left","-100%");
			//关于我们
				$(".textBox").children().css("opacity","0");
				abIndex = -1;
			//服务项目
//				$(".serverLi").children("article").css("transform","scale(0)");
				$(".serverLi").children("article").css("transform","scale(0)");
				serIndex = -1;
			//经典案例
	$("#line1").css("opacity","0");
				$("#line2").css("opacity","0");
				$("#line3").css("opacity","0");
				$(".caseDiv").css("opacity","0");
				caseFlag = -1;
			//联系我们
				
				$(".con_code").css("top","-50%");
				$(".con_font1").css("top","-50%");
				$(".con_logo").css("top","-50%");
				$(".con_font2").css("top","-100%");
				$(".con_font3").css("top","-100%");
				$(".con_font4").css("top","-100%");
				$(".con_bottom").css("top","-100%");
				conIndex = -1;
		}
		
		
		
		
		
		
		//适配微信视频播放
		if (typeof WeixinJSBridge == "undefined") {
	        var i = 0;
	        if (document.addEventListener) {
	            document.addEventListener("WeixinJSBridgeReady", function func() {
	                if (typeof isAddPlayerOk !== 'undefined' && isAddPlayerOk === true) {
	                    i = null;
	                    player.play();
	                } else {
	                    if (i++ < 10) {
	                        setTimeout(func, 100);
	                    }
	                }
	            }, false);
	        }
	    } 
		
	}else{
		console.log("PC端");
	}

