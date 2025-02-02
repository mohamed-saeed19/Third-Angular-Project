import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-card-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {

  constructor(private router: Router,    private cartService: CartServiceService  ) {}


@Input() cardItem:any;
@Input() id : string = '';
  getStockStatus() {
    return this.cardItem.stock === 0 ? 'Out of Stock' : 'In Stock';
  }
  getStockBadgeClass() {
    return this.cardItem.stock === 0 ? 'bg-danger' : 'bg-success';
  }
  roundRating(rating: number): number {
    return Math.round(rating);
  }
  handleRedirectToDetails(id:number){
this.router.navigate(['/product',id])
  }
  addToCart(product: Product): void {
    if (this.cartService.quantityOf(product) >= product.stock) return;
    this.cartService.addToCart(product);
    console.log(`Added ${product.title} to the cart.`);
  }
}
