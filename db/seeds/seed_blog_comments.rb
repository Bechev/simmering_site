BLOG_POSTS = [["Are the ingredients the same for a vegetarian bbq?",1,1],
         ["Great post! Learned a lot!",1,1],
         ["Can we have more details?",2,3],
         ["My wife forced me into that...",2,2],
         ["Like!",3,2],
         ["I agree!",2,3],
         ["I disagree",1,2],
         ["The comment above is great !",1,3],
         ["First!",3,3],
]

for x in BLOG_POSTS do
    BlogComment.create(content: x[0], user_id: x[1], blog_post_id: x[2])
end