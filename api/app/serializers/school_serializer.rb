class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade_level, :address, :phone, :homepage_url

  belongs_to :district
  belongs_to :site_rep, class_name: "User", foreign_key: :site_rep_id
  has_many :events, as: :eventable
  has_many :blogs, as: :blogable
end
