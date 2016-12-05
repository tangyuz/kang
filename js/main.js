
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
  	
//	 $("#capslide_img_cont").capslide({
//      caption_color: 'white',
//      caption_bgcolor: 'black',
//      overlay_bgcolor: 'black',
//      border: '',
//      showcaption: false
//  });
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


    $(".ic_container").capslide({
        caption_color: 'white',
        caption_bgcolor: 'black',
        overlay_bgcolor: 'black',
        border: '',
        showcaption: false
    });

  	
  	
}
  
  if(/sma/.test(location.href)){
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  }
  
  if(/newdatil/.test(location.href)){
  	$("#header").load("head.html",function(){
  		
  	})
  	
  	$(".footer").load("footer.html",function(){
  		
  	})
  	var dataId=sessionStorage.getItem("dataid")
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
						if(dataId===data[i].id){
							str+='<h2>'+data[i].title+'</h2>'
				       		str+='<div class="img">'
				       		str+='<img src="'+data[i].img+'" alt="" />'
				       		str+='</div>'
				       		str+='<div class="news_d">'
				       		str+='<p>'+data[i].name1+'</p>'
				       		str+='<p>'+data[i].name2+'</p>'
				       		str+='<p>'+data[i].name3+'</p>'
       
       		
       		
						}
											
					}
					$(".new_detail").append(str);
				}
			}
	)
  	
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
						str+='<li><a class="datil" href="javascript:;" dataid="'+data[i].id+'">'+data[i].name+'</a><span>'+data[i].time+'</span></li>'							
					}
					$(".ul1").append(str);
				}
			}
	)
  	
  	
  	
  	//***********跳转新闻详情页***************
			$(".List").on("click",".datil",function(){
					var dataid=$(this).attr("dataid");
					sessionStorage.setItem("dataid",dataid)
					window.location.href="newdatil.html"	
			})
}


	
	 
  
  

  	
 
  