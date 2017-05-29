<template>
	<div>
		<transition name="SlideBar">
			<div v-show="slideBarStatus" class="PlSlideBar-wrapper" @click.self="setSlidebarStatus(false)">
			</div>
		</transition>
		<transition name="Bar">
			<div class="PlSlideBar" v-show="slideBarStatus">
					<div class="PlSlideBar-head">
						<div>
							<span @click="showCategoryDialog" class="fa fa-plus fa-2x"></span>
						</div>
					</div>
					<div class="PlSlideBar-body">
						<ul>
							<li 
							v-for="(item,index) in categories">
								<span @click="chooseCategory(index)" class="PlSlideBar-name" :class="{'PlSlideBar-name-active':item.status}" >{{item.name}}</span>
								<span class="fa fa-trash-o fa-lg PlSlideBar-delete" @click="showDeleteCategoryDialog(index)"></span>
							</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	import LocalStore from '../assets/js/LocalStore'
	import {mapActions,mapGetters} from 'vuex';
	export default{
		computed:mapGetters([
			'categories',
			'slideBarStatus'
		]),
		mounted(){
			this.getCategories();
		},
		methods:{
			...mapActions([
				'showCategoryDialog',
				'chooseCategory',
				'showDeleteCategoryDialog',
				'setSlidebarStatus',
				'getCategories'
			])
		}
	}
</script>
<style lang="scss"scoped>
	.SlideBar-enter-active{
		animation:fadeIn 0.2s linear;
	}
	.SlideBar-leave-active{
		animation:fadeOut 0.2s linear;
	}
	.PlSlideBar-wrapper{
		position:fixed;
		left:0;
		top:0;
		z-index:9;
		background-color:rgba(0,0,0,0.25);
		width:10rem;
		height:100%;
	}
	.PlSlideBar{
		width: 6rem;
		height: 100%;
		position:fixed;
		top:0;
		z-index:10;
		background-color:#ebebeb;
		box-shadow: 8px 0px 6px #666;
		overflow-x:hidden;
		.PlSlideBar-head{
			width: 100%;
			height:2.4rem;
			background-color:#3498DB;
			display:flex;
			justify-content:flex-end;
			align-items:center;
			span{
				color:#fff;
				margin-right:0.6rem;
			}
			span:active{
				opacity:0.5 !important;
			}
		}
		.PlSlideBar-body{
			width:100%;
			padding-top:0.4rem;
			ul{
				li{
					height:1.5rem;
					padding-left:0.2rem;
					display:flex;
					justify-content:space-between;
					align-items:center;
				}
			}
		}
	}
	.PlSlideBar-name{
		box-sizing:border-box;
		padding-left:0.2rem;
		flex:4;
		line-height:1rem;
		font-size:20px;
	}
	.PlSlideBar-delete{
		flex:1;
		align-self:center;
		color:#888;
	}
	.PlSlideBar-delete:active{
		opacity:0.8 !important
	}
	.PlSlideBar-name-active{
		border-left:0.1rem solid #3498DB;
		color:#3498DB;
	}
	.Bar-enter-active{
		animation:slideOut 0.2s linear;
	}
	.Bar-leave-active{
		animation:slideIn 0.2s linear;
	}
	@keyframes fadeIn{
		from{
			opacity:0;
		}
		to{
			opacity:1;
		}
	}
	@keyframes fadeOut{
		from{	
			opacity:1;
		}
		to{
			opacity:0;
		}
	}
	@keyframes slideOut{
		from{
			left:-6rem;
		}
		to{
			left:0rem;
		}
	}
	@keyframes slideIn{
		from{
			left:0rem;
		}
		to{
			left:-6rem;
		}
	}
</style>