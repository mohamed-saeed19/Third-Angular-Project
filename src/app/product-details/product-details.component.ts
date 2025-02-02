import { CartServiceService } from './../cart-service.service';
import { Product } from './../types/product';
import { Component, Input ,OnInit } from '@angular/core';
import {  DatePipe, NgClass ,DecimalPipe} from '@angular/common';
import { DiscountPricePipe } from '../discount-price.pipe';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-product-details',
  imports: [NgClass,DiscountPricePipe ,DecimalPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent  {
  @Input() id: string = '';
  product: Product | undefined;
  mainImage: string = '';
  quantity: number = 1;
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartServiceService
  ) {}
  ngOnInit() {
    this.product = this.products.find((item: Product) => item.id === Number(this.id));
    if (this.product && this.product.images.length > 0) {
      this.mainImage = this.product.images[0];
    }
    if (this.id) {
      this.fetchProductDetails(this.id);
    }
  }
  fetchProductDetails(id: string): void {
    this.http.get<Product>(`${environment.baseUrl}/products/${id}`)
      .subscribe((response) => { this.product = response;
        },
        (error) => {
          console.error('Error fetching product details:', error);
          alert('Failed to fetch product details.');
        }
      );
  }
  changeMainImage(image: string) {
    this.mainImage = image;
  }
  incrementQuantity() {
    if (this.quantity < this.product!.stock) {
      this.quantity++;
    }
  }
  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  addToCart(product: Product): void {
    if (this.cartService.quantityOf(product) >= product.stock) return;
    this.cartService.addToCart(product);
    console.log(`Added ${product.title} to the cart.`);
  }
}
