<template>
  <div class="home">
  		<div class="leave-header">
  			<div class="leave-header-title" @click="reback">
  				<i class="el-icon-back"></i> 请假列表
  			</div>
  		</div>
  		<el-table :header-cell-style="{'background-color': '#fafafa'}" :data="tableData">
  			<el-table-column label="序号" align="center" width="60">
  				<template slot-scope="scope">
  					<span style="margin-left: 10px">{{ scope.row.id }}</span>
  				</template>
  			</el-table-column>
  			<el-table-column align="center" label="学号">
  				<template slot-scope="scope">
  					<span style="margin-left: 10px">{{ scope.row.studentNo }}</span>
  				</template>
  			</el-table-column>
  			<el-table-column align="center" label="班级">
  				<template slot-scope="scope">
  					<span style="margin-left: 10px">{{ scope.row.className }}</span>
  				</template>
  			</el-table-column>
  			<el-table-column align="center" label="学生姓名">
  				<template slot-scope="scope">
  					<span style="margin-left: 10px">{{ scope.row.studentName }}</span>
  				</template>
  			</el-table-column>
			<el-table-column label="请假类型" align="center" width="90">
			  <template slot-scope="scope">
			    <span style="margin-left: 10px" v-if="scope.row.leaveType === '1'">事假</span>
				  <span style="margin-left: 10px" v-if="scope.row.leaveType === '2'">病假</span>
			  </template>
			</el-table-column>
			<el-table-column align="center" label="请假时间">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{ scope.row.leaveDate }}</span>
				</template>
			</el-table-column>
			<el-table-column label="状态" align="center" width="90">
			  <template slot-scope="scope">
			    <span style="margin-left: 10px" v-if="scope.row.leaveType === '1'">家长确认中</span>
				<span style="margin-left: 10px" v-if="scope.row.leaveType === '2'">家长确认通过</span>
				<span style="margin-left: 10px" v-if="scope.row.leaveType === '2'">班主任审核通过</span>
				<span style="margin-left: 10px" v-if="scope.row.leaveType === '2'">家长驳回</span>
			  </template>
			</el-table-column>
  
  			<el-table-column label="操作" width="80" align="center">
  				<template slot-scope="scope">
  					<el-button size="mini" @click="handleDetail(scope.row.id, scope.row)" class="btncolor">详情</el-button>
  				</template>
  			</el-table-column>
  		</el-table>
  		<!-- <div>
  		 <el-pagination
  		   small
  		   background
  		   layout="prev,next"
  		   @current-change="change"
  		   :pageCount="pageCount"
  		   @next-click="next"
  		   @prev-click="prevs"
  		   :current-page="index">
  		 </el-pagination>
  		</div> -->
  	</div>
</template>

<script>
export default {
  name: 'Leave',
  components: {
   
  },
   data() {
        return {
			name:'',
			index : 1,
			pageCount:0,
            tableData: [],
        }
      },
      methods: {
		  prevs(){
		  		this.index = this.index-1;
		  },
		  next(){
		  		this.index = this.index+1;
		  },
		  getLeave(){
			  let tokenPrefix=localStorage.getItem("stuToken").split(":")[0];
			  let accountId = localStorage.getItem("stuToken").split("-")[2];
			  this.$axios.get(this.$location.getLeaveByAccId,{
			  				  params:{
								  "accountId":accountId,
								  "tokenPrefix":tokenPrefix
			  				  }
			  }).then(res=>{
			  	this.tableData = res.data.data;
				this.pageCount = res.data.data.pageCount;
			
			  }).catch(error=>{
			  	console.log(error)
			  })
			 
		  },
		  change(){
			  this. getLeave();
		  },
        handleDetail(id, row) {
		  this.$router.push("/LeaveDetail/"+id)
        },
		reback () {
			history.back()
		}
      },mounted() {
		  this.getLeave();
      }

}
</script>
<style>
	.leave-header {
		float: left;
		width: 100%;
		height: 110px;
		background-color: #35d299;
	}
	.leave-header .leave-header-title {
		float: left;
		font-size: 18px;
		height: 30px;
		line-height: 30px;
		margin-top: 40px;
		color: #fff;
		text-indent: 12px;
	}
	.btncolor {
		background-color:#4bd79d !important;
		color: white !important;
	}
</style>
