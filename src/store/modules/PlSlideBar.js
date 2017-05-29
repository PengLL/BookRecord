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
	getters:{
		slideBarStatus:state=>state.slideBarStatus,
		category:state=>state.category,
		categories:state=>state.categories
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
		[types.GET_CATEGORIES](state,data){
			state.categories=data;
		}
	},
	actions:{
		chooseCategory({commit},index){
			commit(types.CHOOSE_CATEGORY,index);
		},
		deleteCategory({commit,state,dispatch}){
			let category=state.categories[state.deleteIndex].name;
			commit(types.DELETE_CATEGORY_BOOKS,category);
			dispatch("saveBooks");
			state.category==category ? state.category="":null;
			commit(types.DELETE_CATEGORY);
			dispatch("saveCategories");
		},
		addCategory({commit,dispatch},category){
			let msg=[];
			if(category.name=="")
				msg.push("请填写书籍类别");
			if(msg.length>0)
				dispatch("addCategoryInfo",msg);
			else{
				commit(types.ADD_CATEGORY,category);
				dispatch("saveCategories");
				dispatch("hideDialog");
			}	
		},
		setSlidebarStatus({commit},status){
			commit(types.SET_SLIDEBAR_STATUS,status);
		},
		saveCategories({state}){
			LocalStore.key=state.STORAGE_KEY_CATEGORY;
			LocalStore.save(state.categories);
		},
		getCategories({state,commit}){
			LocalStore.key=state.STORAGE_KEY_CATEGORY;
			commit(types.GET_CATEGORIES,LocalStore.fetch());
			state.categories[0] ? commit(types.CHOOSE_CATEGORY,0) :null;
		}
	}
}