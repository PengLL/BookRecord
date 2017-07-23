<template>
<div class="PlHeader">
	<span class="fa fa-bars fa-2x pl-bars" @click="activeSlideBar"></span><span class="entry">{{category}}</span><span class="place"></span>
</div>	
</template>
<script>
    export default{
        computed:{
            category(){
				return this.$store.state.PlSlideBar.category;
			}
        },
        methods:{
            activeSlideBar(){
                this.$store.dispatch("setSlidebarStatus",true);
			},
        }
    }
</script>
<style lang="scss" scoped>
.PlHeader{
    width: 10rem;
    height: 1.2rem;
    background-color: #2892D9;
    position:fixed;
    z-index:5;
    top:0;
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
.PlHeader span:active{
    opacity:0.8 !important;
}
</style>