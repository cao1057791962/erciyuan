const eventMap = {};

//监听事件
//$on(事件名字, 回调函数1)
//$on(事件名字, 回调函数2)
const $on = function(eventName, eventCallback){
	//判断事件是否有对应的装载事件回调的容器
	if(!eventMap[eventName]){
		eventMap[eventName] = [];//没有就创建
	}
	//将事件回调缓存在容器中
	eventMap[eventName].push(eventCallback);

}


//触发事件
//$emit(事件名字, 传递的参数);
const $emit = function(eventName, params){
//$emit = function(eventName, ...rest){
	//取得事件所对应的所有回调方法
	let eventList = eventMap[eventName];
	if(!eventList)
		return;
	//遍历所有回调方法
	eventList.map(cb=>{
		cb(params);
//		cb(...rest);
	})
}


//移除事件
//$off(eventName);//移除所有监听
//$off(eventName, callback);//移除指定监听
const $off = function(eventName, callback){
	//取得事件所对应的所有回调
	let eventList = eventMap[eventName];
	if(!callback){
		//移除所有监听
		eventMap[eventName] = null;
	}else{
		//移除指定监听
		eventMap[eventName] = eventList.filter(cb=>{
			//判断事件是否是需要移除的
			return cb != callback
		})
	}
}

export default {
	$on,
	$emit,
	$off
}







