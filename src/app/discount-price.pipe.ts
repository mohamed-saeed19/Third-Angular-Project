import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPrice'
})
export class DiscountPricePipe implements PipeTransform {
  transform(price: number, discountPercentage: number | undefined): { originalPrice: number, discountedPrice: number } {
    if (!discountPercentage) {
      return {
        originalPrice: price,
        discountedPrice: price
      };
    }
    const discountedPrice = price - (price * (discountPercentage / 100));
    return {
      originalPrice: price,
      discountedPrice: discountedPrice
    };
  }
}
