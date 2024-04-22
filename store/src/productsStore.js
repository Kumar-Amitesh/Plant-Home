// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
    {
        // price_1P7ymASBcDuiMaxazSGhxcPd
        id: "price_1P7ymASBcDuiMaxazSGhxcPd",
        title: "Snake Plant",
        discription:"Hello",
        price: 4.99,
        image:"https://floralmall.in/wp-content/uploads/2023/02/green-snake-plant.jpg",
        link:"p1"
    },
    {
        // price_1P7zXaSBcDuiMaxaVuIW9moq
        id: "price_1P7zXaSBcDuiMaxaVuIW9moq",
        title: "Peace lily",
        discription:"Plant",
        price: 9.99,
        image:"https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/1/5/0/CI_Costa-Farms_Spathiphyllum-Sensation.jpg.rend.hgtvcom.616.616.suffix/1515164846613.jpeg",
        link:"p2"
    },
    {
        // price_1P7zXuSBcDuiMaxaqQ4EYi5K
        id: "price_1P7zXuSBcDuiMaxaqQ4EYi5K",
        title: "BIRD OF PARADISE",
        discription:"Home",
        price: 11.99,
        image:"https://greeneryunlimited.co/cdn/shop/products/Wythe-40-2970.040-WH_Bird-of-Paradise-14.jpg?v=1618949230",
        link:"p3"
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };