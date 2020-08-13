class ContactMailer < ApplicationMailer
  def send_mail(contact)
    @contact = contact
    mail(to: @contact.email, bcc: 'kingoftsunywork@gmail.com', subject: "お問い合わせ")
  end
end
