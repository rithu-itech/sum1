
function updateLastUserActivityTime(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentTime = new Date().toISOString();
      resolve(currentTime);
    }, 1000); //
  });
}

function createPost(userId, postContent) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: Math.random(), content: postContent });
    }, 500); // 
  });
}

function deletePost(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500); // 
  });
}

// Sample usage
const userId = '123'; 
const postContent = 'Hello, World!';

Promise.all([
  createPost(userId, postContent),
  updateLastUserActivityTime(userId)
]).then(([post, lastActivityTime]) => {
  console.log('All promises resolved.');
  console.log('Created Post:', post);
  console.log('Last Activity Time:', lastActivityTime);

  return deletePost(post.id);
}).then(() => {
  console.log('Post deleted successfully.');
  console.log('Remaining Posts: []');
}).catch(error => {
  console.error('An error occurred:', error);
});
