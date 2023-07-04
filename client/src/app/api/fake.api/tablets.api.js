const tablets = {
    apple: {
        _id: "67rdca3eeb7f6fgeed472353",
        name: "Apple"
    },
    samsung: {
        _id: "67rdca3eeb7f6fgeed47483",
        name: "Samsung"
    },
    huawei: {
        _id: "67rdca3eeb7f6fgeed4744342",
        name: "Huawei"
    },
    blackview: {
        _id: "67rdca3eeb7f6fgeed41e1ee12",
        name: "Blackview"
    },
    honor: {
        _id: "67rdca3eeb7f6fgeed4e13e3df102",
        name: "Honor"
    }
};
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(tablets);
        }, 2000);
    });

export default {
    fetchAll
};
