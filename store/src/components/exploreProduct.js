const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "POTHOS",
        discription:"Hello",
        price: 4.99,
        image:"https://media.istockphoto.com/id/1320269359/photo/tropical-epipremnum-aureum-marble-queen-pothos-houseplant-in-flower-pot.jpg?s=1024x1024&w=is&k=20&c=8xGnIGfOVy2bcI7ur8-YITlea4RL139e-PJd4DbX950=",
        link:"p1"
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Monstera",
        discription:"Plant",
        price: 9.99,
        image:"https://media.greg.app/cGxhbnQtZGItcGhvdG9zL21vbnN0ZXJhXy5qcGc=?format=pjpeg&optimize=high&auto=webp&precrop=1000:1000,smart&fit=crop&width=1000&height=1000",
        link:"p2"
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Calathea",
        discription:"Home",
        price: 39.99,
        image:"https://media.istockphoto.com/id/1384572545/photo/calathea-freddie-plant-in-modern-interior-house.jpg?s=612x612&w=0&k=20&c=ZK7phTaVn_oM-FQQAWWkpi1AyvAN1p3LhopxgmCojNw=",
        link:"p3"
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Boston Fern",
        discription:"Home",
        price: 39.99,
        image:"https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1597837956/pmmrh50h3rutedl3dhvt.jpg",
        link:""
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Anthurium",
        discription:"Home",
        price: 39.99,
        image:"https://c7.alamy.com/comp/B2C3AB/flamingo-lily-genus-anthurium-plant-in-pot-B2C3AB.jpg",
        link:""
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Dracaena",
        discription:"Home",
        price: 39.99,
        image:"https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto,w_1400/v1651591650/vendor/6834/catalog/product/2/0/20210824101021_file_61256e4d59e7e_61256eb6a3667..jpg",
        link:""
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