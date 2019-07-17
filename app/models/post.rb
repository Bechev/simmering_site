class Post < ApplicationRecord
    belongs_to :user, required: false
    validates :message, length: {maximum: 250}

end
