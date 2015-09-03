Rails.application.routes.draw do
  devise_for :users
  root 'drills#show'
  resources :users
  resources :drills do
    post 'check', to: 'drills#check'
    get 'next', to: 'drills#next'
  end
end
