import Vue from 'vue';
import Vuex from 'vuex';
import PlMain from './modules/PlMain';
import PlDialogCollection from './modules/PlDialogCollection';
import PlSlideBar from './modules/PlSlideBar';

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		PlMain,
		PlDialogCollection,
		PlSlideBar
	}
})