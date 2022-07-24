module UserHelper

    def get_google_auth_path
        random_client_id = rand(999999999999999999)
        google_auth = "https://accounts.google.com/o/oauth2/auth/identifier?state=auth_provider%3Dgoogle&redirect_uri=https%3A%2F%2Fsaf.uandes.cl%2Fing%2Fdefault%2Fuser%2Flogin&" +
        "response_type=code&client_id=#{random_client_id.to_s}-m7ukaj2bh9husl3c4is280sks1lsbm9i1.apps.googleusercontent.com&include_granted_scopes=true&approval_prompt=auto&scope=email&flowName=GeneralOAuthFlow"


        return google_auth
    end
    
end
