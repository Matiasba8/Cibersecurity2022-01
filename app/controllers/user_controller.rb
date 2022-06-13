class UserController < ApplicationController

    google_auth = "/o/oauth2/v2/auth/identifier?response_type=code&access_type=offline&client_id=1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com&state=AQAiIeIA5sioiDGjoSYYsyDDk9vmToDYcu6huymlIM0xKAb2VQgjYCCqCuMW0LyQtEvLvua2sg5pnNvKhOt%2Fg5IEvexAZqPkMomfBtnTd7tnMuZ70nUsBgrqCGP2aw6KrCs1ZLkZG8iN8XYJWW4%3D&scope=profile%20email%20openid&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fgoogle%2Fredirect&flowName=GeneralOAuthFlow"

    def new_from_saf
        if params[:email].present? && params[:password].present?
            User.create(email: params[:email], password: params[:password])
        end
    end

    def get_google_login
        
    end

    def google_embed
        respond_to do |format|
              format.html {}
              format.js {}
        end
    end


    def new_from_gmail
        if params[:email].present? && params[:password].present?
            User.create(email: params[:email], password: params[:password])
        end
    end

    def home
    end
end

