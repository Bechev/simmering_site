Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api do 
        namespace :v1 do 

            mount_devise_token_auth_for 'User', at: 'auth'

            post '/search' => "recipes#search"
            get '/mealplan' => "mealplans#userLastMealplan"
            get '/suggestions' => "recipes#suggestions"
            # post '/users/:id/ingredients' => "users#show_ingredients"
            # update '/users/:id/ingredients' => "users#update"
            resources :posts
            resources :mealplans, only: [:index, :show, :update, :create]
            resources :days, only: [:index]
            resources :meals, only: [:index, :update]
            resources :recipes, param: :slug, only: [:index, :show]
            resources :groceries_list, only: [:create]
            resources :ingredients, only: [:index, :update, :destroy]
            resources :categories, only: [:index]
            resources :parameters, only: [:index, :update]
            resources :quantities_multiplicator, only: [:update]
            resources :blog_posts, param: :slug, only: [:index, :show]
            resources :blog_comments, param: :slug, only: [:index, :show, :create]

            resources :posts do
                resources :comments, only: [:index, :create]
            end

        
        end 
    end




end
