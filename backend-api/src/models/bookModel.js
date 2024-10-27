const db = require('../config/db');

const Book = {
  getByCategory: (category, callback) => {
    const query = 'SELECT * FROM SACH WHERE Sach_Ten = ""';
    db.query(query, [category], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};

module.exports = Book;
