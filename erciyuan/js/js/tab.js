define(["jquery"],function(){return function(){$.ajax({type:"get",url:"../data/shop.json",dataType:"json",success:function(i){i=i.data;for(var a="",s=0;s<20;s++)a+='<li data-id="'+i[s].id+'"><a href="##"><img src="../images/'+i[s].img+'" /><p>'+i[s].title+"</p><p>"+i[s].price+"</p></a></li>";for($(".box-wrap>ul").eq(0).html(a),a="",s=5;s<25;s++)a+='<li data-id="'+i[s].id+'"><a href="##"><img src="../images/'+i[s].img+'" /><p>'+i[s].title+"</p><p>"+i[s].price+"</p></a></li>";$(".box-wrap>ul").eq(1).html(a),$(".tab>li").click(function(){$(this).addClass("active").siblings().removeClass("active"),$(".box-wrap>ul").eq($(this).index()).addClass("show").siblings().removeClass("show")}),$("li").mouseover(function(){$(this).addClass("add")}).mouseout(function(){$(this).removeClass("add")})}})}});