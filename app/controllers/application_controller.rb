class ApplicationController < ActionController::Base
  before_action :search

  def search
    @q = Blog.all.page(params[:page]).ransack(params[:q])
    @blogs = @q.result(distinct: true)
  end
end
