import React from 'react'

const AboutMeWindow = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img src="src/assets/images/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-blue-600">Nilso José Baseggio Junior</h2>
          <p className="text-sm font-bold text-gray-800">Senior Software Developer & Technology Enthusiast</p>
          <p className="text-sm text-gray-600">📍 Paraná, Brazil</p>
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
            <strong>Backend:</strong>
            <ul className="list-disc list-inside ml-2">
              <li>.Net 3.5+</li>
              <li>Java 17+</li>
              <li>All major SQL databases</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div>
            <strong>Frontend:</strong>
            <ul className="list-disc list-inside ml-2">
              <li>Angular</li>
              <li>JavaScript & TypeScript</li>
              <li>HTML5 & CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <h3 className="font-bold text-blue-600">Education</h3>
        <p className="text-sm">
          Bachelor in Information Systems
        </p>
      </div>
    </div>
  )
}

export default AboutMeWindow
