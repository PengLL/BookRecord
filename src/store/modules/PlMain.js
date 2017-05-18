import LocalStore from '../../assets/js/LocalStore';
import * as types from '../mutation-types';

export default {
	state: {
		books: [],
		editIndex: 0,
		STORAGE_KEY_BOOK: "readingBooks"
	},
	mutations: {
		[types.ADD_BOOK](state, book) {
			state.books.push(book);
		},
		[types.SET_EDIT_BOOK_INDEX](state, index) {
			state.editIndex = index;
		},
		[types.SAVE_BOOKS_TO_LOCALSTORAGE](state) {
			LocalStore.key = state.STORAGE_KEY_BOOK;
			LocalStore.save(state.books);
		},
		[types.SAVE_BOOK_PROGRESS](state, readedPages) {
			let element = state.books[state.editIndex];
			element.readedPages = readedPages;
			element.progress = parseInt(readedPages / element.pages * 100) + "%";
		},
		[types.DELETE_BOOK](state, index) {
			state.books.splice(index, 1);
		},
		[types.DELETE_CATEGORY_BOOKS](state, category) {
			let len = state.books.length;
			for (let i = len - 1; i >= 0; i--) {
				state.books[i].category == category ? state.books.splice(i, 1) : null;
			}
		}
	},
	actions: {
		deleteBook({commit,state}, index) {
			commit(types.DELETE_BOOK, index);
			console.log(state.books[200]==undefined);
			commit(types.SAVE_BOOKS_TO_LOCALSTORAGE);
		},
		addBook({commit,dispatch}, book) {
			let msg=[];
			if(book.author=="")
				msg.push("作者名未填写");
			if(book.name=="")
				msg.push("书名未填写")
			if(book.pages=="")
				msg.push("书的总页数未填写");
			if (isNaN(book.pages)) 
				msg.push("输入的书籍总页数格式错误");
			if (book.category == "") 
				msg.push("请在侧栏选择一个类别");
			if(msg.length>0)
				dispatch("addBookInfo", msg);
			else {
				commit(types.ADD_BOOK, book);
				commit(types.SAVE_BOOKS_TO_LOCALSTORAGE);
				dispatch("hideDialog");
			}
		},
		updateBookProgress({commit, state, dispatch}, readedPages) {
			let msg = [];
			if(readedPages=="")
				msg=["请填写已读页数"];
			if (isNaN(readedPages)) 
				msg = ["请输入数字"];
			if (parseInt(readedPages) > parseInt(state.books[state.editIndex].pages))
				msg = ["已读页数大于书籍的实际页数"];
			if(msg.length>0)
				dispatch("addProgressInfo", msg);
			else {
				commit(types.SAVE_BOOK_PROGRESS, readedPages);
				commit(types.SAVE_BOOKS_TO_LOCALSTORAGE);
				dispatch("hideDialog");
			}
		}
	}
}