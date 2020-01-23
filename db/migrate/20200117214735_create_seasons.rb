class CreateSeasons < ActiveRecord::Migration[5.2]
  def change
    create_table :seasons do |t|
      t.string :state
      t.date :season_beginning
      t.date :season_end
    end
  end
end
