const STORAGE_KEY="readingBooks";

export default{
	key:"readingBooks",
	save(items){
		return window.localStorage.setItem(this.key,JSON.stringify(items));
	},
	fetch(){
		return JSON.parse(window.localStorage.getItem(this.key)||'[]');
	}
}