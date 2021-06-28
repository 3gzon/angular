import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredeint } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription
  editMode = false;
  editedItemIndex: number
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditting.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      }
    )
  }
  onAddItem(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredeint(value.name, value.amount);
    this.slService.addIngredient(newIngredient)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
