const planets = [
  {
    name: "Mercury",
    description: "Closest to the Sun, smallest planet.",
    distance: "57.9 million km",
    diameter: "4,879 km",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg"
  },
  {
    name: "Venus",
    description: "Thick atmosphere, hottest planet.",
    distance: "108.2 million km",
    diameter: "12,104 km",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"
  },
  {
    name: "Earth",
    description: "Only planet known to support life.",
    distance: "149.6 million km",
    diameter: "12,742 km",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
  },
  {
    name: "Mars",
    description: "Known as the Red Planet.",
    distance: "227.9 million km",
    diameter: "6,779 km",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
  },
  {
    name: "Jupiter",
    description: "Largest planet with Great Red Spot.",
    distance: "778.5 million km",
    diameter: "139,820 km",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
  },
  {
    name: "Saturn",
    description: "Famous for its ring system.",
    distance: "1.43 billion km",
    diameter: "116,460 km",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"
  },
  {
    name: "Uranus",
    description: "Rotates on its side, has rings.",
    distance: "2.87 billion km",
    diameter: "50,724 km",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
  },
  {
    name: "Neptune",
    description: "Deep blue color and strong winds.",
    distance: "4.50 billion km",
    diameter: "49,244 km",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"
  }
];

const container = document.getElementById("planets-container");
const searchInput = document.getElementById("searchInput");

function renderPlanets(planetsToRender) {
  container.innerHTML = "";
  planetsToRender.forEach(planet => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${planet.image}" alt="${planet.name}">
      <h2>${planet.name}</h2>
      <p>${planet.description}</p>
      <p><strong>Distance from Sun:</strong> ${planet.distance}</p>
      <p><strong>Diameter:</strong> ${planet.diameter}</p>
    `;
    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = planets.filter(p =>
    p.name.toLowerCase().includes(query)
  );
  renderPlanets(filtered);
});

renderPlanets(planets);
