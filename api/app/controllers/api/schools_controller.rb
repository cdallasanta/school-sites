class API::SchoolsController < ApplicationController
  def index
    render json: School.all.to_json(only: [:id, :name])
  end

  def show
    render json: School.find(params[:id])
  end
end
