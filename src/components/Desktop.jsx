import React from 'react'
import DesktopIcon from './DesktopIcon'
import myComputerIcon from '../assets/images/My Computer.png'
import workExperienceIcon from '../assets/images/Briefcase.png'
import myProjectsIcon from '../assets/images/Programs.png'
import contactIcon from '../assets/images/Windows Messenger.png'
import myHobbiesIcon from '../assets/images/Solitaire.png'
import Window from './Window'
import {
  AboutMeWindow,
  WorkExperienceWindow,
  ProjectsWindow,
  ContactWindow,
  HobbiesWindow
} from './windows'

const Desktop = ({ openWindows, activeWindow, onOpenWindow, onCloseWindow, onSetActiveWindow }) => {
  const desktopIcons = [
    { id: 'about-me', name: 'About Me', iconSrc: myComputerIcon, window: AboutMeWindow },
    { id: 'work-experience', name: 'Work Experience', iconSrc: workExperienceIcon, window: WorkExperienceWindow },
    { id: 'projects', name: 'My Projects', iconSrc: myProjectsIcon, window: ProjectsWindow },
    { id: 'contact', name: 'Contact Info', iconSrc: contactIcon, window: ContactWindow },
    { id: 'hobbies', name: 'My Hobbies', iconSrc: myHobbiesIcon, window: HobbiesWindow },
  ]

  return (
    <div className="desktop h-full w-full relative overflow-hidden">
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-6">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            name={icon.name}
            icon={icon.icon}
            iconSrc={icon.iconSrc}
            onClick={() => onOpenWindow(icon.id)}
          />
        ))}
      </div>

      {/* Windows */}
      {openWindows.map((windowId) => {
        const icon = desktopIcons.find(i => i.id === windowId)
        if (!icon) return null

        const WindowComponent = icon.window
        return (
          <Window
            key={windowId}
            id={windowId}
            title={icon.name}
            isActive={activeWindow === windowId}
            onClose={() => onCloseWindow(windowId)}
            onActivate={() => onSetActiveWindow(windowId)}
          >
            <WindowComponent />
          </Window>
        )
      })}
    </div>
  )
}

export default Desktop
