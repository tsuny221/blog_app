Rails.application.routes.draw do
  devise_for :admins
  root 'homes#top'
  resources :blogs
  get 'homes/profile' => "homes#profile"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :contacts, only: [:create] do
    collection do
      post :confirm
    end
  end
end
