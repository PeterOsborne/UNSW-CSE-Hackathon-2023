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

let dataStore: Data = {
    places: []
}

const getData = (): Data => dataStore;
const setData = (data: Data) => dataStore = data;

export {
    getData,
    setData
}
