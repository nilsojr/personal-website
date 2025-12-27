import React from 'react'

const AboutMeWindow = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          NB
        </div>
        <div>
          <h2 className="text-lg font-bold text-blue-600">Nilso José Baseggio Junior</h2>
          <p className="text-sm text-gray-600">Senior Software Developer & Technology Enthusiast</p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-blue-600">About Me</h3>
        <p className="text-sm leading-relaxed">
          Hello! I'm Nilso Baseggio, a passionate software developer with a love for creating
          innovative solutions and exploring new technologies. I enjoy building web applications,
          working with modern frameworks, and continuously learning about the latest trends in
          software development.
        </p>

        <h3 className="font-bold text-blue-600">Skills & Technologies</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <strong>Frontend:</strong>
            <ul className="list-disc list-inside ml-2">
              <li>React & React Native</li>
              <li>JavaScript & TypeScript</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <strong>Backend:</strong>
            <ul className="list-disc list-inside ml-2">
              <li>Node.js & Express</li>
              <li>Python & Django</li>
              <li>SQL & NoSQL Databases</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>

        <h3 className="font-bold text-blue-600">Education</h3>
        <p className="text-sm">
          Computer Science Degree with focus on Software Engineering and Web Development
        </p>
      </div>
    </div>
  )
}

export default AboutMeWindow
