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
  private cartSubject = new BehaviorSubject<Product[]>([]);  // Cart as an observable

  // Get all products
  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  // Get the current cart
  getCart(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  // Add a product to the cart
  addToCart(product: Product): void {
    let cart = this.cartSubject.getValue();
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.stock += 1;  // Increase stock if the product is already in the cart
    } else {
      cart.push({ ...product, stock: 1 });  // Add product with quantity 1
    }
    
    this.cartSubject.next(cart);
  }

  // Remove product from cart
  removeFromCart(productId: number): void {
    const updatedCart = this.cartSubject.getValue().filter(item => item.id !== productId);
    this.cartSubject.next(updatedCart);
  }

  // Update product (for example, update stock or price)
  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      this.productsSubject.next(this.products);
    }
  }

  // Delete product (from products list)
  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    this.productsSubject.next(this.products);
  }
  addProduct(product: Product): void {
    const newProduct = {
      ...product,
      id: this.products.length + 1
    };
    console.log(newProduct,"here new product");
    this.products.push(newProduct);
    this.productsSubject.next(this.products);
  }
}
