const systems = {
  life: {
    index: "SYSTEM 01", icon: "⌂", title: "A life that grows with you",
    description: "Start with a small space, build routines, meet neighbours, and work toward personal goals. The world should feel useful even when a player only has a short session.",
    tags: ["Daily routines", "Housing", "Progression"]
  },
  work: {
    index: "SYSTEM 02", icon: "↗", title: "Earn your own way",
    description: "Explore legal jobs, learn skills, build a reputation, and eventually manage a small business. A first prototype could test one job loop before introducing complex economies.",
    tags: ["Jobs", "Skills", "Player businesses"]
  },
  travel: {
    index: "SYSTEM 03", icon: "⌁", title: "An island worth exploring",
    description: "Design recognisable districts and local journeys first. Boats, ferries, and flights belong to the long-term vision after the first small area feels convincing and performs well.",
    tags: ["Districts", "Transport", "Exploration"]
  },
  community: {
    index: "SYSTEM 04", icon: "◎", title: "Stories made together",
    description: "Give players ways to meet, collaborate, role-play, and build shared stories. Social safety, blocking, reporting, and moderation should be planned alongside multiplayer features.",
    tags: ["Social play", "Role-play", "Safety"]
  }
};
document.querySelectorAll("[data-system]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-system]").forEach(tab => {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    const data = systems[button.dataset.system];
    document.querySelector("#detail-index").textContent = data.index;
    document.querySelector("#detail-icon").textContent = data.icon;
    document.querySelector("#detail-title").textContent = data.title;
    document.querySelector("#detail-description").textContent = data.description;
    document.querySelector("#detail-tags").innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join("");
  });
});
