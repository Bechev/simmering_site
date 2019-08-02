class Comment < ApplicationRecord
    belongs_to :user, required: false
    belongs_to :post
    validates :message, length: {maximum: 255}
end
