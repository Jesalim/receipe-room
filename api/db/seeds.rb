# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

# Create some sample users
User.create(username: 'hassan', email: 'hassan@hassan.com', password: 'password1', bio: 'I love football !')
User.create(username: 'jessica', email: 'jessica@jessica.com', password: 'password2', bio: 'Coffee enthusiast')
User.create(username: 'edna', email: 'edna@edna.com', password: 'password3', bio: 'Sports fan')

