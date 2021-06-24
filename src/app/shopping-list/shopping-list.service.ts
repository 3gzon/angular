import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredeint } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredeint[]>()
    private ingredients: Ingredeint[] = [
        new Ingredeint('apples', 5),
        new Ingredeint('tomatos', 2),
        new Ingredeint('fruits', 3)

    ];
    getIngredients() {
        return this.ingredients.slice()
    }
    addIngredient(ingredient: Ingredeint) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    addIngredients(ingredients: Ingredeint[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}