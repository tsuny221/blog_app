class HomesController < ApplicationController
  def top
    @blogs = Blog.all
  end
  def profile

  end
end
