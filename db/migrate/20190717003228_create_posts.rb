class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :message
      t.integer :reshare
      t.integer :likes
      t.integer :user_id

      t.timestamps
    end
  end
end
