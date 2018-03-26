var num = location.href.split("?")[1];
var obj=JSON.parse(getCookie('shop')||'{}');
var ob=JSON.parse(getCookie("shuju")||'{}');
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
var art=document.getElementById("article-wrapper");
var pi=new Promise(function(resolve,reject){
	ajax("get","js/list.json",{},function(data){
	var data = data.data;
	for(var i=0;i<data.length;i++){
		if(num == data[i].id){
			var d = data[i].list;
			art.innerHTML=`
					<article class="article content clearfix">
				<img src="images/${data[i].mimg}" />
				<div class="box">
					<section class="left">
						<section class="left-t clearfix">
							<h1>${data[i].total}<span>${data[i].en}</span></h1>
							<span>${data[i].price}</span>
							<section class="yuying">
								<a href="##" class="iconfont icon-icon--"></a>
								<i>提交订单或直接进入订单详情页即可上传语音</i>
							</section>
						</section>
						<section class="left-f">
							<p><i class="iconfont icon-huomiao"></i>优惠活动</i></p>
							<strong>${d.youhui}</strong>
							<strong>${d.huodon}</strong>
						</section>
					</section>
					<section class="right">
						<div class="right-t clearfix">
							<p>建议食用人数</p>
							<span class="active">2-4人食</span>
							<span>5-8人食</span>
							<span>10-12人食</span>
							<span>15-20人食</span>
						</div>
						<div class="right-c clearfix">
								<p>${d.taocan[0]}</p>
								<p>${d.size[0]}</p>
								<p>${d.height[0]}</p>
								<p>${d.tiandu}</p>
						</div>
						<div class="r-center clearfix">
							<img src="images/shop.jpg" />
							<p>许愿树单品（赠送）</p>
						</div>
						<div class="right-f clearfix">
							<button class="btn">加入购物车+</button>
							<button class="btn1">立即购买</button>
						</div>
					</section>
				</div>
				<img src="images/${d.im[0]}" />
				<img src="images/${d.im[1]}" />
				<div class="pic1 clearfix">
					<div class="img">
						<img src="images/${d.im[2]}" />
					</div>
					<div class="neiron">
						<p>手工打发而成的进口鲜奶油</p>
						<p>口感绵密，精致细腻</p>
						<p>这份雪白让你有如获至宝的幸福感</p>
					</div>
				</div>
				<div class="pic1 clearfix">
					<div class="neiron1">
						<p>选用进口白巧克力</p>
						<p>极致工艺将白巧克力擦出</p>
						<p>如初雪般的轻柔</p>
					</div>
					<div class="img2">
						<img src="images/${d.im[3]}" />
					</div>
				</div>
			</article>
			`
		}
		
	}
	resolve(d);
})
});

pi.then(function(d){
	var bt=document.getElementsByClassName("right-t")[0].getElementsByTagName("span");
	var pt=document.getElementsByClassName("right-c")[0].getElementsByTagName("p");
	for(let i=0;i<pt.length;i++)
	{
		bt[i].onclick=function(){
			for(let j=0;j<pt.length;j++)
			{
				bt[j].className="";
			}
			bt[i].className="active";
			pt[0].innerHTML=d.taocan[i];
			pt[1].innerHTML=d.size[i];
			pt[2].innerHTML=d.height[i];
			pt[3].innerHTML=d.tiandu;
		}
		
	}
	var btn=document.getElementsByClassName("btn")[0];
	var btn1=document.getElementsByClassName("btn1")[0];
	btn.onmousedown=function(){
		this.style.border="1px solid #f40";
		var n = obj[num];
		if(!n){
				n1=1;
				obj[num] = n1;
			}
		if(n){
			var m=obj[num];
			m=Number(m);
			obj[num]=m+1;
		}
		var str = JSON.stringify(obj)
		setCookie("shop",str,30);
	}
	btn.onmouseup=function(){
		this.style.border="0";
	}
	btn1.onclick=function(){
		location.href="shopcart.html";
	}
})

