namespace :db do
    task reset_db: ['db:drop', 
                    'db:create', 
                    'db:migrate',
                    'db:seed:seed_users',
                    'db:seed:seed_blog_posts',
                    'db:seed:seed_blog_comments',
                    'db:seed:seed_recipes',
                    'db:seed:seed_recipes_ingredients',
                    'db:seed:seed_seasons',
                    'db:seed:seed_seasons_ingredients'
                  ]
  end