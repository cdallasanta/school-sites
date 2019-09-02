class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :district
  belongs_to :site_rep, class_name: "User", foreign_key: :site_rep_id
end
