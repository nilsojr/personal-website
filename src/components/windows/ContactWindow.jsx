import React from 'react'

const ContactWindow = () => {
  const contactMethods = [
    {
      platform: "Email",
      value: "nilsojr@gmail.com",
      icon: "📧",
      link: "mailto:nilso.baseggio@email.com",
      description: "Best way to reach me for professional inquiries"
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/in/nilso-baseggio-junior",
      iconImage: "src/assets/images/linkedin.png",
      link: "https://www.linkedin.com/in/nilso-baseggio-junior/",
      description: "Connect with me on LinkedIn for professional networking"
    },
    {
      platform: "Portfolio",
      value: "billminder.com.br",
      icon: "🌐",
      link: "https://billminder.com.br",
      description: "Visit my main portfolio website - Angular & .Net"
    },
    {
      platform: "HackerRank",
      value: "hackerank.com/nilsojr",
      iconImage: "src/assets/images/hackerrank.png",
      link: "https://hackerrank.com/profile/nilsojr",
      description: "My HackerRank profile with coding challenges and achievements"
    },
    {
      platform: "GitHub - Main projects",
      value: "github.com/Island-Software",
      iconImage: "src/assets/images/github_black.png",
      link: "https://github.com/Island-Software",
      description: "Check out my code repositories and contributions"
    },
    {
      platform: "GitHub - Miscellaneous",
      value: "github.com/nilsojr",
      iconImage: "src/assets/images/github_black.png",
      link: "https://github.com/nilsojr",
      description: "Check out my code repositories and contributions"
    }
  ]

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold text-blue-600">Contact Information</h2>

      <div className="space-y-3">
        {contactMethods.map((contact, index) => (
          <div key={index} className="flex items-start gap-3 p-3 border border-gray-200 rounded bg-white">
            {contact.icon && <div className="text-2xl">{contact.icon}</div>}
            {contact.iconImage && (
              <img src={contact.iconImage} alt={`${contact.platform} icon`} className="text-2xl w-8" />
            )}
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{contact.platform}</h3>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline block"
              >
                {contact.value}
              </a>
              <p className="text-xs text-gray-600 mt-1">{contact.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-600 mb-2">Let's Connect!</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          I'm always interested in hearing about new opportunities, interesting projects,
          or just having a chat about technology and software development. Feel free to
          reach out through any of the channels above!
        </p>
      </div>

      <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded">
        <h3 className="font-bold text-gray-700 mb-2">Response Time</h3>
        <p className="text-sm text-gray-600">
          I typically respond to emails within 24 hours. For urgent matters,
          feel free to reach out on LinkedIn.
        </p>
      </div>
    </div>
  )
}

export default ContactWindow

