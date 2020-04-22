BLOG_POSTS = [
        ["The main ingredients of the potato salad","List of the potato salad ingredients", "potatoes, mustard, shallots"],
        ["Why are aspargus good for your health","Aspargus are good because it's healthy", "content of blog post on aspargus"],
        ["My top 3 favorite recommendations for the summer","The best food for your health and the planet this summer", "seasonal ingredients, no wasted and tasty!"],
        ["blog post 4","This is the summary of post 4", "content of blog post 4"],
        ["blog post 5","This is the summary of post 5", "content of blog post 5"],
        ["blog post 6","This is the summary of post 6", "content of blog post 6"],
        ["blog post 7","This is the summary of post 7", "content of blog post 7"],
        ["blog post 8","This is the summary of post 8", "content of blog post 8"],
        ["blog post 9","This is the summary of post 9", "content of blog post 9"],
]

for x in BLOG_POSTS do
    BlogPost.create(title: x[0], summary:x[1], content: x[2])
end