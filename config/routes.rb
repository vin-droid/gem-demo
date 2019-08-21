Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :gem_demos, only: [:index] do
  	collection do 
  		get :lobibox
  	end
  end
  root 'gem_demos#index'
end
