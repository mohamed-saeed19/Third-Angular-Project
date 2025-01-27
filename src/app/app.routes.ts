import { Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path:'' ,
    component: CardListComponent ,
    title:"Home Page"
  },
  {
    path: 'login',
    component:LoginComponent,
    title:"Login"
  }
  ,
  {
    path: 'sign-up',
    component:SignUpComponent,
    title:"Register"
  }
  ,
  {
    path: 'product/:id',
    component:ProductDetailsComponent,
    title:"Product Details"
  }
  ,
  {
    path: '**',
    component:NotFoundComponent,
    title:"Not Found"
  }
];
