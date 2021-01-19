5.times do
    User.create({
        name: Faker::Name.name,
        email: Faker::Internet.email,
        date_of_birth: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :default)
    })
end
