import React from 'react'

const WorkExperienceWindow = () => {
  const experiences = [
    {
      title: "Senior Software Consultant",
      company: "Thoughtworks",
      period: "May/2024 - Present",
      description: "Work as a senior software consultant delivering high-impact software solutions for Thoughtworks clients. Focus on applying best practices in software development and cloud infrastructure.",
      technologies: ["Java 17+", "Spring Boot", "Azure", "GitHub Actions", "Terraform", "Docker", "Datadog", "PostgreSQL", "Git", "microservices"]
    },
    {
      title: "Senior Backend Developer",
      company: "INO Games",
      period: "Aug/2022 - May/2024",
      description: "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["JavaScript", "Python", "PostgreSQL", "React", "Django", "Git"]
    },
    {
      title: "Senior Software Engineer",
      company: "OLX Group",
      period: "Jan/2021 - Aug/2022",
      description: "Worked on maintenance and implementation of microservices for the Payments and Risk Analysis teams using Java and Python, backed by AWS cloud infrastructure.",
      technologies: ["Java 17+", "Spring Boot", "Python", "Terraform", "Kubernetes", "AWS", "Git", "microservices"]
    },
    {
      title: ".Net Developer",
      company: "Indra Company",
      period: "Aug/2021 - Jan/2022",
      description: "Worked on a project for state governments, specifically on the drafting and approval of budgets for the chambers of deputies.",
      technologies: [".Net 4.5+", "Oracle DB", "Git"]
    },
    {
      title: "Delphi Programmer",
      company: "Devgrid",
      period: "May/2021 - July/2021",
      description: "Worked on a project for eletricity distribution companies, focusing on the management of electricity consumption and billing systems.",
      technologies: ["Delphi", "Oracle DB", "Git"]
    },
    {
      title: "Software Developer II",
      company: "Softplan Planejamento e Sistemas",
      period: "Nov/2018 - May/2021",
      description: "Worked on enterprise systems for courts of justice, doing analysis, development, and maintenance of various modules.",
      technologies: ["Delphi", ".Net core", "SQL Server", "Oracle DB", "Git", "microservices"]
    },
    {
      title: "Delphi Programmer",
      company: "Extradigital Tecnologia",
      period: "May/2013 - Nov/2018",
      description: "Worked on systems for extrajudicial registry offices, also creating migration tools to import data from many different vendors. Created integrations with external systems to consolidate data from various sources.",
      technologies: ["Delphi", "Firebird", "SQL Server", "Git"]
    },
    {
      title: "Delphi Programmer",
      company: "Desbravador Software Ltd.",
      period: "Mar/2009 - Dec/2012",
      description: "Worked on systems for hotels, restaurants and gas stations, developing new features and maintaining existing ones in different Delphi versions.",
      technologies: ["Delphi", "Firebird", "SQL Server", "PostgreSQL", "SVN"]
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
          {/* <li>• Led a team of 5 developers in delivering a major web application</li>
          <li>• Improved application performance by 40% through code optimization</li>
          <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
          <li>• Mentored 3 junior developers who successfully advanced in their careers</li> */}
        </ul>
      </div>
    </div>
  )
}

export default WorkExperienceWindow

