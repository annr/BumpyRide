class Favorite < ActiveRecord::Base
  belongs_to :user
  belongs_to :photo
  # attr_accessible :title, :body
end
