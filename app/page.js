'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <header className="hero-section">
        <h1 className="hero-title">Smart Meal Planner</h1>
        <p className="hero-subtitle">
          Effortless meal planning, smart recipes, and stress-free shopping.
        </p>
        <div className="cta-buttons">
          <Link href="/meal-planner" className="button primary-button">
            Start Planning
          </Link>
          <Link href="/recipe-search" className="button secondary-button">
            Find Recipes
          </Link>
        </div>
      </header>

      <section className="problem-solution-section">
        <div className="card feature-card">
          <h2>The Problem</h2>
          <p>Struggle with consistent meal planning? Repetitive meals, forgotten ingredients leading to food waste, or last-minute unhealthy choices are common challenges. Deciding what to cook based on available ingredients and dietary preferences can be a time-consuming daily struggle.</p>
        </div>
        <div className="card feature-card">
          <h2>Our Solution</h2>
          <p>Smart Meal Planner helps you efficiently plan your meals for the week, discover new recipes based on ingredients you already have, and generate smart shopping lists. All user-specific data, including custom recipes, meal plans, and ingredient lists, is stored locally in your browser for privacy and offline access.</p>
        </div>
      </section>

      <section className="features-overview">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="card feature-item">
            <h3>Weekly Meal Planner</h3>
            <p>Organize your meals for each day of the week with ease. Drag and drop, or simply type in your planned dishes.</p>
            <Link href="/meal-planner" className="button small-button">Plan Now</Link>
          </div>
          <div className="card feature-item">
            <h3>Smart Recipe Search</h3>
            <p>Discover new recipes using ingredients you already have on hand. Filter by dietary preferences and meal type.</p>
            <Link href="/recipe-search" className="button small-button">Browse Recipes</Link>
          </div>
          <div className="card feature-item">
            <h3>Automated Shopping List</h3>
            <p>Automatically generate a shopping list from your meal plan. Add custom items and mark them as purchased.</p>
            <Link href="/shopping-list" className="button small-button">View List</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
