import React from 'react'

const WorkExperienceWindow = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of web applications using React and Node.js. Mentoring junior developers and implementing best practices for code quality and performance.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["JavaScript", "Python", "PostgreSQL", "React", "Django"]
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studio",
      period: "2019 - 2020",
      description: "Created responsive web interfaces and improved user experience across various client projects. Focused on modern CSS and JavaScript frameworks.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Sass"]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2018 - 2019",
      description: "Started my professional journey working on small to medium-sized projects. Gained experience in full-stack development and agile methodologies.",
      technologies: ["PHP", "MySQL", "jQuery", "Bootstrap", "Git"]
    }
  ]

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold text-blue-600">Work Experience</h2>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4 pb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-gray-800">{exp.title}</h3>
                <p className="text-sm text-blue-600 font-semibold">{exp.company}</p>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>
            
            <p className="text-sm text-gray-700 mb-2 leading-relaxed">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-1">
              {exp.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-600 mb-2">Key Achievements</h3>
        <ul className="text-sm space-y-1">
          <li>• Led a team of 5 developers in delivering a major web application</li>
          <li>• Improved application performance by 40% through code optimization</li>
          <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
          <li>• Mentored 3 junior developers who successfully advanced in their careers</li>
        </ul>
      </div>
    </div>
  )
}

export default WorkExperienceWindow

