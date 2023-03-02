const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const delBtn = document.querySelector(".delete-button");

const renderPosts = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  const post = await res.json();

  console.log(post);
  const template = `
        <h3>${post.title} <p class="likes">${post.likes} Likes</p></h3>
        <p>${post.body}</p>
    `;

  container.innerHTML = template;
};

delBtn.addEventListener("click", async (e) => {
  const res = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
  window.location.replace("/index.html");
});

window.addEventListener("DOMContentLoaded", () => renderPosts());
