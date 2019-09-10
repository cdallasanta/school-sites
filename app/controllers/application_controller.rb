class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
  def root
    "Root of server"
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end
end
