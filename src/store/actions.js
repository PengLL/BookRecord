import * as types from './mutation-types'
import LocalStore from '../assets/js/LocalStore';

export default{
    init({commit,state}){
        LocalStore.key=state.PlSlideBar.STORAGE_KEY_CATEGORY;
        state.PlSlideBar.categories=LocalStore.fetch();
        state.PlSlideBar.categories[0] ? commit(types.CHOOSE_CATEGORY,0) :null;
        LocalStore.key=state.PlMain.STORAGE_KEY_BOOK;
        state.PlMain.books=LocalStore.fetch();
    }
}