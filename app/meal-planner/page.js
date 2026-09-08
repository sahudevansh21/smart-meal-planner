'use client';

import { useState, useEffect } from 'react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealsOfDay = ['Breakfast', 'Lunch', 'Dinner'];

export default function MealPlanner() {
  const [mealPlan, setMealPlan] = useState({}); // { Day: { MealType: 'Dish Name' } }

  useEffect(() => {
    const storedPlan = localStorage.getItem('mealPlan');
    if (storedPlan) {
      setMealPlan(JSON.parse(storedPlan));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  const handleMealChange = (day, mealType, value) => {
    setMealPlan(prevPlan => ({
      ...prevPlan,
      [day]: {
        ...(prevPlan[day] || {}),
        [mealType]: value,
      },
    }));
  };

  const handleRemoveMeal = (day, mealType) => {
    setMealPlan(prevPlan => {
      const newDayPlan = { ...(prevPlan[day] || {}) };
      delete newDayPlan[mealType];
      return {
        ...prevPlan,
        [day]: newDayPlan,
      };
    });
  };

  return (
    <div className="container">
      <h1 className="section-title">Weekly Meal Planner</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'rgba(224,224,224,0.7)' }}>
        Plan your meals for the week. All changes are saved automatically in your browser.
      </p>

      <div className="meal-planner-grid">
        <div className="grid-header"></div>
        {daysOfWeek.map(day => (
          <div key={day} className="grid-header">
            {day}
          </div>
        ))}

        {mealsOfDay.map(mealType => (
          <> 
            <div key={mealType} className="grid-header">
              {mealType}
            </div>
            {daysOfWeek.map(day => {
              const currentMeal = mealPlan[day]?.[mealType] || '';
              return (
                <div key={`${day}-${mealType}`} className="grid-cell">
                  <div className="meal-input-wrapper">
                    <input
                      type="text"
                      className="meal-input"
                      placeholder={`Add ${mealType}`}
                      value={currentMeal}
                      onChange={(e) => handleMealChange(day, mealType, e.target.value)}
                    />
                    {currentMeal && (
                      <div className="meal-item-display">
                        <span>{currentMeal}</span>
                        <button onClick={() => handleRemoveMeal(day, mealType)}>×</button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
}
