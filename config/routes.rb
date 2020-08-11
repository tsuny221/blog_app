Rails.application.routes.draw do
  devise_for :admins
  root 'homes#top'
  resources :blogs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
