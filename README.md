# Smart Meal Planner

Welcome to the Smart Meal Planner! This application helps you efficiently plan your meals for the week, discover new recipes based on ingredients you already have, and generate smart shopping lists. All your data is stored locally in your browser for privacy and offline access.

## Table of Contents

- [Problem](#problem)
- [Solution](#solution)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)

## Problem

Many individuals struggle with consistent meal planning. This often leads to repetitive meals, food waste from forgotten ingredients, or last-minute unhealthy food choices. Deciding what to cook based on available ingredients and dietary preferences can be a time-consuming daily challenge.

## Solution

Smart Meal Planner addresses these issues by providing a streamlined platform to manage your weekly meals. It empowers you to:

*   **Plan Ahead:** Easily organize your meals for each day of the week.
*   **Discover:** Find new and exciting recipes tailored to the ingredients you have on hand.
*   **Optimize:** Generate smart shopping lists directly from your meal plans, reducing waste and saving time.
*   **Privacy First:** All user-specific data (meal plans, recipes, shopping lists) is stored securely in your browser's local storage, ensuring privacy and allowing for offline use.

## Features

*   **Home Page:** An inviting landing page introducing the problem, solution, and key features.
*   **Meal Planner:** A weekly grid interface to add, edit, and view your planned meals.
*   **Recipe Search:** A dynamic search tool to find recipes based on available ingredients (uses mock data).
*   **Shopping List:** An interactive list to add custom items, automatically populate from meal plans, mark items as purchased, and clear completed items.
*   **Local Storage Persistence:** All user data is saved and loaded from local storage.
*   **Stunning UI:** Modern dark theme with vibrant gradient accents, glassmorphic cards, and smooth transitions.
*   **Responsive Design:** Adapts seamlessly to various screen sizes.

## Technology Stack

*   **Next.js 14 (App Router):** For a powerful and modern React framework.
*   **React:** For building interactive user interfaces.
*   **Vanilla CSS:** For all styling, utilizing CSS variables, Flexbox, and Grid for a responsive and visually appealing design.
*   **Client-Side Logic:** Leveraging `useState` and `useEffect` for state management and local storage interactions.

## Setup and Installation

To get the Smart Meal Planner up and running on your local machine, follow these steps:

1.  **Clone the repository (or create the files from the provided JSON):**
    ```bash
    git clone <repository-url> # If available, otherwise manually create files
    cd smart-meal-planner
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

4.  **Build for production (optional):**
    ```bash
    npm run build
    # or
    yarn build
    ```

    This will create an optimized production build of your application.

5.  **Start the production server (optional):**
    ```bash
    npm run start
    # or
    yarn start
    ```
    This will serve the production build on [http://localhost:3000](http://localhost:3000).

## Project Structure

The project follows the Next.js App Router convention:

```
smart-meal-planner/
├── .next/                  # Next.js build output (ignored)
├── node_modules/           # Project dependencies (ignored)
├── public/                 # Static assets
├── app/
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout with navigation
│   ├── page.js             # Home page
│   ├── meal-planner/
│   │   └── page.js         # Meal Planner page
│   ├── recipe-search/
│   │   └── page.js         # Recipe Search page
│   └── shopping-list/
│       └── page.js         # Shopping List page
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── README.md               # Project documentation (this file)
└── .gitignore              # Files/directories to ignore in Git
```
