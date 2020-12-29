<template>
	<div id="app" >
		<router-view />
		<van-tabbar v-model="active" @change="onChange" v-show="$store.state.isShowBar" >
			<van-tabbar-item icon="home-o" to="/Home" >首页</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/Attence">考勤</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/Hygiene">卫生</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/Leave">请假</van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/Info" >我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				active: 0
			};
		},
		computed: {
			//...mapState(['hasLogin'])
		},
		methods: {
			onChange(num) {
				//切换时更新
				this.active = num;
				// 判断是否登录
				if (this.active == 2) {
					if (null == localStorage.getItem('stuToken')) {
						console.log("未登录，进入登录界面");
						this.$router.push('/Login')
						//window.href="/Login"
						// 登录以后改变我们vuex的状态
					} else {
						console.log("已登录，进入用户页面");
						this.$router.push('/Info')
					}
				}
			},
			onClickLeft() {
				// Toast('返回');
			},
			onClickRight() {
				// Toast('按钮');
			},
		},
		mounted(){
			
		}
	};
	// 禁止手机端扩大和缩小手势
		window.onload = function () {
		  document.addEventListener('touchstart', function (event) {
		    if (event.touches.length > 1) {
		      event.preventDefault()
		    }
		  })
		  document.addEventListener('gesturestart', function (event) {
		    event.preventDefault()
		  })
		}
</script>
<style>
	* {
		padding: 0;
		margin: 0;
	}
	#app {
			width: 100%;
			height: 100%;
			
		}

	/* .van-tabbar--fixed {
		background-color: rgba(255, 255, 255, 0.9) !important;
	}
	#app .van-tabbar-item--active {
			color: #3bba63;
		} */
		
		#app .van-tabbar--fixed {
				border-top: 1px solid #e8e2e2;
			}
			#app .van-tabbar-item--active {
				color: #189818;
				background-color: #dbf4e7;
			}
</style>
