/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.css",
    "./src/*.{jsx,ts,js,tsx}",
    "./src/Components/Header.jsx",
    "./src/Components/Blogs.jsx",
    "./src/Components/BookmarksCart.jsx",
    "./src/Components/SingleBlog.jsx",
    "./src/Components/SingleBookmark.jsx",
    "./src/Components//QuestionsAnswers.jsx",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'main': '6fr 3fr',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    }
  },
  plugins: [],
}