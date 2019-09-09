Rails.application.routes.draw do
  default_url_options :host => "localhost:3001"

  root "application#root"
  
  namespace :api do
    resources :users do 
      get :avatar, on: :member
    end

    # resources :schools
    resources :districts do
      resources :schools
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
