# app.rb
require "sinatra"
require "Clipboard"
require "sinatra/activerecord"

set :database, "sqlite3:///except.db"



######################
####    models       #
######################

class Emails < ActiveRecord::Base
end



######################
####    ROUTES       #
######################

get '/' do
  erb :index
end