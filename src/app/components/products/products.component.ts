import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllSimple().subscribe((products) => {
      this.products = products;
    });
  }
}
