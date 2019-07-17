# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
POSTS = [["post 1",2,3,1],
         ["post 2",3,2,1],
         ["post 3",3,2,1],
         ["post 4",3,2,1],
         ["post 5",3,2,1],
         ["post 6",3,2,1],
         ["post 7",3,2,1],
         ["post 8",3,2,1],
         ["post 9",3,2,1],
         ["post 10",3,2,1],
         ["post 11",3,2,1],
]

for i in POSTS do
    Post.create(message: i[0], reshare: i[1], likes: i[2], user_id: i[3])
end


User.create(username: "BCT", password: "password")