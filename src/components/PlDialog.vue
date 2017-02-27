<template>
	<div class="pldialog" :class="{'PlDialogCollection-fadeOut':fadeOut}">
		<div class="pldialog-mask" @click="hideDialog"></div>
		<div class="pldialog-content pldialog-scale ">
		<div :class="{'pldialog-error':error}">
			<ul>
				<li v-for="item in errorInfo">{{item}}</li>
			</ul>
		</div>
		<div class="pldialog-body">
			<slot></slot>
		</div>
		<slot name="foot"></slot>
		</div>
	</div>
</template>
<script>
	import LocalStore from '../assets/js/LocalStore'
	export default{
		data(){
			return {
				error:false
			}
		},
		props:{
			errorInfo:{
				type:Array
			}
		},
		computed:{
			fadeOut(){
				return this.$store.state.PlDialogCollection.fadeOut;
			}
		},
		watch:{
			errorInfo(){
				this.errorInfo==[] ? this.error=true : this.error=false;
			}
		},
		methods:{
			hideDialog(){
				this.$store.dispatch("fadeOutDialog");
			}
		}
	}
</script>
<style lang="scss">
	.pldialog{
		width:100%;
		height:100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9;
	}
	.pldialog-mask{
		width:100%;
		height:100%;
		background-color:rgba(0,0,0,0.25);
	}
	.pldialog-content{
		border: 1px solid #ddd;
		background-color:#fff;
		width: 9rem;
		position: fixed;
		box-sizing: border-box;
		z-index: 10;
		top: 3rem;
		text-align:center;
		left: 0.5rem;
		box-shadow: 0.213333rem 0.213333rem 0.213333rem #444;
	}	
	.pldialog-body{
		margin-top:0.3rem;
		margin-bottom:0.3rem;
	}
	.pldialog-scale{
		animation:scale 0.4s linear; 	
	}
	.pldialog-error{
		color:#E74C3C;
		font-size:14px;
		padding-left:0.533333rem;
		padding-top:0.266667rem;
		display:none;
	}
	@keyframes scale{
		from{		
			transform:scale(0);
		}
		to{
			transform:scale(1);
		}
	}
	
</style>