  
  if(/index/.test(location.href)){
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  	
  	
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
  
  