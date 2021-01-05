//智慧宿舍
// var sdormitoryPath = 'http://122.112.218.153:9004'
var sdormitoryPath = 'http://localhost:9004'

const location ={
    doLogin : sdormitoryPath + '/app/User/doLogin',
	getAccountById : sdormitoryPath + "/app/Account/getAccountById",
	updatePassord : sdormitoryPath + "/app/Account/updatePassord",
	getLeaveByAccId : sdormitoryPath + "/app/Leave/getLeaveByAccId",
	getLeaveById : sdormitoryPath + "/app/Leave/getLeaveById",
	getPhoto : sdormitoryPath + "/app/Account/getPhoto"
}

export default location

