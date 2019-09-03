class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :grade_level, :address, :phone, :homepage_url, :blogs, :events

  belongs_to :district
  belongs_to :site_rep, class_name: "User", foreign_key: :site_rep_id

  def blogs
    [*object.blogs, *object.district.blogs]
  end
  
  def events
    [*object.events, *object.district.events]
  end
end
