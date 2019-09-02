class DistrictSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :schools
  has_many :events, as: :eventable
end
