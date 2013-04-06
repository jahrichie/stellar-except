class CreateEmails < ActiveRecord::Migration
 def up
    create_table :emails do |t|
      t.string :email
      t.text :first_name
      t.text :last_name
      t.timestamps
    end
    Emails.create(email: "My first post", first_name: "And this is the post's content.", last_name: "fugazy")
  end# up

  def down
    drop_table :emails
  end # down
end
