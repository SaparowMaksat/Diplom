const smartphones = [
    {
        _id: "67rdca3eeb7f6fgeed471198",
        model: "Apple",
        url: "https://cdn.shopify.com/s/files/1/0506/5421/6368/products/iPhone14ProDeepPurple-4.jpg?v=1678355638",
        price: 39900,
        title: "Apple iPhone 11 64Gb Black",
        year: 2021,
        color: "black"
    },
    {
        _id: "67rdca3eeb7f6fgeed471100",
        model: "Samsung",
        url: "../assets/smartphones/Samsung_Galaxy_S23_Plus.jpg",
        price: 70910,
        title: "Samsung Galaxy S23 Plus",
        year: 2023,
        color: "gray"
    },
    {
        _id: "67rdca3eeb7f6fgeed4711012",
        model: "Xiaomi",
        url: "../assets/smartphones/xiaomi_11.jpeg",
        price: 28490,
        title: "Xiaomi 11T 256Gb+8Gb",
        year: 2022,
        color: "white"
    },
    {
        _id: "67rdca3eeb7f6fgeed471101",
        model: "Realme",
        url: "../assets/smartphones/realme_10.jpeg",
        price: 16790,
        title: "Realme 10 256Gb+8Gb",
        year: 2022,
        color: "black"
    },
    {
        _id: "67rdca3eeb7f6fgeed471102",
        model: "Honor",
        url: "../assets/smartphones/honor_x9a.jpeg",
        price: 24999,
        title: "HONOR X9a 128Gb",
        year: 2023,
        color: "white"
    }
];
export function fetchAll() {
    return smartphones;
}
