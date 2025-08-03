# Simple Blogging Platform

A clean, minimalist blogging platform built with React and Vite for learning and knowledge sharing purposes. This project demonstrates fundamental web development concepts including CRUD operations, state management, and modern React patterns.

## Features

- ✍️ Create, edit, and delete blog posts
- 📝 Rich text editor with markdown support
- 🏷️ Tag-based categorization
- 🔍 Search and filter functionality
- 📱 Responsive design for all devices
- 💾 Local storage for data persistence
- 🌙 Dark/light theme toggle
- 📊 Reading time estimation
- 📅 Post date management

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3 with CSS Modules
- **State Management:** React Context API + useReducer
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Date Handling:** JavaScript Date API
- **Storage:** Local Storage API

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Generic components (Button, Modal, etc.)
│   ├── blog/           # Blog-specific components
│   └── layout/         # Layout components (Header, Footer, etc.)
├── pages/              # Route-based page components
├── context/            # React Context for state management
├── hooks/              # Custom React hooks
├── utils/              # Helper functions and utilities
├── styles/             # Global styles and CSS modules
└── assets/             # Static assets (images, icons)
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blogging-platform
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

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix auto-fixable ESLint errors

## Usage Guide

### Creating a Blog Post

1. Click the "New Post" button on the homepage
2. Enter your post title and content
3. Add relevant tags (comma-separated)
4. Click "Publish" to save your post

### Managing Posts

- **Edit:** Click the edit icon on any post
- **Delete:** Click the delete icon and confirm
- **Search:** Use the search bar to find posts by title or content
- **Filter:** Click on tags to filter posts by category

### Customization

The platform supports basic theming through CSS custom properties. Modify the root variables in `src/styles/globals.css` to customize colors and typography.

## Learning Objectives

This project covers essential React and modern web development concepts:

- **React Fundamentals:** Components, props, state, and lifecycle
- **Hooks:** useState, useEffect, useContext, useReducer, custom hooks
- **Routing:** Single-page application navigation with React Router
- **State Management:** Context API for global state management
- **Local Storage:** Data persistence in the browser
- **Responsive Design:** Mobile-first CSS approach
- **Code Organization:** Component composition and separation of concerns

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## Development Setup

### Vite Configuration

This project uses Vite with the following plugins:
- `@vitejs/plugin-react` - Provides React support with Babel for Fast Refresh
- Alternative: `@vitejs/plugin-react-swc` - Uses SWC for faster builds

### ESLint Configuration

The project includes ESLint with React-specific rules. For production applications, consider:
- Adding TypeScript support with `typescript-eslint`
- Implementing stricter linting rules
- Adding Prettier for code formatting

To extend ESLint configuration, modify `.eslintrc.js` and consider the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for type-aware linting.

## Contributing

This is an educational project. Feel free to:
- Fork the repository
- Create feature branches
- Submit pull requests with improvements
- Report issues or suggest enhancements

## Common Issues and Solutions

### Posts Not Persisting
- Check browser's local storage settings
- Ensure JavaScript is enabled
- Clear browser cache if experiencing issues

### Styling Issues
- Verify CSS modules are properly imported
- Check for conflicting global styles
- Ensure responsive breakpoints are working

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version compatibility
- Clear `node_modules` and reinstall if needed

## Future Enhancements

Consider implementing these features as learning exercises:
- User authentication and profiles
- Comment system
- Image upload functionality
- Export posts to PDF/markdown
- Backend integration with REST API
- Database storage (replacing local storage)
- Social sharing capabilities
- SEO optimization

## Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## License

This project is created for educational purposes. Feel free to use and modify as needed for learning.

---

**Note:** This is a learning project designed to demonstrate fundamental web development concepts. It uses local storage for simplicity and is not intended for production use without proper backend integration and security considerations.
