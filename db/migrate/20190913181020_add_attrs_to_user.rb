class AddAttrsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :permissions, :string
  end
end
