class CreateStates < ActiveRecord::Migration[6.0]
  def change
    create_table :states do |t|
      t.string :state_num
      t.string :state_name
      t.date :expiration_date
      t.string :path_to_image
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
