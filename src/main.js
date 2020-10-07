// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((reponse) => reponse.json())
    .then((json) => json.items);
}

// main
loadItems()
  .then((items) => {
    console.log(items);
    // displayItems(items);
    // setEventListensers(items);
  })
  .catch(console.log);
