import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { ProductListComponent } from './app/components/product-list/product-list.component';
import { ProductManagementComponent } from './app/components/product-management/product-management.component';
import { CardComponent } from './app/components/card/card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class App {
  name = 'ParaPharmacie';
}

const routes = [
  { path: '', component: ProductListComponent },
  { path: 'manage', component: ProductManagementComponent },
  { path: 'card', component: CardComponent }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});