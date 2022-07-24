class SenderMailer < ApplicationMailer
    def new_email
        mail(to: "mibustos2@miuandes.cl", subject: "Ayudantia")
    end
end
