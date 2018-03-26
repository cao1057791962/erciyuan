var oList = document.getElementsByClassName("main")[0];
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
var pt=new Promise(function(resolve,reject){
	ajax("get","js/list.json",{},function(data){
	var data = data.data;
	for(var i=0;i<data.length;i++){
		oList.innerHTML+=`<dl class="wrap" data-id=${data[i].id}>
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
		</dl>`
		resolve();
	}
	var aLi = oList.getElementsByTagName("dt");
	for(var i=0;i<aLi.length;i++){
		aLi[i].onclick = function(){
			var num = this.parentNode.getAttribute("data-id");
			location.href = "listshop.html?"+num;
		}
	}
	
})
})
pt.then(function(){
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
		var str = JSON.stringify(obj);
		setCookie("shop",str,30)
	}
}
})
