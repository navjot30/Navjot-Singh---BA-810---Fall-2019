import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Product } from "../resources/data/product-object";

@inject(Product)
export class Products {
    constructor(product) {
        this.product = product;
        this.userObj = JSON.parse(sessionStorage.getItem('userObj'));
        this.statuses = ['Available', 'Out of stock', 'Arriving soon'];
        this.isCheckedCompleted = true;
        // this.showForm = false;
    }
    async attached() {
        await this.getProducts();
    }
    async getProducts() {
        await this.product.getProducts(this.userObj._id);
        this.showForm = false;
    }
    updateProduct(product) {
        this.product.selectedProduct = product;
        this.saveProduct();
    }
    newProduct() {
        this.product.newProduct(this.userObj._id);
        this.showForm = true;
    }
    editProduct(product) {
        this.product.selectedProduct = product;
        this.showForm = true;
    }
    async saveProduct() {
        await this.product.saveProduct()
        this.getProducts();
    }
    async deleteProduct(product) {
        await this.product.deleteProduct(product._id);
        this.getProducts();
    }
    Cancel() {
        this.showForm = false;
    }
}