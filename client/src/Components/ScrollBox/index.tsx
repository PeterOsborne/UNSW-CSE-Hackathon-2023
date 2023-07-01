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
    { placeDistance: 12, placePriceRate: 1, placeName: 'place 3' },
    { placeDistance: 12, placePriceRate: 1, placeName: 'place 4' }
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
      <div className="overflow-y-scroll h-80 w-80">
        <p  className="text-blue-500">If tailwind works, this text should be blue</p>
        <ul className="p-3"> // Padding of 2 around all the boxes
          {items.map((item, index) => (
            <li key={index}>
              <div className="pt-2">
                <div className="border-2 border-indigo-600 rounded-sm">
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
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollBox;
