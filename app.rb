# app.rb
require "sinatra"
require "Clipboard"
require "sinatra/activerecord"
require 'pony'

#basic auth
# use Rack::Auth::Basic, "Enter Demo password." do |username, password|
#   [username, password] == ['admin', 'admin123']
# end


#options

# configure :development do
  set :database, "sqlite3:///except.db"
# end

#end options


######################
####    MODELS      #
######################

class Emails < ActiveRecord::Base
  #validate fields  
  validates_presence_of :email, errors: "Email cannot be blank."
end



######################
####    ROUTES       #
######################

get '/' do
  erb :index
end


# get '/contact' do
#   #create email record
#   @fullname = params[:name].split
#   @emails = Emails.create(first_name: @fullname.first, 
#                           email: params[:email], 
#                           last_name: @fullname.last,
#                           msg: params[:msg],
#                           postcards: params[:postcards],
#                           stickers: params[:stickers]
#                           )

#   if @emails.save 
#     redirect "/", notice: "HYFR!"
#   else
#     redirect "", errors: "wsdfasdf"
#     # @emails.errors.each do |e|
#     #   puts e
#     # end #errors block
#   end #if save
# end #contact action


get '/contact' do
  @fullname = params[:name].split
  @emails = Emails.create(first_name: @fullname.first, 
                          email: params[:email], 
                          last_name: @fullname.last,
                          msg: params[:msg],
                          postcards: params[:postcards],
                          stickers: params[:stickers]
                          )

  # other code, then…
  if @emails.errors
    output = @emails.errors
    # log problems…
    halt 500, output
     # redirect "/", errors: output
  else
    haml :show_a_nice_view_to_the_user
  end
end


