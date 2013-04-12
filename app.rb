# app.rb
require "sinatra"
# require "Clipboard"
require "sinatra/activerecord"
require 'pony'

#basic auth
use Rack::Auth::Basic, "Enter Demo password." do |username, password|
  [username, password] == ['admin', 'admin123']
end


#options
set :port, 3000

configure :development do
  set :database, "sqlite3:///except.db"
end

#end options


######################
####    CLASSY       #
######################

class Emails < ActiveRecord::Base
  #validates  
  validates_presence_of :email, message: "Email is required.  "
end



######################
####    ROUTES       #
######################

get '/' do
  erb :index
end


get '/contact' do
  #create email record
  @fullname = params[:name].split
  @emails = Emails.create(first_name: @fullname.first, 
                          email: params[:email], 
                          last_name: @fullname.last,
                          msg: params[:msg],
                          postcards: params[:postcards],
                          stickers: params[:stickers]
                          )

  if @emails.save
    # "I DID IT!!!!"
     Pony.mail(
      :from => params[:name] + "<" + params[:email] + ">",
      :to => 'richardjosephoreilly@gmail.com',
      :subject => params[:name] + " has contacted you",
      :body => params[:msg],
      :port => '587',
      :via => :smtp,
      :via_options => { 
        :address              => 'smtp.sendgrid.net', 
        :port                 => '587', 
        :enable_starttls_auto => true, 
        :user_name            => ENV['SENDGRID_USERNAME'], 
        :password             => ENV['SENDGRID_PASSWORD'], 
        :authentication       => :plain, 
        :domain               => ENV['SENDGRID_DOMAIN']
      })

    redirect "/"
  else
    @emails.errors.each do |e|
      puts e.to_json
    end #errors block
  end #if save
end #contact action
