/**
 * Created by 35107 on 2017/6/22.
 */
import axios from 'axios';

export function getSliders() {
  return axios.get('/api/sliders');
}

export function getHots() {
  return axios.get('/api/hots');
}

export function getBookList() {
  return axios.get('/api/book');
}

export function addBook(book) {
  return axios.post('/api/book', book);
}

export function removeBook(id) {
  return axios.delete('/api/book?id=' + id);
}

export function getOneBook(id) {
  return axios.get('/api/book?id='+id);
}

export function updateBook(book) {
  return axios.put('/api/book',book);
}
