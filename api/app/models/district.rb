class District < ApplicationRecord
  has_many :schools
  has_many :events, as: :eventable
end
