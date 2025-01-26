import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
@Input() cardItem:any;
  getStockStatus() {
    return this.cardItem.stock === 0 ? 'Out of Stock' : 'In Stock';
  }
  getStockBadgeClass() {
    return this.cardItem.stock === 0 ? 'bg-danger' : 'bg-success';
  }
  roundRating(rating: number): number {
    return Math.round(rating);
  }
}
