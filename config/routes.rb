Rails.application.routes.draw do
  devise_for :admins
  root 'homes#top'
  resources :blogs do
    member do
      get :tag
    end
  end
  get 'homes/profile' => "homes#profile"
  resources :contacts, only: [:create] do
    collection do
      post :confirm
    end
  end
end
