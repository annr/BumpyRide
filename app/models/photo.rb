#require 'RMagick'

class Photo < ActiveRecord::Base
  belongs_to :user
  attr_accessible :image, :title, :image, :user_id

  mount_uploader :image, ImageUploader

  has_many :comments, :dependent => :destroy

  validates :image,  :presence => true
  validates :user_id, :presence => true

  #def as_json(options={})
  #  {:title       => self.title,
  #   :image       => self.image,
  #   :user_id     => self.user_id,
  #   :comments    => self.comments
  #  }
  #end

  def as_json(options={})
    super(
        :include => [:comments]
    )
  end

end
