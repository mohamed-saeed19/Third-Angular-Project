import { Component } from '@angular/core';
import { TodoParentComponent } from "./todo-parent/todo-parent.component";

@Component({
  selector: 'app-root',
  imports: [ TodoParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Third_Angular_Project';
}
