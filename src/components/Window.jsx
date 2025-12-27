import React, { useRef, useEffect, useState } from 'react'
import interact from 'interactjs'

const Window = ({ id, title, children, isActive, onClose, onActivate }) => {
  const windowRef = useRef(null)
  const [position, setPosition] = useState({ 
    x: (window.innerWidth - 800) / 2, 
    y: (window.innerHeight - 600 - 32) / 2 // Account for taskbar
  })
  const [size, setSize] = useState({ width: 800, height: 600 })
  const [isMaximized, setIsMaximized] = useState(false)
  const [originalPosition, setOriginalPosition] = useState({ 
    x: (window.innerWidth - 800) / 2, 
    y: (window.innerHeight - 600 - 32) / 2 
  })
  const [originalSize, setOriginalSize] = useState({ width: 800, height: 600 })

  useEffect(() => {
    if (!windowRef.current) return

    const element = windowRef.current
    const titleBar = element.querySelector('.title-bar')

    // Only enable dragging and resizing if not maximized
    if (!isMaximized) {
      // Make only the title bar draggable
      if (titleBar) {
        interact(titleBar)
          .draggable({
            listeners: {
              move(event) {
                setPosition(prev => ({
                  x: prev.x + event.dx,
                  y: prev.y + event.dy
                }))
              }
            },
            modifiers: [
              interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
              })
            ]
          })
      }

      // Make the window resizable only from edges
      interact(element)
        .resizable({
          edges: { left: true, right: true, bottom: true, top: true },
          listeners: {
            move(event) {
              setSize(prev => ({
                width: Math.max(400, prev.width + event.deltaRect.width),
                height: Math.max(300, prev.height + event.deltaRect.height)
              }))
              setPosition(prev => ({
                x: prev.x + event.deltaRect.left,
                y: prev.y + event.deltaRect.top
              }))
            }
          },
          modifiers: [
            interact.modifiers.restrictSize({
              min: { width: 400, height: 300 }
            })
          ]
        })
    }

    return () => {
      if (titleBar) {
        interact(titleBar).unset()
      }
      interact(element).unset()
    }
  }, [isMaximized]) // Re-run when maximized state changes

  const handleClick = () => {
    onActivate()
  }

  const handleMaximize = () => {
    if (isMaximized) {
      // Restore to original size and position
      setPosition(originalPosition)
      setSize(originalSize)
      setIsMaximized(false)
    } else {
      // Save current size and position
      setOriginalPosition(position)
      setOriginalSize(size)
      // Maximize to full screen (accounting for taskbar height of 32px)
      setPosition({ x: 0, y: 0 })
      setSize({ 
        width: window.innerWidth, 
        height: window.innerHeight - 32 // Subtract taskbar height
      })
      setIsMaximized(true)
    }
  }

  return (
    <div
      ref={windowRef}
      className={`window absolute ${isActive ? 'z-50' : 'z-40'}`}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height
      }}
      onClick={handleClick}
    >
      {/* Title Bar */}
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={() => {}}></button>
          <button aria-label={isMaximized ? "Restore" : "Maximize"} onClick={handleMaximize}></button>
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>

      {/* Window Content */}
      <div className="window-body" style={{ height: 'calc(100% - 30px)', overflow: 'auto'}}>
        {children}
      </div>
    </div>
  )
}

export default Window
