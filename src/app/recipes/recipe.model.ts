import { Ingredeint } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredeint[];
    constructor(name: string, description: string, imagePath: string, ingredients: Ingredeint[]) {
        this.name = name;
        this.description = description
        this.imagePath = imagePath
        this.ingredients = ingredients
    }
}