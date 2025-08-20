import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product',
  imports: [Navbar,Footer ,ProductList  ],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

}
