const state = {
	address: {
		longitude: 113.837356,
		latitude: 22.626153,
		city:"请输入您的城市"
	}
}
const mutations = {
	modifyLocation(state, params){
		state.address = params;
	}
}

const actions = {
	getLocation(context){
		setTimeout(()=>{
			context.commit('modifyLocation', {
						longitude: 113.837356,
						latitude: 22.626153
					})
//			var watcher = navigator.geolocation.watchPosition(
//				//定位成功(经度，纬度，海拔)
//				function(position){
//					var position=JSON.stringify(position);
//					 context.commit('modifyLocation', {
//						longitude: position.coords.longitude,
//						latitude: position.coords.latitude
//					})
//				},
//				//定位失败
//				function(error){
//					console.log(error);
//					context.commit('modifyLocation', {
//						longitude: 113.837356,
//						latitude: 22.626153
//					})
//				}
//			)
		},2000);
	},
	//用户修改地址
	userSelectLocation(context, params){
		context.commit('modifyLocation', params);
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
