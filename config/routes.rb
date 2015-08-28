Rails.application.routes.draw do
  devise_for :users
  root 'drills#show'
  resources :drills do
    post 'check', to: 'drills#check'
    post 'next', to: 'drills#next'
  end
end
