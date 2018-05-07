//引入redux的功能，创建全局管理状态的对象

import { createStore} from 'redux'



const reducer = function(state, action){
    if(!state){
        state = {
        	now:true,
        	coming:false
        };
        return state
    }
    else if(action.type == 'change-listen1'){
    	return Object.assign({}, state, {now: action.value.now,coming:action.value.com});
    }
     else if(action.type == 'change-listen'){
        return Object.assign({}, state, {now: action.value.now,coming:action.value.com});
     }
}


//方式2：使用combineReducers划分模块
// const reducers = combineReducers({
//     cartList: cartListReducer,
//     userInfo: userInfoReducer
// });


const store = createStore(reducer);

export default store;
