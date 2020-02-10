Rails.application.routes.draw do
  devise_for :users
  root 'top#index'
  resources :users,only: [:edit, :update]
  resources :contents, :switch,:switch2,:switch3,:switch4,:switch5,:switch6,:switch7,:switch8,:switch9,only: [:index,:new]
end
