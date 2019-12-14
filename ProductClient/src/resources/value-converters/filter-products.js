export class FilterProductsValueConverter {
    toView(products, nofilterProducts) {
      if (!products) return;
      if (!nofilterProducts) return products;
      let filteredProducts = [];
      products.forEach(product => {
        if (product.status !== 'Out of stock') filteredProducts.push(product);
      });
      return filteredProducts;
    }
  }