Rails.application.routes.draw do
  root 'drills#show'
  resources :drills do
    post 'check', to: 'drills#check'
  end
end
