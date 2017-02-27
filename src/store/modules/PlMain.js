import LocalStore from '../../assets/js/LocalStore';

export default{
	state:{
		books:[],
		editIndex:0,
		STORAGE_KEY_BOOK:"readingBooks"
	},
	mutations:{
		addBook(state,book){
			state.books.push(book);
		},
		editBook(state,index){
			state.editIndex=index;
		},
		saveBooksToLocalStore(state){
			LocalStore.key=state.STORAGE_KEY_BOOK;
			LocalStore.save(state.books);
		},
		saveProgress(state,readedPages){
			let element=state.books[state.editIndex];
			element.readedPages=readedPages;
			element.progress=parseInt(readedPages/element.pages*100)+"%";
		},
		deleteBook(state,index){
			state.books.splice(index,1);
		},
		deleteCategoryBooks(state,category){
			let len=state.books.length;
			for(let i=len-1;i>=0;i--){
				state.books[i].category==category ? state.books.splice(i,1) : null;
			}
		}
	},
	actions:{
		deleteBook({commit},index){
			commit("deleteBook",index);
			commit("saveBooksToLocalStore");
		},
		deleteCategoryBooks({commit},category){
			commit("deleteCategoryBooks",category);
			commit("saveBooksToLocalStore");
		},
		addBook({commit},book){
			commit("addBook",book);
			commit("saveBooksToLocalStore");
		},
		deleteBook({commit},index){
			commit("deleteBook",index);
			commit("saveBooksToLocalStore");
		},
		saveProgress({commit},readedPages){
			commit("saveProgress",readedPages);
			commit("saveBooksToLocalStore");
		}
	}
}