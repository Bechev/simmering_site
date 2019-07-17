class Post < ApplicationRecord
    belongs_to :user
    validates :message, length: {maximum: 250}

end
