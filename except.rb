require 'sinatra'


set bind: "localhost"
set port: 3000


get '/' do
  erb :index
end