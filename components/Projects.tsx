const Projects = () => {
  const projects = [
    { title: "Project 1", description: "A brief description of Project 1" },
    { title: "Project 2", description: "A brief description of Project 2" },
    { title: "Project 3", description: "A brief description of Project 3" },
  ]

  return (
    <section id="projects" className="min-h-screen font-mono">
      <h2 className="text-4xl font-bold mb-8 text-[#F5C2E7]">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#302D41] p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-2">
              <span className="vim-line-numbers">{index + 1}</span>
              <h3 className="text-2xl font-semibold text-[#F5E0DC]">{project.title}</h3>
            </div>
            <p className="text-[#D9E0EE]">{project.description}</p>
            <button className="mt-4 bg-[#89DAEB] text-[#1E1E2E] px-4 py-2 rounded hover:bg-[#F5C2E7] transition-colors">
              :open
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

