<template>
	<view class="a">
		<p>神领快递</p>
		<view class="a1">
			<view class="a12">
				{{typ==='mobile'?'手机号登录':'账号登录'}}
			</view>
			<view class="a13" @click="dl">
				{{typ==='mobile'?'账号登录':'手机号登录'}}
			</view>
		</view>
<Mobile v-if="typ==='mobile'"></Mobile>
<Account v-else></Account>
	</view>
</template>

<script setup>
	import Mobile from './components/mobile/mobile.vue'
	import Account from './components/account/account.vue'
import {reactive, ref} from 'vue'
const typ=ref('mobile')
const dl=()=>{
	typ.value=typ.value==='mobile'?'account':'mobile'
}
</script>

<style lang="scss">
.a{
	box-sizing: border-box;
	padding: 0rpx 34rpx 0 64rpx;
	p{
		text-align: center;
	}
	.a1{
		margin-top: 140rpx;
		display: flex;
		justify-content: space-between;
	}
}

</style>
