import { Routes } from '@angular/router';
import {ProductList} from './product-list/product-list';
import {Cart} from './cart/cart';
import {Checkout} from './checkout/checkout';
import {ProductDetail} from './product-list/product-detail/product-detail';
import { Product } from './product/product';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductList
  },
  {
    path: 'cart',
    component: Cart
  },
  {
    path: 'checkout',
    component: Checkout
  },
  {
    path: 'product/:id', // <-- new route
    component: ProductDetail
  }

  ,

   {
    path: 'product', // <-- new route
    component: Product
  },
  {
    path: 'contact', // <-- new route
    component: Contact
  }
  
  
];
