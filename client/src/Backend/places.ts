import { getData, setData } from './dataStore'

interface Data {
    places: Place[];
}

interface marktype {
    lat: number,
    lng: number
}

interface Place {
    placeDistance: number;
    placePriceRate: number;
    placeName: string;
    placeAvailability: string;
    marker: marktype;
}

export function createPlace(newPlace: Place) {
    let data: Data = getData();
    data.places.push(newPlace);
    setData(data);
}   

export function getPlaceList(): Place[] {
    let data: Data = getData();
    return data.places;
}