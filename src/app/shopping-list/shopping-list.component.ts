import { Component, OnInit } from '@angular/core';
import { Ingredeint } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredeint[] = [
    new Ingredeint('apples', 5),
    new Ingredeint('tomatos', 2),
    new Ingredeint('fruits', 3)

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
