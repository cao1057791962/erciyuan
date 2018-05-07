//处理网络请求的模块
import API from '../../api'
import axios from 'axios'
import handleImg from '../../utils/handleImgPath.js'

//请求当前的具体位置信息
export function getAddress(lat, lon){
return new Promise((resolve, reject)=>{
	axios.get(API.ADRESS_API, {
		params: {
			latitude: lat,
			longitude: lon
		}
	})
	.then(response=>{
		resolve(response.data.name);
	})
	.catch(error=>{
		console.log(error)
	})
})
}
//查找位置
export function setAddress(wz,lat,lon){
	return new Promise((resolve,reject)=>{
		axios.get(API.ADDRESS_AP,{
			params:{
				keyword:wz,
				offset: 0,
				limit: 20,
				latitude:lat,
				longitude:lon
			}
		}).then(
			response=>{
				resolve(response.data)
			}
		).catch(error=>{
			console.log(error)
		})
	})
}
//请求商家分类数据
export function getSellerCategory(lat, lon, templates){
	return new Promise((resolve, reject)=>{
	axios.get(API.CATEGORY_API, {
		params: {
			latitude: lat,
			longitude: lon,
			templates: templates
		}
	})
	.then(response=>{
		//过滤需要的字段
		let newData = response.data[0].entries.map(item=>{
			return {
				name: item.name,
				id: item.id,
				imgPath: handleImg(item.image_hash, 90)//处理图片路径
			}
		})
		let newData2 = [];
		//切割数组，10个为一个小数组
		while(newData.length > 0){
			let arr = newData.splice(0, 10);
			newData2.push(arr);
		}
		//将分组完成的数组进行返回
		resolve(newData2);
	})
	.catch(error=>{
		console.log(error)
	})
})
}

//请求推荐商家
export function getTopSeller(lat, lon, offset, limit){
return new Promise((resolve, reject)=>{
	axios.get(API.TOP_SELLER_API, {
		params: {
			latitude: lat,
			longitude: lon,
			offset: offset,
			limit: limit, 
			extras: ['activities', 'tags'],
			extra_filters: "home",
			terminal: 'h5'
		}
	})
	.then(response=>{
		let newData = response.data.items.map(item=>{
			return {
				name: item.restaurant.name,
				id:item.restaurant.id,
				imgPath: handleImg(item.restaurant.image_path, 130),
				acti: item.restaurant.activities.map(act=>{
					return {
						name: act.tips,
						color: act.icon_color,
						letter: act.icon_name
					}
				}),
				pinjia:item.restaurant.rating,
				isShow: false,
				yueshou:item.restaurant.recent_order_num,
				juli:item.restaurant.distance,
				minprice:item.restaurant.float_minimum_order_amount,
				peison:item.restaurant.float_delivery_fee,
				peisontime:item.restaurant.order_lead_time
			}
		})
		resolve(newData);
	})
	.catch(error=>{
		console.log(error)
	})
})
}
//获取商家，商品
 export function getSeller(kw,lat,lon){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETSELLER,{
			params:{
				kw,
				latitude:lat,
				longitude:lon,
				city_id:11
			}
		}).then(
			response=>{
				let newData = response.data.restaurants.map(item=>{
				return {
					name: item.name,
					id: item.id,
					rating:item.rating,
					tags:item.tags,
					imgPath: handleImg(item.image_path, 90)//处理图片路径
					}
				})
				resolve(newData)
			}
		).catch(error=>{
			reject(error)
		})
	})
}
 //获取发现商品导航
 export function getnav(){
 	return new Promise((resolve,reject)=>{
 		axios.get(API.GETNAV,{
 			params:{
 				platform:1,
 				block_index:0
 			}
 		}).then(
 			response=>{
 				let newData = response.data[1].map(item=>{
				return {
					titleColor:item.title_color,
					title:item.title,
					subtitle:item.subtitle,
					id: item.id,
					imgPath: handleImg(item.main_pic_hash, 90)//处理图片路径
					}
				})
				resolve(newData)
 			}
 		).catch(
 			error=>{
 				console.log(error)
 			}
 		)
 	})
 }
 //获取店铺
 export function getshop(id){
 	return new Promise((resolve,reject)=>{
 		axios.get(API.GETSHOP,{
 			params:{
 				restaurant_id:id
 			}
 		}).then(
 			response=>{
 				let newdata=response.data.map(item=>{
 					return {
 						name:item.name,
 						description:item.description,
 						foods:item.foods.map(act=>{
 							return {
 								rating:act.rating,
 								name:act.name,
 								month:act.month_sales,
 								rate:act.satisfy_rate,
 								imagepath:handleImg(act.image_path,90),
 								price:act.specfoods.map(ar=>{
 									return {
 										jia:ar.price
 									}
 								})
 							}
 						})
 					}
 				})
 				resolve(newdata)
 			}
 		).catch(error=>{
 			reject(error)
 		})
 	})
 }
 /*157866166?
 extras[]=activities&extras[]=albums&
 extras[]=license&extras[]=identification&extras[]=qualification&
 terminal=h5&latitude=28.45384&longitude=115.951782*/
