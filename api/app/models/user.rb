class User < ApplicationRecord
  has_many :schools, foreign_key: :site_rep_id
  has_many :events, foreign_key: :organizer_id
end
