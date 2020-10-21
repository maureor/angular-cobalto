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
    },
    {
      image:'assets/img/chango.jpg',
      name:'Chango',
      artist:'Isla de Caras',
      type:'Vinilo',
      price:1700,
      stock:5,
      clearance: true,
    },
    {
      image:'assets/img/crucero-cristal.jpg',
      name:'Crucero Cristal',
      artist:'Anyi',
      type:'Album',
      price:550,
      stock:0,
      clearance: false,  
    },
    {
      image:'assets/img/forestal-tape.jpg',
      name:'Forestal Tape',
      artist:'Las luces primeras',
      type:'Vinilo',
      price:2200,
      stock:8,
      clearance: true, 
    },
    {
      image:'assets/img/ochocientos-envolventes.jpg',
      name:'Ochocientos envolventes al sol',
      artist:'Juan Mango',
      type:'Album, Cassette',
      price:620,
      stock:0,
      clearance: false,  
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
