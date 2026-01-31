const list = document.getElementById("list");

highballs.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${item.name}</h2>
    <p>🧾 재료: ${item.ingredients}</p>
    <p>😋 맛: ${item.taste}</p>
    <span class="tag">${item.type}</span>
  `;

  list.appendChild(card);
});