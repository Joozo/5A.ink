// JavaScript Document
$(function(){
	$(window).load(function(){
		var len=$(".arrow a").length;
		var $BlI=$(".banner ul li");
		var Hh=$(window).height();
		for(var i=0;i<len;i++){
			$BlI.eq(i).find("div").eq(0).css({"top":Hh*i});
			$BlI.eq(i).find("div").eq(1).css({"top":-Hh*i});
			}
		})
		start();
	})
var hasStarted=false;
indexFun();
/*banner*/
function indexFun(){
	$(".arrow a").hover(function(){
		stop();
		var index=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		bannerClick(index);
		},function(){
			start();
			})
	}
/**/
function bannerStart(){
	var preIndex = $(".arrow a").filter(".on").index();
	var arrowLen=$(".arrow a").length;
		index=preIndex;
		$(".arrow a").removeClass("on");
		if(index==arrowLen-1){
			index=0;
			$(".arrow a").eq(index).addClass("on");
			}else{
				$(".arrow a").eq(index).next().addClass("on");
				index++;
			}
		bannerClick(index);
	}

/*animation*/
function bannerClick(index){
	var H=$(window).height();
	var t=1000;
	var arrowLen=$(".arrow a").length;
	var $bannerli=$(".banner ul li");
	$bannerli.eq(index).addClass("on").css({"z-index":"1"}).siblings().removeClass("on").css({"z-index":"0"});
	/*显示层的位置计算*/
	if(index==0){
		$bannerli.eq(index).find("div").eq(0).stop(true).animate({top:"0px"},t);
		$bannerli.eq(index).find("div").eq(1).stop(true).animate({top:"0px"},t);
		$bannerli.eq(index+1).find("div").eq(0).stop(true).animate({top:H},t);
		$bannerli.eq(index+1).find("div").eq(1).stop(true).animate({top:-H},t);
		index=arrowLen-1;
		$bannerli.eq(index).find("div").eq(0).stop(true).animate({top:H},t);
		$bannerli.eq(index).find("div").eq(1).stop(true).animate({top:-H},t);
		}else{
			$bannerli.eq(index).find("div").eq(0).stop(true).animate({top:"0px"},t);
			$bannerli.eq(index).find("div").eq(1).stop(true).animate({top:"0px"},t);
			$bannerli.eq(index-1).find("div").eq(0).stop(true).animate({top:-H},t);
			$bannerli.eq(index-1).find("div").eq(1).stop(true).animate({top:H},t);
			if(index==arrowLen-1){
				index=-1;
			}
			$bannerli.eq(index+1).find("div").eq(0).stop(true).animate({top:H},t);
			$bannerli.eq(index+1).find("div").eq(1).stop(true).animate({top:-H},t);
			}
	}
/*自动动画*/
function start(){
	if(!hasStarted){
		hasStarted=true;
		interval = setInterval("bannerStart()",5000); 
	}
}
/*停止动画*/
function stop(){
	clearInterval(interval);
	hasStarted=false;
}