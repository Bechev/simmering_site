Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api do 
        namespace :v1 do 

            
            resources :posts, only: [:index]
            resources :mealplans, only: [:index]
            resources :days, only: [:index]
            resources :meals, only: [:index]
            resources :recipes, only: [:index]
            
            post 'posts/:id/like_post' =>"posts#like_post"

            resources :users do 
                resources :posts
                resources :mealplans
                resources :days
                resources :meals
                resources :recipes
            end
            
            resources :mealplans do
                resources :days, only: [:index]
            end
            
            resources :days do
                resources :meals, only: [:index]
            end
            
            resources :meals  do 
                resources :recipes, only: [:index]
            end
            
            resources :recipes do
                resources :ingredients, only: [:index]
            end
        
        end 
    end




end
