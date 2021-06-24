import { EventEmitter, Injectable } from "@angular/core";
import { Ingredeint } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [

        new Recipe('A test recipe name one', 'this is a test description', 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752',
            [
                new Ingredeint('juice', 2),
                new Ingredeint('orange juice', 3)
            ]
        ),
        new Recipe('A test recipe name two', 'this is a test description', 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752',
            [
                new Ingredeint('lettuce', 10),
                new Ingredeint('orange peace', 3)
            ]
        )
    ];
    constructor(private slService: ShoppingListService) { }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index]
    }
    addIngredientsToShoppingList(ingredients: Ingredeint[]) {
        this.slService.addIngredients(ingredients);
    }
}