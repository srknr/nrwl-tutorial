import { Injectable } from '@nestjs/common';

interface Todo {
  title: string;
}

@Injectable()
export class AppService {
  todos: Todo[] = [{title: 'To do 1'}, {title: 'To do 2'}];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
  // getData(): { message: string } {
  //   return ({ message: 'Welcome to api!' });
  // }
}
