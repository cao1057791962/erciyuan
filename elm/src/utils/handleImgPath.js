import API from '../api'

function handleImg(path, size){
	if(!path){
		return '';
	}
	if(path.endsWith('png')){
		path = path + '.png'
	}
	else if(path.endsWith('jpeg')){
		path = path + '.jpeg'
	}
	
	path = API.IMG_HOST + '/' + path + `?imageMogr/format/webp/thumbnail/!${size}x${size}r/gravity/Center/crop/${size}x${size}/`;
	
	return path;
	
}

export default handleImg;