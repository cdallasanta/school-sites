class AddApprovedToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :approved, :boolean
  end
end
