class Post < ApplicationRecord
    belongs_to :user, required: false
    has_many :comments
    validates :message, length: {maximum: 255}

end