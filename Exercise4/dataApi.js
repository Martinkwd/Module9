const productModel = require("./model/poduct");

function dataApi() {
  productModel.findAll().then((products) => {
    if (!products.length) {
      fetch(`https://fakestoreapi.com/products`).then((response) =>
        response.json().then((data) => {
          const filtereData = data.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            description: item.description,
            category: item.category,
            image: item.image,
          }));
          productModel.destroy({ where: {}, truncate: true, cascade: true });
          productModel.bulkCreate(filtereData).then(() => {
            console.log("data has been inserted into the database");
          });
        })
      );
    }
  });
}
module.exports = dataApi;
