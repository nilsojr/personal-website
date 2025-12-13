import React, { useState, useEffect } from 'react'

const Taskbar = ({ openWindows, activeWindow, onOpenWindow, onSetActiveWindow }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  const windowNames = {
    'about-me': 'About Me',
    'work-experience': 'Work Experience',
    'projects': 'My Projects',
    'contact': 'Contact Info',
    'hobbies': 'My Hobbies'
  }

  return (
    <div className="taskbar fixed bottom-0 left-0 right-0 z-50">
      {/* Start Button */}
      <button 
        className="start-button"
        onClick={() => {
          // Could add start menu functionality here
          console.log('Start button clicked')
        }}
      >
        <span>🪟</span>
        <span>start</span>
      </button>

      {/* Taskbar Items */}
      <div className="flex-1 flex gap-1 px-2">
        {openWindows.map((windowId) => (
          <button
            key={windowId}
            className={`taskbar-item ${
              activeWindow === windowId ? 'active' : ''
            }`}
            onClick={() => onSetActiveWindow(windowId)}
          >
            {windowNames[windowId] || windowId}
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="system-tray">
        {/* Volume Icon */}
        <div className="tray-icon">🔊</div>
        
        {/* Network Icon */}
        <div className="tray-icon">📶</div>
        
        {/* Clock */}
        <div className="clock">
          <div>{formatTime(currentTime)}</div>
          <div>{formatDate(currentTime)}</div>
        </div>
      </div>
    </div>
  )
}

export default Taskbar
