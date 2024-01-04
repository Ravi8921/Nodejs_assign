const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO product (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  // static deleteById(id) {
  //   return db.execute('SELECT * FROM product WHERE product.id = ?', [id]);
  // }
  static deleteById(id) {
    return db.execute('DELETE FROM product WHERE id = ?', [id])
      .then(result => {
        return result; // Optionally, you can return the deletion result
      })
      .catch(err => {
        throw new Error(`Unable to delete product: ${err}`);
      });
  }
  
  static fetchAll() {
    return db.execute('SELECT * FROM product');
  }
  static fetchAlls() {
    return db.execute('SELECT * FROM product')
      .then(([rows, fields]) => {
        // 'rows' contains the results of the query
        return rows; // Return the fetched products
      })
      .catch(err => {
        // Handle any errors that occur during the fetch
        throw new Error(`Unable to fetch products: ${err}`);
      });
  }
  
  static findById(id) {
    return db.execute('SELECT * FROM product WHERE product.id = ?', [id]);
  }
};
