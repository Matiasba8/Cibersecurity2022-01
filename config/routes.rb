Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'user#home'
  get "google-login", to: 'user#get_google_login'
  post "user/login", to: 'user#new_from_saf'
  post "login_google", to: 'user#new_from_gmail'
end
