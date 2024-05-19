import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CarouselModule, TagModule, ButtonModule],
  templateUrl: './banner.component.html',
  host: { ngSkipHydration: 'true' },
})
export class BannerComponent implements OnInit {
  products: Array<any>;

  constructor() {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = [
      {
        image: 'gaming-set.jpg',
        inventoryStatus: 'primary',
        name: 'Gaming Set',
        price: 99.99,
        color: 'bg-blue-500',
      },
      {
        image: 'bamboo-watch.jpg',
        inventoryStatus: 'success',
        name: 'Bamboo Watch',
        price: 59.99,
        color: 'bg-blue-600',
      },
    ];
  }
}
