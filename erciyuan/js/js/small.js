define(["jquery"],function(){return function(){$(function(){var n=0;$("#menu ul li").click(function(){$(this).find("span").addClass("act").parent().siblings().find("span").removeClass("act"),n=$(this).index()+1;var i=$("#louti"+n).offset().top;$("body,html").animate({scrollTop:i},500)}),$("#menu");var i=$(window),o=$(document);i.scroll(function(){if(2600<=o.scrollTop()){$("#menu").show();var i=Math.floor(o.scrollTop()/600);$("#menu ul li span").eq(i-1).addClass("act").parent().siblings().find("span").removeClass("act")}else $("#menu").hide()})}),$(window).scroll(function(){600<$(this).scrollTop()?$(".to-top").css("display","block"):$(".to-top").css("display","none")}),$(".to-top").click(function(){var i,n=$(window).scrollTop();clearInterval(i),i=setInterval(function(){0<n?(n-=50,$(window).scrollTop(n)):(clearInterval(i),$(window).scrollTop(0))},10)}),$("form input").eq(0).keyup(function(){$.ajax({type:"get",url:"../data/shop.json",dataType:"json",success:function(i){i=i.data;var n=$("form input").eq(0).val(),o="";for(var t in i)0<=i[t].title.indexOf(n)&&(o+='<li data-id="'+i[t].id+'">'+i[t].title+"</li>");""!=$("form input").eq(0).val()?$(".searchbox").html(o):null==$("form input").eq(0).val()&&$(".searchbox").remove(".searchbox li"),$(".searchbox").find("li").click(function(){var i=$(this).html(),n=$(this).attr("data-id");$("form input").eq(0).val(i),$(".search").click(function(){location.href="../html/list-shop.html?"+n})})}})}),$(".b-left ul li").mouseover(function(){$(this).find("div").eq(0).css("display","block")}).mouseout(function(){$(this).find("div").eq(0).css("display","none")});var i=JSON.parse($.cookie("admin"));i&&($(".admin").html(i),$(".admin").css("width","100px"),$(".dis").css("display","none")),$(".top>img").click(function(){location.href="../../html/index.html"})}});