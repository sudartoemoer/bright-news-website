const container = document.getElementById("posts");
const currentUser = localStorage.getItem("username");

if (container) {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  const myPosts = posts.filter(p => p.author === currentUser);

  if (myPosts.length === 0) {
    container.innerHTML = "<p>You haven’t written any posts yet.</p>";
  }

  myPosts.forEach(post => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.date}</p>
      <button onclick="editPost(${post.id})">Edit</button>
      <button onclick="deletePost(${post.id})">Delete</button>
      <hr>
    `;

    container.appendChild(div);
  });
}

function deletePost(id) {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts = posts.filter(p => p.id !== id);
  localStorage.setItem("posts", JSON.stringify(posts));
  location.reload();
}

function editPost(id) {
  localStorage.setItem("editPostId", id);
  window.location.href = "edit-post.html";
}
