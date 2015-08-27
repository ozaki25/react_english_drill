Rails.application.routes.draw do
  root 'drills#show'
  resources :drills do
    post 'check', to: 'drills#check'
    post 'next', to: 'drills#next'
  end
end
