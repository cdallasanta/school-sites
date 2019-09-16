class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :validatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :validatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :validatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :validatable
    
  # It is important that this line comes after the above one, otherwise where is issues
  # with :confirmable happening when it shouldn't
  include DeviseTokenAuth::Concerns::User
  
  has_many :schools, foreign_key: :site_rep_id
  has_many :events, foreign_key: :organizer_id
  has_many :blogs, foreign_key: :author_id
  
  has_one_attached :avatar

  after_save :set_permissions

  # TODO will need to be a unique email

  def set_permissions
    self.permissions ||= "guest"
  end
end
