import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product } from '../product';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  words:string[];

  constructor(){
    this.words= ["one","two","three","four","fife","six","seven"];

  }

}
