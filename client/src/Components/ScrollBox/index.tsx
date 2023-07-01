import './index.scss';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface Place {
  placeDistance: number;
  placePriceRate: number;
  placeName: string;
}
interface Props {
  items: Place[],
  onSelect: (selected: Place, index: number) => void
}



const ScrollBox = (props: Props) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {

    props.onSelect(props.items[selected], selected)
    console.log("i hate this")
  }, [selected])


  // const addItem = () => {
  //   const newItem = prompt('Enter an item:');
  //   if (newItem) {
  //     setItems([...items, { placeDistance: 0, placePriceRate: 0, placeName: newItem }]);
  //   }
  // };

  // const removeItem = (index: number) => {
  //   const updatedItems = [...items];
  //   updatedItems.splice(index, 1);
  //   setItems(updatedItems);
  // };

  return (
    <div className="h-80 w-80">
      <div className="flex flex-col">
        <div>Sort by: </div>
      </div>
      <div className="overflow-y-scroll">
        <ul className="pl-2 pr-2"> {/* Padding of 2 around all the boxes */}

          {props.items.map((item, index) => (
            <li key={index} onClick={() => {

              setSelected(index)
            }}>
              <div className={classNames("pt-2", index === selected && "selected")} >
                <div className="border-2 border-slate-600 rounded-md bg-slate-200">
                  <div>
                    <strong>placeName:</strong> {item.placeName}
                  </div>
                  <div>
                    <strong>placeDistance:</strong> {item.placeDistance}
                  </div>
                  <div>
                    <strong>placePriceRate:</strong> {item.placePriceRate}
                  </div>

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
