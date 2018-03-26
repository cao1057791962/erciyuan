var obox = document.getElementsByClassName("box")[0];
var ob=JSON.parse(getCookie("shuju")||"{}");
var dl=document.getElementsByClassName("dl")[0];
var zc=document.getElementsByClassName("zc")[0];
var z=document.getElementsByTagName("em")[0];
if(ob)
{
	z.innerHTML=ob.username;
	z.style.display="inline-block";
	z.style.color="red";
	dl.style.display="none";
	zc.style.display="none";
}
if(!ob.username)
{	
	z.style.display="none";
	dl.style.display="inline-block";
	zc.style.display="inline-block";
}
 if(getCookie("shop")){
 var num = JSON.parse(getCookie("shop")||'{}');
 	var pi= new Promise(function(resolve,reject){
 		ajax("get","js/list.json",{},function(data){
 		var data=data.data;
 		for(var j in num){
 			for(var i in data)
 			{	
 				if(j==data[i].id)
 				{	
 					obox.innerHTML+=`<div class="list clearfix" data-id=${j}>
						<p><span>${data[i].title}</span><b>${data[i].list.youhui}</b></p>
						<div class="shop clearfix">
							<input type="checkbox" checked="checked" class="hedui"/>
							<div class="img">
								<img src="images/${data[i].img}" />
							</div>
							<div class="right clearfix">
								<div class="r-left clearfix">
									<h2>${data[i].total}</h2>
									<h3>${data[i].en}</h3>
									<h4>${data[i].jianyi}</h4>
									<h4 class="price">单价:${data[i].price}</h4>
									<select>
										<option>Happy Birthday</option>
										<option>生日快乐</option>
										<option>我爱你</option>
								   </select>
								</div>
								<div class="r-right clearfix">
									<p class="prices">小计:￥${parseInt(data[i].price.slice(1)*num[j])}</p>
									<div class="input-wrap">
										<i class="dd">删除</i>
										<a href="##" class="del">-</a>
										<input type="text" value="${num[j]}"/>
										<a href="##" class="add">+</a>
									</div>
								</div>
							</div>
						</div>
					</div>`;
					resolve(data);
 				}
 			}
 			
 		}	
 	})
 })
 	pi.then(function(data){
 		var box=document.getElementsByClassName("list");
 		for(var i=0;i<box.length;i++)
 		{
			
 			box[i].onclick=function(e){
 				var e=e||event;
				var target=e.target||e.srcElement;
				var dt=this.getAttribute("data-id");
				if(target.className=="dd")
				{
					delete num[dt];
 					this.remove();
 					setCookie("shop",JSON.stringify(num),30);
				}
 				if(target.className=="del")
				{
					var price=target.parentNode.parentNode.previousElementSibling.getElementsByClassName("price")[0].innerHTML.slice(4);
 					target.nextElementSibling.value--;
 					var s=target.nextElementSibling.value;
 					target.parentNode.previousElementSibling.innerHTML="小计:￥"+s*price;
 					num[dt]=s;
 					if(s<1)
 					{	
 							if(confirm("是否删除该商品！"))
 							{
 								delete num[dt];
 								this.remove();
 							}
 						else{
 							target.nextElementSibling.value=1;
 							s=target.nextElementSibling.value;
 							num[dt]=s;
 							target.parentNode.previousElementSibling.innerHTML="小计:￥"+s*price;
 						}
 					}	
 				
 					setCookie("shop",JSON.stringify(num),30);
 				}
 				if(target.className=="add")
 				{	
 					var dt=this.getAttribute("data-id");
 					var price=target.parentNode.parentNode.previousElementSibling.getElementsByClassName("price")[0].innerHTML.slice(4);
					target.previousElementSibling.value++;
					var s=target.previousElementSibling.value;
					target.parentNode.previousElementSibling.innerHTML="小计:￥"+s*price;
					num[dt]=s;
 					setCookie("shop",JSON.stringify(num),30);
 				}
 				var count=document.getElementsByClassName("count")[1];
		 		var price=document.getElementsByClassName("prices");
		 		var s=0;
		 		for(var i=0;i<price.length;i++)
		 		{	
		 			s+=Number(price[i].innerHTML.slice(4));
		 		}
		 		count.innerHTML="￥"+s;
			}
 		}
 		var count=document.getElementsByClassName("count")[1];
		var price=document.getElementsByClassName("prices");
		var s=0;
		for(var i=0;i<price.length;i++)
		{	
		 	s+=Number(price[i].innerHTML.slice(4));
		}
		count.innerHTML="￥"+s;
 		var sp=document.getElementsByClassName("count")[0].getElementsByTagName("span")[0];
 		sp.innerHTML=box.length;
 		var ar=document.getElementsByClassName("article")[0].getElementsByTagName("span")[0];
 		ar.innerHTML="&nbsp;"+box.length+"&nbsp;";
 		var xuan=document.getElementsByClassName("hedui");
 		var gou=document.getElementById("gou");
 		gou.onclick=function(){
 			if(gou.checked){
 				for(let l=0;l<xuan.length;l++){
		    	xuan[l].checked = true;
		  	 }
 			}
 			else
 			{
 				for(let z=0;z<xuan.length;z++){
		    	xuan[z].checked = false;
		  	 }
 			}
 		}
 	}
 	);
}
 