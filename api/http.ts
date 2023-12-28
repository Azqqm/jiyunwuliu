import {createUniFetch} from 'uni-app-fetch'
import {fanhui} from './types/fanhuiType'
declare module 'vue'{
	interface componentCustomProperies{
		fetch:typeof uniFetch
	}
}
const uniFetch =createUniFetch<fanhui>({
	loading:{title:'loading...'},
	baseURL:'https://slwl-api.itheima.net',
	intercept:{
		request(options){
		return options	
		},
		response(result) {
			return result
		}
	}
})
export default uniFetch