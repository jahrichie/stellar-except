class AddStickersToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :stickers, :boolean
    add_column :emails, :postcards, :boolean
    add_column :emails, :partner_request, :boolean
    add_column :emails, :msg, :text
  end
end
