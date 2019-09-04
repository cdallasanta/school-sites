class API::SchoolsController < ApplicationController
  def index
    render json: School.where(district_id: params[:district_id]).to_json(only: [:id, :name, :grade_level])
  end

  def show
    render json: School.find(params[:id])
  end
end
