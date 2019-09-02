Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :schools
    resources :districts
  end
end
