document.addEventListener("DOMContentLoaded", () => {
  const pageKey = window.location.pathname;
  const form = document.getElementById("commentForm");
  const input = document.getElementById("commentInput");
  const list = document.getElementById("commentList");
  const countEl = document.getElementById("commentCount");

  if (!form || !input || !list) return;

  let comments = JSON.parse(localStorage.getItem(pageKey) || "[]");

  function save() {
    localStorage.setItem(pageKey, JSON.stringify(comments));
    updateCount();
  }

  function updateCount() {
    if (countEl) countEl.textContent = comments.length;
  }

  function render() {
    list.innerHTML = "";
    comments.forEach((c, i) => {
      const div = document.createElement("div");
      div.className = "comment";
      const text = document.createElement("span");
      text.textContent = c.text;

      const actions = document.createElement("div");
      actions.className = "actions";

      const likeBtn = document.createElement("button");
      likeBtn.className = "like";
      likeBtn.textContent = `👍 ${c.likes}`;
      likeBtn.addEventListener("click", () => {
        comments[i].likes++;
        save();
        render();
      });

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove";
      removeBtn.textContent = "🗑️ Remover";
      removeBtn.addEventListener("click", () => {
        comments.splice(i, 1);
        save();
        render();
      });

      actions.appendChild(likeBtn);
      actions.appendChild(removeBtn);

      div.appendChild(text);
      div.appendChild(actions);
      list.appendChild(div);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    comments.push({ text: val, likes: 0 });
    input.value = "";
    save();
    render();
  });

  updateCount();
  render();
});