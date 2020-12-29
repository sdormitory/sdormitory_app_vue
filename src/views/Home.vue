<template>
	<div id="home">
		<!-- 头部搜索 -->
		<!-- <van-nav-bar title="首页" /> -->
		<div class="home-header">
			智慧宿管云平台
		</div>
		
		<div class="home-content">
			<!-- <van-row type="flex" class="row_m"> -->
				<div class="home-main">
					<el-button  icon="el-icon-s-flag" @click="task" size="large">考勤</el-button>
				</div>
			<!-- </van-row> -->
		</div>
	</div>
</template>



<script>
	export default {
	  name: 'Home',
	  data(){
	    return{
	      eventCount:undefined,
		  taskCount:undefined,
		  taskPesCount:undefined
	    }
	  
	  },
	  mounted() {
	  	this.$axios.get(this.$location.getCurrEventCount).then(res=>{
	  		this.eventCount = res.data;
	  	});
		this.$axios.get(this.$location.getCurrTaskCount).then(res=>{
			this.taskCount = res.data;
		});
		this.$axios.get(this.$location.getCurrTaskPerCount).then(res=>{
			this.taskPesCount = res.data;
		});
	  },
	  methods: {
			  task(){
				  this.$router.push("/Task")
			  },
	          event() {
			      this.$router.push("/EventList")
	         }
	      }
	
	}
</script>
<style>
	#home {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url("../assets/images/home-header-bg.png");
		background-repeat: no-repeat;
		background-size: 100% 200px;
		background-attachment: fixed;
		overflow: auto;
	}
	.home-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100px;
		line-height: 100px;
		text-align: center;
		color: #fff;
		font-size: 22px;
		z-index: 999;
	}
	.home-nav {
		position: fixed;
		top: 100px;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 0.4rem;
		z-index: 999;
	}
	.home-nav .home-nav-col {
		margin: 0 10px;
	}
	.home-nav .home-nav-col span,.home-nav .home-nav-col label {
		display: flex;
		justify-content: center;
		color: #fff;
	}
	.home-nav .home-nav-col span {
		font-size: 28px;
	}
	.home-nav .home-nav-col label {
		font-size: 14px;
	}
	.home-content {
		float: left;
		width: 100%;
		margin-top: 150px; 
		margin-bottom: 50px;
	}
	.row_m{
		text-align: center;
	}
	.home-main {
		margin-top: 150px;
		text-align: center;
	}
	.home-main .el-button {
		padding: 35px 40px !important;
		background-color: #5cdba4;
		color: #fff;
		font-size: 16px;
	}
	@import url("../../static/css/comm.css");
	
</style>

