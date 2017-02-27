import LocalStore from '../../assets/js/LocalStore';

export default{
	state:{
		slideBarStatus:false,
		categories:[],
		category:"",
		deleteIndex:0,
		STORAGE_KEY_CATEGORY:"readingCategory"
	},
	mutations:{
		slideBar(state,status){
			state.slideBarStatus=status;
		},
		addCategory(state,category){
			state.categories.push(category);
		},
		chooseCategory(state,index){
			state.category=state.categories[index].name;
			let arr=state.categories;
			for(let i=0;i<arr.length;i++){
				 state.categories[i].status=false;
			}
			for(let i=0;i<arr.length;i++){
				i==index ? state.categories[i].status=true : state.categories[i].status=false;
			}
		},
		setDeleteIndex(state,index){
			state.deleteIndex=index;
		},
		deleteCategory(state){
			state.categories.splice(state.deleteIndex,1);
		}
	},
	actions:{
		deleteCategory({commit,state,dispatch}){
			dispatch("deleteCategoryBooks",state.categories[state.deleteIndex].name);
			commit("deleteCategory");
			LocalStore.key=state.STORAGE_KEY_CATEGORY;
			LocalStore.save(state.categories);
		},
		addCategory({commit,state},category){
			commit("addCategory",category);
			LocalStore.key=state.STORAGE_KEY_CATEGORY;
			LocalStore.save(state.categories);
		}
	}
}