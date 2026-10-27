import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductCards } from '../models/product';

@Component({
  selector: 'app-cidade',
  standalone: false,
  templateUrl: './cidade.html',
  styleUrl: './cidade.css',
})
export class Cidade {
products: ProductCards[] = [];
  formGroupProductCards: FormGroup;

  constructor(private formbuilder: FormBuilder) {

     this.formGroupProductCards = this.formbuilder.group({
    id: [''],
    name: [''],
    description: [''],
    img: [''],
    estado: [''],
    area: [''],
    });
  }
 save() {
    this.products.push(this.formGroupProductCards.value);
    this.formGroupProductCards.reset();
  }}
