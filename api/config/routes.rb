Rails.application.routes.draw do
  default_url_options :host => "localhost:3001"
  namespace :api do
    resources :users do 
      get :avatar, on: :member
    end

    resources :schools
    resources :districts
  end
end
