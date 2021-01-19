class CreateMedics < ActiveRecord::Migration[6.0]
  def change
    create_table :medics do |t|
      t.string :recommend_num
      t.string :issuer
      t.string :state
      t.date :expiration_date
      t.string :path_to_image
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
