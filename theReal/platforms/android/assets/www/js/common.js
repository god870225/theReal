// 메뉴
$(function(){
	$( '.menu-open' ).click(function() {
		$(this).text('메뉴 닫기');
		$('#wrap').addClass('menu-on').find('#menuSlide').show();
		return false;
	});
	$( '#menuSlide>nav>a, #menuClose').click(function() {
		$(this).text('메뉴 열기');
		$('#wrap').removeClass('menu-on').find('#menuSlide').hide();
		return false;
	});
	
 	$( '#menuSlide>nav>ul>li>a' ).click(function() {
 		var request = new Request();
 		var idParam = request.getParameter('id');
		var url = "";
		if($(this).attr("id") == "menu01"){
			url = '../html/main.html?id='+idParam
			$(location).attr('href',url);
		}else if($(this).attr("id") == "menu02"){
			url = '../html/stepA_01.html?id='+idParam
			$(location).attr('href',url);
		}else if($(this).attr("id") == "menu03"){
			url = '../html/stepB_01.html?id='+idParam
			$(location).attr('href',url);
		}else if($(this).attr("id") == "menu04"){
			url = '../html/stepC_01.html?id='+idParam
			$(location).attr('href',url);
		}else if($(this).attr("id") == "menu05"){
			url = '../html/stepD_01.html?id='+idParam
			$(location).attr('href',url);
		}else if($(this).attr("id") == "menu06"){
			url = '../html/main.html?id='+idParam
			$(location).attr('href',url);
		}else if($(this).attr("id") == "menuLogout"){
			url = '../html/login.html'
			$(location).attr('href',url);
		}
		
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

function popupOpenId(popupId) {
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

function popupOpenId2(popupId) {
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

function multiPoppupOpen(obj) {
	var popupId = $(obj).get(0).name;
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

function popupClose2() {
	$('.layer-popup2').hide();
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

function gfn_isNull(str) {
	if (str == null) return true;
	if (str == "NaN") return true;
	if (new String(str).valueOf() == "undefined") return true;    
    var chkStr = new String(str);
    if( chkStr.valueOf() == "undefined" ) return true;
    if (chkStr == null) return true;    
    if (chkStr.toString().length == 0 ) return true;   
    return false; 
}

function ComSubmit(opt_formId) {
	this.formId = gfn_isNull(opt_formId) == true ? "commonForm" : opt_formId;
	this.url = "";
	
	if(this.formId == "commonForm"){
		$("#commonForm")[0].reset();
	}
	
	this.setUrl = function setUrl(url){
		this.url = url;
	};
	
	this.addParam = function addParam(key, value){
		$("#"+this.formId).append($("<input type='hidden' name='"+key+"' id='"+key+"' value='"+value+"' >"));
	};
	
	this.submit = function submit(){
		var frm = $("#"+this.formId)[0];
		frm.action = this.url;
		frm.method = "post";
		frm.submit();	
	};
}

var Request = function()
{
    this.getParameter = function( name )
    {
        var rtnval = '';
        var nowAddress = unescape(location.href);
        var parameters = (nowAddress.slice(nowAddress.indexOf('?')+1,nowAddress.length)).split('&');
        for(var i = 0 ; i < parameters.length ; i++)
        {
            var varName = parameters[i].split('=')[0];
            if(varName.toUpperCase() == name.toUpperCase())
            {
                rtnval = parameters[i].split('=')[1];
                break;
            }
        }
        return rtnval;
    }
}

//개발IP셋팅
function commonIp2(div){
	var commonIp = "";
	if(div == "dev"){
		//commonIp = "121.138.82.229";
		//commonIp = "14.52.103.145";
		//commonIp = "121.134.168.194";
		//commonIp = "175.209.135.73";
		//commonIp = "121.138.82.220";
		commonIp = "192.168.0.39";
		//commonIp = "14.32.121.176";
		//commonIp = "117.52.97.40";
		//commonIp = "121.138.115.243";
		//commonIp = "14.52.103.239";
	}else{
		commonIp = "221.148.29.120";
	}
	return commonIp; 
}	

//개발IP셋팅
function commonIp(){
	var commonIp = "";
	var dev = false;
	if(dev){
		commonIp = "http://192.168.0.39:8080";
		//commonIp = "117.52.97.40";
	}else{
		commonIp = "http://117.52.97.40:80";
	}
	return commonIp; 
}	

//현재달의 마지막날(일자) 구하기
function lastDay(){
   var d,d2, s = "";           
   d = new Date();             
   d2 = new Date(d.getYear(),d.getMonth()+1,"");                      
   s += d2.getDate();
   return(s);                             
}


//현재달의 마지막날(일자) 구하기
function lastDayStrDate(strDate){
   var d,d2, s = "";           
   //d = new Date();             
   d2 = new Date(strDate.getYear(),strDate.getMonth()+1,"");                      
   //s += d2.getYear()+ kind;                       
   //s += (d2.getMonth()+1) + kind;  //여기에 꼭 +1이 있어야됨 생략하고 위에다가 +1하면 1월이 0으로 나옴
   s += d2.getDate();
   return(s);                             
}


var os, bw, version;

function SysInfo(){
	var agent = navigator.userAgent.toLowerCase();
	try{
	if (agent.indexOf("windows") > -1) {
		os = "ms";
	} else if (agent.indexOf("android") > -1) {
		if (agent.indexOf("shw-m380w") > -1) {
			os = "galexytab";
		} else {
			os = "android";
		}
	} else if (agent.indexOf("linux") > -1) {
		os = "linux";
	} else if (agent.indexOf("iphone") > -1) {
		os = "iphone";
	} else if (agent.indexOf("ipad") > -1) {
		os = "ipad";
	} else if (agent.indexOf("mac") > -1) {
		os = "mac";
	} else {
		os = "unknown";
	}

	if (agent.indexOf("msie") > -1) {
		bw = "ie";
	} else if (agent.indexOf("chrome") > -1) {
		bw = "chrome";
	} else if (agent.indexOf("safari") > -1) {
		bw = "safari";
	} else if (agent.indexOf("opera") > -1) {
		bw = "opera";
	} else if (agent.indexOf("firefox") > -1) {
		bw = "firefox";
	} else {
		bw = "unknown";
	}
	if (os == "ms" && bw == "ie") {
		var start = agent.indexOf("msie");
		var tmp = agent.substring(start);
		var end = tmp.indexOf(";");
		tmp = tmp.substring(0, end);
		tmp = tmp.substring(tmp.lastIndexOf(" "));
		version = tmp;
	} else {
		version = 99999;
	}
	}catch(e){alert(e.description);}
}

function getOS(){
	if(os=="ms"){
		return "Microsft Window";
	}else if(os=="android"){
		return "Android";
	}else if(os=="galexytab"){
		return "Galexy TAB";
	}else if(os=="linux"){
		return "Linux";
	}else if(os=="iphone"){
		return "IOS(iPhone)";
	}else if(os=="ipad"){
		return "IOS(iPad)";
	}else if(os=="mac"){
		return "MAC OSX";
	}else{
		return "Unknown";
	}
}

function getBw(){
	if(bw=="ie"){
		return "Internet Explorer";
	}else if(bw=="chrome"){
		return "Chrome";
	}else if(bw=="safari"){
		return "Safari";
	}else if(bw=="opera"){
		return "Opera";
	}else if(bw=="firefox"){
		return "Firefox";
	}else{
		return "Unknown"
	}
}

function getVersion(){
	if(version!=99999){
		return version;
	}else{
		return "";
	}
}

function getSysInfo(){
	var v = getVersion();
	return "<b>" + getOS() + " " + getBw() + (v!="" ? " " + v : "") + "</b>";
}


