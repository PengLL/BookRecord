<template>
	<div>
		<pl-dialog v-show="categoryDialog" title="添加书籍类别" :info="categoryInfo">
			<div slot="body">
				<input type="text" placeholder="请输入类别" v-model="newCategory">
			</div>
			<div slot="footer" @click="addCategory">
				<span class="ensureAdd">添加</span>
			</div>
		</pl-dialog>

		<pl-dialog v-show="bookDialog" title="添加书籍" :info="bookInfo">
			<div slot="body">
				<input type="text" placeholder="请输入书名" v-model="bookName">
				<input type="text" placeholder="请输入作者" v-model="author">
				<input type="text" placeholder="请输入书的总页数" v-model="pages">
			</div>
			<div slot="footer" @click="addBook">
				<span class="ensureAdd">添加</span>
			</div>
		</pl-dialog>

		<pl-dialog v-show="progressDialog" title="更改书籍进度" :info="progressInfo">
			<div slot="body">
				<input type="text" placeholder="请输入已读页数" v-model="readedPages">
			</div>
			<div slot="footer" @click="updateBookProgress">
				<span class="ensureAdd">修改</span>
			</div>
		</pl-dialog>

		<pl-dialog v-show="deleteCatDialog" title="删除书籍类别">
			<div slot="body">
				<p class="PlDialogCollection-text">你将删除该类别</p>
			</div>
			<div slot="footer" @click="deleteCategory">
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
			bookInfo(){
				return this.$store.state.PlDialogCollection.bookInfo;
			},
			categoryInfo(){
				return this.$store.state.PlDialogCollection.categoryInfo;
			},
			progressInfo(){
				return this.$store.state.PlDialogCollection.progressInfo;
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
				let self=this;
				let book={
					category:self.category,
					name:self.bookName,
					author:self.author,
					pages:self.pages,
					progress:0+"%",
					swiped:false,
					readedPages:0
				}	
				this.$store.dispatch('addBook',book)
				if(this.bookInfo.length==0){
					this.bookName="";
					this.pages="";
					this.author="";
				}				
				
			},
			updateBookProgress(){
				this.$store.dispatch("updateBookProgress",this.readedPages);
				if(this.progressInfo.length==0){
					this.readedPages="";
				}
			},
			addCategory(){
				let self=this,
					obj={
						name:self.newCategory,
						status:false
					}
				this.$store.dispatch("addCategory",obj);
				if(this.categoryInfo.length==0){
					this.newCategory="";
				}
			},
			deleteCategory(){
				this.$store.dispatch("deleteCategory");
				this.$store.dispatch("hideDialog")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.PlDialogCollection-text{
		display:block;
		padding:0.3rem 0;
		text-align:center;
		font-size:18px;
	}
	.PlDialogCollection-delete{
		color:#E74C3C;
	}
	input{
		border:1px solid #dedede;
		height:0.8rem;
		font-size:16px;
		margin:0 auto;
		width:90%;
		border-radius: 0px;
		display:block;
	}
	input:not(:first-child){
		margin-top:0.3rem;
	}
	
</style>