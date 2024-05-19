import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { main_categories } from './main-categories';
import { MainCategory } from './types';

@Component({
  selector: 'app-main-categories',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './main-categories.component.html',
})
export class MainCategoriesComponent implements OnInit {
  main_categories: MainCategory[];

  constructor() {
    this.main_categories = [];
  }

  ngOnInit(): void {
    this.main_categories = main_categories;
  }
}
