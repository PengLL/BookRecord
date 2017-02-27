<template>
<div id="app">
  <pl-slide-bar>
  </pl-slide-bar>
  <pl-main>
  </pl-main>
  <pl-dialog-Collection></pl-dialog-Collection>
</div>
</template>

<script>
import PlMain from './components/PlMain'
import PlDialogCollection from './components/PlDialogCollection'
import plSlideBar from './components/plSlideBar'

export default {
  name: 'app',
  created(){
    this.$store.dispatch("init");
  },
  components:{
    PlMain:PlMain,
    PlDialogCollection:PlDialogCollection,
    plSlideBar:plSlideBar
  },

}
</script>
<style lang="scss">
html,body{
  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
  background-color: #ECF0F1;
}
html,body,div,p,ul,li,hr{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height:100%;
  overflow-x:hidden;
}
span,div,li,button{
  -webkit-tap-highlight-color:rgba(255,0,0,0);
}
#app{ 
   font-size:18px;
}


</style>
