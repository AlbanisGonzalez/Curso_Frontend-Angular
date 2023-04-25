interface IAuthor {
    idAuthor: number,
    firtsName: string,
    dateFrom: Date,
    dateTo: Date | undefined,
    city : string,
    bio : string,
}

let author1: IAuthor = {
    idAuthor : 1,
    firtsName:"Neruda",
    dateFrom: new Date (2000, 1, 1),
    dateTo: undefined,
    city: "Madrid",
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo cons`
}
let author2: IAuthor = {
    idAuthor : 2,
    firtsName:"Eckhart",
    dateFrom: new Date (2000, 1, 1),
    dateTo: new Date(2019, 1, 1)
    city: "Barcelona",
    bio: `Lorem ipsum dolor sit amet`
}