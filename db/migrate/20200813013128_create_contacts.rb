class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :email
      t.string :name
      t.string :phone_number
      t.string :message

      t.timestamps
    end
  end
end
