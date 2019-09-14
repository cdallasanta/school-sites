Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  default_url_options host: "localhost:3001"

  # TODO this will need to change once other school districts are added
  root to: redirect('/districts/1')

  namespace :api do
    resources :events
    resources :blogs
    resources :users do 
      get :avatar, on: :member
    end

    resources :districts do
      resources :schools
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
