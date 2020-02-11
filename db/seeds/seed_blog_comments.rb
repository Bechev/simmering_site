BLOG_POSTS = [["content of blog comment1",1,1],
         ["content of blog comment 2",1,2],
         ["content of blog comment 3",2,3],
         ["content of blog comment 4",2,4],
         ["content of blog comment 5",3,5],
         ["content of blog comment 6",3,6],
         ["content of blog comment 7",2,7],
         ["content of blog comment 8",1,8],
         ["content of blog comment 9",1,3],
]

for x in BLOG_POSTS do
    BlogComment.create(content: x[0], user_id: x[1], blog_post_id: x[2])
end