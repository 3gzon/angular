import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredeint } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredeint[]>();
    startedEditting = new Subject<number>();
    private ingredients: Ingredeint[] = [
        new Ingredeint('apples', 5),
        new Ingredeint('tomatos', 2),
        new Ingredeint('fruits', 3)

    ];

    getIngredients() {
        return this.ingredients.slice()
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredeint) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    addIngredients(ingredients: Ingredeint[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    updateIngredient(index: number, newIngredient: Ingredeint) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}