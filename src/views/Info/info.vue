<template>
	<div class="D-div">
		<div class="info-header">
			<div class="info-header-title">
				个人中心
			</div>
		</div>
		<div class="info-header-main">
			<div class="title">
				<div class="personMsg">
					<img class="pic_t" src="../../../static/icon1.png"/>
					<div class="personInfo">
						<span class="info-username">{{ icon }} {{ username }}</span>
						<span>手机号：{{ phone }}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="info-header-content">
			<van-cell title="修改密码" @click="goUpdatePwd" border is-link />
		</div>
		<div class="info-header-exit">
			<van-button type="primary" size="large" @click="exit">退出当前账号</van-button>
		</div>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				indexList:[],
				username:'',
				phone : '',
				icon:''
			}
		},
		components: {
			
		},
		mounted() {
			let tokenPrefix=localStorage.getItem("stuToken").split(":")[0];
			let userId = localStorage.getItem("stuToken").split("-")[2];
			this.$axios.get(this.$location.getAccountById,{params:{"id":userId,"tokenPrefix":tokenPrefix}}).then(res=>{
				if(tokenPrefix==='appuser'){
					this.username = res.data.data.username
					this.phone = res.data.data.phone
					this.icon = res.data.data.icon
				}else if(tokenPrefix==='appstudent'){
					this.username = res.data.data.studentName
					this.phone = res.data.data.phone
				}else{
					this.username = res.data.data.parentName
					this.phone = res.data.data.parentPhone
				}
				
			});
		},
		methods: {
			exit () {
				Dialog.confirm({
				  title: '提示',
				  message: '确定要退出吗？',
				})
				  .then(() => {
				    localStorage.removeItem("stuToken");
				    this.$router.push("/");
				  })
				  .catch(() => {
				    
				  });
			},
			// 跳转修改密码
			goUpdatePwd() {
				this.$router.push("/Updateps");
			}
		}
	}
</script>

<style scoped>
	.D-div {
		height: 100%;
		overflow: auto;
			/* background: #F2F2F2; */
		}
		.D-div .info-header {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 110px;
			line-height: 110px;
			background-color: #42d49b;
			z-index: 999;
		}
		.info-header-title {
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
		.info-header-content {
			margin-top: 20px;
			font-weight:bold;
		}
		.D-div .info-header-main {
			position: relative;
			display: flex;
			box-sizing: border-box;
			width: 100%;
			padding: 10px 16px;
			margin-top: 160px;
			overflow: hidden;
			align-items: center;
			font-size: 14px;
			line-height: 24px;
		}
		.info-username {
			font-weight: bold;
		}
		.D-div .info-header-main .title {
			flex: 1;
		}
		.D-div .info-header-main .title .personMsg {
			display: flex;
			align-items: center;
		}
		.D-div .info-header-main .title .personMsg img {
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
		}
		.D-div .info-header-main .title .personMsg .personInfo {
			display: flex;
			flex-direction: column;
			margin-left: 16px;
		}
		.info-header-exit {
			margin: 60px 0;
		}
		.info-header-exit .van-button {
			width: 80%;
			margin-left: 10%;
			height: 44px;
			border-radius: 44px;
			background-color: #4ad79e;
			border: 1px solid #4ad79e;
		}
	
	.Ddiv2 .box .pic_t{
		width: 150px;
		height: 150px;
		border-radius: 50%;
		margin-top: 20px;
		margin-left:20px;
		float:left;
	}
	.Ddiv2 .box h3{
		 margin-top: 30px;
	}
	.Ddiv2 {
		width: 100%;
		height: 221px;
		background: #F38232;
		text-align: center;
	}

	.IM {
		width: 100%;

	}

	.x-div1 {
		 
		background: #FFFFFF;
	}

	.x-div2 {
		width: 100%;
		display: flex;

	}


	.x-div2>div {
		width: 100%;
		height: 55px;
		border-bottom: 1px solid #dedede;
		font-size: 18px;
		display: flex;
		position: relative;
		align-items: center;
	}

	.x-div2 img {
		width: 40px;
		height: 40px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.pbsg {
		position: absolute;
		right: 20px;
	}

	.pbsg1 {
		position: absolute;
		right: 40px;
	}

	.pars {
		margin-top: 60%;
		padding-bottom: 60%;
		width: 100%; 
	}

	.Ddiv2>div:nth-child(1) {
		text-align: center;
		padding-top: 10px;
		color: #FFFFFF;
		padding-bottom: 10px;
		font-size: 20px;
	}

	.Ddiv2 input {
		border: none;
		border-radius: 5px;
		height: 35px;
		padding-left: 5px;
	}

	.Ddiv2>div:nth-child(2) {
		width: 100%;
		font-size: 20px;
		padding-bottom: 10px;
	}

	.Ddiv2>div:nth-child(3) {
		width: 100%;
		font-size: 20px;
	}

	.Ddiv2>div>span {
		color: #FFFFFF;
		margin-right: 10px;
	}

	.Ddiv2>button {
		border: none;
		background: #FFFFFF;
		color: #F38232;
		margin-top: 20px;
		border-radius: 5px;
		border: 1px solid #FFFFFF;
		font-size: 16px;
		width: 60px;
		height: 40px;

	}

	.Ddiv2>button:hover {
		background: red;
		color: #FFFFFF;
	}

	.box div{
		float:left;
		margin-left:20px;
	}

	.row_c {
		font-size: 14px;
		text-align: center;
		color: #2d2d2d;
	}

	.row_c img{
		width: 45px;
		height: 45px;
	}
	h1{
		position: relative;
		top: 83px;
	}
	#exit{
		height: 70px;
		bottom: 58px;
		position: absolute;
		font-size: 40px;
	}
</style>
