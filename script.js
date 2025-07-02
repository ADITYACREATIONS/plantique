const plants = [
  {
    name: "Aloe Vera",
    image: "https://images",  // Replace with real image URL
    price: "₹199"
  },
  {
    name: "Snake Plant",
    image: "https://images",
    price: "₹299"
  },
  {
    name: "Peace Lily",
    image: "https://images",
    price: "₹349"
  }
];


const grid = document.getElementById("plant-grid");

plants.forEach((plant) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${plant.image}" alt="${plant.name}">
    <h3>${plant.name}</h3>
    <p>${plant.price}</p>
    <a href="#" class="btn">Buy Now</a>
  `;
  grid.appendChild(card);
});
