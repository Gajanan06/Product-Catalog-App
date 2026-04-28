# Product Catalog App

A responsive web application that displays a multi-category product catalog with dynamic item details rendering.

---

## Features

- Category-based product listing (Cars, Bikes, Phones, Computers)
- Dynamic product detail page
- Handles different properties for each category using `itemprops`
- Fully responsive design (mobile, tablet, desktop)
- Smooth navigation using React Router

---

## Tech Stack

- React (Vite)
- React Router
- CSS (Custom styling)

---

## Approach

The application reads product data from a JSON file and dynamically groups items by category using JavaScript.

Each product is displayed in a category section on the home page. When a product is clicked, the app navigates to a detail page where all product attributes are rendered dynamically by iterating through the `itemprops` array.

This approach ensures flexibility, allowing different categories to have different specifications without hardcoding fields.

---

## Project Structure

```
src/
 ├── components/
 │     └── Header.jsx
 ├── pages/
 │     ├── Home.jsx
 │     └── ProductDetail.jsx
 ├── data/
 │     └── data.json
 ├── App.jsx
 ├── main.jsx
 ├── index.css
```
---

## Installation & Setup

- git clone https://github.com/Gajanan06/Product-Catalog-App
- cd product-catalog-app
- npm install
- npm run dev

---

## Time Taken

Approximately 4-5 hours to complete including development, debugging, and UI improvements.

---

## Key Highlights

- Dynamic rendering without hardcoding fields
- Clean and reusable component structure
- Responsive and user-friendly UI
- Error handling for missing data

---

## Conclusion

This project demonstrates strong fundamentals in React, dynamic UI rendering, and clean component-based architecture.