class HomesController < ApplicationController
  def top
    @blogs = Blog.all
    @contact = Contact.new
  end

  def profile
  end
end
