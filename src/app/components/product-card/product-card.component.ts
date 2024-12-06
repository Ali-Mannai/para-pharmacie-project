import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Product>();

  onDelete(): void {
    if (this.product.id) {
      this.delete.emit(this.product.id);
    }
  }

  onEdit(): void {
    this.edit.emit(this.product);
  }
}