import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = { items: [{
    product: 'http://placekitten.com',
    name: 'sneakers',
    price: 150,
    quantity: 1,
    id: 1
  },
  {
    product: 'http://placekitten.com',
    name: 'sneakers',
    price: 150,
    quantity: 1,
    id: 2
  },

] };

  dataScource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataScource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items.
      map((item) => item.price * item.quantity).reduce((prev, current) => prev + current,0)
  }

}
