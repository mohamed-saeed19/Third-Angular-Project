import { Injectable } from '@angular/core';
import { CartItem } from './types/card-item';
import { BehaviorSubject } from 'rxjs';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cart: CartItem[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  constructor() { }
  addToCart(product: Product): void {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1, stock: product.stock });
    }
    this.updateCartItemCount();
  }

  updateQuantity(product: Product, quantity: number): void {
    const cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
    this.updateCartItemCount();
  }

  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(item => item.product.id !== product.id);
    this.updateCartItemCount();
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }

  clearCart(): void {
    this.cart = [];
    this.updateCartItemCount();
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  private updateCartItemCount(): void {
    const count = this.cart.reduce((total, item) => total + item.quantity, 0);
    this.cartItemCount.next(count);
  }

  quantityOf(product: Product): number {
    const item = this.cart.find(item => item.product.id === product.id);
    return item ? item.quantity : 0;
  }

}
