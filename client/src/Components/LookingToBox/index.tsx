import { useState } from "react";
import ScrollBox from "../ScrollBox";
import ListSpotWindow from "../ListSpotWindow";
import classNames from 'classnames';

interface PropsLookingToBox {
    option: number //if 0 then rent, if 1 then offer
}

interface Place {
    placeDistance: number;
    placePriceRate: number;
    placeName: string;
    placeAvailability: string;
}

export default function LookingToBox(props: PropsLookingToBox) {


    const [items, setItems] = useState<Place[]>([
        { placeDistance: 8, placePriceRate: 3, placeName: '10 Norton St, Kingsford NSW 2032', placeAvailability: '09:00 - 16:00' },
        { placeDistance: 6, placePriceRate: 2, placeName: '20 Milford St, Kingsford NSW 2032', placeAvailability: '09:00 - 16:00' },
        { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00' },
        { placeDistance: 12, placePriceRate: 1, placeName: '15 Duke St, Kengiston NSW 2033', placeAvailability: '09:00 - 16:00' }
    ]);

    const [selected, setSelected] = useState(items[0]);

    if (props.option == 0) {
        return (
            <>
                <div className={classNames("rentSpot")}>
                    <ScrollBox items={items} onSelect={(selected: Place, index: number) => {
                        setSelected(selected);
                    }}></ScrollBox>
                </div>

            </>
        );
    }
    return (
        <>
            <ListSpotWindow></ListSpotWindow>
        </>
    );
};