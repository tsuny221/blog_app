class BlogsController < ApplicationController
  before_action :authenticate_admin!, only: [:new, :create]
  def new
    @blog= Blog.new
  end

  def create
    @blog= Blog.new(blog_params)
    if @blog.save
      redirect_to blogs_path
    else
    render :index
  end
end
  def index
    @blogs= Blog.all
  end

  def edit
     @blog= Blog.find(params[:id])
  end

  def update
    @blog= Blog.find(params[:id])
    if @blog.update(blog_params)
      redirect_to blogs_path
    else
    render :index
  end
end
def show
  @blog= Blog.find(params[:id])
end

  def destroy
    @blog= Blog.find(params[:id])
    if @blog.destroy
      redirect_to blogs_path
    else
    render :index
  end
end

  private

  def blog_params
    params.require(:blog).permit(:title, :content, :tag, :image)
  end
end
