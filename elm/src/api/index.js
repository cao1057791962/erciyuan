

//提供请求接口的模块

//图片服务器地址
const IMG_HOST = 'http://fuss10.elemecdn.com';


/*
定位当前的位置
参数：
	latitude：经度
	longitude：纬度
 */
const ADRESS_API = '/restapi/bgs/poi/reverse_geo_coding';

/*
 分类
参数：
	latitude：经度
	longitude：纬度
	templates[]=main_template
	&templates[]=favourable_template
	&templates[]=svip_template
 * */
const CATEGORY_API = '/restapi/shopping/openapi/entries';
//定位
//https://h5.ele.me/restapi/bgs/poi/search_poi_nearby?keyword=%E6%B7%B1%E5%9C%B3&offset=0&limit=20&latitude=113.837884&longitude=22.626024
/*restapi/bgs/poi/search_poi_nearby
 * ?keyword=%E6%B7%B1%E5%9C%B3%E8%A5%BF%E9%83%A8&offset=0
 * &limit=20&latitude=22.626024&longitude=113.837884*/
const ADDRESS_AP="/restapi/bgs/poi/search_poi_nearby"
/*
 推荐商家
 参数：
	latitude
	longitude
	offset
	limit
	extras[]=activities
	extras[]=tags
	extra_filters=home
	rank_id=
	terminal=h5
 * */
const TOP_SELLER_API = '/restapi/shopping/v3/restaurants';
/*/restapi/shopping/v1/typeahead
?kw=%E7%81%AB%E9%94%85
&latitude=22.626024
&longitude=113.837884
&city_id=11*/
const GETSELLER='/restapi/shopping/v1/typeahead';
/*
 /restapi/member/v1/discover?
 platform=1&block_index=0
 * */
const GETNAV="/restapi/member/v1/discover";
//restapi/member/gifts/suggest
const GETYOUHUI="/restapi/member/gifts/suggest";
/*
 /restapi/shopping/v3/hot_search_words
 ?latitude=22.626024&longitude=113.837884; 
 * */
const SEARCH="/restapi/shopping/v3/hot_search_words";
///restapi/shopping/v2/menu?restaurant_id=156972658
const GETSHOP="/restapi/shopping/v2/menu"
/*
 /restapi/shopping/v2/restaurants/search?
 offset=0&limit=15&
 keyword=%E7%81%AB%E9%94%85
 &latitude=22.626024&longitude=113.837884
 &search_item_type=3&is_rewrite=1
 &extras[]=activities&extras[]=coupon&terminal=h5
 * */
const GETSHOP_MOST="/restapi/shopping/v2/restaurants/search";
/*
 restapi/shopping/restaurant/
 157866166?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=28.45384&longitude=115.951782
 * */
const GETLIST="/restapi/shopping/restaurant";
/*
 /restapi/ugc/v3/restaurants/
 155686820/ratings?has_content=true&offset=0&limit=8
 * */
const PINJIA="/restapi/ugc/v3/restaurants"
export default {
	IMG_HOST,//处理图片路径
	ADRESS_API,//定位
	CATEGORY_API,
	ADDRESS_AP,//获取地址
	TOP_SELLER_API,
	GETSELLER,//得到商家
	GETNAV,//优惠导航
	GETYOUHUI,//优惠
	SEARCH,//查找
	GETSHOP,//得到店铺
	GETSHOP_MOST,
	GETLIST,
	PINJIA//评价
}

