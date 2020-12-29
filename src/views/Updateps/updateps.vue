<template>
	<div class="D-div">
		<!-- <van-nav-bar
		  title="修改密码"
		  left-arrow
		  @click-left="onClickBack"
		/> -->
		<div class="event-header">
			<div class="event-header-title">
				<i class="el-icon-back" @click="reback"></i> 修改密码
			</div>
		</div>
		<!-- <div class="update-from"> -->
			<div class="com-content1">
			
			<van-form label-width="80" colon label-align="right">
				<van-field label="原密码" v-model="oldPassword" name="原密码" placeholder="请输入原密码" type="password"/>
				<van-field label="新密码" v-model="newPassword" name="新密码" placeholder="请输入新密码" type="password"/>
				<van-field label="确认密码" v-model="sNewPassword" name="确认密码" placeholder="请输入确认密码" type="password"/>
		
				<div style="margin: 16px;">
					<!-- <van-button class="" @click="onClickBack" round type="danger" native-type="button">
						返回
					</van-button> -->
					<van-button round block @click="onPassword" type="primary" native-type="submit" style="background-color:#4bd79d;">
					  提交
					</van-button>
				</div>
			</van-form>
		</div>
		
		<!-- <van-button id="exit" type="primary" block @click="exit">退出当前账号</van-button> -->
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
				oldPassword: "",
				newPassword: "",
				sNewPassword: "",
				tokenPrefix:""
			};
		},
		methods: {
			onPassword() {				
				if (this.oldPassword != "") {
					if(this.oldPassword.length >= 6){
						var reg = /[\u4E00-\u9FA5]/;
						if(reg.test(this.oldPassword)){
							Dialog.alert({
								theme:'round',
								title:'提示',
								width:'70%',
								height:'30%',
								message: '旧密码格式有误~'
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
							message: '旧密码长度为6~12位~'
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
						message: '请输入旧密码~'
					}).then(() => {
						
					});
					return;
				}
				if (this.newPassword != "") {
					if(this.newPassword.length >= 6){
						var reg = /[\u4E00-\u9FA5]/;
						if(reg.test(this.newPassword)){
							Dialog.alert({
								theme:'round',
								title:'提示',
								width:'70%',
								height:'30%',
								message: '新密码格式有误~'
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
							message: '新密码长度为6~12位~'
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
						message: '请输入新密码~'
					}).then(() => {
						
					});
					return;
				}
				if(this.sNewPassword == ""){
					Dialog.alert({
						theme:'round',
						title:'提示',
						width:'70%',
						height:'30%',
						message: '确认密码不能为空~'
					}).then(() => {
						
					});
					return;
				}
				if (this.newPassword != this.sNewPassword) {
					Dialog.alert({
						theme:'round',
						title:'提示',
						width:'70%',
						height:'30%',
						message: '确认密码与新密码必须一致~'
					}).then(() => {
						
					});
					return;
					
				} 
				//输入验证成功
				// this.logoShow = true;
				let tokenPrefix=localStorage.getItem("stuToken").split(":")[0];
				let userId = localStorage.getItem("stuToken").split("-")[2];
				//alert(this.oldPassword);
				var data = this.$qs.stringify({
					id:userId,
					oldPassword:this.oldPassword,
					newPassword:this.newPassword,
					tokenPrefix:tokenPrefix
				})
				
				this.$axios.post(this.$location.updatePassord,data)
				.then(res=>{
					if(res.data.status == 200){
						// this.$store.commit("set_token", res.data.data);
						alert("修改成功!")
						this.$router.push("/Info")
					}else if(res.data.status == 400){
						
						Dialog.alert({
							theme:'round',
							title:'提示',
							width:'70%',
							height:'30%',
							message: '修改失败~'
						}).then(() => {
							
						});
						// this.logoShow = false;
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
					// this.logoShow = false;
				})
				
			},
			reback () {
				history.back()
			 }
		}
	}
</script>


<style>
	.event-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 110px;
		line-height: 110px;
		background-color: #42d49b;
		z-index: 999;
	}

	.event-header-title {
		position: absolute;
		width: 90%;
		height: 70px;
		line-height: 70px;
		top: 75px;
		left: 5%;
		color: #3ed399;
		background-color: #fff;
		box-shadow: 0px 0px 5px #bad2ca;
		border-radius: 8px;
		text-align: center;
		font-size: 16px;
		font-weight: bold;
	}

	.com-content1 {
		margin-top: 110px;
		padding: 55px 16px !important;
		height: 315px;
	}

	@import url("../../../static/css/comm.css");
</style>
