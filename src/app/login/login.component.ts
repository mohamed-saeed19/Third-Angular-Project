import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!');
    } else {
      console.log('Form is invalid');
    }
  }
}
