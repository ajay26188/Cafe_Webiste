import React from 'react';
import './Menu.css';

const dailySpecials = [
  { name: 'Pumpkin Spice Latte', price: '€4.50' },
  { name: 'Almond Croissant', price: '€2.80' },
];

const menuItems = [
  {
    category: 'Hot Drinks',
    items: [
      { name: 'Espresso', price: '€2.50' },
      { name: 'Cappuccino', price: '€3.50' },
      { name: 'Latte', price: '€3.80' },
      { name: 'Mocha', price: '€4.00' },
      { name: 'Flat White', price: '€3.70' },
    ],
  },
  {
    category: 'Cold Drinks',
    items: [
      { name: 'Iced Latte', price: '€4.00' },
      { name: 'Iced Mocha', price: '€4.20' },
      { name: 'Iced Tea', price: '€3.00' },
    ],
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Croissant', price: '€2.00' },
      { name: 'Blueberry Muffin', price: '€2.80' },
      { name: 'Bagel with Cream Cheese', price: '€3.20' },
    ],
  },
];

function Menu() {
  return (
    <section className="menu menu-board">
      <h2>Café Aroma Menu</h2>

      <div className="specials">
        <h3>🌟 Daily Specials</h3>
        <ul>
          {dailySpecials.map((item, i) => (
            <li key={i} className="chalkboard-item special">
              <span className="item-name">{item.name}</span>
              <span className="dots"></span>
              <span className="item-price">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {menuItems.map((section, idx) => (
        <div key={idx} className="menu-category">
          <h3>{section.category}</h3>
          <ul className="chalkboard-menu">
            {section.items.map((item, i) => (
              <li key={i} className="chalkboard-item">
                <span className="item-name">{item.name}</span>
                <span className="dots"></span>
                <span className="item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Menu;
