import './index.scss';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface marktype {
  lat: number,
  lng: number,
  type: number
}
interface Place {
  placeDistance: number;
  placePriceRate: number;
  placeName: string;
  placeAvailability: string;
  marker: marktype;
}

interface Props {
  items: Place[],
  onSelect: (selected: Place, index: number) => void
}



const ScrollBox = (props: Props) => {
  const [selected, setSelected] = useState(-1);

  useEffect(() => {

    if (selected >= 0) {
      props.onSelect(props.items[selected], selected)
    }

  }, [selected])

  const [buttonColor, setButtonColor] = useState('grey');

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
      <div className="flex flex-col p-1 shadow pt-2">
        {selected != -1 &&
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
            Book this spot!
          </button>}
      </div>

      <div className="">
        <ul className=""> {/* overflow-y-scroll */}

          {props.items.map((item, index) => (
            <li key={index} onClick={() => {
              setSelected(index)


            }}>
              <div className={classNames("p-1", "box-item-cont")} >
                <div className={classNames("pl-6 pt-2 pb-2 pr-6", "box-item", "drop-shadow-xl", index === selected && "selected")}>
                  <div className="font-bold">
                    {item.placeName}
                  </div>
                  <div>
                    {item.placeDistance} km
                  </div>
                  <div>
                    ${item.placePriceRate}/hour
                  </div>
                  <div>
                    Available: {item.placeAvailability}
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
