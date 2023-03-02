const blogConatiner = document.querySelector(".blogs");

const renderPosts = async () => {
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";

  const res = await fetch(uri);
  const posts = await res.json();

  console.log(posts);

  let template = "";

  posts.forEach((post) => {
    template += `
        <div class="post">
            <h2>${post.title}</h2>
            <p><small>${post.likes} Likes</small></p>
            <p class="blog-txt">${post.body.slice(0, 195)}...</p>
            <a href="details.html?id=${post.id}">Read More</a>
        </div>
    `;
  });

  blogConatiner.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
