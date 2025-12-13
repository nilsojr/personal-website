import React from 'react'

const DesktopIcon = ({ name, icon, onClick }) => {
  return (
    <div 
      className="desktop-icon"
      onClick={onClick}
      onDoubleClick={onClick}
    >
      <div className="icon">{icon}</div>
      <div className="icon-label">{name}</div>
    </div>
  )
}

export default DesktopIcon
