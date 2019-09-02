class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :permissions

  has_many :schools
end
