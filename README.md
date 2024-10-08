# React + TypeScript + Vite Project

This project provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and ESLint rules. It's designed primarily for building landing pages and serves as a collection of reusable components for various React projects and web applications.

## Features

- React with TypeScript support
- Vite for fast development and building
- ESLint for code quality
- React Router for routing
- SEO optimization with react-helmet-async
- Reusable components

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`
4. Delete things you don't need.

## Project Structure

```
src/
├── components/
│   └── ... (reusable components)
├── pages/
│   └── ... (home and 404)
├── App.tsx
└── main.tsx
```

## Routing

This project uses React Router for navigation. Routes are set up using `BrowserRouter`. You can find the route configurations in the `App.tsx` directory.

## SEO

SEO optimization is implemented using `react-helmet-async`. This allows you to dynamically update the document head for each route or component. some sitemap is set up too.

## Contributing

Feel free to contribute to this project by adding more reusable components or improving existing ones. Please follow the established code style and submit a pull request for review.
