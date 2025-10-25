# Krishna Singh Portfolio

A modern, responsive portfolio website built with React, showcasing projects, skills, and contact information. Features dynamic animations, dark mode toggle, and a clean, professional design inspired by contemporary web trends.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Scroll-Triggered Animations**: Engaging animations using Framer Motion and React Intersection Observer
- **Multi-Page Navigation**: Separate pages for Home, Resume, Works, and Contact
- **Interactive Elements**: Hover effects, 3D transforms, and dynamic gradients
- **Modern UI**: Glassmorphism effects, radial gradients, and advanced CSS animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Intersection Observer**: React Intersection Observer
- **Styling**: CSS3 with custom properties
- **Icons**: Font Awesome (via CDN)
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── profile.webp
│   │   ├── project1.webp
│   │   ├── project2.webp
│   │   └── typing.gif
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Resume.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── projectsData.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ResumePage.jsx
│   │   ├── Works.jsx
│   │   └── ContactPage.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── projects.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   ├── resume.css
│   │   └── themeToggle.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

### Adding New Projects

Edit `src/data/projectsData.js` to add new projects:

```javascript
const projectsData = [
  {
    id: 1,
    title: "New Project",
    description: "Description of the project",
    image: "/assets/new-project.webp",
    link: "https://github.com/username/new-project"
  },
  // ... existing projects
];
```

### Modifying Colors/Themes

Update CSS custom properties in `src/styles/global.css` or individual component stylesheets.

### Changing Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **Projects**: Modify `src/data/projectsData.js` and `src/components/Projects.jsx`
- **Contact Info**: Update `src/components/Contact.jsx`
- **Resume**: Edit `src/components/Resume.jsx`

## 🌟 Key Components

### ThemeContext
Manages global theme state with localStorage persistence.

### Navbar
Sticky navigation with active link highlighting and integrated theme toggle.

### Hero
Animated introduction with typing GIF and scroll-triggered effects.

### Projects
Grid layout with 3D hover effects and backdrop blur.

### Resume
Detailed resume page with staggered animations and glassmorphism design.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Krishna Singh
- Email: [your-email@example.com]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using React and Vite
