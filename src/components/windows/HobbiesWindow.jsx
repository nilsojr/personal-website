import React from 'react'

const HobbiesWindow = () => {
  const hobbies = [
    {
      title: "Learning",
      description: "Yes, this is a hobby for me! When I'm not doing any of the hobbies below, I like to pass my time learning something new, independently of the subject.",
      icon: "✍",
      details: []
    },
    {
      title: "Gaming",
      description: `Gaming is both a hobby and a way to stay connected with technology trends. I enjoy both indie games and AAA titles, as well as game development.
        Simulation, RPG and Strategy games are my favorite genres.`,
      icon: "🎮",
      details: ["PC Gaming", "Game Development", "Indie Games", "Retro Gaming"]
    },
    {
      title: "Reading",
      description: "I'm an avid reader, particularly interested in technology books, science fiction and adventure. I believe continuous learning is essential, along with good sto",
      icon: "📚",
      details: ["Tech Books", "Sci-Fi Novels", "Programming"]
    },
    {
      title: "Hiking & Nature",
      description: "Spending time in nature helps me recharge and find inspiration. I enjoy hiking, camping, and exploring new trails and natural landscapes.",
      icon: "🥾",
      details: ["Mountain Hiking", "Camping", "Nature Photography"]
    },
    {
      title: "Music",
      description: "Music is a big part of my life. I enjoy discovering new artists, attending concerts, and occasionally playing piano.",
      icon: "🎵",
      details: ["Guitar", "Piano", "Concert Going", "Music Discovery"]
    }
  ]

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold text-blue-600">My Hobbies & Interests</h2>
      
      <div className="space-y-4">
        {hobbies.map((hobby, index) => (
          <div key={index} className="border border-gray-200 rounded p-4 bg-white">
            <div className="flex items-start gap-3">
              <div className="text-3xl">{hobby.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-2">{hobby.title}</h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  {hobby.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {hobby.details.map((detail, detailIndex) => (
                    <span 
                      key={detailIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
        <h3 className="font-bold text-green-600 mb-2">Work-Life Balance</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          I believe that having diverse interests and hobbies makes me a better developer. 
          These activities help me stay creative, maintain work-life balance, and often 
          provide fresh perspectives that I can apply to my professional work.
        </p>
      </div>
    </div>
  )
}

export default HobbiesWindow

