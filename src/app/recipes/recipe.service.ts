import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cosmo',
      'Cocktail',
      'https://cocktailsworld.net/wp-content/uploads/Cosmopolitan.jpg',
    [
      new Ingredient('Cranberry-Juice', 250),
      new Ingredient('Lime-Juice', 50),
      new Ingredient('Ice', 1),
      new Ingredient('Vodka', 4)
    ]),
    new Recipe('Caipi',
    'Cocktail',
    'https://cocktailsworld.net/wp-content/uploads/Caipirinha.jpg',
  [
    new Ingredient('Lime', 2),
    new Ingredient('Broun Sugar', 2),
    new Ingredient('Ice', 1),
    new Ingredient('Vodka', 4)
  ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
