const filterSearchProducts = (products = [], searchTerm = '') => {
  console.log(searchTerm);
  console.log(products);
  if (searchTerm === '') return [];

  return products.filter((product) => {
    let arr = product.title
      .split(' ')
      .filter((word) =>
        word.toLocaleLowerCase().includes(searchTerm.trim().toLocaleLowerCase())
      );

    if (arr.length === 0) return false;
    return true;
  });
};

export default filterSearchProducts;
