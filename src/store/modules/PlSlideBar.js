import LocalStore from '../../assets/js/LocalStore';
import * as types from '../mutation-types';

export default{
	state:{
		slideBarStatus:false,
		categories:[],
		category:"",
		deleteIndex:0,
		STORAGE_KEY_CATEGORY:"readingCategory"
	},
	mutations:{
		[types.SET_SLIDEBAR_STATUS](state,status){
			state.slideBarStatus=status;
		},
		[types.ADD_CATEGORY](state,category){
			state.categories.push(category);
		},
		[types.CHOOSE_CATEGORY](state,index){
			state.category=state.categories[index].name;
			let arr=state.categories;
			for(let i=0;i<arr.length;i++){
				 state.categories[i].status=false;
			}
			for(let i=0;i<arr.length;i++){
				i==index ? state.categories[i].status=true : state.categories[i].status=false;
			}
		},
		[types.SET_DELETE_CATEGORY_INDEX](state,index){
			state.deleteIndex=index;
		},
		[types.DELETE_CATEGORY](state){
			state.categories.splice(state.deleteIndex,1);
		},
		[types.SAVE_CATEGORIES_TO_LOCALSTORAGE](state){
			LocalStore.key=state.STORAGE_KEY_CATEGORY;
			LocalStore.save(state.categories);
		}
	},
	actions:{
		chooseCategory({commit},index){
			commit(types.CHOOSE_CATEGORY,index);
		},
		deleteCategory({commit,state}){
			let category=state.categories[state.deleteIndex].name;
			commit(types.DELETE_CATEGORY_BOOKS,category);
			commit(types.SAVE_BOOKS_TO_LOCALSTORAGE);
			state.category==category ? state.category="":null;
			commit(types.DELETE_CATEGORY);
			commit(types.SAVE_CATEGORIES_TO_LOCALSTORAGE);
		},
		addCategory({commit,dispatch},category){
			let msg=[];
			if(category.name=="")
				msg.push("请填写书籍类别");
			if(msg.length>0)
				dispatch("addCategoryInfo",msg);
			else{
				commit(types.ADD_CATEGORY,category);
				commit(types.SAVE_CATEGORIES_TO_LOCALSTORAGE);
				dispatch("hideDialog");
			}	
		},
		setSlidebarStatus({commit},status){
			commit(types.SET_SLIDEBAR_STATUS,status);
		}
	}
}