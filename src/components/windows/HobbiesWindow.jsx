import React from 'react'

const HobbiesWindow = () => {
  const hobbies = [
    {
      title: "Photography",
      description: "I love capturing moments and exploring different photography techniques. From landscape to street photography, I enjoy experimenting with composition and lighting.",
      icon: "📸",
      details: ["Digital Photography", "Photo Editing", "Street Photography", "Nature Photography"]
    },
    {
      title: "Gaming",
      description: "Gaming is both a hobby and a way to stay connected with technology trends. I enjoy both indie games and AAA titles, as well as game development.",
      icon: "🎮",
      details: ["PC Gaming", "Game Development", "Indie Games", "Retro Gaming"]
    },
    {
      title: "Reading",
      description: "I'm an avid reader, particularly interested in technology books, science fiction, and personal development. I believe continuous learning is essential.",
      icon: "📚",
      details: ["Tech Books", "Sci-Fi Novels", "Programming", "Biographies"]
    },
    {
      title: "Cooking",
      description: "Cooking is my creative outlet outside of coding. I enjoy experimenting with different cuisines and techniques, especially Italian and Asian dishes.",
      icon: "👨‍🍳",
      details: ["Italian Cuisine", "Asian Cooking", "Baking", "Food Photography"]
    },
    {
      title: "Hiking & Nature",
      description: "Spending time in nature helps me recharge and find inspiration. I enjoy hiking, camping, and exploring new trails and natural landscapes.",
      icon: "🥾",
      details: ["Mountain Hiking", "Camping", "Nature Photography", "Trail Running"]
    },
    {
      title: "Music",
      description: "Music is a big part of my life. I enjoy discovering new artists, attending concerts, and occasionally playing guitar and piano.",
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
      
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="font-bold text-yellow-600 mb-2">Fun Fact</h3>
        <p className="text-sm text-gray-700">
          I once combined my love for photography and coding by creating a web app 
          that helps photographers plan their shoots based on weather and lighting conditions!
        </p>
      </div>
    </div>
  )
}

export default HobbiesWindow

