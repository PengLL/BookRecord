<template>
	<div class="PlMain" :class="{'PlMain-slideBar':slideBar}">
		<div :class="{'PlMain-mask':slideBar}" @click="checkStatus">
		</div>
		<div>
			<div class="PlMain-category">
				<span class="fa fa-bars fa-2x pl-bars" @click="activeSlideBar"></span><span class="entry">{{category}}</span><span class="place"></span>
			</div>
			<div class="PlMain-list">
				<ul>
					<li class="PlMain-item"  v-for="(item,index) in books" :class="{'PlMain-hide':!(item.category==category)}">
						<div class="PlMain-detail" 
							:class="{'PlMain-swipeLeft':item.swiped}"
							:id="index"
							ref="itemDom">
							<p class="bookName">{{item.name}}</p>
							<p class="author">{{item.author}}</p>
							<span class="fa fa-bookmark-o fa-2x updateIcon" @click="showProDia(index)"></span>
							<div class="progressBar">
								<div class="outerBar" >
									<div class="innerBar" v-bind:style="{width:item.progress}">
									</div>
								</div>
							</div>
							<div class="progressNumber">
								<span>{{item.readedPages}}&nbsp;页</span>
							</div>
						</div>
						<div class="PlMain-delete" @click="deleteBook(index)">
							<span>删除</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="PlMain-addNew" @click="showBoDia">
			<span class="fa fa-book fa-lg"></span>
		</div>
	</div>
</template>
<script>
	import hammer from 'hammerjs';

	export default{
		data(){
			return {
				categoryBooks:[]	
			}
		},
		computed:{
			slideBar(){
				return this.$store.state.PlSlideBar.slideBarStatus;
			},
			books(){
				return this.$store.state.PlMain.books;
			},
			category(){
				return this.$store.state.PlSlideBar.category;
			}
		},
		mounted(){			
			this.bindSwipeForBooks();
		},
		updated(){
			this.bindSwipeForBooks();
		},
		methods:{
			showBoDia(){
				this.$store.commit("showBoDia");
			},
			showProDia(index){
				this.$store.commit("editBook",index);
				this.$store.commit("showProDia");
			},
			activeSlideBar(){
				this.$store.commit("slideBar",true);
			},
			checkStatus(){
				if(this.slideBar){
					this.$store.commit("slideBar",false);
				}
			},
			deleteBook(index){
				this.$store.dispatch("deleteBook",index);
			},
			bindSwipeForBooks(){
				let nodes=this.$refs.itemDom||0,
				self=this;
				for(let i=0;i<nodes.length;i++){
					//通过立即函数形成闭包，将i传入闭包成为私有，避免最后监听器的回调函数获得的i为循环完毕的i
					// (function(i){
					// 	var hammertime=new Hammer(nodes[i]);
					// 	hammertime.on("swipeleft",function(event){	
					// 		self.books[i].swiped=true;
					// 	});
					// 	hammertime.on("swiperight",function(event){
					// 		self.books[i].swiped=false;
					// 	});
					// })(i);
					let hammertime=new Hammer(nodes[i]);
					hammertime.on("swipeleft",function(event){	
						self.books[i].swiped=true;
					});
					hammertime.on("swiperight",function(event){
						self.books[i].swiped=false;
					});
				}
			}
		}
	}
</script>
<style lang="scss">
.PlMain{
	width:10rem;
	height:100%;
	position:fixed;
	left:0;
	transition:left 0.2s linear;
	overflow-x:hidden;
}
.PlMain-slideBar{
	top:0;
	left:6rem;
}
.PlMain-category{
	width: 100%;
	height: 1.2rem;
	background-color: #2892D9;
	margin-top:0.5rem;
	color:#DDDDDD;
	display:flex;
	justify-content:center;
	flex-flow:row nowrap;
	.pl-bars{
		line-height: 1.2rem;
		color:#164D70;
		padding-left:0.2rem;
		flex:1;
		box-sizing:border-box;
	}
	.entry{
		line-height:1.2rem;
		font-size:18px;
		flex:4;
		text-align:center;
	}
	.place{
		flex:1;
		padding-right:0.2rem;
	}
}
.PlMain-list{
	width:10rem;
	color:#282828;
	ul{
		list-style:none;
		width:10rem;
		margin-top:0.266667rem;
		font-size:16px;
	}
}
.PlMain-item{
	height:2.2rem;
	margin-top:0.266667rem;
	background-color:#fff;
	position:relative;
}
.PlMain-detail{
	display:flex;
	flex-flow:row wrap;
	align-items:center;
	position:absolute;
	left:0;
	z-index:2;
	background-color:#fff;
	transition:left 0.2s linear;
	width:10rem;
	.bookName{
		width:3.7rem;
		margin-left:0.3rem;
		
	}
	.author,.progressNumber{
		color:#818181;
		font-size:14px;
	}
	.author{
		width:4rem;
		text-align:center;
	}
	.updateIcon{
		color:#3498DB;
		width:2rem;
		height:1.2rem;
		line-height:1.2rem;
		text-align:center;
	}
	.progressBar{
		width:7.6rem;
		.outerBar{
			margin-left:0.3rem;
			width:6rem;
			height:0.16rem;
			background-color:#71B6E4;
			.innerBar{
				width:0;
				height:100%;
				background-color:#1E70A7;
			}
		}
	}
	.progressNumber{
		height:1rem;
		line-height:1rem;
		width:2.4rem;
		text-align:center;
	}
}
.PlMain-delete{
	background-color:#E74C3C;
	width:2rem;
	height:2.2rem;
	line-height:2.2rem;
	text-align:center;
	font-size:18px;
	z-index:1;
	position:absolute;
	right:0;
	top:0;
	span{
		color:#eee;
	}
}
.PlMain-swipeLeft{
	position:absolute;
	left:-2rem;
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
	position:absolute;
	bottom:1rem;
	right:0.5rem;
}
.PlMain-mask{
	position:fixed;
	top:0;
	z-index:3;
	width:100%;
	height:100%;	
}
.PlMain-hide{
	display:none;
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