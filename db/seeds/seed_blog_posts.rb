BLOG_POSTS = [
        ["blog post 1","This is the summary of post 1", "content of blog post"],
        ["blog post 2","This is the summary of post 2", "content of blog post"],
        ["blog post 3","This is the summary of post 3", "content of blog post"],
        ["blog post 4","This is the summary of post 4", "content of blog post"],
        ["blog post 5","This is the summary of post 5", "content of blog post"],
        ["blog post 6","This is the summary of post 6", "content of blog post"],
        ["blog post 7","This is the summary of post 7", "content of blog post"],
        ["blog post 8","This is the summary of post 8", "content of blog post"],
        ["blog post 9","This is the summary of post 9", "content of blog post"],
]

for x in BLOG_POSTS do
    BlogPost.create(title: x[0], summary:x[1], content: x[2])
end