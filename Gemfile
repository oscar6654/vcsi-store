source 'https://rubygems.org/'

gem 'rails', '~> 5.1.2'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'webpacker'
gem 'solidus'
gem 'solidus_auth_devise'
gem 'materialize-sass'
gem 'material_icons'
gem 'kaminari'
gem 'solidus_paypal_braintree', github: 'solidusio/solidus_paypal_braintree', branch: :master
gem 'paperclip'
gem 'fog-aws'
gem "solidus_gateway"
gem 'solidus_paypal_express', github: "jtapia/better_solidus_paypal_express", branch: :master
gem 'aws-sdk', '~> 2.6', '>= 2.6.48'
 # gem 'spree_paypal_express', github: 'spree-contrib/better_spree_paypal_express', branch: '2-4-stable'

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :development, :test do
  gem 'capybara'
  gem 'factory_girl_rails'
  gem 'launchy', require: false
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'shoulda-matchers', require: false
  gem 'valid_attribute'
  gem 'dotenv-rails'
end

group :production do
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
