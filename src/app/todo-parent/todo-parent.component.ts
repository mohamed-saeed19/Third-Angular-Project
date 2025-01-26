import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-parent',
  templateUrl: './todo-parent.component.html',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
})
export class TodoParentComponent {
  tasks: { id: number; text: string; completed: boolean }[] = [];
  nextId: number = 1;

  addTask(newTask: string) {
    if (newTask.trim()) {
      this.tasks.push({
        id: this.nextId++,
        text: newTask.trim(),
        completed: false,
      });
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  toggleCompleted(taskId: number) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
