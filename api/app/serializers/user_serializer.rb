class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :permissions

  has_many :schools
  has_many :events, foreign_key: :organizer_id
end
