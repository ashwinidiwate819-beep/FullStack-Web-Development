fetch("posts/sample-post.md")
  .then(res => res.text())
  .then(data => {
    const posts = document.getElementById("posts");
    posts.innerHTML = `
      <div class="card">
        <a href="post.html?title=My First Blog&content=${data}">
          My First Blog
        </a>
      </div>
    `;
  });
