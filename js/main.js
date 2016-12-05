
$("#header").load("head.html",function(){
	})

$(".footer").load("footer.html",function(){
})

   
	$(".slideBox").slide({
	mainCell: ".bd ul",
	autoPlay: true
	});
	$(".focusBox").slide({
	    titCell: ".num li",
	    mainCell: ".pic",
	    effect: "fold",
	    autoPlay: true,
	    trigger: "click",
	    startFun: function(i) {
	        $(".focusBox .txts li").eq(i).animate({
	            "bottom": 0
	        }).siblings().animate({
	            "bottom": -36
	        });
	    }
});
	
		

  
  if(/aboutus/.test(location.href)){
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
  	
$(".ruwangyiyuan").slide({
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
  
  if(/news/.test(location.href)){
  	
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  	
  	
  	$(".slideBox_new").slide({
	mainCell: ".bd ul",
	autoPlay: true
	});
  	$.ajax(
				{
					type:"get",
					url:"data/data.json",
					async:true,
					datatype:"json",
					success:function(mag){
						var data=mag.data;
						var str='';
						for(var i in data){
							str+='<li><a class="eliplis" href="javascript:;" dataid="'+data[i].id+'">'+data[i].name+'</a><span>'+data[i].time+'</span></li>'
							
							
							
//							str+='<div class="l yi">'
//							str+='<a dataid="'+data[i].id+'" class="atu" href="javascript:;"><img  src="'+data[i].img+'"/></a>'
//							str+='<a class="a2" dataid="'+data[i].id+'"  href="javascript:;">'+data[i].name+'</a>'
//							str+='<div class="di">'
//							str+='<p class="l p1">'+data[i].name1+'</p>'
//							str+='<p class="l p2">'+data[i].name2+'</p>'
//							str+='</div>'
//							str+='<div class="shu">'
//							str+=data[i].id		
//							str+='</div>'	
//							str+='<a dataid="'+data[i].id+'" class="a3" href="javascript:;"><img src="'+data[0].img1+'"/></a>'
//							str+='</div>'	
							
						}
						$(".ul1").append(str);
						
						
						
						
					}
					
					
				}
	)
  }


	
	 
  
  

  	
 
  