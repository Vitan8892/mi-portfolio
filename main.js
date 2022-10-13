let projectActivo = 0

const projects = document.querySelectorAll('.project');

projects.forEach((project, indice) => {
    project.addEventListener("click", function() {
        focoProject(indice)
    })
})

function focoProject(indice) {
    projects[projectActivo].classList.remove('activo')
    projects[indice].classList.add('activo')
    projectActivo = indice
}