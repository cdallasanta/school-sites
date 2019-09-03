class API::UsersController < ApplicationController
  def create
    user = User.new(create_params)

    if user.save
      render json: success_json(user), status: :created
    else
      render json: error_json(user), status: :unprocessable_entity
    end
  end

  def error_json(user)
    { errors: user.errors.full_messages }
  end
  
  def show
    @user = User.all.last
    render 'users/show'
  end

  def avatar
    user = User.find_by(id: params[:id])
  
    if user&.avatar&.attached?
      redirect_to rails_blob_url(user.avatar)
    else
      head :not_found
    end
  end

  
  private

  def create_params
    params.require(:user).permit(:name, :avatar)
  end

  def success_json(user)
    {
      user: {
        id: user.id,
        name: user.name
      }
    }
  end

end
