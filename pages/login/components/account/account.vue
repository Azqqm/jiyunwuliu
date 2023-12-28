<template>
	<view>
		<van-form @submit="onSubmit">
		  <van-cell-group inset>
		    <van-field
		      v-model="username"
		      name="用户名"
		      label="用户名"
		      placeholder="用户名"
		      :rules="[{ required: true, message: '请填写用户名' }]"
		    />
		    <van-field
		      v-model="password"
		      type="password"
		      name="密码"
		      label="密码"
		      placeholder="密码"
		      :rules="[{ required: true, message: '请填写密码' }]"
		    />
		  </van-cell-group>
		  <div style="margin: 16px;">
		    <van-button round block type="primary" native-type="submit">
		      提交
		    </van-button>
		  </div>
		</van-form>
	</view>
</template>

<script setup>
import { createApp } from 'vue';
import { Form, Field, CellGroup } from 'vant';

const app = createApp();
app.use(Form);
app.use(Field);
app.use(CellGroup);








</script>

<style lang="scss">

</style>
