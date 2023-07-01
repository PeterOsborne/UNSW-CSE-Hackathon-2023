import './index.scss';
import React, { useState } from 'react';

interface Place {
  placeDistance: number;
  placePriceRate: number;
  placeName: string;
}

const ScrollBox = () => {
  const [items, setItems] = useState<Place[]>([
    { placeDistance: 8, placePriceRate: 3, placeName: 'place 1' },
    { placeDistance: 6, placePriceRate: 2, placeName: 'place 2' },
    { placeDistance: 12, placePriceRate: 1, placeName: 'place 3' }
  ]);

  const addItem = () => {
    const newItem = prompt('Enter an item:');
    if (newItem) {
      setItems([...items, { placeDistance: 0, placePriceRate: 0, placeName: newItem }]);
    }
  };

  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <div className="overflow-y-scroll">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div>
                <strong>placeName:</strong> {item.placeName}
              </div>
              <div>
                <strong>placeDistance:</strong> {item.placeDistance}
              </div>
              <div>
                <strong>placePriceRate:</strong> {item.placePriceRate}
              </div>
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollBox;
