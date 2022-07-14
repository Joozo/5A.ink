// JavaScript Document
function quanp(){
var single_hh = $(window).height();
var single_ww = $(window).width();
$('.num').height(single_hh);
$('.num li').width(single_ww);
}
quanp();
$(window).resize(function(){
	if (typeof indexSlides != 'undefined' && indexSlides.reformat) 
		indexSlides.reformat();
		quanp();
});
$('.ddw').val(0);
$('.ddw2').val(0);
setTimeout(function(){
$('.num').eq(0).find('p').stop().animate({'top':'50%'},500)
	},500);
	
$(function(){
$('.num_box').mousewheel(function(event, delta) {
	var aaaa=$('.ddw2').val();
	if (aaaa == 1){
		return;	
	}
	qpgd(delta);
});
});
function qpgd(a){
	var z =$('.ddw').val();
    b = parseInt(z);
	c = $('.num').length;
	if (b>-5) {
	

if(a<0){
	if(-b==c-1){
		return;
	}
	b--;
	$('.ddw2').val(1);
	}else if(a>0){
		if(-b==0){
			return;
	}
	b++;
	$('.ddw2').val(1);
	}
$(".navUl li").eq(-b).addClass("on").siblings().removeClass("on");
fixAnim(b);
$('.ddw').val(b);
$('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
var single_hh = $(window).height();

click_hh =-single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
setTimeout(function(){
	$('.ddw2').val(0);
	},1400);	

}else{
		
		b=-4
		if(a<0){

	if(-b==c-1){
		return;
	}
	
	b --;
	$('.ddw2').val(1);
	}else if(a>0){
		if(-b==0){
			return;
	}
	b=b-1
	b++;
	$('.ddw2').val(1);
	}
$(".navUl li").eq(-b).addClass("on").siblings().removeClass("on");
fixAnim(b);
$('.ddw').val(b);
$('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
var single_hh = $(window).height();

click_hh =-single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
setTimeout(function(){
	$('.ddw2').val(0);
	},1400);
			
	}
}

$('.fixed_r li').eq(0).addClass('on');
$('.fixed_r li').click(function(){
	var b = $(this).index();
	var fixedLen=$(".fixed_r li").length;
	if(b==fixedLen-1){
		false;
		}else{
		$(this).addClass('on').siblings('li').removeClass('on');
		$(".navUl li").eq(b).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);
		fixAnim(-b);
		var single_hh = $(window).height();
		click_hh =single_hh*b;
		$('.num_box').animate({'bottom': click_hh},1000);
		}
})
$('.navUl li').click(function(){
	var b = $(this).index();
	$(this).addClass('on').siblings('li').removeClass('on');
	$(".fixed_r li").eq(b).addClass('on').siblings('li').removeClass('on');
	$('.ddw').val(-b);
	fixAnim(-b);
	var single_hh = $(window).height();
	click_hh =single_hh*b;
	$('.num_box').animate({'bottom': click_hh},1000);
})

function fixAnim(b){
var t0=1000;
if(b==-1){

	

	setTimeout(function(){
		$(".insCle .insP").addClass("insVisible").fadeIn("fast");
		$(".insCle .insPc").addClass("insVisiblec").fadeIn("fast");
		$(".navUl li a").css({
			"color":"#fff"
			});
		$(".navUl  .on a").css({"color":"#cc1e30 "});
		$(".Ilogo img").attr({"src":"images/img/logoImg01.png"});
		$(".indexHeader menu li").css({"color":"#fff"});
		$(".indexHeader menu li:eq(1)").find("img").attr({"src":"images/icon/rwm01.png"});
		},t0);
	}else{
		setTimeout(function(){

		$(".insCle .insP").removeClass("insVisible").fadeOut("fast");
		$(".insCle .insPc").removeClass("insVisiblec").fadeOut("fast");
		$(".navUl li a").css({
			"color":"#666"
		});
		$(".navUl  .on a").css({"color":"#cc1e30"});
		$(".Ilogo img").attr({"src":"images/img/logoImg.png"});
		$(".indexHeader menu li").css({"color":"#333"});
		$(".indexHeader menu li:eq(1)").find("img").attr({"src":"images/icon/rwm.png"});
		},t0);
		}
if(b==-2){
	$('.siceMian menu').addClass('serverMenu');
	}else{
		$('.siceMian menu').removeClass('serverMenu');
		}
if(b==-3){
	setTimeout(function(){
		$(".ServiceMian").eq(0).find(".svicePosition .Smun:eq(0)").addClass("SmunOn");
		$(".ServiceMian").eq(0).find(".svicePosition .Smun:eq(0) section:eq(1)").addClass("setOn");
		},500);
	}else{
		$(".Smun").removeClass("SmunOn");
		$(".Smun section:eq(1)").removeClass("setOn");
		$("ServiceNav ul li").trigger("click");
		}
if(b==-4){
	$(".MunCase").hide();
	setTimeout(function(){
		$(".MunCase").show();
		$(".MunCase").addClass("MunV");
	},500);
	}else{
		$(".MunCase").removeClass("MunV");
		}
if(b==-5){
	setTimeout(function(){
		$(".NumLeft_Text aside.conArm").addClass("conArmVisible");
		$(".NumLeft_Text .NumL_Section").addClass("NumL_SectionVisible");
		},500);
	setTimeout(function(){
		$(".contentMun").addClass("contentMunVisible");
		},250);
	setTimeout(function(){
		$(".NumContact_right").addClass("NumContact_rightVisible");
		},1000);
	}else{
		$(".NumContact_right").removeClass("NumContact_rightVisible");
		$(".NumLeft_Text aside.conArm").removeClass("conArmVisible");
		$("..NumLeft_Text .NumL_Section").removeClass("NumL_SectionVisible");
		$(".contentMun").removeClass("contentMunVisible");
		}
	}

