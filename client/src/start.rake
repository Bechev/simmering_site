namespace :start do

    task :development do
        exec 'foreman start -f Procfile.dev'
    end

    task :production do
        exec 'NPM_CONFIG_PRODUCTION=true npm run postinstall && foreman start'
    end
end