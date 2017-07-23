<template>
<div class="PlBookDetail">
    <div class="PlBookDetail-book">
        <div class="PlBookDetail-title"><span>{{book.name}}</span></div>
        <div class="PlBookDetail-meta"><span class="fa fa-user-o fa-2x PlBookDetail-icon"></span><div class="PlBookDetail-text">作者：{{book.author}}</div></div>
        <div class="PlBookDetail-meta"><span class="fa fa-bookmark-o fa-2x PlBookDetail-icon"></span><div class="PlBookDetail-text">书签：{{book.readedPages}}/{{book.pages}}</div></div>
        <div class="PlBookDetail-meta"><span class="fa fa-archive fa-2x PlBookDetail-icon"></span><div class="PlBookDetail-text">进度：{{book.progress}}</div></div> 
    </div>
    <div class="PlBookDetail-btn">
        <button @click="goToIndex" class="PlBookDetail-btn-back">返回</button>
        <button @click="deleteBook" class="PlBookDetail-btn-delete">删除</button>
    </div> 
</div>
</template>
<script>
    import router from '../router';
    export default{
        data(){
            return {
                index:this.$route.params.id
            }
        },
        computed:{
            book(){
                return this.$store.state.PlMain.books[this.index];
            }
        },
        methods:{
            deleteBook(){
				router.push("/");
                this.$store.dispatch("deleteBook",this.index);
			},
            goToIndex(){
                router.push("/");
            }
        }
    }
</script>
<style lang="scss">
.PlBookDetail{
    overflow:hidden;
    height:100%;
    width:100%;
    padding:0.5rem 0 0.5rem 0;
    box-sizing:border-box;
}
.PlBookDetail-book{
    box-sizing:border-box;
    padding:1rem 0;
    background-color:#fff;
    height:70%;
    width:90%;
    margin:0 auto;
}
.PlBookDetail-title{
    text-align:center;
    font-size:24px;
    color:#3498DB;
    font-weight:bold;
    height:25%; 
}
.PlBookDetail-meta{
    color:#2892D9;
    height:25%;
    padding-left:2.6rem;
    overflow:hidden;
}
.PlBookDetail-text{
    display:inline-block;
    padding-left:0.3rem;
    font-size:18px;
}
.PlBookDetail-btn{
    height:30%;
    box-size:border-box;
    padding-top:1rem;
}
.PlBookDetail-btn-delete{
    background-color:#E74C3C;
    margin-top:0.5rem;
}
.PlBookDetail-btn-back{
    background-color:#3498DB;
}
button{
    display:block;
    width:90%;
    margin:0 auto;
    border:none;
    font-size:20px;
    height:1.2rem;
    color:#fff;
}
button:active{
    opacity:0.8 !important;
}
</style>