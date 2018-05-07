import API from "../api"
import axios from 'axios'
/*获取地址*/
export function getaddress(id){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETADDRESS,{
			params:{
				__t:id
			}
		}).then(response=>{
			resolve(HandelArr(response.data.data.cities))
		}).catch(error=>{
			reject(error)
		})
	})
}
/*分类*/
function HandelArr(data){
	let obj = {};
	data.map(item=>{
		let letter = item.pinyin[0];
		if(!obj[letter])
		{
			obj[letter]=[]
		}
		obj[letter].push(item)
	})
	let keys=Object.keys(obj);
	keys.sort();
	let newList = keys.map(letter=>{
        return {
            letter,
            list: obj[letter]
        }
   })
	return newList
}
/*轮播图*/
export function getbanner(id){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETBANNER,{
			params:{
				__t:id
			}
		}).then(response=>{
			let newdata=response.data.data.billboards.map(item=>{
				return {url:item.imageUrl}
			})
			resolve(newdata)
		}).catch(error=>{
			reject(error)
		})
	})
}
/*正在热映*/
export function getnow(id,page,count){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETNOW,{
			params:{
				__t:id,
				page,
				count
			}
		}).then(response=>{
			let newdata=response.data.data.films;
			resolve(newdata)
			}).catch(error=>{
				reject(error)
			})
		})
}
/*即将上映*/
export function getcoming(id,page,count){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETCOMING,{
			params:{
				__t:id,
				page,
				count
			}
		}).then(response=>{
			let newdata=response.data.data.films;
			resolve(newdata)
			}).catch(error=>{
				reject(error)
			})
		})
}
/*电影院*/
export function getcinema(id){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETCINEMA,{
			params:{
				__t:id
			}
		}).then(response=>{
			resolve(HandleMovies(response.data.data.cinemas))
		}).catch(error=>{
			reject(error)
		})
	})
}
function HandleMovies(arr){
	let obj={};
	arr.map(item=>{
		let letter=item.district.name;
		if(!obj[letter]){
			obj[letter]=[]
		}
		obj[letter].push(item)
	})
	let keys=Object.keys(obj);
	keys.sort();
	let newList = keys.map(letter=>{
        return {
            letter,
            list: obj[letter]
        }
   })
	return newList
	
}


export function getbannerlist(){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETBANNERLIST).then(response=>{
			let newdata=len(response.data.data,0,8);
			let newdata1=len(response.data.data,10,13);
			let newdata2=response.data.data[13].imageSrc;
			let newdata3=response.data.data[14].imageSrc;
			let newdata4=response.data.data[13].products;
			let newdata5=response.data.data[13].products;
			let newda=[]
			let newdata6=response.data.data[14].products;
			newda.push(newdata,newdata1,newdata2,newdata3,newdata5,newdata6)
			resolve(newda)
		}).catch(error=>{
			reject(error)
		})
	})
}
function len(arr,j,n)
{
	let ob=[]
	for(var i=j;i<n;i++)
	{
		ob.push(arr[i])
	}
	return ob
}

export function getsp(page,num){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETSP,{
			params:{
				page,
				num
			}
		}).then(response=>{
			let newdata=response.data.data.list.map((item)=>{
				return {
					name:item.masterName,
					shouchu:item.displaySalesCount,
					arr:item.skuList.map(act=>{
						return{
							id:act.id,
							img:act.image,
							price:act.price,
							height:act.masterName
						}
					})
				}
			});
			resolve(newdata)
		}).catch(error=>{
			reject(error)
		})
	})
}

//电影详情
export function getxx(id,time){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETXX+"/"+id,{
			params:{
				_t:time
			}
		}).then(response=>{
			resolve(response.data.data.film)
		}).catch(error=>{
			reject(error)
		})
	})
}
