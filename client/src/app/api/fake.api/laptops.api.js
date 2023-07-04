const laptops = {
    apple: {
        _id: "67rdca3eeb7f6fgeedsdas353",
        name: "Apple"
    },
    samsung: {
        _id: "67rdca3eeb7f6fgefcdc47483",
        name: "Samsung"
    },
    huawei: {
        _id: "67rdca3eeb7f6fgeeddasfve4342",
        name: "Huawei"
    },
    acer: {
        _id: "67rdca3eeb7f6fgcdfewe1ee12",
        name: "Acer"
    },
    honor: {
        _id: "67rdca3eeb7f6fgeeddeffewe3df102",
        name: "Honor"
    }
};
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(laptops);
        }, 2000);
    });

export default {
    fetchAll
};
