source 'https://rubygems.org'
gem 'rails', '3.2.11'
gem 'sqlite3', :group => :development
gem 'haml'
gem 'pg', :group => :production

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'compass-rails'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
  gem 'famfamfam_flags_rails'
  gem "font-awesome-rails"
end

gem 'jquery-rails'
gem "rspec-rails", ">= 2.11.4", :group => [:development, :test]
gem "capybara", ">= 2.0.1", :group => :test
gem "database_cleaner", ">= 0.9.1", :group => :test
gem "email_spec", ">= 1.4.0", :group => :test
gem "bootstrap-sass", ">= 2.2.2.0"
gem "quiet_assets", ">= 1.0.1", :group => :development
gem "figaro", ">= 0.5.0"
gem "better_errors", ">= 0.3.2", :group => :development
gem "binding_of_caller", ">= 0.6.8", :group => :development
gem "libv8", ">= 3.11.8"
gem "therubyracer", ">= 0.11.0", :group => :assets, :platform => :ruby, :require => "v8"

#============================================================================
# DEVELOPMENT
#============================================================================
group :development, :test do
  gem "better_errors", ">= 0.3.2", :group => :development
  gem "binding_of_caller", ">= 0.6.8", :group => :development
  gem "quiet_assets", ">= 1.0.1", :group => :development
  gem 'guard'
  gem 'rb-inotify', '~> 0.8.8'
  #gem 'libnotify'
  gem 'guard-rails'
  gem 'guard-livereload'
  gem 'rack-livereload'
end
