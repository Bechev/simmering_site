namespace :db do
    task reset_db: ['db:drop', 
                    'db:create', 
                    'db:migrate',
                    'db:seed'
                  ]
  end