import { CartServiceService } from './../cart-service.service';
import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem } from '../types/card-item';
import { Product } from '../types/product';

@Component({
  selector: 'app-cart',
  imports: [  FormsModule,
    CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  constructor(private CartServiceService: CartServiceService) {
    this.fetchCartItems();
  }

  fetchCartItems(): void {
    this.cartItems = this.CartServiceService.getCartItems();
  }

  removeFromCart(product: Product): void {
    this.CartServiceService.removeFromCart(product);
    this.fetchCartItems();
  }

  updateQuantity(product: Product, quantity: number): void {
    if (quantity < 1 || quantity > product.stock) return;
    this.CartServiceService.updateQuantity(product, quantity);
    this.fetchCartItems();
  }

  clearCart(): void {
    this.CartServiceService.clearCart();
    this.cartItems = [];
  }

  getTotalPrice(): number {
    return this.CartServiceService.getTotalPrice();
  }
}
