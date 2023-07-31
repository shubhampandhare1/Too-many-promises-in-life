// Too many promises in life

let posts = [];

function createPost(post) {
    return new Promise((resolve) => {
        posts.push(post);
        resolve();
    })
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        if (posts.length == 0) {
            setTimeout(() => {
                console.log('Before creating Post1=>', new Date());
                resolve()
            }, 1000);
        }
        else {
            setTimeout(() => {
                console.log('after creating Post1=>');
                resolve();
            }, 1000);
        }
    })
}

function deletePost() {
    return new Promise((resolve) => {
        if (posts.length > 0) {
            poppedPost = posts.pop();
            resolve(poppedPost);
        }
    })
}
Promise.all([updateLastUserActivityTime(), createPost({ title: 'Post1' }), createPost({ title: 'Post2' }), createPost({ title: 'Post3' }), updateLastUserActivityTime()]).then(() => {
    console.log(posts);
    console.log('updateLastUserActivityTime=>', new Date().getTime())
}).then(() => {
    deletePost().then(() => {
        console.log(posts)
    })
})