import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Smart Meal Planner',
  description: 'Efficiently plan your meals, discover recipes, and generate smart shopping lists.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="site-logo">
              Smart Meal Planner
            </Link>
            <div className="nav-links">
              <Link href="/" className="nav-item">Home</Link>
              <Link href="/meal-planner" className="nav-item">Meal Planner</Link>
              <Link href="/recipe-search" className="nav-item">Recipe Search</Link>
              <Link href="/shopping-list" className="nav-item">Shopping List</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
