import { Marker } from "react-leaflet";

interface Data {
    places: Place[];
}

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

let dataStore: Data = {
    places: [
        { placeDistance: 12, placePriceRate: 1, placeName: '23 Rolfe St, Rosebury NSW 2018', placeAvailability: '09:00 - 16:00', marker: { lat: -33.916758, lng: 151.225967, type: 0 } },
        { placeDistance: 2.3, placePriceRate: 3, placeName: 'Someones Home', placeAvailability: '06:00 - 16:00', marker: { lat: -33.516758, lng: 151.225967, type: 0 } }
    ]
}

const getData = (): Data => dataStore;
const setData = (data: Data) => dataStore = data;


export {
    getData,
    setData
}
