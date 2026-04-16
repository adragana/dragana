const projectGrid = document.getElementById("project-grid");

if (projectGrid && Array.isArray(portfolioProjects)) {
  projectGrid.innerHTML = portfolioProjects
    .map(
      (project) => `
        <article class="project-card panel">
          <img src="${project.cardImage}" alt="${project.title} preview">
          <p class="eyebrow">${project.role}</p>
          <h3><a class="project-link" href="${project.detailPage}">${project.title}</a></h3>
          <p>${project.summary}</p>
          <ul class="tag-list">
            ${project.stack.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}
