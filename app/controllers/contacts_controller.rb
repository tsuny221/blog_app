class ContactsController < ApplicationController
  def confirm
    @blogs = Blog.all
    @contact = Contact.new(contact_params)
    render 'homes/top' if @contact.invalid?
  end

  def create
    @contact = Contact.new(contact_params)
    render('homes/top') && return if params[:back] || !@contact.save
    ContactMailer.send_mail(@contact).deliver_now
    redirect_to root_path
    flash[:notice] = "お問い合わせありがとうございました。"
end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :phone_number, :message)
  end
end
