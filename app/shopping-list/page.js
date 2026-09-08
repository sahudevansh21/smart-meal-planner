'use client';

import { useState, useEffect } from 'react';

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const storedItems = localStorage.getItem('shoppingList');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), name: newItem.trim(), purchased: false }]);
      setNewItem('');
    }
  };

  const handleTogglePurchased = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleClearPurchased = () => {
    setItems(items.filter(item => !item.purchased));
  };

  return (
    <div className="container">
      <h1 className="section-title">Shopping List</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'rgba(224,224,224,0.7)' }}>
        Add items you need to buy. Your list saves automatically!
      </p>

      <form onSubmit={handleAddItem} className="shopping-list-form">
        <input
          type="text"
          className="input-field"
          placeholder="Add a new item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="button primary-button">Add Item</button>
      </form>

      <div className="shopping-list-buttons">
        <button onClick={handleClearPurchased} className="button secondary-button">
          Clear Purchased
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {items.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'rgba(224,224,224,0.7)' }}>Your shopping list is empty!</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="shopping-list-item">
              <div className="item-content" onClick={() => handleTogglePurchased(item.id)}>
                <input
                  type="checkbox"
                  checked={item.purchased}
                  onChange={() => handleTogglePurchased(item.id)}
                />
                <span className={`item-name ${item.purchased ? 'purchased' : ''}`}>
                  {item.name}
                </span>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} title="Remove item">×</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
