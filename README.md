# Portfolio Website

A modern, responsive, and interactive personal portfolio website built with React, TailwindCSS, and Framer Motion.

## Features

- 🌙 **Dark/Light Theme** - Seamless theme switching with smooth transitions
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ✨ **Smooth Animations** - Beautiful animations powered by Framer Motion
- 🎨 **Modern Design** - Clean, minimal, and elegant UI
- 🚀 **Fast Performance** - Built with Vite for optimal performance
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🤖 **AI Chat Assistant** - Interactive chat powered by Gemini API for answering questions about Oliver's experience and work

## Sections

- **Hero** - Welcome section with introduction and call-to-action
- **About** - Personal bio, skills, and experience
- **Projects** - Showcase of featured projects with live demos
- **Contact** - Contact form and social media links
- **Footer** - Additional links and information

## Tech Stack

- **React** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Vite** - Build tool and development server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gemini API key (optional, for chat assistant)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up Gemini API (optional):
   - Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a `.env` file in the root directory
   - Add: `REACT_APP_GEMINI_API_KEY=your_api_key_here`
   - Note: The chat assistant will work with fallback responses even without the API key

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.jsx` - Name, title, and bio
- `src/components/About.jsx` - About section content and skills
- `src/components/Projects.jsx` - Your projects and work
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer content

### Styling

The website uses TailwindCSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles in individual component files

### Theme

The theme system is implemented in `src/contexts/ThemeContext.jsx`. You can:

- Modify the default theme
- Add new theme variants
- Customize theme transition animations

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer
│   └── ThemeToggle.jsx # Theme switcher
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme management
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue or contact me directly.

---

Made with ❤️ and lots of coffee ☕