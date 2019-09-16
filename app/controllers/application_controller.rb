class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken

  def fallback_index_html
    render :file => 'public/index.html'
  end
end
