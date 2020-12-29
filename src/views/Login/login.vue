<template>
	<div id="login">
		<div class="login-header">
			<img src="../../assets/images/header-bg.png" />
		</div>
		<div class="loginBox">
			<div class="auth-form">
				<!-- 关闭按钮 -->
				<!-- <van-icon name="close" class="closeButton" /> -->
				<van-field v-model="username" required clearable label-width="40" label="账号" maxlength="11" placeholder="请输入账号" />
				<van-field v-model="password" type="password" label-width="40" label="密码" placeholder="请输入密码" required autocomplete />
				<van-button class="loginButton" type="info" size="large" style="margin-top:1rem" @click='onLogin'>
					登录
				</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Loading } from 'vant';
	import {
		Dialog
	} from "vant";
	export default {
		data() {
			return {
				show: false,
				value: "",
				username: "",
				password: "",
				verification: "",
				ausername: false,
				logoShow : false,
				imageURL: require('../../assets/images/normal.png'),
			};
		},
		methods: {
			// changeImage(index) {
			// 	if (index == 0) {
			// 		this.imageURL = require('../../assets/images/greeting.png')
			// 	} else if (index == 1) {
			// 		this.imageURL = require('../../assets/images/blindfold.png')
			// 	} else {
			// 		this.imageURL = require('../../assets/images/normal.png')
			// 	}
			// },
			onLogin() {
				if (this.username != "") {
					if(this.username.length >= 4){
						var reg = /[\u4E00-\u9FA5]/;
						if(reg.test(this.username)){
							Dialog.alert({
								theme:'round',
								title:'提示',
								width:'70%',
								height:'30%',
								message: '账号格式有误~'
							}).then(() => {
								
							});
							return;
						}
					}else{
						Dialog.alert({
							theme:'round',
							title:'提示',
							width:'70%',
							height:'30%',
							message: '账号长度为4~12位~'
						}).then(() => {
							
						});
						return;
					}
				} else {
					Dialog.alert({
						theme:'round',
						title:'提示',
						width:'70%',
						height:'30%',
						message: '请输入账号~'
					}).then(() => {
						
					});
					return;
				}
				
				if (this.password != "") {
					if(this.password.length >= 6){
						var reg = /[\u4E00-\u9FA5]/;
						if(reg.test(this.password)){
							Dialog.alert({
								theme:'round',
								title:'提示',
								width:'70%',
								height:'30%',
								message: '密码格式有误~'
							}).then(() => {
								
							});
							return;
						}
					}else{
						Dialog.alert({
							theme:'round',
							title:'提示',
							width:'70%',
							height:'30%',
							message: '密码长度为6~12位~'
						}).then(() => {
							
						});
						return;
					}
				} else {
					Dialog.alert({
						theme:'round',
						title:'提示',
						width:'70%',
						height:'30%',
						message: '请输入密码~'
					}).then(() => {
						
					});
					return;
				}
				//输入验证成功
				this.logoShow = true;
				var data = this.$qs.stringify({
					loginName:this.username,
					loginPassword:this.password
				})
				this.$axios.post(this.$location.doLogin,data)
				.then(res=>{
					if(res.data.status == 200){
						this.$store.commit("set_token", res.data.data);
						this.$router.push("/Home")
					}else if(res.data.status == 400){
						
						Dialog.alert({
							theme:'round',
							title:'提示',
							width:'70%',
							height:'30%',
							message: '账号或密码错误~'
						}).then(() => {
							
						});
						this.logoShow = false;
					}
				}).catch(msg=>{
					Dialog.alert({
						theme:'round',
						title:'提示',
						width:'70%',
						height:'30%',
						message: '网络错误，请稍后重试~'
					}).then(() => {
						
					});
					this.logoShow = false;
				})
				
			}
		}
	}
</script>

<style scoped="scoped">
	#login {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		background-attachment: fixed;
		overflow: auto;
	}
	
	.login-header {
		display: flex;
	}
	.login-header img {
		width: 100%;
	}

	.loginBox {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 1;
		z-index: 500;
		margin: 30px 0;
	}

	.loginBox .auth-form {
		position: relative;
		width: 100%;
		max-width: 80%;
		font-size: 1.167rem;
		border-radius: 12px;
		box-sizing: border-box;
	}

	.loginBox .auth-form .van-cell::after {
		border-bottom: 1px solid #ceecfa;
	}

	.loginBox .loginButton {
		background-color: #48d69f;
		border-radius: 42px;
		height: 42px;
	}

	.loginBox .van-button--info {
		border: 1px solid #48d69f;
	}

	@media screen and (max-width: 320px) {
		.loginBox img {
			top: 0.5rem;
			transform: translate(-50%, -40%);
			width: 5rem;
		}
	}

	.loginBox .closeButton {
		position: absolute;
		right: 10px;
		top: 10px;
		font-size: 30px;
	}
</style>
