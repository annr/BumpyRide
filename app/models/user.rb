class User < ActiveRecord::Base
  attr_accessible :full_name, :username
  has_many :comments
end
