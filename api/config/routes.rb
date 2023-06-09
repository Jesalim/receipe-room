Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  #resources :recipes, only: [:show, :create, :destroy, :update]

   # user
   resources :users, only: [:index, :destroy, :update]

   post '/signup', to: 'users#create'
   get '/users/:id', to: 'users#show'


   # sessions
   post '/login', to: 'sessions#create'
   delete '/logout', to: 'sessions#destroy'
   get '/me', to: 'sessions#user_session'

    # recipes
  resources :recipes, only: [:index, :show, :create, :update, :destroy]
  # post '/recipes', to: 'recipes#create'
  # patch '/recipes/:id', to: 'recipes#update'
  # delete '/recipes/:id', to: 'recipes#destroy'
  # get '/recipes', to: 'recipes#index'
  # get '/recipes/:id', to: 'recipes#show'
  get "/search", to: "recipes#search"
end
