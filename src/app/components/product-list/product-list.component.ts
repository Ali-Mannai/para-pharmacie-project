import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CarouselComponent } from '../carousel/carousel.component';
import { CategoriesComponent } from '../categories/categories.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CategoriesComponent, FooterComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}