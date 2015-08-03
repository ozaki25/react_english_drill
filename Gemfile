source 'https://rubygems.org'

ruby '2.2.1'

gem 'rails', '4.2.1'
gem 'pg'
gem 'puma'

#--------------------------------------------------------------------------------
# Basis
#--------------------------------------------------------------------------------
gem 'sass-rails', '~> 4.0.0'
gem 'sprockets'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'haml-rails'
gem 'bootstrap-sass', '>= 3.0.0.0'
gem 'font-awesome-rails'
gem 'compass-rails'
gem 'zurui-sass-rails'
gem 'roboto'

#--------------------------------------------------------------------------------
# View Helpers
#--------------------------------------------------------------------------------
# gem 'kaminari'
# gem 'nprogress-rails'
gem 'simple_form'

#--------------------------------------------------------------------------------
# Active Record
#--------------------------------------------------------------------------------
gem 'devise'
# gem 'default_value_for', git: 'git://github.com/tsmango/default_value_for.git'
# gem 'squeel'
# gem 'acts_as_list'
# gem 'enumerize'

#--------------------------------------------------------------------------------
# Operation
#--------------------------------------------------------------------------------
gem 'newrelic_rpm'
gem 'bugsnag'

group :production, :staging do
  gem 'rails_12factor'
end

group :development do
  gem 'heroku_san', git: 'git://github.com/jphenow/heroku_san', branch: 'bug/wrong-ruby-version-loaded'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'erb2haml'
  gem 'quiet_assets'
  gem 'letter_opener'
  gem 'i18n_generators'
  gem 'hirb'
end

group :development, :test do
  gem 'byebug'
  gem 'web-console', '~> 2.0'
  gem 'spring'
  gem 'factory_girl_rails'
  gem 'rspec-rails'
  gem 'spring-commands-rspec'
end

gem 'react-rails', '~> 1.0'
gem 'lodash-rails'
gem 'active_attr'
