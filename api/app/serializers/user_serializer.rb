class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :permissions

  has_many :schools, foreign_key: :site_rep_id
  has_many :events, foreign_key: :organizer_id
  has_many :blogs, foreign_key: :author_id
end
