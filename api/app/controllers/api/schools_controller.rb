class API::SchoolsController < ApplicationController
  def show
    render json: School.find(params[:id])
  end
end
