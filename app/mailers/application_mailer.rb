class ApplicationMailer < ActionMailer::Base
  default from: 'smtp_error@hotmail.com'
  layout 'mailer'
end
