import React from 'react'

const DesktopIcon = ({ name, icon, iconSrc, onClick }) => {
  return (
    <div 
      className="desktop-icon"
      onClick={onClick}
      onDoubleClick={onClick}
    >
      <div className="icon">
        <img src={iconSrc} alt={name} className="desktop-icon-img" />
      </div>
      <div className="icon-label">{name}</div>
    </div>
  )
}

export default DesktopIcon
