var bg=document.getElementsByClassName("bg")[0];
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
bg.style.height=document.documentElement.clientHeight+"px";
var oBanner = document.getElementById("banner");
var aLi = document.querySelectorAll("#banner>ul>li");
var aBtn = document.getElementById("btn").getElementsByTagName("a");
var iNow = 0;
var Next = 0;
var timer = null;
for(var i=0;i<aBtn.length;i++){
	aBtn[i].index = i;
	aBtn[i].onmouseover = function(){
		for(var j=0;j<aBtn.length;j++){
			aBtn[j].className = '';
		}
		this.className = "active";
		move(aLi[iNow],{"opacity":0});
		move(aLi[this.index],{"opacity":100});
		//同步操作
		Next = this.index
		iNow = Next;
	}	
}
//轮播停止
//oBanner.onmouseover = function(){
//	clearInterval(timer)
//}
////轮播开始
//oBanner.onmouseout = function(){
//	autoPlay()
//}
autoPlay()
//自动轮播
function autoPlay(){
	timer = setInterval(function(){
		if(Next==aLi.length-1){
			Next = 0;
		}else{
			Next++;
		}
		toImg()
	},3000)
}

//淡入淡出轮播的原理
function toImg(){
	move(aLi[iNow],{"opacity":0});
	move(aLi[Next],{"opacity":100});
	iNow = Next;
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].className = '';
	}
	aBtn[Next].className = "active";
}
//
var ma=document.getElementsByClassName("main")[0];
var arr=document.getElementsByClassName("arr")[0];
arr.onclick=function(){
	move(ma,{"top":0});
}
var l=ma.offsetTop;
window.onscroll=function(){
	var h=document.documentElement.scrollTop||document.body.scrollTop;
	move(ma,{"top":l-h});
}
var box=document.getElementsByClassName("article-f")[0];
var pp=new Promise(function(resolve,reject){
	ajax("get","js/list.json",{},function(data){
	var data = data.data;
	for(var i=0;i<8;i++)
{
	box.innerHTML+=`
		<dl class="wrap" data-id=${data[i].id}>
			<dt>
				<a href="##">
						<img src="images/${data[i].img}"/>
				</a>
			</dt>
			<dd>
				<div class="bo">
					<p>
						<i>${data[i].title}</i><span>${data[i].total}</span>
					</p>
					<p>${data[i].en}</p>
					<p>${data[i].price}</p>
					<p>${data[i].jianyi}</p>
					<p>
					<a href="##">加入购物车</a>
					</p>
				</div>
			</dd>
		</dl>
	`
}
var aLi = box.getElementsByTagName("dt");
	for(var i=0;i<aLi.length;i++){
		aLi[i].onclick = function(){
			var num = this.parentNode.getAttribute("data-id");
			location.href = "listshop.html?"+num;
			
		}
	}
	resolve();
	})
})
pp.then(function(){
var b=document.getElementsByClassName("bo");
var wrap=document.getElementsByClassName("wrap");
for(let j=0;j<b.length;j++)
{	
	wrap[j].onmouseover=function(){
		move(b[j],{"top":-50});
	}
	wrap[j].onmouseout=function(){
		move(b[j],{"top":0});
	}
	var a=document.getElementsByClassName("bo")[j].getElementsByTagName("a")[0];
	a.onclick=function(){
		var num=wrap[j].getAttribute("data-id");
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
		setCookie("shop",str,30)
	}
}

})
