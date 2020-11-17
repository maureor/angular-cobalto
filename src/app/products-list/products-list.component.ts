import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [
        {
        image:'assets/img/metronomy-forever.jpg',
        name:'Metronomy Forever',
        artist:'Metronomy',
        type:'Vinilo',
        price:2350,
        stock:1,
        release: true, 
        clearance: false,
        quantity: 0, 
      },
      {
        image:'assets/img/refugio.jpg',
        name:'Refugio',
        artist:'Claudia Sinesi',
        type:'Album',
        price:780,
        stock:7,
        release: true, 
        clearance: true,
        quantity: 0, 
      },
      {
        image:'assets/img/oracular-spectacular.jpg',
        name:'Oracular Spectacular',
        artist:'MGMT',
        type:'Vinilo',
        price:800,
        stock:3,
        release: false, 
        clearance: false,
        quantity: 0, 
      },
      {
        image:'assets/img/lavandina.jpg',
        name:'Lavandina',
        artist:'Clara Cava',
        type:'EP Album',
        price:400,
        stock:5,
        release: true,
        clearance: false,   
        quantity: 0, 
      },
      {
        image:'assets/img/santa-basura.jpg',
        name:'Santa Basura',
        artist:'Esmeralda Escalante',
        type:'EP Album',
        price:460,
        stock:7,
        release: true,
        clearance: false,
        quantity: 0, 
      },
      {
      image:'assets/img/mistica-analogica.jpg',
      name:'Mística Analógica',
      artist:'Citrico',
      type:'Album',
      price:400,
      stock:3,
      release: false,
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
      release: false,
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
      release: false,
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
      release: true,
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
      release: false,
      clearance: false, 
      quantity: 0,
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  downQuantity(product: Product):void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  upQuantity(product: Product):void {
    if (product.quantity < product.stock) {
      product.quantity++;
    }
  }

}
