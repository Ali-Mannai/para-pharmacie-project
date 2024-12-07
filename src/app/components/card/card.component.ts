import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cart: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

  removeFromCart(productId: number): void {
    this.productService.removeFromCart(productId);
  }

  // Calculate the total price of the cart
  get totalPrice(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.stock, 0);
  }
}
