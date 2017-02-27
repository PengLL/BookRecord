import Vue from 'vue';
import Vuex from 'vuex';
import PlMain from './modules/PlMain';
import PlDialogCollection from './modules/PlDialogCollection';
import PlSlideBar from './modules/PlSlideBar';
import LocalStore from '../assets/js/LocalStore';

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		PlMain,
		PlDialogCollection,
		PlSlideBar
	},
	actions:{
		init({state,commit}){
			LocalStore.key=state.PlSlideBar.STORAGE_KEY_CATEGORY;
			state.PlSlideBar.categories=LocalStore.fetch();
			state.PlSlideBar.categories[0] ? commit("chooseCategory",0) :null;
			LocalStore.key=state.PlMain.STORAGE_KEY_BOOK;
			state.PlMain.books=LocalStore.fetch();
		}
	}
})