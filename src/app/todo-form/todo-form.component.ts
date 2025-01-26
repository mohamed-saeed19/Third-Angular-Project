import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrl:'./todo-form.component.css',
})
export class TodoFormComponent {
  @Output() addTask = new EventEmitter<string>();
  newTask: string = '';

  onAddTask() {
    if (this.newTask.trim()) {
      this.addTask.emit(this.newTask.trim());
      this.newTask = '';
    }
  }
}
