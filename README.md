# yara_assignment

This is a dynamic React component that fetches a list of posts from an API and displays them in a responsive grid layout. It also includes lazy loading to fetch more posts as the user scrolls down the page.

## Features

- **Responsive Layout**: The number of visible posts changes based on the screen width (mobile, tablet, desktop).
- **Lazy Loading**: Additional posts are fetched as the user scrolls to the bottom of the page.
- **Error Handling**: Displays error messages if data fetch fails.
- **Loading Indicators**: Shows a loading spinner while posts are being fetched and when more posts are being loaded.

## Technologies used

- React
- TypeScript
- React Router
- Bootstrap

## Project structure

frontend-project/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── postsApi.ts            # API calls (e.g., fetchPosts)
│   ├── assets/
│   │   └── bg.png  
│   │   └── details.png 
│   ├── components/
│   │   └── AboutContent.tsx
│   │   └── Navbar.tsx            # Reusable Navbar component
│   │   └── PostCard.tsx
│   │   └── PostDetail.tsx
│   │   └── PostFetch.tsx
│   ├── hooks/
│   │   └── usePosts.ts            # Custom hook for fetching posts
│   ├── pages/
│   │   ├── Home.tsx               # Home page with posts listing
│   │   ├── Details.tsx            # Details view (if implemented)
│   │   └── About.tsx              # About page
│   ├── types/
│   │   └── post.ts                # TypeScript types for Post
│   ├── components/
│   │   └── PostsList.tsx          # Component to render posts (extracted from Home)
│   ├── App.tsx                    # Root component with routes
│   ├── main.tsx                   # Entry point (Vite) or index.tsx (CRA)
│   └── index.css                  # Global styles
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
  
## Installation

To use this, follow these steps:

### 1. Clone the repository

git clone [GitHub](https://github.com/isharanilangani/yara_assignment)
cd frontend-project

### 2. Installation Steps

npm install axios react-router-dom bootstrap

### 3. Run Project

npm start
