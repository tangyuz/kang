$(document).ready(function(){
	if(/index/.test(location.href)){
//	alert(1)
//		$("#header").load("head.html",function(){
//			})
//	
//	  	$(".footer").load("footer.html",function(){
//	  	})
  	
 
  	$(".slideBox").slide({
    	mainCell: ".bd ul",
    	autoPlay: true
		});
		jQuery(".focusBox").slide({
		    titCell: ".num li",
		    mainCell: ".pic",
		    effect: "fold",
		    autoPlay: true,
		    trigger: "click",
		    startFun: function(i) {
		        jQuery(".focusBox .txts li").eq(i).animate({
		            "bottom": 0
		        }).siblings().animate({
		            "bottom": -36
		        });
		    }
		});
  	
		
}
  
  if(/aboutus/.test(location.href)){
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  }
  
  
  if(/news/.test(location.href)){
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  }
  
  
  if(/consu/.test(location.href)){
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  }
  
  
  
  
  if(/rem/.test(location.href)){
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  }
  
  if(/coo/.test(location.href)){
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  	
  	 $("#capslide_img_cont").capslide({
        caption_color: 'white',
        caption_bgcolor: 'black',
        overlay_bgcolor: 'black',
        border: '',
        showcaption: false
    });
    $(".move").mouseover(function(){
    	$(this).find(".pc").stop(true).slideDown();
    })
    $(".move").mouseout(function(){
    	$(this).find(".pc").stop(true).slideUp();
    })
  	
jQuery(".ruwangyiyuan").slide({
    titCell: ".hdm ul",
    mainCell: ".bdm1 ul",
    autoPage: true,
    effect: "left",
    autoPlay: true,
    vis: 2
});


$(function() {
    $(".ic_container").capslide({
        caption_color: 'white',
        caption_bgcolor: 'black',
        overlay_bgcolor: 'black',
        border: '',
        showcaption: false
    });
});
  	
  	
  }
  
  if(/sma/.test(location.href)){
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  }

})
	
	 
  
  

  	
 
  