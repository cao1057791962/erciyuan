define(["jquery"],function(){return function(){var n=JSON.parse(localStorage.shopcart||"[]");new Promise(function(i,e){$.ajax({type:"get",url:"../data/shop.json",dataType:"json",success:function(e){e=e.data;var t="";for(var a in n)for(var r=0;r<e.length;r++)a==e[r].id&&(t+='<div class="cart-box clearfix" data-id="'+a+'"><div><input type="checkbox" class="select"/></div><div><a href="##"><img src="../images/'+e[r].img+'" /></a><p>'+e[r].title+"</p><span>"+e[r].price+'</span><div><span class="del1">-</span><label>'+n[a]+'</label><span class="add1">+</span></div><sapn class="you">有货</sapn><sapn class="prices">￥'+(n[a]*e[r].price.slice(1)).toFixed(2)+'</sapn><a href="JavaScript:;" class="delbtn">删除</a></div></div>',$(".c-center").html(t));$(".delbtn").click(function(){$(this).parent().parent().remove();var e=JSON.parse(localStorage.shopcart||"[]");delete e[$(this).parent().parent().attr("data-id")];var t=JSON.stringify(e);localStorage.shopcart=t}),$(".del1").click(function(){var e=$(this).next().html();if(1<e){e--,$(this).next().html(e),$(this).parent().next().next().html("￥"+(e*$(this).parent().prev().html().slice(1)).toFixed(2)),(a=JSON.parse(localStorage.shopcart||"[]"))[$(this).parent().parent().parent().attr("data-id")]=e;var t=JSON.stringify(a);localStorage.shopcart=t;for(var a=0,r=0;r<$(".prices").length;r++)a+=Number($(".prices").eq(r).html().slice(1));$(".allprice").html("￥"+a.toFixed(2))}}),$(".add1").click(function(){var e=$(this).prev().html();e++,$(this).prev().html(e),$(this).parent().next().next().html("￥"+(e*$(this).parent().prev().html().slice(1)).toFixed(2)),(a=JSON.parse(localStorage.shopcart||"[]"))[$(this).parent().parent().parent().attr("data-id")]=e;var t=JSON.stringify(a);localStorage.shopcart=t;for(var a=0,r=0;r<$(".prices").length;r++)a+=Number($(".prices").eq(r).html().slice(1));$(".allprice").html("￥"+a.toFixed(2))}),$(".select").click(function(){$(this).prop("checked")?$(this).parent().parent().css("background","#fef4f4"):$(this).parent().parent().css("background","none")}),$(".all").click(function(){$(this).prop("checked")?($(".select").prop("checked",!0),$(".select").parent().parent().css("background","#fef4f4")):($(".select").prop("checked",!1),$(".select").parent().parent().css("background","none"))});var c=0;for(var r in n)c+=Number(n[r]);$(".h-top p b").html(c),$(".last a span").html(c);var s=$(".prices");i(s)}})}).then(function(a){for(var e=0,t=0;t<a.length;t++)e+=Number(a.eq(t).html().slice(1));$(".allprice").html("￥"+e.toFixed(2)),$(".fukuan").click(function(){for(var e=0,t=0;t<a.length;t++)e+=Number(a.eq(t).html().slice(1));$(".allprice").html("￥"+e.toFixed(2))})})}});