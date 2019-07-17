namespace :db do
    task reset_db: ['db:drop', 
                    'db:create', 
                    'db:migrate'
                  ]
  end