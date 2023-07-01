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
    <div className="scrollbar">
      <div className="flex flex-col bg-white">
        <div>Sort by: </div>
      </div>
      <div className="">
        <ul className=""> {/* Padding of 2 around all the boxes */}

          {props.items.map((item, index) => (
            <li key={index} onClick={() => {

              setSelected(index)
            }}>
              <div className={classNames("p-1", "box-item-cont")} >
                <div className={classNames("pl-6 pt-2 pb-2 pr-6", "box-item", index === selected && "selected")}>
                  <div className="font-bold">
                    {item.placeName}
                  </div>
                  <div>
                    {item.placeDistance} km
                  </div>

                  <div>
                    {item.placePriceRate}
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
