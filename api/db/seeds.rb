# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Seeding database..."


# Recipe.destroy_all

# Create some users
User.create(username: 'john_doe', email: 'john@example.com', password: 'password123', bio: 'I love cooking!')
User.create(username: 'jane_doe', email: 'jane@example.com', password: 'password456', bio: 'Food enthusiast')

# Create some recipes
 Recipe.create(user_id: 1, name: 'Grilled Chicken with Broccoli')
 Recipe.create(user_id: 2, name: 'Fried Rice')
Recipe.create(user_id: 1, name: 'Tomato Sauce')
 Recipe.create(user_id: 2, name: 'Garlic Bread')

# Create some ingredients
Ingredient.create(name: "Chicken", quantity: 2, unit_of_measurement: "pieces")
Ingredient.create(name: "Rice", quantity: 1, unit_of_measurement: "cup")
Ingredient.create(name: "Brocolli", quantity: 1, unit_of_measurement: "head")
Ingredient.create(name: "Carrots", quantity: 3, unit_of_measurement: "medium")
Ingredient.create(name: "Olive oil", quantity: 2, unit_of_measurement: "tablespoons")
Ingredient.create(name: "Garlic", quantity: 3, unit_of_measurement: "cloves")
Ingredient.create(name: "Salt", quantity: 1/2, unit_of_measurement: "teaspoon")
Ingredient.create(name: "Pepper", quantity: 1/4, unit_of_measurement: "teaspoon")
Ingredient.create(name: "Eggs", quantity: 2, unit_of_measurement: "large")

# Create some recipe-ingredients
RecipeIngredient.create(recipe_id: 1, ingredient_id: 1)
RecipeIngredient.create(recipe_id: 1, ingredient_id: 2)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 3)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 4)
RecipeIngredient.create(recipe_id: 3, ingredient_id: 5)
RecipeIngredient.create(recipe_id: 3, ingredient_id: 6)
RecipeIngredient.create(recipe_id: 3, ingredient_id: 7)
RecipeIngredient.create(recipe_id: 3, ingredient_id: 8)

puts "Done seeding!"