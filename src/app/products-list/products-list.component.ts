import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product [] = [
      {
      image:'assets/img/mistica-analogica.jpg',
      name:'Mística Analógica',
      artist:'Citrico',
      type:'Album',
      price:400,
      stock:3,
      clearance: false,
      quantity: 0, 
    },
    {
      image:'assets/img/chango.jpg',
      name:'Chango',
      artist:'Isla de Caras',
      type:'Vinilo',
      price:1700,
      stock:5,
      clearance: true,
      quantity: 0,
    },
    {
      image:'assets/img/crucero-cristal.jpg',
      name:'Crucero Cristal',
      artist:'Anyi',
      type:'Album',
      price:550,
      stock:0,
      clearance: false, 
      quantity: 0,
    },
    {
      image:'assets/img/forestal-tape.jpg',
      name:'Forestal Tape',
      artist:'Las luces primeras',
      type:'Vinilo',
      price:2200,
      stock:8,
      clearance: true,
      quantity: 0, 
    },
    {
      image:'assets/img/ochocientos-envolventes.jpg',
      name:'Ochocientos envolventes al sol',
      artist:'Juan Mango',
      type:'Album, Cassette',
      price:620,
      stock:0,
      clearance: false, 
      quantity: 0,
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: Product):void {
    if (product.quantity < product.stock) {
      product.quantity++;
    }
  }

  downQuantity(product: Product) :void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }
}
