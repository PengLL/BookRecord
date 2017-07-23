<template>
<div id="app">
  <pl-slide-bar></pl-slide-bar>
  <transition name="router-fade">
    		<router-view></router-view>
  </transition>    
  <pl-dialog-Collection></pl-dialog-Collection>
</div>
</template>

<script>

import PlDialogCollection from './components/Dialog/PlDialogCollection'
import plSlideBar from './components/Index/Children/PlSlideBar'
import fastclick from 'fastclick';

export default {
  name: 'app',
  created(){
    fastclick.attach(document.body);
  },
  components:{
    PlDialogCollection,
    plSlideBar
  },

}
</script>
<style lang="scss">
html,body{
  font:16px/1.5;
  font-family:'Helvetica Neue', Helvetica,'Microsoft Yahei', 'Hiragino Sans GB', '微软雅黑', Arial, sans-serif;
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
  -webkit-tap-highlight-color:transparent;
}

#app{ 
   margin:0;
   padding:0;
   font-size:16px;
   width:100%;
   height:100%;
}
.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}

</style>
