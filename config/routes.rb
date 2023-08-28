Rails.application.routes.draw do
  get 'calculator', to: 'calculator#index'
  root 'calculator#index'
end
