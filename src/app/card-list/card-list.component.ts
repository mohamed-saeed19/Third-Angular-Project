import { Component } from '@angular/core';
import { Product } from '../types/product';
import { CardItemComponent } from '../card-item/card-item.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-card-list',
  imports: [CardItemComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  products: Product[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
this.fetchProducts();
      }
      fetchProducts() {
        this.http.get<{ products: Product[] }>(`${environment.baseUrl}/products`)
          .subscribe(response => this.products = response.products);
      }
}
