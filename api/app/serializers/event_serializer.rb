class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :description

  belongs_to :user, class_name: "User", foreign_key: :organizer_id, optional: true
  belongs_to :eventable, polymorphic: true
end
