import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Skincare',
      description: 'Premium skincare products for all skin types',
      imageUrl: 'https://placehold.co/800x400/87CEEB/ffffff?text=Skincare'
    },
    {
      id: 2,
      name: 'Supplements',
      description: 'High-quality vitamins and supplements',
      imageUrl: 'https://placehold.co/800x400/98FB98/ffffff?text=Supplements'
    },
    {
      id: 3,
      name: 'Hair Care',
      description: 'Professional hair care solutions',
      imageUrl: 'https://placehold.co/800x400/DDA0DD/ffffff?text=Hair+Care'
    }
  ];

  private categoriesSubject = new BehaviorSubject<Category[]>(this.categories);

  getCategories(): Observable<Category[]> {
    return this.categoriesSubject.asObservable();
  }
}