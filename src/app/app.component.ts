import { Component } from '@angular/core';
import { TodoParentComponent } from "./todo-parent/todo-parent.component";
import { CardListComponent } from "./card-list/card-list.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [TodoParentComponent, CardListComponent, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Third_Angular_Project';
}
