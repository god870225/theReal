// 메뉴
$(function(){
	$( '.menu-open' ).click(function() {
		$(this).text('메뉴 닫기');
		$('#wrap').addClass('menu-on').find('#menuSlide').show();
		return false;
	});
	$( '#menuSlide>nav>a, #menuSlide>div>p' ).click(function() {
		$(this).text('메뉴 열기');
		$('#wrap').removeClass('menu-on').find('#menuSlide').hide();
		return false;
	});

	// Image checkbox
	$(".checkbox").each(function(){
        $(this).wrap( "<span class='custom-checkbox'></span>" );
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }
    });
    $(".checkbox").click(function(){
        $(this).parent().toggleClass("selected");
    });
    
    //Image radio
	function customRadio(radioName){
        var radioButton = $('.radio[name="'+ radioName +'"]');
        $(radioButton).each(function(){
            $(this).wrap( "<span class='custom-radio'></span>" );
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
        });
        $(radioButton).click(function(){
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
            $(radioButton).not(this).each(function(){
                $(this).parent().removeClass("selected");
            });
        });
    }

	
	var radioArr = new Array();
	
	$(".radio").each(function(){
			var temp = "";
			var flag = false;
			for(var i = 0; i < radioArr.length; i++){
					if(radioArr[i] == $(this)[0].name){
						flag = true;	
					}
			}
	    
	    if(!flag){
	    		radioArr.push($(this)[0].name);
	    }
	    
	    
	});
	
	for(var i = 0; i < radioArr.length; i++){
			customRadio(radioArr[i]);
	}
	
});

//상단 고정 메뉴
$(function(){ 
    var menupos = $("#header").offset().top; 
    $(window).scroll(function(){ 
       if($(window).scrollTop() >= menupos) { 
          $("#header").css("position","fixed"); 
          $("#header").css("top","0");
          $("#header").css("z-index","99");
          //$('#top_mar').show();
			  if($(window).scrollTop()==0){
				$("#header").css("position","").css("top","").css("z-index","");
			  }
          }
    }); 
			 
 }); 


//layer-popup
function wrapWindowByMask() {
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height(); 
    var maskWidth = $(window).width();

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({
        'width' : maskWidth,
        'height' : maskHeight
    });

    //애니메이션 효과
    //$('#mask').fadeIn(1000);      
    $('#mask').fadeTo("slow", 0.5);
}

function popupOpen(obj) {
	var popupId = $(obj).get(0).id;
	var popupObj = $("#" + popupId + "Layer");
	wrapWindowByMask();
	popupObj.css("position", "absolute");
    //영역 가운에데 레이어를 뛰우기 위해 위치 계산 
	if($(window).height() < popupObj.height()){
		popupObj.css("top", '63px');	
		popupObj.find('.layer-content-inner').css('height', $(window).height()-150)
	}else{
		popupObj.css("top",(($(window).height() - popupObj.outerHeight()) / 2) + $(window).scrollTop());
	}
	popupObj.css("left",(($(window).width() - popupObj.outerWidth()) / 2) + $(window).scrollLeft());	
    popupObj.show();
}

function popupClose() {
    $('.layer-popup').hide();
    $('#mask').hide();
}

/*  150828 추가 */
function popupOpen2(obj) {
	var popupId = $(obj).get(0).id;
	var popupObj = $("#" + popupId);
	wrapWindowByMask();
	popupObj.css("position", "absolute");
    //영역 가운에데 레이어를 뛰우기 위해 위치 계산 
    popupObj.css("top",(($(window).height() - popupObj.outerHeight()) / 2) + $(window).scrollTop());
    popupObj.css("left",(($(window).width() - popupObj.outerWidth()) / 2) + $(window).scrollLeft());
    popupObj.show();
}
