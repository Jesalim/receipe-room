class RecipesController < ApplicationController
    def show
        recipes = Recipe.all
        render json: recipes
    end

    def create
        recipe = Recipe.create(recipe_params)
        if recipe.valid?
            app_response(message: "Recipe added successfully", status: :created, data: recipe)
        else
            app_response(message: "Failed to add recipe", status: :unprocessable_entity, data: user.errors.full_messages)
        end
    end

    def update
        recipe = Recipe.find(params[:id])
        if user.update(recipe_params)
            app_response(message: "Recipe updated successfully", status: :ok, data: recipe)
        else
            app_response(message: "Failed to update", status: :unprocessable_entity, data: user.errors.full_messages)
        end
    end

    def destroy
        recipe = Recipe.find(params[:id])
        recipe.destroy
        app_response(message: "Recipe deleted successfully", status: :ok, data: recipe)
    end

    private

    def recipe_params
        params.permit(:name, :ingredients, :people_served, :country)
    end
end
