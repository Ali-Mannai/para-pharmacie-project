import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  products: Product[] = [];
  currentProduct: Product = this.getEmptyProduct();
  editMode = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getEmptyProduct(): Product {
    return {
      name: '',
      description: '',
      price: 0,
      category: '',
      imageUrl: '',
      stock: 0
    };
  }

  onSubmit(): void {
    if (this.editMode) {
      this.productService.updateProduct(this.currentProduct);
    } else {
      this.productService.addProduct(this.currentProduct);
    }
    this.currentProduct = this.getEmptyProduct();
    this.editMode = false;
  }

  editProduct(product: Product): void {
    this.currentProduct = { ...product };
    this.editMode = true;
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id);
    }
  }

  cancelEdit(): void {
    this.currentProduct = this.getEmptyProduct();
    this.editMode = false;
  }
}