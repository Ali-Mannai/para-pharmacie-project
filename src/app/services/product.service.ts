import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Vitamin C Serum',
      description: 'High potency vitamin C serum for radiant skin',
      price: 29.99,
      category: 'Skincare',
      imageUrl: '../../assets/imagesp/vitamineCserum.jpg',
      stock: 50
    },
    {
      id: 2,
      name: 'Omega-3 Supplements',
      description: 'Essential fatty acids for heart health',
      price: 19.99,
      category: 'Supplements',
      imageUrl: '../../assets/imagesp/omega3.jpg',
      stock: 100
    },
    {
      id: 3,
      name: 'Boumix Lotion',
      description: 'A lotion that help you get well with good smell',
      price: 34.99,
      category: 'Drugs',
      imageUrl: '../../assets/imagesp/boumix.jpg',
      stock: 120
    },
    {
      id: 4,
      name: 'backpack belt',
      description: 'A good belt to fix your back',
      price: 52.99,
      category: 'Drugs',
      imageUrl: '../../assets/imagesp/ceinture.jpg',
      stock: 40
    },
    {
      id: 5,
      name: 'Sirop ',
      description: 'A good drug to make your baby like a devil',
      price: 13.99,
      category: 'Drugs',
      imageUrl: '../../assets/imagesp/sirop.jpg',
      stock: 140
    },
    {
      id: 6,
      name: 'Sun lotion',
      description: 'A good lotion to help you enjoy your summer',
      price: 22.99,
      category: 'Lotions',
      imageUrl: '../../assets/imagesp/sunlo.jpg',
      stock: 44
    },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  addProduct(product: Product): void {
    const newProduct = {
      ...product,
      id: this.products.length + 1
    };
    this.products.push(newProduct);
    this.productsSubject.next(this.products);
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      this.productsSubject.next(this.products);
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    this.productsSubject.next(this.products);
  }
}