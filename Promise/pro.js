let lastActivityTime = null;
const posts = [];

function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("No posts to delete.");
            }
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date().toLocaleString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

// Create a post and update last activity time
createPost("New Post")
    .then(() => updateLastUserActivityTime())
    .then((updatedTime) => {
        lastActivityTime = updatedTime;
        console.log("All posts:", posts);
        console.log("Last Activity Time:", lastActivityTime);
        return deletePost(); // Delete the last post
    })
    .then((deletedPost) => {
        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", posts);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
