import { action, observable } from 'mobx';

class AppStore {
  @observable isLoading = true;

  @action
  completeLoading = () => {
    this.isLoading = false;
  };

  @observable todoName = '';

  @observable todos = [];

  @action
  changeTodoName = todoName => {
    this.todoName = todoName;
  };

  @action
  fetchTodos = () => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(json => {
        this.todos = json;
        this.completeLoading();
      });
  };

  @action
  toggleTodoDone = id => {
    const data = { id };
    fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; cahrset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        this.todos = json;
      });
  };

  @action
  postTodo = todoName => {
    const data = { name: todoName };
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        this.todos = [...this.todos, json];
        this.todoName = '';
      });
  };
}

export default new AppStore();
