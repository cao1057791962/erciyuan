//处理网络请求的模块
import API from '../../api'
import axios from 'axios'
import handleImg from '../../utils/handleImgPath.js'

//请求当前的具体位置信息
export function getAddressInfo(lat, lon){
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
