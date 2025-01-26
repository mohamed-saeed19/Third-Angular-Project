import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TodoListComponent {
  @Input() tasks: { id: number; text: string; completed: boolean }[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleCompleted = new EventEmitter<number>();

  onDeleteTask(taskId: number) {
    this.deleteTask.emit(taskId);
  }

  onToggleCompleted(taskId: number) {
    this.toggleCompleted.emit(taskId);
  }
}
