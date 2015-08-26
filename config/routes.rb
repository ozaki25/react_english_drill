Rails.application.routes.draw do
  root 'drills#index'
  resources :drill, only: :index
end
