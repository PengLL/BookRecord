<template>
	<div class="PlMain">
		<div class="PlMain-list" >
			<div id="wrapper">
				<ul>
					<li class="PlMain-item"  v-for="(item,index) in books" v-show="item.category==category">
						<router-link :to="'/bookDetail/'+index">
							<div class="PlMain-detail" :id="index">
								<div class="PlMain-book">
									<span class="bookName">{{item.name}}</span>
									<span class="author">{{item.author}}</span>
								</div>
								<div class="PlMain-progressBar">
									<div class="outerBar" >
										<div class="innerBar" v-bind:style="{width:item.progress}">
										</div>
									</div>
									<span class="PlMain-progress">&nbsp;{{item.progress}}</span>
								</div>
							</div>
						</router-link>
						<div class="PlMain-edit">
							<span class="fa fa-pencil-square-o fa-2x updateIcon" @click="showProgressDialog(index)"></span>
							<span class="pages">{{item.readedPages}}&nbsp;页</span>
						</div>
					</li>	
				</ul>
			</div>	
		</div>
		<div class="PlMain-addNew" @click="showBookDialog">
			<span class="fa fa-book fa-lg"></span>
		</div>
	</div>
</template>

<script>
	import router from '../router';
	import BScroll from 'better-scroll';
	import {mapActions,mapGetters} from 'vuex';

	export default{
		data(){
			return {
				scroll:null
			}
		},
		computed:mapGetters([
			'books',
			'category'
		]),
		mounted(){
			this.getBooks();
			this.initScroll();
		},
		watch:{
			books(){
				this.$nextTick(function(){
					this.scroll.refresh();
				})
			}
		},
		methods:{
			...mapActions([
				'showBookDialog',
				'showProgressDialog',
				'getBooks'
			]),
			initScroll(){
				if(!this.scroll){
					this.scroll=new BScroll(document.getElementById('wrapper'),{
						click: true
					});
				}
				else{
					this.scroll.refresh();
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.PlMain{
		width:10rem;
	} 
	#wrapper{
		position: fixed;
		top:1.3rem;
		bottom:3rem;
		width: 100%;
	}
	.PlMain-list{
		ul{
			list-style:none;
			width:10rem;
			margin-top:0.28rem;
			font-size:16px;
		}
	}
	.PlMain-item{
		height:2.4rem;
		width:10rem;
		margin-top:0.28rem;
		background-color:#fff;
		user-select:none;
		overflow:hidden;
	}
	.PlMain-detail{
		display:inline-block;
		box-sizing:border-box;
		width:8rem;
		height:100%;
		padding:0 0.2rem 0 0.3rem;
	}
	.PlMain-progressBar{
			width:100%;
			height:1rem;
			line-height:1rem;
			.outerBar{
				width:6rem;
				height:0.16rem;
				background-color:#71B6E4;
				display:inline-block;
				.innerBar{
					width:0;
					height:100%;
					background-color:#1E70A7;
				}
			}
	}
	.PlMain-book{
		height:1.4rem;
		width:100%;
		.author,.bookName{
			line-height:1.4rem;
			display:inline-block;
		}
		.bookName{
			color:#1f2d3d;
			font-size:20px;
		}
		.author{
			float:right;
			color:#475669;
		}
	}
	.PlMain-edit{
		float:right;
		width:2rem;
		height:100%;
		text-align:center;
		.updateIcon,.pages{
			display:block;
		}
		.updateIcon{
			color:#2892D9;
			line-height:1.4rem;
			height:1.4rem;	
		}
		.pages{
			height:1rem;
			display:block;
			line-height:1rem;
		}
	}
	.PlMain-addNew{
		color:#fff;
		width:1.2rem;
		height:1.2rem;
		border-radius:0.6rem;
		background-color:#3498DB;
		box-shadow:0px 4px 6px #666;
		display:flex;
		justify-content:center;
		align-items:center;
		position:fixed;
		bottom:0.8rem;
		right:0.5rem;
		z-index:8;
	}
	.pages,.PlMain-progress{
		color:#99a9bf;
		font-size:16px;
	}
	.PlMain-detail:active{
		background:rgba(0,0,0,0.05) !important;
	}
	.PlMain-addNew:active,span:active{
		opacity:0.8 !important;
	}
	@keyframes fadeIn{
		from{
			opacity:0;
		}
		to{
			opacity:0.25;
		}
	}
</style>