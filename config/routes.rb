Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api do 
        namespace :v1 do 

            mount_devise_token_auth_for 'User', at: 'auth'

            post '/search' => "recipes#search"
            resources :posts
            resources :mealplans, only: [:index]
            resources :days, only: [:index]
            resources :meals, only: [:index]
            resources :recipes, only: [:index]
            

            resources :posts do
                resources :comments, only: [:index, :create]
            end

            # resources :users do 
            #     resources :posts
            #     resources :mealplans
            #     resources :days
            #     resources :meals
            #     resources :recipes
            # end
            
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
