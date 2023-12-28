import {utilsType,icon} from './types/utilsType'
const utils:utilsType={
	toast(title:string='数据加载失败',icon:icon='none',mask:boolean=true){
		uni.showToast({
			title,
			icon,
			mask
		})
	}
}
uni.utils=utils