interface Data {
    users: User[];
    spaces: Spots[];
}


interface User {
    name: String;
    email: String;
    password: string;
    id: number;
    //Add more as needed
}

interface Spots {
    xCoords: Number;
    yCoords: Number;
    isEmpty: Boolean;
    cost: Number;
}

let dataStore: Data = {
    users: [],
    spaces: []
}

const getData = (): Data => dataStore;
const setData = (data: Data) => dataStore = data;

export {
    getData,
    setData,
    Spots,
    User, 
    Data
}
