import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredeint } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredeint[];
  private idChangeSubs: Subscription
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.idChangeSubs = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredeint[]) => {
        this.ingredients = ingredients
      }
    )
  }
  onEditItem(index: number) {
    this.slService.startedEditting.next(index)
  }
  ngOnDestroy(): void {
    this.idChangeSubs.unsubscribe()
  }

}
