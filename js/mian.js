// JavaScript Document
$(function(){
	$(window).load(function(){
		mianWidth();
		})
	$(window).resize(function(){
		mianWidth();
		})
	NavMian();
	indexFun();
	Era();
	ServiceMian();
	//NumCst();
	ContactMian();
	})
function mianWidth(){
	var W=$(window).width(),
		H=$(window).height();
		$(".banner ,.banner ul ,.banner ul li").height(H);
	var fixed_r=$(".fixed_r").height();
	$(".fixed_r").css({
		"top":(H-fixed_r)/2
	})
	var indexHeader=$(".indexHeader").height();
	$(".siceMian menu li").css({
		"margin-top":(H-indexHeader)/5.5
		});
	var serviceMianWidth=$(".siceMian").width();
	$(".siceMian menu li").width(serviceMianWidth/3.05);
	$(".ServiceM").height(H-(H*0.08)).css({"padding-top":H*0.14});
	$(".SviceMun").height(H*0.65);
	//$(".videoStyle").css({"width":W,"height":H});
	$(".NumCase").css({"height":H*0.8,"margin-top":H*0.13});
	$(".NumConR_section").height(H*0.4);
	$(".contentMun").css({"margin-top":H*0.1});
	$(".NumContact").css({"padding-top":H*0.14});
	}
/*banner*/
function indexFun(){
	$(".banner ul li").hover(function(){
		var index=$(this).index();
		$(this).eq(index).find("div:eq(0)").animate({
			"top":$(window).height()
			},1000);
		$(this).eq(index).find("div:eq(1)").animate({
			"top":-$(window).height()
			},1000);
		})
	}
/*wx*/
function Era(){
	$(".indexHeader menu li:eq(1)").hover(function(){
		var EraLeft=$(this).offset().left;
		$(".wx").addClass("wxVisible");
		$(".wxVisible").css({
			"right":((($(window).width())-EraLeft)/2)+70+"px"
			})
		},function(){
			$(".wx").removeClass("wxVisible");
			$(".wx").css({
				"right":"-100px"
				})
			});
	}
/*nav*/
function NavMian(){
	var indexHeader=$(".indexHeader").width();
	var arr=["images/icon/del.png","images/icon/visible.png"];
	$(".liHidden").click(function(){
		if($(this).find("img").attr("src")==arr[0]){
			$(this).find("img").attr("src",arr[1]);
			$(".navUl").stop(true).animate({
				left:"300px",
				opacity: 'toggle'
				},500);
			}else{
				$(this).find("img").attr("src",arr[0]);
				$(".navUl").stop(true).animate({
					left:"0px",
					opacity: 'toggle'
				},500);
			}
		});
	}
/*service*/
function ServiceMian(){
	$(".ServiceMian").each(function() {
        var thisLen=$(this).find(".Smun").length;
		$(this).find(".svicePosition").width(thisLen*1136);
    });
	$(".ServiceNav ul li").click(function(){
		var index=$(this).index();
		$(".ServiceMian").addClass("ServiceMHidden");
		$(this).addClass("on").siblings().removeClass("on");
		$(".ServiceMian").eq(index).removeClass("ServiceMHidden");
		});
	
	var page = 1;
	$(".leftArow").click(function(){
		$(".svicePosition .Smun").removeClass("SmunOn");
		$(".svicePosition .SerArt").find("section:eq(1)").removeClass("setOn");
    	var i = 1; 
		var $pro = $(this).parents(".ServiceMian"),
			$proUl = $pro.find(".svicePosition"),
			$proUlDiv = $pro.find(".SviceMun"),
			proWidth = $proUlDiv.width(),
			proLi=$proUl.find(".Smun").length,
			proContent=Math.ceil(proLi/i);
		if(!$proUl.is(":animated")){
			if(!$proUl.is(":animated")){
		 	 if( page == 1 ){ 
				$proUl.animate({ left : '-='+proWidth*(proContent-1) }, "slow");
				page = proContent;
				}else{
					$proUl.animate({ left : '+='+proWidth }, "slow");
					page--;
				}
			$(".ServiceMian").each(function() {
                $(this).find(".svicePosition .Smun").eq(page-1).find(".SerArt section:eq(1)").addClass("setOn");
				$(this).find(".svicePosition .Smun").eq(page-1).addClass("SmunOn");
            });
			}
		}
		})
		
	$(".rightArow").click(function(){
		$(".svicePosition .Smun").removeClass("SmunOn");
		$(".svicePosition .SerArt").find("section:eq(1)").removeClass("setOn");
    	var i = 1; 
		var $pro = $(this).parents(".ServiceMian"),
			$proUl = $pro.find(".svicePosition"),
			$proUlDiv = $pro.find(".SviceMun"),
			proWidth = $proUlDiv.width(),
			proLi=$proUl.find(".Smun").length,
			proContent=Math.ceil(proLi/i);
		if(!$proUl.is(":animated")){
			if(page==proContent){
				$proUl.animate({ left : "0px"}, "slow");
				page=1;
				}else{
					$proUl.animate({ left : '-='+proWidth }, "slow"); 
					page++;
					}
			$(".ServiceMian").each(function() {
                $(this).find(".svicePosition .Smun").eq(page-1).find(".SerArt section:eq(1)").addClass("setOn");
				$(this).find(".svicePosition .Smun").eq(page-1).addClass("SmunOn");
            });
			}
		})
	}

function ContactMian(){
	$(".conSecBtn").click(function(){
		var contInput=$.trim($(".contInput").val()),
			contInput01=$.trim($(".contInput01").val()),
			contInput02=$.trim($(".contInput02").val());
			if(contInput==""){
				alert("请输入您的姓名");
				return false;
				}
			if(contInput01==""){
				alert("请输入你的手机号码");
				return false;
				}
			var myreg = /^(((13[0-9]{1})|15[0-9]|18[0-9]|17[0-9]|14[0-9])+\d{8})$/;	
			if(contInput01.length!=11 || !myreg.test(contInput01 || contInput01=="")){
				alert("手机号输入错误，请重新输入");
				return false;
				}
			if(contInput02==""){
				alert("请输入您的需求");
				return false;
				}
		})
	}
