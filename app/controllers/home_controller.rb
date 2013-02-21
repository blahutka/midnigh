class HomeController < ApplicationController
  caches_page :index

  def index
    render :layout=>'application.html.haml'
  end
end
