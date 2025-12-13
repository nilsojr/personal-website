import React, { useState } from 'react'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import './App.css'

function App() {
  const [openWindows, setOpenWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)

  const openWindow = (windowId) => {
    setOpenWindows(prevWindows => {
      if (!prevWindows.includes(windowId)) {
        return [...prevWindows, windowId]
      }
      return prevWindows
    })
    setActiveWindow(windowId)
  }

  const closeWindow = (windowId) => {
    setOpenWindows(openWindows.filter(id => id !== windowId))
    if (activeWindow === windowId) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2] : null)
    }
  }

  const setWindowActive = (windowId) => {
    setActiveWindow(windowId)
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Desktop 
        openWindows={openWindows}
        activeWindow={activeWindow}
        onOpenWindow={openWindow}
        onCloseWindow={closeWindow}
        onSetActiveWindow={setWindowActive}
      />
      <Taskbar 
        openWindows={openWindows}
        activeWindow={activeWindow}
        onOpenWindow={openWindow}
        onSetActiveWindow={setWindowActive}
      />
    </div>
  )
}

export default App
