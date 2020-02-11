BLOG_POSTS = [["blog post 1","content of blog post"],
         ["blog post 2","content of blog post"],
         ["blog post 3","content of blog post"],
         ["blog post 4","content of blog post"],
         ["blog post 5","content of blog post"],
         ["blog post 6","content of blog post"],
         ["blog post 7","content of blog post"],
         ["blog post 8","content of blog post"],
         ["blog post 9","content of blog post"],
]

for x in BLOG_POSTS do
    BlogPost.create(title: x[0], content: x[1])
end