import {inject} from 'aurelia-framework';
import {DataServices} from './data-services';
@inject(DataServices)
export class Product {
constructor(data) {
        this.data = data;
        this.PRODUCT_SERVICE = 'products';
    }
 newProduct(id){
        this.selectedProduct = {};
        this.selectedProduct.product = "";
        this.selectedProduct.detail = "";
        this.selectedProduct.price = "";
        this.selectedProduct.quantity = "";
        this.selectedProduct.expiryDate = new Date();
        this.selectedProduct.manufacturedDate = new Date();
        this.selectedProduct.status = "Product";
        this.selectedProduct.userid = id;
      }
        async saveProduct() {
        let serverResponse;
        if (this.selectedProduct) {
          if (this.selectedProduct._id) {
            let url = this.PRODUCT_SERVICE + "/" + this.selectedProduct._id;
            serverResponse = await this.data.put(this.selectedProduct, url);
          } else {
            serverResponse = await this.data.post(this.selectedProduct, this.PRODUCT_SERVICE);
          }
          return serverResponse;
    
        }
      }
    async getProducts(userid) {
            let url = this.PRODUCT_SERVICE + '/user/' + userid;
            let response = await this.data.get(url);
            if (!response.error) {
              this.productsArray = response;
            } else {
              this.productsArray = [];
            }
          }
        
        async deleteProduct(id){
            let url = this.PRODUCT_SERVICE + "/" + id;
                await this.data.delete(url);
         
        }
 }