// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((reponse) => reponse.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="utem__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function onButtonClick(event, items) {
  const {
    target: {
      dataset: { key, value },
    },
  } = event;

  if (key === (null || undefined) || value === (null || undefined)) {
    return;
  }
  displayItems(items?.filter((item) => item[key] === value));
}

function setEventListensers(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    setEventListensers(items);
  })
  .catch(console.log);
