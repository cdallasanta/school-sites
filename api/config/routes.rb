Rails.application.routes.draw do
  namespace :api do
    resources :users do 
      get :avatar, on: :member
    end

    resources :schools
    resources :districts
  end
end
