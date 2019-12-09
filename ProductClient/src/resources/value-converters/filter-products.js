export class FilterProductsValueConverter {
    toView(products, nofilterProducts) {
      if (!products) return;
      if (nofilterProduct) return products;
      let filteredProducts = [];
      products.forEach(product => {
        if (product.status !== 'Completed') filteredProducts.push(product);
      });
      return filteredProducts;
    }
  }