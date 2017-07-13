/**
 * Created by 35107 on 2017/6/22.
 */
let http = require('http'),
  fs = require('fs'),
  url = require('url');
let sliders = require('./sliders');

http.createServer((req, res) => {
  let {pathname, query} = url.parse(req.url, true);
  let id = query.id;
  if (pathname === '/api/sliders') {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8;');
    return res.end(JSON.stringify(sliders));
  }
  if (pathname === '/api/hots') {
    read(function (result) {
      res.setHeader('Content-Type', 'text/plain;charset=utf-8;');
      return res.end(JSON.stringify(result.slice(1, 6)));
    })
  }
  if (pathname === '/api/book') {
    switch (req.method) {
      case 'GET':
        read(function (result) {
          if (id) {
            result = result.find(item => item.id == id);
          }
          res.setHeader('Content-Type', 'text/plain;charset=utf-8;');
          res.end(JSON.stringify(result));
        });
        break;
      case 'POST':
        let addStr = '';
        req.on('data', function (chunk) {
          addStr += chunk;
        });
        req.on('end', function () {
          let addBook = JSON.parse(addStr);
          read(function (books) {
            addBook.id = books[books.length - 1].id + 1;
            books.push(addBook);
            write(books, function () {
              res.setHeader('Content-Type', 'text/plain;charset=utf-8;');
              res.end(JSON.stringify(addBook));
            });
          });
        });
        break;
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => item.id != id);
          write(books, function () {
            res.setHeader('Content-Type', 'text/plain;charset=utf-8;');
            res.end(JSON.stringify({}));
          })
        });
        break;
      case 'PUT':
        let updateStr = '';
        req.on('data', function (chunk) {
          updateStr += chunk;
        });
        req.on('end', function () {
          let updateBook = JSON.parse(updateStr);
          read(function (books) {
            books = books.map(item => item.id == updateBook.id ? updateBook : item);
            write(books, function () {
              res.setHeader('Content-Type', 'text/plain;charset=utf-8;');
              res.end(JSON.stringify(updateBook));
            });
          });
        });
        break;
    }
  }


}).listen(4000);


function read(callback) {
  fs.readFile('./book.json', 'utf-8', function (err, result) {
    result = JSON.parse(result);
    callback(result);
  })
}

function write(data, callback) {
  fs.writeFile('./book.json', JSON.stringify(data), callback);
}
