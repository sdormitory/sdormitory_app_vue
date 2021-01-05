<template>
  <div class="home">
    <div class="leave-header">
      <div class="leave-header-title" @click="reback">
        <i class="el-icon-back"></i> 请假申请填写
      </div>
    </div>
    <div>
      填写申请
      <div>
        <el-form :inline="false" ref="form" :rules="rules" :model="form" label-width="100px">
          <el-form-item label="学号" prop="studentNo">
            <el-col :span="11">
              <el-input v-model="form.studentNo" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="班级" prop="className">
            <el-col :span="11">
              <el-input v-model="form.className" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="学生姓名" prop="studentName">
            <el-col :span="11">
              <el-input v-model="form.studentName" disabled></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="请假类型" prop="leaveType">
            <el-col :span="11">
              <el-select v-model="form.leaveType" placeholder="请选择请假类型">
                <el-option
                    v-for="item in leaveTypeOptions"
                    :key="item.dictValue"
                    :label="item.dictLabel"
                    :value="item.dictValue">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>

          <el-form-item label="请假日期" prop="leaveDate">
            <el-col :span="11">
              <div class="block">
                <el-date-picker
                    v-model="form.leaveDate"
                    type="date"
                    placeholder="请选择请假日期"
                    value-format="yyyy-MM-dd"
                    >
                </el-date-picker>

              </div>
            </el-col>
          </el-form-item>
          <el-form-item label="请假原因" prop="leaveReason">
            <el-col :span="11">
              <el-input type="textarea" v-model="form.leaveReason"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="11">
              <el-button type="primary" @click="submitFormLeave('form')">提交申请</el-button>
              <el-button @click="reback">返回</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leaveRequest",
  data() {
    return {
      //时间选择器只能选择从明天开始的日期
      form: {
        studentNo: '',
        className: '',
        studentName: '',
        leaveType: '',
        leaveStatus:'',
        leaveDate: '',
        leaveReason: ''
      },
      rules: {
        leaveType: [
          {required: true, message: '请选择请假类型', trigger: 'blur'},
        ],
        leaveDate: [
          {required: true, message: '请输入正确的日期格式(yyyy-MM-dd)', trigger: 'blur'}
        ],
        leaveReason: [
          {required: true, message: '请说明请假原因', trigger: 'blur'}
        ]
      },
      leaveTypeOptions: []
    }
  },
  methods: {
    //提交表单
    submitFormLeave(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(localStorage.getItem('stuToken').split(':')[0]=="appuser"){
            this.form.leaveStatus=3;
          }
          this.$axios.post(this.$location.saveLeave, this.form).then(res => {
            this.$refs[formName].resetFields();
            this.reback();
          }).catch(error => {
            console.log(error)
          })
        } else {
          return false;
        }
      })
    },
    reback() {
      history.back()
    },
    //获得当前学生信息
    getStudentInfo() {
      this.$axios.get(this.$location.getStudentById, {
        params: {
          "id": this.$route.params.id
        }
      }).then(res => {
        this.form.studentNo = res.data.data.studentNo;
        this.form.studentName = res.data.data.studentName;
        this.form.className = res.data.data.className;
      }).catch(error => {
        console.log(error)
      })

    },
    //获得请假类型列表
    getLeaveTypeOptions() {
      this.$axios.get(this.$location.getleaveTypeOptions, {
        params: {
          "dictType": "leave_type"
        }
      }).then(res => {
        this.leaveTypeOptions = res.data.data;
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getStudentInfo();
    this.getLeaveTypeOptions();
  }

}
</script>

<style scoped>

</style>