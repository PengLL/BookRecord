<template>
	<div>
		<pl-dialog :class="{'PlDialogCollection-hide':categoryDialog,'PlDialogCollection-fadeIn':!categoryDialog}">
			<div class="PlDialogCollection-panel">
				<input type="text" placeholder="请输入类别" v-model="newCategory">
			</div>
			<div slot="foot" class="PlDialogCollection-footer" @click="addCategory">
				<span class="ensureAdd">添加</span>
			</div>
		</pl-dialog>
		<pl-dialog :class="{'PlDialogCollection-hide':bookDialog,'PlDialogCollection-fadeIn':!bookDialog}" :errorInfo="msg">
			<div class="PlDialogCollection-panel">
				<div>
					<input type="text" placeholder="请输入要阅读的书名" v-model="bookName">
					<input type="text" placeholder="请输入作者" v-model="author">
					<input type="text" placeholder="请输入书的总页数" v-model="pages">
				</div>
			</div>
			<div slot="foot" class="PlDialogCollection-footer" @click="addBook">
				<span class="ensureAdd">添加</span>
			</div>
		</pl-dialog>
		<pl-dialog :class="{'PlDialogCollection-hide':progressDialog,'PlDialogCollection-fadeIn':!progressDialog}" :errorInfo="msg">
			<div class="PlDialogCollection-panel">
				<input type="text" placeholder="请输入已读页数" v-model="readedPages">
			</div>
			<div slot="foot" class="PlDialogCollection-footer" @click="saveProgress">
				<span class="ensureAdd">修改</span>
			</div>
		</pl-dialog>
		<pl-dialog :class="{'PlDialogCollection-hide':deleteCatDialog,'PlDialogCollection-fadeIn':!deleteCatDialog}">
			<div class="PlDialogCollection-panel-text">
				<p>你将删除该类别</p>
			</div>
			<div slot="foot" class="PlDialogCollection-footer" @click="deleteCategory">
				<span class="PlDialogCollection-delete">确定</span>
			</div>
		</pl-dialog>
	</div>
</template>
<script>
	import PlDialog from './PlDialog'
	export default{
		data(){
			return {
				bookName:"",
				author:"",
				pages:"",
				readedPages:"",
				newCategory:""
			}
		},
		computed:{
			msg(){
				return this.$store.state.PlDialogCollection.msg;
			},
			categoryDialog(){
				return this.$store.state.PlDialogCollection.categoryDialog;
			},
			bookDialog(){
				return this.$store.state.PlDialogCollection.bookDialog;
			},
			progressDialog(){
				return this.$store.state.PlDialogCollection.progressDialog;
			},
			deleteCatDialog(){
				return this.$store.state.PlDialogCollection.deleteCatDialog;
			},
			category(){
				return this.$store.state.PlSlideBar.category;
			},
			editIndex(){
				return this.$store.state.PlMain.editIndex;
			},
			books(){
				return this.$store.state.PlMain.books;
			}
		},
		components:{
			PlDialog
		},
		methods:{
			addBook(){
				if (isNaN(this.pages)){
					let msg=["输入的书籍总页数格式错误"];
					this.$store.commit("addErrorInfo",msg);
				}
				else{
					let self=this,
						book={
							category:self.category,
							name:self.bookName,
							author:self.author,
							pages:self.pages,
							progress:0+"%",
							swiped:false,
							readedPages:0
						}
					this.$store.dispatch('addBook',book);
					this.$store.commit("hideDialog");
					this.bookName="";
					this.pages="";
					this.author="";
				}	
			},
			saveProgress(){
				let msg=[];
				if(isNaN(this.readedPages)){
					msg=["请输入数字"];
					this.$store.commit("addErrorInfo",msg);
				}
				else {
					if(parseInt(this.readedPages)>parseInt(this.books[this.editIndex].pages)){
						msg=["已读页数大于书籍的实际页数"];
						this.$store.commit("addErrorInfo",msg);
					}
					else{
						this.$store.dispatch("saveProgress",this.readedPages);
						this.$store.commit("hideDialog");
						this.readedPages="";
					}
				}
			},
			addCategory(){
				let self=this,
					obj={
						name:self.newCategory,
						status:false
					}
				this.$store.dispatch("addCategory",obj);
				this.$store.commit("hideDialog");
			},
			deleteCategory(){
				this.$store.dispatch("deleteCategory");
				this.$store.commit("hideDialog")
			}
		}
	}
</script>
<style lang="scss">
	.PlDialogCollection-hide{
		animation:fadeOut 1s linear;
		display:none;
	}
	input{
		margin-top:0.3rem;
		border:1px solid #dedede;
		height:0.8rem;
		width:90%;
		font-size:14px;
		border-radius: 0px;
	}
	.PlDialogCollection-footer{
		border-top:1px solid #ddd;
		height:1rem;
		color:#1E70A7;
		text-align:center;
		line-height:1rem;
		font-size:16px;
		background:#fff;
	}
	.PlDialogCollection-panel-text{
		font-size:18px;
		text-align:center;
		padding:0.4rem 0 0.4rem 0;
	}
	.PlDialogCollection-delete{
		color:#E74C3C;
	}
	.PlDialogCollection-fadeIn{
		animation:fadeIn 0.2s linear;
	}
	.PlDialogCollection-fadeOut{
		animation:fadeOut 0.2s linear;
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
</style>