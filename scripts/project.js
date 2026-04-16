const projectSlug = document.body.dataset.project;
const currentProject = Array.isArray(portfolioProjects)
  ? portfolioProjects.find((project) => project.slug === projectSlug)
  : null;

if (currentProject) {
  document.title = `${currentProject.title} | Dragana Portfolio`;

  document.getElementById("project-title").textContent = currentProject.title;
  document.getElementById("project-summary").textContent = currentProject.summary;
  document.getElementById("project-role").textContent = currentProject.role;
  document.getElementById("project-year").textContent = currentProject.year;
  document.getElementById("project-stack").textContent = currentProject.stack.join(" / ");
  document.getElementById("project-problem").textContent = currentProject.problem;
  document.getElementById("project-solution").textContent = currentProject.solution;

  const heroImage = document.getElementById("project-image");
  heroImage.src = currentProject.heroImage;
  heroImage.alt = `${currentProject.title} showcase`;

  document.getElementById("project-outcomes").innerHTML = currentProject.outcomes
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("project-tags").innerHTML = currentProject.stack
    .map((tag) => `<li>${tag}</li>`)
    .join("");

  document.getElementById("project-gallery").innerHTML = currentProject.gallery
    .map((imagePath, index) => `<img src="${imagePath}" alt="${currentProject.title} screenshot ${index + 1}">`)
    .join("");
}
