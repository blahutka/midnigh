class HomeController < ApplicationController
  def index
    render :layout=>'application.html.haml'
  end
end
