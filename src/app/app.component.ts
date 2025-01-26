import { Component } from '@angular/core';
import { TodoParentComponent } from "./todo-parent/todo-parent.component";
import { CardListComponent } from "./card-list/card-list.component";

@Component({
  selector: 'app-root',
  imports: [TodoParentComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Third_Angular_Project';
}
