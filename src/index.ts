class TodoItem {
	constructor(
		public id: number,
		public task: string,
		public complete: boolean = false
	) {}
}

class TodoApp {
	constructor(public userName: string, public todoList: TodoItem[]) {}

	getById(id: number): TodoItem | undefined {
		return this.todoList.find((item) => item.id === id);
	}
	removeById(id: number): void {
		this.todoList = this.todoList.filter((item) => item.id !== id);
	}
	updateById(id: number, task: string, complete: boolean): TodoItem | undefined {
		this.todoList = this.todoList.map((item) => {
			if (item.id === id) {
				item.task = task;
				item.complete = complete;
			}
      return item
		});
    return this.getById(id)
  }
}
const todos: TodoItem[] = [
	new TodoItem(0, "투두 만들기"),
	new TodoItem(1, "투두 테스트"),
	new TodoItem(2, "투두 완성하기"),
];
const app = new TodoApp("oho", todos);

// console.log(app.removeById(0));
console.log(app.updateById(1, '투두 수정하기', true));
console.log(app.todoList);
