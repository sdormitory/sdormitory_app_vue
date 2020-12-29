<template>
	<div class="D-div">
		<div>
			<div class="Ddiv2">
				<div class="box">
					  <img class="pic_t" src="../../static/lion.png"/>
					  <div>
						<h1>个人中心页面</h1>
					  </div>
				</div>
			</div> 
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.D-div {
		background: #F2F2F2;
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