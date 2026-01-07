import React from 'react'

const ProjectsWindow = () => {
  const projects = [
    {
      title: "Bills & Receivings Management platform",
      description: "Full-stack solution with Angular frontend and .Net 8+ backend. Features include user authentication, bills & receivings management and a reminder feature for bills near due date (in progress).",
      technologies: ["Angular", ".Net 8", "PostgreSQL", "Azure", "AWS", "Magalu Cloud", "JWT"],
      github: "https://github.com/orgs/Island-Software/repositories",
      demo: "https://billminder.com.br",
      status: "In Progress"
    },
    {
      title: "Soccer Madness",
      description: `Multiplayer online soccer game with real-time gameplay, player stats, and leaderboards. Built with Unity.
        Project is private, if you want to know more about it please contact me.`,
      technologies: ["Unity Engine"],
      github: "https://gitlab.com/island-software/soccer_madness",
      demo: "https://island-games-studio.itch.io/soccer-madness",
      status: "In Progress"
    },
    {
      title: "Personal Portfolio Website",
      description: "This Windows XP-themed portfolio website showcasing my work and skills in a nostalgic desktop environment.",
      technologies: ["React", "Vite", "Tailwind CSS", "Interact.js"],
      github: "https://github.com/nilsojr/personal-website",
      demo: "https://nilsobaseggio.com",
      status: "Completed"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'In Progress': return 'bg-yellow-100 text-yellow-800'
      case 'Planning': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold text-blue-600">My Projects</h2>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded p-4 bg-white">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-800">{project.title}</h3>
              <span className={`text-xs px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700"
              >
                📁 GitHub
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  🌐 Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-3 bg-gray-50 border border-gray-200 rounded">
        <h3 className="font-bold text-gray-700 mb-2">More Projects</h3>
        <p className="text-sm text-gray-600">
          Check out my GitHub profile for more projects, contributions, and open-source work: 
          <a 
            href="https://github.com/nilsojr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-1"
          >
            github.com/nilsojr
          </a>
        </p>
      </div>
    </div>
  )
}

export default ProjectsWindow

