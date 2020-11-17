import * as axios from "axios";

let instance = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes`,
});
export const HarryPotter = {
  getHarryPotter(order = "relevance", page = 0, maxResults = 20) {
    order = order ? order : "relevance";
    page = page !== "" ? page : (page = 0);
    maxResults = maxResults ? maxResults : 20;
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=${maxResults}&orderBy=${order}&projection=full&startIndex=${page}`
    );
  },
};
export const AllBooksMenu = {
  Pushkin(order = "relevance", page = 0, maxResults = 20) {
    order = order ? order : "relevance";
    page = page !== "" ? page : (page = 0);
    maxResults = maxResults ? maxResults : 20;
    return instance.get(
      `?q=pushkin&maxResults=${maxResults}&orderBy=${order}&projection=full&startIndex=${page}`
    );
  },
  Shakespeare(order = "relevance", page = 0, maxResults = 20) {
    order = order ? order : "relevance";
    page = page !== "" ? page : (page = 0);
    maxResults = maxResults ? maxResults : 20;
    return instance.get(
      `?q=Shakespeare&maxResults=${maxResults}&orderBy=${order}&projection=full&startIndex=${page}`
    );
  },
  GameOfThrones(order = "relevance", page = 0, maxResults = 20) {
    order = order ? order : "relevance";
    page = page !== "" ? page : (page = 0);
    maxResults = maxResults ? maxResults : 20;
    return instance.get(
      `?q=game+of+thrones&maxResults=${maxResults}&orderBy=${order}&projection=full&startIndex=${page}`
    );
  },
  Sherlock(order = "relevance", page = 0, maxResults = 20) {
    order = order ? order : "relevance";
    page = page !== "" ? page : (page = 0);
    maxResults = maxResults ? maxResults : 20;
    return instance.get(
      `?q=sherlock&maxResults=${maxResults}&orderBy=${order}&projection=full&startIndex=${page}`
    );
  },
  Search(arr, order = "relevance", page = 0, maxResults = 20) {
    order = order ? order : "relevance";
    page = page !== "" ? page : (page = 0);
    maxResults = maxResults ? maxResults : 20;
    let re = /\s+/;
    let mappedArr = arr.split(re);
    mappedArr = mappedArr.join("+");
    return instance.get(
      `?q=${mappedArr}&maxResults=${maxResults}&orderBy=${order}&projection=full&startIndex=${page}`
    );
  },
};

// export const AllBooks = {
//   getAllBooks(page = 0, maxResults =20) {
//     return axios.get(
//       `https://www.googleapis.com/books/v1/volumes?q=-&maxResults20&startIndex=${page}$maxResults=${maxResults}`
//     );
//   },
// };
