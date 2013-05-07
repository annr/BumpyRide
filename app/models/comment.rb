class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :photo
  attr_accessible :body, :user_id
end
