class API::DistrictsController < ApplicationController
  def show
    render json: District.find(params[:id])
  end
end
