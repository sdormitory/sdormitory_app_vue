<template>
	<div class="home">
		<div class="leave-detail-header">
					<!-- <i class="el-icon-back" @click="reback"></i> -->
					<div class="event-detail-header-title">
						<i class="el-icon-back" @click="reback"></i>
						请假详情页
					</div>
				</div>
		<div class="leave-detail-content">
			<el-form ref="form" :model="form" label-width="120px">
				<el-form-item label="学号:">
					{{form.studentNo}}
				</el-form-item>
				<el-form-item label="班级:">
					{{form.className}}
				</el-form-item>
				<el-form-item label="学生姓名:">
					{{form.studentName}}
				</el-form-item>
				<el-form-item label="请假类型:">
					<el-col v-if="form.leaveType==='1'">事假</el-col>
					<el-col v-if="form.leaveType==='2'">病假</el-col>
				</el-form-item>
				<el-form-item label="请假日期:">
					{{form.leaveDate}}
				</el-form-item>
				<el-form-item label="请假原因:">
					{{form.leaveReason}}
				</el-form-item>
				<el-form-item label="状态:">
					<el-col v-if="form.leaveType==='1'">家长确认中</el-col>
					<el-col v-if="form.leaveType==='2'">家长确认通过</el-col>
					<el-col v-if="form.leaveType==='3'">班主任审核通过</el-col>
					<el-col v-if="form.leaveType==='4'">家长驳回</el-col>
				</el-form-item>
				<el-form-item label="家长描述信息:">
					{{form.parentDesc}}
				</el-form-item>
				<el-form-item label="班主任描述信息:">
					{{form.teacherDesc}}
				</el-form-item>
				<el-form-item label="提交时间:">
					{{form.createTime}}
				</el-form-item>
			</el-form>
		 <!-- <div slot="footer" class="dialog-footer">
		   <el-button  @click="reback">返回</el-button>
		 </div> -->
     </div>
  </div>
 </template>

<script>
export default {	
  name: 'Index',
  components: {
   
  },
   data() {
        return {
			form: {
			  taskName: '',
			}
        }
      },
      methods: {
		  prevs(){
		  		this.index = this.index-1;
		  },
		  next(){
		  			this.index = this.index+1;
		  },
		  getLeaveDetail(){
			  this.$axios.get(this.$location.getLeaveById,{
			  				  params:{
			  					  "id":this.$route.params.id
			  				  }
			  }).then(res=>{
				this.form = res.data.data;
			  }).catch(error=>{
			  	console.log(error)
			  })
			 
		  },
		  change(){
			  this. getLeaveDetail();
		  },
		 reback () {
		 	history.back()
		 },
      },mounted() {
		  this.getLeaveDetail();
      }

}
</script>
<style>
	.leave-detail-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 110px;
		line-height: 110px;
		background-color: #42d49b;
		z-index: 999;
	}
	
	.leave-detail-header-title {
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
	.btncolor {
		background-color: #3bba63 !important;
		color: white !important;
	}
	
	.leave-detail-content {
		margin-top: 110px;
		padding: 55px 16px !important;
	}
</style>