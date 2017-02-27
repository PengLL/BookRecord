<template>
	<div class="PlSlideBar" :class="{'PlSlideBar-slide':slideBar}">
		<div class="PlSlideBar-head">
			<div>
				<span @click="showCatDia" class="fa fa-pencil-square fa-2x"></span>
			</div>
		</div>
		<div class="PlSlideBar-body">
			<ul>
				<li v-for="(item,index) in categories" 
				>
				<span @click="chooseCategory(index)" class="PlSlideBar-name" :class="{'PlSlideBar-active':item.status}" >{{item.name}}</span>
				<span class="fa fa-trash-o fa-lg PlSlideBar-delete" @click="showdelCatDia(index)"></span>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
	import LocalStore from '../assets/js/LocalStore'
	export default{
		computed:{
			slideBar(){
				return this.$store.state.PlSlideBar.slideBarStatus;
			},
			categories(){
				return this.$store.state.PlSlideBar.categories;
			}
		},
		methods:{
			showCatDia(){
				this.$store.commit("showCatDia");
			},
			chooseCategory(index){
				this.$store.commit("chooseCategory",index);
			},
			showdelCatDia(index){
				this.$store.commit("setDeleteIndex",index);
				this.$store.commit("showdelCatDia");
			}
		}
	}
</script>
<style lang="scss">
	.PlSlideBar{
		width: 6rem;
		height: 100%;
		position:fixed;
		left:-6rem;
		top:0;
		background-color:#DBDBDB;
		transition:left 0.2s linear;
		z-index:4;
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
		}
		.PlSlideBar-body{
			width:100%;
			padding-top:0.4rem;
			ul{
				li{
					height:1.4rem;
					padding-left:0.2rem;
					display:flex;
					justify-content:space-between;
					align-items:center;
				}
			}
		}
	}
	.PlSlideBar-slide{
		left:0;
		box-shadow: 5px 5px 6px #666;
	}
	.PlSlideBar-name{
		box-sizing:border-box;
		padding-left:0.2rem;
		flex:4;
		line-height:0.8rem;
	}
	.PlSlideBar-delete{
		flex:1;
		align-self:center;
		color:#888;
	}
	.PlSlideBar-active{
		border-left:0.1rem solid #3498DB;
		color:#3498DB;
	}
</style>