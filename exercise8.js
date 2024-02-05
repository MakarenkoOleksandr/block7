let categories = [
  { id: 1, catName: "shoes" },
  { id: 2, catName: "hats" },
];
let products = [
  { name: "black shoes", catID: 1 },
  { name: "black hat", catID: 2 },
];

function addNewProduct(productName, categoryName) {
  let msg;
  const category = categories.find((cat) => cat.catName === categoryName);

  if (!category) {
    let categoriesIdx = categories.length + 1;
    categories.push({ id: categoriesIdx, catName: categoryName });
    products.push({ name: productName, catID: categoriesIdx });

    msg = `New category ${categoryName} was created and product ${productName} was added successfully.`;
  } else {
    const existProd = products.find((prod) => prod.name === productName);

    if (existProd) {
      msg = `Product is already there.`;
    } else {
      products.push({ name: productName, catID: category.id });
      msg = `Product ${productName} was added under ${categoryName} category!`;
    }
  }

  return msg;
}

function renameCat(currCatName, newCatName) {
  const categoryIdx = categories.findIndex(
    (cat) => cat.catName === currCatName
  );

  if (categoryIdx !== -1) {
    categories[categoryIdx].catName === newCatName;
    return categories;
  } else return `Category ${currCatName} doesn't exist.`;
}
function displayAll(categoryName) {
  let msg = "";
  if (categoryName) {
    const category = categories.find((cat) => cat.catName === categoryName);
    const product = products.find((prod) => prod.catID === category.id);

    return `Category ${categoryName} contains ${product.name}.`;
  } else {
    categories.forEach((category) => {
      const getProduct = products.filter((prod) => prod.catID === category.id);
      const getPoductName = getProduct.map((prod) => prod.name);
      msg += `Category ${category.catName} contains ${getPoductName}. `;
    });
  }

  return msg;
}
console.log(addNewProduct("yellow hat", "hats"));
console.log(addNewProduct("yellow hat", "hats"));
console.log(addNewProduct("blue jeans", "pants"));
console.log(renameCat("pants", "jeans"));
console.log(renameCat("shirts", "streetwear"));
console.log(displayAll("shoes"));
console.log(displayAll());

module.exports = {
  addNewProduct,
  renameCat,
  displayAll,
  categories,
  products,
};
