# Dev Stack Builder

Dev Stack Builder is an interactive web platform designed to help developers explore modern tools and curate their custom technology stack. Users can browse technologies across categories, inspect ratings and details, and manage their personal stack in real time.

---

## 🔗 Project Links
- **Live Site:** https://imranhashmi24.github.io/assignment-five/

---

## 🛠️ Technologies Used
- **React.js (TypeScript)**
- **Vite**
- **Tailwind CSS & DaisyUI**
- **React-Toastify**

---

## ✨ Key Features
- **Dynamic Technology Catalog:** Fetches and displays a wide range of developer tools categorized by Frontend, Backend, Database, and more, complete with ratings and badges.
- **Interactive Stack Management:** Add technologies to a dedicated sidebar with one click, prevent duplicate entries, and track total selected items.
- **Instant Item Removal & Clear All:** Remove specific items or clear the entire stack immediately, supported by responsive feedback alerts via `react-toastify`.

---

## 💡 React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets you write HTML-like syntax directly inside JavaScript files, making component structures intuitive, cleaner, and easier to understand.

### 2. What is the difference between props and state?
- **Props:** Data passed down from a parent component to a child component (read-only).
- **State:** Internal data managed within the component that can change over time based on user interactions.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and update dynamic data. In this project, it is used to track the fetched technology list (`technologies`), the loading status (`isLoading`), the selected tools in the stack (`selectedStack`), and the mobile menu open/close state in the navbar.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects, such as data fetching, after a component renders. It was needed here because fetching `technologies.json` is a side effect that shouldn't happen during render — the effect runs once when `TechnologiesContent` mounts, fetches the file, and then updates state with the result (and flips `isLoading` back to false), which triggers a re-render with the real data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React identify which items have changed, been added, or been removed. This ensures efficient DOM updates and prevents unnecessary re-rendering.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements based on specific conditions. In this project, it renders the `EmptyStack` component when no items are selected and shows the active list with a "Remove All" button when items exist.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Passed directly using **props**.
- **Child to Parent:** Passed by sending a **callback function** through props, which the child triggers with data when an event happens.
