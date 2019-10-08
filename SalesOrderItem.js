//Create a module that represents a sales order item.  
//It should have the properties, product, price and a function to return the value of the item.

function SalesOrderItem(product, price, quantity) {
    let item = {};
    item.product = product;
    item.price = price;
    item.quantity = quantity;

    item.getPrice = function() {
        return item.price;
    }
    return item;
}

module.exports = SalesOrderItem;