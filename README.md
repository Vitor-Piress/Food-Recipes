# Food Recipe App - Learning Project

This is a learning project designed to practice modern web development technologies. The project is a food recipe application that demonstrates the implementation of various frontend technologies and best practices.

## 🎯 Project Purpose

This project serves as a hands-on learning experience for:

- **React 19** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **ESLint** - Code quality and consistency

## 🛠️ Technologies Used

### Core Technologies

- **React 19.1.0** - JavaScript library for building user interfaces
- **React Router DOM 7.6.1** - Declarative routing for React applications
- **Tailwind CSS 4.1.7** - Utility-first CSS framework
- **Vite 6.3.5** - Next-generation frontend build tool

### Additional Dependencies

- **Animate.css 4.1.1** - CSS animation library
- **React DOM 19.1.0** - React rendering for web

### Development Tools

- **ESLint 9.25.0** - Code linting and quality assurance
- **TypeScript types** - Type definitions for React components

## 📁 Project Structure

```
front-end/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Card.jsx
│   │   ├── CategoriesCard.jsx
│   │   ├── ChefCards.jsx
│   │   ├── Header.jsx
│   │   └── user-settings-menu/
│   ├── pages/             # Page components
│   │   ├── home.jsx
│   │   ├── login.jsx
│   │   ├── recipe.jsx
│   │   ├── categories.jsx
│   │   ├── chefs.jsx
│   │   └── user.jsx
│   ├── assets/            # Images and static files
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository** (if not already done):

   ```bash
   git clone <repository-url>
   cd Food-Recipes
   ```

2. **Navigate to the frontend directory**:

   ```bash
   cd front-end
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode

To start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

#### Build for Production

To create a production build:

```bash
npm run build
```

#### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

#### Code Linting

To check code quality and consistency:

```bash
npm run lint
```

## 📱 Application Features

The food recipe application includes the following pages and features:

- **Header Component** - Navigation and user menu
- **Home Page** - Landing page with featured content
- **Recipe Page** - Individual recipe details
- **Login Page** - User authentication interface
- **Categories Page** - Browse recipes by category (just view)
- **Chefs Page** - Chef profiles and information (just view)
- **User Page** - User profile and settings (not finished)

## 🎨 Styling

The project uses **Tailwind CSS** for styling, providing:

- Utility-first CSS classes
- Responsive design utilities
- Custom component styling
- Modern design patterns

## 🔧 Development Notes

- The project uses **React 19** with the latest features and optimizations
- **React Router DOM** handles client-side routing between pages
- **Vite** provides fast development server and build process
- **ESLint** ensures code quality and consistency
- **Animate.css** adds smooth animations and transitions

## 📚 Learning Resources

To better understand the technologies used in this project:

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

## 📄 License

This project is for learning purposes only.

---

**Vitor Pires 2025**