export function getfalse(){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETLIST).then(response=>{
			let newData = {
				imgPath:handleImg(response.data.image_path, 130, 130),
				name:response.data.name,
				grade:response.data.rating,
				sale:response.data.recent_order_num,
				time:response.data.order_lead_time,
				km:response.data.distance,
				info:response.data.promotion_info,
				activities:response.data.activities.map(act=>{
					return {
						name:act.icon_name,
						color:act.icon_color,
						title:act.description,
					}
				})
			}
			resolve(newData)
		}).catch(error=>{
			reject(error)
		})
	})
}
export function getList(id,lat,lon){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETLIST+"/"+id,{
			params:{
				extras: ['activities','albums','license','identification','qualification'],
				terminal: 'h5',
				latitude:lat,
				longitude:lon
			}
		}).then(response=>{
			resolve(response.data)
		}).catch(error=>{
			reject(error)
		})
	})
}
//优惠活动/
export function youhui(){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETYOUHUI).then(
			response=>{
				let newData = response.data.map(item=>{
				return {
					title:item.corner_marker,
					name:item.title,
					jinbi:item.points_required,
					youhui:item.original_price,
					imgPath: handleImg(item.image_hash, 90)//处理图片路径
					}
				})
				resolve(newData)
			}
		).catch(error=>{
			reject(error)
		})
	})
}
//热门搜索
export function search(lat,lon){
	return new Promise((resolve,reject)=>{
		axios.get(API.SEARCH,{
			params:{
				latitude:lat,
				longitude:lon
			}
		}).then(
			response=>{
				resolve(response.data)
			}
		).catch(error=>{
			reject(error)
		})
	})
}//
//通过查找获取更多商家
/*
 offset=0&limit=15&
 keyword=%E7%81%AB%E9%94%85
 &latitude=22.626024&longitude=113.837884
 &search_item_type=3&is_rewrite=1
 &extras[]=activities&extras[]=coupon&terminal=h5
 * */
export function mostshop(keyword,lat,lon){
	return new Promise((resolve,reject)=>{
		axios.get(API.GETSHOP_MOST,{
			params:{
				offset:0,
				limit:15,
				keyword:keyword,
				latitude:lat,
				longitude:lon,
				search_item_type:3,
				is_rewrite:1,
				extras:["activities","coupon"],
				terminal: 'h5'
			}
		}).then(
			response=>{
				let newData =response.data.inside[3].restaurant_with_foods.map(item=>{
					return {
						foods:item.foods.map(act=>{
							return {
								id:act.id,
								restaurantid:act.restaurant_id,
								name:act.name,
								price:act.price,
								haoping:act.satisfy_rate,
								huodon:act.activities.map(ac=>{
									return{
										tips:ac.tips,
										color:ac.icon_color
									}
								}),
								yue:act.month_sales,
								img:handleImg(act.image_path, 90)
							}
						}),
						name:item.restaurant.name,
						isShow: false,
						qison:item.restaurant.float_minimum_order_amount,
						juli:(item.restaurant.distance/1000).toFixed(2),
						free:item.restaurant.float_delivery_fee,
						id:item.restaurant.id,
						peison:item.restaurant.order_lead_time,
						pinjia:item.restaurant.rating,
						imgPath:handleImg(item.restaurant.image_path,90)
					}
				});
				let newData1=response.data.inside[3].filter.single.map(item=>{
					return{
						name:item.name
					}
				});
				let newData2=[];
				newData2.push(newData,newData1)
				resolve(newData2)
			}
		).catch(error=>{
			reject(error)
		})
	})
}
/*
 /restapi/ugc/v3/restaurants/
 155686820/ratings?has_content=true&offset=0&limit=8
 * */
export function pinjia(id){
	return new Promise((resolve,reject)=>{
		axios.get(API.PINJIA+"/"+id+"/"+"ratings",{
			params:{
				has_content:true,
				offset:0,
				limit:15
			}
		}).then(response=>{
			let newdata=response.data.map(item=>{
				return {
					user:item.username,
					time:item.time_spent_desc,
					ratetime:item.rated_at,
					text:item.rating_text
				}
			})
			resolve(newdata)
		}).catch(error=>{
			reject(error)
		})
	})
}
