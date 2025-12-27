# Nilso XP - Windows XP Desktop Portfolio

A nostalgic Windows XP-themed personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Authentic Windows XP Look & Feel**: Complete desktop environment with classic blue background, taskbar, and window styling
- **Interactive Desktop Icons**: Click to open different sections of the portfolio
- **Draggable & Resizable Windows**: Built with interact.js for authentic desktop window behavior
- **Real-time Clock**: Live clock in the taskbar showing current time and date
- **Responsive Design**: Works on different screen sizes while maintaining the XP aesthetic

## Portfolio Sections

- **About Me**: Personal information, skills, and background
- **Work Experience**: Professional experience with detailed descriptions
- **My Projects**: Showcase of personal and professional projects with GitHub links
- **Contact Info**: Multiple ways to get in touch (email, LinkedIn, GitHub, etc.)
- **My Hobbies**: Personal interests and activities outside of work

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework with custom Windows XP styling
- **Interact.js**: JavaScript library for drag and drop, resizing, and multi-touch gestures
- **Custom CSS**: Windows XP-specific styling including buttons, windows, and taskbar

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nilsobaseggio/nilso-xp.git
cd nilso-xp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Desktop.jsx          # Main desktop component
│   ├── DesktopIcon.jsx      # Desktop icon component
│   ├── Taskbar.jsx          # Windows XP taskbar
│   ├── Window.jsx           # Draggable/resizable window component
│   └── windows/             # Individual window content components
│       ├── AboutMeWindow.jsx
│       ├── WorkExperienceWindow.jsx
│       ├── ProjectsWindow.jsx
│       ├── ContactWindow.jsx
│       └── HobbiesWindow.jsx
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
├── index.css                # Global styles and Windows XP theming
└── App.css                  # App-specific styles
```

## Customization

### Adding New Windows

1. Create a new component in `src/components/windows/`
2. Add it to the `desktopIcons` array in `Desktop.jsx`
3. Export it from `src/components/windows/index.js`

### Styling

The Windows XP styling is defined in `src/index.css` with custom Tailwind classes. Key styling includes:

- `.xp-button`: Windows XP button styling
- `.xp-window`: Window container styling
- `.xp-taskbar`: Taskbar styling
- `.desktop-bg`: Desktop background gradient

### Window Behavior

Windows can be:
- **Dragged**: Click and drag the title bar
- **Resized**: Drag the edges or corners
- **Minimized**: Click the minimize button (currently just hides the window)
- **Maximized**: Click the maximize button (currently just resizes)
- **Closed**: Click the X button

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: nilsojr@gmail.com
- **LinkedIn**: [linkedin.com/in/nilso-baseggio-junior](https://linkedin.com/in/nilso-baseggio-junior)
- **GitHub**: [github.com/nilsojr](https://github.com/nilsojr)

---

*Built with ❤️ and nostalgia for the golden age of Windows XP*
