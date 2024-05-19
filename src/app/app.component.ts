import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HeaderComponent } from './components/header/header.component';
import { MainCategoriesComponent } from './components/main-categories/main-categories.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ProductsComponent,
    BannerComponent,
    FiltersComponent,
    MainCategoriesComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'z_products';
}
