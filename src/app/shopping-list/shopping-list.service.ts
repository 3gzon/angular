import { EventEmitter } from "@angular/core";
import { Ingredeint } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredeint[]>()
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
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}