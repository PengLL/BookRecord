<template>
<transition name="PlDialog-fade">
	<div class="PlDialog-wrapper" @click.self="hideDialog">
		<div class="PlDialog">
			<div class="PlDialog-header">
				{{title}}
			</div>
			<div class="PlDialog-body">
				<div class="PlDialog-info">
					<ul>
						<li v-for="item in info">{{item}}</li>
					</ul>
				</div>
				<slot name="body"></slot>
			</div>
			<div class="PlDialog-footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</transition>
</template>
<script>
	import LocalStore from '../assets/js/LocalStore'
	export default{
		props:{
			info:{
				type:Array
			},
			title:{
				type:String
			}
		},
		methods:{
			hideDialog(){
				this.$store.dispatch("hideDialog");
			}
		}
	}
</script>
<style lang="scss" scoped>
	.PlDialog-wrapper{
		position:fixed;
		top: 0;
		left: 0;
		right:0;
		bottom:0;
		overflow:auto;
		z-index: 11;
		background-color:rgba(0,0,0,0.25);
	}
	.PlDialog{
		position: absolute;
		top: 3rem;
		left: 0.5rem;
		background-color:#fff;
		animation:translate 0.2s ease-out;
		width: 9rem;
		box-shadow: 0.213333rem 0.213333rem 0.213333rem #444;
	}	
	.PlDialog-header{
		line-height:1.4rem;
		padding:0 0.4rem;
		color:#1E70A7;
		border-bottom:1px solid #eee;
	}
	.PlDialog-body{
		padding:0.4rem;
	}
	.PlDialog-footer{
		border-top:1px solid #eee;
		color:#1E70A7;
		text-align:center;
		line-height:1.4rem;
	}
	.PlDialog-scale{
		animation:scale 0.4s linear; 	
	}
	.PlDialog-info{
		line-height:0.6rem;
		font-size:14px;
		color:#E74C3C;
		ul{
			list-style:none;
			li:last-child{
				margin-bottom:0.4rem;
			}
		}
	}
	.PlDialog-fade-leave-active{
		animation:PlDialogFadeOut .3s linear;
	}
	.PlDialog-footer:active{
		background:rgba(0,0,0,0.05) !important;
	}
	@keyframes PlDialogFadeOut{
		from{
			opacity:1;
		}
		to{
			opacity:0;
		}
	}
	@keyframes translate{
		from{		
			transform:translateY(-30px);
		}
		to{
			transform:translateY(0);
		}
	}
</style>