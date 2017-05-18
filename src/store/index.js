import Vue from 'vue';
import Vuex from 'vuex';
import PlMain from './modules/PlMain';
import PlDialogCollection from './modules/PlDialogCollection';
import PlSlideBar from './modules/PlSlideBar';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	modules:{
		PlMain,
		PlDialogCollection,
		PlSlideBar
	}
})