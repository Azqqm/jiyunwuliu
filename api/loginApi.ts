import http from './http'
import {logint} from './types/loginType'
// export const loginApi =(params:logint)=>http.request({
// 	url:'/driver/login/account',
// 	methods:'POST',
// 	params
// })
export const loginApi=(params:logint)=>{
	return http({url:'/driver/login/account',methods:'POST',params})
}
export const captchaApi=(params:string)=>{
	return http({url:'/driver/register/captcha',methods:"GET",params})
}