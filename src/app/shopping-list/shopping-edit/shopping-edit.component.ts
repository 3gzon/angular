import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
// import { Subscription } from 'rxjs/Subscription';
import { Ingredeint } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredeint
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditting.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }
  onSubmit(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredeint(value.name, value.amount);
    if (this.editedItem) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient)
    }
    this.editMode = false
    form.reset()
  }
  onClear() {
    this.slForm.reset()
    this.editMode = false
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
