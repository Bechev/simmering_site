# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_20_022710) do

  create_table "comments", force: :cascade do |t|
    t.text "message"
    t.integer "likes"
    t.integer "post_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "days", force: :cascade do |t|
    t.date "date"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "days_mealplans", id: false, force: :cascade do |t|
    t.integer "day_id", null: false
    t.integer "mealplan_id", null: false
    t.index ["day_id", "mealplan_id"], name: "index_days_mealplans_on_day_id_and_mealplan_id"
  end

  create_table "days_meals", id: false, force: :cascade do |t|
    t.integer "day_id", null: false
    t.integer "meal_id", null: false
    t.index ["day_id", "meal_id"], name: "index_days_meals_on_day_id_and_meal_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.integer "calories"
    t.string "unit"
    t.boolean "contains_gluten"
    t.boolean "contains_nuts"
    t.boolean "contains_dairy"
    t.boolean "shellfish"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ingredients_recipes", id: false, force: :cascade do |t|
    t.integer "ingredient_id", null: false
    t.integer "recipe_id", null: false
    t.index ["ingredient_id", "recipe_id"], name: "index_ingredients_recipes_on_ingredient_id_and_recipe_id"
  end

  create_table "mealplans", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meals", force: :cascade do |t|
    t.string "name"
    t.integer "party_size"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meals_recipes", id: false, force: :cascade do |t|
    t.integer "meal_id", null: false
    t.integer "recipe_id", null: false
    t.index ["meal_id", "recipe_id"], name: "index_meals_recipes_on_meal_id_and_recipe_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "message"
    t.integer "reshare"
    t.integer "likes"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "recipe_process"
    t.integer "preparation_time"
    t.integer "cooking_time"
    t.integer "total_recipe_time"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
